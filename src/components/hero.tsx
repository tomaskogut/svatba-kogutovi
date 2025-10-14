import backgroundImg from '../assets/background.png'

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center text-black"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1 className="text-[6rem] font-alexbrush">Tomáš & Markéta</h1>
        <p className="text-xl my-2">2.5.2026, Hodslavice</p>
        <p className="text-lg mb-8">Srdečně vás zveme na naši svatbu</p>
        <a
          href="#rsvp"
          className="px-8 py-3 bg-[#d497d5] text-white rounded-lg font-semibold transition-colors hover:bg-[#a777a8]"
        >
          Potvrď účast
        </a>
      </div>
    </section>
  )
}
