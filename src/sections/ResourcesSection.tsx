import SectionTitle from '../components/SectionTitle';
import { resources, type ResourceCategory } from '../data/content';

const groupedResources: Array<{
  key: ResourceCategory;
  title: string;
  subtitle: string;
}> = [
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

export default function ResourcesSection() {
  const resourcesByCategory: Record<ResourceCategory, typeof resources> = {
    'start-here': [],
    'keep-learning': [],
    'revisit-sessions': []
  };

  resources.forEach((resource) => {
    resourcesByCategory[resource.category].push(resource);
  });

  return (
    <section id="resources">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Resources"
          title="Practical resources for every stage"
          subtitle="Start with the essentials, keep building your skills, and revisit meeting materials anytime."
        />

        <div className="space-y-6">
          {groupedResources.map((group) => {
            const categoryResources = resourcesByCategory[group.key];

            return (
              <div key={group.key} className="card p-5">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{group.subtitle}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {categoryResources.map((resource) => (
                    <article key={resource.href} className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-base font-semibold text-slate-900">{resource.title}</h4>
                        {resource.featured && <span className="pill">Featured</span>}
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                      >
                        {resource.status === 'coming-soon' ? 'Coming soon' : 'Open resource →'}
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
