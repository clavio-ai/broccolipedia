import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccolini: What It Is and How to Cook It',
  description: 'Broccolini is a hybrid of broccoli and gai lan. Thin stems, small florets, mild flavour. How it differs from broccoli and baby broccoli. Cooking guide.',
  keywords: ['broccolini', 'broccolini vs broccoli', 'how to cook broccolini', 'what is broccolini'],
}

export default function BroccoliniPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/varieties" className="hover:text-forest">Varieties</Link> /{' '}
        <span className="text-deepForest">Broccolini</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Broccolini</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Broccolini is a trademark name (Sakata Seed Corp, Japan, 1993) for a hybrid cross between standard broccoli and Chinese broccoli (gai lan). It is sometimes called &ldquo;baby broccoli&rdquo; in stores, which is technically inaccurate — it is not young broccoli, it is a distinct cultivar with thinner stems and a milder flavour.</p>

      <div className="bg-greenTint rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg text-deepForest mb-3">Key Facts</div>
        <ul className="space-y-2 text-sm text-deepForest">
          <li><strong>Origin:</strong> Japan, 1993 hybrid (Sakata Seed Corp)</li>
          <li><strong>Parents:</strong> Brassica oleracea italica (broccoli) × Brassica oleracea var. alboglabra (gai lan)</li>
          <li><strong>Flavour:</strong> Mild, slightly sweet, no bitterness — the mildest of the broccoli family</li>
          <li><strong>Cook time:</strong> Fast — 2-3 min blanch, 5-6 min roast, 3-4 min sauté</li>
          <li><strong>The entire plant is eaten:</strong> stems, leaves, and small florets — no waste</li>
        </ul>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Broccolini vs Broccoli</h2>
      <p className="text-deepForest leading-relaxed mb-4">The main differences are flavour and texture. Broccolini is milder (less sulphurous, no bitter finish), has thinner and more tender stems (no need to peel), and cooks faster. The florets are smaller and more dispersed. Standard broccoli has denser florets, a more pronounced flavour, and thicker stems that need trimming or peeling for quick cooking.</p>
      <p className="text-deepForest leading-relaxed mb-6">In terms of nutrition, they are comparable — both are high in vitamin C, vitamin K, and fibre. Broccolini has slightly fewer calories per serving (due to less dense florets) but the difference is minimal.</p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How to Cook Broccolini</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { method: 'Blanch', desc: 'Boil 2 min. Drain. Toss with olive oil and lemon. The simplest preparation.' },
          { method: 'Roast', desc: '400°F for 12-15 min. Drizzle with oil, salt, pepper. Edges get slightly crispy.' },
          { method: 'Sauté', desc: '3-4 min in olive oil or butter with garlic. Dress with lemon and parmesan.' },
        ].map((m) => (
          <div key={m.method} className="bg-white border border-greenTint rounded-xl p-4">
            <div className="font-serif font-semibold text-deepForest mb-1">{m.method}</div>
            <p className="text-sm text-sage">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Substituting Broccolini for Broccoli</div>
        <p className="text-sm text-deepForest">Broccolini substitutes well for broccoli in most dishes — reduce the cook time by 30-40% since the stems are thinner. For stir fries, it works better than standard broccoli because it does not need pre-blanching. For casseroles and heavy dishes, standard broccoli holds up better.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">All Broccoli Varieties →</Link>
        <Link href="/how-to-cook/roast" className="text-sm text-forest font-semibold hover:underline">How to Roast Broccoli →</Link>
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">Broccoli Nutrition →</Link>
      </div>
    </article>
  )
}
