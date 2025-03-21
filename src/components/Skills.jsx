import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Dil değişikliğinde kategorileri güncelle
  useEffect(() => {
    // Kategorileri doğru dilde güncelle
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

  return (
    <div id="skills" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[var(--bg-primary)]">
      {/* Geometrik arka plan şekilleri */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-[var(--profile-bg-gradient-1)] to-[var(--profile-bg-gradient-2)] rounded-bl-[40%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-tr-[40%] opacity-30"></div>
      </div>

      {/* İçerik container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Başlık alanı */}
        <div className="text-center mb-8 md:mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-4 md:-left-6 w-4 md:w-6 h-4 md:h-6 border-t-2 border-l-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute top-0 -right-4 md:-right-6 w-4 md:w-6 h-4 md:h-6 border-t-2 border-r-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute -bottom-2 -left-4 md:-left-6 w-4 md:w-6 h-4 md:h-6 border-b-2 border-l-2 border-[var(--profile-header-decoration)]"></div>
              <div className="absolute -bottom-2 -right-4 md:-right-6 w-4 md:w-6 h-4 md:h-6 border-b-2 border-r-2 border-[var(--profile-header-decoration)]"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-1 text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text px-4">
                {t('skills.skills')}
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto mt-4 md:mt-6 px-2">
              {t('skills.description')}
            </p>
          </div>
        </div>

        {/* Mobil için Basit Kategori Filtreleri - Yetenek sayısı göstergesi ile */}
        <div className="md:hidden mb-6">
          {/* Yetenek Sayısı Özeti */}
          <div className="bg-[var(--card-bg)] rounded-lg shadow-sm mb-4 p-4 border border-[var(--card-border)]">
            <div className="flex items-center">
              <div className="bg-[var(--accent-primary)] rounded-full p-2 mr-3">
                <i className="fas fa-layer-group text-white"></i>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)]">{filteredSkills.length} {t('skills.skillsFound', 'beceri')}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {activeTab === 'all' ? t('skills.allSkills', 'Tüm yetenekler') : categories.find(c => c.id === activeTab)?.label}
                </p>
              </div>
            </div>
          </div>
          
          {/* Ana Kategori Butonları - Çok sadeleştirilmiş, sadece ana kategoriler */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-[var(--accent-primary)] text-[var(--text-primary)]' 
                  : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)]'
              }`}
            >
              <i className="fas fa-border-all mr-2"></i>
              {t('skills.all')}
            </button>
            <button 
              onClick={() => setActiveTab('frontend')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'frontend' 
                  ? 'bg-[var(--accent-primary)] text-[var(--text-primary)]' 
                  : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)]'
              }`}
            >
              <i className="fas fa-laptop-code mr-2"></i>
              {t('skills.frontend')}
            </button>
            <button 
              onClick={() => setActiveTab('backend')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'backend' 
                  ? 'bg-[var(--accent-primary)] text-[var(--text-primary)]' 
                  : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)]'
              }`}
            >
              <i className="fas fa-server mr-2"></i>
              {t('skills.backend')}
            </button>
            <button 
              onClick={() => {
                // Mobil dropdown menü için toggle
                const dropdown = document.getElementById('categoryDropdown');
                if (dropdown) {
                  dropdown.classList.toggle('hidden');
                }
              }}
              className="rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)]"
            >
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          
          {/* Diğer Kategoriler Dropdown */}
          <div id="categoryDropdown" className="hidden bg-[var(--card-bg)] rounded-lg shadow-md p-3 mb-6 border border-[var(--card-border)]">
            {categories.filter(c => !['all', 'frontend', 'backend'].includes(c.id)).map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  const dropdown = document.getElementById('categoryDropdown');
                  if (dropdown) {
                    dropdown.classList.add('hidden');
                  }
                }}
                className={`w-full text-left p-3 mb-1 rounded-lg flex items-center ${
                  activeTab === category.id 
                    ? 'bg-[var(--accent-primary)] text-[var(--text-primary)]' 
                    : 'hover:bg-[var(--card-border)] text-[var(--text-secondary)]'
                }`}
              >
                <i className={`${category.icon} mr-3`}></i>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masaüstü için Kategori Seçici */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)]/30 to-[var(--gradient-end)]/30 blur-xl -z-10 rounded-3xl transform -skew-y-1"></div>
          <div className="flex justify-center flex-wrap gap-3 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md'
                    : 'bg-[var(--btn-outline-hover)] text-[var(--text-secondary)] hover:bg-[var(--card-border)]'
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

        {/* Yetenekler Grid - 3D Kart Efekti */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
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
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-32 sm:h-36 md:h-44 lg:h-52 duration-700">
                {/* Kart Ön Yüz */}
                <div className="absolute backface-hidden w-full h-full rounded-xl shadow-md overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full bg-[var(--card-bg)] border border-[var(--card-border)] p-3">
                    <i className={`${skill.icon} text-3xl sm:text-4xl md:text-5xl mb-3`} style={{ color: skill.color }}></i>
                    <h3 className="text-[var(--text-primary)] text-center text-sm font-medium">{skill.name}</h3>
                  </div>
                </div>
                
                {/* Kart Arka Yüz */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-xl shadow-md overflow-hidden">
                  <div className="flex flex-col items-center justify-center p-3 h-full text-center bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]">
                    <i className={`${skill.icon} text-2xl sm:text-3xl md:text-4xl mb-2 text-white`}></i>
                    <h3 className="text-white font-bold mb-1 text-sm">{skill.name}</h3>
                    <p className="text-white/90 text-xs line-clamp-3">
                      {t(`skills.${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}Desc`, `Projelerimde ${skill.name} teknolojisini aktif olarak kullanıyorum`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Özel CSS (White Express İkonu için Fix) */}
        <style >{`
          .devicon-express-original {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 3px;
          }
          
          .dark .devicon-express-original {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
      
      {/* Custom CSS for 3D Card Effect */}
      <style >{`
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );}