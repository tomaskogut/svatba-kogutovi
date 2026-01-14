import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'
import bgImage from '../assets/background.png'
import Layout from '../components/layout.tsx'
import BackButton from '../components/buttons/backButton.tsx'
import LightBox from '../components/lightbox.tsx'

export default function Gallery() {
  return (
    <Layout leftImage={bgLeft} rightImage={bgRight} mobileImage={bgImage}>
      <main id="gallery" className="scroll-smooth items-center justify-center">
        <div className="text-center text-black overflow-hidden">
          <BackButton />
          <h1 className="text-[3rem] font-alexbrush mb-14 mt-20">Galerie</h1>
          <LightBox />
        </div>
      </main>
    </Layout>
  )
}
