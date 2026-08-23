import { Braces, Layers, Server, ShieldCheck } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const facts = [
  { icon: Server, label: 'Experience', value: profile.experience },
  { icon: Layers, label: 'Role', value: profile.role },
  { icon: Braces, label: 'Stack', value: 'Frontend + Backend' },
  { icon: ShieldCheck, label: 'Education', value: profile.education.degree },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading index="01" label="About" title="Business-focused software, not just web pages." />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">{profile.about}</p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <Icon size={16} className="text-accent" />
                  <dt className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted2">{label}</dt>
                  <dd className="mt-1 text-sm text-text">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-lg border border-line bg-panel px-5 py-4 font-mono text-xs text-muted">
              {profile.education.degree} · {profile.education.college} · {profile.education.year}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
