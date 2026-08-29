'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BajaSAEInfo() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What is Baja SAE?
          </h2>
          
          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-relaxed">
              Baja SAE is an international collegiate engineering design competition 
              organized by SAE International. Teams design, build, and test an off-road 
              vehicle that must survive severe punishment on rough terrain.
            </p>
            
            <p className="text-lg leading-relaxed">
              The competition challenges students to apply classroom engineering 
              principles to real-world design problems. Each vehicle must be safe, 
              easily transported, easily maintained, and fun to drive while withstanding 
              the rigors of off-road racing.
            </p>
            
            <p className="text-lg leading-relaxed">
              Students must balance performance with reliability, weight with durability, 
              and cost with capability. The competition simulates real-world engineering 
              projects where teams must work within constraints while meeting performance 
              objectives.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-900 border border-white/10 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Competition Categories</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-3">Static Events</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Design Evaluation</li>
                  <li>• Cost Report</li>
                  <li>• Sales Presentation</li>
                  <li>• Technical Inspection</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Dynamic Events</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Acceleration</li>
                  <li>• Maneuverability</li>
                  <li>• Hill Climb</li>
                  <li>• Suspension & Traction</li>
                  <li>• Endurance Race (4 Hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="https://www.bajasae.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
            >
              Learn more about Baja SAE
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
