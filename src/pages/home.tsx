import Hero from '../components/hero.tsx'
import Rsvp from '../components/rsvp.tsx'
import Details from '../components/details.tsx'
import Footer from '../components/footer.tsx'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Rsvp />
      <Details />
      <Footer />
    </main>
  )
}
