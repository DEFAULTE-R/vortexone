'use client';

import { motion } from 'framer-motion';

const systems = [
  {
    name: 'Chassis',
    status: 'In Development',
    description: 'Space frame design optimized for stiffness and weight',
    lead: 'TBD',
    progress: 30,
    color: 'red'
  },
  {
    name: 'Suspension',
    status: 'In Development',
    description: 'Double wishbone front, trailing arm rear suspension system',
    lead: 'TBD',
    progress: 25,
    color: 'red'
  },
  {
    name: 'Powertrain',
    status: 'Planning',
    description: 'Briggs & Stratton engine with CVT transmission',
    lead: 'TBD',
    progress: 15,
    color: 'orange'
  },
  {
    name: 'Steering & Brakes',
    status: 'Planning',
    description: 'Rack and pinion steering with disc brake system',
    lead: 'TBD',
    progress: 10,
    color: 'orange'
  },
  {
    name: 'Electrical & Data',
    status: 'Planning',
    description: 'Sensor integration and data acquisition system',
    lead: 'TBD',
    progress: 5,
    color: 'yellow'
  },
  {
    name: 'Simulation',
    status: 'Active',
    description: 'FEA, kinematics, and dynamics simulation work',
    lead: 'TBD',
    progress: 20,
    color: 'green'
  }
];

export default function SystemArchitecture() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            System Architecture
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            The VX-1 is developed through integrated subsystem engineering. Each 
            system is designed, analyzed, and validated both independently and as 
            part of the complete vehicle architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-lg p-6 hover:border-red-600/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{system.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  system.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  system.status === 'In Development' ? 'bg-red-500/20 text-red-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>
                  {system.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">{system.description}</p>
              
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-500">Lead: {system.lead}</span>
                <span className="text-gray-500">{system.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${system.progress}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
