import { platforms } from "../data/platforms";

const uspCategories = [
  { key: "virtual", label: "Virtual Tours / 3D", keywords: ["Virtual", "3D", "Showroom"] },
  { key: "verification", label: "Listing Verification", keywords: ["Verified", "TruCheck", "RERA"] },
  { key: "financial", label: "Financial Tools", keywords: ["Calculator", "Mortgage", "Bond", "Tax", "Investment", "ROI", "PTZ", "Pinel"] },
  { key: "tracking", label: "Construction Tracking", keywords: ["Tracking", "Progress", "Delivery"] },
  { key: "analytics", label: "Price Analytics", keywords: ["Price", "Statistics", "Trends", "Analytics"] },
  { key: "alerts", label: "Alerts & Notifications", keywords: ["Alert", "Launch"] },
  { key: "sustainability", label: "Sustainability / Energy", keywords: ["Sustainability", "Energy"] },
  { key: "comparison", label: "Comparison Tools", keywords: ["Comparison", "Compare", "Floor Plan"] },
];

function hasUsp(platformUsps: string[], keywords: string[]): boolean {
  return platformUsps.some((usp) =>
    keywords.some((kw) => usp.toLowerCase().includes(kw.toLowerCase()))
  );
}

export function UspMatrix() {
  return (
    <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-1">
        USP Feature Matrix
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Key capabilities across platforms
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-slate-400 font-medium sticky left-0 bg-slate-800/90 backdrop-blur-sm min-w-[140px]">
                Platform
              </th>
              {uspCategories.map((cat) => (
                <th
                  key={cat.key}
                  className="py-3 px-2 text-slate-400 font-medium text-center whitespace-nowrap"
                >
                  {cat.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform) => (
              <tr
                key={platform.id}
                className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
              >
                <td className="py-3 px-3 font-medium text-white sticky left-0 bg-slate-800/90 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="truncate">
                      {platform.name.replace(" New Homes", "").replace(" Nyproduktion", "").replace(" Developments", "").replace(" Neuf", "")}
                    </span>
                  </div>
                </td>
                {uspCategories.map((cat) => (
                  <td key={cat.key} className="py-3 px-2 text-center">
                    {hasUsp(platform.usps, cat.keywords) ? (
                      <span className="inline-block w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 leading-6 text-xs font-bold">
                        &#10003;
                      </span>
                    ) : (
                      <span className="inline-block w-6 h-6 rounded-full bg-slate-700/30 text-slate-600 leading-6 text-xs">
                        &mdash;
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
