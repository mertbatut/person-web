import React, { Component } from 'react'
import './style.css'
import ToggleButton from './ToggleButton'





export default class HeroSection extends Component {
  render() {
    return (
      <>
        <div className='Mavi' >
          <span className='Turkce'><p> <strong>TÜRKÇE'YE GEÇ</strong></p></span>
          <span><p className='Brand'>almila</p></span>
          <div className='HeroContent'>
            <span className='HeroLeft'><p id='Textp1'>I'm a Frontend Developer</p></span>
            <span className='HeroAlt'><p id='Textp2'>...who likes to craft solid and scalable frontend products with great user experiences.</p></span>
            <span className='HeroBtn'><button className='GitBtn'> Github</button> <button className='LinkBtn'>  Linkedin</button></span>
            <img className='Profile1' src="Profile.png" alt="" width={350} height={375.89} />
          </div>

        </div>
        <div className='Sari'>
          <span className='Dark'><ToggleButton /></span>
        </div>
      </>
    )
  }
}
