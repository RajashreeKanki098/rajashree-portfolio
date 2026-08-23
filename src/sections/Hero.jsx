import { motion } from 'framer-motion'
import { ArrowDownRight, MapPin } from 'lucide-react'
import Container from '../components/Container'
import StatusDot from '../components/StatusDot'
import { profile } from '../data/profile'
import { heroStack } from '../data/skills'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 font-mono text-xs text-muted"
        >
          <StatusDot label="Available for work" />
          <span className="h-3 w-px bg-line2" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} /> {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl"
        >
          {profile.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.heroSubheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-line2 px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent/60 hover:text-accent"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 border-t border-line pt-6"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted2">Core Stack</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {heroStack.map((s) => (
              <li key={s} className="font-mono text-sm text-muted transition-colors hover:text-text">
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
