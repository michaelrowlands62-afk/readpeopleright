import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './LieDetector.css'

const BEGINNER_SCENARIOS = [
  {
    id: 1,
    type: 'Workplace',
    text: 'During your annual review your manager leans back in her chair and tells you the company values your contribution enormously. Her smile arrives a noticeable half second after she finishes the sentence and she touches her collarbone lightly as she holds eye contact.',
    answer: 'LIE',
    options: [
      { text: 'She is being deceptive — the delayed smile and collarbone touch reveal anxiety beneath the positive words.', isCorrect: true },
      { text: 'She is sincere — eye contact and a warm smile are strong honesty signals.', isCorrect: false },
      { text: 'She is nervous about giving feedback.', isCorrect: false },
      { text: 'She is telling the truth but finds the conversation awkward.', isCorrect: false },
    ],
    explanation: 'A genuine emotional expression arrives simultaneously with the words that carry it. A smile that appears after the statement has already been delivered suggests it was constructed rather than spontaneous. The collarbone touch is a self soothing gesture that signals internal anxiety — the kind that accompanies saying something you do not fully mean.',
  },
  {
    id: 2,
    type: 'Relationship',
    text: 'You ask your partner whether they enjoyed the evening. They turn toward you fully, their shoulders drop and relax, and they describe specific moments from the night with natural animation in their voice and face.',
    answer: 'TRUTH',
    options: [
      { text: 'They genuinely enjoyed it — the full body orientation, relaxed shoulders and specific recalled details are consistent with truthful positive feeling.', isCorrect: true },
      { text: 'They are performing enjoyment to avoid disappointing you.', isCorrect: false },
      { text: 'They are exaggerating to be kind.', isCorrect: false },
      { text: 'The specific details suggest a rehearsed answer.', isCorrect: false },
    ],
    explanation: 'Truthful positive memories produce spontaneous specific detail and natural physical animation that is difficult to sustain artificially. Full body orientation toward someone signals genuine engagement. Relaxed shoulders indicate the absence of the tension that accompanies deception.',
  },
  {
    id: 3,
    type: 'Social',
    text: 'A friend insists they have absolutely no hard feelings about being left off the invitation list. They give a single short nod after speaking, their jaw muscles are visibly tight and their gaze drops briefly to the floor before returning to your face.',
    answer: 'LIE',
    options: [
      { text: 'They do have hard feelings — the jaw tension and gaze drop reveal suppressed emotion that contradicts their words.', isCorrect: true },
      { text: 'They are telling the truth and the jaw tension is just their natural resting expression.', isCorrect: false },
      { text: 'They are sad about it but have genuinely moved on.', isCorrect: false },
      { text: 'They are telling the truth and feel relieved not to have been invited.', isCorrect: false },
    ],
    explanation: 'Jaw tension signals suppressed emotion — the muscles are physically holding something back. A gaze drop immediately after a strong claim of no hard feelings suggests the eyes are briefly avoiding the vulnerability of the assertion. A single short nod without any natural follow-on movement suggests a performed rather than genuine response.',
  },
  {
    id: 4,
    type: 'Workplace',
    text: 'A colleague tells you they finished their section of the shared document yesterday afternoon. They lean casually against the desk, maintain easy relaxed eye contact and their voice carries the slightly distracted quality of someone confirming something unremarkable.',
    answer: 'TRUTH',
    options: [
      { text: 'They finished it — the relaxed posture, easy eye contact and casual delivery are consistent with someone stating a simple fact they have no reason to hide.', isCorrect: true },
      { text: 'The casual delivery could mask deception — some people lie in a very relaxed way.', isCorrect: false },
      { text: 'They are covering for a team member who did the work.', isCorrect: false },
      { text: 'The distracted quality suggests they are hiding something.', isCorrect: false },
    ],
    explanation: 'Baseline relaxed behaviour maintained consistently throughout an interaction is a reliable truthfulness indicator. The casual distracted quality of someone confirming something unremarkable is exactly what genuine truthful statements about minor facts sound and look like. There are no specific stress signals appearing on this claim versus the rest of the conversation.',
  },
  {
    id: 5,
    type: 'Social',
    text: 'Someone at a party claims they are a lawyer. As they speak their weight shifts from foot to foot, they clear their throat twice before finishing their answer to your follow-up question and their eye contact becomes noticeably more intense and fixed than it was during earlier small talk.',
    answer: 'LIE',
    options: [
      { text: 'They are not a lawyer — the weight shifting, throat clearing and suddenly over-managed eye contact signal stress about this specific claim.', isCorrect: true },
      { text: 'They are telling the truth — some people become more focused when discussing their profession.', isCorrect: false },
      { text: 'They are nervous about being judged for their career.', isCorrect: false },
      { text: 'They are telling the truth and the weight shifting is just a physical habit.', isCorrect: false },
    ],
    explanation: 'Weight shifting releases nervous energy and signals discomfort with the current situation. Throat clearing before completing an answer to a detail question suggests the person needed a moment to construct their response. Suddenly intensified eye contact compared to the baseline of earlier relaxed conversation suggests conscious management of a signal the person knows people watch for.',
  },
  {
    id: 6,
    type: 'Relationship',
    text: 'Your partner says they were home all evening and did not go out. They cross their arms as they finish speaking, their feet angle toward the hallway and they add a small additional explanation you did not ask for.',
    answer: 'LIE',
    options: [
      { text: 'They were not home all evening — the arm cross, exit-oriented feet and unsolicited explanation are a cluster pointing toward deception.', isCorrect: true },
      { text: 'They are telling the truth and are simply defensive because they feel accused.', isCorrect: false },
      { text: 'They are telling the truth but are annoyed at being questioned.', isCorrect: false },
      { text: 'The arm cross means they are cold not defensive.', isCorrect: false },
    ],
    explanation: 'Crossed arms following a denial create a physical barrier consistent with a defensive or self-protective state. Feet orienting toward an exit signal a desire to leave the situation. Volunteering additional explanation that was not requested is one of the most common verbal deception signals — genuine truthful people tend to state the fact and stop rather than elaborating unprompted.',
  },
  {
    id: 7,
    type: 'Workplace',
    text: 'Your boss tells you a decision was made last week before you joined the project. She maintains open relaxed hands on the table, speaks at her usual pace and makes the same quality of eye contact she has used throughout the entire meeting.',
    answer: 'TRUTH',
    options: [
      { text: 'She is telling the truth — consistent body language throughout the meeting with no specific stress signals appearing on this claim indicates a genuine statement.', isCorrect: true },
      { text: 'She is hiding the real timeline to protect someone involved in the decision.', isCorrect: false },
      { text: 'Her relaxed hands are a deliberate performance of honesty.', isCorrect: false },
      { text: 'She is telling the truth but feels guilty about how the decision was made.', isCorrect: false },
    ],
    explanation: 'The most important principle in deception detection is the baseline. When someone\'s body language on a specific claim is identical to their body language throughout the rest of an interaction there are no signals that distinguish this moment from any other. Deception tends to produce changes from baseline — the absence of any change is itself meaningful.',
  },
  {
    id: 8,
    type: 'Social',
    text: 'An acquaintance tells you they genuinely enjoy running and do it three times a week. Their smile is symmetrical and wide as they say it but does not involve any movement around their eyes and disappears completely the moment the sentence ends.',
    answer: 'LIE',
    options: [
      { text: 'They do not enjoy running — the smile that fails to reach the eyes and vanishes immediately after speaking is a performed rather than genuine expression.', isCorrect: true },
      { text: 'They are telling the truth — a wide smile is a positive signal.', isCorrect: false },
      { text: 'They enjoy it but are embarrassed about how much they talk about exercise.', isCorrect: false },
      { text: 'They are telling the truth and just have an unusual smile.', isCorrect: false },
    ],
    explanation: 'A genuine Duchenne smile involves the muscles around the eyes producing natural crinkles and tends to fade gradually. A smile confined to the mouth that disappears the instant the sentence ends was constructed for the duration of the statement rather than produced by genuine feeling. The absence of any periorbital movement is the clearest distinguishing feature.',
  },
  {
    id: 9,
    type: 'Relationship',
    text: 'You ask your partner if they are upset about something you said earlier. They pause briefly, exhale slowly and then tell you honestly that yes, it did bother them a little but they did not want to make a big deal of it.',
    answer: 'TRUTH',
    options: [
      { text: 'They are being completely honest — the pause, slow exhale and admission of mild hurt with a qualifier are all consistent with someone telling a vulnerable truth carefully.', isCorrect: true },
      { text: 'They are downplaying something much bigger to avoid conflict.', isCorrect: false },
      { text: 'They are lying about being bothered and are actually fine.', isCorrect: false },
      { text: 'The pause suggests they are constructing a story.', isCorrect: false },
    ],
    explanation: 'A genuine admission of mild hurt tends to come with exactly these features — a pause to gather the courage to say it, a regulating exhale and a qualifier that softens the impact. Liars tend to over-deny or over-assure. Someone admitting to feeling bothered while minimising it is displaying the kind of vulnerable honesty that is very hard to fake convincingly.',
  },
  {
    id: 10,
    type: 'Workplace',
    text: 'A team member tells you they had no idea the client had already been contacted. Their voice is steady and their hands are still, their mouth forms a straight line as they finish speaking and they give a single blink that is notably slower than their normal blink rate.',
    answer: 'LIE',
    options: [
      { text: 'They did know — the flat mouth and unusually slow deliberate blink signal controlled suppression of a reaction they are working to conceal.', isCorrect: true },
      { text: 'They are telling the truth — a steady voice and still hands are strong honesty indicators.', isCorrect: false },
      { text: 'They are shocked by the news and the slow blink is a surprise response.', isCorrect: false },
      { text: 'The flat mouth is just their natural resting expression.', isCorrect: false },
    ],
    explanation: 'A flat pressed mouth following a denial is a suppression signal — the lips holding back a reaction. A deliberately slow blink is a classic eye block variation — the eyelids briefly shutting out something the person does not want to be seen responding to. Both signals suggest active management of a reaction rather than genuine ignorance.',
  },
]

