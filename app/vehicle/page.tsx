import { Metadata } from 'next';
import VehicleHero from '@/components/vehicle/VehicleHero';
import VehicleSpecifications from '@/components/vehicle/VehicleSpecifications';
import VehicleEngineering from '@/components/vehicle/VehicleEngineering';
import VehicleGallery from '@/components/vehicle/VehicleGallery';

export const metadata: Metadata = {
  title: 'Vehicle | Vortex One - Saveetha Engineering College Baja SAE Team',
  description: 'Explore the Vortex One Baja SAE vehicle - engineering specifications, design philosophy, and technical details.',
};

export default function VehiclePage() {
  return (
    <main className="bg-black pt-20">
      <VehicleHero />
      <VehicleSpecifications />
      <VehicleEngineering />
      <VehicleGallery />
    </main>
  );
}
