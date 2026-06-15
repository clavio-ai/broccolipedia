import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carbs in Broccoli: 6.64g Total, 4.04g Net (Is It Keto-Friendly?)',
  description:
    'Broccoli has 6.64g total carbs and 4.04g net carbs per 100g raw. Glycemic index, keto verdict, and how cooking affects carb count — USDA data.',
  keywords: ['carbs in broccoli', 'broccoli carbs', 'broccoli keto', 'net carbs broccoli', 'is broccoli keto friendly'],
}

export default function CarbsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/nutrition" className="hover:text-forest">Nutrition</Link> /{' '}
        <span className="text-deepForest">Carbs</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Carbs in Broccoli: Is It Actually Keto-Friendly?
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8">
        Raw broccoli has <strong className="text-deepForest">6.64g total carbohydrates per 100g</strong>, and <strong className="text-deepForest">4.04g net carbs</strong> (after subtracting the 2.6g dietary fiber). The verdict for keto: yes, broccoli is keto-compatible. All data from USDA FoodData Central (FDC ID 170379).
      </p>

      <div className="bg-greenTint rounded-xl p-5 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border border-leaf">
        {[
          { label: 'Total Carbs (100g)', val: '6.64g' },
          { label: 'Dietary Fiber', val: '2.6g' },
          { label: 'Net Carbs', val: '4.04g' },
          { label: 'Glycemic Index', val: '~15' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-serif font-bold text-2xl text-forest">{item.val}</div>
            <div className="text-xs text-sage mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Net Carbs by Serving</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Serving</th>
              <th className="px-4 py-2 text-left">Total Carbs</th>
              <th className="px-4 py-2 text-left">Fiber</th>
              <th className="px-4 py-2 text-left">Net Carbs</th>
            </tr>
          </thead>
          <tbody>
            {[
              { serving: '100g raw', total: '6.64g', fiber: '2.6g', net: '4.04g' },
              { serving: '1 cup raw, chopped (91g)', total: '6.04g', fiber: '2.37g', net: '3.67g' },
              { serving: '1 cup steamed (156g)', total: '11.2g', fiber: '5.1g', net: '6.1g' },
              { serving: '½ cup florets (44g)', total: '2.92g', fiber: '1.14g', net: '1.78g' },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{row.serving}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.total}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.fiber}</td>
                <td className="px-4 py-2 font-semibold text-forest border-b border-greenTint">{row.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">The Keto Verdict</h2>
      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Keto Verdict: Yes</div>
        <p className="text-sm text-deepForest leading-relaxed">
          Most ketogenic diets target 20–50g net carbs per day. A full cup of raw broccoli provides only 3.67g net carbs, leaving substantial room within a keto budget. Broccoli is one of the most keto-compatible vegetables available — it is nutrient-dense, high-fiber, and very low in digestible carbohydrates.
        </p>
      </div>
      <p className="text-deepForest leading-relaxed mb-8">
        The glycemic index of broccoli is approximately 15 (low GI scale tops out at 55). This means broccoli causes minimal blood glucose response — relevant for both keto dieters and people managing blood sugar. The fiber content slows carbohydrate absorption further.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Where the Carbs Come From</h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Of the 6.64g total carbohydrates in 100g raw broccoli, 2.6g is indigestible dietary fiber. The remaining 4.04g is primarily simple sugars (glucose, fructose, sucrose) with a very small amount of starch. There is no significant starch content in raw broccoli — it is genuinely a low-starch vegetable, unlike potatoes or corn.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">← Full Nutrition Facts</Link>
        <Link href="/nutrition/fiber" className="text-sm text-forest font-semibold hover:underline">Fiber in Broccoli →</Link>
        <Link href="/nutrition/calories" className="text-sm text-forest font-semibold hover:underline">Calories in Broccoli →</Link>
      </div>
    </article>
  )
}
