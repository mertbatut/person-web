import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex justify-around pt-8 items-center px-6 bg-inherit w-full z-50 relative">
    

      <div
        className="md:hidden  cursor-pointer z-50"
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

   
      <nav
        className={`fixed inset-0 bg-[#160f44] md:bg-transparent md:static flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <a
          href="#home"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          Anasayfa
        </a>
        <a
          href="#projects"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300"
          onClick={(e) => handleLinkClick(e, "projects")}
        >
          Projeler
        </a>
        <a
          href="#skills"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300"
          onClick={(e) => handleLinkClick(e, "skills")}
        >
          Yetenekler
        </a>
        <a
          href="#contact"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300"
          onClick={(e) => handleLinkClick(e, "contact")}
        >
          İletişim
        </a>
      </nav>
    </header>
  );
}
