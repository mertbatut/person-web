import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className='Footer1' style={{height:"454px", background:"#F9F9F9"}}>
                    <p style={{fontSize:"48px", fontWeight:"700"}}>Send me a message!</p>
                    <p id='FooterP' style={{fontSize:"24px", fontWeight:"400", color:"#120B39", width:"448px"}}>Got a question or proposal, or just want to say hello? Go ahead.</p>
                    <p style={{fontSize:"20px", textDecoration:"underline"}}>almilasucode@gmail.com</p>
                    <div className='FooterIcon'>
                    <img src="https://placehold.co/35x35" alt="" style={{marginRight:"1rem"}} />
                    <img src="https://placehold.co/35x35" alt=""  />
                    <img src="https://placehold.co/35x35" alt="" style={{marginLeft:"1rem"}} />
                    <img src="https://placehold.co/35x35" alt="" style={{marginLeft:"1rem"}} /> 
                    </div>
                    
                </div>
                <div className='Footer2'>
                  
                </div>
            </div>
        )
    }
}
