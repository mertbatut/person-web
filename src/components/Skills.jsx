import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
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

  // Skills Filter Panel Component
  function SkillsFilterPanel() {
    return (
      <div className="mb-8 bg-[#2d2d30] rounded-lg border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between bg-[#383838] px-4 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm">skills-filter.js</span>
          </div>
          <div className="text-gray-400 text-xs">●</div>
        </div>

        <div className="p-4 font-mono text-sm text-[#d4d4d4]">
          <div className="space-y-2">
            <div className="text-[#6a9955]">{/* Skills filtering system */}</div>
            <div>
              <span className="text-[#569cd6]">const</span> 
              <span className="text-[#9cdcfe]"> activeFilter</span> 
              <span className="text-[#d4d4d4]"> = </span>
              <span className="text-[#ce9178]">&apos;{activeTab}&apos;</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 pt-2 border-t border-gray-600">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === category.id
                      ? 'bg-[#0e639c] text-white'
                      : 'bg-[#3c3c3c] text-[#d4d4d4] hover:bg-[#464647]'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="text-[#6a9955] text-xs mt-2">
              {/* Active filter: {activeTab} • {filteredSkills.length} skills found */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Skills Terminal Component
  function SkillsTerminal() {
    return (
      <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 overflow-hidden shadow-lg">
        {/* VS Code Header */}
        <div className="flex items-center justify-between bg-[#2d2d30] px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm font-medium">skills.json</span>
          </div>
          <div className="text-gray-400 text-xs">●</div>
        </div>

        {/* Code Editor Content */}
        <div className="p-0 font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4]">
          {/* Line numbers and code */}
          <div className="flex">
            <div className="w-12 bg-[#1e1e1e] text-[#858585] text-xs select-none border-r border-gray-700 py-4">
              {Array.from({length: Math.max(20, Math.ceil(filteredSkills.length / 4) + 10)}, (_, i) => (
                <div key={i} className="h-5 flex items-center justify-end pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="flex-1 p-4">
              <div className="space-y-1">
                <div className="text-[#d4d4d4]">{'{'}</div>
                
                {/* Skills Section */}
                <div className="ml-4">
                  <div className="text-[#9cdcfe]">&quot;skills&quot;</div>
                  <div className="text-[#d4d4d4]">: {'{'}</div>
                  
                  {/* Category Header */}
                  <div className="ml-4 space-y-0.5">
                    <div>
                      <span className="text-[#9cdcfe]">&quot;category&quot;</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#ce9178]">&quot;{categories.find(c => c.id === activeTab)?.label || 'All'}&quot;</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                    <div>
                      <span className="text-[#9cdcfe]">&quot;count&quot;</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#b5cea8]">{filteredSkills.length}</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                    <div>
                      <span className="text-[#9cdcfe]">&quot;technologies&quot;</span>
                      <span className="text-[#d4d4d4]">: [</span>
                    </div>
                  </div>
                  
                  {/* Skills Grid in JSON format */}
                  <div className="ml-8 space-y-2">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group"
                      >
                        <div className="text-[#d4d4d4] hover:bg-[#2d2d30] rounded px-2 py-1 transition-colors cursor-pointer">
                          <span className="text-[#d4d4d4]">{'{'}</span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;name&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;{skill.name}&quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;category&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;{skill.category}&quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;icon&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;
                              <i className={`${skill.icon} inline-block mx-1`} style={{ color: skill.color }}></i>
                            &quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;proficiency&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;advanced&quot;</span>
                          </span>
                          <br />
                          <span className="text-[#d4d4d4]">{'}'}{index < filteredSkills.length - 1 ? ',' : ''}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="ml-4 text-[#d4d4d4]">]</div>
                  <div className="text-[#d4d4d4]">{'}'}</div>
                </div>

                <div className="text-[#d4d4d4]">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="skills" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
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
            <span className="text-white">{t('skills.skills')}</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Filter Panel */}
        <SkillsFilterPanel />

        {/* Skills Terminal */}
        <SkillsTerminal />
      </div>
    </div>
  );
}