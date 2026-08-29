'use client';

import { motion } from 'framer-motion';
import { vehicleSystems } from '@/data/vehicleSpecs';

export default function SystemArchitecture() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-red-500 font-mono text-sm">SYSTEM ARCHITECTURE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            One vehicle, integrated systems
          </h2>
          <p className="mt-4 text-gray-400">
            The VX-1 is developed as a set of interdependent subsystems, each
            designed and validated on its own terms and as part of the
            complete vehicle. Leads and development status will be updated
            as the 2026–27 program progresses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {vehicleSystems.map((system, index) => (
            <div
              key={system}
              className="border-b border-r border-white/10 bg-black p-6"
            >
              <span className="text-red-600 font-mono text-xs">
                SYS-{String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{system}</h3>
              <div className="mt-4 text-xs text-gray-600 font-mono">Lead: To be announced</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
