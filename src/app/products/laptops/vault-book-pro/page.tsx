import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vault Book Pro | PhantomPrivacy',
  description: 'Ultieme privacy laptop met Intel Core Ultra 9, 32GB RAM en hardwarematige beveiliging.',
};

const product = {
  name: 'Vault Book Pro',
  price: '€2.499',
  originalPrice: '€2.799',
  description: 'Het absolute topmodel voor professionals die maximale prestaties en ongecompromitteerde beveiliging eisen. De Vault Book Pro combineert de nieuwste Intel processors met onze meest geavanceerde beveiligingstechnologie.',
  highlights: [
    'Intel Core Ultra 9 185H processor',
    '32GB LPDDR5X RAM (8400MHz)',
    'Hardware Kill Switches voor camera, mic en WiFi',
    'TPM 2.0 + Secure Enclave co-processor',
    '15.6" 3K OLED display (120Hz)',
    'VaultOS 2.0 voorgeïnstalleerd',
  ],
};

const specs = {
  display: [
    { name: 'Schermgrootte', value: '15.6 inch' },
    { name: 'Type', value: 'OLED' },
    { name: 'Resolutie', value: '2880 x 1800 (3K)' },
    { name: 'Refresh Rate', value: '120Hz' },
    { name: 'Helderheid', value: '600 nits HDR' },
    { name: 'Kleurruimte', value: '100% DCI-P3' },
    { name: 'Privacy Filter', value: 'Hardware (schakelbaar)' },
  ],
  processor: [
    { name: 'CPU', value: 'Intel Core Ultra 9 185H' },
    { name: 'Cores/Threads', value: '16 cores / 22 threads' },
    { name: 'P-Core Clock', value: '2.3 - 5.1 GHz' },
    { name: 'E-Core Clock', value: '1.8 - 3.8 GHz' },
    { name: 'Cache', value: '24MB Intel Smart Cache' },
    { name: 'NPU', value: 'Intel AI Boost (34 TOPS)' },
  ],
  memory: [
    { name: 'RAM', value: '32GB LPDDR5X' },
    { name: 'Snelheid', value: '8400MHz' },
    { name: 'Type', value: 'Soldered (on-board)' },
    { name: 'SSD', value: '1TB / 2TB PCIe 4.0 NVMe' },
    { name: 'SSD Encryptie', value: 'Hardware AES-256' },
  ],
  graphics: [
    { name: 'Integrated', value: 'Intel Arc Graphics' },
    { name: 'Dedicated', value: 'NVIDIA RTX 4070 (optioneel)' },
    { name: 'VRAM', value: '8GB GDDR6' },
  ],
  security: [
    { name: 'TPM', value: '2.0 (discrete chip)' },
    { name: 'Co-processor', value: 'Secure Enclave' },
    { name: 'Kill Switches', value: 'Camera, Mic, WiFi (hardware)' },
    { name: 'BIOS', value: 'Coreboot (open-source)' },
    { name: 'Firmware', value: 'Signed & verified boot' },
    { name: 'Biometrie', value: 'Fingerprint + IR camera' },
  ],
  battery: [
    { name: 'Capaciteit', value: '99.9Wh' },
    { name: 'Batterijduur', value: 'Tot 14 uur' },
    { name: 'Opladen', value: '140W USB-C PD' },
    { name: 'Snel Opladen', value: '50% in 30 min' },
  ],
  connectivity: [
    { name: 'WiFi', value: 'WiFi 7 (802.11be)' },
    { name: 'Bluetooth', value: '5.4' },
    { name: 'Thunderbolt', value: '2x Thunderbolt 4' },
    { name: 'USB', value: '2x USB-A 3.2, 1x USB-C 3.2' },
    { name: 'HDMI', value: '2.1' },
    { name: 'Audio', value: '3.5mm combo jack' },
    { name: 'SD Card', value: 'SD Express 7.0' },
  ],
  physical: [
    { name: 'Afmetingen', value: '354 x 235 x 17.9 mm' },
    { name: 'Gewicht', value: '1.85 kg' },
    { name: 'Materiaal', value: 'CNC Aluminium, Carbon Fiber' },
    { name: 'Kleur', value: 'Phantom Black, Vault Silver' },
    { name: 'MIL-STD', value: 'MIL-STD-810H gecertificeerd' },
  ],
};

