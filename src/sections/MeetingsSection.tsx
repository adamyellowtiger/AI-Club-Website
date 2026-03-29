import SectionTitle from '../components/SectionTitle';
import { meetings } from '../data/content';

export default function MeetingsSection() {
  const nextMeeting = meetings[0];

  return (
    <section id="meetings">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Meeting Information"
          title="Next meeting in Room 129 after school"
          subtitle="We currently have one confirmed upcoming topic. Check Discord and Google Classroom for schedule updates."
        />
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Upcoming Session
          </span>
          <article className="card">
            <p className="pill mb-3">{nextMeeting.date}</p>
            <h3 className="text-xl font-bold text-slate-900">{nextMeeting.topic}</h3>
            <p className="mt-3 text-slate-600">{nextMeeting.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
