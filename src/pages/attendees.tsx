import bgLeft from '../assets/bg_left.png'
import bgRight from '../assets/bg_right.png'
import Layout from '../components/layout.tsx'
import RsvpTable from '../components/rsvp/rsvpTable.tsx'
import { useState } from 'react'
import BackButton from '../components/buttons/backButton.tsx'
import bgImage from '../assets/background.png'

export default function Attendees() {
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      setAuthorized(true)
    } else {
      setError('Neplatné heslo')
    }
  }

  if (!authorized) {
    return (
      <Layout leftImage={bgLeft} rightImage={bgRight} mobileImage={bgImage}>
        <main className="flex flex-col py-20 min-h-screen">
          <BackButton />
          <h1 className="text-[3rem] font-alexbrush text-center mb-5">Přístup pro organizátory</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Zadej heslo"
              className="border rounded px-4 py-2"
            />
            <button
              type="submit"
              className="bg-[#d497d5] text-white px-4 py-2 rounded hover:bg-[#b47ab3] m-5"
            >
              Přihlásit se
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </main>
      </Layout>
    )
  }

  return (
    <Layout leftImage={bgLeft} rightImage={bgRight} mobileImage={bgImage}>
      <main className="min-h-screen py-20">
        <h1 className="text-[3rem] font-alexbrush text-center mb-10">Přihlášení účastníci</h1>
        <RsvpTable />
      </main>
    </Layout>
  )
}
