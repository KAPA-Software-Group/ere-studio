export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  location: string
  year: string
  type: string
  category: string
  scope: string
  materials: string
  collaborator: string
  intro: string
  brief: string
  approach: string
  pullquote: string
  hero: ProjectImage
  gallery: ProjectImage[]
}

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const projects: Project[] = [
  {
    slug: "parisian-suite",
    title: "The Parisian Suite",
    location: "Paris, 7e",
    year: "2021",
    type: "Residential",
    category: "Apartment Interior",
    scope: "Full renovation, custom joinery, lighting",
    materials: "Limewashed plaster, oak, brushed brass",
    collaborator: "Atelier R. Bonnard",
    intro:
      "A turn-of-the-century apartment off rue de Varenne, returned to a single calm volume after decades of partition. The brief was to restore proportion without erasing the memory of the building.",
    brief:
      "The clients, a screenwriter and a curator, asked for a residence that would receive visitors with the composure of a small gallery and the warmth of a long lunch.",
    approach:
      "We opened three rooms into one continuous reception space, kept the original parquet, and added a single hand-finished limewashed wall as the room's quiet structural gesture.",
    pullquote:
      "We worked the way a museum hangs a single painting: choose the wall, then live with it for a season.",
    hero: {
      src: unsplash("photo-1600585154340-be6161a56a0c"),
      alt: "Pale interior with linen-draped windows and a limewashed wall catching late afternoon light.",
    },
    gallery: [
      {
        src: unsplash("photo-1616486338812-3dadae4b4ace"),
        alt: "Detail of brushed brass hardware against oak joinery.",
      },
      {
        src: unsplash("photo-1505691938895-1758d7feb511"),
        alt: "Reception room from the entry hall, looking toward double doors.",
      },
      {
        src: unsplash("photo-1556909114-f6e7ad7d3136"),
        alt: "Plaster wall, parquet floor, and a single low bench in raked light.",
      },
    ],
  },
  {
    slug: "midtown-hideaway",
    title: "Midtown Hideaway",
    location: "Toronto, ON",
    year: "2025",
    type: "Residential",
    category: "Urban Retreat",
    scope: "Spatial replanning, millwork, soft furnishings",
    materials: "Smoked oak, travertine, raw linen",
    collaborator: "K. Mori Studio",
    intro:
      "A 1970s tower apartment reconfigured around a single travertine threshold. The interior holds the noise of the city at a distance without pretending the city is not there.",
    brief:
      "The owner, a touring musician, needed a residence that recovered him between cities. Quiet, low contrast, low maintenance, very few but very good objects.",
    approach:
      "We pulled the kitchen behind a smoked oak screen, lowered the ceiling on a single axis to recompose the proportion, and let one travertine slab carry the room's centre of gravity.",
    pullquote:
      "Silence is not the absence of sound. It is the absence of the wrong sounds.",
    hero: {
      src: unsplash("photo-1618221195710-dd6b41faaea6"),
      alt: "Smoked oak screen wall opening onto a living room with a single travertine plinth.",
    },
    gallery: [
      {
        src: unsplash("photo-1554995207-c18c203602cb"),
        alt: "Travertine threshold detail.",
      },
      {
        src: unsplash("photo-1493809842364-78817add7ffb"),
        alt: "Linen-upholstered low chair against a smoked oak wall.",
      },
      {
        src: unsplash("photo-1586023492125-27b2c045efd7"),
        alt: "Reading corner with raw linen drapery filtering city light.",
      },
    ],
  },
  {
    slug: "little-orange",
    title: "The Little Orange",
    location: "Miami, FL",
    year: "2022",
    type: "Hospitality",
    category: "Compact Concept",
    scope: "Design direction, lighting scheme, art curation",
    materials: "Tadelakt, terracotta, lacquered citrus wood",
    collaborator: "Estudio Casa Naranja",
    intro:
      "An eleven-seat counter restaurant in a converted ground-floor storefront. The room had to feel like a place that had been there longer than it has.",
    brief:
      "An operator with two larger rooms in the city wanted a third that would never read as a brand extension. Specific, fixed in place, easy to overlook from the street.",
    approach:
      "We took down the existing fascia, replastered the entire street wall in tadelakt the colour of unwashed terracotta, and put the address in inlaid brass on the door. The interior follows the same restraint.",
    pullquote:
      "The best hospitality rooms feel like they were inherited, not designed.",
    hero: {
      src: unsplash("photo-1631679706909-1844bbd07221"),
      alt: "Counter restaurant interior with terracotta walls and an open kitchen pass.",
    },
    gallery: [
      {
        src: unsplash("photo-1567016376408-0226e4d0c1ea"),
        alt: "Banquette detail in lacquered citrus wood.",
      },
      {
        src: unsplash("photo-1600585154340-be6161a56a0c"),
        alt: "Counter and stools from the entry door at golden hour.",
      },
      {
        src: unsplash("photo-1616486338812-3dadae4b4ace"),
        alt: "Inlaid brass address numerals on the front door.",
      },
    ],
  },
  {
    slug: "mediterranean-escape",
    title: "Mediterranean Escape",
    location: "Bale, Croatia",
    year: "2025",
    type: "Residential",
    category: "Seasonal Residence",
    scope: "Architecture coordination, full interior, garden",
    materials: "Istrian limestone, lime plaster, reclaimed oak",
    collaborator: "Studio K. Vidakovic",
    intro:
      "A long, low summer house above an olive grove on the Istrian coast. The brief was to make a building that the family would walk into without taking off their shoes.",
    brief:
      "A young family with three children and a working olive grove. The house needed to be tough enough for the season and quiet enough for August evenings.",
    approach:
      "We worked with local masons to set the entire ground floor in a single Istrian limestone, lime-plastered every interior wall by hand, and kept the joinery in reclaimed oak from a previous structure on the site.",
    pullquote:
      "We build for August. The other eleven months should make sense in light of it.",
    hero: {
      src: unsplash("photo-1505691938895-1758d7feb511"),
      alt: "Lime-plastered seaside interior with reclaimed oak shutters open to a terrace.",
    },
    gallery: [
      {
        src: unsplash("photo-1556909114-f6e7ad7d3136"),
        alt: "Istrian limestone floor against a hand-plastered wall.",
      },
      {
        src: unsplash("photo-1618221195710-dd6b41faaea6"),
        alt: "Reclaimed oak shutter detail.",
      },
      {
        src: unsplash("photo-1554995207-c18c203602cb"),
        alt: "Long table set for a late August lunch.",
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug)
  const next = (index + 1) % projects.length
  return projects[next]
}
