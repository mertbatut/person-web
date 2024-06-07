import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <>
        <div>
          <div className='HeroContent px-4 md:pl-96'>
            <div className='HeroLeft pl-[25rem] relative md:absolute flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-8 md:pt-32'>
              <div className='text-center md:text-left'>
                <p className='font-bold text-[36px] md:text-[54px] text-[#CBF281] md:w-[33rem]'>
                  I am a Frontend Developer...
                </p>
                <p className='font-normal text-xl md:text-2xl text-[#FFFFFF] md:w-[33rem]'>
                  ...who likes to craft solid and scalable frontend products with great user experiences.
                </p>
                <div className='ButtonDiv flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0'>
                  <button className='w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[18px] text-[#3730A3]'>
                    <i className="fa-brands fa-github"></i> Github
                  </button>
                  <button className='w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[18px] text-[#3730A3]'>
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </button>
                </div>
              </div>
              <div className='mt-8 md:mt-0'>
                <img className='w-full md:w-[21.9rem] h-auto md:h-[23.5rem] object-cover rounded-[18px]' src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJF4zCcGui-vJ9-EBhczEAWlUcXN6~7ElT~vpdmIuOUt8l~XqJPrL4BEiezJbq4QO9IA1Ie96PPWTGD-fdHrs2Ky~ADVjbiWkCCIjO17kbazgosan16~R~3SGlmfTMSRIy67anwAF6EcjHF7fC8dzb2-T3pEja87OmEXtS9cCnFAQPnr3m9rFLcuBB3ZpCD3NiMHUkZ4yrBY~RnYBLBQwo9faKyufBDETrkAWorr3dc1hCPpPmn27ktvxtCKW3Rd3R0yVXz0E0zBZcDb~AGU2kQH4evluWzhnd3NKhedAbSvqOD9mX4pqSQ35hGZEMF2aBR~BhljRVQyyWKttzr5Fg__" alt="Hero_Profile" />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse'>
            <div className='w-full md:w-4/12 h-[200px] md:h-[671px] bg-[#CBF281]'></div>
            <div className='w-full md:w-8/12 h-[200px] md:h-[671px] bg-[#4731D3]'></div>
          </div>
        </div>
      </>
    );
  }
}
