import type { CSSProperties } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { backgroundLogos } from '@/data/portfolio';
import { useWindowPointer } from '@/hooks/useWindowPointer';

interface Slot {
  position: string;
  size: string;
  rotate: string;
  duration: string;
  delay: string;
  /** Seberapa jauh logo bergeser mengikuti kursor (px). Makin besar = terasa makin dekat. */
  depth: number;
}

/** Posisi tiap logo (dipakai berurutan sesuai daftar `backgroundLogos`). */
const slots: Slot[] = [
  { position: 'right-[3%] top-[13%]', size: 'w-[clamp(110px,26vmin,340px)]', rotate: '8deg', duration: '11s', delay: '0s', depth: 34 },
  { position: 'left-[30%] bottom-[4%]', size: 'w-[clamp(90px,20vmin,260px)]', rotate: '-8deg', duration: '13s', delay: '-4s', depth: 26 },
  { position: 'left-[2%] top-[36%]', size: 'w-[clamp(80px,16vmin,210px)]', rotate: '6deg', duration: '12s', delay: '-7s', depth: 22 },
  { position: 'right-[22%] bottom-[18%]', size: 'w-[clamp(70px,13vmin,170px)]', rotate: '-5deg', duration: '14s', delay: '-2s', depth: 18 },
  { position: 'left-[14%] top-[8%]', size: 'w-[clamp(70px,14vmin,180px)]', rotate: '-9deg', duration: '12.5s', delay: '-5s', depth: 28 },
  { position: 'right-[3%] bottom-[6%]', size: 'w-[clamp(70px,15vmin,190px)]', rotate: '7deg', duration: '15s', delay: '-9s', depth: 20 },
];

function Logo({ src, slot, px, py }: { src: string; slot: Slot; px: MotionValue<number>; py: MotionValue<number> }) {
  const x = useTransform(px, [-0.5, 0.5], [slot.depth, -slot.depth]);
  const y = useTransform(py, [-0.5, 0.5], [slot.depth, -slot.depth]);
  return (
    <motion.div style={{ x, y }} className={`absolute ${slot.position} ${slot.size}`}>
      <img
        src={src}
        alt=""
        width={512}
        height={512}
        loading="lazy"
        decoding="async"
        className="h-auto w-full animate-float select-none opacity-[0.13] drop-shadow-[0_0_40px_rgba(227,43,60,0.25)] md:opacity-[0.2]"
        style={
          {
            '--r': slot.rotate,
            animationDuration: slot.duration,
            animationDelay: slot.delay,
          } as CSSProperties
        }
      />
    </motion.div>
  );
}

/**
 * Logo yang melayang pelan di belakang seluruh halaman dan bergeser tipis mengikuti kursor
 * (efek kedalaman). Dekoratif (aria-hidden); animasinya ikut mati saat tombol "Nonaktifkan animasi" dipakai.
 */
export default function FloatingLogos() {
  const { x, y } = useWindowPointer();
  const px = useSpring(x, { stiffness: 50, damping: 18 });
  const py = useSpring(y, { stiffness: 50, damping: 18 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {backgroundLogos.slice(0, slots.length).map((logo, i) => (
        <Logo key={logo.name} src={logo.src} slot={slots[i]} px={px} py={py} />
      ))}
    </div>
  );
}