const INTERMEDIATE_SCENARIOS = [
  {
    id: 11,
    type: 'Workplace',
    text: 'Your colleague confirms the report was submitted before the deadline. She maintains reasonable eye contact and speaks clearly. Her feet are angled slightly toward the door and on the word submitted her head gives a barely perceptible downward tilt before returning to centre.',
    answer: 'LIE',
    options: [
      { text: 'The report was not submitted on time — the exit-oriented feet and micro head dip on the key word are withdrawal and uncertainty signals.', isCorrect: true },
      { text: 'She is telling the truth — clear speech and reasonable eye contact are the dominant signals here.', isCorrect: false },
      { text: 'She submitted it but is anxious about the quality.', isCorrect: false },
      { text: 'She is telling the truth and the head movement is just a natural gesture.', isCorrect: false },
    ],
    explanation: 'Foot orientation toward an exit signals a desire to leave the current situation — appearing specifically during a claim rather than throughout a conversation makes it significant. The downward micro head tilt on the key claim word is an uncertainty signal — the body beginning to express doubt before the conscious mind suppresses it.',
  },
  {
    id: 12,
    type: 'Relationship',
    text: 'Your partner says they did not check their phone while you were out. Their voice is even and their posture open. Immediately after finishing the sentence their lips press together briefly and their hands move from relaxed at their sides to lightly clasped in front of them.',
    answer: 'LIE',
    options: [
      { text: 'They did check their phone — the lip compression and simultaneous hand clasp signal suppressed anxiety about the statement.', isCorrect: true },
      { text: 'They are telling the truth — one brief expression and a minor hand adjustment are not enough evidence of deception.', isCorrect: false },
      { text: 'They are tired and the hand movement is just a comfortable resting position.', isCorrect: false },
      { text: 'They are telling the truth but feel watched and judged.', isCorrect: false },
    ],
    explanation: 'Lip compression immediately following a statement is a physical suppression signal — the lips holding back what the person does not want to say. The simultaneous shift from relaxed to clasped hands confirms the onset of tension specifically in response to this claim. Both signals appearing together at the moment of the statement rather than throughout the conversation is the key indicator.',
  },
  {
    id: 13,
    type: 'Social',
    text: 'A new acquaintance describes a trip to Japan they took two years ago. Their eyes become noticeably more animated, they lean forward slightly and they move between specific memories — a particular ramen restaurant, a temple they visited at dawn — with natural jumps and digressions typical of genuine recall.',
    answer: 'TRUTH',
    options: [
      { text: 'They genuinely took the trip — the spontaneous animation, forward lean and natural non-linear recall with specific sensory details are consistent with real memory.', isCorrect: true },
      { text: 'The specific details and enthusiasm could indicate a rehearsed story designed to impress.', isCorrect: false },
      { text: 'They are exaggerating how much they enjoyed it.', isCorrect: false },
      { text: 'The forward lean is a social performance rather than genuine engagement.', isCorrect: false },
    ],
    explanation: 'Genuine memories tend to surface in a non-linear way with natural digressions and specific sensory details that are hard to fabricate consistently. Spontaneous forward lean and eye animation are involuntary engagement signals. Constructed stories tend to be smoother and more chronologically organised than real recall.',
  },
  {
    id: 14,
    type: 'Workplace',
    text: 'Your manager tells you the feedback on your recent project has been very positive across the board. Her delivery is warm and her words are fluent. On the phrase very positive her head gives the slightest sideways micro shake — less than a centimetre — before her expression continues unchanged.',
    answer: 'LIE',
    options: [
      { text: 'The feedback has not all been positive — the micro head shake on the key phrase is a contradiction signal revealing the true assessment.', isCorrect: true },
      { text: 'She is telling the truth — warm delivery and fluent words are strong positive signals and one tiny movement is not meaningful.', isCorrect: false },
      { text: 'She is simplifying complex feedback to be encouraging.', isCorrect: false },
      { text: 'The head movement is a natural conversational gesture with no significance.', isCorrect: false },
    ],
    explanation: 'A head shake occurring simultaneously with a positive verbal statement is one of the clearest nonverbal contradiction signals — the head is saying no while the mouth says yes. Because it was barely perceptible it suggests the person caught and suppressed the movement rather than letting it fully express, which makes it more significant rather than less.',
  },
  {
    id: 15,
    type: 'Social',
    text: 'Someone tells you they have completely moved on from a difficult relationship that ended last year. Their voice is steady and their posture is open. As they say the word completely they touch their own forearm lightly and their gaze drops for a fraction of a second before returning to yours.',
    answer: 'LIE',
    options: [
      { text: 'They have not fully moved on — the self touch and brief gaze drop signal that the statement is emotionally difficult to deliver.', isCorrect: true },
      { text: 'They are telling the truth — steady voice and open posture are stronger signals than brief micro movements.', isCorrect: false },
      { text: 'They have moved on but the topic still makes them sad which is perfectly normal.', isCorrect: false },
      { text: 'The forearm touch is a nervous habit unrelated to what they are saying.', isCorrect: false },
    ],
    explanation: 'Self soothing touch appearing on a specific claim rather than throughout a conversation suggests that particular statement is causing internal discomfort. The momentary gaze drop is the eyes briefly avoiding the vulnerability of the assertion. Open posture and steady voice can be consciously maintained — unconscious micro signals of touch and gaze are harder to control.',
  },
  {
    id: 16,
    type: 'Workplace',
    text: 'A colleague says they had no prior knowledge of the restructuring decision. They have been relaxed and natural throughout the conversation. Their blink rate increases noticeably as they deliver this specific sentence and they clear their throat before the word knowledge.',
    answer: 'LIE',
    options: [
      { text: 'They did have prior knowledge — the specific blink increase and throat clear on the key word signal stress about this particular claim.', isCorrect: true },
      { text: 'They are telling the truth — their relaxed baseline throughout the conversation makes the minor variations on this sentence unremarkable.', isCorrect: false },
      { text: 'They are nervous because restructuring is a sensitive topic for everyone.', isCorrect: false },
      { text: 'Blink rate and throat clearing are normal physiological variations with no significance.', isCorrect: false },
    ],
    explanation: 'Stress signals appearing specifically on the key word of a denial rather than throughout a conversation are highly significant. The established baseline of relaxed natural behaviour makes the sudden change on this specific claim stand out clearly. Throat clearing before a key word suggests the person needed a moment to prepare before delivering the false statement.',
  },
  {
    id: 17,
    type: 'Relationship',
    text: 'Your partner tells you they genuinely enjoyed the dinner with your family. They smile with their whole face including the corners of their eyes, describe a specific funny moment from the evening and their body stays oriented toward you throughout the conversation.',
    answer: 'TRUTH',
    options: [
      { text: 'They genuinely enjoyed it — the Duchenne smile, specific recalled detail and sustained body orientation are all consistent with truthful positive feeling.', isCorrect: true },
      { text: 'They are being kind and the enthusiasm is slightly performed to spare your feelings.', isCorrect: false },
      { text: 'They enjoyed parts of it but are glossing over the awkward moments.', isCorrect: false },
      { text: 'The specific detail about a funny moment sounds rehearsed.', isCorrect: false },
    ],
    explanation: 'A Duchenne smile involving the eye muscles combined with spontaneous specific detail recall and consistent body orientation is a reliable truthfulness cluster. Genuine positive experiences produce this kind of natural animated recall. The detail about a specific funny moment is the kind of particular memory that emerges naturally from real experience rather than constructed politeness.',
  },
  {
    id: 18,
    type: 'Social',
    text: 'Someone insists they are not at all competitive and genuinely do not care about winning. As they make this claim their chin rises slightly, their shoulders pull back almost imperceptibly and their voice takes on a firmer quality than it had earlier in the conversation.',
    answer: 'LIE',
    options: [
      { text: 'They are competitive — the postural expansion and firmer voice on the claim of not caring contradict the content of their words.', isCorrect: true },
      { text: 'They are telling the truth and are simply being assertive about a characteristic they have been falsely accused of before.', isCorrect: false },
      { text: 'They are defensive because the question felt like an accusation.', isCorrect: false },
      { text: 'The posture change is unrelated to the statement — they simply shifted position.', isCorrect: false },
    ],
    explanation: 'The specific postural changes — chin rise, shoulder pull back, voice firmness — are dominance signals that appear at the precise moment of claiming indifference to dominance. The body is demonstrating the very quality the words are denying. This type of contradiction between claimed indifference and physical assertion is one of the most reliable signals that a self description is inaccurate.',
  },
  {
    id: 19,
    type: 'Workplace',
    text: 'Your boss tells you the rumours about job cuts are completely unfounded. Their voice is authoritative and their eye contact sustained throughout the statement. Their jaw carries a subtle tightness that was not present earlier in the meeting and their blink rate drops to near zero during the sentence.',
    answer: 'LIE',
    options: [
      { text: 'The rumours have foundation — the jaw tension and reduced blinking signal controlled stress about the statement being made.', isCorrect: true },
      { text: 'They are telling the truth — authoritative voice and sustained eye contact are strong honesty signals that outweigh subtle physical details.', isCorrect: false },
      { text: 'They are being firm to project confidence and reassure the team.', isCorrect: false },
      { text: 'Jaw tension and blinking patterns vary naturally and are not reliable indicators.', isCorrect: false },
    ],
    explanation: 'Authoritative voice and sustained eye contact can be deliberately adopted — experienced communicators know to maintain these signals. Jaw tension and reduced blinking are much harder to consciously control and tend to appear when someone is working hard to maintain a composed delivery under internal pressure. The combination of deliberately strong signals alongside involuntary tension signals is a pattern worth noting.',
  },
  {
    id: 20,
    type: 'Social',
    text: 'A friend says they are absolutely fine with the decision that was made without consulting them. They speak clearly with uncrossed arms. Their lips press together for a moment immediately after the word fine and one foot begins a slow tapping rhythm that was not present at any earlier point in the conversation.',
    answer: 'LIE',
    options: [
      { text: 'They are not fine — the lip compression and new foot tapping signal suppressed emotion about the decision.', isCorrect: true },
      { text: 'They are fine — uncrossed arms and clear speech are the more meaningful signals here.', isCorrect: false },
      { text: 'They are fine but feel slightly awkward discussing it.', isCorrect: false },
      { text: 'The foot tapping is a long-standing habit and the lip compression is a normal facial movement.', isCorrect: false },
    ],
    explanation: 'Lip compression immediately following a key claim is a physical suppression signal — the lips holding back what the person really wants to say. The onset of foot tapping specifically when this topic arises is a new stress outlet that was not present in the baseline. Uncrossed arms can be consciously maintained. The involuntary micro signals of lip compression and new rhythmic movement are harder to suppress and together form a reliable cluster.',
  },
]

