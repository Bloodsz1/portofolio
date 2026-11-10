import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="Projects"
          title={<>Selected<br />projects</>}
          description="Proyek-proyek yang saya bangun untuk melatih logika pemrograman, struktur data, dan pengelolaan file. Semuanya bisa dilihat langsung di GitHub."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
