import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const ProfileCardContent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    // Store current value of the ref in a variable to use in cleanup
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="profile" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f8f9fa]">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[#f0f9ff] to-[#cbf3f0] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#cbf281] to-[#2dd4bf] rounded-tr-[40%] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-3 sm:-left-6 w-3 sm:w-6 h-3 sm:h-6 border-t-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute top-0 -right-3 sm:-right-6 w-3 sm:w-6 h-3 sm:h-6 border-t-2 border-r-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -left-3 sm:-left-6 w-3 sm:w-6 h-3 sm:h-6 border-b-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -right-3 sm:-right-6 w-3 sm:w-6 h-3 sm:h-6 border-b-2 border-r-2 border-[#CBF281]"></div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#333333] bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] text-transparent bg-clip-text px-2 sm:px-4">
                {t('profile.header')}
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 px-2">
              {t('profile.description')}
            </p>
          </div>
        </div>

        {/* Unified Profile and Resume Section */}
        <div className={`transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-10 border-b pb-6 border-gray-100">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{t('profile.aboutMe')}</h2>
                    <p className="text-gray-600">Front-End Developer</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 sm:space-x-3">
                  <div className="bg-gray-50 py-2 px-3 sm:px-4 rounded-lg border border-gray-100 flex items-center">
                    <i className="fas fa-briefcase text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm sm:text-base text-gray-700">3+ {t('common.yearsExperience')}</span>
                  </div>
                  <div className="bg-gray-50 py-2 px-3 sm:px-4 rounded-lg border border-gray-100 flex items-center">
                    <i className="fas fa-map-marker-alt text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm sm:text-base text-gray-700">{t('profile.location')}</span>
                  </div>
                </div>
              </div>

              {/* Introduction & Personal Description */}
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div>
                  <div className="border-l-4 border-[#CBF281] pl-3 sm:pl-4 py-2 mb-6">
                    <p className="text-sm sm:text-base md:text-base text-gray-700">{t('profile.resumeIntro')}</p>
                  </div>
                  
                  {/* Key Information Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 sm:mb-8">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition duration-300">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-graduation-cap text-[#2dd4bf] mr-2"></i>
                        <span className="font-medium text-sm sm:text-base text-gray-700">{t('profile.education')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{t('profile.edDescription')}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition duration-300">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-laptop-code text-[#2dd4bf] mr-2"></i>
                        <span className="font-medium text-sm sm:text-base text-gray-700">{t('profile.currentRole')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">Frontend Developer</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition duration-300">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-code-branch text-[#2dd4bf] mr-2"></i>
                        <span className="font-medium text-sm sm:text-base text-gray-700">{t('skills.frontend')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">React, JavaScript, CSS</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition duration-300">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-server text-[#2dd4bf] mr-2"></i>
                        <span className="font-medium text-sm sm:text-base text-gray-700">{t('skills.backend')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">Node.js, Express</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Education & Training */}
                <div>
                  {/* Education Section */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-graduation-cap text-[#2dd4bf] mr-2"></i>
                      {t('profile.education')}
                    </h4>
                    
                    <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md mb-4">
                      <h5 className="font-semibold text-sm sm:text-base text-gray-800">{t('profile.universityName')}</h5>
                      <p className="text-xs sm:text-sm text-gray-600">{t('profile.universityDegree')}</p>
                      <p className="text-xs text-gray-500 mt-1">{t('profile.universityYear')}</p>
                    </div>
                  </div>
                  
                  {/* Professional Training Section */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-laptop-code text-[#2dd4bf] mr-2"></i>
                      {t('profile.training')}
                    </h4>
                    
                    <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                      <h5 className="font-semibold text-sm sm:text-base text-gray-800">{t('profile.bootcampName')}</h5>
                      <p className="text-xs sm:text-sm text-gray-600">{t('profile.bootcampPeriod')}</p>
                      <p className="text-xs sm:text-sm text-gray-700 mt-2">{t('profile.bootcampDesc')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Work Experience & Continued Learning */}
                <div>
                  {/* Work Experience Section */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-briefcase text-[#2dd4bf] mr-2"></i>
                      {t('profile.workExperience')}
                    </h4>
                    
                    <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md mb-4">
                      <h5 className="font-semibold text-sm sm:text-base text-gray-800">{t('profile.realEstateTitle')}</h5>
                      <p className="text-xs sm:text-sm text-gray-600">{t('profile.realEstatePeriod')}</p>
                      <p className="text-xs sm:text-sm text-gray-700 mt-2">{t('profile.realEstateDesc')}</p>
                    </div>
                  </div>
                  
                  {/* Continued Learning Section */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-code-branch text-[#2dd4bf] mr-2"></i>
                      {t('profile.continuedLearning')}
                    </h4>
                    
                    <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                      <p className="text-xs sm:text-sm text-gray-700">{t('profile.continuedLearningDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expertise Section */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-star text-[#CBF281] mr-2"></i>
                  {t('profile.expertise')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  <div className="flex items-center bg-[#f0f9ff] p-2 sm:p-3 rounded-md hover:bg-[#e0f5ff] transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-700">{t('profile.uiux')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] p-2 sm:p-3 rounded-md hover:bg-[#e0f5ff] transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-700">{t('profile.performance')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] p-2 sm:p-3 rounded-md hover:bg-[#e0f5ff] transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-700">{t('profile.responsive')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] p-2 sm:p-3 rounded-md hover:bg-[#e0f5ff] transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-700">{t('profile.mobile')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCardContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const ProfileCard = withTranslation()(ProfileCardContent);

export default ProfileCard;