export default function StatsStrip() {
  const stats = [
    { value: "10,000+", label: "Compounds tested for every 1 drug approved" },
    { value: "12–15", label: "Years average time from discovery to patient" },
    { value: "12%", label: "Of drugs entering clinical trials reach approval" },
    { value: "$2.6bn", label: "Average cost to bring a new drug to market" }
  ];

  return (
    <div className="w-full bg-bg-alt border-y border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-amber-primary mb-3">
              {stat.value}
            </div>
            <div className="text-sm text-text-muted font-medium uppercase tracking-wider max-w-[200px] mx-auto">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
