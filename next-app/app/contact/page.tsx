import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | ERE Studio",
  description:
    "Contact ERE Studio about residential, hospitality, renovation, and hybrid-space interior projects.",
}

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="Tell us what the room needs to become."
        copy="Share the property, the constraints, and the moment that made the project necessary. The first response usually clarifies fit, timing, and the right working scope."
      />

      <section className="section-block">
        <div className="section-inner contact-grid">
          <div className="contact-aside">
            <p className="section-label">Start a Project</p>
            <h2>Share the shape of the space.</h2>
            <p>
              The most useful notes are specific: what exists now, what is not
              working, when decisions need to be made, and who will build the
              work.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
