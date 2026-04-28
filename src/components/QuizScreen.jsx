import React, { useState } from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './QuizScreen.css'

const QuizScreen = ({ questions, onFinish }) => {
  const [qIndex, setQIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [score, setScore] = useState(0)

  const step = questions[qIndex]

  const handleNext = (choiceScore = 0, choiceText = null) => {
    if (animating) return
    
    setAnimating(true)
    const newScore = score + choiceScore

    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        onFinish({ answerText: choiceText }, newScore)
      } else {
        setQIndex(qIndex + 1)
        setScore(newScore)
        setAnimating(false)
      }
    }, 500)
  }

  return (
    <div className="quiz-root">
      <div className="quiz-orb quiz-orb-1" />
      <div className="quiz-orb quiz-orb-2" />

      <div className="quiz-layout">
        <div className="quiz-photo-panel">
          <PhotoSlideshow intervalMs={5000} />
          <div className="quiz-emoji-badge">{step.emoji}</div>
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

          <div className="quiz-content-wrapper">
            {step.type === 'story' ? (
              <>
                <h2 className="quiz-question">{step.message}</h2>
                <p className="quiz-afaan">{step.afaanOromo}</p>
                <button className="quiz-next-btn quiz-next-ready" onClick={() => handleNext()}>
                  <span>{step.btnText}</span>
                  <span className="quiz-next-icon">→</span>
                </button>
              </>
            ) : (
              <>
                <h2 className="quiz-question">{step.question}</h2>
                <p className="quiz-afaan">{step.afaanOromo}</p>
                <div className="quiz-answers">
                  {step.answers.map((ans, i) => (
                    <button
                      key={i}
                      className="quiz-answer-btn"
                      onClick={() => handleNext(ans.score, ans.text)}
                    >
                      <span>{ans.text}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizScreen
