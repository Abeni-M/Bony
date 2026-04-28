import React, { useState, useEffect } from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './QuizScreen.css'

const QuizScreen = ({ questions, onFinish }) => {
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [animating, setAnimating] = useState(false)
  const [score, setScore] = useState(0)

  const q = questions[qIndex]
  const progress = ((qIndex) / questions.length) * 100

  const handleSelect = (idx) => {
    if (animating) return
    setSelected(idx)
  }

  const handleNext = () => {
    if (selected === null || animating) return

    const ans = q.answers[selected]
    const newScore = score + ans.score
    const newAnswers = [...answers, { questionId: q.id, answerIdx: selected, score: ans.score }]

    setScore(newScore)
    setAnswers(newAnswers)
    setAnimating(true)

    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        onFinish(newAnswers, newScore)
      } else {
        setQIndex(qIndex + 1)
        setSelected(null)
        setAnimating(false)
      }
    }, 500)
  }

  const isLast = qIndex + 1 >= questions.length

  return (
    <div className="quiz-root">
      <div className="quiz-orb quiz-orb-1" />
      <div className="quiz-orb quiz-orb-2" />

      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-counter">
        <span className="quiz-counter-current">{qIndex + 1}</span>
        <span>/ {questions.length}</span>
      </div>

      <div className="quiz-layout">
        <div className="quiz-photo-panel">
          <PhotoSlideshow intervalMs={4000} />
          <div className="quiz-emoji-badge">{q.emoji}</div>
        </div>

        <div className={`quiz-card ${animating ? 'quiz-card-exit' : ''}`}>
          <div className="quiz-step-dots">
            {questions.map((_, i) => (
              <span
                key={i}
                className={`step-dot ${i === qIndex ? 'step-dot-active' : ''} ${i < qIndex ? 'step-dot-done' : ''}`}
              />
            ))}
          </div>

          <h2 className="quiz-question">{q.question}</h2>

          <div className="quiz-answers">
            {q.answers.map((ans, i) => (
              <button
                key={i}
                className={`quiz-answer-btn ${selected === i ? 'quiz-answer-selected' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <span>{ans.text}</span>
                {selected === i && <span className="quiz-answer-check">✨</span>}
              </button>
            ))}
          </div>

          <button
            className={`quiz-next-btn ${selected !== null ? 'quiz-next-ready' : ''}`}
            onClick={handleNext}
            disabled={selected === null}
          >
            <span>{isLast ? 'Complete Experience' : 'Next Step'}</span>
            <span className="quiz-next-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizScreen
