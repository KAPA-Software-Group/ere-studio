"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// The first slide is the page's main photo (the Midtown Hideaway bedroom
// looking through to the den); it leads, then the carousel cycles the rest.
const slides = [
  {
    src: "/home/midtown-bedroom-den.jpg",
    alt: "Midtown Hideaway bedroom with botanical wallpaper looking through a sage door into a warm terracotta den.",
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
    src: "/home/slideshow/artists-escape-living-room.jpg",
    alt: "Bright Artist's Escape living room with a sculptural woven pendant, built-in shelving, and collected art.",
  },
  {
    src: "/home/slideshow/liberty-village-living-room.jpg",
    alt: "Liberty Village living room with sculptural seating, a paper lantern, and a poolside photograph.",
  },
  {
    src: "/projects/midtown-hideaway/opening-image-final.jpg",
    alt: "Midtown Hideaway hallway looking through a red arch toward blue built-ins and pink boots.",
  },
]

// Hold the main photo a beat longer on load before the carousel begins,
// then crossfade between the remaining images at a steady pace.
const FIRST_SLIDE_DURATION = 4200
const SLIDE_DURATION = 2800

export function HomeSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReduced) return

    let timeout = window.setTimeout(function advance() {
      setIndex((i) => (i + 1) % slides.length)
      timeout = window.setTimeout(advance, SLIDE_DURATION)
    }, FIRST_SLIDE_DURATION)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div
      className="boots-hero-stage hero-slideshow"
      aria-label="ère studio interiors"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-slide"
          data-active={i === index ? "true" : undefined}
          aria-hidden={i === index ? undefined : "true"}
        >
          <div className="hero-slide-frame">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`boots-hero-image hero-slide-image${
                slide.src === "/home/slideshow/slide-3.jpg"
                  ? " hero-slide-image-native-frame"
                  : ""
              }`}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
