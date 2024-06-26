import React, { Component } from 'react';

export default class Profilecontent extends Component {
  render() {
    return (
      <div className='bg-[#4731D3] p-4'>
        <span className='text-[36px] md:text-[48px] font-bold text-[#CBF281] justify-center flex'>Profil</span>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center'>
          <div className='w-full lg:w-auto'>
            <div className=''></div>
          </div>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex gap-[24px] flex-col'>
              <div className='font-semibold text-[24px] lg:text-[30px] text-[#FFFFFF]'>Temel Bilgiler</div>
              <div className='flex flex-col gap-4 lg:gap-8'>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#CBF281]'>Doğum Tarihi :</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>11.08.1993</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#CBF281]'>İkamet Şehri :</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF] pl-2'>Bursa</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#CBF281]'>Eğitim Durumu</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>Beykent Üniversitesi İngilizce İşletme</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#CBF281]'>Tercih Ettiği Rol</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>Frontend, UI</div>
                </div>
              </div>
            </div>
            <div className='ProImage py-12'>
              <img className='rounded-xl w-full lg:w-[300px] h-auto lg:h-[290px]' src="https://s3-alpha-sig.figma.com/img/ec36/93fd/2fc15cffc612b2448fb1f38e4c8c72fd?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p70T21cjHi~Vv1ZsQaryHJd1YcapmluNAG7juNSFVHCfXs67gH2w~0QABWKOzF2qmIwgs5tY94LJChKK~JQU1eYk-V7uPPCouYa8B6gonFrGddt0Rz-9geeOqP3uRy1Go0WRDWDwzLe9pvudApEH-~orWS4a8frVlTge0RAgHHsogDa-VdajGgjzpTkSnJJc5q4VKi9XVGG9S3tWx3XebneHPD6AYSrxTVy2plTO4hio~-QL1OlsXgocRPw9XSj~~5uDSgNTuo78zxr7uZS1LuA-dp2JiydwhpBcu96O7vGZ7gVGOlZ~Bl1sbQXUTRpNJ18r0NXzlaGPF6rqDgd-Ow__" alt="Profile" />
            </div>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex flex-col gap-4 lg:gap-8'>
              <div className='font-normal text-[24px] lg:text-[30px] text-[#FFFFFF]'>HAKKIMDA</div>
              <div className=''>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
