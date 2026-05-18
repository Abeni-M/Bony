import React from 'react'
import './SectionStyles.css'

const FunMoments = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Bro Code</h2>
      <div className="cards-grid">
        <div className="glitch-card">
          <div className="glitch-icon">🎮</div>
          <h3>Gaming Legends</h3>
          <p>Carrying the squad and clutching up when it matters most. Unmatched teamwork.</p>
        </div>
        <div className="glitch-card">
          <div className="glitch-icon">🍔</div>
          <h3>Food Runs</h3>
          <p>2 AM fast food missions and arguing over the best spots to eat.</p>
        </div>
        <div className="glitch-card">
          <div className="glitch-icon">🔥</div>
          <h3>Ride or Die</h3>
          <p>No questions asked, absolute loyalty in every situation. Got your back.</p>
        </div>
      </div>
    </section>
  )
}

export default FunMoments
