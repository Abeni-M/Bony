import React from 'react'
import profilePic from '../assets/profile.jpg'
import './IntroScreen.css'

const IntroScreen = ({ onStart }) => {
  return (
    <div className="intro-root">
      {/* Background Orbs are handled by CSS */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="intro-card">
        {/* Profile */}
        <div className="profile-ring-wrapper">
          <div className="profile-ring">
            <img src={profilePic} alt="Abenezer" className="intro-profile-pic" />
          </div>
          <span className="profile-status-dot" />
        </div>

        {/* Messaging */}
        <div className="intro-text-block">
          <p className="intro-from">Personal Invitation</p>
          <h1 className="intro-title">
            Hey Bony.
            <em>I have a small secret to share with you...</em>
          </h1>
          <p className="intro-subtitle">
            Just a few questions to see how well we vibing.
          </p>
        </div>

        {/* Primary Action */}
        <button
          id="intro-begin-btn"
          className="intro-btn"
          onClick={onStart}
        >
          <span>Open My Heart</span>
          <span className="intro-btn-icon">→</span>
        </button>

        <p className="intro-hint">Curated with love by Abenezer</p>
      </div>
    </div>
  )
}

export default IntroScreen
