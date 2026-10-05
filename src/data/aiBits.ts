export type AIBit = {
  id: string;
  title: string;
  label?: string;
  date: string;
  summary: string;
  displayCaption?: string;
  imageSrc?: string;
  imageAlt?: string;
  supportingImages?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  tags: string[];
  body: string[];
};

export const aiBits: AIBit[] = [
  {
    id: "what-happens-inside-an-ai-model",
    title: "What Happens Inside an AI Model?",
    label: "Daily Bit of AI",
    date: "2026-07-16",
    summary:
      "Interpretability helps researchers understand which patterns, features, or internal steps influenced an AI model’s output.",
    imageSrc: `${import.meta.env.BASE_URL}daily-bits/daily bit of ai 20260716.png`,
    imageAlt:
      "Byte examining the inside of an AI model to understand its features, patterns, and decision process.",
    tags: ["AI Interpretability", "Transparency", "AI Safety"],
    body: [
      "AI models can give useful answers, but it is not always clear how they reached them. Interpretability is the study of understanding what happens inside an AI system, such as which patterns, features, or internal steps influenced its output. This helps researchers find mistakes, improve safety, and build more trustworthy AI.",
      "Imagine an AI says a math solution is incorrect. A more interpretable system should help show which part of the student’s reasoning affected the judgment, instead of only giving a final label. This could make AI feedback more useful because students can see where their thinking went wrong.",
    ],
  },
  {
    id: "can-ai-work-as-a-team",
    title: "Can AI Work as a Team?",
    label: "Daily Bit of AI",
    date: "2026-07-15",
    summary:
      "Multi-agent AI systems use several specialized AI agents that collaborate on different roles or parts of a larger task.",
    displayCaption:
      "Several specialized AI agents can collaborate on one larger task.",
    tags: ["Multi-Agent AI", "Teamwork", "Planning"],
    body: [
      "Multi-agent AI systems use several AI agents that each handle different roles or parts of a task. One agent might research information, another might check calculations, and another might organize the final answer. This can improve performance, but the agents must communicate clearly or they may repeat work, disagree, or pass along mistakes.",
      "Imagine using AI to plan a school fundraiser. One agent could research possible activities, another could estimate costs, and a third could create the schedule. A final agent could review the plan and flag problems before it is presented to the club.",
    ],
  },
  {
    id: "when-ai-uses-tools",
    title: "When AI Uses Tools",
    label: "Daily Bit of AI",
    date: "2026-07-12",
    summary:
      "AI agents can use tools such as search, calculators, calendars, code editors, and files to complete tasks more accurately.",
    displayCaption:
      "Daily Bit of AI for July 12, 2026: how AI agents use tools to plan, check their work, and create better answers.",
    tags: ["AI Agents", "Tools", "Real-World Use"],
    body: [
      "Some AI systems do more than just answer questions. They can use tools, such as search, calculators, calendars, code editors, or files, to complete tasks more accurately. This is one reason AI agents are powerful: they can plan steps, use the right tool, check the result, and then continue.",
      "Imagine asking an AI to plan a study schedule. A basic chatbot might only give advice from memory. An AI agent could check your calendar, calculate available study time, organize tasks by deadline, and then create a realistic daily plan.",
    ],
  },
];
