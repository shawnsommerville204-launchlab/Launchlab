"use client";

import { useState } from "react";

type IdeaChamberProps = {
  setIdeaData: (data: {
    ideaName: string;
    customer: string;
    problem: string;
  }) => void;
};

export default function IdeaChamber({
  setIdeaData,
}: IdeaChamberProps) {

  const [ideaName, setIdeaName] = useState("");
  const [customer, setCustomer] = useState("");
  const [problem, setProblem] = useState("");

  return (
    <section className="px-6 py-20">

      <div className="max-w-3xl mx-auto border border-cyan-500/30 rounded-3xl p-10 bg-zinc-900 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          🧪 IDEA CHAMBER
        </h2>

        <p className="text-center text-zinc-400 mt-4">
          Describe the future you are trying to build.
        </p>


        <div className="mt-8 space-y-6">

          <input
            className="w-full rounded-xl bg-black border border-cyan-500/30 p-4 text-white"
            placeholder="What is your idea called?"
            value={ideaName}
            onChange={(e) => {
              const value = e.target.value;

              setIdeaName(value);

              setIdeaData({
                ideaName: value,
                customer,
                problem,
              });
            }}
          />


          <input
            className="w-full rounded-xl bg-black border border-cyan-500/30 p-4 text-white"
            placeholder="Who needs this product?"
            value={customer}
            onChange={(e) => {
              const value = e.target.value;

              setCustomer(value);

              setIdeaData({
                ideaName,
                customer: value,
                problem,
              });
            }}
          />


          <textarea
            className="w-full h-40 rounded-xl bg-black border border-cyan-500/30 p-4 text-white"
            placeholder="What problem does it solve?"
            value={problem}
            onChange={(e) => {
              const value = e.target.value;

              setProblem(value);

              setIdeaData({
                ideaName,
                customer,
                problem: value,
              });
            }}
          />


          <button
            className="w-full py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            ⚡ IGNITE REACTOR
          </button>

        </div>

      </div>

    </section>
  );
}