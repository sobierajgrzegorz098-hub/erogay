"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const affiliateLink = "https://datenow.link/link/3019/69342883"

  return (
    <header className="relative bg-black shadow-sm border-b border-gray-800">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-extrabold">
              <span className="text-orange-500">ero</span>
              <span className="text-white">gay.pl</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-bold"
            >
              Funkcje
            </a>
            <a href="#opinie" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-bold">
              Opinie
            </a>
            <a href="#kontakt" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-bold">
              Kontakt
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 px-4 py-2 rounded-lg transition-colors duration-200 inline-block font-bold"
            >
              Zaloguj się
            </a>
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block font-extrabold"
              style={{
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif"',
              }}
            >
              Dołącz za darmo
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-orange-500 py-2 font-bold">
                Funkcje
              </a>
              <a href="#opinie" className="text-gray-300 hover:text-orange-500 py-2 font-bold">
                Opinie
              </a>
              <a href="#kontakt" className="text-gray-300 hover:text-orange-500 py-2 font-bold">
                Kontakt
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 px-4 py-2 rounded-lg transition-colors duration-200 text-center font-bold"
                >
                  Zaloguj się
                </a>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg transition-all duration-200 text-center font-extrabold"
                  style={{
                    fontFamily:
                      '-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif"',
                  }}
                >
                  Dołącz za darmo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
