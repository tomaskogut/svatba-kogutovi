import GoogleMap from './googleMap.tsx'

export default function Details() {
  return (
    <section id="details" className="items-center justify-center text-center">
      <div className="text-3xl font-semibold mb-4">Informace</div>
      <GoogleMap />
      <div className="h-[256px]"></div>
    </section>
  )
}
