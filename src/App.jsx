import { useState, useEffect } from 'react'
import './App.css'

import laptopOpen from './assets/laptop-open.png'
import laptopClosed from './assets/laptop-closed.png'


function App() {
  // tracks whether the laptop is opened or not - start is closed
  const [isLaptopOpen, setIsLaptopOpen] = useState(false)
  const [isPoweredOn, setIsPoweredOn] = useState(false)

  // sets up a scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop === 0 && isLaptopOpen) {
        // Scroll to top → close the laptop
        setIsLaptopOpen(false)
      } else if (scrollTop > 100 && !isLaptopOpen && isPoweredOn) {
        // Scroll down past 100px → open the laptop only if powered on
        setIsLaptopOpen(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLaptopOpen, isPoweredOn])

  const handlePowerOn = () => {
    setIsPoweredOn(true)
  }

  return (
    <div className="container">
      <div className="laptop">
        <img
          src={isLaptopOpen ? laptopOpen : laptopClosed}
          alt="Laptop"
          className="laptop-image"
        />
        {!isPoweredOn && (
          <button className="power-button" onClick={handlePowerOn}>
            Power On
          </button>
        )}
      </div>

      <div className="content">
        <h1>Scroll Down to Open the Laptop</h1>
        <p>Keep scrolling to simulate interaction...</p>
        <div style={{ height: '200vh' }}></div>
      </div>
    </div>
  )
}

export default App

