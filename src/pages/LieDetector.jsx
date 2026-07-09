import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import './LieDetector.css'

const BEGINNER_SCENARIOS = [
  {
    id: 1,
    type: 'Workplace',
    text: 'During a performance review your manager tells you "I think you are doing a really great job and we value you enormously here." As she speaks her smile appears a half second after her words rather than simultaneously, she briefly touches her collarbone and her eyes move upward and to the right before returning to eye contact.',
    answer: 'LIE',
    options: [
      { text: 'They are being deceptive — the smile arriving after the words suggests construction rather than genuine feeling', isCorrect: true },
      { text: 'They are telling the truth — their words express clear positive feedback', isCorrect: false },
      { text: 'They are uncomfortable with giving compliments', isCorrect: false },
      { text: 'They are simply being formal and professional', isCorrect: false },
    ],
    explanation: 'A genuine emotional expression appears simultaneously with the words that express it. A smile that arrives after the statement has already been delivered suggests it was constructed rather than felt. The collarbone touch signals self soothing anxiety and the upward eye movement suggests visual construction rather than genuine recall.',
  },
  {
    id: 2,
    type: 'Relationship',
    text: 'You ask your partner if they are annoyed about something. They reply "No I am absolutely fine, everything is great." Their arms are loosely at their sides, they maintain comfortable eye contact, their expression is relaxed and their voice is even and unhurried.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — open arms, comfortable eye contact and unhurried voice are consistent with genuine calm', isCorrect: true },
      { text: 'They are lying about being fine — their words are too emphatic', isCorrect: false },
      { text: 'They are annoyed but hiding it well', isCorrect: false },
      { text: 'They are uncertain about how they feel', isCorrect: false },
    ],
    explanation: 'This is a genuinely truthful response. Open arms, comfortable eye contact and an unhurried voice are all consistent with genuine calm. There are no self soothing gestures, no timing mismatches between words and expression, and no avoidance signals. Sometimes fine really does mean fine.',
  },
  {
    id: 3,
    type: 'Social',
    text: 'A friend tells you they loved your presentation and found it really inspiring. As they say this they nod their head in agreement, their eyes are fully crinkled with a warm genuine smile, they lean slightly toward you and their voice rises naturally with enthusiasm.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — Duchenne smile, forward lean and natural enthusiasm all reinforce genuine positive feeling', isCorrect: true },
      { text: 'They are being polite but did not actually like it', isCorrect: false },
      { text: 'They are faking enthusiasm to be nice', isCorrect: false },
      { text: 'They are exaggerating their interest', isCorrect: false },
    ],
    explanation: 'Multiple genuine engagement signals appearing together make this a reliable truthful response. The Duchenne smile involving the eye muscles cannot be easily faked. Natural vocal enthusiasm, forward lean and nodding all reinforce each other. This is what genuine positive feeling looks like in the body.',
  },
  {
    id: 4,
    type: 'Workplace',
    text: 'A colleague tells you they did not send the email you are looking for and they have no idea what happened to it. As they speak they briefly touch their nose, clear their throat before answering and their blink rate visibly increases compared to the rest of the conversation.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — nose touch, throat clear and increased blink rate form a stress cluster on this specific question', isCorrect: true },
      { text: 'They are telling the truth — they are just naturally nervous people', isCorrect: false },
      { text: 'They are uncomfortable about the email topic but telling the truth', isCorrect: false },
      { text: 'These physical signals mean nothing', isCorrect: false },
    ],
    explanation: 'Three stress signals appearing together in response to a specific question is a significant cluster. Nose touching is associated with physiological changes caused by stress and deception. Throat clearing suggests tension and the sudden increase in blink rate indicates cognitive and emotional overload. The cluster appearing specifically in response to this question rather than throughout the conversation is the key indicator.',
  },
  {
    id: 5,
    type: 'Relationship',
    text: 'Your partner says they are not bothered about missing the event you forgot to tell them about. Their jaw is visibly tight, their lips are pressed together in a thin line, their arms are crossed firmly and they give a single short nod before looking away.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — tight jaw, pressed lips, crossed arms and gaze aversion form a suppression cluster', isCorrect: true },
      { text: 'They are telling the truth but want to move on from the topic', isCorrect: false },
      { text: 'They are simply tired and distracted', isCorrect: false },
      { text: 'They are being mature about the situation', isCorrect: false },
    ],
    explanation: 'This is a classic suppression cluster. The words say one thing while four separate body language signals simultaneously contradict them. A tight jaw signals suppressed emotion, pressed lips indicate withheld words, crossed arms create a self protective barrier and the gaze aversion after the statement avoids further scrutiny. When this many signals appear together the body is telling a very different story from the words.',
  },
  {
    id: 6,
    type: 'Social',
    text: 'Someone you have just met at a party claims to be a doctor. They maintain steady eye contact throughout, speak at an unhurried measured pace, hold an open relaxed posture and do not hesitate before answering your follow up questions.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — consistent steady signals throughout and no hesitation on follow up questions indicate genuine baseline', isCorrect: true },
      { text: 'They are lying and being very convincing about it', isCorrect: false },
      { text: 'They might be a doctor but are exaggerating their experience', isCorrect: false },
      { text: 'Their confidence suggests they are lying', isCorrect: false },
    ],
    explanation: 'Consistent steady signals throughout a conversation rather than only appearing in response to specific questions suggest a genuine baseline rather than managed deception. The unhurried pace and lack of hesitation on follow up questions are particularly significant — liars often struggle with unexpected detail questions but this person answers smoothly and consistently.',
  },
  {
    id: 7,
    type: 'Workplace',
    text: 'Your colleague says they finished their section of the project on time. As they say this they lean back slightly away from you, their feet angle toward the door, they give a small partial shrug and their voice drops slightly in volume on the word time.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — lean back, feet toward door and partial shrug are withdrawal and uncertainty signals', isCorrect: true },
      { text: 'They are telling the truth — they sound confident overall', isCorrect: false },
      { text: 'They are anxious about the project deadline', isCorrect: false },
      { text: 'They are simply being casual about mentioning it', isCorrect: false },
    ],
    explanation: 'Leaning away and foot orientation toward an exit are withdrawal signals indicating a desire to distance from the statement being made. The partial shrug is a classic uncertainty signal — the body is expressing doubt even as the words claim certainty. The vocal drop specifically on the key word of the sentence is a subtle but significant tell.',
  },
  {
    id: 8,
    type: 'Relationship',
    text: 'Your partner tells you they have been feeling a bit low lately but they are okay. Their shoulders are slightly dropped, their voice is quieter than usual, they make eye contact but it is soft and slightly tired, and they give a small genuine sad smile as they finish speaking.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — dropped shoulders, quieter voice and sad smile are congruent with stated feeling of being low', isCorrect: true },
      { text: 'They are being dishonest about their wellbeing', isCorrect: false },
      { text: 'They are exaggerating how low they feel', isCorrect: false },
      { text: 'The body language does not match their words', isCorrect: false },
    ],
    explanation: 'This is a genuinely truthful and emotionally congruent response. The dropped shoulders, quieter voice and tired eye contact are all consistent with the stated feeling of being low. The sad smile is a real mixed emotional expression — someone acknowledging a difficult feeling while also trying to reassure you. Everything is consistent with the words spoken.',
  },
  {
    id: 9,
    type: 'Social',
    text: 'Someone tells you they are completely relaxed about public speaking and actually enjoy it. As they say this they repeatedly tap their fingers on the table, their breathing is visibly shallow and rapid, and they touch their hair twice before finishing the sentence.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — finger tapping, shallow breathing and hair touch are stress signals contradicting their words', isCorrect: true },
      { text: 'They are telling the truth — they just have natural nervous habits', isCorrect: false },
      { text: 'They are being sarcastic', isCorrect: false },
      { text: 'They are relaxed and the gestures are unrelated', isCorrect: false },
    ],
    explanation: 'Three simultaneous self soothing and stress signals while claiming to feel relaxed is a clear contradiction between words and body. Finger tapping releases nervous energy, shallow rapid breathing is a direct physiological stress response, and hair touching is a self comfort gesture. The body is revealing the anxiety that the words are attempting to conceal.',
  },
  {
    id: 10,
    type: 'Workplace',
    text: 'Your boss tells you the company is in excellent financial health and there is nothing to worry about. They maintain strong direct eye contact throughout, speak clearly and confidently, use open hand gestures and their expression remains consistently calm and assured.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — unnaturally sustained eye contact can signal a managed performance rather than genuine ease', isCorrect: true },
      { text: 'They are telling the truth — the eye contact and confidence are strong honesty signals', isCorrect: false },
      { text: 'They are uncertain about the company financial health', isCorrect: false },
      { text: 'They are being overly formal', isCorrect: false },
    ],
    explanation: 'This is the hardest scenario because the body language appears confident and open. However deliberately maintained eye contact that never breaks is itself a signal worth noting — genuine comfort produces natural eye contact with occasional breaks, not sustained unblinking focus. Overly consistent body language that never varies can indicate a carefully managed performance rather than genuine ease. Sometimes the most dangerous liars are those who have learned to control their signals.',
  },
]

