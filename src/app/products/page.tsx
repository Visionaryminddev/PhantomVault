import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producten | PhantomPrivacy',
  description: 'Ontdek onze premium privacy telefoons en laptops met militaire encryptie en hardware beveiliging.',
};

const phones = [
  {
    name: 'Phantom X1 Pro',
    price: '€1.299',
    description: 'Ons vlaggenschip met de nieuwste beveiligingstechnologie en topklasse specificaties.',
    href: '/products/phones/phantom-x1-pro',
    specs: ['6.7" AMOLED 120Hz', 'Snapdragon 8 Gen 3', '12GB RAM', '256GB Storage', 'Titan M3 Security Chip'],
    badge: 'Flagship',
  },
  {
    name: 'Phantom X1',
    price: '€899',
    description: 'Premium beveiliging in een betaalbaar pakket. Perfect voor de privacy-bewuste gebruiker.',
    href: '/products/phones/phantom-x1',
    specs: ['6.5" OLED 90Hz', 'Snapdragon 8 Gen 2', '8GB RAM', '128GB Storage', 'Hardware Security Module'],
    badge: 'Best Seller',
  },
  {
    name: 'Phantom Lite',
    price: '€599',
    description: 'Instapmodel met alle essentiële beveiligingsfeatures van PhantomPrivacy.',
    href: '/products/phones/phantom-lite',
    specs: ['6.1" OLED 60Hz', 'Snapdragon 7 Gen 2', '6GB RAM', '128GB Storage', 'Secure Enclave'],
    badge: 'Value',
  },
];

const laptops = [
  {
    name: 'Vault Book Pro',
    price: '€2.499',
    description: 'Maximale prestaties voor professionals die compromisloze beveiliging eisen.',
    href: '/products/laptops/vault-book-pro',
    specs: ['15.6" 4K OLED', 'Intel Core i9-13900H', '32GB DDR5', '1TB NVMe SSD', 'Secure BIOS + TPM 2.0'],
    badge: 'Professional',
  },
  {
    name: 'Vault Book Air',
    price: '€1.699',
    description: 'Ultraportable beveiliging voor de mobiele professional.',
    href: '/products/laptops/vault-book-air',
    specs: ['14" 2K IPS', 'Intel Core i7-1365U', '16GB LPDDR5', '512GB NVMe SSD', 'Hardware Encrypted SSD'],
    badge: 'Portable',
  },
  {
    name: 'Vault Book',
    price: '€1.199',
    description: 'Solide beveiliging voor dagelijks gebruik. Betrouwbaar en betaalbaar.',
    href: '/products/laptops/vault-book',
    specs: ['14" Full HD IPS', 'Intel Core i5-1335U', '16GB DDR4', '256GB NVMe SSD', 'Secure Boot'],
    badge: 'Essential',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Premium Privacy Hardware</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Onze <span className="text-gradient-gold">Producten</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Van ultra-beveiligde smartphones tot krachtige laptops met hardware encryptie. 
            Elk apparaat is ontworpen met jouw privacy als prioriteit.
          </p>
        </div>
      </section>

      {/* Phones Section */}
      <Section id="phones">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">📱</span>
            Privacy Telefoons
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Onze telefoons draaien op PhantomOS, een geharde Android-versie zonder Google tracking.
            Elke telefoon bevat een dedicated security chip voor veilige opslag van sleutels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {phones.map((phone, index) => (
            <Link key={index} href={phone.href}>
              <Card className="group h-full flex flex-col" padding="md">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-7xl lg:text-8xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">📱</div>
                  <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4" variant={phone.badge === 'Flagship' ? 'gold' : 'dark'} size="sm">
                    {phone.badge}
                  </Badge>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{phone.name}</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-3 sm:mb-4">{phone.price}</p>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{phone.description}</p>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {phone.specs.map((spec, i) => (
                      <li key={i} className="text-gray-500 text-xs sm:text-sm flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#1a1a1a]">
                  <span className="text-[#D4AF37] font-semibold group-hover:underline flex items-center text-sm sm:text-base">
                    Meer Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <Button href="/products/phones" variant="secondary">
            Alle Telefoons Bekijken
          </Button>
        </div>
      </Section>

      {/* Laptops Section */}
      <Section id="laptops" className="bg-[#111111]/30">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center">
            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">💻</span>
            Privacy Laptops
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Onze laptops zijn uitgerust met hardware encryptie, secure boot en een geharde
            Linux-distributie. Perfect voor professionals die geen compromissen sluiten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {laptops.map((laptop, index) => (
            <Link key={index} href={laptop.href}>
              <Card className="group h-full flex flex-col" padding="md">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-7xl lg:text-8xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">💻</div>
                  <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4" variant={laptop.badge === 'Professional' ? 'gold' : 'dark'} size="sm">
                    {laptop.badge}
                  </Badge>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{laptop.name}</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-3 sm:mb-4">{laptop.price}</p>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{laptop.description}</p>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {laptop.specs.map((spec, i) => (
                      <li key={i} className="text-gray-500 text-xs sm:text-sm flex items-center">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#1a1a1a]">
                  <span className="text-[#D4AF37] font-semibold group-hover:underline flex items-center text-sm sm:text-base">
                    Meer Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <Button href="/products/laptops" variant="secondary">
            Alle Laptops Bekijken
          </Button>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section>
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4">Vergelijk</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Welk Apparaat Past Bij Jou?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Niet zeker welk apparaat het beste is voor jouw situatie? 
            Bekijk onze vergelijkingstool of neem contact met ons op.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <Card className="text-center" padding="lg">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6">
              🔍
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Vergelijkingstool</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Vergelijk specificaties en features van al onze producten naast elkaar.
            </p>
            <Button href="/products/compare" variant="secondary" fullWidth>
              Producten Vergelijken
            </Button>
          </Card>
          
          <Card className="text-center" padding="lg">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6">
              💬
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Persoonlijk Advies</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Onze experts helpen je graag het juiste apparaat te kiezen voor jouw behoeften.
            </p>
            <Button href="/contact" variant="secondary" fullWidth>
              Neem Contact Op
            </Button>
          </Card>
        </div>
      </Section>
    </main>
  );
}
