import React, { Component } from 'react'
import './style.css'
import './dark.scss'
import ToggleButton from './ToggleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import githubSvg from "./assets/github.svg";
import linkedinSvg from "./assets/linkedin.svg";

export default class HeroSection extends Component {
  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='row' style={{ height: "671px" }}>
            <div className='Blue col'>
              <div className='col-12 text-end BlueChangeLang'>
                <span className='ChangeLang'>TÜRKÇE</span>'YE GEÇ
              </div>
              <div className='offset-md-3 col-6 justify-content-center BlueContentHeader mb-5'>
                almila
              </div>
              <br />
              <div className='offset-md-3 col-6 BlueContent1 mb-5'>
                I'm a Frontend Developer
              </div>
              <div className='offset-md-3 col-6 BlueContent2 mb-5'>
                ...who likes to craft solid and scalable frontend products with great user experiences.
              </div>
              <div className='offset-md-3 col-6 ButtonRow'>
                <button className='CustomGitBtn'>
                  <img src={githubSvg} alt="Github" />
                  Github</button>
                <button className='CustomLinkBtn'>
                  <img src={linkedinSvg} alt="Linkedin" />
                  Linkedin</button>
              </div>
            </div>
            <div className='Yellow col-4'>
              <ToggleButton />
              <div className='ImageDiv'></div>
            </div>
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
