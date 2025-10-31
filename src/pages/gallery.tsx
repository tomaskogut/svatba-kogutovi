import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'
import Layout from '../components/layout.tsx'
import BackButton from '../components/backButton.tsx'

export default function Gallery() {
  return (
    <Layout leftImage={bgLeft} rightImage={bgRight}>
      <main id="gallery" className="scroll-smooth items-center justify-center">
        <div className="text-center text-black overflow-hidden">
          <BackButton />
          <h1 className="text-[3rem] font-alexbrush mb-14 mt-20">Galerie</h1>

          <p>Fotky přidáme po svatbě 📸</p>
        </div>
      </main>
    </Layout>
  )
}
