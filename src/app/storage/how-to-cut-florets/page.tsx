import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Cut Broccoli Florets (Without Making a Mess)',
  description: 'Cut broccoli florets from the stem cleanly. The stem-splitting technique minimises crumbles. How to use the stem, sizing for different cooking methods.',
  keywords: ['how to cut broccoli', 'how to cut broccoli florets', 'cutting broccoli', 'broccoli florets'],
}

export default function HowToCutFloretPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/storage" className="hover:text-forest">Storage</Link> /{' '}
        <span className="text-deepForest">How to Cut Florets</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">How to Cut Broccoli Florets</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">The key technique is splitting from the stem rather than cutting through the florets. Cutting straight through the head creates a shower of tiny crumbles. Starting from the base and working up produces clean, intact florets.</p>

      <div className="bg-deepForest text-white rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg mb-3">The Method</div>
        <ol className="space-y-2 text-green-200 text-sm list-decimal pl-4">
          <li>Cut the main stem off flush with the bottom of the head.</li>
          <li>Turn the head stem-side up on the cutting board.</li>
          <li>Starting at the base of each major branch, use the tip of the knife to split it away from the central stem — push rather than chop.</li>
          <li>Work from the outer edges inward. Each pull-apart produces a naturally shaped floret with minimal crumbling.</li>
          <li>For smaller florets, continue splitting each piece the same way rather than chopping.</li>
        </ol>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Size Guide by Cooking Method</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Size</th>
              <th className="px-3 py-2 text-left">Diameter</th>
              <th className="px-3 py-2 text-left">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Large', '2-3 inches', 'Roasting (maximum caramelisation), soup (holds shape while blending)'],
              ['Medium', '1-1.5 inches', 'Steaming, stir fry, salad, casseroles'],
              ['Small', '¾ inch', 'Air fryer (crispiest result), pasta (integrates with sauce)'],
              ['Very small / chopped', '¼-½ inch', 'Fritters, rice substitutes, pizza topping'],
            ].map(([size, dim, uses], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{size}</td>
                <td className="px-3 py-2 text-sage">{dim}</td>
                <td className="px-3 py-2 text-sage">{uses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Do Not Throw Away the Stem</h2>
      <p className="text-deepForest leading-relaxed mb-4">The thick main stem contains the same nutrients as the florets and makes up roughly 30-40% of the weight of a broccoli head. Peel the tough outer layer with a vegetable peeler to reveal the pale green interior, which has a milder flavour and firmer texture than the florets.</p>
      <p className="text-deepForest leading-relaxed mb-6">Uses for the peeled stem: slice into coins for stir fry (takes about 30 seconds longer than florets), dice for soups (it holds its shape better than florets), slice thin on a mandoline for raw salads, or cut into sticks for crudités.</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Broccoli Shelf Life →</Link>
        <Link href="/how-to-cook/roast" className="text-sm text-forest font-semibold hover:underline">How to Roast Broccoli →</Link>
        <Link href="/recipes/salad/classic" className="text-sm text-forest font-semibold hover:underline">Classic Broccoli Salad →</Link>
      </div>
    </article>
  )
}
