import SectionTitle from '../components/SectionTitle';
import { aboutCards } from '../data/content';
export default function AboutSection() {
    return (<section id="about">
      <div className="section-shell">
        <SectionTitle eyebrow="About the Club" title="AI explained for students, by students" subtitle="We break down what AI is, how it works, and how it shows up in daily life—then we explore it with curiosity and critical thinking."/>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map(function (item) { return (<article key={item.title} className="card">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </article>); })}
        </div>
      </div>
    </section>);
}
