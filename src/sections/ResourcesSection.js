import SectionTitle from '../components/SectionTitle';
import { resources } from '../data/content';
export default function ResourcesSection() {
    return (<section id="resources">
      <div className="section-shell">
        <SectionTitle eyebrow="Resources" title="Helpful links and learning materials" subtitle="Everything here is editable so student leaders can keep resources current."/>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map(function (item) { return (<a key={item.title} href={item.href} className="card block">
              <h3 className="font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </a>); })}
        </div>
      </div>
    </section>);
}
