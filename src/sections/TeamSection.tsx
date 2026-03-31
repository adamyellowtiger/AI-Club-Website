import SectionTitle from '../components/SectionTitle';
import { team } from '../data/content';

export default function TeamSection() {
  return (
    <section id="team">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Leadership"
          title="Student leadership team"
          subtitle="Meet the students responsible for planning meetings, supporting learning, and coordinating outreach."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                {person.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm font-semibold text-blue-700">{person.role}</p>
              <p className="mt-3 text-sm text-slate-600">{person.summary}</p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                <span className="font-semibold text-slate-700">{person.focusLabel}:</span> {person.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
