import Hero from '../components/hero.tsx'
import Rsvp from '../components/rsvp/rsvp.tsx'
import Details from '../components/details.tsx'
import Footer from '../components/footer.tsx'
import Layout from '../components/layout.tsx'
import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'
import bgImage from '../assets/background.png'
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.tsx'
import BgWrapper from '../components/bgWrapper.tsx'

export function Home() {
  return (
    <Layout leftImage={bgLeft} rightImage={bgRight} mobileImage={bgImage}>
      <main className="scroll-smooth flex flex-col gap-16">
        <Hero />
        <BgWrapper>
          <Rsvp />
          <Details />
        </BgWrapper>
        <Footer />
        <ScrollToTopButton />
      </main>
    </Layout>
  )
}
