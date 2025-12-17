import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retourneren | PhantomVault Support',
  description: 'Hoe je PhantomVault producten kunt retourneren en wat de voorwaarden zijn.',
};

export default function SupportReturnsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Support</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Product <span className="text-gradient-gold">Retourneren</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Niet helemaal tevreden? We maken het retourproces zo eenvoudig mogelijk.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">📅</div>
            <h3 className="text-lg font-semibold text-white mb-2">14 Dagen</h3>
            <p className="text-gray-400 text-sm">Bedenktijd na ontvangst</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">📦</div>
            <h3 className="text-lg font-semibold text-white mb-2">Gratis Label</h3>
            <p className="text-gray-400 text-sm">Wij sturen een retourlabel</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">💳</div>
            <h3 className="text-lg font-semibold text-white mb-2">Snel Terug</h3>
            <p className="text-gray-400 text-sm">Binnen 5 werkdagen</p>
          </Card>
        </div>
      </Section>

      {/* Steps */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Retourneren in 4 Stappen
          </h2>
          
          <div className="space-y-6">
            <Card padding="md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Meld je retour aan</h3>
                  <p className="text-gray-400 text-sm">
                    Stuur een e-mail naar returns@phantomvault.com met je ordernummer 
                    en reden van retour, of gebruik het contactformulier.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card padding="md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ontvang je retourlabel</h3>
                  <p className="text-gray-400 text-sm">
                    Binnen 24 uur ontvang je een gratis retourlabel per e-mail. 
                    Print dit uit en plak het op de doos.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card padding="md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Verpak het product</h3>
                  <p className="text-gray-400 text-sm">
                    Plaats het product in de originele verpakking met alle accessoires. 
                    Zorg dat het goed beschermd is voor verzending.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card padding="md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lever af bij een pakketpunt</h3>
                  <p className="text-gray-400 text-sm">
                    Breng het pakket naar een PostNL punt. Je ontvangt een bevestiging 
                    en we betalen terug zodra we het product hebben ontvangen.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Klaar om te retourneren?
          </h2>
          <p className="text-gray-400 mb-6">
            Start het retourproces via onderstaande knop.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=return" size="lg">
              Retour Aanvragen
            </Button>
            <Button href="/returns" variant="outline" size="lg">
              Retourbeleid Bekijken
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
