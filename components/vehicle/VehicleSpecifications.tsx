'use client';

import { motion } from 'framer-motion';

const specifications = [
  {
    category: 'Dimensions',
    specs: [
      { label: 'Wheelbase', value: 'TBD', unit: 'mm', verified: false },
      { label: 'Track Width (Front)', value: 'TBD', unit: 'mm', verified: false },
      { label: 'Track Width (Rear)', value: 'TBD', unit: 'mm', verified: false },
      { label: 'Ground Clearance', value: 'TBD', unit: 'mm', verified: false },
      { label: 'Overall Length', value: 'TBD', unit: 'mm', verified: false },
    ]
  },
  {
    category: 'Powertrain',
    specs: [
      { label: 'Engine', value: 'Briggs & Stratton', unit: '', verified: true },
      { label: 'Displacement', value: '305', unit: 'cc', verified: true },
      { label: 'Transmission', value: 'CVT', unit: '', verified: true },
      { label: 'Drive Type', value: 'Rear Wheel Drive', unit: '', verified: true },
    ]
  },
  {
    category: 'Suspension',
    specs: [
      { label: 'Front Suspension', value: 'Double Wishbone', unit: '', verified: false },
      { label: 'Rear Suspension', value: 'Trailing Arm', unit: '', verified: false },
      { label: 'Travel', value: 'TBD', unit: 'mm', verified: false },
    ]
  },
  {
    category: 'Brakes & Steering',
    specs: [
      { label: 'Brake Type', value: 'Disc', unit: '', verified: false },
      { label: 'Steering', value: 'Rack and Pinion', unit: '', verified: false },
    ]
  }
];

export default function VehicleSpecifications() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-400">
            Detailed specifications for the VX-1. Values marked as TBD are under 
            development and will be updated as testing progresses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {specifications.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="bg-black/50 px-6 py-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">{section.category}</h3>
              </div>
              <div className="divide-y divide-white/5">
                {section.specs.map((spec) => (
                  <div key={spec.label} className="px-6 py-4 flex items-center justify-between">
                    <span className="text-gray-400">{spec.label}</span>
                    <div className="text-right">
                      <span className="text-white font-semibold">{spec.value}</span>
                      {spec.unit && (
                        <span className="text-gray-500 ml-1 text-sm">{spec.unit}</span>
                      )}
                      {!spec.verified && (
                        <span className="block text-xs text-gray-600 mt-1">Unverified</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
