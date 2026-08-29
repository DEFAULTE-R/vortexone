import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact | Vortex One - Get In Touch',
  description: 'Contact Vortex One - Saveetha Engineering College\'s Baja SAE team for sponsorship, recruitment, or general inquiries.',
};

export default function ContactPage() {
  return (
    <main className="bg-black pt-20">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
