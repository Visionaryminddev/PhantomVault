import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phantom Lite | PhantomPrivacy',
  description: 'Betaalbare privacy smartphone met essentiële beveiliging en PhantomOS.',
};

const product = {
  name: 'Phantom Lite',
  price: '€549',
  originalPrice: '€599',
  description: 'Privacy hoeft niet duur te zijn. De Phantom Lite biedt essentiële privacy features voor iedereen, zonder concessies te doen aan kwaliteit of gebruiksgemak.',
  highlights: [
    'Secure Enclave voor veilige opslag',
    'PhantomOS 4.0 Lite - Google-vrij Android',
    'Privacy-first app ecosystem',
    '6.1" AMOLED display met 60Hz',
    'MediaTek Dimensity 7200 processor',
    '3 jaar security updates',
  ],
};

const specs = {
  display: [
    { name: 'Schermgrootte', value: '6.1 inch' },
    { name: 'Type', value: 'AMOLED' },
    { name: 'Resolutie', value: '2400 x 1080 pixels (FHD+)' },
    { name: 'Refresh Rate', value: '60Hz' },
    { name: 'Helderheid', value: '1100 nits peak' },
    { name: 'Bescherming', value: 'Gorilla Glass 5' },
  ],
  performance: [
    { name: 'Processor', value: 'MediaTek Dimensity 7200' },
    { name: 'CPU', value: '2x2.8GHz + 6x2.0GHz' },
    { name: 'GPU', value: 'Mali-G610 MC4' },
    { name: 'RAM', value: '6GB LPDDR5' },
    { name: 'Opslag', value: '128GB UFS 3.1' },
  ],
  camera: [
    { name: 'Hoofdcamera', value: '50MP, f/1.8' },
    { name: 'Ultrawide', value: '8MP, f/2.2' },
    { name: 'Frontcamera', value: '8MP, f/2.0' },
    { name: 'Video', value: '4K@30fps, 1080p@60fps' },
  ],
  security: [
    { name: 'Security', value: 'Secure Enclave' },
    { name: 'Encryptie', value: 'AES-256' },
    { name: 'Kill Switches', value: 'Software-based' },
    { name: 'Boot', value: 'Verified Boot' },
    { name: 'Biometrie', value: 'Side-mounted fingerprint' },
  ],
  battery: [
    { name: 'Capaciteit', value: '4500mAh' },
    { name: 'Snelladen', value: '33W wired' },
    { name: 'Reverse Charging', value: 'Nee' },
  ],
  connectivity: [
    { name: '5G', value: 'Sub-6GHz' },
    { name: 'WiFi', value: 'WiFi 6 (802.11ax)' },
    { name: 'Bluetooth', value: '5.2' },
    { name: 'NFC', value: 'Ja' },
    { name: 'USB', value: 'USB-C 2.0' },
  ],
  physical: [
    { name: 'Afmetingen', value: '152.8 x 71.2 x 8.0 mm' },
    { name: 'Gewicht', value: '172g' },
    { name: 'Water/stof', value: 'IP54' },
    { name: 'Materiaal', value: 'Polycarbonaat' },
  ],
};

const features = [
  {
    icon: '🔒',
    title: 'Secure Enclave',
    description: 'Geïsoleerde opslag voor je belangrijkste gegevens zoals wachtwoorden, 2FA codes en encryptiesleutels.',
  },
  {
    icon: '📱',
    title: 'PhantomOS Lite',
    description: 'Geoptimaliseerde versie van ons privacy-first besturingssysteem, zonder Google services en met volledige permission controle.',
  },
  {
    icon: '🛡️',
    title: 'App Sandboxing',
    description: 'Elke app draait in een geïsoleerde omgeving. Geen toegang tot andere apps of systeemdelen zonder expliciete toestemming.',
  },
  {
    icon: '🌐',
    title: 'Built-in VPN',
    description: '1 jaar gratis PhantomVPN inbegrepen. Bescherm je internetverkeer waar je ook bent.',
  },
];

