import React, { useState, useEffect } from 'react'
import './SectionStyles.css'

const QUOTES = [
  "A true friend is one soul in two bodies.",
  "We didn't realize we were making memories, we just knew we were having fun.",
  "Brothers don't let each other wander in the dark alone.",
  "Good friends know all your stories. Best friends helped you write them."
]

const QuotesSection = () => {
  const [index, setIndex] = useState(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length)
      setKey(k => k + 1) // Trigger re-animation
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-container">
      <h2 className="section-title">Words to Live By</h2>
      <div className="quote-card">
        <p key={key} className="typewriter-text">"{QUOTES[index]}"</p>
      </div>
    </section>
  )
}

export default QuotesSection
