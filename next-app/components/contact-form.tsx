"use client"

import { useMemo, useState, type FormEvent } from "react"

type FieldName = "name" | "email" | "message"

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
    helper: "Your name.",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    helper: "Where we can reach you.",
    required: true,
  },
]

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  message: "",
}

function validate(values: Record<FieldName, string>) {
  const nextErrors: Partial<Record<FieldName, string>> = {}

  if (!values.name.trim()) nextErrors.name = "Add a contact name."
  if (!values.message.trim()) {
    nextErrors.message = "Add a short message."
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
      "",
      "Message:",
      values.message,
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
        <span>Message</span>
        <textarea
          name="message"
          rows={8}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-helper message-error"
          required
          onChange={(event) => {
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
            if (errors.message) {
              setErrors((current) => ({ ...current, message: undefined }))
            }
          }}
        />
        <small id="message-helper">Tell us a little about the project.</small>
        <strong id="message-error" role="alert">
          {errors.message ?? ""}
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
