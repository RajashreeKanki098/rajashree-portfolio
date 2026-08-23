import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            label="Skills"
            title="Tools I use to ship complete systems"
            description="Grouped by where they sit in the stack — from what a user touches to what keeps the data honest."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <div className="group h-full rounded-lg border border-line bg-panel p-6 transition-colors hover:border-line2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-base font-semibold text-text">{cat.label}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted2">{cat.note}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line2 bg-panel2 px-2.5 py-1.5 font-mono text-xs text-muted transition-colors group-hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
