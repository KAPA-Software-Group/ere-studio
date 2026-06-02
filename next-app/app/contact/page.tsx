import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Get Started | ERE Studio",
  description:
    "Start a new interior or spatial design project with ERE Studio.",
}

export default function ContactPage() {
  return (
    <main className="page-shell contact-start-page">
      <RevealObserver />

      <section className="contact-start-section">
        <div className="contact-start-heading reveal">
          <h1>Start a Project</h1>
        </div>
        <div className="contact-start-form reveal">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
