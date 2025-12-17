import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Laptops | PhantomVault',
  description: 'Ontdek onze premium privacy laptops met hardware encryptie, secure boot en geharde Linux-distributies.',
};

const laptops = [
  {
    id: 'vault-book-pro',
    name: 'Vault Book Pro',
    price: '€2.499',
    originalPrice: '€2.799',
    description: 'Het ultieme werkstation voor professionals die maximale beveiliging en prestaties eisen. De Vault Book Pro combineert de kracht van een Intel Core i9 processor met enterprise-grade beveiligingsfeatures. Met hardware encryptie, secure boot verificatie en een geharde VaultOS distributie is dit de laptop voor wie geen compromissen sluit.',
    image: '💻',
    specs: {
      display: '15.6" 4K OLED, 120Hz, 3840x2160, 100% DCI-P3',
      processor: 'Intel Core i9-13900H (14 cores, 20 threads)',
      memory: '32GB DDR5-5600MHz (upgradeable to 64GB)',
      storage: '1TB NVMe PCIe 4.0 SSD (hardware encrypted)',
      graphics: 'Intel Iris Xe Graphics / NVIDIA RTX 4060 (8GB)',
      battery: '99.9Wh, up to 12 hours',
      security: 'TPM 2.0, Secure BIOS, Hardware Kill Switches',
      os: 'VaultOS (Debian-based) / Windows 11 Pro (optional)',
    },
    features: [
      'Hardware Kill Switches (webcam, mic, WiFi)',
      'TPM 2.0 Security Chip',
      'Hardware Encrypted NVMe SSD',
      'Secure Boot with Measured Launch',
      'BIOS-level tamper detection',
      'Physical privacy shutter for webcam',
      'Fingerprint reader in power button',
      'Kensington lock slot',
    ],
    badge: 'Professional',
    inStock: true,
  },
  {
    id: 'vault-book-air',
    name: 'Vault Book Air',
    price: '€1.699',
    originalPrice: null,
    description: 'Ultraportable beveiliging zonder compromissen. De Vault Book Air weegt slechts 1.2kg maar biedt dezelfde enterprise-grade beveiliging als onze Pro-modellen. Perfect voor de mobiele professional die overal veilig wil kunnen werken.',
    image: '💻',
    specs: {
      display: '14" 2K IPS, 90Hz, 2560x1600, 100% sRGB',
      processor: 'Intel Core i7-1365U (10 cores, 12 threads)',
      memory: '16GB LPDDR5-6400MHz (soldered)',
      storage: '512GB NVMe PCIe 4.0 SSD (hardware encrypted)',
      graphics: 'Intel Iris Xe Graphics',
      battery: '72Wh, up to 15 hours',
      security: 'TPM 2.0, Secure BIOS, Software Kill Switches',
      os: 'VaultOS (Debian-based) / Windows 11 Pro (optional)',
    },
    features: [
      'Software Kill Switches',
      'TPM 2.0 Security Chip',
      'Hardware Encrypted SSD',
      'Secure Boot',
      'Physical webcam shutter',
      'Fingerprint reader',
      'MagSafe-style charging',
      'Thunderbolt 4 support',
    ],
    badge: 'Portable',
    inStock: true,
  },
  {
    id: 'vault-book',
    name: 'Vault Book',
    price: '€1.199',
    originalPrice: null,
    description: 'Solide beveiliging voor dagelijks gebruik. De Vault Book biedt alle essentiële beveiligingsfeatures in een betrouwbaar en betaalbaar pakket. Ideaal voor studenten, freelancers en iedereen die privacy serieus neemt.',
    image: '💻',
    specs: {
      display: '14" Full HD IPS, 60Hz, 1920x1080, 72% NTSC',
      processor: 'Intel Core i5-1335U (10 cores, 12 threads)',
      memory: '16GB DDR4-3200MHz (upgradeable)',
      storage: '256GB / 512GB NVMe PCIe 3.0 SSD',
      graphics: 'Intel Iris Xe Graphics',
      battery: '57Wh, up to 10 hours',
      security: 'TPM 2.0, Secure Boot',
      os: 'VaultOS (Debian-based) / Windows 11 (optional)',
    },
    features: [
      'TPM 2.0 Security Chip',
      'Full-disk encryption',
      'Secure Boot',
      'Physical webcam shutter',
      'Upgradeable RAM & Storage',
      'USB-C charging',
      'HDMI 2.0 output',
      'SD card reader',
    ],
    badge: 'Essential',
    inStock: true,
  },
];

