'use client';

import { motion } from 'framer-motion';
import { legacyTimeline } from '@/data/legacyTimeline';

export default function TheReturn() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-red-600 font-mono text-xs">01</span>
              <div className="h-px w-10 bg-red-600" />
              <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
                The Return
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              A team can pause. An identity does not have to.
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Vortex One existed, competed, and then went quiet for a period.
              A new generation of students at Saveetha Engineering College has
              since rebuilt the team from the ground up — its structure, its
              engineering process, and its vehicle.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              This isn&apos;t a redemption story. It&apos;s a team building
              something that can last: a repeatable engineering process,
              a documented history, and a vehicle prepared for BAJA SAE
              INTERNATIONAL.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border border-white/10">
              {legacyTimeline.map((event, i) => (
                <div
                  key={event.title}
                  className={`flex items-start gap-4 px-6 py-5 ${
                    i !== legacyTimeline.length - 1 ? 'border-b border-white/10' : ''
                  } ${event.title === 'The Comeback' ? 'bg-red-600/5' : ''}`}
                >
                  <span className="font-mono text-sm text-gray-600 w-24 shrink-0 pt-0.5">
                    {event.year}
                  </span>
                  <div>
                    <div className={`font-semibold ${event.title === 'The Comeback' ? 'text-red-500' : 'text-white'}`}>
                      {event.title}
                    </div>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
