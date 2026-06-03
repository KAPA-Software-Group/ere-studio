import type { Metadata } from "next"
import { PortfolioMagazine } from "@/components/portfolio-magazine"
import { RevealObserver } from "@/components/reveal-observer"

export const metadata: Metadata = {
  title: "Project Portfolio | ERE Studio",
  description:
    "Project portfolio by ERE Studio, 2021-2025, across residences, commercial spaces, renovation, and hybrid interiors.",
}

export default function PortfolioPage() {
  return (
    <main className="page-shell portfolio-page">
      <RevealObserver />

      <section className="portfolio-editorial-hero">
        <h1 className="reveal brand-wordmark">Flip Through Our Projects</h1>
      </section>

      <section className="portfolio-editorial-section">
        <PortfolioMagazine />
      </section>
    </main>
  )
}
