import { ArrowUpRight, CalendarDays, MapPin, Clock } from "lucide-react";
import {
  nextMeeting,
  previousMeeting,
  followingMeeting,
  currentPhase,
} from "../data/roadmap";
import { formatDate, site, siteNotice } from "../data/site";
import MeetingResources from "../components/MeetingResources";
export default function MeetingsSection() {
  return (
    <section id="meetings">
      <div className="section-shell meeting-shell">
        {siteNotice.enabled && (
          <aside className={`site-notice notice-${siteNotice.tone ?? "info"}`}>
            <strong>{siteNotice.label}</strong> {siteNotice.message}
          </aside>
        )}
        <div className="next-meeting">
          <div className="next-context">
            <p className="eyebrow">At the club</p>
            <h2>
              {nextMeeting?.status === "current"
                ? "This week at AI Club"
                : "Up next"}
            </h2>
            <p>{currentPhase?.title ?? "The year in review"}</p>
            <a href="#join">
              Get meeting announcements <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="next-topic">
            {nextMeeting ? (
              <>
                <p className="meeting-meta">
                  Meeting {String(nextMeeting.number).padStart(2, "0")} ·{" "}
                  {nextMeeting.type}
                  <span className="pill">
                    {nextMeeting.status === "current"
                      ? "Current"
                      : nextMeeting.date
                        ? "Upcoming"
                        : "Date TBA"}
                  </span>
                </p>
                <h3>{nextMeeting.title}</h3>
                <p>{nextMeeting.coreIdea ?? nextMeeting.question}</p>
                <div className="next-facts">
                  <span>
                    <CalendarDays />
                    {formatDate(nextMeeting.date)}
                  </span>
                  <span>
                    <MapPin />
                    {site.room}
                  </span>
                  <span>
                    <Clock />
                    {site.time} · {site.duration}
                  </span>
                </div>
                {nextMeeting.leader && <p>Led by {nextMeeting.leader}</p>}
                {nextMeeting.preparation && (
                  <p>Prepare: {nextMeeting.preparation}</p>
                )}
                <MeetingResources meeting={nextMeeting} />
                <a
                  className="text-link"
                  href={`#meeting-${nextMeeting.number}`}
                >
                  Explore this meeting <ArrowUpRight size={16} />
                </a>
              </>
            ) : (
              <>
                <h3>Program complete</h3>
                <p>
                  Revisit the year’s lessons and experiments in the roadmap.
                </p>
                <a className="text-link" href="#program">
                  Explore the program
                </a>
              </>
            )}
          </div>
        </div>
        <div className="meeting-neighbours">
          <span>
            <strong>Previously</strong>{" "}
            {previousMeeting ? (
              <a href={`#meeting-${previousMeeting.number}`}>
                {previousMeeting.title}
              </a>
            ) : (
              "No 2026–27 completions posted yet"
            )}
          </span>
          {followingMeeting && (
            <span>
              <strong>Next topic</strong>{" "}
              <a href={`#meeting-${followingMeeting.number}`}>
                {followingMeeting.title} <ArrowUpRight size={14} />
              </a>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
