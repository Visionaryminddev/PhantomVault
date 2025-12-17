import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vault Book Air | PhantomVault',
  description: 'Ultra-lichte privacy laptop voor onderweg. Perfecte balans tussen portabiliteit en beveiliging.',
};

const product = {
  name: 'Vault Book Air',
  price: '€1.199',
  originalPrice: '€1.349',
  description: 'De ultieme reisgenoot voor privacy-bewuste professionals. De Vault Book Air combineert ons bewezen beveiligingsplatform met een ongelooflijk licht en dun ontwerp.',
  highlights: [
    'Intel Core Ultra 5 125U processor',
    '16GB LPDDR5 RAM',
    'Software-based privacy controls',
    'TPM 2.0 chip',
    '13.3" 2.5K IPS display',
    'VaultOS Lite voorgeïnstalleerd',
    'Slechts 1.1 kg!',
  ],
};

const specs = {
  display: [
    { name: 'Schermgrootte', value: '13.3 inch' },
    { name: 'Type', value: 'IPS LCD' },
    { name: 'Resolutie', value: '2560 x 1600 (2.5K)' },
    { name: 'Refresh Rate', value: '60Hz' },
    { name: 'Helderheid', value: '400 nits' },
    { name: 'Kleurruimte', value: '100% sRGB' },
  ],
  processor: [
    { name: 'CPU', value: 'Intel Core Ultra 5 125U' },
    { name: 'Cores/Threads', value: '12 cores / 14 threads' },
    { name: 'P-Core Clock', value: '1.3 - 4.3 GHz' },
    { name: 'E-Core Clock', value: '0.8 - 3.6 GHz' },
    { name: 'Cache', value: '12MB Intel Smart Cache' },
  ],
  memory: [
    { name: 'RAM', value: '16GB LPDDR5' },
    { name: 'Snelheid', value: '6400MHz' },
    { name: 'SSD', value: '256GB / 512GB PCIe 4.0 NVMe' },
    { name: 'SSD Encryptie', value: 'Software AES-256' },
  ],
  graphics: [
    { name: 'GPU', value: 'Intel Graphics' },
    { name: 'Type', value: 'Integrated' },
  ],
  security: [
    { name: 'TPM', value: '2.0' },
    { name: 'Kill Switches', value: 'Software-based' },
    { name: 'BIOS', value: 'UEFI met Secure Boot' },
    { name: 'Biometrie', value: 'Fingerprint sensor' },
    { name: 'Camera', value: 'Privacy shutter (fysiek)' },
  ],
  battery: [
    { name: 'Capaciteit', value: '54Wh' },
    { name: 'Batterijduur', value: 'Tot 15 uur' },
    { name: 'Opladen', value: '65W USB-C PD' },
  ],
  connectivity: [
    { name: 'WiFi', value: 'WiFi 6E (802.11ax)' },
    { name: 'Bluetooth', value: '5.3' },
    { name: 'USB-C', value: '2x USB-C 3.2 (1x Thunderbolt 4)' },
    { name: 'Audio', value: '3.5mm combo jack' },
  ],
  physical: [
    { name: 'Afmetingen', value: '297 x 210 x 14.9 mm' },
    { name: 'Gewicht', value: '1.1 kg' },
    { name: 'Materiaal', value: 'Magnesium-aluminium legering' },
    { name: 'Kleur', value: 'Lunar Silver, Starlight Gold' },
  ],
};

const features = [
  {
    icon: '🪶',
    title: 'Ultra Lichtgewicht',
    description: 'Met slechts 1.1 kg is de Vault Book Air een van de lichtste privacy laptops op de markt. Perfect voor onderweg.',
  },
  {
    icon: '🔒',
    title: 'Privacy Controls',
    description: 'Software-gebaseerde privacy controls voor camera, microfoon en locatie. Plus een fysieke camera shutter.',
  },
  {
    icon: '🔋',
    title: '15 Uur Batterij',
    description: 'Een volledige werkdag en meer op één lading. Ideaal voor lange vluchten of werkdagen zonder stopcontact.',
  },
  {
    icon: '💻',
    title: 'VaultOS Lite',
    description: 'Geoptimaliseerde versie van ons privacy OS, speciaal ontwikkeld voor maximale batterijduur en snelle prestaties.',
  },
];

const inBox = [
  'Vault Book Air',
  '65W USB-C oplader (compact)',
  'USB-C kabel',
  'Draagtas',
  'Quick Start Guide',
];

