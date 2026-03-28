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
  { label: 'Projects', href: '#projects' },
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

export const meetings = [
  { date: 'Tuesday, April 7', topic: 'How AI Models Learn Patterns', note: 'Interactive model training simulation' },
  { date: 'Tuesday, April 14', topic: 'Prompt Engineering Lab', note: 'Bring your favorite prompts to workshop' },
  { date: 'Tuesday, April 21', topic: 'AI Ethics Debate', note: 'Small group discussions and reflections' }
];

export const featuredBit = {
  title: 'Why do chatbots sometimes sound confident but still get things wrong?',
  summary:
    'This week we explore how language models predict likely words, why that can create mistakes, and how to fact-check AI answers effectively.',
  tags: ['How AI Works', 'Basics', 'Critical Thinking']
};

export const supportBits = [
  {
    title: 'AI in Medicine',
    summary: 'See how AI helps doctors review scans faster while humans still make final decisions.',
    tag: 'Real-World Use'
  },
  {
    title: 'Bias in Datasets',
    summary: 'Learn how missing representation in data can lead to unfair outcomes and what to do about it.',
    tag: 'Ethics'
  },
  {
    title: 'How Image Models Work',
    summary: 'Understand training data, pattern recognition, and why image generation needs careful prompts.',
    tag: 'How AI Works'
  }
];

export const projects = [
  'Mini AI explainers for middle school outreach',
  'Prompt experiments with reflection journals',
  'Student demo day lightning talks',
  'Ethical debate panels on current AI topics',
  'Beginner coding activities with Python snippets',
  'Student-made resource packs for exam season'
];

export const resources = [
  { title: 'AI Basics Starter Guide', description: 'Simple glossary and concept map for new members.', href: '#' },
  { title: 'Meeting Slides Archive', description: 'Slide decks from recent sessions and demos.', href: '#' },
  { title: 'Weekly Recap Notes', description: 'Quick summaries for anyone who missed a meeting.', href: '#' },
  { title: 'Useful Tools List', description: 'Curated free tools for learning, building, and presenting.', href: '#' },
  { title: 'AI Ethics Reading List', description: 'Articles and videos to spark thoughtful discussion.', href: '#' },
  { title: 'Prompting Cheat Sheet', description: 'Tips for clearer prompts and better results.', href: '#' }
];

export const team = [
  { name: 'Avery Chen', role: 'Club President', bio: 'Leads meeting plans and makes sure every member has space to contribute.' },
  { name: 'Jordan Patel', role: 'Vice President', bio: 'Runs club challenges and helps coordinate project teams.' },
  { name: 'Mina Garcia', role: 'Learning Lead', bio: 'Designs beginner-friendly explainers and onboarding activities.' },
  { name: 'Eli Thompson', role: 'Community Lead', bio: 'Manages updates, resources, and communication channels.' }
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
  { label: 'Discord', href: 'https://discord.com/' },
  { label: 'Google Classroom', href: 'https://classroom.google.com/' },
  { label: 'Email Us', href: 'mailto:bayviewaiclub@example.com' },
  { label: 'Interest Form', href: 'https://forms.google.com/' }
];
