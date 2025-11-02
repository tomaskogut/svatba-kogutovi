import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed bottom-6 transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}
        left-1/2 -translate-x-1/2 
        md:right-1/2 md:translate-x-[384px] md:left-auto
        `}
    >
      <button
        onClick={scrollToTop}
        aria-label="Zpět nahoru"
        className="px-4 py-2 w-32 h-12 rounded-3xl bg-[#d497d5]/15 text-gray-700 shadow-md backdrop-blur-sm"
      >
        <span className="text-base font-medium">↑ Nahoru</span>
      </button>
    </div>
  )
}
