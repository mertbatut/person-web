import { useState, useEffect, useRef, useContext } from 'react';
import { withTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import PropTypes from 'prop-types';

const FooterContent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  
  const isDark = theme === 'dark';

  // Intersection Observer ile görünürlük tespiti
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Contact methods
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'mertbatut@gmail.com',
      href: 'mailto:mertbatut@gmail.com',
      primary: true
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+90 541 846 99 79',
      href: 'tel:+905418469979',
      primary: false
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Bursa, Turkey',
      href: '#',
      primary: false
    }
  ];

  // Social links
  const socialLinks = [
    { 
      href: 'https://github.com/mertbatut', 
      icon: 'fab fa-github', 
      label: 'GitHub'
    },
    { 
      href: 'https://www.linkedin.com/in/mert-batut-066b96248/', 
      icon: 'fab fa-linkedin-in', 
      label: 'LinkedIn'
    },
    { 
      href: 'https://www.facebook.com/mert.batut.3/', 
      icon: 'fab fa-facebook', 
      label: 'Facebook'
    },
    { 
      href: 'https://www.instagram.com/mertbatut/', 
      icon: 'fab fa-instagram', 
      label: 'Instagram'
    }
  ];

  return (
    <footer id="contact" ref={sectionRef} className={`relative overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gray-950' 
        : 'bg-gray-100'
    }`}>
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#374151' : '#9CA3AF'} 1px, transparent 1px), linear-gradient(to right, ${isDark ? '#374151' : '#9CA3AF'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 sm:py-20 lg:py-24">
          
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('footer.title') || 'Let\'s Work Together'}
              </h2>
              <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('footer.description') || 'Ready to bring your ideas to life? I\'m available for new projects and collaborations.'}
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group p-8 rounded-2xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                    method.primary
                      ? isDark 
                        ? 'bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-400 hover:border-cyan-400 shadow-lg shadow-cyan-500/20' 
                        : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-lg shadow-blue-600/20'
                      : isDark 
                        ? 'bg-gray-900 border-gray-700 hover:border-cyan-400 hover:bg-gray-800 text-white hover:shadow-lg hover:shadow-cyan-400/10' 
                        : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-gray-50 text-gray-900 hover:shadow-lg hover:shadow-blue-400/10'
                  }`}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 ${
                    method.primary ? 'text-white' : isDark ? 'text-cyan-400' : 'text-blue-400'
                  }`}>
                    <i className={`${method.icon} text-6xl`} />
                  </div>
                  
                  <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
                    method.primary
                      ? 'bg-white/20 text-white backdrop-blur-sm group-hover:scale-110'
                      : isDark 
                        ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:scale-110' 
                        : 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20 group-hover:text-blue-700 group-hover:scale-110'
                  }`}>
                    <i className={`${method.icon} text-2xl`} />
                  </div>
                  
                  <h3 className={`font-bold text-lg mb-3 ${
                    method.primary
                      ? 'text-white'
                      : isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {method.label}
                  </h3>
                  
                  <p className={`font-medium ${
                    method.primary
                      ? 'text-white/90'
                      : isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {method.value}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                    method.primary
                      ? 'bg-white/30'
                      : isDark ? 'bg-cyan-400/0 group-hover:bg-cyan-400/50' : 'bg-blue-600/0 group-hover:bg-blue-600/50'
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isDark 
                        ? 'bg-gray-900 border-gray-700 text-gray-400 hover:border-cyan-400 hover:bg-gray-800 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20' 
                        : 'bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-400/20'
                    }`}
                  >
                    <i className={`${social.icon} text-xl transition-transform duration-300 relative z-10 group-hover:scale-110`} />
                    
                    {/* Hover background effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-cyan-400/5' 
                        : 'bg-blue-400/5'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}
          >
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

FooterContent.propTypes = {
  t: PropTypes.func.isRequired,
};

const Footer = withTranslation()(FooterContent);
export default Footer;