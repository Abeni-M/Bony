import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import emailjs from '@emailjs/browser'
import './App.css'

// All quiz questions with answers and scoring
export const QUESTIONS = [
  {
    id: 1,
    question: "Vibe Check: Akkam jirtu har'a? / How's your energy level today? ✨",
    emoji: "🌈",
    answers: [
      { text: "Baay'ee natti tola / 100% Main Character energy", score: 1 },
      { text: "Suuta suutaan / Just vibing lowkey", score: 1 },
      { text: "Si yaadaa jira / Thinking about you...", score: 1 },
      { text: "Sleepy vibes / I need a 10-hour nap", score: 0.5 },
    ],
  },
  {
    id: 2,
    question: "Green Flag: Maalitu sitti tola? / What's your ultimate 'Green Flag'? 🚩",
    emoji: "🔥",
    answers: [
      { text: "Nama na kolfisiisu / Someone with top-tier humor", score: 1 },
      { text: "Nama na hubatu / Emotional intelligence is hot", score: 1 },
      { text: "Nama bilisaa / Just someone real and honest", score: 1 },
      { text: "Hunduma isaa / I want the whole package!", score: 1 },
    ],
  },
  {
    id: 3,
    question: "Movie Genre: Yoo waliin jirru? / If our vibe was a movie genre... 🎬",
    emoji: "🍿",
    answers: [
      { text: "Romance / A sweet love story", score: 1 },
      { text: "Comedy / Constant laughing & memes", score: 1 },
      { text: "Adventure / Exploring the world together", score: 1 },
      { text: "Sci-Fi / Something out of this world!", score: 1 },
    ],
  },
  {
    id: 4,
    question: "The Spark: Maalitu onnee kee dhowwa? / What's the fastest way to your heart? ⚡",
    emoji: "💘",
    answers: [
      { text: "Ergaa bareedduu / A sweet 'thinking of you' text", score: 1 },
      { text: "Food is Love / Good food, good mood", score: 1 },
      { text: "Waliin deemu / Just spending quality time", score: 1 },
      { text: "Quiet support / Being there when it's hard", score: 1 },
    ],
  },
  {
    id: 5,
    question: "Future Goals: Bor maal goona? / What's our ideal future activity? ✈️",
    emoji: "🌍",
    answers: [
      { text: "World Tour / Let's travel everywhere!", score: 1 },
      { text: "Cozy Night / Netflix & snacks under a blanket", score: 1 },
      { text: "Coffee Dates / Talking for hours in a cafe", score: 1 },
      { text: "Growing together / Building something big", score: 1 },
    ],
  },
  {
    id: 6,
    question: "Truth Time: Iccitii onnee kee? / Final question: Am I on your mind? 😏",
    emoji: "🎯",
    answers: [
      { text: "Sima! / You're literally the only thing", score: 1 },
      { text: "Si'i ta'uu mala / Maybe... just a little bit", score: 1 },
      { text: "Iccitiidha! / I'll never tell (but yes)", score: 0.8 },
      { text: "Eenyuuniyyuu / No one... (I'm lying!)", score: 0 },
    ],
  },
]

function App() {
  const [screen, setScreen] = useState('intro') // 'intro' | 'quiz' | 'result'
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const handleStart = () => setScreen('quiz')

  const handleFinish = (collectedAnswers, totalScore) => {
    setAnswers(collectedAnswers)
    setScore(totalScore)
    setScreen('result')

    // Prepare and send the email
    const formattedAnswers = collectedAnswers.map(a => {
      const q = QUESTIONS.find(curr => curr.id === a.questionId)
      return `Question: ${q.question}\nAnswer: ${q.answers[a.answerIdx].text}`
    }).join('\n\n')

    const templateParams = {
      to_email: 'abenm410@gmail.com',
      from_name: 'Bony',
      total_score: totalScore,
      answers_summary: formattedAnswers,
    }

    // EmailJS credentials configured
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
        <QuizScreen questions={QUESTIONS} onFinish={handleFinish} />
      )}
      {screen === 'result' && (
        <ResultScreen 
          score={score} 
          answers={answers} 
          questions={QUESTIONS}
          onRetry={handleRetry} 
        />
      )}
    </div>
  )
}

export default App
