import { Sparkles } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import StatusBadge from '@/components/StatusBadge';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const current = projects.filter((project) => project.status !== 'rencana');
  const planned = projects.filter((project) => project.status === 'rencana');

  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="Proyek"
          title="Proyek" accent="pilihan."
          description="Proyek-proyek yang saya bangun untuk melatih logika pemrograman, struktur data, dan pengelolaan file. Semuanya bisa dilihat langsung di GitHub."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {current.map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i * 0.1} />
          ))}
        </div>

        {planned.map((project) => (
          <Reveal key={project.number} className="mt-6">
            <article className="grid items-center gap-8 rounded-2xl border border-dashed border-muted/40 bg-surface/50 p-7 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <div className="mb-5 flex flex-wrap items-center gap-4">
                  <span className="font-display text-4xl leading-none text-muted">{project.number}</span>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="flex items-center gap-3 font-display text-3xl leading-tight text-paper">
                  <Sparkles size={22} aria-hidden="true" className="shrink-0 text-crimson" />
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{project.summary}</p>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-5 md:justify-end" aria-label="Teknologi yang direncanakan">
                {project.tech.map((tech) => (
                  <li key={tech} className="rounded-full border border-dashed border-muted/50 px-3 py-1 text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
