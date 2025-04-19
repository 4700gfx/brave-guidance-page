import React, { useState } from 'react';
import logo from '../assets/images/brave-guidance-trans.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationTabs = {
    home: { label: "Home", id: "Hero" },
    aboutMe: { label: "About Me", id: "AboutMe" },
    whatWeTreat: { label: "Most Commonly Treated", id: "Services" },
    faq: { label: "FAQ", id: "Questions" },
    contactMe: { label: "Contact Me", id: "ContactMe" }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-main-light-green shadow-lg w-11/12 mx-auto rounded-b-2xl z-50 relative">
      <nav className="max-w-5/8 mx-auto px-6 py-4 flex justify-around items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Hamburger - mobile only */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary-black hover:text-primary-white hover:bg-primary-black hover:scale-110 transition-all duration-300 p-2 rounded-md"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav + Button - desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 mr-20">
            {Object.entries(navigationTabs).map(([key, { label, id }]) => (
              <li
                key={key}
                className="font-bold text-md text-primary-black hover:text-primary-black hover:bg-primary-white px-3 py-2 rounded-xl transition-colors duration-300 cursor-pointer"
              >
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <a
            href="https://secure.helloalma.com/providers/sylvia-dowers/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-black text-primary-white px-6 py-2 rounded-xl transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-lg"
          >
            Book Me!
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {Object.entries(navigationTabs).map(([key, { label, id }]) => (
              <li
                key={key}
                className="font-bold text-md text-primary-black hover:bg-primary-white px-3 py-2 rounded-xl transition-colors duration-300 cursor-pointer"
              >
                <a href={`#${id}`} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <a
            href="https://secure.helloalma.com/providers/sylvia-dowers/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-primary-black text-primary-white w-full text-center py-2 rounded-xl transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-lg block"
          >
            Book Me!
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
