import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './PokerFace.css'

const BEGINNER_SCENARIOS = [
  {
    id: 1,
    type: 'Workplace',
    text: 'A senior executive listens as you present your proposal. She maintains a pleasant neutral expression throughout, her hands are still and her posture relaxed. She asks two polite clarifying questions in an unhurried tone. As you finish she gives a single measured nod and says she will give it careful consideration. Her eyes moved to her notepad twice during your presentation and her final exhale before speaking was noticeably longer than her previous ones.',
    options: [
      { text: 'She is genuinely interested and likely to approve', isCorrect: false },
      { text: 'She has already decided no but is being professionally polite', isCorrect: true },
      { text: 'She is undecided and genuinely needs time to consider', isCorrect: false },
      { text: 'She is interested but needs to consult someone else first', isCorrect: false },
    ],
    explanation: 'The pleasant neutral expression, still hands and polite questions are managed signals rather than genuine reactions. The eyes moving to the notepad twice signal disengagement during the presentation. The longer final exhale before speaking is a composure breath—people take this before delivering something they need to manage carefully. Together these leaked signals reveal a decision already made.',
  },
  {
    id: 2,
    type: 'Relationship',
    text: 'You tell your partner you have accepted a job offer in another city. They smile warmly and say they are happy for you and fully support the decision. Their voice is steady and their posture open. They ask one question about the start date. After you answer they look down briefly at their hands before looking back up and saying it all sounds very exciting.',
    options: [
      { text: 'They are genuinely happy and fully supportive', isCorrect: false },
      { text: 'They are deeply uncertain or worried but concealing it to support you', isCorrect: true },
      { text: 'They are hurt that you did not consult them first', isCorrect: false },
      { text: 'They are secretly relieved about the distance this will create', isCorrect: false },
    ],
    explanation: 'The warm smile, steady voice and open posture are the managed surface. The single question about a logistical detail rather than the relationship implications reveals someone who has not yet processed the full emotional reality. The brief downward look at their hands is a disengagement and processing signal. The phrase it all sounds very exciting has the quality of a constructed response rather than a spontaneous one.',
  },
  {
    id: 3,
    type: 'Social',
    text: 'You introduce your new partner to your closest friend. The friend smiles broadly, says it is wonderful to meet them and compliments your partner on something specific they are wearing. Throughout the introduction the friend maintains warm eye contact with your partner and asks two friendly questions. At one point while your partner is speaking the friend glances at you for approximately one second before returning their attention to your partner.',
    options: [
      { text: 'The friend genuinely likes your partner immediately', isCorrect: false },
      { text: 'The friend is reserving judgement and has not yet formed a view', isCorrect: false },
      { text: 'The friend has concerns about your partner but is concealing them to be polite', isCorrect: true },
      { text: 'The friend is intimidated by your partner and overcompensating with warmth', isCorrect: false },
    ],
    explanation: 'The broad smile, specific compliment and friendly questions are all socially skilled warmth that reveals nothing about genuine reaction. The one second glance at you while your partner is speaking is the key signal—it is an unconscious check in, a flicker of the genuine communication happening beneath the social surface. That glance says something to you that words are not being used to express.',
  },
  {
    id: 4,
    type: 'Workplace',
    text: 'Your manager calls you in to discuss your recent performance. She speaks warmly and acknowledges several specific things you have done well. Her body language is open and her tone positive throughout. She then says she wants to discuss some development areas and pauses before continuing. During that pause her chin lowers very slightly and she draws a slow breath before beginning the next sentence.',
    options: [
      { text: 'The positive feedback is genuine and the development areas are minor', isCorrect: false },
      { text: 'The development areas are more serious than her warm tone suggests', isCorrect: true },
      { text: 'She is nervous about giving any kind of critical feedback', isCorrect: false },
      { text: 'The positive feedback was exaggerated to soften what comes next', isCorrect: false },
    ],
    explanation: 'The warm tone and specific positive feedback may be genuine but the pause before development areas is the signal. A truly minor point does not require a preparation pause. The slight chin lower is a submission or gravity signal—the body acknowledging the weight of what is about to be said. The slow deliberate breath is the composure mechanism of someone about to say something they know will be difficult to hear.',
  },
  {
    id: 5,
    type: 'Social',
    text: 'You share some personal news with an acquaintance that you are quietly proud of. They respond immediately with enthusiasm, saying how amazing that is and how well deserved. Their smile is wide and their words come quickly. They ask no follow up questions. Within thirty seconds they have transitioned to telling you about something that happened to them recently.',
    options: [
      { text: 'They are genuinely delighted for you', isCorrect: false },
      { text: 'They are performing enthusiasm but feel indifferent or even envious', isCorrect: true },
      { text: 'They are happy for you but easily distracted', isCorrect: false },
      { text: 'They are enthusiastic but socially awkward and unsure how to continue', isCorrect: false },
    ],
    explanation: 'Immediate effusive enthusiasm with no follow up questions is a classic performance of positive feeling rather than an expression of it. Genuine delight in someone else\'s news produces curiosity and engagement with the details. The rapid transition to their own story within thirty seconds reveals where their genuine interest lies. The speed and brightness of the initial response is itself a signal.',
  },
  {
    id: 6,
    type: 'Workplace',
    text: 'You pitch a creative idea in a team meeting. A senior colleague listens with a neutral attentive expression. When you finish he says the idea has some interesting elements and that the team should definitely explore it further. His hands are flat on the table and he gives a brief nod. He then moves the meeting on to the next agenda item within about fifteen seconds.',
    options: [
      { text: 'He genuinely likes the idea and will champion it', isCorrect: false },
      { text: 'He is neutral and genuinely open to exploring it', isCorrect: false },
      { text: 'He dislikes the idea but does not want to shut it down publicly', isCorrect: true },
      { text: 'He likes parts of it but has a specific concern he has not voiced', isCorrect: false },
    ],
    explanation: 'Has some interesting elements is one of the most reliable professional dismissal phrases in existence. Hands flat on the table signal containment rather than engagement. The brief nod without any elaboration signals closure rather than opening. Moving the meeting on within fifteen seconds is the clearest signal—ideas that genuinely interest people generate discussion and energy.',
  },
  {
    id: 7,
    type: 'Relationship',
    text: 'You ask your partner whether they mind that you are going away for the weekend with friends. They say of course not, you should go and have a great time. They are doing something else while answering and glance up briefly to make eye contact as they say it before returning to what they were doing. Their tone is light and their words are simple and direct.',
    options: [
      { text: 'They genuinely do not mind and mean exactly what they say', isCorrect: false },
      { text: 'They mind more than they are showing but have decided not to say so', isCorrect: true },
      { text: 'They are distracted and have not fully processed the question', isCorrect: false },
      { text: 'They are hurt but do not want to seem controlling', isCorrect: false },
    ],
    explanation: 'The light tone and direct words are the managed surface. The key signal is what is missing rather than what is present. Someone who genuinely does not mind tends to show brief positive engagement. The brief glance up for eye contact followed by immediate return to the other activity is the minimum social acknowledgement—enough to answer without enough investment to signal genuine ease.',
  },
  {
    id: 8,
    type: 'Social',
    text: 'You are introduced to someone at a professional event who is in a significantly more senior position than you. They greet you warmly, make strong eye contact and ask what you do. As you explain your work they nod at regular intervals and say that sounds really interesting. Their body is angled toward you and they hold the conversation for approximately two minutes before being called away by someone else.',
    options: [
      { text: 'They were genuinely interested in you and your work', isCorrect: false },
      { text: 'They were being professionally courteous and felt no particular interest', isCorrect: true },
      { text: 'They were interested but too busy to continue the conversation', isCorrect: false },
      { text: 'They were assessing whether you might be useful to them professionally', isCorrect: false },
    ],
    explanation: 'Warm greeting, strong eye contact and a polite question are the standard social toolkit of someone who is professionally skilled at making everyone feel acknowledged. The regular nodding rather than responsive nodding is a management signal rather than genuine engagement. That sounds really interesting is a social holding phrase that commits to nothing. Two minutes is the professional courtesy conversation length.',
  },
  {
    id: 9,
    type: 'Workplace',
    text: 'You ask a colleague whether they submitted the expenses claim they said they would handle for the team. They look up from their screen, make direct eye contact and say yes they sent it through yesterday. They hold the eye contact for a moment after answering before returning to their screen. Their voice does not waver and their expression does not change.',
    options: [
      { text: 'They submitted the claim and are telling the truth', isCorrect: false },
      { text: 'They did not submit it but have prepared for this question', isCorrect: true },
      { text: 'They submitted it but are unsure it went through correctly', isCorrect: false },
      { text: 'They are telling the truth but find the question slightly accusatory', isCorrect: false },
    ],
    explanation: 'The direct eye contact, steady voice and unchanged expression are exactly what truthfulness looks like but they are also exactly what a prepared lie looks like. The held eye contact after answering before returning to the screen is a checking behaviour—an unconscious monitoring of whether the answer has been accepted. This reveals management of the interaction rather than simple truthful communication.',
  },
  {
    id: 10,
    type: 'Social',
    text: 'You show a close friend something creative you have made and are privately very proud of. They look at it carefully for several seconds. They then say it is really good and that you should be proud of it. Their voice is warm and their words are positive. They do not ask any questions about it or look at it again after the initial viewing.',
    options: [
      { text: 'They genuinely like it and mean what they say', isCorrect: false },
      { text: 'They think it is good but not as exceptional as you clearly feel it is', isCorrect: true },
      { text: 'They do not like it but are being kind', isCorrect: false },
      { text: 'They like it but feel slightly competitive about your creative work', isCorrect: false },
    ],
    explanation: 'This scenario tests a subtle but important distinction between genuine enthusiasm and warm support that falls slightly short of genuine enthusiasm. The careful several second viewing suggests real engagement rather than dismissal. The positive words and warm tone suggest genuine goodwill rather than performed kindness. But the absence of any questions and the fact they do not return to look at it again reveals that it did not ignite genuine curiosity or excitement.',
  },
]

