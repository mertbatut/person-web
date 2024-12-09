import { Component } from 'react';
import Header from './Header';

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className='relative'>
          <Header />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col md:flex-row-reverse'>
            <div className='w-full md:w-4/12 h-[200px] md:h-[671px] bg-[#d6e9b3]'></div>
            <div className='w-full md:w-8/12 h-[200px] md:h-[671px] bg-[#160f44]'></div>
          </div>
          <div className='HeroContent relative z-10 px-4 md:pl-96'>
            <div className='HeroLeft justify-center flex flex-col items-center md:flex-row gap-4 md:gap-16 pt-16 md:pt-32'>
              <div className='text-left md:text-left'>
                <p className='font-bold text-[20px] md:text-[54px] text-[#4832D3] md:text-[#CBF281] w-full md:w-[33rem]'>
                  I am a Frontend Developer...
                </p>
                <p className='font-normal text-sm md:text-2xl text-[#4832D3] md:text-[#FFFFFF] w-full md:w-[33rem]'>
                  ...who likes to craft solid and scalable frontend products with great user experiences.
                </p>
                <div className='ButtonDiv flex flex-col items-center md:flex-row gap-4 md:gap-8 mt-4 md:mt-0'>
                  <button className='w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] md:text-[18px] text-[#3730A3]'>
                    <i className="fa-brands fa-github"></i> Github
                  </button>
                  <button className='w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] md:text-[18px] text-[#3730A3]'>
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </button>
                </div>
              </div>
              <div className='mt-8 md:mt-0'>
                <img className='w-full md:w-[18rem] lg:w-[21.9rem] h-auto md:h-[20rem] lg:h-[23.5rem] object-cover rounded-[18px]' src="/images/MertBatut.png" alt="Hero_Profile" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
