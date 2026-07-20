"use client";

type CouncilReportProps = {
  launchStatus: string;
};

const council = [
  {
    name: "🦈 Investor Council",
    feedback:
      "Evaluating market opportunity, customer demand, and growth potential.",
  },
  {
    name: "❤️ Customer Council",
    feedback:
      "Analyzing whether this solves a painful customer problem.",
  },
  {
    name: "⚙️ Architect Council",
    feedback:
      "Reviewing technical complexity and MVP feasibility.",
  },
  {
    name: "📣 Growth Council",
    feedback:
      "Examining customer acquisition and distribution strategy.",
  },
  {
    name: "😈 Challenger Council",
    feedback:
      "Searching for weaknesses and possible risks.",
  },
];


export default function CouncilReport({
  launchStatus,
}: CouncilReportProps) {

  if (launchStatus !== "complete") {
    return null;
  }


  return (
    <section className="px-6 py-20">

      <div className="max-w-4xl mx-auto rounded-3xl border border-cyan-500/30 bg-zinc-900 p-10">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          🧠 COUNCIL REPORT
        </h2>


        <div className="mt-8 space-y-5">

          {council.map((member, index) => (

            <div
              key={index}
              className="rounded-xl bg-black border border-zinc-800 p-5"
            >

              <h3 className="text-xl font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                {member.feedback}
              </p>

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}