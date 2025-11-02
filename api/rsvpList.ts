import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'cookie'

const uri = process.env.ATLAS_MONGODB_URI as string

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = parse(req.headers.cookie || '')
  if (!cookies.attendees_auth) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db('svatba')
    const collection = db.collection('rsvp')

    const records = await collection.find({}).sort({ createdAt: -1 }).toArray()

    await client.close()

    return res.status(200).json(records)
  } catch (error) {
    console.error('Chyba při načítání:', error)
    return res.status(500).json({ message: 'Chyba serveru' })
  }
}
