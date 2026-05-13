/**
 * /about page content, Commercial Mortgages Cambridge.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-12): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Cambridge and Greater Cambridge",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £250M+ of unregulated commercial mortgages arranged across owner-occupier, investment, semi-commercial, portfolio refinancing and trading-business deals. Placed with the eight named lenders below and another eighty across our panel, including Cambridge & Counties Bank, the Cambridge-headquartered challenger.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Cambridge commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;250M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector: laboratory and life-sciences office investment, owner-occupier life-sciences operators, professional-services freehold, retail and leisure, healthcare and dental, hotels, pubs and restaurants, MOT and forecourt, day nursery, semi-commercial shop+flats (unregulated), mixed-use blocks and HMO portfolios. Our work focuses on Cambridge, Greater Cambridge and the life-sciences belt out to Granta Park, Babraham Research Campus and Histon. Cambridge Biomedical Campus, Cambridge Science Park, St John\'s Innovation Park, Cherry Hinton, Chesterton, Trumpington, Newnham, Cambridge North and the broader south Cambridgeshire villages all sit comfortably inside the same lender pool. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      "<strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority’s regulated mortgage perimeter. Our consumer credit and regulated mortgage referrals are handled by FCA-authorised partners. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope.",
    ],
  },

  numbers: [
    { value: "£250M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms.",
      },
      {
        label: "Cambridge market depth",
        detail:
          "We know the Cambridge-active lender desks personally. NatWest and Lloyds commercial banking on Sidney Street, HSBC and Barclays on St Andrew's Street, Santander Commercial covering Hills Road owner-occupier deals and Cambridge Science Park investment lots. Cambridge & Counties Bank is headquartered in Cambridge and we work directly with their commercial team, they remain the most defensible local lender for East Anglia owner-occupier and investment cases. Shawbrook, InterBay Commercial and LendInvest cover the central retail and semi-commercial stock on Mill Road, Trinity Street and the King's Parade tourist spine; Cynergy Bank prices well on licensed-trade refinance across the Newmarket Road hotel cluster. We know which East Anglian RICS valuers each lender prefers and which comparable evidence the local panel will accept.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Cambridge broker",
    body: 'The Cambridge commercial mortgage market has genuine regional nuance: Greater Cambridge Shared Planning (Cambridge City Council and South Cambridgeshire District Council operating jointly), Cambridge Biomedical Campus on Hills Road as the UK\'s largest life-sciences cluster anchored by Addenbrooke\'s and the AstraZeneca Discovery Centre, Cambridge Science Park at the top of Milton Road (Trinity College owned, the longest-established science park in the UK), Granta Park and Babraham Research Campus to the south, St John\'s Innovation Park at the CB4 fringe, the King\'s Parade to Sidney Street retail spine, the Mill Road independent F&B and HMO market, and the Newmarket Road hotel and trade cluster. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Cambridge &amp; Counties Bank (the Cambridge-headquartered challenger with a defensible East Anglia commercial book and a team we work with directly), Allica Bank, HTB, Aldermore, Together, Paragon Bank, OakNorth, Hampshire Trust Bank, YBS Commercial, Handelsbanken, Octopus Real Estate and ASK Partners on the larger life-sciences investment lots, plus the long tail of specialist commercial mortgage desks. National brokers tend to default to whichever desk paid the broker conference fee that quarter. We default to whichever desk will fund your deal cleanest, and we will tell you which one that is on the first call.',
  },
};
