import { useState, useEffect, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  const isDark = theme === 'dark';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-5 sm:bottom-8 right-5 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110 focus:outline-none ${
            isDark 
              ? 'bg-gradient-to-r from-[#4832D3] to-[#160f44]' 
              : 'bg-gradient-to-r from-gray-700 to-gray-900'
          }`}
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;