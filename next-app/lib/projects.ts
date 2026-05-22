export type Project = {
  slug: string
  title: string
  location: string
  year: string
  type: string
  category: string
  mood: string
}

export const projects: Project[] = [
  {
    slug: "parisian-suite",
    title: "The Parisian Suite",
    location: "Paris",
    year: "2021",
    type: "Residential",
    category: "Apartment Interior",
    mood: "warm-stone",
  },
  {
    slug: "midtown-hideaway",
    title: "Midtown Hideaway",
    location: "Toronto",
    year: "2025",
    type: "Residential",
    category: "Urban Retreat",
    mood: "soft-sage",
  },
  {
    slug: "little-orange",
    title: "The Little Orange",
    location: "Miami",
    year: "2022",
    type: "Hospitality",
    category: "Compact Concept",
    mood: "sun-washed",
  },
  {
    slug: "mediterranean-escape",
    title: "Mediterranean Escape",
    location: "Bale, Croatia",
    year: "2025",
    type: "Residential",
    category: "Seasonal Residence",
    mood: "sea-stone",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
