import SectionTitle from '../components/SectionTitle';
import { meetings } from '../data/content';

export default function MeetingsSection() {
  return (
    <section id="meetings">
      <div className="section-shell">
        <SectionTitle eyebrow="Meeting Information" title="Tuesdays in Room 129, after school" subtitle="Schedules may shift based on school events, so check updates in Discord and Classroom each week." />
        <div className="grid gap-4 md:grid-cols-3">
          {meetings.map((meeting) => (
            <article className="card" key={meeting.date}>
              <p className="pill mb-3">{meeting.date}</p>
              <h3 className="font-bold text-slate-900">{meeting.topic}</h3>
              <p className="mt-2 text-sm text-slate-600">{meeting.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
