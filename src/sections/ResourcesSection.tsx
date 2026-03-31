import SectionTitle from '../components/SectionTitle';
import { resources } from '../data/content';

export default function ResourcesSection() {
  return (
    <section id="resources">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Resources"
          title="Helpful links and learning materials"
          subtitle="Use these guides, archives, and handouts to review meetings and keep learning between sessions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) =>
            item.status === 'coming-soon' ? (
              <div key={item.title} className="card block cursor-not-allowed border-dashed border-slate-300 bg-slate-50/70 opacity-85" aria-disabled="true">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Coming soon</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ) : (
              <a key={item.title} href={item.href} className="card block" target="_blank" rel="noopener noreferrer">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
