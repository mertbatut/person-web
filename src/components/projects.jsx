import { useEffect, useState, useRef } from 'react';

export default function Projects() {
  // State tanımlamaları
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataFetched, setDataFetched] = useState(false); // Tek seferlik yükleme için kontrol
  
  // Ref tanımlaması
  const sectionRef = useRef(null);
  
  // Kategoriler
  const categories = [
    { id: 'all', label: 'Tümü', icon: 'fas fa-border-all' },
    { id: 'web', label: 'Web', icon: 'fas fa-laptop-code' },
    { id: 'mobile', label: 'Mobil', icon: 'fas fa-mobile-alt' },
    { id: 'design', label: 'Tasarım', icon: 'fas fa-paint-brush' }
  ];

  // Görünürlük için Intersection Observer
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

  // Veri çekme - Tek Sefer için dataFetched kontrolü
  useEffect(() => {
    // Sadece bir kez çalıştır
    if (dataFetched) return;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Abortlanabilir istek için controller
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 saniye timeout
        
        const response = await fetch('/local/tr/Card.json', {
          signal: controller.signal,
          // Önbelleği devre dışı bırakmak için headerlar
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
          setLoading(false);
          setError(false);
        } else {
          throw new Error('Card.json alınamadı');
        }
      } catch (err) {
        console.error('Projeler yüklenirken hata:', err);
        setError(true);
        setLoading(false);
        
        // Hata durumunda varsayılan projeler
        setProjects([
          {
            "title": "Örnek Proje",
            "description": "Veri yüklenemediği için gösterilen örnek proje.",
            "images": [{ "src": "/images/default.png", "alt": "Default" }],
            "techStack": ["React", "TailwindCSS"],
            "category": "web",
            "tags": ["web"]
          }
        ]);
      } finally {
        // İstek tamamlandı olarak işaretle (başarılı veya başarısız)
        setDataFetched(true);
      }
    };

    fetchData();
  }, [dataFetched]); // dataFetched değişkenine bağlı olarak çalıştır

  // Filtrelenen projeler
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === activeCategory || 
        project.tags?.includes(activeCategory)
      );

  return (
    <div id="projects" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa]">
      {/* Daha açık renk tonlarında geometrik arka plan */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-[#f0f9ff] to-[#e6e6ff] rounded-tl-[40%] opacity-30"></div>
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-[#4832D3]/10 to-[#CBF281]/10 rounded-br-[40%] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Başlık alanı */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block relative mx-auto">
              <div className="absolute top-0 -left-4 sm:-left-6 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-[#4832D3]"></div>
              <div className="absolute top-0 -right-4 sm:-right-6 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-[#4832D3]"></div>
              <div className="absolute -bottom-2 -left-4 sm:-left-6 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-[#4832D3]"></div>
              <div className="absolute -bottom-2 -right-4 sm:-right-6 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-[#4832D3]"></div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#333333] bg-gradient-to-r from-[#4832D3] to-[#160f44] text-transparent bg-clip-text px-2 sm:px-4">
                Projelerim
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
              Geliştirdiğim projeler ve yaptığım çalışmalar.
            </p>
          </div>
        </div>

        {/* Kategori Filtreleri - Skills bileşenindeki gibi modern stil ama renkleri Header/Hero ile uyumlu */}
        <div className={`relative mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4832D3]/10 to-[#CBF281]/10 blur-xl -z-10 rounded-3xl transform -skew-y-1"></div>
          <div className="flex justify-center flex-wrap gap-2 md:gap-3 bg-white p-3 md:p-4 rounded-xl border border-gray-200 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#4832D3] to-[#160f44] text-white shadow-md'
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

        {/* Yükleniyor durumu */}
        {loading && (
          <div className="flex justify-center items-center py-16 md:py-24">
            <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-[#4832D3]/30 border-t-[#4832D3] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Hata durumu */}
        {error && !loading && (
          <div className="text-center py-12 md:py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-red-50 flex items-center justify-center">
              <i className="fas fa-exclamation-triangle text-red-400 text-xl md:text-2xl"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
              Projeler Yüklenemedi
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Projeleri yüklerken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.
            </p>
          </div>
        )}

        {/* Projeler Grid - Daha modern ve uyumlu hale getirildi */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 delay-${(index % 4) * 100} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                {/* Hover durumunda yukarı kalkma efekti */}
                <div className="relative group hover:-translate-y-2 transition-transform duration-300">
                  {/* Hover durumunda parlayan kenar */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4832D3] to-[#CBF281] rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300 -z-10"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Proje görseli */}
                    <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                      {project.images && project.images.length > 0 ? (
                        <img 
                          src={project.images[0].src} 
                          alt={project.images[0].alt || project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <i className="fas fa-image text-gray-300 text-4xl"></i>
                        </div>
                      )}
                      
                      {/* Görsel üzerinde kademeli şeffaf overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 w-full p-4 text-white">
                          <p className="text-sm font-medium">
                            {project.techStack?.slice(0, 3).join(' • ')}
                            {project.techStack?.length > 3 && ' • ...'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Proje içeriği */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-[#4832D3]">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Teknoloji stack'i */}
                      {project.techStack && (
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <i className="fas fa-code text-[#4832D3] mr-2"></i>
                            Kullanılan Teknolojiler
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.techStack.map((tech, idx) => (
                              <span 
                                key={idx} 
                                className="bg-gray-100 text-gray-700 text-xs rounded-full px-2 sm:px-3 py-1 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Proje linkleri - Mobil için daha küçük butonlar */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                        {project.siteLink && (
                          <a 
                            href={project.siteLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#4832D3] to-[#160f44] text-white px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:shadow-md transition-all duration-300"
                          >
                            <i className="fas fa-external-link-alt mr-1.5 sm:mr-2"></i>
                            <span className="whitespace-nowrap">Siteyi Ziyaret Et</span>
                          </a>
                        )}
                        
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-gray-300 text-gray-700 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-gray-50 transition-all duration-300"
                          >
                            <i className="fab fa-github mr-1.5 sm:mr-2"></i>
                            <span className="whitespace-nowrap">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Boş durum - Filtreli projelerin olmaması durumu */}
        {!loading && !error && isVisible && filteredProjects.length === 0 && (
          <div className="text-center py-12 md:py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <i className="fas fa-search text-gray-400 text-xl md:text-2xl"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
              Proje Bulunamadı
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Bu kategoride henüz bir proje bulunmuyor.
            </p>
          </div>
        )}
        
        {/* İstatistik kartları - Skills bileşenindekine benzer ancak renk uyumu sağlandı */}
        {!loading && !error && projects.length > 0 && (
          <div className={`mt-12 md:mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4832D3]/10 to-[#CBF281]/10 blur-xl -z-10 rounded-3xl"></div>
              
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100 hover:border-[#4832D3]/30 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#4832D3]/10 to-[#CBF281]/10 flex items-center justify-center mb-2 md:mb-3">
                      <i className="fas fa-code text-[#4832D3] text-lg md:text-xl"></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-0.5 md:mb-1">20+</h4>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Tamamlanmış Proje</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100 hover:border-[#4832D3]/30 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#4832D3]/10 to-[#CBF281]/10 flex items-center justify-center mb-2 md:mb-3">
                      <i className="fas fa-laptop-code text-[#4832D3] text-lg md:text-xl"></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-0.5 md:mb-1">10+</h4>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Teknoloji</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100 hover:border-[#4832D3]/30 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#4832D3]/10 to-[#CBF281]/10 flex items-center justify-center mb-2 md:mb-3">
                      <i className="fas fa-certificate text-[#4832D3] text-lg md:text-xl"></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-0.5 md:mb-1">5+</h4>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Sertifika</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100 hover:border-[#4832D3]/30 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#4832D3]/10 to-[#CBF281]/10 flex items-center justify-center mb-2 md:mb-3">
                      <i className="fas fa-calendar-alt text-[#4832D3] text-lg md:text-xl"></i>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-0.5 md:mb-1">3+</h4>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Yıl Deneyim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}