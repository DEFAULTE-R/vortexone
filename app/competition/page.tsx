import { Metadata } from 'next';
import CompetitionHero from '@/components/competition/CompetitionHero';
import BajaSAEInfo from '@/components/competition/BajaSAEInfo';
import CompetitionEvents from '@/components/competition/CompetitionEvents';
import VortexCampaign from '@/components/competition/VortexCampaign';

export const metadata: Metadata = {
  title: 'Competition | Baja SAE - Vortex One',
  description: 'Learn about Baja SAE competition and Vortex One\'s campaign with Saveetha Engineering College.',
};

export default function CompetitionPage() {
  return (
    <main className="bg-black pt-20">
      <CompetitionHero />
      <BajaSAEInfo />
      <CompetitionEvents />
      <VortexCampaign />
    </main>
  );
}
