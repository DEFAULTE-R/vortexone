'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vortex-black text-vortex-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-vortex-black/80 to-vortex-dark/80 flex items-center justify-center">
          <span className="text-vortex-grey text-lg">Hero Image Placeholder</span>
        </div>
        <div className="absolute inset-0 bg-vortex-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          VORTEX ONE
        </h1>
        <p
          className={`mt-4 text-xl sm:text-2xl text-vortex-light-grey transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Saveetha Engineering College
        </p>
        <p
          className={`mt-6 text-lg sm:text-xl text-accent font-mono uppercase tracking-widest transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Engineering the comeback.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button href="/team" variant="primary">
            Meet the Team
          </Button>
          <Button href="/vehicle" variant="secondary">
            Our Machine
          </Button>
        </div>
      </div>
    </section>
  );
};
