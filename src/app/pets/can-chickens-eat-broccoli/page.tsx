import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Can Chickens Eat Broccoli? Yes — Here\'s How to Feed It',
  description: 'Chickens love broccoli — florets, stems, and leaves. Safe to feed raw or cooked, unseasoned. A good use for broccoli waste.',
  keywords: ['can chickens eat broccoli', 'broccoli for chickens', 'feeding chickens broccoli', 'chickens and broccoli'],
}

export default function CanChickensEatBroccoliPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/pets" className="hover:text-forest">Pets</Link> /{' '}
        <span className="text-deepForest">Can Chickens Eat Broccoli?</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Can Chickens Eat Broccoli?</h1>

      <div className="bg-forest text-white rounded-xl p-4 mb-6">
        <div className="font-bold text-lg">Yes — chickens eat broccoli readily and it is safe</div>
        <p className="text-green-200 text-sm mt-1">Broccoli is one of the better kitchen scraps to feed backyard chickens. All parts of the plant — florets, stems, leaves, stalks — are safe. Most chickens eat it enthusiastically, especially when hung from the coop as an enrichment treat.</p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Parts Can Chickens Eat?</h2>
      <div className="space-y-2 text-sm mb-6">
        {[
          ['Florets', 'Safe — chickens will peck them apart. Hang the head from string for entertainment.'],
          ['Stems', 'Safe — chop into smaller pieces for easier eating.'],
          ['Leaves', 'Safe — often eaten first. Good use for broccoli leaves that humans rarely eat.'],
          ['Cooked broccoli (plain)', 'Safe — but less nutritious than raw. Never feed seasoned, buttered, or sauced broccoli.'],
        ].map(([part, note]) => (
          <div key={part} className="bg-greenTint rounded-xl p-3">
            <span className="font-semibold text-deepForest">{part}: </span>
            <span className="text-sage">{note}</span>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How Much Broccoli Is Too Much?</h2>
      <p className="text-deepForest leading-relaxed mb-4">As a treat, broccoli should make up no more than 10% of a chicken&apos;s total diet. The main concern with excess vegetables is diluting the nutritional density of their primary feed (layer pellets or mash), which is formulated to provide all the protein, calcium, and vitamins they need. Treats supplement but should not replace commercial feed.</p>
      <p className="text-deepForest leading-relaxed mb-6">Large quantities of cruciferous vegetables like broccoli can also affect thyroid function in chickens over time (goitrogenic effect), though this is only a concern with very high consumption over extended periods — not from occasional treats.</p>

      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">The Hanging Head Trick</div>
        <p className="text-sm text-deepForest leading-relaxed">Suspend a whole broccoli head at head height in the chicken run. Chickens will spend significant time pecking at it, which provides both nutrition and behavioural enrichment. This reduces boredom-driven pecking in confined flocks and is a more natural way to deliver the treat than simply throwing pieces on the ground.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/pets/can-dogs-eat-broccoli" className="text-sm text-forest font-semibold hover:underline">Can Dogs Eat Broccoli? →</Link>
        <Link href="/pets/can-cats-eat-broccoli" className="text-sm text-forest font-semibold hover:underline">Can Cats Eat Broccoli? →</Link>
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Storing Fresh Broccoli →</Link>
      </div>
    </article>
  )
}
