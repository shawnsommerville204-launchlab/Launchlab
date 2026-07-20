"use client";

import { useEffect, useState } from "react";

type ReactorSequenceProps = {
  launchStatus: string;
  setLaunchStatus: (status: string) => void;
};

const steps = [
  "⚡ Reactor initializing...",
  "🦈 Investor Council connecting...",
  "❤️ Customer Council analyzing...",
  "⚙️ Architect designing solution...",
  "📣 Growth Council building strategy...",
  "😈 Challenger stress testing...",
  "🚀 Launch Director preparing report...",
];

export default function ReactorSequence({
  launchStatus,
  setLaunchStatus,
}: ReactorSequenceProps) {

  const [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {

    if (launchStatus !== "analyzing") {
      setCurrentStep(0);
      return;
    }

const timer = setInterval(() => {

  setCurrentStep((previous) => {

    if (previous < steps.length - 1) {
      return previous + 1;
    }

    setTimeout(() => {
      setLaunchStatus("complete");
    }, 1500);

    return previous;

  });

}, 1200);


    return () => clearInterval(timer);

  }, [launchStatus]);


  if (launchStatus !== "analyzing") {
    return null;
  }


  return (

    <section className="px-6 py-20">

      <div className="max-w-3xl mx-auto rounded-3xl border border-cyan-500/30 bg-zinc-900 p-10 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          ⚡ MISSION CONTROL
        </h2>


        <p className="text-center mt-4 text-zinc-400">
          Reactor analysis in progress...
        </p>


        <div className="mt-8 space-y-5 text-lg">

          {steps.slice(0, currentStep + 1).map((step, index) => (

            <p 
              key={index}
              className="text-white"
            >
              {step}
            </p>

          ))}

        </div>


      </div>

    </section>

  );
}