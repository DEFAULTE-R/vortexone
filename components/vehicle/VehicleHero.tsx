export default function VehicleHero() {
  return (
    <section className="relative py-28 bg-black border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(220,38,38,.12),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-red-500 text-xs font-mono tracking-widest">02 / VEHICLE</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold text-white">
          VX-1
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          2026–27 season vehicle
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 border border-red-600/40 text-red-500">Design Phase</span>
          <span className="px-3 py-1.5 border border-white/15 text-gray-300">Baja SAE</span>
          <span className="px-3 py-1.5 border border-white/15 text-gray-300">SAE International</span>
        </div>
      </div>
    </section>
  );
}
