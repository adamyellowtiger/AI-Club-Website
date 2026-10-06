export const pages = {
  home: {
    label: "Home",
    title: "Bayview AI Club — Learn. Build. Test.",
    heading: "Bayview AI Club",
    description:
      "Explore AI with Bayview students. Beginner-friendly coding, experiments, and big questions in Room 129.",
  },
  program: {
    label: "Program",
    title: "2026–27 Program | Bayview AI Club",
    heading: "Learn it. Build it. Break it.",
    description:
      "28 meetings. Five connected phases. Explore how AI works, write real code, and test where it fails.",
  },
  meetings: {
    label: "Meetings",
    title: "Meetings | Bayview AI Club",
    heading: "See you at the next one.",
    description:
      "What’s coming up, what we’ve explored, and everything you need before dropping by.",
  },
  "ai-bits": {
    label: "AI Bits",
    title: "Daily Bits of AI | Bayview AI Club",
    heading: "A little curiosity, every day.",
    description:
      "Short explainers, surprising ideas, and questions worth following. Explore the club’s Daily Bits of AI.",
  },
  resources: {
    label: "Resources",
    title: "Resources | Bayview AI Club",
    heading: "Keep your curiosity going.",
    description:
      "Starter guides, useful tools, readings, and materials from previous club sessions.",
  },
  team: {
    label: "Team",
    title: "Our Team | Bayview AI Club",
    heading: "The people behind the curiosity.",
    description:
      "Meet the students and faculty helping Bayview learn, build, and explore AI together.",
  },
  join: {
    label: "Join",
    title: "Join | Bayview AI Club",
    heading: "Bring your questions. Join us.",
    description:
      "All Bayview students are welcome. No experience needed. Room 129 · After school · 20–30 minutes.",
  },
};
export type Page = keyof typeof pages;
export function readRoute(): { page: Page; anchor: string } {
  const hash = window.location.hash.slice(1);
  if (new URLSearchParams(window.location.search).get("view") === "bits")
    return { page: "ai-bits", anchor: hash.startsWith("bit-") ? hash : "" };
  const [candidate, anchor = ""] = hash.replace(/^\//, "").split("/");
  if (Object.prototype.hasOwnProperty.call(pages, candidate))
    return { page: candidate as Page, anchor };
  if (/^(meeting-|phase-)/.test(candidate))
    return { page: "program", anchor: candidate };
  if (candidate === "faq") return { page: "join", anchor: "faq" };
  return { page: "home", anchor: "" };
}
export const routeHref = (page: Page, anchor = "") =>
  `#/${page}${anchor ? `/${anchor}` : ""}`;
