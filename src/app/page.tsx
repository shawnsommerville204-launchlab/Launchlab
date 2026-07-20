"use client";

import { useState } from "react";

import { IdeaData } from "../types/idea";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Council from "../components/Council";
import IdeaChamber from "../components/IdeaChamber";
import LaunchEngine from "../components/LaunchEngine";
import ReactorSequence from "../components/ReactorSequence";
import CouncilReport from "../components/CouncilReport";
import ScoreCard from "../components/ScoreCard";

export default function Home() {
  const [ideaData, setIdeaData] = useState<IdeaData>({
    ideaName: "",
    customer: "",
    problem: "",
  });

  const [launchStatus, setLaunchStatus] = useState("ready");

  const [scoreData, setScoreData] = useState({
    score: 0,
    status: "",
    strengths: [] as string[],
    nextStep: "",
  });

  function runCouncilAnalysis() {
    let score = 50;
    const strengths: string[] = [];

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
        "Validate the idea with real customers before building.",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <Hero />

      <Council />

      <IdeaChamber setIdeaData={setIdeaData} />

      <LaunchEngine
        ideaData={ideaData}
        launchStatus={launchStatus}
        setLaunchStatus={setLaunchStatus}
        runCouncilAnalysis={runCouncilAnalysis}
      />

     

      <ReactorSequence
        launchStatus={launchStatus}
        setLaunchStatus={setLaunchStatus}
      />

      <CouncilReport launchStatus={launchStatus} />

      <ScoreCard
        launchStatus={launchStatus}
        score={scoreData.score}
        status={scoreData.status}
        strengths={scoreData.strengths}
        nextStep={scoreData.nextStep}
      />
    </main>
  );
}