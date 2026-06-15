import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli vs Cauliflower: Nutrition, Taste, and Cooking Differences',
  description: 'Broccoli vs cauliflower head-to-head: calories, vitamin C, vitamin K, protein, sulforaphane. Which is healthier? USDA data comparison.',
  keywords: ['broccoli vs cauliflower', 'broccoli or cauliflower healthier', 'broccoli cauliflower comparison', 'broccoli vs cauliflower nutrition'],
}

export default function BroccoliVsCauliflowerPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/facts" className="hover:text-forest">Facts</Link> /{' '}
        <span className="text-deepForest">Broccoli vs Cauliflower</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Broccoli vs Cauliflower</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Broccoli and cauliflower are the same species (<em>Brassica oleracea</em>) — just different varieties. Broccoli was selected for tight green flower clusters; cauliflower was selected for larger, white curds. Their nutritional profiles are similar but not identical.</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Nutrition Comparison (per 100g, raw)</h2>
      <p className="text-xs text-sage mb-2">Source: USDA FoodData Central — FDC ID 170379 (broccoli), FDC ID 169986 (cauliflower)</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Nutrient</th>
              <th className="px-3 py-2 text-left">Broccoli</th>
              <th className="px-3 py-2 text-left">Cauliflower</th>
              <th className="px-3 py-2 text-left">Winner</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Calories', '34 kcal', '25 kcal', 'Cauliflower (lower)'],
              ['Protein', '2.82g', '1.92g', 'Broccoli'],
              ['Fiber', '2.6g', '2.0g', 'Broccoli'],
              ['Vitamin C', '89.2mg (99% DV)', '48.2mg (54% DV)', 'Broccoli'],
              ['Vitamin K', '102mcg (85% DV)', '15.5mcg (13% DV)', 'Broccoli (significantly)'],
              ['Folate', '63mcg (16% DV)', '57mcg (14% DV)', 'Broccoli (slightly)'],
              ['Sulforaphane', 'High (glucoraphanin-rich)', 'Lower', 'Broccoli'],
              ['Net Carbs', '4.0g', '3.0g', 'Cauliflower (lower)'],
            ].map(([nutrient, broc, caul, winner], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{nutrient}</td>
                <td className="px-3 py-2 text-sage">{broc}</td>
                <td className="px-3 py-2 text-sage">{caul}</td>
                <td className="px-3 py-2 text-xs font-semibold text-forest">{winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Which Is Healthier?</h2>
      <p className="text-deepForest leading-relaxed mb-4">Broccoli is the more nutrient-dense of the two in almost every category — particularly vitamin C (nearly double), vitamin K (over six times more), protein, and fibre. It also contains more glucosinolates, which are the precursors to sulforaphane.</p>
      <p className="text-deepForest leading-relaxed mb-6">Cauliflower has fewer calories and slightly fewer carbs, which is relevant if you are eating it in very large quantities (as in cauliflower rice), but the difference per 100g serving is modest.</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Taste and Cooking</h2>
      <p className="text-deepForest leading-relaxed mb-4">Broccoli has a more pronounced, earthy-sulphurous flavour. Cauliflower is milder and takes on surrounding flavours more readily — which is why it works better as a meat substitute (cauliflower steak, buffalo cauliflower) where neutrality is an asset. Both roast well; cauliflower caramelises slightly better because of its denser structure and lower water content.</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/facts/broccoli-vs-kale" className="text-sm text-forest font-semibold hover:underline">Broccoli vs Kale →</Link>
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">Broccoli Nutrition Hub →</Link>
        <Link href="/varieties/romanesco" className="text-sm text-forest font-semibold hover:underline">What Is Romanesco? →</Link>
      </div>
    </article>
  )
}
