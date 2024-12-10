import  { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll durumunu takip eden bir event listener ekle
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

  // Sayfanın en üstüne kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "50%", // Butonu yuvarlak yapar
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056b3"; // Hover efekti
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff"; // Normal renk
          }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
