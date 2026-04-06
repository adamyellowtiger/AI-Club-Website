import SectionTitle from '../components/SectionTitle';
import { resources } from '../data/content';

export default function ResourcesSection() {
  const resourcesByCategory = {
    'start-here': resources.filter((item) => item.category === 'start-here'),
    'keep-learning': resources.filter((item) => item.category === 'keep-learning'),
    'revisit-sessions': resources.filter((item) => item.category === 'revisit-sessions')
  };

  const groupedResources = [
    {
      key: 'start-here',
      title: 'Start Here',
      subtitle: 'Get oriented fast with beginner-friendly essentials.'
    },
    {
      key: 'keep-learning',
      title: 'Keep Learning',
      subtitle: 'Go deeper with practical tools and thoughtful AI context.'
    },
    {
      key: 'revisit-sessions',
      title: 'Revisit Club Sessions',
      subtitle: 'Review what the club has actually covered and shared.'
    }
  ];

  return (
    <section id="resources">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Resources"
          title="Follow a clear learning path"
          subtitle="Start with fundamentals, keep building your skills, and revisit club sessions when you need a refresher."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {groupedResources.map((group) => (
            <article key={group.key} className="card p-5">
              <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{group.subtitle}</p>
              <div className="mt-4 space-y-3">
                {resourcesByCategory[group.key].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`block rounded-xl border px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50/40 ${
                      item.featured ? 'border-blue-200 bg-blue-50/30' : 'border-blue-100 bg-white'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <span className="text-sm font-semibold text-blue-700">Open →</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-600">
          <p>
            New member tip: start with <span className="font-semibold text-slate-900">Start Here</span>, then use{' '}
            <span className="font-semibold text-slate-900">Revisit Club Sessions</span> after each meeting to keep concepts fresh.
          </p>
        </div>
      </div>
    </section>
  );
}
