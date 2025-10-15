import Hero from '../components/hero.tsx'
import Rsvp from '../components/rsvp.tsx'
import Details from '../components/details.tsx'
import Footer from '../components/footer.tsx'
import Layout from '../components/Layout.tsx'
import bgImage from '../assets/background.png'

export default function Home() {
  return (
    <Layout background={bgImage}>
      <main className="scroll-smooth flex flex-col gap-16">
        <Hero />
        <Rsvp />
        <Details />
        <Footer />
      </main>
    </Layout>
  )
}
