import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className='bg-[#CBF281]'>
        <div className='ProjectsMain flex flex-col items-center gap-12'>
          <h1 className='font-bold text-[48px] text-[#4731D3] pt-16'>PROJECTS</h1>
          <div className='Projects1 flex flex-col md:flex-row items-center w-full md:w-[960px] h-auto md:h-[360px] shadow-2xl bg-[#FFFFFF] rounded-xl'>
            <img className='ProjectImg w-full md:w-[360px] h-[360px] rounded-xl object-cover' src="https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPtnO-GXBRCBHi2rGnCsczQ7er3Bmb91LBGB1GsCq1CNae240tOC0tYcm6zZZjLk8xsooaewr4OtELg1Q9q5c3He9s2iTFQ0Htgk7LTeH6T4nSd5Ey1qHl93B8Ex46hSBruWXQlzY-IZ4os7TFNGghT48Mxj7E2lUmacbaHFAr44snS5Dt5E7JWL~VEvkJpbV3QtSOuw8Xkwm2JvJ1f5BiP0V5lZgDP~yYLAQo3vKxL3aypWZN0fd7uURMzxsLg5nIDx-JfILnqWMH1UpFX6kDg1IoyTE122kIM81rufUqrFqlF3YhiIYEWpi-5UhRM4JqPGjQS3FKL1wj8TpvVumw__" alt="" />
            <div className='ProjectsText flex flex-col p-4 md:pl-12'>
              <h1 className='font-bold text-[32px] text-[#4338CA]'>Workintech</h1>
              <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
              <div className='TechStack flex flex-wrap gap-4 mt-4'>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>react</button>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>redux</button>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>vercel</button>
              </div>
              <span className='Details flex gap-8 pt-4'>
                <a href=""><p className='font-medium text-base text-[#120B39]'>View Site</p></a>
                <a href=""><p className='font-medium text-base text-[#120B39]'>Github</p></a>
              </span>
            </div>
          </div>
          <div className='Projects1 flex flex-col md:flex-row items-center w-full md:w-[960px] h-auto md:h-[360px] drop-shadow-2xl bg-[#FFFFFF] rounded-xl mb-20'>
            <img className='ProjectImg w-full md:w-[360px] h-[360px] rounded-xl object-cover' src="https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNAziXfSTzylWmW-ph6Gjnh95Pcyb4mbBWzkyMY3f-Cp9LQ2Gu3r6aeLJQB~nMJ7N~REXGZDvwm01eHGbg1wySSecGMPBM2KJJs8XEpu254j7pHNi-xahi~XaR8xiZXcI9393pg75y3J5ZNZEtK~FNj-OvTIn2DU84Cjb~Hl9dzcksRw0Qydo~HYWN3JzYZ1coXowuI7cooIJaz6-OycVhZg4yaaoDZ46~rreJPR82QoIZt0IpDwXww1iuL1mA-Y0j3SS93YzPZaokaWS0nsIAylj2Uv11iko9Fc~z6f1hNNR~5YP06cc3IpDv70vtEgzRu56CW9BMrWSBwWoz9Org__" alt="" />
            <div className='ProjectsText flex flex-col p-4 md:pl-12'>
              <h1 className='font-bold text-[32px] text-[#4338CA]'>Journey</h1>
              <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
              <div className='TechStack flex flex-wrap gap-4 mt-4'>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>react</button>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>redux</button>
                <button className='ProjectsBtn w-[68px] h-[31px] px-5 py-2 bg-[#4731D3] rounded-[23px] flex items-center justify-center text-[#FFFFFF]'>vercel</button>
              </div>
              <span className='Details flex gap-8 pt-4'>
                <a href=""><p className='font-medium text-base text-[#120B39]'>View Site</p></a>
                <a href=""><p className='font-medium text-base text-[#120B39]'>Github</p></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