const INTERMEDIATE_SCENARIOS = [
  {
    id: 11,
    type: 'Workplace',
    text: 'You present quarterly results that are significantly below target. Your director listens with a focused expression, asking two specific questions about the methodology behind the numbers. When you finish he leans back slightly, says the numbers give him a lot to think about and that he appreciates your transparency. His voice remains measured throughout. As he speaks his right thumb moves in a slow repetitive circle against his index finger beneath the table edge and his final glance before dismissing you goes to the window rather than back to you.',
    options: [
      { text: 'He is more concerned than his measured tone suggests and is already thinking about consequences', isCorrect: true },
      { text: 'He is processing the information carefully and genuinely appreciates the transparency as stated', isCorrect: false },
      { text: 'He is disappointed but has already decided the numbers are not your fault', isCorrect: false },
      { text: 'He is calm because he already knew the results before the meeting', isCorrect: false },
    ],
    explanation: 'The measured tone and specific methodology questions are the managed surface of a skilled professional. The repetitive thumb movement beneath the table edge is a self soothing gesture hidden from view, the concealment of the gesture itself reveals the awareness of its signal. The final glance to the window rather than back to you is a disengagement signal, the eyes seeking distance from the interaction as the mind moves to what comes next.',
  },
  {
    id: 12,
    type: 'Relationship',
    text: 'Your partner returns from a social event you did not attend. They describe the evening warmly, mentioning several people by name and recounting a funny moment with natural animation. Their body is oriented toward you and they make comfortable eye contact throughout. As they finish speaking they add that it was nothing special really, just a normal evening out, and reach for their phone to check it briefly before putting it down again.',
    options: [
      { text: 'The evening was more significant to them than they want you to know and the qualifier was an attempt to reduce your interest in it', isCorrect: true },
      { text: 'They genuinely enjoyed a normal evening and the phone check is an unrelated habit', isCorrect: false },
      { text: 'They are tired and the qualifier reflects genuine anticlimax after the social energy of the event', isCorrect: false },
      { text: 'They feel guilty for having enjoyed themselves without you and are downplaying it to be considerate', isCorrect: false },
    ],
    explanation: 'The warm natural account with specific names and genuine animation is consistent with a genuine positive experience. The qualifier at the end is the tell. Genuine accounts of normal evenings do not require retroactive minimising. The addition of this qualifier after an animated description is a conscious reduction of significance, an attempt to lower your interest in asking more questions.',
  },
  {
    id: 13,
    type: 'Social',
    text: 'You are at a dinner party and make a comment about a topic you feel strongly about. The person opposite you nods slowly and says that is a really interesting perspective and that there is definitely something in what you are saying. Their expression remains pleasantly engaged. They hold their wine glass with both hands throughout your exchange and their next comment shifts the conversation to a related but distinctly different aspect of the topic.',
    options: [
      { text: 'They disagree with your view but have chosen not to say so in the social context', isCorrect: true },
      { text: 'They are genuinely open to your perspective and are processing it thoughtfully before forming their own view', isCorrect: false },
      { text: 'They agree with part of what you said and are building on it by exploring a related angle', isCorrect: false },
      { text: 'They find the topic uncomfortable for personal reasons unrelated to your specific view', isCorrect: false },
    ],
    explanation: 'There is definitely something in what you are saying is a masterclass in polite disagreement, it acknowledges without agreeing and commits to nothing. Holding the wine glass with both hands is a self containment gesture, the hands holding something rather than gesturing freely, which would be natural if genuine engagement were present. The shift to a related but different aspect of the topic is the social move of someone changing the subject without appearing to.',
  },
  {
    id: 14,
    type: 'Workplace',
    text: 'You ask a senior colleague for their honest opinion of a presentation you gave. They pause briefly, then say you have clearly put a lot of work into it and that the structure was very clear. They maintain good eye contact and speak with apparent warmth. They add that there are always ways to develop these things further and that they would be happy to share some thoughts if you would find that useful.',
    options: [
      { text: 'The presentation was weaker than they are indicating and the offer to share thoughts is a diplomatic way of saying there is significant room for improvement', isCorrect: true },
      { text: 'The feedback is genuinely positive and the offer reflects their interest in supporting your development', isCorrect: false },
      { text: 'They liked the presentation but are being cautious about creating unrealistic expectations', isCorrect: false },
      { text: 'They are being appropriately measured because they know you are sensitive to criticism', isCorrect: false },
    ],
    explanation: 'You have clearly put a lot of work into it and the structure was very clear are both observations about effort and form rather than assessments of quality or impact, a skilled communicator praises what they can genuinely praise without saying the thing they cannot. There are always ways to develop these things further is a universal truth used here as a specific signal. The offer to share some thoughts framed as being useful to you rather than as a natural response to a strong presentation is the tell.',
  },
  {
    id: 15,
    type: 'Social',
    text: 'You tell a friend you have started a new creative project you are genuinely excited about. They respond with warmth, saying that sounds amazing and asking one question about the project. After you answer they say you will have to keep them updated as it develops. Their eye contact is good and their tone is positive throughout. While you were speaking they gave three evenly spaced nods.',
    options: [
      { text: 'They are being supportive but feel less interest in the project than their words suggest', isCorrect: true },
      { text: 'They are genuinely interested and the request to keep them updated confirms authentic engagement', isCorrect: false },
      { text: 'They are interested but do not want to ask too many questions in case it seems intrusive', isCorrect: false },
      { text: 'They are genuinely enthusiastic but are not a naturally expressive person', isCorrect: false },
    ],
    explanation: 'The single question followed by you will have to keep them updated is a socially graceful way of expressing support without genuine curiosity, it delegates further information to future updates rather than seeking more now. The three evenly spaced nods are the clearest signal, genuine engaged listening produces irregular responsive nodding that reacts to specific things said. Evenly spaced nodding is a management behaviour, the person maintaining the appearance of engagement at regular intervals rather than responding to content.',
  },
  {
    id: 16,
    type: 'Workplace',
    text: 'Your team member tells you they are completely on top of their current workload and managing everything comfortably. They make steady eye contact and speak clearly. As they finish the sentence they press their lips together briefly before relaxing them and they shift their weight very slightly onto their back foot before settling again.',
    options: [
      { text: 'They are struggling more than they are saying and the statement is at least partially an attempt to manage your perception', isCorrect: true },
      { text: 'They are telling the truth and the physical micro movements are normal variations with no significance given the otherwise clean delivery', isCorrect: false },
      { text: 'They are managing but are anxious about one specific element they have chosen not to mention', isCorrect: false },
      { text: 'They are on top of the work but find the check in question slightly patronising which explains the micro tension', isCorrect: false },
    ],
    explanation: 'Steady eye contact and clear speech are the managed surface, a team member who knows what signals to maintain in front of a manager. The lip compression immediately after the statement is a suppression signal, the lips briefly holding back what the person does not want to say. The backward weight shift before resettling is a withdrawal impulse, the body wanting to create distance from the claim before the conscious mind stops it.',
  },
  {
    id: 17,
    type: 'Relationship',
    text: 'You ask your partner how they feel about spending the holidays with your family this year. They say they are looking forward to it and that it will be really nice. Their voice is warm and they make eye contact as they say it. They then immediately suggest you should confirm numbers with your family soon and begin thinking about practical arrangements.',
    options: [
      { text: 'They have mixed or negative feelings about the holiday but have decided not to express them and are using practical focus to close the topic', isCorrect: true },
      { text: 'They are genuinely looking forward to it and the practical focus reflects their natural organisational instinct', isCorrect: false },
      { text: 'They are neutral about it but do not want to seem ungrateful so are performing mild enthusiasm', isCorrect: false },
      { text: 'They are happy about it but want to ensure you take responsibility for the planning', isCorrect: false },
    ],
    explanation: 'It will be really nice is a notably mild expression of enthusiasm for something described as looking forward to. The immediate pivot to practical arrangements is the tell, focusing on logistics is a way of moving through an emotionally uncomfortable topic efficiently. It closes the emotional conversation by opening a practical one. People who are genuinely enthusiastic about plans tend to dwell in the positive feeling briefly before moving to practicalities.',
  },
  {
    id: 18,
    type: 'Social',
    text: 'You mention to an acquaintance that you have recently been promoted. They congratulate you immediately and say that is fantastic news and very well deserved. Their smile is wide. They then ask whether the new role comes with more travel, and when you confirm it does they say that must be exciting before the conversation moves on naturally.',
    options: [
      { text: 'They feel some envy or competitive feeling about the promotion but are concealing it effectively behind socially correct enthusiasm', isCorrect: true },
      { text: 'They are genuinely pleased for you and the travel question reflects natural curiosity about what the new role involves', isCorrect: false },
      { text: 'The congratulations are completely genuine and the travel question is simply making conversation', isCorrect: false },
      { text: 'They are happy for you but the promotion has reminded them of their own career situation which they are privately processing', isCorrect: false },
    ],
    explanation: 'Very well deserved from an acquaintance who has limited knowledge of your work performance is a social formula rather than a genuine assessment, they cannot actually know whether it is deserved. The width of the smile without corresponding eye involvement is a performance signal. The pivot to a practical question about travel rather than questions about the role itself or genuine curiosity about what you will be doing reveals limited real interest in your achievement.',
  },
  {
    id: 19,
    type: 'Workplace',
    text: 'You propose a significant change to a process your colleague has been responsible for developing over the past year. They listen carefully and say they think it is worth exploring and that you raise some valid points. Their posture is open and their tone collegial. As you speak they make notes. When you finish they say they would need to think about the implications carefully and will come back to you.',
    options: [
      { text: 'They are resistant to the change and feel defensive about their existing process but are managing these reactions professionally', isCorrect: true },
      { text: 'They are genuinely open to the proposal and the careful response reflects their thorough professional approach to any significant change', isCorrect: false },
      { text: 'They agree the change is needed but are uncertain about the timing and want to think through implementation', isCorrect: false },
      { text: 'They like parts of the proposal but have a specific objection they are not yet ready to voice', isCorrect: false },
    ],
    explanation: 'It is worth exploring and you raise some valid points are professional acknowledgement phrases that stop well short of genuine engagement. The note taking during your proposal can signal genuine interest or the preparation of a detailed rebuttal. The need to think about the implications carefully before coming back is the tell, someone genuinely open to a proposal tends to engage with it in the room, asking questions and exploring the detail.',
  },
  {
    id: 20,
    type: 'Social',
    text: 'You share that you and your partner have decided not to have children. The person you are speaking with says that is a completely valid choice and that everyone has to decide what is right for them. Their words are open and their tone is measured and non judgmental. They maintain eye contact throughout. After a brief pause they ask whether you have a dog.',
    options: [
      { text: 'They hold a different personal view about the choice but are concealing it behind an expression of tolerance they have learned to deploy in these conversations', isCorrect: true },
      { text: 'They are genuinely non judgmental about the choice and the question about the dog is simply a natural conversational move to something positive', isCorrect: false },
      { text: 'They are non judgmental but feel slightly awkward and are changing the subject to relieve the social tension', isCorrect: false },
      { text: 'They are genuinely open minded and curious about your life more broadly which is why they ask about the dog', isCorrect: false },
    ],
    explanation: 'That is a completely valid choice and everyone has to decide what is right for them is a formulation that reveals the existence of the judgment it is denying, someone who genuinely feels no judgment does not need to explicitly validate the choice as valid. The measured tone and maintained eye contact are the managed surface of someone who has learned to respond to this topic in a socially acceptable way. The pivot to whether you have a dog is the tell, it is a topic change dressed as curiosity, moving away from a subject the person finds uncomfortable.',
  },
]

