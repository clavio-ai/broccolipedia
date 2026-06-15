import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When to Harvest Broccoli: Signs and Timing',
  description: 'Harvest broccoli when the head is firm, dark green, and buds are tight — before any yellow or flowering. The window is 2-4 days. Visual guide.',
  keywords: ['when to harvest broccoli', 'how to harvest broccoli', 'broccoli harvest time', 'broccoli ready to harvest'],
}

export default function WhenToHarvestPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/growing" className="hover:text-forest">Growing</Link> /{' '}
        <span className="text-deepForest">When to Harvest</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">When to Harvest Broccoli</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">The harvest window for broccoli is narrow — often just 2-4 days between &ldquo;perfect&rdquo; and &ldquo;flowering.&rdquo; Once the plant starts to bolt (send up flowers), the head becomes loose, the flavour turns bitter, and the texture changes.</p>

      <div className="bg-deepForest text-white rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg mb-3">Signs the Head is Ready</div>
        <ul className="space-y-2 text-green-200 text-sm">
          <li>Head is 4-8 inches (10-20 cm) across — exact size varies by variety</li>
          <li>Florets are tight, dense, and dark green (no yellow)</li>
          <li>Individual buds are small and firm when pressed — no openings visible</li>
          <li>The head feels solid and heavy for its size</li>
          <li>Cut in the morning for best flavour and firmness</li>
        </ul>
      </div>

      <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-xl mb-8">
        <div className="font-semibold text-red-800 mb-1">Signs You Have Waited Too Long</div>
        <ul className="text-red-700 text-sm space-y-1">
          <li>Any yellow colouring on the florets — this means the buds are opening</li>
          <li>Individual florets starting to separate or spread apart</li>
          <li>Tiny yellow flowers visible between buds</li>
          <li>Head feels less dense, almost hollow in places</li>
        </ul>
        <p className="text-red-700 text-sm mt-2">If you see any yellowing, harvest immediately. Overblown broccoli is still edible but flavour is much sharper and texture is inferior. Do not wait.</p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How to Harvest</h2>
      <p className="text-deepForest leading-relaxed mb-4">Cut the main stem at a 45-degree angle, 5-6 inches (12-15 cm) below the head. The 45-degree cut prevents water pooling on the cut surface (which invites rot). Leave the plant in the ground — after the main head is cut, most varieties produce smaller side shoots over the following 4-6 weeks that are also harvestable.</p>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Side Shoots After Harvest</div>
        <p className="text-sm text-deepForest leading-relaxed">After cutting the main head, leave the plant and continue watering. Side shoots emerge from the leaf axils and develop into small but flavourful heads, typically 2-4 inches across. These secondary harvests extend the productive season by weeks. The plant will eventually exhaust itself or bolt — at which point it is finished.</p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Days to Maturity by Variety</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Variety</th>
              <th className="px-3 py-2 text-left">Days to Maturity (from transplant)</th>
              <th className="px-3 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Calabrese', '65-70 days', 'Classic Italian type, good side shoot production'],
              ['Belstar', '65 days', 'Heat-tolerant, popular for fall growing'],
              ['Destiny', '68 days', 'Compact head, good for home gardens'],
              ['Di Ciccio', '48-70 days', 'Heavy side shoot producer, heirloom'],
            ].map(([v, d, n], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{v}</td>
                <td className="px-3 py-2 text-sage">{d}</td>
                <td className="px-3 py-2 text-sage">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">How Long Does Broccoli Last? →</Link>
        <Link href="/storage/how-to-freeze" className="text-sm text-forest font-semibold hover:underline">How to Freeze Broccoli →</Link>
        <Link href="/growing/from-seed" className="text-sm text-forest font-semibold hover:underline">Growing from Seed →</Link>
      </div>
    </article>
  )
}