const INTERMEDIATE_SCENARIOS = [
  {
    id: 11,
    type: 'Workplace',
    text: 'Your colleague tells you they have already submitted the report and it should be in your inbox. They maintain reasonable eye contact throughout, speak at a measured pace, but you notice their feet are angled toward the door and they give a very slight shrug on the word already before quickly correcting their posture.',
    answer: 'LIE',
    options: [
      { text: 'They are being deceptive — the subtle shrug on the key word and the exit oriented feet contradict their confident words', isCorrect: true },
      { text: 'They are telling the truth — their eye contact and measured pace are consistent with honesty', isCorrect: false },
      { text: 'They are simply nervous about deadlines', isCorrect: false },
      { text: 'They are telling the truth and the shrug means nothing', isCorrect: false },
    ],
    explanation: 'The micro shrug on the specific word already is a classic uncertainty signal — the body is expressing doubt about that precise claim even as the words assert it confidently. Foot orientation toward the exit adds a withdrawal signal. Taken together these two subtle signals contradict the surface confidence of the statement.',
  },
  {
    id: 12,
    type: 'Relationship',
    text: 'Your partner tells you they did not look at their phone while you were out. Their voice is steady and their expression calm, but you notice a very brief lip compression immediately after the statement followed by a quick return to neutral, and their hands move from relaxed to lightly clasped.',
    answer: 'LIE',
    options: [
      { text: 'They are being deceptive — the lip compression and hand change signal suppressed anxiety about the statement', isCorrect: true },
      { text: 'They are telling the truth — one brief expression and a hand movement are not enough to conclude deception', isCorrect: false },
      { text: 'They are simply tired and distracted', isCorrect: false },
      { text: 'They are annoyed that you are questioning them', isCorrect: false },
    ],
    explanation: 'Lip compression immediately following a statement is one of the most reliable signals of withheld information — the lips physically suppress what the person does not want to say. The simultaneous shift from relaxed to clasped hands confirms the onset of anxiety specifically in response to this statement rather than throughout the conversation.',
  },
  {
    id: 13,
    type: 'Social',
    text: 'A new acquaintance tells you they have visited Japan twice and loved it. They become notably more animated as they speak, their eyes brighten, they lean forward slightly and describe specific details about food and temples with genuine enthusiasm.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — the spontaneous animation and specific recalled details are consistent with genuine positive memory', isCorrect: true },
      { text: 'They could be performing enthusiasm to impress you — the animation seems slightly too much', isCorrect: false },
      { text: 'They are exaggerating how much they enjoyed it', isCorrect: false },
      { text: 'The specific details suggest they rehearsed this story', isCorrect: false },
    ],
    explanation: 'Genuine positive memories produce spontaneous animation that is difficult to sustain artificially for extended periods. Specific sensory details about food and places are consistent with real recall rather than constructed narrative. The forward lean and brightened eyes are involuntary engagement signals that are very hard to fake convincingly over the course of a detailed description.',
  },
  {
    id: 14,
    type: 'Workplace',
    text: 'Your manager tells you that your recent project feedback has been very positive across the board. As they say this their smile appears warm and their words are fluent, but you notice their head gives a very slight shake — almost imperceptible — on the words very positive before they continue speaking.',
    answer: 'LIE',
    options: [
      { text: 'They are being deceptive — the micro head shake contradicts the positive verbal message', isCorrect: true },
      { text: 'They are telling the truth — the smile is warm and the words are fluent, one tiny movement means nothing', isCorrect: false },
      { text: 'They are simply unsure of the exact details', isCorrect: false },
      { text: 'The head movement is just a natural gesture with no meaning', isCorrect: false },
    ],
    explanation: 'A head shake occurring simultaneously with a positive verbal statement is one of the clearest contradiction signals in body language. The head is saying no while the mouth says yes. Because it was almost imperceptible it suggests the person caught and suppressed the movement rather than letting it fully express — which makes it more significant not less.',
  },
  {
    id: 15,
    type: 'Social',
    text: 'Someone tells you they are completely over their ex and have been for a long time. Their voice is steady and their posture open, but as they say the words completely over they briefly touch their own forearm in a self soothing gesture and their gaze drops for a fraction of a second before returning to eye contact.',
    answer: 'LIE',
    options: [
      { text: 'They are not over their ex — the self touch and brief gaze drop signal that the statement is emotionally difficult to make', isCorrect: true },
      { text: 'They are over their ex — the open posture and steady voice are the more significant signals here', isCorrect: false },
      { text: 'They are telling the truth but the topic makes them sad', isCorrect: false },
      { text: 'The gestures are just nervous habits unrelated to the statement', isCorrect: false },
    ],
    explanation: 'Self soothing touch occurring on a specific claim rather than throughout a conversation suggests that particular statement is causing internal discomfort. The momentary gaze drop is the eyes briefly avoiding the vulnerability of the claim. Open posture and steady voice can be consciously maintained — the unconscious micro signals of touch and gaze are harder to control.',
  },
  {
    id: 16,
    type: 'Workplace',
    text: 'A colleague claims they had no prior knowledge of the decision that was made without you. Throughout the conversation they have been relaxed and natural, but specifically when making this claim their blink rate briefly increases and they clear their throat before the word knowledge.',
    answer: 'LIE',
    options: [
      { text: 'They did have prior knowledge — the specific increase in blink rate and throat clear on the key word signal stress about that particular claim', isCorrect: true },
      { text: 'They are telling the truth — they have been relaxed throughout and these are minor reflexes', isCorrect: false },
      { text: 'They are nervous because the situation is uncomfortable not because they are lying', isCorrect: false },
      { text: 'Blink rate and throat clearing are meaningless physical reflexes', isCorrect: false },
    ],
    explanation: 'When stress signals appear specifically on the key word of a denial rather than throughout a conversation they are highly significant. The baseline of relaxed natural behaviour makes the sudden change on this specific claim stand out clearly. Throat clearing before a key word suggests the person needed a moment to compose themselves before delivering the false statement.',
  },
  {
    id: 17,
    type: 'Relationship',
    text: 'Your partner tells you they enjoyed spending time with their friends last night. They are smiling genuinely, their eyes are warm and crinkled, they give you specific details about what they did and their body language is open and relaxed throughout.',
    answer: 'TRUTH',
    options: [
      { text: 'They are telling the truth — genuine Duchenne smile, specific recalled details and consistently open body language all point to honesty', isCorrect: true },
      { text: 'They are hiding something about the evening — the enthusiasm seems slightly performed', isCorrect: false },
      { text: 'They are telling the truth but left something out', isCorrect: false },
      { text: 'The specific details suggest they prepared this story', isCorrect: false },
    ],
    explanation: 'A Duchenne smile involving the eye muscles combined with spontaneous specific detail recall and consistent open body language across an entire account is a very reliable truthfulness cluster. Genuine positive experiences produce this kind of natural animated recall. Suspicion of a prepared story should be reserved for accounts that are suspiciously smooth and lack the natural variations and tangents of genuine memory.',
  },
  {
    id: 18,
    type: 'Social',
    text: 'Someone insists they are not competitive at all and genuinely do not care about winning. As they make this claim their chin rises slightly, their shoulders pull back almost imperceptibly and their voice takes on a firm quality that was not present earlier in the conversation.',
    answer: 'LIE',
    options: [
      { text: 'They are competitive — the postural expansion and firmer voice contradict the claim of not caring', isCorrect: true },
      { text: 'They are telling the truth — some people genuinely are not competitive and are simply being assertive about it', isCorrect: false },
      { text: 'They are defensive because they have been accused of being competitive before', isCorrect: false },
      { text: 'The posture change is unrelated to the statement', isCorrect: false },
    ],
    explanation: 'The specific postural changes — chin rise, shoulder pull back, voice firmness — are dominance and status signals that appear at the precise moment of claiming not to care about status. The body is demonstrating the very quality the words are denying. This type of contradiction between claimed indifference and physical assertion is one of the most reliable signals that a self description is inaccurate.',
  },
  {
    id: 19,
    type: 'Workplace',
    text: 'Your boss tells you the rumours about redundancies are completely unfounded and there is nothing to worry about. Their voice is authoritative and they make sustained direct eye contact throughout, but you notice their jaw is slightly tighter than usual and they have not blinked for an unusually long period during the statement.',
    answer: 'LIE',
    options: [
      { text: 'The rumours have foundation — the jaw tension and reduced blinking signal controlled stress about the statement being made', isCorrect: true },
      { text: 'They are telling the truth — authoritative voice and direct eye contact are strong honesty signals', isCorrect: false },
      { text: 'They are simply being firm to reassure the team', isCorrect: false },
      { text: 'Jaw tension and blinking patterns are not reliable indicators', isCorrect: false },
    ],
    explanation: 'Authoritative voice and sustained eye contact can be deliberately adopted — practised liars often know to maintain these signals. Jaw tension and reduced blinking are much harder to consciously control and tend to appear when someone is working hard to maintain a composed delivery. The combination of deliberately strong signals alongside involuntary tension signals is a pattern worth taking seriously.',
  },
  {
    id: 20,
    type: 'Social',
    text: 'A friend tells you they are absolutely fine with the decision that was made without consulting them. They are speaking clearly and their arms are uncrossed, but their lips press together for a moment immediately after the word fine and one foot begins tapping a slow rhythm that was not present before this topic arose.',
    answer: 'LIE',
    options: [
      { text: 'They are not fine — the lip compression and new foot tapping signal suppressed emotion about the decision', isCorrect: true },
      { text: 'They are fine — uncrossed arms and clear speech are the more meaningful signals here', isCorrect: false },
      { text: 'They are fine but feel slightly awkward discussing it', isCorrect: false },
      { text: 'The foot tapping is just a habit and the lip compression means nothing', isCorrect: false },
    ],
    explanation: 'Lip compression immediately following a key claim is a physical suppression signal — the lips are holding back what the person really wants to say. The onset of foot tapping specifically when this topic arises is a new stress outlet that was not present in the baseline behaviour. Uncrossed arms can be consciously maintained. The involuntary micro signals of lip compression and new rhythmic movement are harder to fake or suppress and together form a reliable cluster.',
  },
]

