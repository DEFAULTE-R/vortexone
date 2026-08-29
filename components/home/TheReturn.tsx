'use client';

import { motion } from 'framer-motion';

export default function TheReturn() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-red-600 font-mono text-sm">02</span>
              <div className="h-px w-12 bg-red-600" />
              <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
                The Return
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Returning With
              <span className="text-red-600"> Purpose</span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Vortex One is returning — not simply to compete, but to build again, 
              engineer again, and establish a new generation of the team.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              After a significant break from competition, our team has rebuilt its 
              foundation with renewed engineering ambition and competitive intent. 
              We approach this return with the maturity of a team that understands 
              what it takes to compete at the highest level.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              This is not a comeback story about redemption. This is about building 
              something that can last — a team, a culture, and machines that represent 
              the best of Saveetha Engineering College.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-red-600 mb-4">2026</div>
                <div className="text-gray-400">The Return Season</div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Team Status</span>
                    <span className="text-white font-semibold">Rebuilding</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Vehicle</span>
                    <span className="text-white font-semibold">In Development</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Competition</span>
                    <span className="text-white font-semibold">Baja SAE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-red-600" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-red-600" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
