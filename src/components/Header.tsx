'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/98 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-[#0a0a0a]/95 backdrop-blur-md'
    } border-b border-[#1a1a1a]`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 py-2 -my-2 px-1 -mx-1 rounded-lg touch-target">
            <Image 
              src="/logo-icon.svg" 
              alt="PhantomPrivacy" 
              width={40} 
              height={40} 
              className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg sm:text-xl font-bold text-gradient-gold leading-tight">PhantomPrivacy</span>
              <span className="text-[9px] sm:text-[10px] text-[#B8860B] tracking-wider hidden sm:block">Secure Your Digital Self</span>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 -mr-2 text-gray-400 hover:text-[#D4AF37] transition-colors touch-target rounded-lg"
            aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-[#0a0a0a] z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className={`h-full overflow-y-auto pb-safe transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-[#111111] rounded-xl transition-all touch-target"
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ${
                        mobileSubmenuOpen === item.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-4 py-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-3 text-base text-gray-400 hover:text-[#D4AF37] hover:bg-[#111111] rounded-lg transition-all touch-target"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-4 text-lg font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-[#111111] rounded-xl transition-all touch-target"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button in mobile menu */}
              <div className="pt-6 px-4">
                <Link
                  href="/products"
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-xl text-lg active:scale-[0.98] transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop Nu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