const EXPERT_SCENARIOS = [
  {
    id: 21,
    type: 'Workplace',
    text: 'A senior colleague asserts they did not see the email before the decision was made. Their body language appears completely controlled — steady eye contact, relaxed shoulders, unhurried speech. However you notice the very slightest asymmetry in their smile, heavier on the left than the right, and their response came almost too quickly after the question with no processing pause at all.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — the asymmetric smile suggests a performed rather than genuine expression, and the absence of any processing pause suggests a rehearsed answer', isCorrect: true },
      { text: 'They are telling the truth — completely controlled body language with steady eye contact and relaxed shoulders is a strong honesty cluster', isCorrect: false },
      { text: 'The quick response suggests confidence not deception — hesitation would be more suspicious', isCorrect: false },
      { text: 'The smile asymmetry is just their natural facial structure', isCorrect: false },
    ],
    explanation: 'Practised liars learn to control the obvious signals — eye contact, posture, voice. What they cannot always control is the microstructure of genuine expression. A true smile is symmetrical and spontaneous. An asymmetric smile that is heavier on one side suggests conscious construction. The absence of any processing pause on a sensitive question is also significant — genuine recall takes a moment, rehearsed answers do not.',
  },
  {
    id: 22,
    type: 'Relationship',
    text: 'Your partner says they have not been feeling distant lately and everything is fine between you. Their posture is open, their voice even, and they make comfortable eye contact. But for a fraction of a second — less than a quarter of a second — something crosses their face before the neutral expression reasserts itself, and when they say the word fine their head gives the tiniest downward micro nod rather than remaining still.',
    answer: 'LIE',
    options: [
      { text: 'They are not fine — the micro expression flash and the downward micro nod on the word fine are contradiction signals that bypass conscious control', isCorrect: true },
      { text: 'They are telling the truth — open posture, even voice and comfortable eye contact are the dominant signals and should outweigh split second micro movements', isCorrect: false },
      { text: 'The micro expression could have been anything — sadness about something unrelated, a passing thought, tiredness', isCorrect: false },
      { text: 'Everything is fine, you are over reading the situation', isCorrect: false },
    ],
    explanation: 'Micro expressions lasting under a quarter of a second are involuntary emotional leakages that occur before conscious management takes over. They reveal the true emotional state more reliably than any sustained expression. The downward micro nod on a key word is a suppressed disagreement signal — the body beginning to shake its head before the conscious mind stops it. Together these two sub second signals reveal what the managed surface behaviour is designed to conceal.',
  },
  {
    id: 23,
    type: 'Social',
    text: 'Someone confidently claims they have never struggled with social anxiety. They maintain strong eye contact, speak fluently and their posture is expansive. But their breathing is slightly more shallow and rapid than it was earlier in the conversation, they have touched their own wrist twice in the last minute, and there is a very faint tension visible at the outer corners of their eyes that does not match the overall relaxed expression.',
    answer: 'LIE',
    options: [
      { text: 'They do struggle with social anxiety — the shallow breathing, wrist touching and periorbital tension are leaking the truth despite the controlled surface performance', isCorrect: true },
      { text: 'They are telling the truth — strong eye contact, fluent speech and expansive posture are powerful honesty signals that outweigh the other details', isCorrect: false },
      { text: 'The breathing and tension could reflect discomfort at being asked about anxiety rather than the existence of anxiety itself', isCorrect: false },
      { text: 'They are telling the truth and are simply a confident person who happens to have some nervous habits', isCorrect: false },
    ],
    explanation: 'The three signals here — shallow breathing, self soothing wrist touch and periorbital tension — are all physiological stress responses that are very difficult to consciously suppress. They are appearing despite a deliberately confident surface performance which requires significant effort to maintain. The fact that they are leaking through the performance rather than appearing throughout the conversation makes them more significant not less.',
  },
  {
    id: 24,
    type: 'Workplace',
    text: 'Your manager states categorically that they did not share confidential information with the other department. Everything about their delivery appears controlled and assured. But when making the specific claim their eyelids lower very slightly — not a full blink but a fractional drop — and there is a barely perceptible increase in the space between their upper and lower teeth as their jaw loosens slightly under pressure.',
    answer: 'LIE',
    options: [
      { text: 'They did share the information — the fractional eyelid drop is an eye block response and the jaw loosening signals stress specifically on this claim', isCorrect: true },
      { text: 'They are telling the truth — the signals you describe are barely perceptible and could easily be normal micro movements with no significance', isCorrect: false },
      { text: 'The jaw loosening could be relief at making a clear strong statement rather than stress', isCorrect: false },
      { text: 'These are too subtle to be meaningful — controlled assured delivery is the most reliable signal here', isCorrect: false },
    ],
    explanation: 'The eye block response — even in its fractional form — is a deep instinctive attempt to avoid confronting something uncomfortable. The jaw loosening under pressure is a release of held tension specifically on the key claim. At expert level deception detection these barely perceptible signals become the most important ones precisely because they are what remain when a skilled deceiver has suppressed everything else.',
  },
  {
    id: 25,
    type: 'Social',
    text: 'Someone tells you they harbour no resentment about how a past situation was handled. They speak calmly and their body language is open. But a single flash of contempt — a unilateral lip raise on the left side lasting approximately one fifth of a second — crosses their face on the word no before the neutral expression returns, and their final exhale before speaking was slightly longer than their previous ones.',
    answer: 'LIE',
    options: [
      { text: 'They do harbour resentment — the contempt micro expression and the preparatory exhale signal suppressed negative emotion about the topic', isCorrect: true },
      { text: 'They are telling the truth — a single micro expression lasting one fifth of a second is too brief and ambiguous to build a conclusion on', isCorrect: false },
      { text: 'The contempt expression could be directed at the situation itself rather than revealing a lie about their feelings', isCorrect: false },
      { text: 'They are telling the truth and the signals you noticed are coincidental', isCorrect: false },
    ],
    explanation: 'The unilateral lip raise is the most reliable facial indicator of contempt and it is very difficult to produce deliberately — it tends to be a genuine involuntary leakage. Its appearance specifically on the word no in a denial is particularly significant. The preparatory exhale is a composure mechanism — the person taking a controlled breath before delivering a statement they find emotionally difficult. Together these two signals at the very start of the claim reveal what the calm delivery is designed to hide.',
  },
  {
    id: 26,
    type: 'Relationship',
    text: 'Your partner tells you they are completely happy with how things are between you right now. Their words are warm and their eye contact genuine. But you notice that as they finish the sentence their body very slightly contracts — shoulders dropping a millimetre, chest deflating almost imperceptibly — before returning to normal, and the warmth in their eyes fades a fraction of a second after their smile rather than simultaneously.',
    answer: 'LIE',
    options: [
      { text: 'They are not completely happy — the micro body contraction and the asynchronous fade of eye warmth reveal suppressed feelings that contradict the warm words', isCorrect: true },
      { text: 'They are telling the truth — warm words and genuine eye contact during the statement itself are the primary signals and should be weighted most heavily', isCorrect: false },
      { text: 'The micro contraction could simply be the natural relaxation after making a sincere statement rather than a contradiction signal', isCorrect: false },
      { text: 'You are over reading imperceptible movements and the statement should be taken at face value', isCorrect: false },
    ],
    explanation: 'At expert level the signals that matter most are the ones that occur in the transition between expressions rather than within them. The micro contraction after the statement is the body briefly dropping the effort of performing contentment before catching itself. The asynchronous fade — where eye warmth disappears a fraction after the smile rather than simultaneously — reveals that the two were not produced by the same genuine emotion but were separately constructed and separately released.',
  },
  {
    id: 27,
    type: 'Workplace',
    text: 'A colleague tells you they have been completely transparent with you throughout this project. Their body language is open and relaxed. But you notice that on the word completely their tongue briefly touches their upper lip from the inside — invisible externally but causing a barely perceptible bulge — and their right hand which had been still moves one centimetre toward their body before stopping.',
    answer: 'LIE',
    options: [
      { text: 'They have not been fully transparent — the internal lip touch is a self soothing oral gesture signalling internal stress on the key claim, and the aborted hand withdrawal is a suppressed retreat signal', isCorrect: true },
      { text: 'They are telling the truth — open relaxed body language throughout is a much stronger signal than two barely perceptible micro movements', isCorrect: false },
      { text: 'The hand movement could be a random micro adjustment with no psychological significance', isCorrect: false },
      { text: 'These signals are too subtle and ambiguous to support any conclusion about deception', isCorrect: false },
    ],
    explanation: 'The internal tongue to lip touch is an oral self soothing gesture — a vestige of infant comfort behaviour that reappears under stress. Its invisibility externally but detectability as a micro movement makes it significant because it bypasses the usual channels of conscious body management. The aborted hand withdrawal is equally significant — the body began a retreat movement and then stopped it, which reveals both the impulse and its suppression simultaneously.',
  },
  {
    id: 28,
    type: 'Social',
    text: 'Someone insists they genuinely like a person they have openly clashed with in the past. They maintain steady eye contact, speak warmly and their posture is open. But their voice is pitched very slightly higher than their baseline earlier in the conversation, and on the word genuinely there is a micro expression lasting less than one eighth of a second that most closely resembles disgust before the warm expression reasserts.',
    answer: 'LIE',
    options: [
      { text: 'They do not genuinely like this person — the pitch elevation signals stress and the disgust micro expression on the key word is an involuntary emotional leakage that contradicts the warm performance', isCorrect: true },
      { text: 'They are telling the truth — sustained eye contact, warm speech and open posture maintained throughout the statement are powerful honesty signals', isCorrect: false },
      { text: 'The micro expression could reflect residual negative feeling about past clashes rather than current dishonesty about present feelings', isCorrect: false },
      { text: 'A pitch change too small to define precisely and a sub eighth of a second expression are far too ambiguous to support a deception conclusion', isCorrect: false },
    ],
    explanation: 'Vocal pitch elevation under stress is a physiological response to cortisol and adrenaline that is very difficult to consciously control across a sustained performance. The disgust micro expression on the specific word genuinely is a classic contradiction signal — the body expressing the true evaluation at the precise moment the false one is being asserted. Together these two signals that bypass conscious control are more reliable than the three that can be deliberately maintained.',
  },
  {
    id: 29,
    type: 'Relationship',
    text: 'Your partner tells you that a particular person is just a friend and means nothing more to them. Their delivery is calm, their body language controlled and their eye contact steady. However their pupils are slightly more constricted than the ambient lighting would suggest, their blink rate has returned to baseline after a brief elevation you caught earlier in the conversation, and there is an almost imperceptible tension in the muscles around their mouth that was not present when discussing other topics.',
    answer: 'LIE',
    options: [
      { text: 'The person means more than a friend — pupil constriction under normal lighting can signal suppressed emotional arousal, the earlier blink elevation signals the stress that has now been managed, and the perioral tension reveals effort being applied to maintain the neutral expression', isCorrect: true },
      { text: 'They are telling the truth — calm delivery, controlled body language and steady eye contact that has been maintained throughout the statement are the primary signals and far outweigh subtle physiological details', isCorrect: false },
      { text: 'Pupil constriction has many causes including recent light exposure and the other signals are too subtle to build conclusions on', isCorrect: false },
      { text: 'You are applying too much significance to physiological micro signals that could have dozens of innocent explanations', isCorrect: false },
    ],
    explanation: 'At expert level deception detection the practised liar has learned to manage the obvious signals. What remains are the physiological responses that cannot be fully controlled — pupillary response, micro muscular tension and the pattern of stress signals appearing and then being managed rather than being absent throughout. The earlier blink elevation that has now returned to baseline is particularly significant — it shows the stress response and its suppression in sequence, which is a more reliable pattern than either signal alone.',
  },
  {
    id: 30,
    type: 'Workplace',
    text: 'A senior leader tells the team that the decision was made purely on merit and personal relationships played no part. Their delivery is authoritative and their body language commanding. But during the statement you notice their weight shifts very slightly onto their back foot — perhaps two centimetres — before returning to centre, and on the word purely there is a fractional over correction in their eye contact, a microsecond of slightly too held gaze before it normalises.',
    answer: 'LIE',
    options: [
      { text: 'Personal relationships did play a part — the backward weight shift is a withdrawal signal and the over corrected eye contact reveals conscious management of a signal they know people watch for', isCorrect: true },
      { text: 'They are telling the truth — authoritative delivery and commanding body language maintained throughout are far stronger signals than a two centimetre weight shift and a microsecond of eye contact variation', isCorrect: false },
      { text: 'The weight shift could simply be a natural postural adjustment and deliberate eye contact signals confidence rather than managed deception', isCorrect: false },
      { text: 'You are pattern matching coincidental micro movements into a deception narrative that the overall commanding body language does not support', isCorrect: false },
    ],
    explanation: 'At the highest level of deception detection the most telling signals are often the corrections rather than the original responses. A person who knows that avoiding eye contact looks suspicious will over correct toward sustained eye contact — and that over correction, the slightly too held gaze, reveals the management rather than the genuine response. The backward weight shift is a retreat impulse — the body wanting to distance itself from the claim — that was caught and corrected. Both signals reveal not just stress but the conscious suppression of stress signals, which at expert level is itself the most significant finding.',
  },
]

