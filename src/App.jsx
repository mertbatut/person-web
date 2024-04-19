import { useState } from 'react'
import './App.css'
import HeroSection from './Hero.jsx'
import Skills from './Skills.jsx'
import Profilecontent from './Profilecontent.jsx'
import Footer from './Footer.jsx'
import Projects from './projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HeroSection/>
        <Skills/>
        <Profilecontent/>
        <Projects/>
        <Footer/>

      </div>
      
    </>
  )
}

export default App
