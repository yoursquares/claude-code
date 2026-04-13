import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getRegionSummaries } from "../data/platforms";

const data = getRegionSummaries().map((r) => ({
  name: r.name,
  value: r.totalProjects,
  color: r.color,
  platforms: r.platforms,
}));

export function RegionDonut() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Regional Distribution
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        New-build projects by global region
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} fillOpacity={0.85} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, _name, props) => [
              `${Number(value).toLocaleString()} projects (${(props as { payload: typeof data[number] }).payload.platforms} platforms)`,
              (props as { payload: typeof data[number] }).payload.name,
            ]}
            contentStyle={{
              background: "#1e293b",
              border: "1px solid #475569",
              borderRadius: 8,
              color: "#f8fafc",
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            formatter={(value: string) => (
              <span style={{ color: "#e2e8f0", fontSize: 13 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
