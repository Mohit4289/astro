"use client";
import { useState } from 'react';
import Link from 'next/link';
import { RiAccountPinCircleFill } from 'react-icons/ri';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Properties', 'Gallery'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          <Link href="/">AstroStops</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative px-5 py-3 text-lg font-medium group"
              >
                <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                {/* First gradient background - slides in from left */}
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 ease-out rounded-lg"></div>
                {/* Second gradient background - fades in */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 rounded-lg"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Account and Button */}
        <div className="hidden md:flex items-center gap-4">
          <RiAccountPinCircleFill className="text-3xl text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300" />
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
            <span className="relative z-10">Book Now</span>
            {/* Button hover animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Menu
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="py-6 px-6 space-y-4 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block relative overflow-hidden px-6 py-3 text-lg font-medium text-gray-800 rounded-xl group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Link>
              ))}
              
              {/* Mobile Menu Footer */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
