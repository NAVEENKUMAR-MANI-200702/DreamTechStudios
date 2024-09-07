import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import VideoDisplay from './components/VideoDisplay'
import BrandDesc from './components/BrandDesc'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {

  return (
    <div className='allContent'>
      <Header/>
      <VideoDisplay />
      <BrandDesc />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
