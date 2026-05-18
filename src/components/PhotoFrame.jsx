import React from 'react'
import { slideshowImages } from './PhotoSlideshow'
import './PhotoFrame.css'

const PhotoFrame = () => {
  if (!slideshowImages || slideshowImages.length === 0) return null

  // Duplicate images significantly to ensure smooth infinite scrolling
  const allImages = [
    ...slideshowImages, ...slideshowImages, ...slideshowImages, ...slideshowImages, 
    ...slideshowImages, ...slideshowImages, ...slideshowImages, ...slideshowImages
  ]

  return (
    <div className="photo-frame-root">
      <div className="photo-frame-overlay" />
      
      {/* Top Bar */}
      <div className="frame-track frame-top">
        <div className="frame-strip strip-horizontal">
          {allImages.map((img, i) => (
            <img key={`top-${i}`} src={img} className="frame-img" alt="Bony" />
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="frame-track frame-bottom">
        <div className="frame-strip strip-horizontal-reverse">
          {allImages.map((img, i) => (
            <img key={`bottom-${i}`} src={img} className="frame-img" alt="Bony" />
          ))}
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="frame-track frame-left">
        <div className="frame-strip strip-vertical">
          {allImages.map((img, i) => (
            <img key={`left-${i}`} src={img} className="frame-img" alt="Bony" />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="frame-track frame-right">
        <div className="frame-strip strip-vertical-reverse">
          {allImages.map((img, i) => (
            <img key={`right-${i}`} src={img} className="frame-img" alt="Bony" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotoFrame
