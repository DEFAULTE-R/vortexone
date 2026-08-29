import { engineeringDisciplines, engineeringProcess } from '@/data/engineeringData';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function EngineeringPage() {
  return (
    <>
      <Section id="engineering" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">Engineering &amp; Simulation</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
            The engineering process that drives Vortex One from concept to competition.
          </p>
        </Container>
      </Section>

      <Section id="process" className="bg-vortex-dark text-vortex-white">
        <Container>
          <h2 className="text-3xl font-bold text-center">Engineering Loop</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {engineeringProcess.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="px-6 py-3 bg-vortex-white/10 rounded-md text-sm font-medium">
                  {step}
                </div>
                {index < engineeringProcess.length - 1 && (
                  <span className="text-accent mx-2">→</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="disciplines" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Engineering Disciplines</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringDisciplines.map((discipline) => (
              <div
                key={discipline.id}
                className="p-6 bg-white rounded-lg shadow-md border border-vortex-light-grey hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-vortex-dark">{discipline.title}</h3>
                <p className="mt-2 text-sm text-vortex-grey">{discipline.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
