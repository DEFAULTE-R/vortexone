'use client';

import { motion } from 'framer-motion';
import { legacyTimeline } from '@/data/legacyTimeline';

export default function HistoryTimeline() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-red-500 font-mono text-sm">TIMELINE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Team history
          </h2>
          <p className="mt-4 text-gray-400">
            Built before. Paused. Returned. Building forward. Dates and
            details will be filled in as the archive is confirmed.
          </p>
        </motion.div>

        <div className="border-l-2 border-white/10">
          {legacyTimeline.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className={`absolute -left-[7px] top-1 w-3 h-3 ${
                event.title === 'The Comeback' ? 'bg-red-600' : 'bg-gray-700'
              }`} />
              <span className="font-mono text-sm text-red-500">{event.year}</span>
              <h3 className="mt-1 text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-gray-400 max-w-2xl leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
