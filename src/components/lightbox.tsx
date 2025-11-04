import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/img/img${i + 1}.jpeg`,
  description: `Obrázek ${i + 1}`,
}))

export default function LightBox() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.description}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-sm"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images}
        plugins={[Thumbnails, Captions]}
      />
    </div>
  )
}
