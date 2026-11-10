import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  /** Baris kedua judul, ditampilkan dengan warna aksen. */
  accent?: string;
  description?: string;
}

export default function SectionHeader({ index, label, title, accent, description }: SectionHeaderProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-label text-muted">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
          className="h-[2px] w-12 origin-left bg-crimson shadow-[0_0_12px_rgba(227,43,60,0.6)]"
          aria-hidden="true"
        />
        <span>{index}</span>
        <span className="text-line">/</span>
        <span>{label}</span>
      </div>
      <h2 className="font-display text-5xl leading-[0.95] text-paper sm:text-6xl lg:text-7xl xl:text-8xl">
        {title}
        {accent && (
          <>
            <br />
            <span className="text-coral">{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
