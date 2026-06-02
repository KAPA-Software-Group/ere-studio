"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// First slide is the existing hero photograph; the rest are the new interiors.
const slides = [
  {
    src: "/projects/midtown-hideaway/opening-image-final.jpg",
    alt: "Midtown Hideaway hallway looking through a red arch toward blue built-ins and pink boots.",
  },
  {
    src: "/home/slideshow/slide-1.jpg",
    alt: "Sunlit living room with timber ceiling beams, white built-in shelving, and a gallery wall.",
  },
  {
    src: "/home/slideshow/slide-2.jpg",
    alt: "Parisian window corner with a dark console, white lilies, and a moulded plywood chair.",
  },
  {
    src: "/home/slideshow/slide-3.jpg",
    alt: "Blue shaker cabinetry with a rounded dining counter and a pink armchair by the window.",
  },
  {
    src: "/home/slideshow/slide-4.jpg",
    alt: "Two-level wellness store with potted orange trees and warm timber shelving.",
  },
]

// How long each image stays on screen before crossfading to the next.
const SLIDE_DURATION = 2800

export function HomeSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReduced) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="boots-hero-stage hero-slideshow"
      aria-label="ERE Studio interiors"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className="boots-hero-image hero-slide"
          data-active={i === index ? "true" : undefined}
          aria-hidden={i === index ? undefined : "true"}
        />
      ))}
    </div>
  )
}
