import React, { useEffect, useState } from 'react'

function App () {
  console.log('In Side App Component')
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [status, setStatus] = useState(navigator.onLine)

  const incrementCount = () => {
    setCount(prevState => prevState + 1)
  }

  const toggleColor = () => {
    setToggle(prevState => !prevState)
  }

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleOnLine = () => {
    setStatus(true)
  }

  const handleOffLine = () => {
    setStatus(false)
  }

  useEffect(() => {
    document.title = `You clicked ${count}`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnLine)
    window.addEventListener('offline', handleOffLine)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnLine)
      window.removeEventListener('offline', handleOffLine)
    }
  //  runs on component mount and unmount
  }, [count]
  )
  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>Count {count}</button>
      <h2>Toggle Light</h2>
      <div style={{ width: '20px', height: '20px', background: toggle ? 'yellow' : 'grey' }} onClick={toggleColor} />
      <h2>Mouse Positions</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
      <h2>Online Status</h2>
      <p>You are <strong>{status ? 'Online' : 'Offline'}</strong></p>
    </>
  )
}

export default App
