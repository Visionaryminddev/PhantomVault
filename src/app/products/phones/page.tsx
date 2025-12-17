import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Telefoons | PhantomPrivacy',
  description: 'Ontdek onze premium privacy telefoons met militaire encryptie, PhantomOS en hardware security modules.',
};

const phones = [
  {
    id: 'phantom-x1-pro',
    name: 'Phantom X1 Pro',
    price: '€1.299',
    originalPrice: '€1.499',
    description: 'Ons absolute vlaggenschip. De Phantom X1 Pro combineert de nieuwste Snapdragon processor met onze meest geavanceerde beveiligingstechnologie. Met de Titan M3 security chip zijn je cryptografische sleutels, biometrische data en gevoelige informatie beschermd tegen zelfs de meest geavanceerde aanvallen.',
    image: '📱',
    specs: {
      display: '6.7" LTPO AMOLED, 120Hz, 3200x1440',
      processor: 'Qualcomm Snapdragon 8 Gen 3',
      memory: '12GB LPDDR5X RAM',
      storage: '256GB / 512GB UFS 4.0',
      battery: '5000mAh, 65W fast charging',
      camera: '50MP main + 48MP ultra-wide + 12MP telephoto',
      security: 'Titan M3 Security Chip, Hardware-backed Keystore',
      os: 'PhantomOS 4.0 (Android 14 based)',
    },
    features: [
      'Titan M3 Security Chip',
      'Hardware Kill Switches (mic, camera, baseband)',
      'Tamper-evident boot',
      'FIPS 140-3 validated encryption',
      'Secure Element for key storage',
      'Anti-forensic data protection',
    ],
    badge: 'Flagship',
    inStock: true,
  },
  {
    id: 'phantom-x1',
    name: 'Phantom X1',
    price: '€899',
    originalPrice: null,
    description: 'De perfecte balans tussen premium beveiliging en waarde. De Phantom X1 biedt dezelfde compromisloze privacy als onze Pro-modellen, maar dan in een meer toegankelijk pakket. Ideaal voor privacy-bewuste gebruikers die geen concessies willen doen.',
    image: '📱',
    specs: {
      display: '6.5" AMOLED, 90Hz, 2400x1080',
      processor: 'Qualcomm Snapdragon 8 Gen 2',
      memory: '8GB LPDDR5 RAM',
      storage: '128GB / 256GB UFS 3.1',
      battery: '4700mAh, 45W fast charging',
      camera: '50MP main + 12MP ultra-wide',
      security: 'Hardware Security Module (HSM)',
      os: 'PhantomOS 4.0 (Android 14 based)',
    },
    features: [
      'Hardware Security Module',
      'Software Kill Switches',
      'Verified boot with rollback protection',
      'AES-256 full-disk encryption',
      'Secure key storage',
      'Network traffic analysis protection',
    ],
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'phantom-lite',
    name: 'Phantom Lite',
    price: '€599',
    originalPrice: null,
    description: 'Privacy toegankelijk voor iedereen. De Phantom Lite biedt alle essentiële beveiligingsfeatures van PhantomPrivacy in een betaalbaar pakket. Perfect voor wie de overstap wil maken naar privacy-georiënteerde technologie.',
    image: '📱',
    specs: {
      display: '6.1" OLED, 60Hz, 2340x1080',
      processor: 'Qualcomm Snapdragon 7 Gen 2',
      memory: '6GB LPDDR5 RAM',
      storage: '128GB UFS 3.1',
      battery: '4300mAh, 33W fast charging',
      camera: '50MP main + 8MP ultra-wide',
      security: 'Secure Enclave',
      os: 'PhantomOS 4.0 (Android 14 based)',
    },
    features: [
      'Secure Enclave',
      'Software-based security features',
      'Verified boot',
      'Full-disk encryption',
      'Privacy-focused app sandbox',
      'Minimal pre-installed apps',
    ],
    badge: 'Value',
    inStock: true,
  },
];

export default function PhonesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-[#D4AF37] mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar Producten
          </Link>
          
          <Badge className="mb-6">Privacy Telefoons</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-gradient-gold">Privacy</span> Telefoons
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Onze telefoons draaien op PhantomOS - een geharde, Google-vrije Android ervaring. 
            Met hardware security modules en end-to-end encryptie is jouw communicatie altijd beschermd.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <Section>
        <div className="space-y-16">
          {phones.map((phone, index) => (
            <div key={phone.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center relative group">
                  <div className="text-[12rem] opacity-30 group-hover:opacity-50 transition-opacity">
                    {phone.image}
                  </div>
                  <Badge className="absolute top-6 right-6" variant={phone.badge === 'Flagship' ? 'gold' : 'dark'}>
                    {phone.badge}
                  </Badge>
                  {phone.inStock && (
                    <Badge className="absolute top-6 left-6" variant="success">
                      Op Voorraad
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{phone.name}</h2>
                
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-gradient-gold">{phone.price}</span>
                  {phone.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{phone.originalPrice}</span>
                  )}
                </div>
                
                <p className="text-gray-400 text-lg mb-8">{phone.description}</p>
                
                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Belangrijkste Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {phone.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Specs Preview */}
                <Card className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Specificaties</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Display</span>
                      <p className="text-gray-300">{phone.specs.display}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Processor</span>
                      <p className="text-gray-300">{phone.specs.processor}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Geheugen</span>
                      <p className="text-gray-300">{phone.specs.memory}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Opslag</span>
                      <p className="text-gray-300">{phone.specs.storage}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Security</span>
                      <p className="text-gray-300">{phone.specs.security}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">OS</span>
                      <p className="text-gray-300">{phone.specs.os}</p>
                    </div>
                  </div>
                </Card>
                
                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button href={`/products/phones/${phone.id}`} size="lg">
                    Bestel Nu
                  </Button>
                  <Button href={`/products/phones/${phone.id}`} variant="secondary" size="lg">
                    Meer Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PhantomOS Section */}
      <Section className="bg-[#111111]/50">
        <div className="text-center mb-12">
          <Badge className="mb-4">PhantomOS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Het Besturingssysteem dat <span className="text-gradient-gold">Privacy Respecteert</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alle PhantomPrivacy telefoons draaien op PhantomOS - onze eigen, geharde versie van Android
            zonder Google services, tracking of backdoors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🚫',
              title: 'Geen Google Services',
              description: 'Volledig vrij van Google Play Services, tracking en data verzameling.',
            },
            {
              icon: '🔐',
              title: 'Hardened Security',
              description: 'Gebaseerd op GrapheneOS met extra beveiligingslagen en hardening.',
            },
            {
              icon: '🔄',
              title: 'Maandelijkse Updates',
              description: 'Regelmatige security patches en feature updates gedurende 5 jaar.',
            },
            {
              icon: '📦',
              title: 'Alternatieve App Stores',
              description: 'Compatibel met F-Droid, Aurora Store en directe APK installaties.',
            },
            {
              icon: '🛡️',
              title: 'App Sandboxing',
              description: 'Strikte isolatie tussen apps voorkomt data lekken en tracking.',
            },
            {
              icon: '🔍',
              title: 'Open Source',
              description: 'Volledig auditeerbaar en verifieerbaar door security onderzoekers.',
            },
          ].map((feature, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hulp Nodig bij je Keuze?</h2>
          <p className="text-gray-400 mb-8">
            Onze privacy-experts helpen je graag het juiste apparaat te vinden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact">Contact Opnemen</Button>
            <Button href="/faq" variant="outline">Bekijk FAQ</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
