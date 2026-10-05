import { site } from "../data/site";
import { team, facultyAdvisor } from "../data/team";
export default function TeamSection() {
  return (
    <section id="team">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Meet your {site.year} team</p>
            <h2>Student-led. Built together.</h2>
            <p>
              The people behind the lessons, experiments, and club community.
            </p>
          </div>
        </div>
        <div className="team-grid">
          {[...team]
            .sort((a, b) => a.order - b.order)
            .map((person) => (
              <article
                key={person.name}
                className={`team-member tier-${person.tier}`}
              >
                {person.tier === "leadership" && (
                  <span className="initials" aria-hidden="true">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
                <div>
                  <p className="team-role">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p className="team-responsibilities">
                    {person.responsibilities.join(" ")}
                  </p>
                </div>
              </article>
            ))}
        </div>
        <p className="faculty">
          Faculty Advisor <span>— {facultyAdvisor}</span>
        </p>
      </div>
    </section>
  );
}
