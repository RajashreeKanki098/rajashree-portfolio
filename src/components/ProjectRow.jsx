import { ArrowUpRight } from 'lucide-react'
import Tag from './Tag'

export default function ProjectRow({ project, index, onOpenCaseStudy }) {
  const recordId = `PRJ-0${index}`

  return (
    <button
      onClick={() => onOpenCaseStudy(project)}
      className="group grid w-full grid-cols-1 items-center gap-4 border-b border-line px-1 py-6 text-left transition-colors last:border-0 hover:bg-panel2/50 sm:grid-cols-[80px_1fr_auto_auto] sm:px-4"
    >
      <span className="font-mono text-xs text-muted2">{recordId}</span>

      <div>
        <h3 className="font-display text-base font-semibold text-text">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.type}</p>
      </div>

      <div className="hidden gap-2 sm:flex">
        {project.tags.slice(0, 2).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <span className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors group-hover:text-accent">
        Case Study <ArrowUpRight size={13} />
      </span>
    </button>
  )
}
