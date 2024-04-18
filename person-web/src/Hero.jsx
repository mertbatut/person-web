import React, { Component } from 'react'
import './style.css'
import ToggleButton from './ToggleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HeroSection extends Component {
  
  render() {
    return (
      <>
        <div className='row' style={{ height: "671px" }}>
          <div className='Blue col'>
            <div className='row justify-content-end'>
              <div className='col-2 BlueChangeLang'>
                <span className='ChangeLang'>TÜRKÇE</span>'YE GEÇ
              </div>
            </div>
            <div className='row justify-content-center BlueContentHeader'>
              <div className='col-6'>
                almila
              </div>
            </div>
            <div className='row justify-content-center BlueContent'>
              <div className='col-6'>
                <div className='row BlueContent1'>
                  I'm a Frontend Developer
                </div>
                <div className='row BlueContent2'>
                  ...who likes to craft solid and scalable frontend products with great user experiences.
                </div>
                <div className='row'>
                  <div className='col'>
                    <button className='CustomGitBtn'><i class="fa-brands fa-github"></i>Github</button>
                  </div>
                  <div className='col'>
                    <button className='CustomLinkBtn'> Linkedin</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='Yellow col-4'>
            <div className='ImageDiv'></div>
          </div>
          {/* <div className='Mavi' >
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
          </div> */}
        </div>
      </>
    )
  }
}
