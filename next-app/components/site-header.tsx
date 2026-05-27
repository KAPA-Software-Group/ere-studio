"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Get Started" },
]

const LEFT_NAV_ITEMS = NAV_ITEMS.slice(0, 2)
const RIGHT_NAV_ITEMS = NAV_ITEMS.slice(2)

export function SiteHeader() {
  const pathname = usePathname()
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
      className={["site-header", scrolled ? "site-header-scrolled" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="nav-links nav-links-left" aria-label="Primary navigation left">
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
        <Image
          src="/brand/ere-studio-logo.webp"
          alt="Ere Studio"
          width={770}
          height={174}
          priority
          className="nav-logo-image"
        />
      </Link>

      <nav className="nav-links nav-links-right" aria-label="Primary navigation right">
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
  )
}
