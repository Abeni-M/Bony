import React from 'react'
import profilePic from '../assets/profile.jpg'
import './IntroScreen.css'

const IntroScreen = ({ onStart }) => {
  return (
    <div className="intro-root">
      {/* Immersive Background */}
      <div 
        className="intro-bg-image" 
        style={{ backgroundImage: `url(${profilePic})` }} 
      />
      <div className="intro-vignette" />

      {/* Central Glass Piece */}
      <div className="intro-glass-card">
        <div className="intro-profile-wrapper">
          <div className="intro-profile-circle">
            <img src={profilePic} alt="Bony" className="intro-profile-pic" />
          </div>
        </div>

        <div className="intro-content">
          <p className="intro-pretitle">The Bestie Edition</p>
          <h1 className="intro-main-title">Hey Bony.</h1>
          <p className="intro-tagline">
            I built something small to celebrate our vibe. 
            Ready to see it?
          </p>
        </div>

        <button className="intro-btn" onClick={onStart}>
          <div className="intro-btn-pulse" />
          <span>Unlock Experience</span>
          <span className="intro-btn-icon">→</span>
        </button>

        <p className="intro-author">By Abenezer · 2024</p>
      </div>
    </div>
  )
}

export default IntroScreen
