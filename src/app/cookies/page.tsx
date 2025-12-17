import { Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | PhantomVault',
  description: 'Informatie over het cookiegebruik op de PhantomVault website.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Juridisch</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Cookie <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Laatst bijgewerkt: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Onze Aanpak</h2>
              <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg mb-4">
                <p className="text-[#D4AF37] font-semibold">
                  🔒 PhantomVault gebruikt GEEN tracking cookies
                </p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Als privacy-first bedrijf gebruiken we alleen de absoluut noodzakelijke cookies 
                voor de werking van onze website. We tracken je niet, profileren je niet, en 
                verkopen geen gegevens aan derden.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Cookies die we gebruiken</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">Sessie Cookie</h3>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Essentieel</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Houdt je winkelwagen en inlogstatus bij tijdens je bezoek. Wordt verwijderd 
                    wanneer je de browser sluit.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">Taalvoorkeur</h3>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Essentieel</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Onthoudt je taalvoorkeur zodat je de site in de juiste taal ziet.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">CSRF Token</h3>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Beveiliging</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Beschermt formulieren tegen cross-site request forgery aanvallen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Wat we NIET gebruiken</h2>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Google Analytics of andere tracking tools
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Facebook Pixel of sociale media trackers
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Advertentie cookies
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Third-party cookies
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Fingerprinting technieken
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Cookies Beheren</h2>
              <p className="text-gray-400 leading-relaxed">
                Je kunt cookies altijd blokkeren of verwijderen via je browserinstellingen. 
                Omdat we alleen essentiële cookies gebruiken, kan het uitschakelen van cookies 
                invloed hebben op de functionaliteit van de website.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-400">
                Vragen over ons cookiebeleid? Neem contact op via{' '}
                <a href="mailto:privacy@phantomvault.com" className="text-[#D4AF37] hover:underline">
                  privacy@phantomvault.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </Section>
    </main>
  );
}
