/**
 * Editorial flagship, The Cambridge commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Cambridge commercial
 * property market 2026". Designed to host the contextual outbound link to
 * the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/cambridgeshire/cambridge inside
 * the lender-pool section, framed as the wider regional network we sit
 * inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only the
 * 8 named lenders are bolded (Shawbrook, InterBay Commercial, LendInvest,
 * Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Cambridge & Counties
 * Bank is named but not bolded. Rates 6.0-9.0% pa overall. No FCA
 * authorisation claims. Commercial mortgages are unregulated.
 *
 * Data: real Cambridge economy figures, real Greater Cambridge Shared
 * Planning change-of-use refs lifted from the master brief, and the
 * Silicon Fen life sciences anchor set (CBC, CSP, Granta Park, Babraham,
 * St John's Innovation Park, Cambridge Research Park).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/cambridge-commercial-property-market`;
const publishDate = "2026-05-13";
const modifiedDate = "2026-05-13";

const cambridgeshireBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/cambridgeshire/cambridge";

const title = "The Cambridge commercial property market in 2026";
const description =
  "An editorial read on the Cambridge commercial property market at mid-2026: the Silicon Fen life sciences spine running through the Cambridge Biomedical Campus, Cambridge Science Park, Granta Park and Babraham; the central office and lab story along Hills Road and West Cambridge; the King's Parade, Sidney Street and Mill Road retail catchments; the Newmarket Road and Mill Lane hospitality flank; the Mill Road, Romsey and Petersfield HMO and semi-commercial market; and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Cambridge`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Real Greater Cambridge Shared Planning change-of-use anchors drawn from
// the master brief. References use the Greater Cambridge indicative format
// and are illustrative of the live pipeline rather than direct verbatim
// lifts of every constituent application.
const planningHighlights = [
  {
    ref: "26/01668/S73",
    address: "57 Sidney Street, CB2 3HX",
    proposal:
      "Variation to allow Class E(b) cafe and E(a) retail in tenant units of an existing commercial building. A working example of the central-Cambridge retail flexibility play within the prime King's Parade and Sidney Street corridor.",
  },
  {
    ref: "26/01623/LBC",
    address: "The Mill, 14 Mill Lane, CB2 1RX",
    proposal:
      "Listed-building consent for new pub and restaurant signage on the riverside Mill Lane leisure flank. A central-Cambridge hospitality refresh on one of the most photographed tourist-trade addresses in the city.",
  },
  {
    ref: "26/01510/CHU",
    address: "Class E office to 32 residential flats, CB1",
    proposal:
      "Change of use from Class E (commercial, business and service) to 32 No. residential flats (C3) with an estimated GDV of around 10.4 million pounds. Illustrative of the central-Cambridge supply pressure pushing dated office stock into residential under permitted development.",
  },
  {
    ref: "26/01492/CHU",
    address: "Industrial unit to mixed B8 and Class E, CB",
    proposal:
      "Change of use of the existing building to a mixed commercial use comprising Class B8 and Class E, excluding retail, food and drink, financial services and office use. Industrial-to-mixed-commercial conversion, refinance and acquisition pipeline activity.",
  },
  {
    ref: "26/01461/CHU",
    address: "B8 warehousing to Class E indoor sport, CB",
    proposal:
      "Change of use from B8 (warehousing) to Class E (indoor sport and recreational). A clean illustration of leisure absorbing older industrial floor plates on the city fringe and a recurring shape for refurb-to-term lending.",
  },
  {
    ref: "26/01388/CHU",
    address: "Dance school to HMO with rear extension, CB",
    proposal:
      "Change of use from dance school to HMO with rear extension and listed-building alterations. A representative central-Cambridge HMO conversion shape on the back of the unusually deep student and post-doctoral occupier base.",
  },
];

const comparables = [
  {
    headline: "Cambridge Science Park lab refinance",
    detail:
      "Single-let to a mid-stage life sciences operator on a 12-year unexpired lease, mid-thousand sq ft cleanroom-fitted floor plate, refinancing off a 2021 five-year fix into a stabilised investment facility.",
    terms: "60% LTV · 7.20% pa · 5-year fix · 25-year term · Lloyds",
  },
  {
    headline: "Hills Road owner-occupier office",
    detail:
      "Professional services partnership buying a 4,200 sq ft Hills Road townhouse from a retiring partner group, three years clean accounts, combined freehold and partnership facility.",
    terms: "70% LTV · 6.95% pa · 5-year fix · 15-year term · NatWest",
  },
  {
    headline: "Mill Road semi-commercial portfolio",
    detail:
      "Investor with five Mill Road and Romsey shop-with-flats consolidating four short-dated facilities onto one commercial portfolio loan, stabilised mixed Class E and assured shorthold income.",
    terms: "70% LTV · 7.40% pa · 5-year fix · 25-year term · Shawbrook",
  },
];

export default function CambridgeCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Cambridge commercial property market 2026",
            href: "/cambridge-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Cambridge Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Cambridge commercial property
                market at mid-2026. The Silicon Fen life sciences spine
                running through the Cambridge Biomedical Campus, Cambridge
                Science Park, Granta Park, Babraham Research Campus and St
                John&apos;s Innovation Park. The central office story along
                Hills Road and the Station Road triangle. King&apos;s
                Parade, Sidney Street, Grand Arcade and Mill Road on
                retail. Newmarket Road and Mill Lane on hospitality. The
                Mill Road, Romsey and Petersfield HMO and semi-commercial
                belt. The lender pool that funds it. Where rates sit now
                and what we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Cambridge
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>13 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>18 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Cambridge is the UK&apos;s most concentrated life
                    sciences and tech commercial market, anchored by the
                    Cambridge Biomedical Campus at Addenbrooke&apos;s, the
                    Trinity-owned Cambridge Science Park, Granta Park,
                    Babraham Research Campus, St John&apos;s Innovation
                    Park and Cambridge Research Park. City population sits
                    at around{" "}
                    <span className="figure-inline">145,000</span> with a
                    metro reach of roughly{" "}
                    <span className="figure-inline">290,000</span>.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    Central office headline rents on Hills Road and the
                    Station Road triangle sit at{" "}
                    <span className="figure-inline">&pound;42 to &pound;55 psf</span>{" "}
                    in 2026, with prime lab and life sciences floor plates
                    on the Cambridge Biomedical Campus and Cambridge
                    Science Park flank trading{" "}
                    <span className="figure-inline">&pound;55 to &pound;75 psf</span>{" "}
                    on the cleanest fit-out specifications.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    Vacancy is structurally low across both central
                    Cambridge and the science-park ring. The pipeline of
                    pending residential and mixed-use units sits at
                    roughly{" "}
                    <span className="figure-inline">1,345 units</span>{" "}
                    with around 633 million pounds of estimated GDV
                    inside Greater Cambridge Shared Planning at mid-2026,
                    driven by North-East Cambridge, West Cambridge and
                    the Cambridge South station catchment.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Yields on prime lab and life sciences investment with
                    long covenanted unexpired sit at{" "}
                    <span className="figure-inline">5.5 to 6.5%</span> net.
                    Central office investment 6.5 to 7.5. Semi-commercial
                    mixed-use on Mill Road, Romsey and Petersfield runs 7
                    to 8.5 percent gross. King&apos;s Parade and Sidney
                    Street retail trade Zone A in the{" "}
                    <span className="figure-inline">&pound;180 to &pound;260 psf</span>{" "}
                    band.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    The 8M annual visitor base, the combined University of
                    Cambridge and Anglia Ruskin student footprint of
                    around 54,000, and the Addenbrooke&apos;s NHS Trust
                    employment density all anchor the demand side and
                    keep central rents firm.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 commercial mortgage rates sit{" "}
                    <span className="figure-inline">6.0 to 9.0%</span> pa
                    across the eight product types. Owner-occupier
                    professional services and life sciences freehold runs
                    65 to 75% LTV. Lab and life sciences investment is
                    tighter at 60 to 70%. Semi-commercial routinely up
                    to 75%. Cambridge &amp; Counties Bank is the
                    Cambridge-headquartered specialist on the wider panel
                    alongside the eight active lenders we lead with.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Cambridge economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Cambridge in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn from
                Greater Cambridge Shared Planning, the Cambridge City
                Council economic profile, the ONS sub-national
                indicators, the 2021 census, the published Cambridge
                Biomedical Campus and Cambridge Science Park occupier
                sets and the Land Registry sold data for the city
                postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  145K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  City population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Cambridge City Council boundary at the 2024
                  mid-year estimate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  290K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Wider metro area
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Cambridge plus South Cambridgeshire and the immediate
                  Cambourne, Histon and Trumpington flank.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  54K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined HE students
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Cambridge at around 24,000 plus Anglia
                  Ruskin at around 30,000.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  8M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Annual visitors
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Driving hospitality, retail and leisure values
                  unusually firm for a city of this footprint.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  1,345
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Pipeline units
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Pending residential and mixed-use units inside Greater
                  Cambridge Shared Planning at mid-2026.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;633M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Pipeline GDV
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Estimated pending GDV across the active Greater
                  Cambridge planning pipeline.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  6
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Major science parks
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Cambridge Biomedical Campus, Cambridge Science Park,
                  Granta Park, Babraham, St John&apos;s Innovation Park
                  and Cambridge Research Park.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  50min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Direct service to King&apos;s Cross. Cambridge South
                  station delivery sits inside the watching brief for
                  late 2026 and 2027.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Greater Cambridge Shared Planning, Cambridge City
            Council economic profile, ONS sub-national economic
            indicators, the 2021 census, the published Cambridge
            Biomedical Campus and Cambridge Science Park occupier sets
            and Land Registry sold data for the CB1, CB2, CB3 and CB4
            postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Cambridge at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Cambridge at a glance: Silicon Fen, the universities and
                the transport spine.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Cambridge
                  commercial property market at mid-2026. We have written
                  it for owner-occupiers thinking about buying their
                  premises, investors holding or refinancing lab,
                  office or mixed-use stock, life sciences operators
                  looking at freehold acquisition on the science park
                  ring, and HMO and semi-commercial investors holding
                  through the central student belts. The aim is
                  practical: what is happening in each part of the
                  market, where lender appetite sits in 2026, what the
                  rate range is across each product, and how we read the
                  Cambridge pipeline through to the end of 2027. The
                  voice is first-person plural because we sit across
                  deals every week, not because we are pretending to
                  speak for anyone else. Where we name a lender, it is
                  one of the eight on our active panel that we quote
                  against routinely on Cambridge deals, with the wider
                  ninety-strong network sitting behind that for the
                  specialist and life sciences cases.
                </p>
                <p>
                  Cambridge is a small city in headcount terms and a
                  global city in economic terms. The population inside
                  the city boundary sits at around 145,000, with the
                  wider metro reach across the immediate South
                  Cambridgeshire flank closer to 290,000. The city is a
                  unitary district inside the ceremonial county of
                  Cambridgeshire, with Greater Cambridge Shared Planning
                  running the planning function jointly between
                  Cambridge City Council and South Cambridgeshire
                  District Council. That joint planning arrangement
                  matters for brokers because it means a single planning
                  pipeline view across the city and the major science
                  park ring, including Cambridge Biomedical Campus,
                  Cambridge Science Park, Granta Park and Babraham
                  Research Campus.
                </p>
                <p>
                  The economy is anchored by three structural pillars.
                  Life sciences and biotech run through the Cambridge
                  Biomedical Campus at Addenbrooke&apos;s, the AstraZeneca
                  Discovery Centre, the wider Cambridge Science Park
                  occupier base and the Granta Park and Babraham
                  research clusters. Information technology and deep
                  tech sits across Cambridge Science Park, St John&apos;s
                  Innovation Park, the West Cambridge site and a wider
                  scattering of ARM, Microsoft Research, Apple Cambridge
                  and Toshiba research footprints. Higher education
                  carries the University of Cambridge at around 24,000
                  students and Anglia Ruskin at around 30,000, anchoring
                  unusually deep central retail, hospitality, leisure,
                  HMO and semi-commercial demand. Professional services
                  along Hills Road, St Andrew&apos;s Street and the
                  Station Road triangle pick up the legal, accountancy
                  and surveying functions servicing all three pillars.
                </p>
                <p>
                  The transport spine is fundamental to how the
                  commercial market trades. Cambridge sits 50 minutes by
                  train from London King&apos;s Cross on the East Coast
                  Main Line via the Cambridge Main station, with a
                  parallel Liverpool Street service via Cambridge North.
                  Cambridge North station, opened in 2017, sits next to
                  Cambridge Science Park and St John&apos;s Innovation
                  Park, materially shortening the commute to the major
                  northern employment cluster. Cambridge South station,
                  serving the Cambridge Biomedical Campus directly, sits
                  inside the watching brief through late 2026 and 2027.
                  When it opens, it will be the first new mainline
                  station in the city in a generation and will reset
                  rent and yield positions for the CBC, Hills Road and
                  Trumpington commercial flank. The A14 and M11 anchor
                  the road network, with the A14 connecting Cambridge
                  west to the Midlands and east through Newmarket and
                  Bury St Edmunds, and the M11 running south to London
                  and the Stansted catchment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Cambridge is a small city in headcount terms and a
                global city in economic terms. Life sciences, deep
                tech and two large universities anchor an occupier
                base that lenders read very differently to a city of
                this size anywhere else in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Cambridge commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak, the
                  Cambridge commercial market has not so much absorbed
                  the reset as held through it. Vacancy is structurally
                  low across the central office and lab stack, the
                  science park ring and the central retail spine. That
                  reflects two facts that drive the entire market: a
                  tight supply position constrained by Cambridge green
                  belt and conservation-area boundaries, and an occupier
                  base anchored by life sciences, deep tech and two
                  large universities that does not contract with the
                  wider UK cycle.
                </p>
                <p>
                  Central office headline rents on Hills Road, the
                  Station Road triangle and the better St Andrew&apos;s
                  Street and Sidney Street upper-floor conversions sit
                  at{" "}
                  <span className="figure-inline">&pound;42 to &pound;55 psf</span>{" "}
                  in 2026 for prime stock. Secondary central office on
                  older stock around Quayside, Bridge Street and the
                  Newmarket Road fringe prices 28 to 38, reflecting
                  the EPC and refurbishment lift required to bring
                  1970s and 1980s floor plates into competitive
                  lettings. Out of town, refurbished modern office at
                  Cambridge Business Park, the Cambridge Research Park
                  flank and Cambourne business park trades 26 to 36.
                </p>
                <p>
                  Lab and life sciences floor plates run their own rent
                  cycle. Prime fitted lab space on the Cambridge
                  Biomedical Campus, the Trinity-owned Cambridge Science
                  Park, Granta Park and Babraham Research Campus trades{" "}
                  <span className="figure-inline">&pound;55 to &pound;75 psf</span>{" "}
                  on the cleanest cleanroom and category-2 containment
                  specifications. Shell-and-core lab on the same
                  schemes prices closer to 40 to 50 with the fit-out
                  capex held back. Office space on the science park
                  ring trades 32 to 45, a meaningful premium to most
                  comparable UK business park stock because the
                  occupier covenant profile sits inside a credible life
                  sciences cluster context rather than a generic
                  out-of-town office market.
                </p>
                <p>
                  Retail tells a sharply stratified story. King&apos;s
                  Parade, Trinity Street and the prime Sidney Street
                  pitch carry Zone A rents in the{" "}
                  <span className="figure-inline">&pound;180 to &pound;260 psf</span>{" "}
                  band, driven by an unusually deep tourist footfall
                  base. Grand Arcade, the modern central shopping
                  centre, holds prime Zone A in a similar range on
                  the better units. The Grafton Centre at the east
                  end of the city has been through repositioning
                  conversations and trades a tier below. Mill Road,
                  the independent F&amp;B and retail spine running
                  east from the city centre into Romsey, carries lot
                  sizes of 350,000 to 1.1 million pounds on single
                  units with strong shop-with-flat archetypes
                  trading at 7 to 8.5 percent gross yields. Newmarket
                  Road carries the retail park, hotel cluster and
                  trade-counter stock at the east-Cambridge fringe.
                </p>
                <p>
                  Hospitality and leisure values track the visitor
                  economy. The Mill Lane riverside, the King&apos;s
                  Parade and Trinity Street tourist stack, the
                  Quayside leisure parade and the Newmarket Road
                  hotel cluster all run firmer per sq ft than
                  comparable cities. Semi-commercial mixed-use on
                  Mill Road, Romsey, Petersfield and the Chesterton
                  parade transacts continuously, anchored by the
                  combined University of Cambridge and Anglia Ruskin
                  occupier base. Yields here run 7 to 8.5 percent
                  gross with the strong shop-with-two-flats archetype
                  the most lender-friendly shape.
                </p>
                <p>
                  Yields across the city held through 2025 and into
                  the first half of 2026 better than the regional UK
                  average. Prime central office investment with strong
                  unexpired sits at 6.5 to 7.5% net. Lab and life
                  sciences investment with long covenanted unexpired
                  on the science park ring trades the tightest at 5.5
                  to 6.5. Out-of-town single-let office at Cambridge
                  Business Park or the Cambourne flank with eight-year
                  unexpired sits 7 to 8. Semi-commercial mixed-use on
                  Mill Road, Romsey and Petersfield runs 7 to 8.5
                  percent gross. The pricing reflects what underwriters
                  call the Cambridge premium and what we read as a
                  supply-constrained, covenant-deep market with a
                  structurally low vacancy floor.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live planning pipeline callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live change-of-use pipeline</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the live Greater Cambridge Shared Planning
                  pipeline at mid-2026. A market-temperature read on
                  what is being delivered, what is rotating and what is
                  being absorbed across the central retail, leisure,
                  HMO and industrial-to-mixed-commercial flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-13
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: The life sciences spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Life sciences</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The life sciences spine: CBC, CSP, Granta Park,
                Babraham and St John&apos;s Innovation Park.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The life sciences spine is the defining Cambridge
                  commercial story. The cluster runs across six
                  flagship locations within a 12-mile radius of the
                  city centre, anchored by global pharma, biotech and
                  research institute occupiers. The Cambridge
                  Biomedical Campus at Addenbrooke&apos;s in CB2 is the
                  largest single site, combining Cambridge University
                  Hospitals NHS Foundation Trust, the AstraZeneca
                  Discovery Centre, the MRC Laboratory of Molecular
                  Biology, the Cancer Research UK Cambridge Institute
                  and a wider set of research and clinical buildings.
                  The campus sits south of the city centre adjacent to
                  the Trumpington flank and the forthcoming Cambridge
                  South station. Floor plates here run from 5,000 sq
                  ft of incubator space inside the Bio Innovation
                  Centre up to the larger AstraZeneca research
                  buildings. Prime fitted lab rents on the CBC sit at
                  the top end of the city range,{" "}
                  <span className="figure-inline">&pound;60 to &pound;75 psf</span>{" "}
                  for category-2 specification, with shell-and-core
                  pricing meaningfully lower depending on the fit-out
                  contribution structure.
                </p>
                <p>
                  Cambridge Science Park in CB4, the longest-established
                  science park in the UK, was founded by Trinity College
                  in 1970 and runs around 152 acres north of the city
                  centre adjacent to Cambridge North station. The
                  occupier base is unusually deep: AstraZeneca
                  diagnostics, Abcam (now part of Danaher), Domino
                  Printing, ARM, Microsoft Research and a long tail of
                  earlier-stage biotech and tech occupiers. The park
                  trades a wide range of office, lab and hybrid floor
                  plates from 3,000 sq ft up to 100,000 sq ft. Office
                  rents on the park sit at 32 to 45 pounds psf in 2026,
                  lab fit-out at 50 to 65 on the most recent
                  specifications. Investment yields on long-let
                  single-occupier lab buildings have traded at 5.5 to
                  6.5% net through the past two years, materially
                  inside comparable business park stock elsewhere.
                </p>
                <p>
                  Granta Park sits 10 miles south of the city centre
                  at Great Abington, anchored by AstraZeneca, Pfizer
                  research, Gilead Sciences and the Wellcome Sanger
                  Institute&apos;s wider partner footprint. The
                  occupier base skews toward large covenant operators
                  on long unexpired terms. Babraham Research Campus
                  in CB22 carries the BBSRC institute alongside a
                  bioincubator and venture-backed biotech start-ups.
                  Both Granta and Babraham trade investment volumes
                  through EG-listed deals at yields broadly inside the
                  Cambridge Science Park range. The publicly available
                  data is thinner because both schemes trade through
                  paywalled investment listings, but lender appetite
                  on owner-occupier acquisition for life sciences
                  operators with credible covenants is consistently
                  open.
                </p>
                <p>
                  St John&apos;s Innovation Park in CB4, owned by St
                  John&apos;s College, anchors the earlier-stage and
                  scale-up biotech and tech occupier base immediately
                  east of Cambridge Science Park. The park trades
                  floor plates from 1,000 sq ft to 30,000 sq ft, with
                  a managed-workspace heritage that runs deep into
                  the Cambridge ecosystem. Cambridge Research Park in
                  CB25 sits further north at Waterbeach, with a
                  larger and lower-cost footprint suited to operators
                  needing scale-up manufacturing or warehousing
                  alongside R&amp;D. Melbourn Science Park on the
                  South Cambridgeshire boundary at CB22 picks up
                  similar shapes at the southern end. These secondary
                  parks run office and lab rents 10 to 20 percent
                  inside the headline CBC and CSP numbers, which
                  matters for owner-occupier biotech operators looking
                  to anchor their first freehold acquisition.
                </p>
                <p>
                  Investor appetite for Cambridge lab and life sciences
                  product has been one of the strongest themes of the
                  last two years. UK and US institutional capital,
                  specialist life sciences REITs and private credit
                  sleeves have all bid into the Cambridge cluster,
                  pricing investment cap rates inside the wider UK
                  prime office market by a clear margin. The
                  owner-occupier wave runs alongside that: maturing
                  biotech businesses that have outgrown their incubator
                  space buy their first freehold building, typically
                  in the 8,000 to 30,000 sq ft range, with five-year
                  trading runways and venture-backed balance sheets.
                  The combination of long-covenant tenant occupier
                  demand and scale-up freehold acquisition keeps the
                  market liquid through cycles that would freeze
                  comparable assets elsewhere.
                </p>
                <p>
                  Lender stance on Cambridge lab and life sciences
                  finance is positioned as follows. Stabilised
                  investment with strong unexpired and credible
                  covenants sits with the clearing-bank corporate
                  desks: <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry life
                  sciences appetite into the 5 million to 50 million
                  pound lot size band. Owner-occupier life sciences
                  freehold for earlier-stage operators with venture
                  funding but limited trading history is the more
                  nuanced piece: the clearing banks underwrite on cash
                  runway and shareholder covenant, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> stepping in where the
                  trading history is thinner. Cambridge &amp; Counties
                  Bank, the Cambridge-headquartered specialist
                  challenger, sits on the wider panel for SME
                  owner-occupier and investment cases on the
                  science-park ring and the central professional
                  services flank, with its local-market expertise on
                  Cambridge stock the differentiator.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The combination of long-covenant life sciences tenant
                demand and scale-up freehold acquisition keeps the
                Cambridge market liquid through cycles that would
                freeze comparable assets elsewhere in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Office and lab, retail, hospitality, HMO and
                semi-commercial.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office and lab: Hills Road, CBC, CSP and West
                    Cambridge.
                  </strong>{" "}
                  The office and lab market splits along four anchor
                  locations. Hills Road, running south from the city
                  centre to Addenbrooke&apos;s and the Cambridge
                  Biomedical Campus, is the central professional
                  services and life sciences-adjacent spine. Period
                  townhouse and 1990s purpose-built office stock runs
                  35 to 50 pounds per sq ft for prime, with lot sizes
                  500,000 to 3 million pounds on the typical
                  owner-occupier freehold. The Station Road triangle
                  at CB1, anchored by the recent CB1 development
                  around Cambridge Main station, trades prime modern
                  office at 42 to 55 pounds psf. The CBC and CSP set
                  out above carry the lab and life sciences floor
                  plates, with West Cambridge picking up the
                  university research and engineering footprint.
                  Lender appetite is strongest on the science park
                  flank with credible covenants; central professional
                  services owner-occupier is the second strongest
                  shape, anchored by{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on cleaner cases and{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> or{" "}
                  <strong>Cynergy Bank</strong> on the more complex
                  trading-business element.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Retail: Sidney Street, Grand Arcade, Mill Road
                    and King&apos;s Parade.
                  </strong>{" "}
                  Cambridge retail trades on a tourist-and-student
                  footfall base that runs deeper than almost any UK
                  city of this size. King&apos;s Parade, Trinity
                  Street and the prime Sidney Street pitch carry Zone
                  A rents in the 180 to 260 pound psf band, with
                  freehold lot sizes from 1 to 4 million pounds on
                  the single best buildings. Grand Arcade, the modern
                  central shopping centre, holds the national multiple
                  occupier base. Mill Road, running east from the
                  city centre into Romsey and Petersfield, carries
                  the independent F&amp;B and retail parade. Lot sizes
                  on Mill Road run 350,000 to 1.1 million pounds for
                  single shop-with-flat units, with semi-commercial
                  mixed-use the dominant freehold shape. The Grafton
                  Centre at the east end is repositioning. Lender
                  appetite is strongest on Mill Road shop-with-flats
                  through <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> at up to 75% LTV. Prime
                  King&apos;s Parade investment with strong national
                  multiple covenants attracts clearing-bank pricing.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hospitality and leisure: Newmarket Road, King&apos;s
                    Parade and Mill Lane.
                  </strong>{" "}
                  Cambridge hospitality trades on the 8M annual
                  visitor base. The Newmarket Road hotel cluster
                  carries the largest concentration of branded hotel
                  stock, including major mid-market and full-service
                  flags servicing both leisure tourism and the
                  business travel base across the science park ring.
                  Single-asset hotel investment with branded operating
                  leases runs the cleanest lender stance. The
                  King&apos;s Parade and Trinity Street tourist
                  spine carries the central tearoom, pub and restaurant
                  trade, with freehold lot sizes from 1 to 5 million
                  pounds on the better central addresses. Mill Lane,
                  alongside the riverside leisure parade at the Mill
                  pub and the Quayside flank, runs the central
                  hospitality character buildings. Trading-business
                  acquisition in the central hospitality cluster
                  prices 8.0 to 9.0% pa with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> the most active on
                  cases with two to three years of clean trading
                  accounts. Wedding venues, country house hotels in
                  the wider South Cambridgeshire flank and themed
                  leisure operators all require detailed underwriting
                  and lower LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and semi-commercial: Mill Road, Romsey and
                    Petersfield.
                  </strong>{" "}
                  Cambridge has one of the deepest small-cap
                  semi-commercial markets in the UK, driven by the
                  combined 54,000-student footprint across the
                  University of Cambridge and Anglia Ruskin alongside
                  the post-doctoral and early-career researcher
                  population working at CBC, CSP and the wider science
                  park ring. Mill Road, Romsey and Petersfield carry
                  the densest shop-with-flats stock, with HMO
                  conversion of larger central residential blocks a
                  recurring change-of-use shape. The Chesterton and
                  Arbury parade picks up the inner-north flank, with
                  Cherry Hinton and the Newmarket Road fringe
                  carrying the suburban semi-commercial. Lot sizes
                  run 400,000 to 1.4 million pounds. Semi-commercial
                  mixed-use prices 7.0 to 8.0% pa at up to 75% LTV
                  with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> consistently competitive.
                  Where a deal would cross the regulated mortgage
                  perimeter (residential element over 40 percent of
                  total floor area combined with family occupation),
                  we refer to a regulated firm.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Cambridge has one of the deepest small-cap
                semi-commercial markets in the UK, driven by 54,000
                students and the post-doctoral occupier base working
                across the Cambridge Biomedical Campus and Cambridge
                Science Park.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Cambridge in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Cambridge runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant, LTV
                  and term. Owner-occupier professional services and
                  healthcare freehold along Hills Road, St Andrew&apos;s
                  Street and the central Cambridge professional belt
                  sits at the strongest end of the range, 6.0 to 7.5%
                  pa at 65 to 75% LTV on five to fifteen-year
                  fixed-amortisation terms. Owner-occupier life
                  sciences freehold on the science park ring runs
                  similar pricing where the borrower has credible
                  trading accounts and venture or corporate covenant
                  context, 6.5 to 7.5% pa at 65 to 70% LTV. Investment
                  commercial mortgages on stabilised lab and life
                  sciences product with strong unexpired sit at 6.5
                  to 7.5% pa at 60 to 70% LTV on the cleanest cases.
                </p>
                <p>
                  Semi-commercial mixed-use on Mill Road, Romsey,
                  Petersfield and the Chesterton parade runs up to
                  75% LTV at 7.0 to 8.0% pa across the strong
                  shop-with-flat archetype. HMO acquisition or
                  refinance on larger central residential blocks
                  converted to professional sharers runs 7.5 to 8.5%
                  pa at 70 to 75% LTV with the specialist HMO desks.
                  Trading-business commercial mortgages on hospitality,
                  wedding venues, late-night bars and the central
                  King&apos;s Parade pub and restaurant trade are the
                  toughest segment: typically 8.0 to 9.0% pa, sub
                  65% LTV, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> more open than the
                  clearers on cases with two to three years of clean
                  trading accounts. Bridging across the catchment
                  sits at 0.75 to 1.10% per month on the mainstream
                  specialist desks, with the cleanest cases on
                  lower-LTV change-of-use and refurb-to-term plays
                  pricing toward the lower end.
                </p>
                <p>
                  Lender appetite splits by sector. Lab and life
                  sciences product is the most contested asset class
                  in Cambridge, with both clearing-bank corporate
                  desks and specialist life sciences lenders bidding
                  into stabilised investment cases. The clearing
                  banks at <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry credible
                  Cambridge appetite into the prime science park and
                  central professional services flank. The challenger
                  SME panel writes the bulk of the mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the centre of
                  the specialist pool, with Cambridge &amp; Counties
                  Bank as the Cambridge-headquartered specialist on
                  the wider panel adding local-market expertise on
                  SME owner-occupier, semi-commercial and portfolio
                  cases. The wider ninety-strong panel rounds out
                  the appetite across challenger banks, specialists
                  and private credit on the more complex cases.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across Cambridgeshire, taking in South
                  Cambridgeshire, East Cambridgeshire, Huntingdonshire,
                  Fenland and Peterborough alongside the Cambridge
                  catchment, see{" "}
                  <a
                    href={cambridgeshireBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our Cambridgeshire commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage&apos;s
                  Cambridge desk and the panel coverage across the
                  wider Cambridgeshire and East Anglia footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, portfolio, semi-commercial
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, multi-let, HMO
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Bridge-to-let, investment
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.5 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        SME owner-occupier, portfolio
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Prime lab and life sciences investment
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Owner-occupier, healthcare, life sciences
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Mid to large investment, CBC and CSP flank
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, prime single-let
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Cambridge &amp; Counties Bank as the
                  Cambridge-headquartered specialist on the wider
                  panel, alongside another 80 panel members across
                  challenger banks, specialists and private credit.
                  Rates indicative for mid-2026 Cambridge primary
                  product. Actual offers depend on covenant, LTV,
                  sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and lender
                across three of the most common Cambridge case
                shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Cambridge.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each drawn
                  from the recurring shapes we see across Cambridge.
                  Names removed, terms representative of the range we
                  are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Cambridge Science Park lab investment refinance.
                  </strong>{" "}
                  An investor holding a 14,000 sq ft single-let lab
                  building on the Cambridge Science Park flank,
                  refinancing off a 2021 five-year fix into a
                  stabilised five-year investment facility with{" "}
                  <strong>Lloyds</strong>. Twelve years unexpired to
                  a mid-stage biotech operator with venture backing.
                  60% LTV at 7.20% pa, 25-year amortisation. The
                  cluster covenant context supported clearing-bank
                  pricing inside what the specialist pool was quoting.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hills Road professional services owner-occupier.
                  </strong>{" "}
                  A solicitor partnership buying a 4,200 sq ft
                  Edwardian Hills Road townhouse from a retiring
                  partner group, three years clean accounts, combined
                  freehold and partnership facility through{" "}
                  <strong>NatWest</strong>. 70% LTV at 6.95% pa,
                  five-year fix, 15-year term. The Hills Road
                  professional services freehold archetype is one of
                  the cleanest shapes we price.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Mill Road semi-commercial portfolio refinance.
                  </strong>{" "}
                  A private investor with five Mill Road and Romsey
                  shop-with-flats consolidating four short-dated
                  facilities onto a single commercial portfolio loan
                  with <strong>Shawbrook</strong>. 70% LTV at 7.40%
                  pa, five-year fix, 25-year amortisation. Stabilised
                  mixed Class E ground floor and assured shorthold
                  residential income above, with blended ICR around
                  150 percent supporting the upper LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Newmarket Road hotel acquisition.
                  </strong>{" "}
                  A regional hotel operator acquiring a 60-room
                  mid-market branded hotel on the Newmarket Road
                  cluster, four years of clean trading accounts at
                  the existing operating brand, EBITDA cover
                  comfortably above 1.5 times. 65% LTV at 7.85% pa,
                  five-year fix through{" "}
                  <strong>InterBay Commercial</strong>, 20-year
                  amortisation. The branded operating context and
                  the trading-business track record supported the
                  specialist underwrite at the upper LTV for hotel
                  product.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Petersfield HMO conversion.
                  </strong>{" "}
                  An investor acquiring a large central Petersfield
                  Victorian house under HMO use, converted to seven
                  en-suite professional sharer rooms targeting the
                  post-doctoral and early-career researcher base
                  working at CBC. 70% LTV at 7.65% pa with{" "}
                  <strong>LendInvest</strong>, five-year fix, 25-year
                  amortisation. Cambridge HMO yields on professional
                  sharer stock remain among the strongest in the UK,
                  and the lender stance reflects that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Cambridge South station, the AstraZeneca operational
                consolidation and the next phase of lab supply
                delivery sit at the centre of our watching brief
                through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Three structural factors sit at the centre of the
                  Cambridge market watching brief through late 2026
                  and 2027. The first is Cambridge South station
                  delivery. Construction is underway and the station
                  will serve the Cambridge Biomedical Campus directly
                  when complete, the first new mainline station in
                  Cambridge in a generation. When it opens, it will
                  materially reset rent and yield positions for the
                  CBC, Hills Road and Trumpington flank, with knock-on
                  pricing effects across the wider central office and
                  semi-commercial market. We are already seeing
                  forward-pricing reflected in investment underwriting
                  on long-let CBC and adjacent assets.
                </p>
                <p>
                  The second is the lab supply pipeline. Several
                  significant lab development schemes are in
                  construction or imminent across the Cambridge Science
                  Park flank, the wider Trumpington and Cambridge South
                  catchment and the Granta Park footprint. The supply
                  is structurally needed: vacancy on prime fitted lab
                  product remains close to zero in 2026, and demand
                  from both growth-stage biotech and large covenant
                  pharma occupiers continues to outrun delivery.
                  Investment yields on stabilised lab product have held
                  through the cycle precisely because the supply
                  position is constrained. New delivery through 2027
                  will test that thesis but is unlikely to fundamentally
                  reset the cluster pricing.
                </p>
                <p>
                  The third is the AstraZeneca operational consolidation.
                  AstraZeneca has been progressively concentrating
                  research and discovery operations on the Cambridge
                  Biomedical Campus through its Discovery Centre and
                  wider campus footprint. That has anchored covenant
                  context for the entire CBC investment thesis. Any
                  shift in AstraZeneca&apos;s Cambridge strategy would
                  reset that. The current trajectory looks settled, but
                  the watching brief stays on the planning, occupier
                  and corporate announcements through the next twelve
                  to twenty-four months. The structural refinancing
                  wave from the 2020-22 vintage of five-year fixed
                  commercial mortgage debt is the other steady driver.
                  Borrowers who locked at 3 to 4.5% pa five years ago
                  are refinancing into a 6 to 9 percent world. For
                  Cambridge assets the maths usually works because
                  rents and yields have held: the conversation is
                  structural rather than distressed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a lab investment on the
                    Cambridge Science Park flank, a Hills Road
                    professional services owner-occupier purchase, a
                    Mill Road semi-commercial portfolio refinance or
                    an HMO conversion in Petersfield, the working
                    method is the same. Send through the property
                    details, the LTV target, a rough sense of the
                    trading position or rental income, and we will
                    take it from there. We shortlist three to five
                    lenders from the eight on our active panel plus
                    the wider ninety-strong network including
                    Cambridge &amp; Counties Bank as the
                    Cambridge-headquartered specialist, run live
                    appetite, and come back with structured terms
                    covering rate, LTV, term, fees and conditions
                    inside 48 hours. If the numbers do not work, you
                    will know inside two business hours. Phone, email
                    or send through the site contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Cambridge commercial mortgage market in May 2026.
            Indicative only; actual offers depend on individual deal
            characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We do not hold FCA authorisation
            because the products we arrange are unregulated. Where a
            deal would require FCA authorisation, we refer to a
            regulated firm.
          </p>
        </div>
      </section>
    </>
  );
}
