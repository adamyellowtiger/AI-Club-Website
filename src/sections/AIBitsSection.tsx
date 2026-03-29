import SectionTitle from '../components/SectionTitle';
import { featuredBit, supportBits } from '../data/content';
import ByteBot from '../graphics/ByteBot';

export default function AIBitsSection() {
  return (
    <section id="ai-bits">
      <div className="section-shell">
        <SectionTitle eyebrow="Daily Bit of AI" title="Our signature mini-learning feed" subtitle="Short, approachable explainers make AI ideas easier to understand and discuss." />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card">
            <div className="mb-3 flex flex-wrap gap-2">
              {featuredBit.tags.map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{featuredBit.title}</h3>
            <p className="mt-3 text-slate-600">{featuredBit.summary}</p>
            <a href="#" className="mt-6 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">View More</a>
          </article>
          <div className="space-y-4">
            <div className="card flex items-center justify-center"><ByteBot className="h-36 w-36" pose="point" /></div>
            {supportBits.map((bit) => (
              <article key={bit.title} className="card">
                <span className="pill mb-3">{bit.tag}</span>
                <h4 className="font-bold text-slate-900">{bit.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{bit.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
