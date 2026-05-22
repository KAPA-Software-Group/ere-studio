import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Process | ERE Studio",
  description: "Base process page structure for ERE Studio.",
}

const steps = [
  "Discovery Call",
  "Creative Direction",
  "Concept Development",
  "Design Package",
  "Implementation Support",
]

export default function ProcessPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Process"
        title="A measured design sequence."
        copy="A placeholder process page for mapping the studio experience from first conversation through implementation support."
      />

      <section className="section-block muted-section">
        <div className="section-inner timeline">
          {steps.map((step, index) => (
            <article
              key={step}
              className={`timeline-item reveal reveal-delay-${index + 1}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{step}</h2>
                <p>
                  Placeholder explanation for this stage, including decisions,
                  deliverables, checkpoints, and the expected client rhythm.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
