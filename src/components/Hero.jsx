import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from './Header';

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  
  const isDark = theme === 'dark';

  const codeSnippets = [
    'const developer = "Mert Batut";',
    'function buildWebApps() {',
    'return innovation;',
    'console.log("Crafting digital solutions...");',
    'export default FullStackDev;',
    'async function develop() {',
    'npm run build',
    '// Building the future of web',
    'git commit -m "feat: amazing feature"',
    'const success = await deploy();'
  ];

  const skills = ['React', 'Angular', 'TypeScript', 'C#', 'JavaScript', 'Redux', 'MongoDB', 'SQL'];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const StatusBadge = () => (
    <motion.div
      key={`status-${theme}`}
      className={`inline-flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm font-semibold mb-6 transition-all duration-300 ${
        isDark 
          ? 'bg-emerald-500/10 border border-emerald-400/20 text-emerald-300' 
          : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
    >
      <div className="relative">
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
      </div>
      <span>Available for remote opportunities</span>
    </motion.div>
  );

  const MainHeading = () => (
    <motion.h1 
      key={`heading-${theme}`} // Key for theme change animation
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-left lg:text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      <div className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="block">{t('hero.title') || 'Frontend'}</span>
      </div>
    </motion.h1>
  );
  const CTAButtons = () => (
    <motion.div 
      key={`buttons-${theme}`} // Key for theme change animation
      className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.7 }}
    >

      {/* Primary Button - View Projects */}
      <motion.a 
        href="#projects"
        onClick={(e) => handleSmoothScroll(e, 'projects')}
        className={`group relative overflow-hidden px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-lg ${
          isDark 
            ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{t('hero.viewProjects') || 'View Projects'}</span>
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.div>
      </motion.a>
      
      {/* Secondary Button - Contact */}
      <motion.a
        href="#contact"
        onClick={(e) => handleSmoothScroll(e, 'contact')}
        className={`group px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 rounded-lg ${
          isDark 
            ? 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10' 
            : 'border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Contact Me</span>
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.div>
      </motion.a>
    </motion.div>
  );
  const SocialLinks = () => (
    <motion.div 
      key={`social-${theme}`} // Key for theme change animation
      className="flex gap-3 justify-center lg:justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.7 }}
    >
      {[
        { href: 'https://github.com/mertbatut', icon: 'fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/mert-batut-066b96248/', icon: 'fa-linkedin-in', label: 'LinkedIn' }
      ].map((social) => (
        <motion.a
          key={social.label}
          className={`group flex items-center justify-center w-12 h-12 border-2 rounded-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-gray-700' 
              : 'bg-white border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50'
          }`}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fa-brands ${social.icon} text-lg transition-transform group-hover:scale-110`} />
        </motion.a>
      ))}
    </motion.div>
  );

  const CodeEditor = () => (
    <motion.div 
      key={`editor-${theme}`} // Key for theme change animation
      className={`relative border overflow-hidden shadow-xl rounded-lg transition-all duration-300 ${
        isDark 
          ? 'bg-gray-900 border-gray-700' 
          : 'bg-white border-gray-300'
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.3 }}
    >
      {/* Editor Header */}
      <div className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-gray-100 border-gray-200'
      }`}>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex space-x-1.5 sm:space-x-2">
            {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
              <div key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${color} rounded-full`} />
            ))}
          </div>
          <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            portfolio.js
          </div>
        </div>
        <div className={`text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded ${
          isDark 
            ? 'bg-yellow-900 text-yellow-300' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          JavaScript
        </div>
      </div>

      {/* Code Content */}
      <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2 text-xs font-mono">
        <motion.div
          className={isDark ? 'text-purple-400' : 'text-purple-600'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>const</span>{' '}
          <span className={isDark ? 'text-yellow-300' : 'text-yellow-600'}>developer</span>{' '}
          <span className={isDark ? 'text-white' : 'text-gray-800'}>=</span>{' '}
          <span className={isDark ? 'text-white' : 'text-gray-800'}>{'{'}</span>
        </motion.div>
        
        <motion.div
          className="ml-2.5 sm:ml-3 space-y-0.5 sm:space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>name</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;Mert Batut&quot;</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>role</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;Frontend Developer&quot;</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>experience</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;2+ years&quot;</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>location</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;Bursa, Turkey&quot;</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>currentTech</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;React + Javascript&quot;</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
          <div>
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>openToRemote</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
            <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>true</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>
          </div>
        </motion.div>

        <motion.div
          className="ml-2.5 sm:ml-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>skills</span>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>: [</span>
        </motion.div>

        <motion.div
          className="ml-5 sm:ml-6 space-y-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          {skills.slice(0, 5).map((skill, i) => (
            <div key={skill}>
              <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;{skill}&quot;</span>
              {i < 4 && <span className={isDark ? 'text-white' : 'text-gray-800'}>,</span>}
            </div>
          ))}
        </motion.div>

        <motion.div className="ml-2.5 sm:ml-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>],</span>
        </motion.div>

        <motion.div
          className="ml-2.5 sm:ml-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>buildWebApps</span>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>: </span>
          <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>function</span>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>() {'{'}</span>
        </motion.div>

        <motion.div
          className="ml-5 sm:ml-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>return</span>{' '}
          <span className={isDark ? 'text-green-400' : 'text-green-600'}>&quot;Clean code&quot;</span>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>;</span>
        </motion.div>

        <motion.div className="ml-2.5 sm:ml-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>{'}'}</span>
        </motion.div>
        
        <motion.div className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }}>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>{'};'}</span>
        </motion.div>

        <motion.div
          className={`mt-2.5 sm:mt-3 pt-2 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>▶</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Ready to build!</span>
            <motion.span
              className={`inline-block w-1 sm:w-1.5 h-2.5 sm:h-3 ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div id="home" className="relative min-h-screen lg:h-screen lg:overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 z-0 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        {isDark && (
          <>
            {/* Code Rain - Only in dark mode */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                  key={`code-rain-${i}-${theme}`} // Key for theme change
                  className="absolute text-cyan-400/20 font-mono text-sm whitespace-nowrap"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${-10 + Math.random() * 20}%`,
                  }}
                  animate={{
                    y: ["0vh", "110vh"],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 6,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear",
                  }}
                >
                  {codeSnippets[i % 10]}
                </motion.div>
              ))}
            </div>
            
            {/* Gradient Accents */}
            <motion.div
              key={`gradient-1-${theme}`}
              className="absolute top-[15%] -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              key={`gradient-2-${theme}`}
              className="absolute -bottom-32 left-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
          </>
        )}
      </div>

      <Header />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 min-h-screen lg:h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-full gap-8 lg:gap-8 pt-24 pb-12 lg:py-20">
          
          {/* Left Content */}
          <div className="w-full text-left lg:w-7/12 lg:text-left  order-2 lg:order-1">
            <StatusBadge />
            <MainHeading />
            
            <motion.div 
              key={`description-${theme}`}
              className={`text-base sm:text-lg leading-relaxed text-left lg:text-left max-w-2xl mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              {t('hero.description') || 'Frontend Developer with 2+ years of experience. Transitioned from real estate to tech in 2022. Currently building web applications with Angular, TypeScript, and C#. Passionate about clean code and meaningful projects.'}
            </motion.div>
            
            <CTAButtons />
            <SocialLinks />
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <CodeEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}