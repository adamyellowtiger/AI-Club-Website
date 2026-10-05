import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  BookOpen,
  FlaskConical,
  Star,
} from "lucide-react";
import {
  phases,
  orderedMeetings,
  meetings,
  completedMeetings,
  currentPhase,
  nextMeeting,
  type Meeting,
} from "../data/roadmap";
import { formatDate } from "../data/site";
import Byte from "../graphics/Byte";
import MeetingResources from "./MeetingResources";
const statusLabels = {
  completed: "Completed",
  current: "Current meeting",
  upcoming: "Upcoming",
  tba: "Date TBA",
};
function MeetingCard({ meeting }: { meeting: Meeting }) {
  const fields = [
    ["The idea", meeting.coreIdea],
    ["In practice", meeting.application],
    ["Takeaway", meeting.takeaway],
    ["The question", meeting.question],
    ["The experiment", meeting.experiment],
    ["Change", meeting.variable],
    ["Measure", meeting.measure],
    ["Discuss", meeting.discussion],
    ["Optional math", meeting.optionalMath],
    ["Go further", meeting.extension],
    ["Station A", meeting.stationA],
    ["Station B", meeting.stationB],
    ["Team report", meeting.report],
  ];
  return (
    <article
      id={`meeting-${meeting.number}`}
      className={`meeting-card ${meeting.type} ${meeting.status}`}
    >
      <div className="meeting-meta">
        <span>
          {meeting.type === "theory" ? (
            <BookOpen size={14} />
          ) : (
            <FlaskConical size={14} />
          )}{" "}
          {String(meeting.number).padStart(2, "0")} · {meeting.type}
        </span>
        <span className="meeting-status">{statusLabels[meeting.status]}</span>
      </div>
      <h4>{meeting.title}</h4>
      {meeting.labTier === "signature" && (
        <span className="signature">
          <Star size={13} /> Signature Lab
          {meeting.number === orderedMeetings[orderedMeetings.length - 1].number
            ? " · Year-end showcase"
            : ""}
        </span>
      )}
      <p>{meeting.coreIdea ?? meeting.question}</p>
      <details className="meeting-details">
        <summary>
          Explore meeting <ChevronDown size={16} />
        </summary>
        <div className="detail-body">
          <p className="small">
            {formatDate(meeting.date)}
            {meeting.leader ? ` · Led by ${meeting.leader}` : ""}
          </p>
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
          <MeetingResources meeting={meeting} />
        </div>
      </details>
    </article>
  );
}
export default function ProgramRoadmap() {
  const [openPhases, setOpenPhases] = useState<number[]>([
    currentPhase?.number ?? phases[0].number,
  ]);
  useEffect(() => {
    const reveal = () => {
      const hash = window.location.hash.slice(1);
      const meeting = meetings.find((m) => `meeting-${m.number}` === hash);
      const phase = phases.find((p) => `phase-${p.id}` === hash);
      const number = meeting?.phase ?? phase?.number;
      if (number) {
        setOpenPhases((previous) =>
          previous.includes(number) ? previous : [...previous, number],
        );
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            document.getElementById(hash)?.scrollIntoView({ block: "start" }),
          ),
        );
      }
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  return (
    <section id="program" className="program-region">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The 2026–27 program</p>
            <h2>One idea. Then put it to the test.</h2>
            <p>
              A connected path from your first AI question to your own red-team
              challenge.
            </p>
          </div>
          <Byte pose="pointing" className="roadmap-byte" decorative />
        </div>
        <div className="program-summary">
          <div>
            <strong>Theory meetings explain. Lab meetings test.</strong>
            <p>
              Learn an idea <ArrowRight /> make a prediction <ArrowRight /> test
              it <ArrowRight /> examine evidence
            </p>
          </div>
          <div className="progress-block">
            <span>
              {completedMeetings.length} / {meetings.length} completed
            </span>
            <progress
              value={completedMeetings.length}
              max={meetings.length}
              aria-label="Meetings completed"
            />
            <small>
              {currentPhase
                ? `${nextMeeting?.status === "current" ? "Current" : "Next planned"}: Phase ${currentPhase.number} of ${phases.length}`
                : "Program complete"}
            </small>
          </div>
        </div>
        <div className="roadmap-toolbar">
          <span>Select a phase. Open a meeting to explore.</span>
          <button
            onClick={() =>
              setOpenPhases(
                openPhases.length === phases.length
                  ? []
                  : phases.map((p) => p.number),
              )
            }
          >
            {openPhases.length === phases.length
              ? "Collapse all"
              : "Expand all phases"}
          </button>
        </div>
        <div className="phase-list">
          {phases.map((phase) => {
            const phaseMeetings = orderedMeetings.filter(
              (m) => m.phase === phase.number,
            );
            const theories = phaseMeetings.filter((m) => m.type === "theory");
            const open = openPhases.includes(phase.number);
            return (
              <section
                id={`phase-${phase.id}`}
                key={phase.number}
                className={`phase ${open ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    aria-expanded={open}
                    aria-controls={`phase-content-${phase.number}`}
                    onClick={() =>
                      setOpenPhases((previous) =>
                        open
                          ? previous.filter((n) => n !== phase.number)
                          : [...previous, phase.number],
                      )
                    }
                  >
                    <span className="phase-number">
                      {String(phase.number).padStart(2, "0")}
                    </span>
                    <span className="phase-title">
                      {phase.title}
                      <small>{phase.progression}</small>
                    </span>
                    <span className="phase-range">
                      Meetings {phaseMeetings[0].number}–
                      {phaseMeetings[phaseMeetings.length - 1].number}
                    </span>
                    <ChevronDown className="phase-chevron" size={20} />
                  </button>
                </h3>
                <div
                  id={`phase-content-${phase.number}`}
                  hidden={!open}
                  className="phase-content"
                >
                  {theories.map((theory) => {
                    const lab = phaseMeetings.find(
                      (m) => m.number === theory.number + 1 && m.type === "lab",
                    );
                    return (
                      <div className="meeting-pair" key={theory.number}>
                        <MeetingCard meeting={theory} />
                        <div
                          className="pair-connector"
                          role="img"
                          aria-label="Then test the concept"
                        >
                          <ArrowRight className="pair-right" />
                          <ArrowDown className="pair-down" />
                        </div>
                        {lab && <MeetingCard meeting={lab} />}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
