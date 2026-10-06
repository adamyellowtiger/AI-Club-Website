import { readRoute } from "../navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  categories,
  phases,
  orderedMeetings,
  meetings,
  completedMeetings,
  currentPhase,
  nextMeeting,
  matchesFilter,
  progressPercent,
  type RoadmapFilter,
  type MeetingCategory,
} from "../data/roadmap";
import { site } from "../data/site";
import Byte from "../graphics/Byte";
import MeetingCard from "./MeetingCard";

const filters: { value: RoadmapFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...Object.entries(categories).map(([value, category]) => ({
    value: value as MeetingCategory,
    label: category.filterLabel,
  })),
];

export default function ProgramRoadmap() {
  const [filter, setFilter] = useState<RoadmapFilter>("all");
  const [openPhases, setOpenPhases] = useState<number[]>([
    currentPhase?.number ?? phases[0].number,
  ]);
  const visibleMeetings = orderedMeetings.filter((meeting) =>
    matchesFilter(meeting, filter),
  );
  const visiblePhases = phases.filter((phase) =>
    visibleMeetings.some((meeting) => meeting.phase === phase.number),
  );
  const allOpen = visiblePhases.every((phase) =>
    openPhases.includes(phase.number),
  );

  useEffect(() => {
    const reveal = () => {
      const hash = readRoute().anchor;
      const meeting = meetings.find((m) => `meeting-${m.number}` === hash);
      const phase = phases.find((p) => `phase-${p.id}` === hash);
      const number = meeting?.phase ?? phase?.number;
      if (number) {
        setFilter("all");
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
    // Also handle a link to the already-selected hash after filtering hid its target.
    const onAnchorClick = (event: MouseEvent) => {
      const target =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (target?.hash && target.hash === window.location.hash) reveal();
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    document.addEventListener("click", onAnchorClick);
    return () => {
      window.removeEventListener("hashchange", reveal);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  function selectFilter(value: RoadmapFilter) {
    setFilter(value);
    setOpenPhases(
      value === "all"
        ? [currentPhase?.number ?? phases[0].number]
        : phases
            .filter((phase) =>
              meetings.some(
                (m) => m.phase === phase.number && matchesFilter(m, value),
              ),
            )
            .map((phase) => phase.number),
    );
  }

  return (
    <section id="program" className="program-region">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The {site.year} program</p>
            <h2>From understanding AI to building it.</h2>
            <p>
              Code real models, investigate failures, and explore where the
              skills lead.
            </p>
            <p className="member-informed">
              Shaped by early member feedback. The program will keep learning
              from you.
            </p>
          </div>
          <Byte pose="pointing" className="roadmap-byte" decorative />
        </div>
        <div className="program-summary">
          <div>
            <strong>
              Learn how modern AI works → code it → test where it fails.
            </strong>
            <p>
              Then connect the skills to real work, ethical questions, and your
              next project.
            </p>
          </div>
          <div className="progress-block">
            <span>
              {completedMeetings.length} / {meetings.length} completed ·{" "}
              {progressPercent}%
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
        <div
          className="roadmap-filters"
          role="group"
          aria-label="Explore meetings by interest"
        >
          {filters.map((item) => (
            <button
              key={item.value}
              aria-pressed={filter === item.value}
              onClick={() => selectFilter(item.value)}
            >
              {item.label}
              <span>
                {meetings.filter((m) => matchesFilter(m, item.value)).length}
              </span>
            </button>
          ))}
        </div>
        <div className="roadmap-toolbar">
          <p aria-live="polite" aria-atomic="true">
            {visibleMeetings.length} meetings in {visiblePhases.length} phases
            {filter !== "all" && " · Includes related topic tags"}
          </p>
          <button
            onClick={() =>
              setOpenPhases((previous) =>
                allOpen
                  ? previous.filter(
                      (n) => !visiblePhases.some((p) => p.number === n),
                    )
                  : [
                      ...new Set([
                        ...previous,
                        ...visiblePhases.map((p) => p.number),
                      ]),
                    ],
              )
            }
          >
            {allOpen ? "Collapse all" : "Expand all phases"}
          </button>
        </div>
        <div className="phase-list">
          {visiblePhases.map((phase) => {
            const phaseMeetings = visibleMeetings.filter(
              (m) => m.phase === phase.number,
            );
            const allPhaseMeetings = orderedMeetings.filter(
              (m) => m.phase === phase.number,
            );
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
                        previous.includes(phase.number)
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
                      {filter === "all"
                        ? `Meetings ${allPhaseMeetings[0].number}–${allPhaseMeetings[allPhaseMeetings.length - 1].number}`
                        : `${phaseMeetings.length} matching`}
                    </span>
                    <ChevronDown
                      className="phase-chevron"
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`phase-content-${phase.number}`}
                  hidden={!open}
                  className="phase-content"
                >
                  <div className="meeting-timeline">
                    {phaseMeetings.map((meeting) => (
                      <MeetingCard key={meeting.number} meeting={meeting} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
