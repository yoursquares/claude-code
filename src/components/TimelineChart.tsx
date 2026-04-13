import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ZAxis,
} from "recharts";
import { platforms } from "../data/platforms";

const data = platforms.map((p) => ({
  name: p.name.replace(" New Homes", "").replace(" Nyproduktion", "").replace(" Developments", "").replace(" Neuf", ""),
  founded: p.founded,
  projects: p.projects,
  visits: p.monthlyVisits,
  color: p.color,
  country: p.country,
}));

export function TimelineChart() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Founded Year vs. Scale
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Bubble size = monthly traffic, Y-axis = project count
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis
            type="number"
            dataKey="founded"
            domain={[1990, 2016]}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
            name="Founded"
          />
          <YAxis
            type="number"
            dataKey="projects"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
            name="Projects"
            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
          />
          <ZAxis
            type="number"
            dataKey="visits"
            range={[100, 800]}
            name="Monthly Visits"
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3", stroke: "#64748b" }}
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const d = payload[0].payload;
              return (
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
                  <p className="font-semibold text-white text-sm">{d.name}</p>
                  <p className="text-slate-400 text-xs">{d.country}</p>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-slate-300">
                      Founded: <span className="text-white font-medium">{d.founded}</span>
                    </p>
                    <p className="text-slate-300">
                      Projects: <span className="text-white font-medium">{d.projects.toLocaleString()}</span>
                    </p>
                    <p className="text-slate-300">
                      Visits/mo: <span className="text-white font-medium">{(d.visits / 1_000_000).toFixed(1)}M</span>
                    </p>
                  </div>
                </div>
              );
            }}
          />
          <Scatter data={data}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} fillOpacity={0.75} stroke={entry.color} strokeWidth={1} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
