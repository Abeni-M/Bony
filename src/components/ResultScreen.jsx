import React, { useEffect, useState } from 'react'
import PhotoSlideshow from './PhotoSlideshow'
import './ResultScreen.css'

// ─── Confetti particle ───
const Particle = ({ style }) => <div className="confetti-particle" style={style} />

const CONFETTI = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  style: {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    width: `${6 + Math.random() * 8}px`,
    height: `${6 + Math.random() * 8}px`,
    background: ['#ff6b9d', '#c084fc', '#fbbf24', '#67e8f9', '#f472b6', '#a78bfa'][i % 6],
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
  },
}))

// Social links
const SOCIALS = [
  {
    label: 'Telegram',
    href: 'https://t.me/Abe_m_1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/abe_ne_zer_m?igsh=MWhxc2JqcGJpZTN0ag==',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/abenezer.mulatu.37',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@benenzer70',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.9 5.84-1.76 1.48-4.2 2.1-6.44 1.71-2.22-.38-4.25-1.57-5.55-3.37-1.31-1.83-1.66-4.22-1.07-6.39.6-2.18 2.25-3.95 4.35-4.8 2.05-.82 4.35-.87 6.42-.14v4.03c-1.12-.47-2.39-.46-3.48-.06-1.07.41-1.92 1.25-2.29 2.3-.39 1.09-.16 2.37.58 3.27.75.92 2.01 1.34 3.16 1.11 1.14-.23 2.12-1.01 2.53-2.09.43-1.13.34-2.42.34-3.64V.02z" />
      </svg>
    ),
  },
]

