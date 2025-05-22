"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#6046ca] to-[#8367ff] py-4 px-4 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="white"
            />
            <path
              d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
              fill="white"
            />
            <path
              d="M12 12C9.33 12 7 13.34 7 15V16H17V15C17 13.34 14.67 12 12 12Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-xl font-bold">Recruitly</span>
        </Link>

        {/* Desktop Navigation and CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/partners"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/get-started"
            className="bg-[#121F52] text-white hover:bg-[#333] transition-colors py-2 px-6 rounded-full font-medium ml-4"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.9)] z-50 flex flex-col justify-center items-center backdrop-blur-sm">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors text-xl"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/partners"
              className="text-white hover:text-gray-300 transition-colors text-xl"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors text-xl"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors py-2 px-6 rounded-full font-medium mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
