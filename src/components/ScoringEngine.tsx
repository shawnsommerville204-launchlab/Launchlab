"use client";

import { IdeaData } from "../types/idea";

type ScoringEngineProps = {
  ideaData: IdeaData;
  setScoreData: (data: {
    score: number;
    status: string;
    strengths: string[];
    nextStep: string;
  }) => void;
};

export default function ScoringEngine({
  ideaData,
  setScoreData,
}: ScoringEngineProps) {


  function analyzeIdea() {

    let score = 50;

    const strengths = [];


    if (ideaData.ideaName.length > 3) {
      score += 10;
      strengths.push("Clear product identity");
    }


    if (ideaData.customer.length > 3) {
      score += 15;
      strengths.push("Defined target customer");
    }


    if (ideaData.problem.length > 10) {
      score += 15;
      strengths.push("Problem is clearly identified");
    }


    setScoreData({
      score,
      status:
        score >= 80
          ? "🚀 High Launch Potential"
          : "🧪 Needs More Validation",

      strengths,

      nextStep:
        "Validate the idea with real customers before building."
    });

  }


  return (
    <button
      onClick={analyzeIdea}
      className="mt-6 w-full py-4 rounded-xl bg-cyan-400 text-black font-bold"
    >
      🧠 RUN COUNCIL ANALYSIS
    </button>
  );
}