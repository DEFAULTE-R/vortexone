export default function EngineeringHero() {
  return (
    <section className="relative overflow-hidden bg-black border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(220,38,38,.14),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <p className="text-red-500 text-xs font-mono tracking-widest">03 / ENGINEERING</p>
        <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight text-white">
          How we build
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Engineering decisions are made, analysed, tested, and revised.
          This page documents the methods behind the VX-1 — not a marketing
          claim of what the vehicle can do.
        </p>
      </div>
    </section>
  );
}
