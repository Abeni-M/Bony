import React, { useState } from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './QuizScreen.css'

const QuizScreen = ({ questions, onFinish }) => {
  const [qIndex, setQIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [score, setScore] = useState(0)
  const [personalMsg, setPersonalMsg] = useState("")

  const step = questions[qIndex]

  const handleNext = (choiceScore = 0, choiceText = null) => {
    if (animating) return
    
    setAnimating(true)
    const newScore = score + choiceScore

    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        onFinish({ 
          answerText: choiceText, 
          personalMessage: personalMsg 
        }, newScore)
      } else {
        setQIndex(qIndex + 1)
        setScore(newScore)
        setAnimating(false)
      }
    }, 500)
  }

  return (
    <div className="quiz-root">
      <div className="quiz-split-layout">
        <div className="quiz-slide-side">
          <PhotoSlideshow intervalMs={5000} />
          <div className="quiz-emoji-badge">{step.emoji}</div>
        </div>

        <div className="quiz-text-side">
          <div className={`quiz-card ${animating ? 'quiz-card-exit' : ''}`}>
            <div className="quiz-progress-text">
              Chapter {qIndex + 1} of {questions.length}
            </div>

            <div className="quiz-content-wrapper">
              
              {step.type === 'story' ? (
                <>
                  <h2 className="quiz-question">{step.message}</h2>
                  <button className="quiz-next-btn quiz-next-ready" onClick={() => handleNext()}>
                    <span>{step.btnText}</span>
                  </button>
                </>
              ) : (
                <>
                  <h2 className="quiz-question">{step.question}</h2>
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

                  <div className="quiz-personal-box">
                    <p className="quiz-box-label">Or write your own words...</p>
                    <textarea 
                      className="quiz-textarea"
                      placeholder="Your message..."
                      value={personalMsg}
                      onChange={(e) => setPersonalMsg(e.target.value)}
                    />
                    <button 
                      className="quiz-submit-written"
                      onClick={() => handleNext(3, "Written Message")}
                    >
                      Send
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizScreen
