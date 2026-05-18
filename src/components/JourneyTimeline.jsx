import React from 'react'
import './SectionStyles.css'

const JourneyTimeline = () => {
  return (
    <section id="timeline" className="section-container">
      <h2 className="section-title">Interactive Timeline</h2>
      <div className="timeline-grid">
        <div className="timeline-item">
          <div className="timeline-year">01</div>
          <div className="timeline-card">
            <h3>First Meeting</h3>
            <p>The day two legends crossed paths and instantly clicked.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-year">02</div>
          <div className="timeline-card">
            <h3>First Trip</h3>
            <p>Hitting the road with zero plans and maximum chaos.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">03</div>
          <div className="timeline-card">
            <h3>Crazy Moments</h3>
            <p>Those 3 AM adventures we promised never to speak of again.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-year">04</div>
          <div className="timeline-card">
            <h3>Big Wins</h3>
            <p>Celebrating victories and levelling up in life side by side.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">05</div>
          <div className="timeline-card">
            <h3>Hard Times Together</h3>
            <p>When the world got tough, the brotherhood held strong.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline
