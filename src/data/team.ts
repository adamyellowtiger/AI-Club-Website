export type TeamMember = {
  name: string;
  role: string;
  responsibilities: string[];
  tier: "leadership" | "senior" | "executive" | "support";
  order: number;
};
export const team: TeamMember[] = [
  {
    name: "Adam Fan",
    role: "Co-President",
    responsibilities: [
      "Club direction, curriculum and semester planning.",
      "Leads the theory program and coordinates the executive team.",
    ],
    tier: "leadership",
    order: 1,
  },
  {
    name: "Leo Wang",
    role: "Co-President",
    responsibilities: [
      "Club direction, experiments and technical demonstrations.",
      "Leads the lab program and coordinates the executive team.",
    ],
    tier: "leadership",
    order: 2,
  },
  {
    name: "Albert Yang",
    role: "Vice-President & Head of Teaching",
    responsibilities: [
      "Supports club leadership, teaching quality, lesson development, and beginner learning across theory and labs.",
    ],
    tier: "senior",
    order: 3,
  },
  {
    name: "Claire Bilodeau",
    role: "Outreach Executive",
    responsibilities: [
      "School outreach, recruitment, member communication, and event announcements.",
    ],
    tier: "executive",
    order: 4,
  },
  {
    name: "Connie Cao",
    role: "Instagram Manager & PR",
    responsibilities: [
      "Instagram content, public communication, promotion, and documenting club activity.",
    ],
    tier: "executive",
    order: 5,
  },
  {
    name: "Kiyan",
    role: "Graphic Design & Branding",
    responsibilities: [
      "Club graphics, promotional materials, visual identity, and the Byte mascot system.",
    ],
    tier: "executive",
    order: 6,
  },
  {
    name: "Muhammed",
    role: "Assistant Instagram Manager · Exec-in-Training",
    responsibilities: [
      "Assists with Instagram and communications while learning executive workflows.",
    ],
    tier: "support",
    order: 7,
  },
];
export const facultyAdvisor = "Ms. Teseo";
