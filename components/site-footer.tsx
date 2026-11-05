import Link from "next/link"

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            ère studio
          </Link>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-meta">
          <span>Toronto / Miami / Paris</span>
          <span>Project inquiries open for 2026</span>
        </div>
      </div>

      <div className="footer-credit">
        <a
          href="https://kintorasolutions.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span>
          <span className="footer-credit-mark" aria-hidden="true" />
          <span className="footer-credit-name">Kintora Solutions</span>
        </a>
      </div>
    </footer>
  )
}
