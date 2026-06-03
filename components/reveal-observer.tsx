"use client"

import { useEffect } from "react"

export function RevealObserver() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      document
        .querySelectorAll(".reveal, .draw-line, .stagger > *")
        .forEach((el) => el.classList.add("in-view"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement

          if (el.classList.contains("stagger")) {
            Array.from(el.children).forEach((child, i) => {
              const c = child as HTMLElement
              c.style.transitionDelay = `${Math.min(i, 8) * 80}ms`
              c.classList.add("in-view")
            })
          } else {
            el.classList.add("in-view")
          }

          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    document
      .querySelectorAll(".reveal, .draw-line, .stagger")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
