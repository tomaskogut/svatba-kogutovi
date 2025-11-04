import { useState, useEffect } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css'

const imageCount = 20
const imageUrls = Array.from({ length: imageCount }, (_, i) => `/img/img${i + 1}.jpeg`)

export default function DynamicGallery() {
  interface GalleryImage {
    src: string
    thumbnail: string
    width: number
    height: number
    title?: string
  }

  const [images, setImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    Promise.all(
      imageUrls.map(async (url) => {
        const img = new Image()
        img.src = url

        await new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
        })

        return {
          src: url,
          thumbnail: url,
          width: img.naturalWidth,
          height: img.naturalHeight,
          title: url.split('/').pop(),
        }
      })
    ).then(setImages)
  }, [])

  return (
    <div className="p-8 min-h-screen">
      {images.length === 0 ? (
        <p>Načítám obrázky...</p>
      ) : (
        <Gallery>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <Item
                key={i}
                original={img.src}
                thumbnail={img.thumbnail}
                width={img.width}
                height={img.height}
              >
                {({ ref, open }) => (
                  <div
                    ref={ref}
                    onClick={open}
                    className="w-full h-48 overflow-hidden rounded-lg cursor-pointer shadow-sm hover:scale-105 hover:shadow-md transition-transform duration-300"
                  >
                    <img
                      src={img.thumbnail}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      )}
    </div>
  )
}
