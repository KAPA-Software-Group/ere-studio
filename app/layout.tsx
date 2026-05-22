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
    "Base website structure for ERE Studio, an interior and spatial design studio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spectral.variable}`}>
      <body>{children}</body>
    </html>
  )
}
