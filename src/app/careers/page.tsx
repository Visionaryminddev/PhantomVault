import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrière | PhantomPrivacy',
  description: 'Word deel van het PhantomPrivacy team. Bekijk onze openstaande vacatures en bouw mee aan de toekomst van privacy.',
};

const openPositions = [
  {
    title: 'Senior Security Engineer',
    department: 'Engineering',
    location: 'Amsterdam / Remote',
    type: 'Fulltime',
    description: 'Help ons de meest beveiligde apparaten ter wereld te bouwen.',
  },
  {
    title: 'Mobile Developer (Android)',
    department: 'Engineering',
    location: 'Amsterdam / Remote',
    type: 'Fulltime',
    description: 'Ontwikkel PhantomOS en onze beveiligde apps.',
  },
  {
    title: 'Hardware Engineer',
    department: 'R&D',
    location: 'Amsterdam',
    type: 'Fulltime',
    description: 'Ontwerp de volgende generatie privacy hardware.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Support',
    location: 'Amsterdam / Remote',
    type: 'Fulltime',
    description: 'Help onze klanten het maximale uit hun apparaten te halen.',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Amsterdam',
    type: 'Fulltime',
    description: 'Vertel de wereld over het belang van digitale privacy.',
  },
];

const benefits = [
  { icon: '💰', title: 'Competitief Salaris', description: 'Marktconforme beloning met jaarlijkse bonus' },
  { icon: '🏠', title: 'Remote Werken', description: 'Flexibel werken vanuit huis of kantoor' },
  { icon: '📚', title: 'Leerbudget', description: '€2.000 per jaar voor persoonlijke ontwikkeling' },
  { icon: '🏥', title: 'Zorgverzekering', description: 'Volledige dekking voor jou en je gezin' },
  { icon: '🎮', title: 'Team Events', description: 'Regelmatige team uitjes en hackathons' },
  { icon: '📱', title: 'PhantomPrivacy Gear', description: 'Gratis toegang tot al onze producten' },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Carrière</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Bouw Mee aan de <span className="text-gradient-gold">Toekomst van Privacy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Word deel van een team dat gelooft dat privacy een fundamenteel recht is. 
            Samen bouwen we de tools die mensen beschermen.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-3 sm:mb-4">Waarom PhantomPrivacy?</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Voordelen & Benefits
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} padding="md" className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section>
        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-3 sm:mb-4">Openstaande Vacatures</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Vind Jouw Rol
          </h2>
        </div>
        
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <Card key={index} padding="md" className="group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{position.title}</h3>
                    <Badge variant="gold" size="sm">{position.type}</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{position.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </span>
                  </div>
                </div>
                <Button variant="secondary" href={`/contact?type=careers&position=${encodeURIComponent(position.title)}`}>
                  Solliciteer
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Geen passende vacature?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We zijn altijd op zoek naar talent. Stuur ons een open sollicitatie 
            en vertel ons wat jij kunt bijdragen aan onze missie.
          </p>
          <Button href="/contact?type=careers" size="lg">
            Open Sollicitatie
          </Button>
        </div>
      </Section>
    </main>
  );
}
