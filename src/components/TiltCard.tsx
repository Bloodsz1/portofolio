import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Sudut miring maksimum dalam derajat. */
  max?: number;
}

/**
 * Kartu yang miring mengikuti kursor (efek 3D) dengan kilau cahaya tipis.
 * Hanya aktif untuk mouse; mati saat reduced-motion atau animasi dinonaktifkan.
 */
export default function TiltCard({ children, className = '', max = 6 }: TiltCardProps) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareX = useTransform(sx, [0, 1], [0, 100]);
  const glareY = useTransform(sy, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.09), transparent 60%)`;
  const glareOpacity = useMotionValue(0);

  const active = (el: HTMLElement) =>
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !el.closest('[data-motion="off"]');

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !active(event.currentTarget)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{ background: glare, opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
      />
    </motion.div>
  );
}
