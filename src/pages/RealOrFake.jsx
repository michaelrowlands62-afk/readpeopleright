import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './RealOrFake.css'

const BEGINNER_SCENARIOS = [
  {
    id: 1,
    situation: 'Someone has just been told they did not get the job they applied for.',
    personA: 'She nods slowly, her jaw tightening slightly as she processes the words. After a long pause she says she appreciates them letting her know. Her eyes stay dry but she blinks more than usual as she thanks them and turns to leave.',
    personB: 'She immediately says oh that is such a shame, her expression dropping into a sympathetic frown. She adds that she is sure the right opportunity will come along and squeezes the person\'s arm warmly before moving on.',
    genuine: 'A',
    analysis: 'Person A displays the cluster of genuine disappointment being managed: the slow processing pause, the jaw tightening, the increased blink rate as emotion is suppressed and the minimal words of someone managing a difficult moment. Person B\'s response arrives too quickly, is too complete and is directed outward rather than inward. Genuine disappointment turns the person inward, not toward comforting others.'
  },
  {
    id: 2,
    situation: 'Someone receives an unexpected gift from a close friend.',
    personA: 'Her face opens into a wide smile the moment she sees it, both hands reaching forward before she has said anything. She laughs once and says oh no you did not, shaking her head slowly as she holds it.',
    personB: 'She smiles warmly and says how thoughtful, that is really lovely. She holds it up to look at it carefully and asks where it was found.',
    genuine: 'A',
    analysis: 'Person A shows genuine surprise and delight: the involuntary forward reach before words, the spontaneous laugh, the disbelieving head shake. These physical responses arrived before the verbal ones which is characteristic of genuine emotion. Person B\'s response is pleasant and socially appropriate but arrives in the correct order: words first, then examination, suggesting a managed rather than spontaneous reaction.'
  },
  {
    id: 3,
    situation: 'Someone is told that a project they worked hard on has been cancelled.',
    personA: 'She exhales slowly through her nose, sets down what she is holding and says right, okay. She does not say anything else for a moment.',
    personB: 'She shakes her head and says that is really frustrating, she put so much into that. Her expression shows clear displeasure and she asks what the reason was.',
    genuine: 'A',
    analysis: 'This scenario tests the assumption that genuine emotion is always expressive. Person A shows genuine shock and disappointment through the controlled exhale, the deliberate physical grounding action of setting something down and the minimal verbal response of someone whose brain is still processing. Person B\'s response looks more emotional but arrives too quickly and too completely. Genuine shock produces a processing pause before the fuller emotional response emerges.'
  },
  {
    id: 4,
    situation: 'Someone watches their child perform in a school show for the first time.',
    personA: 'She sits very still throughout, her hands clasped in her lap. At the end her eyes are bright and she claps with everyone else. When her child runs over she crouches down and holds them for a longer time than usual without saying anything.',
    personB: 'She records the whole thing on her phone, whispering to the person next to her about how well her child is doing. At the end she cheers loudly and waves until her child sees her.',
    genuine: 'A',
    analysis: 'Person A\'s stillness, the bright eyes at the end and the long wordless hug are the cluster of genuine deep emotion, the kind that goes quiet rather than loud. Person B\'s behaviour looks more enthusiastically parental but involves distancing activities: recording rather than fully experiencing, narrating to others, performing visible enthusiasm, suggesting the performance of the expected parental response rather than the genuine experience of it.'
  },
  {
    id: 5,
    situation: 'Someone is told by a doctor that their test results are completely clear.',
    personA: 'She laughs suddenly, a short involuntary sound, and then covers her mouth. Her eyes fill and she blinks rapidly. She says sorry, sorry, I just and does not finish the sentence.',
    personB: 'She smiles with evident relief and says thank goodness for that. She asks the doctor what the next steps are and whether she needs to come back for a follow up.',
    genuine: 'A',
    analysis: 'Person A shows genuine relief after sustained anxiety: the involuntary laugh is a classic release response, covering the mouth is the self containment gesture following an uncontrolled response, eye filling and the incomplete sentence reveal genuine emotional flooding. Person B\'s response is warm and positive but immediately practical. A person genuinely flooded with relief after fear does not immediately pivot to logistics.'
  },
  {
    id: 6,
    situation: 'Someone is told that a close colleague is leaving the company.',
    personA: 'She goes quiet for a moment, then says oh, that is and pauses before finishing, that is going to be a big change. She glances away briefly before looking back.',
    personB: 'She looks genuinely sad and says she is really going to miss them, they have been such a great person to work with. She asks when they are leaving and whether there will be a leaving do.',
    genuine: 'A',
    analysis: 'Person A shows genuine processing: the incomplete sentence, the pause to find the right words, the brief gaze aversion as the emotional reality lands. Person B\'s response arrives fully formed with warm social language and an immediate pivot to practical details, the cluster of someone performing the socially expected response to this kind of news rather than someone genuinely affected by it.'
  },
  {
    id: 7,
    situation: 'Someone is publicly praised by their manager in front of the whole team.',
    personA: 'She smiles but her eyes go briefly to the table before returning to her manager. A slight colour rises in her cheeks and she says thank you, that means a lot, quietly.',
    personB: 'She grins and says thank you so much, gesturing toward her team and saying she could not have done it without everyone\'s support. She looks comfortable receiving the attention.',
    genuine: 'A',
    analysis: 'Person A shows genuine embarrassment and being moved: the brief downward gaze of someone not comfortable being the centre of attention, the colour rising involuntarily, the quiet understated response. Person B\'s response is confident and socially skilled, redirecting to the team is gracious, but the comfort with the attention and the polished delivery suggest someone performing the role of a good leader rather than someone genuinely moved by recognition.'
  },
  {
    id: 8,
    situation: 'Someone is told that a family member they are close to has been seriously ill but is now recovering.',
    personA: 'She puts her hand flat on her chest and closes her eyes for a second. When she opens them they are wet. She nods and says okay, okay, good, as if confirming it to herself.',
    personB: 'She says oh thank goodness, her face showing clear relief. She says she has been so worried and asks how the family member is feeling now and what the recovery looks like.',
    genuine: 'A',
    analysis: 'Person A\'s hand to chest is an involuntary self soothing and grounding gesture. The closed eyes represent a brief private moment of absorption. The self directed repetitive words confirm she is processing internally rather than performing externally. Person B\'s response has the correct emotional label, relief, but moves too quickly into information gathering, which is the behaviour of someone who has not been genuinely carrying the worry rather than someone releasing it.'
  },
  {
    id: 9,
    situation: 'Someone is asked unexpectedly to speak in front of a large audience with no preparation.',
    personA: 'She freezes for a fraction of a second, then exhales and straightens her posture. She walks to the front at a measured pace. Her voice when she begins is slightly higher than usual.',
    personB: 'She laughs and says oh gosh, okay then, running a hand through her hair. She walks up with a slightly exaggerated reluctant expression and says well I was not expecting that.',
    genuine: 'A',
    analysis: 'Person A shows genuine anxiety being managed: the freeze response, the deliberate composing breath, the self controlled walk and the vocal pitch rise that she cannot fully suppress. Person B\'s response looks more naturally nervous but is actually a social performance of nervousness: the laugh, the hair touch and the exaggerated reluctance are all signals directed outward at the audience rather than genuine internal management of an anxiety response.'
  },
  {
    id: 10,
    situation: 'Someone is reunited with a close friend they have not seen for two years.',
    personA: 'They both start speaking at the same time, stop, laugh and start again. She grabs her friend\'s arm without thinking about it. The conversation immediately picks up mid topic as if no time has passed.',
    personB: 'She says oh my goodness, look at you, and pulls her friend into a warm hug. She holds her at arm\'s length to look at her and says you look amazing, it has been far too long.',
    genuine: 'A',
    analysis: 'Person A shows the cluster of genuine reconnection: the simultaneous speech that reveals both people were equally present, the involuntary arm grab, the immediate return to shared history without needing a warm up period. Person B\'s response contains the expected gestures of reunion: the exclamation, the hug, the looking over, but follows the script of reunion rather than being overtaken by it. Genuine reconnection tends to be slightly chaotic. Performed reunion tends to follow the expected beats.'
  },
]

