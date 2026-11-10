import type { CSSProperties } from 'react';
import { backgroundLogos } from '@/data/portfolio';

interface Slot {
  position: string;
  size: string;
  rotate: string;
  duration: string;
  delay: string;
}

/** Posisi tiap logo (dipakai berurutan sesuai daftar `backgroundLogos`). */
const slots: Slot[] = [
  { position: 'right-[3%] top-[13%]', size: 'w-[clamp(110px,26vmin,340px)]', rotate: '8deg', duration: '11s', delay: '0s' },
  { position: 'left-[30%] bottom-[4%]', size: 'w-[clamp(90px,20vmin,260px)]', rotate: '-8deg', duration: '13s', delay: '-4s' },
  { position: 'left-[2%] top-[36%]', size: 'w-[clamp(80px,16vmin,210px)]', rotate: '6deg', duration: '12s', delay: '-7s' },
  { position: 'right-[22%] bottom-[18%]', size: 'w-[clamp(70px,13vmin,170px)]', rotate: '-5deg', duration: '14s', delay: '-2s' },
];

/**
 * Logo teknologi yang melayang pelan di belakang seluruh halaman.
 * Dekoratif (aria-hidden); animasinya ikut mati saat tombol "Nonaktifkan animasi" dipakai.
 */
export default function FloatingLogos() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {backgroundLogos.slice(0, slots.length).map((logo, i) => {
        const slot = slots[i];
        return (
          <img
            key={logo.name}
            src={logo.src}
            alt=""
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            className={`absolute h-auto animate-float select-none opacity-[0.13] drop-shadow-[0_0_40px_rgba(227,43,60,0.25)] md:opacity-[0.2] ${slot.position} ${slot.size}`}
            style={
              {
                '--r': slot.rotate,
                animationDuration: slot.duration,
                animationDelay: slot.delay,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
