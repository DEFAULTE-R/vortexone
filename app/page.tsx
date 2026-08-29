import { Hero } from '@/components/home/Hero';
import { ReturningSection } from '@/components/home/ReturningSection';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <ReturningSection />

      {/* The Team Preview */}
      <Section id="team-preview" className="bg-vortex-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">The Team</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-vortex-grey max-w-2xl mx-auto">
              Student engineers working together to design, build, and compete.
            </p>
            <div className="mt-8">
              <Button href="/team" variant="primary">
                Meet the Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Machine Preview */}
      <Section id="machine-preview" className="bg-vortex-dark text-vortex-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">The Machine</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-vortex-light-grey max-w-2xl mx-auto">
              Designed, simulated, and manufactured by students.
            </p>
            <div className="mt-8">
              <Button href="/vehicle" variant="primary">
                Explore the Vehicle
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Engineering Preview */}
      <Section id="engineering-preview" className="bg-vortex-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Engineering &amp; Simulation</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-vortex-grey max-w-2xl mx-auto">
              Concept → Design → Simulation → Manufacturing → Testing → Validation → Iteration
            </p>
            <div className="mt-8">
              <Button href="/engineering" variant="primary">
                View Engineering Process
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Competition Preview */}
      <Section id="competition-preview" className="bg-vortex-dark text-vortex-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Competition</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-vortex-light-grey max-w-2xl mx-auto">
              Baja SAE — designing, building, testing, and racing off-road vehicles.
            </p>
            <div className="mt-8">
              <Button href="/competition" variant="primary">
                Learn About Baja SAE
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
