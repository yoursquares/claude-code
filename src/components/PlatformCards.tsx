import { ExternalLink, Building2, Users, Calendar, MapPin } from "lucide-react";
import { platforms } from "../data/platforms";

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function PlatformCards() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Platform Profiles
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Detailed overview of each new-build portal
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((p) => (
          <div
            key={p.id}
            className="relative rounded-lg border border-slate-700/50 bg-slate-900/50 p-5 hover:border-slate-600/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: p.color }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-3 mt-1">
              <div>
                <h4 className="text-base font-semibold text-white">
                  {p.name}
                </h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <ExternalLink className="w-3 h-3" />
                  {p.url}
                </p>
              </div>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${p.color}20`,
                  color: p.color,
                }}
              >
                {p.marketPosition}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {p.description}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">Projects:</span>
                <span className="text-white font-semibold">
                  {formatNumber(p.projects)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">Visits/mo:</span>
                <span className="text-blue-400 font-semibold">
                  {formatNumber(p.monthlyVisits)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">Founded:</span>
                <span className="text-white font-semibold">{p.founded}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">Region:</span>
                <span className="text-white font-semibold">{p.region}</span>
              </div>
            </div>

            {/* USP Tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.usps.map((usp) => (
                <span
                  key={usp}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30"
                >
                  {usp}
                </span>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-500">
              <span>{p.parentCompany}</span>
              <span>{p.revenueModel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
