"use client";

type ScoreCardProps = {
  launchStatus: string;
  score: number;
  status: string;
  strengths: string[];
  nextStep: string;
};

export default function ScoreCard({
  launchStatus,
  score,
  status,
  strengths,
  nextStep,
}: ScoreCardProps) {

  if (launchStatus !== "complete") {
    return null;
  }


  return (
    <section className="px-6 py-20">

      <div className="max-w-3xl mx-auto rounded-3xl border border-cyan-500/30 bg-zinc-900 p-10 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          🚀 LAUNCH REPORT GENERATED
        </h2>


        <div className="mt-10 text-center">

          <p className="text-zinc-400">
            Launch Potential
          </p>

          <p className="text-7xl font-bold text-white mt-2">
            {score}
          </p>

          <p className="text-xl text-cyan-300 mt-3">
            {status}
          </p>

        </div>


        <div className="mt-10">

          <h3 className="text-2xl font-bold text-white">
            Strengths
          </h3>

          <ul className="mt-4 space-y-3 text-zinc-300">

            {strengths.map((strength, index) => (
              <li key={index}>
                ✅ {strength}
              </li>
            ))}

          </ul>

        </div>


        <div className="mt-10 border-t border-zinc-700 pt-6">

          <h3 className="text-2xl font-bold text-white">
            Next Mission
          </h3>

          <p className="mt-3 text-zinc-300">
            {nextStep}
          </p>

        </div>


      </div>

    </section>
  );
}