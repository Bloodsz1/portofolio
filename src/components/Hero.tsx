import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Asterisk, Award, Download, Github, MapPin } from 'lucide-react';
import { CV_URL, GITHUB_URL, NAME, PROFILE_PHOTO, heroCopy, heroStats } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const firstName = (NAME.split(' ').pop() ?? NAME).toUpperCase();

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-clip pt-16">
      {/* Kata raksasa di latar belakang */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[16%] flex select-none justify-center md:top-[14%]"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap bg-gradient-to-b from-crimson/80 via-blood/60 to-transparent bg-clip-text font-display text-[clamp(5rem,23vw,24rem)] leading-[0.85] text-transparent">
          PORTFOLIO
        </span>
      </div>

      {/* Foto profil (opsional): muncul di tengah jika PROFILE_PHOTO diisi */}
      {PROFILE_PHOTO && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center">
          <img
            src={PROFILE_PHOTO.src}
            alt={PROFILE_PHOTO.alt}
            fetchPriority="high"
            className="h-[80%] w-auto max-w-[80vw] object-contain object-bottom"
            style={{
              maskImage: 'linear-gradient(to bottom, black 78%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent)',
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-1 flex-col">
          <motion.div variants={item} className="flex items-start justify-between gap-6 pt-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-label text-coral">{heroCopy.positioning}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-label text-paper/80">
                Python · AI · Otomasi
              </p>
            </div>
            <p className="hidden items-center gap-2 text-xs uppercase tracking-label text-muted sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" aria-hidden="true" />
              Sedang membangun · 2026
            </p>
          </motion.div>

          <div className="grid flex-1 items-end gap-12 pb-10 pt-20 lg:grid-cols-12 lg:pt-24">
            <div className="lg:col-span-6 xl:col-span-5">
              <motion.h1 variants={item} className="leading-none">
                <span className="block -rotate-6 font-script text-5xl normal-case text-paper md:text-6xl">
                  {heroCopy.greeting}
                </span>
                <span className="mt-1 block font-display text-[clamp(4.5rem,13vw,10rem)] leading-[0.88] text-paper">
                  {firstName}
                  <span className="text-crimson">.</span>
                </span>
              </motion.h1>

              <motion.p variants={item} className="mt-8 font-display text-3xl uppercase leading-[1.05] text-coral md:text-4xl">
                {heroCopy.roles[0]}
                <br />
                {heroCopy.roles[1]}
              </motion.p>

              <motion.p variants={item} className="mt-6 max-w-sm text-base leading-[1.65] text-paper/80">
                {heroCopy.description}
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col items-start gap-5">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-10 bg-crimson px-6 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
                >
                  Lihat karya saya
                  <ArrowDown
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-label text-muted">
                  <MapPin size={14} aria-hidden="true" className="text-crimson" />
                  {heroCopy.location}
                </p>
              </motion.div>
            </div>

            <motion.aside
              variants={item}
              aria-label="Sorotan"
              className="lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line bg-surface/60 text-crimson">
                  <Asterisk size={28} aria-hidden="true" />
                </span>
                <p className="text-base leading-snug text-paper">
                  {heroCopy.tagline[0]}
                  <br />
                  {heroCopy.tagline[1]}
                </p>
              </div>

              <ul className="border-t border-line">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="border-b border-line">
                    <a href={stat.href} className="group flex items-center gap-6 py-5">
                      <span className="min-w-[4.5rem] font-display text-6xl leading-none text-crimson md:text-7xl">
                        {stat.value}
                      </span>
                      <span className="flex flex-1 items-center justify-between gap-3 text-[0.7rem] font-medium uppercase leading-snug tracking-label text-muted transition-colors duration-300 group-hover:text-paper">
                        {stat.label}
                        <ArrowUpRight
                          size={14}
                          aria-hidden="true"
                          className="shrink-0 text-crimson opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {CV_URL ? (
                <a
                  href={CV_URL}
                  download
                  className="mt-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-label text-paper transition-colors duration-300 hover:text-crimson"
                >
                  <Download size={16} aria-hidden="true" className="text-crimson" />
                  Unduh CV
                </a>
              ) : (
                <a
                  href="#certification"
                  className="mt-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-label text-paper transition-colors duration-300 hover:text-crimson"
                >
                  <Award size={16} aria-hidden="true" className="text-crimson" />
                  Lihat sertifikat
                </a>
              )}
            </motion.aside>
          </div>

          <motion.div variants={item} className="border-t border-line py-6">
            <div className="flex items-center justify-between gap-4 text-[0.7rem] font-medium uppercase tracking-label text-muted">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-colors duration-300 hover:text-paper"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-crimson text-paper transition-colors duration-300 group-hover:bg-crimson">
                  <Github size={18} aria-hidden="true" />
                </span>
                <span className="text-paper">Lihat GitHub</span>
                <span className="hidden sm:inline">Python / AI</span>
              </a>
              <a
                href="#about"
                className="hidden items-center gap-2 transition-colors duration-300 hover:text-paper md:flex"
              >
                Scroll untuk melihat
                <ArrowDown size={14} aria-hidden="true" className="text-crimson" />
              </a>
              <span className="hidden sm:block">Proyek pilihan / 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
