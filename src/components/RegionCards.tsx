import { platforms } from "../data/platforms";

interface RegionInfo {
  name: string;
  code: string;
  emoji: string;
  color: string;
  bgGradient: string;
  platforms: typeof platforms;
}

const regions: RegionInfo[] = [
  {
    name: "Asia-Pacific",
    code: "APAC",
    emoji: "🌏",
    color: "#e11d48",
    bgGradient: "from-rose-900/30 to-rose-800/10",
    platforms: platforms.filter((p) => p.regionCode === "APAC"),
  },
  {
    name: "Europe",
    code: "EU",
    emoji: "🌍",
    color: "#8b5cf6",
    bgGradient: "from-violet-900/30 to-violet-800/10",
    platforms: platforms.filter((p) => p.regionCode === "EU"),
  },
  {
    name: "North America",
    code: "NA",
    emoji: "🌎",
    color: "#3b82f6",
    bgGradient: "from-blue-900/30 to-blue-800/10",
    platforms: platforms.filter((p) => p.regionCode === "NA"),
  },
  {
    name: "Middle East",
    code: "MEA",
    emoji: "🏗️",
    color: "#06b6d4",
    bgGradient: "from-cyan-900/30 to-cyan-800/10",
    platforms: platforms.filter((p) => p.regionCode === "MEA"),
  },
  {
    name: "Africa",
    code: "AF",
    emoji: "🌍",
    color: "#a855f7",
    bgGradient: "from-purple-900/30 to-purple-800/10",
    platforms: platforms.filter((p) => p.regionCode === "AF"),
  },
];

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function RegionCards() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Regional Breakdown
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Platform distribution by global region
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {regions.map((region) => {
          const totalProjects = region.platforms.reduce(
            (sum, p) => sum + p.projects,
            0
          );
          const totalVisits = region.platforms.reduce(
            (sum, p) => sum + p.monthlyVisits,
            0
          );
          return (
            <div
              key={region.code}
              className={`rounded-lg border border-slate-700/50 p-4 bg-gradient-to-br ${region.bgGradient}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{region.emoji}</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {region.name}
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    {region.platforms.length} platform
                    {region.platforms.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Projects</span>
                  <span className="text-white font-semibold">
                    {formatNumber(totalProjects)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Traffic</span>
                  <span className="text-blue-400 font-semibold">
                    {formatNumber(totalVisits)}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                {region.platforms.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-1.5 text-[11px]"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="text-slate-300 truncate">
                      {p.name.replace(" New Homes", "").replace(" Nyproduktion", "").replace(" Developments", "").replace(" Neuf", "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
