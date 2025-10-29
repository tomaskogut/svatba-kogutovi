import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'
import Layout from '../components/layout.tsx'

export default function Gallery() {
  return (
    <Layout leftImage={bgLeft} rightImage={bgRight}>
      <main id="gallery" className="scroll-smooth flex flex-col gap-16">
        <h1 className="text-4xl font-alexbrush mb-8">Galerie</h1>
        <p>Fotky přidáme po svatbě 📸</p>
      </main>
    </Layout>
  )
}
