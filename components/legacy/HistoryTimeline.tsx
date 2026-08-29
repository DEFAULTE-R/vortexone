'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 'Pre-2020',
    title: 'Original Vortex One Era',
    description: 'The team was originally established and competed in Baja SAE events. Historical records are currently being compiled.',
    status: 'Archive Under Reconstruction'
  },
  {
    year: '2020-2023',
    title: 'Team Hiatus',
    description: 'A period where the team was inactive from competition. During this time, the foundation for the return was being laid.',
    status: 'Documented'
  },
  {
    year: '2024',
    title: 'The Return',
    description: 'Vortex One officially returned with renewed engineering ambition and competitive intent. New team formation and initial vehicle development began.',
    status: 'Current'
  },
  {
    year: '2025',
    title: 'Building Forward',
    description: 'Continued development of the VX-1 vehicle and preparation for competition. The team is establishing its new identity and legacy.',
    status: 'Upcoming'
  }
];

export default function HistoryTimeline() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Team History
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Built before. Paused. Returned. Building forward.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-start ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 bg-red-600 rounded-full mt-1.5" />
                
                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-gray-900 border border-white/10 rounded-lg p-6">
                    <div className="text-2xl font-bold text-red-600 mb-2">{event.year}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{event.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Current' ? 'bg-red-500/20 text-red-400' :
                      event.status === 'Upcoming' ? 'bg-orange-500/20 text-orange-400' :
                      event.status === 'Archive Under Reconstruction' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
