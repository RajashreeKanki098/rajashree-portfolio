export default function Tag({ children, tone = 'default' }) {
  const tones = {
    default: 'border-line2 text-muted bg-panel2',
    accent: 'border-accentDim/50 text-accent bg-accent/10',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
