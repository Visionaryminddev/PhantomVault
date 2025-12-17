import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologie & Beveiliging | PhantomVault',
  description: 'Ontdek de geavanceerde beveiligingstechnologie achter PhantomVault producten - van hardware encryptie tot secure boot.',
};

const securityLayers = [
  {
    layer: 1,
    title: 'Hardware Security',
    description: 'Dedicated security chips, hardware kill switches en tamper-evident designs vormen de eerste verdedigingslinie.',
    features: [
      'Titan M3 / HSM Security Chip',
      'Hardware Kill Switches',
      'Tamper-evident boot verification',
      'Secure Element voor key storage',
    ],
    icon: '🔧',
  },
  {
    layer: 2,
    title: 'Firmware & BIOS',
    description: 'Coreboot-gebaseerde firmware met measured boot en rollback bescherming tegen supply chain aanvallen.',
    features: [
      'Coreboot open-source firmware',
      'Measured boot met PCR attestation',
      'BIOS-level tamper detection',
      'Rollback bescherming',
    ],
    icon: '⚙️',
  },
  {
    layer: 3,
    title: 'Operating System',
    description: 'PhantomOS en VaultOS zijn geharde besturingssystemen zonder tracking, met strikte sandboxing en encryptie.',
    features: [
      'Geen Google/telemetry services',
      'Mandatory Access Control',
      'App sandboxing & isolation',
      'Automatic security updates',
    ],
    icon: '🖥️',
  },
  {
    layer: 4,
    title: 'Network Security',
    description: 'Ingebouwde VPN, Tor integratie en DNS-over-HTTPS beschermen je netwerkverkeer tegen surveillance.',
    features: [
      'WireGuard VPN integratie',
      'Tor routing support',
      'DNS-over-HTTPS',
      'Firewall by default',
    ],
    icon: '🌐',
  },
  {
    layer: 5,
    title: 'Data Encryption',
    description: 'AES-256 encryptie voor data at rest, TLS 1.3 voor data in transit, en zero-knowledge cloud sync.',
    features: [
      'AES-256 full-disk encryption',
      'Hardware-backed key storage',
      'Zero-knowledge cloud backup',
      'Secure file sharing',
    ],
    icon: '🔐',
  },
];

const technologies = [
  {
    name: 'PhantomOS',
    type: 'Mobile OS',
    description: 'Ons geharde Android-gebaseerde besturingssysteem voor smartphones. Gebouwd op de foundation van GrapheneOS met extra beveiligingslagen en privacy features.',
    features: [
      'Google-vrij Android ervaring',
      'Hardware security module integratie',
      'Verified boot met anti-rollback',
      'Strikte app permissions',
      'Network permission control per-app',
      'Sensor permissions (accelerometer, etc.)',
    ],
  },
  {
    name: 'VaultOS',
    type: 'Desktop OS',
    description: 'Onze geharde Debian-gebaseerde Linux distributie voor laptops. Geoptimaliseerd voor beveiliging en privacy zonder in te leveren op gebruiksgemak.',
    features: [
      'LUKS2 full-disk encryption',
      'AppArmor & Firejail sandboxing',
      'Tor Browser geïntegreerd',
      'Secure boot met measured launch',
      'UFW firewall preconfigured',
      'Reproducible builds',
    ],
  },
  {
    name: 'Titan Security Chip',
    type: 'Hardware',
    description: 'Onze eigen security co-processor voor key management, secure boot verification en tamper detection.',
    features: [
      'FIPS 140-3 Level 3 certified',
      'Isolated secure enclave',
      'Hardware random number generator',
      'Side-channel attack resistance',
      'Physical tamper detection',
      'Secure key derivation',
    ],
  },
  {
    name: 'PhantomCloud',
    type: 'Cloud Service',
    description: 'Zero-knowledge encrypted cloud sync voor je PhantomVault apparaten. Wij kunnen je data niet lezen, zelfs als we dat willen.',
    features: [
      'Client-side encryption',
      'Zero-knowledge architecture',
      'End-to-end encrypted sync',
      'No metadata collection',
      'GDPR compliant',
      'Swiss data centers',
    ],
  },
];

