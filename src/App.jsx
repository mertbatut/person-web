import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Profilecontent from './components/Profilecontent.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/projects.jsx'
import './i18n';
import ScrollToTop from './components/ScroolToTop.jsx'
import { ThemeProvider } from './context/ThemeContext'
import './theme.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  const [, ] = useState(0)

  return (
    <ThemeProvider>
      <div>
        <HeroSection/>
        <Skills/>
        <Profilecontent/>
        <Projects/>
        <Footer/>
        <ScrollToTop/>
        <SpeedInsights />
      </div>
    </ThemeProvider>
  )
}

export default App