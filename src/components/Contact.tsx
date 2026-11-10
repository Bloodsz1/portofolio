import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Mail, Video } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import {
  CV_URL,
  EMAIL,
  GITHUB_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  contactCopy,
  images,
} from '@/data/portfolio';

const cardClass =
  'group flex items-center justify-between rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-crimson/60 md:p-9';
const arrowClass =
  'shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard tidak tersedia (mis. konteks tidak aman): tautan mailto tetap berfungsi.
    }
  };

  return (
    <section id="contact" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="06" label="Kontak" title="Mari" accent="terhubung." description={contactCopy} />

        <Reveal className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-line md:h-72">
          <img
            src={images.contact.src}
            alt={images.contact.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-crimson mix-blend-multiply opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
        </Reveal>

        <Reveal className="grid gap-4 md:grid-cols-2">
          <div className="group flex flex-col rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-crimson/60 sm:flex-row sm:items-stretch md:col-span-2">
            <a href={`mailto:${EMAIL}`} className="flex min-w-0 flex-1 items-center gap-5 p-7 md:p-9">
              <Mail size={28} aria-hidden="true" className="shrink-0 text-paper" />
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-label text-muted">Email</span>
                <span className="mt-1 block break-all font-display text-2xl text-paper md:text-3xl">{EMAIL}</span>
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="m-4 inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-crimson hover:text-crimson sm:m-6 sm:self-center"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? 'Tersalin' : 'Salin email'}
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Alamat email disalin ke clipboard' : ''}
            </span>
          </div>

          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <span className="flex items-center gap-5">
              <Github size={28} aria-hidden="true" className="text-paper" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-label text-muted">GitHub</span>
                <span className="mt-1 block font-display text-2xl text-paper md:text-3xl">@Bloodsz1</span>
              </span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" className={arrowClass} />
          </a>

          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <span className="flex items-center gap-5">
              <Video size={28} aria-hidden="true" className="text-paper" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-label text-muted">TikTok</span>
                <span className="mt-1 block font-display text-2xl text-paper md:text-3xl">{TIKTOK_HANDLE}</span>
              </span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" className={arrowClass} />
          </a>

          {CV_URL && (
            <a href={CV_URL} download className={`${cardClass} md:col-span-2`}>
              <span className="flex items-center gap-5">
                <Download size={28} aria-hidden="true" className="text-paper" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-label text-muted">Curriculum Vitae</span>
                  <span className="mt-1 block font-display text-2xl text-paper md:text-3xl">Unduh CV (PDF)</span>
                </span>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" className={arrowClass} />
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
