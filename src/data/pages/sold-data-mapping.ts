/**
 * Sold-data mapping, Cambridge (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Cambridge LPA covers the city. Cambridge Biomedical Campus, Trumpington
 * South and the Cambridge Science Park fringe sites fall within either
 * Cambridge City or South Cambridgeshire LPAs — for the residential market
 * temperature signal we read from the Cambridge town file in both cases.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import cambridgeData from "@/data/sold-data/cambridge.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "city-centre": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "hills-road-triangle": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "mill-road": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  romsey: { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  petersfield: { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "newmarket-road": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  chesterton: { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "trumpington-south": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "cherry-hinton": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "newnham-grange-road": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "cambridge-science-park": { data: cambridgeData as SoldDataFile, label: "Cambridge LPA" },
  "cambridge-biomedical-campus": { data: cambridgeData as SoldDataFile, label: "Cambridge / South Cambridgeshire LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
