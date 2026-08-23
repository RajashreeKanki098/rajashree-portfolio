import {
  Boxes, Building2, CreditCard, LayoutDashboard, Network, Smartphone, Split, BarChart3,
} from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { buildHighlights } from '../data/skills'

const icons = {
  'business-apps': Boxes,
  'api-dev': Network,
  'pwa-dev': Smartphone,
  'inventory-erp': LayoutDashboard,
  'multi-branch': Split,
  payments: CreditCard,
  reporting: BarChart3,
  'admin-systems': Building2,
}

export default function Highlights() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading
            index="03"
            label="Approach"
            title="How I build real-world applications"
            description="Patterns that show up across every project — because business software needs more than a nice interface."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {buildHighlights.map((h, i) => {
            const Icon = icons[h.id]
            return (
              <Reveal key={h.id} delay={i * 0.04} className="h-full">
                <div className="h-full bg-panel p-6 transition-colors hover:bg-panel2">
                  <Icon size={18} className="text-accent" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-sm font-semibold text-text">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
