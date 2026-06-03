"use client"

import { useEffect, useState, type ReactNode, type SyntheticEvent } from "react"

export type ShapedSpace = {
  number: string
  title: string
  description: string
}

function renderTitle(title: string): ReactNode {
  const parts = title.split(" + ")
  return parts.map((part, index) => (
    <span key={part}>
      {part}
      {index < parts.length - 1 && <span className="title-plus"> + </span>}
    </span>
  ))
}

function SpaceItem({ space }: { space: ShapedSpace }) {
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState("")

  useEffect(() => {
    if (!open) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      const done = window.setTimeout(() => setTyped(space.description), 0)
      return () => window.clearTimeout(done)
    }

    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(space.description.slice(0, i))
      if (i >= space.description.length) window.clearInterval(id)
    }, 14)

    return () => window.clearInterval(id)
  }, [open, space.description])

  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    const isOpen = event.currentTarget.open
    setOpen(isOpen)
    if (!isOpen) setTyped("")
  }

  const isTyping = open && typed.length < space.description.length

  return (
    <details className="about-space-item" onToggle={handleToggle}>
      <summary>
        <span>{space.number}</span>
        <strong>{renderTitle(space.title)}</strong>
      </summary>
      <p>
        {open ? typed : space.description}
        {isTyping && <span className="type-caret" aria-hidden="true" />}
      </p>
    </details>
  )
}

export function SpacesAccordion({ items }: { items: ShapedSpace[] }) {
  return (
    <div className="about-spaces-list">
      {items.map((space) => (
        <SpaceItem key={space.number} space={space} />
      ))}
    </div>
  )
}
