import { Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | PhantomPrivacy',
  description: 'Algemene voorwaarden voor het gebruik van PhantomPrivacy producten en diensten.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Juridisch</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Algemene <span className="text-gradient-gold">Voorwaarden</span>
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
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Algemeen</h2>
              <p className="text-gray-400 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en 
                overeenkomsten van PhantomPrivacy B.V., gevestigd te Amsterdam, Nederland. Door het 
                plaatsen van een bestelling ga je akkoord met deze voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Bestellingen</h2>
              <p className="text-gray-400 leading-relaxed">
                Een overeenkomst komt tot stand op het moment dat je een orderbevestiging per e-mail 
                ontvangt. PhantomPrivacy behoudt zich het recht voor bestellingen te weigeren of 
                aanvullende informatie op te vragen.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Prijzen en Betaling</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Alle prijzen zijn in euro&apos;s en inclusief BTW. Betaling dient te geschieden via de 
                aangeboden betaalmethoden. Bij niet-tijdige betaling behouden wij ons het recht 
                voor de bestelling te annuleren.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Levering</h2>
              <p className="text-gray-400 leading-relaxed">
                Wij streven ernaar bestellingen binnen 2-5 werkdagen te verzenden. Levertijden zijn 
                indicatief en geven geen recht op schadevergoeding bij overschrijding. Het risico 
                van de producten gaat over op de koper bij aflevering.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Herroepingsrecht</h2>
              <p className="text-gray-400 leading-relaxed">
                Je hebt het recht om binnen 14 dagen na ontvangst zonder opgave van redenen de 
                overeenkomst te ontbinden. Het product moet in originele staat en verpakking worden 
                geretourneerd. Retourkosten zijn voor eigen rekening.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Garantie</h2>
              <p className="text-gray-400 leading-relaxed">
                Alle PhantomPrivacy producten worden geleverd met 2 jaar fabrieksgarantie. De garantie 
                dekt materiaal- en fabricagefouten bij normaal gebruik. Schade door onjuist gebruik, 
                ongelukken of modificaties valt buiten de garantie.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Aansprakelijkheid</h2>
              <p className="text-gray-400 leading-relaxed">
                PhantomPrivacy is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde 
                winst. Onze aansprakelijkheid is beperkt tot het bedrag van de aankoopprijs van het 
                betreffende product.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Intellectueel Eigendom</h2>
              <p className="text-gray-400 leading-relaxed">
                Alle intellectuele eigendomsrechten met betrekking tot onze producten, software en 
                website berusten bij PhantomPrivacy. Het is niet toegestaan deze te kopiëren, 
                modificeren of distribueren zonder schriftelijke toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Toepasselijk Recht</h2>
              <p className="text-gray-400 leading-relaxed">
                Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd 
                aan de bevoegde rechter te Amsterdam.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Contact</h2>
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <p className="text-gray-400">PhantomPrivacy B.V.</p>
                <p className="text-gray-400">Amsterdam, Nederland</p>
                <p className="text-[#D4AF37] mt-2">legal@phantomprivacy.com</p>
                <p className="text-gray-500 text-sm mt-2">KvK: 12345678</p>
              </div>
            </section>

          </div>
        </div>
      </Section>
    </main>
  );
}
