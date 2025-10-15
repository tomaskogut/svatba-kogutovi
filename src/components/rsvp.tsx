export default function Rsvp() {
  return (
    <section id="rsvp" className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-semibold mb-4">Potvrďte svou účast</h2>
      <p className="mb-6">Dejte nám vědět, jestli dorazíte – budeme se těšit!</p>
      <form className="flex flex-col gap-4 max-w-sm w-full">
        <input type="text" placeholder="Vaše jméno" className="border rounded-lg p-3" />
        <input type="email" placeholder="E-mail" className="border rounded-lg p-3" />
        <button className="bg-[#d497d5] text-white rounded-lg py-3 hover:bg-[#a777a8] transition">
          Odeslat
        </button>
      </form>
    </section>
  )
}
