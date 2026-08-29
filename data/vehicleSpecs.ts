export interface VehicleSpec {
  category: string;
  spec: string;
  value: string;
}

export const vehicleSpecs: VehicleSpec[] = [
  { category: 'General', spec: 'Vehicle', value: 'Current Baja Vehicle' },
  { category: 'General', spec: 'Year', value: '2026–27' },
  { category: 'Powertrain', spec: 'Engine', value: 'To be updated' },
  { category: 'Powertrain', spec: 'Drive', value: 'To be updated' },
  { category: 'Chassis', spec: 'Wheelbase', value: 'To be updated' },
  { category: 'Chassis', spec: 'Track Width', value: 'To be updated' },
  { category: 'Chassis', spec: 'Ground Clearance', value: 'To be updated' },
  { category: 'Suspension', spec: 'Suspension Type', value: 'To be updated' },
  { category: 'Brakes', spec: 'Brake Type', value: 'To be updated' },
  { category: 'General', spec: 'Mass', value: 'To be updated' },
];

export const vehicleSystems = [
  'Chassis',
  'Suspension',
  'Steering',
  'Braking',
  'Powertrain',
  'Drivetrain',
  'Electrical',
  'Ergonomics',
  'Vehicle Dynamics',
];
