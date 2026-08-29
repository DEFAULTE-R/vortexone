import Image from 'next/image';
import { TeamMember } from '@/data/teamData';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="border border-white/10 bg-black">
      <div className="aspect-[3/4] bg-gray-900 relative border-b border-white/10">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-600 text-xs font-mono">PHOTO COMING SOON</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold">{member.name}</h3>
        <p className="text-red-500 text-sm font-medium mt-0.5">{member.role}</p>
        <p className="text-gray-500 text-sm">{member.division} · {member.year}</p>
        {member.bio && (
          <p className="mt-3 text-sm text-gray-500">{member.bio}</p>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-red-500 hover:text-red-400 text-sm"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
};
