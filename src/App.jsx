import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Profilecontent from './components/Profilecontent.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/projects.jsx'
import './i18n';
import ScrollToTop from './components/ScroolToTop.jsx'

function App() {
  const [, ] = useState(0)

  return (
    <>
      <div>
        <HeroSection/>
        <Skills/>
        <Profilecontent/>
        <Projects/>
        <Footer/>
        <ScrollToTop/>
      </div>
      
    </>
  )
}

export default App
