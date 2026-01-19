import GoogleMap from './googleMap.tsx'

export default function Details() {
  return (
    <section id="details" className="items-center justify-center text-center">
      <div className="text-3xl mb-4">Informace</div>
      <h2 className="text-left m-4 text-xl">Legenda mapy:</h2>
      <p className="italic text-left mb-4 mx-4">
        Na mapě je zaznamenáno více bodů pro lepší organizaci a usnadnění přístupu. Můžete nalézt
        červeně vyznačené body, které můžete rozkliknout pro popisek s detaily. Mapu lze oddálit pro
        naleznutí všech bodů.
      </p>
      <ul className="list-disc mx-4 pl-6 space-y-2 text-left">
        <li>Bod č. 1 - Evangelický kostel - místo obřadu</li>
        <li>Bod č. 2 - Společenský dům - místo hostiny a večerního rautu</li>
        <li>Bod č. 3 - primární parkoviště - pro cca x-vozidel</li>
        <li>Bod č. 4 - sekundární parkoviště </li>
      </ul>

      <GoogleMap />

      <h2 className="text-left m-4 text-xl">Program: </h2>
      {/*<p className="italic text-left mb-4 mx-4">*/}
      {/*  časy začínající obědem jsou přibližné, výjma rautu, který bude z organizačních důvodu*/}
      {/*  dodržen.*/}
      {/*</p>*/}
      <ul className="list-none mx-4 pl-6 space-y-2 text-left">
        <li>13:00 - Slavnostní obřad v Kostele</li>
        <li>15:00 - Oběd ve společenském domě pro zvané hosty</li>
        <li>19:00 - Večerní raut</li>
      </ul>

      {/*<p className="italic text-left m-4 mx-4">*/}
      {/*  Pro hosty zvané od večerního rautu navrhujeme možné aktivity:*/}
      {/*</p>*/}

      {/*<ul className="list-disc mx-4 pl-6 space-y-2 text-left">*/}
      {/*  <li>...</li>*/}
      {/*</ul>*/}

      <div className="h-[256px]"></div>
    </section>
  )
}
