import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Game from './pages/Game'
import Admin from './pages/Admin'
import './App.css'

function Layout() {
  const { pathname } = useLocation()
  const isFullscreen = pathname === '/game' || pathname === '/admin'

  return (
    <>
      {!isFullscreen && <NavBar />}
      <div className={isFullscreen ? '' : 'page-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/game" element={<Game />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
