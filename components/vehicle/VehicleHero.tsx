'use client';

import { motion } from 'framer-motion';

export default function VehicleHero() {
  return (
    <section className="relative min-h-[60vh] bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_50%)]" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-12 bg-red-600" />
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
              The Machine
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold text-white">
            VX-1
          </h1>
          
          <p className="mt-4 text-xl text-gray-400">
            2026-2027 Season Vehicle
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-red-600/20 text-red-500 rounded-full text-sm font-medium">
              Design Phase
            </span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium">
              Baja SAE
            </span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium">
              SAE International
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
