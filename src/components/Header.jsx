import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-around items-center px-6  bg-inherit  w-full z-50 relative">
      {/* Logo or Brand Name */}
      <div className="text-2xl font-bold text-[#FFFFFF]">Mert Batut</div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-[#160f44] md:bg-transparent md:static absolute top-16 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out  md:shadow-none z-40 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <a
          href="#home"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300 md:mx-4"
        >
          Anasayfa
        </a>
        <a
          href="#portfolio"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300 md:mx-4"
        >
          Portfolio
        </a>
        <a
          href="#skills"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300 md:mx-4"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-lg font-bold text-white hover:text-[#CBF281] transition duration-300 md:mx-4"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
