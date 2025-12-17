import Link from 'next/link';

const footerLinks = {
  producten: [
    { name: 'Privacy Telefoons', href: '/products/phones' },
    { name: 'Privacy Laptops', href: '/products/laptops' },
    { name: 'Accessoires', href: '/products' },
    { name: 'Vergelijk', href: '/products' },
  ],
  bedrijf: [
    { name: 'Over PhantomVault', href: '/about' },
    { name: 'Technologie', href: '/technology' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carrière', href: '/about' },
  ],
  support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Garantie', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Retourbeleid', href: '/returns' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-gradient-gold">PhantomVault</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              De toekomst van privacy-technologie. Bescherm wat belangrijk is met militaire encryptie en hardware beveiliging.
            </p>
            <div className="flex space-x-3">
              {/* Social Icons - larger touch targets */}
              <a href="#" className="w-11 h-11 bg-[#111111] border border-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors touch-target" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 bg-[#111111] border border-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors touch-target" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 bg-[#111111] border border-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors touch-target" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Producten</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.producten.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm py-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Bedrijf</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm py-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm py-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm py-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#1a1a1a]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Blijf op de hoogte</h3>
              <p className="text-gray-400 text-sm">Ontvang het laatste nieuws over privacy en beveiliging.</p>
            </div>
            <form className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 lg:w-72 px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] sm:rounded-l-lg rounded-lg sm:rounded-r-none text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-base"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold sm:rounded-r-lg rounded-lg sm:rounded-l-none hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all active:scale-[0.98] text-base"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 PhantomVault. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 text-sm flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              256-bit SSL Beveiligd
            </span>
            <span className="text-gray-500 text-sm flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
