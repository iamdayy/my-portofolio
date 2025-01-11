"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Dayan Sauqy
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a
              href="#about"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
