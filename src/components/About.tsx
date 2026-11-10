import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { NAME, PROFILE_PHOTO, aboutParagraphs, heroCopy } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeader index="01" label="Tentang" title="Sedikit" accent="tentang saya." />
          <Reveal delay={0.2} className="relative mt-4 max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-crimson animate-block-in" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-raised">
              {PROFILE_PHOTO ? (
                <img
                  src={PROFILE_PHOTO.src}
                  alt={PROFILE_PHOTO.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              ) : (
                <div className="flex h-full w-full flex-col justify-between p-8">
                  <span className="text-xs font-medium uppercase tracking-label text-muted">{heroCopy.location}</span>
                  <div>
                    <p className="font-display text-[7rem] leading-none text-paper md:text-[9rem]">
                      AF<span className="text-crimson">.</span>
                    </p>
                    <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                      {NAME}
                      <span className="mt-1 block text-paper/80">{heroCopy.positioning}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
        <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-6">
          {aboutParagraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className={i === 0 ? 'text-xl leading-[1.5] text-paper md:text-2xl' : 'text-base leading-[1.5] text-muted md:text-lg'}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
