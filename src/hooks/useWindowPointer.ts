import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

/**
 * Posisi kursor yang dinormalisasi ke -0.5 … 0.5 (0 = tengah layar).
 * Tidak bergerak di layar sentuh, saat `prefers-reduced-motion`, atau saat tombol
 * "Nonaktifkan animasi" aktif (wrapper App memakai data-motion="off").
 */
export function useWindowPointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onMove = (event: PointerEvent) => {
      if (!fine.matches || reduce.matches || document.querySelector('[data-motion="off"]')) {
        x.set(0);
        y.set(0);
        return;
      }
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return { x, y };
}
