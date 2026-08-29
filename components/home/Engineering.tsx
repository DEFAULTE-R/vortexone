'use client';

import { motion } from 'framer-motion';
import { engineeringProcess } from '@/data/engineeringData';

export default function Engineering() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-red-600 font-mono text-xs">03</span>
            <div className="h-px w-10 bg-red-600" />
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
              How We Build
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            From concept to competition
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Every design decision is made, analysed, tested, and revised —
            in that order.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {engineeringProcess.map((step, index) => (
            <div
              key={step}
              className="border-b border-r border-white/10 p-6"
            >
              <div className="text-xs font-mono text-red-600">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
