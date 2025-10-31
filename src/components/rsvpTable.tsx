import { useEffect, useState } from 'react'
import BackButton from './backButton.tsx'

export type RsvpRecord = {
  _id: string
  name: string
  email: string
  adults: number
  kids: number
  note?: string
  createdAt: string
}

export default function RsvpTable() {
  const [records, setRecords] = useState<RsvpRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/rsvpList')
      .then(async (res) => {
        if (res.status === 401) {
          throw new Error('Neautorizovaný přístup. Zadej prosím heslo.')
        }
        return res.json()
      })
      .then((data) => setRecords(data))
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="text-center mt-8 text-gray-600 animate-pulse">Načítám seznam hostů...</p>
  }

  if (error) {
    return <p className="text-center mt-8 text-red-600">{error}</p>
  }

  if (records.length === 0) {
    return <p className="text-center mt-8 text-gray-600">Zatím žádné odpovědi na pozvánku.</p>
  }

  return (
    <div className="overflow-x-auto max-w-4xl mx-auto my-8">
      <BackButton />
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-[#d497d5] text-white">
            <th className="px-4 py-2">Jméno / Rodina</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Dospělí</th>
            <th className="px-4 py-2">Děti</th>
            <th className="px-4 py-2">Poznámky</th>
            <th className="px-4 py-2">Přidáno</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r._id} className="border-t">
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2">{r.email}</td>
              <td className="px-4 py-2">{r.adults}</td>
              <td className="px-4 py-2">{r.kids}</td>
              <td className="px-4 py-2">{r.note}</td>
              <td className="px-4 py-2">{new Date(r.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
