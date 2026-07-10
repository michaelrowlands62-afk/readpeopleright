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
import PokerFace from './pages/PokerFace'
import Guides from './pages/Guides'
import GuideSpotALiar from './pages/GuideSpotALiar'
import GuideConfidentBodyLanguage from './pages/GuideConfidentBodyLanguage'
import GuideAttractionSignals from './pages/GuideAttractionSignals'
import GuideJobInterview from './pages/GuideJobInterview'
import GuideMyths from './pages/GuideMyths'
import GuideWorkplaceBodyLanguage from './pages/GuideWorkplaceBodyLanguage'
import GuideFirstDate from './pages/GuideFirstDate'
import GuideAroundTheWorld from './pages/GuideAroundTheWorld'
import GuideReadingEyes from './pages/GuideReadingEyes'
import GuideVideoCalls from './pages/GuideVideoCalls'
import GuideNervousBodyLanguage from './pages/GuideNervousBodyLanguage'
import GuidePublicSpeaking from './pages/GuidePublicSpeaking'
import GuideArguments from './pages/GuideArguments'
import GuideReadingChildren from './pages/GuideReadingChildren'
import GuideStressSignals from './pages/GuideStressSignals'
import GuidePowerBodyLanguage from './pages/GuidePowerBodyLanguage'
import GuideLyingSignals from './pages/GuideLyingSignals'
import GuideMaleAttractionSignals from './pages/GuideMaleAttractionSignals'
import GuideAlphaBodyLanguage from './pages/GuideAlphaBodyLanguage'
import GuideSuccessBodyLanguage from './pages/GuideSuccessBodyLanguage'
import GuideRelationshipTypes from './pages/GuideRelationshipTypes'
import GuideNegotiationBodyLanguage from './pages/GuideNegotiationBodyLanguage'
import GuideBodyLanguageAtParty from './pages/GuideBodyLanguageAtParty'
import Game from './pages/Game'
import Admin from './pages/Admin'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const PAGE_META = {
  '/': {
    title: 'BodyLanguageIQ: Free Body Language Quizzes, Games and Guides | Read People Better',
    description: 'Learn to read body language with free interactive quizzes, games and in-depth guides. Test your skills across 7 categories including deception detection, attraction signals and workplace dynamics.',
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
    title: 'Body Language Personality Test: What Does Your Body Language Say About You | BodyLanguageIQ',
    description: 'Discover your body language personality type in two levels. Find out whether you are a Connector, Observer, Performer, Diplomat, Protector or Authority and what it reveals about you.',
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
    title: 'Relationship Mastery Test: How Deeply Do You Know Each Other | BodyLanguageIQ',
    description: 'Three levels of relationship body language questions. Test your emotional attunement and nonverbal connection. How well do you really know your partner.',
  },
  '/lie-detector': {
    title: 'Lie Detector Test: Three Levels of Deception Detection | BodyLanguageIQ',
    description: 'Can you spot a liar? Three levels of increasing difficulty. Beginner, Intermediate and Expert. Score 40 out of 50 to unlock the next level. Test your deception detection skills now.',
  },
  '/poker-face': {
    title: 'The Poker Face Challenge: Can You See Through a Poker Face? | BodyLanguageIQ',
    description: '10 scenarios. 10 people trying not to be read. Test your ability to read people who are actively concealing their true reaction. Get your Poker Face Rating now.',
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
  '/guides/reading-eyes': {
    title: "How to Read Someone's Eyes: The Complete Guide | BodyLanguageIQ",
    description: 'Learn to read the eyes accurately. Pupil dilation, eye contact patterns, gaze direction and the micro signals that reveal true emotion before conscious control takes over.',
  },
  '/guides/video-calls': {
    title: 'Body Language on Video Calls: The Complete Guide | BodyLanguageIQ',
    description: 'Master the unique body language of video calls. Learn what your camera angle, eye contact, background and posture communicate to others on screen and how to project confidence remotely.',
  },
  '/guides/nervous-body-language': {
    title: 'Nervous Body Language: Signs of Anxiety and How to Manage Them | BodyLanguageIQ',
    description: 'Learn to recognise the signs of nervousness in yourself and others. Understand what triggers anxiety signals, how to read them accurately and how to manage them in high pressure situations.',
  },
  '/guides/public-speaking': {
    title: 'Body Language for Public Speaking: Command Any Room | BodyLanguageIQ',
    description: 'Master the body language of confident public speaking. Learn the posture, gestures, eye contact and movement that turn nervous presenters into compelling and memorable speakers.',
  },
  '/guides/arguments': {
    title: 'Reading Body Language in Arguments: What People Really Mean | BodyLanguageIQ',
    description: 'Arguments have their own body language grammar. Learn to read escalation signals, genuine distress versus performance and the nonverbal cues that reveal what your partner really means during conflict.',
  },
  '/guides/reading-children': {
    title: 'Reading Children\'s Body Language: What Your Child Is Really Telling You | BodyLanguageIQ',
    description: 'Children cannot always express what they feel in words. Learn to read the nonverbal signals that reveal how your child is really feeling, from anxiety and fear to joy and genuine confidence.',
  },
  '/guides/stress-signals': {
    title: 'Body Language Signs of Stress: How to Read and Recognise Anxiety | BodyLanguageIQ',
    description: 'Stress leaks through the body before the mind acknowledges it. Learn to recognise the early physical signals of stress in yourself and others and respond before it escalates.',
  },
  '/guides/power-body-language': {
    title: 'Power Body Language: The Signals of Dominance, Status and Authority | BodyLanguageIQ',
    description: 'Understand the nonverbal signals of dominance, status and authority. Learn how power expresses itself physically and how to project calm confidence in any situation.',
  },
  '/guides/lying-signs': {
    title: 'Body Language Signs Someone Is Lying to You: A Personal Guide | BodyLanguageIQ',
    description: 'A personal guide to spotting deception in everyday situations. The signals that reveal dishonesty in partners, colleagues and friends and why context always matters.',
  },
  '/guides/male-attraction-signals': {
    title: 'Body Language of Attraction in Men: What to Look For | BodyLanguageIQ',
    description: 'The specific signals men display when genuinely attracted to someone. Learn to distinguish real interest from social politeness and read the subtle cues most people miss.',
  },
  '/guides/alpha-body-language': {
    title: 'Alpha Body Language: The Signals of Natural Confidence and Authority | BodyLanguageIQ',
    description: 'What genuine confidence and natural authority look like in the body. The signals that project leadership and calm command without aggression or performance.',
  },
  '/guides/success-body-language': {
    title: 'Body Language Secrets of Successful People: What They Do Differently | BodyLanguageIQ',
    description: 'What do the most successful people do differently with their body language? The nonverbal habits that build trust, project competence and open doors before a word is spoken.',
  },
  '/guides/relationship-types': {
    title: 'Body Language in Different Relationships: Friends, Family, Colleagues and Partners | BodyLanguageIQ',
    description: 'Friends, family, colleagues and romantic partners all have different nonverbal languages. Learn to read the unique body language patterns of each type of relationship.',
  },
  '/guides/negotiation-body-language': {
    title: 'Body Language in Negotiations: Read the Room and Win | BodyLanguageIQ',
    description: 'Negotiations are won and lost in the nonverbal space. Learn to read the signals that reveal genuine interest, resistance and readiness to agree before the other side says a word.',
  },
  '/guides/social-situations': {
    title: 'How to Read Body Language at a Party: Social Signals Explained | BodyLanguageIQ',
    description: 'Social gatherings are rich with nonverbal signals. Learn to read who is genuinely enjoying themselves, who wants to leave and what the body language of real connection looks like in a crowd.',
  },
}

function Layout() {
  const { pathname } = useLocation()
  const isFullscreen = pathname === '/game' || pathname === '/admin' || pathname === '/lie-detector' || pathname === '/poker-face'

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
          <Route path="/poker-face" element={<PokerFace />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/spot-a-liar" element={<GuideSpotALiar />} />
          <Route path="/guides/confident-body-language" element={<GuideConfidentBodyLanguage />} />
          <Route path="/guides/attraction-signals" element={<GuideAttractionSignals />} />
          <Route path="/guides/job-interview" element={<GuideJobInterview />} />
          <Route path="/guides/myths" element={<GuideMyths />} />
          <Route path="/guides/workplace-body-language" element={<GuideWorkplaceBodyLanguage />} />
          <Route path="/guides/first-date" element={<GuideFirstDate />} />
          <Route path="/guides/around-the-world" element={<GuideAroundTheWorld />} />
          <Route path="/guides/reading-eyes" element={<GuideReadingEyes />} />
          <Route path="/guides/video-calls" element={<GuideVideoCalls />} />
          <Route path="/guides/nervous-body-language" element={<GuideNervousBodyLanguage />} />
          <Route path="/guides/public-speaking" element={<GuidePublicSpeaking />} />
          <Route path="/guides/arguments" element={<GuideArguments />} />
          <Route path="/guides/reading-children" element={<GuideReadingChildren />} />
          <Route path="/guides/stress-signals" element={<GuideStressSignals />} />
          <Route path="/guides/power-body-language" element={<GuidePowerBodyLanguage />} />
          <Route path="/guides/lying-signs" element={<GuideLyingSignals />} />
          <Route path="/guides/male-attraction-signals" element={<GuideMaleAttractionSignals />} />
          <Route path="/guides/alpha-body-language" element={<GuideAlphaBodyLanguage />} />
          <Route path="/guides/success-body-language" element={<GuideSuccessBodyLanguage />} />
          <Route path="/guides/relationship-types" element={<GuideRelationshipTypes />} />
          <Route path="/guides/negotiation-body-language" element={<GuideNegotiationBodyLanguage />} />
          <Route path="/guides/social-situations" element={<GuideBodyLanguageAtParty />} />
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
