import type { Metadata, Viewport } from "next"
import { DM_Sans, Spectral } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${spectral.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
