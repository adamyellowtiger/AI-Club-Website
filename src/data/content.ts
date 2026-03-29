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

export const meetings = [
  {
    date: 'Tuesday, March 31',
    topic: 'Mechanistic Interpretability',
    note: 'We will explore how researchers peek inside neural networks, trace internal circuits, and ask what specific components may be doing.'
  }
];

export type AIBit = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  body: string[];
};

export const aiBits: AIBit[] = [
  {
    id: 'why-ai-is-good-at-some-jobs-and-bad-at-others',
    title: 'Why AI is good at some jobs and bad at others',
    summary:
      'AI does best on tasks with lots of examples, clear patterns, and well-defined success. It struggles more when the work depends on messy context, shifting goals, or human judgment.',
    tags: ['How AI Works', 'Real-World Use', 'Critical Thinking'],
    body: [
      'AI tends to do best when a task has a clear input, a clear output, and lots of past examples. If a model can compare the current case to thousands or millions of earlier cases, it can often do surprisingly well. That is why AI can help rank search results, recommend videos, transcribe speech, or flag suspicious bank transactions.',
      "But many jobs are not that neat. Real people change their minds, rules are fuzzy, and the 'right' answer depends on context, values, or missing information. A model might be able to draft an email, but knowing whether the tone is politically smart, emotionally appropriate, or strategically wise can be much harder.",
      "So the better question is not 'Can AI do this job?' but 'Which parts of this job fit AI well?' In practice, AI often works best as an assistant for the repeatable pattern-heavy part, while humans keep the final judgment, responsibility, and big-picture decisions."
    ]
  },
  {
    id: 'why-ai-tools-sometimes-sound-confident-but-still-get-things-wrong',
    title: 'Why AI tools sometimes sound confident but still get things wrong',
    summary: 'AI can sound fluent and certain because it is good at generating likely text. But sounding polished is not the same as being correct.',
    tags: ['How AI Works', 'Basics', 'Critical Thinking'],
    body: [
      'Large language models are trained to predict what text is likely to come next. That means they are very good at producing answers that sound smooth, organized, and believable. But the model is not directly checking truth the way a calculator checks arithmetic or a search engine checks current sources.',
      'Because of that, an answer can be well-written and still be wrong. If the model has weak context, confusing training examples, or a prompt that leaves room for guessing, it may confidently generate something inaccurate. This is one reason people describe AI mistakes as hallucinations.',
      'The practical lesson is simple: treat AI confidence as style, not proof. For schoolwork, research, or anything important, you still need to verify facts, check sources, and use your own judgment.'
    ]
  },
  {
    id: 'why-the-same-ai-gives-different-answers-to-the-same-prompt',
    title: 'Why the same AI gives different answers to the same prompt',
    summary:
      'The same model can produce different replies because generation is not always fully deterministic, and even tiny context changes can shift the path of the answer.',
    tags: ['How AI Works', 'Basics'],
    body: [
      'When an AI writes a response, it does not usually pick the next word in a perfectly fixed way every time. Instead, it often samples from several plausible next-token options. That means two runs of the same prompt can branch in slightly different directions, especially when many reasonable phrasings exist.',
      'Small context differences also matter. A changed conversation history, a different system instruction, or even a subtle wording tweak can push the model toward a different tone, structure, or explanation. Once the first few words differ, the rest of the answer often unfolds differently too.',
      'So when you see different answers from the same AI, that does not automatically mean one run is broken. It often means the model had multiple plausible continuations and took different paths through them.'
    ]
  },
  {
    id: 'how-recommendation-systems-decide-what-to-show-you',
    title: 'How recommendation systems decide what to show you',
    summary:
      'Recommendation systems try to predict what you are most likely to click, watch, like, or stay with based on patterns in your behavior and the behavior of similar users.',
    tags: ['Real-World Use', 'How AI Works'],
    body: [
      'When you open a platform like YouTube, TikTok, Netflix, or Spotify, there are far too many possible items to show you all at once. A recommendation system helps narrow the list by estimating what you are most likely to engage with.',
      'It can use signals such as watch time, clicks, likes, skips, replays, search history, and what similar users enjoyed. Over time, the system builds a rough picture of your interests and updates that picture as your behavior changes.',
      'This is useful because it helps people find things they care about faster. But it also means the system can shape what you keep seeing, which is why recommendation systems are powerful and worth thinking about critically.'
    ]
  },
  {
    id: 'what-actually-happens-after-you-press-enter-in-chatgpt',
    title: 'What actually happens after you press enter in ChatGPT?',
    summary:
      'After you press enter, your message gets turned into tokens, combined with the earlier conversation, processed by the model, and answered one token at a time.',
    tags: ['How AI Works', 'Basics'],
    body: [
      'Your message is first broken into smaller pieces called tokens. These are not always full words. They are chunks of text that the model can process efficiently. The system also gathers the relevant conversation history so the model has context for your request.',
      'Then the model uses its learned parameters to estimate which token should come next. Once it picks one token, it repeats the process for the next token, and then the next, building the answer step by step. That is why responses appear as a stream instead of all at once.',
      'So even though the final result feels like a single finished message, it is actually generated gradually through many tiny prediction steps.'
    ]
  }
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
  {
    name: 'Adam Fan',
    role: 'Co-President',
    bio: 'Helps lead club direction, shape meeting plans, and keep the club welcoming and ambitious.'
  },
  {
    name: 'Leo Wang',
    role: 'Co-President',
    bio: 'Helps lead meetings, coordinate members, and keep club activities organized and engaging.'
  },
  {
    name: 'Albert Yang',
    role: 'Teaching and Meeting Executive',
    bio: 'Supports lesson planning, explainers, and the structure of weekly meeting activities.'
  },
  {
    name: 'Muhammed Masood',
    role: 'Outreach and Media Executive',
    bio: 'Helps with outreach, updates, promotion, and club-facing media content.'
  },
  {
    name: 'Claire Bilodeau',
    role: 'Outreach and Media Executive',
    bio: 'Helps with communications, announcements, outreach, and visual/media support.'
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
  { label: 'Discord', href: 'https://discord.gg/RKta2VYbrH' },
  { label: 'Google Classroom', href: 'https://classroom.google.com/c/ODI1MTYzNTE5OTU2?cjc=7b6loaop' }
];
