import Link from "next/link"

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            ERE Studio
          </Link>
          <p>
            Interior and spatial design for calm, expressive, functional spaces.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-meta">
          <span>Toronto / Paris / Remote</span>
          <span>Base structure</span>
        </div>
      </div>
    </footer>
  )
}
