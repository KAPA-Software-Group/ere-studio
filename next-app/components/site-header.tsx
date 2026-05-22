"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActivePath = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href)

  return (
    <header
      className={[
        "site-header",
        scrolled ? "site-header-scrolled" : "",
        menuOpen ? "site-header-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link href="/" className="nav-logo" aria-label="ERE Studio home">
        <span className="nav-logo-mark" aria-hidden="true" />
        <span className="nav-logo-text">ERE Studio</span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActivePath(item.href) ? "is-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <Link href="/contact" className="nav-cta">
          Start a Project
        </Link>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={["mobile-nav", menuOpen ? "is-open" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "mobile-nav-link",
              isActivePath(item.href) ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mobile-nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Start a Project
        </Link>
      </div>
    </header>
  )
}
