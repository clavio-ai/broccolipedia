import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Companion Plants for Broccoli: What to Grow (and Avoid)',
  description: 'Best companion plants for broccoli: dill, marigolds, nasturtiums, onions. Worst: strawberries, tomatoes, other brassicas. Why companion planting works.',
  keywords: ['companion plants for broccoli', 'broccoli companion planting', 'what to plant with broccoli'],
}

export default function CompanionPlantsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/growing" className="hover:text-forest">Growing</Link> /{' '}
        <span className="text-deepForest">Companion Plants</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Companion Plants for Broccoli</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Companion planting with broccoli has two practical goals: pest deterrence (broccoli is targeted by cabbage moths, aphids, and flea beetles) and soil chemistry (broccoli is a heavy feeder that can exhaust soil nitrogen).</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Best Companion Plants</h2>
      <div className="space-y-3 mb-8">
        {[
          { plant: 'Dill and Chamomile', reason: 'Attract beneficial insects (parasitic wasps, hover flies) that prey on cabbage worms. Plant near but not directly adjacent — mature dill can shade broccoli.' },
          { plant: 'Marigolds (French variety)', reason: 'Their scent deters aphids and whiteflies. Root secretions also suppress soil nematodes. Plant as a border around the broccoli bed.' },
          { plant: 'Nasturtiums', reason: 'Act as a trap crop for aphids — aphids prefer nasturtiums over broccoli. Check nasturtiums regularly and remove infested plants.' },
          { plant: 'Onions and Garlic', reason: 'Strong allium scent confuses pest insects. Do not plant directly under broccoli — they compete for the same shallow root zone.' },
          { plant: 'Celery', reason: 'Deters white cabbage moths. The fragrance masks the brassica smell that attracts them. Compatible root zones and harvest timing.' },
          { plant: 'Herbs (thyme, mint, rosemary)', reason: 'Aromatic herbs generally deter flying pests. Keep mint contained (it spreads aggressively) in pots placed near the broccoli bed.' },
        ].map((c) => (
          <div key={c.plant} className="bg-greenTint rounded-xl p-4">
            <div className="font-semibold text-deepForest mb-1">{c.plant}</div>
            <p className="text-sm text-sage">{c.reason}</p>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Plants to Avoid Near Broccoli</h2>
      <div className="space-y-3 mb-8">
        {[
          { plant: 'Other Brassicas (cabbage, kale, cauliflower, Brussels sprouts)', reason: 'They share the same pests and diseases. A pest outbreak in one spreads to all of them. They also compete heavily for soil nutrients.' },
          { plant: 'Strawberries', reason: 'Both plants share susceptibility to verticillium wilt. Planting them together increases disease pressure on both.' },
          { plant: 'Tomatoes', reason: 'Different nutrient needs and growth habits compete poorly together. Tomatoes prefer warm, dry conditions; broccoli needs cool and consistent moisture.' },
          { plant: 'Fennel', reason: 'Fennel releases allelopathic compounds that inhibit growth in most vegetables, including broccoli. Keep fennel isolated from the vegetable garden entirely.' },
        ].map((c) => (
          <div key={c.plant} className="border border-red-200 bg-red-50 rounded-xl p-4">
            <div className="font-semibold text-red-800 mb-1">{c.plant}</div>
            <p className="text-sm text-red-700">{c.reason}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/growing/from-seed" className="text-sm text-forest font-semibold hover:underline">Growing from Seed →</Link>
        <Link href="/growing/when-to-harvest" className="text-sm text-forest font-semibold hover:underline">When to Harvest →</Link>
        <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">Broccoli Health Benefits →</Link>
      </div>
    </article>
  )
}
