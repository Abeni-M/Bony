import React from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './ResultScreen.css'

const SOCIALS = [
  { label: 'TG', href: 'https://t.me/Abe_m_1' },
  { label: 'IG', href: 'https://www.instagram.com/abe_ne_zer_m?igsh=MWhxc2JqcGJpZTN0ag==' },
  { label: 'TK', href: 'https://www.tiktok.com/@benenzer70' },
]

const ResultScreen = ({ score, answers, onRetry }) => {
  const isEpic = score >= 4.5
  const isGood = score >= 3 && score < 4.5

  return (
    <div className="result-root">
      <div className="result-bg-slideshow">
        <PhotoSlideshow intervalMs={5000} />
      </div>
      <div className="result-bg-overlay" />

      <div className="result-card">
        {/* Magazine Header Strip */}
        <div className="result-header-strip">
          <span>Issue No. 01 / 2024</span>
          <span>Bony Exclusive</span>
          <span>Bestie Vibe Check</span>
        </div>

        <div className="result-main-body">
          {/* Main Article Content */}
          <section className="result-article">
            {isEpic ? (
              <>
                <h1 className="result-headline">Thanks for everything</h1>
                <div className="result-letter">
                  <p>
                    Bony, honestly... you're the realest! 💯 
                    This connection is more than just a typical friendship—it's top-tier energy. 
                  </p>
                  <p className="result-amharic">
                    Amma kana hunda keessa waan tokkoyu sin hin fakkaanne, my creativity gad-dhera dhuga.
                  </p>
                  <p>
                    Thanks for always being there. Our friendship is the best plot twist of my year!
                  </p>
                  <p className="result-amharic">Hunda caala sitti haa toluu! ✨🤜🤛</p>
                </div>
              </>
            ) : isGood ? (
              <>
                <h1 className="result-headline">Pure Vibe.</h1>
                <div className="result-letter">
                  <p>
                    Hey, that's awesome! 🥂 
                    I really value our friendship and I'm glad we're vibing so well. 
                  </p>
                  <p>
                    Let's just keep the good times rolling! You're a legend.
                  </p>
                  <div className="result-sign">
                    Catch you soon, <strong>Abenezer</strong>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="result-headline">Chill Flow.</h1>
                <div className="result-letter">
                  <p>
                    Haha, we're definitely chill! 💯 
                    I appreciate you and I'm glad we could share this funny little moment.
                  </p>
                  <p>
                    No pressure, just vibes. Stay awesome.
                  </p>
                </div>
              </>
            )}
          </section>

          {/* Sidebar */}
          <aside className="result-sidebar">
            <div className="result-recap">
              <span className="recap-title">Bony's Response</span>
              <p><strong>Choice:</strong> {answers.answerText || 'Custom'}</p>
              {answers.personalMessage && (
                <p><strong>Note:</strong> "{answers.personalMessage}"</p>
              )}
            </div>
          </aside>
        </div>

        {/* Magazine Footer */}
        <footer className="result-footer">
          <div className="result-social-row">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="result-social-link">
                {s.label}
              </a>
            ))}
          </div>
          <button className="result-retry-btn" onClick={onRetry}>Try Again</button>
        </footer>
      </div>
    </div>
  )
}

export default ResultScreen
