import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Cambridge.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Greater Cambridge Shared Planning applications inside
 *     the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "city-centre",
    areaName: "Cambridge City Centre and King's Parade",
    avgPricePerSqft: 760,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 38000,
    growthRate: 5.2,
    activeDevSites: 42,
    rentalYield: 5.5,
    conservationCoverage: 78,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB1 / CB2 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hills-road-triangle",
    areaName: "Hills Road and The Triangle",
    avgPricePerSqft: 700,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 9800,
    growthRate: 4.2,
    activeDevSites: 28,
    rentalYield: 5.4,
    conservationCoverage: 62,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB2 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "mill-road",
    areaName: "Mill Road",
    avgPricePerSqft: 540,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 14200,
    growthRate: 3.8,
    activeDevSites: 24,
    rentalYield: 6.6,
    conservationCoverage: 42,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB1 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "romsey",
    areaName: "Romsey Town",
    avgPricePerSqft: 480,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 7,
    population: 11800,
    growthRate: 3.1,
    activeDevSites: 14,
    rentalYield: 6.4,
    conservationCoverage: 18,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB1 east",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "petersfield",
    areaName: "Petersfield",
    avgPricePerSqft: 560,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 6,
    population: 10400,
    growthRate: 2.8,
    activeDevSites: 12,
    rentalYield: 6.2,
    conservationCoverage: 38,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB1 central",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "newmarket-road",
    areaName: "Newmarket Road",
    avgPricePerSqft: 420,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 7,
    population: 9200,
    growthRate: 4.5,
    activeDevSites: 22,
    rentalYield: 6.4,
    conservationCoverage: 12,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB5 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "chesterton",
    areaName: "Chesterton and Cambridge North",
    avgPricePerSqft: 480,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 14400,
    growthRate: 4.1,
    activeDevSites: 18,
    rentalYield: 5.8,
    conservationCoverage: 22,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB4 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "trumpington-south",
    areaName: "Trumpington and Cambridge South",
    avgPricePerSqft: 540,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 7,
    population: 11200,
    growthRate: 6.8,
    activeDevSites: 32,
    rentalYield: 5.9,
    conservationCoverage: 18,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB2 south",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "cherry-hinton",
    areaName: "Cherry Hinton",
    avgPricePerSqft: 440,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 9600,
    growthRate: 2.2,
    activeDevSites: 12,
    rentalYield: 5.6,
    conservationCoverage: 14,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB1 east",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "newnham-grange-road",
    areaName: "Newnham and Grange Road",
    avgPricePerSqft: 780,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 6,
    population: 6400,
    growthRate: 1.6,
    activeDevSites: 9,
    rentalYield: 4.4,
    conservationCoverage: 58,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "cambridge-science-park",
    areaName: "Cambridge Science Park",
    avgPricePerSqft: 620,
    planningApprovalRate: 86,
    avgDevTimelineMonths: 7,
    population: 4200,
    growthRate: 7.2,
    activeDevSites: 26,
    rentalYield: 5.4,
    conservationCoverage: 6,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB4 north",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "cambridge-biomedical-campus",
    areaName: "Cambridge Biomedical Campus",
    avgPricePerSqft: 680,
    planningApprovalRate: 84,
    avgDevTimelineMonths: 7,
    population: 5400,
    growthRate: 8.4,
    activeDevSites: 30,
    rentalYield: 5.2,
    conservationCoverage: 4,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cambridge LPA)",
      planningSource: "Greater Cambridge Shared Planning Portal, CB2 south, life-sciences corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}
