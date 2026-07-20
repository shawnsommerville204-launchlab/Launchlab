"use client";

import { useState } from "react";

type IdeaData = {
  ideaName: string;
  customer: string;
  problem: string;
};

type LaunchEngineProps = {
  ideaData: {
    ideaName: string;
    customer: string;
    problem: string;
  };

  launchStatus: string;

  setLaunchStatus: (status: string) => void;
  runCouncilAnalysis: () => void;
};
 


export default function LaunchEngine({
  ideaData,
  launchStatus,
  setLaunchStatus,
  runCouncilAnalysis,
}: LaunchEngineProps) {

  const [analysisStarted, setAnalysisStarted] = useState(false);

  const exampleIdea = ideaData;
   


 function startAnalysis() {
  setAnalysisStarted(true);

  setLaunchStatus("analyzing");

  setTimeout(() => {
    runCouncilAnalysis();
  }, 8000);
}
  


  return (
    <section className="px-6 py-20">

      <div className="max-w-3xl mx-auto rounded-3xl border border-cyan-500/30 bg-zinc-900 p-10">

        <h2 className="text-3xl font-bold text-cyan-400 text-center">
          🚀 LAUNCH ENGINE
        </h2>


        {!analysisStarted ? (

          <div className="mt-8 text-center">

            <p className="text-zinc-300">
              Ready to analyze:
            </p>

            <div className="mt-4 text-white">
              <p>{exampleIdea.ideaName}</p>
              <p>{exampleIdea.customer}</p>
              <p>{exampleIdea.problem}</p>
            </div>


            <button
              onClick={startAnalysis}
              className="mt-8 w-full py-4 rounded-xl bg-cyan-400 text-black font-bold"
            >
              ⚡ IGNITE ANALYSIS
            </button>

          </div>

        ) : (

          <div className="mt-8 text-center">

            <h3 className="text-2xl text-white">
              Reactor Activated...
            </h3>

            <p className="mt-4 text-cyan-300">
              Council members are analyzing your idea.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}