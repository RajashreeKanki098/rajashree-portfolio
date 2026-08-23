import { Code2, Link2, Mail, MapPin } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading index="07" label="Contact" title="Let's build something that works." align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-xl rounded-lg border border-line bg-panel p-8 text-center sm:p-12">
            <h3 className="font-display text-xl font-semibold text-text">{profile.name}</h3>
            <p className="mt-1 font-mono text-sm text-muted">{profile.roleLine}</p>

            <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <MapPin size={13} /> {profile.location}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {profile.email}
            </a>

            <div className="mt-8 flex items-center justify-center gap-4 border-t border-line pt-6">
              <SocialLink href={profile.social.github} icon={Code2} label="GitHub" />
              <SocialLink href={profile.social.linkedin} icon={Link2} label="LinkedIn" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-line2 px-4 py-2 font-mono text-xs text-muted2">
        <Icon size={14} /> [ADD {label.toUpperCase()}]
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-line2 px-4 py-2 font-mono text-xs text-text transition-colors hover:border-accent/60 hover:text-accent"
    >
      <Icon size={14} /> {label}
    </a>
  )
}
