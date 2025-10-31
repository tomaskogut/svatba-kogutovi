import { useEffect, useState } from 'react'
import Hero from '../components/hero.tsx'
import Rsvp from '../components/rsvp.tsx'
import Details from '../components/details.tsx'
import Footer from '../components/footer.tsx'
import Layout from '../components/layout.tsx'
import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'

export function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout leftImage={bgLeft} rightImage={bgRight}>
      <main className="scroll-smooth flex flex-col gap-16">
        <Hero />
        <Rsvp />
        <Details />
        <Footer />

        <div
          className={`fixed bottom-6 right-1/2 translate-x-[384px] transition-opacity duration-300
            ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={scrollToTop}
            aria-label="Zpět nahoru"
            className="px-4 py-2 w-32 h-12 rounded-3xl bg-[#d497d5]/15 text-gray-700 shadow-md backdrop-blur-sm"
          >
            <span className="text-base font-medium">↑ Nahoru</span>
          </button>
        </div>
      </main>
    </Layout>
  )
}
