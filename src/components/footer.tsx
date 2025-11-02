import GitHubIcon from '../assets/github.png'
import LinkedInIcon from '../assets/linkedin.png'

export default function Footer() {
  return (
    <section className="items-center justify-center text-center px-4">
      <hr className="border-[#d497d5]/30 w-full max-w-4xl mx-auto " />
      <div className="text-[#d497d5] m-2 flex justify-center items-center gap-2">
        <span>© 2025 Tomáš Kogut |</span>
        <a href="https://github.com/tomaskogut" target="_blank" rel="noopener noreferrer">
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="w-4 h-4 hover:opacity-80 transition-opacity"
          />
        </a>
        <span>|</span>
        <a
          href="https://linkedin.com/in/tomáš-kogut-2241a1387"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="w-4 h-4 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
      <div className="m-8 h-6"></div>
    </section>
  )
}
