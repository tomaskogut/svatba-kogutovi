/// <reference types="@types/google.maps" />
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    initMap?: () => void
  }
}

const MARKERS = [
  {
    position: { lat: 49.5391952, lng: 18.0229956 },
    title: 'Místo obřadu',
  },
  {
    position: { lat: 49.5364247, lng: 18.0220248 },
    title: 'Místo hostiny',
  },
  {
    position: { lat: 49.538017, lng: 18.023821 },
    title: 'Parkoviště č.1',
  },
  {
    position: { lat: 49.53741752195716, lng: 18.022178117287527 },
    title: 'Parkoviště č.2',
  },
] as const

async function initializeMap(element: HTMLElement): Promise<google.maps.Map> {
  const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker'
  )) as google.maps.MarkerLibrary

  const map = new Map(element, {
    center: { lat: 49.5376569694194, lng: 18.023989106547933 },
    zoom: 16,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapId: 'DEMO_MAP_ID',
    styles: [
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
    ],
  })

  MARKERS.forEach((markerConfig, index) => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: markerConfig.position,
      title: markerConfig.title,
      gmpClickable: true,
    })

    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="padding: 8px; font-weight: 400;">${markerConfig.title}</div>`,
    })

    if (index === 0) {
      infoWindow.open({
        anchor: marker,
        map,
      })
    }

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map,
      })
    })
  })

  return map
}

export default function GoogleMap() {
  const mapRef = useRef<google.maps.Map | null>(null)
  const mapElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.google?.maps) {
      if (!mapRef.current && mapElementRef.current) {
        initializeMap(mapElementRef.current).then((map) => {
          mapRef.current = map
        })
      }
      return
    }

    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
    if (existingScript) {
      if (!window.initMap) {
        window.initMap = () => {
          if (mapElementRef.current && !mapRef.current) {
            initializeMap(mapElementRef.current).then((map) => {
              mapRef.current = map
            })
          }
        }
      }
      return
    }

    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

    if (!apiKey) {
      console.error('Google Maps API key is missing!')
      return
    }

    window.initMap = () => {
      if (mapElementRef.current && !mapRef.current) {
        initializeMap(mapElementRef.current).then((map) => {
          mapRef.current = map
        })
      }
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {}
  }, [])

  return (
    <div
      ref={mapElementRef}
      className="w-full h-64 md:h-96 lg:h-[500px] max-w-4xl mx-auto my-8 rounded-3xl drop-shadow-2xl overflow-hidden"
    ></div>
  )
}
