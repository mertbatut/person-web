import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Throttled scroll event for performance
    let isThrottled = false;
    const throttledHandleScroll = () => {
      if (!isThrottled) {
        handleScroll();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 200);
      }
    };

    // Intersection Observer for detecting active section
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
    
    // Observe all sections
    const sections = ["home", "projects", "skills", "contact"];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", throttledHandleScroll);
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    
    // Prevent multiple clicks/scroll attempts
    if (e.target.dataset.scrolling === "true") {
      return;
    }
    
    // Set a flag to prevent multiple scrolls
    e.target.dataset.scrolling = "true";
    
    // Close menu if open
    setMenuOpen(false);
    
    // Update active section immediately for UI feedback
    setActiveSection(targetId);
    
    // Perform the scroll
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      
      // Reset the flag after animation completes
      setTimeout(() => {
        e.target.dataset.scrolling = "false";
      }, 1000);
    } else {
      e.target.dataset.scrolling = "false";
    }
  };

  // Language change handler
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navItems = [
    { id: "home", label: t("menu.home") },
    { id: "projects", label: t("menu.projects") },
    { id: "skills", label: t("menu.skills") },
    { id: "contact", label: t("menu.contact") }
  ];

  // Current language
  const currentLang = i18n.language || 'tr';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-[#160f44]/90 backdrop-blur-md shadow-lg" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "home")} 
          className="font-bold text-2xl text-white"
        >
          <span className="text-[#CBF281]">MB</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <nav className="mr-8 flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#CBF281]"
                    : "text-white hover:text-[#CBF281]"
                }`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button - Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 mr-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 relative w-10 h-10 flex items-center justify-center"
            aria-label={isDark ? t('common.switchToLight') : t('common.switchToDark')}
          >
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className={`w-5 h-5 text-yellow-300 absolute theme-toggle-icon theme-toggle-sun ${isDark ? 'block' : 'hidden'}`}>
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            
            {/* Moon Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className={`w-5 h-5 text-white absolute theme-toggle-icon theme-toggle-moon ${isDark ? 'hidden' : 'block'}`}>
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Language Selector - Desktop */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
                currentLang === 'tr'
                  ? "bg-[#CBF281] text-[#160f44]"
                  : "text-white border border-white/20 hover:border-white/40"
              }`}
              aria-label={t('common.turkish')}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
                currentLang === 'en'
                  ? "bg-[#CBF281] text-[#160f44]"
                  : "text-white border border-white/20 hover:border-white/40"
              }`}
              aria-label={t('common.english')}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 mr-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 relative w-10 h-10 flex items-center justify-center"
            aria-label={isDark ? t('common.switchToLight') : t('common.switchToDark')}
          >
            {/* Sun Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className={`w-5 h-5 text-yellow-300 absolute theme-toggle-icon theme-toggle-sun ${isDark ? 'block' : 'hidden'}`}>
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            
            {/* Moon Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className={`w-5 h-5 text-white absolute theme-toggle-icon theme-toggle-moon ${isDark ? 'hidden' : 'block'}`}>
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div
            className="cursor-pointer z-50"
            onClick={toggleMenu}
            aria-label={t('common.toggleMenu')}
          >
            <div
              className={`w-6 h-1 bg-white mb-1 transition-transform duration-300 ${
                menuOpen ? "transform rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white transition-transform duration-300 ${
                menuOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#160f44]/95 md:hidden flex flex-col items-center justify-center transition-opacity duration-300 z-40 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-lg font-bold transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#CBF281]"
                    : "text-white hover:text-[#CBF281]"
                }`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Language Selector */}
          <div className="flex space-x-4 mt-12">
            <button
              onClick={() => {
                changeLanguage('tr');
                setMenuOpen(false);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                currentLang === 'tr'
                  ? "bg-[#CBF281] text-[#160f44]"
                  : "text-white border border-white/20"
              }`}
            >
              TR
            </button>
            <button
              onClick={() => {
                changeLanguage('en');
                setMenuOpen(false);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                currentLang === 'en'
                  ? "bg-[#CBF281] text-[#160f44]"
                  : "text-white border border-white/20"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}