import Image from "next/image"

type ProjectMediaProps = {
  src: string
  alt: string
  shape?: "wide" | "portrait" | "square" | "tall" | "panoramic"
  priority?: boolean
  sizes?: string
  caption?: string
}

export function ProjectMedia({
  src,
  alt,
  shape = "wide",
  priority = false,
  sizes = "(min-width: 1080px) 50vw, 100vw",
  caption,
}: ProjectMediaProps) {
  return (
    <figure className={`project-media project-media-${shape}`}>
      <div className="project-media-frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="project-media-image"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
