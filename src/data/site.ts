export const site = {
  year: "2026–27",
  school: "Bayview Secondary School",
  room: "Room 129",
  time: "After school",
  duration: "20–30 minutes",
  classroomCode: "7b6loaop",
};
export type SiteNotice = {
  enabled: boolean;
  label?: string;
  message: string;
  tone?: "info" | "important" | "event";
};
export const siteNotice: SiteNotice = {
  enabled: false,
  label: "Club update",
  message: "",
  tone: "info",
};
export const navLinks = [
  { label: "Program", href: "#program" },
  { label: "Meetings", href: "#meetings" },
  { label: "AI Bits", href: "#ai-bits" },
  { label: "Resources", href: "#resources" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
];
export const channels = [
  {
    name: "Discord",
    label: "Join Discord",
    href: "https://discord.gg/RKta2VYbrH",
    description:
      "Your club conversation. Meeting reminders, questions, and ideas between sessions.",
  },
  {
    name: "Google Classroom",
    label: "Join Google Classroom",
    href: "https://classroom.google.com/c/ODI1MTYzNTE5OTU2?cjc=7b6loaop",
    description:
      "Official school announcements, lesson materials, and shared resources.",
  },
  {
    name: "Instagram",
    label: "Follow @bss_aiclub",
    href: "https://www.instagram.com/bss_aiclub/",
    description:
      "Daily Bits, club highlights, and updates to share with friends.",
  },
];
export function formatDate(date?: string) {
  return date
    ? new Intl.DateTimeFormat("en-CA", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${date}T12:00:00Z`))
    : "Date TBA";
}
export function resourceUrl(href: string) {
  return /^(https?:|#)/.test(href)
    ? href
    : `${import.meta.env.BASE_URL}${href.replace(/^\//, "")}`;
}
