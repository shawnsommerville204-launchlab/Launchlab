export default function Navbar() {
  return (
    <nav className="w-full border-b border-cyan-500/20 bg-black/50 backdrop-blur-md px-8 py-5">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          LAUNCHLAB
        </h1>

        <div className="flex gap-8 text-zinc-300">

          <a href="#" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400">
            Experiments
          </a>

          <a href="#" className="hover:text-cyan-400">
            Reports
          </a>

          <a href="#" className="hover:text-cyan-400">
            Profile
          </a>

        </div>

      </div>

    </nav>
  );
}