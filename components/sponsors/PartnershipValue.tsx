'use client';

import { motion } from 'framer-motion';

const partnershipValues = [
  {
    title: 'Technical Collaboration',
    description: 'Work directly with engineering students on real-world challenges and innovative solutions.',
    icon: '🔧'
  },
  {
    title: 'Student Talent',
    description: 'Access to motivated engineering students who are developing practical skills and expertise.',
    icon: '🎓'
  },
  {
    title: 'Brand Exposure',
    description: 'Your brand associated with engineering excellence and collegiate motorsport competition.',
    icon: '📈'
  },
  {
    title: 'Engineering Visibility',
    description: 'Showcase your commitment to engineering education and technical innovation.',
    icon: '⚙️'
  }
];

export default function PartnershipValue() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Partner With Vortex One?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We offer meaningful partnership opportunities that deliver value through 
            technical collaboration, talent development, and brand visibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-white/10 rounded-lg p-6 hover:border-red-600/50 transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
