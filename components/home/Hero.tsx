'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Placeholder for vehicle image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1),transparent_50%)]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-red-600" />
              <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
                Saveetha Engineering College
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
              VORTEX
              <span className="text-red-600"> ONE</span>
            </h1>

            <p className="mt-4 text-xl text-gray-400 font-medium">
              Baja SAE Team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              ENGINEERING THE
              <span className="text-red-600"> COMEBACK.</span>
            </h2>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              A student engineering team from Saveetha Engineering College designing, 
              building, testing, and competing in Baja SAE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/vehicle"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Explore the Machine
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/legacy"
              className="inline-flex items-center justify-center px-8 py-4 text-gray-300 font-medium hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-red-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
