import React from 'react'
import './IntroScreen.css'

const IntroScreen = ({ onStart }) => {
  return (
    <div className="intro-root">
      <div className="intro-cinematic-card">
        <div className="intro-decorative-line"></div>
        <h2 className="intro-pretitle">An Expression Of</h2>
        <h1 className="intro-main-title">Gratitude</h1>
        <div className="intro-decorative-line"></div>
        
        <p className="intro-tagline">
          Some people make the world brighter just by being in it. This is a small appreciation for one of those people.
        </p>

        <button className="intro-action-btn" onClick={onStart}>
          <span className="btn-text">Discover More</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  )
}

export default IntroScreen
