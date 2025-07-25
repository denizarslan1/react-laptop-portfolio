import { useState, useEffect } from 'react'

function App() {
  // tracks whether the laptop is opened or not - start is closed
  const [isOpened, setIsOpened] = useState(false)

  // sets up a scroll listener
  useEffect(() => {
    // checks if the page scrolled more than 100px vertically
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsOpened(true)
      }
    }

    // attaches the scroll event
    window.addEventListener('scroll', handleScroll)

    // removes the listener when compnent unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div style={{ height: '200vh', textAlign: 'center', paddingTop: '150px' }}>
      {!isOpened ? (
        <div>
          <img
            src="/assets/laptop-closed.png"
            alt="Closed Laptop"
            style={{ width: '300px' }}
          />
          <p>Scroll down to open the laptop</p>
        </div>
      ) : (
        <div>
          <img
            src="/assets/laptop-open.png"
            alt="Open Laptop"
            style={{ width: '400px' }}
          />
          <p>Laptop is open!</p>
        </div>
      )}
    </div>
  )
}

export default App

