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
    { id: "home", label: t("menu.home") },
    { id: "projects", label: t("menu.projects") },
    { id: "skills", label: t("menu.skills") },
    { id: "contact", label: t("menu.contact") }
  ];

  // Event handlers
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0
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
    if (e.target.dataset.scrolling === "true") return;
    
    e.target.dataset.scrolling = "true";
    setMenuOpen(false);
    setActiveSection(targetId);
    
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      e.target.dataset.scrolling = "false";
    }, 1000);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Theme toggle icon
  const ThemeIcon = () => (
    <motion.div animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.5 }}>
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      )}
    </motion.div>
  );

  // Hamburger menu lines
  const HamburgerMenu = () => (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-6 h-0.5 bg-white absolute"
          animate={{
            rotate: menuOpen ? (index === 0 ? 45 : index === 2 ? -45 : 0) : 0,
            y: menuOpen ? 0 : (index === 0 ? -6 : index === 2 ? 6 : 0),
            opacity: menuOpen && index === 1 ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );

  // Language selector
  const LanguageSelector = ({ mobile = false }) => (
    <div className={`flex items-center ${mobile ? 'space-x-4' : 'bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10'}`}>
      {['tr', 'en'].map((lang) => (
        <motion.button
          key={lang}
          onClick={() => {
            changeLanguage(lang);
            if (mobile) setMenuOpen(false);
          }}
          className={`${mobile ? 'px-6 py-3 text-lg' : 'px-3 py-1.5 text-sm'} font-medium rounded-full transition-all duration-300 ${
            currentLang === lang
              ? "bg-[#CBF281] text-[#160f44] shadow-lg"
              : `text-white hover:bg-white/10 ${mobile ? 'border-2 border-white/20' : ''}`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-[#160f44]/90 backdrop-blur-md shadow-lg border-b border-[#CBF281]/10" 
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "home")} 
          className="font-bold text-2xl text-white group relative"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[#CBF281] relative">
            MB
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CBF281]"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <motion.nav 
            className="mr-8 flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? "text-[#121139] bg-[#CBF281]"
                    : "text-white hover:text-[#CBF281] hover:bg-white/10"
                }`}
                onClick={(e) => handleLinkClick(e, item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Desktop Controls */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThemeIcon />
            </motion.button>
            <LanguageSelector />
          </motion.div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeIcon />
          </motion.button>
          
          <motion.div
            className="cursor-pointer z-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HamburgerMenu />
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-[#160f44]/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            scale: menuOpen ? 1 : 0.9,
            pointerEvents: menuOpen ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`text-2xl font-bold transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#CBF281]" : "text-white hover:text-[#CBF281]"
                }`}
                onClick={(e) => handleLinkClick(e, item.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  y: menuOpen ? 0 : 30
                }}
                transition={{ delay: menuOpen ? index * 0.1 : 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 30
            }}
            transition={{ delay: menuOpen ? 0.4 : 0 }}
          >
            <LanguageSelector mobile />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}