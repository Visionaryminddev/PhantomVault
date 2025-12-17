import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retourbeleid | PhantomPrivacy',
  description: 'Informatie over het retourneren van PhantomPrivacy producten en ons teruggavebeleid.',
};

const returnSteps = [
  {
    step: '1',
    title: 'Retour Aanvragen',
    description: 'Meld je retour binnen 14 dagen via ons contactformulier of per e-mail.',
  },
  {
    step: '2',
    title: 'Bevestiging Ontvangen',
    description: 'Je ontvangt een retourlabel en instructies per e-mail.',
  },
  {
    step: '3',
    title: 'Product Verzenden',
    description: 'Verpak het product veilig in de originele verpakking en stuur het retour.',
  },
  {
    step: '4',
    title: 'Terugbetaling',
    description: 'Na ontvangst en controle betalen we binnen 5 werkdagen terug.',
  },
];

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Klantenservice</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Retour<span className="text-gradient-gold">beleid</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Niet tevreden? Geen probleem. We maken retourneren zo eenvoudig mogelijk.
          </p>
        </div>
      </section>

      {/* Key Info */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">📦</div>
            <h3 className="text-lg font-semibold text-white mb-2">14 Dagen Bedenktijd</h3>
            <p className="text-gray-400 text-sm">Retourneer binnen 14 dagen na ontvangst</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">💰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Volledige Terugbetaling</h3>
            <p className="text-gray-400 text-sm">100% van de aankoopprijs terug</p>
          </Card>
          <Card padding="md" className="text-center">
            <div className="text-3xl sm:text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Snelle Verwerking</h3>
            <p className="text-gray-400 text-sm">Terugbetaling binnen 5 werkdagen</p>
          </Card>
        </div>
      </Section>

      {/* Return Process */}
      <Section>
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-3 sm:mb-4">Retourproces</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Hoe Retourneren Werkt
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {returnSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card padding="md" className="text-center h-full">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </Card>
              {index < returnSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#D4AF37]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Conditions */}
      <Section className="bg-[#111111]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Retourvoorwaarden
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="md">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Wel Retourneerbaar
              </h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Ongebruikte producten in originele verpakking</li>
                <li>• Producten met kleine gebruikssporen (voor testen)</li>
                <li>• Producten met fabrieksfouten</li>
                <li>• Verkeerd geleverde producten</li>
              </ul>
            </Card>
            
            <Card padding="md">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="text-red-400 mr-2">✗</span>
                Niet Retourneerbaar
              </h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Producten met duidelijke gebruiksschade</li>
                <li>• Producten zonder originele verpakking</li>
                <li>• Software licenties na activatie</li>
                <li>• Producten ouder dan 14 dagen</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Wil je een product retourneren?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Neem contact met ons op en we helpen je graag verder met je retour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=return" size="lg">
              Retour Aanvragen
            </Button>
            <Button href="/support" variant="outline" size="lg">
              Bekijk Support
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
