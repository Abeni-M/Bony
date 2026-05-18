import React from 'react'
import './SectionStyles.css'

const SplitPersonality = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Dynamic Duo</h2>
      <div className="personality-grid">
        <div className="p-card tilt-card">
          <div className="p-icon">🧊</div>
          <h3>The Calm One</h3>
          <p>Always keeping things chill when situations get crazy.</p>
        </div>
        <div className="p-card tilt-card">
          <div className="p-icon">🎭</div>
          <h3>STRONG GIRLS NEVER GIVE UP FOR CHALLENGES</h3>
          <p>  She is strong, independent, and never gives up on challenges.</p>
        </div>
        <div className="p-card tilt-card">
          <div className="p-icon">💻</div>
          <h3>She is a  COOL AND INTELLIGENT </h3>
          <p> Very hard to impress  and very hard to tease</p>
        </div>
        <div className="p-card tilt-card">
          <div className="p-icon">🧨</div>
          <h3>She is my best friend</h3>
          <p>She is my best friend, and I am lucky to have her in my life.  </p>
        </div>
      </div>
    </section>
  )
}
export default SplitPersonality