const LEVELS = [
  { id: 'beginner', name: 'Beginner', icon: '🟢', scenarios: BEGINNER_SCENARIOS },
  { id: 'intermediate', name: 'Intermediate', icon: '🟡', scenarios: INTERMEDIATE_SCENARIOS },
  { id: 'expert', name: 'Expert', icon: '🔴', scenarios: EXPERT_SCENARIOS },
]

const ICON_MAP = {
  'Workplace': '💼',
  'Relationship': '❤️',
  'Social': '💬',
}

export default function LieDetector() {
  const [state, setState] = useState('levelSelect')
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [answers, setAnswers] = useState({})
  const [revealingAnswer, setRevealingAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [flashVisible, setFlashVisible] = useState(false)
  const [unlockedLevels, setUnlockedLevels] = useState(['beginner'])
  const [bestScores, setBestScores] = useState({})
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false)
  const [unlockedLevelName, setUnlockedLevelName] = useState('')
  const [shareSuccess, setShareSuccess] = useState(false)
  const navigate = useNavigate()
  const [resultsProcessed, setResultsProcessed] = useState(false)

  useEffect(() => {
    const savedUnlocked = localStorage.getItem('lieDetectorUnlocked')
    const savedScores = localStorage.getItem('lieDetectorScores')
    if (savedUnlocked) setUnlockedLevels(JSON.parse(savedUnlocked))
    if (savedScores) setBestScores(JSON.parse(savedScores))
  }, [])

  useEffect(() => {
    if (state === 'results' && !resultsProcessed) {
      setResultsProcessed(true)
      const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
      const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5
      const levelIdx = LEVELS.findIndex(l => l.id === selectedLevel)
      const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null

      const newScores = { ...bestScores }
      if (!newScores[selectedLevel] || score > newScores[selectedLevel]) {
        newScores[selectedLevel] = score
        setBestScores(newScores)
        localStorage.setItem('lieDetectorScores', JSON.stringify(newScores))
      }

      if (score >= 40 && nextLevel && !unlockedLevels.includes(nextLevel.id)) {
        const newUnlocked = [...unlockedLevels, nextLevel.id]
        setUnlockedLevels(newUnlocked)
        localStorage.setItem('lieDetectorUnlocked', JSON.stringify(newUnlocked))
        setUnlockedLevelName(nextLevel.name)
        setShowUnlockAnimation(true)
      }
    }
  }, [state])

  function handleLogoClick() {
    navigate('/')
  }

  function handleSelectLevel(levelId) {
    if (!unlockedLevels.includes(levelId)) return
    setShowUnlockAnimation(false)
    setShareSuccess(false)
    setResultsProcessed(false)
    setFlashVisible(false)
    setIsCorrect(false)
    setUserAnswer(null)
    setRevealingAnswer(null)
    setAnswers({})
    setCurrentScenario(0)
    setSelectedLevel(levelId)
    setState('scenario')
  }

  function handleAnswer(selectedAnswer) {
    if (revealingAnswer) return

    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const correct = selectedAnswer === scenario.answer

    setUserAnswer(selectedAnswer)
    setIsCorrect(correct)
    setFlashVisible(true)

    setTimeout(() => {
      setFlashVisible(false)
      setRevealingAnswer(true)

      setTimeout(() => {
        setAnswers({
          ...answers,
          [currentScenario]: correct ? 1 : 0,
        })
      }, 500)
    }, 400)
  }

  function handleContinue() {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setRevealingAnswer(null)
      setUserAnswer(null)
      setIsCorrect(false)
      setState('scenario')
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
    setState('scenario')
  }

  function handleLevelSelect() {
    setState('levelSelect')
    setResultsProcessed(false)
  }

  async function handleShare() {
    const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5
    const levelName = LEVELS.find(l => l.id === selectedLevel).name
    const shareText = `I scored ${score} out of 50 on ${levelName} in the BodyLanguageIQ Lie Detector Test. Can you beat me? bodylanguageiq.com/lie-detector`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (state === 'levelSelect') {
    return (
      <div className="ld-page-wrapper">
        <NavBar />
        <div className="ld-container">
          <main className="lie-detector">
          <div className="ld-level-select">
            <div className="ld-ecg-container">
              <svg className="ld-ecg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <polyline
                  points="0,50 50,50 75,30 100,70 125,50 150,50 200,50 225,30 250,70 275,50 300,50 350,50 375,30 400,70 425,50 450,50 500,50 525,30 550,70 575,50 600,50 650,50 675,30 700,70 725,50 750,50 800,50 825,30 850,70 875,50 900,50 950,50 975,30 1000,70"
                  strokeWidth="3"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <h1 className="ld-level-title">Lie Detector Test</h1>
            <p className="ld-level-subtitle">
              Three levels of increasing difficulty. Can you spot the lies?
            </p>

            <div className="ld-levels-grid">
              {LEVELS.map((level, idx) => {
                const isUnlocked = unlockedLevels.includes(level.id)
                const bestScore = bestScores[level.id] || 0
                const prevLevel = idx > 0 ? LEVELS[idx - 1] : null

                return (
                  <button
                    key={level.id}
                    className={`ld-level-card ${isUnlocked ? 'ld-level-card--unlocked' : 'ld-level-card--locked'}`}
                    onClick={() => handleSelectLevel(level.id)}
                    disabled={!isUnlocked}
                  >
                    <div className="ld-level-card-header">
                      <span className="ld-level-icon">{level.icon}</span>
                      {!isUnlocked && <span className="ld-lock-icon">🔒</span>}
                    </div>
                    <h2 className="ld-level-name">{level.name}</h2>
                    {isUnlocked ? (
                      <p className="ld-level-desc">
                        {bestScore > 0 ? `Best score: ${bestScore} out of 50` : 'Play now'}
                      </p>
                    ) : (
                      <p className="ld-level-desc">
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

  if (state === 'scenario') {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const progress = ((currentScenario + 1) / scenarios.length) * 100

    return (
      <div className="ld-page-wrapper">
        <NavBar />
        <div className="ld-container">
          <main className="lie-detector">
          <div className="ld-scenario-wrapper">
            <div className={`ld-flash ${flashVisible ? (isCorrect ? 'ld-flash--correct' : 'ld-flash--wrong') : ''}`} />

            <div className="ld-scenario-header">
              <div className="ld-scenario-meta">
                <span className="ld-scenario-icon">{ICON_MAP[scenario.type]}</span>
                <span className="ld-scenario-type">{scenario.type}</span>
              </div>
              <div className="ld-scenario-progress">
                <span className="ld-scenario-number">Scenario {currentScenario + 1}/{scenarios.length}</span>
                <div className="ld-suspicion-meter">
                  <div
                    className="ld-suspicion-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="ld-scenario-card">
              {!revealingAnswer && (
                <p className="ld-scenario-text">{scenario.text}</p>
              )}

              {!revealingAnswer && (
                <>
                  <div className="ld-needle-container">
                    <svg className="ld-needle" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <path d="M 20 80 Q 100 20 180 80" stroke="var(--gold)" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="80" r="6" fill="var(--gold)" />
                      <g className="ld-needle-indicator">
                        <line x1="100" y1="80" x2="100" y2="40" stroke="var(--gold)" strokeWidth="2" />
                        <polygon points="100,30 95,40 105,40" fill="var(--gold)" />
                      </g>
                    </svg>
                  </div>

                  <div className="ld-buttons">
                    <button
                      className="ld-btn ld-btn--truth"
                      onClick={() => handleAnswer('TRUTH')}
                    >
                      TRUTH
                    </button>
                    <button
                      className="ld-btn ld-btn--lie"
                      onClick={() => handleAnswer('LIE')}
                    >
                      LIE
                    </button>
                  </div>
                </>
              )}

              {revealingAnswer && (
                <div className="ld-reveal">
                  <h2 className={`ld-reveal-status ${isCorrect ? 'ld-reveal-status--correct' : 'ld-reveal-status--wrong'}`}>
                    {isCorrect ? '✓ Correct!' : '✗ Wrong'}
                  </h2>

                  <div className="ld-reveal-answer">
                    <p className="ld-reveal-label">The answer was:</p>
                    <p className={`ld-reveal-value ${scenario.answer === 'TRUTH' ? 'ld-reveal-value--truth' : 'ld-reveal-value--lie'}`}>
                      {scenario.answer}
                    </p>
                  </div>

                  <div className="ld-reveal-explanation">
                    <p className="ld-explanation-text">{scenario.explanation}</p>
                  </div>

                  <button className="ld-continue-btn" onClick={handleContinue}>
                    {currentScenario === scenarios.length - 1 ? 'See Results' : 'Next Scenario'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
        </div>
      </div>
    )
  }

  if (state === 'results') {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5
    const levelIdx = LEVELS.findIndex(l => l.id === selectedLevel)
    const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null

    const levelName = LEVELS.find(l => l.id === selectedLevel).name

    return (
      <div className="ld-page-wrapper">
        <NavBar />
        <div className="ld-container">
          <main className="lie-detector">
          <div className="ld-results">
            {showUnlockAnimation && (
              <div className="ld-unlock-animation">
                <div className="ld-unlock-burst">🔓</div>
                <h2 className="ld-unlock-text">
                  {unlockedLevelName} Level Unlocked!
                </h2>
                {nextLevel && (
                  <button
                    className="ld-results-btn ld-results-btn--primary"
                    onClick={() => {
                      setShowUnlockAnimation(false)
                      handleSelectLevel(nextLevel.id)
                    }}
                    style={{ marginTop: '24px' }}
                  >
                    Play {nextLevel.name}
                  </button>
                )}
              </div>
            )}

            {!showUnlockAnimation && (
              <>
                <div className="ld-polygraph-container">
                  <svg className="ld-polygraph" viewBox="0 0 1000 150" preserveAspectRatio="none">
                    <polyline
                      points="0,75 50,75 75,55 100,95 125,75 150,75 200,75 225,55 250,95 275,75 300,75 350,75 375,55 400,95 425,75 450,75 500,75 525,55 550,95 575,75 600,75 650,75 675,55 700,95 725,75 750,75 800,75 825,55 850,95 875,75 900,75 950,75 975,55 1000,95"
                      strokeWidth="4"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <h1 className="ld-results-title">Your Score</h1>
                <div className="ld-score-display">
                  <span className="ld-score-value">{score}</span>
                  <span className="ld-score-max">out of 50</span>
                </div>

                <h2 className="ld-rating">{levelName} Level</h2>
                {score >= 40 ? (
                  <p className="ld-rating-text">
                    Congratulations! You have demonstrated exceptional deception detection skills on {levelName}.
                  </p>
                ) : (
                  <p className="ld-rating-text">
                    Score 40 or more to unlock the next level and continue your training.
                  </p>
                )}

                <div className="ld-results-actions">
                  <button className="ld-results-btn ld-results-btn--primary" onClick={handleShare}>
                    {shareSuccess ? '✓ Copied to Clipboard' : 'Share Result'}
                  </button>
                  {score >= 40 && nextLevel && (
                    <button
                      className="ld-results-btn ld-results-btn--secondary"
                      onClick={() => {
                        setShowUnlockAnimation(false)
                        handleSelectLevel(nextLevel.id)
                      }}
                    >
                      Play {nextLevel.name}
                    </button>
                  )}
                  <button className="ld-results-btn ld-results-btn--secondary" onClick={handleRetry}>
                    Try Again
                  </button>
                  <button
                    className="ld-results-btn ld-results-btn--secondary"
                    onClick={handleLevelSelect}
                  >
                    Back to Levels
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
        </div>
      </div>
    )
  }
}
