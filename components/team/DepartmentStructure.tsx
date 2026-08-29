'use client';

import { motion } from 'framer-motion';
import { teamData } from '@/data/team';

export default function DepartmentStructure() {
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
          <p className="text-red-500 font-mono text-sm">STRUCTURE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Department structure
          </h2>
          <p className="mt-4 text-gray-400">
            The team is organized into departments, each responsible for a
            defined part of vehicle development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {teamData.departments.map((dept, index) => (
            <div
              key={dept.name}
              className="border-b border-r border-white/10 bg-black p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                <span className="text-xs text-gray-600 font-mono">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-400">{dept.description}</p>
              <div className="mt-4 text-xs text-gray-600 font-mono">
                Lead: {dept.lead}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
