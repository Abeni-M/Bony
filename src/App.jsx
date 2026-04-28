import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import emailjs from '@emailjs/browser'
import './App.css'

// Romantic Story Steps (Replaces the Quiz format)
export const STORY_STEPS = [
  {
    id: 1,
    type: "story",
    message: "Bony, you're not just a person to me... you're a feeling. 🌹",
    afaanOromo: "Bony, ati anaaf nama qofa miti... ati miira onnee kooti.",
    emoji: "✨",
    btnText: "Tell me more..."
  },
  {
    id: 2,
    type: "story",
    message: "I cherish every laugh we share. It's the best part of my day. 😊",
    afaanOromo: "Kolfi kee onnee koo gammachiisa. Inni hunda caalaa natti tola.",
    emoji: "💖",
    btnText: "And then?"
  },
  {
    id: 3,
    type: "story",
    message: "It's the little things... the way you talk, the way you are. 🌸",
    afaanOromo: "Wanti hundi sitti tola... akka ati dubbattuufi eenyummaa kee.",
    emoji: "🦋",
    btnText: "Go on..."
  },
  {
    id: 4,
    type: "story",
    message: "I put my creativity into this because you're worth the effort. 🎨",
    afaanOromo: "Ati waan hundaaf gatii waan qabduuf, kalaqa koo hunda sitti gargaarame.",
    emoji: "🔥",
    btnText: "Final thought?"
  },
  {
    id: 5,
    type: "choice",
    question: "So, if I asked you to be more than just a friend... what's the vibe? 😏",
    afaanOromo: "Kanaaf, hiriyyummaa irra darbee akka wal-jaallannu yoon si gaafadhe... deebiin kee maali?",
    emoji: "🎯",
    answers: [
      { text: "I'm down for it! / Anis fedhii qaba! ❤️", score: 5 },
      { text: "Let's see where it goes / Suuta haa ilaallu ⏳", score: 3 },
      { text: "I like what we have / Hiriyyummaan haa itti fufu 🤝", score: 1 },
    ],
  },
]

function App() {
  const [screen, setScreen] = useState('intro') 
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const handleStart = () => setScreen('quiz')

  const handleFinish = (finalChoice, totalScore) => {
    setAnswers(finalChoice)
    setScore(totalScore)
    setScreen('result')

    // Prepare and send the email
    const formattedAnswers = `Bony's Final Response: ${finalChoice.answerText}\nScore: ${totalScore}`

    const templateParams = {
      to_email: 'abenm410@gmail.com',
      from_name: 'Bony',
      total_score: totalScore,
      answers_summary: formattedAnswers,
    }

    emailjs.send(
      'service_0ntia54', 
      'template_tfkv1xt', 
      templateParams, 
      'aat6ziqGEqgNtDAg6'
    ).then(
      (response) => console.log('Email sent successfully!', response.status, response.text),
      (error) => console.error('Failed to send email...', error)
    )
  }

  const handleRetry = () => {
    setAnswers([])
    setScore(0)
    setScreen('intro')
  }

  return (
    <div className="app-root">
      <div className="app-bg-glow" />
      {screen === 'intro' && <IntroScreen onStart={handleStart} />}
      {screen === 'quiz' && (
        <QuizScreen questions={STORY_STEPS} onFinish={handleFinish} />
      )}
      {screen === 'result' && (
        <ResultScreen 
          score={score} 
          answers={answers} 
          questions={STORY_STEPS}
          onRetry={handleRetry} 
        />
      )}
    </div>
  )
}

export default App
