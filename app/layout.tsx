import type { Metadata } from "next"
import { DM_Sans, Spectral } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ERE Studio - Interior and Spatial Design",
  description:
    "ERE Studio is an interior and spatial design practice for residential, hospitality, renovation, and hybrid spaces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${spectral.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
