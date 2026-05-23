import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RevealObserver } from "@/components/reveal-observer"
import { ProjectMedia } from "@/components/ui/project-media"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "About | ERE Studio",
  description:
    "About ERE Studio, a small interior and spatial design practice working across residences, hospitality, renovation, and hybrid spaces.",
}

const aboutSections = [
  {
    title: "Studio",
    copy: "ERE Studio is intentionally small. Each project is led closely from first walk-through to the final edit, with outside makers and consultants brought in only when the work calls for them.",
  },
  {
    title: "Point of View",
    copy: "The studio favors quiet rooms with strong bones: honest material, a clear threshold, good storage, and one decisive gesture rather than a room full of decoration.",
  },
  {
    title: "Collaboration",
    copy: "Clients are invited into the decisions that shape use and budget. The studio holds the line on proportion, sequencing, and material quality.",
  },
  {
    title: "Where We Work",
    copy: "Current work is centered between Toronto, Paris, Miami, and selected remote sites where the project has enough depth to justify the travel.",
  },
]

export default function AboutPage() {
  const studioImage = projects[0].gallery[1]

  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="About"
        title="A small studio for rooms with a long memory."
        copy="ERE Studio works with clients who want fewer, stronger decisions: spaces that feel inevitable after the work is complete."
      />

      <section className="section-block">
        <div className="section-inner about-grid">
          <div className="reveal">
            <ProjectMedia
              src={studioImage.src}
              alt={studioImage.alt}
              shape="portrait"
              caption="Reference atmosphere: proportion, filtered light, and original detail held without excess."
              sizes="(min-width: 1080px) 38vw, 100vw"
            />
          </div>
          <div className="about-content">
            {aboutSections.map((section, index) => (
              <article
                key={section.title}
                className={`about-row reveal reveal-delay-${index + 1}`}
              >
                <span className="number-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