const inBox = [
  'Phantom Lite',
  'USB-C kabel (1m)',
  '33W oplader',
  'SIM eject tool',
  'Quick Start Guide',
];

const comparison = [
  { feature: 'Security Chip', lite: 'Secure Enclave', x1: 'Titan M2', x1pro: 'Titan M3' },
  { feature: 'Kill Switches', lite: 'Software', x1: 'Hardware (2)', x1pro: 'Hardware (3)' },
  { feature: 'Display', lite: '6.1" FHD+ 60Hz', x1: '6.5" FHD+ 90Hz', x1pro: '6.7" QHD+ 120Hz' },
  { feature: 'Processor', lite: 'Dimensity 7200', x1: 'Snapdragon 8 Gen 2', x1pro: 'Snapdragon 8 Gen 3' },
  { feature: 'RAM', lite: '6GB', x1: '8GB', x1pro: '12GB' },
  { feature: 'Updates', lite: '3 jaar', x1: '4 jaar', x1pro: '5 jaar' },
];

export default function PhantomLitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D4AF37]">Producten</Link>
          <span className="mx-2">/</span>
          <Link href="/products/phones" className="hover:text-[#D4AF37]">Telefoons</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Phantom Lite</span>
        </nav>
      </div>

      {/* Product Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="sticky top-24">
            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center relative">
              <div className="text-[14rem] opacity-40">📱</div>
              <Badge className="absolute top-6 left-6" variant="success">Best Value</Badge>
              <Badge className="absolute top-6 right-6" variant="success">Op Voorraad</Badge>
            </div>
            
            <div className="flex gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <span className="text-2xl opacity-30">📱</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4">Budget Privacy</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-gradient-gold">{product.price}</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              <Badge variant="gold">Bespaar €50</Badge>
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
            
            {/* Color Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Kleur</label>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-black border-2 border-[#D4AF37] rounded-full" title="Carbon Black" />
                <button className="w-12 h-12 bg-white border-2 border-transparent rounded-full hover:border-[#D4AF37] transition-colors" title="Pearl White" />
                <button className="w-12 h-12 bg-blue-900 border-2 border-transparent rounded-full hover:border-[#D4AF37] transition-colors" title="Ocean Blue" />
              </div>
            </div>
            
            {/* VPN Bonus */}
            <Card className="mb-8 p-4 border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🎁</div>
                <div>
                  <p className="text-white font-semibold">1 Jaar Gratis PhantomVPN</p>
                  <p className="text-sm text-gray-400">Waarde €59,99 - Automatisch geactiveerd</p>
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

      {/* Security Features */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Privacy Voor Iedereen</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Essentiële <span className="text-gradient-gold">Beveiliging</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            De Phantom Lite bewijst dat privacy toegankelijk kan zijn zonder de bank te breken.
          </p>
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

      {/* Comparison Table */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Vergelijking</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Phantom Telefoon <span className="text-gradient-gold">Line-up</span>
          </h2>
        </div>
        
        <Card className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-[#D4AF37] font-bold">Lite (€549)</th>
                <th className="text-center py-4 px-4 text-gray-300 font-bold">X1 (€899)</th>
                <th className="text-center py-4 px-4 text-gray-300 font-bold">X1 Pro (€1.299)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={index} className="border-b border-[#1a1a1a] last:border-0">
                  <td className="py-4 px-4 text-gray-400">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-white bg-[#D4AF37]/5">{row.lite}</td>
                  <td className="py-4 px-4 text-center text-gray-300">{row.x1}</td>
                  <td className="py-4 px-4 text-center text-gray-300">{row.x1pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" href="/products/phones/phantom-x1">
            Bekijk X1
          </Button>
          <Button variant="outline" href="/products/phones/phantom-x1-pro">
            Bekijk X1 Pro
          </Button>
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
              Compleet Pakket
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

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <Card className="p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Privacy Begint Hier
          </h2>
          <p className="text-gray-400 mb-8">
            De perfecte instap in de wereld van privacy. Bestel vandaag nog je Phantom Lite.
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
