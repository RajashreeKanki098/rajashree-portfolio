import { ArrowUpRight } from 'lucide-react'
import ScreenshotPlaceholder from './ScreenshotPlaceholder'
import Tag from './Tag'

export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  const recordId = `PRJ-${String(index + 1).padStart(2, '0')}`

  return (
    <div className="group rounded-lg border border-line bg-panel transition-colors hover:border-line2">
      {/* record header bar */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted2">
        <span className="text-accent">{recordId}</span>
        <span>Status: <span className="text-muted">{project.status}</span></span>
        <span className="hidden sm:inline">Type: <span className="text-muted">{project.type}</span></span>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="font-display text-2xl font-semibold text-text">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.overview}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <p className="mt-5 font-mono text-xs text-muted2">
            <span className="text-muted">Role —</span> {project.role}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View Case Study
              <ArrowUpRight size={14} />
            </button>
            {project.links.app && (
              <a
                href={project.links.app}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                Google Play ↗
              </a>
            )}
            {project.links.website && !project.links.website.startsWith('[') && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                Website ↗
              </a>
            )}
          </div>
        </div>

        <ScreenshotPlaceholder label={project.shortName} screenshots={project.screenshots} />
      </div>
    </div>
  )
}
