import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vortex One | Saveetha Engineering College | Baja SAE',
  description:
    'Vortex One is the Baja SAE student engineering team representing Saveetha Engineering College, focused on vehicle design, simulation, manufacturing, testing, and competition.',
  keywords:
    'Vortex One, Saveetha Engineering College Baja, Baja SAE, student engineering team, off-road vehicle engineering, vehicle design, engineering simulation',
  authors: [{ name: 'Vortex One' }],
  openGraph: {
    title: 'Vortex One | Saveetha Engineering College | Baja SAE',
    description:
      'Vortex One is the Baja SAE student engineering team representing Saveetha Engineering College.',
    siteName: 'Vortex One',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
