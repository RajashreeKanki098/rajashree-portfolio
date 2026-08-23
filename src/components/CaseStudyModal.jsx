import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import ScreenshotPlaceholder from './ScreenshotPlaceholder'
import Tag from './Tag'

// Only projects with a real screenshot go here.
// Anything not listed (e.g. sajdhaj) automatically falls back to the placeholder.
import bssfShot from '../assets/bssf.png'
import devnarShot from '../assets/devnar.png'
import grobigShot from '../assets/grobig.png'
import metlShot from '../assets/metl.png'
import pressclubShot from '../assets/pressclub.png'

const projectImages = {
  bssf: bssfShot,
  devnar: devnarShot,
  grobig: grobigShot,
  metl: metlShot,
  pressclub: pressclubShot,
}

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm sm:items-center sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-3xl rounded-lg border border-line2 bg-panel shadow-2xl"
          >
            {/* header bar */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-muted2">
                <span className="text-accent">Case Study</span>
                <span>Status: <span className="text-muted">{project.status}</span></span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-panel2 hover:text-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">{project.name}</h2>
              <p className="mt-1 font-mono text-sm text-muted">{project.type}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t} tone="accent">{t}</Tag>
                ))}
              </div>

              <div className="mt-6">
                {projectImages[project.id] ? (
                  <img
                    src={projectImages[project.id]}
                    alt={`${project.name} screenshot`}
                    className="aspect-video w-full rounded-md border border-line object-cover"
                  />
                ) : (
                  <ScreenshotPlaceholder label={project.shortName} />
                )}
              </div>

              <Block title="Overview" text={project.overview} />
              <Block title="Business Problem" text={project.businessProblem} />
              <Block title="Solution" text={project.solution} />

              <Section title="My Contribution">
                <ul className="space-y-2">
                  {project.myContribution.map((c) => (
                    <li key={c} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Features">
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((group) => (
                    <div key={group.group} className="rounded-md border border-line bg-panel2/50 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{group.group}</p>
                      <ul className="mt-2 space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="text-xs leading-relaxed text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              <LinksSection project={project} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ title, text }) {
  return (
    <Section title={title}>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </Section>
  )
}

function Section({ title, children }) {
  return (
    <div className="mt-8 border-t border-line pt-6 first:mt-6 first:border-0 first:pt-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted2">{title}</p>
      {children}
    </div>
  )
}

// Renders only the links that actually exist and aren't "[ADD ...]" placeholders.
// If none exist at all, the whole "Links" section is skipped — no header, no fallback text.
function LinksSection({ project }) {
  const hasWebsite = project.links.website && !project.links.website.startsWith('[')
  const hasApp = Boolean(project.links.app)
  const hasReference = Boolean(project.links.reference)

  if (!hasWebsite && !hasApp && !hasReference) return null

  return (
    <Section title="Links">
      <div className="flex flex-wrap gap-3">
        {hasWebsite && <LinkPill href={project.links.website} label="Website" />}
        {hasApp && <LinkPill href={project.links.app} label="Google Play" />}
        {hasReference && (
          <LinkPill href={project.links.reference.url} label={project.links.reference.label} />
        )}
      </div>
    </Section>
  )
}

function LinkPill({ href, label }) {
  return (
    
    <a href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-line2 bg-panel2 px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent/60 hover:text-accent"
    >
      {label} <ExternalLink size={12} />
    </a>
  )
}