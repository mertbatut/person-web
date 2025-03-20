import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ProfileCardContent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');
  const sectionRef = useRef(null);
  const resumeRef = useRef(null);

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

  // Function to export CV as PDF
  const exportAsPDF = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('Mert_Batut_CV.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
  };

  // Function to export CV as PNG
  const exportAsPNG = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = 'Mert_Batut_CV.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error exporting PNG:', error);
    }
  };

  // Function to export CV as plain text
  const exportAsText = () => {
    if (!resumeRef.current) return;

    try {
      const textContent = `
MERT BATUT
Front-End Developer

Bursa, Türkiye | mertbatut@gmail.com | +90 541 846 99 79 | www.mertbatut.com.tr

${t('profile.resumeIntro')}

${t('profile.workExperience')}:
- ${t('profile.jobTitle1')}, ${t('profile.company1')}, ${t('profile.period1')}
  ${t('profile.recentWork')}

- ${t('profile.realEstateTitle')}, ${t('profile.company2')}, ${t('profile.period2')}
  ${t('profile.realEstateDesc')}

${t('profile.education')}:
- ${t('profile.universityName')}, ${t('profile.universityDegree')}, ${t('profile.universityYear')}

${t('profile.training')}:
- ${t('profile.bootcampName')}, ${t('profile.bootcampPeriod')}
  ${t('profile.bootcampDesc')}

${t('skills.frontend')}:
- HTML5, CSS3, JavaScript (ES6+)
- React.js, Angular
- Responsive Web Design

${t('skills.backend')}:
- C#, ASP.NET
- SQL Server
- Docker, API Integration
- Node.js, Express

${t('skills.languages')}:
- ${t('common.turkish')} (${t('profile.nativeLanguage')})
- ${t('common.english')} (${t('profile.intermediateLevel')})
      `;

      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'Mert_Batut_CV.txt';
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting text:', error);
    }
  };

  // Handle export based on selected format
  const handleExport = () => {
    switch (exportFormat) {
      case 'pdf':
        exportAsPDF();
        break;
      case 'png':
        exportAsPNG();
        break;
      case 'text':
        exportAsText();
        break;
      default:
        exportAsPDF();
    }
  };

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

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#333333] dark:text-white bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] text-transparent bg-clip-text px-2 sm:px-4">
                {t('profile.header')}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 px-2">
              {t('profile.description')}
            </p>
          </div>
        </div>

        {/* Export Options */}
        <div className="mb-8 text-center">
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}>
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <select
                value={exportFormat}
                onChange={(e) => setExportFormat(e.target.value)}
                className="relative block w-full sm:w-auto bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
              >
                <option value="pdf">PDF</option>
                <option value="png">PNG</option>
                <option value="text">{t('common.plainText')}</option>
              </select>
            </div>

            <button
              onClick={handleExport}
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center justify-center px-6 py-2 bg-white rounded-lg">
                <i className="fas fa-download mr-2 text-[#2dd4bf]"></i>
                <span>{t('common.downloadResume')}</span>
              </div>
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>

            {/* CV Content */}
            <div ref={resumeRef} className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              {/* Header */}
              <div className="mb-8 border-b pb-6 border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">Mert Batut</h1>
                    <h2 className="text-xl text-[#2dd4bf] font-medium">Front-End Developer</h2>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#2dd4bf] w-5 text-center mr-2"></i>
                      <span className="dark:text-white">Bursa, Türkiye</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-[#2dd4bf] w-5 text-center mr-2"></i>
                      <a href="mailto:mertbatut@gmail.com" className="hover:text-[#2dd4bf] transition-colors dark:text-white">mertbatut@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-[#2dd4bf] w-5 text-center mr-2"></i>
                      <span className="dark:text-white">+90 541 846 99 79</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-globe text-[#2dd4bf] w-5 text-center mr-2"></i>
                      <a href="https://www.mertbatut.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2dd4bf] transition-colors dark:text-white">www.mertbatut.com.tr</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="fas fa-user text-[#2dd4bf] mr-2"></i>
                  {t('profile.aboutMe')}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{t('profile.resumeIntro')}</p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2">
                  {/* Work Experience */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-briefcase text-[#2dd4bf] mr-2"></i>
                      {t('profile.workExperience')}
                    </h3>

                    <div className="mb-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="font-semibold text-gray-800">
                            {t('profile.jobTitle1')} <span className="text-[#2dd4bf]">@ {t('profile.company1')}</span>
                          </h4>
                          <span className="text-sm text-gray-500 mt-1 sm:mt-0">{t('profile.period1')}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('profile.recentWork')}</p>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="font-semibold text-gray-800">
                            {t('profile.realEstateTitle')} <span className="text-[#2dd4bf]">@ {t('profile.company2')}</span>
                          </h4>
                          <span className="text-sm text-gray-500 mt-1 sm:mt-0">2018 - 2022</span>
                        </div>
                        <p className="text-sm text-gray-600">Batut Gayrimenkul firmasında emlak danışmanı olarak müşteri ilişkileri ve emlak listeleri yönetimi üzerine çalıştım. Müşteri iletişimi, pazarlık ve problem çözme becerilerini geliştirdim.</p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-graduation-cap text-[#2dd4bf] mr-2"></i>
                      {t('profile.education')}
                    </h3>

                    <div className="mb-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="font-semibold text-gray-800">
                            {t('profile.universityName')}
                          </h4>
                          <span className="text-sm text-gray-500 mt-1 sm:mt-0">2012 - 2016</span>
                        </div>
                        <p className="text-sm text-gray-600">{t('profile.universityDegree')}</p>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-[#CBF281]/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="font-semibold text-gray-800">
                            {t('profile.bootcampName')}
                          </h4>
                          <span className="text-sm text-gray-500 mt-1 sm:mt-0">{t('profile.bootcampPeriod')}</span>
                        </div>
                        <p className="text-sm text-gray-600">{t('profile.bootcampDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Technical Skills */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-code text-[#2dd4bf] mr-2"></i>
                      {t('skills.skills')}
                    </h3>

                    {/* Frontend Skills */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                        <i className="fas fa-laptop-code text-[#2dd4bf] mr-2"></i>
                        {t('skills.frontend')}
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          HTML5, CSS3, JavaScript (ES6+)
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          React.js
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          Angular
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          Responsive Web Design
                        </div>
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                        <i className="fas fa-server text-[#2dd4bf] mr-2"></i>
                        {t('skills.backend')}
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          C#, ASP.NET
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          SQL Server
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          Docker, API Integration
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          Node.js, Express
                        </div>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                        <i className="fas fa-tools text-[#2dd4bf] mr-2"></i>
                        {t('skills.tools')}
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          Git, GitHub
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          VS Code
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          npm, Webpack
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                        <i className="fas fa-language text-[#2dd4bf] mr-2"></i>
                        {t('skills.languages')}
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          {t('common.turkish')} <span className="text-gray-500 text-xs">({t('profile.nativeLanguage')})</span>
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                          {t('common.english')} <span className="text-gray-500 text-xs">({t('profile.intermediateLevel')})</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <i className="fas fa-certificate text-[#2dd4bf] mr-2"></i>
                      {t('profile.certifications')}
                    </h3>

                    <div className="space-y-2">
                      <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                        Problem Solving (Basic) - HackerRank
                      </div>
                      <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                        JavaScript (Basic) - HackerRank
                      </div>
                      <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                        JavaScript (Intermediate) - HackerRank
                      </div>
                      <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                        REST API (Intermediate) - HackerRank
                      </div>
                      <div className="bg-gray-50 py-2 px-3 rounded-md border-l-2 border-[#CBF281]">
                        React (Basic) - HackerRank
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <i className="fas fa-star text-[#CBF281] mr-2"></i>
                  {t('profile.expertise')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center bg-[#f0f9ff] dark:bg-gray-700 p-3 rounded-md hover:bg-[#e0f5ff] dark:hover:bg-gray-600 transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm text-gray-700 dark:text-white">{t('profile.uiux')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] dark:bg-gray-700 p-3 rounded-md hover:bg-[#e0f5ff] dark:hover:bg-gray-600 transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm text-gray-700 dark:text-white">{t('profile.performance')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] dark:bg-gray-700 p-3 rounded-md hover:bg-[#e0f5ff] dark:hover:bg-gray-600 transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm text-gray-700 dark:text-white">{t('profile.responsive')}</span>
                  </div>
                  <div className="flex items-center bg-[#f0f9ff] dark:bg-gray-700 p-3 rounded-md hover:bg-[#e0f5ff] dark:hover:bg-gray-600 transition duration-300">
                    <i className="fas fa-check text-[#2dd4bf] mr-2"></i>
                    <span className="text-sm text-gray-700 dark:text-white">{t('profile.mobile')}</span>
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