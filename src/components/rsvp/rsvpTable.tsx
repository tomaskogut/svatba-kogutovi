import { useEffect, useState } from 'react'
import BackButton from '../backButton.tsx'
import RsvpTableRow from './rsvpTableRow.tsx'

type RsvpRecord = {
  _id: string
  name: string
  email: string
  adults: number
  kids: number
  note?: string
  createdAt: string
}

export type { RsvpRecord }

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
    <div className="max-w-6xl mx-auto my-8 px-4">
      <BackButton />

      <div className="grid grid-cols-5 gap-4 bg-[#d497d5] text-white px-4 py-3 rounded-t-lg font-semibold">
        <div>Jméno</div>
        <div>Email</div>
        <div className="text-center">Dospělí</div>
        <div className="text-center">Děti</div>
        <div>Poznámky</div>
      </div>

      <div className="border border-gray-300 rounded-b-lg overflow-hidden">
        {records.map((record, idx) => (
          <RsvpTableRow key={record._id} record={record} index={idx} />
        ))}
      </div>
    </div>
  )
}
