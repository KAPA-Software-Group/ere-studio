"use client"

import { useEffect, useRef, type ReactNode } from "react"

type ParallaxProps = {
  children: ReactNode
  amount?: number
  className?: string
}

export function Parallax({
  children,
  amount = 0.08,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      const center = rect.top + rect.height / 2
      const progress = (center - viewportH / 2) / viewportH
      const offset = Math.max(-1, Math.min(1, progress)) * amount * 100
      el.style.setProperty("--parallax-y", `${-offset}%`)
      raf = 0
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [amount])

  return (
    <div ref={ref} className={`parallax ${className ?? ""}`}>
      {children}
    </div>
  )
}
