import React from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './ResultScreen.css'

const SOCIALS = [
  { label: 'Telegram', href: 'https://t.me/Abe_m_1' },
  { label: 'Instagram', href: 'https://www.instagram.com/abe_ne_zer_m?igsh=MWhxc2JqcGJpZTN0ag==' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@benenzer70' },
]

const ResultScreen = ({ score, answers, questions, onRetry }) => {
  const isEpic = score >= 4.5
  const isGood = score >= 3 && score < 4.5
  const isOk = score < 3

  return (
    <div className="result-root">
      <div className="result-bg-slideshow">
        <PhotoSlideshow intervalMs={5000} />
        <div className="result-bg-overlay" />
      </div>

      <div className="result-card result-card-in">
        {isEpic && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">🤜🤛</span>
              <p className="result-label">Bestie Vibe: Epic</p>
              <h1 className="result-title">Ride or Die!</h1>
            </header>

            <div className="result-letter">
              <p>
                Bony, honestly... you're the realest! 💯
                I'm so glad we're on the same page about our friendship.
              </p>
              <p className="result-amharic">
                Amma kana hunda keessa waan tokkoyu sin hin fakkaanne, my creativity gad-dhera dhuga.
              </p>
              <p>
                Thanks for always being there and for being such an awesome person.
                Our friendship is the best plot twist of my year!
              </p>
              <div className="result-sign">
                Stay as amazing as you are, Bestie.
                <strong>Abenezer</strong>
              </div>
              <p className="result-amharic">Hunda caala sitti haa toluu! ✨🤜🤛</p>
            </div>
          </div>
        )}

        {isGood && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">🤝</span>
              <p className="result-label">Bestie Vibe: Good</p>
              <h1 className="result-title">Great Friends!</h1>
            </header>
            <div className="result-letter">
              <p>
                Hey, that's awesome! 🥂
                I really value our friendship and I'm glad we're vibing well.
              </p>
              <p>
                Let's just keep the good times rolling! 🌙
              </p>
              <div className="result-sign">
                Catch you soon,
                <strong>Abenezer</strong>
              </div>
            </div>
          </div>
        )}

        {isOk && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">☕</span>
              <p className="result-label">Bestie Vibe: Chill</p>
              <h1 className="result-title">Vibing along!</h1>
            </header>
            <div className="result-letter">
              <p>
                Haha, we're definitely chill! 💯
                I appreciate you and I'm glad we could share this funny little moment.
              </p>
              <p>
                No pressure, just vibes. 🌿
              </p>
              <div className="result-sign">
                Peace & Love,
                <strong>Abenezer</strong>
              </div>
            </div>
          </div>
        )}

        <div className="result-summary">
          <p className="result-summary-title">Your Response</p>
          <div className="result-summary-tags">
            <span className="result-tag">Choice: {answers.answerText || 'None'}</span>
            {answers.personalMessage && <span className="result-tag">Note: {answers.personalMessage.substring(0, 20)}...</span>}
          </div>
        </div>

        <div className="result-socials">
          <p className="result-socials-label">Connect with me</p>
          <div className="result-socials-row">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="result-social-btn">
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <button className="result-retry-btn" onClick={onRetry}>Try Again?</button>
      </div>
    </div>
  )
}

export default ResultScreen
