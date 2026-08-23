import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm text-text">
            <span className="text-accent">&gt;</span>
            <span className="tracking-tight">rajashree<span className="text-muted2">.dev</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-text">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-md border border-line2 bg-panel2 px-4 py-2 font-mono text-[13px] text-text transition-colors hover:border-accent/60 hover:text-accent"
          >
            Contact Me
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-text"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-md">
          <Container>
            <ul className="flex flex-col py-4 font-mono text-sm text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-line/60 last:border-0 hover:text-text"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}
