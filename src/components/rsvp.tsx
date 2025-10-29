export default function Rsvp() {
  return (
    <section id="rsvp" className="flex flex-col items-center justify-center text-center px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">Potvrďte svou účast</h2>
      <p className="mb-6 text-gray-700">Dejte nám vědět, jestli dorazíte – budeme se těšit!</p>

      <form className="flex flex-col gap-4 max-w-md w-full">
        <input
          type="text"
          placeholder="Vaše jméno / rodina / pár"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
        />

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <label className="font-medium text-left mb-1">Počet dospělých</label>
            <input
              type="number"
              min={0}
              max={10}
              defaultValue={1}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="font-medium text-left mb-1">Počet dětí nad 4 roky</label>
            <input
              type="number"
              min={0}
              max={10}
              defaultValue={0}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
            />
          </div>
        </div>

        <textarea
          placeholder="Poznámky / alergie / vegetarián (volitelné)"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5] resize-none"
        />

        <button className="bg-[#d497d5] text-white rounded-lg py-3 hover:bg-[#a777a8] transition mt-2">
          Odeslat
        </button>
      </form>
    </section>
  )
}
