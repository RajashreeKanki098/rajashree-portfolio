import Container from './Container'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted2 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React · Vite · Tailwind CSS</span>
        </div>
      </Container>
    </footer>
  )
}
