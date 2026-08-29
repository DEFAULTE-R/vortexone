'use client';

import { motion } from 'framer-motion';

const partnershipValues = [
  {
    title: 'Technical Collaboration',
    description: 'Work directly with engineering students on real design, manufacturing, and validation problems.',
  },
  {
    title: 'Student Talent',
    description: 'Access to motivated engineering students developing practical, project-tested skills.',
  },
  {
    title: 'Brand Visibility',
    description: 'Your name associated with a student engineering team and its competition program.',
  },
  {
    title: 'Engineering Presence',
    description: 'Demonstrate a commitment to engineering education and technical development.',
  },
];

export default function PartnershipValue() {
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
          <p className="text-red-500 font-mono text-sm">WHY PARTNER</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Why partner with Vortex One
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {partnershipValues.map((value, index) => (
            <div
              key={value.title}
              className="border-b border-r border-white/10 bg-black p-6"
            >
              <span className="text-red-600 font-mono text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
