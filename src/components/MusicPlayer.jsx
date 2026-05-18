import React, { useRef, useState, useEffect } from 'react'
import './MusicPlayer.css'

import localMusic from '../assets/music/Daniel_Amdemichael_አመሰግናለሁ_Ameseginalew_ዳንኤል_አምዴሚካኤል_New_Eth.m4a'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(true)

  // Try silent autoplay on mount; browsers may block — user can click to start
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.5
    audio.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else          { audio.play(); setPlaying(true) }
  }

  if (!visible) return null

  return (
    <div className={`music-player ${playing ? 'mp-playing' : 'mp-paused'}`}>
      <audio ref={audioRef} src={localMusic} loop preload="auto" />

      <button
        id="music-toggle-btn"
        className="mp-btn"
        onClick={toggle}
        title={playing ? 'Pause music' : 'Play romantic music'}
        aria-label={playing ? 'Pause music' : 'Play romantic music'}
      >
        {/* Animated bars when playing */}
        <span className="mp-bars" aria-hidden="true">
          {[1,2,3,4].map(i => <span key={i} className={`mp-bar mp-bar-${i}`} />)}
        </span>
        <span className="mp-note" aria-hidden="true">{playing ? '' : '♪'}</span>
      </button>

      {/* Label shown on hover */}
      <span className="mp-label">
        {playing ? 'Ameseginalew · Daniel' : 'Play Music'}
      </span>

      {/* Close */}
      <button
        className="mp-close"
        onClick={() => { audioRef.current?.pause(); setVisible(false) }}
        aria-label="Dismiss music player"
        title="Dismiss"
      >×</button>
    </div>
  )
}

export default MusicPlayer
