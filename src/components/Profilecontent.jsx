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

  // Skill data with modern categorization
  const skills = {
    frontend: [
      { name: 'JavaScript / ES6+', icon: 'fab fa-js' },
      { name: 'React / React Native', icon: 'fab fa-react' },
      { name: 'HTML5 / CSS3', icon: 'fab fa-html5' },
      { name: 'Redux / Context API', icon: 'fas fa-code-branch' },
      { name: 'Tailwind / SASS', icon: 'fab fa-css3-alt' }
    ],
    backend: [
      { name: 'Node.js / Express', icon: 'fab fa-node-js' },
      { name: 'RESTful API', icon: 'fas fa-exchange-alt' }
    ],
    tools: [
      { name: 'Git / GitHub', icon: 'fab fa-git-alt' },
      { name: 'UI/UX / Figma', icon: 'fas fa-pencil-ruler' },
      { name: 'Jest / Testing', icon: 'fas fa-vial' }
    ]
  };

  // Education and work experience data
  const experiences = [
    {
      title: 'Front-End Developer',
      company: 'SaaS/Fintech Company',
      period: '2022 - Present',
      description: t('profile.recentWork', 'Developing modern and interactive interfaces using React, React Native, and Redux. Working on improving user experience and optimizing application performance.')
    },
    {
      title: 'Junior Front-End Developer',
      company: 'Web Agency',
      period: '2020 - 2022',
      description: t('profile.prevWork', 'Developed user-friendly interfaces using Angular, implemented API integrations, and worked on performance optimization. Contributed to project planning processes using agile methodology.')
    }
  ];

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

        {/* Main content - About and Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* About Me - Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg h-full">
                  {/* Personal Information Section */}
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-full flex items-center justify-center">
                        <i className="fas fa-user text-white text-xl"></i>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{t('profile.aboutMe', 'About Me')}</h2>
                        <p className="text-gray-600">Front-End Developer</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#CBF281] pl-4 py-2">
                      <p className="text-gray-600">{t('profile.aboutDesc', 'I specialize in creating user-friendly interfaces using React, React Native, and modern JavaScript libraries. I focus on building responsive and high-performance web applications.')}</p>
                    </div>

                    {/* Key Information Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-graduation-cap text-[#2dd4bf] mr-2"></i>
                          <span className="font-medium text-gray-700">{t('profile.education', 'Education')}</span>
                        </div>
                        <p className="text-gray-600 text-sm">Beykent University, Business Administration</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-map-marker-alt text-[#2dd4bf] mr-2"></i>
                          <span className="font-medium text-gray-700">{t('profile.residence', 'Location')}</span>
                        </div>
                        <p className="text-gray-600 text-sm">Bursa, Turkey</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-laptop-code text-[#2dd4bf] mr-2"></i>
                          <span className="font-medium text-gray-700">{t('profile.preferredRole', 'Current Role')}</span>
                        </div>
                        <p className="text-gray-600 text-sm">Frontend Developer</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-briefcase text-[#2dd4bf] mr-2"></i>
                          <span className="font-medium text-gray-700">{t('profile.experience', 'Experience')}</span>
                        </div>
                        <p className="text-gray-600 text-sm">3+ Years</p>
                      </div>
                    </div>

                    {/* Expertise Section */}
                    <div className="mt-2">
                      <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <i className="fas fa-star text-[#CBF281] mr-2"></i>
                        {t('profile.expertise', 'Areas of Expertise')}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center bg-[#f0f9ff] p-2 rounded-md">
                          <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                          <span className="text-sm text-gray-700">{t('profile.uiux', 'UI development')}</span>
                        </div>
                        <div className="flex items-center bg-[#f0f9ff] p-2 rounded-md">
                          <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                          <span className="text-sm text-gray-700">{t('profile.performance', 'Performance optimization')}</span>
                        </div>
                        <div className="flex items-center bg-[#f0f9ff] p-2 rounded-md">
                          <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                          <span className="text-sm text-gray-700">{t('profile.responsive', 'Responsive design')}</span>
                        </div>
                        <div className="flex items-center bg-[#f0f9ff] p-2 rounded-md">
                          <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                          <span className="text-sm text-gray-700">{t('profile.mobile', 'Mobile development')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Right Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{t('skills.title', 'Technical Skills')}</h3>
                  </div>

                  {/* Frontend Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <i className="fas fa-laptop-code text-[#2dd4bf] mr-2"></i>
                      {t('skills.frontend', 'Frontend Technologies')}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skills.frontend.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center mr-3">
                            <i className={`${skill.icon} text-[#2dd4bf]`}></i>
                          </div>
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend and Tools Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Backend */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="fas fa-server text-[#2dd4bf] mr-2"></i>
                        {t('skills.backend', 'Backend')}
                      </h4>
                      
                      <div className="space-y-3">
                        {skills.backend.map((skill, index) => (
                          <div 
                            key={index} 
                            className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center mr-3">
                              <i className={`${skill.icon} text-[#2dd4bf]`}></i>
                            </div>
                            <span className="font-medium text-gray-700">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tools */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="fas fa-tools text-[#2dd4bf] mr-2"></i>
                        {t('skills.tools', 'Tools & Others')}
                      </h4>
                      
                      <div className="space-y-3">
                        {skills.tools.map((skill, index) => (
                          <div 
                            key={index} 
                            className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#CBF281]/50 transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#f0f9ff] flex items-center justify-center mr-3">
                              <i className={`${skill.icon} text-[#2dd4bf]`}></i>
                            </div>
                            <span className="font-medium text-gray-700">{skill.name}</span>
                          </div>
                        ))}
                      </div>
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
                {/* Modern Timeline */}
                <div className="relative">
                  {experiences.map((exp, index) => (
                    <div key={index} className="mb-12 grid grid-cols-12 items-start">
                      {/* Date Badge */}
                      <div className="col-span-12 sm:col-span-3 mb-4 sm:mb-0">
                        <div className="bg-gradient-to-r from-[#CBF281]/20 to-[#2dd4bf]/20 rounded-lg py-2 px-4 inline-block">
                          <span className="font-semibold text-gray-700">{exp.period}</span>
                        </div>
                      </div>
                      
                      {/* Timeline Bar - Only between items */}
                      {index < experiences.length - 1 && (
                        <div className="hidden sm:block absolute h-full w-0.5 bg-[#CBF281] left-[12.5%] top-0 z-10"></div>
                      )}
                      
                      {/* Content */}
                      <div className="col-span-12 sm:col-span-9 relative">
                        {/* Circle Connector */}
                        <div className="hidden sm:block absolute -left-6 w-4 h-4 rounded-full bg-[#CBF281] border-4 border-white"></div>
                        
                        {/* Content Card */}
                        <div className="bg-white rounded-lg p-5 shadow border border-gray-100 hover:border-[#CBF281]/30 transition-all duration-300 ml-0 sm:ml-2">
                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                          <p className="text-[#2dd4bf] mb-3">{exp.company}</p>
                          <p className="text-gray-600">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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