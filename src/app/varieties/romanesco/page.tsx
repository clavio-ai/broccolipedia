import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Romanesco Broccoli: What It Is, Taste, and How to Cook It',
  description: 'Romanesco is a lime-green vegetable with geometric spiral florets. Related to cauliflower more than broccoli. Nutty, mild flavour. Cooking guide.',
  keywords: ['romanesco broccoli', 'what is romanesco', 'romanesco taste', 'how to cook romanesco'],
}

export default function RomanescoPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/varieties" className="hover:text-forest">Varieties</Link> /{' '}
        <span className="text-deepForest">Romanesco</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Romanesco</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Romanesco (<em>Brassica oleracea var. botrytis</em>) is technically a variant of cauliflower, not broccoli, despite being commonly called &ldquo;romanesco broccoli.&rdquo; Its defining feature is the logarithmic spiral pattern of its florets — each small turret is a miniature of the whole head, a naturally occurring approximation of a fractal.</p>

      <div className="grid grid-cols-2 gap-4 bg-greenTint rounded-xl p-5 mb-8 text-sm">
        {[
          ['Scientific classification', 'Brassica oleracea var. botrytis (same as cauliflower)'],
          ['Origin', 'Italy — documented in Roman herbals as early as the 16th century'],
          ['Colour', 'Lime green with yellow-green spiral florets'],
          ['Flavour', 'Nuttier and milder than broccoli, less sulphurous than cauliflower'],
          ['Season', 'Fall through early winter — short season'],
          ['Cook time', 'Similar to cauliflower: 12-15 min roast, 5-6 min blanch'],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-semibold text-deepForest">{k}</div>
            <div className="text-sage">{v}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Does Romanesco Taste Like?</h2>
      <p className="text-deepForest leading-relaxed mb-6">Romanesco has a noticeably milder, nuttier flavour than standard broccoli. The sulphurous bite that some find off-putting in broccoli is largely absent. It sits between broccoli and cauliflower on the flavour spectrum — with more nuttiness than cauliflower and less intensity than broccoli. The texture holds up well to roasting and remains slightly firm when perfectly cooked, unlike cauliflower which becomes soft quickly.</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How to Cook Romanesco</h2>
      <p className="text-deepForest leading-relaxed mb-4">Romanesco responds best to roasting, which amplifies its nuttiness. Roast at 425°F for 18-22 minutes the same way as standard broccoli. It also works well blanched and served cold in salads, or used raw in crudités where its visual impact is most apparent.</p>
      <p className="text-deepForest leading-relaxed mb-8">Avoid boiling — it becomes waterlogged quickly and loses both colour and texture. Avoid overcooking in general: romanesco at peak texture should have a slight bite to the thickest parts of the stem.</p>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">The Fractal Pattern</div>
        <p className="text-sm text-deepForest leading-relaxed">Romanesco&apos;s spiral pattern is an approximation of a Fibonacci spiral — each floret is arranged at the golden angle (approximately 137.5°) to maximise packing density. This is the same mathematical pattern seen in sunflower seeds, pinecones, and nautilus shells. It is one of the few vegetables you can point to as a naturally occurring near-fractal.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">All Varieties →</Link>
        <Link href="/facts/broccoli-vs-cauliflower" className="text-sm text-forest font-semibold hover:underline">Broccoli vs Cauliflower →</Link>
        <Link href="/how-to-cook/roast" className="text-sm text-forest font-semibold hover:underline">How to Roast Broccoli →</Link>
      </div>
    </article>
  )
}
