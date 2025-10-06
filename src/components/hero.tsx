import './hero.css'
import backgroundimg from '../assets/background.png'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundimg})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Tomáš & Markéta</h1>
        <p className="hero-date">2.5.2026, Hodslavice</p>
        <p className="hero-subtext">Srdečně vás zveme na naši svatbu</p>
        <a href="#rsvp" className="hero-button">
          Potvrď účast
        </a>
      </div>
    </section>
  )
}
