'use client';

import { motion } from 'framer-motion';

const engineeringProcess = [
  { step: '01', title: 'Requirements', description: 'Defining performance targets and design constraints' },
  { step: '02', title: 'Architecture', description: 'System-level design and component integration' },
  { step: '03', title: 'CAD', description: 'Detailed 3D modeling and design documentation' },
  { step: '04', title: 'Simulation', description: 'FEA, kinematics, and dynamics validation' },
  { step: '05', title: 'Design Review', description: 'Critical evaluation and design optimization' },
  { step: '06', title: 'Manufacturing', description: 'Precision fabrication and assembly' },
  { step: '07', title: 'Testing', description: 'System validation and performance verification' },
  { step: '08', title: 'Iteration', description: 'Continuous improvement based on test data' },
];

export default function Engineering() {
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
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-red-600 font-mono text-sm">04</span>
            <div className="h-px w-12 bg-red-600" />
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
              Engineering Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            From Concept to Competition
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our engineering methodology ensures every design decision is backed by 
            analysis, validated through testing, and refined through iteration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringProcess.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-white/10 rounded-lg p-6 hover:border-red-600/50 transition-colors group"
            >
              <div className="text-3xl font-bold text-red-600 mb-4">{process.step}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
              <p className="text-sm text-gray-400">{process.description}</p>
              <div className="mt-4 h-0.5 w-12 bg-red-600/50 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
