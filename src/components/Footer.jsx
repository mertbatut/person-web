import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className='Footer1 flex flex-col items-center py-16 bg-[#F9F9F9] gap-8' >
                    <p className='text-5xl font-bold text-[#4731D3]'>Send me a message!</p>
                    <p className='text-2xl font-normal text-[#120B39]' >Got a question or proposal, or just want to say hello? Go ahead.</p>
                   <a href=""> <p className='text-xl font-medium text-[#4731D3]'>mertbatut@gmail.com</p> </a>
                    <div className='FooterIcon flex gap-4'>
                        <img src="https://placehold.co/35x35" alt=""/>
                        <img src="https://placehold.co/35x35" alt=""/>
                        <img src="https://placehold.co/35x35" alt=""/>
                        <img src="https://placehold.co/35x35" alt=""/>
                    </div>

                </div>
                <div className='Footer2'>

                </div>
            </div>
        )
    }
}
