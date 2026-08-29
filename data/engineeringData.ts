export interface EngineeringDiscipline {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export const engineeringDisciplines: EngineeringDiscipline[] = [
  {
    id: 'cad',
    title: 'CAD',
    description: 'Computer-Aided Design for vehicle components and systems.',
  },
  {
    id: 'cae',
    title: 'CAE',
    description: 'Computer-Aided Engineering for analysis and optimization.',
  },
  {
    id: 'structural',
    title: 'Structural Analysis',
    description: 'FEA and stress analysis for chassis and components.',
  },
  {
    id: 'suspension',
    title: 'Suspension Analysis',
    description: 'Kinematic and dynamic analysis of suspension systems.',
  },
  {
    id: 'vehicle-dynamics',
    title: 'Vehicle Dynamics',
    description: 'Handling, stability, and performance analysis.',
  },
  {
    id: 'cfd',
    title: 'CFD',
    description: 'Computational Fluid Dynamics for aerodynamics and cooling.',
  },
  {
    id: 'thermal',
    title: 'Thermal Analysis',
    description: 'Heat transfer and thermal management studies.',
  },
  {
    id: 'drivetrain',
    title: 'Drivetrain Analysis',
    description: 'Power transmission and efficiency analysis.',
  },
  {
    id: 'fea',
    title: 'FEA',
    description: 'Finite Element Analysis for component validation.',
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description: 'Design optimization for performance and weight reduction.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Design for manufacturing and assembly considerations.',
  },
  {
    id: 'testing',
    title: 'Testing & Validation',
    description: 'Physical testing and correlation with simulation.',
  },
];

export const engineeringProcess = [
  'Concept',
  'Design',
  'Simulation',
  'Manufacturing',
  'Testing',
  'Validation',
  'Iteration',
];
