import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Profile() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const sectionRef = useRef(null);

  // Data structures from translation
  const personalInfo = t('profile.personalData', { returnObjects: true });
  const workExperience = t('profile.workExperienceData', { returnObjects: true });
  const education = t('profile.educationData', { returnObjects: true });
  const skills = {
    frontend: t('skills.frontendSkills', { returnObjects: true }),
    backend: t('skills.backendSkills', { returnObjects: true }),
    tools: t('skills.toolsSkills', { returnObjects: true })
  };
  const certifications = t('profile.certificationsData', { returnObjects: true });
  const expertise = t('profile.expertiseData', { returnObjects: true });
  const languages = t('profile.languagesData', { returnObjects: true });

  // Hooks
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Utility functions
  const displayToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const createCVContent = () => {
    return `
MERT BATUT
${t('profile.jobTitle1')}

${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.website}

${t('profile.aboutMe')}:
${t('profile.resumeIntro')}

${t('profile.workExperience')}:
${workExperience.map(exp => `- ${exp.title}, ${exp.company}, ${exp.period}\n  ${exp.description}`).join('\n\n')}

${t('profile.education')}:
${education.map(edu => `- ${edu.name}, ${edu.degree}, ${edu.period}`).join('\n')}

${t('skills.frontend')}:
${skills.frontend.map(skill => `- ${skill}`).join('\n')}

${t('skills.backend')}:
${skills.backend.map(skill => `- ${skill}`).join('\n')}

${t('skills.tools')}:
${skills.tools.map(tool => `- ${tool}`).join('\n')}

${t('profile.certifications')}:
${certifications.map(cert => `- ${cert}`).join('\n')}

${t('skills.languages')}:
${languages.map(lang => `- ${lang.name} (${lang.level})`).join('\n')}

${t('profile.expertise')}:
${expertise.map(exp => `- ${exp}`).join('\n')}
    `;
  };

  const createFixedCVLayout = async () => {
    const tempDiv = document.createElement('div');
    tempDiv.style.cssText = 'position:absolute;left:-9999px;width:1200px;';
    document.body.appendChild(tempDiv);

    const layout = document.createElement('div');
    layout.className = 'bg-white p-8 rounded-xl';
    layout.style.width = '1200px';

    // Header
    const header = `
      <div class="flex items-center mb-8">
        <div class="w-24 h-24 rounded-full overflow-hidden mr-8 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
          <span class="text-4xl font-bold text-white">MB</span>
        </div>
        <div>
          <h1 class="text-4xl font-bold text-gray-800">${personalInfo.name}</h1>
          <h2 class="text-xl text-cyan-500 mb-4">${t('profile.jobTitle1')}</h2>
          <div class="flex flex-wrap gap-4 text-gray-600">
            <div>📍 ${personalInfo.location}</div>
            <div>📧 ${personalInfo.email}</div>
            <div>📞 ${personalInfo.phone}</div>
            <div>🌐 ${personalInfo.website}</div>
          </div>
        </div>
      </div>
    `;

    // About
    const about = `
      <div class="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">👤 ${t('profile.aboutMe')}</h3>
        <p class="text-gray-700">${t('profile.resumeIntro')}</p>
      </div>
    `;

    // Experience
    const experience = `
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">💼 ${t('profile.workExperience')}</h3>
        ${workExperience.map(exp => `
          <div class="mb-4 p-4 bg-gray-50 rounded-lg border-l-4 border-cyan-500">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-semibold">${exp.title} @ ${exp.company}</h4>
              <span class="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-sm">${exp.period}</span>
            </div>
            <p class="text-sm text-gray-700">${exp.description}</p>
          </div>
        `).join('')}
      </div>
    `;

    // Skills
    const skillsSection = `
      <div class="grid grid-cols-3 gap-6">
        <div>
          <h4 class="font-semibold mb-3">💻 ${t('skills.frontend')}</h4>
          ${skills.frontend.map(skill => `<div class="mb-1 p-2 bg-blue-50 rounded text-sm">${skill}</div>`).join('')}
        </div>
        <div>
          <h4 class="font-semibold mb-3">⚙️ ${t('skills.backend')}</h4>
          ${skills.backend.map(skill => `<div class="mb-1 p-2 bg-green-50 rounded text-sm">${skill}</div>`).join('')}
        </div>
        <div>
          <h4 class="font-semibold mb-3">🛠️ ${t('skills.tools')}</h4>
          ${skills.tools.map(tool => `<div class="mb-1 p-2 bg-purple-50 rounded text-sm">${tool}</div>`).join('')}
        </div>
      </div>
    `;

    layout.innerHTML = header + about + experience + skillsSection;
    tempDiv.appendChild(layout);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      element: layout,
      cleanup: () => document.body.removeChild(tempDiv)
    };
  };

  const exportHandlers = {
    pdf: async () => {
      const { element, cleanup } = await createFixedCVLayout();
      const canvas = await html2canvas(element, { scale: 2, backgroundColor: '#ffffff' });
      cleanup();

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, imgWidth, imgHeight);
      
      const blob = pdf.output('blob');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mert_Batut_CV.pdf';
      link.click();
      
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },

    png: async () => {
      const { element, cleanup } = await createFixedCVLayout();
      const canvas = await html2canvas(element, { scale: 2, backgroundColor: '#ffffff' });
      cleanup();

      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Mert_Batut_CV.png';
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }, 'image/png', 1.0);
    },

    text: () => {
      const content = createCVContent();
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mert_Batut_CV.txt';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };

  const handleExport = async () => {
    if (isExporting) return;
    
    try {
      setIsExporting(true);
      displayToast(t('profile.preparingDownload'));
      
      await exportHandlers[exportFormat]();
      
      displayToast(t('profile.downloadComplete'));
    } catch (error) {
      console.error('Export error:', error);
      displayToast(t('profile.errorDownloading'));
    } finally {
      setIsExporting(false);
    }
  };

  // Components
  const Toast = () => (
    <motion.div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: showToast ? 1 : 0, 
        y: showToast ? 0 : 50 
      }}
      transition={{ duration: 0.3 }}
    >
      {isExporting && (
        <motion.div
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      <span>{toastMessage}</span>
    </motion.div>
  );

  const ExportPanel = () => (
    <div className="mb-8 bg-[#2d2d30] rounded-lg border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between bg-[#383838] px-4 py-3 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm">export-tool.js</span>
        </div>
        <div className="text-gray-400 text-xs">●</div>
      </div>

      <div className="p-4 font-mono text-sm text-[#d4d4d4]">
        <div className="space-y-2">
          <div className="text-[#6a9955]">{/* Export CV functionality */}</div>
          <div>
            <span className="text-[#569cd6]">const</span> 
            <span className="text-[#9cdcfe]"> exportFormat</span> 
            <span className="text-[#d4d4d4]"> = </span>
            <span className="text-[#ce9178]">&apos;{exportFormat}&apos;</span>
            <span className="text-[#d4d4d4]">;</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4 pt-2 border-t border-gray-600">
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="bg-[#3c3c3c] border border-gray-600 text-[#d4d4d4] px-3 py-2 rounded text-sm focus:border-blue-500 outline-none"
              disabled={isExporting}
            >
              <option value="pdf">PDF Document</option>
              <option value="png">PNG Image</option>
              <option value="text">Plain Text</option>
            </select>

            <button
              onClick={handleExport}
              disabled={isExporting}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                isExporting
                  ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                  : 'bg-[#0e639c] text-white hover:bg-[#1177bb]'
              }`}
            >
              {isExporting ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>⬇</span>
                  Download CV
                </div>
              )}
            </button>
          </div>
          
          {!isExporting && (
            <div className="text-[#6a9955] text-xs mt-2">
              {/* Ready to export • Format: {exportFormat.toUpperCase()} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ProfileTerminal = () => (
    <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-hidden shadow-lg">
      {/* VS Code Header */}
      <div className="flex items-center justify-between bg-[#2d2d30] px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">profile.json</span>
        </div>
        <div className="text-gray-400 text-xs">●</div>
      </div>

      {/* Code Editor Content */}
      <div className="p-0 font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4]">
        {/* Line numbers and code */}
        <div className="flex">
          <div className="w-12 bg-[#1e1e1e] text-[#858585] text-xs select-none border-r border-gray-700 py-4">
            {Array.from({length: 30}, (_, i) => (
              <div key={i} className="h-5 flex items-center justify-end pr-2">
                {i + 1}
              </div>
            ))}
          </div>
          
          <div className="flex-1 p-4">
            <div className="space-y-1">
              <div className="text-[#d4d4d4]">{'{'}</div>
              
              {/* Personal Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;personal&quot;</div>
                <div className="text-[#d4d4d4]">: {'{'}</div>
                <div className="ml-4 space-y-0.5">
                  <div>
                    <span className="text-[#9cdcfe]">&quot;name&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{personalInfo.name}&quot;</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;role&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{t('profile.jobTitle1')}&quot;</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;email&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{personalInfo.email}&quot;</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;phone&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{personalInfo.phone}&quot;</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;location&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{personalInfo.location}&quot;</span>
                  </div>
                </div>
                <div className="text-[#d4d4d4]">{'}'},</div>
              </div>

              {/* About Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;about&quot;</div>
                <div className="text-[#d4d4d4]">: {'{'}</div>
                <div className="ml-4 space-y-0.5">
                  <div>
                    <span className="text-[#9cdcfe]">&quot;summary&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&quot;{t('profile.resumeIntro')}&quot;</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;experience&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#b5cea8]">3</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;available&quot;</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#569cd6]">true</span>
                  </div>
                </div>
                <div className="text-[#d4d4d4]">{'}'},</div>
              </div>

              {/* Skills Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;skills&quot;</div>
                <div className="text-[#d4d4d4]">: {'{'}</div>
                <div className="ml-4 space-y-0.5">
                  <div>
                    <span className="text-[#9cdcfe]">&quot;frontend&quot;</span>
                    <span className="text-[#d4d4d4]">: [</span>
                    <span className="text-[#ce9178]">&quot;React&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;TypeScript&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;JavaScript&quot;</span>
                    <span className="text-[#d4d4d4]">],</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;backend&quot;</span>
                    <span className="text-[#d4d4d4]">: [</span>
                    <span className="text-[#ce9178]">&quot;C#&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;Node.js&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;SQL&quot;</span>
                    <span className="text-[#d4d4d4]">],</span>
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">&quot;tools&quot;</span>
                    <span className="text-[#d4d4d4]">: [</span>
                    <span className="text-[#ce9178]">&quot;Git&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;Docker&quot;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&quot;VS Code&quot;</span>
                    <span className="text-[#d4d4d4]">]</span>
                  </div>
                </div>
                <div className="text-[#d4d4d4]">{'}'},</div>
              </div>

              {/* Experience Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;experience&quot;</div>
                <div className="text-[#d4d4d4]">: [</div>
                <div className="ml-4 space-y-1">
                  {workExperience.map((exp, i) => (
                    <div key={i} className="ml-4">
                      <div className="text-[#d4d4d4]">{'{'}</div>
                      <div className="ml-4 space-y-0.5">
                        <div>
                          <span className="text-[#9cdcfe]">&quot;title&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{exp.title}&quot;</span>
                          <span className="text-[#d4d4d4]">,</span>
                        </div>
                        <div>
                          <span className="text-[#9cdcfe]">&quot;company&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{exp.company}&quot;</span>
                          <span className="text-[#d4d4d4]">,</span>
                        </div>
                        <div>
                          <span className="text-[#9cdcfe]">&quot;period&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{exp.period}&quot;</span>
                        </div>
                      </div>
                      <div className="text-[#d4d4d4]">{'}'}{i < workExperience.length - 1 ? ',' : ''}</div>
                    </div>
                  ))}
                </div>
                <div className="text-[#d4d4d4]">],</div>
              </div>

              {/* Education Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;education&quot;</div>
                <div className="text-[#d4d4d4]">: [</div>
                <div className="ml-4 space-y-1">
                  {education.map((edu, i) => (
                    <div key={i} className="ml-4">
                      <div className="text-[#d4d4d4]">{'{'}</div>
                      <div className="ml-4 space-y-0.5">
                        <div>
                          <span className="text-[#9cdcfe]">&quot;name&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{edu.name}&quot;</span>
                          <span className="text-[#d4d4d4]">,</span>
                        </div>
                        <div>
                          <span className="text-[#9cdcfe]">&quot;degree&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{edu.degree}&quot;</span>
                          <span className="text-[#d4d4d4]">,</span>
                        </div>
                        <div>
                          <span className="text-[#9cdcfe]">&quot;period&quot;</span>
                          <span className="text-[#d4d4d4]">: </span>
                          <span className="text-[#ce9178]">&quot;{edu.period}&quot;</span>
                        </div>
                      </div>
                      <div className="text-[#d4d4d4]">{'}'}{i < education.length - 1 ? ',' : ''}</div>
                    </div>
                  ))}
                </div>
                <div className="text-[#d4d4d4]">],</div>
              </div>

              {/* Languages Section */}
              <div className="ml-4">
                <div className="text-[#9cdcfe]">&quot;languages&quot;</div>
                <div className="text-[#d4d4d4]">: {'{'}</div>
                <div className="ml-4 space-y-0.5">
                  {languages.map((lang, i) => (
                    <div key={i}>
                      <span className="text-[#9cdcfe]">&quot;{lang.name}&quot;</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#ce9178]">&quot;{lang.level}&quot;</span>
                      {i < languages.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                    </div>
                  ))}
                </div>
                <div className="text-[#d4d4d4]">{'}'}</div>
              </div>

              <div className="text-[#d4d4d4]">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="profile" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">{t('profile.header')}</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              JSON
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('profile.description')}
          </p>
        </motion.div>

        {/* Export Panel */}
        <ExportPanel />

        {/* Profile Terminal */}
        <ProfileTerminal />

        {/* Toast */}
        <Toast />
      </div>
    </div>
  );
}