import {
  orderedMeetings,
  completedMeetings,
  nextMeeting,
} from "../data/roadmap";
import { archivedMeetings } from "../data/archive";
import { formatDate } from "../data/site";
import CategoryBadge from "../components/CategoryBadge";
export default function MeetingHistory() {
  const upcoming = orderedMeetings.filter(
    (m) => m.status !== "completed" && m.number !== nextMeeting?.number,
  );
  return (
    <section className="section-shell meeting-history">
      <h2>Coming up in the program</h2>
      <p>
        Planned in program order. Confirmed dates will appear here when
        announced.
      </p>
      <div className="meeting-index">
        {upcoming.map((m) => (
          <a href={`#/program/meeting-${m.number}`} key={m.number}>
            <span className="eyebrow">
              Meeting {String(m.number).padStart(2, "0")} · {formatDate(m.date)}
            </span>
            <h3>{m.title}</h3>
            <CategoryBadge category={m.category} />
            <p>{m.summary}</p>
            <span className="text-link">Explore meeting ↗</span>
          </a>
        ))}
      </div>
      <div className="history-block">
        <h2>2026–27 meeting history</h2>
        <p>
          <a className="text-link" href="#/program/meeting-0">
            Meeting 0 — Kickoff · Presentation ↗
          </a>
        </p>
        {completedMeetings.length ? (
          completedMeetings.map((m) => (
            <p key={m.number}>
              <a className="text-link" href={`#/program/meeting-${m.number}`}>
                {m.title} ↗
              </a>{" "}
              · {formatDate(m.date)}
            </p>
          ))
        ) : (
          <p>
            No completed curriculum meetings have been posted yet. Recaps and materials
            will be linked here as the year unfolds.
          </p>
        )}
      </div>
      <div className="history-block">
        <p className="eyebrow">2025–26</p>
        <h2>From previous sessions</h2>
        <div className="history-list">
          {archivedMeetings.map((m) => (
            <article key={m.id}>
              <h3>{m.topic}</h3>
              <p>{m.note}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="#/resources">
          Browse archived slides and recaps ↗
        </a>
      </div>
    </section>
  );
}
