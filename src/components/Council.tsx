import AdvisorCard from "./AdvisorCard";

export default function Council() {
  return (
    <section className="px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-cyan-400">
        THE COUNCIL
      </h2>

      <p className="text-center text-zinc-400 mt-4">
        Your AI-powered startup advisory team.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">

        <AdvisorCard
          icon="🦈"
          name="The Investor"
          role="Business Viability"
          description="Will people pay for this idea?"
        />

        <AdvisorCard
          icon="❤️"
          name="The Customer"
          role="User Experience"
          description="Does this solve a real problem?"
        />

        <AdvisorCard
          icon="⚙️"
          name="The Architect"
          role="Build Strategy"
          description="How do we turn this into an MVP?"
        />

        <AdvisorCard
          icon="📣"
          name="The Growth Strategist"
          role="Marketing"
          description="How will people discover it?"
        />

        <AdvisorCard
          icon="😈"
          name="The Challenger"
          role="Risk Analysis"
          description="What could cause this idea to fail?"
        />

        <AdvisorCard
          icon="🚀"
          name="The Launch Director"
          role="Execution"
          description="What steps get us to launch?"
        />

      </div>

    </section>
  );
}