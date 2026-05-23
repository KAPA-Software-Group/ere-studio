"use client"

import { useMemo, useState, type FormEvent } from "react"

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "location"
  | "projectType"
  | "timeline"
  | "budget"
  | "description"

type FieldConfig = {
  label: string
  name: FieldName
  type?: string
  helper: string
  required?: boolean
}

const fields: FieldConfig[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    helper: "The main client or project lead.",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    helper: "Used for the first response only.",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    helper: "Optional, useful for active sites.",
  },
  {
    label: "Location",
    name: "location",
    type: "text",
    helper: "City, country, or property address.",
    required: true,
  },
  {
    label: "Project type",
    name: "projectType",
    type: "text",
    helper: "Residence, restaurant, hotel, retail, or hybrid.",
  },
  {
    label: "Timeline",
    name: "timeline",
    type: "text",
    helper: "Approximate start date or opening date.",
  },
  {
    label: "Budget range",
    name: "budget",
    type: "text",
    helper: "A working range helps define the right scope.",
  },
]

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  timeline: "",
  budget: "",
  description: "",
}

function validate(values: Record<FieldName, string>) {
  const nextErrors: Partial<Record<FieldName, string>> = {}

  if (!values.name.trim()) nextErrors.name = "Add a contact name."
  if (!values.location.trim()) nextErrors.location = "Add the project location."
  if (!values.description.trim()) {
    nextErrors.description = "Describe the space in a few lines."
  }

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
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ready">("idle")

  const body = useMemo(() => {
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Location: ${values.location}`,
      `Project type: ${values.projectType || "Not provided"}`,
      `Timeline: ${values.timeline || "Not provided"}`,
      `Budget range: ${values.budget || "Not provided"}`,
      "",
      "Project description:",
      values.description,
    ]

    return lines.join("\n")
  }, [values])

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
        <label key={field.name} className="form-field">
          <span>{field.label}</span>
          <input
            name={field.name}
            type={field.type ?? "text"}
            value={values[field.name]}
            aria-invalid={Boolean(errors[field.name])}
            aria-describedby={`${field.name}-helper ${field.name}-error`}
            required={field.required}
            onChange={(event) => {
              const value = event.target.value
              setValues((current) => ({ ...current, [field.name]: value }))
              if (errors[field.name]) {
                setErrors((current) => ({
                  ...current,
                  [field.name]: undefined,
                }))
              }
            }}
          />
          <small id={`${field.name}-helper`}>{field.helper}</small>
          <strong id={`${field.name}-error`} role="alert">
            {errors[field.name] ?? ""}
          </strong>
        </label>
      ))}

      <label className="form-field form-field-full">
        <span>Project description</span>
        <textarea
          name="description"
          rows={7}
          value={values.description}
          aria-invalid={Boolean(errors.description)}
          aria-describedby="description-helper description-error"
          required
          onChange={(event) => {
            setValues((current) => ({
              ...current,
              description: event.target.value,
            }))
            if (errors.description) {
              setErrors((current) => ({ ...current, description: undefined }))
            }
          }}
        />
        <small id="description-helper">
          Include the property type, current condition, and what has to change.
        </small>
        <strong id="description-error" role="alert">
          {errors.description ?? ""}
        </strong>
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
            ? "Your email client is opening with the inquiry draft."
            : "Typical response window: two business days."}
        </p>
      </div>
    </form>
  )
}
