import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Courses from './pages/Courses'
import Dictionary from './pages/Dictionary'
import PersonalityTest from './pages/PersonalityTest'
import RelationshipQuiz from './pages/RelationshipQuiz'
import LieDetector from './pages/LieDetector'
import Guides from './pages/Guides'
import GuideSpotALiar from './pages/GuideSpotALiar'
import GuideConfidentBodyLanguage from './pages/GuideConfidentBodyLanguage'
import GuideAttractionSignals from './pages/GuideAttractionSignals'
import GuideJobInterview from './pages/GuideJobInterview'
import GuideMyths from './pages/GuideMyths'
import GuideWorkplaceBodyLanguage from './pages/GuideWorkplaceBodyLanguage'
import GuideFirstDate from './pages/GuideFirstDate'
import GuideAroundTheWorld from './pages/GuideAroundTheWorld'
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
  '/relationship-quiz': {
    title: 'Relationship Body Language Quiz — How Connected Are You? | BodyLanguageIQ',
    description: 'Discover your Relationship Connection Score. Answer 15 questions about how you and your partner interact physically and emotionally. Perfect for couples to compare results.',
  },
  '/lie-detector': {
    title: 'Lie Detector - BodyLanguageIQ',
    description: 'Learn to spot deception through micro-expressions and body language tells. Coming soon!',
  },
  '/guides': {
    title: 'Body Language Guides — Learn to Read People | BodyLanguageIQ',
    description: 'Free in-depth body language guides covering job interviews, attraction signals, confidence, deception detection and more. Learn to read people better in every situation.',
  },
  '/guides/spot-a-liar': {
    title: 'How to Spot a Liar: Body Language Signs of Deception | BodyLanguageIQ',
    description: 'Learn the body language signals experts use to detect deception. Discover the clusters, micro-expressions and contradictions that reveal when someone is not telling the truth.',
  },
  '/guides/confident-body-language': {
    title: 'Confident Body Language: 10 Changes You Can Make Today | BodyLanguageIQ',
    description: 'Learn how to look and feel more confident through body language. Ten practical changes backed by psychology that you can start using immediately.',
  },
  '/guides/attraction-signals': {
    title: 'Attraction Signals: How to Tell if Someone Likes You | BodyLanguageIQ',
    description: 'Learn the 12 most reliable body language signals of genuine attraction. Discover what really reveals romantic interest and what is just friendliness.',
  },
  '/guides/job-interview': {
    title: 'Job Interview Body Language: How to Make the Right Impression | BodyLanguageIQ',
    description: 'Master the body language signals that win job interviews. Learn what interviewers are really reading and how to present yourself with confidence from the moment you walk in.',
  },
  '/guides/myths': {
    title: 'Body Language Myths Debunked: What the Science Actually Says | BodyLanguageIQ',
    description: 'The most common body language myths fact checked against real psychology research. Discover what is true, what is false and what is far more complicated than you thought.',
  },
  '/guides/workplace-body-language': {
    title: 'Reading Body Language at Work: The Complete Workplace Guide | BodyLanguageIQ',
    description: 'Learn to read workplace body language signals. Understand office politics, read your boss and colleagues accurately and present yourself as a confident professional.',
  },
  '/guides/first-date': {
    title: 'First Date Body Language: What to Look For and What to Show | BodyLanguageIQ',
    description: 'Learn the body language signals that reveal genuine interest on a first date. Discover what to look for, what to show and how to read the signals that matter most.',
  },
  '/guides/around-the-world': {
    title: 'Body Language Around The World: Cultural Differences Explained | BodyLanguageIQ',
    description: 'The same gesture means different things in different cultures. Learn the essential cultural body language differences to avoid costly misunderstandings in international situations.',
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
          <Route path="/relationship-quiz" element={<RelationshipQuiz />} />
          <Route path="/lie-detector" element={<LieDetector />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/spot-a-liar" element={<GuideSpotALiar />} />
          <Route path="/guides/confident-body-language" element={<GuideConfidentBodyLanguage />} />
          <Route path="/guides/attraction-signals" element={<GuideAttractionSignals />} />
          <Route path="/guides/job-interview" element={<GuideJobInterview />} />
          <Route path="/guides/myths" element={<GuideMyths />} />
          <Route path="/guides/workplace-body-language" element={<GuideWorkplaceBodyLanguage />} />
          <Route path="/guides/first-date" element={<GuideFirstDate />} />
          <Route path="/guides/around-the-world" element={<GuideAroundTheWorld />} />
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
