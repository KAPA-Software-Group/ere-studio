"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { RevealObserver } from "@/components/reveal-observer"
import { type Project } from "@/lib/projects"

type ProjectDetailPageProps = {
  project: Project
}

const gallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/portfolio/${slug}/img-${i + 1}.jpg`)

// Ordered project photographs shown on each detail page (first is the hero).
const detailImages: Record<string, string[]> = {
  "parisian-suite": gallery("parisian-suite", 16),
  "midtown-hideaway": gallery("midtown-hideaway", 17),
  "little-orange": gallery("little-orange", 7),
  "artists-escape": gallery("artists-escape", 14),
  "liberty-village": gallery("liberty-village", 10),
}

const dev = process.env.NODE_ENV === "development"

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const custom = detailImages[project.slug]
  const heroSrc = custom?.[0] ?? project.hero.src
  const galleryImages = custom
    ? custom.slice(1)
    : project.gallery.map((g) => g.src)
  const lightboxImages = [
    { src: heroSrc, alt: project.hero.alt },
    ...galleryImages.map((src, i) => ({
      src,
      alt: `${project.title}, image ${i + 2}`,
    })),
  ]
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const totalImages = lightboxImages.length
  const activeImage = lightboxImages[lightboxIndex]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const showPreviousImage = useCallback(() => {
    setLightboxIndex((index) => (index - 1 + totalImages) % totalImages)
  }, [totalImages])

  const showNextImage = useCallback(() => {
    setLightboxIndex((index) => (index + 1) % totalImages)
  }, [totalImages])

  useEffect(() => {
    if (!lightboxOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") showPreviousImage()
      if (event.key === "ArrowRight") showNextImage()
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [closeLightbox, lightboxOpen, showNextImage, showPreviousImage])

  return (
    <main className="page-shell project-detail">
      <RevealObserver />

      {/* Hero image first */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-frame">
          <button
            type="button"
            className="project-image-trigger project-image-trigger-hero"
            onClick={() => openLightbox(0)}
            aria-label={`Open ${project.title} image 1`}
          >
            <Image
              src={heroSrc}
              alt={project.hero.alt}
              fill
              priority
              sizes="100vw"
              className="project-detail-hero-img"
              unoptimized={dev}
            />
          </button>
        </div>
      </section>

      {/* Title + meta + lead, underneath the hero */}
      <section className="project-detail-head">
        <div className="section-inner">
          <div className="project-detail-head-grid">
            <h1 className="project-detail-title reveal">{project.title}</h1>
            <dl className="project-detail-meta reveal reveal-delay-1">
              <div>
                <dt>Date</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
            </dl>
          </div>
          <p className="project-detail-lead reveal reveal-delay-2">
            {project.intro}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-detail-gallery">
        <div className="section-inner">
          <div className="project-detail-gallery-grid stagger">
            {galleryImages.map((src, i) => {
              const full =
                i === galleryImages.length - 1 && galleryImages.length % 2 === 1
              return (
                <figure
                  key={src}
                  className={`project-detail-figure${
                    full ? " project-detail-figure-full" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="project-image-trigger"
                    onClick={() => openLightbox(i + 1)}
                    aria-label={`Open ${project.title} image ${i + 2}`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title}, image ${i + 2}`}
                      fill
                      sizes={full ? "100vw" : "(min-width: 760px) 48vw, 100vw"}
                      className="project-detail-figure-img"
                      unoptimized={dev}
                    />
                  </button>
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back to all projects */}
      <div className="start-project-cta">
        <Link href="/portfolio" className="start-project-button">
          Go back to portfolio
        </Link>
      </div>

      {lightboxOpen && activeImage && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image carousel`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="project-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close expanded image"
          >
            ×
          </button>
          <button
            type="button"
            className="project-lightbox-nav project-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousImage()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <figure
            className="project-lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="project-lightbox-img"
              unoptimized={dev}
              priority
            />
            <figcaption className="project-lightbox-count">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(totalImages).padStart(2, "0")}
            </figcaption>
          </figure>
          <button
            type="button"
            className="project-lightbox-nav project-lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              showNextImage()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
