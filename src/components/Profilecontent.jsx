import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ProfileCardContent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
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

  // Toast için useEffect
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Yardımcı fonksiyon - Toast mesajı göster
  const displayToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  // Sabit bir CV düzeni render eden fonksiyon
  const renderFixedCVLayout = async () => {
    try {
      // Geçici bir element oluştur
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.width = '1200px'; // Sabit genişlik
      document.body.appendChild(tempDiv);
      
      // Sabit bir CV yapısı oluştur - PDF'teki düzen
      const fixedLayout = document.createElement('div');
      fixedLayout.className = 'bg-white p-8 rounded-xl';
      fixedLayout.style.width = '1200px';
      
      // Header bölümü (İsim, Unvan, İletişim bilgileri)
      const header = document.createElement('div');
      header.innerHTML = `
        <div class="flex items-center mb-8">
          <div class="w-24 h-24 rounded-full overflow-hidden mr-8">
            <img src="/images/Profil.JPEG" alt="Mert Batut" class="w-full h-full object-cover" />
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-800">Mert Batut</h1>
            <h2 class="text-xl text-[#4EF2C3] mb-4">Front-End Developer</h2>
            
            <div class="flex flex-wrap gap-4 text-gray-600">
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-[#5FD2D3] w-5 text-center mr-2"></i>
                <span>Bursa, Türkiye</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope text-[#5FD2D3] w-5 text-center mr-2"></i>
                <a href="mailto:mertbatut@gmail.com" class="text-blue-500">mertbatut@gmail.com</a>
              </div>
              <div class="flex items-center">
                <i class="fas fa-phone text-[#5FD2D3] w-5 text-center mr-2"></i>
                <span>+90 541 846 99 79</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-globe text-[#5FD2D3] w-5 text-center mr-2"></i>
                <a href="https://www.mertbatut.com.tr/" class="text-blue-500">www.mertbatut.com.tr</a>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Hakkımda bölümü
      const about = document.createElement('div');
      about.className = 'mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200';
      about.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
          <div class="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
            <i class="fas fa-user absolute text-white text-sm"></i>
          </div>
          ${t('profile.aboutMe')}
        </h3>
        <p class="text-gray-700">${t('profile.resumeIntro')}</p>
      `;
      
      // Ana içerik bölümü - iki sütun
      const mainContent = document.createElement('div');
      mainContent.className = 'grid grid-cols-3 gap-8';
      
      // Sol sütun - deneyim ve eğitim
      const leftColumn = document.createElement('div');
      leftColumn.className = 'col-span-2';
      
      // İş deneyimi
      const experience = document.createElement('div');
      experience.className = 'mb-8';
      experience.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <div class="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
            <i class="fas fa-briefcase absolute text-white text-sm"></i>
          </div>
          ${t('profile.workExperience')}
        </h3>
        
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 relative hover:shadow-md">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] rounded-l-lg"></div>

            <div class="pl-3">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">
                  ${t('profile.jobTitle1')} <span class="text-[#4EF2C3]">@ ${t('profile.company3')}</span>
                </h4>
                <div>
                  <span class="inline-block bg-[#4EF2C3]/10 text-[#4EF2C3] px-3 py-1 rounded-full">
                    ${t('profile.period3')}
                  </span>
                </div>
              </div>
              <p class="text-gray-700">${t('profile.recentWork2')}</p>
            </div>
          </div>


          <!-- Alesta Yazılım -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 relative hover:shadow-md">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] rounded-l-lg"></div>
            <div class="pl-3">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">
                  ${t('profile.jobTitle1')} <span class="text-[#4EF2C3]">@ ${t('profile.company1')}</span>
                </h4>
                <div>
                  <span class="inline-block bg-[#4EF2C3]/10 text-[#4EF2C3] px-3 py-1 rounded-full">
                    ${t('profile.period1')}
                  </span>
                </div>
              </div>
              <p class="text-gray-700">${t('profile.recentWork')}</p>
            </div>
          </div>
          
          <!-- Batut Gayrimenkul -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 relative hover:shadow-md">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] rounded-l-lg"></div>
            <div class="pl-3">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">
                  ${t('profile.realEstateTitle')} <span class="text-[#4EF2C3]">@ ${t('profile.company2')}</span>
                </h4>
                <div>
                  <span class="inline-block bg-[#4EF2C3]/10 text-[#4EF2C3] px-3 py-1 rounded-full">
                    ${t('profile.period2')}
                  </span>
                </div>
              </div>
              <p class="text-gray-700">${t('profile.realEstateDesc')}</p>
            </div>
          </div>
        </div>
      `;
      
      // Eğitim
      const education = document.createElement('div');
      education.className = 'mb-8';
      education.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <div class="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
            <i class="fas fa-graduation-cap absolute text-white text-sm"></i>
          </div>
          ${t('profile.education')}
        </h3>
        
        <div class="space-y-4">
          <!-- Beykent Üniversitesi -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 relative hover:shadow-md">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#5FD2D3] rounded-l-lg"></div>
            <div class="pl-3">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">
                  ${t('profile.universityName')}
                </h4>
                <div>
                  <span class="inline-block bg-[#5FD2D3]/10 text-[#5FD2D3] px-3 py-1 rounded-full">
                    ${t('profile.universityYear')}
                  </span>
                </div>
              </div>
              <p class="text-gray-700">${t('profile.universityDegree')}</p>
            </div>
          </div>
          
          <!-- Bootcamp -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 relative hover:shadow-md">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#5FD2D3] rounded-l-lg"></div>
            <div class="pl-3">
              <div class="flex justify-between items-center mb-2">
                <h4 class="font-semibold text-gray-800">
                  ${t('profile.bootcampName')}
                </h4>
                <div>
                  <span class="inline-block bg-[#5FD2D3]/10 text-[#5FD2D3] px-3 py-1 rounded-full">
                    ${t('profile.bootcampPeriod')}
                  </span>
                </div>
              </div>
              <p class="text-gray-700">${t('profile.bootcampDesc')}</p>
            </div>
          </div>
        </div>
      `;
      
      leftColumn.appendChild(experience);
      leftColumn.appendChild(education);
      
      // Sağ sütun - yetenekler ve diller
      const rightColumn = document.createElement('div');
      rightColumn.className = 'col-span-1';
      
      // Frontend Yetenekleri
      const frontendSkills = document.createElement('div');
      frontendSkills.className = 'mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200';
      frontendSkills.innerHTML = `
        <h4 class="font-medium text-gray-800 mb-3 text-center">
          <div class="inline-flex items-center justify-center">
            <span class="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 flex items-center justify-center mr-2">
              <i class="fas fa-laptop-code absolute text-[#4EF2C3] text-xs"></i>
            </span>
            ${t('skills.frontend')}
          </div>
        </h4>
        <div class="space-y-2">
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">HTML5, CSS3, JavaScript (ES6+)</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">React.js</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">Angular</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">Responsive Web Design</span>
          </div>
        </div>
      `;
      
      // Backend Yetenekleri
      const backendSkills = document.createElement('div');
      backendSkills.className = 'mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200';
      backendSkills.innerHTML = `
        <h4 class="font-medium text-gray-800 mb-3 text-center">
          <div class="inline-flex items-center justify-center">
            <span class="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 flex items-center justify-center mr-2">
              <i class="fas fa-server absolute text-[#4EF2C3] text-xs"></i>
            </span>
            ${t('skills.backend')}
          </div>
        </h4>
        <div class="space-y-2">
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">C#, ASP.NET</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">SQL Server</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">Docker, API Integration</span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">Node.js, Express</span>
          </div>
        </div>
      `;
      
      // Diller
      const languages = document.createElement('div');
      languages.className = 'mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200';
      languages.innerHTML = `
        <h4 class="font-medium text-gray-800 mb-3 text-center">
          <div class="inline-flex items-center justify-center">
            <span class="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 flex items-center justify-center mr-2">
              <i class="fas fa-language absolute text-[#4EF2C3] text-xs"></i>
            </span>
            ${t('skills.languages')}
          </div>
        </h4>
        <div class="space-y-2">
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">${t('common.turkish')} <span class="text-xs opacity-75">(${t('profile.nativeLanguage')})</span></span>
          </div>
          <div class="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-gray-100 border-l-2 border-[#4EF2C3]">
            <span class="text-sm text-gray-700">${t('common.english')} <span class="text-xs opacity-75">(${t('profile.intermediateLevel')})</span></span>
          </div>
        </div>
      `;
      
      rightColumn.appendChild(frontendSkills);
      rightColumn.appendChild(backendSkills);
      rightColumn.appendChild(languages);
      
      mainContent.appendChild(leftColumn);
      mainContent.appendChild(rightColumn);
      
      // Bütün bölümleri birleştir
      fixedLayout.appendChild(header);
      fixedLayout.appendChild(about);
      fixedLayout.appendChild(mainContent);
      
      tempDiv.appendChild(fixedLayout);
      
      // Tüm resimlerin yüklenmesini bekle
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { 
        element: fixedLayout,
        cleanup: () => {
          document.body.removeChild(tempDiv);
        }
      };
    } catch (error) {
      console.error('CV düzeni hazırlama hatası:', error);
      throw error;
    }
  };

  // Function to export CV as PDF
  const exportAsPDF = async () => {
    if (!resumeRef.current) return;

    try {
      setIsExporting(true);
      displayToast(t('profile.preparingDownload'));

      // Sabit CV düzenini render et
      const { element, cleanup } = await renderFixedCVLayout();
      
      const canvas = await html2canvas(element, {
        scale: 2, // Yüksek kalite için sabit değer
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        letterRendering: true,
      });
      
      // Temizlik
      cleanup();

      // PDF'e dönüştür
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 genişliği (mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const canvasData = canvas.toDataURL('image/jpeg', 1.0);
      
      pdf.addImage(canvasData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // İndirme işlemi
      const pdfBlob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Mert_Batut_CV.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Temizlik
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
        setIsExporting(false);
        displayToast(t('profile.downloadComplete'));
      }, 1000);
    } catch (error) {
      console.error('Error exporting PDF:', error);
      setIsExporting(false);
      displayToast(t('profile.errorDownloading'));
    }
  };

  // Function to export CV as PNG
  const exportAsPNG = async () => {
    if (!resumeRef.current) return;

    try {
      setIsExporting(true);
      displayToast(t('profile.preparingDownload'));
      
      // Sabit CV düzenini render et
      const { element, cleanup } = await renderFixedCVLayout();
      
      const canvas = await html2canvas(element, {
        scale: 2, // Yüksek kalite için sabit değer
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        letterRendering: true,
      });
      
      // Temizlik
      cleanup();
      
      // PNG'ye dönüştür
      const blob = await (async () => {
        return new Promise((resolve) => {
          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/png', 1.0);
        });
      })();
      
      const blobUrl = URL.createObjectURL(blob);
      
      // İndirme işlemi
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Mert_Batut_CV.png';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Temizlik
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
        setIsExporting(false);
        displayToast(t('profile.downloadComplete'));
      }, 1000);
    } catch (error) {
      console.error('Error exporting PNG:', error);
      setIsExporting(false);
      displayToast(t('profile.errorDownloading'));
    }
  };

  // Function to export CV as plain text
  const exportAsText = () => {
    if (!resumeRef.current) return;

    try {
      setIsExporting(true);
      displayToast(t('profile.preparingDownload'));

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
      
      // Mobil uyumluluk için
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mert_Batut_CV.txt';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        URL.revokeObjectURL(url);
        setIsExporting(false);
        displayToast(t('profile.downloadComplete'));
      }, 1000);
    } catch (error) {
      console.error('Error exporting text:', error);
      setIsExporting(false);
      displayToast(t('profile.errorDownloading'));
    }
  };

  // Handle export based on selected format
  const handleExport = () => {
    if (isExporting) return; // İşlem zaten sürüyorsa engelle
    
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
    <div id="profile" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[var(--bg-primary)]">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[var(--profile-bg-gradient-1)] to-[var(--profile-bg-gradient-2)] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-tr-[40%] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-3 sm:-left-6 w-3 sm:w-6 h-3 sm:h-6 border-t-2 border-l-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute top-0 -right-3 sm:-right-6 w-3 sm:w-6 h-3 sm:h-6 border-t-2 border-r-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute -bottom-2 -left-3 sm:-left-6 w-3 sm:w-6 h-3 sm:h-6 border-b-2 border-l-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute -bottom-2 -right-3 sm:-right-6 w-3 sm:w-6 h-3 sm:h-6 border-b-2 border-r-2 border-[var(--profile-header-decoration)]"></div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-transparent bg-gradient-to-r from-[var(--profile-title-gradient-1)] to-[var(--profile-title-gradient-2)] bg-clip-text px-2 sm:px-4">
                {t('profile.header')}
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 px-2">
              {t('profile.description')}
            </p>
          </div>
        </div>

        {/* Export Options - Mobil uyumlu yapıldı */}
        <div className="mb-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="p-4 bg-[var(--card-bg)] rounded-lg shadow-sm border border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-full sm:w-auto mb-3 sm:mb-0">
                <label className="block text-[var(--text-secondary)] text-sm mb-1 text-left">{t('profile.exportFormat')}</label>
                <select
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="block w-full bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-primary)] py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                  disabled={isExporting}
                >
                  <option value="pdf">PDF</option>
                  <option value="png">PNG</option>
                  <option value="text">{t('common.plainText')}</option>
                </select>
              </div>

              <button
                onClick={handleExport}
                disabled={isExporting}
                className={`w-full sm:w-auto px-6 py-2 rounded-lg border transition-colors duration-300 flex items-center justify-center gap-2 ${
                  isExporting 
                    ? 'bg-[var(--btn-outline-hover)] cursor-not-allowed text-[var(--text-secondary)] border-[var(--card-border)]' 
                    : 'bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/80 text-[var(--btn-secondary-text)] border-[var(--accent-primary)]'
                }`}
              >
                {isExporting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--text-secondary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('common.processing')}
                  </>
                ) : (
                  <>
                    <i className="fas fa-download"></i>
                    {t('common.downloadResume')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* CV Content - Minimalist Tasarım */}
        <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--profile-card-glow-1)] to-[var(--profile-card-glow-2)] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>

            {/* CV Content */}
            <div ref={resumeRef} className="relative bg-[var(--profile-card-bg)] p-6 sm:p-8 rounded-xl shadow-lg">
              {/* Modern Minimalist Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-8 pb-6 border-b border-[var(--card-border)]">
                {/* Profile Photo */}
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gradient-to-br from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center">
                  <img
                    src="/images/Profil.JPEG"
                    alt="Mert Batut"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Profil resmi yüklenemezse, yerine inisyallerini göster
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += '<span class="text-4xl font-bold text-white">MB</span>';
                    }}
                  />
                </div>

                {/* İsim ve İletişim Bilgileri */}
                <div className="flex-grow text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-1">Mert Batut</h1>
                  <h2 className="text-xl text-[#4EF2C3] dark:text-[#5FD2D3] mb-4">Front-End Developer</h2>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-[var(--text-secondary)]">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt text-[#5FD2D3] dark:text-[#4EF2C3] w-5 text-center mr-2"></i>
                      <span>Bursa, Türkiye</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-[#5FD2D3] dark:text-[#4EF2C3] w-5 text-center mr-2"></i>
                      <a href="mailto:mertbatut@gmail.com" className="hover:text-[#4EF2C3] dark:hover:text-[#5FD2D3] transition-colors">mertbatut@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-[#5FD2D3] dark:text-[#4EF2C3] w-5 text-center mr-2"></i>
                      <span>+90 541 846 99 79</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-globe text-[#5FD2D3] dark:text-[#4EF2C3] w-5 text-center mr-2"></i>
                      <a href="https://www.mertbatut.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4EF2C3] dark:hover:text-[#5FD2D3] transition-colors">www.mertbatut.com.tr</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hakkımda - Modern Card */}
              <div className="mb-8 bg-[var(--profile-infocard-bg)] p-4 rounded-lg border border-[var(--profile-infocard-border)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-3 flex items-center">
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                    <i className="fas fa-user absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                  </div>
                  {t('profile.aboutMe')}
                </h3>
                <p className="text-[var(--profile-infocard-text)] text-sm sm:text-base">{t('profile.resumeIntro')}</p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Left Column */}
                <div className="md:col-span-2">
                  {/* Work Experience */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-4 flex items-center">
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                        <i className="fas fa-briefcase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                      </div>
                      {t('profile.workExperience')}
                    </h3>

                    <div className="space-y-4">

                       {/* Alesta Yazılım */}
                       <div className="bg-[var(--profile-timeline-card-bg)] p-4 rounded-lg border border-[var(--profile-timeline-card-border)] transition-all duration-300 hover:shadow-md relative">
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] dark:bg-[#5FD2D3] rounded-l-lg"></div>
                        
                        <div className="pl-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-semibold text-[var(--profile-timeline-card-title)]">
                              {t('profile.jobTitle1')} <span className="text-[#4EF2C3] dark:text-[#5FD2D3]">@ {t('profile.company1')}</span>
                            </h4>
                            <div className="text-sm text-center sm:text-right">
                              <span className="inline-block bg-[#4EF2C3]/10 dark:bg-[#5FD2D3]/10 text-[#4EF2C3] dark:text-[#5FD2D3] px-3 py-1 rounded-full mt-1 sm:mt-0">
                                {t('profile.period1')}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--profile-timeline-card-text)]">{t('profile.recentWork')}</p>
                        </div>
                      </div>
                      
                      {/* Just Markt */}
                      <div className="bg-[var(--profile-timeline-card-bg)] p-4 rounded-lg border border-[var(--profile-timeline-card-border)] transition-all duration-300 hover:shadow-md relative">
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] dark:bg-[#5FD2D3] rounded-l-lg"></div>
                        
                        <div className="pl-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-semibold text-[var(--profile-timeline-card-title)]">
                              {t('profile.jobTitle3')} <span className="text-[#4EF2C3] dark:text-[#5FD2D3]">@ {t('profile.company3')}</span>
                            </h4>
                            <div className="text-sm text-center sm:text-right">
                              <span className="inline-block bg-[#4EF2C3]/10 dark:bg-[#5FD2D3]/10 text-[#4EF2C3] dark:text-[#5FD2D3] px-3 py-1 rounded-full mt-1 sm:mt-0">
                                {t('profile.period3')}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--profile-timeline-card-text)]">{t('profile.recentWork2')}</p>
                        </div>
                      </div>

                     

                      {/* Batut Gayrimenkul */}
                      <div className="bg-[var(--profile-timeline-card-bg)] p-4 rounded-lg border border-[var(--profile-timeline-card-border)] transition-all duration-300 hover:shadow-md relative">
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4EF2C3] dark:bg-[#5FD2D3] rounded-l-lg"></div>
                        
                        <div className="pl-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-semibold text-[var(--profile-timeline-card-title)]">
                              {t('profile.realEstateTitle')} <span className="text-[#4EF2C3] dark:text-[#5FD2D3]">@ {t('profile.company2')}</span>
                            </h4>
                            <div className="text-sm text-center sm:text-right">
                              <span className="inline-block bg-[#4EF2C3]/10 dark:bg-[#5FD2D3]/10 text-[#4EF2C3] dark:text-[#5FD2D3] px-3 py-1 rounded-full mt-1 sm:mt-0">
                                2016 - 2019
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--profile-timeline-card-text)]">{t('profile.realEstateDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-4 flex items-center">
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                        <i className="fas fa-graduation-cap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                      </div>
                      {t('profile.education')}
                    </h3>

                    <div className="space-y-4">
                      {/* Beykent Üniversitesi */}
                      <div className="bg-[var(--profile-timeline-card-bg)] p-4 rounded-lg border border-[var(--profile-timeline-card-border)] transition-all duration-300 hover:shadow-md relative">
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5FD2D3] dark:bg-[#4EF2C3] rounded-l-lg"></div>
                        
                        <div className="pl-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-semibold text-[var(--profile-timeline-card-title)]">
                              {t('profile.universityName')}
                            </h4>
                            <div className="text-sm text-center sm:text-right">
                              <span className="inline-block bg-[#5FD2D3]/10 dark:bg-[#4EF2C3]/10 text-[#5FD2D3] dark:text-[#4EF2C3] px-3 py-1 rounded-full mt-1 sm:mt-0">
                                2012 - 2016
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--profile-timeline-card-text)]">{t('profile.universityDegree')}</p>
                        </div>
                      </div>

                      {/* Bootcamp */}
                      <div className="bg-[var(--profile-timeline-card-bg)] p-4 rounded-lg border border-[var(--profile-timeline-card-border)] transition-all duration-300 hover:shadow-md relative">
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5FD2D3] dark:bg-[#4EF2C3] rounded-l-lg"></div>
                        
                        <div className="pl-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-semibold text-[var(--profile-timeline-card-title)]">
                              {t('profile.bootcampName')}
                            </h4>
                            <div className="text-sm text-center sm:text-right">
                              <span className="inline-block bg-[#5FD2D3]/10 dark:bg-[#4EF2C3]/10 text-[#5FD2D3] dark:text-[#4EF2C3] px-3 py-1 rounded-full mt-1 sm:mt-0">
                                {t('profile.bootcampPeriod')}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--profile-timeline-card-text)]">{t('profile.bootcampDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Technical Skills */}
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-4 flex items-center">
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                        <i className="fas fa-code absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                      </div>
                      {t('skills.skills')}
                    </h3>

                    {/* Frontend Skills */}
                    <div className="mb-4 bg-[var(--profile-skill-bg)] p-4 rounded-lg border border-[var(--profile-skill-border)]">
                      <h4 className="font-medium text-[var(--profile-section-title)] mb-3 text-center">
                        <div className="inline-flex items-center justify-center">
                          <span className="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 dark:bg-[#5FD2D3]/20 flex items-center justify-center mr-2">
                            <i className="fas fa-laptop-code absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4EF2C3] dark:text-[#5FD2D3] text-xs"></i>
                          </span>
                          {t('skills.frontend')}
                        </div>
                      </h4>
                      <div className="space-y-2">
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">HTML5, CSS3, JavaScript (ES6+)</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">React.js</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Angular</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Responsive Web Design</span>
                        </div>
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="mb-4 bg-[var(--profile-skill-bg)] p-4 rounded-lg border border-[var(--profile-skill-border)]">
                      <h4 className="font-medium text-[var(--profile-section-title)] mb-3 text-center">
                        <div className="inline-flex items-center justify-center">
                          <span className="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 dark:bg-[#5FD2D3]/20 flex items-center justify-center mr-2">
                            <i className="fas fa-server absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4EF2C3] dark:text-[#5FD2D3] text-xs"></i>
                          </span>
                          {t('skills.backend')}
                        </div>
                      </h4>
                      <div className="space-y-2">
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">C#, ASP.NET</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">SQL Server</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Docker, API Integration</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Node.js, Express</span>
                        </div>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-4 bg-[var(--profile-skill-bg)] p-4 rounded-lg border border-[var(--profile-skill-border)]">
                      <h4 className="font-medium text-[var(--profile-section-title)] mb-3 text-center">
                        <div className="inline-flex items-center justify-center">
                          <span className="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 dark:bg-[#5FD2D3]/20 flex items-center justify-center mr-2">
                            <i className="fas fa-tools absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4EF2C3] dark:text-[#5FD2D3] text-xs"></i>
                          </span>
                          {t('skills.tools')}
                        </div>
                      </h4>
                      <div className="space-y-2">
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Git, GitHub</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">VS Code</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">npm, Webpack</span>
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4 bg-[var(--profile-skill-bg)] p-4 rounded-lg border border-[var(--profile-skill-border)]">
                      <h4 className="font-medium text-[var(--profile-section-title)] mb-3 text-center">
                        <div className="inline-flex items-center justify-center">
                          <span className="relative w-6 h-6 rounded-full bg-[#4EF2C3]/20 dark:bg-[#5FD2D3]/20 flex items-center justify-center mr-2">
                            <i className="fas fa-language absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4EF2C3] dark:text-[#5FD2D3] text-xs"></i>
                          </span>
                          {t('skills.languages')}
                        </div>
                      </h4>
                      <div className="space-y-2">
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">{t('common.turkish')} <span className="text-xs opacity-75">({t('profile.nativeLanguage')})</span></span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#4EF2C3] dark:border-[#5FD2D3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">{t('common.english')} <span className="text-xs opacity-75">({t('profile.intermediateLevel')})</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-4 flex items-center">
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                        <i className="fas fa-certificate absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                      </div>
                      {t('profile.certifications')}
                    </h3>

                    <div className="bg-[var(--profile-skill-bg)] p-4 rounded-lg border border-[var(--profile-skill-border)]">
                      <div className="space-y-2">
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#5FD2D3] dark:border-[#4EF2C3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">Problem Solving (Basic) - HackerRank</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#5FD2D3] dark:border-[#4EF2C3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">JavaScript (Basic) - HackerRank</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#5FD2D3] dark:border-[#4EF2C3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">JavaScript (Intermediate) - HackerRank</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#5FD2D3] dark:border-[#4EF2C3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">REST API (Intermediate) - HackerRank</span>
                        </div>
                        <div className="py-2 px-3 rounded-md flex items-center justify-center gap-2 bg-[var(--profile-expertise-bg)] border-l-2 border-[#5FD2D3] dark:border-[#4EF2C3]">
                          <span className="text-sm text-[var(--profile-skill-text)]">React (Basic) - HackerRank</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="mt-6 pt-6 border-t border-[var(--profile-infocard-border)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--profile-section-title)] mb-4 flex items-center">
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-[#4EF2C3] to-[#5FD2D3] flex items-center justify-center mr-3">
                    <i className="fas fa-star absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
                  </div>
                  {t('profile.expertise')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="flex items-center justify-center bg-[var(--profile-expertise-bg)] p-3 rounded-md text-center">
                    <span className="text-sm text-[var(--profile-expertise-text)]">{t('profile.uiux')}</span>
                  </div>
                  <div className="flex items-center justify-center bg-[var(--profile-expertise-bg)] p-3 rounded-md text-center">
                    <span className="text-sm text-[var(--profile-expertise-text)]">{t('profile.performance')}</span>
                  </div>
                  <div className="flex items-center justify-center bg-[var(--profile-expertise-bg)] p-3 rounded-md text-center">
                    <span className="text-sm text-[var(--profile-expertise-text)]">{t('profile.responsive')}</span>
                  </div>
                  <div className="flex items-center justify-center bg-[var(--profile-expertise-bg)] p-3 rounded-md text-center">
                    <span className="text-sm text-[var(--profile-expertise-text)]">{t('profile.mobile')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bildirim Toast */}
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] px-4 py-3 rounded-lg shadow-lg transition-all duration-300 z-50 ${
          showToast ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
        }`}>
          <div className="flex items-center">
            {isExporting ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--accent-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : toastMessage.includes('complete') ? (
              <i className="fas fa-check-circle text-green-500 mr-3"></i>
            ) : toastMessage.includes('error') ? (
              <i className="fas fa-exclamation-circle text-red-500 mr-3"></i>
            ) : (
              <i className="fas fa-info-circle text-[var(--accent-primary)] mr-3"></i>
            )}
            <span>{toastMessage}</span>
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