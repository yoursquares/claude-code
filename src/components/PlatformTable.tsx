import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { platforms, type Platform } from "../data/platforms";

type SortKey = "name" | "projects" | "monthlyVisits" | "founded" | "region";

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function PlatformTable() {
  const [sortKey, setSortKey] = useState<SortKey>("projects");
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...platforms].sort((a, b) => {
    const dir = sortAsc ? 1 : -1;
    switch (sortKey) {
      case "name":
        return dir * a.name.localeCompare(b.name);
      case "projects":
        return dir * (a.projects - b.projects);
      case "monthlyVisits":
        return dir * (a.monthlyVisits - b.monthlyVisits);
      case "founded":
        return dir * (a.founded - b.founded);
      case "region":
        return dir * a.region.localeCompare(b.region);
      default:
        return 0;
    }
  });

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  function SortHeader({ label, field }: { label: string; field: SortKey }) {
    return (
      <th
        className="py-3 px-3 text-left font-medium text-slate-400 cursor-pointer hover:text-slate-200 transition-colors select-none"
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center gap-1">
          {label}
          <ArrowUpDown
            className={`w-3 h-3 ${sortKey === field ? "text-blue-400" : "text-slate-600"}`}
          />
        </div>
      </th>
    );
  }

  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Platform Comparison
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Click column headers to sort
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <SortHeader label="Platform" field="name" />
              <SortHeader label="Region" field="region" />
              <th className="py-3 px-3 text-left font-medium text-slate-400">
                Country
              </th>
              <SortHeader label="Founded" field="founded" />
              <SortHeader label="Projects" field="projects" />
              <SortHeader label="Traffic/mo" field="monthlyVisits" />
              <th className="py-3 px-3 text-left font-medium text-slate-400">
                Parent Company
              </th>
              <th className="py-3 px-3 text-left font-medium text-slate-400">
                Model
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p: Platform) => (
              <tr
                key={p.id}
                className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
              >
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="font-medium text-white">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-300">{p.region}</td>
                <td className="py-3 px-3 text-slate-300">{p.country}</td>
                <td className="py-3 px-3 text-slate-300">{p.founded}</td>
                <td className="py-3 px-3">
                  <span className="font-semibold text-white">
                    {p.projects.toLocaleString()}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="font-semibold text-blue-400">
                    {formatNumber(p.monthlyVisits)}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-400 text-xs">
                  {p.parentCompany}
                </td>
                <td className="py-3 px-3">
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                    {p.businessModel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
