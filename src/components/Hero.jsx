import { useTranslation } from 'react-i18next';
import Header from './Header';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated background with geometric patterns */}
      <div className="absolute inset-0 bg-[#121139] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A1259]/80 via-[#121139] to-[#0A0A29] opacity-90"></div>
        
        {/* Futuristic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 right-0 top-0 bottom-0" 
               style={{
                 backgroundImage: 'linear-gradient(to right, #CBF281 1px, transparent 1px), linear-gradient(to bottom, #CBF281 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
        
        {/* Animated code-like particles */}
        <div className="particles absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-md bg-white/5 flex items-center justify-center overflow-hidden"
              style={{
                width: Math.random() * 100 + 20,
                height: Math.random() * 60 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
                rotate: Math.random() * 10 - 5
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              <div className="text-[#CBF281]/20 text-[8px] font-mono">
                {"{code}"}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Glowing accent shapes */}
        <motion.div
          className="absolute top-[20%] -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4832D3]/30 to-[#160f44]/0 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-20 left-[30%] w-20 h-80 rotate-45 bg-[#CBF281]/5 blur-3xl rounded-full"
          animate={{
            height: ["300px", "500px", "300px"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#121139] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute -bottom-40 left-0 w-[80%] h-[500px] rounded-full bg-[#CBF281]/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <Header />
      
      {/* Content container */}
      <div className="container mx-auto px-6 pt-32 md:pt-40 pb-16 relative z-10">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 lg:gap-12">
    
    {/* Left content */}
    <motion.div 
      className="w-full md:w-1/2 text-center  md:text-left"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-left">
          <motion.div
            className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {t('hero.title')}
          </motion.div>
        </h1>
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        {t('hero.description')}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        <motion.a 
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-3 bg-[#CBF281] text-[#160f44] font-semibold rounded-full hover:bg-white transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#CBF281]/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='no-underline'>{t('hero.viewProjects', 'Projelerimi Görüntüle')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
        
        <motion.div 
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <motion.a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
            href="https://github.com/mertbatut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-github text-xl"></i>
          </motion.a>
          <motion.a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300 backdrop-blur-sm"
            href="https://www.linkedin.com/in/mert-batut-066b96248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-linkedin-in text-xl"></i>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Experience tags */}
      <motion.div 
        className="flex flex-wrap gap-3 mt-12 justify-center md:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <motion.div 
          className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/80 border border-white/10"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <span className="text-[#CBF281] font-semibold">3+</span> Yıl Deneyim
        </motion.div>
        <motion.div 
          className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/80 border border-white/10"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <span className="text-[#CBF281] font-semibold">20+</span> Proje
        </motion.div>
        <motion.div 
          className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/80 border border-white/10"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <span className="text-[#CBF281] font-semibold">10+</span> Teknoloji
        </motion.div>
      </motion.div>
    </motion.div>
    
    {/* Right content - Profile image */}
    <motion.div 
      className="w-full md:w-5/12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="relative mx-auto max-w-md">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-[#CBF281]/40 rounded-tl-lg"
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        <motion.div 
          className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-[#CBF281]/40 rounded-br-lg"
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        
        {/* Background shapes */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#CBF281]/20 to-[#4832D3]/20 rounded-2xl transform rotate-3 scale-105"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
        
        {/* Main profile image */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#CBF281]/70 to-[#4832D3]/70 p-1 rounded-2xl overflow-hidden shadow-xl shadow-[#4832D3]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img
            className="w-full h-auto rounded-xl object-cover"
            src="/images/MertBatut.JPEG"
            alt="Mert Batut"
          />
        </motion.div>
        
        {/* Skill cards floating around the image - Updated for Frontend and Backend */}
        <motion.div 
          className="hidden md:block absolute -bottom-6 -left-16 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#CBF281] w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fas fa-code text-[#160f44]"></i>
            </div>
            <div>
              <p className="text-white font-medium">Frontend</p>
              <p className="text-gray-900 text-sm font-bold">Geliştirici</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute -top-4 -right-10 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#CBF281] w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fas fa-server text-[#160f44]"></i>
            </div>
            <div>
              <p className="text-white font-medium">Backend</p>
              <p className="text-gray-900 text-sm font-bold">Geliştirici</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute bottom-10 -right-14 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#CBF281] w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fas fa-laptop-code text-[#160f44]"></i>
            </div>
            <div>
              <p className="text-white font-medium">Web</p>
              <p className="text-gray-300 text-sm">Geliştirme</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>

        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white/70 hover:text-white transition duration-300"
          >
            
          </a>
        </motion.div>
      </div>
    </div>
  );
}