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
        <li>Bod č. 5 - terciární parkoviště </li>
        <li>Bod č. 6 - kvartérní parkoviště </li>
        <li>Bod č. 7 - kvintérní parkoviště </li>
        <li>Bod č. 8 - sextérní parkoviště </li>
        <li>Bod č. 9 - septérní parkoviště </li>
        <li>Bod č. 10 - okterní parkoviště </li>
        <li>Bod č. 11 - nonérní parkoviště </li>
        <li>Bod č. 12 - decérní parkoviště </li>
        <li>Bod č. 13 - undecérní parkoviště </li>
        <li>Bod č. 14 - duodecérní parkoviště </li>
      </ul>

      <GoogleMap />

      <h2 className="text-left m-4 text-xl">Program: </h2>
      <p className="italic text-left mb-4 mx-4">
        časy začínající obědem jsou přibližné, výjma rautu, který bude z organizačních důvodu
        dodržen.
      </p>
      <ul className="list-none mx-4 pl-6 space-y-2 text-left">
        <li>11:00 - Začínáme slavnostním obřadem v Kostele</li>
        <li>13:00 - Oběd ve společenském domě pro zvané hosty</li>
        <li>15:00 - Focení novomanželů</li>
        <li>16:00 - Příchod hostů na večerní raut </li>
        <li>16:30 - Večerní raut</li>
        <li>17:00 - Společenské hry</li>
        <li>18:00 - Živá hudba / tanec</li>
        <li>19:00 - Podávání slivovice</li>
        <li>20:00 - Uložení dětí na kutě</li>
        <li>20:30 - Volné aktivity</li>
        <li>21:00 - Začátek neřízené zábavy</li>
        <li>22:00 - Kejklíři, polikači ohňů, břišní tanečnice a dobová hudba</li>
        <li>23:00 - Šarvátky a intenzivní opilecké rozhovory</li>
        <li>00:00 - Kdo toho nejvíc vypije, podpálení společenského domu a rušení nočního klidu</li>
      </ul>

      <p className="italic text-left m-4 mx-4">
        Pro hosty zvané od večerního rautu navrhujeme možné aktivity:
      </p>

      <ul className="list-disc mx-4 pl-6 space-y-2 text-left">
        <li>zážitkové sekání pole traktorem</li>
        <li>plevání zahrádky na 100 způsobů</li>
        <li>sekání dříví na zimu / složení uhlí</li>
        <li>Výmalba bytu pro novomanžele</li>
        <li>Dobročinná sbírka</li>
        <li>Oprava fasády Kostela</li>
        <li>Krmení slepic</li>
        <li>Stánková evangelizace Hodslavic</li>
        <li>...</li>
      </ul>

      <div className="h-[256px]"></div>
    </section>
  )
}
