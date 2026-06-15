import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli vs Kale: Nutrition, Taste, and Which to Choose',
  description: 'Broccoli vs kale: vitamin C, vitamin K, protein, sulforaphane. Different nutritional profiles — kale wins on some, broccoli on others. USDA data.',
  keywords: ['broccoli vs kale', 'broccoli or kale healthier', 'kale vs broccoli nutrition', 'broccoli kale comparison'],
}

export default function BroccoliVsKalePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/facts" className="hover:text-forest">Facts</Link> /{' '}
        <span className="text-deepForest">Broccoli vs Kale</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Broccoli vs Kale</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Both are <em>Brassica oleracea</em> varieties and both are legitimately nutrient-dense. They do not compete head-to-head — they have different nutritional strengths and work best in different culinary contexts. The &ldquo;which is healthier&rdquo; framing misses this.</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Nutrition Comparison (per 100g, raw)</h2>
      <p className="text-xs text-sage mb-2">Source: USDA FoodData Central — FDC ID 170379 (broccoli), FDC ID 168421 (raw kale)</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Nutrient</th>
              <th className="px-3 py-2 text-left">Broccoli</th>
              <th className="px-3 py-2 text-left">Kale (raw)</th>
              <th className="px-3 py-2 text-left">Higher</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Calories', '34 kcal', '49 kcal', 'Broccoli (lower)'],
              ['Protein', '2.82g', '4.28g', 'Kale'],
              ['Fiber', '2.6g', '3.6g', 'Kale'],
              ['Vitamin C', '89.2mg (99% DV)', '93.4mg (104% DV)', 'Kale (slightly)'],
              ['Vitamin K', '102mcg (85% DV)', '817mcg (681% DV)', 'Kale (significantly)'],
              ['Vitamin A (beta-carotene)', '31mcg RAE', '500mcg RAE', 'Kale'],
              ['Calcium', '47mg', '150mg', 'Kale'],
              ['Sulforaphane potential', 'High (glucoraphanin-rich)', 'Moderate', 'Broccoli'],
              ['Iron', '0.73mg', '1.47mg', 'Kale'],
            ].map(([nutrient, broc, kale, higher], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{nutrient}</td>
                <td className="px-3 py-2 text-sage">{broc}</td>
                <td className="px-3 py-2 text-sage">{kale}</td>
                <td className="px-3 py-2 text-xs font-semibold text-forest">{higher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">The Real Difference: Sulforaphane</h2>
      <p className="text-deepForest leading-relaxed mb-4">The most meaningful nutritional difference between broccoli and kale is sulforaphane. Broccoli is exceptionally rich in glucoraphanin (the precursor), while kale has lower levels. If sulforaphane research (Nrf2 pathway activation, potential anti-cancer activity) is why you are eating brassicas, broccoli — particularly broccoli sprouts — is the better choice. If you care more about vitamins A, K, calcium, and iron, kale has the edge.</p>

      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Verdict: Eat Both</div>
        <p className="text-sm text-deepForest leading-relaxed">The actual answer to &ldquo;broccoli or kale?&rdquo; is that they complement each other. Kale has broccoli beat on vitamin K, A, calcium, protein, and fibre. Broccoli has kale beat on sulforaphane and is more versatile in cooking. Both are genuinely good for you. The &ldquo;superfood&rdquo; competition between them is a marketing construct, not a nutritional reality.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/facts/broccoli-vs-cauliflower" className="text-sm text-forest font-semibold hover:underline">Broccoli vs Cauliflower →</Link>
        <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">Broccoli Health Benefits →</Link>
        <Link href="/nutrition/vitamins" className="text-sm text-forest font-semibold hover:underline">Broccoli Vitamin Content →</Link>
      </div>
    </article>
  )
}
