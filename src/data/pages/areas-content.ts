/**
 * Per-district area page content, Commercial Mortgages Cambridge.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Greater Cambridge Shared Planning planning applications (filtered by postcode
 *      catchment) cited by reference number, address and proposal.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the 1–3 lenders most likely
 *      to fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page must hit mortgage / commercial mortgage
 * / Cambridge / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3–1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140–160% stressed, LTV typically 65–75%." },
  { product: "Semi-commercial", applicability: "Shop+flat archetypes, blended ICR ~145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb / re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Cambridge by Area",
    lede:
      "From Cambridge Science Park lab investment in CB4 to King's Parade retail freehold in CB2 and Hills Road professional services in CB2, the Cambridge commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Greater Cambridge Shared Planning pipeline, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Cambridge commercial mortgage market splits by district",
    body: [
      "Pricing inside the CB1 / CB2 city core is not the same as pricing on the CB4 science park ring or the CB22 / CB21 fringe at Babraham and Granta. ICR thresholds on a Mill Road shop-with-flat are not the same as on a Cambridge Biomedical Campus lab investment. The lender shortlist for a Cherry Hinton care home freehold is almost entirely different from the shortlist for a Newmarket Road hotel acquisition. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Greater Cambridge Shared Planning portal, dominant commercial sector mix, expected LTV and rate range, and the two or three lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation.",
    ],
  },
  groupings: [
    {
      title: "Central Cambridge, prime retail, hospitality and professional services",
      description:
        "The deepest commercial mortgage market in Cambridgeshire. King's Parade and Sidney Street prime retail, Newmarket Road hotel cluster and Hills Road professional-services corridor anchor the largest central facility sizes (£500K to £5M).",
      slugs: ["city-centre", "hills-road-triangle", "newmarket-road"],
    },
    {
      title: "North Cambridge, science park and innovation cluster",
      description:
        "Cambridge Science Park anchors north Cambridge with Trinity College ownership and a 152-acre Grade A lab and office estate. Chesterton and Cambridge North carry transit-adjacent semi-commercial. St John's Innovation Park sits on the same Milton Road spine.",
      slugs: ["cambridge-science-park", "chesterton", "newnham-grange-road"],
    },
    {
      title: "Independent retail and HMO corridors, Mill Road and Petersfield",
      description:
        "Mill Road's independent retail and F&B spine, Romsey's HMO-heavy semi-commercial belt and Petersfield's central HMO stock. Mid-cap LTV-driven owner-occupier and semi-commercial territory powered by Cambridge's combined 54,000-student population.",
      slugs: ["mill-road", "romsey", "petersfield"],
    },
    {
      title: "South Cambridge, biomedical and life sciences anchor",
      description:
        "Cambridge Biomedical Campus anchors the UK's largest life sciences cluster outside Greater London, with AstraZeneca, Addenbrooke's, MRC LMB and the Rosie. Cherry Hinton holds suburban retail and healthcare ancillary; Trumpington South is the emerging mixed-use district around the new Cambridge South station.",
      slugs: ["cambridge-biomedical-campus", "cherry-hinton", "trumpington-south"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Cambridgeshire",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Histon and Impington, Waterbeach, Fulbourn, Great Shelford, plus Ely, St Ives, Huntingdon and the Granta Park and Babraham Research Campus life sciences clusters inside the wider Cambridgeshire footprint. The same 90+ lender panel applies, with Cambridge & Counties Bank locally headquartered and active across the county. If your deal is in a Cambridgeshire postcode that does not have its own page yet, call us direct, we will route you to the right product and the right two or three lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "city-centre": {
    slug: "city-centre",
    name: "Cambridge City Centre and King's Parade",
    metaTitle: "Commercial Mortgages Cambridge City Centre | Specialist Broker, CB2",
    metaDescription:
      "Commercial mortgages for Cambridge City Centre, CB2 prime retail, office and mixed-use investment. King's Parade, Sidney Street, Trinity Street, Grand Arcade, Lion Yard. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Cambridge City Centre",
      lede:
        "Cambridge City Centre runs from King's Parade and Trinity Street through Sidney Street and St Andrew's Street into Grand Arcade, Lion Yard, Petty Cury and Market Square. The fabric is mediaeval and Georgian college frontage, Victorian retail terraces, listed mixed-use stock and a small but valuable cluster of post-war retail-led redevelopment. We arrange commercial mortgages for prime CB2 retail investment, central freehold office trophy assets, restaurant and hotel refinancing along the tourist spine and owner-occupier professional services buying their Sidney Street or St Andrew's Street floor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Cambridge City Centre commercial property market",
      body: [
        "Cambridge City Centre carries the tightest commercial stock of any UK city outside central London. Prime retail Zone A on King's Parade, Trinity Street, Sidney Street and the Grand Arcade frontage reaches up to 180 pounds per sq ft in the best units, supported by roughly 8 million visitors a year and a resident professional and student population of around 54,000 between the University of Cambridge and Anglia Ruskin. Office headline rents in the best central freehold stock around St Andrew's Street, Sidney Street and Bene't Street sit at 30 to 40 pounds per sq ft in 2026, with secondary upper-floor stock at 22 to 28 pounds.",
        "Transactions are dominated by trophy freeholds bought by long-hold private investors and family offices, owner-occupier solicitor, accountancy and architecture practices buying small floors of 1,500 to 4,000 sq ft, and a steady flow of restaurant, café and boutique hotel refinancings along the tourist spine. The deep-volume zone for our central CB2 commercial mortgage book is the 500,000 to 3 million pound bracket, in-line retail, upper-floor office and small mixed-use blocks. Pricing 6.5 to 8.0 percent pa for clean prime retail investment, with strong-covenant Grand Arcade and Lion Yard adjacent stock at 6.0 to 7.0 percent, and tighter secondary parade at 7.5 to 8.5 percent. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions inside CB2 cluster around college-adjacent leasehold flats on Trumpington Street, Pembroke Street, Newnham Road and Park Terrace, with median values typically in the 350,000 to 700,000 pound bracket. They are not a direct commercial signal but they confirm that central Cambridge continues to absorb high-value residential supply against a backdrop of structurally constrained planning supply, which underwrites the ground-floor retail, restaurant and boutique-hotel income that most of our central CB2 commercial investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cambridge City Centre (CB2)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current city-centre commercial mortgage pipeline. A Sidney Street tenant-mix variation (Ref <strong>26/01668/S73</strong>) at 57 Sidney Street CB2 3HX covers a condition variation to allow Class E(b) café and E(a) retail use within an existing commercial building, the canonical central retail repositioning we refinance on 65 to 70 percent LTV commercial investment mortgages once tenant mix stabilises. A Grand Arcade tenant-mix application (Ref <strong>25/02712/FUL</strong>) covers a reconfiguration of unit demise and Class E use within the prime retail centre, the matching prime CB2 trophy archetype that feeds long-hold private-investor demand. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/01668/S73",
          address: "57 Sidney Street, Cambridge CB2 3HX",
          postcode: "CB2 3HX",
          proposal: "Variation of condition to allow Class E(b) café and Class E(a) retail uses within tenant units of an existing commercial building.",
        },
        {
          ref: "25/02712/FUL",
          address: "Grand Arcade, St Andrew's Street, Cambridge CB2 3BJ",
          postcode: "CB2 3BJ",
          proposal: "Reconfiguration of unit demises and Class E tenant-mix changes within the prime retail centre, supporting active asset management.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in central Cambridge",
      items: [
        { label: "King's Parade and Trinity Street trophy retail", detail: "Listed prime retail freehold facing the colleges, long-hold private investor stock.", typicalSize: "£1.5M to £6M facility" },
        { label: "Sidney Street and St Andrew's Street retail", detail: "Prime Zone A frontage with upper-floor office or residential.", typicalSize: "£700K to £4M" },
        { label: "Grand Arcade and Lion Yard adjacent", detail: "National-covenant in-line retail near the prime centre.", typicalSize: "£500K to £3M" },
        { label: "Petty Cury and Market Square mixed-use", detail: "Ground-floor Class E retail or food with offices or apartments above.", typicalSize: "£500K to £2.5M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy and architecture practices buying floors of 1,500 to 4,000 sq ft.", typicalSize: "£400K to £1.5M" },
        { label: "Central boutique hotel and restaurant", detail: "Tourist-spine trading-business refinance and freehold purchase.", typicalSize: "£500K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cambridge City Centre",
      body: 'Prime retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Boutique hotel, restaurant and café refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for central Cambridge retail and trophy freehold",
      body:
        "Deep across the CB2 core. <strong>Lloyds</strong>, <strong>NatWest</strong> (Sidney Street commercial RM team), <strong>Barclays</strong> (St Andrew's Street) and <strong>Santander</strong> compete on prime stock and owner-occupier professional firms at 60 to 65 percent LTV and 6.0 to 7.0 percent pa. Cambridge & Counties Bank, the Cambridge-headquartered challenger, runs a meaningful local book and routinely tops the shortlist on central freehold investment and mixed-use deals where the relationship matters as much as the rate. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are active on mixed-use Victorian blocks, listed-building stock and upper-floor repositioning. <strong>LendInvest</strong> covers value-add and bridge-to-let. Refinancing on a stabilised secondary CB2 retail asset typically prices 7.5 to 8.5 percent pa at 65 to 70 percent LTV. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a King's Parade or Trinity Street trophy freehold?",
        answer:
          "Up to 70 percent LTV on let listed prime retail. A King's Parade or Trinity Street freehold facing the colleges with a strong-covenant retail or restaurant tenant prices best at 60 to 65 percent LTV (around 6.5 to 7.0 percent pa). Secondary Petty Cury or Market Square parade with secondary covenants typically caps at 65 to 70 percent. The binding constraint is almost always ICR, not headline LTV, and many of these buildings are listed which narrows the lender pool.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant Sidney Street unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, term-out to investment mortgage post-stabilisation at 65 to 70 percent LTV. Active strategy on units affected by Class E tenant-mix repositioning of the kind covered by the 26/01668/S73 Sidney Street application.',
      },
      {
        question: "What product fits a solicitor partnership buying a Sidney Street office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or Cambridge & Counties Bank. Typical 70 to 75 percent LTV at 6.0 to 7.0 percent pa on partnership accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical central CB2 professional-services route, and Cambridge & Counties' local underwriting team often beats the high street on speed.",
      },
      {
        question: "Which lenders run dedicated Cambridge desks?",
        answer:
          "<strong>NatWest</strong> Sidney Street, <strong>Lloyds</strong> Commercial Banking on Sidney Street, <strong>Barclays</strong> St Andrew's Street and Cambridge & Counties Bank, the Cambridge-headquartered specialist, all maintain Cambridge-based commercial relationship managers. We use those local desks for CB2 deals where local knowledge of the listed-building grain and the college estates pattern carries weight in underwriting.",
      },
    ],
  },

  "trumpington-south": {
    slug: "trumpington-south",
    name: "Trumpington and Cambridge South",
    metaTitle: "Commercial Mortgages Trumpington Cambridge South | Specialist Broker, CB2",
    metaDescription:
      "Commercial mortgages for Trumpington and Cambridge South (CB2), the new Cambridge South station catchment, Trumpington Meadows mixed-use, Park and Ride. Mixed-use and life-sciences-adjacent investment.",
    hero: {
      h1: "Commercial Mortgages Trumpington and Cambridge South",
      lede:
        "Trumpington sits at the southern edge of Cambridge in CB2, with the new Cambridge South station under construction directly adjacent to the Cambridge Biomedical Campus, Trumpington Meadows neighbourhood centre delivering new ground-floor Class E retail and F&B, the Park and Ride and a halo effect feeding south from the Genome Campus at Hinxton. We arrange commercial mortgages for mixed-use blocks, ground-floor retail and F&B, life-sciences-adjacent office and lab investment, and the station-quarter assets emerging on the CB2 9 footprint.",
    },
    marketContext: {
      h2: "The Trumpington and Cambridge South commercial property market",
      body: [
        "Trumpington is one of the structurally fastest-changing commercial submarkets in Cambridgeshire. The new Cambridge South station, scheduled to open in 2027, lands trains from London Kings Cross, Stansted, Brighton and Ely directly into the Cambridge Biomedical Campus catchment, which has triggered a wave of investment-grade office and lab activity on the CB2 frontage between the Trumpington Park and Ride and the Addenbrooke's site. Trumpington Meadows, the masterplanned residential extension south of the M11 junction, has delivered a neighbourhood centre with ground-floor Class E retail and F&B plus a primary school, which forms the dominant new-build mixed-use commercial archetype in the CB2 9 catchment.",
        "Mixed-use refinance is the largest active product. Schemes that completed between 2020 and 2023 are now stabilising into income-producing assets, and developers are refinancing off bridge or development finance onto long-term commercial investment mortgages at 65 to 70% LTV with ICR at 145% or higher. Below the investment-grade end, the Trumpington Road parade between the city boundary and Long Road carries a steady flow of independent retail and professional services owner-occupier deals, plus a smaller tail of small-cap F&B trading-business refinancing. Pricing on CB2 mixed-use investment runs 6.0 to 7.5% pa for stabilised stock with strong tenant covenants, climbing to 7.5 to 9.0% on secondary positions.",
        "HM Land Registry residential transactions across CB2 confirm a structurally premium catchment, with recent files including CB2 0QY Greenlands at £557,500. This underwrites strong tenant covenant assumptions on the ground-floor retail and F&B in Trumpington Meadows and the Trumpington Road parade. We use residential transaction depth as a directional signal on the commercial property beneath, not as a comparable. Stamp duty land tax applies on every commercial purchase at the commercial rates; refinancing the developer post-completion is the higher-volume use case in 2026.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity around Trumpington and Cambridge South (CB2)",
      body:
        "Two Greater Cambridge Shared Planning files anchor the current CB2 9 commercial mortgage pipeline. Ref <strong>26/01302/FUL</strong> covers the Cambridge South Station Quarter, a mixed-use scheme around the new station-box footprint combining lab and office floorspace with ground-floor Class E commercial, the canonical investment-grade station-adjacent stock now coming forward. Ref <strong>26/00312/FUL</strong> covers Trumpington Meadows mixed-use neighbourhood centre, the new-build Class E retail and F&B parade serving the residential extension south of the M11. Trumpington sits outside the central Article 4 directions and Class E permitted-development swaps cover most change-of-use without triggering full applications. Listed-building consent governs the older Trumpington Road frontage stock around the village core. Stamp duty land tax applies at the commercial rates.",
      refs: [
        {
          ref: "26/01302/FUL",
          address: "Cambridge South Station Quarter, Cambridge CB2 0QQ",
          postcode: "CB2 0QQ",
          proposal: "Mixed-use scheme around the new Cambridge South station footprint, comprising lab and office floorspace with ground-floor Class E commercial, station-quarter investment archetype.",
        },
        {
          ref: "26/00312/FUL",
          address: "Trumpington Meadows neighbourhood centre, Cambridge CB2 9FT",
          postcode: "CB2 9FT",
          proposal: "Mixed-use neighbourhood centre delivering ground-floor Class E retail and F&B units serving the Trumpington Meadows residential extension.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types around Trumpington and Cambridge South",
      items: [
        { label: "Cambridge South Station Quarter investment", detail: "Mixed-use schemes around the new station footprint, lab plus office plus ground-floor Class E.", typicalSize: "£3M to £10M plus facility" },
        { label: "Trumpington Meadows mixed-use", detail: "Ground-floor Class E retail and F&B within the neighbourhood centre.", typicalSize: "£500K to £2M" },
        { label: "Life-sciences-adjacent office", detail: "Class E office floorspace serving the CBC and Genome Campus catchment.", typicalSize: "£1.5M to £6M" },
        { label: "Trumpington Road parade owner-occupier", detail: "Independent retailers and professional services on the village parade.", typicalSize: "£350K to £900K" },
        { label: "Hospitality and trading business", detail: "F&B and small-cap leisure on EBITDA-led trading mortgages.", typicalSize: "£400K to £1.5M" },
        { label: "Single-let Class E investment", detail: "Coffee, food and convenience on long FRI leases serving the new catchment.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Trumpington and Cambridge South",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Mixed-use blocks via <a href="/property-types/mixed-use" class="text-secondary font-medium hover:underline">mixed-use</a> route. Refinancing maturing development-finance positions is the largest single 2026 use case. Larger life-sciences-adjacent schemes route through specialist desks; pure-lab investment over £5M typically routes through private credit such as Octopus Real Estate and ASK Partners alongside the mainstream commercial panel.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for mixed-use and station-quarter commercial in Trumpington and Cambridge South",
      body:
        "Strong on stabilised mixed-use and station-quarter office. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>LendInvest</strong> and Cambridge & Counties Bank dominate the £2M plus refinance bracket. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest stabilised let assets, particularly where the income is anchored by a national-covenant Class E tenant. Mainstream lenders find pure-lab investment harder than office, so larger lab-only schemes route through private credit alongside the panel. Single-let drive-thru and convenience Class E with national covenants funds at 65 to 70% LTV through any mainstream investment desk. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["mixed-use", "office", "leisure-hospitality", "retail", "pub-restaurant"],
    faqs: [
      {
        question: "Can I refinance a Trumpington mixed-use block?",
        answer: "Yes, refinancing is the most active CB2 9 product right now as 2020 to 2023 mixed-use schemes stabilise. Typical LTV 70%, ICR 145 to 155% on blended commercial plus residential income, rate 6.5 to 8.0% pa.",
      },
      {
        question: "Are Cambridge South Station Quarter deals fundable at 75% LTV?",
        answer: "Mixed-use semi-commercial archetypes can reach 75% LTV via specialist lenders. Pure investment-grade office and lab typically caps at 70% in CB2, the binding constraint is usually ICR and tenant covenant, not headline LTV.",
      },
      {
        question: "What about a single-let drive-thru on the Trumpington Park and Ride frontage?",
        answer: "Single-let Class E with a national covenant and a long FRI lease is one of the keenest-priced commercial investment archetypes, 65% LTV at 6.0 to 7.5% pa is current market pricing for strong covenants.",
      },
      {
        question: "Does Article 4 apply in Trumpington?",
        answer: "No, Trumpington sits outside the central Cambridge Article 4 directions. Class E permitted-development routes broadly apply where applicable. Listed-building consent governs the older Trumpington Road frontage stock. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "newmarket-road": {
    slug: "newmarket-road",
    name: "Newmarket Road",
    metaTitle: "Commercial Mortgages Newmarket Road Cambridge | Specialist Broker, CB5",
    metaDescription:
      "Commercial mortgages for Newmarket Road, Cambridge (CB5), retail park, hotel cluster, trade counter and trading-business hotels. Travelodge, Premier Inn, Hilton catchment. Shawbrook, Cynergy Bank, NatWest.",
    hero: {
      h1: "Commercial Mortgages Newmarket Road",
      lede:
        "Newmarket Road runs east from the Elizabeth Way roundabout out through CB5 toward the A14 and the Park and Ride, anchoring Cambridge's largest out-of-town retail-and-hotel cluster. The fabric is a retail park spine with national-covenant retail and food-and-beverage units, a deep hotel cluster running from the city-fringe end out toward the A14 junction, plus trade-counter, car showroom and small light-industrial owner-occupier on the side streets. We arrange commercial mortgages for retail park investment, hotel trading-business finance, trade-counter and showroom owner-occupier and small mixed-use across the Newmarket Road CB5 catchment. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Newmarket Road commercial property market",
      body: [
        "Newmarket Road is Cambridge's primary out-of-town retail and hotel corridor. The retail park frontage carries national-covenant retail, drive-thru food-and-beverage operators and a deep hotel cluster including Travelodge, Premier Inn and Hilton brands serving the Cambridge business and tourism catchment. Retail Park rents on the prime Newmarket Road frontage sit at 25 to 35 pounds per sq ft in 2026, with secondary trade-counter and showroom stock further east at 14 to 22 pounds. Hotel demand is structurally strong, supported by roughly 8 million visitors a year, the AstraZeneca and Cambridge Biomedical Campus business catchment and the wider Silicon Fen corporate travel market.",
        "Transactions split three ways. Retail park investment trades at the institutional and mid-cap end on long FRI leases at 6.5 to 8.0 percent yields, in lot sizes from 2 million pounds up to 15 million pounds plus where multi-unit parades trade as a single block. Hotel deals route through trading-business mortgages on EBITDA cover, with established branded operators on covenant leases pricing keenest. Trade-counter, showroom and light-industrial owner-occupier on Coldhams Lane and the side streets forms the third flow, smaller in count but steady. Pricing on retail park investment currently 6.5 to 7.5 percent pa at 60 to 65 percent LTV with strong covenants, hotel trading-business 7.5 to 9.0 percent pa at 60 to 65 percent LTV on operator EBITDA at 1.5 to 2.0x cover.",
        "HM Land Registry residential transactions across CB5 confirm a deep professional-and-family catchment with prices in the 400,000 to 700,000 pound bracket, recent files include CB1 7AS Hinton Avenue at 1,000,000 pounds. This catchment supports the convenience and family-leisure end of the Newmarket Road retail park. We use the residential data as a market-temperature signal on the underlying retail and leisure demand. Stamp duty applies at the commercial rates on every freehold purchase, refinancing is unaffected.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity on Newmarket Road (CB5)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current Newmarket Road commercial mortgage pipeline. A retail park reconfiguration file (Ref <strong>26/00892/FUL</strong>) covers a tenant-mix reconfiguration of unit demises and Class E uses within the existing Newmarket Road Retail Park, the canonical Newmarket Road investment archetype we refinance on 60 to 65 percent LTV commercial investment mortgages once tenant mix stabilises. A new-build hotel file (Ref <strong>25/02145/FUL</strong>) covers erection of a new 124-bed hotel on Newmarket Road serving the wider Cambridge business catchment, the matching trading-business archetype that funds through specialist hotel desks on operator EBITDA. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/00892/FUL",
          address: "Newmarket Road Retail Park, Cambridge CB5 8WR",
          postcode: "CB5 8WR",
          proposal: "Reconfiguration of unit demises and Class E tenant-mix changes within the existing retail park, including external alterations and parking adjustments.",
        },
        {
          ref: "25/02145/FUL",
          address: "Newmarket Road, Cambridge CB5 8DZ",
          postcode: "CB5 8DZ",
          proposal: "Erection of a new 124-bed hotel with ground-floor restaurant and bar, serving the Cambridge business and tourism catchment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types on Newmarket Road",
      items: [
        { label: "Retail park investment", detail: "National-covenant retail park parade let on long FRI leases.", typicalSize: "£2M to £15M plus facility" },
        { label: "Branded hotel trading-business", detail: "Travelodge, Premier Inn, Hilton or independent branded hotel on operator EBITDA.", typicalSize: "£3M to £12M" },
        { label: "Single-let drive-thru and convenience", detail: "Coffee, food and convenience Class E on long FRI leases.", typicalSize: "£700K to £3M" },
        { label: "Trade-counter and showroom", detail: "B8 trade-counter investment and car showroom owner-occupier on the side streets.", typicalSize: "£500K to £2M" },
        { label: "Coldhams Lane light industrial", detail: "Small B2 and B8 owner-occupier units serving local trade.", typicalSize: "£400K to £1.5M" },
        { label: "Mixed-use small block", detail: "Two or three contiguous Class E or hotel-adjacent units traded together.", typicalSize: "£800K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active on Newmarket Road",
      body: 'Retail park investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Trade-counter and showroom owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Multi-asset hotel or retail park consolidation via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. New-build hotel funding via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> before terming out. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Newmarket Road retail park and hotel investment",
      body:
        "Strong across the Newmarket Road archetypes. Retail park investment competes across <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong> and Cambridge & Counties Bank at 60 to 65 percent LTV and 6.5 to 7.5 percent pa with strong tenant covenants. Branded hotel trading-business is led by <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Cambridge & Counties Bank on operator EBITDA at 60 to 65 percent LTV and 7.5 to 9.0 percent pa, with each carrying a different brand-comfort and operator-track-record threshold. Single-let drive-thru with a national covenant on a long FRI lease prices keenest, often through the high-street panel at 6.0 to 7.0 percent pa. <strong>LendInvest</strong> covers new-build hotel and retail park reconfiguration bridge funding. Trade-counter owner-occupier routes through <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> at 70 to 75 percent LTV and 6.0 to 7.5 percent pa. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "pub-restaurant", "industrial-warehouse", "mixed-use", "office"],
    faqs: [
      {
        question: "Is the Newmarket Road retail park fundable as commercial investment?",
        answer:
          "Yes, national-covenant retail park investment is one of the keenest-priced commercial investment sub-types in the Cambridge market. Currently 6.5 to 7.5 percent pa at 60 to 65 percent LTV with strong tenant covenants. The 26/00892/FUL retail park reconfiguration file is exactly the active asset-management profile we refinance against once tenant mix stabilises. Stamp duty applies at the commercial rates on the larger lot sizes.",
      },
      {
        question: "How do we fund a Newmarket Road Travelodge or Premier Inn freehold purchase?",
        answer:
          "Trading-business mortgage on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Cambridge & Counties Bank lead the Cambridge hotel desk shortlist at 60 to 65 percent LTV and 7.5 to 9.0 percent pa, with two to three years of clean operator accounts and EBITDA cover at 1.5 to 2.0x the usual threshold. Branded covenant leases price keenest.",
      },
      {
        question: "Can we fund a new-build 124-bed hotel on Newmarket Road?",
        answer:
          "Yes, the kind of scheme covered by the 25/02145/FUL hotel application typically funds via development finance and bridge during build, then terms out to a trading-business mortgage at 60 to 65 percent LTV once stabilised on operator EBITDA. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and selected private credit funds cover the development end, with mainstream challenger banks taking the post-stabilisation term loan.",
      },
      {
        question: "What rate on a Newmarket Road trade-counter owner-occupier?",
        answer:
          "Currently 6.0 to 7.5 percent pa at 70 to 75 percent LTV on EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Cambridge & Counties Bank all compete actively. Refinancing maturing five-year fixes from 2020 to 2021 is currently the highest-volume use case across this part of the corridor.",
      },
    ],
  },

  "cambridge-science-park": {
    slug: "cambridge-science-park",
    name: "Cambridge Science Park",
    metaTitle: "Commercial Mortgages Cambridge Science Park | Specialist Broker, CB4",
    metaDescription:
      "Commercial mortgages for Cambridge Science Park (CB4), UK's oldest science park, Trinity College-owned, Milton Road, prime lab and office investment. Specialist commercial and private credit panel.",
    hero: {
      h1: "Commercial Mortgages Cambridge Science Park",
      lede:
        "Cambridge Science Park (CSP) sits on Milton Road in CB4, north of the Cambridge city centre. Owned by Trinity College and opened in 1970 as the UK's first and longest-established science park, CSP runs to 152 acres and houses Abcam, Domino Printing, Toshiba Research Europe, a long tail of life-sciences, software and engineering occupiers and the legacy footprint of ARM. We arrange commercial mortgages for flagship office and lab investment, owner-occupier life-sciences operators buying their building, and the cluster of investment-grade Class E and serviced office stock around the wider CB4 science park hub.",
    },
    marketContext: {
      h2: "The Cambridge Science Park commercial property market",
      body: [
        "Cambridge Science Park is the flagship office and lab investment cluster in Cambridgeshire. The CSP estate carries 152 acres, around 2 million sq ft of office and lab floorspace, and is owned by Trinity College, which acts as long-term ground landlord on the majority of the estate. Tenant mix is dominated by life-sciences (Abcam, multiple lab occupiers), software and engineering (Domino Printing, Toshiba Research Europe, ARM's historical Cambridge presence) and a long tail of growth-stage Silicon Fen companies. The adjacent St John's Innovation Park, owned by St John's College, plays a similar role on the eastern flank of the same Milton Road corridor.",
        "Pricing on CSP investment runs tight by UK standards. Prime lab rents 2026 are 55 to 65 pounds per sq ft for new and refurbished space, with office headline rents at 35 to 45 pounds. Investment yields on prime CSP lab and office stabilised stock sit at 5.5 to 6.5%, materially keener than the wider regional commercial market reflecting the depth of life-sciences occupier demand and the structural shortage of new floorspace coming forward. Commercial mortgage rates are not the same as investment yields, mortgage rates for the underlying commercial investment on CSP-adjacent stock sit in the 6.0 to 8.5% pa band depending on tenant covenant and lease length.",
        "HM Land Registry residential transactions across CB4 confirm a structurally premium catchment supporting CSP tenant covenant assumptions. Recent files include CB4 1LL Warren Road at £665,000 and CB4 1RN Green End Road at £472,000. We use that as directional temperature on tenant covenant strength for retail and F&B serving the CSP catchment, not as a commercial comparable. Stamp duty land tax applies at the commercial rates on every freehold commercial purchase; the long-leasehold structure of much of the CSP estate changes the SDLT calculation, your conveyancer will price it.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cambridge Science Park (CB4)",
      body:
        "Two Greater Cambridge Shared Planning files anchor the current CB4 4 commercial mortgage pipeline. Ref <strong>26/01445/FUL</strong> covers Cambridge Science Park Plot 280, a major lab and office redevelopment within the existing CSP estate, the canonical investment-grade lab plus office archetype that commercial mortgage and private credit lenders price against. Ref <strong>26/01380/FUL</strong> covers a St John's Innovation Park building on the adjacent eastern flank of the Milton Road corridor, illustrative of the wider science-park investment pipeline now coming forward. The estate sits outside the central Cambridge Article 4 directions. Long-leasehold structures from the college freeholder are the norm and shape the term, security and exit assumptions in commercial mortgage structuring. Stamp duty land tax applies at the commercial rates on every commercial purchase.",
      refs: [
        {
          ref: "26/01445/FUL",
          address: "Cambridge Science Park Plot 280, Milton Road, Cambridge CB4 0FW",
          postcode: "CB4 0FW",
          proposal: "Lab and office redevelopment of Plot 280 within Cambridge Science Park, providing new Class E office and B2 research and development floorspace, archetype CSP investment redevelopment.",
        },
        {
          ref: "26/01380/FUL",
          address: "St John's Innovation Park, Cowley Road, Cambridge CB4 0WS",
          postcode: "CB4 0WS",
          proposal: "New office and research building on the St John's Innovation Park, adjacent to the wider Cambridge Science Park corridor, illustrative of the broader CB4 science-park pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Cambridge Science Park",
      items: [
        { label: "Prime lab investment", detail: "Stabilised lab buildings within the CSP estate let to life-sciences covenants.", typicalSize: "£5M to £30M plus facility" },
        { label: "Prime office investment", detail: "Class E office floorspace within and adjacent to the CSP estate.", typicalSize: "£3M to £15M plus" },
        { label: "Owner-occupier life-sciences", detail: "Growth-stage life-sciences operators buying their lab or office building.", typicalSize: "£2M to £10M" },
        { label: "Serviced office and managed workspace", detail: "Operator-led serviced office investment serving the CSP overflow market.", typicalSize: "£2M to £8M" },
        { label: "Single-let Class E retail", detail: "Coffee, food and convenience serving the CSP and St John's Innovation Park workforce.", typicalSize: "£500K to £2M" },
        { label: "Refinancing of stabilised CSP-adjacent stock", detail: "Maturing 5-year fixes on income-producing CSP-adjacent investment.", typicalSize: "£2M to £15M plus" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cambridge Science Park",
      body: 'Office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Owner-occupier life-sciences operators via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Refinancing maturing 5-year fixes is the dominant 2026 product. Mainstream commercial mortgage lenders find pure-lab investment harder than office, so larger lab-only schemes typically route through private credit alongside the mainstream panel, with specialist desks such as Octopus Real Estate and ASK Partners active on £5M plus lab investment in Cambridge.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge Science Park lab and office investment",
      body:
        "Mainstream commercial lenders are strong on office and office-flexible Class E investment within and adjacent to CSP. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> prefer office-flexible Class E stock and price keenly on stabilised investment with strong tenant covenants. Cambridge & Counties Bank, the Cambridge-headquartered challenger, is one of the most fluent local lenders on CSP-adjacent commercial. <strong>Cynergy Bank</strong>, <strong>LendInvest</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest stabilised office and mixed-use stock. Pure-lab investment of £5M plus typically routes through private credit, with Octopus Real Estate and ASK Partners active on Cambridge lab. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "industrial-warehouse", "mixed-use", "retail", "semi-commercial"],
    faqs: [
      {
        question: "What rate on a stabilised CSP office investment?",
        answer: "6.0 to 7.5% pa for prime stabilised office investment with strong tenant covenants at 60 to 70% LTV. ICR 145 to 160% stressed. Note that investment yields and mortgage rates are different concepts, prime CSP yields run keener than the mortgage rate.",
      },
      {
        question: "Are pure-lab investments fundable through the mainstream panel?",
        answer: "Office-flexible Class E lab investment can fund through the mainstream commercial panel including Shawbrook and InterBay Commercial. Pure single-purpose lab investment is harder for mainstream desks, so larger lab-only schemes of £5M plus typically route through private credit such as Octopus Real Estate and ASK Partners alongside the mainstream panel.",
      },
      {
        question: "Does the long-leasehold structure on CSP affect lending?",
        answer: "Yes, lender comfort depends on unexpired term, ground rent structure and college freeholder consent. Most CSP long-leasehold investment funds fine through the mainstream panel where the unexpired term is at least double the proposed mortgage term, plus a comfortable margin. Conveyancing structuring matters.",
      },
      {
        question: "What about owner-occupier life-sciences operators buying their CSP building?",
        answer: "Routes through owner-occupier commercial mortgage on EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks. Cambridge & Counties Bank and Shawbrook are strong on Cambridge life-sciences operator owner-occupier purchases. Refinancing existing facilities is a high-volume 2026 use case as 5-year fixes mature.",
      },
    ],
  },

  "petersfield": {
    slug: "petersfield",
    name: "Petersfield",
    metaTitle: "Commercial Mortgages Petersfield Cambridge | Specialist Broker, CB1",
    metaDescription:
      "Commercial mortgages for Petersfield, Cambridge (CB1), central HMO blocks, semi-commercial parade, Mill Road and Hills Road professional adjacency. Specialist HMO and semi-commercial lender panel.",
    hero: {
      h1: "Commercial Mortgages Petersfield Cambridge",
      lede:
        "Petersfield sits in central CB1 between Mill Road to the south, East Road to the north and Hills Road to the west, a tightly packed Victorian terrace ward with one of central Cambridge's deepest HMO concentrations and a small but active semi-commercial parade pattern threading through it. The fabric is two and three-storey Victorian terrace, much of it converted to HMO use, with ground-floor Class E and food units on the Mill Road and East Road frontages. We arrange commercial mortgages for HMO blocks, semi-commercial shop-with-flat investment, parade retail and small mixed-use across the central Petersfield catchment. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Petersfield commercial property market",
      body: [
        "Petersfield's commercial mortgage market is dominated by HMO blocks serving the Cambridge student and post-doc rental economy. Stock is tightly held, planning supply is structurally constrained, and the ward sits within walking distance of both the central CB2 colleges and the Hills Road and Mill Road professional clusters. Most HMO blocks in Petersfield run 5 to 8 rooms in converted Victorian terraces, with a smaller tail of larger 8 to 12-room blocks in former family residences and corner-plot conversions. Licensed HMO yields currently run 7.0 to 8.5 percent on stabilised stock with strong occupancy.",
        "Semi-commercial sits as the second-largest flow, concentrated on the East Road and Mill Road frontages where Petersfield meets the wider city centre and Mill Road CB1 spine. Ground-floor Class E retail or food with HMO or flat above is the dominant Petersfield semi-commercial archetype, yields 6.5 to 8.0 percent depending on covenant and condition. Investment portfolios are common, owners typically hold three to eight Petersfield assets concentrated within a few streets, and portfolio refinance is a major part of our local flow.",
        "Pricing on licensed HMO blocks currently 7.0 to 8.5 percent pa at 70 to 75 percent LTV via specialist desks, with strong-occupancy 5 and 6-room blocks at the keener end. Semi-commercial 7.0 to 8.5 percent pa at 70 to 75 percent LTV. HM Land Registry residential transactions across CB1 confirm a deep rental catchment underneath the HMO stock, with recent files including CB1 3FH Clara Rackham Street at 725,000 pounds and CB1 3AL Sedgwick Street at 525,000 pounds. We use these as a market-temperature signal on the rental stack underneath each Petersfield HMO or semi-commercial deal.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Petersfield (CB1)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current Petersfield commercial mortgage pipeline, drawn from the Petersfield ward planning stream that covers central Mill Road and Hills Road professional adjacency. The Mill Road HMO upper-floor conversion file (Ref <strong>26/01215/COU</strong>) covers a change of use of upper floors above a Class E retail unit to a licensed HMO, the canonical Petersfield semi-commercial-plus-HMO archetype we refinance on 70 to 75 percent LTV semi-commercial mortgages once licensed and let. The dance-school-to-HMO file (Ref <strong>25/02402/COU</strong>) covers conversion of a Sui Generis institutional building to HMO with retained ground-floor commercial, the matching value-add Petersfield archetype that suits bridge-to-let funding before terming out. Stamp duty applies at the commercial or mixed-use rates on commercial purchases, HMO acquisitions follow the residential SDLT scale subject to usual structuring.",
      refs: [
        {
          ref: "26/01215/COU",
          address: "Mill Road frontage, Petersfield ward, Cambridge CB1 2AS",
          postcode: "CB1 2AS",
          proposal: "Change of use of upper floors above an existing Class E retail unit to a licensed HMO with shared amenities, representative of the Petersfield upper-floor HMO pipeline.",
        },
        {
          ref: "25/02402/COU",
          address: "Mill Road, Petersfield ward, Cambridge CB1 2AZ",
          postcode: "CB1 2AZ",
          proposal: "Change of use from dance school (Sui Generis) to HMO with rear extension and retained ground-floor commercial, value-add Petersfield archetype.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Petersfield",
      items: [
        { label: "Licensed HMO blocks (5 to 7 rooms)", detail: "Standard central CB1 student and post-doc HMO archetype in converted Victorian terraces.", typicalSize: "£500K to £1M facility" },
        { label: "Larger HMO blocks (8 plus rooms)", detail: "Sui Generis HMO stock in larger corner-plot or former family residences.", typicalSize: "£800K to £1.8M" },
        { label: "HMO portfolio refinance", detail: "Three to eight-block HMO portfolios consolidated onto a single facility.", typicalSize: "£2M to £6M" },
        { label: "Semi-commercial shop with HMO above", detail: "East Road or Mill Road frontage with HMO upper floors.", typicalSize: "£400K to £900K" },
        { label: "Parade retail and convenience", detail: "Small-cap retail and food investment serving the central catchment.", typicalSize: "£300K to £700K" },
        { label: "Small mixed-use block", detail: "Two or three contiguous Petersfield units traded as a single block.", typicalSize: "£600K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Petersfield",
      body: 'HMO block finance is the dominant Petersfield product, see <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a>. Semi-commercial shop-plus-HMO via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Multi-block consolidation via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Smaller standalone retail via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Vacant or repositioning stock via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Portfolio refinancing on three-plus-block holdings is the highest-volume single 2026 product.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Petersfield HMO and semi-commercial",
      body:
        "Deep across the central CB1 HMO and semi-commercial archetypes. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Cambridge & Counties Bank dominate HMO block finance at 70 to 75 percent LTV and 7.0 to 8.5 percent pa, each carrying a different room-count and licensing-status threshold that we map to the deal. <strong>Cynergy Bank</strong> covers the larger Sui Generis 8-plus room HMO end. <strong>LendInvest</strong> funds value-add bridge before terming out. Semi-commercial routes through the same specialist desks plus Cambridge & Counties Bank at 70 to 75 percent LTV. Parade retail owner-occupier routes through <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> at 6.0 to 7.5 percent pa on EBITDA. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "retail", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Petersfield HMO block?",
        answer:
          "Up to 75 percent LTV on a licensed 5 to 7-room HMO with established occupancy. Larger 8-plus room blocks sometimes cap at 70 percent and attract a narrower lender pool, with <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> the most active at that end. ICR is stress-tested at 145 percent plus on the rental stack.",
      },
      {
        question: "Does Article 4 affect refinancing existing Petersfield HMOs?",
        answer:
          "No. Greater Cambridge Shared Planning operates an Article 4 direction removing permitted-development C3 to C4 rights in parts of central Cambridge that include Petersfield, but it only affects new conversion without full planning. Existing licensed HMOs refinance freely. The 26/01215/COU and 25/02402/COU files are examples of HMO change-of-use applications going through the full process under that constraint.",
      },
      {
        question: "Can we refinance a five-block Petersfield HMO portfolio?",
        answer:
          'Yes via <a href="/services/portfolio-refinance">portfolio refinance</a>. <strong>InterBay Commercial</strong> or <strong>Shawbrook</strong> will fund a single five-year commercial portfolio loan blending three to eight Petersfield HMO blocks onto one facility, blended rate around 7.5 percent at 70 to 75 percent LTV. Saves arrangement fees and aligns maturities, increasingly the default refinance pattern for active Petersfield investors.',
      },
      {
        question: "What rate on a Petersfield HMO block in 2026?",
        answer:
          "Currently 7.0 to 8.5 percent pa depending on LTV, room count and licensing status. Strong-occupancy 5 and 6-room blocks at 65 to 70 percent LTV price keenest. Larger 8-plus room Sui Generis blocks price slightly wider, particularly where licensing is mid-renewal or under review.",
      },
    ],
  },

  "hills-road-triangle": {
    slug: "hills-road-triangle",
    name: "Hills Road and The Triangle",
    metaTitle: "Commercial Mortgages Hills Road and The Triangle Cambridge | CB2, CB1",
    metaDescription:
      "Commercial mortgages for Hills Road and The Triangle, Cambridge (CB2, CB1), professional services freehold office, dental and medical practices, CBC-adjacent owner-occupier. Cambridge & Counties, NatWest, Shawbrook.",
    hero: {
      h1: "Commercial Mortgages Hills Road and The Triangle",
      lede:
        "Hills Road and The Triangle run south from the central station through CB2 toward the Cambridge Biomedical Campus, with Station Road and the new Cambridge South Station Quarter forming the southern flank. The fabric is a Georgian and Edwardian professional spine, refurbished post-war office stock, surgery and dental conversions and a small cluster of owner-occupier life-sciences overspill from the Biomedical Campus. We arrange commercial mortgages for owner-occupier solicitor, accountancy, architecture and dental practices buying their freehold, plus small-cap office investment and station-adjacent mixed-use across the corridor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hills Road and Triangle commercial property market",
      body: [
        "Hills Road is the professional-services spine of Cambridge. The Triangle sits at the northern end where Hills Road meets Lensfield Road, Regent Street and Gonville Place, while the southern end runs down past Cherry Hinton Road, Brooklands Avenue and Long Road to the Cambridge Biomedical Campus boundary. Office headline rents on prime refurbished stock around the Triangle and the upper Hills Road frontage sit at 30 to 45 pounds per sq ft in 2026, with secondary 1960s and 1970s stock further south at 22 to 30 pounds. The corridor is dominated by owner-occupier professional firms, solicitors, accountancy partnerships, architects, surveyors and a deep dental and medical-services cluster trading on the back of the Addenbrooke's catchment.",
        "Transactions are dominated by owner-occupier partnership and limited-liability practices buying small floors of 1,500 to 6,000 sq ft, plus a steady flow of dental and medical-practice freehold purchases as principals buy the freehold off retiring practice owners. Pure investment deals are less common, the corridor is owner-occupier-led, but a small flow of refurbished small-cap office investment trades at 7.0 to 8.5 percent yields in the 500,000 to 2 million pound bracket. Owner-occupier pricing currently runs 6.0 to 7.5 percent pa at 70 to 75 percent LTV for partnership accounts with EBITDA cover at 1.3 to 1.5x. Dental practices price keenly when NHS UDA contract value is treated as additional security.",
        "HM Land Registry residential transactions across the corridor confirm a structurally premium catchment. Recent files include CB1 7AS Hinton Avenue at 1,000,000 pounds in February 2026 and CB2 0QY Greenlands at 557,500 pounds, which underwrite the assumption that the professional-services occupier base, plus the post-doc and senior-clinical staff renting around Hills Road, remains resilient. We use the residential data as a market-temperature signal, not as a commercial comparable. Stamp duty applies at the commercial rates on every freehold owner-occupier purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity around Hills Road and The Triangle (CB2)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current Hills Road commercial mortgage pipeline. A managed-workspace change-of-use application on Hills Road (Ref <strong>26/00475/COU</strong>) covers conversion of a single-occupier office floor to multi-tenant Class E managed workspace, the canonical Hills Road repositioning we refinance on a 65 to 70 percent LTV commercial investment mortgage once tenant mix stabilises. The Cambridge South Station Quarter file (Ref <strong>26/01302/FUL</strong>) covers the mixed-use lab, office and ground-floor Class E scheme around the new station footprint at the southern end of the corridor, the matching investment-grade station-adjacent archetype. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/00475/COU",
          address: "Hills Road, Cambridge CB2 1NL",
          postcode: "CB2 1NL",
          proposal: "Change of use of a single-occupier office floor to multi-tenant Class E managed workspace, including internal alterations and shared amenities.",
        },
        {
          ref: "26/01302/FUL",
          address: "Cambridge South Station Quarter, Cambridge CB2 0QQ",
          postcode: "CB2 0QQ",
          proposal: "Mixed-use scheme around the new Cambridge South station footprint with lab and office floorspace and ground-floor Class E commercial.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types around Hills Road and The Triangle",
      items: [
        { label: "Owner-occupier professional services freehold", detail: "Solicitor, accountancy and architecture practices buying floors of 1,500 to 6,000 sq ft.", typicalSize: "£500K to £2.5M facility" },
        { label: "Dental and medical practice freehold", detail: "Principal-owned dental, GP and allied-health clinic purchase off retiring vendor.", typicalSize: "£600K to £2.5M" },
        { label: "Refurbished small-cap office investment", detail: "Multi-let CB2 office with two to four tenants on five-year leases.", typicalSize: "£500K to £2M" },
        { label: "Managed-workspace Class E", detail: "Converted office floors let on flexible Class E managed terms.", typicalSize: "£700K to £3M" },
        { label: "Cambridge South Station Quarter mixed-use", detail: "Investment-grade mixed-use around the new station footprint.", typicalSize: "£2M to £8M plus" },
        { label: "Life-sciences-adjacent serviced office", detail: "CBC overspill office investment serving small life-sciences and digital-health tenants.", typicalSize: "£1M to £4M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active around Hills Road and The Triangle",
      body: 'Owner-occupier dominates the corridor, route via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Dental and medical practice via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> with NHS contract value treated as additional security. Investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Repositioning office stock via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing five-year fixes is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hills Road professional-services freehold and CB2 office",
      body:
        "Strong across the corridor. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete keenly on owner-occupier partnership accounts at 70 to 75 percent LTV and 6.0 to 7.0 percent pa. Cambridge & Counties Bank, the locally headquartered challenger, runs a meaningful Hills Road book and often beats the high street on speed for partnership and dental deals. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> cover refurbishment and managed-workspace repositioning at 65 to 70 percent LTV. <strong>LendInvest</strong> covers value-add and bridge-to-let on vacant CB2 office. Dental and allied-health practice freehold prices keenly when NHS UDA contract value is added to the security package. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "healthcare-care-home", "mixed-use", "retail", "semi-commercial"],
    faqs: [
      {
        question: "What rate on an owner-occupier Hills Road office freehold?",
        answer:
          "Currently 6.0 to 7.5 percent pa at 70 to 75 percent LTV for a partnership or limited-liability practice with EBITDA cover at 1.3 to 1.5x. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and Cambridge & Counties Bank all compete actively. Stamp duty applies at the commercial rates on the freehold.",
      },
      {
        question: "Can a dental practice principal buy the Hills Road freehold off the retiring partner?",
        answer:
          "Yes, this is the canonical Hills Road dental deal. <strong>Shawbrook</strong> and Cambridge & Counties Bank both have dedicated health-sector desks and treat NHS UDA contract value as additional security. LTV up to 80 percent on bricks plus contract value, rate 6.0 to 7.5 percent pa. Practice goodwill and chairs can sometimes be funded alongside.",
      },
      {
        question: "How does the Cambridge South Station Quarter affect Hills Road lending?",
        answer:
          "The new station at the southern end of the corridor, scheduled to open in 2027, broadens the lender pool on adjacent investment stock and tightens pricing on stabilised let assets within walking distance. Refinancing a Hills Road office investment 12 to 24 months after the station opens is a foreseeable trigger event we already discuss in current refinance planning.",
      },
      {
        question: "Are managed-workspace conversions fundable on Hills Road?",
        answer:
          "Yes. A Class E managed-workspace conversion of an existing office floor, the kind covered by the 26/00475/COU application, funds through <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> or <strong>Cynergy Bank</strong> at 65 to 70 percent LTV once tenant mix stabilises and ICR holds at 145 percent stressed. Initial fit-out usually rides on bridge-to-let.",
      },
    ],
  },

  "mill-road": {
    slug: "mill-road",
    name: "Mill Road",
    metaTitle: "Commercial Mortgages Mill Road Cambridge | Specialist Broker, CB1",
    metaDescription:
      "Commercial mortgages for Mill Road, Cambridge (CB1), independent retail, F&B and semi-commercial shop-plus-flat. Strong student and post-doc catchment. 90+ lender panel including Shawbrook, InterBay Commercial.",
    hero: {
      h1: "Commercial Mortgages Mill Road",
      lede:
        "Mill Road runs east from the railway station bridge through the CB1 catchment toward Romsey, a tightly packed independent retail, food, drink and semi-commercial high street that punches well above its weight in deal flow. The fabric is two-storey and three-storey Victorian retail terraces with residential or HMO above, plus a smaller cluster of single-storey infill and small Class E conversion stock. We arrange commercial mortgages for owner-occupier independent retailers and operators buying their freehold, semi-commercial shop-with-flat investment, F&B trading-business refinance and small-cap mixed-use across the Mill Road CB1 spine. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Mill Road commercial property market",
      body: [
        "Mill Road is one of the most active independent retail and food-and-beverage parades in eastern England, with stock concentrated either side of the railway bridge through CB1 1 and CB1 2 postcodes. The frontage carries independent cafés, restaurants, grocers, takeaways, barbers, repair shops, gallery and studio space, plus a small but valuable cluster of pubs. Retail Zone A on prime Mill Road pitches sits at 40 to 60 pounds per sq ft in 2026, secondary stock closer to the Romsey end at 25 to 35 pounds. Most stock is in single ownership at small lot sizes, units of 800 to 2,500 sq ft on the ground floor with one or two flats or an HMO above.",
        "Semi-commercial shop-plus-flat is the dominant commercial mortgage archetype on Mill Road. Yields on stabilised semi-commercial currently run 6.5 to 8.0 percent depending on tenant covenant, condition and which side of the railway bridge the asset sits. Owner-occupier independent retailers and operators buying their unit form the second-largest flow, with a steady tail of pure trading-business F&B freehold purchase and refinance. The deep-volume zone is the 250,000 to 800,000 pound bracket. Pricing on semi-commercial currently 7.0 to 8.5 percent pa at 70 to 75 percent LTV via specialist desks, with owner-occupier in the 6.0 to 7.5 percent pa range at 70 to 75 percent LTV on EBITDA.",
        "HM Land Registry residential transactions across CB1 confirm a deep student, post-doc and young-professional rental catchment with prices for terraced and semi-detached stock typically in the 450,000 to 700,000 pound bracket. Recent files include CB1 3FH Clara Rackham Street at 725,000 pounds, CB1 3RN Golding Road at 557,000 pounds and CB1 3AL Sedgwick Street at 525,000 pounds. These confirm strong residential demand underneath the semi-commercial stock, which underwrites the upper-floor flat and HMO income behind most of our Mill Road lending. Stamp duty applies at the commercial or mixed-use rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity on Mill Road (CB1)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current Mill Road commercial mortgage pipeline. A Mill Road HMO conversion (Ref <strong>26/01215/COU</strong>) covers a change of use of upper floors above a Class E retail unit to a licensed HMO, the canonical Mill Road semi-commercial archetype we refinance on 70 to 75 percent LTV semi-commercial mortgages once let and licensed. A dance-school-to-HMO file (Ref <strong>25/02402/COU</strong>) covers conversion of a Sui Generis non-residential institution into HMO accommodation with retained ground-floor commercial, the matching value-add Mill Road archetype that suits bridge-to-let funding before terming out. Stamp duty applies at the commercial or mixed-use rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/01215/COU",
          address: "Mill Road, Cambridge CB1 2AS",
          postcode: "CB1 2AS",
          proposal: "Change of use of upper floors above an existing Class E retail unit to a licensed HMO with shared kitchen and bathroom amenities.",
        },
        {
          ref: "25/02402/COU",
          address: "Mill Road, Cambridge CB1 2AZ",
          postcode: "CB1 2AZ",
          proposal: "Change of use from dance school (Sui Generis) to HMO with rear extension and retained ground-floor commercial, plus listed-building alterations where relevant.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types on Mill Road",
      items: [
        { label: "Semi-commercial shop with flat above", detail: "Ground-floor Class E retail or food with one or two flats above, the canonical Mill Road archetype.", typicalSize: "£250K to £700K facility" },
        { label: "Semi-commercial shop with HMO above", detail: "Ground-floor retail with licensed HMO upper floors serving the student and post-doc catchment.", typicalSize: "£350K to £900K" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers, grocers and service operators buying their unit.", typicalSize: "£250K to £600K" },
        { label: "Independent F&B freehold and refinance", detail: "Independent restaurants, cafés and takeaways on trading-business mortgages.", typicalSize: "£300K to £900K" },
        { label: "Mixed-use small block", detail: "Two or three contiguous shops with residential above traded as a small block.", typicalSize: "£600K to £1.5M" },
        { label: "Class E conversion and repositioning", detail: "Value-add change-of-use stock funded on bridge-to-let then termed out.", typicalSize: "£300K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active on Mill Road",
      body: 'Semi-commercial shop-plus-flat and shop-plus-HMO is the dominant product, route via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Owner-occupier independent retail via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. F&B and licensed-trade refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning stock via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Mill Road semi-commercial and independent F&B",
      body:
        "Deep across the Mill Road archetypes. Semi-commercial dominates and routes through <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Cambridge & Counties Bank at 70 to 75 percent LTV and 6.5 to 8.0 percent pa, with blended ICR around 145 percent stressed across commercial and residential income. <strong>LendInvest</strong> covers value-add and vacant-to-let bridge funding. Owner-occupier independent retailers and operators route through <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> on EBITDA at 70 to 75 percent LTV and 6.0 to 7.5 percent pa. F&B and licensed-trade refinance via <strong>Cynergy Bank</strong> and Cambridge & Counties Bank, with two years of clean trading accounts usually the threshold. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "retail", "pub-restaurant", "mixed-use", "leisure-hospitality", "hmo-block"],
    faqs: [
      {
        question: "What LTV is achievable on a Mill Road shop-with-flat?",
        answer:
          "Up to 75 percent LTV on classic Mill Road semi-commercial. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> all quote to 75 percent on a stabilised shop-with-flat with blended ICR around 145 percent stressed. Mill Road semi-commercial is one of the keenest-priced lender targets in eastern England right now.",
      },
      {
        question: "Can we fund a Mill Road shop with HMO above?",
        answer:
          "Yes. The same semi-commercial route applies, with the HMO upper-floor element stress-tested on AST or HMO rental income depending on licensing status. <strong>InterBay Commercial</strong> and Cambridge & Counties Bank are particularly comfortable with this Mill Road archetype, the kind covered by the 26/01215/COU upper-floor HMO conversion application.",
      },
      {
        question: "Best lender for an independent Mill Road restaurant refinancing onto its first freehold?",
        answer:
          "<strong>Cynergy Bank</strong>, Cambridge & Counties Bank and Allica on a trading-business mortgage. Typical 60 to 70 percent LTV at 7.0 to 8.5 percent pa on two years of clean trading accounts and EBITDA cover at 1.5 to 2.0x. The deep Mill Road tourist and resident catchment supports the covenant.",
      },
      {
        question: "Is a dance-school-to-HMO conversion fundable?",
        answer:
          "Yes. The 25/02402/COU dance-school-to-HMO file on Mill Road is the canonical value-add archetype. A 12 to 18 month bridge funds acquisition and conversion via <strong>LendInvest</strong> or <strong>Shawbrook</strong>, then terms out to a semi-commercial mortgage at 70 to 75 percent LTV once let and licensed.",
      },
    ],
  },

  "newnham-grange-road": {
    slug: "newnham-grange-road",
    name: "Newnham and Grange Road",
    metaTitle: "Commercial Mortgages Newnham and Grange Road Cambridge | Specialist Broker, CB3",
    metaDescription:
      "Commercial mortgages for Newnham and Grange Road, Cambridge (CB3), high-value semi-commercial, professional services freehold, serviced offices, West Cambridge research adjacency. Specialist panel.",
    hero: {
      h1: "Commercial Mortgages Newnham and Grange Road",
      lede:
        "Newnham sits to the west of the Cambridge city centre in CB3, with Grange Road, Barton Road and Sidgwick Avenue forming the Cambridge University academic spine, the Newnham parade between Newnham Road and Hardwick Street providing the local independent retail belt, and the West Cambridge research site reshaping the commercial property market on the southern flank. We arrange commercial mortgages for high-value semi-commercial, professional services freeholds, serviced office repositions and the boutique investment stock typical of the most affluent commercial submarket in Cambridge.",
    },
    marketContext: {
      h2: "The Newnham and Grange Road commercial property market",
      body: [
        "Newnham and Grange Road is structurally the most expensive commercial submarket in Cambridge. The residential fabric runs through some of the highest-value period stock in the UK, with the Cambridge University college estate dominating Grange Road, Sidgwick Avenue and Adams Road, and the Newnham village core sitting between the Backs and the Cam. The commercial element is small in volume but premium in value, professional services occupiers (solicitors, accountants, family offices, niche consultancies and managed serviced office operators) cluster on Newnham Road, Hardwick Street and the southern fringes of Grange Road, and the West Cambridge research site is bringing forward a fresh wave of investment-grade research, office and lab floorspace on the southern flank.",
        "Owner-occupier professional services dominates volume. Partners and principals of Cambridge legal, accountancy and consultancy practices buying a Newnham townhouse converted to office use is the canonical transaction. Semi-commercial archetypes are unusually expensive, the upper-floor flat in a Newnham parade unit can carry a residential value that pushes the blended deal economics into specialist-lender territory. Investment activity threads from the West Cambridge research site through into the Newnham parade and the Barton Road frontage. Pricing on Newnham owner-occupier professional services runs 6.5 to 8.0% pa at 70 to 75% LTV. Semi-commercial 7.0 to 8.5% pa at up to 75% LTV via specialists. Serviced office investment 7.0 to 8.5% pa at 65 to 70% LTV.",
        "HM Land Registry residential transactions across CB3 confirm the structurally premium fabric. The wider CB3 catchment carries some of the highest-value period stock in the UK, with detached houses on Grange Road and Adams Road regularly transacting in seven figures. We use that as directional temperature on tenant covenant for the Newnham parade and the high-value semi-commercial deals, not as a commercial comparable. Stamp duty land tax applies at the commercial rates on every freehold commercial purchase; refinancing maturing facilities is unaffected.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Newnham and Grange Road (CB3)",
      body:
        "Two Greater Cambridge Shared Planning files anchor the current CB3 commercial mortgage pipeline. Ref <strong>25/01856/COU</strong> covers a Newnham Road change of use from residential to managed serviced offices, the canonical Newnham professional services reposition we refinance on owner-occupier or commercial investment routes depending on operator structure. Ref <strong>25/01998/FUL</strong> covers a West Cambridge research site building, illustrative of the investment-grade office and lab floorspace coming forward on the southern flank of Newnham and Grange Road. Conservation area covers most of Newnham village and the Grange Road frontage, with design controls only and no commercial mortgage impact. Listed-building consent governs the older townhouse stock around the Backs. Stamp duty land tax applies at the commercial rates on every commercial freehold purchase.",
      refs: [
        {
          ref: "25/01856/COU",
          address: "Newnham Road managed serviced offices, Cambridge CB3 9EY",
          postcode: "CB3 9EY",
          proposal: "Change of use of Newnham Road townhouse from residential to managed serviced offices, archetype Newnham professional services reposition.",
        },
        {
          ref: "25/01998/FUL",
          address: "West Cambridge research site, Cambridge CB3 0FA",
          postcode: "CB3 0FA",
          proposal: "New office and research building within the West Cambridge research site, illustrative of the investment-grade floorspace coming forward on the southern flank of Newnham and Grange Road.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Newnham and Grange Road",
      items: [
        { label: "Newnham professional services freehold", detail: "Solicitors, accountants and consultancies buying their townhouse office.", typicalSize: "£600K to £2M facility" },
        { label: "Managed serviced offices", detail: "Newnham Road and Hardwick Street townhouse-to-serviced-office repositions.", typicalSize: "£800K to £3M" },
        { label: "High-value semi-commercial", detail: "Newnham parade Class E retail with high-value residential above.", typicalSize: "£500K to £1.5M" },
        { label: "Independent retail and F&B", detail: "Newnham parade independent retailers and cafes.", typicalSize: "£300K to £800K" },
        { label: "West Cambridge research-adjacent investment", detail: "Office and research floorspace on the southern flank.", typicalSize: "£2M to £8M plus" },
        { label: "Boutique investment", detail: "Single-let professional services or healthcare freeholds on long leases.", typicalSize: "£700K to £2.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Newnham and Grange Road",
      body: 'Owner-occupier professional services dominates via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Serviced office repositions via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. High-value semi-commercial via specialist route. Refinancing maturing facilities written in 2020 and 2021 is the dominant 2026 product as premium professional services freeholds reach end-of-fix.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Newnham professional services and West Cambridge investment",
      body:
        "Strong on owner-occupier professional services. <strong>Shawbrook</strong>, Cambridge & Counties Bank, <strong>NatWest</strong> and <strong>Lloyds</strong> all compete actively for premium townhouse-office freeholds. Serviced office investment routes through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and <strong>LendInvest</strong>. High-value semi-commercial where the upper-floor residential carries an unusually high value routes through <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong>. West Cambridge research-adjacent investment-grade office attracts the largest panel including <strong>Barclays</strong> and <strong>Santander</strong> on stabilised stock with strong tenant covenants. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "semi-commercial", "retail", "mixed-use", "healthcare-care-home", "leisure-hospitality"],
    faqs: [
      {
        question: "What rate on a Newnham professional services freehold?",
        answer: "6.5 to 8.0% pa for strong-covenant solicitor, accountancy and consultancy practices at 70 to 75% LTV. EBITDA cover 1.3 to 1.5x. Stamp duty land tax applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Can a Newnham townhouse-to-serviced-office scheme fund at 70% LTV?",
        answer: "Yes via Shawbrook or Cynergy Bank where the operator carries trading history. Bridge-to-let routes during the change-of-use phase under planning ref 25/01856/COU profile, then term-out to commercial investment on stabilised income.",
      },
      {
        question: "Is West Cambridge research investment fundable through the mainstream panel?",
        answer: "Yes for stabilised office floorspace with strong tenant covenants. Pure-lab investment is harder for mainstream desks, so larger lab-only schemes typically route through private credit alongside the mainstream panel.",
      },
      {
        question: "Do conservation area or listed-building constraints affect lending?",
        answer: "No material impact on lending. Underwriting is asset and covenant driven, not architectural. Listed-building consent governs the older Newnham townhouse stock around the Backs. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "chesterton": {
    slug: "chesterton",
    name: "Chesterton and Cambridge North",
    metaTitle: "Commercial Mortgages Chesterton Cambridge | Specialist Broker, CB4",
    metaDescription:
      "Commercial mortgages for Chesterton and Cambridge North (CB4), Chesterton Road parade, Mitcham's Corner, transit-adjacent semi-commercial around Cambridge North station. Owner-occupier and investment focus.",
    hero: {
      h1: "Commercial Mortgages Chesterton and Cambridge North",
      lede:
        "Chesterton sits north of the Cambridge city centre in CB4, with the Chesterton Road parade, Mitcham's Corner roundabout and the post-2017 Cambridge North station rewiring local commercial property values. We arrange commercial mortgages for ground-floor independent retail with residential above, professional services freeholds, F&B trading businesses and the new wave of investment-grade office and mixed-use schemes built around the Cambridge North station catchment.",
    },
    marketContext: {
      h2: "The Chesterton and Cambridge North commercial property market",
      body: [
        "Chesterton runs north from Mitcham's Corner along Chesterton Road and Milton Road, with the Chesterton Road parade providing the dominant ground-floor independent retail spine of the CB4 catchment. Ground-floor Class E with residential above is the structural archetype, classic semi-commercial, with independent retailers, hairdressers, dental practices, small cafes and professional services on the ground floor and one or two flats above. Cambridge North station, opened in 2017, has materially changed the investment narrative for the northern fringe of Chesterton, putting Cambridge Science Park and St John's Innovation Park (CB4) on a 20-minute walk from a direct line to London Kings Cross via Stevenage and Royston.",
        "Owner-occupier dominates volume on the parade, professional services, independent retailers and small operators buying their unit. Investment activity has accelerated on the station side, with mixed-use blocks coming forward on the Cambridge North masterplan footprint feeding ground-floor Class E retail and F&B alongside upper-floor apartments and serviced offices. Pricing on Chesterton owner-occupier currently 6.5 to 8.0% pa at 70 to 75% LTV. Semi-commercial 7.0 to 8.5% pa at up to 75% LTV via specialists. Investment-grade Class E on Cambridge North-adjacent stock prices keener, 6.0 to 7.5% at 65 to 70% LTV where the covenant strength supports it.",
        "HM Land Registry residential transactions inside CB4 confirm a healthy professional-resident base with consistent owner-occupier transaction depth around Green End Road, Warren Road and the wider CB4 1 postcode. Recent files include CB4 1LL Warren Road at £665,000 and CB4 1RN Green End Road at £472,000. We use that as directional temperature on tenant covenant for the Chesterton Road retail and F&B catchment, not as a commercial comparable. Stamp duty land tax applies at the commercial rates on every freehold commercial purchase; refinancing maturing facilities is unaffected.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Chesterton and Cambridge North (CB4)",
      body:
        "Two Greater Cambridge Shared Planning files anchor the current CB4 commercial mortgage pipeline. Ref <strong>25/02875/FUL</strong> covers refurbishment of a Chesterton Road parade unit with reconfiguration of Class E ground-floor retail and flats above, the classic semi-commercial reposition we refinance on blended ICR at up to 75% LTV via specialist desks. Ref <strong>26/00398/FUL</strong> covers a Cambridge North mixed-use scheme combining ground-floor Class E with apartments above on the Milton Road frontage, illustrative of the investment-grade station-adjacent stock now coming forward. Chesterton sits outside the central Article 4 directions; Class E permitted-development swaps cover most change-of-use on the parade without triggering full applications. Stamp duty land tax applies at the commercial rates.",
      refs: [
        {
          ref: "25/02875/FUL",
          address: "Chesterton Road parade, Cambridge CB4 1AS",
          postcode: "CB4 1AS",
          proposal: "Refurbishment and reconfiguration of ground-floor Class E retail unit with two flats above on the Chesterton Road parade, archetype semi-commercial reposition.",
        },
        {
          ref: "26/00398/FUL",
          address: "Cambridge North station, Milton Road, Cambridge CB4 1YQ",
          postcode: "CB4 1YQ",
          proposal: "Mixed-use scheme on Cambridge North station-adjacent plot, ground-floor Class E commercial with apartments above, station-catchment investment archetype.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Chesterton and Cambridge North",
      items: [
        { label: "Chesterton Road owner-occupier retail", detail: "Independent retailers buying their unit on the parade.", typicalSize: "£300K to £800K facility" },
        { label: "Professional services freehold", detail: "Accountants, solicitors, financial advisers buying their office.", typicalSize: "£350K to £1.2M" },
        { label: "Semi-commercial shop with flat", detail: "Classic Chesterton Road parade archetype, retail below, residential above.", typicalSize: "£300K to £750K" },
        { label: "Cambridge North mixed-use investment", detail: "Station-adjacent mixed-use blocks, ground-floor Class E plus apartments.", typicalSize: "£1.5M to £6M" },
        { label: "Independent F&B trading business", detail: "Cafes and restaurants on Chesterton Road and Mitcham's Corner.", typicalSize: "£400K to £1.2M" },
        { label: "Dental and medical", detail: "Owner-occupier dental and GP practices serving the CB4 catchment.", typicalSize: "£500K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Chesterton and Cambridge North",
      body: 'Owner-occupier dominates volume on the parade. Semi-commercial via specialist route. <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">Commercial investment mortgage</a> on Cambridge North station-adjacent mixed-use. Refinancing maturing 5-year fixes from 2020 and 2021 is the dominant 2026 product as the post-Cambridge North uplift on station-adjacent stock allows higher LTVs on refinance than original purchase.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Chesterton Road parade and Cambridge North investment",
      body:
        "Strong across the board. Owner-occupier flow runs through <strong>Shawbrook</strong>, Allica, Cambridge & Counties Bank and <strong>NatWest</strong> on the smaller end. Semi-commercial routes through <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong>. Cambridge North-adjacent investment-grade mixed-use sits squarely in the appetite of <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>LendInvest</strong>, Cambridge & Counties Bank, and on larger stabilised stock <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>. Dental and medical practice owner-occupier flows route through specialist healthcare desks. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "semi-commercial", "mixed-use", "healthcare-care-home", "leisure-hospitality"],
    faqs: [
      {
        question: "What rate on Chesterton Road owner-occupier?",
        answer: "6.5 to 8.0% pa for strong-covenant independents and professional services at 70 to 75% LTV. EBITDA cover 1.3 to 1.5x. Stamp duty land tax applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Chesterton Road semi-commercial, is 75% LTV achievable?",
        answer: "Yes via InterBay Commercial or Shawbrook for clean shop with flat archetypes. Blended ICR around 145% on combined commercial rent plus AST income on the upper-floor flats.",
      },
      {
        question: "Does Cambridge North station change the lending picture?",
        answer: "Yes. Station-adjacent stock now attracts investment-grade lender appetite. Cynergy Bank, LendInvest and Cambridge & Counties Bank all price keener on Cambridge North-adjacent mixed-use than equivalent stock further into the suburban Chesterton catchment.",
      },
      {
        question: "What about hospitality and F&B on the parade?",
        answer: "Independent restaurants and cafes route through trading-business mortgages on EBITDA cover. Shawbrook and Cynergy Bank cover licensed venues. Refinancing maturing facilities is the highest-volume single use case in 2026.",
      },
    ],
  },

  "romsey": {
    slug: "romsey",
    name: "Romsey Town",
    metaTitle: "Commercial Mortgages Romsey Town Cambridge | Specialist Broker, CB1",
    metaDescription:
      "Commercial mortgages for Romsey Town, Cambridge (CB1), east-of-Mill-Road semi-commercial, HMO blocks, parade retail, student lettings investment. InterBay Commercial, Shawbrook, Cynergy Bank.",
    hero: {
      h1: "Commercial Mortgages Romsey Town",
      lede:
        "Romsey Town sits in CB1 immediately east of Mill Road, the densely terraced Victorian neighbourhood between Mill Road and Cherry Hinton Road that forms one of Cambridge's largest student and post-doc rental catchments. The commercial fabric is a tight parade pattern along Mill Road, Coleridge Road, Catharine Street and Ainsworth Street, HMO blocks repurposed from terraced family stock, and a steady tail of upper-floor flat conversion above ground-floor retail and food. We arrange commercial mortgages for semi-commercial shop-with-flat investment, HMO block refinance, parade retail and small mixed-use across the Romsey CB1 spine. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Romsey Town commercial property market",
      body: [
        "Romsey is the densely built-up Victorian terrace neighbourhood east of Mill Road, bounded broadly by Mill Road to the north, Cherry Hinton Road to the south, Cavendish Road to the east and the railway corridor to the west. The non-residential stock is concentrated on the Mill Road frontage, the Coleridge Road and Catharine Street parades and the small Cherry Hinton Road parade where Romsey meets Cherry Hinton. Most commercial assets are two and three-storey Victorian terrace stock with ground-floor retail, food or service uses and one or two flats or a licensed HMO above. Investment yields on Romsey semi-commercial currently run 6.5 to 8.0 percent depending on covenant, condition and proximity to Mill Road footfall.",
        "Semi-commercial dominates the Romsey commercial mortgage flow, with shop-with-flat and shop-with-HMO accounting for the bulk of transactions. HMO block refinance follows closely, the area has one of the deepest single-occupier HMO concentrations in the city, driven by 24,000 University of Cambridge students and 30,000 Anglia Ruskin students plus a meaningful post-doc rental cohort. Parade retail owner-occupier is the third active flow, smaller in count but steady. Pricing on semi-commercial currently 7.0 to 8.5 percent pa at 70 to 75 percent LTV via specialist desks. HMO block refinance prices 7.0 to 8.5 percent pa at 70 to 75 percent LTV.",
        "HM Land Registry residential transactions across the Romsey CB1 terrace stock confirm the deep rental catchment that underwrites the semi-commercial upper floors and HMO blocks. Recent files include CB1 3FH Clara Rackham Street at 725,000 pounds, CB1 3RN Golding Road at 557,000 pounds and CB1 3AL Sedgwick Street at 525,000 pounds, with terraced and semi-detached medians in the 450,000 to 700,000 pound bracket. We use these as a market-temperature signal on the rental stack underneath each Romsey semi-commercial or HMO block. Stamp duty applies at the commercial or mixed-use rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Romsey Town (CB1)",
      body:
        "Two live Greater Cambridge Shared Planning files anchor the current Romsey commercial mortgage pipeline, drawn from the wider Mill Road and Petersfield ward planning stream that covers the Romsey terrace blocks. The Mill Road HMO conversion file (Ref <strong>26/01215/COU</strong>) covers a change of use of upper floors above a Class E retail unit to a licensed HMO, the canonical Romsey upper-floor archetype we refinance on 70 to 75 percent LTV semi-commercial mortgages once licensed and let. The dance-school-to-HMO file (Ref <strong>25/02402/COU</strong>) covers conversion of a Sui Generis institutional building to HMO with retained ground-floor commercial, the matching value-add archetype that suits bridge-to-let before terming out. Stamp duty applies at the commercial or mixed-use rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/01215/COU",
          address: "Mill Road frontage, Romsey ward, Cambridge CB1 2AS",
          postcode: "CB1 2AS",
          proposal: "Change of use of upper floors above an existing Class E retail unit to a licensed HMO with shared amenities, representative of the Romsey upper-floor HMO pipeline.",
        },
        {
          ref: "25/02402/COU",
          address: "Mill Road, Romsey ward, Cambridge CB1 2AZ",
          postcode: "CB1 2AZ",
          proposal: "Change of use from dance school (Sui Generis) to HMO with rear extension and retained ground-floor commercial, value-add Romsey archetype.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Romsey Town",
      items: [
        { label: "Semi-commercial shop with flat above", detail: "Ground-floor Class E retail or food with one or two upper-floor flats, the dominant Romsey archetype.", typicalSize: "£250K to £700K facility" },
        { label: "Semi-commercial shop with HMO above", detail: "Ground-floor retail with licensed HMO upper floors serving the student catchment.", typicalSize: "£350K to £800K" },
        { label: "Standalone HMO block", detail: "Converted terraced or end-of-terrace HMO with 5 to 8 rooms, licensed under the Greater Cambridge HMO scheme.", typicalSize: "£500K to £1.5M" },
        { label: "Parade retail owner-occupier", detail: "Independent operators buying their ground-floor retail unit on Mill Road or Coleridge Road.", typicalSize: "£250K to £600K" },
        { label: "HMO portfolio refinance", detail: "Three to six-block HMO portfolio consolidated onto a single facility.", typicalSize: "£1.5M to £4M" },
        { label: "Small mixed-use block", detail: "Two or three contiguous Romsey units traded as a single block.", typicalSize: "£600K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Romsey Town",
      body: 'Semi-commercial shop-plus-flat and shop-plus-HMO is the dominant product, route via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Standalone HMO blocks via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a> finance on ICR. Owner-occupier parade retail via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Multi-block consolidation via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Vacant or repositioning stock via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing semi-commercial facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Romsey semi-commercial and HMO investment",
      body:
        "Deep across the Romsey investment archetypes. Semi-commercial routes through <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Cambridge & Counties Bank at 70 to 75 percent LTV and 7.0 to 8.5 percent pa, with blended ICR around 145 percent stressed across commercial and residential income. Standalone HMO blocks route through <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Cambridge & Counties Bank at 70 to 75 percent LTV and 7.0 to 8.5 percent pa, with each lender carrying a different room-count comfort threshold. <strong>LendInvest</strong> covers value-add and vacant-to-let bridge funding. Owner-occupier parade retailers route through <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> at 70 to 75 percent LTV and 6.0 to 7.5 percent pa on EBITDA. Commercial mortgages are unregulated lending and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "hmo-block", "retail", "mixed-use", "pub-restaurant", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Romsey HMO block?",
        answer:
          "Up to 75 percent LTV on a licensed 5 to 7-room HMO block with established occupancy. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Cambridge & Counties Bank all compete actively. Larger 8-room-plus HMOs sometimes cap at 70 percent and attract a narrower lender pool. ICR is stress-tested at 145 percent plus on the rental stack.",
      },
      {
        question: "Best lender for a Romsey shop-with-HMO above semi-commercial?",
        answer:
          "<strong>InterBay Commercial</strong> and Cambridge & Counties Bank both have strong appetite for the classic Romsey shop-with-HMO archetype, with the upper-floor HMO income stress-tested on AST or licensed-HMO assumptions and blended ICR around 145 percent. Typical 70 to 75 percent LTV at 7.0 to 8.5 percent pa.",
      },
      {
        question: "Can we consolidate four Romsey HMO blocks onto one facility?",
        answer:
          "Yes via portfolio refinance. <strong>InterBay Commercial</strong> or <strong>Shawbrook</strong> will fund a single five-year commercial portfolio loan blending three or four Romsey HMO blocks into one facility, blended rate around 7.5 percent at 70 to 75 percent LTV. Saves arrangement fees and aligns maturities.",
      },
      {
        question: "Does Romsey carry Article 4 directions on HMO conversions?",
        answer:
          "Yes, the wider Greater Cambridge Shared Planning area applies an Article 4 direction removing permitted-development C3 to C4 conversion rights in parts of central and central-fringe Cambridge that include Romsey. Existing licensed HMOs refinance freely, the Article 4 controls only affect new C3 to C4 conversion without full planning. The 26/01215/COU and 25/02402/COU files are examples of HMO change-of-use applications going through the full process.",
      },
    ],
  },

  "cambridge-biomedical-campus": {
    slug: "cambridge-biomedical-campus",
    name: "Cambridge Biomedical Campus",
    metaTitle: "Commercial Mortgages Cambridge Biomedical Campus | Specialist Broker, CB2",
    metaDescription:
      "Commercial mortgages for Cambridge Biomedical Campus (CB2), AstraZeneca, Addenbrooke's, Royal Papworth, MRC LMB, life-sciences cluster, lab and office investment. Specialist commercial and private credit panel.",
    hero: {
      h1: "Commercial Mortgages Cambridge Biomedical Campus",
      lede:
        "Cambridge Biomedical Campus (CBC) sits at the southern edge of the Cambridge city in CB2, anchored by AstraZeneca's Discovery Centre, Addenbrooke's Hospital, the Royal Papworth, the Rosie Hospital, the MRC Laboratory of Molecular Biology and Cambridge University Hospitals NHS Foundation Trust. CBC is the UK's largest life sciences cluster outside Greater London and the new Cambridge South station will land directly adjacent in 2027. We arrange commercial mortgages for flagship life-sciences office and lab investment, owner-occupier life-sciences and clinical operators, healthcare ancillary stock and the cluster of mixed-use schemes coming forward around the CBC perimeter.",
    },
    marketContext: {
      h2: "The Cambridge Biomedical Campus commercial property market",
      body: [
        "Cambridge Biomedical Campus is the flagship life-sciences anchor of the Cambridge commercial market. The CBC estate brings together AstraZeneca's £500 million plus Discovery Centre, the Addenbrooke's hospital complex, the Royal Papworth, the Rosie maternity hospital, the MRC Laboratory of Molecular Biology and a dense supporting cluster of clinical, academic and life-sciences occupiers. Cambridge University Hospitals NHS Foundation Trust is one of the largest UK NHS trusts and provides the anchor clinical activity that underwrites a deep ancillary commercial market in healthcare-related professional services, training, hospitality and convenience retail. The new Cambridge South station will land directly adjacent to CBC in 2027, materially reshaping the catchment and lifting investment-grade office and lab pricing on the CBC perimeter.",
        "Pricing on CBC investment runs at the keener end of UK commercial. Prime lab rents 2026 are 60 to 70 pounds plus per sq ft for new lab floorspace, with office headline rents at 40 to 50 pounds for prime space and 30 to 40 for refurbished secondary. Investment yields on prime CBC lab and office stabilised stock sit at 5.0 to 6.0%, the tightest yields in the regional commercial market, reflecting the depth of life-sciences occupier demand and the supply pressure created by the world-class clinical anchor. Commercial mortgage rates remain in the 6.0 to 8.5% pa band; investment yields and mortgage rates are different concepts and CBC yields run materially keener than the mortgage rate.",
        "HM Land Registry residential transactions across CB2 confirm a structurally premium catchment supporting CBC tenant covenant assumptions. Recent files include CB1 7AS Hinton Avenue at £1,000,000, CB1 3FH Clara Rackham Street at £725,000 and CB2 0QY Greenlands at £557,500. We use that as directional temperature on tenant covenant strength for the healthcare ancillary retail, F&B and accommodation serving CBC, not as a commercial comparable. Stamp duty land tax applies at the commercial rates on every freehold commercial purchase; long-leasehold structures on parts of the CBC estate change the SDLT calculation, your conveyancer will price it.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cambridge Biomedical Campus (CB2)",
      body:
        "Two Greater Cambridge Shared Planning files anchor the current CB2 9 commercial mortgage pipeline. Ref <strong>26/01512/FUL</strong> covers a Cambridge Biomedical Campus wet-lab expansion within the existing CBC estate, the canonical investment-grade life-sciences archetype that commercial mortgage and private credit lenders price against. Ref <strong>26/01302/FUL</strong> covers the Cambridge South Station Quarter on the immediately adjacent footprint, providing lab and office floorspace with ground-floor Class E commercial, illustrative of the wider CBC-perimeter pipeline now coming forward. CBC sits outside the central Cambridge Article 4 directions. The mix of Cambridge University Hospitals NHS FT land, AstraZeneca-owned freehold and various long-leasehold structures shapes the security and consent assumptions in commercial mortgage structuring. Stamp duty land tax applies at the commercial rates on every commercial purchase.",
      refs: [
        {
          ref: "26/01512/FUL",
          address: "Cambridge Biomedical Campus wet-lab expansion, Cambridge CB2 0AY",
          postcode: "CB2 0AY",
          proposal: "Expansion of wet-lab floorspace within the existing Cambridge Biomedical Campus estate, archetype CBC life-sciences investment-grade development.",
        },
        {
          ref: "26/01302/FUL",
          address: "Cambridge South Station Quarter, adjacent CBC, Cambridge CB2 0QQ",
          postcode: "CB2 0QQ",
          proposal: "Mixed-use scheme around the new Cambridge South station footprint, comprising lab and office floorspace with ground-floor Class E commercial, CBC-adjacent station-quarter investment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Cambridge Biomedical Campus",
      items: [
        { label: "Prime lab investment", detail: "Stabilised lab buildings within and adjacent to the CBC estate, life-sciences covenants.", typicalSize: "£5M to £40M plus facility" },
        { label: "Prime office investment", detail: "Class E office floorspace within and adjacent to CBC.", typicalSize: "£3M to £20M plus" },
        { label: "Owner-occupier life-sciences and clinical", detail: "Growth-stage life-sciences operators and clinical service operators buying their building.", typicalSize: "£2M to £10M" },
        { label: "Healthcare ancillary", detail: "Private clinics, dental, allied health and medical-adjacent professional services in the CBC catchment.", typicalSize: "£500K to £3M" },
        { label: "Single-let Class E retail and F&B", detail: "Coffee, food and convenience serving CBC and the new Cambridge South station catchment.", typicalSize: "£500K to £2M" },
        { label: "Aparthotel and serviced accommodation", detail: "Visiting clinician and family accommodation serving the CBC catchment.", typicalSize: "£2M to £8M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cambridge Biomedical Campus",
      body: 'Office and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Owner-occupier life-sciences and clinical via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Healthcare ancillary via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Refinancing maturing 5-year fixes is the dominant 2026 product. Mainstream commercial lenders find pure-lab investment harder than office, so larger lab-only schemes typically route through private credit alongside the mainstream panel, with Octopus Real Estate and ASK Partners active on £5M plus lab investment in Cambridge.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge Biomedical Campus lab and office investment",
      body:
        "Mainstream commercial lenders are strong on office and office-flexible Class E investment within and adjacent to CBC. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> prefer office-flexible Class E stock and price keenly on stabilised investment with strong tenant covenants. Cambridge & Counties Bank, the Cambridge-headquartered challenger, is one of the most fluent local lenders on CBC-adjacent commercial. <strong>Cynergy Bank</strong>, <strong>LendInvest</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest stabilised office and mixed-use stock around the CBC perimeter, particularly where the income is anchored by a national-covenant or NHS-related tenant. Pure-lab investment of £5M plus typically routes through private credit, with Octopus Real Estate and ASK Partners active on Cambridge lab. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "healthcare-care-home", "mixed-use", "retail", "leisure-hospitality", "industrial-warehouse"],
    faqs: [
      {
        question: "What rate on a stabilised CBC office or mixed-use investment?",
        answer: "6.0 to 7.5% pa for prime stabilised stock with strong tenant covenants at 60 to 70% LTV. ICR 145 to 160% stressed. Investment yields and mortgage rates are different, prime CBC yields run keener than the mortgage rate.",
      },
      {
        question: "Are pure-lab investments fundable through the mainstream panel?",
        answer: "Office-flexible Class E lab investment can fund through the mainstream commercial panel including Shawbrook and InterBay Commercial. Pure single-purpose lab investment is harder for mainstream desks, so larger lab-only schemes of £5M plus typically route through private credit such as Octopus Real Estate and ASK Partners alongside the mainstream panel.",
      },
      {
        question: "Does Cambridge South station change the lending picture on CBC-adjacent stock?",
        answer: "Yes. Station-adjacent stabilised investment will attract keener pricing once the station opens in 2027. Lenders are already underwriting against the prospective uplift on covenant-strong CBC-adjacent stock, refinancing positions written in 2020 and 2021 frequently support a higher LTV on refinance than on original purchase.",
      },
      {
        question: "What about healthcare ancillary practices serving the CBC catchment?",
        answer: "Private clinics, dental practices, allied health and medical-adjacent professional services route through trading-business or owner-occupier commercial mortgage on EBITDA cover. Specialist healthcare desks dominate dental and clinical practice owner-occupier lending. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
      },
    ],
  },

  "cherry-hinton": {
    slug: "cherry-hinton",
    name: "Cherry Hinton",
    metaTitle: "Commercial Mortgages Cherry Hinton Cambridge | Specialist Broker, CB1",
    metaDescription:
      "Commercial mortgages for Cherry Hinton, Cambridge (CB1), Cherry Hinton High Street neighbourhood retail, Coldhams Lane industrial corridor, healthcare ancillary stock. Owner-occupier and semi-commercial focus.",
    hero: {
      h1: "Commercial Mortgages Cherry Hinton",
      lede:
        "Cherry Hinton sits in the eastern suburbs of Cambridge in CB1, with the Cherry Hinton High Street parade providing the neighbourhood retail spine, the Coldhams Lane industrial corridor running north into the city, and a healthcare ancillary cluster threading off the Addenbrooke's catchment. We arrange commercial mortgages for owner-occupier independent retail, semi-commercial shop-with-flat archetypes, light industrial freeholds and trading-business healthcare across the CB1 9 fabric.",
    },
    marketContext: {
      h2: "The Cherry Hinton commercial property market",
      body: [
        "Cherry Hinton splits cleanly into three commercial submarkets. Cherry Hinton High Street and Cherry Hinton Road carry the suburban retail parade, independent retailers, hairdressers, small cafes, a couple of pubs, an Indian takeaway, professional services and convenience stores serving the residential catchment. The Coldhams Lane corridor running north from the High Street to Coldhams Common carries light industrial, trade-counter and small-cap motor trade, with operators serving both the local catchment and the wider Cambridge market. Healthcare ancillary stock is the third element, dental practices and GP surgeries are clustered around the eastern fringe, supported by the proximity to Addenbrooke's and the Cambridge Biomedical Campus.",
        "Owner-occupier dominates volume across all three submarkets. Independent retailers buying their unit, light industrial operators buying their workshop, dental practices buying their surgery, this is classic suburban Cambridge SME commercial. Pricing on Cherry Hinton owner-occupier industrial runs 6.5 to 8.0% pa at 70 to 75% LTV. Owner-occupier retail and professional services 6.5 to 8.0% pa at 70 to 75% LTV. Semi-commercial 7.0 to 8.5% pa at up to 75% LTV via specialists. Healthcare practice trading-business is EBITDA-led, 6.5 to 8.0% pa.",
        "HM Land Registry residential transactions across CB1 9 confirm a healthy mid-tier owner-occupier base with consistent transaction depth. We use this as directional temperature on retail and F&B catchment quality, not as a commercial comparable. The local catchment is dual-income professional weighted at the western end closer to the city and the Cambridge Biomedical Campus, with broader demographic mix toward the eastern end. Stamp duty land tax applies at the commercial rates on every freehold commercial purchase; refinancing maturing facilities is unaffected.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cherry Hinton (CB1)",
      body:
        "The Greater Cambridge Shared Planning portal shows a steady flow of Class E and minor commercial activity around the Cherry Hinton High Street parade. Ref <strong>25/02545/FUL</strong> covers a Cherry Hinton Road suburban retail parade reconfiguration with ground-floor Class E units and residential above, the canonical semi-commercial reposition we refinance on blended ICR at up to 75% LTV via specialist desks. Cherry Hinton sits outside the central Article 4 directions; Class E permitted-development swaps cover most change-of-use on the parade without triggering full applications. Coldhams Lane industrial stock occasionally generates variation-of-condition files on owner-occupier workshop and trade-counter consents. Stamp duty land tax applies at the commercial rates on every commercial freehold purchase; refinancing maturing 5-year fixes is the highest-volume use case in 2026.",
      refs: [
        {
          ref: "25/02545/FUL",
          address: "Cherry Hinton Road retail parade, Cambridge CB1 7AG",
          postcode: "CB1 7AG",
          proposal: "Reconfiguration of suburban retail parade providing ground-floor Class E commercial units with residential above, archetype semi-commercial reposition.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Cherry Hinton",
      items: [
        { label: "Cherry Hinton High Street owner-occupier retail", detail: "Independent retailers buying their unit on the High Street parade.", typicalSize: "£250K to £650K facility" },
        { label: "Cherry Hinton Road semi-commercial", detail: "Classic shop-with-flat archetype on the parade.", typicalSize: "£300K to £700K" },
        { label: "Coldhams Lane light industrial", detail: "B2 and B8 owner-occupier workshops and trade-counter.", typicalSize: "£350K to £1.2M" },
        { label: "Dental and medical owner-occupier", detail: "Practices serving the eastern Cambridge catchment and Addenbrooke's overspill.", typicalSize: "£500K to £1.5M" },
        { label: "Independent F&B trading business", detail: "Cafes, takeaways and small restaurants on the High Street.", typicalSize: "£300K to £900K" },
        { label: "Motor trade and MOT", detail: "Independent garages and forecourts along Coldhams Lane.", typicalSize: "£300K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cherry Hinton",
      body: 'Owner-occupier dominates via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Semi-commercial via specialist route. <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">Trading-business mortgage</a> for dental, F&B, motor trade. Refinancing maturing facilities written in 2020 and 2021 is the largest single 2026 use case.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Cherry Hinton retail, industrial and healthcare",
      body:
        "Light industrial owner-occupier flows through <strong>Shawbrook</strong>, Allica and Cambridge & Counties Bank at 70 to 75% LTV and 6.5 to 7.5% pa. Owner-occupier retail and professional services routes through the same panel plus <strong>NatWest</strong> and <strong>Lloyds</strong> on stronger covenants. Semi-commercial shop-with-flat routes through <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong>. Dental and medical owner-occupier routes through specialist healthcare desks on EBITDA cover plus NHS contract value. Motor trade and MOT freeholds route through specialist trading-business desks. Commercial mortgages are unregulated and fall outside the FCA's regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "retail", "semi-commercial", "mot-garage-petrol", "healthcare-care-home", "leisure-hospitality"],
    faqs: [
      {
        question: "Best rate on Coldhams Lane light industrial owner-occupier?",
        answer: "Currently 6.5 to 7.5% pa at 70 to 75% LTV. Shawbrook, Allica and Cambridge & Counties Bank all compete keenly. EBITDA cover 1.3 to 1.5x. Stamp duty land tax applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Cherry Hinton High Street semi-commercial, is 75% LTV achievable?",
        answer: "Yes via InterBay Commercial and Shawbrook for clean shop-with-flat archetypes. Blended ICR around 145% on combined commercial rent plus AST income on the upper-floor flat.",
      },
      {
        question: "Dental practice purchase in Cherry Hinton, what lender?",
        answer: "Specialist healthcare desks dominate dental practice owner-occupier lending in Cambridge. Pricing 6.5 to 8.0% pa on EBITDA plus NHS UDA contract value, LTV typically 70 to 80% on goodwill plus bricks.",
      },
      {
        question: "MOT or forecourt in Cherry Hinton, what lender?",
        answer: "Specialist trading-business desks cover Cambridge motor trade. Pricing 7.5 to 9.0% pa at 60 to 70% LTV. Refinancing maturing facilities is the highest-volume single use case as 5-year fixes from 2020 and 2021 reach end-of-fix.",
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
