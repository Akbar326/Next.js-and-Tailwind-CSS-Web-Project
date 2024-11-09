"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-opacity-80 bg-blue-900 backdrop-blur-lg text-white py-3 shadow-lg relative">
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 justify-center">
        <li className="group">
          <Link href="/" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Home
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/about" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            About
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/services" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/contact" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="group">
          <Link href="/blog" className="relative inline-block text-lg font-bold transition duration-300 transform hover:scale-110 hover:text-yellow-300">
            Blog
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>
      </ul>

      {/* Mobile Burger Menu */}
      <div className="md:hidden flex justify-between items-center px-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl z-10">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-blue-900 py-4 z-30`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/" className="text-lg font-bold text-white hover:text-yellow-300" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg font-bold text-white hover:text-yellow-300" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-lg font-bold text-white hover:text-yellow-300" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg font-bold text-white hover:text-yellow-300" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-lg font-bold text-white hover:text-yellow-300" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
