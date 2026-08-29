import Link from 'next/link';
import { Container } from '../ui/Container';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Vehicle', href: '/vehicle' },
  { name: 'Engineering', href: '/engineering' },
  { name: 'Competition', href: '/competition' },
  { name: 'Legacy', href: '/legacy' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-vortex-black text-vortex-white border-t border-vortex-grey/20">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold tracking-wider">VORTEX ONE</h3>
              <p className="mt-2 text-vortex-light-grey">Saveetha Engineering College</p>
              <p className="mt-4 text-sm text-vortex-grey max-w-xs">
                Student engineers. One vehicle. One team.
              </p>
              <p className="mt-2 text-xs text-vortex-grey">
                Vortex One is a student engineering team representing Saveetha Engineering College in Baja SAE competition.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-vortex-grey mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-vortex-light-grey hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-vortex-grey mb-4">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-vortex-light-grey hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-sm text-vortex-grey">Contact</p>
                <a href="#" className="text-sm text-vortex-light-grey hover:text-accent transition-colors">
                  Team contact — to be updated
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-vortex-grey/20 text-center">
            <p className="text-xs text-vortex-grey">
              © {new Date().getFullYear()} Vortex One. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
