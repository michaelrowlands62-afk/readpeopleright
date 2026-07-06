import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Courses from './pages/Courses'
import Dictionary from './pages/Dictionary'
import PersonalityTest from './pages/PersonalityTest'
import Game from './pages/Game'
import Admin from './pages/Admin'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const PAGE_META = {
  '/': {
    title: 'BodyLanguageIQ - Can You Read People? Test Your Body Language Skills',
    description: 'Test your body language IQ with our free interactive quiz game. Watch real signals, make your guess, and learn what people are really communicating through posture, gestures and expression.',
  },
  '/episodes': {
    title: 'Browse Episodes - BodyLanguageIQ',
    description: 'Choose from 7 body language categories including deception detection, attraction signals and workplace reads. Each episode is a quick, addictive quiz to sharpen your nonverbal skills.',
  },
  '/dictionary': {
    title: 'Body Language Dictionary - BodyLanguageIQ',
    description: 'A comprehensive A–Z guide to nonverbal signals and body language cues. Explore 60 entries covering stress, attraction, deception, confidence and more — each with clear explanations.',
  },
  '/personality-test': {
    title: 'Body Language Personality Test - BodyLanguageIQ',
    description: 'Discover your natural body language style with our 12-question personality test. Are you a Connector, Observer, Performer, Diplomat, Protector or Authority?',
  },
  '/courses': {
    title: 'Courses - BodyLanguageIQ',
    description: 'Take your body language skills further with our in-depth guides covering workplace signals, attraction cues, deception detection, dating reads and more.',
  },
  '/about': {
    title: 'About - BodyLanguageIQ',
    description: 'Learn about BodyLanguageIQ and our host Natalie Rowlands, a forensic psychology expert dedicated to making the science of body language accessible to everyone.',
  },
  '/contact': {
    title: 'Contact Us - BodyLanguageIQ',
    description: 'Have a question, feedback or partnership enquiry? Get in touch with the BodyLanguageIQ team using our contact form.',
  },
}

function Layout() {
  const { pathname } = useLocation()
  const isFullscreen = pathname === '/game' || pathname === '/admin'

  useEffect(() => {
    const meta = PAGE_META[pathname]
    if (!meta) return
    document.title = meta.title
    const tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', meta.description)
  }, [pathname])

  return (
    <>
      {!isFullscreen && <NavBar />}
      <div className={isFullscreen ? '' : 'page-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/game" element={<Game />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