const ResultScreen = ({ score, answers, questions, onRetry }) => {
  // score max possible = 6 (one point per question)
  // Thresholds: 4.5+ = Deep Connection, 3-4 = Growing Interest, <3 = Friendship
  const isMatch = score >= 4.5
  const isMaybe = score >= 3 && score < 4.5
  const isOpposite = score < 3

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`result-root ${isMatch ? 'result-match' : isMaybe ? 'result-maybe' : 'result-opposite'}`}>

      {/* Background slideshow (blurred) */}
      <div className="result-bg-slideshow">
        <PhotoSlideshow intervalMs={5000} />
        <div className="result-bg-overlay" />
      </div>

      {/* Confetti — only on match */}
      {isMatch && showContent && (
        <div className="confetti-layer" aria-hidden="true">
          {CONFETTI.map((p) => <Particle key={p.id} style={p.style} />)}
        </div>
      )}

      {/* Floating hearts — match only */}
      {isMatch && (
        <div className="result-hearts" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="r-heart" style={{
              left: `${5 + i * 10}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${1 + Math.random()}rem`
            }}>💖</span>
          ))}
        </div>
      )}

      {/* Main card */}
      <div className={`result-card ${showContent ? 'result-card-in' : ''}`}>

        {isMatch && (
          <>
            {/* MATCH — Grand Confession */}
            <div className="result-header">
              <div className="result-icon-ring">🔥</div>
              <p className="result-label result-label-match">Waliigallee! / Vibe Check Passed! 💯</p>
              <h1 className="result-title result-title-match">
                It's a Match, Bony!
              </h1>
            </div>

            <div className="result-letter">
              <p>
                Bony, honestly... I wasn't expecting the vibe meter to go this high! 😂 
                I'm so glad we're on the same page. 
              </p>
              <p>
                You're not just special; you're the whole playlist. 🎵
                I love how you think, how you laugh, and how you just *get* it. 
                Meeting you was the best plot twist of my year!
              </p>
              <p>
                Whatever happens next, I just want you to know that you've got me 
                smiling at my phone like an idiot. Thanks for being you.
              </p>
              <p className="result-sign">With a big smile,<br /><strong>Abenezer</strong></p>
              <p className="result-amharic">Hunda caala sitti tolaa! 💖🌹</p>
            </div>

            {/* Feelings Summary Section */}
            <div className="result-summary">
              <h3 className="result-summary-title">What your heart shared...</h3>
              <div className="result-summary-tags">
                {answers.map((a, idx) => {
                  const q = questions.find(q => q.id === a.questionId);
                  const ansText = q?.answers[a.answerIdx]?.text;
                  // Handle bilingual split
                  const shortVersion = ansText ? ansText.split('/')[1]?.trim() || ansText : "✨";
                  return (
                    <span key={idx} className="result-tag">
                      {q?.emoji} {shortVersion}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="result-socials">
              <p className="result-socials-label">Come find me 🌸</p>
              <div className="result-socials-row">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="result-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {isMaybe && (
          <>
            {/* MAYBE — Gentle, hopeful */}
            <div className="result-header">
              <div className="result-icon-ring result-icon-maybe">🍿</div>
              <p className="result-label result-label-maybe">Suuta-suutaan... / Loading... ⏳</p>
              <h1 className="result-title result-title-maybe">
                Let's See Where It Goes.
              </h1>
            </div>

            <div className="result-letter result-letter-maybe">
              <p>
                Hey, that's totally cool! No rush, no pressure. 
                I actually like that we're taking it slow and just seeing what happens.
              </p>
              <p>
                You're definitely someone I want to keep talking to. 
                Whether we're laughing at memes or having deep talks, I'm here for it.
              </p>
              <p>
                Let's just keep the good vibes rolling! 🌙
              </p>
              <p className="result-sign">Catch you soon,<br /><strong>Abenezer</strong> 🌸</p>
            </div>

            <div className="result-summary">
              <h3 className="result-summary-title">Your gentle thoughts...</h3>
              <div className="result-summary-tags">
                {answers.map((a, idx) => {
                  const q = questions.find(q => q.id === a.questionId);
                  const ansText = q?.answers[a.answerIdx]?.text;
                  const shortVersion = ansText ? ansText.split('/')[1]?.trim() || ansText : "✨";
                  return (
                    <span key={idx} className="result-tag" style={{ background: 'rgba(192, 132, 252, 0.08)', borderColor: 'rgba(192, 132, 252, 0.2)', color: '#d8b4fe' }}>
                      {q?.emoji} {shortVersion}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="result-socials">
              <p className="result-socials-label">No pressure — just here 🤍</p>
              <div className="result-socials-row">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="result-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <button id="result-retry-btn" className="result-retry-btn" onClick={onRetry}>
              Try Again 🔄
            </button>
          </>
        )}

        {isOpposite && (
          <>
            {/* OPPOSITE — Sweet, non-pushy */}
            <div className="result-header">
              <div className="result-icon-ring result-icon-opposite">🤝</div>
              <p className="result-label result-label-opposite">Hiriyyummaa qofa? / Friendzoned! 😂</p>
              <h1 className="result-title result-title-opposite">
                Besties it is!
              </h1>
            </div>

            <div className="result-letter result-letter-opposite">
              <p>
                Haha, looks like we're not quite on the same wavelength today! 
                But honestly? I respect the honesty. 💯
              </p>
              <p>
                No hard feelings at all. You're still an amazing person and 
                I'm glad we could share this funny little quiz moment.
              </p>
              <p>
                If you ever need a laugh or someone to talk to, 
                I'm still your guy. Some things never change! 🌿
              </p>
              <p className="result-sign">Peace & Love,<br /><strong>Abenezer</strong></p>
            </div>

            <div className="result-summary">
              <h3 className="result-summary-title">Your honest answers...</h3>
              <div className="result-summary-tags">
                {answers.map((a, idx) => {
                  const q = questions.find(q => q.id === a.questionId);
                  const ansText = q?.answers[a.answerIdx]?.text;
                  const shortVersion = ansText ? ansText.split('/')[1]?.trim() || ansText : "✨";
                  return (
                    <span key={idx} className="result-tag" style={{ background: 'rgba(103, 232, 249, 0.08)', borderColor: 'rgba(103, 232, 249, 0.2)', color: '#a5f3fc' }}>
                      {q?.emoji} {shortVersion}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="result-socials">
              <p className="result-socials-label">Still here for you 🤍</p>
              <div className="result-socials-row">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="result-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <button id="result-retry-btn-opp" className="result-retry-btn" onClick={onRetry}>
              Start Over 🔄
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default ResultScreen
