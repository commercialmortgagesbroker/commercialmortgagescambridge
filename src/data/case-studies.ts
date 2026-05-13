/**
 * Case studies, Commercial Mortgages Cambridge.
 *
 * Ten anonymised case studies covering the Cambridge market hooks:
 * CBC lab refinance, CSP investor refinance, Hills Road dental practice,
 * Newmarket Road hotel, Mill Road semi-commercial portfolio, Newnham
 * professional firm freehold, Granta Park lab investment, King's Parade
 * leisure refinance, Trumpington Meadows neighbourhood retail freehold,
 * Chesterton parade portfolio.
 *
 * Real Cambridge postcodes/districts. Specifics on rate, LTV, term and lender
 * (named where confirmed permission, otherwise anonymous). Rates inside
 * the 6.0 to 9.0 pct pa band.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Lab-enabled office investment refinance, Cambridge Biomedical Campus",
    slug: "cambridge-biomedical-campus-lab-refinance",
    borough: "Cambridge Biomedical Campus",
    boroughSlug: "cambridge-biomedical-campus",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£4.2M",
    gdv: "£6.4M",
    ltv: "65%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Lab-enabled office single-let investment",
    summary:
      "A single-let lab-enabled office investment on Cambridge Biomedical Campus (CB2) refinanced off a maturing 5-year fix with a £4.2M commercial investment mortgage at 65% LTV, 25-year amortisation, 6.85% pa via Shawbrook.",
    challenge:
      "The asset, 14,200 sqft of lab-enabled office let to an established life-sciences tenant on a 12-year FRI lease with 9 years unexpired at refinance, was carrying a maturing 5-year fix at 5.25% pa. Net rent £465K pa, valued at £6.4M by the lender's panel valuer. The investor wanted a fresh 5-year fix at the right rate plus a small capital release for a planned second acquisition.\n\nThe high-street commercial incumbent quoted 7.45% pa over 20 years, which was wider than the asset class should have warranted and clipped the borrower's modelled ICR cover. With a strong covenant and a long unexpired term, the deal should have priced inside the institutional appetite band, the issue was matching it to the right specialist lender desk on the first call.",
    solution:
      "We benchmarked the deal across four life-sciences-active investment lender desks. Shawbrook quoted 6.85% pa on a 5-year fix inside a 25-year amortisation at 65% LTV (£4.2M against £6.4M valuation). ICR cover at 162% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the original CBC anchor planning consent, occupancy track record, the SPV pack and the deposit proof on the £150K capital release. RICS Red Book valuation by a specialist life-sciences valuer in 18 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years and £150K capital released against the next acquisition. Monthly interest cost approximately £85K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second CBC-adjacent acquisition.",
    keyStats: [
      { label: "Facility", value: "£4.2M" },
      { label: "Property value", value: "£6.4M" },
      { label: "LTV", value: "65%" },
      { label: "Rate", value: "6.85% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "162%" },
    ],
    coordinates: [52.1735, 0.1380],
  },
  {
    id: "cs-002",
    title: "Multi-let office investment refinance, Cambridge Science Park",
    slug: "cambridge-science-park-investor-refinance",
    borough: "Cambridge Science Park",
    boroughSlug: "cambridge-science-park",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.6M",
    gdv: "£5.4M",
    ltv: "67%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Multi-let science park office investment",
    summary:
      "A multi-let office investment at Cambridge Science Park (CB4), 11,800 sqft across three life-sciences and tech tenants, refinanced from a maturing 5-year fix with a £3.6M facility at 67% LTV, 20-year amortisation, 7.15% pa via InterBay Commercial.",
    challenge:
      "Three tenants on staggered FRI leases, two life-sciences research firms and one technology consultancy, weighted average unexpired lease term 6.4 years at refinance. Combined net rent £385K pa, valued at £5.4M. Previous facility at 4.95% pa was maturing.\n\nThe complexity was the multi-let structure, the three tenant covenants were each acceptable individually but the lender pool that could underwrite the blended position narrowed quickly. The investor wanted a competitive rate and a 5-year fix to lock in the current pricing environment without committing to a longer-dated structure that might not suit a future sale.",
    solution:
      "InterBay Commercial quoted 7.15% pa on a 5-year fix inside a 20-year amortisation at 67% LTV (£3.6M against £5.4M valuation). The credit submission included the three FRI leases, individual tenant covenant packs, the occupancy track record across the three tenants, the SPV pack and a clean five-year ICR projection at the assumed re-letting risk-adjusted rents.\n\nICR cover at 155% stressed at a notional rate 1.5 percentage points above pay rate. RICS valuation completed in three weeks. Credit committee approval at week 5, legal completion at week 9 from initial enquiry.",
    outcome:
      "Refinance completed cleanly. The investor now holds the CSP asset on long-term debt with rate visibility through to 2031, and the multi-let income spreads tenant covenant risk in a market where life-sciences vacancy remains structurally low. The same lender has been used for a subsequent CSP-adjacent acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.6M" },
      { label: "Property value", value: "£5.4M" },
      { label: "LTV", value: "67%" },
      { label: "Rate", value: "7.15% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "155%" },
    ],
    coordinates: [52.2380, 0.1455],
  },
  {
    id: "cs-003",
    title: "Dental practice freehold purchase, Hills Road",
    slug: "hills-road-dental-practice-freehold",
    borough: "Hills Road and The Triangle",
    boroughSlug: "hills-road-triangle",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.45M",
    gdv: "£2.05M",
    ltv: "71%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier dental practice",
    summary:
      "An established Hills Road (CB2) dental practice principal acquired the freehold of the practice premises with a £1.45M owner-occupier commercial mortgage at 71% LTV, 20-year term, 6.75% pa via Lloyds healthcare desk.",
    challenge:
      "The practice had operated from leasehold premises on Hills Road for 11 years, in the heart of the CBC-adjacent professional services and healthcare cluster. The freeholder offered the building for sale at £2.05M with a 75-day window before going to open market, too tight for a high-street commercial desk running an 8 to 12 week credit cadence.\n\nThe practice was strong on every measurable: 4,800 NHS UDAs, growing private mix at 41% of fee income, two associate dentists and a hygienist, EBITDA of £365K on the most recent full year. The principal had a 29% deposit available from accumulated retained profit, but the time pressure ruled out the bank's normal deal cadence and the incumbent high-street relationship manager quoted 8.65% pa over 15 years.",
    solution:
      "We benchmarked the deal across four dental-active lender desks. Lloyds healthcare desk, NatWest healthcare, Allica Bank health and Hampshire Trust Bank all quoted competitively. Final terms came in at 6.75% pa over a 20-year amortisation at 71% LTV (£1.45M against £2.05M open market value). EBITDA cover at 1.49x stressed, comfortable headroom. The 20-year term eased monthly affordability against the 15-year structure originally offered.\n\nFull credit approval landed in 12 working days from indicative terms. The RICS specialist dental valuer was instructed in parallel with credit underwriting; valuation back at week 2. Legal completion at week 6 from initial enquiry, comfortably inside the 75-day vendor window.",
    outcome:
      "Practice freehold acquired at week 6 from initial enquiry. Monthly mortgage payment of £11,900 against monthly EBITDA of £30,400, comfortable headroom for continued investment in clinical kit. Annual interest cost approximately £27K lower than the rate originally quoted by the high-street incumbent.",
    keyStats: [
      { label: "Facility", value: "£1.45M" },
      { label: "Property value", value: "£2.05M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.75% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.49x" },
    ],
    coordinates: [52.1955, 0.1370],
  },
  {
    id: "cs-004",
    title: "Hotel freehold refinance, Newmarket Road",
    slug: "newmarket-road-hotel-refinance",
    borough: "Newmarket Road",
    boroughSlug: "newmarket-road",
    financeType: "Trading-Business Mortgage (Hotel)",
    loanAmount: "£2.15M",
    gdv: "£3.35M",
    ltv: "64%",
    term: "20 years",
    units: 1,
    schemeType: "Independent hotel freehold (42 bedrooms)",
    summary:
      "A 42-bedroom independent hotel on Newmarket Road (CB5) refinanced from a maturing 5-year fix with a £2.15M trading-business mortgage at 64% LTV, 20-year term, 8.25% pa via Cynergy Bank, releasing £125K for bedroom refurbishment.",
    challenge:
      "Independent hotel trading consistently, occupancy averaging 78% across the last 18 months supported by the Newmarket Road tourist-and-corporate mix from CBC, the university and the Cambridge tourism flow, ADR steady at £109, EBITDA £315K on the most recent full year. Previous 5-year fix at 5.65% pa was maturing.\n\nNeed: refinance plus £125K capital raise for a 12-bedroom refurbishment programme. Sector-specialist underwrite required given the hospitality trading-business asset class. The high-street relationship was reluctant to extend on the capital raise without a meaningfully wider rate.",
    solution:
      "Cynergy Bank quoted 8.25% pa over 20 years at 64% LTV (£2.15M against £3.35M valuation). EBITDA cover at 1.85x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Capital raise of £125K above the existing facility approved on the strength of the trading track record.\n\nLicensed-trade and hospitality specialist RICS valuer. The credit submission included three years of accounts, current management figures, occupancy and ADR history, deposit proof on the capital raise and the refurbishment plan. Cynergy's hospitality desk approved in 18 working days. Full legal completion at week 9 from start.",
    outcome:
      "Refinance completed with rate certainty for five years and £125K refurbishment fund released. The 12-bedroom upgrade was delivered within five months and ADR has lifted by approximately 9% post-refurb in the subsequent two quarters. The operator has subsequently approached us about a second-site acquisition along the Newmarket Road corridor.",
    keyStats: [
      { label: "Facility", value: "£2.15M" },
      { label: "Property value", value: "£3.35M" },
      { label: "LTV", value: "64%" },
      { label: "Rate", value: "8.25% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.85x" },
    ],
    coordinates: [52.2080, 0.1450],
  },
  {
    id: "cs-005",
    title: "Semi-commercial portfolio refinance, Mill Road",
    slug: "mill-road-semi-commercial-portfolio",
    borough: "Mill Road",
    boroughSlug: "mill-road",
    financeType: "Portfolio Refinance (Semi-Commercial)",
    loanAmount: "£1.85M",
    gdv: "£2.55M",
    ltv: "73%",
    term: "25 years",
    units: 12,
    schemeType: "Five-block semi-commercial portfolio (5 retail units + 7 flats)",
    summary:
      "A Cambridge-based investor refinanced a five-block Mill Road (CB1) semi-commercial portfolio, five ground-floor retail units with seven self-contained flats above, into a single £1.85M facility at 73% LTV, 25-year term, 7.45% pa via InterBay Commercial.",
    challenge:
      "Five separate semi-commercial shop+flat blocks along Mill Road, acquired over a six-year period and financed across three separate legacy lenders on three different rate structures, two maturing fixes and one variable. Combined gross rent £158K pa (retail £74K, residential £84K), valuation £2.55M.\n\nThe investor wanted a single consolidated facility, a clean 5-year fix, a small capital release of £80K for an outstanding shop-front upgrade across two units, and a lender comfortable with the blended commercial-plus-residential structure across five separate titles. Three legacy lenders had to be redeemed cleanly on the same day to release security.",
    solution:
      "InterBay Commercial (OSB Group) quoted 7.45% pa over a 25-year amortisation at 73% LTV on the consolidated portfolio. Blended ICR test at 148% on combined commercial plus residential income, stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission consolidated five separate FRI commercial leases, seven AST packs, the tenant covenant evidence on the commercial side, three years of borrower rental track record, the SPV pack and the deposit proof on the £80K capital release. The three legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 8.",
    outcome:
      "Five legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the entire portfolio. £80K shop-front upgrade delivered within four months. Investor now considering a sixth Mill Road acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.85M" },
      { label: "Property value", value: "£2.55M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "148%" },
    ],
    coordinates: [52.1980, 0.1430],
  },
  {
    id: "cs-006",
    title: "Professional services freehold purchase, Newnham",
    slug: "newnham-professional-firm-freehold",
    borough: "Newnham and Grange Road",
    boroughSlug: "newnham-grange-road",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.1M",
    gdv: "£1.55M",
    ltv: "71%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier professional services freehold (legal firm)",
    summary:
      "A Cambridge legal partnership acquired the freehold of its existing Newnham (CB3) office premises for £1.55M with a £1.1M owner-occupier commercial mortgage at 71% LTV, 20-year term, 6.55% pa via NatWest. Completed in 24 working days from initial enquiry.",
    challenge:
      "Established mid-tier legal firm, ten partners, twenty-two staff, trading from leased Newnham premises for nine years. The freeholder offered the property at £1.55M open market valuation with a fast-track sale window. The partnership had £445K deposit available from accumulated retained earnings across two trading years.\n\nUnderwriting was clean, three years of audited accounts, regulated profession, EBITDA at £495K on the latest year, stable revenue mix. The challenge was speed, the partnership wanted to complete before the next financial year-end to roll the new occupation cost into the forward planning cycle. The high-street incumbent quoted 7.85% pa over 15 years.",
    solution:
      "NatWest commercial banking quoted 6.55% pa over 20 years at 71% LTV (£1.1M against £1.55M valuation). EBITDA cover at 2.34x stressed, comfortable margin for the regulated profession sector. The credit submission ran on three years of audited accounts, current management figures, deposit proof, the building survey and a clean Phase I environmental assessment.\n\nCredit approval at week 2 (11 working days from indicative terms). Specialist commercial valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 24 working days from initial enquiry, the fastest Cambridge owner-occupier completion on our recent record.",
    outcome:
      "Freehold acquired ahead of the partnership's planned financial year-end. Monthly mortgage payment £7,900 against monthly EBITDA of £41,250, very strong cover. Rate saving against the high-street alternative quoted: approximately £14K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£1.1M" },
      { label: "Property value", value: "£1.55M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.55% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.34x" },
    ],
    coordinates: [52.2035, 0.1015],
  },
  {
    id: "cs-007",
    title: "Lab investment acquisition, Granta Park",
    slug: "granta-park-lab-investment",
    borough: "Cherry Hinton",
    boroughSlug: "cherry-hinton",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£5.6M",
    gdv: "£8.6M",
    ltv: "65%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Single-let lab investment",
    summary:
      "A Cambridge-area investor acquired a single-let lab investment at Granta Park (CB21, south of Cambridge) for £8.6M with a £5.6M commercial investment mortgage at 65% LTV, 25-year amortisation, 6.95% pa via Shawbrook.",
    challenge:
      "21,400 sqft of lab-enabled space let to an established life-sciences research tenant on an 11-year FRI lease, 10 years unexpired at acquisition. Net rent £625K pa. The deal anatomy was strong on every measurable but the lot size sat at the boundary between the high-street commercial book and the specialist mid-market real-estate lenders, the lender pool narrowed significantly above £5M.\n\nThe investor had a £3M deposit available from sale proceeds of a previous Cambridgeshire commercial asset, traceable equity, and wanted a 5-year fix to lock in the current pricing environment ahead of any further base rate movement.",
    solution:
      "Shawbrook quoted 6.95% pa on a 5-year fix inside a 25-year amortisation at 65% LTV (£5.6M against £8.6M valuation). ICR cover at 158% stressed at a notional rate 1.5 percentage points above pay rate. OakNorth and a private credit fund (Octopus Real Estate) also quoted; Shawbrook offered the cleanest covenant package on personal guarantee.\n\nThe credit submission included the FRI lease, the tenant covenant pack with five years of accounts, the original Granta Park anchor planning consent, occupancy track record, the SPV pack and the £3M deposit proof. RICS specialist life-sciences valuation completed in 22 working days. Full credit approval at week 5, legal completion at week 10 from initial enquiry.",
    outcome:
      "Acquisition completed within the vendor's preferred timeline. The investor now holds a stabilised Granta Park lab asset on long-term debt with rate visibility through to 2031. The lender route has subsequently been used for a second south-Cambridgeshire life-sciences acquisition.",
    keyStats: [
      { label: "Facility", value: "£5.6M" },
      { label: "Property value", value: "£8.6M" },
      { label: "LTV", value: "65%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "158%" },
    ],
    coordinates: [52.1185, 0.2050],
  },
  {
    id: "cs-008",
    title: "Restaurant freehold refinance, King's Parade",
    slug: "kings-parade-leisure-refinance",
    borough: "Cambridge City Centre",
    boroughSlug: "city-centre",
    financeType: "Commercial Remortgage (Trading-Business)",
    loanAmount: "£925K",
    gdv: "£1.45M",
    ltv: "64%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie central restaurant freehold",
    summary:
      "A free-of-tie restaurant on King's Parade (CB2) refinanced from a maturing 5-year fix with a £925K commercial remortgage at 64% LTV, 15-year term, 8.15% pa via Cynergy Bank, releasing £75K for a front-of-house refurbishment.",
    challenge:
      "Independent restaurant trading at the heart of the King's Parade tourist spine, very strong covers profile supported by the year-round Cambridge tourism and the university term-time demand. Turnover £1.35M, EBITDA £185K on the most recent full year. Operator had run the restaurant for eight years; previous 5-year fix at 5.85% pa was maturing.\n\nNeed: refinance plus £75K capital raise for a front-of-house refurbishment ahead of a planned licence extension. Central Cambridge tourist-spine leisure assets sit in a specific lender appetite band, several mainstream commercial desks decline central-Cambridge leisure on perceived tourism volatility despite the actual trading consistency.",
    solution:
      "Cynergy Bank quoted 8.15% pa over 15 years at 64% LTV (£925K against £1.45M valuation). EBITDA cover at 1.92x stressed at a notional rate 1.5 percentage points above pay rate, strong for the sector. Capital raise of £75K above the existing facility approved.\n\nLicensed-trade and hospitality specialist RICS valuer. The credit submission included three years of accounts, current management figures, the licence pack, deposit proof on the capital raise and the refurbishment plan with a fixed-price contractor quote. Cynergy's licensed-trade desk approved in 17 working days. Full legal completion at week 9 from start.",
    outcome:
      "Refinance completed with rate certainty for five years and the £75K refurbishment delivered within four months. Trading performance has strengthened post-refurb, with EBITDA up approximately 7% in the subsequent two quarters. Operator has approached us about a second-site freehold opportunity in central Cambridge.",
    keyStats: [
      { label: "Facility", value: "£925K" },
      { label: "Property value", value: "£1.45M" },
      { label: "LTV", value: "64%" },
      { label: "Rate", value: "8.15% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.92x" },
    ],
    coordinates: [52.2053, 0.1218],
  },
  {
    id: "cs-009",
    title: "Neighbourhood retail freehold purchase, Trumpington Meadows",
    slug: "trumpington-meadows-retail-freehold",
    borough: "Trumpington and Cambridge South",
    boroughSlug: "trumpington-south",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£780K",
    gdv: "£1.05M",
    ltv: "74%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier neighbourhood retail (convenience store + post office)",
    summary:
      "A long-established convenience store and post office operator acquired the freehold of a neighbourhood retail unit at Trumpington Meadows (CB2) for £1.05M with a £780K owner-occupier mortgage at 74% LTV, 20-year term, 7.05% pa via Santander Commercial.",
    challenge:
      "Established neighbourhood retail operator, twelve-year trading history across two leasehold sites, looking to buy the freehold of the second site at Trumpington Meadows ahead of the maturing landlord's lease. Trumpington Meadows is part of the Cambridge South growth area and the neighbourhood retail demand is supported by the maturing residential pipeline.\n\nTurnover £1.85M, EBITDA £142K on the most recent year. The operator had £275K deposit available from accumulated retained profit. The challenge was the 74% LTV at the higher end of comfortable for a small operator, and matching the deal to a lender willing to underwrite a small-cap neighbourhood retail freehold against a growing Cambridge South demand catchment.",
    solution:
      "Santander Commercial quoted 7.05% pa over 20 years at 74% LTV (£780K against £1.05M open market value). EBITDA cover at 1.38x stressed at a notional rate 1.5 percentage points above pay rate, inside the lender's owner-occupier minimum.\n\nThe credit submission ran on three years of audited accounts, current management figures, the post-office contract (a strong covenant supplement to the retail trade), the deposit proof and a planning-context note on the Trumpington Meadows residential pipeline supporting forward trade growth. Credit approval at week 3, RICS commercial valuation in three weeks. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the existing lease maturity. Monthly mortgage payment £6,050 against monthly EBITDA of £11,800, cover inside lender minimum with margin against forward growth. The operator now controls the site through the Cambridge South residential growth phase.",
    keyStats: [
      { label: "Facility", value: "£780K" },
      { label: "Property value", value: "£1.05M" },
      { label: "LTV", value: "74%" },
      { label: "Rate", value: "7.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.38x" },
    ],
    coordinates: [52.1715, 0.1180],
  },
  {
    id: "cs-010",
    title: "Retail parade portfolio refinance, Chesterton",
    slug: "chesterton-parade-portfolio",
    borough: "Chesterton and Cambridge North",
    boroughSlug: "chesterton",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£2.35M",
    gdv: "£3.45M",
    ltv: "68%",
    term: "25 years (5yr fix)",
    units: 8,
    schemeType: "Eight-unit retail parade investment",
    summary:
      "A Cambridge-based investor refinanced an eight-unit Chesterton (CB4) retail parade portfolio into a single £2.35M facility at 68% LTV, 25-year amortisation, 7.25% pa via LendInvest, with a personal guarantee cap negotiated down from 30% to 20%.",
    challenge:
      "Eight-unit retail parade in Chesterton, CSP-adjacent suburban commercial stock, six tenants on FRI leases ranging from a national pharmacy chain to independent operators (bakery, coffee shop, hair salon, dry cleaners, takeaway, convenience store), plus two flexible-term lets on shorter terms. Weighted average unexpired lease term 4.8 years. Combined gross rent £272K pa, valuation £3.45M.\n\nPrevious facility was a maturing 5-year fix at 5.45% pa across the portfolio with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade.",
    solution:
      "LendInvest quoted 7.25% pa on a 5-year fix inside a 25-year amortisation at 68% LTV (£2.35M against £3.45M valuation). ICR cover at 152% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 20% of facility on the strength of three years of clean rent collection history (98% on-time across the eight units) and the diversified tenant covenant base. The credit submission included six FRI leases plus the two flexible lets, tenant covenant packs on the larger covenants, three-year rent collection history, the SPV pack and the original parade planning consent. Credit approval at week 4, full legal completion at week 8.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the consolidated portfolio held on a clean single facility. The investor has subsequently used the same lender for a second Chesterton parade acquisition.",
    keyStats: [
      { label: "Facility", value: "£2.35M" },
      { label: "Property value", value: "£3.45M" },
      { label: "LTV", value: "68%" },
      { label: "Rate", value: "7.25% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "152%" },
    ],
    coordinates: [52.2195, 0.1305],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
