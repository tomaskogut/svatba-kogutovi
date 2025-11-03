import { HashRouter, Routes, Route } from 'react-router-dom'
import Gallery from './pages/gallery'
import { Home } from './pages/home.tsx'
import Attendees from './pages/attendees.tsx'

function App() {
  return (
    <div className="font-sans text-black">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attendees" element={<Attendees />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
