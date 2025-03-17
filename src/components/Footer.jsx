import { useState, useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const FooterContent = ({ t }) => {
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
    <footer id="contact" ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Geometrik arka plan şekilleri */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A1259]/80 via-[#121139] to-[#0A0A29] opacity-90"></div>
        
        {/* Futuristic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 right-0 top-0 bottom-0" 
                style={{
                  backgroundImage: 'linear-gradient(to right, #CBF281 1px, transparent 1px), linear-gradient(to bottom, #CBF281 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}>
          </div>
        </div>
        
        {/* Glowing accent shapes */}
        <div className="absolute top-[20%] -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4832D3]/30 to-[#160f44]/0 blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-[80%] h-[500px] rounded-full bg-[#CBF281]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* İçerik Bölümü */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Başlık */}
            <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block relative mx-auto">
                <div className="absolute top-0 -left-6 w-6 h-6 border-t-2 border-l-2 border-[#CBF281]"></div>
                <div className="absolute top-0 -right-6 w-6 h-6 border-t-2 border-r-2 border-[#CBF281]"></div>
                <div className="absolute -bottom-2 -left-6 w-6 h-6 border-b-2 border-l-2 border-[#CBF281]"></div>
                <div className="absolute -bottom-2 -right-6 w-6 h-6 border-b-2 border-r-2 border-[#CBF281]"></div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-1 text-white bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text px-4">
                  {t('footer.title')}
                </h2>
              </div>
            </div>
            
            {/* Açıklama */}
            <p className={`text-xl text-gray-300 max-w-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t('footer.description')}
            </p>
            
            {/* Email Butonu */}
            <a 
              href={`mailto:${t('footer.email')}`}
              className={`inline-flex items-center px-8 py-3 bg-[#CBF281] text-[#160f44] font-semibold rounded-full hover:bg-white transition duration-300 shadow-lg shadow-[#CBF281]/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <i className="fas fa-envelope mr-2"></i>
              {t('footer.email')}
            </a>
            
            {/* Sosyal Medya İkonları */}
            <div className={`flex items-center justify-center space-x-4 md:space-x-6 mt-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="https://www.facebook.com/mert.batut.3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
                aria-label={t('footer.facebook')}
              >
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a 
                href="https://github.com/mertbatut" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
                aria-label={t('footer.github')}
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/mert-batut-066b96248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
                aria-label={t('footer.linkedin')}
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/mertbatut/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
                aria-label={t('footer.instagram')}
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Alt kısım - Telif hakkı bilgisi */}
          <div className={`mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p>© {new Date().getFullYear()} Mert Batut. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const Footer = withTranslation()(FooterContent);
export default Footer;