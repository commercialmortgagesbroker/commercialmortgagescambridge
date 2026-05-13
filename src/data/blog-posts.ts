/**
 * Blog launch slate, Commercial Mortgages Cambridge.
 *
 * Per PRD §7.6: 10-post launch slate. Stubs with title, excerpt and
 * content outline to be expanded post-launch through the editorial calendar.
 *
 * Slugs match /blog/[slug] route, keep stable for SEO.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  localStats: Array<{
    stat: string;
    source: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cambridge-commercial-property-market",
    title: "The Cambridge commercial property market in 2026",
    excerpt:
      "A working read on the Cambridge commercial property market at mid-2026. The life sciences spine (Cambridge Biomedical Campus, Cambridge Science Park, Granta Park, Babraham). Central retail and hospitality (Sidney Street, King's Parade, Newmarket Road). The Mill Road and Romsey HMO and semi-commercial corridors. The 90+ lender pool that funds it, including Cambridge & Counties Bank as the local headquartered specialist. Plus a rates and Bank of England trajectory view into 2027.",
    content:
      "See the full editorial at [/cambridge-commercial-property-market](/cambridge-commercial-property-market) for the deep version of this market read. Working stub for the blog slate; expanded post-launch through the editorial calendar.",
    image: "/images/blog-cambridge-market-2026.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-13",
    category: "Market Read",
    tags: ["Cambridge", "Commercial Property", "Market Outlook"],
    localStats: [
      { stat: "Median residential price Cambridge 12m: £487,825", source: "HM Land Registry" },
      { stat: "Greater Cambridge Shared Planning live applications: 1,291", source: "Greater Cambridge Shared Planning, May 2026" },
    ],
  },
  {
    slug: "commercial-mortgage-rates-cambridge-rest-of-2026",
    title: "Commercial mortgage rates in Cambridge for the rest of 2026",
    excerpt:
      "Where the panel sits in mid-2026 and where it might move into Q3 and Q4. We name where Shawbrook, InterBay Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays and Santander are pricing the standard Cambridge mortgage products, plus where Cambridge & Counties Bank fits into local origination.",
    content:
      "Stub. Expanded post-launch. Range mid-2026: 6.0 to 9.0% pa across the panel depending on sector, LTV and covenant strength.",
    image: "/images/blog-rates-2026.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-11",
    category: "Rates",
    tags: ["Rates", "2026 Outlook", "Lender Panel"],
    localStats: [
      { stat: "Cambridge prime office headline rent 2026: £55+ psf at CBC and CSP", source: "Local agency comparables" },
      { stat: "Cambridge industrial rents 2026: £14 to 16 psf modern fringe stock", source: "Local agency comparables" },
    ],
  },
  {
    slug: "owner-occupier-vs-commercial-investment-mortgage",
    title: "Owner-occupier vs commercial investment mortgage in Cambridge",
    excerpt:
      "The single most common mistake on Cambridge commercial mortgage enquiries is the wrong product applied for. We walk through three real-shape Cambridge examples: a Hills Road dental practice freehold, a Cambridge Science Park fringe office acquisition let to the buyer's own group, and a Mill Road shop with three flats above where the buyer's son lives in flat 1.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-owner-occupier-vs-investment.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-10",
    category: "Product Guide",
    tags: ["Owner-Occupier", "Investment", "Product Selection"],
    localStats: [],
  },
  {
    slug: "icr-dscr-cambridge-investment-deals",
    title: "ICR and DSCR cover tests on Cambridge investment commercial mortgages",
    excerpt:
      "Every lender quote tests one of two cover ratios, ICR or DSCR. Get the test wrong and the offer prices down at credit committee. We work the numbers using a Hills Road single-let office, a Mill Road shop-with-flats parade, a Cherry Hinton four-asset portfolio and a Trumpington Meadows mixed-use block.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-icr-dscr.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-08",
    category: "Underwriting",
    tags: ["ICR", "DSCR", "Investment Mortgages"],
    localStats: [],
  },
  {
    slug: "cambridge-care-home-finance-2026",
    title: "Cambridge care home finance and the CQC rating gate in 2026",
    excerpt:
      "Cambridge and the south Cambridgeshire fringe carry a strong premium care home cluster. CQC ratings drive lender appetite. We name the active healthcare desks and what they want to see on occupancy, fee mix, goodwill and bricks-and-mortar split.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-care-home-finance.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-05",
    category: "Sector Read",
    tags: ["Care Home", "Trading Business", "CQC"],
    localStats: [],
  },
  {
    slug: "cambridge-science-park-life-sciences-finance",
    title: "Financing life sciences and lab investment in Cambridge",
    excerpt:
      "Cambridge Science Park, Cambridge Biomedical Campus, Granta Park, Babraham Research Campus and St John's Innovation Park form the densest life sciences cluster outside Greater London. We map lender appetite for owner-occupier life sciences SMEs, lab investment £2M to £10M, and the £5M+ specialist private credit market for prime lab assets.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-life-sciences-finance.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-05-03",
    category: "Sector Read",
    tags: ["Life Sciences", "Lab Investment", "CBC", "Cambridge Science Park"],
    localStats: [
      { stat: "CSP prime lab rent 2026: £55 to 65 psf", source: "Local agency comparables" },
      { stat: "CBC prime lab rent 2026: £60 to 70+ psf", source: "Local agency comparables" },
    ],
  },
  {
    slug: "cambridge-hmo-block-finance-mill-road-romsey",
    title: "HMO and block finance in the Cambridge student belt",
    excerpt:
      "Mill Road, Romsey and Petersfield carry the central HMO and semi-commercial stock that serves both University of Cambridge (~24,000 students) and Anglia Ruskin (~30,000). We name the lenders who size HMO blocks confidently in Cambridge and how Article 4 and Additional HMO Licensing affect lender stance.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-hmo-block-finance.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-04-30",
    category: "Sector Read",
    tags: ["HMO", "Student", "Mill Road", "Romsey"],
    localStats: [],
  },
  {
    slug: "newmarket-road-hotel-finance-cambridge",
    title: "Newmarket Road hotel finance and Cambridge tourism trade",
    excerpt:
      "Cambridge attracts around 8 million visitors annually. The Newmarket Road hospitality cluster anchors the brand-affiliated end of the market with Travelodge, Premier Inn and Hilton; central King's Parade and Mill Lane carry the boutique end. We map trading-business lender appetite on hotel acquisitions in the £1.5M to £6M facility range.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-hotel-finance.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-04-26",
    category: "Sector Read",
    tags: ["Hotels", "Trading Business", "Newmarket Road"],
    localStats: [],
  },
  {
    slug: "cambridge-south-station-property-impact",
    title: "Cambridge South station and the CBC commercial property halo",
    excerpt:
      "Cambridge South station, under construction adjacent to Cambridge Biomedical Campus, will materially shift demand and pricing across south Cambridge from 2027. We look at what investors and owner-occupiers should price in now on Trumpington South mixed-use, CBC ancillary office and Cherry Hinton suburban retail.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-cambridge-south-station.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-04-22",
    category: "Outlook",
    tags: ["Cambridge South Station", "Infrastructure", "Outlook"],
    localStats: [],
  },
  {
    slug: "cambridge-counties-bank-local-lender",
    title: "Cambridge & Counties Bank and what local headquarters means for your deal",
    excerpt:
      "Cambridge & Counties Bank is headquartered in Cambridge and carries one of the most concentrated regional commercial mortgage books in East Anglia. We explain where it is competitive (semi-commercial, mixed-use, professional services owner-occupier in Cambridgeshire and the Midlands), where it loses to Shawbrook and InterBay Commercial, and how to position a deal there.",
    content:
      "Stub. Expanded post-launch.",
    image: "/images/blog-cambridge-counties-bank.png",
    author: "Commercial Mortgages Cambridge",
    publishDate: "2026-04-18",
    category: "Lender Profile",
    tags: ["Cambridge & Counties Bank", "Lender Panel", "Local"],
    localStats: [],
  },
];
