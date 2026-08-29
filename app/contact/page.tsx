import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <Section id="contact" className="bg-vortex-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
          <p className="mt-4 text-center text-lg text-vortex-grey max-w-2xl mx-auto">
            Get in touch with Vortex One.
          </p>
        </Container>
      </Section>

      <Section id="contact-details" className="bg-vortex-white border-t border-vortex-light-grey">
        <Container>
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Email</h2>
              <p className="mt-2">
                <span className="text-vortex-grey">Team email — to be updated</span>
              </p>
              <p className="mt-1 text-sm text-vortex-grey">
                For general inquiries and team information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Sponsorship</h2>
              <p className="mt-2">
                <span className="text-vortex-grey">Sponsorship contact — to be updated</span>
              </p>
              <p className="mt-1 text-sm text-vortex-grey">
                For partnership and sponsorship opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Address</h2>
              <p className="mt-2 text-vortex-grey">
                Saveetha Engineering College
                <br />
                Chennai, Tamil Nadu
                <br />
                India
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Social Media</h2>
              <div className="mt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="text-accent hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-accent hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-accent hover:underline"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Quick Message</h2>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-vortex-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-vortex-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-vortex-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
