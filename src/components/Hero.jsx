import { Component } from 'react';
import Header from './Header';

export default class Hero extends Component {
  render() {
    return (
      <>
        <div id="home" className="relative">
          {/* Web Düzeninde Görünen Alan */}
          <div className="hidden md:block">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row-reverse">
              <div className="w-full md:w-4/12 h-[671px] bg-[#d6e9b3]"></div>
              <div className="w-full md:w-8/12 h-[671px] bg-[#160f44]"></div>
            </div>
            <div className="HeroContent relative z-10 px-4 md:pl-96">
              <div className="HeroLeft justify-center flex flex-col items-center md:flex-row md:gap-16 pt-16">
                <div className="text-left md:text-left">
                  <p className="font-bold text-[20px] md:text-[54px] text-[#4832D3] md:text-[#CBF281] w-full md:w-[33rem]">
                    Mert Batut | Frontend Developer
                  </p>
                  <p className="font-normal text-sm md:text-2xl text-[#4832D3] md:text-[#FFFFFF] w-full md:w-[40rem]">
                    Modern ve ölçeklenebilir frontend çözümleri üretmeye tutkuyla
                    bağlı bir Frontend Developer’ım. Kullanıcı odaklı, estetik ve
                    performans odaklı tasarımlar ile işlevselliği birleştirerek üst
                    düzey kullanıcı deneyimleri sunmayı hedefliyorum.
                  </p>
                  <div className="ButtonDiv flex flex-col items-center md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 lg:gap-0">
                    <button className="w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] md:text-[18px] text-[#3730A3]">
                      <a
                        className="no-underline flex items-center gap-2 text-[#160F44]"
                        href="https://github.com/mertbatut"
                        target="blank"
                      >
                        <i className="fa-brands fa-github"></i> Github
                      </a>
                    </button>
                    <button className="w-full md:w-[127px] h-[52px] rounded-md border flex flex-row items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] md:text-[18px] text-[#3730A3]">
                      <a
                        className="flex items-center gap-2 no-underline text-[#160F44]"
                        href="https://www.linkedin.com/in/mert-batut-066b96248/"
                        target="blank"
                      >
                        <i className="fa-brands fa-linkedin"></i> Linkedin
                      </a>
                    </button>
                  </div>
                </div>
                <div className="mt-8 md:mt-0">
                  <img
                    className="w-full md:w-[18rem] lg:w-[21.9rem] h-auto md:h-[20rem] lg:h-[23.5rem] object-cover rounded-[18px]"
                    src="/images/MertBatut.png"
                    alt="Hero_Profile"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Düzeninde Görünen Alan */}
          <div className="block md:hidden bg-[#160f44]">
            <Header />
            <div className="HeroContent relative z-10 px-4 pt-8">
              <div className="HeroLeft flex flex-col items-center text-center">
                <div>
                  <img
                    className="w-full h-auto object-cover rounded-[18px] mb-8"
                    src="/images/MertBatut.png"
                    alt="Hero_Profile"
                  />
                </div>
                <div>
                  <p className="font-bold text-[20px] text-[#CBF281] w-full">
                    Mert Batut | Frontend Developer
                  </p>
                  <p className="font-normal text-sm text-[#FFFFFF] w-full mt-4">
                    Modern ve ölçeklenebilir frontend çözümleri üretmeye tutkuyla
                    bağlı bir Frontend Developer’ım. Kullanıcı odaklı, estetik ve
                    performans odaklı tasarımlar ile işlevselliği birleştirerek üst
                    düzey kullanıcı deneyimleri sunmayı hedefliyorum.
                  </p>
                  <div className="ButtonDiv flex flex-col gap-4 mt-4">
                    <a
                      className="w-full h-[52px] rounded-md border flex items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] text-[#3730A3] no-underline"
                      href="https://github.com/mertbatut"
                      target="blank"
                    >
                      <i className="fa-brands fa-github"></i> Github
                    </a>
                    <a
                      className="w-full h-[52px] rounded-md border flex items-center justify-center gap-3 py-3 px-[20px] bg-[#FFFFFF] font-semibold text-[16px] text-[#3730A3] no-underline"
                      href="https://www.linkedin.com/in/mert-batut-066b96248/"
                      target="blank"
                    >
                      <i className="fa-brands fa-linkedin"></i> Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