const EXPERT_SCENARIOS = [
  {
    id: 21,
    type: 'Workplace',
    text: 'You inform your manager that you have received an offer from a competitor and are considering it seriously. She thanks you for telling her, says the company values you enormously and that she would like to discuss what might make you want to stay. Her voice is warm and unhurried. Her posture is open and she maintains comfortable eye contact throughout. Her response came with a natural conversational pause and her expression did not visibly change when you delivered the news. Her hands which had been loosely on the desk moved approximately one centimetre toward her body before returning to their original position.',
    options: [
      { text: 'She was more surprised and concerned than her composed response revealed and the hand movement was a suppressed reaction to unwelcome news', isCorrect: true },
      { text: 'She was genuinely calm because she has contingency plans for this situation and the composed response is authentic', isCorrect: false },
      { text: 'She was surprised but has handled enough of these conversations to respond with genuine composure rather than managed composure', isCorrect: false },
      { text: 'She already knew about the offer through another channel and the composed response reflects foreknowledge', isCorrect: false },
    ],
    explanation: 'At expert level the managed signals are near perfect, warm tone, open posture, comfortable eye contact and a natural pause all appear exactly as genuine calm would appear. The one centimetre hand movement toward the body is the only leaked signal, a suppressed withdrawal or self protective impulse that began and was stopped before completing. Because it was caught and stopped rather than expressed it reveals both the genuine reaction and the skill of the concealment.',
  },
  {
    id: 22,
    type: 'Relationship',
    text: 'You tell your partner you have been offered an opportunity that would require you to work significantly longer hours for the next six months. They listen carefully and say they support you completely and that six months is not that long in the scheme of things. Their voice is warm and their words are generous. They make eye contact throughout the conversation. When they finish speaking the inner corners of their eyebrows rise very slightly for approximately one third of a second before their expression returns to neutral and they ask what you need from them to make it work.',
    options: [
      { text: 'They are genuinely supportive but are concealing real worry or sadness about the impact on the relationship that they do not want to burden you with', isCorrect: true },
      { text: 'They are completely fine with it and the eyebrow movement is a natural expression of the thoughtfulness with which they are engaging with what you have told them', isCorrect: false },
      { text: 'They support the decision but have a specific concern about one practical aspect that they have decided not to raise yet', isCorrect: false },
      { text: 'They are performing support while privately feeling resentful about the impact on their own plans', isCorrect: false },
    ],
    explanation: 'The warm words and generous framing are genuine, this person genuinely supports you. The inner brow raise lasting one third of a second is the signal that genuine support does not fully capture the emotional reality. The inner brow raise is one of the most difficult facial movements to produce voluntarily and one of the most reliable indicators of genuine sadness or concern leaking through a managed expression. Its appearance for a fraction of a second before the return to warm neutral reveals the emotional cost being absorbed behind the supportive surface.',
  },
  {
    id: 23,
    type: 'Social',
    text: 'You are introduced to someone whose professional reputation significantly precedes them. They greet you warmly and with apparent ease. Their body language is relaxed and their conversation natural. They remember your name and use it once in the first two minutes. At one point during a lull in the conversation they glance briefly at a point just past your left shoulder before returning to full eye contact with you. Their overall presence is polished and effortless.',
    options: [
      { text: 'They are scanning the room for someone more relevant to speak to while maintaining the appearance of full engagement with you', isCorrect: true },
      { text: 'They are genuinely engaged with you and the glance is a natural momentary distraction that everyone experiences in busy social environments', isCorrect: false },
      { text: 'They are comfortable and confident in the interaction and the glance reflects their natural ease in social environments rather than any evaluation of you', isCorrect: false },
      { text: 'They find you interesting but are also keeping an eye on someone else they need to speak to for a professional reason unrelated to their interest in you', isCorrect: false },
    ],
    explanation: 'The warmth, ease, remembered name and polished presence are the hallmarks of someone extremely skilled at social performance, at this level genuine and performed engagement are almost indistinguishable. The glance past the left shoulder during a conversational lull is the expert tell, the lull itself was allowed to exist because the person was briefly evaluating the room rather than maintaining the momentum of genuine interest. Someone fully engaged with a conversation fills lulls naturally.',
  },
  {
    id: 24,
    type: 'Workplace',
    text: 'You present a business case you have spent three weeks preparing. The decision maker listens without interruption, his expression attentive and his posture upright. When you finish he says it is a well constructed case and that you have clearly thought it through carefully. He then says he will need to review it with his team before coming back to you with a decision. His vocal quality throughout has been even and his engagement apparently genuine. As he stood to conclude the meeting his weight shifted onto his leading foot toward the door approximately two seconds before he offered his hand to shake.',
    options: [
      { text: 'He has already formed a negative view and the review process is a professional delay rather than genuine deliberation', isCorrect: true },
      { text: 'He is genuinely undecided and the review with his team is a standard and necessary part of his decision process', isCorrect: false },
      { text: 'He is positively disposed toward the proposal but needs team alignment before committing which is why the review is needed', isCorrect: false },
      { text: 'He liked the presentation but has one significant concern he needs to discuss privately with his team before raising it with you', isCorrect: false },
    ],
    explanation: 'A well constructed case and you have clearly thought it through carefully are process compliments rather than content compliments, they acknowledge the quality of the work without engaging with its substance or revealing any genuine reaction to what it proposes. At expert level this distinction is the primary signal available. The weight shift toward the door two seconds before offering the handshake is the micro tell, the body moving toward exit before the social conclusion of the meeting has been performed.',
  },
  {
    id: 25,
    type: 'Relationship',
    text: 'Several months after a difficult period in your relationship you ask your partner directly whether they have fully forgiven you for something that happened. They look at you steadily and say yes, completely, and that they made a decision to move forward and they mean it. Their voice is clear and their eye contact direct and sustained. They reach across and briefly touch your hand as they say it. After the touch they settle back slightly and their breathing which you notice has been slightly shallower than usual continues at the same pace rather than deepening as it would after a genuinely resolved statement.',
    options: [
      { text: 'They have made a genuine cognitive decision to forgive but the emotional resolution is not yet complete and the body is revealing what the words and gesture are designed to conceal', isCorrect: true },
      { text: 'They have fully forgiven you and the direct eye contact, clear voice and physical touch together constitute a reliable cluster of genuine resolution signals', isCorrect: false },
      { text: 'They have forgiven you but remain slightly guarded which is a normal and healthy response rather than a sign of unresolved feeling', isCorrect: false },
      { text: 'They are telling the truth about forgiving you but the shallow breathing reflects anxiety about having this conversation rather than unresolved feeling about the original event', isCorrect: false },
    ],
    explanation: 'At expert level the signals of genuine resolution and managed resolution are nearly identical. The direct eye contact, clear voice and physical touch are all consistent with genuine sincerity, this person is sincerely trying to forgive and sincerely wants you to know it. The shallow breathing that continues unchanged after the statement is the physiological tell. Genuine emotional resolution tends to produce a physical release, a deeper breath, a relaxation of held tension.',
  },
  {
    id: 26,
    type: 'Social',
    text: 'You run into someone you know who you are aware recently experienced a significant personal loss. They greet you warmly and when you ask how they are doing they say they are doing well, taking it one day at a time and that they have a lot of good people around them. Their voice is steady and their manner composed. They ask about you and engage genuinely with your answer. You notice that during the exchange they never once initiate mention of the loss themselves and when you reference it briefly their response is immediate, complete and practiced sounding before they redirect back to you.',
    options: [
      { text: 'They are managing their grief carefully in social interactions and the composed practiced response is a shield that allows them to function publicly while protecting something that is not yet ready to be shared', isCorrect: true },
      { text: 'They are genuinely doing as well as they say and have strong enough support around them that they are managing the loss without concealing distress', isCorrect: false },
      { text: 'They are not ready to discuss the loss with this particular person but are otherwise managing genuinely well', isCorrect: false },
      { text: 'They are using social interaction deliberately as a healthy way of maintaining normality during a difficult period rather than avoiding the grief', isCorrect: false },
    ],
    explanation: 'This scenario tests empathy as much as body language reading. The steady voice, warm engagement and genuine interest in your life are all real, this person has developed real skill at social functioning during personal difficulty. The tell is the practiced quality of the response to your brief reference to the loss, a response that arrives too quickly, is too complete and redirects too efficiently. Genuine responses to references to fresh grief tend to have a slightly uneven quality.',
  },
  {
    id: 27,
    type: 'Workplace',
    text: 'You are in a negotiation and make what you consider to be your strongest offer. The person opposite you pauses for three seconds, then says that is a more interesting position than they expected and that they appreciate you moving on it. They lean forward slightly as they say this. Their expression is focused and engaged. As they finish speaking their tongue makes a barely perceptible movement to the inner surface of their upper lip, invisible externally, before they ask one clarifying question about delivery timelines.',
    options: [
      { text: 'The offer has landed better than they are indicating and they are managing a positive reaction to maintain negotiating leverage', isCorrect: true },
      { text: 'They are genuinely interested but the more interesting position language is a standard negotiating response that should not be over read as concealed enthusiasm', isCorrect: false },
      { text: 'They are satisfied with the offer and the lean and engagement signal that the negotiation is moving toward conclusion', isCorrect: false },
      { text: 'They are more interested than expected but still have a genuine concern about delivery timelines which is why that specific question follows', isCorrect: false },
    ],
    explanation: 'More interesting than they expected and the lean forward are both signals that something has shifted, but at expert level the question is whether they are revealing or managing the shift. The inner lip touch is the expert tell, an oral self soothing gesture that occurs below the threshold of visible expression, a way of managing an involuntary physical response to information that is better than anticipated. The subsequent question about delivery timelines is a professional discipline move, asking a practical question rather than revealing enthusiasm keeps the negotiating position intact.',
  },
  {
    id: 28,
    type: 'Relationship',
    text: 'You ask your partner whether they like the major purchase you have just made without consulting them first. They say yes, they really do like it, and that it suits the space perfectly. Their voice is warm and their words specific and positive. They smile as they say it. You notice that the smile involves their mouth fully but that the movement around their eyes is approximately thirty percent less than their typical genuine smile and that the overall expression resolves slightly faster than their natural smile tends to fade.',
    options: [
      { text: 'They do not dislike the purchase as much as they might, their response has genuine elements, but the full emotional reality includes reservation or mild frustration that the smile is not quite concealing', isCorrect: true },
      { text: 'They genuinely like it and the smile variations you notice are within the normal range of natural expression variation rather than signals of concealment', isCorrect: false },
      { text: 'They like it aesthetically but feel frustrated about not being consulted and the smile is genuine about the object while concealing the feeling about the process', isCorrect: false },
      { text: 'They are performing more enthusiasm than they feel because they know the purchase cannot be returned and want to make you feel good about it', isCorrect: false },
    ],
    explanation: 'At expert level reading requires calibration rather than pattern matching. This person knows their partner well enough to notice a thirty percent reduction in periorbital involvement in a smile, a difference invisible to most observers. The faster resolution of the smile, fading more quickly than genuine smiles tend to, is the secondary signal. Together these two calibrated observations reveal a smile that is partly genuine, the purchase is not disliked, and partly managed, something else is present that the smile is partially but not fully concealing.',
  },
  {
    id: 29,
    type: 'Social',
    text: 'You are at a professional event and notice someone across the room who you have reason to believe dislikes you. They catch your eye and immediately cross the room to greet you warmly. They say it is great to see you and that you look well. Their handshake is firm and their eye contact direct. Throughout your brief exchange their voice is consistently warm and their body remains oriented toward you. As they leave they say they hope to catch up properly soon. During the entire exchange you notice nothing that contradicts the warmth of the surface performance.',
    options: [
      { text: 'The performance is skilled enough that the surface signals are not available to contradict it. What you are observing is a genuinely expert social concealment with no reliable leaked signals in this exchange', isCorrect: true },
      { text: 'Your belief that they dislike you is mistaken and what you are observing is genuine warmth rather than performance', isCorrect: false },
      { text: 'They dislike you but the warmth has genuine professional courtesy elements, it is not pure performance', isCorrect: false },
      { text: 'They dislike you but have decided to actively manage the relationship for strategic professional reasons', isCorrect: false },
    ],
    explanation: 'This scenario tests intellectual honesty as much as reading skill. The expert answer acknowledges that some people are skilled enough to produce a warm surface performance with no leaked signals available in a brief public exchange. The absence of tells is not proof of genuine warmth, it can be proof of genuine skill. The correct reading is not that the warmth is genuine but that this exchange does not provide enough information to determine which it is.',
  },
  {
    id: 30,
    type: 'Workplace',
    text: 'Your most reliable team member tells you they are fully committed to the project and are excited about where it is heading. Their words are specific and their enthusiasm sounds genuine. They have delivered consistently throughout the project. Their body language is open and their eye contact good. You have worked with them long enough to know their baseline well. The only thing you notice is that they used the word excited which is not a word you have heard them use before in a professional context and that after speaking they exhaled once through their nose rather than their mouth as they typically do.',
    options: [
      { text: 'Something has changed in their genuine level of commitment or enthusiasm and the language and breathing anomalies reveal a managed performance of a state that is no longer fully present', isCorrect: true },
      { text: 'They are genuinely committed and excited and the language and breathing variations are within the normal range of human expression rather than signals of concealment', isCorrect: false },
      { text: 'They are committed to the project but excited is being used to manage your perception upward rather than to conceal a decline in genuine engagement', isCorrect: false },
      { text: 'They are committed but are managing stress about a specific aspect of the project that they do not want to raise yet', isCorrect: false },
    ],
    explanation: 'At expert level with someone you know well the most important signals are anomalies, departures from the established baseline of someone you have observed over time. A word choice that has never appeared before in a professional context from someone who uses language consistently is a departure from baseline. A nasal exhale from someone who typically exhales through the mouth is a physiological anomaly. Neither signal is conclusive in isolation. Together in the context of long familiarity they reveal the place where the managed performance departs from genuine feeling.',
  },
]

