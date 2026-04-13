import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { platforms } from "../data/platforms";

const data = [...platforms]
  .sort((a, b) => b.projects - a.projects)
  .map((p) => ({
    name: p.name.replace(" New Homes", "").replace(" Nyproduktion", "").replace(" Developments", "").replace(" Neuf", ""),
    projects: p.projects,
    color: p.color,
    country: p.country,
  }));

function formatThousands(v: number): string {
  return `${(v / 1000).toFixed(0)}K`;
}

export function ProjectsChart() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        New-Build Projects by Platform
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Number of active new construction project listings
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={formatThousands}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{ fill: "#e2e8f0", fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
          />
          <Tooltip
            formatter={(value) => [`${Number(value).toLocaleString()} projects`, "Projects"]}
            contentStyle={{
              background: "#1e293b",
              border: "1px solid #475569",
              borderRadius: 8,
              color: "#f8fafc",
            }}
          />
          <Bar dataKey="projects" radius={[0, 6, 6, 0]} barSize={28}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} fillOpacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
