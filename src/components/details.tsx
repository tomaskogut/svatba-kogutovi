import GoogleMap from './googleMap.tsx'
import { Link } from 'react-router-dom'

export default function Details() {
  return (
    <section id="details" className="items-center justify-center text-center">
      <div className="text-3xl font-semibold mb-4">Informace</div>
      <GoogleMap />

      <Link
        to="/attendees"
        className="inline-block px-5 py-3 w-36 bg-[#d497d5] text-white rounded-lg font-semibold transition-colors hover:bg-[#a777a8]"
      >
        Účastníci
      </Link>

      <div className="h-[256px]"></div>
    </section>
  )
}
