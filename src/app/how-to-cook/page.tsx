import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Cook Broccoli: Every Method Compared (Steam, Roast, Air Fry, Boil)',
  description:
    'Complete guide to every broccoli cooking method — steaming, roasting, air frying, boiling, microwaving, sautéing. Exact times, temperatures, and nutrient retention data.',
  keywords: ['how to cook broccoli', 'best way to cook broccoli', 'broccoli cooking methods'],
}

const METHODS = [
  { name: 'Steam', href: '/how-to-cook/steam', time: '2–4 min', temp: '100°C boil', texture: 'Tender, vivid green', nutrients: 'Excellent — best for Vitamin C', badge: 'Recommended' },
  { name: 'Roast', href: '/how-to-cook/roast', time: '20–25 min', temp: '220°C / 425°F', texture: 'Crispy edges, tender inside', nutrients: 'Good — dry heat, no leaching', badge: 'Most Popular' },
  { name: 'Air Fry', href: '/how-to-cook/air-fryer', time: '8 min', temp: '190°C / 375°F', texture: 'Very crispy, charred tips', nutrients: 'Good — fast and dry', badge: 'Quickest' },
  { name: 'Microwave', href: '/how-to-cook/microwave', time: '2–3 min', temp: 'Medium power', texture: 'Tender, slightly soft', nutrients: 'Excellent — boosts sulforaphane +80%', badge: 'Most Nutritious' },
  { name: 'Boil', href: '/how-to-cook/boil', time: '2–3 min', temp: '100°C', texture: 'Soft, bright green', nutrients: 'Poor — Vitamin C leaches out', badge: '' },
  { name: 'Sauté', href: '/how-to-cook/saute', time: '5 min', temp: 'Medium-high', texture: 'Slightly crisp, garlicky', nutrients: 'Good — fast and flavourful', badge: '' },
  { name: 'Frozen', href: '/how-to-cook/frozen', time: '5–8 min', temp: 'Varies by method', texture: 'Softer than fresh', nutrients: 'Decent — blanched before freezing', badge: '' },
  { name: 'Blanch', href: '/how-to-cook/blanch', time: '2 min + ice bath', temp: '100°C', texture: 'Crisp, vivid green', nutrients: 'Good — brief enough to retain nutrients', badge: '' },
]

export default function HowToCookHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> / <span className="text-deepForest">How to Cook</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        How to Cook Broccoli: Every Method Compared
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-8">
        Steaming, roasting, air frying, boiling, microwaving, sautéing — each method produces a different texture and nutrient profile. Here is the complete comparison with exact times and temperatures, then a dedicated guide for each method.
      </p>

      {/* Quick method comparison table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-4 py-2 text-left">Method</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Temp</th>
              <th className="px-4 py-2 text-left">Texture</th>
              <th className="px-4 py-2 text-left">Nutrients</th>
            </tr>
          </thead>
          <tbody>
            {METHODS.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                <td className="px-4 py-2 border-b border-greenTint">
                  <Link href={m.href} className="font-semibold text-forest hover:underline flex items-center gap-2">
                    {m.name}
                    {m.badge && (
                      <span className="text-xs bg-lime text-deepForest px-1.5 py-0.5 rounded-full font-semibold">
                        {m.badge}
                      </span>
                    )}
                  </Link>
                </td>
                <td className="px-4 py-2 text-deepForest border-b border-greenTint">{m.time}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{m.temp}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint">{m.texture}</td>
                <td className="px-4 py-2 text-sage border-b border-greenTint text-xs">{m.nutrients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">The Sulforaphane Rule</div>
        <p className="text-sm text-deepForest leading-relaxed">
          Sulforaphane — the most-studied health compound in broccoli — is produced by an enzyme (myrosinase) that heat destroys at 70°C. Hack: chop broccoli, wait 40 minutes, then cook briefly. The conversion completes before the heat arrives. Alternatively, add a pinch of mustard powder to cooked broccoli to restore production. See the full breakdown at{' '}
          <Link href="/nutrition/raw-vs-cooked" className="underline text-forest">Raw vs Cooked Broccoli</Link>.
        </p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Choose Your Method</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {METHODS.map((m, i) => (
          <Link
            key={i}
            href={m.href}
            className="group block bg-white border border-greenTint rounded-xl p-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-serif font-semibold text-base text-deepForest group-hover:text-forest transition-colors">
                How to {m.name} Broccoli
              </h3>
              <span className="text-xs text-sage flex-shrink-0 ml-2">{m.time}</span>
            </div>
            <p className="text-sm text-sage">{m.texture}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
