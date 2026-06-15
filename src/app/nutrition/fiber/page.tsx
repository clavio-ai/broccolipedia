import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli Fiber Content: 2.6g per 100g and Why It Matters',
  description:
    'Broccoli contains 2.6g of dietary fiber per 100g — soluble and insoluble. What that means for gut health, the Penn State 2023 study, and how it compares to other vegetables.',
  keywords: ['broccoli fiber', 'does broccoli have fiber', 'fiber in broccoli', 'broccoli gut health'],
}

export default function FiberPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/nutrition" className="hover:text-forest">Nutrition</Link> /{' '}
        <span className="text-deepForest">Fiber</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Broccoli Fiber Content: 2.6g per 100g and Why It Matters
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8">
        Broccoli provides <strong className="text-deepForest">2.6 grams of dietary fiber per 100g</strong> — 9% of the daily value — from USDA FoodData Central (FDC ID 170379). That includes both soluble fiber (feeds gut bacteria) and insoluble fiber (adds bulk, supports regularity).
      </p>

      <div className="bg-greenTint rounded-xl p-5 mb-8 grid grid-cols-3 gap-3 border border-leaf">
        {[
          { label: '100g raw', fiber: '2.6g (9% DV)' },
          { label: '1 cup chopped', fiber: '2.4g' },
          { label: '1 cup steamed', fiber: '5.1g' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-serif font-bold text-xl text-forest">{item.fiber}</div>
            <div className="text-xs text-sage mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Soluble vs Insoluble Fiber</h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Broccoli&apos;s fiber is a mix of both types. Soluble fiber (including pectin) dissolves in water to form a gel, slowing digestion and feeding beneficial gut bacteria through fermentation. This produces short-chain fatty acids (SCFAs) like butyrate, which nourish colonocytes (colon cells) and help maintain the intestinal barrier.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        Insoluble fiber does not dissolve — it passes through largely intact, adding bulk to stool and supporting regular bowel movements. Both types are present in broccoli, which is part of why it is consistently recommended for digestive health.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">The Penn State 2023 Research</h2>
      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Research Highlight</div>
        <p className="text-sm text-deepForest leading-relaxed">
          A 2023 mouse study from Penn State (published in Laboratory Investigation) found that animals fed a 15% broccoli diet — equivalent to roughly 3.5 cups per day for a human — showed significantly healthier gut lining, with more goblet cells and Paneth cells. These cells secrete mucus and antimicrobial proteins that strengthen the intestinal barrier and prevent permeability. The mechanism involves AHR ligands in broccoli, separate from the fiber pathway. This is a mouse study; human trials are pending. (Source: <a href="https://www.sciencedaily.com/releases/2023/04/230406152639.htm" className="underline text-forest" target="_blank" rel="noopener noreferrer">ScienceDaily</a>)
        </p>
      </div>
      <p className="text-deepForest leading-relaxed mb-8">
        Separately, the Hudson Institute&apos;s 2023 research (Dr. Emily Gulliver) showed that sulforaphane from broccoli also shifts the gut microbiome composition toward bacteria that produce anti-inflammatory metabolites — a fiber-independent gut benefit operating alongside the fiber content.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Fiber Comparison vs Other Vegetables</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Vegetable</th>
              <th className="px-4 py-2 text-left">Fiber per 100g</th>
              <th className="px-4 py-2 text-left">% Daily Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              { veg: 'Kale', fiber: '4.1g', dv: '15%' },
              { veg: 'Spinach', fiber: '2.2g', dv: '8%' },
              { veg: 'Broccoli', fiber: '2.6g', dv: '9%', highlight: true },
              { veg: 'Cauliflower', fiber: '2.0g', dv: '7%' },
              { veg: 'Carrots', fiber: '2.8g', dv: '10%' },
              { veg: 'Cucumber', fiber: '0.5g', dv: '2%' },
            ].map((row, i) => (
              <tr key={i} className={(row as {highlight?: boolean}).highlight ? 'bg-greenTint font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{row.veg}</td>
                <td className="px-4 py-2 text-forest font-medium border-b border-greenTint">{row.fiber}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.dv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-sage mb-8">Source: USDA FoodData Central (SR Legacy)</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">← Full Nutrition Facts</Link>
        <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">All Broccoli Benefits →</Link>
        <Link href="/how-to-cook/steam" className="text-sm text-forest font-semibold hover:underline">How to Steam Broccoli →</Link>
      </div>
    </article>
  )
}
