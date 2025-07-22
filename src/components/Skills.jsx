import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function Skills() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState('terminal'); // 'terminal' or 'grid'
  const sectionRef = useRef(null);

  const isDark = theme === 'dark';

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
      observer.disconnect();
    };
  }, []);

  // Dil değişikliğinde kategorileri güncelle
  useEffect(() => {
    setActiveTab('all');
  }, [i18n.language]);

  // Teknoloji yetenek kartları
  const skills = [
    { name: 'JavaScript', category: 'language', icon: 'fab fa-js-square', color: '#F7DF1E', background: '#282C34' },
    { name: 'React', category: 'frontend', icon: 'fab fa-react', color: '#61DAFB', background: '#282C34' },
    { name: 'TypeScript', category: 'language', icon: 'devicon-typescript-plain', color: '#3178C6', background: '#282C34' },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node-js', color: '#8CC84B', background: '#282C34' },
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5', color: '#E34F26', background: '#282C34' },
    { name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt', color: '#1572B6', background: '#282C34' },
    { name: 'Redux', category: 'frontend', icon: 'devicon-redux-original', color: '#764ABC', background: '#282C34' },
    { name: 'TailwindCSS', category: 'frontend', icon: 'devicon-tailwindcss-plain', color: '#06B6D4', background: '#282C34' },
    { name: 'C#', category: 'language', icon: 'devicon-csharp-plain', color: '#239120', background: '#282C34' },
    { name: 'Git', category: 'tool', icon: 'fab fa-git-alt', color: '#F05032', background: '#282C34' },
    { name: 'MongoDB', category: 'database', icon: 'devicon-mongodb-plain', color: '#47A248', background: '#282C34' },
    { name: 'SQL', category: 'database', icon: 'fas fa-database', color: '#4479A1', background: '#282C34' },
    { name: 'VS Code', category: 'tool', icon: 'devicon-vscode-plain', color: '#007ACC', background: '#282C34' },
    { name: 'Figma', category: 'design', icon: 'fab fa-figma', color: '#F24E1E', background: '#282C34' },
    { name: 'Docker', category: 'devops', icon: 'fab fa-docker', color: '#2496ED', background: '#282C34' },
    { name: 'Firebase', category: 'backend', icon: 'devicon-firebase-plain', color: '#FFCA28', background: '#282C34' },
    { name: 'Angular', category: 'frontend', icon: 'fab fa-angular', color: '#DD0031', background: '#282C34' },
    { name: 'Express', category: 'backend', icon: 'devicon-express-original', color: '#FFFFFF', background: '#282C34' },
    { name: 'REST API', category: 'backend', icon: 'fas fa-plug', color: '#4CAF50', background: '#282C34' },
    { name: 'Responsive Design', category: 'design', icon: 'fas fa-mobile-alt', color: '#FF6B6B', background: '#282C34' },
  ];

  // Kategori filtreleri
  const categories = [
    { id: 'all', label: t('skills.all'), icon: 'fas fa-border-all' },
    { id: 'frontend', label: t('skills.frontend'), icon: 'fas fa-laptop-code' },
    { id: 'backend', label: t('skills.backend'), icon: 'fas fa-server' },
    { id: 'language', label: t('skills.languages'), icon: 'fas fa-code' },
    { id: 'database', label: t('skills.database'), icon: 'fas fa-database' },
    { id: 'tool', label: t('skills.tools'), icon: 'fas fa-tools' },
    { id: 'design', label: t('skills.design'), icon: 'fas fa-paint-brush' },
    { id: 'devops', label: t('skills.devops'), icon: 'fas fa-cogs' }
  ];

  // Filtreli yetenekler
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  // Skills Grid View Component
  function SkillsGrid() {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`group relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-gray-900 border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20' 
                : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <i 
                  className={`${skill.icon} text-2xl sm:text-3xl lg:text-4xl transition-transform group-hover:scale-110`} 
                  style={{ color: skill.color }}
                />
                <div className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 transition-opacity ${
                  isDark ? 'bg-cyan-400' : 'bg-blue-500'
                }`} />
              </div>
              <h3 className={`font-semibold text-sm sm:text-base ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {skill.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Skills Filter Panel Component
  function SkillsFilterPanel() {
    return (
      <div className={`mb-6 sm:mb-8 ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } rounded-lg border overflow-hidden`}>
        <div className={`flex items-center justify-between ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        } px-3 sm:px-4 py-2 sm:py-3 border-b`}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className={`text-xs sm:text-sm ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>skills-filter.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'terminal' : 'grid')}
              className={`px-2 sm:px-3 py-1 text-xs rounded transition-colors ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <i className={`fas ${viewMode === 'grid' ? 'fa-code' : 'fa-th'} mr-1`} />
              {viewMode === 'grid' ? t('skills.filterCode') : t('skills.filterGrid')}
            </button>
            <div className={`text-xs ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>●</div>
          </div>
        </div>

        <div className={`p-3 sm:p-4 font-mono text-xs sm:text-sm ${
          isDark ? 'text-gray-300' : 'text-gray-800'
        }`}>
          <div className="space-y-2">
            <div className={`${
              isDark ? 'text-green-400' : 'text-green-600'
            }`}>{/* {t('skills.filterComment')} */}</div>
            <div className="break-all">
              <span className={`${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>const</span> 
              <span className={`${
                isDark ? 'text-cyan-300' : 'text-purple-600'
              }`}> activeFilter</span> 
              <span className={`${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}> = </span>
              <span className={`${
                isDark ? 'text-orange-300' : 'text-red-600'
              }`}>&apos;{activeTab}&apos;</span>
              <span className={`${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}>;</span>
            </div>
            
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-3 sm:mt-4 pt-2 border-t ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeTab === category.id
                      ? isDark ? 'bg-cyan-500 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg'
                      : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} mr-1 sm:mr-2`}></i>
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.slice(0, 3)}</span>
                </button>
              ))}
            </div>
            
            <div className={`text-xs mt-2 ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`}>
              {/* {t('skills.activeFilter')}: {activeTab} • {filteredSkills.length} {t('skills.skillsCount')} */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Skills Terminal Component
  function SkillsTerminal() {
    return (
      <div className={`${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } rounded-lg border overflow-hidden shadow-lg`}>
        {/* VS Code Header */}
        <div className={`flex items-center justify-between ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        } px-3 sm:px-4 py-2 border-b`}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className={`text-xs sm:text-sm font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>skills.json</span>
          </div>
          <div className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>●</div>
        </div>

        {/* Code Editor Content */}
        <div className={`font-mono text-xs sm:text-sm ${
          isDark ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
        }`}>
          {/* Line numbers and code */}
          <div className="flex">
            <div className={`w-8 sm:w-12 ${
              isDark ? 'bg-gray-900 text-gray-600 border-gray-700' : 'bg-gray-50 text-gray-500 border-gray-200'
            } text-xs select-none border-r py-2 sm:py-4`}>
              {Array.from({length: Math.max(20, filteredSkills.length + 10)}, (_, i) => (
                <div key={i} className="h-4 sm:h-5 flex items-center justify-end pr-1 sm:pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="flex-1 p-2 sm:p-4">
              <div className="space-y-0.5 sm:space-y-1">
                <div className={`${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}>{'{'}</div>
                
                {/* Skills Section */}
                <div className="ml-2 sm:ml-4">
                  <div className={`${
                    isDark ? 'text-cyan-300' : 'text-purple-600'
                  } break-all`}>&quot;skills&quot;</div>
                  <div className={`${
                    isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>: {'{'}</div>
                  
                  {/* Category Header */}
                  <div className="ml-2 sm:ml-4 space-y-0.5">
                    <div className="break-all">
                      <span className={`${
                        isDark ? 'text-cyan-300' : 'text-purple-600'
                      }`}>&quot;category&quot;</span>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-800'
                      }`}>: </span>
                      <span className={`${
                        isDark ? 'text-orange-300' : 'text-red-600'
                      }`}>&quot;{categories.find(c => c.id === activeTab)?.label}&quot;</span>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-800'
                      }`}>,</span>
                    </div>
                    <div>
                      <span className={`${
                        isDark ? 'text-cyan-300' : 'text-purple-600'
                      }`}>&quot;count&quot;</span>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-800'
                      }`}>: </span>
                      <span className={`${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>{filteredSkills.length}</span>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-800'
                      }`}>,</span>
                    </div>
                    <div>
                      <span className={`${
                        isDark ? 'text-cyan-300' : 'text-purple-600'
                      }`}>&quot;technologies&quot;</span>
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-800'
                      }`}>: [</span>
                    </div>
                  </div>
                  
                  {/* Skills in JSON format - Mobile optimized */}
                  <div className="ml-4 sm:ml-8 space-y-1 sm:space-y-2 max-h-60 sm:max-h-96 overflow-y-auto scrollbar-thin">
                    {filteredSkills.slice(0, window.innerWidth < 640 ? 8 : filteredSkills.length).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group"
                      >
                        <div className={`${
                          isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-50'
                        } rounded px-1 sm:px-2 py-0.5 sm:py-1 transition-colors cursor-pointer`}>
                          <span className={`${
                            isDark ? 'text-gray-300' : 'text-gray-800'
                          }`}>{'{'}</span>
                          <br />
                          <span className="ml-2 sm:ml-4 break-all">
                            <span className={`${
                              isDark ? 'text-cyan-300' : 'text-purple-600'
                            }`}>&quot;name&quot;</span>
                            <span className={`${
                              isDark ? 'text-gray-300' : 'text-gray-800'
                            }`}>: </span>
                            <span className={`${
                              isDark ? 'text-orange-300' : 'text-red-600'
                            }`}>&quot;{skill.name}&quot;</span>
                            <span className={`${
                              isDark ? 'text-gray-300' : 'text-gray-800'
                            }`}>,</span>
                          </span>
                          <br />
                          <span className="ml-2 sm:ml-4">
                            <span className={`${
                              isDark ? 'text-cyan-300' : 'text-purple-600'
                            }`}>&quot;icon&quot;</span>
                            <span className={`${
                              isDark ? 'text-gray-300' : 'text-gray-800'
                            }`}>: </span>
                            <span className={`${
                              isDark ? 'text-orange-300' : 'text-red-600'
                            }`}>&quot;
                              <i className={`${skill.icon} inline-block mx-1`} style={{ color: skill.color }}></i>
                            &quot;</span>
                          </span>
                          <br />
                          <span className={`${
                            isDark ? 'text-gray-300' : 'text-gray-800'
                          }`}>{'}'}{index < filteredSkills.length - 1 ? ',' : ''}</span>
                        </div>
                      </motion.div>
                    ))}
                    {window.innerWidth < 640 && filteredSkills.length > 8 && (
                      <div className={`text-center py-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-xs">... {t('skills.andMore')} {filteredSkills.length - 8} {t('skills.more')}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`ml-2 sm:ml-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>]</div>
                  <div className={`${
                    isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>{'}'}</div>
                </div>

                <div className={`${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="skills" ref={sectionRef} className={`relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20' 
            : 'bg-gradient-to-br from-purple-100/30 via-transparent to-cyan-100/30'
        }`} />
        <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${
          isDark 
            ? 'bg-gradient-to-bl from-purple-500/10 to-transparent' 
            : 'bg-gradient-to-bl from-purple-200/20 to-transparent'
        }`} />
        <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 ${
          isDark 
            ? 'bg-gradient-to-tr from-cyan-500/10 to-transparent' 
            : 'bg-gradient-to-tr from-cyan-200/20 to-transparent'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className={`block ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('skills.skills')}</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('skills.technologies')}
            </span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Filter Panel */}
        <SkillsFilterPanel />

        {/* Skills Content */}
        {viewMode === 'terminal' ? <SkillsTerminal /> : <SkillsGrid />}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: ${isDark ? '#374151' : '#f3f4f6'};
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: ${isDark ? '#6b7280' : '#d1d5db'};
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? '#9ca3af' : '#9ca3af'};
        }
      `}</style>
    </div>
  );
}