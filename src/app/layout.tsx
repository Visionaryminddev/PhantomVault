import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: "PhantomPrivacy | Premium Privacy Telefoons & Laptops",
  description: "Secure Your Digital Self. PhantomPrivacy levert state-of-the-art beveiligde telefoons en laptops met militaire encryptie en hardware security.",
  keywords: "privacy telefoon, beveiligde laptop, encrypted phone, security, privacy, PhantomPrivacy",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'PhantomPrivacy',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[#0a0a0a] text-white min-h-screen-safe`}
      >
        <Header />
        <div className="pt-16 sm:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
