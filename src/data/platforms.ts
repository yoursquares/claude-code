export interface Platform {
  id: string;
  name: string;
  url: string;
  country: string;
  region: string;
  regionCode: string;
  founded: number;
  projects: number;
  monthlyVisits: number;
  parentCompany: string;
  businessModel: string;
  usps: string[];
  description: string;
  color: string;
  marketPosition: string;
  revenueModel: string;
}

export const platforms: Platform[] = [
  {
    id: "propertyguru",
    name: "PropertyGuru",
    url: "propertyguru.com.sg",
    country: "Singapore / SEA",
    region: "Southeast Asia",
    regionCode: "APAC",
    founded: 2007,
    projects: 22000,
    monthlyVisits: 32000000,
    parentCompany: "PropertyGuru Group (NYSE: PGRU)",
    businessModel: "B2B SaaS + Marketplace",
    usps: [
      "New Launch Alerts",
      "Multi-Country Coverage",
      "Virtual Showrooms",
      "Mortgage Tools",
      "Developer Analytics",
    ],
    description:
      "Southeast Asia's leading property technology company operating across Singapore, Malaysia, Thailand, Vietnam, and Indonesia with a strong focus on new project launches.",
    color: "#e11d48",
    marketPosition: "Market Leader SEA",
    revenueModel: "Subscription + Listings",
  },
  {
    id: "housing",
    name: "Housing.com",
    url: "housing.com",
    country: "India",
    region: "South Asia",
    regionCode: "APAC",
    founded: 2012,
    projects: 35000,
    monthlyVisits: 18000000,
    parentCompany: "REA Group (via Elara Technologies)",
    businessModel: "B2B Marketplace",
    usps: [
      "RERA Verified Listings",
      "Builder Ratings",
      "Virtual Tours",
      "Price Trends",
      "AI Recommendations",
    ],
    description:
      "India's leading new-project focused portal with RERA-verified listings covering all major Indian cities. Strong technology focus with AI-driven recommendations.",
    color: "#f97316",
    marketPosition: "Top 2 India",
    revenueModel: "Developer Subscriptions",
  },
  {
    id: "newhomesource",
    name: "NewHomeSource",
    url: "newhomesource.com",
    country: "USA",
    region: "North America",
    regionCode: "NA",
    founded: 2002,
    projects: 28000,
    monthlyVisits: 4500000,
    parentCompany: "Builders Digital Experience (BDX)",
    businessModel: "B2B (Builder Marketing)",
    usps: [
      "Builder-Verified Listings",
      "Community Comparison",
      "Floor Plan Browser",
      "School Districts",
      "Move-in Ready Homes",
    ],
    description:
      "America's largest dedicated new construction home search platform, connecting home buyers with builders and new home communities across all 50 states.",
    color: "#3b82f6",
    marketPosition: "Market Leader USA New-Build",
    revenueModel: "Builder Marketing Fees",
  },
  {
    id: "selogerneuf",
    name: "SeLoger Neuf",
    url: "neuf.seloger.com",
    country: "France",
    region: "Western Europe",
    regionCode: "EU",
    founded: 1992,
    projects: 16000,
    monthlyVisits: 5500000,
    parentCompany: "Aviv Group (Axel Springer SE)",
    businessModel: "B2B Marketplace",
    usps: [
      "Tax Simulation (Pinel/PTZ)",
      "3D Virtual Tours",
      "Delivery Tracking",
      "Developer Profiles",
      "Investment Calculator",
    ],
    description:
      "France's premier new-build property portal, part of the SeLoger ecosystem. Specializes in VEFA (off-plan) sales with comprehensive tax optimization tools.",
    color: "#8b5cf6",
    marketPosition: "Market Leader France",
    revenueModel: "Developer Listings",
  },
  {
    id: "rightmove",
    name: "Rightmove New Homes",
    url: "rightmove.co.uk/new-homes",
    country: "United Kingdom",
    region: "Western Europe",
    regionCode: "EU",
    founded: 2000,
    projects: 9500,
    monthlyVisits: 12000000,
    parentCompany: "Rightmove plc (LSE: RMV)",
    businessModel: "B2B Listings",
    usps: [
      "Largest UK Audience",
      "Help to Buy Integration",
      "Development Tracking",
      "Price Comparison",
      "Shared Ownership Filter",
    ],
    description:
      "UK's most-visited property portal with a dedicated new homes section. Dominates the UK market with over 85% market share among estate agents.",
    color: "#10b981",
    marketPosition: "Market Leader UK",
    revenueModel: "Agent Subscriptions",
  },
  {
    id: "bayut",
    name: "Bayut",
    url: "bayut.com",
    country: "UAE",
    region: "Middle East",
    regionCode: "MEA",
    founded: 2008,
    projects: 6500,
    monthlyVisits: 9500000,
    parentCompany: "Dubizzle Group (EMPG)",
    businessModel: "B2B/B2C Marketplace",
    usps: [
      "Off-Plan Specialists",
      "Payment Plan Calculator",
      "TruCheck Verification",
      "Floor Plan Comparison",
      "ROI Analytics",
    ],
    description:
      "UAE's leading property portal with major focus on off-plan/new-build projects in Dubai and Abu Dhabi. Strong in luxury segment and international investor audience.",
    color: "#06b6d4",
    marketPosition: "Market Leader UAE",
    revenueModel: "Premium Listings + Ads",
  },
  {
    id: "neubaukompass",
    name: "Neubaukompass",
    url: "neubaukompass.de",
    country: "Germany / DACH",
    region: "Central Europe",
    regionCode: "EU",
    founded: 2014,
    projects: 13000,
    monthlyVisits: 1800000,
    parentCompany: "Neubaukompass GmbH",
    businessModel: "B2B Marketplace",
    usps: [
      "Pure New-Build Focus",
      "Detailed Floor Plans",
      "Price Tracking",
      "Construction Progress",
      "Energy Ratings",
    ],
    description:
      "Germany's dedicated new-build portal covering the entire DACH region. Pure-play focus on Neubauprojekte with detailed construction progress tracking.",
    color: "#f59e0b",
    marketPosition: "Niche Leader DACH",
    revenueModel: "Developer Subscriptions",
  },
  {
    id: "rea",
    name: "realestate.com.au New Homes",
    url: "realestate.com.au/new-homes",
    country: "Australia",
    region: "Oceania",
    regionCode: "APAC",
    founded: 1995,
    projects: 5500,
    monthlyVisits: 4200000,
    parentCompany: "REA Group (ASX, News Corp)",
    businessModel: "B2B Listings",
    usps: [
      "Market Leader Australia",
      "Project Profiles",
      "Price Guides",
      "Display Suite Booking",
      "Suburb Research",
    ],
    description:
      "Australia's #1 property portal with a comprehensive new homes and developments section. Part of the globally connected REA Group network.",
    color: "#ec4899",
    marketPosition: "Market Leader Australia",
    revenueModel: "Developer Marketing Packages",
  },
  {
    id: "hemnet",
    name: "Hemnet Nyproduktion",
    url: "hemnet.se/nyproduktion",
    country: "Sweden",
    region: "Nordics",
    regionCode: "EU",
    founded: 1998,
    projects: 2800,
    monthlyVisits: 3200000,
    parentCompany: "Hemnet Group AB (STO: HEM)",
    businessModel: "B2B/B2C Marketplace",
    usps: [
      "Dominant Nordic Platform",
      "BRF Integration",
      "Price Statistics",
      "Neighborhood Data",
      "Sustainability Ratings",
    ],
    description:
      "Sweden's dominant property platform with dedicated new construction (nyproduktion) section. Covers BRF cooperatives and new developments across the Nordics.",
    color: "#84cc16",
    marketPosition: "Market Leader Sweden",
    revenueModel: "Listing Fees + Premium",
  },
  {
    id: "property24",
    name: "Property24 Developments",
    url: "property24.com/new-developments",
    country: "South Africa",
    region: "Sub-Saharan Africa",
    regionCode: "AF",
    founded: 2007,
    projects: 3500,
    monthlyVisits: 8000000,
    parentCompany: "OLX Group (Naspers/Prosus)",
    businessModel: "B2B Listings",
    usps: [
      "Largest African Portal",
      "Development Alerts",
      "Neighborhood Profiles",
      "Bond Calculator",
      "Agent Network",
    ],
    description:
      "South Africa's largest property portal with a growing new developments section. Backed by Naspers/Prosus, covering developments across all major South African metros.",
    color: "#a855f7",
    marketPosition: "Market Leader South Africa",
    revenueModel: "Subscription + Leads",
  },
];

