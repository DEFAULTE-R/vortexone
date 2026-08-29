import { Metadata } from 'next';
import SponsorsHero from '@/components/sponsors/SponsorsHero';
import PartnershipValue from '@/components/sponsors/PartnershipValue';
import SponsorTiers from '@/components/sponsors/SponsorTiers';
import PartnerCTA from '@/components/sponsors/PartnerCTA';

export const metadata: Metadata = {
  title: 'Sponsors | Vortex One - Partner With Us',
  description: 'Partner with Vortex One - Saveetha Engineering College\'s Baja SAE team. Explore sponsorship opportunities.',
};

export default function SponsorsPage() {
  return (
    <main className="bg-black pt-20">
      <SponsorsHero />
      <PartnershipValue />
      <SponsorTiers />
      <PartnerCTA />
    </main>
  );
}
