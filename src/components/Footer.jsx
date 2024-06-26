import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='Footer1 flex flex-col items-center py-16 bg-[#F9F9F9] gap-8'>
          <p className='text-3xl md:text-5xl font-bold text-[#4731D3]'>Send me a message!</p>
          <p className='text-lg md:text-2xl font-normal text-[#120B39]'>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <a href='mailto:mertbatut@gmail.com'>
            <p className='text-base md:text-xl font-medium text-[#4731D3]'>mertbatut@gmail.com</p>
          </a>
          <div className='FooterIcon flex gap-4'>
           <a href=""><i class="fa-solid fa-x fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-github fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-linkedin fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
