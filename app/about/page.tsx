import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { RevealObserver } from "@/components/reveal-observer"

function renderTitle(title: string) {
  const parts = title.split(" + ")
  return parts.map((part, index) => (
    <span key={part}>
      {part}
      {index < parts.length - 1 && <span className="title-plus"> + </span>}
    </span>
  ))
}

const shapedSpaces = [
  {
    number: "01",
    title: "Interior Design + Spatial Planning",
    description:
      "We create interiors that are both beautiful and functional, with thoughtful layouts that support the way you live. From furniture placement to atmosphere, every element is considered to make the space feel balanced and complete.",
  },
  {
    number: "02",
    title: "Renovation + Restoration",
    description:
      "We help reimagine existing spaces while preserving what makes them meaningful. Through careful updates, material selections, and design direction, we bring new life to homes with respect for their original character and lasting value.",
  },
  {
    number: "03",
    title: "Hospitality & Commercial Design",
    description:
      "We create thoughtfully designed spaces that balance style, functionality, and brand identity. From unique restaurants and eclectic wellness spaces to inspiring workplaces and retail environments, each project is tailored to your brand.",
  },
]

const processSteps = [
  { number: "01", title: "Foundational Meeting" },
  { number: "02", title: "Design Presentation" },
  { number: "03", title: "Delivery of Design Package" },
  { number: "04", title: "Upon Approval: Implementation of Design" },
  { number: "05", title: "Installation" },
]

export const metadata: Metadata = {
  title: "About | ERE Studio",
  description:
    "About ERE Studio, a small interior and spatial design practice working across residences, renovation, hospitality, and commercial spaces.",
}

export default function AboutPage() {
  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="about-studio-hero">
        <div className="section-inner about-studio-grid">
          <div className="about-studio-copy reveal">
            <h1 className="brand-wordmark">About the studio</h1>
            <p className="about-studio-subtitle">
              Elevated interiors, grounded in the way you live.
            </p>
          </div>
          <div className="about-studio-image-wrap reveal reveal-delay-1">
            <Image
              src="/about/owners-original.jpg"
              alt="The owners of ERE Studio in a colorful interior."
              width={3764}
              height={5638}
              sizes="(min-width: 900px) 44vw, 100vw"
              className="about-studio-image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="about-studio-note">
        <div className="section-inner">
          <h2 className="about-philosophy-heading reveal">Our Philosophy</h2>
          <div className="about-studio-note-copy reveal">
            <p>
              Our studio is committed to providing each client, space and
              detail the attention it deserves. We design and hand-select every
              element of your space, from the interior architecture to the
              final furnishings, delivering a cohesive design experience.
            </p>
            <p>
              From the overall concept to the smallest finishing detail, we
              focus on creating spaces that are not only beautiful, but deeply
              personal, practical, and made to be lived in.
            </p>
          </div>

          <div className="about-spaces reveal reveal-delay-1">
            <h2>Spaces We Shape</h2>
            <div className="about-spaces-list">
              {shapedSpaces.map((space) => (
                <details key={space.number} className="about-space-item">
                  <summary>
                    <span>{space.number}</span>
                    <strong>{renderTitle(space.title)}</strong>
                  </summary>
                  <p>{space.description}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="about-spaces about-process reveal">
            <h2>Process</h2>
            <ol className="about-spaces-list about-process-list">
              {processSteps.map((step) => (
                <li key={step.number} className="about-space-item about-process-item">
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="start-project-cta about-cta">
            <Link href="/contact" className="start-project-button">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
