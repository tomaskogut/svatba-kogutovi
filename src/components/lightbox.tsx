import { useState, useEffect } from 'react'

const images = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`)

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // zavření přes ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') showPrev(e)
        if (e.key === 'ArrowRight') showNext(e)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIndex])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Moje galerie</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Obrázek ${i + 1}`}
            onClick={() => openLightbox(i)}
            className="rounded-xl cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-8 text-white text-4xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={showPrev}
            className="absolute left-8 text-white text-5xl hover:scale-110"
          >
            &#10094;
          </button>

          <img
            src={images[selectedIndex]}
            alt=""
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />

          <button
            onClick={showNext}
            className="absolute right-8 text-white text-5xl hover:scale-110"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  )
}
