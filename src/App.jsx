import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Game from './pages/Game'
import './App.css'

function Layout() {
  const { pathname } = useLocation()
  const isGame = pathname === '/game'

  return (
    <>
      {!isGame && <NavBar />}
      <div className={isGame ? '' : 'page-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
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
