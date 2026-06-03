"use client"

import { useMemo, useState, type FormEvent } from "react"

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "budget"
  | "timeline"
  | "projectType"
  | "location"

type BaseField = {
  label: string
  name: FieldName
  helper: string
  required?: boolean
  full?: boolean
}

type InputField = BaseField & { kind: "input"; type: string }
type SelectField = BaseField & { kind: "select"; options: string[] }

type Field = InputField | SelectField

const fields: Field[] = [
  {
    kind: "input",
    label: "Name",
    name: "name",
    type: "text",
    helper: "Your name.",
    required: true,
  },
  {
    kind: "input",
    label: "Email",
    name: "email",
    type: "email",
    helper: "Where we can reach you.",
    required: true,
  },
  {
    kind: "input",
    label: "Phone number",
    name: "phone",
    type: "tel",
    helper: "Optional, if you prefer a call.",
  },
  {
    kind: "select",
    label: "Budget",
    name: "budget",
    helper: "An approximate range is fine.",
    options: [
      "Under $25k",
      "$25k – $50k",
      "$50k – $100k",
      "$100k – $250k",
      "$250k +",
    ],
  },
  {
    kind: "select",
    label: "Timeline",
    name: "timeline",
    helper: "When you would like to begin.",
    options: [
      "Flexible",
      "Within 1–3 months",
      "Within 3–6 months",
      "Within 6–12 months",
      "12+ months out",
    ],
  },
  {
    kind: "select",
    label: "Project type",
    name: "projectType",
    helper: "What you are planning.",
    options: [
      "Residential",
      "Hospitality",
      "Renovation + Restoration",
      "Hybrid Space",
      "Other",
    ],
  },
  {
    kind: "input",
    label: "Project location",
    name: "location",
    type: "text",
    helper: "City, region, or country.",
    full: true,
  },
]

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  timeline: "",
  projectType: "",
  location: "",
}

function validate(values: Record<FieldName, string>) {
  const nextErrors: Partial<Record<FieldName, string>> = {}

  if (!values.name.trim()) nextErrors.name = "Add a contact name."

  const email = values.email.trim()
  if (!email) {
    nextErrors.email = "Add an email address."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    nextErrors.email = "Use a valid email address."
  }

  return nextErrors
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [files, setFiles] = useState<string[]>([])
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ready">("idle")

  const body = useMemo(() => {
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone number: ${values.phone}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      `Project type: ${values.projectType}`,
      `Project location: ${values.location}`,
      "",
      `Inspiration files: ${files.length ? files.join(", ") : "none attached"}`,
    ]
    return lines.join("\n")
  }, [values, files])

  const update = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle")
      return
    }

    setStatus("sending")
    const subject = encodeURIComponent(`Project inquiry from ${values.name}`)
    const encodedBody = encodeURIComponent(body)
    window.setTimeout(() => {
      setStatus("ready")
      window.location.href = `mailto:inquiries@erestudio.com?subject=${subject}&body=${encodedBody}`
    }, 250)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {fields.map((field) => (
        <label
          key={field.name}
          className={`form-field${field.full ? " form-field-wide" : ""}`}
        >
          <span>{field.label}</span>

          {field.kind === "select" ? (
            <select
              name={field.name}
              value={values[field.name]}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={`${field.name}-helper ${field.name}-error`}
              onChange={(event) => update(field.name, event.target.value)}
            >
              <option value="">Select…</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type}
              value={values[field.name]}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={`${field.name}-helper ${field.name}-error`}
              required={field.required}
              onChange={(event) => update(field.name, event.target.value)}
            />
          )}

          <small id={`${field.name}-helper`}>{field.helper}</small>
          <strong id={`${field.name}-error`} role="alert">
            {errors[field.name] ?? ""}
          </strong>
        </label>
      ))}

      <label className="form-field form-field-wide">
        <span>Inspiration upload</span>
        <input
          type="file"
          name="inspiration"
          accept="image/*,.pdf"
          multiple
          className="form-file"
          onChange={(event) =>
            setFiles(Array.from(event.target.files ?? []).map((f) => f.name))
          }
        />
        <small id="inspiration-helper">
          {files.length
            ? `Selected: ${files.join(", ")}`
            : "Images or PDFs that capture the look you are after."}
        </small>
        <strong />
      </label>

      <div className="form-submit-row">
        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Preparing email" : "Send inquiry"}
        </button>
        <p aria-live="polite">
          {status === "ready"
            ? "Your email client is opening with the inquiry draft. Attach your inspiration files there."
            : "Typical response window: two business days."}
        </p>
      </div>
    </form>
  )
}
