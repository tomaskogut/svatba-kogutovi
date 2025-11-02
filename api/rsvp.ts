import type { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient } from 'mongodb'
import { ulid } from 'ulid'

const uri = process.env.MONGODB_URI as string
console.log('MONGODB_URI: ', uri)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db('svatba')
    const collection = db.collection('rsvp')

    const { name, email, adults, kids, attendanceType, notes } = req.body
    const existing = await collection.findOne({ email })

    if (existing) {
      await client.close()
      return res.status(400).json({ message: 'Tento email již byl použit.' })
    }

    await collection.insertOne({
      rsvpId: ulid(),
      name,
      email,
      adults,
      kids,
      attendanceType,
      notes,
      createdAt: new Date(),
    })

    await client.close()

    return res.status(200).json({ message: 'RSVP uložen!' })
  } catch (error) {
    console.error('Chyba při ukládání:', error)
    return res.status(500).json({ message: 'Chyba serveru' })
  }
}
