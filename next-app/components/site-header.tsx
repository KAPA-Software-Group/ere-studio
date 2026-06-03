"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Get Started" },
]

const LEFT_NAV_ITEMS = NAV_ITEMS.slice(0, 2)
const RIGHT_NAV_ITEMS = NAV_ITEMS.slice(2)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
// Smoothstep keeps the start/end of the scroll-linked motion gentle.
const smoothstep = (t: number) => t * t * (3 - 2 * t)

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  // Until the brand has travelled most of the way into the bar, the nav links
  // stay non-interactive (and out of the tab order) on the home intro.
  const [navReady, setNavReady] = useState(!isHome)

  const logoFlipRef = useRef<HTMLSpanElement>(null)

  // Subtle "scrolled" affordance shared by every page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Home-page brand reveal: the centered wordmark migrates into the header
  // slot as the page is scrolled. Progressive enhancement — without JS or with
  // reduced motion, the site simply renders with a normal header.
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement

    const resetIntro = () => {
      root.removeAttribute("data-home-intro")
      root.style.removeProperty("--reveal")
      if (logoFlipRef.current) logoFlipRef.current.style.transform = ""
    }

    if (!isHome) {
      resetIntro()
      setNavReady(true)
      return
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      root.removeAttribute("data-home-intro")
      root.style.setProperty("--reveal", "1")
      if (logoFlipRef.current) logoFlipRef.current.style.transform = ""
      setNavReady(true)
      return
    }

    root.setAttribute("data-home-intro", "active")
    setNavReady(false)

    let raf = 0
    let navActive = false

    const update = () => {
      raf = 0
      const spacer = document.querySelector<HTMLElement>(
        "[data-home-intro-spacer]",
      )
      const runway = spacer?.offsetHeight || window.innerHeight * 0.84
      const eased = smoothstep(clamp01(window.scrollY / runway))
      root.style.setProperty("--reveal", String(eased))

      const flip = logoFlipRef.current
      const slot = flip?.parentElement // the untransformed .nav-logo cell
      if (flip && slot) {
        const rect = slot.getBoundingClientRect()
        const restCx = rect.left + rect.width / 2
        const restCy = rect.top + rect.height / 2
        const dx = (window.innerWidth / 2 - restCx) * (1 - eased)
        const dy = (window.innerHeight / 2 - restCy) * (1 - eased)
        const desiredCenterWidth = Math.min(window.innerWidth * 0.62, 560)
        const scaleAtCenter = Math.max(1, desiredCenterWidth / (rect.width || 1))
        const scale = scaleAtCenter + (1 - scaleAtCenter) * eased
        flip.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
      }

      const shouldActivateNav = eased > 0.55
      if (shouldActivateNav !== navActive) {
        navActive = shouldActivateNav
        setNavReady(shouldActivateNav)
      }
    }

    const onFrame = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update() // position before the first paint to avoid a flash
    window.addEventListener("scroll", onFrame, { passive: true })
    window.addEventListener("resize", onFrame, { passive: true })

    return () => {
      window.removeEventListener("scroll", onFrame)
      window.removeEventListener("resize", onFrame)
      if (raf) cancelAnimationFrame(raf)
      resetIntro()
    }
  }, [isHome])

  const isActivePath = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href)

  const headerClassName = [
    "site-header",
    scrolled ? "site-header-scrolled" : "",
    isHome && !navReady ? "nav-dormant" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <>
      {isHome && (
        <div className="brand-veil" aria-hidden="true">
          <Image
            src="/home/opening-page.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="brand-veil-image"
          />
          <div className="brand-veil-scrim" />
        </div>
      )}

      <header className={headerClassName}>
        <nav
          className="nav-links nav-links-left"
          aria-label="Primary navigation left"
        >
          {LEFT_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActivePath(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="nav-logo" aria-label="ERE Studio home">
          <span className="nav-logo-flip" ref={logoFlipRef}>
            <Image
              src="/brand/ere-studio-logo.webp"
              alt="Ere Studio"
              width={770}
              height={174}
              priority
              className="nav-logo-image"
            />
          </span>
        </Link>

        <nav
          className="nav-links nav-links-right"
          aria-label="Primary navigation right"
        >
          {RIGHT_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActivePath(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}