export interface RegionSummary {
  name: string;
  code: string;
  platforms: number;
  totalProjects: number;
  color: string;
}

export function getRegionSummaries(): RegionSummary[] {
  const regionMap = new Map<
    string,
    { name: string; code: string; platforms: number; totalProjects: number; color: string }
  >();

  const regionColors: Record<string, string> = {
    APAC: "#e11d48",
    NA: "#3b82f6",
    EU: "#8b5cf6",
    MEA: "#06b6d4",
    AF: "#a855f7",
  };

  platforms.forEach((p) => {
    const existing = regionMap.get(p.regionCode);
    if (existing) {
      existing.platforms++;
      existing.totalProjects += p.projects;
    } else {
      regionMap.set(p.regionCode, {
        name: p.regionCode === "APAC" ? "Asia-Pacific" :
              p.regionCode === "NA" ? "North America" :
              p.regionCode === "EU" ? "Europe" :
              p.regionCode === "MEA" ? "Middle East" :
              "Africa",
        code: p.regionCode,
        platforms: 1,
        totalProjects: p.projects,
        color: regionColors[p.regionCode] || "#64748b",
      });
    }
  });

  return Array.from(regionMap.values()).sort(
    (a, b) => b.totalProjects - a.totalProjects
  );
}

export function getTotalProjects(): number {
  return platforms.reduce((sum, p) => sum + p.projects, 0);
}

export function getTotalMonthlyVisits(): number {
  return platforms.reduce((sum, p) => sum + p.monthlyVisits, 0);
}

export function getAverageFoundedYear(): number {
  return Math.round(
    platforms.reduce((sum, p) => sum + p.founded, 0) / platforms.length
  );
}
