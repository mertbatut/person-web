import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Tech icon ve renk yardımcıları
const techIcons = {
  React: 'fab fa-react',
  Vue: 'fab fa-vuejs',
  Angular: 'fab fa-angular',
  JavaScript: 'fab fa-js',
  TypeScript: 'devicon-typescript-plain',
  HTML: 'fab fa-html5',
  CSS: 'fab fa-css3-alt',
  SASS: 'fab fa-sass',
  'Node.js': 'fab fa-node',
  PHP: 'fab fa-php',
  Python: 'fab fa-python',
  Java: 'fab fa-java',
  'C#': 'devicon-csharp-plain',
  'Ruby on Rails': 'devicon-rails-plain',
  MongoDB: 'devicon-mongodb-plain',
  MySQL: 'devicon-mysql-plain',
  Firebase: 'devicon-firebase-plain',
  AWS: 'fab fa-aws',
  Docker: 'fab fa-docker',
  Git: 'fab fa-git-alt',
  WordPress: 'fab fa-wordpress',
  ThreeJS: 'fa fa-cube',
  'TailwindCSS': 'devicon-tailwindcss-plain',
  'Framer Motion': 'fa fa-film',
  'React Native': 'fab fa-react',
  ARKit: 'fa fa-mobile',
  ARCore: 'fa fa-android',
  'D3.js': 'fa fa-chart-bar',
};

const getTechIcon = (tech) => {
  return techIcons[tech] || 'fa fa-code';
};

