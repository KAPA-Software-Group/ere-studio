import path from "node:path"
import { fileURLToPath } from "node:url"

const appDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: appDir,
  async redirects() {
    return [
      {
        source: "/portfolio/mediterranean-escape",
        destination: "/portfolio/artists-escape",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/process",
        destination: "/about",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

export default nextConfig
