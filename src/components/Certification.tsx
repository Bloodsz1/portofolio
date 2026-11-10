import { Award, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { certification } from '@/data/portfolio';

export default function Certification() {
  return (
    <section id="certification" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="05" label="Pendidikan" title="Sertifikasi" />

        <Reveal>
          <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-14">
            <div className="absolute inset-x-8 top-8 h-px bg-line md:inset-x-14 md:top-14" aria-hidden="true" />
            <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-12 md:pt-14">
              <div className="md:col-span-8">
                <p className="mb-5 text-xs font-medium uppercase tracking-label text-muted">{certification.institution}</p>
                <h3 className="font-display text-4xl leading-[1.1] text-paper md:text-5xl">{certification.title}</h3>
              </div>
              <div className="flex flex-col justify-between gap-8 md:col-span-4 md:items-end md:text-right">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-crimson md:ml-auto">
                  <Award size={24} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-label text-muted">Status</p>
                  <p className="mt-2 text-lg text-paper">{certification.status}</p>
                  {certification.verifyUrl && (
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors duration-300 hover:text-crimson"
                    >
                      Verifikasi sertifikat
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
