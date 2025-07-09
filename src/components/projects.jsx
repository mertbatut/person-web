import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
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

  // Kategoriler
  const categories = [
    { id: 'all', label: t('projects.all'), icon: 'fas fa-border-all' },
    { id: 'web', label: t('projects.web'), icon: 'fas fa-laptop-code' },
    { id: 'mobile', label: t('projects.mobile'), icon: 'fas fa-mobile-alt' },
    { id: 'design', label: t('projects.design'), icon: 'fas fa-paint-brush' }
  ];

  // Örnek projeler
  const getSampleProjects = () => [
    {
      id: "sample-1",
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio with Three.js animations and modern UI/UX design",
      images: [{ src: "/images/PatentOyun.png", alt: "3D Portfolio" }],
      techStack: ["React", "ThreeJS", "TailwindCSS", "Framer Motion"],
      category: "web",
      tags: ["web", "3d", "interactive"],
      status: "completed",
      year: "2024",
      siteLink: "https://example.com/3d-portfolio",
      githubLink: "https://github.com/example/3d-portfolio"
    },
    {
      id: "sample-2",
      title: "AR Furniture App",
      description: "Augmented reality mobile app for furniture visualization in real spaces",
      images: [{ src: "/images/SegnaTile.png", alt: "AR Furniture App" }],
      techStack: ["React Native", "ARKit", "ARCore", "Firebase"],
      category: "mobile",
      tags: ["mobile", "ar", "interactive"],
      status: "completed",
      year: "2024",
      siteLink: "https://example.com/ar-furniture",
      githubLink: "https://github.com/example/ar-furniture"
    },
    {
      id: "sample-3",
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization dashboard with real-time analytics",
      images: [{ src: "/images/KrizlerveHekimlik.png", alt: "Data Visualization" }],
      techStack: ["D3.js", "React", "Node.js", "MongoDB"],
      category: "design",
      tags: ["dataviz", "web", "interactive"],
      status: "in-progress",
      year: "2024",
      siteLink: "https://example.com/data-viz",
      githubLink: "https://github.com/example/data-viz"
    }
  ];

  // Veri yükleme
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const sampleProjects = getSampleProjects();
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated loading
        setProjects(sampleProjects);
        setSelectedProject(sampleProjects[0]);
      } catch (err) {
        console.error('Proje yükleme hatası:', err);
        const sampleProjects = getSampleProjects();
        setProjects(sampleProjects);
        setSelectedProject(sampleProjects[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filtreleme
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // URL güvenliği
  const isValidUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch (_) {
      return false;
    }
  };

  // Projects Filter Panel Component
  function ProjectsFilterPanel() {
    return (
      <div className="mb-8 bg-[#2d2d30] rounded-lg border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between bg-[#383838] px-4 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm">projects-filter.js</span>
          </div>
          <div className="text-gray-400 text-xs">●</div>
        </div>

        <div className="p-4 font-mono text-sm text-[#d4d4d4]">
          <div className="space-y-2">
            <div className="text-[#6a9955]">{/* Project filtering system */}</div>
            <div>
              <span className="text-[#569cd6]">const</span> 
              <span className="text-[#9cdcfe]"> activeFilter</span> 
              <span className="text-[#d4d4d4]"> = </span>
              <span className="text-[#ce9178]">&apos;{activeCategory}&apos;</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 pt-2 border-t border-gray-600">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeCategory === category.id
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
              {/* Active filter: {activeCategory} • {filteredProjects.length} projects found */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Projects Terminal Component
  function ProjectsTerminal() {
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
            <span className="text-gray-300 text-sm font-medium">projects.json</span>
          </div>
          <div className="text-gray-400 text-xs">●</div>
        </div>

        {/* Code Editor Content */}
        <div className="p-0 font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4]">
          {/* Line numbers and code */}
          <div className="flex">
            <div className="w-12 bg-[#1e1e1e] text-[#858585] text-xs select-none border-r border-gray-700 py-4">
              {Array.from({length: Math.max(20, filteredProjects.length * 8 + 10)}, (_, i) => (
                <div key={i} className="h-5 flex items-center justify-end pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="flex-1 p-4">
              <div className="space-y-1">
                <div className="text-[#d4d4d4]">{'{'}</div>
                
                {/* Projects Section */}
                <div className="ml-4">
                  <div className="text-[#9cdcfe]">&quot;projects&quot;</div>
                  <div className="text-[#d4d4d4]">: {'{'}</div>
                  
                  {/* Category Header */}
                  <div className="ml-4 space-y-0.5">
                    <div>
                      <span className="text-[#9cdcfe]">&quot;category&quot;</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#ce9178]">&quot;{categories.find(c => c.id === activeCategory)?.label || 'All'}&quot;</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                    <div>
                      <span className="text-[#9cdcfe]">&quot;count&quot;</span>
                      <span className="text-[#d4d4d4]">: </span>
                      <span className="text-[#b5cea8]">{filteredProjects.length}</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                    <div>
                      <span className="text-[#9cdcfe]">&quot;portfolio&quot;</span>
                      <span className="text-[#d4d4d4]">: [</span>
                    </div>
                  </div>
                  
                  {/* Projects List in JSON format */}
                  <div className="ml-8 space-y-4">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                        <div 
                          className={`text-[#d4d4d4] hover:bg-[#2d2d30] rounded px-2 py-2 transition-colors cursor-pointer border-l-2 ${
                            selectedProject?.id === project.id ? 'border-[#0e639c] bg-[#2d2d30]' : 'border-transparent'
                          }`}
                          onClick={() => setSelectedProject(project)}
                        >
                          <span className="text-[#d4d4d4]">{'{'}</span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;id&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;{project.id}&quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;title&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;{project.title}&quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;status&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#ce9178]">&quot;{project.status}&quot;</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;year&quot;</span>
                            <span className="text-[#d4d4d4]">: </span>
                            <span className="text-[#b5cea8]">{project.year}</span>
                            <span className="text-[#d4d4d4]">,</span>
                          </span>
                          <br />
                          <span className="ml-4">
                            <span className="text-[#9cdcfe]">&quot;techStack&quot;</span>
                            <span className="text-[#d4d4d4]">: [</span>
                            {project.techStack && project.techStack.map((tech, techIndex) => (
                              <span key={techIndex}>
                                <span className="text-[#ce9178]">&quot;{tech}&quot;</span>
                                {techIndex < project.techStack.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                              </span>
                            ))}
                            <span className="text-[#d4d4d4]">]</span>
                          </span>
                          <br />
                          <span className="text-[#d4d4d4]">{'}'}{index < filteredProjects.length - 1 ? ',' : ''}</span>
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

  // Project Details Panel
  function ProjectDetailsPanel() {
    if (!selectedProject) return null;

    return (
      <div className="mt-8 bg-[#2d2d30] rounded-lg border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between bg-[#383838] px-4 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm">project-details.md</span>
          </div>
          <div className="text-gray-400 text-xs">●</div>
        </div>

        <div className="p-6 text-white">
          {/* Project Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-6">
            {selectedProject.images && selectedProject.images.length > 0 ? (
              <img 
                src={selectedProject.images[0].src} 
                alt={selectedProject.images[0].alt || selectedProject.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-500">
                <i className="fa fa-code text-white text-4xl"></i>
              </div>
            )}
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                selectedProject.status === 'completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  selectedProject.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></div>
                {selectedProject.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 text-lg">{selectedProject.description}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack && selectedProject.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#3c3c3c] text-gray-300 border border-gray-600"
                  >
                    <i className={`${getTechIcon(tech)} mr-2 text-cyan-400`}></i>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {selectedProject.siteLink && (
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.siteLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!isValidUrl(selectedProject.siteLink)) {
                      e.preventDefault();
                      alert('Invalid URL');
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 group bg-[#0e639c] text-white hover:bg-[#1177bb]"
                >
                  <i className="fas fa-external-link-alt group-hover:translate-x-1 transition-transform"></i>
                  <span>View Live Site</span>
                </motion.a>
              )}
              
              {selectedProject.githubLink && (
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!isValidUrl(selectedProject.githubLink)) {
                      e.preventDefault();
                      alert('Invalid URL');
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium transition-all duration-300 group text-gray-300 hover:border-gray-500 hover:text-white"
                >
                  <i className="fab fa-github group-hover:rotate-12 transition-transform"></i>
                  <span>View Code</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="projects" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
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
            <span className="text-white">{t('projects.title') || 'My'}</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('projects.description') || 'Explore my latest work and creative projects'}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        )}

        {!loading && (
          <>
            {/* Projects Filter Panel */}
            <ProjectsFilterPanel />

            {/* Projects Terminal */}
            <ProjectsTerminal />

            {/* Project Details Panel */}
            <ProjectDetailsPanel />
          </>
        )}
      </div>
    </div>
  );
}