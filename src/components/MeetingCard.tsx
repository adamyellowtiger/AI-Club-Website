import { ChevronDown, ArrowUpRight, Star } from "lucide-react";
import type { Meeting } from "../data/roadmap";
import { formatDate } from "../data/site";
import CategoryBadge from "./CategoryBadge";
import MeetingResources from "./MeetingResources";

const statusLabels = {
  completed: "Completed",
  current: "Current meeting",
  upcoming: "Upcoming",
  tba: "Date TBA",
};

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  const fields = [
    ["Goal", meeting.goal],
    ["Activity", meeting.activity],
    ["Measure", meeting.measure],
    ["Discuss", meeting.discussion],
    ["Takeaway", meeting.takeaway],
    ["Team report", meeting.report],
  ];
  return (
    <article
      id={`meeting-${meeting.number}`}
      className={`meeting-card ${meeting.status}`}
      aria-current={meeting.status === "current" ? "step" : undefined}
    >
      <div className="timeline-number" aria-hidden="true">
        {String(meeting.number).padStart(2, "0")}
      </div>
      <div className="meeting-content">
        <div className="meeting-meta">
          <span className="meeting-identity">
            Meeting {String(meeting.number).padStart(2, "0")}{" "}
            <CategoryBadge category={meeting.category} />
          </span>
          <span className="meeting-status">
            {statusLabels[meeting.status]}
            {meeting.date && (
              <>
                {" "}
                ·{" "}
                <time dateTime={meeting.date}>{formatDate(meeting.date)}</time>
              </>
            )}
          </span>
        </div>
        <h4>{meeting.title}</h4>
        <p className="meeting-summary">{meeting.summary}</p>
        {meeting.highlight && (
          <span className="signature">
            <Star size={13} aria-hidden="true" />
            {meeting.highlight}
          </span>
        )}
        {meeting.careerConnection && (
          <p className="career-connection">
            <ArrowUpRight size={15} aria-hidden="true" />
            <span>
              <strong>Where this shows up</strong>
              {meeting.careerConnection}
            </span>
          </p>
        )}
        <details className="meeting-details">
          <summary>
            Explore meeting {meeting.number}
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div className="detail-body">
            {meeting.leader && (
              <p>
                <strong>Led by</strong>
                {meeting.leader}
              </p>
            )}
            {meeting.preparation && (
              <p>
                <strong>Bring / prepare</strong>
                {meeting.preparation}
              </p>
            )}
            {fields
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <p key={label}>
                  <strong>{label}</strong>
                  {value}
                </p>
              ))}
            <div className="tag-row" aria-label="Meeting topics">
              {meeting.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {meeting.optionalMath && (
              <details className="math-corner">
                <summary>
                  Optional math — not required for this meeting
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div>
                  <code>{meeting.optionalMath}</code>
                  {meeting.mathExplanation && <p>{meeting.mathExplanation}</p>}
                </div>
              </details>
            )}
            <MeetingResources meeting={meeting} />
          </div>
        </details>
      </div>
    </article>
  );
}
