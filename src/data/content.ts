import {
  Binary,
  BrainCircuit,
  Code2,
  Compass,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Meetings', href: '#meetings' },
  { label: 'AI Bits', href: '#ai-bits' },
  { label: 'Resources', href: '#resources' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join', href: '#join' }
];
export const aboutCards = [
  { title: 'Learn', text: 'Understand AI basics, from data to models, with beginner-friendly explainers and visual demos.' },
  { title: 'Discuss', text: 'Talk about AI in school, society, and careers while practicing thoughtful and respectful dialogue.' },
  { title: 'Build', text: 'Try mini projects and prompt experiments to see how ideas become hands-on outcomes.' },
  { title: 'Explore', text: 'Connect AI concepts to real-life tools in healthcare, art, science, sports, and daily life.' }
];

export const featureCards = [
  { icon: Sparkles, title: 'Daily Bit of AI', text: 'One clear idea each day that helps everyone build confidence with AI concepts.' },
  { icon: Users, title: 'Interactive Meetings', text: 'Live demos, quick polls, and student-led moments keep sessions energetic and social.' },
  { icon: BrainCircuit, title: 'Beginner Lessons', text: 'No experience required—every lesson starts with practical examples and plain language.' },
  { icon: ShieldCheck, title: 'Ethics + Real World', text: 'Explore fairness, bias, privacy, and how AI decisions can affect communities.' },
  { icon: WandSparkles, title: 'Prompt Experiments', text: 'Test prompts, compare outputs, and learn what makes instructions useful and reliable.' },
  { icon: Code2, title: 'Mini Coding Demos', text: 'Short coding walkthroughs show the mechanics behind simple AI-powered projects.' },
  { icon: Compass, title: 'Club Challenges', text: 'Fun monthly challenges encourage teamwork, creativity, and problem-solving.' },
  { icon: Binary, title: 'Resource Sharing', text: 'Members collect guides, videos, and tools so everyone can keep learning outside meetings.' }
];

export const seasonalAnnouncement = {
  badge: 'Summer Update',
  title: 'See you next fall!',
  message:
    'Bayview AI Club meetings are paused for the summer. We’ll resume in the 2026–2027 school year with new lessons, demos, and projects.'
};

export type Meeting = {
  id: string;
  date: string;
  topic: string;
  note: string;
  status: 'upcoming' | 'past';
};

export const meetings: Meeting[] = [
  {
    id: 'ai-in-games',
    date: 'Wednesday, May 13 • After school • Room 129',
    topic: 'AI in Games',
    note: 'We explored how AI makes decisions in games, how characters find paths, and how reinforcement learning connects to modern game strategy.',
    status: 'past'
  },
  {
    id: 'ai-creativity',
    date: 'Previous Session',
    topic: 'AI Creativity',
    note: 'Explored how AI can support creative work, including brainstorming, image generation, writing, design, music, and the limits of machine creativity.',
    status: 'past'
  },
  {
    id: 'ai-agents',
    date: 'Previous Session',
    topic: 'AI Agents',
    note: 'We explored what AI agents are, how they differ from ordinary chatbots, and where they are actually useful.',
    status: 'past'
  },
  {
    id: 'mechanistic-interpretability',
    date: 'Previous Session',
    topic: 'Mechanistic Interpretability',
    note: 'A practical look at whether we can inspect model internals, what tools help, and where limits still remain.',
    status: 'past'
  },
  {
    id: 'embeddings-in-20-minutes',
    date: 'Previous Session',
    topic: 'Embeddings in 20 Minutes',
    note: 'How meaning becomes vectors, why similarity search works, and where embeddings appear in real AI products.',
    status: 'past'
  }
];

export type AIBit = {
  id: string;
  title: string;
  label?: string;
  dateLabel?: string;
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
    id: 'what-happens-inside-an-ai-model',
    title: 'What Happens Inside an AI Model?',
    label: 'Daily Bit of AI',
    dateLabel: 'July 16, 2026',
    summary:
      'Interpretability helps researchers understand which patterns, features, or internal steps influenced an AI model’s output.',
    imageSrc: `${import.meta.env.BASE_URL}daily-bits/daily bit of ai 20260716.png`,
    imageAlt:
      'Byte examining the inside of an AI model to understand its features, patterns, and decision process.',
    tags: ['AI Interpretability', 'Transparency', 'AI Safety'],
    body: [
      'AI models can give useful answers, but it is not always clear how they reached them. Interpretability is the study of understanding what happens inside an AI system, such as which patterns, features, or internal steps influenced its output. This helps researchers find mistakes, improve safety, and build more trustworthy AI.',
      'Imagine an AI says a math solution is incorrect. A more interpretable system should help show which part of the student’s reasoning affected the judgment, instead of only giving a final label. This could make AI feedback more useful because students can see where their thinking went wrong.'
    ]
  },
  {
    id: 'can-ai-work-as-a-team',
    title: 'Can AI Work as a Team?',
    label: 'Daily Bit of AI',
    dateLabel: 'July 15, 2026',
    summary:
      'Multi-agent AI systems use several specialized AI agents that collaborate on different roles or parts of a larger task.',
    displayCaption: 'Several specialized AI agents can collaborate on one larger task.',
    tags: ['Multi-Agent AI', 'Teamwork', 'Planning'],
    body: [
      'Multi-agent AI systems use several AI agents that each handle different roles or parts of a task. One agent might research information, another might check calculations, and another might organize the final answer. This can improve performance, but the agents must communicate clearly or they may repeat work, disagree, or pass along mistakes.',
      'Imagine using AI to plan a school fundraiser. One agent could research possible activities, another could estimate costs, and a third could create the schedule. A final agent could review the plan and flag problems before it is presented to the club.'
    ]
  },
  {
    id: 'when-ai-uses-tools',
    title: 'When AI Uses Tools',
    label: 'Daily Bit of AI',
    dateLabel: 'July 12, 2026',
    summary:
      'AI agents can use tools such as search, calculators, calendars, code editors, and files to complete tasks more accurately.',
    displayCaption:
      'Daily Bit of AI for July 12, 2026: how AI agents use tools to plan, check their work, and create better answers.',
    tags: ['AI Agents', 'Tools', 'Real-World Use'],
    body: [
      'Some AI systems do more than just answer questions. They can use tools, such as search, calculators, calendars, code editors, or files, to complete tasks more accurately. This is one reason AI agents are powerful: they can plan steps, use the right tool, check the result, and then continue.',
      'Imagine asking an AI to plan a study schedule. A basic chatbot might only give advice from memory. An AI agent could check your calendar, calculate available study time, organize tasks by deadline, and then create a realistic daily plan.'
    ]
  },
];

