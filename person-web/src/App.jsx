import { useState } from 'react'
import './App.css'
import HeroSection from './Hero.jsx'
import Skills from './Skills.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HeroSection/>
        <Skills/>
        <Profile/>

      </div>
      
    </>
  )
}

export default App
