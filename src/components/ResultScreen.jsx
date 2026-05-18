import React from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './ResultScreen.css'

const ResultScreen = ({ score, answers, onRetry }) => {
  const isEpic = score >= 4.5
  const isGood = score >= 3 && score < 4.5

  return (
    <div className="result-root">
      <div className="result-card">
        <div className="result-header-strip">
          <span>A Letter of</span>
          <span>Appreciation</span>
        </div>

        <div className="result-main-body">
          <section className="result-article">
            {isEpic ? (
              <>
                <h1 className="result-headline">Endless Appreciation</h1>
                <div className="result-letter">
                  <p>
                    Bony, from your perspective on life to your incredible smile, everything about you is pure inspiration. I am deeply and profoundly grateful to know someone as wonderful as you.
                  </p>
                  <p>
                    You are a truly gorgeous soul, inside and out. Never forget the immense value and light you bring to those around you.
                  </p>
                </div>
              </>
            ) : isGood ? (
              <>
                <h1 className="result-headline">A Beautiful Soul</h1>
                <div className="result-letter">
                  <p>
                    My heart is filled with gratitude every time I think of the moments we've shared. You are wonderfully unique, and I wouldn't have it any other way.
                  </p>
                  <p>
                    Your presence is a true gift. Thank you for simply being you.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className="result-headline">Simply Wonderful</h1>
                <div className="result-letter">
                  <p>
                    You have an amazing ability to make the world a better place just by being in it. 
                  </p>
                  <p>
                    I truly appreciate your energy and everything you stand for. Stay amazing.
                  </p>
                </div>
              </>
            )}
          </section>

          <aside className="result-sidebar">
            <div className="result-recap">
              <span className="recap-title">Your Reply</span>
              <p><strong>Choice:</strong> {answers.answerText || 'Custom'}</p>
              {answers.personalMessage && (
                <p><strong>Words:</strong> "{answers.personalMessage}"</p>
              )}
            </div>
          </aside>
        </div>

        <footer className="result-footer">
          <button className="result-retry-btn" onClick={onRetry}>Read Again</button>
        </footer>
      </div>
    </div>
  )
}

export default ResultScreen
