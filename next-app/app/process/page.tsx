import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Process | ERE Studio",
  description:
    "ERE Studio's design process from site reading and creative direction through documentation and implementation support.",
}

const steps = [
  {
    title: "Site Reading",
    copy: "We begin with the existing room: light, circulation, awkward dimensions, inherited materials, and the habits the space already supports.",
  },
  {
    title: "Creative Direction",
    copy: "The first edit defines mood, references, material constraints, and what the project should refuse. This becomes the filter for every later decision.",
  },
  {
    title: "Concept Development",
    copy: "Plans, elevations, key details, palettes, and furniture direction are developed together so the architecture and loose objects do not drift apart.",
  },
  {
    title: "Design Package",
    copy: "The agreed direction is translated into drawings, schedules, finish notes, and procurement guidance for the contractor, maker, or client team.",
  },
  {
    title: "Implementation Support",
    copy: "During build-out, we review samples, answer site questions, adjust when real conditions appear, and protect the intent of the room through installation.",
  },
]

export default function ProcessPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Process"
        title="A measured sequence from room to detail."
        copy="The studio works in clear phases so clients know what is being decided, what is still open, and when the work moves from atmosphere into documentation."
      />

      <section className="section-block muted-section">
        <div className="section-inner timeline">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`timeline-item reveal reveal-delay-${index + 1}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
