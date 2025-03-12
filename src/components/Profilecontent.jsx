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
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[#f0f9ff] to-[#cbf3f0] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#cbf281] to-[#2dd4bf] rounded-tr-[40%] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-6 w-6 h-6 border-t-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute top-0 -right-6 w-6 h-6 border-t-2 border-r-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 border-b-2 border-l-2 border-[#CBF281]"></div>
              <div className="absolute -bottom-2 -right-6 w-6 h-6 border-b-2 border-r-2 border-[#CBF281]"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-1 text-[#333333] bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] text-transparent bg-clip-text px-4">
                {t('profile.header', 'About Me')}
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              {t('profile.description', 'Get to know me and my professional journey.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Basic Info Card */}
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('profile.basicInfo', 'Basic Information')}</h2>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-graduation-cap mr-3 text-[#2dd4bf]"></i>
                      {t('profile.education', 'Education')}:
                    </span>
                    <span className="text-gray-600">Beykent University, Business Administration</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-map-marker-alt mr-3 text-[#2dd4bf]"></i>
                      {t('profile.residence', 'Location')}:
                    </span>
                    <span className="text-gray-600">Bursa, Turkey</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-laptop-code mr-3 text-[#2dd4bf]"></i>
                      {t('profile.preferredRole', 'Current Role')}:
                    </span>
                    <span className="text-gray-600">Frontend Developer</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 flex items-center">
                      <i className="fas fa-briefcase mr-3 text-[#2dd4bf]"></i>
                      {t('profile.experience', 'Experience')}:
                    </span>
                    <span className="text-gray-600">3+ Years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Me Card */}
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('profile.aboutMe', 'About Me')}</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>{t('profile.aboutDesc', 'I specialize in creating user-friendly interfaces using React, React Native, and modern JavaScript libraries. I focus on building responsive and high-performance web applications.')}</p>
                  
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <i className="fas fa-star text-[#CBF281] mr-2"></i>
                      {t('profile.expertise', 'Areas of Expertise')}
                    </h3>
                    <ul className="list-disc pl-10 space-y-2">
                      <li>{t('profile.uiux', 'User interface development')}</li>
                      <li>{t('profile.performance', 'Web performance optimization')}</li>
                      <li>{t('profile.responsive', 'Responsive design implementation')}</li>
                      <li>{t('profile.mobile', 'Cross-platform mobile development')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-code text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t('skills.frontend', 'Frontend Technologies')}</h3>
                </div>
                
                <div className="space-y-6">
                  {/* JavaScript */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">JavaScript / ES6+</span>
                      <span className="text-sm text-[#2dd4bf]">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  {/* React */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">React / React Native</span>
                      <span className="text-sm text-[#2dd4bf]">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  {/* State Management */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Redux / Context API</span>
                      <span className="text-sm text-[#2dd4bf]">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  {/* CSS/Tailwind */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">CSS / Tailwind / SASS</span>
                      <span className="text-sm text-[#2dd4bf]">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  {/* Responsive Design */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Responsive Design</span>
                      <span className="text-sm text-[#2dd4bf]">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Backend and Other Skills */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-server text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t('skills.backendOther', 'Additional Skills')}</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Node.js */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Node.js / Express</span>
                      <span className="text-sm text-[#2dd4bf]">65%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  {/* Git/GitHub */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Git / GitHub</span>
                      <span className="text-sm text-[#2dd4bf]">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  {/* RESTful API */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">RESTful API</span>
                      <span className="text-sm text-[#2dd4bf]">75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  {/* UI/UX */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">UI/UX / Figma</span>
                      <span className="text-sm text-[#2dd4bf]">70%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  
                  {/* Testing */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Jest / Testing</span>
                      <span className="text-sm text-[#2dd4bf]">60%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Journey Card */}
        <div 
          className={`transition-all duration-1000 delay-600 transform mt-16 ${
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
                <h2 className="text-2xl font-bold text-gray-800">{t('profile.career', 'Career Journey')}</h2>
              </div>
              
              <div className="space-y-8">
                {/* Timeline */}
                <div className="relative border-l-2 border-[#CBF281] pl-8 pb-2">
                  <div className="absolute w-4 h-4 bg-[#CBF281] rounded-full -left-[9px] top-0"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-[#CBF281]/20 text-gray-700 px-3 py-1 rounded-full">2022 - Present</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Front-End Developer</h3>
                  <p className="text-gray-600">SaaS/Fintech Company</p>
                  <p className="text-gray-600 mt-2">
                    {t('profile.recentWork', 'Developing modern and interactive interfaces using React, React Native, and Redux. Working on improving user experience and optimizing application performance.')}
                  </p>
                </div>
                
                <div className="relative border-l-2 border-[#CBF281] pl-8 pb-2">
                  <div className="absolute w-4 h-4 bg-[#CBF281] rounded-full -left-[9px] top-0"></div>
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-[#CBF281]/20 text-gray-700 px-3 py-1 rounded-full">2020 - 2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Junior Front-End Developer</h3>
                  <p className="text-gray-600">Web Agency</p>
                  <p className="text-gray-600 mt-2">
                    {t('profile.prevWork', 'Developed user-friendly interfaces using Angular, implemented API integrations, and worked on performance optimization. Contributed to project planning processes using agile methodology.')}
                  </p>
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