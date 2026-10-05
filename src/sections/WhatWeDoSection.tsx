import { BookOpen, FlaskConical, Blocks } from "lucide-react";
export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="learning-region">
      <div className="section-shell">
        <p className="eyebrow">How we learn</p>
        <h2>Less watching. More figuring things out.</h2>
        <div className="learning-steps">
          <article>
            <BookOpen />
            <span className="step-number">01 / LEARN</span>
            <h3>Make sense of the idea.</h3>
            <p>
              Short theory sessions explain what modern AI systems actually do,
              one concept at a time.
            </p>
            <small>Theory program · Adam Fan</small>
          </article>
          <article>
            <FlaskConical />
            <span className="step-number">02 / TEST</span>
            <h3>See what holds up.</h3>
            <p>
              Make a prediction. Change one variable. Use a controlled
              experiment to examine the evidence.
            </p>
            <small>Lab program · Leo Wang</small>
          </article>
          <article>
            <Blocks />
            <span className="step-number">03 / BUILD</span>
            <h3>Take the idea further.</h3>
            <p>
              Explore tools, club demonstrations, Daily Bits, and challenges.
              Ask better questions together.
            </p>
            <small>Teaching support · Albert Yang</small>
          </article>
        </div>
      </div>
    </section>
  );
}
