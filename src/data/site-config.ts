// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Cambridge",
  "domain": "commercialmortgagescambridge.co.uk",
  "locationName": "Cambridge",
  "county": "cambridgeshire",
  "town": "cambridge",
  "tagline": "Specialist commercial mortgages in Cambridge",
  "description": "Specialist commercial mortgage broker for Cambridge, the Greater Cambridge life sciences cluster and Cambridgeshire. Owner-occupier, life sciences and lab investment, semi-commercial, portfolio and trading-business finance from a 90+ lender panel including Cambridge & Counties Bank. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages cambridge",
  "heroSubtitle": "Owner-occupier, investment, semi-commercial and trading-business commercial mortgages, sourced from a 90+ lender panel and structured around your Cambridge asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagescambridge.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Cambridge",
    "city": "Cambridge",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 52.2053,
    "lon": 0.1218
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagescambridge.co.uk",
  "satelliteSiteUrl": "https://cambridgecommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/cambridgeshire/cambridge",
  "accent": {
    "hex": "#355E72",
    "hsl": "hsl(202, 36%, 33%)",
    "hue": 202
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesCambridge",
  "ghlSource": "Commercial Mortgages Cambridge Primary Website",
  "ghlWidgetId": ""
} as const;
