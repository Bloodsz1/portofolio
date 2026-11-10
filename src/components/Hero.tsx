import { motion } from 'framer-motion';
import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { CV_URL, NAME, heroCopy, heroFacts, images } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-clip pt-28 pb-16 md:pb-24">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          width={940}
          height={650}
          fetchPriority="high"
          className="h-full w-full animate-bleed-in object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-crimson mix-blend-multiply opacity-30" />
        <div className="absolute inset-0 origin-right animate-wipe-out bg-crimson" />
      </div>

      <TechnicalComposition />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-label text-muted">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center" aria-hidden="true">
                <span className="absolute h-full w-full rounded-full bg-crimson animate-pulse-ring" />
                <span className="h-2.5 w-2.5 rounded-full bg-crimson" />
              </span>
              <MapPin size={14} aria-hidden="true" className="text-crimson" />
              {heroCopy.location}
            </span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            <span>{heroCopy.positioning}</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-[3.25rem] leading-[0.98] tracking-tight text-paper sm:text-7xl lg:text-[5rem] xl:text-[6rem]">
            {NAME.toUpperCase()}
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-2xl font-display text-3xl leading-[1.15] text-paper/90 sm:text-4xl">
            {heroCopy.headline}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-[1.5] text-muted md:text-lg">
            {heroCopy.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-crimson hover:text-paper hover:shadow-[0_0_48px_-6px_rgba(227,43,60,0.9)]"
            >
              Lihat Proyek Saya
              <ArrowDownRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-crimson hover:text-crimson"
            >
              Tentang Saya
            </a>
            {CV_URL && (
              <a
                href={CV_URL}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-paper"
              >
                <Download size={16} aria-hidden="true" />
                Unduh CV
              </a>
            )}
          </motion.div>

          <motion.dl variants={item} className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block font-display text-2xl leading-none text-paper md:text-3xl">{fact.value}</span>
                  <span className="mt-2 block text-xs leading-snug text-muted" aria-hidden="true">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}

function TechnicalComposition() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute right-[-12%] top-[18%] h-[90vmin] w-[90vmin] text-paper/15 md:right-[-6%] md:top-[12%]"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="140" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="90" className="text-crimson" stroke="currentColor" />
        <circle cx="200" cy="200" r="40" />
        <line x1="200" y1="0" x2="200" y2="400" />
        <line x1="0" y1="200" x2="400" y2="200" />
      </svg>
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
    </div>
  );
}
