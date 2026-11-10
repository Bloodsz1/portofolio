import { useState } from 'react';
import { ArrowUpRight, Wheat } from 'lucide-react';
import CertificateModal from '@/components/CertificateModal';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { certificates } from '@/data/portfolio';
import type { Certificate } from '@/data/portfolio';

const rowClass = 'grid w-full grid-cols-[2rem_1fr_auto] items-center gap-4 px-2 py-7 text-left md:gap-6';

export default function Certification() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const withFile = certificates.find((certificate) => certificate.file !== null) ?? null;
  const withLink = certificates.find((certificate) => certificate.verifyUrl !== null) ?? null;

  return (
    <section id="certification" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="05" label="Pendidikan" title="Belajar" accent="terbukti." />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3 text-crimson" aria-hidden="true">
              <Wheat size={64} strokeWidth={1.25} className="-rotate-12" />
              <span className="font-display text-[8rem] leading-none text-paper md:text-[10rem]">
                {certificates.length}
              </span>
              <Wheat size={64} strokeWidth={1.25} className="rotate-12 -scale-x-100" />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-label text-crimson">
              Sertifikat diterima
            </p>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Fondasi pemrograman saya dimulai dari kursus CS50P milik Harvard.
            </p>

            {withFile ? (
              <button
                type="button"
                onClick={() => setSelected(withFile)}
                aria-haspopup="dialog"
                className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-label text-paper transition-colors duration-300 hover:text-crimson"
              >
                Lihat sertifikat
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            ) : (
              withLink && (
                <a
                  href={withLink.verifyUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-label text-paper transition-colors duration-300 hover:text-crimson"
                >
                  Verifikasi sertifikat
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )
            )}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-label text-muted">
              <span>Sertifikat terpilih</span>
              <span>Harvard · CS50</span>
            </div>
            <ul className="border-t border-line">
              {certificates.map((certificate) => {
                const content = (
                  <>
                    <span className="text-xs font-medium text-crimson">{certificate.number}</span>
                    <span className="min-w-0">
                      <span className="block text-xl leading-snug text-paper md:text-2xl">{certificate.title}</span>
                      <span className="mt-1 block text-sm text-muted">{certificate.issuer}</span>
                      {!certificate.file && !certificate.verifyUrl && (
                        <span className="mt-2 block text-xs text-muted/70">Berkas sertifikat segera ditambahkan</span>
                      )}
                    </span>
                    <span className="flex items-center gap-3 font-display text-4xl leading-none text-crimson md:text-6xl">
                      {certificate.badge}
                      {(certificate.file || certificate.verifyUrl) && (
                        <ArrowUpRight
                          size={20}
                          aria-hidden="true"
                          className="text-paper/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                        />
                      )}
                    </span>
                  </>
                );

                return (
                  <li key={certificate.number} className="border-b border-line">
                    {certificate.file ? (
                      <button
                        type="button"
                        onClick={() => setSelected(certificate)}
                        aria-haspopup="dialog"
                        className={`group transition-colors duration-300 hover:bg-surface/70 ${rowClass}`}
                      >
                        {content}
                      </button>
                    ) : certificate.verifyUrl ? (
                      <a
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group transition-colors duration-300 hover:bg-surface/70 ${rowClass}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={rowClass}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
