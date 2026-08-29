'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-black overflow-hidden flex items-center">
      {/* Background treatment — restrained, no vehicle asset yet */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(220,38,38,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-500 font-mono text-xs tracking-widest">00 / VORTEX ONE</span>
            <div className="h-px flex-1 max-w-[80px] bg-white/15" />
            <span className="text-gray-500 font-mono text-xs tracking-widest">BAJA SAE INTERNATIONAL</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight">
            VORTEX ONE
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Saveetha Engineering College
          </p>

          <div className="mt-10 max-w-2xl border-l-2 border-red-600 pl-6">
            <p className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
              Built to return.
            </p>
            <p className="mt-3 text-lg text-gray-400 leading-relaxed">
              Vortex One is back — representing Saveetha Engineering College
              in BAJA SAE INTERNATIONAL with a new generation of student engineers
              designing, building, and testing an off-road vehicle from the ground up.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/vehicle"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Explore the Vehicle
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/legacy"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-white text-sm font-semibold hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
