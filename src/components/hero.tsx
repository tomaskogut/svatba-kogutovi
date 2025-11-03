import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero" className="items-center justify-center">
      <div className="text-center text-black overflow-hidden">
        <p className="text-xl leading-relaxed mt-28">
          'Hospodin Bůh také řekl: <br />
          "Není dobré, aby člověk byl sám: <br />
          opatřím mu rovnocennou oporu."
        </p>
        <p className="text-sm leading-loose">Genesis 2.18</p>

        <div className=" text-[6rem] font-alexbrush text-center flex flex-col md:flex-row justify-center items-center gap:4">
          <span className="inline-block animate-fadeInLeft text-[4rem] md:text-[6rem]">Tomáš</span>
          <span className="inline-block animate-fadeIn text-[2rem] md:text-[4rem] md:m-4 -m-6">
            &
          </span>
          <span className="inline-block animate-fadeInRight text-[4rem] md:text-[6rem]">
            Markéta
          </span>
        </div>

        <p className="text-xl ">
          S radostí Vás zveme <br /> na slavnostní bohoslužbu,
          <br /> kde spojíme své životy
        </p>

        <p className="text-4xl font-alexbrush m-7">2.5.2026</p>
        <p className="text-xl ">Evangelický kostel v Hodslavicích</p>
        <p className="text-base mb-20">v 11 hodin</p>

        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
          <a
            href={'#rsvp'}
            className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg transition-colors hover:bg-[#a777a8]"
          >
            Potvrď účast
          </a>
          <a
            href={'details'}
            className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg transition-colors hover:bg-[#a777a8]"
          >
            Více info
          </a>
          <Link
            to="/gallery"
            className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg transition-colors hover:bg-[#a777a8]"
          >
            Galerie
          </Link>
        </div>

        <div className="h-[256px]"></div>
      </div>
    </section>
  )
}