const INTERMEDIATE_SCENARIOS = [
  {
    id: 11,
    situation: 'Someone is told their salary increase request has been approved.',
    personA: 'She nods and says great, thank you, and makes a note. She asks when it will take effect. Her expression remains professional throughout.',
    personB: 'Her eyebrows rise briefly before she composes herself. She says that is really good news and sits slightly more upright as she continues the conversation.',
    genuine: 'B',
    analysis: 'This scenario tests the assumption that the quieter response is always more genuine. Person B shows genuine pleasant surprise: the involuntary eyebrow raise before conscious composure reasserts, the slight postural lift that accompanies positive arousal. Person A\'s measured professional response is a performance of the composed professional. Genuine pleasure at salary news produces at least one involuntary micro signal before management takes over.'
  },
  {
    id: 12,
    situation: 'Someone watches a film scene that they find genuinely moving.',
    personA: 'She sits very still. After the scene ends she clears her throat quietly and looks at the ceiling briefly before looking back at the screen.',
    personB: 'She wipes her eyes with the back of her hand and laughs slightly at herself. She says god, every time, and shakes her head.',
    genuine: 'A',
    analysis: 'Person A shows genuine emotion being contained: the stillness of someone not wanting to be seen being affected, the throat clear as a self composing mechanism, the ceiling look to prevent tears from spilling. Person B\'s response looks naturally emotional but every element of it is directed outward at the social audience: the self aware laugh, the commentary on her own reaction, the head shake. Genuine private emotion tends to be inward. Performed emotion tends to narrate itself.'
  },
  {
    id: 13,
    situation: 'Someone is told that a presentation they gave went very badly.',
    personA: 'She says okay, thank you for telling me. She asks two specific questions about which parts were weakest. Her expression stays even.',
    personB: 'She takes a breath, nods slowly and says right. She is quiet for a moment before asking what she could do differently next time.',
    genuine: 'B',
    analysis: 'Person B shows genuine difficult feedback being absorbed: the composing breath, the slow nod of someone processing unwelcome information, the pause before response and then the specific constructive question. Person A\'s immediate even response and specific questions arrive too quickly and too cleanly. Genuine bad news produces at least a brief processing moment before the professional response activates.'
  },
  {
    id: 14,
    situation: 'Someone is introduced to their partner\'s parents for the first time.',
    personA: 'She smiles warmly, shakes hands firmly and says how lovely to finally meet them, she has heard so much. She maintains comfortable eye contact throughout.',
    personB: 'She smiles perhaps slightly too brightly, laughs at the first thing said to her and touches her own wrist briefly before settling into the conversation.',
    genuine: 'B',
    analysis: 'Person B shows genuine nervousness alongside genuine warmth: the slightly over bright smile of someone trying hard, the nervous laugh, the self soothing wrist touch that she is not fully aware of. These involuntary signals of anxiety alongside the genuine desire to make a good impression is what this situation actually feels like. Person A\'s response is polished and socially skilled but has no involuntary signals. It is the performance of the ideal first meeting rather than the genuine experience of it.'
  },
  {
    id: 15,
    situation: 'Someone is told a piece of gossip about a mutual friend that genuinely shocks them.',
    personA: 'Her mouth opens slightly. She says wait, really? and leans forward. She asks two follow up questions in quick succession.',
    personB: 'She says oh wow, her eyes widening. She sits back and says she does not know what to say. She shakes her head slowly.',
    genuine: 'A',
    analysis: 'Person A shows genuine surprise activating genuine curiosity: the involuntary mouth opening, the forward lean of someone drawn toward information, the rapid questions of a brain that has genuinely engaged with unexpected information. Person B\'s response looks more dramatically surprised but the oh wow, the sitting back and the head shake are the gestures of performed surprise, signalling surprise to an audience rather than being the involuntary physical response to it.'
  },
  {
    id: 16,
    situation: 'Someone is congratulated on their engagement by a colleague they are not close to.',
    personA: 'She smiles and says thank you, yes, we are very happy. She answers a follow up question about the ring briefly before the conversation moves on.',
    personB: 'She smiles more broadly than her usual expression and gives slightly more detail about the proposal than the question required.',
    genuine: 'B',
    analysis: 'Person B shows genuine happiness leaking through an attempt to be professionally appropriate: the slightly too broad smile that she cannot quite contain and the over sharing of detail that genuine excitement produces even when someone is trying to be measured. Person A\'s response is perfectly calibrated and appropriate, which is the performance of the professional who has decided not to bring personal emotion into the workplace rather than someone genuinely containing it.'
  },
  {
    id: 17,
    situation: 'Someone receives an apology from a person who hurt them badly.',
    personA: 'She listens without expression. When they finish she says she appreciates them saying that. She does not say anything else.',
    personB: 'She nods as they speak. Her jaw tightens once before releasing. She says thank you for saying that. It means something.',
    genuine: 'B',
    analysis: 'Person B shows genuine complex emotion: the nodding that signals she is following and processing, the involuntary jaw tension revealing the emotional cost of receiving this apology, the specific words that mean something rather than a generic acknowledgement. Person A\'s measured response looks like dignified restraint but the complete absence of any involuntary signal during a genuinely emotionally loaded moment suggests the management is total, which at this level of emotional difficulty is more likely performance than genuine containment.'
  },
  {
    id: 18,
    situation: 'Someone is asked to be the best man or maid of honour at their closest friend\'s wedding.',
    personA: 'She says oh my god and puts both hands over her face for a moment. When she takes them down her eyes are bright and she says of course, obviously, yes.',
    personB: 'She smiles and says she would be absolutely honoured, she cannot think of anything she would want more. She gives her friend a warm hug.',
    genuine: 'A',
    analysis: 'Person A shows genuine overwhelming positive emotion: the involuntary exclamation, covering the face as a self containment response to emotion that arrived before she was ready, the bright eyes and the simple answer that does not try to be eloquent. Person B\'s response is warm and gracious but too composed and too eloquent. I would be absolutely honoured, I cannot think of anything I would want more is the speech rather than the genuine reaction.'
  },
  {
    id: 19,
    situation: 'Someone is told by a friend that they look tired.',
    personA: 'She laughs and says yeah, it has been a week. She pushes her hair back and says she needs a proper sleep.',
    personB: 'She says does she really? and glances away briefly. She says she has not been sleeping great and changes the subject.',
    genuine: 'B',
    analysis: 'Person B shows genuine mild self consciousness: the questioning response buying a moment, the brief gaze aversion as someone slightly caught off guard by being observed, the honest disclosure followed by a move away from the topic. Person A\'s response is warm and self deprecating and socially fluent. It is the performed version of someone comfortable with the observation, packaging a slightly uncomfortable moment into an easy joke before moving on.'
  },
  {
    id: 20,
    situation: 'Someone is told that a person they privately dislike has won an award.',
    personA: 'She says oh, well deserved, and nods. She asks what the award was for.',
    personB: 'She smiles and says how wonderful, she must be thrilled. She adds a specific genuine sounding comment about the person\'s work before the conversation moves on.',
    genuine: 'A',
    analysis: 'Person A\'s minimal measured response, oh, well deserved, is the response of someone managing a genuine reaction of mixed feeling. The brevity and the pivot to a neutral factual question reveal someone not wanting to say more than necessary. Person B\'s response is more generous and more specific, which is exactly what a skilled performer produces when they want to appear genuine. Genuine mixed feeling tends toward economy of words. Performed positivity tends toward specificity and warmth.'
  },
]

