import SectionTitle from '../components/SectionTitle';
import { team } from '../data/content';

export default function TeamSection() {
  return (
    <section id="team">
      <div className="section-shell">
        <SectionTitle eyebrow="Leadership" title="Student leadership team" subtitle="Meet the members helping guide club meetings, learning, and outreach." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                {person.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm font-semibold text-blue-700">{person.role}</p>
              <p className="mt-2 text-sm text-slate-600">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
