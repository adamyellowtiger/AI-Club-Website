import SectionTitle from '../components/SectionTitle';
import { promptathon } from '../data/content';
import ByteBot from '../graphics/ByteBot';

export default function PromptathonSection() {
  return (
    <section id="promptathon">
      <div className="section-shell">
        <SectionTitle eyebrow="Prompt-A-Thon" title={promptathon.title} subtitle={promptathon.subtitle} />

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {promptathon.details.map((detail) => (
            <article key={detail.label} className="card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{detail.label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{detail.value}</p>
            </article>
          ))}
        </div>

        <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900 shadow-soft">
          <p className="font-semibold">{promptathon.callout}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="card">
            <h3 className="text-lg font-bold text-slate-900">What is Prompt-A-Thon?</h3>
            <p className="mt-3 text-slate-600">{promptathon.overview}</p>
            <a href="#join" className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Ask about joining our team
            </a>
          </article>

          <article className="card">
            <h3 className="text-lg font-bold text-slate-900">What you'll practice</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              {promptathon.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-center rounded-xl border border-blue-100 bg-white p-3">
              <ByteBot className="h-24 w-24" pose="point" />
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="card">
            <h3 className="text-lg font-bold text-slate-900">What to bring</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {promptathon.bringItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-bold text-slate-900">How the day works</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {promptathon.format.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-bold text-slate-900">Important notes</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {promptathon.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
