import Image from 'next/image';
import { TeamMember } from '@/data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-vortex-light-grey hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[3/4] bg-vortex-light-grey relative">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-vortex-grey text-sm">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-accent text-sm font-medium">{member.role}</p>
        <p className="text-vortex-grey text-sm">{member.division}</p>
        <p className="text-vortex-grey text-sm mt-1">{member.year}</p>
        <p className="mt-2 text-sm text-vortex-grey">{member.bio}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:text-accent-hover text-sm"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
};
