import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
        <div>
        <div className='ProjectsMain'>
        <h1>PROJECTS</h1>
        <div className='Projects1'>
        
            <img className='ProjectImg' src="app-example1.png" alt="" />
            <div className='ProjectsText'>
                <h1 style={{color:"#4338CA"}}>WORKINTECH</h1>
                <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className='TechStack'>
                    <button className='ProjectsBtn'>react</button>
                    <button className='ProjectsBtn'>redux</button>
                    <button className='ProjectsBtn'>vercel</button>
                </div>
                <span className='Details'>
                    <p>View Site</p>
                    <p>Github</p>
                </span>
            </div>
        </div>
        <div className='Projects1' style={{marginBottom:"5rem"}}>
        <img className='ProjectImg' src="app-example2.png" alt="" />
            <div className='ProjectsText'>
                <h1 style={{color:"#4338CA"}}>Journey</h1>
                <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className='TechStack'>
                    <button className='ProjectsBtn'>react</button>
                    <button className='ProjectsBtn'>redux</button>
                    <button className='ProjectsBtn'>vercel</button>
                </div>
                <span className='Details'>
                    <p>View Site</p>
                    <p>Github</p>
                </span>
            </div>
        </div>
        </div>
        
      </div>
    )
  }
}
