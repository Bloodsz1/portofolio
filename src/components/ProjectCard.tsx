import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import ProjectCover from '@/components/ProjectCover';
import Reveal from '@/components/Reveal';
import StatusBadge from '@/components/StatusBadge';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-crimson/60 hover:shadow-[0_24px_60px_-24px_rgba(227,43,60,0.45)]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised">
          {project.image ? (
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <ProjectCover title={project.title} tech={project.tech} />
          )}
          <div className="absolute inset-0 bg-crimson mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover:opacity-50" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 hidden h-[2px] bg-crimson shadow-[0_0_18px_4px_rgba(227,43,60,0.7)] group-hover:block group-hover:animate-scan" aria-hidden="true" />
          <div className="absolute left-4 top-4">
            <span className="block rounded-lg bg-ink/80 px-3 py-1.5 font-display text-3xl leading-none text-paper backdrop-blur-sm">
              {project.number}
            </span>
          </div>
          {project.status !== 'selesai' && (
            <StatusBadge status={project.status} className="absolute right-4 top-4 bg-ink/80 backdrop-blur-sm" />
          )}
          <span className="absolute bottom-4 left-5 rounded-full bg-ink/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-label text-paper backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="font-display text-3xl leading-tight text-paper">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.summary}</p>

          {project.features.length > 0 && (
            <ul className="mt-5 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-paper/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>

          {(project.repoUrl || project.demoUrl) && (
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors duration-300 hover:text-crimson"
                >
                  <Github size={16} aria-hidden="true" />
                  Lihat di GitHub
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">: {project.title}</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors duration-300 hover:text-crimson"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Lihat demo
                  <span className="sr-only">: {project.title}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
