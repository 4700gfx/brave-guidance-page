import React from 'react'
import logo from '../assets/images/brave-guidance-trans.png'

const Navbar = () => {
  const navigationTabs = {
    home: "Home",
    aboutMe: "About Me",
    whatWeTreat: "What We Treat",
    faq: "FAQ",
    contactMe: "Contact Me"
  };

  return (
    <header className="bg-main-light-green shadow-lg w-11/12 mx-auto rounded-b-2xl">
      <nav className="max-w-5/8 mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center rounded-2xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
          {Object.entries(navigationTabs).map(([key, label]) => (
            <li 
              key={key}
              className="font-bold text-md text-primary-black hover:text-primary-black hover:bg-primary-white px-3 py-2 rounded-xl transition-colors duration-300 cursor-pointer"
            >
              {label}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="mt-4 md:mt-0 bg-primary-black text-primary-white px-6 py-2 rounded-xl hover:bg-opacity-80 transition duration-300">
          Book Me!
        </button>
      </nav>
    </header>
  );
};

export default Navbar;