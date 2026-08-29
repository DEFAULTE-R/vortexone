import { Metadata } from 'next';
import LegacyHero from '@/components/legacy/LegacyHero';
import HistoryTimeline from '@/components/legacy/HistoryTimeline';
import ArchiveStatus from '@/components/legacy/ArchiveStatus';

export const metadata: Metadata = {
  title: 'Legacy | Vortex One - Team History',
  description: 'The history and legacy of Vortex One - Saveetha Engineering College\'s Baja SAE team.',
};

export default function LegacyPage() {
  return (
    <main className="bg-black pt-20">
      <LegacyHero />
      <HistoryTimeline />
      <ArchiveStatus />
    </main>
  );
}
