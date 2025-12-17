'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Producten', 
    href: '/products',
    submenu: [
      { name: 'Privacy Telefoons', href: '/products/phones' },
      { name: 'Privacy Laptops', href: '/products/laptops' },
    ]
  },
  { name: 'Over Ons', href: '/about' },
  { name: 'Technologie', href: '/technology' },
  { name: 'Support', href: '/support' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMobileSubmenu = useCallback((name: string) => {
    setMobileSubmenuOpen(prev => prev === name ? null : name);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/98 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-[#0a0a0a]/95 backdrop-blur-md'
      } border-b border-[#1a1a1a]`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 py-2 -my-2 px-1 -mx-1 rounded-lg" onClick={closeMobileMenu}>
              <Image 
                src="/logo-icon.svg" 
                alt="PhantomPrivacy" 
                width={40} 
                height={40} 
                className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0"
                priority
              />
              <div className="flex flex-col -space-y-1">
                <span className="text-base sm:text-xl font-bold text-gradient-gold leading-tight">PhantomPrivacy</span>
                <span className="text-[8px] sm:text-[10px] text-[#B8860B] tracking-wider hidden xs:block">Secure Your Digital Self</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-[#111111] border border-[#1a1a1a] rounded-lg shadow-xl py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-[#D4AF37] hover:bg-[#1a1a1a] transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/products"
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
              >
                Shop Nu
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 -mr-2 text-gray-400 hover:text-[#D4AF37] active:text-[#D4AF37] transition-colors rounded-lg"
              aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`} />
                <span className={`w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Full screen overlay */}
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[99] transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-16 sm:top-20 left-0 right-0 bottom-0 bg-[#0a0a0a] overflow-y-auto overscroll-contain transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 pb-24 min-h-full">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <div 
                  key={item.name}
                  className={`transform transition-all duration-300 ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  {item.submenu ? (
                    <div className="border-b border-[#1a1a1a] pb-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium text-white active:text-[#D4AF37] rounded-xl transition-colors"
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-5 h-5 text-[#D4AF37] transition-transform duration-200 ${
                            mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-out ${
                        mobileSubmenuOpen === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-4 pb-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="flex items-center px-4 py-3 text-base text-gray-400 active:text-[#D4AF37] rounded-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3" />
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-4 text-lg font-medium text-white active:text-[#D4AF37] border-b border-[#1a1a1a] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* CTA Button in mobile menu */}
            <div 
              className={`mt-8 transform transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${navigation.length * 50 + 100}ms` : '0ms' }}
            >
              <Link
                href="/products"
                className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-xl text-lg active:scale-[0.98] transition-transform shadow-lg shadow-[#D4AF37]/20"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Nu
              </Link>
            </div>

            {/* Extra links */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Link href="/faq" className="text-gray-500 active:text-[#D4AF37]" onClick={closeMobileMenu}>
                  FAQ
                </Link>
                <Link href="/privacy" className="text-gray-500 active:text-[#D4AF37]" onClick={closeMobileMenu}>
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-500 active:text-[#D4AF37]" onClick={closeMobileMenu}>
                  Voorwaarden
                </Link>
                <Link href="/contact" className="text-gray-500 active:text-[#D4AF37]" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