const comparisons = [
  { feature: 'Google Services', phantom: 'Geen', competitor: 'Standaard', description: 'Geen tracking door big tech' },
  { feature: 'Hardware Security Chip', phantom: '✓', competitor: 'Sommige', description: 'Dedicated security processor' },
  { feature: 'Hardware Kill Switches', phantom: '✓', competitor: '✗', description: 'Fysieke mic/camera uitschakeling' },
  { feature: 'Open Source OS', phantom: '100%', competitor: 'Deels', description: 'Volledig auditeerbaar' },
  { feature: 'Verified Boot', phantom: '✓', competitor: '✓', description: 'Boot integrity verificatie' },
  { feature: 'Rollback Protection', phantom: '✓', competitor: 'Variabel', description: 'Bescherming tegen downgrade attacks' },
  { feature: 'Per-App Network', phantom: '✓', competitor: '✗', description: 'Netwerk controle per applicatie' },
  { feature: 'Zero-Knowledge Cloud', phantom: '✓', competitor: '✗', description: 'Encrypted cloud zonder toegang' },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Technologie & Beveiliging</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Beveiliging op{' '}
            <span className="text-gradient-gold">Elk Niveau</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Van hardware tot cloud - ontdek de meerdere lagen van beveiliging die 
            elk PhantomVault apparaat tot een fortress maken voor je data.
          </p>
        </div>
      </section>

      {/* Security Layers */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Defense in Depth</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            5 Lagen van Beveiliging
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Onze defense-in-depth strategie betekent dat zelfs als één laag gecompromitteerd 
            wordt, de volgende lagen je data blijven beschermen.
          </p>
        </div>
        
        <div className="space-y-8">
          {securityLayers.map((layer, index) => (
            <div key={index} className="relative">
              <Card className="grid md:grid-cols-[auto_1fr_1fr] gap-6 items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center text-3xl">
                    {layer.icon}
                  </div>
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold text-xl">{layer.layer}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                  <p className="text-gray-400">{layer.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {layer.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
              
              {/* Connector */}
              {index < securityLayers.length - 1 && (
                <div className="absolute left-[3.5rem] -bottom-4 h-8 w-0.5 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Onze Stack</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologieën die <span className="text-gradient-gold">Beschermen</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                <Badge variant="dark">{tech.type}</Badge>
              </div>
              <p className="text-gray-400 mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Vergelijking</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            PhantomVault vs. <span className="text-gradient-gold">Standaard Smartphones</span>
          </h2>
        </div>
        
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 text-[#D4AF37] font-bold">PhantomVault</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">Standaard</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-[#1a1a1a] last:border-0">
                    <td className="py-4 px-6">
                      <div className="font-medium text-white">{row.feature}</div>
                      <div className="text-sm text-gray-500">{row.description}</div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="text-[#D4AF37] font-semibold">{row.phantom}</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="text-gray-400">{row.competitor}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Section>

      {/* Open Source */}
      <Section className="bg-[#111111]/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Open Source</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transparantie door <span className="text-gradient-gold">Open Source</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Wij geloven dat security through obscurity geen echte security is. 
              Daarom is al onze software open source en volledig auditeerbaar. 
              Je hoeft ons niet te vertrouwen - je kunt de code zelf controleren.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Volledige broncode beschikbaar op GitHub',
                'Reproducible builds voor verificatie',
                'Regelmatige security audits door derden',
                'Bug bounty programma voor onderzoekers',
                'Actieve community van contributors',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button href="https://github.com/phantomvault" variant="secondary">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
              <Button href="/security/audits" variant="outline">
                Security Audits
              </Button>
            </div>
          </div>
          
          <Card className="p-8 font-mono text-sm">
            <div className="text-gray-500 mb-4"># Verify PhantomOS build</div>
            <div className="text-[#D4AF37]">$ sha256sum phantomos-4.0.img</div>
            <div className="text-gray-300 mt-2 break-all">
              a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3...
            </div>
            <div className="text-gray-500 mt-4"># Compare with signed hash</div>
            <div className="text-[#D4AF37]">$ gpg --verify phantomos-4.0.img.sig</div>
            <div className="text-green-400 mt-2">
              Good signature from &quot;PhantomVault &lt;security@phantomvault.com&gt;&quot;
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Klaar om je Beveiliging te <span className="text-gradient-gold">Upgraden</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Ervaar de meest geavanceerde privacy-technologie in de palm van je hand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/products" size="lg">Bekijk Producten</Button>
            <Button href="/contact" variant="outline" size="lg">Stel een Vraag</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
