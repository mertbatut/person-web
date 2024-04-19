import React, { Component } from 'react'
import './style.css'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className='SkillBoxes'>
                    
                    <div className='Skill1' >
                    <h1 className='SkillBoxesText'>Skills</h1>
                        <div className='SkillBoxes1'>

                            <div className='Skillsa'><img src="Java.png" alt="" /><h1>JAVASCRIPT</h1></div>
                            <div className='Skillsa'><img src="react.png" alt="" /><h1> REACT</h1></div>
                            <div className='Skillsa'><img style={{ background: "#764ABC" }} src="redux.png" alt="" /><h1> REDUX</h1></div>

                        </div>
                        <div className='SkillBoxes2'>
                            <div className='Skillsa'><img src="node.jpg" alt="" /><h1> NODE</h1></div>
                            <div className='Skillsa'><img src="vs code.png" alt="" /> <h1>VS CODE</h1></div>
                            <div className='Skillsa'><img src="figma.jpg" alt="" /><h1>FIGMA</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
