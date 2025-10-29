export default function Hero() {
  return (
    <section id="hero" className="items-center justify-center">
      <div className="text-center text-black overflow-hidden">
        <p className="text-xl leading-relaxed mt-20">
          'Hospodin Bůh také řekl: <br />
          "Není dobré, aby člověk byl sám: <br />
          opatřím mu rovnocennou oporu."
        </p>
        <p className="text-sm leading-loose">Genesis 2.18</p>

        <div className="m-8 text-[6rem] font-alexbrush text-center flex justify-center items-center gap-4">
          <span className="inline-block animate-fadeInLeft">Tomáš</span>
          <span className="inline-block animate-fadeIn text-[4rem]">&</span>
          <span className="inline-block animate-fadeInRight">Markéta</span>
        </div>

        <p className="text-xl ">
          S radostí Vás zveme <br /> na slavnostní bohoslužbu,
          <br /> kde spojíme své životy
        </p>

        <p className="text-4xl font-alexbrush m-7">2.5.2026</p>
        <p className="text-xl ">Evangelický kostel v Hodslavicích</p>
        <p className="text-base mb-20">11 hodin</p>

        <div className="flex justify-center gap-4">
          <a className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg font-semibold transition-colors hover:bg-[#a777a8]">
            Více info
          </a>
          <a className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg font-semibold transition-colors hover:bg-[#a777a8]">
            Potvrď účast
          </a>
          <a className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg font-semibold transition-colors hover:bg-[#a777a8]">
            Galerie
          </a>
        </div>

        <div className="h-[256px]"></div>
      </div>
    </section>
  )
}
