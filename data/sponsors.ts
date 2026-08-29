export interface Sponsor {
  id: string;
  name: string;
  tier: 'title' | 'technical' | 'manufacturing' | 'academic' | 'industry' | 'equipment';
  logo?: string;
  description: string;
  website?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Coming soon',
    tier: 'title',
    description: 'To be updated',
  },
  {
    id: '2',
    name: 'Coming soon',
    tier: 'technical',
    description: 'To be updated',
  },
  {
    id: '3',
    name: 'Coming soon',
    tier: 'manufacturing',
    description: 'To be updated',
  },
];

export const sponsorTiers = [
  { id: 'title', label: 'Title Partner', className: 'border-accent border-2' },
  { id: 'technical', label: 'Technical Partner', className: 'border-vortex-grey/30' },
  { id: 'manufacturing', label: 'Manufacturing Partner', className: 'border-vortex-grey/30' },
  { id: 'academic', label: 'Academic Support', className: 'border-vortex-grey/30' },
  { id: 'industry', label: 'Industry Partner', className: 'border-vortex-grey/30' },
  { id: 'equipment', label: 'Equipment Partner', className: 'border-vortex-grey/30' },
];
