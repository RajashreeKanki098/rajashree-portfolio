export default function SectionHeading({ index, label, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <div className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-accent ${align === 'center' ? 'justify-center' : ''}`}>
        {index && <span className="text-muted2">{index}</span>}
        <span className="h-px w-8 bg-line2" />
        <span>{label}</span>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}
