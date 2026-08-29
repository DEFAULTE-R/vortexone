import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vortex One | Saveetha Engineering College | Baja SAE',
  description: 'Vortex One is the Baja SAE student engineering team representing Saveetha Engineering College, focused on vehicle design, simulation, manufacturing, testing, and competition.',
  keywords: ['Vortex One', 'Saveetha Engineering College', 'Baja SAE', 'student engineering team', 'vehicle engineering', 'motorsport'],
  authors: [{ name: 'Vortex One' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-black text-white antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
