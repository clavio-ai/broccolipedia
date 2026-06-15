import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli Glossary: 12 Key Terms Defined',
  description: 'Definitions of sulforaphane, glucoraphanin, myrosinase, and 9 other key broccoli nutrition terms — cited and explained clearly.',
}

const terms = [
  {
    name: 'Sulforaphane',
    definition: 'Sulforaphane is a bioactive isothiocyanate compound formed when glucoraphanin is broken down by the enzyme myrosinase. It is the compound in broccoli most studied for cancer-preventive properties, with research published in journals including PNAS, AACR, and the Journal of Clinical Oncology.',
    whyItMatters: 'Johns Hopkins research (1997, PNAS) established that broccoli sprouts contain 20-50x more glucoraphanin than mature broccoli, producing proportionally more sulforaphane.',
    source: 'Fahey JW et al., PNAS 1997',
  },
  {
    name: 'Glucoraphanin',
    definition: 'Glucoraphanin is the glucosinolate precursor to sulforaphane, stored in intact broccoli cells. When broccoli tissue is damaged by cutting or chewing, myrosinase is released and converts glucoraphanin to sulforaphane.',
    whyItMatters: 'Broccoli sprouts are the richest dietary source of glucoraphanin. Heating broccoli before the conversion occurs destroys myrosinase and prevents sulforaphane formation.',
    source: 'USDA Agricultural Research Service',
  },
  {
    name: 'Myrosinase',
    definition: 'Myrosinase is a plant enzyme that catalyzes the conversion of glucosinolates (like glucoraphanin) to isothiocyanates (like sulforaphane). In intact broccoli, myrosinase and glucoraphanin are stored in separate cellular compartments. Cell damage brings them together.',
    whyItMatters: 'Heat above approximately 140°F (60°C) denatures myrosinase, halting sulforaphane production. The chop-and-wait method (cutting, waiting 40 minutes) allows conversion before cooking heat destroys the enzyme.',
    source: 'Dinkova-Kostova AT, Fahey JW. Biochemical Journal, 2012',
  },
  {
    name: 'Isothiocyanate',
    definition: 'Isothiocyanates are a family of sulfur-containing compounds produced when glucosinolates are hydrolyzed by myrosinase. Sulforaphane is an isothiocyanate. They are responsible for the pungent flavor in broccoli and other cruciferous vegetables.',
    whyItMatters: 'Isothiocyanates activate the Nrf2 pathway in human cells, inducing the production of Phase 2 detoxification enzymes that protect cells from carcinogens.',
    source: 'Zhang Y et al., PNAS 1992',
  },
  {
    name: 'Indole-3-Carbinol (I3C)',
    definition: 'Indole-3-carbinol (I3C) is a compound produced when the glucosinolate glucobrassicin is broken down. Found in all cruciferous vegetables, I3C and its metabolite DIM (diindolylmethane) are studied for their effects on estrogen metabolism.',
    whyItMatters: 'I3C appears in laboratory studies to influence hormonal pathways. It is distinct from sulforaphane — a separate bioactive compound in broccoli with different mechanisms of action.',
    source: 'NIH National Cancer Institute, Drug Information Summary',
  },
  {
    name: 'Lutein',
    definition: 'Lutein is a carotenoid pigment found in broccoli, kale, and other leafy greens. Per 100g, raw broccoli contains approximately 1,403 micrograms of lutein (USDA FDC ID 170379). Cooking increases lutein bioavailability by breaking down cell walls.',
    whyItMatters: 'Lutein accumulates in the macula and lens of the eye. Research links higher lutein intake to reduced risk of age-related macular degeneration and cataracts.',
    source: 'USDA FoodData Central FDC ID 170379',
  },
  {
    name: 'Zeaxanthin',
    definition: 'Zeaxanthin is a carotenoid that co-occurs with lutein in broccoli. It is structurally similar to lutein and also concentrates in the macula of the eye, where it functions as a light filter and antioxidant.',
    whyItMatters: 'Clinical studies including the AREDS2 trial (National Eye Institute) found that lutein and zeaxanthin supplementation reduced progression of advanced age-related macular degeneration by 25%.',
    source: 'AREDS2 Research Group, JAMA Ophthalmology 2013',
  },
  {
    name: 'Kaempferol',
    definition: 'Kaempferol is a flavonoid antioxidant found in broccoli, kale, spinach, and other plants. It is a polyphenol with multiple hydroxyl groups that enable it to neutralize free radicals.',
    whyItMatters: 'Epidemiological studies have linked higher dietary kaempferol intake to reduced risk of chronic inflammatory conditions. It inhibits lipid peroxidation in laboratory models.',
    source: 'Calderón-Montaño JM et al., Mini Reviews in Medicinal Chemistry 2011',
  },
  {
    name: 'Brassica oleracea',
    definition: 'Brassica oleracea is the species of wild Mediterranean cabbage from which broccoli, cauliflower, kale, Brussels sprouts, kohlrabi, and cabbage were all selectively bred. The species is native to coastal southern and western Europe.',
    whyItMatters: 'Understanding that broccoli shares a species with kale and cauliflower explains why these vegetables share similar glucosinolate profiles and nutritional characteristics.',
    source: 'Plants of the World Online (Royal Botanic Gardens, Kew)',
  },
  {
    name: 'Floret',
    definition: 'A floret is one of the small individual flower buds that make up the broccoli head (the crown). Each floret consists of a small stem and a cluster of tightly packed unopened flower buds. The crown is made up of dozens to hundreds of florets.',
    whyItMatters: 'Florets have slightly higher glucoraphanin concentrations than the stalk. For maximum sulforaphane, prioritize the floret portion when cutting broccoli.',
    source: 'Moreno DA et al., Journal of Chromatography A 2006',
  },
  {
    name: 'Rabe (Rapini)',
    definition: 'Broccoli rabe (also called rapini) is a distinct plant — Brassica rapa — rather than a variety of broccoli (Brassica oleracea). It has thinner stems, smaller florets, and a more bitter flavor due to higher levels of glucosinolates relative to its size.',
    whyItMatters: 'Rabe is often confused with broccoli but is more closely related to turnips. Its bitterness is a signal of high glucosinolate content, making it nutritionally potent but more pungent than standard broccoli.',
    source: 'USDA FoodData Central FDC ID 169237',
  },
  {
    name: 'Broccolini',
    definition: 'Broccolini is a hybrid of broccoli (Brassica oleracea var. italica) and Chinese broccoli (Brassica oleracea var. alboglabra), developed in Japan in the 1990s by the Sakata Seed Corporation. It has thinner, longer stems and smaller, loosely-packed florets.',
    whyItMatters: 'Broccolini is milder and sweeter than standard broccoli due to lower glucosinolate concentrations. Cook times are shorter — 2-3 minutes steam or 12-15 minutes roast.',
    source: 'Sakata Seed Corporation; USDA Plant Database',
  },
]

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Broccoli Glossary',
  description: 'Definitions of key broccoli nutrition and botanical terms',
  numberOfItems: terms.length,
  itemListElement: terms.map((term, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'DefinedTerm',
      name: term.name,
      description: term.definition,
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'BroccoliPedia Glossary',
        url: 'https://broccolipedia.com/glossary',
      },
    },
  })),
}

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">Broccoli Glossary</h1>
        <p className="text-lg text-sage leading-relaxed mb-8">
          Definitions of key terms in broccoli nutrition science, botany, and food chemistry. All citations are from peer-reviewed research or primary data sources.
        </p>

        <div className="space-y-6">
          {terms.map((term) => (
            <div key={term.name} id={term.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')} className="border border-greenTint rounded-xl p-5">
              <h2 className="font-serif font-bold text-xl text-deepForest mb-2">{term.name}</h2>
              <p className="text-deepForest leading-relaxed mb-3">{term.definition}</p>
              <div className="bg-greenTint rounded-lg p-3 mb-2">
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">Why It Matters: </span>
                <span className="text-sm text-deepForest">{term.whyItMatters}</span>
              </div>
              <p className="text-xs text-sage italic">Source: {term.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-greenTint pt-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/nutrition/sprouts" className="text-forest text-sm font-medium hover:underline">Broccoli Sprouts Guide</Link>
            <Link href="/nutrition/raw-vs-cooked" className="text-forest text-sm font-medium hover:underline">Raw vs Cooked</Link>
            <Link href="/what-is-broccoli" className="text-forest text-sm font-medium hover:underline">What Is Broccoli?</Link>
            <Link href="/facts/is-broccoli-man-made" className="text-forest text-sm font-medium hover:underline">Is Broccoli Man-Made?</Link>
          </div>
        </div>
      </div>
    </>
  )
}
