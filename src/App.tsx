import { Building2 } from "lucide-react";
import { KpiCards } from "./components/KpiCards";
import { RegionCards } from "./components/RegionCards";
import { ProjectsChart } from "./components/ProjectsChart";
import { TrafficChart } from "./components/TrafficChart";
import { RegionDonut } from "./components/RegionDonut";
import { BusinessModelChart } from "./components/BusinessModelChart";
import { TimelineChart } from "./components/TimelineChart";
import { UspMatrix } from "./components/UspMatrix";
import { PlatformTable } from "./components/PlatformTable";
import { PlatformCards } from "./components/PlatformCards";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  New-Build Real Estate Portal
                </h1>
                <p className="text-xs text-slate-400">
                  Global Market Analysis Dashboard
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
              <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700">
                Top 10 Platforms
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700">
                5 Regions
              </span>
              <span className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700">
                Q2 2025 Data
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* KPI Cards */}
        <section>
          <KpiCards />
        </section>

        {/* Regional Breakdown */}
        <section>
          <RegionCards />
        </section>

        {/* Charts Row: Projects + Traffic */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectsChart />
          <TrafficChart />
        </section>

        {/* Charts Row: Region Donut + Business Model + Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RegionDonut />
          <BusinessModelChart />
        </section>

        {/* Timeline Scatter */}
        <section>
          <TimelineChart />
        </section>

        {/* USP Feature Matrix */}
        <section>
          <UspMatrix />
        </section>

        {/* Full Comparison Table */}
        <section>
          <PlatformTable />
        </section>

        {/* Platform Detail Cards */}
        <section>
          <PlatformCards />
        </section>

        {/* Methodology Note */}
        <section className="rounded-xl bg-slate-800/30 border border-slate-700/30 p-6 text-center">
          <p className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-slate-400">Methodology:</strong> This
            analysis covers the top 10 global real estate portals with dedicated
            new-build / new construction sections. Data includes estimated
            project counts, monthly traffic figures (new-build sections), and
            platform features. Traffic estimates are based on SimilarWeb
            approximations. Project counts reflect active listings. All figures
            are approximate and subject to change.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-600">
          New-Build Real Estate Portal Market Analysis &middot; Global Overview
        </div>
      </footer>
    </div>
  );
}
