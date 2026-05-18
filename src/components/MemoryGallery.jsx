import React, { useState, useEffect } from 'react'
import { slideshowImages } from './PhotoSlideshow'
import './SectionStyles.css'

const MemoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-container full-width">
      <h2 className="section-title romantic-title">Cherished Moments</h2>
      <div className="romantic-gallery-container">
        {slideshowImages.map((img, i) => {
          let offset = i - currentIndex
          if (offset < 0) offset += slideshowImages.length
          
          const isActive = offset === 0
          const isNext1 = offset === 1 || (currentIndex === slideshowImages.length - 1 && i === 0)
          const isPrev1 = offset === slideshowImages.length - 1 || (currentIndex === 0 && i === slideshowImages.length - 1)
          const isNext2 = offset === 2 || (currentIndex >= slideshowImages.length - 2 && (i === 0 || i === 1))
          const isPrev2 = offset === slideshowImages.length - 2 || (currentIndex <= 1 && (i === slideshowImages.length - 1 || i === slideshowImages.length - 2))
          
          let className = 'polaroid-card hidden-polaroid'
          if (isActive) className = 'polaroid-card active-polaroid'
          else if (isNext1) className = 'polaroid-card next-polaroid'
          else if (isPrev1) className = 'polaroid-card prev-polaroid'
          else if (isNext2) className = 'polaroid-card next2-polaroid'
          else if (isPrev2) className = 'polaroid-card prev2-polaroid'

          return (
            <div key={i} className={className}>
              <div className="polaroid-inner">
                <img src={img} alt={`Memory ${i}`} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MemoryGallery
