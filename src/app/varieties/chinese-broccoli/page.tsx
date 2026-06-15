import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chinese Broccoli (Gai Lan): How to Cook and Use It',
  description: 'Chinese broccoli (gai lan, kailan) has thick stems, small florets, and mild bitterness. The standard vegetable in oyster sauce stir fry. Cooking guide.',
  keywords: ['Chinese broccoli', 'gai lan', 'kailan', 'how to cook gai lan', 'Chinese broccoli vs broccoli'],
}

export default function ChineseBroccoliPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/varieties" className="hover:text-forest">Varieties</Link> /{' '}
        <span className="text-deepForest">Chinese Broccoli</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Chinese Broccoli (Gai Lan)</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Chinese broccoli (<em>Brassica oleracea var. alboglabra</em>) is the dominant green vegetable in Cantonese cuisine. Unlike standard broccoli, it is grown primarily for its thick stems and leaves, not for a large central head. The small white or yellow florets are edible but secondary.</p>

      <div className="bg-greenTint rounded-xl p-5 mb-8 grid grid-cols-2 gap-3 text-sm">
        {[
          ['Also called', 'Gai lan (Cantonese), kailan (Malay), kai-lan (Thai)'],
          ['Scientific name', 'Brassica oleracea var. alboglabra'],
          ['Origin', 'Southern China, used for 1,000+ years'],
          ['Bitterness', 'Mild — less than broccoli rabe, slightly more than standard broccoli'],
          ['Best for', 'Oyster sauce stir fry, blanching with sauce, dim sum'],
          ['Cook time', '3-5 min blanch or stir fry'],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-semibold text-deepForest">{k}</div>
            <div className="text-sage">{v}</div>
          </div>
        ))}
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How to Cook Chinese Broccoli</h2>
      <p className="text-deepForest leading-relaxed mb-4">The classic preparation in Cantonese restaurants is blanch-and-sauce: boil the gai lan whole for 3-4 minutes until the stems are just tender, drain, and pour a hot oyster sauce dressing over the top. The stems remain firm, the leaves wilt, and the bitter edge is softened by the saltiness of the oyster sauce.</p>

      <div className="bg-deepForest text-white rounded-xl p-5 mb-8">
        <div className="font-serif font-bold text-lg mb-3">Classic Oyster Sauce Dressing</div>
        <ul className="text-green-200 text-sm space-y-1">
          <li>3 tablespoons oyster sauce</li>
          <li>1 teaspoon sesame oil</li>
          <li>1 teaspoon sugar</li>
          <li>2 tablespoons hot water (from the blanching pot)</li>
          <li>Optional: 1 clove garlic, grated</li>
        </ul>
        <p className="text-xs text-green-400 mt-3">Stir together and pour over drained gai lan. Add crispy fried garlic or ginger for texture.</p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Gai Lan vs Standard Broccoli</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Feature</th>
              <th className="px-3 py-2 text-left">Gai Lan</th>
              <th className="px-3 py-2 text-left">Standard Broccoli</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Main edible part', 'Stems + leaves', 'Head/florets'],
              ['Flavour', 'Mild, slightly bitter', 'Nutty, mild'],
              ['Texture', 'Firm stems, silky leaves', 'Dense florets'],
              ['Cook time', '3-5 min', '5-10 min'],
              ['Cuisine', 'Primarily Cantonese/SE Asian', 'Global'],
            ].map(([f, g, s], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{f}</td>
                <td className="px-3 py-2 text-sage">{g}</td>
                <td className="px-3 py-2 text-sage">{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/varieties/broccolini" className="text-sm text-forest font-semibold hover:underline">Broccolini →</Link>
        <Link href="/varieties/broccoli-rabe" className="text-sm text-forest font-semibold hover:underline">Broccoli Rabe →</Link>
        <Link href="/recipes/beef/beef-and-broccoli" className="text-sm text-forest font-semibold hover:underline">Beef and Broccoli Recipe →</Link>
      </div>
    </article>
  )
}
