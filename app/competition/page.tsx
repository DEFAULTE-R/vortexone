import { saeInfo, competitionPhases } from '@/data/competitionData';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function CompetitionPage() {
  return (
    <>
      <Section id="competition" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">Baja SAE Competition</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
        </Container>
      </Section>

      <Section id="about" className="bg-vortex-dark text-vortex-white">
        <Container>
          <h2 className="text-3xl font-bold">About Baja SAE</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <p className="mt-6 text-lg text-vortex-light-grey leading-relaxed max-w-3xl">
            {saeInfo.description}
          </p>
          <div className="mt-4">
            <p className="text-sm text-vortex-grey">
              Source: {saeInfo.source}
            </p>
            {saeInfo.link && (
              <a
                href={saeInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-accent hover:underline text-sm"
              >
                Official SAE International Page →
              </a>
            )}
          </div>
        </Container>
      </Section>

      <Section id="our-challenge" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Our Challenge</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <p className="mt-6 text-lg text-vortex-grey max-w-3xl">
            Vortex One is committed to designing, building, and racing a competitive
            Baja vehicle. Our team focuses on engineering excellence, innovation,
            and collaboration to achieve success in all aspects of the competition.
          </p>
        </Container>
      </Section>

      <Section id="preparation" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Competition Preparation</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {competitionPhases.map((phase) => (
              <div
                key={phase}
                className="p-6 bg-white rounded-lg shadow-md border border-vortex-light-grey hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-sm font-medium text-vortex-dark">{phase}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
