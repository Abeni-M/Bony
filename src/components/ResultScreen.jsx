import React from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './ResultScreen.css'

const SOCIALS = [
  { label: 'Telegram', href: 'https://t.me/Abe_m_1' },
  { label: 'Instagram', href: 'https://www.instagram.com/abe_ne_zer_m?igsh=MWhxc2JqcGJpZTN0ag==' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@benenzer70' },
]

const ResultScreen = ({ score, answers, questions, onRetry }) => {
  const isMatch = score >= 4.5
  const isMaybe = score >= 3 && score < 4.5
  const isOpposite = score < 3

  return (
    <div className="result-root">
      <div className="result-bg-slideshow">
        <PhotoSlideshow intervalMs={5000} />
        <div className="result-bg-overlay" />
      </div>

      <div className="result-card result-card-in">
        {isMatch && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">🔥</span>
              <p className="result-label">Vibe Check Passed</p>
              <h1 className="result-title">It's a Match, Bony.</h1>
            </header>

            <div className="result-letter">
              <p>
                Bony, honestly... I wasn't expecting the vibe meter to go this high! 😂
                I'm so glad we're on the same page.
              </p>
              <p className="result-amharic">
                Amma kana hunda keessa waan tokkoyu sin hin fakkaanne, my creativity gad-dhera dhuga.
              </p>
              <p>
                You're not just special; you're the whole playlist. 🎵
                I love how you think, how you laugh, and how you just get it. 
                Meeting you was the best plot twist of my year!
              </p>
              <div className="result-sign">
                Stay as amazing as you are.
                <strong>Abenezer</strong>
              </div>
              <p className="result-amharic">Hunda caala sitti haa toluu! 💖🌹</p>
            </div>
          </div>
        )}

        {isMaybe && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">🍿</span>
              <p className="result-label">Loading Vibes...</p>
              <h1 className="result-title">Let's see where it goes.</h1>
            </header>
            <div className="result-letter">
              <p>
                Hey, that's totally cool! No rush, no pressure. 
                I actually like that we're taking it slow and just seeing what happens.
              </p>
              <p>
                Let's just keep the good vibes rolling and see what the future holds. 🌙
              </p>
              <div className="result-sign">
                Catch you soon,
                <strong>Abenezer</strong>
              </div>
            </div>
          </div>
        )}

        {isOpposite && (
          <div className="result-content">
            <header className="result-header">
              <span className="result-icon-ring">🤝</span>
              <p className="result-label">Friend Zone Gold</p>
              <h1 className="result-title">Besties for now!</h1>
            </header>
            <div className="result-letter">
              <p>
                Haha, looks like we're not quite on the same wavelength today! 
                But honestly? I respect the honesty. 💯
              </p>
              <p>
                No hard feelings at all. You're still an amazing person. 🌿
              </p>
              <div className="result-sign">
                Peace & Love,
                <strong>Abenezer</strong>
              </div>
            </div>
          </div>
        )}

        <div className="result-summary">
          <p className="result-summary-title">Your Heart's Highlights</p>
          <div className="result-summary-tags">
            {answers.map((a, idx) => {
              const q = questions.find(q => q.id === a.questionId);
              const ansText = q?.answers[a.answerIdx]?.text;
              const short = ansText ? ansText.split('/')[1]?.trim() || ansText : "✨";
              return <span key={idx} className="result-tag">{q?.emoji} {short}</span>;
            })}
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