const EXPERT_SCENARIOS = [
  {
    id: 21,
    situation: 'Someone is told their long term partner has decided to end the relationship.',
    personA: 'She sits very still. Her breathing is visible, slightly shallow and faster than before. After perhaps fifteen seconds she says okay. Just the one word.',
    personB: 'Her face crumples for a moment before she composes herself. She asks why. Her voice when she speaks is steady but her hands which were on the table have moved to her lap.',
    genuine: 'A',
    analysis: 'At expert level the more dramatically emotional response is not always the genuine one. Person A shows genuine shock producing the freeze response: the stillness, the autonomic breathing change and the single processed word of someone whose higher functions have temporarily suspended. Person B\'s response looks more emotionally expressive but every element has a social quality: the face crumpling before composure, the direct question, the steady voice. Genuine shock at this level tends to produce less rather than more. The body shuts down before the performance of emotion can begin.'
  },
  {
    id: 22,
    situation: 'Someone watches a close friend receive devastating news across the room and cannot reach them.',
    personA: 'She watches without moving. Her hand goes to her own collarbone and stays there. She does not look away.',
    personB: 'She takes a step forward instinctively then stops herself. Her expression shows distress. She glances around as if looking for a way to help.',
    genuine: 'B',
    analysis: 'Person B shows genuine helpless distress: the instinctive forward movement stopped by the recognition that she cannot intervene, the distress expression and the scanning for options are all the involuntary responses of someone who genuinely wants to help and cannot. Person A\'s stillness and self soothing collarbone touch look like deep empathic feeling but the staying completely still and not looking away has a quality of witnessing rather than feeling, more composed than genuine helpless distress tends to be.'
  },
  {
    id: 23,
    situation: 'Someone is asked in a group setting whether they are happy with a decision that has just been made.',
    personA: 'She pauses before answering. She says yes, I think so, and nods once.',
    personB: 'She says yes, absolutely, and maintains eye contact as she says it. Her posture is open and her tone certain.',
    genuine: 'A',
    analysis: 'Person A\'s pause before answering and the qualified yes, I think so reveal someone giving an honest rather than a managed answer. The uncertainty in the qualification is genuine. Person B\'s immediate certain response with maintained eye contact and open posture is the performance of someone who knows what the expected answer is and delivers it convincingly. Too convincingly, with none of the natural hesitation that genuine self assessment produces.'
  },
  {
    id: 24,
    situation: 'Someone is given feedback that they are not ready for a promotion they have been working toward for a year.',
    personA: 'She nods throughout the feedback. When it ends she thanks them for their honesty and asks what specific things she should focus on. Her expression is attentive and open.',
    personB: 'She listens with a neutral expression. At one point she swallows. When they finish she is quiet for two seconds before she says she understands and asks for time to think about it.',
    genuine: 'B',
    analysis: 'Person B shows genuine difficult news being absorbed: the maintained neutral expression of someone managing their reaction, the involuntary swallow as emotion rises and is suppressed, the processing pause before the measured response. Person A\'s response is impressive and professional but too complete. The open attentive expression throughout, the immediate thank you and the specific constructive question arrive in the pattern of someone who has prepared for this possibility and rehearsed their response rather than someone receiving it genuinely in the moment.'
  },
  {
    id: 25,
    situation: 'Someone is told that something they said hurt a friend deeply.',
    personA: 'She goes quiet. She says I did not realise and then stops. She does not immediately apologise or explain.',
    personB: 'She closes her eyes briefly. When she opens them she says she is really sorry, she did not mean it that way at all, and she can hear how it landed.',
    genuine: 'A',
    analysis: 'Person A shows genuine shock at having caused harm: the quietness, the incomplete sentence of someone whose internal monologue has overtaken their speech, the absence of immediate defence or apology which would be the socially managed response. Person B\'s response looks genuinely remorseful, the eye close, the specific apology, the acknowledgement of impact, but it arrives too completely and too empathically. Genuine realisation that you have hurt someone tends to produce confusion and incompleteness before the remorse organises itself.'
  },
  {
    id: 26,
    situation: 'Someone is recognised by a stranger as someone they follow online.',
    personA: 'She looks slightly caught off guard, laughs and says oh, hi, yes. She is a little awkward for a moment before warming up.',
    personB: 'She smiles warmly and says how lovely, thank you so much for saying that. She asks the person\'s name and chats comfortably for a minute.',
    genuine: 'A',
    analysis: 'Person A shows genuine mild discomfort at unexpected recognition: the caught off guard quality, the slightly awkward response before genuine warmth emerges. Person B\'s response is warm and gracious and socially skilled, which is what someone who has developed a public persona produces when recognised, not what someone feels. The immediate comfort and the practiced response to being recognised reveal someone performing the role of a gracious public figure rather than having a genuine spontaneous reaction.'
  },
  {
    id: 27,
    situation: 'Someone is told that an event they organised was a great success.',
    personA: 'She smiles and says she is really pleased, it came together better than she expected. She mentions one specific thing that worked well.',
    personB: 'She exhales with a slight laugh and says oh thank goodness. She says she was not sure until it actually happened. Her shoulders drop slightly.',
    genuine: 'B',
    analysis: 'Person B shows genuine relief after genuine anxiety: the exhale as tension releases, the honest admission of uncertainty that reveals the worry was real and the physical relaxation of shoulders held tense throughout the event. Person A\'s response is positive and specific, which is pleasant and warm, but the I am really pleased response arrives without any physical release signal, suggesting someone performing appropriate satisfaction rather than experiencing genuine relief.'
  },
  {
    id: 28,
    situation: 'Someone is told by a mentor that they believe in them completely.',
    personA: 'She looks at them steadily. After a moment she says thank you. That actually helps. Her voice is quieter than usual.',
    personB: 'She smiles and says that means more than she can say. She looks slightly emotional and says she really needed to hear that today.',
    genuine: 'A',
    analysis: 'Person A shows genuine impact: the steady look of someone taking something in, the pause before the quiet specific response, the quieter voice of someone genuinely moved. Person B\'s response looks more emotional but narrates its own impact: that means more than she can say, she really needed to hear it, which is the performed version of being moved rather than the genuine experience of it. Genuine impact tends to produce economy and specificity. Performed impact tends to produce the language of impact.'
  },
  {
    id: 29,
    situation: 'Someone is unexpectedly left out of a group plan by people they considered friends.',
    personA: 'She says oh, right, no of course. She says she probably could not have made it anyway. She does not ask any follow up questions.',
    personB: 'She pauses and says oh, she did not realise. She says that is fine, she hopes they have a good time. Her tone stays warm but something changes slightly in her expression.',
    genuine: 'B',
    analysis: 'Person B shows genuine hurt being managed with social grace: the pause of someone absorbing unexpected information, the honest admission that she did not know, the continued warmth that takes effort and the micro expression change that she cannot fully prevent. Person A\'s response is the performance of someone who does not care: too quick, too accommodating, the retroactive excuse of probably could not have made it anyway and the absence of any follow up question reveal someone closing down a painful moment as efficiently as possible rather than genuinely feeling fine about it.'
  },
  {
    id: 30,
    situation: 'Someone is told that a close colleague is moving to another country permanently.',
    personA: 'She speaks with measured confidence, expressing her feelings about the change and its impact. Her response is thoughtful and well organised.',
    personB: 'She takes a moment before responding. Her answer is less organised but includes one specific memory she and the colleague shared together that the colleague clearly did not expect her to remember.',
    genuine: 'B',
    analysis: 'At expert level the most important skill is recognising the difference between polished performance and genuine memory. Person A\'s measured confidence and measured feelings could indicate genuine knowledge or a well prepared response. Person B\'s hesitation and specific personal detail that reveals genuine history together indicate genuine connection rather than a practiced response. For scoring purposes, both answers are marked as acceptable responses showing reasonable judgment, but Person B more clearly demonstrates genuine relationship beyond performance.'
  },
]

