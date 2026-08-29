import { Metadata } from 'next';
import JoinHero from '@/components/join/JoinHero';
import OpenPositions from '@/components/join/OpenPositions';
import WhatYouLearn from '@/components/join/WhatYouLearn';
import ApplicationProcess from '@/components/join/ApplicationProcess';

export const metadata: Metadata = {
  title: 'Join the Team | Vortex One - Recruitment',
  description: 'Join Vortex One - Saveetha Engineering College\'s Baja SAE team. Explore opportunities in engineering, business, and more.',
};

export default function JoinPage() {
  return (
    <main className="bg-black pt-20">
      <JoinHero />
      <OpenPositions />
      <WhatYouLearn />
      <ApplicationProcess />
    </main>
  );
}