const features = [
  {
    icon: '🔐',
    title: 'Secure Enclave Co-Processor',
    description: 'Dedicated security chip die cryptografische operaties uitvoert in een geïsoleerde omgeving. Sleutels verlaten nooit de secure enclave.',
  },
  {
    icon: '🔌',
    title: 'Hardware Kill Switches',
    description: 'Drie fysieke schakelaars onderbreken de stroomtoevoer naar camera, microfoon en WiFi/Bluetooth. Geen software kan deze componenten reactiveren.',
  },
  {
    icon: '👁️',
    title: 'Privacy Display',
    description: 'Schakelbaar privacy filter maakt je scherm onleesbaar voor mensen naast je. Perfect voor werken in openbare ruimtes.',
  },
  {
    icon: '💻',
    title: 'Coreboot BIOS',
    description: 'Open-source firmware vervangt proprietary BIOS. Volledig auditeerbaar, geen verborgen backdoors, verified boot chain.',
  },
  {
    icon: '🔒',
    title: 'Full Disk Encryption',
    description: 'Hardware-accelerated AES-256 encryptie met TPM-backed key storage. Zelfs bij diefstal zijn je gegevens veilig.',
  },
  {
    icon: '🛡️',
    title: 'VaultOS 2.0',
    description: 'Geharde Linux-distributie geoptimaliseerd voor privacy en security. Inclusief compartimentalisatie, app sandboxing en secure networking.',
  },
];

const inBox = [
  'Vault Book Pro',
  '140W USB-C oplader',
  'USB-C naar USB-C kabel (2m)',
  'VaultOS Recovery USB',
  'Microvezel doekje',
  'Documentatie',
  'Quick Start Guide',
];

const configurations = [
  {
    name: 'Base',
    specs: 'Core Ultra 9 / 32GB / 1TB SSD / Intel Arc',
    price: '€2.499',
    selected: true,
  },
  {
    name: 'Performance',
    specs: 'Core Ultra 9 / 32GB / 2TB SSD / RTX 4070',
    price: '€2.999',
    selected: false,
  },
  {
    name: 'Ultimate',
    specs: 'Core Ultra 9 / 64GB / 4TB SSD / RTX 4070',
    price: '€3.499',
    selected: false,
  },
];

export default function VaultBookProPage() {
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
          <span className="text-gray-300">Vault Book Pro</span>
        </nav>
      </div>

      {/* Product Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="sticky top-24">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center relative glow-gold">
              <div className="text-[12rem] opacity-40">💻</div>
              <Badge className="absolute top-6 left-6" variant="gold">Flagship</Badge>
              <Badge className="absolute top-6 right-6" variant="success">Op Voorraad</Badge>
            </div>
            
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-16 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <span className="text-xl opacity-30">💻</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4">Privacy Laptop</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-gradient-gold">{product.price}</span>
              <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              <Badge variant="gold">Bespaar €300</Badge>
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
            
            {/* Configuration Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Configuratie</label>
              <div className="space-y-3">
                {configurations.map((config, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-lg border text-left transition-colors ${
                      config.selected
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37]'
                        : 'bg-[#111111] border-[#1a1a1a] hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className={`font-semibold ${config.selected ? 'text-[#D4AF37]' : 'text-white'}`}>
                          {config.name}
                        </span>
                        <p className="text-sm text-gray-500 mt-1">{config.specs}</p>
                      </div>
                      <span className={`font-bold ${config.selected ? 'text-[#D4AF37]' : 'text-white'}`}>
                        {config.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Color Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Kleur</label>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-black border-2 border-[#D4AF37] rounded-full" title="Phantom Black" />
                <button className="w-12 h-12 bg-gray-400 border-2 border-transparent rounded-full hover:border-[#D4AF37] transition-colors" title="Vault Silver" />
              </div>
            </div>
            
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
                3 jaar garantie
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Features */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Beveiliging</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enterprise-Grade <span className="text-gradient-gold">Security</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Specifications */}
      <Section>
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
      <Section className="bg-[#111111]/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">In de Doos</Badge>
            <h2 className="text-3xl font-bold text-white mb-6">
              Compleet Werkstation
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
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Vergelijk Modellen</h2>
          <p className="text-gray-400">Ontdek welke Vault Book past bij jouw behoeften</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" href="/products/laptops/vault-book">
            Bekijk Vault Book
          </Button>
          <Button variant="outline" href="/products/laptops/vault-book-air">
            Bekijk Vault Book Air
          </Button>
          <Button variant="outline" href="/products/laptops">
            Alle Laptops
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <Card className="p-12 text-center glow-gold">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor Ultieme Privacy?
          </h2>
          <p className="text-gray-400 mb-8">
            Bestel vandaag en ontvang je Vault Book Pro binnen 3-5 werkdagen.
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
