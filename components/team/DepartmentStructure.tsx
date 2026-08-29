'use client';

import { motion } from 'framer-motion';

const departments = [
  {
    name: 'Chassis',
    lead: 'To be announced',
    description: 'Frame design, structural analysis, and fabrication',
    responsibilities: [
      'Space frame design and optimization',
      'Finite element analysis',
      'Material selection and testing',
      'Welding and fabrication'
    ]
  },
  {
    name: 'Suspension',
    lead: 'To be announced',
    description: 'Suspension geometry and dynamics',
    responsibilities: [
      'Suspension geometry design',
      'Kinematics analysis',
      'Shock and spring selection',
      'Dynamic testing'
    ]
  },
  {
    name: 'Powertrain',
    lead: 'To be announced',
    description: 'Engine, CVT, and drivetrain systems',
    responsibilities: [
      'Engine integration',
      'CVT tuning',
      'Drivetrain design',
      'Performance optimization'
    ]
  },
  {
    name: 'Simulation',
    lead: 'To be announced',
    description: 'Computational analysis and validation',
    responsibilities: [
      'Finite element analysis',
      'Computational fluid dynamics',
      'Vehicle dynamics simulation',
      'Data analysis'
    ]
  },
  {
    name: 'Business & Sponsorship',
    lead: 'To be announced',
    description: 'Partnerships, funding, and operations',
    responsibilities: [
      'Sponsor relationships',
      'Budget management',
      'Team operations',
      'Event coordination'
    ]
  }
];

export default function DepartmentStructure() {
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
            Department Structure
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our team is organized into specialized departments, each responsible 
            for critical aspects of vehicle development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-lg p-6 hover:border-red-600/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                <span className="text-xs text-red-500 font-medium">Department</span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">{dept.description}</p>
              
              <div className="text-sm text-gray-500 mb-4">
                Lead: <span className="text-white">{dept.lead}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Key Responsibilities
                </h4>
                <ul className="space-y-1">
                  {dept.responsibilities.map((resp) => (
                    <li key={resp} className="text-sm text-gray-500 flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
