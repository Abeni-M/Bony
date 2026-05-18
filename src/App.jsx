import React, { useState } from 'react'
import CinematicLoader from './components/CinematicLoader'
import HeroSection from './components/HeroSection'
import JourneyTimeline from './components/JourneyTimeline'
import MemoryGallery from './components/MemoryGallery'
import FriendshipStats from './components/FriendshipStats'
import SplitPersonality from './components/SplitPersonality'
import QuotesSection from './components/QuotesSection'
import HeartfeltMessage from './components/HeartfeltMessage'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import SecretEasterEgg from './components/SecretEasterEgg'
import BackgroundSlideshow from './components/BackgroundSlideshow'
import './App.css'
import './components/SectionStyles.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return <CinematicLoader onFinish={() => setLoaded(true)} />
  }

  return (
    <>
      <MusicPlayer />
      <BackgroundSlideshow />
      <div className="app-bg-glow" />
      <div className="particles-overlay" />
      
      <div className="app-root scroll-container">
        <HeroSection />
      <FriendshipStats />
      <SplitPersonality />
      <JourneyTimeline />
      <MemoryGallery />
      <QuotesSection />
      <HeartfeltMessage />
      <Footer />
      
        <SecretEasterEgg />
      </div>
    </>
  )
}

export default App
