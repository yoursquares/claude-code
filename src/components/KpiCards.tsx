import { Building2, Globe, Users, TrendingUp } from "lucide-react";
import { platforms, getTotalProjects, getTotalMonthlyVisits } from "../data/platforms";

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

const kpis = [
  {
    label: "Platforms Analyzed",
    value: platforms.length.toString(),
    icon: Globe,
    color: "from-blue-500 to-blue-700",
    detail: "Global Coverage",
  },
  {
    label: "Total New-Build Projects",
    value: formatNumber(getTotalProjects()),
    icon: Building2,
    color: "from-emerald-500 to-emerald-700",
    detail: `~${formatNumber(getTotalProjects())} listings`,
  },
  {
    label: "Combined Monthly Visits",
    value: formatNumber(getTotalMonthlyVisits()),
    icon: Users,
    color: "from-purple-500 to-purple-700",
    detail: "Estimated traffic",
  },
  {
    label: "Regions Covered",
    value: "5",
    icon: TrendingUp,
    color: "from-amber-500 to-amber-700",
    detail: "APAC, EU, NA, MEA, AF",
  },
];

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-5 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400 font-medium">{kpi.label}</p>
              <p className="text-3xl font-bold mt-1 text-white">{kpi.value}</p>
              <p className="text-xs text-slate-500 mt-1">{kpi.detail}</p>
            </div>
            <div
              className={`p-2.5 rounded-lg bg-gradient-to-br ${kpi.color} shadow-lg`}
            >
              <kpi.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div
            className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${kpi.color}`}
          />
        </div>
      ))}
    </div>
  );
}
