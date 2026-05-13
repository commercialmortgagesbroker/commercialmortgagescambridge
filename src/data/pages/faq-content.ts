/**
 * /faq page content, Commercial Mortgages Cambridge.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, cambridge, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial, semi-commercial shop+flats, healthcare, hospitality, life-sciences lab-enabled office and trading-business premises. In the Cambridge market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "What is the difference between a commercial mortgage and a residential buy-to-let?",
        answer:
          'A commercial mortgage is secured against <strong>commercial</strong> property, offices, retail units, industrial, healthcare, leisure, life-sciences lab and office, semi-commercial shop+flats, trading businesses. Residential buy-to-let is secured against single houses or flats let to tenants on assured shorthold tenancies. Underwriting is fundamentally different: residential buy-to-let leans on the borrower\'s personal income and rental yield; a commercial mortgage tests tenant covenant and lease length on investment, or EBITDA cover on owner-occupier and trading-business. Most commercial mortgages sit outside the FCA regulated mortgage perimeter; residential buy-to-let is usually unregulated unless it is consumer or family-let. Do not apply for a buy-to-let against a shop with flat above, it will decline; that is a semi-commercial mortgage.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Dental partnerships on Hills Road, accountancy and legal firms in Newnham and on Station Road, life-sciences operators at Cambridge Science Park, retail operators on Mill Road, hospitality across the city. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more. <strong>Trading-business owner-operators</strong>, pubs, hotels, care homes, dental practices, MOT garages, day nurseries, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. A Cambridge Science Park vacant lab refit is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Cambridge?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (pub, hotel, care home, MOT) and life-sciences lab investment sit tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a strong life-sciences tenant lease at Cambridge Science Park prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Cambridge & Counties Bank and Allica Bank have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Cambridge commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors: <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including life-sciences tenants at CBC and CSP: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (pub, hotel, care home, MOT, independent restaurant): <span class="figure-inline">7.5 to 9.0 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record. Five-year fixed rates typically price 25 to 50 basis points above two-year fixes; 25-year terms price flat to 15-year terms.',
      },
      {
        question: "What fees should I expect on a Cambridge commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (care, hotel, pub) and large investment or life-sciences lab assets cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Cambridge?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Cambridge. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Cambridge?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (care home, hotel, pub, MOT) and life-sciences lab investment reflecting the sector-specialist underwrite, environmental due diligence and specialist RICS valuation. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>24 working days</strong> from initial enquiry on a Newnham professional firm freehold, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same East Anglian valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. East Anglian valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Cambridge commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant\'s accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, VOSA approval for MOT, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Cambridge-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Cambridge commercial property?",
        answer:
          'For property inside the Cambridge City boundary and across South Cambridgeshire, the planning authority is the joint <strong>Greater Cambridge Shared Planning</strong> service (Cambridge City Council plus South Cambridgeshire District Council operating jointly), public access portal <a href="https://applications.greatercambridgeplanning.org/online-applications/">applications.greatercambridgeplanning.org</a> (Idox-hosted). Filter by application type "Full" and use class E(g), B2 or B8 to surface offices, light industrial, lab-enabled office and storage / distribution. For property outside the joint area the relevant district council applies: East Cambridgeshire District Council for Ely and Newmarket-fringe, Huntingdonshire District Council for Huntingdon and St Neots, Uttlesford District Council for Saffron Walden. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown.',
      },
      {
        question: "Do life-sciences clusters like CBC, CSP and Granta Park affect lender appetite?",
        answer:
          'Yes, materially. Lab-enabled office and pure life-sciences investment in <strong>Cambridge Biomedical Campus</strong>, <strong>Cambridge Science Park</strong> and <strong>Granta Park</strong> attracts a specific lender pool, the assets carry strong tenant covenants on long FRI leases, and the underlying yields hold up well through cycles. Specialist and challenger desks (<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, OakNorth and private credit such as Octopus Real Estate and ASK Partners on 5M-pound-plus lots) lead the lender competition; high-street commercial desks compete on the cleaner stabilised assets. Pricing for an 8-year-plus unexpired lease to an established life-sciences covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa. Shorter leases or vacant lab refits push deals to specialist bridge-to-let or value-add structures. We know the underwriters who quote on lab investment lot sizes.',
      },
      {
        question: "Is Cambridge & Counties Bank really a Cambridge lender?",
        answer:
          'Yes. Cambridge & Counties Bank is headquartered in Cambridge with its commercial-mortgage book concentrated across East Anglia and the Midlands, and Cambridge is its home market. The bank competes hard on owner-occupier and commercial investment cases in the Cambridge catchment, particularly East Anglia healthcare, care homes (CQC Good or above), professional-services freehold and stabilised commercial investment with strong covenants. Pricing is usually competitive with the high-street commercial banks but with materially more flexibility on covenant terms, personal guarantee structure and sector underwriting. We hold a direct working relationship with their commercial team, which on the right Cambridge case is one of the strongest defensible lender routes available to a local broker.',
      },
      {
        question: "Are CBC and CSP lab investment yields supported by current lender appetite?",
        answer:
          'Yes. <strong>Cambridge Biomedical Campus</strong> on Hills Road and <strong>Cambridge Science Park</strong> on Milton Road remain the two strongest investment yield stories in the UK life-sciences market, supported by Addenbrooke\'s, AstraZeneca and the cluster of life-sciences occupiers (Abcam, Domino, Apple Cambridge, ARM, Microsoft Research and the Trinity College tenant base at CSP). Net initial yields on stabilised lab and lab-enabled office assets sit comfortably inside the institutional appetite band, and lender LTVs at 60 to 65 percent on 8-year-plus unexpired FRI leases price at <span class="figure-inline">6.5 to 7.5 percent</span> pa. The lender pool narrows above 5M pounds to <strong>Shawbrook</strong>, OakNorth, Octopus Real Estate, ASK Partners and a handful of clearing-bank corporate desks. We map the appetite on the first call.',
      },
      {
        question: "Is the Mill Road HMO and semi-commercial market financeable in 2026?",
        answer:
          'Yes. Mill Road sits at the heart of the Cambridge independent F&B and HMO market, supported by the University of Cambridge and Anglia Ruskin student populations, the wider post-doc and young-professional rental demand, and the resilience of small independent retail. Semi-commercial shop+flat archetypes on Mill Road place comfortably with <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Cambridge & Counties Bank at 70 to 75 percent LTV. HMO portfolio refinancing in the surrounding Romsey Town and Petersfield streets places with <strong>InterBay Commercial</strong>, Paragon Bank and Together at 65 to 75 percent LTV. The blended ICR test on shop+flat typically lands at 140 to 150 percent stressed at a notional rate 1 to 2 percent above pay rate. Pricing inside the <span class="figure-inline">7.0 to 8.0 percent</span> pa band on a 25-year amortisation.',
      },
    ],
  },
];
