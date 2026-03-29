// src/sections/ProjectsSection.tsx
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/content';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projects & Initiatives"
          title="Build confidence by making and sharing"
          subtitle="These initiatives help members practice communication, critical thinking, and technical skills."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <p className="font-medium text-slate-700">{project.title}</p>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
