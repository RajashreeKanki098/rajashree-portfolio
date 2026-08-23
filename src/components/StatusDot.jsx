export default function StatusDot({ label = 'Production' }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {label}
    </span>
  )
}
