import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Freeze Broccoli (Step by Step)',
  description: 'Blanch broccoli before freezing to preserve colour, texture, and nutrients. Freeze in a single layer first, then bag. Lasts 12 months.',
  keywords: ['how to freeze broccoli', 'freezing broccoli', 'freeze fresh broccoli', 'broccoli freezer'],
}

export default function HowToFreezePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/storage" className="hover:text-forest">Storage</Link> /{' '}
        <span className="text-deepForest">How to Freeze</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">How to Freeze Broccoli</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">The critical step is blanching before freezing. Without blanching, enzymes in the broccoli continue to break down the cell walls even in the freezer — producing mushy texture and off-flavours within weeks. Blanching inactivates those enzymes and the broccoli stays good for up to 12 months.</p>

      <div className="bg-deepForest text-white rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg mb-3">Quick Method Summary</div>
        <ol className="space-y-2 text-green-200 text-sm list-decimal pl-4">
          <li>Cut into uniform 1-2 inch florets</li>
          <li>Blanch 2-3 min in boiling salted water</li>
          <li>Ice bath immediately for 2-3 min</li>
          <li>Drain and dry thoroughly</li>
          <li>Freeze in single layer on baking sheet (1-2 hours)</li>
          <li>Transfer to airtight freezer bags, remove air</li>
          <li>Label with date — use within 12 months</li>
        </ol>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Why Each Step Matters</h2>
      <div className="space-y-4 mb-8">
        {[
          { step: 'Blanching', why: 'Inactivates peroxidase and catalase enzymes that cause freezer degradation. 2-3 minutes at a full boil — 2 min for small florets, 3 min for larger pieces. Under-blanching is worse than not blanching at all.' },
          { step: 'Ice Bath', why: 'Stops the cooking process immediately. Without it, residual heat continues to soften the broccoli. The ice bath also helps preserve the bright green colour.' },
          { step: 'Drying', why: 'Surface moisture on frozen broccoli forms ice crystals that damage cell walls, causing mushiness on thawing. Pat completely dry before the single-layer freeze step.' },
          { step: 'Single Layer Freeze (Flash Freeze)', why: 'Freezing pieces individually prevents them from clumping into a solid block. Once frozen solid (1-2 hours), you can combine them into one bag and remove pieces as needed.' },
        ].map((item) => (
          <div key={item.step} className="bg-white border border-greenTint rounded-xl p-4">
            <div className="font-semibold text-deepForest mb-1">{item.step}</div>
            <p className="text-sm text-sage">{item.why}</p>
          </div>
        ))}
      </div>

      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Can I Freeze Broccoli Without Blanching?</div>
        <p className="text-sm text-deepForest leading-relaxed">Technically yes, but it is not recommended. Unblanched frozen broccoli deteriorates to a noticeably inferior quality within 2-3 months — yellowing, mushy texture, and off-flavours. If you plan to use it within 2 weeks (e.g., adding directly to soups from frozen), skipping blanching is acceptable. For longer storage, always blanch.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Fridge Shelf Life →</Link>
        <Link href="/how-to-cook/frozen" className="text-sm text-forest font-semibold hover:underline">Cooking Frozen Broccoli →</Link>
        <Link href="/storage/how-to-cut-florets" className="text-sm text-forest font-semibold hover:underline">How to Cut Florets →</Link>
      </div>
    </article>
  )
}