const useCases = [
  {
    icon: '✈️',
    title: 'Zakelijke Reizigers',
    description: 'Werk veilig vanuit vliegtuigen, hotels en cafés met onze privacy features.',
  },
  {
    icon: '📝',
    title: 'Schrijvers & Journalisten',
    description: 'Bescherm je bronnen en documenten met volledige disk encryptie.',
  },
  {
    icon: '👨‍💼',
    title: 'Remote Workers',
    description: 'Neem je beveiligde werkplek overal mee naartoe.',
  },
  {
    icon: '🎓',
    title: 'Studenten',
    description: 'Lichte, betaalbare privacy voor op de universiteit.',
  },
];

export default function VaultBookAirPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D4AF37]">Producten</Link>
          <span className="mx-2">/</span>
          <Link href="/products/laptops" className="hover:text-[#D4AF37]">Laptops</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Vault Book Air</span>
        </nav>
      </div>

      {/* Product Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="sticky top-24">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center relative">
              <div className="text-[12rem] opacity-40">💻</div>
              <Badge className="absolute top-6 left-6" variant="success">Ultra Light</Badge>
              <Badge className="absolute top-6 right-6" variant="success">Op Voorraad</Badge>
            </div>
            
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <span className="text-xl opacity-30">💻</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4">Ultrabook</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-gradient-gold">{product.price}</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              <Badge variant="gold">Bespaar €150</Badge>
            </div>
            
            <p className="text-lg text-gray-400 mb-8">{product.description}</p>
            
            <ul className="space-y-3 mb-8">
              {product.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
            
            {/* Storage Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Opslag</label>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg text-[#D4AF37] font-semibold">
                  256GB
                </button>
                <button className="px-6 py-3 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  512GB (+€100)
                </button>
              </div>
            </div>
            
            {/* Color Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Kleur</label>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gray-300 border-2 border-[#D4AF37] rounded-full" title="Lunar Silver" />
                <button className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] border-2 border-transparent rounded-full hover:border-[#D4AF37] transition-colors" title="Starlight Gold" />
              </div>
            </div>
            
            {/* Free bag banner */}
            <Card className="mb-8 p-4 border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🎁</div>
                <div>
                  <p className="text-white font-semibold">Gratis Draagtas</p>
                  <p className="text-sm text-gray-400">Premium laptoptas bij elke bestelling</p>
                </div>
              </div>
            </Card>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="flex-1 sm:flex-none">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Toevoegen aan Winkelwagen
              </Button>
              <Button size="lg" variant="secondary">
                Nu Kopen
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Gratis verzending
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                30 dagen retour
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2 jaar garantie
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Kenmerken</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Portabiliteit Ontmoet <span className="text-gradient-gold">Privacy</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Perfect Voor</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Wie Gebruikt de <span className="text-gradient-gold">Vault Book Air</span>?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400 text-sm">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Specifications */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Specificaties</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technische <span className="text-gradient-gold">Details</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(specs).map(([category, items]) => (
            <Card key={category}>
              <h3 className="text-lg font-bold text-white mb-4 capitalize">{category}</h3>
              <dl className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <dt className="text-gray-500">{item.name}</dt>
                    <dd className="text-gray-300 text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      {/* In the Box */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">In de Doos</Badge>
            <h2 className="text-3xl font-bold text-white mb-6">
              Klaar voor Onderweg
            </h2>
            <ul className="space-y-3">
              {inBox.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="aspect-video flex items-center justify-center">
            <div className="text-9xl opacity-30">📦</div>
          </Card>
        </div>
      </Section>

      {/* Compare */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Vergelijk Modellen</h2>
          <p className="text-gray-400">Kies de Vault Book die past bij jouw behoeften</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" href="/products/laptops/vault-book">
            Bekijk Vault Book
          </Button>
          <Button variant="outline" href="/products/laptops/vault-book-pro">
            Bekijk Vault Book Pro
          </Button>
          <Button variant="outline" href="/products/laptops">
            Alle Laptops
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Card className="p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Privacy, Overal
          </h2>
          <p className="text-gray-400 mb-8">
            Neem je beveiligde werkplek mee in de lichtste privacy laptop die er is.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Bestel Nu - {product.price}
            </Button>
            <Button size="lg" variant="outline" href="/contact">
              Vragen? Neem Contact Op
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
