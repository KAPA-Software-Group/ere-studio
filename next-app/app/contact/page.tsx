import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Contact | ERE Studio",
  description: "Base inquiry page structure for ERE Studio.",
}

const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "tel" },
  { label: "Location", name: "location", type: "text" },
  { label: "Project type", name: "projectType", type: "text" },
  { label: "Timeline", name: "timeline", type: "text" },
  { label: "Budget range", name: "budget", type: "text" },
]

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="Project inquiry placeholder."
        copy="A simple inquiry structure for future form wiring. Submission behavior is intentionally not connected yet."
      />

      <section className="section-block">
        <div className="section-inner contact-grid">
          <div className="contact-aside">
            <p className="section-label">Start a Project</p>
            <h2>Share the shape of the space.</h2>
            <p>
              Placeholder support text for project inquiries, location details,
              timing, and budget expectations.
            </p>
          </div>

          <form className="contact-form">
            {fields.map((field) => (
              <label key={field.name} className="form-field">
                <span>{field.label}</span>
                <input name={field.name} type={field.type} />
              </label>
            ))}

            <label className="form-field form-field-full">
              <span>Project description</span>
              <textarea name="description" rows={7} />
            </label>

            <button type="button" className="btn-primary form-submit">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
