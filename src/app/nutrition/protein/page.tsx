import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Protein Is in Broccoli?',
  description:
    '2.82g of protein per 100g raw broccoli per USDA FoodData Central. How it compares to other vegetables, complete vs incomplete protein, and what it means for plant-based diets.',
  keywords: ['protein in broccoli', 'broccoli protein', 'how much protein in broccoli'],
}

export default function ProteinPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/nutrition" className="hover:text-forest">Nutrition</Link> /{' '}
        <span className="text-deepForest">Protein</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        How Much Protein Is in Broccoli?
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8">
        <strong className="text-deepForest">2.82 grams per 100g raw</strong> — per USDA FoodData Central (FDC ID 170379). That makes broccoli one of the highest-protein vegetables available, though the total amount per serving is modest compared to legumes or animal proteins.
      </p>

      <div className="bg-greenTint rounded-xl p-5 mb-8 grid grid-cols-3 gap-3 border border-leaf">
        {[
          { label: '100g raw', protein: '2.82g' },
          { label: '1 cup chopped (91g)', protein: '2.57g' },
          { label: '1 cup steamed (156g)', protein: '4.4g' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-serif font-bold text-2xl text-forest">{item.protein}</div>
            <div className="text-xs text-sage mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
        How Broccoli Compares to Other Vegetables
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Vegetable</th>
              <th className="px-4 py-2 text-left">Protein per 100g</th>
              <th className="px-4 py-2 text-left">Calories per 100g</th>
              <th className="px-4 py-2 text-left">Protein % of calories</th>
            </tr>
          </thead>
          <tbody>
            {[
              { veg: 'Broccoli', protein: '2.82g', cal: '34 kcal', pct: '33%', highlight: true },
              { veg: 'Kale', protein: '2.92g', cal: '35 kcal', pct: '33%', highlight: false },
              { veg: 'Spinach', protein: '2.90g', cal: '23 kcal', pct: '50%', highlight: false },
              { veg: 'Cauliflower', protein: '1.90g', cal: '25 kcal', pct: '30%', highlight: false },
              { veg: 'Cucumber', protein: '0.65g', cal: '15 kcal', pct: '17%', highlight: false },
              { veg: 'Carrot', protein: '0.93g', cal: '41 kcal', pct: '9%', highlight: false },
            ].map((row, i) => (
              <tr key={i} className={row.highlight ? 'bg-greenTint font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{row.veg}</td>
                <td className="px-4 py-2 text-forest font-medium border-b border-greenTint">{row.protein}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.cal}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.pct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-sage mb-8">Source: USDA FoodData Central (SR Legacy)</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
        Is Broccoli Protein Complete?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Broccoli protein is technically incomplete — it lacks sufficient quantities of all nine essential amino acids to qualify as a complete protein on its own. However, it contains meaningful amounts of leucine, isoleucine, valine, and lysine. Pairing broccoli with a complementary protein source (legumes, grains, eggs) easily covers any amino acid gaps.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        For plant-based dieters, the protein-per-calorie ratio of broccoli (33%) is genuinely impressive — comparable to kale and close to spinach. Eating 300g of broccoli (around 3 cups) provides roughly 8.5g of protein for only 102 calories.
      </p>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Practical Protein Tip</div>
        <p className="text-sm text-deepForest leading-relaxed">
          Steamed broccoli is denser than raw — one cup steamed (156g) provides 4.4g protein vs 2.57g in a cup of raw chopped. If you are tracking protein, weigh cooked broccoli for more accurate numbers.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">← Full Nutrition Facts</Link>
        <Link href="/nutrition/calories" className="text-sm text-forest font-semibold hover:underline">Calories in Broccoli →</Link>
        <Link href="/nutrition/fiber" className="text-sm text-forest font-semibold hover:underline">Fiber in Broccoli →</Link>
      </div>
    </article>
  )
}
