import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const isDark = theme === 'dark';
  const currentLang = i18n.language || 'tr';

  const navItems = [
    { id: "home", label: t("menu.home") || "Ana Sayfa" },
    { id: "projects", label: t("menu.projects") || "Projeler" },
    { id: "skills", label: t("menu.skills") || "Yetenekler" },
    { id: "contact", label: t("menu.contact") || "İletişim" }
  ];

  // Event handlers
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "projects", "skills", "contact"];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(targetId);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Clean Theme Toggle
  const ThemeToggle = () => (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-md border
        ${isDark 
          ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white' 
          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Toggle theme"
    >
      {isDark ? 'Light' : 'Dark'}
    </motion.button>
  );

  // Clean Hamburger Menu
  const HamburgerMenu = () => (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-5 h-0.5 absolute transition-all duration-300 ${
            isDark ? 'bg-white' : 'bg-gray-900'
          }`}
          animate={{
            rotate: menuOpen ? (index === 0 ? 45 : index === 2 ? -45 : 0) : 0,
            y: menuOpen ? 0 : (index === 0 ? -5 : index === 2 ? 5 : 0),
            opacity: menuOpen && index === 1 ? 0 : 1,
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  // Clean Language Selector
  const LanguageSelector = ({ mobile = false }) => (
    <div className={`flex items-center ${
      mobile 
        ? 'space-x-3' 
        : 'space-x-1'
    }`}>
      {['tr', 'en'].map((lang) => (
        <motion.button
          key={lang}
          onClick={() => {
            changeLanguage(lang);
            if (mobile) setMenuOpen(false);
          }}
          className={`
            ${mobile ? 'px-6 py-3 text-lg' : 'px-3 py-1.5 text-sm'} 
            font-medium transition-all duration-200 rounded-md border
            ${currentLang === lang
              ? `${isDark 
                  ? 'bg-white text-gray-900 border-white' 
                  : 'bg-gray-900 text-white border-gray-900'
                }`
              : `${isDark 
                  ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }`
            }
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? `py-3 ${
                isDark 
                  ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
                  : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
              }` 
            : "py-4 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Clean Logo */}
            <motion.a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "home")} 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2">
                {/* Simple Logo Mark */}
                <div className={`
                  w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm border
                  ${isDark 
                    ? 'bg-white text-gray-900 border-white' 
                    : 'bg-gray-900 text-white border-gray-900'
                  }
                `}>
                  MB
                </div>
                
                {/* Logo Text */}
                <div className="hidden xs:block">
                  <span className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Mert Batut
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-lg mx-8">
              <motion.nav 
                className="flex items-center space-x-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md relative
                      ${activeSection === item.id
                        ? `${isDark 
                            ? 'text-white bg-gray-800 border border-gray-700' 
                            : 'text-gray-900 bg-gray-100 border border-gray-200'
                          }`
                        : `${isDark 
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800 border border-transparent' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent'
                          }`
                      }
                    `}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </div>

            {/* Desktop Controls */}
            <motion.div 
              className="hidden lg:flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LanguageSelector />
              <ThemeToggle />
            </motion.div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center space-x-3">
              <div className="hidden xs:block">
                <ThemeToggle />
              </div>
              
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-md transition-all duration-200 border ${
                  isDark 
                    ? 'hover:bg-gray-800 border-gray-700' 
                    : 'hover:bg-gray-50 border-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <HamburgerMenu />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMenuOpen(false)}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-white'}`} />
        </motion.div>
      )}

      {/* Mobile Menu */}
      <motion.div
        className={`
          fixed top-0 right-0 bottom-0 z-50 lg:hidden w-80 max-w-[85vw]
          ${isDark ? 'bg-gray-900 border-l border-gray-800' : 'bg-white border-l border-gray-200'}
        `}
        initial={{ x: "100%" }}
        animate={{
          x: menuOpen ? 0 : "100%"
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <div className={`
                w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm border
                ${isDark 
                  ? 'bg-white text-gray-900 border-white' 
                  : 'bg-gray-900 text-white border-gray-900'
                }
              `}>
                MB
              </div>
              <span className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Mert Batut
              </span>
            </div>
            
            <motion.button
              onClick={() => setMenuOpen(false)}
              className={`p-2 rounded-md transition-all duration-200 border ${
                isDark 
                  ? 'hover:bg-gray-800 border-gray-700 text-gray-300' 
                  : 'hover:bg-gray-50 border-gray-300 text-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 relative">
                <div className={`absolute w-5 h-0.5 transform rotate-45 ${isDark ? 'bg-white' : 'bg-gray-900'}`} style={{top: '50%', left: '0'}} />
                <div className={`absolute w-5 h-0.5 transform -rotate-45 ${isDark ? 'bg-white' : 'bg-gray-900'}`} style={{top: '50%', left: '0'}} />
              </div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 px-6 py-8">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    px-4 py-3 text-lg font-medium transition-all duration-200 rounded-md border
                    ${activeSection === item.id 
                      ? `${isDark 
                          ? 'text-white bg-gray-800 border-gray-700' 
                          : 'text-gray-900 bg-gray-100 border-gray-200'
                        }`
                      : `${isDark 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800 border-transparent' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent'
                        }`
                    }
                  `}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: menuOpen ? 1 : 0,
                    x: menuOpen ? 0 : 20
                  }}
                  transition={{ 
                    delay: menuOpen ? index * 0.1 : 0,
                    duration: 0.3
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
          
          {/* Mobile Footer Controls */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex flex-col space-y-3">
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Dil / Language
              </span>
              <LanguageSelector mobile />
            </div>
            
            <div className="flex flex-col space-y-3">
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tema / Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}