'use client';

import { motion } from 'framer-motion';

const learningOutcomes = [
  {
    title: 'Engineering Skills',
    items: [
      'CAD modeling and design',
      'Finite element analysis',
      'Vehicle dynamics principles',
      'Manufacturing processes',
    ],
  },
  {
    title: 'Professional Development',
    items: [
      'Project management',
      'Team collaboration',
      'Technical communication',
      'Problem-solving under constraints',
    ],
  },
  {
    title: 'Competition Experience',
    items: [
      'Design presentations',
      'Technical documentation',
      'Cost analysis',
      'Performance testing',
    ],
  },
];

export default function WhatYouLearn() {
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
          <p className="text-red-500 font-mono text-sm">WHAT YOU LEARN</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            More than building a vehicle
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 border-t border-l border-white/10">
          {learningOutcomes.map((outcome) => (
            <div key={outcome.title} className="border-b border-r border-white/10 bg-black p-8">
              <h3 className="text-lg font-semibold text-white mb-5">{outcome.title}</h3>
              <ul className="space-y-3">
                {outcome.items.map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-400">
                    <span className="text-red-600 mr-3 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