export default function LaptopsPage() {
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
          
          <Badge className="mb-6">Privacy Laptops</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-gradient-gold">Privacy</span> Laptops
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Onze laptops combineren krachtige hardware met enterprise-grade beveiliging. 
            Met VaultOS, hardware kill switches en secure boot ben je altijd beschermd.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <Section>
        <div className="space-y-16">
          {laptops.map((laptop, index) => (
            <div key={laptop.id} className={`grid lg:grid-cols-2 gap-12 items-start`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-[#1a1a1a] flex items-center justify-center relative group">
                  <div className="text-[10rem] opacity-30 group-hover:opacity-50 transition-opacity">
                    {laptop.image}
                  </div>
                  <Badge className="absolute top-6 right-6" variant={laptop.badge === 'Professional' ? 'gold' : 'dark'}>
                    {laptop.badge}
                  </Badge>
                  {laptop.inStock && (
                    <Badge className="absolute top-6 left-6" variant="success">
                      Op Voorraad
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{laptop.name}</h2>
                
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-gradient-gold">{laptop.price}</span>
                  {laptop.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{laptop.originalPrice}</span>
                  )}
                </div>
                
                <p className="text-gray-400 text-lg mb-8">{laptop.description}</p>
                
                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Belangrijkste Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {laptop.features.map((feature, i) => (
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
                      <p className="text-gray-300">{laptop.specs.display}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Processor</span>
                      <p className="text-gray-300">{laptop.specs.processor}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Geheugen</span>
                      <p className="text-gray-300">{laptop.specs.memory}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Opslag</span>
                      <p className="text-gray-300">{laptop.specs.storage}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Security</span>
                      <p className="text-gray-300">{laptop.specs.security}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">OS</span>
                      <p className="text-gray-300">{laptop.specs.os}</p>
                    </div>
                  </div>
                </Card>
                
                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button href={`/products/laptops/${laptop.id}`} size="lg">
                    Bestel Nu
                  </Button>
                  <Button href={`/products/laptops/${laptop.id}`} variant="secondary" size="lg">
                    Meer Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VaultOS Section */}
      <Section className="bg-[#111111]/50">
        <div className="text-center mb-12">
          <Badge className="mb-4">VaultOS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Een OS Gebouwd voor <span className="text-gradient-gold">Beveiliging</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alle PhantomVault laptops komen met VaultOS - onze geharde Linux-distributie 
            gebaseerd op Debian met extra beveiligingslagen en privacy-tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🐧',
              title: 'Debian-Based',
              description: 'Gebouwd op de stabiele en veilige Debian foundation met security hardening.',
            },
            {
              icon: '🔒',
              title: 'Full-Disk Encryption',
              description: 'LUKS2 encryptie met secure key management via TPM of passphrase.',
            },
            {
              icon: '🛡️',
              title: 'AppArmor & Firejail',
              description: 'Strikte applicatie sandboxing en mandatory access control.',
            },
            {
              icon: '🔥',
              title: 'Firewall by Default',
              description: 'UFW firewall geconfigureerd met deny-all policy out of the box.',
            },
            {
              icon: '🧅',
              title: 'Tor Integration',
              description: 'Tor Browser en Onion routing geïntegreerd voor anoniem browsen.',
            },
            {
              icon: '📦',
              title: 'Reproducible Builds',
              description: 'Volledig reproduceerbare builds voor maximale transparantie.',
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

      {/* Enterprise Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Enterprise Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Oplossingen voor <span className="text-gradient-gold">Bedrijven</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Heeft uw organisatie behoefte aan beveiligde werkstations? PhantomVault biedt 
              enterprise oplossingen met volume kortingen, MDM integratie en dedicated support.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Volume kortingen vanaf 10 apparaten',
                'Custom configuraties en imaging',
                'MDM/EMM integratie ondersteuning',
                'On-site deployment en training',
                'Dedicated account manager',
                'Extended warranty opties',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/contact?type=enterprise">
              Enterprise Contact
            </Button>
          </div>
          
          <Card className="p-8 glow-gold">
            <h3 className="text-2xl font-bold text-white mb-6">Vraag een Offerte Aan</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Bedrijfsnaam"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="email"
                placeholder="Zakelijk e-mailadres"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Aantal apparaten"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <Button className="w-full">
                Offerte Aanvragen
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </main>
  );
}
