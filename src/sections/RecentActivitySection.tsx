import SectionTitle from '../components/SectionTitle';
import { aiBits, meetings, promptathon, resources } from '../data/content';

export default function RecentActivitySection() {
  const latestBit = aiBits[0];
  const latestSession = meetings.find((meeting) => meeting.status === 'upcoming') ?? meetings[0];
  const slidesArchive = resources.find((resource) => resource.title === 'Meeting Slides Archive');
  const weeklyRecaps = resources.find((resource) => resource.title === 'Weekly Recap Notes');
  const openSpotsDetail = promptathon.details.find((detail) => detail.label === 'Open Spots');

  return (
    <section id="recent-activity">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Recent Club Activity"
          title="See what the club has been actively publishing"
          subtitle="From meeting topics to daily explainers, here are real outputs members are already using."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Latest Daily Bit</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{latestBit.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{latestBit.summary}</p>
            <a href="#ai-bits" className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
              Read Daily Bits →
            </a>
          </article>

          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recent Session Topic</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{latestSession.topic}</h3>
            <p className="mt-2 text-sm text-slate-600">{latestSession.note}</p>
            <a href="#meetings" className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
              See meeting details →
            </a>
          </article>

          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Session Materials</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Meeting Slides Archive</h3>
            <p className="mt-2 text-sm text-slate-600">Browse decks from recent sessions and quickly catch up on what we covered.</p>
            {slidesArchive && (
              <a
                href={slidesArchive.href}
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open slide archive →
              </a>
            )}
          </article>

          <article className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Weekly Recaps</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">What members reviewed this week</h3>
            <p className="mt-2 text-sm text-slate-600">
              Read concise recap notes and check live opportunities like {openSpotsDetail?.value ?? promptathon.callout.toLowerCase()}.
            </p>
            {weeklyRecaps && (
              <a
                href={weeklyRecaps.href}
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open recap notes →
              </a>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
