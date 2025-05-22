import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const navLinkClass = (path: string) => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors duration-200";
    return isActive(path)
      ? `${baseClass} text-blue-600 font-semibold`
      : `${baseClass} text-gray-600 hover:text-blue-600`;
  };

  const mobileNavLinkClass = (path: string) => {
    const baseClass = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200";
    return isActive(path)
      ? `${baseClass} text-blue-600 font-semibold bg-blue-50`
      : `${baseClass} text-gray-600 hover:text-blue-600 hover:bg-gray-50`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EuroGrowth BD
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={navLinkClass('/')}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={navLinkClass('/services')}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={navLinkClass('/about')}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${
                isActive('/contact')
                  ? 'bg-blue-700'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              } text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/" 
                className={mobileNavLinkClass('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={mobileNavLinkClass('/services')}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={mobileNavLinkClass('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={mobileNavLinkClass('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 