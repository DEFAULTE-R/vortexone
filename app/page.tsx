import Hero from '@/components/home/Hero';
import TheReturn from '@/components/home/TheReturn';
import TheMachine from '@/components/home/TheMachine';
import Engineering from '@/components/home/Engineering';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <TheReturn />
      <TheMachine />
      <Engineering />

      <section className="py-24 bg-gray-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/team" className="group bg-black border border-white/10 p-8 hover:border-red-600/60 transition-colors">
              <span className="text-red-500 font-mono text-sm">01</span>
              <h2 className="mt-4 text-2xl font-bold text-white">The Team</h2>
              <p className="mt-3 text-gray-400">Meet the people designing, simulating, manufacturing, and driving Vortex One forward.</p>
              <span className="inline-block mt-6 text-sm text-white group-hover:text-red-500">Meet the team →</span>
            </Link>
            <Link href="/competition" className="group bg-black border border-white/10 p-8 hover:border-red-600/60 transition-colors">
              <span className="text-red-500 font-mono text-sm">02</span>
              <h2 className="mt-4 text-2xl font-bold text-white">Competition</h2>
              <p className="mt-3 text-gray-400">Understand the Baja SAE challenge and how our campaign is being built around it.</p>
              <span className="inline-block mt-6 text-sm text-white group-hover:text-red-500">Explore competition →</span>
            </Link>
            <Link href="/sponsors" className="group bg-black border border-white/10 p-8 hover:border-red-600/60 transition-colors">
              <span className="text-red-500 font-mono text-sm">03</span>
              <h2 className="mt-4 text-2xl font-bold text-white">Partner With Us</h2>
              <p className="mt-3 text-gray-400">Support a student engineering program through technical, manufacturing, academic, or financial partnership.</p>
              <span className="inline-block mt-6 text-sm text-white group-hover:text-red-500">Become a partner →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
