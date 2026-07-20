type AdvisorCardProps = {
  icon: string;
  name: string;
  role: string;
  description: string;
};

export default function AdvisorCard({
  icon,
  name,
  role,
  description,
}: AdvisorCardProps) {
  return (
    <div className="border border-cyan-500/20 rounded-2xl p-6 bg-zinc-900 hover:border-cyan-400 transition">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-4 text-cyan-400">
        {name}
      </h3>

      <p className="text-sm text-zinc-400 mt-1">
        {role}
      </p>

      <p className="mt-4 text-zinc-300">
        {description}
      </p>

    </div>
  );
}