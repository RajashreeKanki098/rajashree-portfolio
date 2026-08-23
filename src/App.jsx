import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Highlights from './sections/Highlights'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
