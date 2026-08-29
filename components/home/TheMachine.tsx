'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const vehicleSpecs = [
  { label: 'Vehicle Name', value: 'VX-1', status: 'In Development' },
  { label: 'Season', value: '2026-2027', status: 'Current' },
  { label: 'Class', value: 'Baja SAE', status: 'SAE International' },
  { label: 'Status', value: 'Design Phase', status: 'Active' },
];

export default function TheMachine() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-red-600 font-mono text-sm">03</span>
            <div className="h-px w-12 bg-red-600" />
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
              The Machine
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Engineering a New Generation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vehicle Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM15 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <p className="text-gray-600">Vehicle Render Coming Soon</p>
              </div>
            </div>
          </motion.div>

          {/* Vehicle Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">VX-1</h3>
            
            <div className="space-y-6">
              {vehicleSpecs.map((spec) => (
                <div key={spec.label} className="border-b border-white/10 pb-4 last:border-0">
                  <div className="text-sm text-gray-500">{spec.label}</div>
                  <div className="text-lg text-white font-semibold">{spec.value}</div>
                  <div className="text-xs text-red-500">{spec.status}</div>
                </div>
              ))}
            </div>

            <Link
              href="/vehicle"
              className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              View Full Vehicle Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
