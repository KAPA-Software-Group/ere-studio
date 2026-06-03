"use client"

import Image from "next/image"
import { useState } from "react"

type GalleryImage = { src: string; alt: string }

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const go = (delta: number) =>
    setIndex((current) => ((current + delta) % total + total) % total)

  return (
    <div className="project-gallery">
      <div className="project-gallery-stage">
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1080px) 90vw, 100vw"
            className="project-gallery-img"
            data-active={i === index ? "true" : undefined}
          />
        ))}

        <button
          type="button"
          className="pg-nav pg-prev"
          onClick={() => go(-1)}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="pg-nav pg-next"
          onClick={() => go(1)}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>

      <div className="project-gallery-bar">
        <span>
          {index + 1} / {total}
        </span>
      </div>
    </div>
  )
}
