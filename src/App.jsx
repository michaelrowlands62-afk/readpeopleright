import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Courses from './pages/Courses'
import Dictionary from './pages/Dictionary'
import PersonalityTest from './pages/PersonalityTest'
import RelationshipQuiz from './pages/RelationshipQuiz'
import LieDetector from './pages/LieDetector'
import PokerFace from './pages/PokerFace'
import RealOrFake from './pages/RealOrFake'
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
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import './App.css'

const PAGE_META = {
  '/': {
    title: 'BodyLanguageIQ: Free Body Language Quizzes, Games and Guides | Read People Better',
    description: 'Learn body language with quizzes, games and guides. Test your skills in deception detection, attraction signals and workplace dynamics at BodyLanguageIQ.',
  },
  '/episodes': {
    title: 'Browse Episodes - BodyLanguageIQ',
    description: 'Choose from 7 body language categories. Each quiz sharpens your skills in deception detection, attraction, workplace and social dynamics at BodyLanguageIQ.',
  },
  '/dictionary': {
    title: 'Body Language Dictionary - BodyLanguageIQ',
    description: 'A comprehensive A-Z guide to nonverbal signals and body language. Explore 60 entries covering stress, attraction, deception and confidence at BodyLanguageIQ.',
  },
  '/personality-test': {
    title: 'Body Language Personality Test: What Does Your Body Language Say About You | BodyLanguageIQ',
    description: 'Discover your body language personality type. Find out if you are a Connector, Observer, Performer, Diplomat, Protector or Authority at BodyLanguageIQ.',
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
    description: 'Get in touch with BodyLanguageIQ team now. Contact us today with all your questions, feedback or partnership enquiries through our body language form.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | BodyLanguageIQ',
    description: 'Read the complete BodyLanguageIQ privacy policy to understand exactly how we collect, store, use, secure and protect your personal information rights.',
  },
  '/relationship-quiz': {
    title: 'Relationship Mastery Test: How Deeply Do You Know Each Other | BodyLanguageIQ',
    description: 'Test your emotional attunement across three relationship body language levels. Discover how well you read nonverbal connection signals and connection.',
  },
  '/lie-detector': {
    title: 'Lie Detector Test: Three Levels of Deception Detection | BodyLanguageIQ',
    description: 'Master deception detection across three progressively challenging levels of difficulty. Beginner, Intermediate and Expert. Score 40+ to unlock levels.',
  },
  '/poker-face': {
    title: 'The Poker Face Challenge: Can You See Through a Poker Face? | BodyLanguageIQ',
    description: 'Challenge yourself reading 10 people trying to hide their emotions. Develop expert skills to detect concealed emotional reactions at BodyLanguageIQ online.',
  },
  '/real-or-fake': {
    title: 'Real or Fake Emotion: Can You Tell Genuine from Performed? | BodyLanguageIQ',
    description: 'Can you distinguish genuine emotions from performed reactions Play through three levels testing your emotional intelligence skills at BodyLanguageIQ..',
  },
  '/guides': {
    title: 'Body Language Guides — Learn to Read People | BodyLanguageIQ',
    description: 'Free in-depth body language guides covering job interviews, attraction signals, confidence, workplace dynamics and social situations at BodyLanguageIQ.',
  },
  '/guides/spot-a-liar': {
    title: 'How to Spot a Liar: Body Language Signs of Deception | BodyLanguageIQ',
    description: 'Learn body language signals that experts use to detect deception and lying behavior. Discover clusters and contradictions that reveal lying at BodyLanguageIQ.',
  },
  '/guides/confident-body-language': {
    title: 'Confident Body Language: 10 Changes You Can Make Today | BodyLanguageIQ',
    description: 'Learn how to look and feel more confident through body language today. Master the ten practical changes backed by psychology research at BodyLanguageIQ.',
  },
  '/guides/attraction-signals': {
    title: 'Attraction Signals: How to Tell if Someone Likes You | BodyLanguageIQ',
    description: 'Learn 12 reliable body language signals of genuine romantic attraction and real interest in dating. Discover what reveals true interest at BodyLanguageIQ.',
  },
  '/guides/job-interview': {
    title: 'Job Interview Body Language: How to Make the Right Impression | BodyLanguageIQ',
    description: 'Master body language signals that win job interviews and impress employers effectively. Learn what interviewers read and project confidence at BodyLanguageIQ.',
  },
  '/guides/myths': {
    title: 'Body Language Myths Debunked: What the Science Actually Says | BodyLanguageIQ',
    description: 'Body language myths fact checked and debunked against psychology research and science. Discover what is really true false and complicated at BodyLanguageIQ.',
  },
  '/guides/workplace-body-language': {
    title: 'Reading Body Language at Work: The Complete Workplace Guide | BodyLanguageIQ',
    description: 'Learn workplace body language signals to master office communication today. Understand office politics and present yourself confidently at BodyLanguageIQ.',
  },
  '/guides/first-date': {
    title: 'First Date Body Language: What to Look For and What to Show | BodyLanguageIQ',
    description: 'Learn body language signals that reveal genuine romantic interest on first dates and initial meetings. Discover what to look for and how to show interest now.',
  },
  '/guides/around-the-world': {
    title: 'Body Language Around The World: Cultural Differences Explained | BodyLanguageIQ',
    description: 'Learn essential cultural body language differences to avoid misunderstandings. Gestures mean different things worldwide across cultures at BodyLanguageIQ.',
  },
  '/guides/reading-eyes': {
    title: "How to Read Someone's Eyes: The Complete Guide | BodyLanguageIQ",
    description: 'Learn exactly how to read eyes accurately and detect hidden emotion. Pupil dilation, eye contact and micro signals reveal true emotions at BodyLanguageIQ.',
  },
  '/guides/video-calls': {
    title: 'Body Language on Video Calls: The Complete Guide | BodyLanguageIQ',
    description: 'Master body language during video calls, Zoom and online meetings. Learn camera angle, eye contact and posture to project confidence at BodyLanguageIQ.',
  },
  '/guides/nervous-body-language': {
    title: 'Nervous Body Language: Signs of Anxiety and How to Manage Them | BodyLanguageIQ',
    description: 'Learn to recognise nervousness and anxiety signals in yourself and others quickly. Understand your triggers and manage nervous tension at BodyLanguageIQ.',
  },
  '/guides/public-speaking': {
    title: 'Body Language for Public Speaking: Command Any Room | BodyLanguageIQ',
    description: 'Master body language for confident public speaking and presentations today. Learn posture, gestures and eye contact that command any audience at BodyLanguageIQ.',
  },
  '/guides/arguments': {
    title: 'Reading Body Language in Arguments: What People Really Mean | BodyLanguageIQ',
    description: 'Learn to read escalation signals and nonverbal cues that reveal what your partner really means during conflict and relationship arguments at BodyLanguageIQ.',
  },
  '/guides/reading-children': {
    title: 'Reading Children\'s Body Language: What Your Child Is Really Telling You | BodyLanguageIQ',
    description: 'Learn the nonverbal signals that reveal exactly how your child is feeling. Understand their anxiety, fear, joy and confidence levels at BodyLanguageIQ.',
  },
  '/guides/stress-signals': {
    title: 'Body Language Signs of Stress: How to Read and Recognise Anxiety | BodyLanguageIQ',
    description: 'Learn to recognise stress and anxiety signals in yourself and others immediately. Respond before stress escalates in any workplace situation at BodyLanguageIQ.',
  },
  '/guides/power-body-language': {
    title: 'Power Body Language: The Signals of Dominance, Status and Authority | BodyLanguageIQ',
    description: 'Understand nonverbal signals of dominance and authority in power dynamics and leadership. Learn how power expresses itself through body language physically.',
  },
  '/guides/lying-signs': {
    title: 'Body Language Signs Someone Is Lying to You: A Personal Guide | BodyLanguageIQ',
    description: 'Guide to spotting deception in everyday situations and personal relationships. Discover body language signals that reveal dishonesty at BodyLanguageIQ.',
  },
  '/guides/male-attraction-signals': {
    title: 'Body Language of Attraction in Men: What to Look For | BodyLanguageIQ',
    description: 'Discover the body language signals men display when genuinely attracted and interested. Learn to distinguish real romantic interest at BodyLanguageIQ.',
  },
  '/guides/alpha-body-language': {
    title: 'Alpha Body Language: The Signals of Natural Confidence and Authority | BodyLanguageIQ',
    description: 'Learn what genuine confidence and natural authority look like in the body and behavior. Understand the signals that project true leadership presence always.',
  },
  '/guides/success-body-language': {
    title: 'Body Language Secrets of Successful People: What They Do Differently | BodyLanguageIQ',
    description: 'Discover nonverbal habits of successful people that build trust and open professional doors. Learn what successful people do differently at BodyLanguageIQ.',
  },
  '/guides/relationship-types': {
    title: 'Body Language in Different Relationships: Friends, Family, Colleagues and Partners | BodyLanguageIQ',
    description: 'Learn the unique body language patterns in different relationships including friends, family, work colleagues and romantic partners at BodyLanguageIQ.',
  },
  '/guides/negotiation-body-language': {
    title: 'Body Language in Negotiations: Read the Room and Win | BodyLanguageIQ',
    description: 'Master reading body language signals in negotiations and business deals. Identify genuine interest, resistance and readiness to agree effectively now.',
  },
  '/guides/social-situations': {
    title: 'How to Read Body Language at a Party: Social Signals Explained | BodyLanguageIQ',
    description: 'Learn to read body language at parties and social gatherings. Identify who is genuinely enjoying themselves and what real connection looks like in crowds.',
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
          <Route path="/real-or-fake" element={<RealOrFake />} />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isFullscreen && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}
