import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  
  const isDark = theme === 'dark';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector flex items-center justify-center gap-2">
      {/* Türkçe Seçimi */}
      <button
        onClick={() => changeLanguage('tr')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition duration-200 ${
          isDark 
            ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 hover:border-gray-500' 
            : 'border-gray-300 bg-gray-100 hover:bg-blue-50 hover:border-blue-500'
        }`}
        aria-label="Türkçe"
      >
        <img
          src="/images/turkbayragi.png"
          alt="Türkçe"
          className="w-5 h-5 rounded-full"
        />
        <span className={`text-xs font-medium ${
          isDark ? 'text-gray-200' : 'text-gray-600'
        }`}>TR</span>
      </button>

      {/* İngilizce Seçimi */}
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition duration-200 ${
          isDark 
            ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 hover:border-gray-500' 
            : 'border-gray-300 bg-gray-100 hover:bg-blue-50 hover:border-blue-500'
        }`}
        aria-label="English"
      >
        <img
          src="/images/ing.png"
          alt="English"
          className="w-5 h-5 rounded-full"
        />
        <span className={`text-xs font-medium ${
          isDark ? 'text-gray-200' : 'text-gray-600'
        }`}>EN</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
