import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/content';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-shell">
        <SectionTitle eyebrow="Projects & Initiatives" title="Build confidence by making and sharing" subtitle="These initiatives help members practice communication, critical thinking, and technical creativity." />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article className="card" key={project}><p className="font-medium text-slate-700">{project}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
