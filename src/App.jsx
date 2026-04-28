import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import emailjs from '@emailjs/browser'
import './App.css'

// Bestie Story: Funny School Life Edition
export const STORY_STEPS = [
  {
    id: 1,
    type: "story",
    message: "Bony, remember when we spent more time talking than studying for that exam? 😂",
    afaanOromo: "Bony, yaadattaa yeroo nuti qorumsaaf qo'achuu dhiifnee oduun dabarsinu san? 😂",
    emoji: "📚",
    btnText: "Don't remind me! 💀"
  },
  {
    id: 2,
    type: "story",
    message: "you are not only friend for me greater than friend 🍔",
    afaanOromo: "ati naf hiriya irra naf caaalta ",
    emoji: "🍕",
    btnText: "Real survival! 🤜🤛"
  },
  {
    id: 3,
    type: "story",
    message: "If being a distraction in class was a degree, we'd have a PhD by now. 🎓",
    afaanOromo: "Dursitoota 'Degree argamaa utuu ta'e, PhD qabna ture.",
    emoji: "🤡",
    btnText: "Facts! 🤣"
  },
  {
    id: 4,
    type: "story",
    message: "Honestly, school would have been a nightmare without your jokes. 💎",
    afaanOromo: "Dhugumatti, kolfi kee malee mana barumsaati barachu hin danda'amu ture.",
    emoji: "✨",
    btnText: "You too! 😊"
  },
  {
    id: 5,
    type: "choice",
    question: "So... where do we stand as besties? pick one or write your own!",
    emoji: "🎯",
    answers: [
      { text: "trusted friend! 🚀", score: 5 },
      { text: "Best Friends 🤝", score: 3 },
      { text: "growth together 🌊", score: 1 },
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
