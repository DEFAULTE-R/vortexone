import { vehicleSpecs, vehicleSystems } from '@/data/vehicleSpecs';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SpecTable } from '@/components/vehicle/SpecTable';

export default function VehiclePage() {
  return (
    <>
      <Section id="vehicle" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">The Machine</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
            The Baja vehicle designed, simulated, and built by Vortex One.
          </p>

          {/* Vehicle Image Placeholder */}
          <div className="mt-8 w-full aspect-video bg-vortex-dark rounded-lg flex items-center justify-center">
            <span className="text-vortex-white text-lg">Vehicle Image Coming Soon</span>
          </div>
        </Container>
      </Section>

      <Section id="engineering-architecture" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Engineering Architecture</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {vehicleSystems.map((system) => (
              <div
                key={system}
                className="p-4 bg-white rounded-lg border border-vortex-light-grey hover:border-accent transition-colors duration-300"
              >
                <p className="text-sm font-medium text-vortex-dark">{system}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="specifications" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Technical Specifications</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <div className="mt-6">
            <SpecTable specs={vehicleSpecs} />
          </div>
          <p className="mt-4 text-sm text-vortex-grey italic">
            Specifications to be updated with final vehicle data.
          </p>
        </Container>
      </Section>
    </>
  );
}
