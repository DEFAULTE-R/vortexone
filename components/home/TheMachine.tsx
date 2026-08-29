'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const vehicleFacts = [
  { label: 'Vehicle', value: 'VX-1' },
  { label: 'Season', value: '2026–27' },
  { label: 'Class', value: 'Baja SAE' },
  { label: 'Status', value: 'Design Phase' },
];

export default function TheMachine() {
  return (
    <section className="py-24 bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-red-600 font-mono text-xs">02</span>
            <div className="h-px w-10 bg-red-600" />
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
              The Machine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Engineering a new generation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 aspect-video border border-white/10 bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <span className="font-mono text-xs text-gray-600 tracking-widest">VEHICLE RENDER</span>
              <p className="mt-2 text-gray-600 text-sm">Photography and CAD renders will appear here as the build progresses.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-black p-8 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-6">VX-1</h3>

            <div className="space-y-5 flex-1">
              {vehicleFacts.map((fact) => (
                <div key={fact.label} className="border-b border-white/10 pb-4 last:border-0">
                  <div className="text-xs text-gray-500 font-mono tracking-wide">{fact.label.toUpperCase()}</div>
                  <div className="mt-1 text-lg text-white font-semibold">{fact.value}</div>
                </div>
              ))}
            </div>

            <Link
              href="/vehicle"
              className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              View full vehicle details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
