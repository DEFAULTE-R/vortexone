import { sponsors, sponsorTiers } from '@/data/sponsors';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function SponsorsPage() {
  return (
    <>
      <Section id="sponsors" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">Sponsors &amp; Partners</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
            Our partners who make Vortex One&apos;s engineering journey possible.
          </p>
        </Container>
      </Section>

      <Section id="sponsor-list" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          {sponsorTiers.map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier.id);
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier.id} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-semibold mb-6">{tier.label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierSponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className={`p-6 bg-white rounded-lg shadow-md border ${tier.className} hover:shadow-lg transition-shadow duration-300`}
                    >
                      <h3 className="text-lg font-semibold text-vortex-dark">
                        {sponsor.name}
                      </h3>
                      <p className="mt-2 text-sm text-vortex-grey">{sponsor.description}</p>
                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-accent hover:text-accent-hover text-sm"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </Section>

      <Section id="become-partner" className="bg-vortex-dark text-vortex-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Partner with Vortex One</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-vortex-light-grey">
              Interested in supporting the next generation of engineering?
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
