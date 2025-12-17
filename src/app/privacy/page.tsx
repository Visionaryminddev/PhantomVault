import { Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PhantomVault',
  description: 'Lees hoe PhantomVault jouw privacy beschermt en welke gegevens we verzamelen.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Juridisch</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Laatst bijgewerkt: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert prose-gold">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Inleiding</h2>
              <p className="text-gray-400 leading-relaxed">
                Bij PhantomVault nemen we privacy uiterst serieus - het is immers de kern van onze missie. 
                Dit privacybeleid legt uit hoe we omgaan met gegevens die je met ons deelt wanneer je onze 
                website bezoekt of onze producten en diensten gebruikt.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Gegevens die we verzamelen</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We verzamelen alleen de minimaal noodzakelijke gegevens:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Contactgegevens:</strong> Naam en e-mailadres wanneer je contact met ons opneemt</li>
                <li><strong className="text-white">Bestelgegevens:</strong> Verzendadres en betalingsinformatie voor bestellingen</li>
                <li><strong className="text-white">Communicatie:</strong> Berichten die je ons stuurt via het contactformulier</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Wat we NIET verzamelen</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                In tegenstelling tot veel andere bedrijven:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Geen tracking cookies van derden</li>
                <li>Geen advertentie-tracking</li>
                <li>Geen verkoop van gegevens aan derden</li>
                <li>Geen gedragsprofilering</li>
                <li>Geen telemetrie van onze apparaten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Hoe we je gegevens gebruiken</h2>
              <p className="text-gray-400 leading-relaxed">
                Je gegevens worden uitsluitend gebruikt voor:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside mt-4">
                <li>Het verwerken en verzenden van je bestellingen</li>
                <li>Het beantwoorden van je vragen en ondersteuningsverzoeken</li>
                <li>Het versturen van belangrijke productupdates (alleen met toestemming)</li>
                <li>Het verbeteren van onze dienstverlening</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Gegevensbeveiliging</h2>
              <p className="text-gray-400 leading-relaxed">
                Alle gegevens worden versleuteld opgeslagen met AES-256 encryptie. Onze servers 
                bevinden zich in Nederland en voldoen aan de hoogste beveiligingsstandaarden. 
                Toegang tot gegevens is strikt beperkt tot geautoriseerd personeel.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Je rechten (AVG/GDPR)</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Je hebt het recht om:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Inzage:</strong> Te vragen welke gegevens we van je hebben</li>
                <li><strong className="text-white">Correctie:</strong> Onjuiste gegevens te laten corrigeren</li>
                <li><strong className="text-white">Verwijdering:</strong> Je gegevens te laten verwijderen</li>
                <li><strong className="text-white">Overdracht:</strong> Je gegevens op te vragen in een standaardformaat</li>
                <li><strong className="text-white">Bezwaar:</strong> Bezwaar te maken tegen bepaalde verwerkingen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                Onze website gebruikt alleen essentiële cookies die nodig zijn voor de werking 
                van de site. We gebruiken geen tracking cookies, analytics van derden, of 
                advertentiecookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                Voor vragen over dit privacybeleid of om je rechten uit te oefenen, 
                neem contact met ons op via:
              </p>
              <div className="mt-4 p-4 bg-[#0a0a0a] rounded-lg">
                <p className="text-[#D4AF37]">privacy@phantomvault.com</p>
                <p className="text-gray-500 text-sm mt-2">
                  PhantomVault B.V.<br />
                  Amsterdam, Nederland
                </p>
              </div>
            </section>

          </div>
        </div>
      </Section>
    </main>
  );
}
