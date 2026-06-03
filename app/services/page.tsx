import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Services | ERE Studio",
  description:
    "Residential, hospitality, renovation, and hybrid-space design services by ERE Studio.",
}

const serviceSections = [
  {
    title: "Residential Interior Design",
    copy: "Full-home and apartment interiors shaped around daily rituals, storage, light, and the few pieces that should stay in the room for years.",
    details: ["Spatial planning", "Material direction", "Custom joinery"],
  },
  {
    title: "Hospitality & Commercial Design",
    copy: "Restaurants, boutique stays, and client-facing rooms with a clear operating rhythm: durable surfaces, legible service paths, and a room people remember without needing signage.",
    details: ["Guest journey", "Lighting strategy", "FF&E specification"],
  },
  {
    title: "Renovation + Restoration",
    copy: "Careful updates to older buildings where proportion, original fabric, and modern use have to be negotiated rather than flattened.",
    details: [
      "Existing-condition review",
      "Detail coordination",
      "Finish schedules",
    ],
  },
  {
    title: "Hybrid Spaces",
    copy: "Homes that host work, retail rooms that behave like salons, and private spaces that occasionally need to receive a public audience.",
    details: [
      "Use mapping",
      "Flexible furniture plans",
      "Commissioning support",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <RevealObserver />
      <PageHero
        eyebrow="Services"
        title="Rooms planned for use, not presentation alone."
        copy="ERE Studio works from early spatial decisions through final atmosphere. The scope can be narrow or complete, but every engagement starts with how the room has to behave."
      />

      <section className="section-block">
        <div className="section-inner service-list">
          {serviceSections.map((service, index) => (
            <article
              key={service.title}
              className={`service-row reveal reveal-delay-${index + 1}`}
            >
              <span className="number-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
