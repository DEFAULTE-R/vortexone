'use client';

import { motion } from 'framer-motion';
import { vehicleSpecs } from '@/data/vehicleSpecs';

export default function VehicleSpecifications() {
  const grouped = vehicleSpecs.reduce<Record<string, typeof vehicleSpecs>>((acc, spec) => {
    acc[spec.category] = acc[spec.category] || [];
    acc[spec.category].push(spec);
    return acc;
  }, {});

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-red-500 font-mono text-sm">SPECIFICATIONS</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Technical specifications
          </h2>
          <p className="mt-4 text-gray-400">
            Confirmed figures for the VX-1 will be published here as design
            and manufacturing decisions are finalized. Values marked TBD are
            still in development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {Object.entries(grouped).map(([category, specs]) => (
            <div key={category} className="bg-black">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-sm font-mono tracking-widest text-red-500 uppercase">{category}</h3>
              </div>
              <div className="divide-y divide-white/5">
                {specs.map((spec) => (
                  <div key={spec.spec} className="px-6 py-4 flex items-center justify-between">
                    <span className="text-gray-400">{spec.spec}</span>
                    <span className={spec.value === 'To be updated' ? 'text-gray-600 text-sm font-mono' : 'text-white font-semibold'}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
