"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { projects, type Project } from "@/lib/projects"

// How long each spread stays open before the magazine turns itself.
const FLIP_INTERVAL = 3600

const pad = (n: number) => String(n).padStart(2, "0")

function LeftPage({ project }: { project: Project }) {
  const image = project.gallery[0] ?? project.hero
  return (
    <div className="mag-leftpage">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 900px) 32vw, 46vw"
      />
    </div>
  )
}

function RightPage({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  return (
    <div className="mag-rightpage">
      <div className="mag-photo">
        <Image
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          sizes="(min-width: 900px) 32vw, 46vw"
        />
      </div>
      <div className="mag-text">
        <p className="mag-meta">
          {project.location} / {project.year}
        </p>
        <h3>{project.title}</h3>
        <p className="mag-intro">{project.intro}</p>
        <Link href={`/portfolio/${project.slug}`} className="mag-link">
          View Project
        </Link>
        <span className="mag-folio">
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>
    </div>
  )
}

export function PortfolioMagazine() {
  // `current` is the spread on view; the book starts open to the first project.
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const goTo = (next: number) => {
    setCurrent(((next % total) + total) % total)
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, FLIP_INTERVAL)
    return () => clearInterval(id)
  }, [total])

  return (
    <div className="magazine">
      <div className="magazine-book">
        {/* Static left page beneath the stack, holding the first project. */}
        <div className="mag-base-left">
          <LeftPage project={projects[0]} />
        </div>

        {projects.map((project, index) => {
          const flipped = index < current
          const backProject = projects[index + 1]
          return (
            <div
              key={project.slug}
              className="mag-leaf"
              data-flipped={flipped}
              style={{ zIndex: flipped ? index + 1 : total - index + 1 }}
              aria-hidden={index === current ? undefined : "true"}
            >
              <div className="mag-face mag-face-front">
                <RightPage project={project} index={index} total={total} />
              </div>
              <div className="mag-face mag-face-back">
                {backProject ? (
                  <LeftPage project={backProject} />
                ) : (
                  <div className="mag-endpage">
                    <span>ERE Studio</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="magazine-controls">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous project"
        >
          &#8249;
        </button>
        <span aria-live="polite">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next project"
        >
          &#8250;
        </button>
      </div>
    </div>
  )
}
