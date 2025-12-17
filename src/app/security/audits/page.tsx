import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security Audits | PhantomPrivacy',
  description: 'Bekijk de onafhankelijke security audits en certificeringen van PhantomPrivacy producten.',
};

const audits = [
  {
    title: 'Penetratietest PhantomOS 3.0',
    auditor: 'NCC Group',
    date: 'November 2024',
    result: 'Geslaagd',
    findings: '0 kritieke, 2 medium, 5 laag',
    report: '#',
  },
  {
    title: 'Hardware Security Review',
    auditor: 'Trail of Bits',
    date: 'Oktober 2024',
    result: 'Geslaagd',
    findings: '0 kritieke, 1 medium, 3 laag',
    report: '#',
  },
  {
    title: 'Cryptografische Audit',
    auditor: 'Cure53',
    date: 'September 2024',
    result: 'Geslaagd',
    findings: '0 kritieke, 0 medium, 2 laag',
    report: '#',
  },
  {
    title: 'Code Review PhantomOS Kernel',
    auditor: 'Quarkslab',
    date: 'Augustus 2024',
    result: 'Geslaagd',
    findings: '0 kritieke, 3 medium, 8 laag',
    report: '#',
  },
];

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management', icon: '🏆' },
  { name: 'SOC 2 Type II', description: 'Security & Availability', icon: '✅' },
  { name: 'Common Criteria EAL4+', description: 'Hardware Security Module', icon: '🛡️' },
  { name: 'FIPS 140-3', description: 'Cryptographic Module Validation', icon: '🔐' },
];

export default function SecurityAuditsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Transparantie</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Security <span className="text-gradient-gold">Audits</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Transparantie is essentieel voor vertrouwen. Bekijk onze onafhankelijke 
            security audits en certificeringen.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="text-center mb-10">
          <Badge className="mb-3">Certificeringen</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Internationale Standaarden
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} padding="md" className="text-center">
              <div className="text-3xl sm:text-4xl mb-3">{cert.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{cert.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Audits List */}
      <Section>
        <div className="text-center mb-10">
          <Badge className="mb-3">Audit Rapporten</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Onafhankelijke Reviews
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Al onze producten worden regelmatig geaudit door toonaangevende 
            security bedrijven.
          </p>
        </div>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {audits.map((audit, index) => (
            <Card key={index} padding="md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{audit.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                    <span>Auditor: <span className="text-white">{audit.auditor}</span></span>
                    <span>Datum: <span className="text-white">{audit.date}</span></span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Bevindingen: {audit.findings}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {audit.result}
                  </span>
                  <Button variant="outline" size="sm" href={audit.report}>
                    Rapport
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Bug Bounty */}
      <Section className="bg-[#111111]/30">
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="text-center">
            <Badge className="mb-4" variant="gold">Bug Bounty</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Bug Bounty Programma
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Help ons veiliger te worden. We belonen onderzoekers die kwetsbaarheden 
              vinden met beloningen tot €50.000.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">€50.000</div>
                <div className="text-gray-500 text-sm">Max. beloning</div>
              </div>
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">48 uur</div>
                <div className="text-gray-500 text-sm">Response tijd</div>
              </div>
              <div className="p-4 bg-[#0a0a0a] rounded-lg">
                <div className="text-2xl font-bold text-[#D4AF37]">127</div>
                <div className="text-gray-500 text-sm">Bugs gevonden</div>
              </div>
            </div>
            <Button href="/contact?type=security">
              Meld een Kwetsbaarheid
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Vragen over onze beveiliging?
          </h2>
          <p className="text-gray-400 mb-6">
            Ons security team staat klaar om je vragen te beantwoorden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=security" size="lg">
              Contact Security Team
            </Button>
            <Button href="/technology" variant="outline" size="lg">
              Bekijk Onze Technologie
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
