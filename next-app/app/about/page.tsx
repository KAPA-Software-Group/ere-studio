import type { Metadata } from "next"
import Image from "next/image"
import { RevealObserver } from "@/components/reveal-observer"

const shapedSpaces = [
  {
    number: "01",
    title: "Interior Design + Spatial Planning",
    description:
      "We create interiors that are both beautiful and functional, with thoughtful layouts that support the way you live. From furniture placement to atmosphere, every element is considered to make the space feel balanced and complete.",
  },
  {
    number: "02",
    title: "Hybrid Spaces",
    description:
      "We design flexible spaces that can shift with your needs, whether that means blending work and home, entertaining and everyday living, or comfort and functionality. The goal is to create rooms that feel effortless, adaptable, and refined without losing warmth or personality.",
  },
  {
    number: "03",
    title: "Renovation + Restoration",
    description:
      "We help reimagine existing spaces while preserving what makes them meaningful. Through careful updates, material selections, and design direction, we bring new life to homes with respect for their original character and lasting value.",
  },
]

export const metadata: Metadata = {
  title: "About | ERE Studio",
  description:
    "About ERE Studio, a small interior and spatial design practice working across residences, hospitality, renovation, and hybrid spaces.",
}

export default function AboutPage() {
  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="about-studio-hero">
        <div className="section-inner about-studio-grid">
          <div className="about-studio-copy reveal">
            <h1>About the studio</h1>
            <p className="about-studio-subtitle">
              Elevated interiors, grounded in the way you live.
            </p>
          </div>
          <div className="about-studio-image-wrap reveal reveal-delay-1">
            <Image
              src="/projects/midtown-hideaway/magazine-red-room.jpg"
              alt="A warm red study nook with framed art, flowers, books, and a blue chair."
              width={924}
              height={1368}
              sizes="(min-width: 900px) 44vw, 100vw"
              className="about-studio-image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="about-studio-note">
        <div className="section-inner">
          <div className="about-studio-note-copy reveal">
            <p>
              Our studio takes on only a select number of projects each year,
              allowing us to give every client, space, and detail the attention
              it deserves. Each project is carefully curated around the client’s
              taste and vision to ensuring the final design feels personal.
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
                    <strong>{space.title}</strong>
                  </summary>
                  <p>{space.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
