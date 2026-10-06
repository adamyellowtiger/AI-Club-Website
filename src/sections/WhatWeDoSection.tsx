import { BookOpen, Code2, FlaskConical, Compass } from "lucide-react";
export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="learning-region">
      <div className="section-shell">
        <p className="eyebrow">How we learn</p>
        <h2>Understand. Build. Test. Look forward.</h2>
        <div className="learning-steps">
          <article>
            <BookOpen aria-hidden="true" />
            <span className="step-number">01 / UNDERSTAND</span>
            <h3>Look inside the ideas.</h3>
            <p>
              Learn how neural networks, LLMs, transformers, RAG, agents, and
              reinforcement learning work.
            </p>
          </article>
          <article>
            <Code2 aria-hidden="true" />
            <span className="step-number">02 / BUILD</span>
            <h3>Work with real code.</h3>
            <p>
              Use Python, scikit-learn, and PyTorch to train models, build
              search systems, and create AI applications.
            </p>
          </article>
          <article>
            <FlaskConical aria-hidden="true" />
            <span className="step-number">03 / TEST</span>
            <h3>Find the failure.</h3>
            <p>
              Measure bias, shortcuts, hallucinations, and unsafe behaviour.
              Compare evidence instead of treating AI as magic.
            </p>
          </article>
          <article>
            <Compass aria-hidden="true" />
            <span className="step-number">04 / LOOK FORWARD</span>
            <h3>Know where skills lead.</h3>
            <p>
              Explore real roles, adaptable skills, economic changes, and the
              ethical decisions behind reliable systems.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
