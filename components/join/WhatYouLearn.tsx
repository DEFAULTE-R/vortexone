'use client';

import { motion } from 'framer-motion';

const learningOutcomes = [
  {
    title: 'Engineering Skills',
    items: [
      'CAD modeling and design',
      'Finite element analysis',
      'Vehicle dynamics principles',
      'Manufacturing processes'
    ]
  },
  {
    title: 'Professional Development',
    items: [
      'Project management',
      'Team collaboration',
      'Technical communication',
      'Problem-solving'
    ]
  },
  {
    title: 'Competition Experience',
    items: [
      'Design presentations',
      'Technical documentation',
      'Cost analysis',
      'Performance testing'
    ]
  }
];

export default function WhatYouLearn() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What You'll Learn
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Joining Vortex One is more than just building a vehicle. It's an 
            opportunity to develop skills that will serve you throughout your career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningOutcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{outcome.title}</h3>
              <ul className="space-y-3">
                {outcome.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
