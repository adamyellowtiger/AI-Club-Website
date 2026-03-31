import SectionTitle from '../components/SectionTitle';
import { joinLinks } from '../data/content';
export default function JoinSection() {
    return (<section id="join">
      <div className="section-shell">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-soft md:p-12">
          <SectionTitle eyebrow="Join Us" title="Ready to learn AI with us?" subtitle="Join our official channels to get meeting reminders, resources, and updates."/>
          <div className="mt-6 flex flex-wrap gap-3">
            {joinLinks.map(function (link) { return (<a key={link.label} href={link.href} className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50" target="_blank" rel="noreferrer">
                {link.label}
              </a>); })}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-300/60 bg-white/10 p-4 text-sm leading-relaxed text-blue-50">
            <p>Use a YRDSB gapps account to join Google Classroom.</p>
            <p className="mt-1">If the link does not work, use class code: 7b6loaop.</p>
          </div>
        </div>
      </div>
    </section>);
}
