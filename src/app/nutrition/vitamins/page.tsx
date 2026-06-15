import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vitamins in Broccoli: 99% DV Vitamin C, 85% DV Vitamin K',
  description:
    'Complete vitamin profile of broccoli — Vitamin C 89.2mg (99% DV), Vitamin K 102mcg (85% DV), Folate 63mcg (16% DV), Vitamin A, B vitamins — all USDA data.',
  keywords: ['vitamins in broccoli', 'broccoli vitamins', 'vitamin c in broccoli', 'vitamin k broccoli'],
}

export default function VitaminsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/nutrition" className="hover:text-forest">Nutrition</Link> /{' '}
        <span className="text-deepForest">Vitamins</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Vitamins in Broccoli: The Complete Profile
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8">
        One 100g serving of raw broccoli delivers 99% of your daily Vitamin C requirement and 85% of your Vitamin K — from USDA FoodData Central (FDC ID 170379). Here is every vitamin with its amount and how it gets affected by cooking.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Vitamin</th>
              <th className="px-4 py-2 text-left">Amount (per 100g raw)</th>
              <th className="px-4 py-2 text-left">% Daily Value</th>
              <th className="px-4 py-2 text-left">Effect of Cooking</th>
            </tr>
          </thead>
          <tbody>
            {[
              { vit: 'Vitamin C', amount: '89.2mg', dv: '99%', cook: 'Boiling loses ~50%. Steam or microwave to retain.', highlight: true },
              { vit: 'Vitamin K', amount: '102mcg', dv: '85%', cook: 'Mostly stable across cooking methods.', highlight: true },
              { vit: 'Folate (B9)', amount: '63mcg', dv: '16%', cook: 'Sensitive to heat — steaming retains more than boiling.' },
              { vit: 'Vitamin A (as RAE)', amount: '31mcg (623 IU)', dv: '3%', cook: 'Fat-soluble; absorption improves with olive oil.' },
              { vit: 'Vitamin B6', amount: '0.175mg', dv: '10%', cook: 'Partially lost in boiling water.' },
              { vit: 'Riboflavin (B2)', amount: '0.117mg', dv: '9%', cook: 'Relatively stable.' },
              { vit: 'Pantothenic Acid (B5)', amount: '0.573mg', dv: '11%', cook: 'Stable with most cooking methods.' },
              { vit: 'Thiamin (B1)', amount: '0.071mg', dv: '6%', cook: 'Sensitive to water — lost into boiling water.' },
              { vit: 'Vitamin E', amount: '0.78mg', dv: '5%', cook: 'Fat-soluble; stable in most cooking.' },
            ].map((row, i) => (
              <tr key={i} className={(row as {highlight?: boolean}).highlight ? 'bg-greenTint font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{row.vit}</td>
                <td className="px-4 py-2 text-forest font-medium border-b border-greenTint">{row.amount}</td>
                <td className="px-4 py-2 text-forest font-bold border-b border-greenTint">{row.dv}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint text-xs">{row.cook}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-sage mb-8">Source: USDA FoodData Central (FDC ID 170379)</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Vitamin C: 68% More Than an Orange</h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Raw broccoli contains 89.2mg of Vitamin C per 100g. A raw orange contains 53mg per 100g — meaning broccoli has 68% more Vitamin C per gram than orange. This surprises most people because oranges are culturally associated with Vitamin C, but the data from USDA SR is unambiguous.
      </p>
      <blockquote className="pull-quote my-5">
        68% more Vitamin C per gram than an orange — raw broccoli vs raw orange, USDA SR data.
      </blockquote>
      <p className="text-deepForest leading-relaxed mb-8">
        One important caveat: boiling broccoli strips roughly half of its Vitamin C. Steam or microwave to preserve it. Even boiled broccoli still delivers roughly 50mg/100g — still close to an orange&apos;s total.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Vitamin K: 85% DV from a Single Serving</h2>
      <p className="text-deepForest leading-relaxed mb-8">
        With 102mcg per 100g (85% of the daily value), broccoli is one of the best dietary sources of Vitamin K1 (phylloquinone). Vitamin K1 is essential for blood clotting and plays a role in bone metabolism. It is fat-soluble — eating broccoli with a fat source (olive oil, butter) improves absorption. People taking warfarin (a blood thinner) should maintain consistent Vitamin K intake — not avoid it — to keep their INR stable.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Broccoli vs Common Vitamin C Sources</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Food</th>
              <th className="px-4 py-2 text-left">Vitamin C per 100g</th>
              <th className="px-4 py-2 text-left">vs Broccoli</th>
            </tr>
          </thead>
          <tbody>
            {[
              { food: 'Broccoli (raw)', vc: '89.2mg', vs: '—', highlight: true },
              { food: 'Orange', vc: '53mg', vs: '−40%' },
              { food: 'Strawberry', vc: '58.8mg', vs: '−34%' },
              { food: 'Cauliflower (raw)', vc: '48.2mg', vs: '−46%' },
              { food: 'Kale (raw)', vc: '93.4mg', vs: '+5%' },
              { food: 'Spinach (raw)', vc: '28mg', vs: '−69%' },
            ].map((row, i) => (
              <tr key={i} className={(row as {highlight?: boolean}).highlight ? 'bg-greenTint font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{row.food}</td>
                <td className="px-4 py-2 text-forest font-medium border-b border-greenTint">{row.vc}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{row.vs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-sage mb-8">Source: USDA FoodData Central (SR Legacy)</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">← Full Nutrition Facts</Link>
        <Link href="/nutrition/raw-vs-cooked" className="text-sm text-forest font-semibold hover:underline">Raw vs Cooked Nutrients →</Link>
        <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">Health Benefits →</Link>
      </div>
    </article>
  )
}
