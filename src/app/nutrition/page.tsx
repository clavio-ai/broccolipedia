import type { Metadata } from 'next'
import Link from 'next/link'
import NutritionTable from '@/components/NutritionTable'

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export const metadata: Metadata = {
  title: 'Broccoli Nutrition: Complete Facts, Vitamins, and What the Science Says',
  description:
    'Full USDA nutrition breakdown for broccoli — calories, protein, fiber, vitamins C and K, sulforaphane, and clinical research on health benefits. All data cited.',
  openGraph: {
    title: 'Broccoli Nutrition: Complete Facts, Vitamins, and What the Science Says',
    description: 'USDA-verified nutrition data plus peer-reviewed research on sulforaphane, gut health, and cancer prevention.',
  },
}

const SPOKE_PAGES = [
  { title: 'Health Benefits of Broccoli', href: '/nutrition/benefits', vol: '7,400/mo', description: 'What sulforaphane, I3C, and lutein actually do in your body — with clinical citations.' },
  { title: 'Calories in Broccoli', href: '/nutrition/calories', vol: '7,900/mo', description: '34 kcal per 100g raw. Full breakdown by serving size and cooking method.' },
  { title: 'Protein in Broccoli', href: '/nutrition/protein', vol: '5,200/mo', description: '2.82g per 100g. How it compares to other vegetables and whether it counts as a protein source.' },
  { title: 'Broccoli Fiber Content', href: '/nutrition/fiber', vol: '5,200/mo', description: '2.6g per 100g. Soluble vs insoluble, and the Penn State 2023 gut lining study.' },
  { title: 'Carbs in Broccoli (Keto?)', href: '/nutrition/carbs', vol: '5,000/mo', description: '6.64g total carbs, 4.04g net. Glycemic index analysis and keto verdict.' },
  { title: 'Vitamins in Broccoli', href: '/nutrition/vitamins', vol: '2,900/mo', description: '99% DV Vitamin C, 85% DV Vitamin K — the full vitamin profile.' },
  { title: 'Broccoli Sprouts: 20–50× More Potent', href: '/nutrition/sprouts', vol: '24,000/mo', description: 'The Johns Hopkins 1997 PNAS discovery that caused a global broccoli seed shortage.' },
  { title: 'Raw vs Cooked Broccoli: Nutrients Compared', href: '/nutrition/raw-vs-cooked', vol: '5,000/mo', description: 'The chop-and-wait trick, why microwaving beats boiling, and what cooking destroys.' },
]

