import { Metadata } from 'next';
import TeamHero from '@/components/team/TeamHero';
import LeadershipTeam from '@/components/team/LeadershipTeam';
import DepartmentStructure from '@/components/team/DepartmentStructure';
import JoinCTA from '@/components/team/JoinCTA';

export const metadata: Metadata = {
  title: 'Team | Vortex One - Saveetha Engineering College',
  description: 'Meet the Vortex One team - leadership, engineering departments, and organizational structure.',
};

export default function TeamPage() {
  return (
    <main className="bg-black pt-20">
      <TeamHero />
      <LeadershipTeam />
      <DepartmentStructure />
      <JoinCTA />
    </main>
  );
}
