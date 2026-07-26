import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Courses from './pages/Courses'
import Dictionary from './pages/Dictionary'
import DictAdaptorGestures from './pages/DictAdaptorGestures'
import DictAnchoring from './pages/DictAnchoring'
import DictAsymmetricalExpression from './pages/DictAsymmetricalExpression'
import DictAvoidanceShuffle from './pages/DictAvoidanceShuffle'
import DictBackTurned from './pages/DictBackTurned'
import DictBarrierObjects from './pages/DictBarrierObjects'
import DictBellyButtonRule from './pages/DictBellyButtonRule'
import DictBlankStare from './pages/DictBlankStare'
import DictBlinkingRateIncrease from './pages/DictBlinkingRateIncrease'
import DictBodyOrientation from './pages/DictBodyOrientation'
import DictBrowRaise from './pages/DictBrowRaise'
import DictCheekPuffing from './pages/DictCheekPuffing'
import DictChinRaise from './pages/DictChinRaise'
import DictChinStroking from './pages/DictChinStroking'
import DictClenchedFists from './pages/DictClenchedFists'
import DictClosedEyesDuringSpeech from './pages/DictClosedEyesDuringSpeech'
import DictContemptMicroExpression from './pages/DictContemptMicroExpression'
import DictControlledBreathing from './pages/DictControlledBreathing'
import DictCowering from './pages/DictCowering'
import DictCradling from './pages/DictCradling'
import DictCrossedWrists from './pages/DictCrossedWrists'
import DictDefensiveCrossedLegs from './pages/DictDefensiveCrossedLegs'
import DictDirectEyeContact from './pages/DictDirectEyeContact'
import DictDeliberateTouch from './pages/DictDeliberateTouch'
import DictPupilDilation from './pages/DictPupilDilation'
import DictDisplacementActivity from './pages/DictDisplacementActivity'
import DictDoubleNod from './pages/DictDoubleNod'
import DictDownwardPalm from './pages/DictDownwardPalm'
import DictDroopingEyelids from './pages/DictDroopingEyelids'
import DictDuchenneSmile from './pages/DictDuchenneSmile'
import DictEarlobeTugging from './pages/DictEarlobeTugging'
import DictElbowPlacement from './pages/DictElbowPlacement'
import DictEyeContactAvoidance from './pages/DictEyeContactAvoidance'
import DictEyeBlock from './pages/DictEyeBlock'
import DictEyeFlash from './pages/DictEyeFlash'
import DictEyeRub from './pages/DictEyeRub'
import DictFacialSymmetryCheck from './pages/DictFacialSymmetryCheck'
import DictFakeLaugh from './pages/DictFakeLaugh'
import DictArmsCrossed from './pages/DictArmsCrossed'
import DictBarrierCrossing from './pages/DictBarrierCrossing'
import DictBrowFurrow from './pages/DictBrowFurrow'
import DictCatapultGesture from './pages/DictCatapultGesture'
import DictChestExpansion from './pages/DictChestExpansion'
import DictCrossedAnkles from './pages/DictCrossedAnkles'
import DictEyebrowFlash from './pages/DictEyebrowFlash'
import DictEyebrowRaise from './pages/DictEyebrowRaise'
import DictFingerPointing from './pages/DictFingerPointing'
import DictFingerTapping from './pages/DictFingerTapping'
import DictFistPump from './pages/DictFistPump'
import DictFixedSmile from './pages/DictFixedSmile'
import DictFootPointing from './pages/DictFootPointing'
import DictFootTap from './pages/DictFootTap'
import DictForwardLean from './pages/DictForwardLean'
import DictGazeAversion from './pages/DictGazeAversion'
import DictGenuineSurprise from './pages/DictGenuineSurprise'
import DictGenuineVsForcedSmile from './pages/DictGenuineVsForcedSmile'
import DictGravityDefyingGestures from './pages/DictGravityDefyingGestures'
import DictGroomingAnother from './pages/DictGroomingAnother'
import DictGroundingStance from './pages/DictGroundingStance'
import DictHairTouching from './pages/DictHairTouching'
import DictHandBarrier from './pages/DictHandBarrier'
import DictHandOnHeart from './pages/DictHandOnHeart'
import DictHandWringing from './pages/DictHandWringing'
import DictHandsInPockets from './pages/DictHandsInPockets'
import DictHeadShakeDuringAgreement from './pages/DictHeadShakeDuringAgreement'
import DictHeadTilt from './pages/DictHeadTilt'
import DictHostilityCluster from './pages/DictHostilityCluster'
import DictIllustratorGestures from './pages/DictIllustratorGestures'
import FAQ from './pages/FAQ'
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
  '/faq': {
    title: 'Body Language FAQ: Your Questions Answered | BodyLanguageIQ',
    description: 'Answers to the most common body language questions. What does crossed arms mean, how do you spot a liar, what are micro expressions and more.',
  },
  '/dictionary/adaptor-gestures': {
    title: 'What is Adaptor Gestures? Body Language Explained | BodyLanguageIQ',
    description: 'Adaptor gestures are self soothing habits like playing with jewellery or hair that reveal nervousness. Learn what they mean and how to read them accurately.',
  },
  '/dictionary/anchoring': {
    title: 'What is Anchoring? Body Language Explained | BodyLanguageIQ',
    description: 'Anchoring is a grounded stance signalling authority and confidence, while constant weight shifting suggests nervousness. Learn to recognise and use it yourself.',
  },
  '/dictionary/asymmetrical-expression': {
    title: 'What is Asymmetrical Expression? Body Language Explained | BodyLanguageIQ',
    description: 'Asymmetrical expression is when one side of the face shows more emotion than the other, often a sign the expression is forced. See how to spot it here.',
  },
  '/dictionary/avoidance-shuffle': {
    title: 'What is Avoidance Shuffle? Body Language Explained | BodyLanguageIQ',
    description: 'The avoidance shuffle is repeatedly moving slightly away from someone in conversation, a signal of discomfort with closeness. Learn to spot this retreat.',
  },
  '/dictionary/back-turned': {
    title: 'What is Back Turned? Body Language Explained | BodyLanguageIQ',
    description: 'Turning your back on someone in a social setting is one of the strongest signals of disinterest or dismissal. Learn what a back turned really communicates.',
  },
  '/dictionary/barrier-objects': {
    title: 'What is Barrier Objects? Body Language Explained | BodyLanguageIQ',
    description: 'Placing bags, cups or folders between yourself and others creates psychological distance. Learn what barrier objects reveal about comfort and protection.',
  },
  '/dictionary/belly-button-rule': {
    title: 'What is Belly Button Rule? Body Language Explained | BodyLanguageIQ',
    description: 'The belly button rule says the direction your navel points reveals your true focus, even when your face looks elsewhere. Learn how to read it accurately.',
  },
  '/dictionary/blank-stare': {
    title: 'What is Blank Stare? Body Language Explained | BodyLanguageIQ',
    description: 'A blank stare is a fixed expressionless gaze that can signal shock, dissociation or emotional shutdown. Learn what causes it and how to read it correctly.',
  },
  '/dictionary/blinking-rate-increase': {
    title: 'What is Blinking Rate Increase? Body Language Explained | BodyLanguageIQ',
    description: 'A rapid rise in blinking rate can signal stress, anxiety or cognitive overload. Learn the normal human blink rate and what changes from it actually reveal.',
  },
  '/dictionary/body-orientation': {
    title: 'What is Body Orientation? Body Language Explained | BodyLanguageIQ',
    description: "Body orientation, the direction someone's torso faces, reveals genuine interest even when their face looks elsewhere. Learn to read this engagement signal.",
  },
  '/dictionary/brow-raise': {
    title: 'What is Brow Raise? Body Language Explained | BodyLanguageIQ',
    description: 'A brow raise is the lifting of both eyebrows together, often signalling surprise or interest. Learn to read this common facial signal and what it reveals.',
  },
  '/dictionary/cheek-puffing': {
    title: 'What is Cheek Puffing? Body Language Explained | BodyLanguageIQ',
    description: 'Cheek puffing is a brief inflation of the cheeks before an exhale, often signalling relief, frustration or a pause while processing difficult information.',
  },
  '/dictionary/chin-raise': {
    title: 'What is Chin Raise? Body Language Explained | BodyLanguageIQ',
    description: 'A chin raise is a slight upward tilt of the head that signals confidence and sometimes defiance. Learn exactly what this gesture reveals and when it appears.',
  },
  '/dictionary/chin-stroking': {
    title: 'What is Chin Stroking? Body Language Explained | BodyLanguageIQ',
    description: 'Chin stroking is repeated touching of the chin that signals active evaluation and consideration during conversation. Learn to read this engagement signal.',
  },
  '/dictionary/clenched-fists': {
    title: 'What is Clenched Fists? Body Language Explained | BodyLanguageIQ',
    description: 'Clenched fists signal suppressed anger or strong determination depending on context. Learn how to tell these two very different states apart accurately.',
  },
  '/dictionary/closed-eyes-during-speech': {
    title: 'What is Closed Eyes During Speech? Body Language Explained | BodyLanguageIQ',
    description: 'Closing the eyes briefly while speaking usually signals conviction rather than deception. Learn why this confidence signal is often misread as discomfort.',
  },
  '/dictionary/contempt-micro-expression': {
    title: 'What is Contempt Micro Expression? Body Language Explained | BodyLanguageIQ',
    description: 'A contempt micro expression is a brief one sided mouth raise revealing genuine contempt or superiority. Learn how to spot this fleeting deception signal.',
  },
  '/dictionary/controlled-breathing': {
    title: 'What is Controlled Breathing? Body Language Explained | BodyLanguageIQ',
    description: 'Controlled breathing is deliberately slow, deep breathing during stress that signals genuine composure. Learn to recognise this confidence signal in others.',
  },
  '/dictionary/cowering': {
    title: 'What is Cowering? Body Language Explained | BodyLanguageIQ',
    description: 'Cowering is a defensive posture of hunching, pulling limbs inward and avoiding eye contact, signalling fear or submission. Learn what triggers this response.',
  },
  '/dictionary/cradling': {
    title: 'What is Cradling? Body Language Explained | BodyLanguageIQ',
    description: 'Cradling is holding an object like a cup close to the chest with both hands, a self comforting gesture during anxiety. Learn what this signal reveals.',
  },
  '/dictionary/crossed-wrists': {
    title: 'What is Crossed Wrists? Body Language Explained | BodyLanguageIQ',
    description: 'Crossed wrists is a subtle restraint gesture seen when someone feels judged or exposed in a social setting. Learn how it differs from fully crossed arms.',
  },
  '/dictionary/defensive-crossed-legs': {
    title: 'What is Defensive Crossed Legs? Body Language Explained | BodyLanguageIQ',
    description: 'Defensive crossed legs is a tight seated posture often paired with crossed arms, reinforcing a closed guarded stance. Learn how to spot this signal accurately.',
  },
  '/dictionary/direct-eye-contact': {
    title: 'What is Direct Eye Contact? Body Language Explained | BodyLanguageIQ',
    description: 'Direct eye contact is sustained, comfortable eye contact that signals confidence and honesty, though cultural norms vary widely. Learn to read it well.',
  },
  '/dictionary/deliberate-touch': {
    title: 'What is Deliberate Touch? Body Language Explained | BodyLanguageIQ',
    description: 'Deliberate touch is intentional contact like a hand on the arm that can signal warmth, dominance or romantic interest. Learn to read this signal in context.',
  },
  '/dictionary/pupil-dilation': {
    title: 'What is Pupil Dilation? Body Language Explained | BodyLanguageIQ',
    description: 'Pupil dilation is the involuntary widening of the pupils that can indicate interest or attraction, and is very difficult to control. Learn to spot it.',
  },
  '/dictionary/displacement-activity': {
    title: 'What is Displacement Activity? Body Language Explained | BodyLanguageIQ',
    description: 'Displacement activity is performing unnecessary actions like straightening papers to release nervous energy during stress. Learn to recognise this signal.',
  },
  '/dictionary/double-nod': {
    title: 'What is Double Nod? Body Language Explained | BodyLanguageIQ',
    description: 'A double nod is two quick nods that signal agreement and encourage a speaker to continue talking. Learn how this engagement signal differs from a single nod.',
  },
  '/dictionary/downward-palm': {
    title: 'What is Downward Palm? Body Language Explained | BodyLanguageIQ',
    description: 'A downward palm signals authority and a desire to control or suppress rather than invite open discussion. Learn what this confidence signal really means.',
  },
  '/dictionary/drooping-eyelids': {
    title: 'What is Drooping Eyelids? Body Language Explained | BodyLanguageIQ',
    description: 'Drooping eyelids can signal tiredness, boredom or in some contexts a deliberate attempt to appear seductive. Learn how to tell these three states apart.',
  },
  '/dictionary/duchenne-smile': {
    title: 'What is Duchenne Smile? Body Language Explained | BodyLanguageIQ',
    description: 'A Duchenne smile is a genuine smile that engages the muscles around the eyes, creating natural crinkles. Learn how it differs from a polite or forced smile.',
  },
  '/dictionary/earlobe-tugging': {
    title: 'What is Earlobe Tugging? Body Language Explained | BodyLanguageIQ',
    description: 'Earlobe tugging is a self soothing gesture of pulling or touching the earlobe, often signalling indecision or mild anxiety. Learn to recognise this signal.',
  },
  '/dictionary/elbow-placement': {
    title: 'What is Elbow Placement? Body Language Explained | BodyLanguageIQ',
    description: 'Elbow placement reveals confidence through how much table space someone claims with their arms. Learn what generous or contained elbow room really signals.',
  },
  '/dictionary/eye-contact-avoidance': {
    title: 'What is Eye Contact Avoidance? Body Language Explained | BodyLanguageIQ',
    description: 'Eye contact avoidance can suggest discomfort, deception or social anxiety depending on context. Learn why this signal is more complex than popular belief.',
  },
  '/dictionary/eye-block': {
    title: 'What is Eye Block? Body Language Explained | BodyLanguageIQ',
    description: 'An eye block is closing the eyes for longer than a normal blink, often an unconscious attempt to block out discomfort. Learn to spot this subtle stress signal.',
  },
  '/dictionary/eye-flash': {
    title: 'What is Eye Flash? Body Language Explained | BodyLanguageIQ',
    description: 'An eye flash is a brief widening of the eyes signalling genuine surprise or heightened interest at that exact moment. Learn to catch this fleeting signal.',
  },
  '/dictionary/eye-rub': {
    title: 'What is Eye Rub? Body Language Explained | BodyLanguageIQ',
    description: 'An eye rub can signal an attempt to block out discomfort or avoid eye contact, though it often has an innocent cause. Learn how to read this signal correctly.',
  },
  '/dictionary/facial-symmetry-check': {
    title: 'What is Facial Symmetry Check? Body Language Explained | BodyLanguageIQ',
    description: 'A facial symmetry check compares both sides of the face during an expression to assess authenticity. Learn this deception detection technique in depth.',
  },
  '/dictionary/fake-laugh': {
    title: 'What is Fake Laugh? Body Language Explained | BodyLanguageIQ',
    description: 'A fake laugh tends to be shorter, louder and more abrupt than genuine laughter and rarely involves the whole face. Learn to spot this deception signal.',
  },
  '/dictionary/arms-crossed': {
    title: 'What is Arms Crossed? Body Language Explained | BodyLanguageIQ',
    description: 'Arms crossed often signals defensiveness or discomfort, though context matters since it can simply mean someone is cold or comfortable. Learn to read it well.',
  },
  '/dictionary/barrier-crossing': {
    title: 'What is Barrier Crossing? Body Language Explained | BodyLanguageIQ',
    description: 'Barrier crossing is reaching across the body to touch the opposite arm or shoulder, a subtle self protective gesture. Learn what this defensive signal reveals.',
  },
  '/dictionary/brow-furrow': {
    title: 'What is Brow Furrow? Body Language Explained | BodyLanguageIQ',
    description: 'A brow furrow, drawing the eyebrows together, can signal confusion, concentration or mild displeasure. Learn how to tell these three emotional states apart.',
  },
  '/dictionary/catapult-gesture': {
    title: 'What is Catapult Gesture? Body Language Explained | BodyLanguageIQ',
    description: 'A catapult gesture is pointing with extended fingers while speaking, often used to emphasise authority or assert a point forcefully. Learn to spot it.',
  },
  '/dictionary/chest-expansion': {
    title: 'What is Chest Expansion? Body Language Explained | BodyLanguageIQ',
    description: 'Chest expansion, puffing out the chest, signals confidence, pride or an attempt to appear more dominant. Learn what this confident posture really reveals.',
  },
  '/dictionary/crossed-ankles': {
    title: 'What is Crossed Ankles? Body Language Explained | BodyLanguageIQ',
    description: 'Crossed ankles is often a subtler version of crossed arms, indicating restraint or mild discomfort, especially common in formal settings. Learn to read it.',
  },
  '/dictionary/eyebrow-flash': {
    title: 'What is Eyebrow Flash? Body Language Explained | BodyLanguageIQ',
    description: 'An eyebrow flash is a quick raise of both eyebrows, a fast unconscious signal of recognition or interest when greeting someone. Learn to catch this signal.',
  },
  '/dictionary/eyebrow-raise': {
    title: 'What is Eyebrow Raise? Body Language Explained | BodyLanguageIQ',
    description: 'An eyebrow raise can signal surprise, interest or a deliberate attempt to appear more open and approachable. Learn what this engagement signal really means.',
  },
  '/dictionary/finger-pointing': {
    title: 'What is Finger Pointing? Body Language Explained | BodyLanguageIQ',
    description: 'Finger pointing directly at someone is perceived as aggressive and accusatory in most cultures. Learn when it signals confidence versus real aggression.',
  },
  '/dictionary/finger-tapping': {
    title: 'What is Finger Tapping? Body Language Explained | BodyLanguageIQ',
    description: 'Finger tapping is rhythmic tapping of the fingers that usually signals impatience or restlessness. Learn to recognise this common everyday stress signal.',
  },
  '/dictionary/fist-pump': {
    title: 'What is Fist Pump? Body Language Explained | BodyLanguageIQ',
    description: 'A fist pump is a contained pulling motion of a clenched fist that signals private celebration or genuine satisfaction with an outcome. Learn to spot it.',
  },
  '/dictionary/fixed-smile': {
    title: 'What is Fixed Smile? Body Language Explained | BodyLanguageIQ',
    description: 'A fixed smile stays exactly the same without natural variation, almost always a sign it is performed rather than genuine. Learn how to read it correctly.',
  },
  '/dictionary/foot-pointing': {
    title: 'What is Foot Pointing? Body Language Explained | BodyLanguageIQ',
    description: "Foot pointing reveals where someone's genuine attention truly lies, even when their upper body faces elsewhere entirely. Learn to read this honest signal.",
  },
  '/dictionary/foot-tap': {
    title: 'What is Foot Tap? Body Language Explained | BodyLanguageIQ',
    description: 'A foot tap is repetitive tapping of the foot that usually signals impatience, boredom or suppressed anxiety. Learn to recognise this everyday stress signal.',
  },
  '/dictionary/forward-lean': {
    title: 'What is Forward Lean? Body Language Explained | BodyLanguageIQ',
    description: 'A forward lean is moving the upper body toward someone during conversation, signalling genuine interest and engagement. Learn to read this signal well.',
  },
  '/dictionary/gaze-aversion': {
    title: 'What is Gaze Aversion? Body Language Explained | BodyLanguageIQ',
    description: 'Gaze aversion is deliberately looking away from someone, distinct from natural eye movement, often signalling discomfort. Learn what this signal means.',
  },
  '/dictionary/genuine-surprise': {
    title: 'What is Genuine Surprise? Body Language Explained | BodyLanguageIQ',
    description: 'Genuine surprise appears and fades within about a second, while a faked version tends to linger noticeably longer. Learn how to spot the real difference.',
  },
  '/dictionary/genuine-vs-forced-smile': {
    title: 'What is Genuine vs Forced Smile? Body Language Explained | BodyLanguageIQ',
    description: 'Forced smiles fail to reach the eyes and often appear slightly asymmetrical, unlike a genuine smile. Learn the key distinctions in reading real sincerity.',
  },
  '/dictionary/gravity-defying-gestures': {
    title: 'What is Gravity Defying Gestures? Body Language Explained | BodyLanguageIQ',
    description: 'Gravity defying gestures like raised heels, upward palms or a lifted chin signal positive emotional states and confidence. Learn to spot these upward movements.',
  },
  '/dictionary/grooming-another': {
    title: 'What is Grooming Another? Body Language Explained | BodyLanguageIQ',
    description: 'Grooming another person by adjusting their clothing or hair signals real intimacy and a high level of comfort. Learn what this attraction signal reveals.',
  },
  '/dictionary/grounding-stance': {
    title: 'What is Grounding Stance? Body Language Explained | BodyLanguageIQ',
    description: 'A grounding stance is standing with feet wider than shoulder width and weight evenly distributed, signalling calm authority and readiness. Learn to read it.',
  },
  '/dictionary/hair-touching': {
    title: 'What is Hair Touching? Body Language Explained | BodyLanguageIQ',
    description: 'Hair touching can signal nervousness, but in social and dating contexts it may also signal flirtation or genuine attraction. Learn to tell these apart.',
  },
  '/dictionary/hand-barrier': {
    title: 'What is Hand Barrier? Body Language Explained | BodyLanguageIQ',
    description: 'A hand barrier is holding both hands in front of the body, creating a subtle psychological shield that signals mild defensiveness. Learn to spot this signal.',
  },
  '/dictionary/hand-on-heart': {
    title: 'What is Hand on Heart? Body Language Explained | BodyLanguageIQ',
    description: 'Placing a hand over the chest signals sincerity, emotional connection or reassurance to another person. Learn what this trust signal reveals and when.',
  },
  '/dictionary/hand-wringing': {
    title: 'What is Hand Wringing? Body Language Explained | BodyLanguageIQ',
    description: 'Hand wringing, repeatedly rubbing or clasping the hands together, is a self soothing gesture indicating nervousness or anxiety. Learn to recognise it.',
  },
  '/dictionary/hands-in-pockets': {
    title: 'What is Hands in Pockets? Body Language Explained | BodyLanguageIQ',
    description: 'Hands in pockets can signal a lack of confidence or an attempt to hide nervous hand movements from view. Learn when this common gesture actually matters.',
  },
  '/dictionary/head-shake-during-agreement': {
    title: 'What is Head Shake During Agreement? Body Language Explained | BodyLanguageIQ',
    description: 'Shaking the head no while verbally agreeing is a classic contradiction signal that reveals true underlying disagreement. Learn to catch this deception signal.',
  },
  '/dictionary/head-tilt': {
    title: 'What is Head Tilt? Body Language Explained | BodyLanguageIQ',
    description: 'Tilting the head to one side signals curiosity, interest or active listening during conversation. Learn why this small gesture reveals genuine engagement.',
  },
  '/dictionary/hostility-cluster': {
    title: 'What is Hostility Cluster? Body Language Explained | BodyLanguageIQ',
    description: 'A hostility cluster combines crossed arms, a clenched jaw, narrowed eyes and a forward lean into one reliable warning signal. Learn to recognise it accurately.',
  },
  '/dictionary/illustrator-gestures': {
    title: 'What is Illustrator Gestures? Body Language Explained | BodyLanguageIQ',
    description: 'Illustrator gestures are hand movements that naturally accompany and emphasise speech, indicating genuine engagement and enthusiasm. Learn to spot them.',
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
          <Route path="/dictionary/adaptor-gestures" element={<DictAdaptorGestures />} />
          <Route path="/dictionary/anchoring" element={<DictAnchoring />} />
          <Route path="/dictionary/asymmetrical-expression" element={<DictAsymmetricalExpression />} />
          <Route path="/dictionary/avoidance-shuffle" element={<DictAvoidanceShuffle />} />
          <Route path="/dictionary/back-turned" element={<DictBackTurned />} />
          <Route path="/dictionary/barrier-objects" element={<DictBarrierObjects />} />
          <Route path="/dictionary/belly-button-rule" element={<DictBellyButtonRule />} />
          <Route path="/dictionary/blank-stare" element={<DictBlankStare />} />
          <Route path="/dictionary/blinking-rate-increase" element={<DictBlinkingRateIncrease />} />
          <Route path="/dictionary/body-orientation" element={<DictBodyOrientation />} />
          <Route path="/dictionary/brow-raise" element={<DictBrowRaise />} />
          <Route path="/dictionary/cheek-puffing" element={<DictCheekPuffing />} />
          <Route path="/dictionary/chin-raise" element={<DictChinRaise />} />
          <Route path="/dictionary/chin-stroking" element={<DictChinStroking />} />
          <Route path="/dictionary/clenched-fists" element={<DictClenchedFists />} />
          <Route path="/dictionary/closed-eyes-during-speech" element={<DictClosedEyesDuringSpeech />} />
          <Route path="/dictionary/contempt-micro-expression" element={<DictContemptMicroExpression />} />
          <Route path="/dictionary/controlled-breathing" element={<DictControlledBreathing />} />
          <Route path="/dictionary/cowering" element={<DictCowering />} />
          <Route path="/dictionary/cradling" element={<DictCradling />} />
          <Route path="/dictionary/crossed-wrists" element={<DictCrossedWrists />} />
          <Route path="/dictionary/defensive-crossed-legs" element={<DictDefensiveCrossedLegs />} />
          <Route path="/dictionary/direct-eye-contact" element={<DictDirectEyeContact />} />
          <Route path="/dictionary/deliberate-touch" element={<DictDeliberateTouch />} />
          <Route path="/dictionary/pupil-dilation" element={<DictPupilDilation />} />
          <Route path="/dictionary/displacement-activity" element={<DictDisplacementActivity />} />
          <Route path="/dictionary/double-nod" element={<DictDoubleNod />} />
          <Route path="/dictionary/downward-palm" element={<DictDownwardPalm />} />
          <Route path="/dictionary/drooping-eyelids" element={<DictDroopingEyelids />} />
          <Route path="/dictionary/duchenne-smile" element={<DictDuchenneSmile />} />
          <Route path="/dictionary/earlobe-tugging" element={<DictEarlobeTugging />} />
          <Route path="/dictionary/elbow-placement" element={<DictElbowPlacement />} />
          <Route path="/dictionary/eye-contact-avoidance" element={<DictEyeContactAvoidance />} />
          <Route path="/dictionary/eye-block" element={<DictEyeBlock />} />
          <Route path="/dictionary/eye-flash" element={<DictEyeFlash />} />
          <Route path="/dictionary/eye-rub" element={<DictEyeRub />} />
          <Route path="/dictionary/facial-symmetry-check" element={<DictFacialSymmetryCheck />} />
          <Route path="/dictionary/fake-laugh" element={<DictFakeLaugh />} />
          <Route path="/dictionary/arms-crossed" element={<DictArmsCrossed />} />
          <Route path="/dictionary/barrier-crossing" element={<DictBarrierCrossing />} />
          <Route path="/dictionary/brow-furrow" element={<DictBrowFurrow />} />
          <Route path="/dictionary/catapult-gesture" element={<DictCatapultGesture />} />
          <Route path="/dictionary/chest-expansion" element={<DictChestExpansion />} />
          <Route path="/dictionary/crossed-ankles" element={<DictCrossedAnkles />} />
          <Route path="/dictionary/eyebrow-flash" element={<DictEyebrowFlash />} />
          <Route path="/dictionary/eyebrow-raise" element={<DictEyebrowRaise />} />
          <Route path="/dictionary/finger-pointing" element={<DictFingerPointing />} />
          <Route path="/dictionary/finger-tapping" element={<DictFingerTapping />} />
          <Route path="/dictionary/fist-pump" element={<DictFistPump />} />
          <Route path="/dictionary/fixed-smile" element={<DictFixedSmile />} />
          <Route path="/dictionary/foot-pointing" element={<DictFootPointing />} />
          <Route path="/dictionary/foot-tap" element={<DictFootTap />} />
          <Route path="/dictionary/forward-lean" element={<DictForwardLean />} />
          <Route path="/dictionary/gaze-aversion" element={<DictGazeAversion />} />
          <Route path="/dictionary/genuine-surprise" element={<DictGenuineSurprise />} />
          <Route path="/dictionary/genuine-vs-forced-smile" element={<DictGenuineVsForcedSmile />} />
          <Route path="/dictionary/gravity-defying-gestures" element={<DictGravityDefyingGestures />} />
          <Route path="/dictionary/grooming-another" element={<DictGroomingAnother />} />
          <Route path="/dictionary/grounding-stance" element={<DictGroundingStance />} />
          <Route path="/dictionary/hair-touching" element={<DictHairTouching />} />
          <Route path="/dictionary/hand-barrier" element={<DictHandBarrier />} />
          <Route path="/dictionary/hand-on-heart" element={<DictHandOnHeart />} />
          <Route path="/dictionary/hand-wringing" element={<DictHandWringing />} />
          <Route path="/dictionary/hands-in-pockets" element={<DictHandsInPockets />} />
          <Route path="/dictionary/head-shake-during-agreement" element={<DictHeadShakeDuringAgreement />} />
          <Route path="/dictionary/head-tilt" element={<DictHeadTilt />} />
          <Route path="/dictionary/hostility-cluster" element={<DictHostilityCluster />} />
          <Route path="/dictionary/illustrator-gestures" element={<DictIllustratorGestures />} />
          <Route path="/faq" element={<FAQ />} />
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
