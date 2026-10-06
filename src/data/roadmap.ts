export type MeetingStatus = "completed" | "current" | "upcoming" | "tba";
export const categories = {
  concept: { label: "Concept", filterLabel: "Concepts" },
  coding: { label: "Coding", filterLabel: "Coding" },
  career: { label: "Career", filterLabel: "Careers" },
  ethics: { label: "Ethics", filterLabel: "Ethics" },
  project: { label: "Project", filterLabel: "Projects" },
  showcase: { label: "Showcase", filterLabel: "Showcase" },
} as const;
export type MeetingCategory = keyof typeof categories;
export type RoadmapFilter = "all" | MeetingCategory;
export type Meeting = {
  number: number;
  phase: number;
  category: MeetingCategory;
  tags: string[];
  title: string;
  status: MeetingStatus;
  summary: string;
  date?: string;
  leader?: string;
  preparation?: string;
  goal?: string;
  activity?: string;
  takeaway?: string;
  discussion?: string;
  measure?: string;
  report?: string;
  highlight?: string;
  optionalMath?: string;
  mathExplanation?: string;
  careerConnection?: string;
  slidesHref?: string;
  recapHref?: string;
  labHref?: string;
};
export const phases = [
  {
    number: 1,
    id: "foundations-learning",
    title: "Foundations and Learning",
    progression:
      "AI basics → first ML model → optimization → neural networks → careers",
  },
  {
    number: 2,
    id: "vision-model-failure",
    title: "Vision and Model Failure",
    progression:
      "Computer vision → classifier → shortcuts & bias → robustness tests",
  },
  {
    number: 3,
    id: "language-transformers",
    title: "Language and Transformers",
    progression:
      "Tokens → tiny language model → attention → transformer exploration → skills",
  },
  {
    number: 4,
    id: "search-rag-agents",
    title: "Search, RAG, and Agents",
    progression:
      "Embeddings → semantic search → RAG → club assistant → agents → automation",
  },
  {
    number: 5,
    id: "decisions-safety-building",
    title: "Decisions, Safety, and Building",
    progression:
      "Reinforcement learning → RL coding → governance → project strategy → showcase",
  },
];
// Update confirmed dates and progress here. No sessions are assumed completed.
export const meetings: Meeting[] = [
  {
    number: 1,
    phase: 1,
    category: "concept",
    tags: ["AI Foundations"],
    title: "What AI Actually Does",
    status: "tba",
    summary:
      "Machine learning, generative AI, models, training, inference, and data.",
    goal: "Give everyone a common mental model before coding begins.",
    takeaway:
      "AI systems learn patterns from data and use learned models to make predictions or generate outputs.",
  },
  {
    number: 2,
    phase: 1,
    category: "coding",
    tags: ["Python", "Machine Learning"],
    title: "Your First Machine Learning Model",
    status: "tba",
    summary: "Train and test a small Python classifier with scikit-learn.",
    activity:
      "Run or modify real ML code: train/test a small classifier and inspect its predictions.",
    goal: "Work with real machine-learning code in the first technical session.",
    careerConnection:
      "Data science and ML engineering use this same train, test, and inspect workflow.",
  },
  {
    number: 3,
    phase: 1,
    category: "concept",
    tags: ["Math", "Machine Learning"],
    title: "How Models Learn",
    status: "tba",
    summary:
      "How parameters, loss, optimization, and gradient descent fit together.",
    optionalMath: "theta_(t+1) = theta_t - eta * grad L(theta_t)",
    mathExplanation:
      "theta represents the parameters, eta is the learning rate, and the gradient points toward increasing loss. Move in the opposite direction to reduce error. Calculus is not required.",
  },
  {
    number: 4,
    phase: 1,
    category: "coding",
    tags: ["Python", "Math"],
    title: "Gradient Descent in Python",
    status: "tba",
    summary: "Change a learning rate and visualize how the loss responds.",
    activity:
      "Implement or interact with a small Python optimization example. Change the learning rate and plot the loss.",
    discussion: "Why can learning be too slow, unstable, or fail?",
    careerConnection:
      "ML engineers use optimization experiments to diagnose training behaviour.",
  },
  {
    number: 5,
    phase: 1,
    category: "concept",
    tags: ["Deep Learning"],
    title: "Neural Networks",
    status: "tba",
    summary:
      "Neurons, weights, activations, hidden layers, and learned representations.",
    goal: "Build an intuitive explanation of how layers learn representations before introducing mathematical detail.",
  },
  {
    number: 6,
    phase: 1,
    category: "coding",
    tags: ["Python", "PyTorch", "Deep Learning"],
    title: "Build a Neural Network",
    status: "tba",
    summary: "Train a small PyTorch network and change a meaningful setting.",
    activity:
      "Train a small neural network on a prepared dataset. Change architecture, learning rate, epochs, or hidden-layer width and compare the result.",
    careerConnection:
      "Deep-learning engineers and researchers design, train, and evaluate networks.",
  },
  {
    number: 7,
    phase: 1,
    category: "career",
    tags: ["Careers"],
    title: "AI Careers I — What People Actually Do",
    status: "tba",
    summary:
      "Compare real AI roles, daily tasks, technical skills, and starting points.",
    activity:
      "Compare ML engineer, AI/software engineer, research scientist, data scientist, robotics engineer, AI product roles, and related quantitative or technical careers.",
    goal: "Explain actual tasks, typical skills, and realistic starting points for high-school students.",
  },
  {
    number: 8,
    phase: 2,
    category: "concept",
    tags: ["Computer Vision"],
    title: "Computer Vision",
    status: "tba",
    summary:
      "Pixels, feature extraction, convolution, and image classification.",
    activity:
      "Connect CNN intuition to scientific imaging, autonomous systems, accessibility, and recognition.",
    careerConnection:
      "Computer vision engineering, robotics, and medical imaging.",
  },
  {
    number: 9,
    phase: 2,
    category: "coding",
    tags: ["Python", "PyTorch", "Computer Vision"],
    title: "Train an Image Classifier",
    status: "tba",
    summary:
      "Train and test an image classifier with a CNN or transfer learning.",
    activity:
      "Use a manageable dataset to train/test a real image classifier with a PyTorch CNN or transfer learning.",
    careerConnection:
      "Vision teams adapt pretrained models and evaluate performance on their own data.",
  },
  {
    number: 10,
    phase: 2,
    category: "ethics",
    tags: ["Ethics", "Computer Vision"],
    title: "When AI Learns the Wrong Thing",
    status: "tba",
    summary:
      "Investigate dataset bias, shortcuts, spurious correlations, and distribution shift.",
    activity:
      "Use concrete technical examples to inspect how a model can learn a shortcut instead of the intended feature.",
    discussion:
      "Who is affected when a dataset misses important cases or a model fails on a new population?",
  },
  {
    number: 11,
    phase: 2,
    category: "coding",
    tags: ["Python", "Computer Vision", "Robustness"],
    title: "Break the Vision Model",
    status: "tba",
    summary: "Change one image property and measure how predictions change.",
    activity:
      "Change lighting, crop, background, angle, occlusion, or another controlled property. Measure how predictions change.",
    discussion: "Did the model learn the intended feature or a shortcut?",
    careerConnection:
      "Model evaluation and reliability work includes robustness testing under changing conditions.",
  },
  {
    number: 12,
    phase: 3,
    category: "concept",
    tags: ["LLMs"],
    title: "How Large Language Models Work",
    status: "tba",
    summary:
      "Tokens, next-token prediction, context, probabilities, and generation.",
    takeaway:
      "Fluent output does not automatically mean factual understanding.",
  },
  {
    number: 13,
    phase: 3,
    category: "coding",
    tags: ["Python", "LLMs"],
    title: "Build a Tiny Language Model",
    status: "tba",
    summary:
      "Expose next-token prediction with a small character- or token-level model.",
    activity:
      "Build simple character-level or token-level prediction and inspect the likely next token.",
    goal: "Expose the mechanics of next-token prediction without requiring a production-scale transformer.",
  },
  {
    number: 14,
    phase: 3,
    category: "concept",
    tags: ["Transformers", "LLMs", "Math"],
    title: "Transformers and Attention",
    status: "tba",
    summary:
      "How attention and transformer blocks combine information from context.",
    optionalMath: "Attention(Q,K,V) = softmax(QK^T / sqrt(d))V",
    mathExplanation:
      "Queries and keys determine which tokens are relevant. Softmax turns the scores into weights used to combine values. The meeting starts with this intuition; the equation is optional.",
    careerConnection: "ML engineering, NLP research, and software engineering.",
  },
  {
    number: 15,
    phase: 3,
    category: "coding",
    tags: ["Python", "Transformers", "LLMs"],
    title: "Explore a Transformer",
    status: "tba",
    summary:
      "Manipulate inputs and inspect tokenization, embeddings, attention, and outputs.",
    activity:
      "Change inputs to a small or pretrained model. Inspect tokens, embeddings, attention, and model outputs.",
    careerConnection:
      "NLP researchers and ML engineers inspect model behaviour to debug and evaluate systems.",
  },
  {
    number: 16,
    phase: 3,
    category: "career",
    tags: ["Careers"],
    title: "AI Careers II — Skills That Will Matter",
    status: "tba",
    summary: "Explore durable skills and adaptability as AI tools improve.",
    activity:
      "Discuss programming fundamentals, mathematics, statistics, systems thinking, domain expertise, experimentation, communication, evaluating AI output, and building reliable systems.",
    takeaway:
      "Build durable skills and adaptability. No specific job is guaranteed to be AI-proof.",
  },
  {
    number: 17,
    phase: 4,
    category: "concept",
    tags: ["Embeddings", "Search", "Math"],
    title: "Embeddings and Semantic Search",
    status: "tba",
    summary: "Represent meaning with vectors and compare semantic similarity.",
    activity:
      "Connect vector representations to search, recommendations, clustering, and retrieval.",
    optionalMath:
      "dot(a,b) = Σ a_i b_i; cosine(a,b) = dot(a,b) / (||a|| ||b||)",
    mathExplanation:
      "For nonzero vectors, cosine similarity compares direction rather than length. Nearby meanings can be represented by similar vectors.",
    careerConnection:
      "Search and recommendation teams use embeddings to retrieve and organize information.",
  },
  {
    number: 18,
    phase: 4,
    category: "coding",
    tags: ["Python", "Embeddings", "Search"],
    title: "Build Semantic Search",
    status: "tba",
    summary:
      "Build a small search system over approved club or school-safe documents.",
    activity:
      "Build a small semantic search system and compare its results with keyword search on the same approved documents.",
    careerConnection:
      "Search engineering and retrieval systems combine data preparation, representation, and evaluation.",
  },
  {
    number: 19,
    phase: 4,
    category: "concept",
    tags: ["RAG", "LLMs"],
    title: "RAG and Modern AI Applications",
    status: "tba",
    summary:
      "Retrieve evidence, provide context, generate an answer, then check its citations.",
    activity:
      "Trace retrieve → provide context → generate → cite/check evidence.",
    discussion:
      "What should a system do when information is missing or an answer is not supported?",
    careerConnection:
      "AI engineering, search/retrieval systems, and enterprise software.",
  },
  {
    number: 20,
    phase: 4,
    category: "project",
    tags: ["Python", "RAG", "LLMs"],
    title: "Build the AI Club Assistant",
    status: "tba",
    summary: "Build and evaluate a RAG assistant using approved club material.",
    activity:
      "Build a small RAG assistant over approved AI Club documents or website material.",
    measure:
      "Factual accuracy, citation accuracy, and the ability to say information is unavailable.",
    highlight: "Signature project",
    careerConnection:
      "AI application teams build retrieval systems and evaluate whether answers are grounded in evidence.",
  },
  {
    number: 21,
    phase: 4,
    category: "concept",
    tags: ["Agents", "Security"],
    title: "Agents and Tool Use",
    status: "tba",
    summary:
      "Tools, workflows, agent loops, verification, and permission boundaries.",
    activity:
      "Inspect tools, workflows, agent loops, verification steps, failure cases, and safe permissions.",
    takeaway:
      "An agent needs clear permission boundaries and checks on its actions.",
  },
  {
    number: 22,
    phase: 4,
    category: "coding",
    tags: ["Python", "Agents", "Security"],
    title: "Build a Simple AI Agent",
    status: "tba",
    summary:
      "Create a constrained multi-step workflow with prepared tools or simulated tasks.",
    activity:
      "Build a constrained multi-step agent or workflow using safe prepared tools or simulated tasks. Keep actions within explicit permissions.",
    goal: "Observe planning and verification without deploying an uncontrolled autonomous web agent.",
    careerConnection:
      "AI and software engineers design reliable workflows around models and tools.",
  },
  {
    number: 23,
    phase: 4,
    category: "career",
    tags: ["Careers", "Ethics", "Automation"],
    title: "AI, Jobs, and Automation",
    status: "tba",
    summary: "Compare task automation, augmentation, and changes to work.",
    discussion:
      "Task automation versus whole-job automation; productivity; changing entry-level work; new roles; and economic trade-offs.",
    takeaway:
      "Compare plausible changes and uncertainty rather than claiming to predict every future job.",
  },
  {
    number: 24,
    phase: 5,
    category: "concept",
    tags: ["Reinforcement Learning", "Ethics"],
    title: "Reinforcement Learning",
    status: "tba",
    summary:
      "States, actions, rewards, policies, and exploration—with reward hacking in view.",
    activity:
      "Trace states, actions, rewards, policies, and exploration. Use reward hacking as a bridge into safety.",
    careerConnection: "Robotics, research, and optimization.",
  },
  {
    number: 25,
    phase: 5,
    category: "coding",
    tags: ["Python", "Reinforcement Learning"],
    title: "Code a Reinforcement Learning Agent",
    status: "tba",
    summary:
      "Change rewards or the environment in a small grid world and observe behaviour.",
    activity:
      "Code an agent in a small grid world or another understandable environment. Change the reward or environment and observe behaviour.",
    discussion:
      "Does a higher reward mean the agent achieved the intended goal?",
    careerConnection:
      "Reinforcement-learning experiments connect reward design with evaluation and control.",
  },
  {
    number: 26,
    phase: 5,
    category: "ethics",
    tags: ["Ethics", "Privacy", "Governance"],
    title: "AI Ethics — Who Should Control AI?",
    status: "tba",
    summary:
      "Discuss access, responsibility, privacy, transparency, and AI governance.",
    discussion:
      "Who should control model access? Who is responsible for failures? Compare privacy, surveillance, copyright, transparency, safety testing, and the roles of governments, companies, and open-source communities.",
    goal: "Compare multiple defensible positions using concrete cases.",
  },
  {
    number: 27,
    phase: 5,
    category: "career",
    tags: ["Careers", "Projects"],
    title: "AI Careers III — Build Something That Matters",
    status: "tba",
    summary:
      "Turn technical skills into projects with ownership, evaluation, and clear communication.",
    activity:
      "Explore personal AI projects, GitHub, documentation, demos, competitions, research exposure, internships later, and open-source contributions.",
    takeaway:
      "A strong project solves a real problem and demonstrates technical ownership, evaluation, iteration, and clear communication—not complexity alone.",
  },
  {
    number: 28,
    phase: 5,
    category: "showcase",
    tags: ["Projects", "Security", "Ethics"],
    title: "Final AI Build + Red-Team Challenge",
    status: "tba",
    summary:
      "Demonstrate projects and run controlled tests against each other’s systems.",
    activity:
      "Teams demonstrate their projects and run controlled tests against each other’s systems using agreed permissions and prepared or public data.",
    report:
      "What we built; how it works; one successful test; one failure; one attempted defence; and one remaining limitation.",
    highlight: "Year-end showcase",
  },
];
export const orderedMeetings = [...meetings].sort(
  (a, b) => a.number - b.number,
);
export const completedMeetings = orderedMeetings.filter(
  (m) => m.status === "completed",
);
export const nextMeeting =
  orderedMeetings.find((m) => m.status === "current") ??
  orderedMeetings.find((m) => m.status !== "completed");
export const currentPhase = phases.find((p) => p.number === nextMeeting?.phase);
export const previousMeeting = completedMeetings[completedMeetings.length - 1];
export const followingMeeting =
  nextMeeting &&
  orderedMeetings.find(
    (m) => m.number > nextMeeting.number && m.status !== "completed",
  );
export const categoryTotals = Object.fromEntries(
  Object.keys(categories).map((category) => [
    category,
    meetings.filter((m) => m.category === category).length,
  ]),
) as Record<MeetingCategory, number>;
export const buildTotal = meetings.filter((m) =>
  ["coding", "project", "showcase"].includes(m.category),
).length;
export const progressPercent = Math.round(
  (completedMeetings.length / meetings.length) * 100,
);
// Interest filters also include explicit secondary tags, so cross-disciplinary sessions remain discoverable.
const interestTags: Partial<Record<MeetingCategory, string>> = {
  coding: "Python",
  career: "Careers",
  ethics: "Ethics",
  project: "Projects",
};
export function matchesFilter(meeting: Meeting, filter: RoadmapFilter) {
  return (
    filter === "all" ||
    meeting.category === filter ||
    meeting.tags.includes(interestTags[filter] ?? "")
  );
}
