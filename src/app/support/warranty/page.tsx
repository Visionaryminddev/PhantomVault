import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garantie | PhantomVault',
  description: 'Informatie over de PhantomVault garantievoorwaarden en wat er gedekt wordt.',
};

const warrantyFeatures = [
  {
    icon: '🛡️',
    title: '2 Jaar Garantie',
    description: 'Alle producten worden geleverd met 2 jaar fabrieksgarantie.',
  },
  {
    icon: '🔧',
    title: 'Gratis Reparatie',
    description: 'Defecten worden kosteloos gerepareerd of vervangen.',
  },
  {
    icon: '📦',
    title: 'Ophaalservice',
    description: 'We halen defecte producten gratis bij je op.',
  },
  {
    icon: '⚡',
    title: 'Snelle Service',
    description: 'Gemiddelde reparatietijd van 5 werkdagen.',
  },
];

const coveredItems = [
  'Materiaalfouten',
  'Fabricagefouten',
  'Defecte componenten',
  'Software bugs (via updates)',
  'Batterijdegradatie (onder 80% binnen 1 jaar)',
  'Display defecten (dode pixels)',
];

const notCoveredItems = [
  'Schade door vallen of stoten',
  'Waterschade (tenzij waterproof model)',
  'Schade door onjuist gebruik',
  'Modificaties aan hardware/software',
  'Cosmetische slijtage',
  'Schade door derden',
];

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Support</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-gradient-gold">Garantie</span> Voorwaarden
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Kwaliteit waar we achter staan. Alle PhantomVault producten 
            worden geleverd met uitgebreide garantie.
          </p>
        </div>
      </section>

      {/* Features */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {warrantyFeatures.map((feature, index) => (
            <Card key={index} padding="md" className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Coverage */}
      <Section>
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-3 sm:mb-4">Dekking</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Wat Valt Onder Garantie?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card padding="lg">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mr-3">✓</span>
              Gedekt
            </h3>
            <ul className="space-y-3">
              {coveredItems.map((item, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card padding="lg">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 mr-3">✗</span>
              Niet Gedekt
            </h3>
            <ul className="space-y-3">
              {notCoveredItems.map((item, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-3 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Extended Warranty */}
      <Section className="bg-[#111111]/30">
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="text-center">
            <Badge className="mb-4" variant="gold">Premium</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              PhantomCare+ Uitgebreide Garantie
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Breid je garantie uit naar 3 jaar inclusief ongeluksdekking. 
              Voor €99 per jaar ben je volledig beschermd.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">3 Jaar</div>
                <div className="text-gray-500 text-sm">Totale dekking</div>
              </div>
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">2x</div>
                <div className="text-gray-500 text-sm">Schade claims</div>
              </div>
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
                <div className="text-gray-500 text-sm">Priority support</div>
              </div>
            </div>
            <Button href="/contact?type=warranty">
              PhantomCare+ Aanvragen
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Garantieclaim Indienen?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Heb je een defect product? Neem contact met ons op en we lossen het snel voor je op.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=warranty-claim" size="lg">
              Claim Indienen
            </Button>
            <Button href="/support" variant="outline" size="lg">
              Support Center
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
