import SectionTitle from '../components/SectionTitle';
import { meetings, seasonalAnnouncement } from '../data/content';

export default function MeetingsSection() {
  const upcomingMeeting = meetings.find((meeting) => meeting.status === 'upcoming');
  const pastMeetings = meetings.filter((meeting) => meeting.status === 'past');

  return (
    <section id="meetings">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Meeting Schedule"
          title="Meeting timeline and updates"
          subtitle="Revisit recent sessions and check club updates while regular meetings are paused for the summer."
        />
        <div className="mx-auto max-w-3xl space-y-5">
          {upcomingMeeting && (
            <article className="card">
              <span className="mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                Next Meeting
              </span>
              <h3 className="text-xl font-bold text-slate-900">{upcomingMeeting.topic}</h3>
              <p className="mt-3 text-sm font-semibold text-amber-700">{upcomingMeeting.date}</p>
              <p className="mt-3 text-slate-600">{upcomingMeeting.note}</p>
              <p className="mt-3 text-sm font-medium text-blue-700">No prior experience needed.</p>
            </article>
          )}
          {!upcomingMeeting && (
            <article className="card">
              <span className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Summer Pause
              </span>
              <h3 className="text-xl font-bold text-slate-900">{seasonalAnnouncement.title}</h3>
              <p className="mt-3 text-slate-600">{seasonalAnnouncement.message}</p>
            </article>
          )}

          {pastMeetings.length > 0 && (
            <div className="card p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">Recent Sessions</h3>
                <span className="pill">{pastMeetings.length}</span>
              </div>
              <p className="mb-3 text-sm text-slate-600">New topics and slide decks are added over time as meetings continue.</p>
              <div className="space-y-3">
                {pastMeetings.map((meeting) => (
                  <article key={meeting.id} className="rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3">
                    <p className="mt-1 font-semibold text-slate-900">{meeting.topic}</p>
                    <p className="mt-1 text-sm text-slate-600">{meeting.note}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
