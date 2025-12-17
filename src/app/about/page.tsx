import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over PhantomVault | Privacy & Security Experts',
  description: 'Leer meer over PhantomVault - het bedrijf achter de veiligste privacy telefoons en laptops ter wereld.',
};

const timeline = [
  {
    year: '2019',
    title: 'De Oprichting',
    description: 'PhantomVault werd opgericht door een team van cybersecurity experts met een missie: privacy toegankelijk maken voor iedereen.',
  },
  {
    year: '2020',
    title: 'PhantomOS 1.0',
    description: 'Lancering van PhantomOS, ons eigen geharde besturingssysteem gebaseerd op Android zonder Google services.',
  },
  {
    year: '2021',
    title: 'Eerste Hardware',
    description: 'Introductie van de Phantom X1, onze eerste privacy-georiënteerde smartphone met dedicated security chip.',
  },
  {
    year: '2022',
    title: 'VaultOS & Laptops',
    description: 'Lancering van VaultOS en de Vault Book serie, uitbreiding naar beveiligde laptops voor professionals.',
  },
  {
    year: '2023',
    title: 'Enterprise Solutions',
    description: 'Introductie van enterprise oplossingen met MDM integratie en dedicated support voor bedrijven.',
  },
  {
    year: '2024',
    title: 'Phantom X1 Pro',
    description: 'Lancering van ons vlaggenschip met Titan M3 security chip en de meest geavanceerde beveiliging tot nu toe.',
  },
];

const team = [
  {
    name: 'Dr. Alexander Vries',
    role: 'CEO & Co-founder',
    bio: 'Voormalig security researcher bij NCSC met 15 jaar ervaring in cybersecurity.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-founder',
    bio: 'Ex-Google engineer gespecialiseerd in mobile security en hardware encryptie.',
  },
  {
    name: 'Marcus Weber',
    role: 'Head of Hardware',
    bio: 'Hardware security expert met ervaring bij Intel en Qualcomm security teams.',
  },
  {
    name: 'Elena Kowalski',
    role: 'Head of Software',
    bio: 'Open source advocate en lead developer achter GrapheneOS contributie.',
  },
];

const values = [
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Elke beslissing die we nemen begint met de vraag: beschermt dit de privacy van onze gebruikers?',
  },
  {
    icon: '🔍',
    title: 'Transparantie',
    description: 'Open source software, reproduceerbare builds en volledig auditeerbare systemen.',
  },
  {
    icon: '🛡️',
    title: 'Security by Design',
    description: 'Beveiliging is geen feature, het is de foundation van alles wat we bouwen.',
  },
  {
    icon: '🌍',
    title: 'Toegankelijkheid',
    description: 'Privacy mag geen luxe zijn. We werken aan producten voor elk budget.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Over PhantomVault</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Wij Geloven in een{' '}
            <span className="text-gradient-gold">Privé Toekomst</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            PhantomVault is opgericht met één missie: iedereen de tools geven om hun 
            digitale privacy te beschermen. Zonder compromissen.
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Onze Missie</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Privacy is een <span className="text-gradient-gold">Mensenrecht</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              In een wereld waar big tech bedrijven elk aspect van ons digitale leven 
              tracken, geloven wij dat er een alternatief moet zijn. PhantomVault 
              bouwt hardware en software die jouw privacy beschermt - niet exploiteert.
            </p>
            <p className="text-gray-400 text-lg mb-6">
              We verzamelen geen data. We verkopen geen data. We gebruiken geen 
              advertenties. Onze enige business model is het verkopen van 
              hoogwaardige privacy-hardware aan mensen die hun vrijheid waarderen.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-4xl font-bold text-gradient-gold">50K+</div>
                <div className="text-gray-500">Tevreden Klanten</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-gold">0</div>
                <div className="text-gray-500">Data Verzameling</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-gold">100%</div>
                <div className="text-gray-500">Open Source</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center glow-gold">
              <div className="text-9xl opacity-30">🛡️</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Onze Waarden</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Wat Ons Drijft
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Onze Reis</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Van Startup tot <span className="text-gradient-gold">Security Leader</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1a1a1a] transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <Card className="inline-block text-left">
                    <div className="text-[#D4AF37] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#D4AF37] rounded-full transform -translate-x-1/2 border-4 border-[#0a0a0a]" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Ons Team</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            De Mensen Achter PhantomVault
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Een team van gepassioneerde security experts, engineers en privacy advocates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <div className="text-[#D4AF37] text-sm mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Certificeringen</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gevalideerde Beveiliging
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Onze producten en processen zijn gecertificeerd door toonaangevende 
            security organisaties wereldwijd.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'ISO 27001', description: 'Information Security Management' },
            { name: 'SOC 2 Type II', description: 'Security & Availability' },
            { name: 'FIPS 140-3', description: 'Cryptographic Module Validation' },
            { name: 'Common Criteria', description: 'EAL4+ Certification' },
          ].map((cert, index) => (
            <Card key={index} className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Wil je Deel Uitmaken van Onze Missie?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We zijn altijd op zoek naar getalenteerde mensen die gepassioneerd zijn over 
            privacy en security. Bekijk onze openstaande posities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/careers">Bekijk Vacatures</Button>
            <Button href="/contact" variant="outline">Neem Contact Op</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
