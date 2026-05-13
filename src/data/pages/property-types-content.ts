/**
 * Property-type / asset-class commercial mortgage pages, Cambridge.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Cambridge-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  cambridgeContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3–1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140–160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// ─── Hub page content ───────────────────────────────────────────────────────
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Cambridge by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Cambridge property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Cambridge",
    lede:
      "A Cambridge commercial mortgage on a Histon trade-counter unit prices nothing like a Chesterton Road pub freehold or a Cherry Hinton care home. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on prime Cambridge Science Park office investment runs through a different desk to one on a wet-led Chesterton Road pub freehold, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and one or two worked Cambridge examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, a nursery operating from a converted Victorian house, a serviced-apartment block, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140–160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130–145%. Common on portfolio refinance and on larger HMO and FHL portfolios.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3–1.5x for mainstream sectors and 1.5–2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // ─── Retail ─────────────────────────────────────────────────────────────────
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Cambridge | High Street, Parade, Retail Park",
    metaDescription:
      "Commercial mortgage finance for retail property in Cambridge, Sidney Street prime, suburban parades, retail parks. Investment LTVs to 75%, ICR 140–160%, mid-2026 rates 6.5–8.5% pa. NatWest, Lloyds, Barclays, InterBay Commercial.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Cambridge",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Lender appetite varies sharply by retail sub-type, Sidney Street prime to a Cherry Hinton parade unit are different deals on different desks. Investment LTV 65–75%, ICR 140–160% stressed, mid-2026 rates 6.5–8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65–75%" },
        { label: "Cover test", value: "ICR 140–160%" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£150K–£5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge retail commercial mortgage",
      body: [
        "The Cambridge retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime CB1 city-centre</strong> covers Sidney Street, Grand Arcade, Lion Yard and Petty Cury, institutional-grade pitches dominated by national F&B and fashion covenants. <strong>Suburban high-street parade</strong> runs the length of Mill Road CB1, Hills Road CB1 and CB2, Chesterton Road CB3 in Chesterton, Newnham Road CB23 in Cherry Hinton and Cherry Hinton Road CB1 in Cherry Hinton. <strong>Retail park and out-of-town</strong> covers Trumpington, Histon and Bar Hill, keenly-priced national-covenant let investment. <strong>Convenience and food-led</strong> sits across all geographies, anchored by Tesco, Sainsbury's, Co-op and the discounters.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140–160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national F&B operator on Sidney Street prices materially better than three two-year leases to local independents on the same pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5–10 percentage points and pricing 50–75bps wider.",
        "Worked example: an CB1 Sidney Street retail unit on a 10-year FRI to a national fashion covenant, £1.2M valuation, £85K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £900K, about 75% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: a Cherry Hinton parade unit, £375K valuation, two-year tail to an independent local operator. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and LendInvest are the realistic desks at 8.5–9.5% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Prime city-centre retail (CB1)", detail: "Sidney Street, Grand Arcade, Lion Yard, Lion Yard, Trumpington. Mid-cap to large-cap institutional investment territory; long FRI leases to national covenants." },
        { label: "Suburban high-street parade", detail: "Mill Road CB1, Hills Road CB1/CB2, Chesterton Road CB3, Newnham Road CB23, Cherry Hinton Road CB1. Mixed independent and national covenant; semi-commercial overlap common." },
        { label: "Retail park / out-of-town", detail: "Trumpington, Histon, Bar Hill, Cherry Hinton retail parks. National-covenant FRI leases, among the keenest-priced retail investments." },
        { label: "Convenience and food-led", detail: "Tesco Express, Sainsbury's Local, Co-op, Aldi-anchored neighbourhood retail. Strong-covenant essential-retail pricing." },
        { label: "Owner-occupier independent retailer", detail: "Independent businesses buying the freehold they trade from, EBITDA cover route via the owner-occupier service." },
        { label: "Vacant retail acquisition", detail: "Bridge-to-let funds purchase plus refurbishment plus re-letting period; term-out onto investment mortgage at 12–24 months." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge retail estate",
      body: 'Cambridge is the United Kingdom\'s second-largest retail centre outside London by floorspace, 3.66 million square feet across more than a thousand stores. Grand Arcade and Lion Yard dominate prime CBD; Sidney Street and Cambridge Market Square carry the heritage retail spine. Suburban demand is healthiest in <a href="/areas/cambridge-science-park" class="text-secondary font-medium hover:underline">Cambridge Science Park</a>, <a href="/areas/petersfield" class="text-secondary font-medium hover:underline">Petersfield</a>, <a href="/areas/chesterton" class="text-secondary font-medium hover:underline">Chesterton</a>, <a href="/areas/cherry-hinton" class="text-secondary font-medium hover:underline">Cherry Hinton</a> and Cherry Hinton village. The change-of-use pipeline is reshaping secondary high streets continually, Cherry Hinton CB1 saw a former bank converted to a bar in late 2025; Ely Market Place is doing the same on a former Barclays. Both became commercial mortgage refinance candidates the moment the new lease completed.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on retail-park assets let on long FRI leases. Mid-strength on prime CBD comparison retail. Tighter on secondary high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.5–7.25% pa at 65–70% LTV. Mid-market and challenger appetite from Allica, Shawbrook, HTB and Cambridge & Counties on parade and secondary investment at 8.0–8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and LendInvest take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5–9.5% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Cambridge retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype. Vacant retail or short leases (under three years tail) typically cap at 60–65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140–160% stressed at a notional rate 1–2% above pay rate. Prime CBD with a 10-year FRI to a national covenant sometimes funds at 130%. Secondary parade with mid-covenant sits at 150–160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25–50bps wider than equivalent office investment in mid-2026, and 50–75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional retail-park demand has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12–24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "What about retail-park and out-of-town schemes?",
        answer: "Retail parks with national covenants, M&S, Boots, B&Q, the supermarkets, Costa, Greggs, are among the keenest-priced retail commercial mortgages. National-covenant retail-park investment routinely prices at 7.0–7.75% pa at 65% LTV. Mid-market retail-park (DIY, leisure, value retailers) sits 25–50bps wider. Vacancy in a retail park hurts pricing more than in a CBD pitch because the asset relies on critical mass.",
      },
    ],
  },

  // ─── Office ────────────────────────────────────────────────────────────────
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Cambridge | Cambridge Science Park to Newmarket Road",
    metaDescription:
      "Commercial mortgage finance for office property in Cambridge, Cambridge Science Park CBD Grade A, St Andrew's Street professional, Newmarket Road creative-office. Investment LTV 65–75%, owner-occupier 75%, mid-2026 rates 7.0–9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Cambridge",
      lede:
        "Investment and owner-occupier mortgage finance for Cambridge office property. Cambridge Science Park Grade A institutional pitches at the top, Newmarket Road Urban Village creative-office freeholds at the value-add end. Investment LTV 65–75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0–9.0% pa.",
      metrics: [
        { label: "LTV", value: "65–75%" },
        { label: "Cover test", value: "ICR 140–155% / EBITDA 1.3–1.5x" },
        { label: "Rate range", value: "7.0–9.0% pa" },
        { label: "Facility", value: "£300K–£10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge office commercial mortgage",
      body: [
        "Cambridge is the largest regional office market in the United Kingdom outside London, 11 million square feet of stock and the regional HQ for KPMG, Deloitte, PwC, DAC Beachcroft, Walker Morris and Channel 4. The commercial mortgage market splits into four practical bands. <strong>Cambridge Science Park Grade A</strong> at the top, institutional investors only, single-asset deals £15M+, rarely brokered. <strong>St Andrew's Street, Trinity Street and King's Parade</strong> in the £1M–£5M bracket, secondary CBD investment that we work most often. <strong>Cambridge Biomedical Campus and Station Road</strong> for newer mid-cap stock. <strong>Newmarket Road Urban Village and Cambridge Science Park</strong> at the creative-office end, converted heritage industrial floors at £400K–£2M.",
        "Investment underwriting tests <strong>ICR</strong> at 140–155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a national professional services firm prices materially better than the same building let on three two-year leases to local independents. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3–1.5x, the accountancy practice converting from leasehold to a Cambridge Science Park floor purchase, the consultancy buying its Trinity Street townhouse, the legal firm taking the freehold of its St Andrew's Street building.",
        "Worked example: a St Andrew's Street 6,500 sq ft office investment, £1.85M valuation, let on a 7-year FRI to a regional law firm at £125K passing rent. ICR at 145% sizes a £1.2M loan at 65% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5–8.0% pa on a five-year fix. Worked example two: a Cambridge Science Park creative-office freehold purchase by a small architectural practice, £680K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica or Shawbrook at 7.5–7.25% pa.",
        "Post-Covid Cambridge office stock has carried real value-add opportunity, particularly in the St Andrew's Street to Trinity Street band. Vacant or part-let assets purchased through bridge-to-let, refurbished to current EPC and amenity standards, then re-let and termed out onto investment mortgage. Shawbrook, LendInvest and Hampshire Trust Bank have been the most active on this strategy. The EPC-B requirement effective from 2030 has accelerated refurbishment activity on secondary CBD stock.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Prime CBD Grade A", detail: "Cambridge Science Park, Cambridge Biomedical Campus, Cambridge South Park. Institutional-grade investment territory; rarely brokered below £15M." },
        { label: "Secondary CBD office", detail: "St Andrew's Street, Trinity Street, King's Parade, Station Road. The £1M–£5M bracket where most commercial mortgage volume sits." },
        { label: "Creative / converted office", detail: "Newmarket Road Urban Village, Cambridge Science Park, St John's Innovation Centre, Cambridge Science Park. Heritage industrial floors converted to flexible office." },
        { label: "Suburban office park", detail: "Cambridge Business Park (CB1), Cambridge Research Park (Cherry Hinton CB23), Cambridge North Park (Ely). Out-of-town office investment and SME owner-occupier." },
        { label: "Owner-occupier office freehold", detail: "Professional services buying their building, accountancy, legal, consultancy, financial services. EBITDA cover route." },
        { label: "Multi-let small-cap office", detail: "Serviced or multi-tenant small-cap office buildings; specialist lender appetite, ICR tested at the wider end." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Larger multi-asset office portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge office estate",
      body: "Cambridge carries 11 million square feet of office stock and the deepest legal-and-financial cluster in the East of England, the city's professional services sector contributes £13 billion to the local economy. Cambridge Science Park is the dominant prime cluster, anchored by AstraZeneca's R&D base, Botanic House, KPMG, Deloitte, PwC and the regional corporate teams of NatWest and Lloyds. Cambridge Biomedical Campus and Station Road carry newer mid-cap institutional stock. Newmarket Road Urban Village offers genuine creative-office stock at Cambridge Science Park and St John's Innovation Centre. Out of the centre, Cambridge Business Park (CB1), Cambridge Research Park (Cherry Hinton) and the Cambourne business parks hold suburban office stock. East-West Rail and Cambridge South station continue to underpin demand on the southern side of the CBD.",
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0–7.75% pa for 65% LTV with strong covenants. <strong>Shawbrook</strong>, Allica, HTB and Cambridge & Counties cover mid-market at 7.75–7.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25–9.25% pa. Cambridge Science Park Grade A above £15M routes through institutional debt outside the broker panel; below that band, our pool covers it.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Cambridge office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140–155% stressed. Vacant or short-lease assets cap at 60–65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Cambridge office stock still fundable?",
        answer: "Yes, and it is often where the best value-add commercial mortgage opportunities sit. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and Hampshire Trust Bank have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the asset needs anyway.",
      },
      {
        question: "What about owner-occupier office purchase?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3–1.5x; LTV up to 75%; rate 7.0–7.25% pa for strong covenants. The accountancy or legal practice taking the freehold of its existing leased premises is the archetypal deal, typically £600K–£3M facility.',
      },
      {
        question: "Cambridge Science Park vs St Andrew's Street vs Newmarket Road, different rates?",
        answer: "Yes. Cambridge Science Park Grade A with national covenant prices at 6.0–7.5% pa at 60–65% LTV (when we get to broker it). St Andrew's Street and Trinity Street secondary CBD with mid-covenant prices 7.75–7.5% pa at 70% LTV. Newmarket Road creative-office freehold owner-occupier prices 7.5–7.25% pa at 70–75%. The variance reflects covenant strength and asset liquidity, not the postcode itself.",
      },
      {
        question: "Are multi-let serviced offices fundable?",
        answer: "Yes, but the lender pool narrows. Multi-let small-cap office with rolling short-term licenses (rather than full FRI leases) routes through Shawbrook, Allica, InterBay and Cynergy Bank. ICR tested at the wider end (155–165%) reflecting the income volatility. Pricing typically 8.5–9.5% pa at 65% LTV.",
      },
    ],
  },

  // ─── Industrial / warehouse ──────────────────────────────────────────────
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Cambridge | Histon, Cambridge North fringe, Cambridge Research Park Waterbeach",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Cambridge, Histon, Cambridge North fringe, Cambridge Research Park Waterbeach, Cambridge Valley Park. Investment LTVs to 75%, the strongest commercial sector pricing in mid-2026 at 6.0–7.5% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Cambridge",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across Histon, Cambridge North fringe, Cambridge Research Park Waterbeach and Cambridge Valley Park. Strongest lender appetite of any commercial sector in mid-2026, investment LTV to 75%, owner-occupier to 75%, rates 6.0–7.5% pa.",
      metrics: [
        { label: "LTV", value: "70–75%" },
        { label: "Cover test", value: "ICR 140–155% / EBITDA 1.3–1.5x" },
        { label: "Rate range", value: "6.0–7.5% pa" },
        { label: "Facility", value: "£250K–£10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge industrial commercial mortgage",
      body: [
        "Cambridge carries one of the deepest industrial occupier bases outside London, anchored by the Cambridge North business corridor and the M11 / A14 / A11 interchange. The market splits four ways. <strong>Institutional logistics</strong> at the top, single-let sheds of 200,000 sq ft+ at Cambridge Valley Park and Babraham Research Campus, rarely brokered, usually direct lender. <strong>Mid-cap let industrial</strong> in the £500K–£3M range, the deep volume zone where most commercial mortgage activity sits. <strong>Trade-counter</strong> in the same range, Toolstation, Howdens, Screwfix, City Plumbing-style retail-in-industrial. <strong>Small-cap owner-occupier</strong> at £250K–£1.5M, where SMEs are buying the unit they trade from.",
        "Industrial enjoys the strongest lender appetite of any commercial sector in mid-2026. Yields have compressed and rents have grown consistently through 2022–2026, Cambridge prime industrial rents have moved from £6.50 to £9.50 per sq ft over four years. Lender comfort with the sector is correspondingly broad. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70–75% on businesses with two years' clean accounts and EBITDA cover of 1.3–1.5x.",
        "Worked example: a Histon trade-counter unit at the Cambridge Research Park Waterbeach Road East estate, 8,500 sq ft, £2.4M purchase by an existing operator. Owner-occupier route on filed accounts showing EBITDA cover of 1.55x. Placed with <strong>Lloyds</strong> at 65% LTV, 6.55% pa on a five-year fix, 20-year term, £6,500 arrangement fee. Worked example two: a Cambridge North fringe CB1 multi-let industrial estate, four units, £3.1M valuation, £225K passing rent across mixed-covenant tenants. Investment route at 70% LTV; <strong>Shawbrook</strong> took it at 8.0% pa with ICR cover at 145%.",
        'Recent planning case at Cambridge Research Park Waterbeach Road East (Cherry Hinton CB23, application 26/01089/FU) for variation to small industrial unit consent is a typical owner-occupier industrial workshop commercial mortgage candidate. <strong>Newmarket Road</strong> carries the industrial-to-creative-office conversion stock; pure industrial concentrates south and west of the city.',
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Light industrial / B2", detail: "Engineering, manufacturing, fabrication, food production. Owner-occupier and let investment. Cambridge North business corridor corridor and Cambridge Research Park Waterbeach dominant locations." },
        { label: "Storage and B8 warehouse", detail: "Self-storage, third-party logistics, distribution. Cambridge Valley Park, Histon, Bar Hill for larger sheds." },
        { label: "Trade-counter retail-in-industrial", detail: "Toolstation, Howdens, Screwfix, City Plumbing format. Strong-covenant trade-counter prices closer to retail-park than to industrial, best of both worlds." },
        { label: "Multi-let industrial estate", detail: "Small-unit industrial estates with multiple FRI tenants, the premium Cambridge investment territory in mid-2026. Rents grown faster than any other commercial sub-class." },
        { label: "Owner-occupier SME industrial", detail: "Manufacturing, engineering, distribution SMEs buying their workshop, the £400K–£1.5M bracket. EBITDA-led owner-occupier route." },
        { label: "Vacant industrial acquisition", detail: "Bridge-to-let funded purchase of vacant or partly-tenanted industrial; refurbishment and re-letting strategy with term-out onto investment mortgage." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; multi-let estates can route as portfolio refinance where 3+ assets aggregate; vacant industrial via bridge-to-let.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge industrial estate",
      body: 'The Cambridge North business corridor, Histon (CB4), Cambridge North fringe (CB1), south Cambridge fringe (CB2), Cambridge Research Park Waterbeach (Cherry Hinton CB23), Granta Park (CB22) and Cambridge Valley Park (CB23), anchors industrial Cambridge. The M11/A14/A11 interchange underpins national distribution demand. Manufacturing across the city employs 39,000 people across 1,800 firms. Industrial rents have grown consistently through 2022–2026, supporting yield compression and tighter lender ICR pricing. <a href="/areas/newmarket-road" class="text-secondary font-medium hover:underline">Newmarket Road</a> carries the industrial-to-creative-office conversion stock; pure industrial is concentrated south and west of the city. Outer Cambridge, Histon (Bar Hill adjacent) and Ely trading estate, adds market-town industrial supply.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge industrial",
      body: 'Strongest of any commercial sector in mid-2026. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete actively on prime let industrial, typical 7.0–7.75% pa at 65–70% LTV with strong covenants. Allica, <strong>Shawbrook</strong>, HTB and Cambridge & Counties dominate mid-market and owner-occupier industrial at 7.5–7.25% pa. <strong>InterBay Commercial</strong>, Together and OakNorth take multi-let estates and value-add stock at 8.0–8.75% pa. Owner-occupier industrial enjoys near-best pricing of any sector, 6.0–7.5% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3–1.5x. Trade-counter prices at the keen end of investment because of the strong-covenant retail-tenant overlay; multi-let estates command the fastest credit-committee turnaround of any current commercial product.',
    },
    faqs: [
      {
        question: "What rate can I get on Cambridge industrial investment?",
        answer: "Currently 6.0–7.5% pa for prime let industrial with strong covenants and five-plus years unexpired. Multi-let estates 6.5–8.0% pa. Trade-counter with national covenant prices at 7.0–7.75%. The keenest-priced commercial sector in the panel right now, and the one with the broadest lender competition.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase?",
        answer: 'Yes, typically 70–75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3–1.5x. Allica and Shawbrook are the most active mid-market owner-occupier desks; Lloyds and NatWest compete on the larger end where the borrowing is over £1.5M and the covenant is strong.',
      },
      {
        question: "Histon vs Cambridge Research Park Waterbeach vs Cambridge Valley Park, same lender pool?",
        answer: "Largely yes. The pool is broader than any other commercial sector. Each lender has distinct LTV and pricing discipline by asset size and covenant, but most of the panel will look at any of the Cambridge North business corridor estates. Outer-Cambridge industrial (Bar Hill, Histon, Ely) sits on the same panel with no material pricing difference.",
      },
      {
        question: "What about trade-counter, different to industrial?",
        answer: "Trade-counter (Toolstation, Howdens, Screwfix, City Plumbing format) sits formally as industrial but lenders treat it as industrial investment with a retail-tenant covenant overlay. Pricing usually 25bps inside generic industrial because the covenants are stronger than mid-market industrial tenants. Long FRI leases to a national covenant trade-counter operator price at 6.0–7.5% pa.",
      },
      {
        question: "Multi-let industrial, premium or penalty?",
        answer: "Premium in mid-2026, multi-let industrial estates have been the strongest-performing UK commercial asset class for three years running. Lenders price them at 7.5–7.25% pa at 70–75% LTV with ICR cover at 140–150%. The diversification of income across multiple tenants is treated as a positive rather than a complication, provided the WAULT is over four years.",
      },
    ],
  },

  // ─── Leisure & hospitality ───────────────────────────────────────────────
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Cambridge | Hotels, Aparthotels, Gyms, F&B",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Cambridge, hotels, aparthotels, gyms, F&B venues. EBITDA / occupancy / RevPAR underwriting. LTVs 60–70%, mid-2026 rates 7.0–9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Cambridge",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, gyms, restaurant-led leisure and F&B-anchored venues. Sector-specific underwriting on occupancy, ADR, RevPAR and EBITDA. Brand affiliation and operator track record matter more than bricks-and-mortar value. LTVs 60–70%, rates 7.0–9.0% pa.",
      metrics: [
        { label: "LTV", value: "60–70%" },
        { label: "Cover test", value: "EBITDA 1.5–2.0x" },
        { label: "Rate range", value: "7.0–9.0% pa" },
        { label: "Facility", value: "£500K–£10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market. Underwriting tests <strong>EBITDA cover</strong> at 1.5–2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Hotels split sharply by brand affiliation. <strong>Branded franchise hotels</strong> (Premier Inn, Holiday Inn Express, Hilton Garden Inn, Ibis) price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 8.0–8.75% pa at 65% LTV; independent boutique hotels in the same size band sit at 9.0–9.75% pa at 60–65% LTV. Aparthotels (Staycity, Native, Wilde, Roomzzz across Cambridge CBD) route through hotel-comfortable lenders with operator-letting model assessment, the deal economics depend on whether the ground rent passes to a brand or whether the owner operates directly.",
        "Worked example: a 48-bed Premier Inn-franchised budget hotel in the Hills Road cluster, £4.2M valuation, EBITDA £580K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 22-bed boutique hotel in Cherry Hinton, £1.85M valuation, EBITDA £210K. Independent route is narrower, Cynergy Bank and OakNorth are realistic, plus ASK Partners on the structured-debt end. Placed at 60% LTV, 9.25% pa, 20-year term.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Branded franchise hotel", detail: "Premier Inn, Holiday Inn Express, Hilton Garden Inn, Ibis, Travelodge. Best-priced leisure asset class, franchise comfort drives lender appetite." },
        { label: "Independent hotel", detail: "City-centre and suburban independent hotels and boutiques. Specialist underwriting on EBITDA / occupancy / ADR." },
        { label: "Aparthotel", detail: "Staycity, Native, Wilde, Roomzzz across Cambridge CBD. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
        { label: "Independent gym and fitness", detail: "Independent and small-chain gym freeholds. Membership economics, retention, equipment depreciation tested alongside EBITDA." },
        { label: "F&B-anchored leisure", detail: "Restaurants with operator flat above (semi-commercial overlap), gastropubs, dessert lounges, café-bars." },
        { label: "Indoor leisure venues", detail: "Trampoline parks, escape rooms, indoor golf, climbing centres. Niche underwriting; specialist desks only." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA / occupancy / ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge leisure economy",
      body: 'Cambridge combines weekday business-travel hotel demand (legal-and-financial sector, life sciences, the universities) with strong weekend leisure (Fitzwilliam Museum, Grand Arcade, Cherry Hinton Park, Anglesey Abbey on the city fringe). The 2016 visitor data showed 27.29 million leisure visits worth £1.6 billion, those numbers have grown materially since. Hotel stock concentrates around Hills Road, King\'s Parade and the Mill Lane to City Square axis. Aparthotel is the fastest-growing sub-sector, Staycity, Native, Wilde, Roomzzz and SACO all now have CBD properties. Anglia Ruskin, University of Cambridge and the Theological Federation drive ~70,000 students who anchor the Cambridge Science Park and Petersfield leisure spine. Outer-Cambridge market towns, Ely, Saffron Walden, Huntingdon, carry independent country-hotel and gastropub stock that sits adjacent to the FHL portfolio market.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge leisure",
      body: 'Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Hampshire Trust Bank and selectively Allica, typical 8.0–8.75% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, <strong>Cynergy Bank</strong>, OakNorth and ASK Partners on the structured-debt end. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured. Bars and licensed venues route through Cynergy and specialist licensed-trade desks. Independent gym and fitness narrower still, Cynergy Bank, Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Cambridge independent hotel?",
        answer: "Yes, typically 60–65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank, OakNorth and ASK Partners are the realistic desks. Mid-2026 rates 9.0–9.75% pa for the 22-50 bed bracket; pricing tightens on larger independents with stronger track record.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is a hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7–9x EBITDA for branded franchise, 5–7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5–2x to the EBITDA multiple; CQC-equivalent quality grades (AA Rosettes, Visit England rating) influence the multiple at the margin.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (Staycity or Native take a 25-year FRI on the building, run the operations, pay rent), it is investment, ICR-led at 140–150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5–2.0x cover.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 9.0–10.0% pa at 60–65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // ─── Healthcare / care home ──────────────────────────────────────────────
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Cambridge | CQC, Cherry Hinton, Trumpington Cluster",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Cambridge. Cherry Hinton and Trumpington care-home cluster, Trumpington dental cluster. CQC-led underwriting, LTVs 60–70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Cambridge",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. LTVs 60–70%, mid-2026 rates 8.0–9.5% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60–70%" },
        { label: "Cover test", value: "EBITDA 1.5–2.0x" },
        { label: "Rate range", value: "8.0–9.5% pa" },
        { label: "Facility", value: "£500K–£8M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge care home commercial mortgage",
      body: [
        "Healthcare in the Cambridge commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3–1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50–60%), wider pricing (9.5–10.5% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50–80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 45-bed CQC-rated Good care home in Trumpington CB2, £3.2M valuation, EBITDA £420K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Cherry Hinton CB1 dental practice freehold purchase by the existing principal partner, £1.25M, EBITDA £180K, mixed NHS / private revenue. Owner-occupier route at 75% LTV, 6.85% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Recent planning case at Owlett Hall Nursing Home, Bar Hill (CB23, application 26/01039/FU) for a care home extension is a classic specialist healthcare commercial mortgage candidate, extension finance underwritten on the post-extension increased bed count and resulting EBITDA growth.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Cherry Hinton, Trumpington premium cluster (CB1 / CB2 / CB4); Bar Hill / Cherry Hinton fringe mid-market. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, Trumpington CB2 cluster, Petersfield CB1 cluster. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness", detail: "Physiotherapy, opticians, podiatry, private clinics, owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge healthcare property estate",
      body: 'Cambridge is the regional hub for NHS Cambridge Teaching Hospitals (Cambridge General Infirmary, St James\'s University Hospital), which underpins healthcare property demand across the city and Greater Cambridge area. The <strong>Cherry Hinton and Trumpington care home cluster (CB1, CB2, partly CB4)</strong> is one of the deepest sub-markets in regional UK, premium care home stock with high private-pay fee rates and consistently strong CQC ratings. The <strong>Trumpington CB2 / Petersfield CB1 dental cluster</strong> runs to a similar depth. Trumpington CB4 (recent transaction at 191 Hills Road) is a healthcare and dental catchment area for outer-north Cambridge. Bar Hill / Cherry Hinton fringe (CB23, CB23) holds mid-market care home stock with a higher local-authority fee mix. Outer-Cambridge market towns (Ely, Histon) carry village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust Bank dominate at 8.0–9.0% pa at 60–70% LTV; CQC Good or better is essential. Dental, Hampshire Trust Bank, Allica\'s health desk and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (7.0–7.75% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica or Shawbrook on owner-occupier at 7.75–7.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms. <strong>Requires Improvement</strong> can fund at tighter LTV (50–60%), wider pricing (9.5–10.5% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Cambridge care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6–8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5–1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Cambridge?",
        answer: "Yes. Owner-occupier route on EBITDA cover (1.3–1.5x). NHS UDA contract value treated as additional security by the specialist desks. Hampshire Trust Bank and Allica's health desk are the most active. LTVs 70–75%; mid-2026 rates 6.5–8.0% pa for established principal-led practices. Multi-site dental groups consolidate via portfolio refinance with the same desks.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0–7.5% pa at 65–70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25–30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // ─── Pub & restaurant ───────────────────────────────────────────────────
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Cambridge | Barrelage, Beer-Tie, Licensed-Trade Specialists",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Cambridge. Barrelage and EBITDA underwriting; license type, beer-tie status, freehold-versus-leasehold all material. LTVs 60–65%, mid-2026 rates 6.5–8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Cambridge",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60–65%" },
        { label: "Cover test", value: "EBITDA 1.5–2.0x" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£300K–£3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60–65% LTV at 8.5–9.25% pa. <strong>Tied pubs</strong> price 50–100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Chesterton Road, Chesterton CB3, £950K valuation, full-trading EBITDA £165K (60% food / 40% wet), 280 barrels per annum. Cynergy Bank placed at 65% LTV, 8.85% pa on a 5-year fix, 20-year term. EBITDA cover 1.75x. Worked example two: a wet-led tied freehold in Cherry Hinton CB23, £620K valuation, EBITDA £85K, 420 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.5% pa, 15-year term.",
        "Recent change-of-use case at 67–69 Station Road, Cherry Hinton (CB1 8DJ, application 26/01156/FU), former bank converting to a sui generis bar, is a typical Cambridge licensed-trade refinance candidate post-stabilisation. Ely Market Place (former Barclays converting to ground-floor restaurant plus first-floor offices, application 26/9/00026/MOD) sits as a mixed-use semi-commercial pub-restaurant profile.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50–100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge licensed-trade economy",
      body: 'Cambridge carries one of the deepest licensed-trade economies in regional UK. Mill Lane and St Andrew\'s Street dominate the F&B core; Mill Lane and Lower Sidney Street the late-night cluster. Cambridge Science Park (Mill Road, Chesterton High Street) carries the student-leisure spine. The Corn Exchange and Trumpington Road carry independent F&B. Outer-Cambridge market towns, Ely, Saffron Walden, Huntingdon, Histon, hold a separate independent pub trade with country-pub and gastropub stock. Recent licensed-trade change-of-use cases (Cherry Hinton bank-to-bar, Ely bank-to-restaurant) show a market actively re-purposing legacy retail to leisure use; these become commercial mortgage refinance candidates the moment the new lease completes and a 6-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Cambridge licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.5–9.25% pa, 60–65% LTV. ASK Partners and Allica\'s licensed-trade desk compete strongly on the same profile. <strong>Together</strong> covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Hampshire Trust Bank active on multi-site restaurant operator portfolios. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Cambridge?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60–65% LTV, mid-2026 rate 8.5–9.25% pa, term 15–20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12–15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55–60%) and 50–75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafés route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0–8.75% pa at 65% LTV. Allica and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50–100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // ─── MOT / garage / petrol ───────────────────────────────────────────────
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Cambridge | VOSA, Environmental, Petrol Forecourt",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Cambridge. VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60–70%, mid-2026 rates 6.5–8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Cambridge",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60–70%, mid-2026 rates 6.5–8.5% pa.",
      metrics: [
        { label: "LTV", value: "60–70%" },
        { label: "Cover test", value: "EBITDA 1.5–2.0x" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£250K–£3M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5–2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "<strong>Together</strong> dominates the Cambridge garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep East of England automotive book built up over twenty years. Cynergy Bank covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8–15K of cost and 4–6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55–65% reflecting the contamination-recovery risk.",
        'Worked example: an MOT and used-car sales lot in Cherry Hinton CB4, £750K freehold purchase, full-trading EBITDA £125K, clean Phase I report. Together placed at 65% LTV, 9.25% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt with adjacent convenience retail in Histon CB15, £1.6M, EBITDA £215K. Phase II clean. Placed via Together at 60% LTV, 9.75% pa, 15-year term. Common Cambridge locations: <a href="/areas/romsey" class="text-secondary font-medium hover:underline">Romsey</a> and Cherry Hinton have a deep secondary garage and MOT trade; outer-Cambridge market towns (Ely, Histon, Saffron Walden) hold petrol forecourt stock.',
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4–6 week environmental timeline standard." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2–4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge garage and forecourt market",
      body: '<a href="/areas/romsey" class="text-secondary font-medium hover:underline">Romsey</a>, Cherry Hinton, <a href="/areas/cherry-hinton" class="text-secondary font-medium hover:underline">Cherry Hinton</a> and outer-Cambridge market towns hold a deep secondary garage and MOT trade, independent operators serving local catchments, typically 1–3 ramps and a small forecourt. The market for independent operators buying their site freehold is steady; we work most often in the £400K–£1.5M bracket. Petrol forecourt is a narrower, longer-cycle deal, environmental due diligence is the standard friction point. Ely, Histon and Saffron Walden hold the bulk of the outer-Cambridge independent forecourt stock; the EG Group, BP and Shell corporate sites do not route through the broker market.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge MOT, garage and forecourt",
      body: '<strong>Together</strong> dominates the Cambridge garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep East of England automotive book and have specialist underwriters who know the sector well. Pricing 9.0–10.0% pa at 60–70% LTV. Cynergy Bank takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 8.5–9.25% pa. Allica\'s specialist desk engages on the mid-market end. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55–65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8–15K, total timeline 4–6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15–20 years. Shorter than mainstream owner-occupier (20–25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common in Cambridge and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // ─── Nursery / school ─────────────────────────────────────────────────────
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Cambridge | Ofsted, Capacity, EBITDA",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Cambridge. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60–70%, mid-2026 rates 8.0–9.5% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Cambridge",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Cambridge. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. LTVs 60–70%, mid-2026 rates 8.0–9.5% pa.",
      metrics: [
        { label: "LTV", value: "60–70%" },
        { label: "Cover test", value: "EBITDA 1.5–2.0x" },
        { label: "Rate range", value: "8.0–9.5% pa" },
        { label: "Facility", value: "£500K–£5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65–70% LTV, 6.0–7.5% pa. <strong>Good</strong> sits at standard pricing, 60–70% LTV, 8.25–9.0% pa. <strong>Requires Improvement</strong> can still fund but at 50–60% LTV, 9.5–10.5% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Cambridge nursery clusters: Cambridge Science Park, Cherry Hinton, Newnham, Petersfield, Chesterton, wherever there is a dual-income professional catchment driving fee-paying day-care demand. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 65-place Cherry Hinton CB1 day nursery, Ofsted Good, £1.85M valuation, 88% occupancy, EBITDA £215K. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term. Worked example two: a Cambridge Science Park CB1 / Petersfield CB1 split-site nursery group, two sites, £2.6M aggregate valuation, EBITDA £325K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.75% pa.",
        "Independent schools are a smaller, more specialist niche. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5–8.5% pa. Cambridge & Counties, Reliance Bank and Hampshire Trust are the realistic desks for £1M–£5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Cambridge Science Park, Cherry Hinton, Newnham, Petersfield, Chesterton catchments." },
        { label: "Multi-site nursery group", detail: "2–10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Hampshire Trust most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge nursery and school market",
      body: 'Cambridge carries one of the deepest day-care markets in regional UK, driven by ~813,000 city-and-Greater-Cambridge-area population and a large dual-income professional catchment anchored by Cambridge Science Park legal-and-financial employers, the universities and the NHS Cambridge Teaching Hospitals workforce. Active clusters in Cambridge Science Park CB1, Cherry Hinton CB1, Newnham CB4, Petersfield CB1, Chesterton CB3 and Trumpington CB2. Multi-site nursery groups have consolidated significantly through 2022–2026, both the Cherry Hinton-to-Cambridge Science Park split-site and the Cambridge Science Park-to-Petersfield split-site case studies exemplify the pattern. Independent schools cluster in north Cambridge (Newnham, Newnham, Newnham) plus the outer market towns (Saffron Walden, Ely).',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties and Allica all have meaningful nursery appetite. Mid-2026 pricing 8.0–9.0% pa at 60–70% LTV. Hampshire Trust Bank covers larger multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Hampshire Trust at 6.5–8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60–70% LTV, 8.0–9.0% pa). <strong>Requires Improvement</strong> can fund at 50–60% LTV and 9.5–10.5% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Hampshire Trust are most active. We have placed 2-site, 4-site and 7-site Cambridge nursery group facilities through this route.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12–24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3–5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Hampshire Trust are the most active desks. Mid-2026 pricing 6.5–8.5% pa at 60–65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter.",
      },
    ],
  },

  // ─── Mixed-use ──────────────────────────────────────────────────────────
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Cambridge | Retail + Resi, Office + Resi",
    metaDescription:
      "Mixed-use commercial mortgage finance in Cambridge, predominantly-commercial blocks with residential element, retail-plus-residential, office-plus-residential. Single-facility underwriting across the broker panel. LTVs to 75%, mid-2026 rates 6.5–8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Cambridge",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. LTVs to 75%, mid-2026 rates 6.5–8.5% pa.",
      metrics: [
        { label: "LTV", value: "65–75%" },
        { label: "Cover test", value: "Blended ICR 140–155%" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£250K–£10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial) require a different lender pool, Shawbrook, Cambridge & Counties and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage mixed-use (listed buildings, Cambridge Science Park-style stock) routes through heritage-comfortable lenders only.",
        "Worked example: a Cambridge Science Park CB1 mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, six apartments above let on ASTs at market rents, £2.4M valuation. Predominantly-commercial mix (55% commercial by floorspace, 65% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.85% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: a Ely Market Place mixed-use block, ground-floor restaurant on a 5-year lease, four apartments above on ASTs, £1.4M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.5% pa.",
        'Recent change-of-use case at Ely Market Place (former Barclays converting to ground-floor restaurant plus first-floor offices, application 26/9/00026/MOD) is a typical mixed-use semi-commercial profile. The Oxford Road, Cambourne case (CB10 9AS, application 26/01174/FU, Class E commercial unit plus flats above) is a classic mixed-use refinance candidate post-stabilisation.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4–10 apartments above; mid-cap commercial investment with blended income test." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; CBD-fringe schemes and converted heritage buildings." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Mixed-use development conversion", detail: "Heritage building converted to mixed-use under change-of-use consent (often Class E to mixed C3+E)." },
        { label: "Large mixed-use blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge mixed-use estate",
      body: 'Cambridge has an extensive mixed-use stock distributed across the metropolitan area, reflecting its century-and-a-half of layered urban development. Heritage mixed-use in <a href="/areas/newmarket-road" class="text-secondary font-medium hover:underline">Newmarket Road</a> (Cambridge Science Park, Newmarket Road Urban Village, St John\'s Innovation Centre area). Modern mixed-use in the <a href="/areas/trumpington-south" class="text-secondary font-medium hover:underline">Trumpington South</a> regeneration, Bridgewater Place, Cambridge Science Park fringe. Classic Victorian shop-plus-flat across <a href="/areas/cambridge-science-park" class="text-secondary font-medium hover:underline">Cambridge Science Park</a>, <a href="/areas/petersfield" class="text-secondary font-medium hover:underline">Petersfield</a>, Cherry Hinton village, Chesterton Road Chesterton and Newnham Road Cherry Hinton. The change-of-use planning pipeline, vacant banks converted to bars and restaurants plus offices, vacant offices converted to mixed-use (Cherry Hinton, Ely, Cambourne), is creating new mixed-use stock continually.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.75–8.75% pa, 65–75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on larger blocks at 8.0–8.75% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.5–8.0% pa. Predominantly-residential mixed-use routes more naturally through InterBay and the specialist semi-commercial pool. Heritage and listed mixed-use needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on a Cambridge mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60–65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5–10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about heritage mixed-use?",
        answer: "Listed-building mixed-use (Cambridge Science Park-style stock, Town Hall-adjacent heritage offices, Victorian arcades) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12–24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 9.0–11.0% pa for the bridge leg; term-out into 7.75–8.75% pa once stabilised. We model both legs at outset.',
      },
    ],
  },

  // ─── Semi-commercial ───────────────────────────────────────────────────
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Cambridge | Shop with Flat Above, Unregulated Cases",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Cambridge, shop-with-flat-above and other 40%+ residential mixed assets. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Cambridge",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR ~145%. Mid-2026 rates 6.5–8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70–75%" },
        { label: "Cover test", value: "Blended ICR 140–150%" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£150K–£2M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Cambridge suburban high streets. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50–100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Cambridge semi-commercial spines: <strong>Mill Road and Chesterton High Street</strong> in Cambridge Science Park, <strong>Hills Road and Cherry Hinton Road</strong> in Petersfield, <strong>Chesterton Road</strong> in Chesterton, <strong>Newnham Road</strong> in Cherry Hinton, the village retail in Cherry Hinton (Cherry Hinton Road), and Ely market centre. Most semi-commercial deals are £150K–£800K facility size. Worked example: an Mill Road CB1 shop with two flats above, £475K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a Hills Road CB1 shop-plus-three-flats with all flats let on ASTs to arms-length tenants, £585K, placed via Together at 70% LTV, 8.45% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Cambridge high-street archetype. Mill Road CB1, Hills Road CB1, Chesterton Road CB3, Newnham Road CB23, Cherry Hinton Road CB1 spines." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3–5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and Victorian conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Cambridge Science Park, town-centre Victorian arcades." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    cambridgeContext: {
      h2: "The Cambridge semi-commercial estate",
      body: 'A deep, active product across Cambridge. The classic suburban high streets, Mill Road CB1, Hills Road CB1 and CB2, Chesterton Road CB3, Newnham Road CB23, Cherry Hinton village CB1, Ely market centre CB22, Chesterton Chesterton Road CB3, all run on shop-plus-flat-above stock dating from the 1860s through the 1930s. Recent Oxford Road, Cambourne case (CB10 9AS, application 26/01174/FU, Class E commercial unit retained with new flats above) is a current change-of-use semi-commercial profile. The semi-commercial market trades steadily, these assets rarely sit vacant for long because the residential element is intrinsically lettable.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Cambridge shop-plus-flat archetype, typical 7.75–7.5% pa at 70–75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.5–9.25% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial (Peterborough HQ, natural Cambridge catchment), HTB and Cambridge & Counties all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50–100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on a Cambridge semi-commercial mortgage?",
        answer: "Currently <strong>6.5–8.5% pa</strong> at 65–75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. Article 4 directions in CB1 and CB1 affect HMO conversion economics. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // ─── HMO block ──────────────────────────────────────────────────────────
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Cambridge | Petersfield, Cambridge Science Park, Article 4 Areas",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Cambridge, Petersfield CB1, Cambridge Science Park CB1, Cherry Hinton east CB1. Article 4 considerations, specialist HMO lender panel including Together, InterBay Commercial, LendInvest. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Cambridge",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140–160%. Article 4 directions in CB1 and CB1 affect new conversion but existing HMOs trade and refinance freely. Mid-2026 rates 6.5–8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140–160%" },
        { label: "Rate range", value: "6.5–8.5% pa" },
        { label: "Facility", value: "£250K–£3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Cambridge HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV × value) or (ICR × rent / stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Cambridge is one of the densest HMO markets in regional UK, driven by approximately 70,000 students across University of Cambridge, Anglia Ruskin University and Cambridge Theological Federation. <strong>Petersfield (CB1)</strong> carries the largest student HMO concentration; Cambridge Science Park adjacent; Cherry Hinton east CB1 and Petersfield CB1 round out the inner-city student spine. Outside the student belt, professional HMOs concentrate in Cherry Hinton, Petersfield, Cherry Hinton and Romsey, with rents typically 30–40% above student rates per room but lower headline occupancy.",
        "The structural feature every HMO buyer must understand is the <strong>Article 4 direction</strong>. Cambridge City Council issued Article 4 directions for CB1 (2014) and CB1 (2014), removing permitted-development rights for converting C3 (single dwelling) to C4 (small HMO). Inside the Article 4 areas, any new conversion needs full planning permission, and the council\'s CB1 / CB1 saturation policy makes new HMO consents extremely rare. Existing licensed HMOs trade and refinance freely. The supply restriction has supported HMO valuations materially since 2014; CB1 student HMOs trade at a 15–20% premium to equivalent stock outside Article 4 areas.",
        "Worked example: a 6-bed Petersfield CB1 student HMO, £585K valuation, £42,500 gross annual rent, 95% historical occupancy, all-inclusive let. <strong>InterBay Commercial</strong> placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 4-property Cherry Hinton CB1 professional HMO portfolio, £2.1M aggregate, £148K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with LendInvest at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Student HMO (5–8 rooms)", detail: "CB1 / CB1 student spine, Petersfield, Cambridge Science Park, Cherry Hinton east, Petersfield. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Professional HMO (5–8 rooms)", detail: "Working-tenant HMOs across Cherry Hinton, Petersfield, Cherry Hinton, Romsey. Higher per-room rents, slightly lower occupancy." },
        { label: "Large HMO (8+ rooms)", detail: "Article 4-area larger HMOs and converted Victorian houses. Specialist lender pool, premium valuations." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO under permitted development (outside Article 4) or full planning consent (inside)." },
        { label: "Above-shop HMO", detail: "HMO blocks above retail, semi-commercial / HMO hybrid; specialist underwriting on the combined commercial and residential income." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Cambridge HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let. Article 4 areas need full planning consent first." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge HMO market",
      body: 'Cambridge carries one of the densest HMO concentrations in regional UK, driven by approximately 70,000 students across University of Cambridge, Anglia Ruskin University and Cambridge Theological Federation. <strong><a href="/areas/petersfield" class="text-secondary font-medium hover:underline">Petersfield (CB1)</a></strong> is the densest student HMO market, Romsey, Petersfield, Mill Road areas saturated with 5–8 bed converted Victorian terraces. Cambridge Science Park CB1 adjacent. Cherry Hinton east CB1 and Petersfield CB1 round out the inner-city student spine. Article 4 directions in CB1 and CB1 from 2014 restrict new HMO conversion, existing licensed HMOs trade at premium values reflecting the supply constraint. Professional HMO concentrates in Cherry Hinton CB1, Petersfield CB1, Cherry Hinton CB4 and Romsey CB2, outside Article 4 areas, making conversion economics still viable.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Cambridge HMO",
      body: 'Strong. <strong>Together</strong>, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Paragon Bank, Foundation Home Loans, Cambridge & Counties and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5–8.5% pa at 70–75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further, Together, InterBay Commercial and LendInvest dominate. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Article 4 in CB1 and CB1?",
        answer: "Article 4 directions from 2014 restrict new C3-to-C4 conversions in Petersfield (CB1) and Cherry Hinton east / Petersfield (CB1), i.e. converting a single house to a small HMO needs full planning permission rather than permitted development. Existing licensed HMOs trade and refinance freely; the supply restriction has supported HMO values materially. Most of our Petersfield / Cambridge Science Park deals are existing licensed stock changing hands or refinancing.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. Outside Article 4 areas the conversion can proceed under permitted development; inside Article 4 (CB1, CB1) you need full planning consent first, and our experience is that consents are extremely rare in the saturated student spine.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140–155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1–2% above pay rate. Strong-occupancy student HMOs in CB1 routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150–160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130–145%), single facility, blanket charge or property-by-property charges. LendInvest, Paragon Bank, Together and Foundation Home Loans all run active HMO portfolio programmes. 5+ properties is the typical threshold for portfolio pricing.',
      },
    ],
  },

  // ─── Holiday-let portfolio ───────────────────────────────────────────────
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Cambridge | FHL Portfolio, Ely, East Cambridgeshire",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios across the Cambridge and Cambridgeshire fringe, Ely, Saffron Walden, East Cambridgeshire. LendInvest, Together and specialist FHL desks. LTVs to 70%, mid-2026 rates 7.0–9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Cambridge",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios across the Cambridge, East Cambridgeshire and East of England Dales fringe. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. LTVs to 70%, mid-2026 rates 7.0–9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130–145%" },
        { label: "Rate range", value: "7.0–9.0% pa" },
        { label: "Facility", value: "£300K–£3M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 50–60%+ is the threshold). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-season weeks at high ADR matter as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130–145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad season at a single property does not break the portfolio.",
        "Active FHL territory around Cambridge: <strong>Ely, Saffron Walden, East Cambridgeshire fringe</strong> and the East of England Dales boundary. The recent Bridge Farm Granta Park Road transaction (CB22 5BL, £712,000) is in the heartland of the Cambridge-fringe FHL market. Ely and Histon carry distinct B&B and boutique-hotel stock that overlaps with FHL economics. Outside the metropolitan core, Saffron Walden, Saffron Walden and the East Cambridgeshire villages (Cherry Hinton east-in-East Cambridgeshire, Linton, Wicken Fen area) hold premium FHL conversion stock, typically 2–5 bedroom converted barns, cottages and former farmhouses commanding £150–£400 per night peak.",
        "Worked example: a 4-property FHL portfolio in the East Cambridgeshire fringe, three converted cottages and one barn conversion, £1.65M aggregate valuation, £148K aggregate annual gross income, 62% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.85% pa on a 5-year fix, 25-year term, aggregated DSCR 138%. Worked example two: a 3-property FHL portfolio plus an owner-occupied B&B in Ely, mixed structure, placed via Together at 60% LTV, 9.25% pa, treating the B&B as trading-business with operator residence.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically rural or market-town location. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs in same broad geography. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "Equestrian-to-commercial conversion", detail: "Stable conversion to FHL, niche but active in Ely and outer Cambridge. Bridge-to-let plus term-out onto FHL portfolio mortgage." },
        { label: "Lakeside and Dales cottage FHL", detail: "East of England Dales fringe stock; specialist rural lender appetite. East Cambridgeshire, Wicken Fen area, Cherry Hinton east-in-East Cambridgeshire." },
        { label: "Aparthotel and serviced apartment portfolio", detail: "Multiple serviced apartments under single management; overlap with leisure category." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130–145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    cambridgeContext: {
      h2: "The Cambridge-fringe FHL market",
      body: 'FHL stock concentrates outside the Cambridge metropolitan core, in the <strong>Ely (CB22), Saffron Walden (CB11) and East Cambridgeshire fringe</strong>. Recent transaction at Bridge Farm Granta Park Road (CB22 5BL, £712,000) typifies the rural-conversion candidate, the kind of stable-and-paddock smallholding that converts cleanly to a 2–4 unit FHL portfolio. Demand drivers: weekend leisure tourism from Cambridge and Cambridgeshire metropolitan markets, the East of England Dales as destination, the Anglesey Abbey and Wicken Fen catchment. Stock typically 2–5 bedroom converted barns, cottages and former farmhouses commanding £150–£400 per night at peak. Outside Cambridge proper, Saffron Walden, Saffron Walden, Linton and Cherry Hinton east-in-East Cambridgeshire hold the premium fringe stock; Ely and Burwell the more market-town-focused FHL base.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Hampshire Trust Bank are the most active specialist FHL portfolio lenders. Cumberland Building Society engages on rural and Dales stock with strong sector knowledge. <strong>Cambridge & Counties</strong> covers larger portfolios (5+ properties, £2M+ aggregate facility). Select private credit on bespoke structures. Mid-2026 pricing 7.0–9.0% pa at 60–70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>50–60%+ annual occupancy</strong> across the portfolio. Strong-season weeks at high ADR matter as much as headline annual figure, a Dales cottage at 75% occupancy in May–September and 35% October–April reads better than the same cottage at flat 55% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25–50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5–10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
