import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PlaceholderVisual } from "@/components/ui/placeholder-visual"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "About | ERE Studio",
  description: "Base about page structure for ERE Studio.",
}

const aboutSections = [
  "Studio intro",
  "Design philosophy",
  "Founder / team placeholder",
  "Where we work",
]

export default function AboutPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="About"
        title="Studio profile placeholder."
        copy="A base page for the studio story, design point of view, founder information, and working regions."
      />

      <section className="section-block">
        <div className="section-inner about-grid">
          <PlaceholderVisual label="Studio portrait placeholder" size="portrait" />
          <div className="about-content">
            {aboutSections.map((section, index) => (
              <article
                key={section}
                className={`about-row reveal reveal-delay-${index + 1}`}
              >
                <span className="number-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{section}</h2>
                  <p>
                    Placeholder text for reviewing section order, rhythm, and
                    information hierarchy before the final studio copy is
                    written.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
