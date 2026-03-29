import SectionTitle from '../components/SectionTitle';
import { featureCards } from '../data/content';

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do">
      <div className="section-shell">
        <SectionTitle eyebrow="What We Do" title="Meetings that are active, creative, and useful" subtitle="Every session includes practical learning, collaboration, and space for student ideas." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <Icon className="mb-4 text-blue-600" size={30} />
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
