type PlaceholderVisualProps = {
  label: string
  mood?: string
  size?: "wide" | "portrait" | "square"
}

export function PlaceholderVisual({
  label,
  mood = "warm-stone",
  size = "wide",
}: PlaceholderVisualProps) {
  return (
    <div className={`placeholder-visual ${mood} ${size}`} aria-label={label}>
      <div className="placeholder-composition" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}
