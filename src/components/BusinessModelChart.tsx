import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { platforms } from "../data/platforms";

function getBusinessModelGroups() {
  const modelMap = new Map<string, number>();
  const colorMap: Record<string, string> = {
    "B2B Marketplace": "#3b82f6",
    "B2B Listings": "#10b981",
    "B2B SaaS + Marketplace": "#e11d48",
    "B2B (Builder Marketing)": "#f59e0b",
    "B2B/B2C Marketplace": "#06b6d4",
  };

  platforms.forEach((p) => {
    modelMap.set(p.businessModel, (modelMap.get(p.businessModel) || 0) + 1);
  });

  return Array.from(modelMap.entries()).map(([name, value]) => ({
    name,
    value,
    color: colorMap[name] || "#64748b",
  }));
}

const data = getBusinessModelGroups();

export function BusinessModelChart() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        Business Models
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Revenue model distribution across platforms
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} fillOpacity={0.85} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              `${value} platform${Number(value) > 1 ? "s" : ""}`,
              String(name),
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
              <span style={{ color: "#e2e8f0", fontSize: 12 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
