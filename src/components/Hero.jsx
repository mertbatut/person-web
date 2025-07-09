import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Header from './Header';

export default function Hero() {
  const { t } = useTranslation();

  // Animation data
  const codeSnippets = [
    'const developer = &quot;Mert Batut&quot;;',
    'function solve(problem) {',
    'return innovation;',
    'console.log(&quot;Creating magic...&quot;);',
    'export default Excellence;',
    'async function build() {',
    'npm run success',
    '&#47;&#47; Turning ideas into reality',
    'git commit -m &quot;feature: amazing&quot;',
    'const future = await create();'
  ];

  const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'];
  const stats = [
    { value: '3+', label: t('hero.experience') },
    { value: '20+', label: t('hero.projects') },
    { value: '10+', label: t('hero.technologies') }
  ];

  const floatingElements = [
    { text: '✓ Tests passing', color: '#CBF281', position: { top: -6, right: -6 }, delay: 2.5 },
    { text: 'npm run build ✓', color: 'green', position: { bottom: -4, left: -6 }, delay: 3 },
    { text: 'git push ↗', color: 'blue', position: { top: '50%', left: -8 }, delay: 3.5 }
  ];

  // Helper functions
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Components
  const StatusBadge = () => (
    <motion.div
      className="inline-flex items-center space-x-2 bg-[#CBF281]/10 border border-[#CBF281]/20 text-[#CBF281] px-4 py-2 rounded-full text-sm font-medium mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
    >
      <div className="w-2 h-2 bg-[#CBF281] rounded-full animate-pulse" />
      <span>Available for new projects</span>
    </motion.div>
  );

  const MainHeading = () => (
    <motion.h1 
      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      <div className="text-white mb-2">{t('hero.title')}</div>
      <div className="bg-gradient-to-r from-[#CBF281] to-[#CBF281]/70 bg-clip-text text-transparent">
        Developer
      </div>
    </motion.h1>
  );

  const CTAButtons = () => (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.7 }}
    >
      <motion.a 
        href="#projects"
        onClick={(e) => handleSmoothScroll(e, 'projects')}
        className="group relative px-8 py-4 bg-[#CBF281] text-[#160f44] font-semibold rounded-full overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#CBF281]/25"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 no-underline">{t('hero.viewProjects')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </motion.a>
      
      <motion.a
        href="#contact"
        onClick={(e) => handleSmoothScroll(e, 'contact')}
        className="px-8 py-4 border-2 border-gray-500 text-white font-semibold rounded-full hover:border-[#CBF281] hover:text-[#CBF281] transition-all duration-300 flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="no-underline">Let&apos;s Connect</span>
      </motion.a>
    </motion.div>
  );

  const SocialLinks = () => (
    <motion.div 
      className="flex gap-4 justify-center lg:justify-start"
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
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 backdrop-blur-sm border border-white/10 group"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fa-brands ${social.icon} text-xl group-hover:text-[#CBF281] transition-colors`} />
        </motion.a>
      ))}
    </motion.div>
  );

  const CodeEditor = () => (
    <div className="relative bg-[#1e1e2e]/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
      {/* Editor Header */}
      <div className="flex items-center justify-between bg-[#2a2a3e]/80 px-4 py-3 border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
              <div key={i} className={`w-3 h-3 ${color} rounded-full`} />
            ))}
          </div>
          <div className="text-gray-400 text-sm ml-4">portfolio.js</div>
        </div>
        <div className="text-gray-500 text-xs">◉ TypeScript</div>
      </div>

      {/* Code Content */}
      <div className="p-6 space-y-3 text-sm font-mono">
        <motion.div
          className="text-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-blue-400">const</span> <span className="text-white">developer</span> = {'{'}
        </motion.div>
        
        <motion.div
          className="ml-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <div><span className="text-red-400">name:</span> <span className="text-green-400">&quot;Mert Batut&quot;</span>,</div>
          <div><span className="text-red-400">role:</span> <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,</div>
          <div><span className="text-red-400">experience:</span> <span className="text-yellow-400">&quot;3+ years&quot;</span>,</div>
          <div><span className="text-red-400">passion:</span> <span className="text-green-400">&quot;Problem Solving&quot;</span>,</div>
        </motion.div>

        <motion.div
          className="ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <span className="text-red-400">skills:</span> [
        </motion.div>

        <motion.div
          className="ml-8 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          {skills.map((skill, i) => (
            <div key={skill}>
              <span className="text-green-400">&quot;{skill}&quot;</span>
              {i < skills.length - 1 && <span className="text-white">,</span>}
            </div>
          ))}
        </motion.div>

        <motion.div className="ml-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>],</motion.div>
        <motion.div className="text-purple-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>{'};'}</motion.div>

        <motion.div
          className="flex items-center space-x-2 text-[#CBF281]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4 }}
        >
          <span>▶</span>
          <motion.span
            className="inline-block w-2 h-4 bg-[#CBF281]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );

  const FloatingElements = () => (
    <>
      {floatingElements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute bg-${element.color === '#CBF281' ? '[#CBF281]' : element.color}-500/10 backdrop-blur-sm border border-${element.color === '#CBF281' ? '[#CBF281]' : element.color}-500/20 rounded-lg p-3`}
          style={element.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: element.delay }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={`text-${element.color === '#CBF281' ? '[#CBF281]' : element.color}-400 text-sm font-mono`}>
            {element.text}
          </div>
        </motion.div>
      ))}
    </>
  );

  const ExperienceStats = () => (
    <motion.div 
      className="flex flex-wrap gap-6 justify-center lg:justify-start mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.7 }}
    >
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl text-center border border-white/10 group"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', y: -5 }}
        >
          <div className="text-2xl font-bold text-[#CBF281] mb-1">{stat.value}</div>
          <div className="text-sm text-white/80">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );

  const ScrollIndicator = () => (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
    >
      <motion.a 
        href="#projects" 
        onClick={(e) => handleSmoothScroll(e, 'projects')}
        className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2">
          <motion.div
            className="w-1 h-3 bg-current rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <span className="text-xs">Scroll</span>
      </motion.a>
    </motion.div>
  );

  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121139] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A1259]/90 via-[#121139] to-[#0A0A29] opacity-95" />
        
        {/* Code Rain */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#CBF281]/20 font-mono text-sm whitespace-nowrap"
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
          className="absolute top-[15%] -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#CBF281]/20 to-[#4832D3]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 left-[20%] w-[400px] h-[400px] rounded-full bg-[#CBF281]/10 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <Header />
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 md:pt-40 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <StatusBadge />
            <MainHeading />
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <CTAButtons />
            <SocialLinks />
          </div>
          
          {/* Right Content */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              <CodeEditor />
              <FloatingElements />
            </div>
          </motion.div>
        </div>
        
        <ExperienceStats />
        <ScrollIndicator />
      </div>
    </div>
  );
}