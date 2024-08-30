import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import VideoDisplay from './components/VideoDisplay'
import BrandDesc from './components/BrandDesc'
import Contact from './components/Contact'

function App() {

  return (
    <div className='allContent'>
      <Header/>
      <VideoDisplay />
      <BrandDesc />
      <Contact />
    </div>
  )
}

export default App
