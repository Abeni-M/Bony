import React, { useEffect, useState, useRef } from 'react'
import './SectionStyles.css'

const StatCounter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="stat-card tilt-card romantic-stat">
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const FriendshipStats = () => {
  return (
    <section className="section-container">
      <h2 className="section-title romantic-title">The Legacy</h2>
      <div className="stats-grid romantic-stats-grid">
        <StatCounter end={7} label="Years Through Challenges" />
        <StatCounter end={100} label="Beautiful Memories" />
        <StatCounter end={1000} label="Shared Smiles" />
      </div>
    </section>
  )
}

export default FriendshipStats
