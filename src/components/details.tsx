import GoogleMap from './googleMap.tsx'

export default function Details() {
  return (
    <section id="details" className="items-center justify-center text-center">
      <div className="text-3xl font-semibold mb-4">Informace</div>
      <GoogleMap />
      <div className="w-full h-64"></div>
      <div className="h-[1000px]"></div>
    </section>
  )
}
