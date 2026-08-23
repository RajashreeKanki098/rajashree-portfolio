import { ImageOff } from 'lucide-react'

export default function ScreenshotPlaceholder({ label = 'Screenshot' }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line2 bg-panel2/60 text-muted2">
      <ImageOff size={20} strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-wider">{label} — add screenshot</span>
    </div>
  )
}