const EXPERT_SCENARIOS = [
  {
    id: 21,
    type: 'Workplace',
    text: 'A senior colleague states they did not see the email before the decision was made. They hold steady eye contact throughout, their shoulders are relaxed and their speech is unhurried. Their response arrives with almost no gap after the question and a slight asymmetry is visible in their smile — fuller on the left side than the right.',
    answer: 'LIE',
    options: [
      { text: 'They are lying — the absence of any processing pause suggests a rehearsed answer and the asymmetric smile indicates a constructed rather than genuine expression.', isCorrect: true },
      { text: 'They are telling the truth — relaxed shoulders, steady eye contact and unhurried speech maintained throughout are a strong honesty cluster.', isCorrect: false },
      { text: 'The quick response signals confidence rather than rehearsal — hesitation would be more suspicious.', isCorrect: false },
      { text: 'They are telling the truth and naturally have an asymmetric smile.', isCorrect: false },
    ],
    explanation: 'Practised liars learn to control the obvious signals. What they cannot always control is the microstructure of genuine expression. A true smile is symmetrical and spontaneous. An asymmetric smile heavier on one side suggests conscious construction. The absence of any processing pause on a sensitive question is also significant — genuine recall takes a moment and rehearsed answers do not.',
  },
  {
    id: 22,
    type: 'Relationship',
    text: 'Your partner says they have not been feeling distant lately and everything is fine between you. Their posture is open, their voice even, and they make comfortable eye contact. But for a fraction of a second something crosses their face before the neutral expression reasserts itself, and when they say the word fine their head gives the tiniest downward movement before returning to still.',
    answer: 'LIE',
    options: [
      { text: 'They are not fine — the micro expression flash and the downward micro movement on the word fine are contradiction signals that bypass conscious control.', isCorrect: true },
      { text: 'They are telling the truth — open posture, even voice and comfortable eye contact are the dominant signals and should outweigh split second micro movements.', isCorrect: false },
      { text: 'The micro expression could reflect tiredness or a passing unrelated thought rather than deception about this specific topic.', isCorrect: false },
      { text: 'Everything is fine and the micro movements are being over-interpreted.', isCorrect: false },
    ],
    explanation: 'Micro expressions lasting under a quarter of a second are involuntary emotional leakages that occur before conscious management takes over. They reveal the true emotional state more reliably than any sustained expression. The downward micro movement on a key word is a suppressed disagreement signal — the body beginning to shake its head before the conscious mind stops it.',
  },
  {
    id: 23,
    type: 'Social',
    text: 'Someone confidently claims they have never struggled with social anxiety. They maintain strong eye contact, speak fluently and their posture is expansive. But their breathing is slightly more shallow and rapid than it was at the start of the conversation, they have touched their own wrist twice in the last minute, and there is a very faint tension visible at the outer corners of their eyes that does not match the overall relaxed expression on the rest of their face.',
    answer: 'LIE',
    options: [
      { text: 'They do struggle with social anxiety — the shallow breathing, wrist touching and periorbital tension are leaking the truth despite the controlled surface performance.', isCorrect: true },
      { text: 'They are telling the truth — strong eye contact, fluent speech and expansive posture are powerful honesty signals that outweigh the other details.', isCorrect: false },
      { text: 'The breathing and tension could reflect discomfort at being asked a personal question rather than the existence of anxiety itself.', isCorrect: false },
      { text: 'They are a confident person who happens to have some nervous physical habits that are unrelated to this claim.', isCorrect: false },
    ],
    explanation: 'The three signals — shallow breathing, self soothing wrist touch and periorbital tension — are physiological stress responses that are very difficult to consciously suppress. They appear despite a deliberately confident surface performance which requires significant effort to maintain. The fact that they are leaking through the performance rather than being present throughout the conversation makes them more significant.',
  },
  {
    id: 24,
    type: 'Workplace',
    text: 'Your manager states categorically they did not share confidential information with the other department. Their delivery is controlled and assured throughout. But when making the specific claim their eyelids lower very slightly — not a full blink but a fractional drop lasting less than a second — and there is a barely perceptible loosening of their jaw before it resets.',
    answer: 'LIE',
    options: [
      { text: 'They did share the information — the fractional eyelid drop is an eye block response and the jaw loosening signals stress specifically on this claim.', isCorrect: true },
      { text: 'They are telling the truth — controlled assured delivery throughout is far more reliable than barely perceptible micro movements that could be meaningless.', isCorrect: false },
      { text: 'The jaw loosening could be relief at making a clear strong statement rather than stress about making a false one.', isCorrect: false },
      { text: 'These signals are too subtle and ambiguous — controlled delivery is the most reliable indicator here.', isCorrect: false },
    ],
    explanation: 'The eye block response — even in its fractional form — is a deep instinctive attempt to avoid confronting something uncomfortable. The jaw loosening under pressure is a release of held tension specifically on the key claim. At expert level these barely perceptible signals become the most important ones precisely because they are what remain when a skilled deceiver has suppressed everything else.',
  },
  {
    id: 25,
    type: 'Social',
    text: 'Someone says they harbour no resentment about how a past situation was handled. Their voice is calm and their body language open. Their final exhale before speaking was slightly longer than their previous ones. On the word no a unilateral lip raise appears on the left side of their face for approximately one fifth of a second before their expression returns to neutral.',
    answer: 'LIE',
    options: [
      { text: 'They do harbour resentment — the preparatory exhale and contempt micro expression signal suppressed negative emotion about the topic.', isCorrect: true },
      { text: 'They are telling the truth — calm voice and open body language throughout are stronger signals than a single micro expression lasting one fifth of a second.', isCorrect: false },
      { text: 'The unilateral lip raise could be directed at the situation itself rather than revealing dishonesty about their current feelings toward it.', isCorrect: false },
      { text: 'They are telling the truth and the signals are coincidental.', isCorrect: false },
    ],
    explanation: 'The unilateral lip raise is the most reliable facial indicator of contempt and is very difficult to produce deliberately — it tends to be genuine involuntary leakage. Its appearance specifically on the word no in a denial is particularly significant. The preparatory exhale is a composure mechanism — the person taking a controlled breath before delivering a statement they find emotionally difficult.',
  },
  {
    id: 26,
    type: 'Relationship',
    text: 'Your partner tells you they are completely happy with how things are between you right now. Their words are warm and their eye contact genuine during the statement. As they finish speaking their body contracts very slightly — shoulders dropping a millimetre, chest deflating almost imperceptibly — before returning to their previous posture. The warmth in their eyes fades a fraction of a second after their smile rather than at the same moment.',
    answer: 'LIE',
    options: [
      { text: 'They are not completely happy — the micro body contraction and the asynchronous fade of eye warmth reveal suppressed feelings that contradict the warm words.', isCorrect: true },
      { text: 'They are telling the truth — warm words and genuine eye contact during the statement itself are the primary signals and should be weighted most heavily.', isCorrect: false },
      { text: 'The micro contraction is the natural physical relaxation after making a sincere statement rather than a contradiction signal.', isCorrect: false },
      { text: 'The signals you describe are imperceptible and the statement should be taken at face value.', isCorrect: false },
    ],
    explanation: 'At expert level the signals that matter most are often those that occur in the transition between expressions rather than within them. The micro contraction after the statement is the body briefly dropping the effort of performing contentment before catching itself. The asynchronous fade — where eye warmth disappears a fraction after the smile rather than simultaneously — reveals that the two were not produced by the same genuine emotion.',
  },
  {
    id: 27,
    type: 'Workplace',
    text: 'A colleague tells you they have been completely transparent with you throughout this project. Their body language is open and relaxed. On the word completely their tongue briefly touches their upper lip from the inside — causing a barely perceptible movement externally — and their right hand moves one centimetre toward their body before stopping.',
    answer: 'LIE',
    options: [
      { text: 'They have not been fully transparent — the internal lip touch is a self soothing oral gesture signalling stress on the key claim and the aborted hand movement is a suppressed retreat signal.', isCorrect: true },
      { text: 'They are telling the truth — open relaxed body language throughout is a much stronger signal than two barely perceptible micro movements.', isCorrect: false },
      { text: 'The hand movement is a random micro adjustment with no psychological significance.', isCorrect: false },
      { text: 'These signals are too subtle and ambiguous to support any conclusion.', isCorrect: false },
    ],
    explanation: 'The internal tongue to lip touch is an oral self soothing gesture that bypasses the usual channels of conscious body management. The aborted hand movement is equally significant — the body began a retreat movement and then stopped it, which reveals both the impulse and its suppression simultaneously.',
  },
  {
    id: 28,
    type: 'Social',
    text: 'Someone insists they genuinely like a person they have clashed with publicly in the past. They maintain steady eye contact, speak warmly and their posture is open throughout. Their voice is pitched very slightly higher than it was during earlier parts of the conversation. On the word genuinely a micro expression lasting less than one eighth of a second crosses their face before the warm expression reasserts.',
    answer: 'LIE',
    options: [
      { text: 'They do not genuinely like this person — the pitch elevation signals stress and the micro expression on the key word is an involuntary emotional leakage contradicting the warm performance.', isCorrect: true },
      { text: 'They are telling the truth — sustained eye contact, warm speech and open posture maintained throughout are powerful honesty signals.', isCorrect: false },
      { text: 'The micro expression could reflect residual negative feeling about past clashes rather than current dishonesty about their present feelings.', isCorrect: false },
      { text: 'A pitch change too small to define precisely and a sub eighth of a second expression are far too ambiguous to support a deception conclusion.', isCorrect: false },
    ],
    explanation: 'Vocal pitch elevation under stress is a physiological response that is very difficult to consciously control across a sustained performance. The micro expression on the specific word genuinely is a classic contradiction signal — the body expressing the true evaluation at the precise moment the false one is being asserted.',
  },
  {
    id: 29,
    type: 'Relationship',
    text: 'Your partner tells you that a particular person is just a friend and means nothing more. Their delivery is calm, their body language controlled with steady eye contact. Their pupils appear slightly more constricted than the ambient lighting would suggest. Their blink rate has settled to baseline after a brief elevation you noticed earlier in the conversation. A tension is visible in the muscles around their mouth that was not present when discussing other topics.',
    answer: 'LIE',
    options: [
      { text: 'The person means more than a friend — pupil constriction can signal suppressed emotional arousal, the earlier blink elevation shows stress that has now been managed, and the perioral tension reveals effort being applied to maintain the neutral expression.', isCorrect: true },
      { text: 'They are telling the truth — calm delivery, controlled body language and steady eye contact are the primary signals and far outweigh subtle physiological details.', isCorrect: false },
      { text: 'Pupil constriction has many causes including recent light exposure and the other signals are too subtle to build conclusions on.', isCorrect: false },
      { text: 'You are applying too much significance to physiological micro signals that could have dozens of innocent explanations.', isCorrect: false },
    ],
    explanation: 'At expert level the practised deceiver has learned to manage the obvious signals. What remains are the physiological responses that cannot be fully controlled. The pattern of stress signals appearing and then being managed — rather than being absent throughout — is more reliable than either signal alone.',
  },
  {
    id: 30,
    type: 'Workplace',
    text: 'A senior leader tells the team the decision was made purely on merit and personal relationships played no part. Their delivery is authoritative and their body language commanding throughout. During the statement their weight shifts very slightly onto their back foot — perhaps two centimetres — before returning to centre. On the word purely their eye contact holds for a microsecond longer than their natural rhythm before normalising.',
    answer: 'LIE',
    options: [
      { text: 'Personal relationships did play a part — the backward weight shift is a withdrawal signal and the over-corrected eye contact reveals conscious management of a signal the person knows people watch for.', isCorrect: true },
      { text: 'They are telling the truth — authoritative delivery and commanding body language maintained throughout are far stronger signals than a two centimetre weight shift and a microsecond of eye contact variation.', isCorrect: false },
      { text: 'The weight shift could be a natural postural adjustment and deliberate eye contact signals confidence rather than managed deception.', isCorrect: false },
      { text: 'You are pattern-matching coincidental micro movements into a deception narrative that the overall commanding body language does not support.', isCorrect: false },
    ],
    explanation: 'At the highest level of deception detection the most telling signals are often the corrections rather than the original responses. A person who knows that avoiding eye contact looks suspicious will over-correct toward sustained eye contact — and that over-correction reveals the management rather than the genuine response. The backward weight shift is a retreat impulse that was caught and corrected. Both signals reveal not just stress but the conscious suppression of stress signals, which at expert level is itself the most significant finding.',
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
        <Footer />
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

                <h2 className="ld-results-title">Your Score</h2>
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
        <Footer />
      </div>
    )
  }
}
