import { legacyTimeline } from '@/data/legacyTimeline';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function LegacyPage() {
  return (
    <>
      <Section id="legacy" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">Legacy</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
            Vortex One is not starting from zero. The team carries forward the
            experience, lessons, engineering knowledge, and identity built by
            previous generations.
          </p>
        </Container>
      </Section>

      <Section id="timeline" className="bg-vortex-dark text-vortex-white">
        <Container>
          <h2 className="text-3xl font-bold text-center">Our Journey</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <div className="mt-8 space-y-8">
            {legacyTimeline.map((event, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-accent last:border-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
                <p className="text-sm font-mono text-accent">{event.year}</p>
                <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
                <p className="mt-2 text-vortex-light-grey">{event.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="archives" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <h2 className="text-3xl font-bold">Archives</h2>
          <div className="w-16 h-1 bg-accent mt-4"></div>
          <div className="mt-6 text-center">
            <p className="text-vortex-grey">Historical vehicles, photographs, and technical work coming soon.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
