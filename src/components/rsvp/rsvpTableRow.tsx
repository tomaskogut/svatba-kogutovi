import type { RsvpRecord } from './rsvpTable.tsx'

type RsvpTableRowProps = {
  record: RsvpRecord
  index: number
}

export default function RsvpTableRow({ record, index }: RsvpTableRowProps) {
  return (
    <div
      className={`grid grid-cols-6 gap-4 px-4 py-3 ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      } hover:bg-gray-100 transition-colors`}
    >
      <div className="font-medium break-words">{record.name}</div>
      <div className="text-gray-600 break-all">{record.email}</div>
      <div className="text-center">{record.adults}</div>
      <div className="text-center">{record.kids}</div>
      <div className="text-center">{record.attendanceType}</div>
      <div className="text-gray-600 break-words">{record.note || '—'}</div>
    </div>
  )
}
