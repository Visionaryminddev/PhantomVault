import { Button, Card, Badge, Section } from '@/components/ui';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | PhantomVault',
  description: 'Hulp nodig? Vind antwoorden in ons help center, documentatie of neem contact op met ons support team.',
};

const supportCategories = [
  {
    icon: '📱',
    title: 'PhantomOS',
    description: 'Handleidingen en troubleshooting voor ons mobiele besturingssysteem.',
    links: [
      { name: 'Eerste Setup', href: '/support/phantomos/setup' },
      { name: 'App Installatie', href: '/support/phantomos/apps' },
      { name: 'Security Features', href: '/support/phantomos/security' },
      { name: 'Updates', href: '/support/phantomos/updates' },
    ],
  },
  {
    icon: '💻',
    title: 'VaultOS',
    description: 'Documentatie en support voor onze desktop Linux distributie.',
    links: [
      { name: 'Installatie Guide', href: '/support/vaultos/install' },
      { name: 'Encryption Setup', href: '/support/vaultos/encryption' },
      { name: 'Software & Packages', href: '/support/vaultos/software' },
      { name: 'Troubleshooting', href: '/support/vaultos/troubleshooting' },
    ],
  },
  {
    icon: '🔧',
    title: 'Hardware',
    description: 'Hardware specificaties, onderhoud en reparatie informatie.',
    links: [
      { name: 'Device Specs', href: '/support/hardware/specs' },
      { name: 'Kill Switches', href: '/support/hardware/killswitches' },
      { name: 'Battery Care', href: '/support/hardware/battery' },
      { name: 'Reparatie', href: '/support/hardware/repair' },
    ],
  },
  {
    icon: '☁️',
    title: 'PhantomCloud',
    description: 'Setup en beheer van je encrypted cloud opslag.',
    links: [
      { name: 'Account Setup', href: '/support/cloud/setup' },
      { name: 'Sync Instellingen', href: '/support/cloud/sync' },
      { name: 'Recovery', href: '/support/cloud/recovery' },
      { name: 'Security', href: '/support/cloud/security' },
    ],
  },
];

const popularArticles = [
  {
    title: 'Hoe stel ik mijn Phantom X1 Pro in?',
    category: 'Getting Started',
    readTime: '5 min',
    href: '/support/articles/phantom-x1-pro-setup',
  },
  {
    title: 'Apps installeren zonder Google Play',
    category: 'PhantomOS',
    readTime: '3 min',
    href: '/support/articles/install-apps-without-google',
  },
  {
    title: 'Hardware kill switches gebruiken',
    category: 'Security',
    readTime: '4 min',
    href: '/support/articles/using-kill-switches',
  },
  {
    title: 'VaultOS encryptie configureren',
    category: 'VaultOS',
    readTime: '8 min',
    href: '/support/articles/vaultos-encryption',
  },
  {
    title: 'Je data herstellen van PhantomCloud',
    category: 'Cloud',
    readTime: '6 min',
    href: '/support/articles/phantomcloud-recovery',
  },
  {
    title: 'Security updates installeren',
    category: 'Updates',
    readTime: '2 min',
    href: '/support/articles/security-updates',
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Support Center</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hoe Kunnen We <span className="text-gradient-gold">Helpen</span>?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Vind antwoorden in onze documentatie, bekijk handleidingen, of neem 
            contact op met ons expert support team.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Zoek in support artikelen..."
                className="w-full px-6 py-4 pl-14 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <Section className="border-b border-[#1a1a1a]">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-8 group cursor-pointer">
            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all">
              💬
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400 mb-4">Praat direct met een support agent.</p>
            <Badge variant="success">Online</Badge>
          </Card>
          
          <Link href="/contact">
            <Card className="text-center p-8 group cursor-pointer h-full">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all">
                ✉️
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 mb-4">Stuur ons een bericht, antwoord binnen 24u.</p>
              <span className="text-[#D4AF37]">support@phantomvault.com</span>
            </Card>
          </Link>
          
          <Link href="/faq">
            <Card className="text-center p-8 group cursor-pointer h-full">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all">
                ❓
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">FAQ</h3>
              <p className="text-gray-400 mb-4">Veelgestelde vragen en antwoorden.</p>
              <span className="text-[#D4AF37]">50+ Artikelen →</span>
            </Card>
          </Link>
        </div>
      </Section>

      {/* Support Categories */}
      <Section>
        <div className="text-center mb-16">
          <Badge className="mb-4">Documentatie</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kies een <span className="text-gradient-gold">Categorie</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {supportCategories.map((category, index) => (
            <Card key={index}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-3xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className="flex items-center justify-between text-gray-300 hover:text-[#D4AF37] transition-colors"
                    >
                      <span>{link.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                <Link href={`/support/${category.title.toLowerCase()}`} className="text-[#D4AF37] font-semibold hover:underline">
                  Alle {category.title} artikelen →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Popular Articles */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-16">
          <Badge className="mb-4">Populair</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meest Gelezen Artikelen
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularArticles.map((article, index) => (
            <Link key={index} href={article.href}>
              <Card className="h-full group">
                <Badge variant="dark" className="mb-4">{article.category}</Badge>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime} leestijd
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Warranty & Returns */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-3xl mb-6">
              🛡️
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Garantie</h3>
            <p className="text-gray-400 mb-6">
              Alle PhantomVault apparaten komen met 2 jaar standaard garantie. 
              Extended warranty opties zijn beschikbaar voor extra gemoedsrust.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                2 jaar standaard garantie
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5 jaar security updates
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Extended warranty beschikbaar
              </li>
            </ul>
            <Button href="/support/warranty" variant="secondary">
              Garantie Voorwaarden
            </Button>
          </Card>
          
          <Card className="p-8">
            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-3xl mb-6">
              📦
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Retourneren</h3>
            <p className="text-gray-400 mb-6">
              Niet tevreden? Geen probleem. Je kunt elk PhantomVault product 
              binnen 30 dagen retourneren voor volledige restitutie.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30 dagen bedenktijd
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Gratis retour verzending
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Volledige restitutie
              </li>
            </ul>
            <Button href="/support/returns" variant="secondary">
              Retour Aanvragen
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Niet Gevonden Wat Je Zoekt?
          </h2>
          <p className="text-gray-400 mb-8">
            Ons support team staat voor je klaar. Gemiddelde reactietijd: 2 uur.
          </p>
          <Button href="/contact" size="lg">
            Contact Opnemen
          </Button>
        </div>
      </Section>
    </main>
  );
}
