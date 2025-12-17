import Link from 'next/link';
import { Button, Card, Badge, Section } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | PhantomPrivacy',
  description: 'Lees het laatste nieuws over privacy, beveiliging en technologie van PhantomPrivacy.',
};

const featuredPost = {
  title: 'Waarom Privacy Belangrijker is dan Ooit in 2024',
  excerpt: 'In een wereld waar elke klik, elke zoekopdracht en elke beweging wordt geregistreerd, is het nemen van controle over je digitale privacy niet langer optioneel - het is essentieel.',
  author: 'Dr. Alexander Vries',
  date: '15 December 2024',
  readTime: '8 min',
  category: 'Privacy',
  image: '🔐',
  slug: 'waarom-privacy-belangrijker-is-dan-ooit',
};

const posts = [
  {
    title: 'PhantomOS 4.0: Wat is Nieuw?',
    excerpt: 'Een diepgaande blik op alle nieuwe features en verbeteringen in de nieuwste versie van ons mobiele besturingssysteem.',
    author: 'Sarah Chen',
    date: '12 December 2024',
    readTime: '6 min',
    category: 'Product Updates',
    slug: 'phantomos-4-release',
  },
  {
    title: 'Hardware Kill Switches: Hoe Ze Werken',
    excerpt: 'Een technische uitleg over hoe onze hardware kill switches werken en waarom ze veiliger zijn dan software alternatieven.',
    author: 'Marcus Weber',
    date: '8 December 2024',
    readTime: '5 min',
    category: 'Technologie',
    slug: 'hardware-kill-switches-uitleg',
  },
  {
    title: 'De Toekomst van End-to-End Encryptie',
    excerpt: 'Met toenemende druk van overheden op encryptie, bekijken we de technische en juridische uitdagingen.',
    author: 'Elena Kowalski',
    date: '1 December 2024',
    readTime: '10 min',
    category: 'Security',
    slug: 'toekomst-end-to-end-encryptie',
  },
  {
    title: '5 Manieren om je Online Privacy te Verbeteren',
    excerpt: 'Praktische tips die iedereen kan toepassen om direct meer controle te krijgen over hun digitale voetafdruk.',
    author: 'Dr. Alexander Vries',
    date: '25 November 2024',
    readTime: '4 min',
    category: 'Tips & Tricks',
    slug: '5-manieren-privacy-verbeteren',
  },
  {
    title: 'PhantomPrivacy Community: Een Jaar Later',
    excerpt: 'Een terugblik op het eerste jaar van onze open source community en de bijdragen van onze gebruikers.',
    author: 'Sarah Chen',
    date: '20 November 2024',
    readTime: '5 min',
    category: 'Community',
    slug: 'community-een-jaar-later',
  },
  {
    title: 'Waarom We Geen Google Services Gebruiken',
    excerpt: 'Een uitgebreide uitleg over de privacy-implicaties van Google Play Services en hoe PhantomOS werkt zonder.',
    author: 'Marcus Weber',
    date: '15 November 2024',
    readTime: '7 min',
    category: 'Privacy',
    slug: 'waarom-geen-google-services',
  },
];

const categories = [
  { name: 'Alle', count: 24 },
  { name: 'Privacy', count: 8 },
  { name: 'Security', count: 6 },
  { name: 'Product Updates', count: 5 },
  { name: 'Technologie', count: 3 },
  { name: 'Tips & Tricks', count: 2 },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6">Blog & Updates</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-gradient-gold">Inzichten</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Het laatste nieuws over privacy, beveiliging, en technologie. 
            Plus product updates en tips van ons expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <Section className="border-b border-[#1a1a1a]">
        <Link href={`/blog/${featuredPost.slug}`}>
          <Card className="grid md:grid-cols-2 gap-8 p-8 group">
            <div className="aspect-video md:aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl flex items-center justify-center">
              <div className="text-9xl opacity-30 group-hover:opacity-50 transition-opacity">
                {featuredPost.image}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <Badge className="self-start mb-4">{featuredPost.category}</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime} leestijd</span>
              </div>
            </div>
          </Card>
        </Link>
      </Section>

      {/* Blog Grid */}
      <Section>
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-lg font-semibold text-white mb-4">Categorieën</h3>
            <ul className="space-y-2 mb-8">
              {categories.map((category) => (
                <li key={category.name}>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:text-[#D4AF37] hover:bg-[#111111] rounded-lg transition-colors">
                    <span>{category.name}</span>
                    <span className="text-sm bg-[#1a1a1a] px-2 py-0.5 rounded">{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4">Nieuwsbrief</h3>
            <Card className="p-6">
              <p className="text-gray-400 text-sm mb-4">
                Ontvang het laatste privacy nieuws direct in je inbox.
              </p>
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] mb-3"
              />
              <Button className="w-full">Aanmelden</Button>
            </Card>
          </div>

          {/* Posts Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Recente Artikelen</h2>
              <select className="px-4 py-2 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-300 focus:outline-none focus:border-[#D4AF37]">
                <option>Nieuwste eerst</option>
                <option>Oudste eerst</option>
                <option>Meest gelezen</option>
              </select>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <Card className="h-full group">
                    <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                        📄
                      </div>
                    </div>
                    
                    <Badge variant="dark" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center text-xs text-gray-500 mt-auto">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              <button className="px-4 py-2 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors">
                Vorige
              </button>
              <button className="px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-[#111111] border border-[#1a1a1a] rounded-lg text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors">
                Volgende
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Blijf op de Hoogte
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Volg ons op social media voor dagelijkse privacy tips en updates.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-12 h-12 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
