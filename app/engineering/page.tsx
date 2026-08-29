import { Metadata } from 'next';
import EngineeringHero from '@/components/engineering/EngineeringHero';
import DesignPhilosophy from '@/components/engineering/DesignPhilosophy';
import SystemArchitecture from '@/components/engineering/SystemArchitecture';
import SimulationWork from '@/components/engineering/SimulationWork';
import ManufacturingProcess from '@/components/engineering/ManufacturingProcess';
import TestingValidation from '@/components/engineering/TestingValidation';

export const metadata: Metadata = {
  title: 'Engineering | Vortex One - Technical Portfolio',
  description: 'Explore the engineering methodology, simulation work, and technical development of the Vortex One Baja SAE vehicle.',
};

export default function EngineeringPage() {
  return (
    <main className="bg-black pt-20">
      <EngineeringHero />
      <DesignPhilosophy />
      <SystemArchitecture />
      <SimulationWork />
      <ManufacturingProcess />
      <TestingValidation />
    </main>
  );
}
