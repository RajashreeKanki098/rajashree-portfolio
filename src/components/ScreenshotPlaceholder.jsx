import { ImageOff } from 'lucide-react'

export default function ScreenshotPlaceholder({ label = 'Screenshot', screenshots }) {
  if (screenshots?.length) {
    return (
      <div className="grid gap-3">
        {screenshots.map((s) => (
          <figure key={s.src}>
            <img
              src={s.src}
              alt={s.caption || label}
              className="w-full rounded-md border border-line2 bg-panel2 object-cover"
            />
            {s.caption && (
              <figcaption className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted2">
                {s.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    )
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line2 bg-panel2/60 text-muted2">
      <ImageOff size={20} strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-wider">{label} — add screenshot</span>
    </div>
  )
}