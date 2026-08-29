import Link from 'next/link';
import { Section } from '../ui/Section';

export const ReturningSection = () => {
  return (
    <Section id="returning" className="bg-vortex-dark text-vortex-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Returning With Purpose</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
        <p className="mt-8 text-lg text-vortex-light-grey leading-relaxed">
          Vortex One is the Baja team of Saveetha Engineering College, built around
          a long-standing tradition of student-led engineering and competition.
          After a period away from the spotlight, the team has returned with a
          renewed focus on engineering, collaboration, and competitive performance.
        </p>
        <div className="mt-8">
          <Link
            href="/legacy"
            className="text-accent hover:underline font-medium transition-colors"
          >
            Learn about our legacy →
          </Link>
        </div>
      </div>
    </Section>
  );
};
