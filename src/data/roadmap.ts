export type MeetingStatus = "completed" | "current" | "upcoming" | "tba";
export type Meeting = {
  number: number;
  phase: number;
  type: "theory" | "lab";
  title: string;
  status: MeetingStatus;
  date?: string;
  leader?: string;
  preparation?: string;
  coreIdea?: string;
  application?: string;
  takeaway?: string;
  question?: string;
  experiment?: string;
  variable?: string;
  measure?: string;
  discussion?: string;
  optionalMath?: string;
  extension?: string;
  stationA?: string;
  stationB?: string;
  report?: string;
  slidesHref?: string;
  recapHref?: string;
  labHref?: string;
  labTier?: "light" | "prepared" | "signature";
};
export const phases = [
  {
    number: 1,
    id: "ai-foundations",
    title: "AI Foundations",
    progression: "AI types → data & models → evaluation",
  },
  {
    number: 2,
    id: "learning-networks",
    title: "Learning and Networks",
    progression: "Optimization → neural networks → computer vision",
  },
  {
    number: 3,
    id: "language-transformers",
    title: "Language and Transformers",
    progression: "Tokens → embeddings → attention → LLM evaluation",
  },
  {
    number: 4,
    id: "modern-ai-systems",
    title: "Modern AI Systems",
    progression: "RAG & agents → reinforcement learning → multimodal AI",
  },
  {
    number: 5,
    id: "reliability-security",
    title: "Reliability and Security",
    progression: "Interpretability → adversarial failures → red-teaming",
  },
];
// Dates and progress are unconfirmed. Update these entries as meetings are announced.
export const meetings: Meeting[] = [
  {
    number: 1,
    phase: 1,
    type: "theory",
    title: "What Counts as AI?",
    status: "tba",
    coreIdea:
      "Distinguish ordinary software, rule-based AI, machine learning, and generative AI.",
    application:
      "Compare a calculator, spam filter, recommendation system, and chatbot.",
    takeaway: "Different AI systems learn and act in different ways.",
  },
  {
    number: 2,
    phase: 1,
    type: "lab",
    title: "AI System Identification",
    status: "tba",
    question: "Can students identify how a hidden system works by testing it?",
    experiment:
      "Test a rule-based program, a trained classifier, and an LLM without being told which is which.",
    measure: "Correct identifications and the evidence used.",
    discussion:
      "Which behaviours revealed rules, learned patterns, or generation?",
    labTier: "light",
  },
  {
    number: 3,
    phase: 1,
    type: "theory",
    title: "Data and Simple Models",
    status: "tba",
    coreIdea:
      "Examples, features, labels, training data, and simple decision boundaries.",
    application: "Spam detection or classroom-object recognition.",
    takeaway:
      "A model learns a mapping from examples rather than receiving every rule directly.",
  },
  {
    number: 4,
    phase: 1,
    type: "lab",
    title: "Train a Tiny Classifier",
    status: "tba",
    question: "How does the choice of training examples affect predictions?",
    experiment:
      "Train a small classifier on classroom objects or gestures, then test unfamiliar examples.",
    variable: "Number and variety of training examples.",
    measure: "Correct predictions on new examples.",
    labTier: "prepared",
  },
  {
    number: 5,
    phase: 1,
    type: "theory",
    title: "Evaluation and Generalization",
    status: "tba",
    coreIdea:
      "Training and test data, accuracy, false positives, false negatives, and overfitting.",
    application:
      "Compare the consequences of mistakes in spam filtering, safety, and rare-event detection.",
    takeaway:
      "A model is useful only if it performs well on relevant unseen cases.",
  },
  {
    number: 6,
    phase: 1,
    type: "lab",
    title: "The 95% Accuracy Trap",
    status: "tba",
    question: "Can a highly accurate model still be useless?",
    experiment: "Test a majority-class model on an imbalanced dataset.",
    measure:
      "Accuracy, important cases detected, false positives, and false negatives.",
    discussion: "Which metric actually matches the real goal?",
    labTier: "light",
  },
  {
    number: 7,
    phase: 2,
    type: "theory",
    title: "Loss and Gradient Descent",
    status: "tba",
    coreIdea:
      "A loss function measures error. Gradient descent repeatedly adjusts parameters to reduce that error.",
    optionalMath: "theta_new = theta - learning_rate × gradient",
    application:
      "Connect optimization to fitting a line and training a classifier.",
    takeaway: "Training is an optimization process, not instant understanding.",
  },
  {
    number: 8,
    phase: 2,
    type: "lab",
    title: "Learning-Rate Race",
    status: "tba",
    question: "What happens when the learning rate is too small or too large?",
    experiment:
      "Run gradient descent from the same starting point with several learning rates.",
    measure: "Steps to low loss, final loss, and instability.",
    discussion: "Why can the fastest-looking setting fail?",
    labTier: "light",
  },
  {
    number: 9,
    phase: 2,
    type: "theory",
    title: "Neural Networks",
    status: "tba",
    coreIdea:
      "Weighted inputs, activation functions, hidden layers, and feature combinations.",
    application:
      "Relate hidden layers to handwriting, voices, and complex patterns.",
    takeaway:
      "Layers combine simple signals into increasingly useful features.",
  },
  {
    number: 10,
    phase: 2,
    type: "lab",
    title: "Solving XOR",
    status: "tba",
    question:
      "Why can a hidden layer solve patterns that one straight boundary cannot?",
    experiment:
      "Use a neural-network playground to solve XOR with different network structures.",
    variable: "Number of hidden neurons and layers.",
    measure: "Training result, test result, and decision-boundary shape.",
    labTier: "light",
  },
  {
    number: 11,
    phase: 2,
    type: "theory",
    title: "How AI Sees Images",
    status: "tba",
    coreIdea:
      "Pixels, filters, edges, convolution, and layered visual features.",
    application:
      "Phone cameras, handwriting recognition, and scientific images.",
    takeaway:
      "Vision models build complex objects from simpler spatial patterns.",
  },
  {
    number: 12,
    phase: 2,
    type: "lab",
    title: "Filters and Vision Failures",
    status: "tba",
    question: "Which visual features influence a classifier?",
    experiment:
      "Apply edge filters and test a classifier under changed angles, backgrounds, and lighting.",
    measure: "Accuracy before and after the change.",
    discussion: "Did the model learn the object or a shortcut?",
    labTier: "prepared",
  },
  {
    number: 13,
    phase: 3,
    type: "theory",
    title: "Next-Token Prediction and Tokens",
    status: "tba",
    coreIdea:
      "An LLM processes tokens and repeatedly predicts likely continuations.",
    application: "Autocomplete, chat, translation, and code generation.",
    takeaway:
      "Fluent continuation does not automatically guarantee factual knowledge.",
  },
  {
    number: 14,
    phase: 3,
    type: "lab",
    title: "Human Language Model",
    status: "tba",
    question: "How do probability and temperature change generated text?",
    experiment:
      "Students assign probabilities to possible next words and compare low- and high-temperature sampling.",
    extension: "Inspect tokenization of unusual words, equations, and code.",
    discussion: "When does randomness improve output, and when does it hurt?",
    labTier: "light",
  },
  {
    number: 15,
    phase: 3,
    type: "theory",
    title: "Embeddings",
    status: "tba",
    coreIdea:
      "Embeddings represent words, sentences, and documents as vectors whose positions capture useful relationships.",
    application:
      "Semantic search, recommendations, clustering, and document retrieval.",
    optionalMath: "Dot product and cosine similarity.",
    takeaway: "Similar meanings can be represented by nearby vectors.",
  },
  {
    number: 16,
    phase: 3,
    type: "lab",
    title: "Semantic Similarity Map",
    status: "tba",
    question: "Can vector similarity recognize meaning beyond shared words?",
    experiment:
      "Embed short sentences and display a two-dimensional similarity map.",
    measure:
      "Whether related meanings cluster together despite different wording.",
    discussion: "Which examples are misplaced or ambiguous?",
    labTier: "prepared",
  },
  {
    number: 17,
    phase: 3,
    type: "theory",
    title: "Attention and Transformers",
    status: "tba",
    coreIdea:
      "Attention lets each token gather relevant information from other tokens. Transformer blocks repeat this process.",
    optionalMath: "Attention(Q,K,V) = softmax(QK^T / sqrt(d))V",
    application: "Pronoun resolution, translation, summarization, and coding.",
    takeaway:
      "Transformers combine context through repeated attention and processing layers.",
  },
  {
    number: 18,
    phase: 3,
    type: "lab",
    title: "Attention Explorer",
    status: "tba",
    question: "Which earlier words influence an ambiguous token?",
    experiment:
      "Predict attention patterns and compare them with a small model's attention heat map.",
    variable: "Change a pronoun, a noun, or the sentence order.",
    discussion: "Does the visualization match what students expected?",
    labTier: "prepared",
  },
  {
    number: 19,
    phase: 3,
    type: "theory",
    title: "LLM Training and Evaluation",
    status: "tba",
    coreIdea:
      "Separate pretraining, post-training, prompting, hallucination, and evaluation.",
    application:
      "Study tools, math feedback, summarization, and structured extraction.",
    takeaway:
      "LLM quality must be tested on multiple unseen examples using a clear rubric.",
  },
  {
    number: 20,
    phase: 3,
    type: "lab",
    title: "Prompt Benchmark",
    status: "tba",
    question: "Which prompt change consistently improves performance?",
    experiment:
      "Compare baseline, example-guided, and structured-output prompts on the same hidden test cases.",
    measure: "Correctness, format compliance, hallucinations, and consistency.",
    discussion: "Did the improvement generalize beyond one example?",
    labTier: "prepared",
  },
  {
    number: 21,
    phase: 4,
    type: "theory",
    title: "RAG, Tools, and Agents",
    status: "tba",
    coreIdea:
      "RAG retrieves evidence. Tools perform actions. Agents coordinate steps and check results.",
    application:
      "School knowledge assistants, calculators, research workflows, and event planning.",
    takeaway: "A modern AI product is often a model inside a larger system.",
  },
  {
    number: 22,
    phase: 4,
    type: "lab",
    title: "AI Club Knowledge Assistant",
    status: "tba",
    question: "Does retrieval improve factual and citation accuracy?",
    experiment:
      "Compare a prompt-only model with a RAG assistant built from AI Club website content and documents. Develop it into a reusable club demonstration.",
    measure:
      "Answer accuracy, citation accuracy, and refusal when information is missing.",
    labTier: "signature",
  },
  {
    number: 23,
    phase: 4,
    type: "theory",
    title: "Reinforcement Learning",
    status: "tba",
    coreIdea:
      "An agent observes a state, chooses an action, receives a reward, and improves its policy.",
    application: "Games, robotics, recommendations, and automated decisions.",
    takeaway: "The reward defines what the agent tries to optimize.",
  },
  {
    number: 24,
    phase: 4,
    type: "lab",
    title: "Reward Hacking in a Grid World",
    status: "tba",
    question: "Can a badly designed reward create unintended behaviour?",
    experiment: "Train the same grid-world agent under two reward functions.",
    measure:
      "Goal completion, path length, total reward, and repeated useless actions.",
    discussion: "How should the reward be redesigned?",
    labTier: "prepared",
  },
  {
    number: 25,
    phase: 4,
    type: "theory",
    title: "Diffusion and Multimodal AI",
    status: "tba",
    coreIdea:
      "Multimodal models connect text, images, and audio. Diffusion models generate through iterative denoising.",
    application:
      "Image generation, editing, accessibility, and visual question answering.",
    takeaway:
      "Generated images emerge through repeated noise removal guided by learned patterns.",
  },
  {
    number: 26,
    phase: 4,
    type: "lab",
    title: "Controlled Image Generation",
    status: "tba",
    question: "How does one prompt or generation setting change an image?",
    experiment:
      "Keep the seed fixed while changing one prompt phrase, guidance setting, or denoising step count.",
    measure:
      "Prompt following, consistency, and unintended changes. Present results as a prepared comparison grid.",
    labTier: "signature",
  },
  {
    number: 27,
    phase: 5,
    type: "theory",
    title: "Interpretability and AI Security",
    status: "tba",
    coreIdea:
      "Feature importance, ablation, adversarial examples, prompt injection, and human oversight.",
    application:
      "Model debugging, RAG security, and detecting hidden shortcuts.",
    takeaway:
      "Strong average performance does not guarantee that a system is understandable, secure, or robust.",
  },
  {
    number: 28,
    phase: 5,
    type: "lab",
    title: "Final AI Red-Team Challenge",
    status: "tba",
    question: "Can teams find a meaningful AI failure and propose a defence?",
    stationA: "Alter an image or feature and observe prediction changes.",
    stationB:
      "Run a controlled prompt-injection test against the AI Club RAG assistant.",
    report:
      "Report one attack, one failure, one possible defence, and one remaining limitation. Use only prepared club systems and synthetic/public data.",
    labTier: "signature",
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
export const theoryTotal = meetings.filter((m) => m.type === "theory").length;
export const labTotal = meetings.filter((m) => m.type === "lab").length;
