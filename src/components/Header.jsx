import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

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
    { id: "home", label: t("menu.home", "Anasayfa") },
    { id: "projects", label: t("menu.projects", "Projeler") },
    { id: "skills", label: t("menu.skills", "Yetenekler") },
    { id: "contact", label: t("menu.contact", "İletişim") }
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

          {/* Language Selector - Desktop */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
                currentLang === 'tr'
                  ? "bg-[#CBF281] text-[#160f44]"
                  : "text-white border border-white/20 hover:border-white/40"
              }`}
              aria-label="Türkçe"
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
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
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