export default function Projects() {
  const { t, i18n } = useTranslation();
  
  // Ana state değişkenleri
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  
  // Animasyon için ref ve observer
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Kategoriye göre projeleri filtreleme
  const filterProjectsByCategory = (projectList, category) => {
    if (!projectList || !Array.isArray(projectList)) return [];
    if (category === 'all') return projectList;
    return projectList.filter(project => 
      project.category === category || 
      (project.tags && Array.isArray(project.tags) && project.tags.includes(category))
    );
  };
  
  // Kategorileri dil değişikliğine göre güncelle
  const categories = [
    { id: 'all', label: t('projects.all'), icon: 'fas fa-border-all' },
    { id: 'web', label: t('projects.web'), icon: 'fas fa-laptop-code' },
    { id: 'mobile', label: t('projects.mobile'), icon: 'fas fa-mobile-alt' },
    { id: 'design', label: t('projects.design'), icon: 'fas fa-paint-brush' }
  ];
  
  // Dil değişikliğini izle
  useEffect(() => {
    // Örnek projeler güncelle
    if (projects && projects.length > 0 && projects[0].id && projects[0].id.includes('sample')) {
      setProjects(getSampleProjects());
    }
  }, [i18n.language]);
  
  // Veri çekme işlemi
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // API isteği için 3 saniye timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const response = await fetch('/local/tr/Card.json', {
          signal: controller.signal,
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          throw new Error('Projeler getirilemedi');
        }
      } catch (err) {
        console.error('Veri yükleme hatası:', err);
        setProjects(getSampleProjects());
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  // Aktif projeyi ayarlama
  useEffect(() => {
    if (projects && projects.length > 0) {
      const filtered = filterProjectsByCategory(projects, activeCategory);
      setActiveProject(filtered.length > 0 ? filtered[0] : null);
    }
  }, [projects, activeCategory]);
  
  // Filtrelenmiş projeler
  const filteredProjects = filterProjectsByCategory(projects, activeCategory);
  
  // Örnek projeler - çevirilerle birlikte
  const getSampleProjects = () => [
    {
      id: "sample-1",
      title: t('projects.sampleProject1Title'),
      description: t('projects.sampleProject1Desc'),
      images: [{ src: "/images/default.png", alt: "3D Portfolio" }],
      techStack: ["React", "ThreeJS", "TailwindCSS", "Framer Motion"],
      category: "web",
      tags: ["web", "3d", "interactive"],
      siteLink: "https://example.com/3d-portfolio",
      githubLink: "https://github.com/example/3d-portfolio"
    },
    {
      id: "sample-2",
      title: t('projects.sampleProject2Title'),
      description: t('projects.sampleProject2Desc'),
      images: [{ src: "/images/default.png", alt: "AR Furniture App" }],
      techStack: ["React Native", "ARKit", "ARCore", "Firebase"],
      category: "mobile",
      tags: ["mobile", "ar", "interactive"],
      siteLink: "https://example.com/ar-furniture",
      githubLink: "https://github.com/example/ar-furniture"
    },
    {
      id: "sample-3",
      title: t('projects.sampleProject3Title'),
      description: t('projects.sampleProject3Desc'),
      images: [{ src: "/images/default.png", alt: "Data Visualization" }],
      techStack: ["D3.js", "React", "Node.js", "MongoDB"],
      category: "design",
      tags: ["dataviz", "web", "interactive"],
      siteLink: "https://example.com/data-viz",
      githubLink: "https://github.com/example/data-viz"
    }
  ];
  
  // URL güvenliği için kontrol
  const isValidUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch (_) {
      return false;
    }
  };
  
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  // CSS Değişkenleri 
  const cssVariables = {
    projectsBgFrom: 'var(--projects-bg-from, #f8f9fa)',
    projectsBgTo: 'var(--projects-bg-to, #ffffff)',
    projectsPrimaryColor: 'var(--projects-primary-color, #3b82f6)',
    projectsSecondaryColor: 'var(--projects-secondary-color, #8b5cf6)',
    projectsSidebarBg: 'var(--projects-sidebar-bg, #ffffff)',
    cardShadow: 'var(--card-shadow, rgba(0,0,0,0.1))',
    textPrimary: 'var(--text-primary, #1f2937)',
    projectsTabBg: 'var(--projects-tab-bg, #f3f4f6)',
    projectsTabSelected: 'var(--projects-tab-selected, #3b82f6)',
    projectsTabText: 'var(--projects-tab-text, #4b5563)',
    projectsButtonPrimaryBg: 'var(--projects-button-primary-bg, #3b82f6)',
    projectsButtonPrimaryText: 'var(--projects-button-primary-text, #ffffff)',
    projectsButtonSecondaryBorder: 'var(--projects-button-secondary-border, #d1d5db)',
    projectsButtonSecondaryText: 'var(--projects-button-secondary-text, #4b5563)',
    projectsTabSelectedText: 'var(--projects-tab-selected-text, #ffffff)',
    projectsTechTagBg: 'var(--projects-tech-tag-bg, #f3f4f6)',
    projectsTechTagText: 'var(--projects-tech-tag-text, #4b5563)',
    projectsTechIcon: 'var(--projects-tech-icon, #6b7280)',
    projectsCardBg: 'var(--projects-card-bg, #ffffff)',
    projectsCardShadow: 'var(--projects-card-shadow, rgba(0,0,0,0.1))',
    textSecondary: 'var(--text-secondary, #6b7280)',
    projectsEmptyIconBg: 'var(--projects-empty-icon-bg, #f3f4f6)',
    projectsEmptyIcon: 'var(--projects-empty-icon, #9ca3af)'
  };
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 overflow-hidden relative"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, ${cssVariables.projectsBgFrom}, ${cssVariables.projectsBgTo})` 
      }}
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" 
             style={{ 
               backgroundColor: cssVariables.projectsPrimaryColor, 
               opacity: 0.1 
             }}></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 rounded-full blur-3xl"
             style={{ 
               backgroundColor: cssVariables.projectsSecondaryColor, 
               opacity: 0.1 
             }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Başlık */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${cssVariables.projectsPrimaryColor}, ${cssVariables.projectsSecondaryColor})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent' 
              }}>
            {t('projects.title')}
          </h2>
          <p style={{ color: cssVariables.textSecondary }} className="max-w-2xl mx-auto text-sm sm:text-base">
            {t('projects.description')}
          </p>
        </motion.div>
        
        {/* Mobil Kategori Dropdown */}
        <div className="md:hidden mb-6">
          <button 
            className="w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium shadow-sm"
            style={{ 
              backgroundColor: cssVariables.projectsSidebarBg,
              color: cssVariables.textPrimary
            }}
            onClick={() => setShowCategoryMenu(!showCategoryMenu)}
          >
            <span className="flex items-center">
              <i className={`${categories.find(c => c.id === activeCategory)?.icon || 'fas fa-filter'} mr-2`}></i>
              <span>{categories.find(c => c.id === activeCategory)?.label || t('projects.filter')}</span>
            </span>
            <i className={`fas fa-chevron-${showCategoryMenu ? 'up' : 'down'}`}></i>
          </button>
          
          {/* Mobil Kategori Menüsü */}
          {showCategoryMenu && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-lg shadow-md overflow-hidden"
              style={{ backgroundColor: cssVariables.projectsSidebarBg }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowCategoryMenu(false);
                  }}
                  className="w-full text-left p-3 text-sm font-medium border-b last:border-0 flex items-center"
                  style={{ 
                    backgroundColor: activeCategory === category.id 
                      ? cssVariables.projectsPrimaryColor 
                      : 'transparent',
                    color: activeCategory === category.id 
                      ? cssVariables.projectsTabSelectedText 
                      : cssVariables.projectsTabText,
                    borderColor: cssVariables.projectsButtonSecondaryBorder
                  }}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.label}
                  
                  <span className="ml-auto px-2 py-0.5 text-xs rounded-full"
                        style={{ 
                          backgroundColor: activeCategory === category.id 
                            ? 'rgba(255, 255, 255, 0.2)' 
                            : cssVariables.projectsTechTagBg 
                        }}>
                    {filterProjectsByCategory(projects, category.id).length}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Yükleniyor durumu */}
        {loading && (
          <div className="flex justify-center py-10 sm:py-16">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 rounded-full"
                   style={{ 
                     borderWidth: '4px', 
                     borderStyle: 'solid',
                     borderColor: cssVariables.projectsTechTagBg 
                   }}></div>
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  borderWidth: '4px', 
                  borderStyle: 'solid',
                  borderColor: 'transparent', 
                  borderTopColor: cssVariables.projectsPrimaryColor 
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        )}
        
        {!loading && projects && projects.length > 0 && (
          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden md:block md:w-1/3 lg:w-1/4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="sticky top-24 rounded-xl shadow-lg p-4 lg:p-5"
                style={{ 
                  backgroundColor: cssVariables.projectsSidebarBg,
                  boxShadow: `0 4px 15px ${cssVariables.cardShadow}`
                }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: cssVariables.textPrimary }}>
                  {t('projects.categories')}
                </h3>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(category.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center"
                      style={{ 
                        backgroundColor: activeCategory === category.id 
                          ? cssVariables.projectsPrimaryColor 
                          : cssVariables.projectsTechTagBg,
                        color: activeCategory === category.id 
                          ? cssVariables.projectsTabSelectedText 
                          : cssVariables.projectsTabText,
                        boxShadow: activeCategory === category.id ? `0 2px 5px ${cssVariables.cardShadow}` : 'none'
                      }}
                    >
                      <i className={`${category.icon} w-5 h-5 mr-2 text-center`}></i>
                      <span className="flex-grow">{category.label}</span>
                      
                      <div className="flex items-center justify-center w-6 h-6 text-xs rounded-full"
                          style={{ 
                            backgroundColor: activeCategory === category.id 
                              ? 'rgba(255, 255, 255, 0.2)' 
                              : 'rgba(0, 0, 0, 0.1)' 
                          }}>
                        {filterProjectsByCategory(projects, category.id).length}
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {activeProject && (
                  <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700 hidden lg:block">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: cssVariables.textPrimary }}>
                      {t('projects.technologies')}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack && activeProject.techStack.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: cssVariables.projectsTechTagBg,
                            color: cssVariables.projectsTechTagText
                          }}
                        >
                          <i className={`${getTechIcon(tech)} mr-1.5`} style={{ color: cssVariables.projectsTechIcon }}></i>
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            
            {/* Proje İçeriği Alanı */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              {filteredProjects && filteredProjects.length > 0 ? (
                <Tab.Group>
                  {/* Tab menusu - kaydırılabilir */}
                  <Tab.List className="flex overflow-x-auto space-x-1 rounded-xl p-1 mb-4 sm:mb-6 scrollbar-hide"
                            style={{ backgroundColor: cssVariables.projectsTechTagBg }}>
                    {filteredProjects.map((project) => (
                      <Tab
                        key={project.id}
                        className="py-2 px-3 sm:px-4 whitespace-nowrap text-sm font-medium rounded-lg transition-all focus:outline-none flex-shrink-0"
                        onClick={() => setActiveProject(project)}
                      >
                        {({ selected }) => (
                          <span 
                            className="truncate"
                            style={{
                              color: selected ? cssVariables.projectsTabSelected : cssVariables.projectsTabText
                            }}
                          >
                            {project.title}
                          </span>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                  
                  <Tab.Panels>
                    {filteredProjects.map((project) => (
                      <Tab.Panel
                        key={project.id}
                        className="rounded-xl focus:outline-none"
                        style={{ 
                          backgroundColor: cssVariables.projectsCardBg,
                          boxShadow: `0 4px 15px ${cssVariables.projectsCardShadow}`
                        }}
                      >
                        <div className="overflow-hidden rounded-xl">
                          {/* Proje görseli */}
                          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                            {project.images && project.images.length > 0 ? (
                              <img 
                                src={project.images[0].src} 
                                alt={project.images[0].alt || project.title} 
                                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center"
                                   style={{ 
                                     backgroundImage: `linear-gradient(to bottom right, ${cssVariables.projectsPrimaryColor}, ${cssVariables.projectsSecondaryColor})` 
                                   }}>
                                <i className="fa fa-code text-white text-4xl"></i>
                              </div>
                            )}
                            
                            {/* Kategori rozeti */}
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                              <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                                <i className={`${categories.find(c => c.id === project.category)?.icon || 'fas fa-code'} mr-1.5`}></i>
                                {categories.find(c => c.id === project.category)?.label || project.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Proje detayları */}
                          <div className="p-4 sm:p-6">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: cssVariables.textPrimary }}>
                              {project.title}
                            </h3>
                            
                            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: cssVariables.textSecondary }}>
                              {project.description}
                            </p>
                            
                            {/* Mobil için teknoloji etiketleri */}
                            <div className="mb-4 flex flex-wrap gap-2 lg:hidden">
                              {project.techStack && project.techStack.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                                  style={{
                                    backgroundColor: cssVariables.projectsTechTagBg,
                                    color: cssVariables.projectsTechTagText
                                  }}
                                >
                                  <i className={`${getTechIcon(tech)} mr-1.5`} style={{ color: cssVariables.projectsTechIcon }}></i>
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {/* Proje linkleri - Mobilde alt alta, desktop yanyana */}
                            <div className="flex flex-col sm:flex-row gap-3">
                              {project.siteLink && (
                                <motion.a 
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  href={project.siteLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    if (!isValidUrl(project.siteLink)) {
                                      e.preventDefault();
                                      alert(t('projects.invalidUrl'));
                                    }
                                  }}
                                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 group"
                                  style={{ 
                                    backgroundColor: cssVariables.projectsButtonPrimaryBg, 
                                    color: cssVariables.projectsButtonPrimaryText 
                                  }}
                                >
                                  <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform"></i>
                                  <span>{t('projects.viewSite')}</span>
                                </motion.a>
                              )}
                              
                              {project.githubLink && (
                                <motion.a 
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  href={project.githubLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    if (!isValidUrl(project.githubLink)) {
                                      e.preventDefault();
                                      alert(t('projects.invalidUrl'));
                                    }
                                  }}
                                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300 group"
                                  style={{ 
                                    borderColor: cssVariables.projectsButtonSecondaryBorder, 
                                    color: cssVariables.projectsButtonSecondaryText 
                                  }}
                                >
                                  <i className="fab fa-github group-hover:rotate-12 transition-transform"></i>
                                  <span>{t('projects.gitHubCode')}</span>
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8 sm:py-12 md:py-16 rounded-xl shadow-lg"
                  style={{ backgroundColor: cssVariables.projectsCardBg }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: cssVariables.projectsEmptyIconBg }}>
                    <i className="fas fa-search text-lg sm:text-xl" style={{ color: cssVariables.projectsEmptyIcon }}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: cssVariables.textPrimary }}>
                    {t('projects.notFound')}
                  </h3>
                  <p className="max-w-md mx-auto mb-5 sm:mb-6 px-4 text-sm sm:text-base" style={{ color: cssVariables.textSecondary }}>
                    {t('projects.notFoundDesc')}
                  </p>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="px-4 py-2 rounded-lg shadow transition-colors"
                    style={{ 
                      backgroundColor: cssVariables.projectsPrimaryColor, 
                      color: cssVariables.projectsButtonPrimaryText 
                    }}
                  >
                    {t('projects.showAllProjects')}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Scrollbar Gizleme için Inline stil */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}