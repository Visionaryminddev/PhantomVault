'use client';

import { useState } from 'react';
import { Button, Card, Badge, Section } from '@/components/ui';
import Link from 'next/link';

const faqCategories = [
  { id: 'general', name: 'Algemeen', icon: '📋' },
  { id: 'products', name: 'Producten', icon: '📱' },
  { id: 'security', name: 'Beveiliging', icon: '🔐' },
  { id: 'orders', name: 'Bestellingen', icon: '📦' },
  { id: 'support', name: 'Support', icon: '🛠️' },
];

const faqs = {
  general: [
    {
      question: 'Wat is PhantomPrivacy?',
      answer: 'PhantomPrivacy is een Nederlands bedrijf dat gespecialiseerd is in privacy-georiënteerde hardware. We ontwikkelen en verkopen smartphones en laptops met geavanceerde beveiligingsfeatures, zoals hardware encryptie, secure boot en aangepaste besturingssystemen die je privacy beschermen.',
    },
    {
      question: 'Waarom zou ik een PhantomPrivacy apparaat kiezen boven een reguliere smartphone of laptop?',
      answer: 'Standaard apparaten van grote fabrikanten verzamelen enorme hoeveelheden data over je gedrag, locatie en voorkeuren. PhantomPrivacy apparaten zijn vanaf de grond opgebouwd met privacy als prioriteit. We verzamelen geen data, bieden hardware kill switches, en draaien op aangepaste besturingssystemen zonder tracking.',
    },
    {
      question: 'Zijn PhantomPrivacy producten legaal?',
      answer: 'Ja, absoluut. Privacy is een fundamenteel recht en het gebruik van encryptie en beveiligde apparaten is volledig legaal in Nederland en de EU. Onze producten zijn bedoeld voor legitiem gebruik door privacy-bewuste consumenten, journalisten, activisten, en bedrijven die gevoelige data verwerken.',
    },
    {
      question: 'Waar worden PhantomPrivacy producten gemaakt?',
      answer: 'Onze hardware wordt geproduceerd door vertrouwde partners in Taiwan en Japan, onder strenge kwaliteitscontrole. De software-ontwikkeling en eindassemblage vindt plaats in Nederland, waar we ook de security chips programmeren en het besturingssysteem installeren.',
    },
  ],
  products: [
    {
      question: 'Wat is het verschil tussen de Phantom X1 en X1 Pro?',
      answer: 'De Phantom X1 Pro is ons vlaggenschip met de nieuwste Snapdragon processor, Titan M3 security chip, en hardware kill switches voor microfoon, camera en baseband. De Phantom X1 biedt dezelfde software-beveiliging maar met een iets minder krachtige processor en software-based kill switches. Beide draaien op PhantomOS.',
    },
    {
      question: 'Kan ik reguliere Android apps gebruiken op PhantomOS?',
      answer: 'Ja, PhantomOS is compatibel met de meeste Android apps. Je kunt apps installeren via F-Droid (open source app store), Aurora Store (anonieme toegang tot Play Store apps), of door APK bestanden direct te installeren. Let op dat sommige apps die afhankelijk zijn van Google Play Services mogelijk niet werken of beperkte functionaliteit hebben.',
    },
    {
      question: 'Hoe lang worden PhantomPrivacy apparaten ondersteund?',
      answer: 'We bieden minimaal 5 jaar security updates voor al onze apparaten. Dit is significant langer dan de meeste fabrikanten. Hardware garantie is 2 jaar standaard, met optie voor extended warranty tot 5 jaar.',
    },
    {
      question: 'Kan ik Windows installeren op een Vault Book laptop?',
      answer: 'Ja, onze laptops worden optioneel geleverd met Windows 11 Pro dual-boot naast VaultOS. Je kunt ook Windows als enige OS installeren, hoewel je dan sommige security features verliest. We raden aan VaultOS te gebruiken voor maximale beveiliging.',
    },
  ],
  security: [
    {
      question: 'Wat zijn hardware kill switches?',
      answer: 'Hardware kill switches zijn fysieke schakelaars die de stroomtoevoer naar componenten volledig onderbreken. Op onze Pro-modellen kun je met een schakelaar de microfoon, camera, en zelfs de baseband (mobiel netwerk) uitschakelen. Dit is veiliger dan software-oplossingen omdat malware de hardware niet kan reactiveren.',
    },
    {
      question: 'Hoe werkt de encryptie op PhantomPrivacy apparaten?',
      answer: 'We gebruiken AES-256 bit encryptie voor alle data op het apparaat. De encryptiesleutels worden opgeslagen in een hardware security module (HSM) of Titan security chip, die fysiek beveiligd is tegen uitleen. Zelfs als iemand de opslag chip verwijdert, kan de data niet gelezen worden zonder de juiste sleutel.',
    },
    {
      question: 'Kan PhantomPrivacy mijn data lezen of toegang krijgen tot mijn apparaat?',
      answer: 'Nee. We hebben geen backdoors, geen remote toegang, en we verzamelen geen data. De encryptiesleutels worden lokaal gegenereerd en verlaten nooit je apparaat. Zelfs als we dat zouden willen (wat we niet willen), kunnen we technisch gezien niet bij je data.',
    },
    {
      question: 'Is PhantomOS open source?',
      answer: 'Ja, PhantomOS is volledig open source. Je kunt de broncode bekijken, auditen, en zelfs zelf compileren op onze GitHub. We bieden ook reproducible builds zodat je kunt verifiëren dat de software op je apparaat overeenkomt met de gepubliceerde broncode.',
    },
  ],
  orders: [
    {
      question: 'Hoe lang duurt de levering?',
      answer: 'Standaard levering binnen Nederland duurt 2-3 werkdagen. Voor België en Duitsland 3-5 werkdagen. Overige EU landen 5-7 werkdagen. We bieden ook express verzending aan met levering de volgende werkdag (besteld voor 14:00).',
    },
    {
      question: 'Welke betaalmethoden accepteren jullie?',
      answer: 'We accepteren iDEAL, creditcard (Visa, Mastercard, AMEX), PayPal, bankoverschrijving, en Bitcoin/Monero. Voor cryptocurrency betalingen bieden we 5% korting vanwege de privacy-vriendelijke aard.',
    },
    {
      question: 'Kan ik mijn bestelling retourneren?',
      answer: 'Ja, je hebt 30 dagen bedenktijd. Als je niet tevreden bent, kun je het product ongebruikt en in originele verpakking retourneren voor volledige restitutie. Retourverzending binnen Nederland is gratis. Na ontvangst wordt je betaling binnen 5 werkdagen teruggestort.',
    },
    {
      question: 'Versturen jullie ook buiten de EU?',
      answer: 'Op dit moment versturen we alleen binnen de EU vanwege exportrestricties op encryptie-technologie. We werken aan uitbreiding naar andere regio\'s. Meld je aan voor onze nieuwsbrief om op de hoogte te blijven.',
    },
  ],
  support: [
    {
      question: 'Hoe kan ik contact opnemen met support?',
      answer: 'Je kunt ons bereiken via live chat (Ma-Vr 9:00-18:00), e-mail (support@phantomprivacy.com), of telefoon (+31 20 123 4567). Voor technische vragen raden we aan eerst onze documentatie te bekijken in het Support Center.',
    },
    {
      question: 'Mijn apparaat werkt niet meer, wat nu?',
      answer: 'Probeer eerst een soft reset door het apparaat uit en weer aan te zetten. Als dat niet werkt, bekijk onze troubleshooting guides in het Support Center. Als het probleem aanhoudt, neem contact op met support. Als het een hardware defect is onder garantie, regelen we gratis reparatie of vervanging.',
    },
    {
      question: 'Kan ik mijn apparaat laten repareren bij een reguliere winkel?',
      answer: 'We raden aan reparaties via onze officiële kanalen te laten uitvoeren om de beveiligingsintegriteit te waarborgen. Ongeautoriseerde reparaties kunnen de tamper-evident seals verbreken, wat de security chip kan triggeren. Stuur je apparaat naar ons voor betrouwbare, beveiligde reparatie.',
    },
    {
      question: 'Hoe installeer ik software updates?',
      answer: 'PhantomOS en VaultOS checken automatisch op updates. Je ontvangt een notificatie wanneer een update beschikbaar is. Updates worden via een beveiligde verbinding gedownload en de integriteit wordt geverifieerd voor installatie. Je kunt ook handmatig checken in Instellingen > Systeem > Updates.',
    },
  ],
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Veelgestelde <span className="text-gradient-gold">Vragen</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vind snel antwoord op de meest gestelde vragen over PhantomPrivacy 
            producten, beveiliging en bestellingen.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <Section>
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Categories Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-semibold text-white mb-4">Categorieën</h2>
            <nav className="space-y-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                      : 'text-gray-400 hover:text-white hover:bg-[#111111]'
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </nav>
            
            <Card className="mt-8 p-6">
              <h3 className="font-semibold text-white mb-2">Vraag niet gevonden?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Neem contact op met ons support team.
              </p>
              <Button href="/contact" variant="secondary" className="w-full">
                Contact
              </Button>
            </Card>
          </div>

          {/* FAQ Items */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3">
                {faqCategories.find(c => c.id === activeCategory)?.icon}
              </span>
              {faqCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            
            <div className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer"
                  hover={false}
                  onClick={() => toggleItem(faq.question)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-semibold text-white pr-8">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-[#D4AF37] transition-transform ${
                        openItems.includes(faq.question) ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {openItems.includes(faq.question) && (
                    <div className="px-6 pb-6 border-t border-[#1a1a1a] pt-4">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nog Steeds Vragen?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Ons support team staat klaar om al je vragen te beantwoorden. 
            Gemiddelde reactietijd is minder dan 2 uur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Opnemen
            </Button>
            <Button href="/support" variant="outline" size="lg">
              Support Center
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
