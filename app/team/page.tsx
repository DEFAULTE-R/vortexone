import { teamMembers } from '@/data/teamData';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';

export default function TeamPage() {
  // Group members by division
  const groupedMembers = teamMembers.reduce((acc, member) => {
    const division = member.division || 'Other';
    if (!acc[division]) {
      acc[division] = [];
    }
    acc[division].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <Section id="team" className="bg-vortex-white">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center">Our Team</h1>
        <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
        <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
          The student engineers, designers, and leaders driving Vortex One forward.
        </p>

        {Object.entries(groupedMembers).map(([division, members]) => (
          <div key={division} className="mt-12">
            <h2 className="text-2xl font-semibold border-b-2 border-vortex-light-grey pb-2">
              {division}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
