export interface CompetitionInfo {
  id: string;
  title: string;
  description: string;
  source?: string;
  link?: string;
}

export const saeInfo: CompetitionInfo = {
  id: 'baja-sae',
  title: 'Baja SAE',
  description: 'Baja SAE is an international engineering competition where student teams design, build, test, and race off-road vehicles. Teams are judged on design, engineering documentation, and dynamic performance.',
  source: 'SAE International',
  link: 'https://www.sae.org/attend/student-events/baja-sae',
};

export const competitionPhases = [
  'Design',
  'Manufacturing',
  'Technical Documentation',
  'Inspection',
  'Testing',
  'Dynamic Events',
  'Endurance',
];
