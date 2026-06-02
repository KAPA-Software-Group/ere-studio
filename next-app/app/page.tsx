import Link from "next/link"
import { HomeSlideshow } from "@/components/home-slideshow"

export default function Home() {
  return (
    <main className="page-shell">
      {/* Scroll runway for the home brand reveal; collapses when JS/intro is
          inactive so the layout is unchanged for no-JS / reduced-motion. */}
      <div className="home-intro-spacer" data-home-intro-spacer aria-hidden="true" />

      <section className="home-hero">
        <HomeSlideshow />
      </section>

      <div className="start-project-cta">
        <Link href="/contact" className="start-project-button">
          Start a Project
        </Link>
      </div>
    </main>
  )
}
