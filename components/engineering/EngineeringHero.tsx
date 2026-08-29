"use client";
'use client';
import { motion } from 'framer-motion';
export default function EngineeringHero() {
  return <section className="relative overflow-hidden bg-black border-b border-white/10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(220,38,38,.14),transparent_45%)]"/><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="text-red-500 text-sm font-mono tracking-widest">04 / ENGINEERING</motion.p><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">Engineering, <span className="text-red-600">documented.</span></motion.h1><p className="mt-6 max-w-2xl text-lg text-gray-400">A technical portfolio of the methods, analyses, manufacturing decisions, and validation work behind the vehicle.</p></div></section>;
}
