import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { exploringItems, techGroups } from '@/data/portfolio';

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="03" label="Tech Stack" title={<>Alat &amp;<br />teknologi</>} />

        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {techGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.05}>
                <h3 className="mb-4 text-xs font-medium uppercase tracking-label text-muted">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech.name}
                      className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                        tech.status === 'studied'
                          ? 'bg-paper text-ink hover:bg-paper/85'
                          : 'border border-dashed border-muted/50 text-paper hover:border-crimson'
                      }`}
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-2xl border border-line bg-surface p-7 md:p-8">
              <div className="mb-6 flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2 text-paper">
                  <span className="h-3 w-3 rounded-full bg-paper" aria-hidden="true" />
                  Sudah dipelajari
                </span>
                <span className="flex items-center gap-2 text-muted">
                  <span className="h-3 w-3 rounded-full border border-dashed border-muted" aria-hidden="true" />
                  Sedang dieksplorasi
                </span>
              </div>

              <p className="mb-4 text-xs font-medium uppercase tracking-label text-crimson">Sedang dipelajari</p>
              <h3 className="font-display text-3xl leading-tight text-paper">Yang sedang saya jelajahi</h3>
              <ul className="mt-6 space-y-4 border-t border-line pt-6">
                {exploringItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-crimson" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
