import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const ProfileCardContent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer ile görünürlük tespiti
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="profile" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa]">
      {/* Geometrik arka plan şekilleri */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[#f0f9ff] to-[#cbf3f0] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#cbf281] to-[#2dd4bf] rounded-tr-[40%] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Başlık alanı */}
        <div className="text-center mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-6 w-6 h-6 border-t-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute top-0 -right-6 w-6 h-6 border-t-2 border-r-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 border-b-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -right-6 w-6 h-6 border-b-2 border-r-2 border-[#CBF281]"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-1 text-[#333333] bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] text-transparent bg-clip-text px-4">
                {t('profile.header', 'Hakkımda')}
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              {t('profile.description', 'Kendimi ve yolculuğumu daha yakından tanıyın.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Temel Bilgiler Kartı */}
          <div 
            className={`transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{t('profile.basicInfo', 'Temel Bilgiler')}</h2>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="far fa-calendar-alt mr-3 text-[#2dd4bf]"></i>
                      {t('profile.birthDate', 'Doğum Tarihi')}:
                    </span>
                    <span className="text-gray-600">11.08.1993</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-map-marker-alt mr-3 text-[#2dd4bf]"></i>
                      {t('profile.residence', 'İkamet')}:
                    </span>
                    <span className="text-gray-600">Bursa</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-graduation-cap mr-3 text-[#2dd4bf]"></i>
                      {t('profile.education', 'Eğitim')}:
                    </span>
                    <span className="text-gray-600">Beykent Üniversitesi İşletme</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-laptop-code mr-3 text-[#2dd4bf]"></i>
                      {t('profile.preferredRole', 'Tercih Edilen Rol')}:
                    </span>
                    <span className="text-gray-600">Frontend Developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hakkımda Kartı */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-info-circle text-white text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{t('profile.aboutMe', 'Hakkımda')}</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>{t('profile.frontend', 'Frontend geliştirme konusunda React, JavaScript ve modern web teknolojileri kullanarak kullanıcı dostu arayüzler tasarlıyorum.')}</p>
                  <p>{t('profile.backend', 'Backend tarafında Node.js ile API geliştirme ve veritabanı entegrasyonları konusunda deneyim sahibiyim.')}</p>
                  <p>{t('profile.spa', 'Tek sayfa uygulamaları (SPA) geliştirme ve modern frontend framework\'leri kullanma konusunda uzmanlığım var.')}</p>
                  
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <i className="fas fa-star text-[#CBF281] mr-2"></i>
                      {t('profile.expertise', 'Uzmanlık Alanları')}
                    </h3>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>{t('profile.uiux', 'UI/UX tasarım prensiplerini uygulama')}</li>
                      <li>{t('profile.performance', 'Web performans optimizasyonu')}</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <i className="fas fa-check-circle text-[#CBF281] mr-2"></i>
                      {t('profile.strengths', 'Güçlü Yanlarım')}
                    </h3>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>{t('profile.teamwork', 'Takım çalışması ve iletişim')}</li>
                      <li>{t('profile.adaptation', 'Yeni teknolojilere hızlı adaptasyon')}</li>
                      <li>{t('profile.codeQuality', 'Temiz ve okunabilir kod yazma')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projelerim kartı - İlave Bölüm */}
        <div 
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{t('profile.career', 'Kariyer Yolculuğum')}</h2>
              </div>
              
              <div className="space-y-8">
                {/* Zaman Çizgisi */}
                <div className="relative border-l-2 border-[#CBF281] pl-8 pb-2">
                  <div className="absolute w-4 h-4 bg-[#CBF281] rounded-full -left-[9px] top-0"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-[#CBF281]/20 text-gray-700 px-3 py-1 rounded-full">2022 - Günümüz</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Senior Frontend Developer</h3>
                  <p className="text-gray-600">XYZ Teknoloji</p>
                  <p className="text-gray-600 mt-2">
                    {t('profile.recentWork', 'Modern web uygulamaları geliştirme, takım liderliği ve mimari kararlar alma konusunda deneyim.')}
                  </p>
                </div>
                
                <div className="relative border-l-2 border-[#CBF281] pl-8 pb-2">
                  <div className="absolute w-4 h-4 bg-[#CBF281] rounded-full -left-[9px] top-0"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-[#CBF281]/20 text-gray-700 px-3 py-1 rounded-full">2019 - 2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
                  <p className="text-gray-600">ABC Digital</p>
                  <p className="text-gray-600 mt-2">
                    {t('profile.prevWork', 'React ve JavaScript kullanarak kullanıcı arayüzleri geliştirme, responsive tasarım ve API entegrasyonları.')}
                  </p>
                </div>
                
                <div className="relative border-l-2 border-[#CBF281] pl-8">
                  <div className="absolute w-4 h-4 bg-[#CBF281] rounded-full -left-[9px] top-0"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-[#CBF281]/20 text-gray-700 px-3 py-1 rounded-full">2017 - 2019</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Junior Web Developer</h3>
                  <p className="text-gray-600">Web Stüdyo</p>
                  <p className="text-gray-600 mt-2">
                    {t('profile.earlyWork', 'HTML, CSS ve temel JavaScript kullanarak web siteleri geliştirme, WordPress temaları özelleştirme.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sayfa içi CSS */}
      <style>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

ProfileCardContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const ProfileCard = withTranslation()(ProfileCardContent);

export default ProfileCard;