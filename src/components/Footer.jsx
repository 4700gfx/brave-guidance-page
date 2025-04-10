import React from 'react';
import logo from '../assets/images/brave-guidance-trans.png';

const Footer = () => {
  return (
    <footer className="bg-main-light-green text-main-dark-green py-4 px-4 w-11/12 mx-auto rounded-t-2xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5 mb-10">
          {/* Column 1 - Main Website */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Website</h4>
            <ul className="space-y-2 text-sm text-bold">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Me</a></li>
              <li><a href="/services" className="hover:underline">What We Treat</a></li>
            </ul>
          </div>

          {/* Column 2 - Types of Properties */}
          <div>
            <h4 className="text-lg font-semibold mb-4"> What We Treat</h4>
            <ul className="space-y-2 text-sm text-bold">
              <li><a href="#" className="hover:underline">Depression</a></li>
              <li><a href="#" className="hover:underline">Anixety</a></li>
              <li><a href="#" className="hover:underline">Trauma</a></li>
            </ul>
          </div>

          {/* Column 3 - About Me */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More From Me</h4>
            <ul className="space-y-2 text-sm text-bold">
              <li><a href="#" className="hover:underline">Booking Site</a></li>
              <li><a href="#" className="hover:underline">Contact Me</a></li>
              <li><a href="/faq" className="hover:underline">Accepted Insurance</a></li>
            </ul>
          </div>

        </div>

        {/* Logo and copyright */}
        <div className="flex flex-col items-center border-t border-main-dark-green/20 pt-6">
          <img src={logo} alt="Brave Guidance Logo" className="w-24 mb-2" />
          <p className="text-sm text-bold">&copy; {new Date().getFullYear()} Brave Guidance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
