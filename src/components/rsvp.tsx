import { useState } from 'react'

export default function Rsvp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [notes, setNotes] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = { name, email, adults, children, notes }

    console.log('env: ', import.meta.env.MODE)
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (res.ok) {
        alert('Díky, vaše účast byla zaznamenána!')
        setName('')
        setEmail('')
        setAdults(1)
        setChildren(0)
        setNotes('')
      } else {
        alert(`Chyba: ${result.message}`)
      }
    } catch (err) {
      alert('Došlo k chybě, zkuste to prosím později.')
      console.error(err)
    }
  }

  return (
    <section id="rsvp" className="flex flex-col items-center justify-center text-center px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">Potvrďte svou účast</h2>
      <p className="mb-6 text-gray-700">Dejte nám vědět, jestli dorazíte – budeme se těšit!</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
        <input
          type="text"
          placeholder="Vaše jméno / rodina / pár"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
        />

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <label className="font-medium text-left mb-1">Počet dospělých</label>
            <input
              type="number"
              min={0}
              max={10}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="font-medium text-left mb-1">Počet dětí nad 4 roky</label>
            <input
              type="number"
              min={0}
              max={10}
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#d497d5]"
            />
          </div>
        </div>

        <textarea
          placeholder="Poznámky / alergie / vegetarián (volitelné)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d497d5] resize-none"
        />

        <button
          type="submit"
          className="bg-[#d497d5] text-white rounded-lg py-3 hover:bg-[#a777a8] transition mt-2"
        >
          Odeslat
        </button>
      </form>
      <div className="h-[256px]"></div>
    </section>
  )
}
