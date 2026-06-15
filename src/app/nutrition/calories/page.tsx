import type { Metadata } from 'next'
import Link from 'next/link'
import NutritionTable from '@/components/NutritionTable'

export const metadata: Metadata = {
  title: 'How Many Calories in Broccoli? (Raw, Cooked, Steamed, 1 Cup)',
  description:
    '34 kcal per 100g raw broccoli per USDA FoodData Central. Full calorie breakdown by serving size, cooking method, and cup measurements. Is broccoli the most calorie-efficient vegetable?',
  keywords: ['broccoli calories', 'how many calories in broccoli', 'calories in broccoli raw', 'broccoli calorie count'],
  openGraph: {
    title: 'How Many Calories in Broccoli? (Raw, Cooked, Steamed, 1 Cup)',
    description: 'USDA-verified calorie data for broccoli in every form — raw, steamed, boiled, roasted, frozen.',
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Calories in Broccoli?',
  description: 'USDA FoodData Central calorie data for raw, cooked, and frozen broccoli by serving size.',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
  publisher: { '@type': 'Organization', name: 'BroccoliPedia', url: 'https://broccolipedia.com' },
}

export default function CaloriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link> /{' '}
          <Link href="/nutrition" className="hover:text-forest">Nutrition</Link> /{' '}
          <span className="text-deepForest">Calories</span>
        </nav>

        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          How Many Calories in Broccoli?
        </h1>
        <p className="text-lg text-sage leading-relaxed mb-8">
          Raw broccoli contains <strong className="text-deepForest">34 kcal per 100g</strong> — one of the lowest calorie densities of any vegetable. Here is the complete breakdown by serving size and cooking method, all from USDA FoodData Central (FDC ID 170379).
        </p>

        {/* Quick answer banner */}
        <div className="bg-greenTint rounded-xl p-5 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border border-leaf">
          {[
            { label: '100g raw', cal: '34 kcal' },
            { label: '1 cup chopped (91g)', cal: '31 kcal' },
            { label: '1 cup steamed (156g)', cal: '54 kcal' },
            { label: '1 large floret (11g)', cal: '4 kcal' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="font-serif font-bold text-2xl text-forest">{item.cal}</div>
              <div className="text-xs text-sage mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Calories by Serving Size</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-deepForest text-white">
                    <th className="px-3 py-2 text-left">Serving</th>
                    <th className="px-3 py-2 text-left">Weight</th>
                    <th className="px-3 py-2 text-left">Calories</th>
                    <th className="px-3 py-2 text-left">Protein</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { serving: '1 small floret', weight: '11g', cal: '4', protein: '0.3g' },
                    { serving: '1 cup chopped (raw)', weight: '91g', cal: '31', protein: '2.6g' },
                    { serving: '100g raw', weight: '100g', cal: '34', protein: '2.82g' },
                    { serving: '1 cup steamed', weight: '156g', cal: '54', protein: '4.4g' },
                    { serving: '1 cup boiled, drained', weight: '156g', cal: '54', protein: '3.7g' },
                    { serving: '1 medium head', weight: '608g', cal: '207', protein: '17.1g' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                      <td className="px-3 py-2 text-deepForest border-b border-greenTint">{row.serving}</td>
                      <td className="px-3 py-2 text-sage border-b border-greenTint">{row.weight}</td>
                      <td className="px-3 py-2 font-semibold text-forest border-b border-greenTint">{row.cal}</td>
                      <td className="px-3 py-2 text-sage border-b border-greenTint">{row.protein}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sage mt-2">Source: USDA FoodData Central (FDC 170379)</p>
          </div>

          <div>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Full Nutrition Facts</h2>
            <NutritionTable />
          </div>
        </div>

        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Calories by Cooking Method</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-4 py-2 text-left">Method</th>
                <th className="px-4 py-2 text-left">Calories per 100g</th>
                <th className="px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { method: 'Raw', cal: '34 kcal', note: 'Baseline. Maximum sulforaphane potential.' },
                { method: 'Steamed', cal: '35 kcal', note: 'Minimal change. Best nutrient retention after raw.' },
                { method: 'Microwaved', cal: '35 kcal', note: 'Negligible calorie change. Boosts sulforaphane by ~80%.' },
                { method: 'Boiled', cal: '35 kcal', note: 'Calories unchanged but Vitamin C leaches into water.' },
                { method: 'Roasted (with oil)', cal: '60–80 kcal', note: 'Depends on oil amount used. ~1 tbsp olive oil adds ~40 kcal.' },
                { method: 'Air fried (no oil)', cal: '35 kcal', note: 'Comparable to raw — great for crispy texture without extra calories.' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                  <td className="px-4 py-2 font-medium text-deepForest border-b border-greenTint">{row.method}</td>
                  <td className="px-4 py-2 font-semibold text-forest border-b border-greenTint">{row.cal}</td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="fact-block mb-8">
          <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Why Broccoli Is So Calorie-Efficient</div>
          <p className="text-sm text-deepForest leading-relaxed">
            Broccoli is 89.2% water by weight. Water has no calories. This high water content is the main reason broccoli delivers so many nutrients (99% DV Vitamin C, 85% DV Vitamin K, 2.82g protein) for only 34 kcal per 100g. You can eat 300g of broccoli for under 110 calories while getting more than your full daily Vitamin C requirement.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">← Full Nutrition Facts</Link>
          <Link href="/how-to-cook/steam" className="text-sm text-forest font-semibold hover:underline">How to Steam Broccoli →</Link>
          <Link href="/nutrition/protein" className="text-sm text-forest font-semibold hover:underline">Protein in Broccoli →</Link>
        </div>
      </article>
    </>
  )
}