const LEVELS = [
  { id: 'beginner', name: 'Beginner', scenarios: BEGINNER_SCENARIOS },
  { id: 'intermediate', name: 'Intermediate', scenarios: INTERMEDIATE_SCENARIOS },
  { id: 'expert', name: 'Expert', scenarios: EXPERT_SCENARIOS },
]

const ICON_MAP = {
  Workplace: '💼',
  Relationship: '❤️',
  Social: '👤',
}

const AnimatedEye = ({ state = 'intro' }) => {
  const [blink, setBlink] = useState(false)
  const [pupilScale, setPupilScale] = useState(1)
  const [eyeOpen, setEyeOpen] = useState(state === 'results' ? 0 : 1)

  useEffect(() => {
    if (state === 'intro') {
      const blinkInterval = setInterval(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 300)
      }, 3000)

      const pupilInterval = setInterval(() => {
        setPupilScale(1.2)
        setTimeout(() => setPupilScale(1), 1500)
      }, 1500)

      return () => {
        clearInterval(blinkInterval)
        clearInterval(pupilInterval)
      }
    } else if (state === 'results') {
      setEyeOpen(0)
      const openInterval = setInterval(() => {
        setEyeOpen((prev) => {
          if (prev < 1) return prev + 0.05
          return 1
        })
      }, 50)
      return () => clearInterval(openInterval)
    }
  }, [state])

  const eyeHeightScale = state === 'results' ? eyeOpen : blink ? 0.1 : 1

  return (
    <svg viewBox="0 0 200 120" className="pf-eye">
      <ellipse cx="100" cy="60" rx="80" ry={50 * eyeHeightScale} fill="none" stroke="#7dd3fc" strokeWidth="3" />
      <circle cx="100" cy="60" r={30 * pupilScale} fill="#7dd3fc" />
      <circle cx="105" cy="55" r={8 * pupilScale * 0.3} fill="#ffffff" />
    </svg>
  )
}

