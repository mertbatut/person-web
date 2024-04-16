import { useState } from 'react'
import './App.css'
import HeroSection from './Hero.jsx'
import Skills from './Skills.jsx'
import Profilecontent from './Profilecontent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HeroSection/>
        <Skills/>
        <Profilecontent/>

      </div>
      
    </>
  )
}

export default App
