export type ArchivedMeeting = {
  id: string;
  date: string;
  topic: string;
  note: string;
  status: "upcoming" | "past";
};

export const archivedMeetings: ArchivedMeeting[] = [
  {
    id: "ai-in-games",
    date: "Wednesday, May 13 • After school • Room 129",
    topic: "AI in Games",
    note: "We explored how AI makes decisions in games, how characters find paths, and how reinforcement learning connects to modern game strategy.",
    status: "past",
  },
  {
    id: "ai-creativity",
    date: "Previous Session",
    topic: "AI Creativity",
    note: "Explored how AI can support creative work, including brainstorming, image generation, writing, design, music, and the limits of machine creativity.",
    status: "past",
  },
  {
    id: "ai-agents",
    date: "Previous Session",
    topic: "AI Agents",
    note: "We explored what AI agents are, how they differ from ordinary chatbots, and where they are actually useful.",
    status: "past",
  },
  {
    id: "mechanistic-interpretability",
    date: "Previous Session",
    topic: "Mechanistic Interpretability",
    note: "A practical look at whether we can inspect model internals, what tools help, and where limits still remain.",
    status: "past",
  },
  {
    id: "embeddings-in-20-minutes",
    date: "Previous Session",
    topic: "Embeddings in 20 Minutes",
    note: "How meaning becomes vectors, why similarity search works, and where embeddings appear in real AI products.",
    status: "past",
  },
];
