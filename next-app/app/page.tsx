import Image from "next/image"
import Link from "next/link"
import { RevealObserver } from "@/components/reveal-observer"

const homeRoomImage = {
  src: "/projects/midtown-hideaway/opening-image-final.jpg",
  alt: "Midtown Hideaway hallway looking through a red arch toward blue built-ins and pink boots.",
}

const studioDirections = [
  {
    number: "01",
    title: "Interior Design + Spatial Planning",
    image: "/projects/midtown-hideaway/magazine-left-bedroom.jpg",
    alt: "Bedroom interior with patterned wallpaper, warm bedding, and a bedside table.",
  },
  {
    number: "02",
    title: "Hybrid Spaces",
    image: "/services/hybrid-spaces.png",
    alt: "Interior with a glossy brown tiled stove, artwork, mirrors, and seating.",
  },
  {
    number: "03",
    title: "Renovation + Restoration",
    image: "/services/renovation-restoration.png",
    alt: "Restored living room with parquet flooring, fireplace, antique mirror, and sculptural chairs.",
  },
]

const transformationSteps = [
  "Consultation",
  "Design Concept",
  "Detailed Planning",
  "Final Transformation",
]

export default function Home() {
  return (
    <main className="page-shell">
      <RevealObserver />

      <section className="home-hero">
        <div className="boots-hero-stage" aria-label="Midtown Hideaway pink boots hallway">
          <Image
            src={homeRoomImage.src}
            alt={homeRoomImage.alt}
            fill
            priority
            sizes="100vw"
            className="boots-hero-image"
          />
          <div className="boots-hero-vignette" aria-hidden="true" />
        </div>
      </section>

      <section className="striped-magazine-section" aria-label="ERE Studio magazine on striped fabric">
        <Image
          src="/projects/midtown-hideaway/final-image-home-magazine.png"
          alt="Open ERE Studio magazine on blue and brown striped fabric."
          width={2752}
          height={1536}
          sizes="100vw"
          className="striped-magazine-image"
        />
        <Link href="/portfolio" className="magazine-portfolio-link striped-magazine-link">
          See Full Portfolio
        </Link>
      </section>

      <section className="studio-directions-section">
        <div className="studio-directions-heading reveal">
          <h2>
            One studio, 3 directions,{" "}
            <span>endless possibilities</span>
          </h2>
        </div>
        <div className="studio-directions-grid">
          {studioDirections.map((direction, index) => (
            <article
              key={direction.title}
              className={`studio-direction-card reveal reveal-delay-${index + 1}`}
            >
              <span className="studio-direction-number">{direction.number}</span>
              <div className="studio-direction-content">
                <h3>{direction.title}</h3>
                <div className="studio-direction-image">
                  <Image
                    src={direction.image}
                    alt={direction.alt}
                    fill
                    sizes="(min-width: 900px) 22vw, 86vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/about" className="studio-learn-link">
          Learn More About Our Studio
        </Link>
      </section>

      <section className="transformation-section" aria-label="ERE Studio process">
        <Image
          src="/process/ere-process-desk.png"
          alt="ERE Studio notebooks, planning sketches, pens, and iced drinks on a deep red table."
          fill
          sizes="100vw"
          className="transformation-image"
        />
        <div className="transformation-overlay reveal" aria-hidden="true" />
        <div className="transformation-content">
          <h2 className="client-experience-heading reveal">
            Client Experience
          </h2>
          <div className="circle-block-row">
            {transformationSteps.map((step, index) => (
              <article
                key={step}
                className={`circle-step reveal reveal-delay-${index + 1}`}
              >
                <span
                  className={`circle-block circle-block-${index + 1}`}
                  aria-hidden="true"
                />
                <p>
                  <span>{index + 1}.</span> {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="next-chapter-section">
        <div className="next-chapter-media reveal">
          <Image
            src="/cta/next-chapter-book.png"
            alt="Open book resting on denim against a burgundy bench."
            width={1376}
            height={768}
            sizes="100vw"
            className="next-chapter-image"
          />
          <Link href="/contact" className="next-chapter-button">
            Start a project
          </Link>
        </div>
        <h2 className="next-chapter-title reveal reveal-delay-1">
          Start building your home&apos;s next chapter
        </h2>
      </section>
    </main>
  )
}
