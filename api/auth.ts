import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

const SECRET = process.env.ATTENDEES_PASSWORD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { password } = req.body

  if (!SECRET) {
    return res.status(500).json({ message: 'Server misconfigured' })
  }

  if (password === SECRET) {
    const cookie = serialize('attendees_auth', '1', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60,
    })
    res.setHeader('Set-Cookie', cookie)
    return res.status(200).json({ ok: true })
  }

  return res.status(401).json({ ok: false, message: 'Invalid password' })
}
