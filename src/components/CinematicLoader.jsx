import React, { useState, useEffect } from 'react'
import './CinematicLoader.css'

const CinematicLoader = ({ onFinish }) => {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500)
    const timer2 = setTimeout(() => setPhase(2), 3500)
    const timer3 = setTimeout(() => onFinish(), 5000)
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3) }
  }, [onFinish])

  return (
    <div className={`loader-root ${phase === 2 ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <h1 className={`loader-text ${phase >= 1 ? 'typing-active' : ''}`}>
          Two Legends. One Story.
        </h1>
        <div className="loader-glow"></div>
      </div>
    </div>
  )
}
export default CinematicLoader
