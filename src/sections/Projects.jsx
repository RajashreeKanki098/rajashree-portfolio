import { useState } from 'react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ProjectRow from '../components/ProjectRow'
import CaseStudyModal from '../components/CaseStudyModal'
import { featuredProjects, moreProjects } from '../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-line">
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            label="Featured Projects"
            title="Systems I've built and shipped"
            description="SaaS platforms, ERP modules, e-commerce and donation systems — built for businesses running real operations, not demos."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} index={i} onOpenCaseStudy={setActiveProject} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="text-muted2">06</span>
              <span className="h-px w-8 bg-line2" />
              <span>More Projects</span>
            </div>
          </Reveal>

          <div className="mt-6 rounded-lg border border-line bg-panel">
            {moreProjects.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={i + 1}
                onOpenCaseStudy={setActiveProject}
              />
            ))}
          </div>
        </div>
      </Container>

      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