export default function PokerFace() {
  const [state, setState] = useState('levelSelect')
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
    const savedUnlocked = localStorage.getItem('pokerFaceUnlocked')
    const savedScores = localStorage.getItem('pokerFaceScores')
    if (savedUnlocked) setUnlockedLevels(JSON.parse(savedUnlocked))
    if (savedScores) setBestScores(JSON.parse(savedScores))
  }, [])

  function handleSelectLevel(levelId) {
    if (!unlockedLevels.includes(levelId)) return
    setShareSuccess(false)
    setAnswers({})
    setCurrentScenario(0)
    setSelectedLevel(levelId)
    setState('intro')
  }

  function handleStart() {
    setState('scenario')
  }

  function handleAnswer(selectedIndex) {
    if (revealingAnswer) return

    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const correct = scenario.options[selectedIndex].isCorrect

    setUserAnswer(selectedIndex)
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
    setState('scenario')
  }

  function handleLevelSelect() {
    setState('levelSelect')
  }

  useEffect(() => {
    if (state === 'results') {
      const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
      const score = Object.values(answers).reduce((a, b) => a + b, 0) * 5

      const newScores = { ...bestScores }
      if (!newScores[selectedLevel] || score > newScores[selectedLevel]) {
        newScores[selectedLevel] = score
        setBestScores(newScores)
        localStorage.setItem('pokerFaceScores', JSON.stringify(newScores))
      }

      const levelIdx = LEVELS.findIndex(l => l.id === selectedLevel)
      const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null

      if (score >= 40 && nextLevel && !unlockedLevels.includes(nextLevel.id)) {
        const newUnlocked = [...unlockedLevels, nextLevel.id]
        setUnlockedLevels(newUnlocked)
        localStorage.setItem('pokerFaceUnlocked', JSON.stringify(newUnlocked))
      }
    }
  }, [state])

  async function handleShare() {
    const score = Object.values(answers).reduce((a, b) => a + b, 0)
    const levelName = LEVELS.find(l => l.id === selectedLevel).name
    const shareText = `I scored ${score} out of 10 on ${levelName} in the BodyLanguageIQ Poker Face Challenge. Can you see through a poker face? bodylanguageiq.com/poker-face`

    try {
      await navigator.clipboard.writeText(shareText)
      setShareSuccess(true)
      setTimeout(() => setShareSuccess(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  function getRating(score) {
    if (score === 9 || score === 10) {
      return {
        title: 'Human Polygraph',
        text: 'You see through even the most controlled surfaces. An exceptionally rare skill shared by fewer than 5 percent of people.',
      }
    }
    if (score === 7 || score === 8) {
      return {
        title: 'Sharp Reader',
        text: 'Most people cannot hide from you for long. You catch what others miss.',
      }
    }
    if (score === 5 || score === 6) {
      return {
        title: 'Average Observer',
        text: 'You catch the obvious tells but skilled concealers get past you.',
      }
    }
    if (score === 3 || score === 4) {
      return {
        title: 'Surface Reader',
        text: 'You tend to take what you see at face value. A poker face fools you more often than not.',
      }
    }
    return {
      title: 'Easily Deceived',
      text: 'A skilled poker face fools you almost every time. Time to sharpen your skills.',
    }
  }

  // LEVEL SELECT STATE
  if (state === 'levelSelect') {
    return (
      <div className="pf-page-wrapper">
        <NavBar />
        <div className="pf-container">
          <main className="pf-main">
            <div className="pf-level-select">
              <h2 className="pf-level-title">The Poker Face Challenge</h2>
              <p className="pf-level-subtitle">Choose your difficulty level</p>

              <div className="pf-levels-grid">
                {LEVELS.map((level, idx) => {
                  const isUnlocked = unlockedLevels.includes(level.id)
                  const bestScore = bestScores[level.id] || 0
                  const prevLevel = idx > 0 ? LEVELS[idx - 1] : null

                  return (
                    <button
                      key={level.id}
                      className={`pf-level-card ${isUnlocked ? 'pf-level-card--unlocked' : 'pf-level-card--locked'}`}
                      onClick={() => handleSelectLevel(level.id)}
                      disabled={!isUnlocked}
                    >
                      <div className="pf-level-card-header">
                        <h2 className="pf-level-name">{level.name}</h2>
                        {!isUnlocked && <span className="pf-lock-icon">🔒</span>}
                      </div>
                      {isUnlocked ? (
                        <p className="pf-level-desc">
                          {bestScore > 0 ? `Best score: ${bestScore} out of 50` : 'Play now'}
                        </p>
                      ) : (
                        <p className="pf-level-desc">
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

  // INTRO STATE
  if (state === 'intro') {
    return (
      <div className="pf-page-wrapper">
        <NavBar />
        <div className="pf-container">
          <main className="pf-main">
            <div className="pf-intro">
              <div className="pf-eye-container">
                <AnimatedEye state="intro" />
              </div>
              <h1 className="pf-heading">The Poker Face Challenge</h1>
              <p className="pf-subtitle">They are hiding something. Can you see it?</p>
              <p className="pf-description">
                10 scenarios. 10 people trying not to be read. Most people only see the surface. Prove you can see beneath it.
              </p>
              <button className="pf-button pf-button--primary" onClick={handleStart}>
                Start Challenge
              </button>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }

  // SCENARIO STATE
  if (state === 'scenario') {
    const scenarios = LEVELS.find(l => l.id === selectedLevel).scenarios
    const scenario = scenarios[currentScenario]
    const progress = ((currentScenario + 1) / scenarios.length) * 100

    return (
      <div className="pf-page-wrapper">
        <NavBar />
        <div className="pf-container">
          <main className="pf-main">
            <div className="pf-scenario">
              <div className="pf-tension-row">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`pf-eye-icon ${i < currentScenario ? 'pf-eye-icon--filled' : ''}`}>
                    👁
                  </div>
                ))}
              </div>

              <div className="pf-case-card">
                <div className="pf-case-header">
                  <div className="pf-case-number">CASE {String(currentScenario + 1).padStart(2, '0')}</div>
                  <div className="pf-case-type">
                    <span className="pf-case-icon">{ICON_MAP[scenario.type]}</span>
                  </div>
                </div>

                {!revealingAnswer && (
                  <>
                    <div className="pf-case-text">{scenario.text}</div>

                    <div className="pf-options">
                      {scenario.options.map((option, idx) => (
                        <button
                          key={idx}
                          className="pf-option-card"
                          onClick={() => handleAnswer(idx)}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {revealingAnswer && (
                  <div className="pf-reveal">
                    <div className={`pf-result-glow ${isCorrect ? 'pf-result-glow--correct' : 'pf-result-glow--wrong'}`} />

                    <div className="pf-reveal-options">
                      {scenario.options.map((option, idx) => (
                        <div
                          key={idx}
                          className={`pf-option-card pf-option-card--reveal ${
                            idx === userAnswer
                              ? isCorrect
                                ? 'pf-option-card--correct'
                                : 'pf-option-card--wrong'
                              : option.isCorrect
                              ? 'pf-option-card--correct'
                              : ''
                          }`}
                        >
                          {option.text}
                        </div>
                      ))}
                    </div>

                    <div className="pf-analysis">
                      <h3 className="pf-analysis-title">Analysis</h3>
                      <p className="pf-analysis-text">{scenario.explanation}</p>
                    </div>

                    <button className="pf-button pf-button--primary" onClick={handleContinue}>
                      {currentScenario === scenarios.length - 1 ? 'See Results' : 'Continue'}
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

  // RESULTS STATE
  if (state === 'results') {
    const score = Object.values(answers).reduce((a, b) => a + b, 0)
    const rating = getRating(score)
    const levelIdx = LEVELS.findIndex(l => l.id === selectedLevel)
    const nextLevel = levelIdx < LEVELS.length - 1 ? LEVELS[levelIdx + 1] : null

    return (
      <div className="pf-page-wrapper">
        <NavBar />
        <div className="pf-container">
          <main className="pf-main">
            <div className="pf-results">
              <div className="pf-results-eye-container">
                <AnimatedEye state="results" />
              </div>

              <div className="pf-score-box">
                <div className="pf-score-value">{score}</div>
                <div className="pf-score-label">out of 10</div>
              </div>

              <h2 className="pf-rating-title">{rating.title}</h2>
              <p className="pf-rating-text">{rating.text}</p>

              <div className="pf-results-actions">
                <button className="pf-button pf-button--primary" onClick={handleShare}>
                  {shareSuccess ? '✓ Copied' : 'Share Result'}
                </button>
                {score >= 40 && nextLevel && (
                  <button
                    className="pf-button pf-button--secondary"
                    onClick={() => handleSelectLevel(nextLevel.id)}
                  >
                    Play {nextLevel.name}
                  </button>
                )}
                <button className="pf-button pf-button--secondary" onClick={handleRetry}>
                  Try Again
                </button>
                <button className="pf-button pf-button--secondary" onClick={handleLevelSelect}>
                  Choose Level
                </button>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
