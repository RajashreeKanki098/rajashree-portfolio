import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { experienceScope } from '../data/skills'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading index="04" label="Experience" title="Professional Experience" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-lg border border-line bg-panel p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-2 border-b border-line pb-6 sm:flex-row sm:items-end">
              <div>
                <h3 className="font-display text-xl font-semibold text-text">{profile.role}</h3>
                <p className="mt-1 font-mono text-sm text-muted">{profile.company}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{profile.experience} · Current</p>
            </div>

            <p className="mt-6 leading-relaxed text-muted">
              Over {profile.experience} at {profile.company}, I've worked across the frontend and backend on
              multiple production systems — moving between SaaS products, ERP modules, e-commerce platforms and
              admin tooling depending on what the business problem needed.
            </p>

            <div className="mt-8">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted2">Scope of Work</p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {experienceScope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-mono text-xs text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
