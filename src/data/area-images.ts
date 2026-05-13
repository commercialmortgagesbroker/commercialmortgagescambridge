/**
 * Area hero images, Unsplash CDN photo IDs for Cambridge districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "city-centre": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Cambridge city centre street with King's Parade civic architecture",
  },
  "hills-road-triangle": {
    id: "1699021565667-07f81d7d137c",
    alt: "Hills Road Cambridge Victorian commercial building",
  },
  "mill-road": {
    id: "1626011338434-2a000a7c63c0",
    alt: "Mill Road Cambridge independent retail and food and beverage strip",
  },
  "romsey": {
    id: "1697407503401-8991afe14b00",
    alt: "Romsey Town Cambridge mixed-use parade",
  },
  "petersfield": {
    id: "1638803702682-4b2c833e543f",
    alt: "Petersfield Cambridge central residential and small commercial street",
  },
  "newmarket-road": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Newmarket Road Cambridge retail park and trade counter strip",
  },
  "chesterton": {
    id: "1626010935539-710125f7e294",
    alt: "Chesterton Cambridge North transit-adjacent commercial frontage",
  },
  "trumpington-south": {
    id: "1683459269288-63ce626a67f2",
    alt: "Trumpington Cambridge South emerging mixed-use district",
  },
  "cherry-hinton": {
    id: "1699818268277-242624112ff9",
    alt: "Cherry Hinton Cambridge suburban retail and healthcare cluster",
  },
  "newnham-grange-road": {
    id: "1699021566037-2079b9459957",
    alt: "Newnham and Grange Road Cambridge high-value semi-commercial townhouses",
  },
  "cambridge-science-park": {
    id: "1603135946711-e2f73c019c44",
    alt: "Cambridge Science Park office and lab investment buildings",
  },
  "cambridge-biomedical-campus": {
    id: "1626011789898-0b317546acb0",
    alt: "Cambridge Biomedical Campus life sciences and hospital research buildings",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Cambridge aerial skyline with university and science park clusters",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
