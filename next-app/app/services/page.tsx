import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Services | ERE Studio",
  description: "Base services page structure for ERE Studio.",
}

const serviceSections = [
  "Residential Interior Design",
  "Hospitality & Commercial Design",
  "Renovation + Restoration",
  "Hybrid Spaces",
]

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Services"
        title="Design services placeholder."
        copy="A calm services framework for reviewing scope, hierarchy, and page flow before final content is added."
      />

      <section className="section-block">
        <div className="section-inner service-list">
          {serviceSections.map((service, index) => (
            <article
              key={service}
              className={`service-row reveal reveal-delay-${index + 1}`}
            >
              <span className="number-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{service}</h2>
                <p>
                  Placeholder service copy describing the intended audience,
                  sample deliverables, collaboration model, and design
                  considerations for this category.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
