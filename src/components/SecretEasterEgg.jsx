import React, { useState } from 'react'
import './SectionStyles.css'

const SecretEasterEgg = () => {
  const [found, setFound] = useState(false)

  return (
    <>
      <div className="secret-trigger" onClick={() => setFound(true)} title="Find me"></div>
      {found && (
        <div className="secret-modal" onClick={() => setFound(false)}>
          <div className="secret-content">
            <h2>🔥 LEGENDARY STATUS UNLOCKED 🔥</h2>
            <p>You found the secret. True brotherhood is forever.</p>
            <div className="secret-glow"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default SecretEasterEgg
