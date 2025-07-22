import { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

// Tech icons
const techIcons = {
  React: 'fab fa-react',
  'Node.js': 'fab fa-node',
  MongoDB: 'devicon-mongodb-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  Firebase: 'devicon-firebase-plain',
  ThreeJS: 'fa fa-cube',
  'TailwindCSS': 'devicon-tailwindcss-plain',
  'Framer Motion': 'fa fa-film',
  'D3.js': 'fa fa-chart-bar',
  'Socket.io': 'fa fa-plug',
  Express: 'fab fa-node-js',
  Redis: 'devicon-redis-plain',
  WebGL: 'fa fa-cube'
};

const getTechIcon = (tech) => techIcons[tech] || 'fa fa-code';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  const isDark = theme === 'dark';

  // Get projects data from translation - memoized to prevent infinite loops
  const projectsData = useMemo(() => {
    return t('projects.projectsData', { returnObjects: true });
  }, [t, i18n.language]); // eslint-disable-line react-hooks/exhaustive-deps

  // Intersection Observer
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

    return () => observer.disconnect();
  }, []);

  // Load projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 600));
        // Ensure projectsData is an array before setting it
        const validProjects = Array.isArray(projectsData) ? projectsData : [];
        setProjects(validProjects);
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error('Loading error:', err);
        }
        setProjects([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectsData]);

  return (
    <div id="projects" ref={sectionRef} className={`relative py-20 transition-colors duration-500 ${
      isDark ? 'bg-[#0a0a0f]' : 'bg-gray-50'
    }`}>
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10' 
            : 'bg-gradient-to-br from-purple-100/30 via-transparent to-cyan-100/30'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {t('projects.title').split(' ')[0]} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('projects.title').split(' ')[1]}</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <motion.div 
              className="w-12 h-12 border-3 border-cyan-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}

        {!loading && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.isArray(projects) && projects.length > 0 ? projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ${
                  isDark 
                    ? 'bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/50' 
                    : 'bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-cyan-400/50'
                } hover:shadow-2xl hover:shadow-cyan-400/10`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                      <i className="fas fa-check-circle mr-1"></i>
                      {t('projects.live')}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className={`px-2 sm:px-3 py-1 sm:py-1.5 ${
                      isDark ? 'bg-gray-900/80' : 'bg-white/80'
                    } backdrop-blur-sm rounded-full text-xs font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <i className="fas fa-layer-group mr-1"></i>
                      <span className="hidden sm:inline">{t('projects.webApp')}</span>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick Actions - Hidden on mobile */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-cyan-500/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-external-link-alt text-sm"></i>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-cyan-500/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github text-sm"></i>
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  
                  {/* Title & Year */}
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold leading-tight ${
                      isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'
                    } transition-colors duration-300 pr-2`}>
                      {project.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-500 whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-gray-700/60 text-gray-200' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <i className={`${getTechIcon(tech)} mr-1 sm:mr-1.5 text-cyan-500 text-xs`}></i>
                        <span className="truncate">{tech}</span>
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-600 dark:text-cyan-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <motion.a 
                      href={project.siteLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-center text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-eye mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">{t('projects.viewLive')}</span>
                      <span className="sm:hidden">{t('projects.viewLiveShort')}</span>
                    </motion.a>
                    
                    <motion.a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex-1 border py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                        isDark 
                          ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fab fa-github mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">{t('projects.source')}</span>
                      <span className="sm:hidden">{t('projects.sourceShort')}</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"></div>
                </div>
                
              </motion.div>
            )) : (
              <div className={`col-span-full text-center py-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="text-xl">{t('projects.notFound')}</p>
                <p className="text-sm mt-2">{t('projects.notFoundDesc')}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <style>{`
        .border-3 {
          border-width: 3px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}