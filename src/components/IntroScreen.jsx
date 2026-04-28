import React from 'react'
import profilePic from '../assets/profile.jpg'
import './IntroScreen.css'

const IntroScreen = ({ onStart }) => {
  return (
    <div className="intro-root">
      <div className="luxury-line line-v" />
      <div className="luxury-line line-h" />

      {/* LEFT: Content & Action */}
      <section className="intro-left">
        <div className="intro-magazine-text">
          <h1 className="mag-name">Bony</h1>
          <p className="mag-subtitle">The Bestie Edition</p>
        </div>

        <div className="intro-action-box">
          <button className="intro-btn" onClick={onStart}>
            <span>Discover Experience</span>
            <span className="intro-btn-icon">→</span>
          </button>
          <p className="intro-footer-hint">Curated by Abenezer · 2024</p>
        </div>
      </section>

      {/* RIGHT: Visual */}
      <section className="intro-right">
        <div className="intro-image-container">
          <img src={profilePic} alt="Bony" className="intro-profile-pic" />
          <div className="image-overlay-text">Autumn / Winter</div>
        </div>
      </section>
    </div>
  )
}

export default IntroScreen
