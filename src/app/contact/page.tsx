'use client';

import { useState } from 'react';
import { Button, Card, Badge, Section } from '@/components/ui';

const contactMethods = [
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Direct antwoord van ons team',
    info: 'Beschikbaar: Ma-Vr 9:00-18:00',
    action: 'Start Chat',
  },
  {
    icon: '✉️',
    title: 'Email',
    description: 'Antwoord binnen 24 uur',
    info: 'support@phantomvault.com',
    action: 'Stuur Email',
  },
  {
    icon: '📞',
    title: 'Telefoon',
    description: 'Spreek met een specialist',
    info: '+31 (0)20 123 4567',
    action: 'Bel Ons',
  },
];

const departments = [
  { value: 'sales', label: 'Verkoop & Offertes' },
  { value: 'support', label: 'Technische Support' },
  { value: 'enterprise', label: 'Enterprise Solutions' },
  { value: 'press', label: 'Pers & Media' },
  { value: 'other', label: 'Overig' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Contact</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Neem <span className="text-gradient-gold">Contact</span> Op
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Heb je een vraag, suggestie of wil je meer weten over onze producten? 
            We horen graag van je.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <Section className="border-b border-[#1a1a1a]" spacing="md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center" padding="md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all">
                {method.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">{method.description}</p>
              <p className="text-[#D4AF37] font-medium mb-4 text-sm sm:text-base break-all sm:break-normal">{method.info}</p>
              <Button variant="secondary" fullWidth>
                {method.action}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div>
            <Badge className="mb-3 sm:mb-4">Stuur een Bericht</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              We Horen Graag van Je
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              Vul het formulier in en we nemen zo snel mogelijk contact met je op. 
              Gemiddelde reactietijd is 4 uur tijdens kantooruren.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-base"
                    placeholder="Je naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-base"
                    placeholder="je@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Afdeling *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-base appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="">Selecteer een afdeling</option>
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-base"
                  placeholder="Waar gaat je vraag over?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bericht *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-[#111111] border border-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-base"
                  placeholder="Beschrijf je vraag of opmerking..."
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 mr-3 w-4 h-4 rounded border-[#1a1a1a] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-[#0a0a0a]"
                />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  Ik ga akkoord met de{' '}
                  <a href="/privacy" className="text-[#D4AF37] hover:underline">
                    privacyverklaring
                  </a>
                  {' '}en begrijp dat mijn gegevens worden verwerkt om mijn vraag te beantwoorden.
                </label>
              </div>
              
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Verstuur Bericht
              </Button>
            </form>
          </div>
          
          {/* Info */}
          <div>
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Ons Kantoor</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">Adres</div>
                    <div className="text-gray-400">
                      Keizersgracht 123<br />
                      1015 CJ Amsterdam<br />
                      Nederland
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">Openingstijden</div>
                    <div className="text-gray-400">
                      Maandag - Vrijdag: 9:00 - 18:00<br />
                      Weekend: Gesloten
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#D4AF37] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">E-mail</div>
                    <div className="text-gray-400">
                      Algemeen: info@phantomvault.com<br />
                      Support: support@phantomvault.com<br />
                      Pers: press@phantomvault.com
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Map Placeholder */}
            <Card className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">🗺️</div>
                <p className="text-gray-500">Interactieve kaart</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Enterprise CTA */}
      <Section className="bg-[#111111]/30">
        <Card className="p-8 lg:p-12 text-center glow-gold">
          <Badge className="mb-4">Enterprise</Badge>
          <h2 className="text-3xl font-bold text-white mb-4">
            Op Zoek naar Enterprise Oplossingen?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Voor organisaties met specifieke beveiligingseisen bieden we custom oplossingen, 
            volume kortingen en dedicated support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact?type=enterprise" size="lg">
              Enterprise Contact
            </Button>
            <Button href="/products" variant="outline" size="lg">
              Bekijk Producten
            </Button>
          </div>
        </Card>
      </Section>
    </main>
  );
}
