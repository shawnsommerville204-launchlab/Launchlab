export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-4xl">

        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-400">
          ⚡ AI CORE ONLINE
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Your ideas are
          <span className="text-cyan-400"> raw material.</span>
        </h1>

        <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">
          LaunchLab helps founders transform rough ideas into
          launch-ready products through AI-powered analysis,
          strategy, and guidance.
        </p>

        <button className="mt-10 px-10 py-4 rounded-full bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition">
          ENTER THE LAB
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-zinc-900">
            🧠
            <h3 className="mt-3 font-bold">
              Idea Engine
            </h3>
            <p className="text-zinc-400 text-sm">
              Turn concepts into strategies.
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-zinc-900">
            📊
            <h3 className="mt-3 font-bold">
              Market Scanner
            </h3>
            <p className="text-zinc-400 text-sm">
              Find strengths and weaknesses.
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-zinc-900">
            🚀
            <h3 className="mt-3 font-bold">
              Launch Strategy
            </h3>
            <p className="text-zinc-400 text-sm">
              Build your path forward.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}