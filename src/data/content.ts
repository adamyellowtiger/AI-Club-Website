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
import diffusionModelImage from './diffusion-model.png';
import dailyBitOfAI20260710Image from '../../daily bit of ai 20260710.png';

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
  {
    id: 'can-ai-explain-its-own-decisions',
    title: 'Can AI Explain Its Own Decisions?',
    label: 'Daily Bit of AI',
    dateLabel: 'Today',
    summary:
      'Explainable AI helps people understand why a model made a prediction by showing which parts of the input influenced the result.',
    displayCaption:
      "Today’s Daily Bit of AI: explainable AI — helping people understand how AI reaches a decision.",
    imageSrc: dailyBitOfAI20260710Image,
    imageAlt: 'Byte explaining explainable AI with an input, AI decision, and explanation flow.',
    tags: ['Explainable AI', 'Trust', 'Real-World Use'],
    body: [
      'Some AI systems make accurate predictions, but it is not always clear why they chose that answer.',
      'Explainable AI focuses on tools that show which parts of the input influenced a model’s decision.',
      'This is especially important in medicine, hiring, finance, and education, where people need to trust and understand high-impact decisions.',
      'Imagine an AI that checks a student’s math solution. A basic model might only say “correct” or “incorrect.” An explainable model should also point to the exact step where the mistake happened so the feedback is actually useful.'
    ]
  },
  {
    id: 'loss-functions-and-normalization',
    title: 'Loss Functions and Normalization',
    label: 'Daily Bit of AI',
    dateLabel: 'Yesterday',
    summary:
      'A loss function scores how wrong an AI model is, while normalization puts data on a similar scale so the model can learn more smoothly.',
    displayCaption:
      "Today’s Daily Bit of AI: how loss functions measure errors and normalization keeps data balanced.",
    tags: ['How AI Works', 'Basics', 'Training'],
    body: [
      'A loss function tells an AI model how wrong its prediction was. Think of it as an error score that the model tries to make smaller as it learns.',
      'Normalization puts data values onto a similar scale so that one large number does not unfairly dominate the learning process.',
      'Imagine an AI predicting house prices using house size and number of bedrooms. House size might be around 2,000, while the number of bedrooms might be only 3 or 4. Without normalization, the model may focus too much on house size simply because its numbers are larger.',
      'The loss function then measures how far the predicted price is from the real price, helping the model adjust. Together, loss functions and normalization help AI learn more smoothly and improve over time.'
    ]
  },
  {
    id: 'model-distillation',
    title: 'Model Distillation',
    label: 'Daily Bit of AI',
    dateLabel: 'Yesterday',
    summary:
      'Model distillation is a way to train a smaller AI model to imitate a larger model, keeping much of the performance while making it faster and cheaper to run.',
    displayCaption: 'Yesterday’s Daily Bit of AI: model distillation — how big AI teaches smaller AI.',
    tags: ['How AI Works', 'Efficiency', 'Training'],
    body: [
      'Large AI models can be powerful, but they are often expensive and slow to run.',
      'Model distillation is a technique where a smaller “student” model learns from a larger “teacher” model.',
      'Instead of only learning from the original training labels, the student also learns from the teacher’s outputs.',
      'Those outputs can contain extra hints, such as which wrong answers were close and which were clearly unlikely.',
      'The goal is not to make the student identical to the teacher. The goal is to keep enough useful behavior while reducing size, cost, and latency.',
      'This matters because many real products need AI that works quickly on phones, websites, school tools, or low-cost servers.',
      'The big idea: model distillation compresses knowledge from a larger model into a smaller one so AI can be faster and easier to deploy.'
    ]
  },
  {
    id: 'diffusion-models',
    title: 'Diffusion Models',
    label: 'Daily Bit of AI',
    dateLabel: '2 days ago',
    summary:
      'Diffusion models generate images by starting from random noise and repeatedly denoising it into structured visuals guided by learned patterns.',
    displayCaption: "Daily Bit of AI from 2 days ago: diffusion models — how AI turns noise into images.",
    imageSrc: diffusionModelImage,
    imageAlt: 'Diffusion model Daily Bit visual',
    tags: ['How AI Works', 'Basics', 'Generative AI'],
    body: [
      'Diffusion models are a popular kind of generative AI used to create images and other media.',
      'They are trained by gradually adding noise to real data, then learning how to reverse that process.',
      'At generation time, the model starts with random noise and removes noise step by step.',
      'Each denoising step adds structure, turning static into recognizable shapes, textures, and details.',
      'A text prompt can guide this process so the final output matches a requested style or scene.',
      'Because generation happens across many small steps, diffusion models can produce high-quality, coherent outputs.',
      'The tradeoff is speed: many denoising steps can be computationally expensive.',
      'The big idea: diffusion models learn how to turn noise into meaningful data through iterative denoising.'
    ]
  },
  {
    id: 'self-supervised-learning',
    title: 'Self-Supervised Learning',
    label: 'Daily Bit of AI',
    dateLabel: '3 days ago',
    summary:
      'Self-supervised learning helps AI learn from raw unlabeled data by turning the data itself into training tasks, which makes modern large-scale AI much more practical.',
    displayCaption: "Daily Bit of AI from 3 days ago: self-supervised learning — how AI learns without human labels.",
    imageSrc: `${import.meta.env.BASE_URL}daily-bits/dailyBitOfAI20260405.png`,
    imageAlt: 'Self-supervised learning Daily Bit visual',
    tags: ['How AI Works', 'Basics', 'Training'],
    body: [
      'Before a model can learn anything, someone often has to sit down and label huge amounts of data by hand, such as photos, emails, or audio clips. That is how a lot of traditional AI training works, but it is slow and expensive.',
      'Self-supervised learning avoids that bottleneck. Instead of depending on human labels, the model creates its own learning tasks directly from raw data.',
      'For example, it might hide a word in a sentence and try to predict the missing word. Or it might cover part of an image and try to reconstruct what belongs there.',
      'In other words, the data itself becomes the teacher. No person has to manually label every example first.',
      'This matters because labeled datasets are limited, but raw data is everywhere. Self-supervised learning is a major reason modern AI systems can scale so effectively.',
      'The big idea: self-supervised learning lets AI learn useful patterns from unlabeled data by generating its own training tasks.'
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    label: 'Daily Bit of AI',
    dateLabel: '4 days ago',
    summary:
      'Computer vision is the part of AI that learns to turn raw image pixels into useful understanding, from simple edges to full objects.',
    displayCaption: "Daily Bit of AI from 4 days ago: computer vision — how AI learns to understand images.",
    // Drop generated images in `public/daily-bits/` and keep these paths.
    imageSrc: `${import.meta.env.BASE_URL}daily-bits/computer-vision.png`,
    imageAlt: 'Computer vision Daily Bit visual',
    tags: ['How AI Works', 'Basics', 'Real-World Use'],
    body: [
      'When you look at a photo, you instantly notice things like faces, cars, text, or a tennis ball.',
      'AI cannot do that naturally. To a model, an image starts as a giant grid of numbers for pixel brightness and color.',
      'Computer vision is the part of AI that learns to turn that messy grid into meaningful information.',
      'Early layers might notice simple patterns like edges, corners, or color changes.',
      'Later layers combine those into larger patterns like eyes, wheels, hands, or entire objects.',
      'That is how AI can unlock phones with faces, detect tumors in scans, read handwriting, or help self-driving cars identify pedestrians and stop signs.',
      'The big idea: computer vision teaches AI to go from raw pixels to useful understanding.'
    ]
  },
  {
    id: 'search-and-planning',
    title: 'Search and Planning',
    label: 'Daily Bit of AI',
    dateLabel: '5 days ago',
    summary:
      'Search and planning help AI look ahead, compare possible next steps, and choose a strong sequence of actions.',
    displayCaption: "Daily Bit of AI from 5 days ago: search and planning — how AI figures out multi-step moves.",
    imageSrc: `${import.meta.env.BASE_URL}daily-bits/search-and-planning.png`,
    imageAlt: 'Search and planning Daily Bit visual',
    tags: ['How AI Works', 'Basics', 'Real-World Use'],
    body: [
      'Some AI problems are not about recognizing patterns right away.',
      'They are about choosing a sequence of actions that leads to a good result.',
      'That is what search and planning are for. Instead of asking “what is this?”, AI asks “if I do this first, then what happens next?”',
      'It explores possible future steps, compares outcomes, and tries to find a strong path forward.',
      'This is why AI can play games like chess, solve route-finding problems, and help robots move through space without crashing.',
      'It is not just reacting to the current moment. It is looking ahead.',
      'The big idea: search helps AI examine possible choices, and planning helps organize those choices into a useful step-by-step strategy.'
    ]
  },
  {
    id: 'anomaly-detection',
    title: 'Anomaly Detection',
    summary:
      'Anomaly detection helps AI learn what normal looks like so it can flag unusual patterns, rare events, and possible problems quickly.',
    tags: ['How AI Works', 'Real-World Use', 'Basics'],
    body: [
      'Not all AI is trying to label or classify things. Sometimes its job is just to notice when something seems off.',
      'This is called anomaly detection.',
      'The basic idea is simple: AI looks at lots of normal examples, learns the usual patterns, and then flags anything that does not fit.',
      'Examples include a credit card transaction at a strange time or place, unusual traffic in a computer network, a defective product on a factory line, or a medical scan that looks different from the norm.',
      'So instead of asking “What is this?”, it asks: “Does this look unusual compared to everything else I have seen?”',
      'That makes anomaly detection very useful for catching fraud, errors, security threats, and other rare problems.',
      'AI is not always looking for what something is. Sometimes it is just looking for what does not belong.'
    ]
  },
  {
    id: 'clustering',
    title: 'Clustering',
    summary:
      'Clustering lets AI find natural groups in data without labels by putting similar items together based on shared patterns.',
    tags: ['How AI Works', 'Basics', 'Real-World Use'],
    body: [
      'Sometimes AI is not given labels at all. Instead, it looks at the data and tries to find natural groups on its own.',
      'This is called clustering.',
      'The idea is to group things based on similarity. Items that are more alike end up in the same cluster, even if nobody told the AI what the categories should be.',
      'For example, imagine giving AI a huge music library without labels. It might still group songs by mood, tempo, or style just by noticing patterns.',
      'Clustering is useful for customer segmentation, grouping similar images, organizing search results, and finding patterns in scientific data.',
      'So instead of learning from named categories, clustering tries to answer: “Which things naturally belong together?”',
      'Clustering helps AI discover hidden groups in data without needing labels first.'
    ]
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    summary:
      'Reinforcement learning helps AI improve through trial and error by using feedback, rewards, and penalties over many decisions.',
    tags: ['How AI Works', 'Basics', 'Real-World Use'],
    body: [
      'Some AI systems learn the same way people or animals often do: by trying things, seeing what happens, and adjusting.',
      'This is called reinforcement learning.',
      'The AI takes an action, gets feedback, and then slowly learns which choices lead to better results.',
      'A simple way to think about it: try something, get a reward or penalty, adjust, and repeat.',
      'This is useful when the AI has to make a sequence of decisions instead of just one. That is why reinforcement learning shows up in games, robotics, navigation, and decision-making systems.',
      'Over time, the AI gets better not because someone gave it every correct answer, but because it learned from experience.',
      'Reinforcement learning is how AI improves by trial and error using feedback.'
    ]
  },
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
