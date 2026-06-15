import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Growing Broccoli from Seed: Indoor Start to Transplant',
  description: 'Start broccoli seeds indoors 6-8 weeks before last frost. Germination, hardening off, transplant timing, and direct sow option.',
  keywords: ['growing broccoli from seed', 'broccoli seed starting', 'how to start broccoli seeds', 'broccoli transplant'],
}

export default function FromSeedPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/growing" className="hover:text-forest">Growing</Link> /{' '}
        <span className="text-deepForest">From Seed</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Growing Broccoli from Seed</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Broccoli seeds germinate reliably and quickly — 4-7 days at 65-75°F (18-24°C). The challenge is timing the transplant so the seedlings go into the ground in time to mature before summer heat triggers bolting.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-deepForest text-white rounded-xl p-5">
          <div className="font-serif font-bold text-lg mb-3">Spring Planting</div>
          <ul className="text-green-200 text-sm space-y-2">
            <li>Start seeds indoors: 6-8 weeks before last frost date</li>
            <li>Transplant outdoors: 2-3 weeks before last frost (broccoli tolerates light frost)</li>
            <li>Harvest window: 80-100 days from transplant</li>
          </ul>
        </div>
        <div className="bg-forest text-white rounded-xl p-5">
          <div className="font-serif font-bold text-lg mb-3">Fall Planting (Often Better)</div>
          <ul className="text-green-100 text-sm space-y-2">
            <li>Start seeds: mid-summer (count back 85-100 days from first fall frost)</li>
            <li>Transplant: when seedlings are 4-6 weeks old</li>
            <li>Harvest: fall, as temperatures cool — heads are often tighter and more flavourful</li>
          </ul>
        </div>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Germination Steps</h2>
      <ol className="space-y-3 text-sm text-deepForest mb-8">
        {[
          'Fill seed trays with moist seed-starting mix (not garden soil). Plant seeds ¼ inch (6mm) deep, 2 seeds per cell.',
          'Keep at 65-75°F. Seeds germinate in 4-7 days. You do not need extra light until germination — just warmth.',
          'Once sprouted, move to bright light immediately. Seedlings that lack light become leggy (too tall, thin stems) within days.',
          'Thin to one seedling per cell when they have their first true leaves.',
          'Water consistently but do not waterlog. Wet soil causes damping off (fungal stem rot at soil level).',
          'At 4-6 weeks old (4-6 inch tall seedlings), begin hardening off: expose to outdoor conditions gradually over 7-10 days.',
          'Transplant when hardened. Space 18-24 inches apart in rows 24-36 inches apart. Broccoli needs room.',
        ].map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-forest text-white text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Vernalization — Why Cold Makes Broccoli Better</div>
        <p className="text-sm text-deepForest leading-relaxed">Exposing young broccoli seedlings to temperatures below 50°F (10°C) for several days actually improves head formation. This process (vernalization) encourages the plant to invest in producing a tight, dense head. Fall-planted broccoli that matures as nights cool naturally goes through this process.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/growing/when-to-harvest" className="text-sm text-forest font-semibold hover:underline">When to Harvest →</Link>
        <Link href="/growing/companion-plants" className="text-sm text-forest font-semibold hover:underline">Companion Plants →</Link>
        <Link href="/growing/in-containers" className="text-sm text-forest font-semibold hover:underline">Container Growing →</Link>
      </div>
    </article>
  )
}
