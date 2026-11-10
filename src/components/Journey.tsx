import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { journeySteps } from '@/data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader index="04" label="Learning Journey" title="The journey" />

        <div className="relative">
          <div className="absolute left-0 top-1.5 hidden h-px w-full bg-line md:block" aria-hidden="true" />
          <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
            {journeySteps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.12}>
                  <span className="relative mb-8 flex h-3 w-3" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-crimson animate-pulse-ring" />
                    <span className="relative h-3 w-3 rounded-full bg-crimson" />
                  </span>
                  <p className="mb-3 font-display text-2xl text-muted">0{i + 1}</p>
                  <h3 className="font-display text-3xl leading-tight text-paper">{step.title}</h3>
                  <p className="mt-4 max-w-sm text-base leading-[1.5] text-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
