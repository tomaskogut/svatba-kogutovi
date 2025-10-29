import GitHubIcon from '../assets/github.png'
import LinkedInIcon from '../assets/linkedin.png'

export default function Footer() {
  return (
    <section className="items-center justify-center text-center">
      <hr />
      <div className="text-[#d497d5] mt-1 mb-1 flex justify-center items-center gap-2">
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
    </section>
  )
}