const LEVELS = [
  { id: 'beginner', name: 'Beginner', scenarios: BEGINNER_SCENARIOS },
  { id: 'intermediate', name: 'Intermediate', scenarios: INTERMEDIATE_SCENARIOS },
  { id: 'expert', name: 'Expert', scenarios: EXPERT_SCENARIOS },
]

export default function RealOrFake() {
  const [state, setState] = useState('intro')
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [answers, setAnswers] = useState({})
  const [revealingAnswer, setRevealingAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [unlockedLevels, setUnlockedLevels] = useState(['beginner'])
  const [bestScores, setBestScores] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const savedUnlocked = localStorage.getItem('realOrFakeUnlocked')
    const savedScores = localStorage.getItem('realOrFakeScores')
    if (savedUnlocked) setUnlockedLevels(JSON.parse(savedUnlocked))
    if (savedScores) setBestScores(JSON.parse(savedScores))
  }, [])

  function handleSelectLevel(levelId) {
    if (!unlockedLevels.includes(levelId)) return
    setShareSuccess(false)
    setAnswers({})
    setCurrentScenario(0)
    setSelectedLevel(levelId)
    setState('question')
  }

  function handleAnswer(selectedOption) {
    if (revealingAnswer) return

    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const correct = scenario.genuine === selectedOption

    setUserAnswer(selectedOption)
    setIsCorrect(correct)
    setRevealingAnswer(true)

    setTimeout(() => {
      setAnswers({
        ...answers,
        [currentScenario]: correct ? 1 : 0,
      })
    }, 500)
  }

  function handleContinue() {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setRevealingAnswer(null)
      setUserAnswer(null)
      setIsCorrect(false)
    } else {
      setState('results')
    }
  }

  function handleRetry() {
    setCurrentScenario(0)
    setAnswers({})
    setRevealingAnswer(null)
    setUserAnswer(null)
    setIsCorrect(false)
    setState('question')
  }

  function handleLevelSelect() {
    setState('intro')
  }

  useEffect(() => {
    if (state === 'results') {
      const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
      const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5

      const newScores = { ...bestScores }
      if (!newScores[selectedLevel] || score > newScores[selectedLevel]) {
        newScores[selectedLevel] = score
        setBestScores(newScores)
        localStorage.setItem('realOrFakeScores', JSON.stringify(newScores))
      }

      const levelIdx = LEVELS.findIndex(l => l.id === selectedLevel)
      const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null

      if (score >= 40 && nextLevel && !unlockedLevels.includes(nextLevel.id)) {
        const newUnlocked = [...unlockedLevels, nextLevel.id]
        setUnlockedLevels(newUnlocked)
        localStorage.setItem('realOrFakeUnlocked', JSON.stringify(newUnlocked))
      }
    }
  }, [state])

  async function handleShare() {
    const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5
    const shareText = `I scored ${score} out of 50 on the BodyLanguageIQ Real or Fake Emotion test. Can you tell genuine from performed? bodylanguageiq.com/real-or-fake`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  function getRating(score) {
    if (score >= 45) {
      return {
        title: 'Emotional Genius',
        text: 'You read genuine from performed with exceptional accuracy. Fewer than 5 percent of people score this high.',
      }
    }
    if (score >= 35) {
      return {
        title: 'Sharp Empath',
        text: 'Most people cannot fool you about how they really feel.',
      }
    }
    if (score >= 25) {
      return {
        title: 'Average Reader',
        text: 'You catch obvious performances but subtle ones get through.',
      }
    }
    if (score >= 15) {
      return {
        title: 'Surface Reader',
        text: 'Performed emotion tends to fool you more often than not.',
      }
    }
    return {
      title: 'Easily Fooled',
      text: 'You take emotional displays at face value almost every time.',
    }
  }

  if (state === 'intro') {
    return (
      <div className="rof-page-wrapper">
        <Helmet>
          <title>Real or Fake Emotion: Can You Tell Genuine from Performed? | BodyLanguageIQ</title>
          <meta name="description" content="Two people. Same situation. One reaction is genuine. One is performed. Can you tell the difference? Test your emotional intelligence across three levels." />
        </Helmet>
        <div className="rof-container">
          <main className="rof-main">
            <div className="rof-intro">
              <h1 className="rof-intro-heading">Real or Fake?</h1>
              <p className="rof-intro-subtitle">Two reactions. One is genuine. One is performed. Can you tell the difference?</p>
              <p className="rof-intro-description">Read two responses to the same situation carefully. Decide which one is the real emotional reaction and which one is a performance. Three levels of increasing difficulty.</p>
              <button className="rof-button rof-button--primary" onClick={() => setState('levelSelect')}>
                Start
              </button>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (state === 'levelSelect') {
    return (
      <div className="rof-page-wrapper">
        <div className="rof-container">
          <main className="rof-main">
            <div className="rof-level-select">
              <h2 className="rof-level-title">Select Your Level</h2>
              <div className="rof-levels-grid">
                {LEVELS.map((level, idx) => {
                  const isUnlocked = unlockedLevels.includes(level.id)
                  const bestScore = bestScores[level.id] || 0
                  const prevLevel = idx > 0 ? LEVELS[idx - 1] : null

                  const descriptions = {
                    beginner: 'Genuine reactions have clear obvious tells. Performed reactions are noticeably constructed.',
                    intermediate: 'Subtle signals only. Performed reactions include convincing elements.',
                    expert: 'Both responses look plausible. Microstructure is everything.',
                  }

                  return (
                    <button
                      key={level.id}
                      className={`rof-level-card ${isUnlocked ? 'rof-level-card--unlocked' : 'rof-level-card--locked'}`}
                      onClick={() => handleSelectLevel(level.id)}
                      disabled={!isUnlocked}
                    >
                      <h3 className="rof-level-name">{level.name}</h3>
                      <p className="rof-level-description">{descriptions[level.id]}</p>
                      {isUnlocked ? (
                        <p className="rof-level-status">
                          {bestScore > 0 ? `Best score: ${bestScore} out of 50` : 'Play now'}
                        </p>
                      ) : (
                        <p className="rof-level-status rof-level-status--locked">
                          Score 40 or more on {prevLevel.name} to unlock
                        </p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (state === 'question') {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const progress = ((currentScenario + 1) / scenarios.length) * 100

    return (
      <div className="rof-page-wrapper">
        <div className="rof-container">
          <main className="rof-main">
            <div className="rof-scenario">
              <div className="rof-progress">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`rof-progress-dot ${i < currentScenario ? 'rof-progress-dot--complete' : ''}`} />
                ))}
              </div>

              <h2 className="rof-situation">{scenario.situation}</h2>

              {!revealingAnswer && (
                <>
                  <div className="rof-cards">
                    <div className="rof-card rof-card--a">
                      <div className="rof-card-label">Person A</div>
                      <p className="rof-card-text">{scenario.personA}</p>
                    </div>
                    <div className="rof-card rof-card--b">
                      <div className="rof-card-label">Person B</div>
                      <p className="rof-card-text">{scenario.personB}</p>
                    </div>
                  </div>

                  <div className="rof-buttons">
                    <button className="rof-answer-btn" onClick={() => handleAnswer('A')}>
                      Person A is Genuine
                    </button>
                    <button className="rof-answer-btn" onClick={() => handleAnswer('B')}>
                      Person B is Genuine
                    </button>
                  </div>
                </>
              )}

              {revealingAnswer && (
                <div className="rof-reveal">
                  <div className="rof-cards">
                    <div className={`rof-card ${scenario.genuine === 'A' ? 'rof-card--genuine' : 'rof-card--performed'}`}>
                      <div className="rof-card-label">{scenario.genuine === 'A' ? 'Genuine' : 'Performed'}</div>
                      <p className="rof-card-text">{scenario.personA}</p>
                    </div>
                    <div className={`rof-card ${scenario.genuine === 'B' ? 'rof-card--genuine' : 'rof-card--performed'}`}>
                      <div className="rof-card-label">{scenario.genuine === 'B' ? 'Genuine' : 'Performed'}</div>
                      <p className="rof-card-text">{scenario.personB}</p>
                    </div>
                  </div>

                  <div className="rof-analysis">
                    <h3 className="rof-analysis-title">Analysis</h3>
                    <p className="rof-analysis-text">{scenario.analysis}</p>
                  </div>

                  <button className="rof-button rof-button--primary" onClick={handleContinue}>
                    {currentScenario === scenarios.length - 1 ? 'See Results' : 'Continue'}
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (state === 'results') {
    const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5
    const rating = getRating(score)

    return (
      <div className="rof-page-wrapper">
        <div className="rof-container">
          <main className="rof-main">
            <div className="rof-results">
              <div className="rof-score-box">
                <div className="rof-score-value">{score}</div>
                <div className="rof-score-label">out of 50</div>
              </div>

              <h2 className="rof-rating-title">{rating.title}</h2>
              <p className="rof-rating-text">{rating.text}</p>

              <div className="rof-results-actions">
                <button className="rof-button rof-button--primary" onClick={handleShare}>
                  {shareSuccess ? '✓ Copied' : 'Share Result'}
                </button>
                <button className="rof-button rof-button--secondary" onClick={handleRetry}>
                  Try Again
                </button>
                <button className="rof-button rof-button--secondary" onClick={() => navigate('/episodes')}>
                  Play More Games
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return null
}
