import React from 'react'
import './SectionStyles.css'

const MemoryMap = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Global Footprint</h2>
      <div className="map-container">
        <div className="map-bg"></div>
        <div className="map-pin pin-1"><span>Addis Ababa</span></div>
        <div className="map-pin pin-2"><span>Adama</span></div>
        <div className="map-pin pin-3"><span>Hawassa</span></div>
      </div>
    </section>
  )
}

export default MemoryMap
