import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-root">

      <div className="hero-content hero-scrolled">
        <div className="hero-timer">
          <div className="timer-dot"></div>
          <span>FRIENDS SINCE 2019</span>
        </div>
        <h1 className="hero-maintitle">FRIENDSHIP<br /><span className="text-cyan">BY HEART</span></h1>
        <p className="hero-tagline">
          Built by memories, powered by loyalty.
        </p>
        <a href="#timeline" className="hero-scroll-indicator">
          <span>↓</span>
        </a>
      </div>
    </div>
  )
}

export default HeroSection
