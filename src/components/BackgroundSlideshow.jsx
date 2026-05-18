import React, { useState, useEffect } from 'react'
import { slideshowImages } from './PhotoSlideshow'
import './BackgroundSlideshow.css'

const EMOJIS = ["✨", "🤍", "🦋", "💫", "🥂", "🌹", "✨", "🤍"]

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-slideshow-root">
      {slideshowImages.map((img, i) => (
        <div 
          key={i}
          className={`bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="bg-slideshow-overlay" />
      
      {/* Floating Emojis */}
      {EMOJIS.map((emoji, idx) => (
        <div 
          key={idx} 
          className="floating-emoji"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${1.5 + Math.random() * 1.5}rem`
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}

export default BackgroundSlideshow
