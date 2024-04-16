import React, { Component } from 'react'
import './style.css'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <h1 className='SkillBoxes'>Skills</h1>
                <div className='SkillBoxes1'>
                    <div className='Skillsa'><h1><img src="Java.png" alt="" />JAVASCRIPT</h1></div>
                    <div className='Skillsa'><h1><img src="react.png" alt="" /> REACT</h1></div>
                    <div className='Skillsa'><h1><img src="https://placehold.co/120*120" alt="" /> REDUX</h1></div>

                </div>
                <div className='SkillBoxes2'>
                    <div className='Skillsa'><h1><img src="node.jpg" alt="" /> NODE</h1></div>
                    <div className='Skillsa'><h1><img src="https://placehold.co/120*120" alt="" /> VS CODE</h1></div>
                    <div className='Skillsa'><h1><img src="https://placehold.co/120*120" alt="" />FIGMA</h1></div>
                </div>

            </div>
        )
    }
}
