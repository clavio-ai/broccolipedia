import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Growing Broccoli in Containers: Pot Size, Varieties, and Tips',
  description: 'Grow broccoli in containers with a minimum 5-gallon pot per plant. Best varieties, watering schedule, and common container growing mistakes.',
  keywords: ['growing broccoli in containers', 'container broccoli', 'broccoli in pots', 'broccoli balcony garden'],
}

export default function InContainersPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/growing" className="hover:text-forest">Growing</Link> /{' '}
        <span className="text-deepForest">In Containers</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Growing Broccoli in Containers</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Broccoli can be grown in containers — but it needs more space per plant than most container vegetables. Each plant requires a minimum of 5 gallons (19 litres) of soil volume. A 12-inch (30cm) diameter pot holds approximately 5 gallons. Go larger when possible.</p>

      <div className="bg-greenTint rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg text-deepForest mb-3">Container Requirements at a Glance</div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ['Minimum pot size', '5 gallons (12 inches diameter)'],
            ['Ideal pot size', '7-10 gallons per plant'],
            ['Depth needed', '12+ inches for root development'],
            ['Plants per pot', '1 per 5-gallon pot; 2 per 10-gallon'],
            ['Soil type', 'Rich potting mix with added compost'],
            ['Watering frequency', 'Every 1-2 days in warm weather; containers dry faster than ground'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-semibold text-deepForest">{k}</div>
              <div className="text-sage">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Best Varieties for Containers</h2>
      <p className="text-deepForest leading-relaxed mb-4">Compact varieties with smaller heads work better in containers because the plant is more proportionate to the pot size. Large-heading varieties (like Calabrese) can grow in containers but tend to tip over when the head gets heavy.</p>
      <div className="space-y-2 text-sm text-deepForest mb-8">
        {[
          ['Destiny', 'Compact plant, 6-7 inch head. Popular for container growing specifically.'],
          ['Artwork', 'Dome-shaped head, uniform size, naturally compact. Good container performance.'],
          ['Green Magic', 'Smaller head than standard types, good yield of side shoots after main harvest.'],
          ['Mini Broccoli types', 'Some seed suppliers sell specifically compact varieties marketed for containers. Look for "container broccoli" or "patio broccoli" in seed catalogues.'],
        ].map(([v, d]) => (
          <div key={v} className="bg-white border border-greenTint rounded-xl p-3">
            <div className="font-semibold text-deepForest">{v}</div>
            <div className="text-sage">{d}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Container Growing Challenges</h2>
      <div className="space-y-3 mb-8">
        {[
          ['Temperature regulation', 'Container soil heats up faster than ground soil. Dark-coloured pots absorb heat and can stress cool-loving broccoli. Use light-coloured containers or wrap them in reflective material in warm weather.'],
          ['Watering', 'Containers dry out much faster than ground beds. In summer, this can mean watering once or twice daily. Install a drip system or mulch the top of the pot heavily to reduce moisture loss.'],
          ['Fertilisation', 'Nutrients leach out with each watering. Feed with a balanced fertiliser every 2-3 weeks. Broccoli is a heavy feeder — nitrogen is particularly important for leaf and head development.'],
          ['Wind', 'Large broccoli plants in containers are top-heavy when the head develops. Place in a sheltered location or stake the plant once it is over 12 inches tall.'],
        ].map(([issue, solution]) => (
          <div key={issue} className="fact-block">
            <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">{issue}</div>
            <p className="text-sm text-deepForest">{solution}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/growing/from-seed" className="text-sm text-forest font-semibold hover:underline">Growing from Seed →</Link>
        <Link href="/growing/when-to-harvest" className="text-sm text-forest font-semibold hover:underline">When to Harvest →</Link>
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Storing Fresh Broccoli →</Link>
      </div>
    </article>
  )
}
