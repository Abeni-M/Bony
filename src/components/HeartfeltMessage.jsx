import React from 'react'
import './SectionStyles.css'

const HeartfeltMessage = () => {
  return (
    <section className="section-container">
      <div className="heartfelt-card tilt-card">
        <div className="heartfelt-glow"></div>
        <div className="heartfelt-icon">🤍</div>
        
        <p className="heartfelt-text">
          <span className="quote-mark">“</span>
          No matter how much time passes, one thing I’ll always be grateful for is you.
        </p>
        
        <p className="heartfelt-text">
          Thank you for staying, for understanding me even in my worst moments, and for turning ordinary days into memories I’ll never forget.
        </p>

        <p className="heartfelt-text">
          What we built is rare — a friendship that feels safe, genuine, and priceless. 
          Some people come and go, but you became part of my life in a way that truly matters.
        </p>

        <p className="heartfelt-text">
          I appreciate every laugh, every late-night conversation, every moment of support, and every memory we created together. 
          Life honestly feels better knowing you’re in it.
        </p>

        <p className="heartfelt-text highlight-text">
          Thank you for being my best friend and for proving that real friendship still exists.
          <span className="quote-mark">”</span>
        </p>
      </div>
    </section>
  )
}

export default HeartfeltMessage
