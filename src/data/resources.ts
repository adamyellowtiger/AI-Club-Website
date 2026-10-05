export type ResourceCategory =
  "start-here" | "keep-learning" | "revisit-sessions";

export type Resource = {
  title: string;
  description: string;
  href: string;
  status: "live" | "coming-soon";
  featured: boolean;
  category: ResourceCategory;
};

export const resources: Resource[] = [
  {
    title: "AI Basics Starter Guide",
    description: "Simple glossary and concept map for new members.",
    href: `${import.meta.env.BASE_URL}resources/AI_Basics_Starter_Guide.pdf`,
    status: "live",
    featured: false,
    category: "start-here",
  },
  {
    title: "Meeting Slides Archive",
    description:
      "Browse and download slide decks from recent Bayview AI Club sessions.",
    href: `${import.meta.env.BASE_URL}meeting-slides-archive.html`,
    status: "live",
    featured: true,
    category: "revisit-sessions",
  },
  {
    title: "Weekly Recap Notes",
    description:
      "Read concise recap notes from recent AI Club meetings and revisit key concepts anytime.",
    href: `${import.meta.env.BASE_URL}weekly-recap-notes-archive.html`,
    status: "live",
    featured: false,
    category: "revisit-sessions",
  },
  {
    title: "Useful Tools List",
    description: "Curated free tools for learning, building, and presenting.",
    href: `${import.meta.env.BASE_URL}resources/Useful_Tools_List.pdf`,
    status: "live",
    featured: false,
    category: "keep-learning",
  },
  {
    title: "AI Ethics Reading List",
    description: "Articles and videos to spark thoughtful discussion.",
    href: `${import.meta.env.BASE_URL}resources/AI_Ethics_Reading_List.pdf`,
    status: "live",
    featured: false,
    category: "keep-learning",
  },
  {
    title: "Prompting Cheat Sheet",
    description: "Tips for clearer prompts and better results.",
    href: `${import.meta.env.BASE_URL}resources/Prompting_Cheat_Sheet.pdf`,
    status: "live",
    featured: false,
    category: "start-here",
  },
];
