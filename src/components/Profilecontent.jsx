import  { Component } from 'react';
import '../style.css';
export default class Profilecontent extends Component {
  render() {
    return (
      <div className='bg-[#160F44] p-4'>
        <span className='text-[36px] md:text-[48px] font-bold text-[#D6E9B3] justify-center flex'>Profil</span>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center'>
          <div className='w-full lg:w-auto'>
            <div className=''></div>
          </div>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex gap-[24px] flex-col'>
              <div className='font-semibold text-[24px] lg:text-[30px] text-[#FFFFFF]'>Temel Bilgiler</div>
              <div className='flex flex-col gap-4 lg:gap-8'>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>Doğum Tarihi :</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>11.08.1993</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>İkamet Şehri :</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF] pl-2'>Bursa</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>Eğitim Durumu</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>Beykent Üniversitesi İngilizce İşletme</div>
                </div>
                <div className='flex gap-4 lg:gap-8'>
                  <div className='font-semibold text-[14px] lg:text-[16px] text-[#D6E9B3]'>Tercih Ettiği Rol</div>
                  <div className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>Frontend, UI</div>
                </div>
              </div>
            </div>
            <div className='ProImage py-12'>
              <img className='rounded-xl w-full lg:w-[300px] h-auto lg:h-[290px]' src="/images/notification.jpg" alt="Profile" />
            </div>
            <div className='w-full lg:w-[300px] h-auto lg:h-[290px] flex flex-col gap-4 lg:gap-8'>
              <div className='font-normal text-[24px] lg:text-[30px] text-[#FFFFFF]'>HAKKIMDA</div>
              <div className='max-w-[700px] max-h-[290px] overflow-auto scrollbar-custom'>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Frontend Developer | Angular & React Developer | C# ve .NET
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Web geliştirme alanında uzmanlaşmış bir frontend developer olarak, Angular ve React teknolojileriyle modern, performanslı ve kullanıcı dostu web uygulamaları geliştiriyorum. Aynı zamanda, C# ve .NET teknolojileri üzerinde çalışarak full-stack geliştirme becerilerimi artırmaya odaklanıyorum.
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Yenilikçi çözümler üretmek, karmaşık problemleri çözmek ve teknolojiyi öğrenme tutkusuyla birleştirerek projelere değer katmak temel hedeflerim arasında. Bu yaklaşım sayesinde hem frontend hem de backend süreçlerinde etkili bir şekilde katkı sağlama yetkinliğimi sürekli geliştirmekteyim.
                </p>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Ana Yeteneklerim:
                </p>
                <ul className='list-disc pl-6 font-normal text-[14px] lg:text-[16px] text-[#FFFFFF] max-w-[700px]'>
                  <li>Frontend: Angular, React, TypeScript, JavaScript</li>
                  <li>Backend: C#, .NET, RESTful API geliştirme</li>
                  <li>Single Page Application (SPA) geliştirme</li>
                  <li>UI/UX odaklı tasarım ve uygulama</li>
                  <li>Performans optimizasyonu ve modüler kod yazımı</li>
                </ul>
                <p className='font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  Güçlü Yönlerim:
                </p>
                <ul className='list-disc pl-6 font-normal text-[14px] lg:text-[16px] text-[#FFFFFF]'>
                  <li>Takım çalışmasına yatkınlık ve etkili iletişim becerileri</li>
                  <li>Hızlı öğrenme ve yeni teknolojilere adaptasyon</li>
                  <li>Kod kalitesi ve ölçeklenebilirlik odaklı yaklaşım</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
