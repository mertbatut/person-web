import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const { t } = useTranslation();
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    { id: 'all', label: t('skills.all', 'Tümü'), icon: 'fas fa-border-all' },
    { id: 'frontend', label: t('skills.frontend', 'Frontend'), icon: 'fas fa-laptop-code' },
    { id: 'backend', label: t('skills.backend', 'Backend'), icon: 'fas fa-server' },
    { id: 'language', label: t('skills.languages', 'Diller'), icon: 'fas fa-code' },
    { id: 'database', label: t('skills.database', 'Veritabanı'), icon: 'fas fa-database' },
    { id: 'tool', label: t('skills.tools', 'Araçlar'), icon: 'fas fa-tools' },
    { id: 'design', label: t('skills.design', 'Tasarım'), icon: 'fas fa-paint-brush' },
  ];

  // Filtreli yetenekler
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <div id="skills" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa]">
      {/* Geometrik arka plan şekilleri */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[#f0f9ff] to-[#cbf3f0] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#cbf281] to-[#2dd4bf] rounded-tr-[40%] opacity-30"></div>
      </div>

      {/* İçerik container */}
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
                {t('skills.skills', 'Yeteneklerim')}
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              {t('skills.description', 'Projelerimde kullandığım teknolojiler ve sürekli geliştirdiğim yetenekler.')}
            </p>
          </div>
        </div>

        {/* 3D Kategori Seçici */}
        <div className={`relative mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#CBF281]/30 to-[#2dd4bf]/30 blur-xl -z-10 rounded-3xl transform -skew-y-1"></div>
          <div className="flex justify-center flex-wrap gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-[#CBF281] to-[#2dd4bf] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <i className={category.icon}></i>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Yetenekler Grid - 3D Kart Efekti ile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="group perspective"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-52 duration-700">
                {/* Kart Ön Yüz */}
                <div className="absolute backface-hidden w-full h-full rounded-xl p-6 shadow-md">
                  <div className="flex flex-col items-center justify-center h-full rounded-lg bg-white border border-gray-100">
                    <i className={`${skill.icon} text-5xl mb-4`} style={{ color: skill.color }}></i>
                    <h3 className="text-gray-800 text-center font-medium">{skill.name}</h3>
                  </div>
                </div>
                
                {/* Kart Arka Yüz */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-xl shadow-md overflow-hidden">
                  <div className="flex flex-col items-center justify-center p-6 h-full text-center bg-gradient-to-br from-[#CBF281] to-[#2dd4bf]">
                    <i className={`${skill.icon} text-4xl mb-3 text-white`}></i>
                    <h3 className="text-white font-bold mb-2">{skill.name}</h3>
                    <p className="text-white/90 text-sm">
                      {t(`skills.${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}Desc`, 'Projelerimde aktif olarak kullanıyorum')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      
        
      </div>
      
      {/* Custom CSS for 3D Card Effect */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .my-rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .group-hover\\:my-rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}