import SectionTitle from '../components/SectionTitle';
import { meetings } from '../data/content';

export default function MeetingsSection() {
  const { confirmedMeetings, tentativeMeetings } = meetings.reduce<{
    confirmedMeetings: typeof meetings;
    tentativeMeetings: typeof meetings;
  }>(
    (acc, meeting) => {
      if (meeting.date === 'TBD') {
        acc.tentativeMeetings.push(meeting);
      } else {
        acc.confirmedMeetings.push(meeting);
      }
      return acc;
    },
    { confirmedMeetings: [], tentativeMeetings: [] }
  );
  const featuredMeeting = confirmedMeetings[0] ?? meetings[0];
  const remainingConfirmed = confirmedMeetings.slice(1);
  const featuredIsConfirmed = featuredMeeting?.date !== 'TBD';
  const remainingTentative = featuredIsConfirmed
    ? tentativeMeetings
    : tentativeMeetings.filter((meeting) => meeting.id !== featuredMeeting?.id);
  const tentativePillClassName =
    'inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600';
  const tentativeFeaturedPillClassName =
    'mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700';
  const featuredLabelClassName = featuredIsConfirmed ? 'pill mb-3' : tentativeFeaturedPillClassName;
  const featuredDateBaseClassName = 'mt-3 text-sm font-semibold';
  const featuredDateClassName = `${featuredDateBaseClassName} ${featuredIsConfirmed ? 'text-blue-700' : 'text-amber-700'}`;
  const featuredDateText = featuredIsConfirmed ? featuredMeeting?.date : 'Date TBD';

  return (
    <section id="meetings">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Meeting Schedule"
          title="Plan your next AI Club session"
          subtitle="Check what is confirmed next, what follows after, and which topics are still being finalized."
        />
        <div className="mx-auto max-w-3xl space-y-5">
          {featuredMeeting && (
            <article className="card">
              <span className={featuredLabelClassName}>
                Next Meeting
              </span>
              <h3 className="text-xl font-bold text-slate-900">{featuredMeeting.topic}</h3>
              <p className={featuredDateClassName}>{featuredDateText}</p>
              <p className="mt-3 text-slate-600">{featuredMeeting.note}</p>
            </article>
          )}

          {remainingConfirmed.length > 0 && (
            <div className="card p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">Upcoming Meetings</h3>
                <span className="pill">{remainingConfirmed.length}</span>
              </div>
              <div className="space-y-3">
                {remainingConfirmed.map((meeting) => (
                  <article key={meeting.id} className="rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3">
                    <p className="text-sm font-semibold text-blue-700">{meeting.date}</p>
                    <p className="mt-1 font-semibold text-slate-900">{meeting.topic}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {remainingTentative.length > 0 && (
            <div className="card p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">Topics in the Pipeline</h3>
                <span className={tentativePillClassName}>
                  Coming Soon
                </span>
              </div>
              <div className="space-y-3">
                {remainingTentative.map((meeting) => (
                  <article key={meeting.id} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">TBD</p>
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
