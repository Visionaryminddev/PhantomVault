'use client';

import { useState } from 'react';
import { Button, Card, Badge, Section } from '@/components/ui';
import Link from 'next/link';

// Product data
const phones = [
  {
    id: 'phantom-x1-pro',
    name: 'Phantom X1 Pro',
    price: 1299,
    display: '6.7" AMOLED 120Hz',
    processor: 'Snapdragon 8 Gen 3',
    ram: '12GB',
    storage: '256GB',
    battery: '5000mAh',
    camera: '50MP + 12MP + 10MP',
    security: 'Titan M3 Chip',
    os: 'PhantomOS 3.0',
    water: 'IP68',
  },
  {
    id: 'phantom-x1',
    name: 'Phantom X1',
    price: 899,
    display: '6.5" OLED 90Hz',
    processor: 'Snapdragon 8 Gen 2',
    ram: '8GB',
    storage: '128GB',
    battery: '4500mAh',
    camera: '50MP + 12MP',
    security: 'Hardware Security Module',
    os: 'PhantomOS 3.0',
    water: 'IP67',
  },
  {
    id: 'phantom-lite',
    name: 'Phantom Lite',
    price: 599,
    display: '6.1" OLED 60Hz',
    processor: 'Snapdragon 7 Gen 2',
    ram: '6GB',
    storage: '128GB',
    battery: '4000mAh',
    camera: '48MP + 8MP',
    security: 'Secure Enclave',
    os: 'PhantomOS 3.0',
    water: 'IP65',
  },
];

const laptops = [
  {
    id: 'vault-book-pro',
    name: 'Vault Book Pro',
    price: 2499,
    display: '15.6" 4K OLED',
    processor: 'Intel Core i9-13900H',
    ram: '32GB DDR5',
    storage: '1TB NVMe SSD',
    battery: '100Wh',
    graphics: 'RTX 4060',
    security: 'TPM 2.0 + Secure BIOS',
    os: 'PhantomOS Linux',
    weight: '1.8kg',
  },
  {
    id: 'vault-book-air',
    name: 'Vault Book Air',
    price: 1699,
    display: '14" 2K IPS',
    processor: 'Intel Core i7-1365U',
    ram: '16GB LPDDR5',
    storage: '512GB NVMe SSD',
    battery: '72Wh',
    graphics: 'Intel Iris Xe',
    security: 'TPM 2.0 + Encrypted SSD',
    os: 'PhantomOS Linux',
    weight: '1.2kg',
  },
  {
    id: 'vault-book',
    name: 'Vault Book',
    price: 1199,
    display: '14" Full HD IPS',
    processor: 'Intel Core i5-1335U',
    ram: '16GB DDR4',
    storage: '256GB NVMe SSD',
    battery: '56Wh',
    graphics: 'Intel UHD',
    security: 'TPM 2.0 + Secure Boot',
    os: 'PhantomOS Linux',
    weight: '1.4kg',
  },
];

type ProductType = 'phones' | 'laptops';

export default function ComparePage() {
  const [productType, setProductType] = useState<ProductType>('phones');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const products = productType === 'phones' ? phones : laptops;
  const specs = productType === 'phones' 
    ? ['display', 'processor', 'ram', 'storage', 'battery', 'camera', 'security', 'os', 'water']
    : ['display', 'processor', 'ram', 'storage', 'battery', 'graphics', 'security', 'os', 'weight'];

  const specLabels: Record<string, string> = {
    display: 'Scherm',
    processor: 'Processor',
    ram: 'RAM',
    storage: 'Opslag',
    battery: 'Batterij',
    camera: 'Camera',
    security: 'Beveiliging',
    os: 'Besturingssysteem',
    water: 'Waterbestendig',
    graphics: 'Grafisch',
    weight: 'Gewicht',
  };

  const toggleProduct = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(p => p !== id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const filteredProducts = selectedProducts.length > 0 
    ? products.filter(p => selectedProducts.includes(p.id))
    : products;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6">Vergelijk</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Producten <span className="text-gradient-gold">Vergelijken</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Vergelijk specificaties en vind het perfecte apparaat voor jouw behoeften.
          </p>
        </div>
      </section>

      {/* Product Type Toggle */}
      <Section spacing="sm">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => { setProductType('phones'); setSelectedProducts([]); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              productType === 'phones'
                ? 'bg-[#D4AF37] text-black'
                : 'bg-[#111111] text-gray-400 hover:text-white'
            }`}
          >
            📱 Telefoons
          </button>
          <button
            onClick={() => { setProductType('laptops'); setSelectedProducts([]); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              productType === 'laptops'
                ? 'bg-[#D4AF37] text-black'
                : 'bg-[#111111] text-gray-400 hover:text-white'
            }`}
          >
            💻 Laptops
          </button>
        </div>

        {/* Product Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {products.map(product => (
            <button
              key={product.id}
              onClick={() => toggleProduct(product.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedProducts.includes(product.id)
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]'
                  : 'bg-[#111111] text-gray-400 border border-[#1a1a1a] hover:border-[#D4AF37]/50'
              }`}
            >
              {product.name}
            </button>
          ))}
          {selectedProducts.length > 0 && (
            <button
              onClick={() => setSelectedProducts([])}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
            >
              Reset
            </button>
          )}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                <th className="text-left py-4 px-4 text-gray-500 font-medium w-40">Specificatie</th>
                {filteredProducts.map(product => (
                  <th key={product.id} className="text-center py-4 px-4 min-w-[200px]">
                    <div className="text-white font-semibold text-lg">{product.name}</div>
                    <div className="text-[#D4AF37] font-bold text-xl mt-1">€{product.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr key={spec} className={index % 2 === 0 ? 'bg-[#111111]/50' : ''}>
                  <td className="py-4 px-4 text-gray-400 font-medium">
                    {specLabels[spec]}
                  </td>
                  {filteredProducts.map(product => (
                    <td key={product.id} className="py-4 px-4 text-center text-white">
                      {(product as any)[spec]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[#1a1a1a]">
                <td className="py-6 px-4"></td>
                {filteredProducts.map(product => (
                  <td key={product.id} className="py-6 px-4 text-center">
                    <Button 
                      href={`/products/${productType}/${product.id}`}
                      variant="secondary"
                      size="sm"
                    >
                      Bekijk Product
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Help Section */}
      <Section className="bg-[#111111]/30">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Hulp nodig bij kiezen?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Onze experts helpen je graag het juiste apparaat te kiezen voor jouw specifieke behoeften.
          </p>
          <Button href="/contact" size="lg">
            Vraag Advies
          </Button>
        </div>
      </Section>
    </main>
  );
}
