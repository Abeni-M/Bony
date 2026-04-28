import React, { useState, useEffect } from 'react'
import './PhotoSlideshow.css'

const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', { eager: true })
export const slideshowImages = Object.keys(imageModules)
  .filter((p) => !p.includes('profile.jpg'))
  .map((p) => imageModules[p].default)

const PhotoSlideshow = ({ intervalMs = 4500 }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slideshowImages.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [intervalMs])

  if (slideshowImages.length === 0) {
    return <div className="slideshow-empty">No photos found 📷</div>
  }

  // Get current image + the next 3 for the stack
  const visibleIndices = []
  for (let i = 0; i < Math.min(4, slideshowImages.length); i++) {
    visibleIndices.push((index + i) % slideshowImages.length)
  }

  return (
    <div className="gallery-container">
      <div className="photo-stack">
        {visibleIndices.reverse().map((idx, stackPos) => (
          <div 
            key={`${idx}-${stackPos}`}
            className="stacked-photo"
            style={{
              '--stack-index': 3 - stackPos, // 0 is top
              backgroundImage: `url(${slideshowImages[idx]})`
            }}
          >
            <div className="photo-inner-border" />
          </div>
        ))}
      </div>
      <div className="gallery-reflection" />
    </div>
  )
}

export default PhotoSlideshow