export type ResourceCategory = 'start-here' | 'keep-learning' | 'revisit-sessions';

export type Resource = {
  title: string;
  description: string;
  href: string;
  status: 'live' | 'coming-soon';
  featured: boolean;
  category: ResourceCategory;
};

export const resources: Resource[] = [
  {
    title: 'AI Basics Starter Guide',
    description: 'Simple glossary and concept map for new members.',
    href: `${import.meta.env.BASE_URL}resources/AI_Basics_Starter_Guide.pdf`,
    status: 'live',
    featured: false,
    category: 'start-here'
  },
  {
    title: 'Meeting Slides Archive',
    description: 'Browse and download slide decks from recent Bayview AI Club sessions.',
    href: `${import.meta.env.BASE_URL}meeting-slides-archive.html`,
    status: 'live',
    featured: true,
    category: 'revisit-sessions'
  },
  {
    title: 'Weekly Recap Notes',
    description: 'Read concise recap notes from recent AI Club meetings and revisit key concepts anytime.',
    href: `${import.meta.env.BASE_URL}weekly-recap-notes-archive.html`,
    status: 'live',
    featured: false,
    category: 'revisit-sessions'
  },
  {
    title: 'Useful Tools List',
    description: 'Curated free tools for learning, building, and presenting.',
    href: `${import.meta.env.BASE_URL}resources/Useful_Tools_List.pdf`,
    status: 'live',
    featured: false,
    category: 'keep-learning'
  },
  {
    title: 'AI Ethics Reading List',
    description: 'Articles and videos to spark thoughtful discussion.',
    href: `${import.meta.env.BASE_URL}resources/AI_Ethics_Reading_List.pdf`,
    status: 'live',
    featured: false,
    category: 'keep-learning'
  },
  {
    title: 'Prompting Cheat Sheet',
    description: 'Tips for clearer prompts and better results.',
    href: `${import.meta.env.BASE_URL}resources/Prompting_Cheat_Sheet.pdf`,
    status: 'live',
    featured: false,
    category: 'start-here'
  }
];

export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  focusLabel: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: 'Adam Fan',
    role: 'Co-President',
    summary: 'Co-leads overall club direction, planning, and member experience across the school year.',
    focusLabel: 'Owns',
    focus: 'Semester roadmap, weekly planning priorities, and leadership coordination.'
  },
  {
    name: 'Leo Wang',
    role: 'Co-President',
    summary: 'Co-leads meetings and operations to keep sessions organized, consistent, and student-focused.',
    focusLabel: 'Runs',
    focus: 'Meeting flow, member coordination, and in-session facilitation.'
  },
  {
    name: 'Albert Yang',
    role: 'Teaching and Meeting Executive',
    summary: 'Designs beginner-friendly learning segments and supports the structure of weekly lessons.',
    focusLabel: 'Leads',
    focus: 'Lesson outlines, concept explainers, and hands-on meeting activities.'
  },
  {
    name: 'Muhammed Masood',
    role: 'Outreach and Media Executive',
    summary: 'Supports external communication so members and the wider school community stay informed.',
    focusLabel: 'Handles',
    focus: 'Club outreach updates, promotion, and media content planning.'
  },
  {
    name: 'Claire Bilodeau',
    role: 'Outreach and Media Executive',
    summary: 'Coordinates communication touchpoints and helps keep public-facing club messaging consistent.',
    focusLabel: 'Supports',
    focus: 'Announcements, outreach communication, and visual/media materials.'
  }
];

export const faqs = [
  { q: 'Do I need coding experience?', a: 'No. We welcome all levels and explain concepts in clear, beginner-friendly language.' },
  { q: 'Is this only for advanced students?', a: 'Not at all. Meetings are designed to be accessible while still offering depth for advanced members.' },
  { q: 'Can beginners join anytime?', a: 'Yes! You can join any week, and we provide quick catch-up resources.' },
  { q: 'What happens in meetings?', a: 'We do short lessons, demos, discussions, and hands-on activities in a friendly group setting.' },
  { q: 'Do we build projects?', a: 'Yes. We run mini projects, team challenges, and student demos throughout the semester.' },
  { q: 'How do I stay updated?', a: 'Join our Discord and Google Classroom for reminders, recaps, and opportunities.' }
];

export const joinLinks = [
  {
    label: 'Join Discord',
    href: 'https://discord.gg/RKta2VYbrH',
    helperText: 'Best place for quick reminders, announcements, and community updates.'
  },
  {
    label: 'Join Google Classroom',
    href: 'https://classroom.google.com/c/ODI1MTYzNTE5OTU2?cjc=7b6loaop',
    helperText: 'Official school updates and resources (use your YRDSB account).'
  }
];

export const instagramHandle = '@bss_aiclub';
export const instagramUrl = `https://www.instagram.com/${instagramHandle.replace(/^@/, '')}/`;
