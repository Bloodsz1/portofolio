import { ArrowUpRight, Github, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { EMAIL, GITHUB_URL, contactCopy, images } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="06" label="Contact" title={<>Let&apos;s<br />connect</>} description={contactCopy} />

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
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-crimson/60 md:p-9"
          >
            <span className="flex items-center gap-5">
              <Github size={28} aria-hidden="true" className="text-paper" />
              <span>
                <span className="block text-xs font-medium uppercase tracking-label text-muted">GitHub</span>
                <span className="mt-1 block font-display text-2xl text-paper md:text-3xl">@Bloodsz1</span>
              </span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson" />
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-crimson/60 md:p-9"
          >
            <span className="flex items-center gap-5">
              <Mail size={28} aria-hidden="true" className="text-paper" />
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-label text-muted">Email</span>
                <span className="mt-1 block break-all font-display text-2xl text-paper md:text-3xl">{EMAIL}</span>
              </span>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
