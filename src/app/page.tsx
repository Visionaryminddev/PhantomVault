import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';

// Feature data
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'End-to-End Encryptie',
    description: 'Militaire AES-256 encryptie beschermt al je communicatie en data.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Hardware Security',
    description: 'Dedicated security chip voor veilige opslag van sleutels en biometrische data.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
    title: 'Anti-Tracking',
    description: 'Geavanceerde bescherming tegen trackers, malware en surveillancetechnieken.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Secure Boot',
    description: 'Gegarandeerde integriteit van het systeem vanaf het moment van opstarten.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Open Source OS',
    description: 'Transparant besturingssysteem gebaseerd op geharde open-source software.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Zero-Knowledge Cloud',
    description: 'Versleutelde cloudopslag waar alleen jij toegang hebt tot je data.',
  },
];

// Product highlights
const products = [
  {
    name: 'Phantom X1 Pro',
    category: 'Privacy Telefoon',
    price: '€1.299',
    image: '/placeholder-phone.jpg',
    href: '/products/phones/phantom-x1-pro',
    features: ['6.7" AMOLED', 'Snapdragon 8 Gen 3', '12GB RAM', 'Encrypted OS'],
  },
  {
    name: 'Phantom X1',
    category: 'Privacy Telefoon',
    price: '€899',
    image: '/placeholder-phone.jpg',
    href: '/products/phones/phantom-x1',
    features: ['6.5" OLED', 'Snapdragon 8 Gen 2', '8GB RAM', 'Encrypted OS'],
  },
  {
    name: 'Vault Book Pro',
    category: 'Privacy Laptop',
    price: '€2.499',
    image: '/placeholder-laptop.jpg',
    href: '/products/laptops/vault-book-pro',
    features: ['15.6" 4K', 'Intel i9', '32GB RAM', 'Secure BIOS'],
  },
  {
    name: 'Vault Book Air',
    category: 'Privacy Laptop',
    price: '€1.699',
    image: '/placeholder-laptop.jpg',
    href: '/products/laptops/vault-book-air',
    features: ['14" 2K', 'Intel i7', '16GB RAM', 'Secure BIOS'],
  },
];

// Stats
const stats = [
  { value: '256-bit', label: 'AES Encryptie' },
  { value: '100%', label: 'Open Source' },
  { value: '0', label: 'Data Verzameling' },
  { value: '24/7', label: 'Security Updates' },
];

// Testimonials
const testimonials = [
  {
    quote: 'PhantomPrivacy heeft mijn kijk op mobiele beveiliging volledig veranderd. Eindelijk een telefoon die privacy serieus neemt.',
    author: 'Alexander V.',
    role: 'Security Consultant',
  },
  {
    quote: 'Als journalist in conflictgebieden is de Phantom X1 Pro onmisbaar. Mijn bronnen en data zijn nu echt beschermd.',
    author: 'Maria S.',
    role: 'Onderzoeksjournalist',
  },
  {
    quote: 'De Vault Book Pro combineert kracht met ongeëvenaarde beveiliging. Perfect voor ons beveiligingsteam.',
    author: 'Dr. Thomas K.',
    role: 'CISO Fortune 500',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gold tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/90" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <Badge className="mb-4 sm:mb-6">🔒 Militaire Encryptie • Zero Data Collection</Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Jouw Privacy.</span>
            <br />
            <span className="text-gradient-gold">Onze Missie.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
            Ontdek de nieuwe standaard in privacy-technologie. PhantomPrivacy levert 
            state-of-the-art beveiligde telefoons en laptops met militaire encryptie, 
            hardware security modules en een volledig transparant besturingssysteem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button href="/products" size="lg" fullWidth className="sm:w-auto">
              Bekijk Producten
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/technology" variant="secondary" size="lg" fullWidth className="sm:w-auto">
              Onze Technologie
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="border-y border-[#1a1a1a] bg-[#111111]/50" spacing="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="mb-3 sm:mb-4">Beveiliging op Elk Niveau</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Elk PhantomPrivacy apparaat is ontworpen met meerdere lagen van beveiliging,
            van hardware tot software, om jouw privacy maximaal te beschermen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {features.map((feature, index) => (
            <Card key={index} className="group" padding="md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-3 sm:mb-4 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Products Section */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="mb-3 sm:mb-4">Premium Hardware</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Onze Producten
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Van ultra-beveiligde smartphones tot krachtige laptops met hardware encryptie.
            Kies het apparaat dat past bij jouw beveiligingsbehoeften.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Link key={index} href={product.href}>
              <Card className="group h-full" padding="md">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl sm:text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {product.category.includes('Telefoon') ? '📱' : '💻'}
                  </div>
                </div>
                
                <Badge variant="dark" className="mb-2" size="sm">{product.category}</Badge>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-[#D4AF37] font-bold mb-2 sm:mb-3">{product.price}</p>
                
                <ul className="space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-gray-500 text-xs sm:text-sm flex items-center">
                      <svg className="w-3 h-3 mr-2 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/products" variant="secondary">
            Bekijk Alle Producten
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Technology Preview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-3 sm:mb-4">Onze Technologie</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Gebouwd voor de{' '}
              <span className="text-gradient-gold">Toekomst van Privacy</span>
            </h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              PhantomPrivacy apparaten draaien op PhantomOS, een geharde versie van Android 
              zonder Google-services. Gecombineerd met onze eigen hardware security module 
              en secure boot verificatie, bieden we ongeëvenaarde bescherming.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                'Geen Google Play Services of tracking',
                'Hardware security module voor sleutelopslag',
                'Verified boot met rollback bescherming',
                'Automatische security updates',
                'Open source en volledig auditeerbaar',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/technology">
              Meer Over Onze Technologie
            </Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-[#1a1a1a] flex items-center justify-center glow-gold">
              <div className="text-7xl sm:text-8xl lg:text-9xl opacity-30">🔐</div>
            </div>
            {/* Floating badges - hidden on very small screens */}
            <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-[#111111] border border-[#D4AF37]/30 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">AES-256</span>
            </div>
            <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-[#111111] border border-[#D4AF37]/30 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">Zero-Knowledge</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-[#111111]/30">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="mb-3 sm:mb-4">Wat Klanten Zeggen</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Vertrouwd door Professionals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} padding="md">
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#1a1a1a] p-6 sm:p-10 lg:p-16 text-center">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-[80px] sm:blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Klaar om je Privacy te{' '}
              <span className="text-gradient-gold">Beschermen</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
              Sluit je aan bij duizenden privacy-bewuste gebruikers die hebben gekozen 
              voor PhantomPrivacy. Ervaar de vrijheid van echte digitale privacy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button href="/products" size="lg" fullWidth className="sm:w-auto">
                Shop Nu
              </Button>
              <Button href="/contact" variant="outline" size="lg" fullWidth className="sm:w-auto">
                Neem Contact Op
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
