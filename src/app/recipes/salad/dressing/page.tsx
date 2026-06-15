import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli Salad Dressing: The Perfect Creamy Recipe',
  description: 'The mayo + apple cider vinegar + sugar ratio for perfect broccoli salad dressing. Why the ratio matters, variations, and how to adjust for taste.',
  keywords: ['broccoli salad dressing', 'broccoli salad dressing recipe', 'creamy broccoli salad dressing'],
}

export default function SaladDressingPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/recipes" className="hover:text-forest">Recipes</Link> /{' '}
        <Link href="/recipes/salad" className="hover:text-forest">Salad</Link> /{' '}
        <span className="text-deepForest">Dressing</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Broccoli Salad Dressing: The Perfect Ratio
      </h1>
      <p className="text-lg text-sage leading-relaxed mb-6">
        The dressing is what makes or breaks a broccoli salad. Too much mayo and it coats rather than dresses. Too little vinegar and it tastes flat. The ratio that works is <strong className="text-deepForest">¾ cup mayo : 2 tablespoons apple cider vinegar : 3 tablespoons sugar</strong>.
      </p>

      <div className="bg-deepForest text-white rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-xl mb-3">The Base Recipe</div>
        <ul className="space-y-2 text-green-200 text-sm">
          <li>¾ cup (180g) good-quality mayonnaise</li>
          <li>2 tablespoons apple cider vinegar</li>
          <li>3 tablespoons white sugar (or 2 tbsp honey)</li>
          <li>¼ teaspoon salt</li>
          <li>¼ teaspoon black pepper</li>
        </ul>
        <p className="text-xs text-green-400 mt-3">Whisk together. Taste. Adjust acidity or sweetness before tossing with broccoli. Makes enough for 4–6 cups of broccoli.</p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Why This Ratio Works</h2>
      <p className="text-deepForest leading-relaxed mb-4">
        The apple cider vinegar does two things: it cuts through the richness of the mayo (preventing the coating feeling) and it slightly softens the raw broccoli as the salad rests. The sugar balances the vinegar — the ratio is calibrated so you taste tang first and sweetness second, with neither dominating.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        If you substitute white wine vinegar, you get a sharper, less fruity profile. Lemon juice works in a pinch but lacks the depth of fermented vinegar. Red wine vinegar is too assertive — it competes with the broccoli flavour.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Variations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { name: 'Lighter Version', recipe: 'Replace half the mayo with full-fat Greek yogurt. Reduce sugar to 2 tbsp. More tang, fewer calories.' },
          { name: 'Honey Mustard', recipe: 'Replace sugar with 2 tbsp honey. Add 1 tsp Dijon mustard. More complex, slightly sharper.' },
          { name: 'Dairy-Free', recipe: 'Use vegan mayo. Everything else stays the same. Works identically.' },
        ].map((v, i) => (
          <div key={i} className="bg-white border border-greenTint rounded-xl p-4">
            <div className="font-serif font-semibold text-base text-deepForest mb-2">{v.name}</div>
            <p className="text-sm text-sage">{v.recipe}</p>
          </div>
        ))}
      </div>

      <div className="fact-block mb-8">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">When to Add the Dressing</div>
        <p className="text-sm text-deepForest leading-relaxed">
          Toss the dressing with the raw broccoli at least 30 minutes before serving — ideally 1 hour. The vinegar in the dressing begins to break down the raw broccoli&apos;s cell walls slightly, which is what makes the texture right for eating. Dressing added right before serving produces a harsher, crunchier texture.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/recipes/salad/classic" className="text-sm text-forest font-semibold hover:underline">Classic Broccoli Salad →</Link>
        <Link href="/recipes/salad/with-bacon" className="text-sm text-forest font-semibold hover:underline">Broccoli Salad with Bacon →</Link>
        <Link href="/nutrition/vitamins" className="text-sm text-forest font-semibold hover:underline">Broccoli Vitamin C Content →</Link>
      </div>
    </article>
  )
}