export default function NutritionHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> / <span className="text-deepForest">Nutrition</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Broccoli Nutrition: Complete Facts, Vitamins, and What the Science Says
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8 max-w-2xl">
        Every number on this page comes from USDA FoodData Central (FDC ID 170379) or peer-reviewed journals.
        No estimates, no approximations.
      </p>

      {/* Key facts banner */}
      <div className="bg-greenTint rounded-xl p-5 border border-leaf mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '34 kcal', label: 'per 100g raw' },
          { value: '99% DV', label: 'Vitamin C' },
          { value: '85% DV', label: 'Vitamin K' },
          { value: '2.6g', label: 'Dietary Fiber' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-serif font-bold text-2xl text-forest">{stat.value}</div>
            <div className="text-xs text-sage mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* USDA Nutrition Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Full Nutrition Facts (USDA)
          </h2>
          <NutritionTable />
          <p className="text-xs text-sage mt-3">
            Source: <a href="https://nutritiondatahub.com/food/broccoli-raw-170379" className="underline text-forest" target="_blank" rel="noopener noreferrer">USDA FoodData Central, FDC ID 170379</a>
          </p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Key Compounds Beyond Macros
          </h2>

          <div className="space-y-4">
            <div className="fact-block">
              <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Sulforaphane</div>
              <p className="text-sm text-deepForest leading-relaxed">
                Produced when broccoli is chopped or chewed — myrosinase enzyme converts glucoraphanin into sulforaphane.
                Activates Nrf2/Keap1 detoxification pathways. The most extensively studied chemopreventive compound in any vegetable.
              </p>
              <p className="text-xs text-sage mt-2">Source: <a href="https://www.mdanderson.org/cancerwise/sulforaphane-benefits--how-broccoli-and-brussels-sprouts-may-help-reduce-cancer-risk.h00-159781968.html" className="underline text-forest" target="_blank" rel="noopener noreferrer">MD Anderson Cancer Center</a></p>
            </div>

            <div className="fact-block">
              <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Lutein + Zeaxanthin (1,400 mcg/100g)</div>
              <p className="text-sm text-deepForest leading-relaxed">
                The only dietary carotenoids that accumulate in the retina&apos;s macula. High dietary intake reduces
                age-related macular degeneration (AMD) risk by up to 43%.
              </p>
              <p className="text-xs text-sage mt-2">Source: BrightFocus Foundation</p>
            </div>

            <div className="fact-block">
              <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Indole-3-Carbinol (I3C)</div>
              <p className="text-sm text-deepForest leading-relaxed">
                Influences estrogen metabolism. Under active investigation for cancer-related pathways (Akt-NF-kB, BRCA expression).
                Not proven to treat cancer in humans — active research only.
              </p>
              <p className="text-xs text-sage mt-2">Source: Memorial Sloan Kettering Cancer Center</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vitamin C vs orange callout */}
      <div className="bg-deepForest text-white rounded-xl p-6 mb-10">
        <div className="font-serif font-bold text-2xl mb-2">68% More Vitamin C Than an Orange</div>
        <p className="text-green-200 text-sm leading-relaxed">
          Raw broccoli contains 89.2mg of Vitamin C per 100g. A raw orange has 53mg per 100g.
          Caveat: boiling strips roughly half — steam or eat raw to preserve it.
        </p>
        <p className="text-xs text-green-400 mt-2">Source: healwithfood.org / USDA SR</p>
      </div>

      {/* Clinical Research summary */}
      <div className="mb-12">
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">What the Research Shows</h2>
        <p className="text-deepForest leading-relaxed mb-4">
          As of 2024, a meta-analysis identified 202 unique clinical trials on broccoli and sulforaphane,
          with 84 meeting clinical intervention criteria — making this one of the best-studied vegetables in nutrition science.
          (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12451241" className="underline text-forest" target="_blank" rel="noopener noreferrer">PMC 2024</a>)
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-4 py-2 text-left">Study</th>
                <th className="px-4 py-2 text-left">Finding</th>
                <th className="px-4 py-2 text-left">Published</th>
              </tr>
            </thead>
            <tbody>
              {[
                { study: 'OHSU Knight Cancer Institute 2015', finding: 'PSA doubling time increased 6.1 → 9.6 months in prostate cancer patients given sulforaphane extract', pub: 'Investigational New Drugs' },
                { study: 'Penn State 2023 (mouse)', finding: 'Broccoli-fed mice showed significantly stronger gut lining (more goblet + Paneth cells)', pub: 'Laboratory Investigation' },
                { study: 'Hudson Institute 2023', finding: 'Sulforaphane shifts gut microbiota to produce more anti-inflammatory metabolites', pub: 'Journal of Functional Foods' },
                { study: 'Clinical Nutrition 2018', finding: 'IL-6 inflammation marker fell from 4.76 to 2.11 pg/mL after 10 weeks of broccoli sprout consumption', pub: 'Clinical Nutrition' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                  <td className="px-4 py-2 text-deepForest font-medium border-b border-greenTint">{row.study}</td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint">{row.finding}</td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint italic">{row.pub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Spoke links */}
      <div>
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Go Deeper</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SPOKE_PAGES.map((spoke, i) => (
            <Link
              key={i}
              href={spoke.href}
              className="group block bg-white border border-greenTint rounded-xl p-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-serif font-semibold text-base text-deepForest group-hover:text-forest transition-colors leading-snug">
                  {spoke.title}
                </h3>
                <span className="text-xs text-sage flex-shrink-0 ml-2">{spoke.vol}</span>
              </div>
              <p className="text-sm text-sage leading-relaxed">{spoke.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
