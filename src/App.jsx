import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import emailjs from '@emailjs/browser'
import './App.css'

// Friendship-Focused Story Steps (Purely Best Friends)
export const STORY_STEPS = [
  {
    id: 1,
    type: "story",
    message: "Bony, honestly... you're the best friend anyone could ask for. 😂",
    afaanOromo: "Bony, dhugumatti... ati hiriyaa hunda caaludha. 😂",
    emoji: "🤝",
    btnText: "Facts! 😂"
  },
  {
    id: 2,
    type: "story",
    message: "I tried to describe our friendship, but 'Epic' is the only word that fits. 🤜🤛",
    afaanOromo: "Hiriyyummaa keenya ibsuun yaale, garuu 'Epic' qofatu ibsa.",
    emoji: "🚀",
    btnText: "Agreed! 🤜🤛"
  },
  {
    id: 3,
    type: "story",
    message: "Real talk: You're my favorite human to hang out with. 💎",
    afaanOromo: "Dhugaa dubbachuuf: Ati nama waliin dabarsuuf natti tolu dha.",
    emoji: "✨",
    btnText: "Same here! 😊"
  },
  {
    id: 4,
    type: "choice",
    question: "So... where do we stand as besties? pick one or write your own!",
    emoji: "🎯",
    answers: [
      { text: "Ride or Die! 🚀", score: 5 },
      { text: "Best Friends 🤝", score: 3 },
      { text: "Just Vibing 🌊", score: 1 },
    ],
  },
]

function App() {
  const [screen, setScreen] = useState('intro') 
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  const handleStart = () => setScreen('quiz')

  const handleFinish = (finalData, totalScore) => {
    setAnswers(finalData)
    setScore(totalScore)
    setScreen('result')

    // Prepare and send the email
    const formattedAnswers = `
      Bony's Bestie Choice: ${finalData.answerText || 'None'}
      Bony's Personal Message: ${finalData.personalMessage || 'No message left.'}
      Bestie Vibe Score: ${totalScore}
    `

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
