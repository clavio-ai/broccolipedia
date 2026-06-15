import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Types of Broccoli: Calabrese, Sprouting, Broccolini, and More',
  description: 'The main types of broccoli — Calabrese (standard), sprouting, broccoli rabe, broccolini, and romanesco. How they differ and when to use each.',
  keywords: ['types of broccoli', 'kinds of broccoli', 'different types of broccoli', 'broccoli varieties list'],
}

export default function TypesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/facts" className="hover:text-forest">Facts</Link> /{' '}
        <span className="text-deepForest">Types</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Types of Broccoli</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">The word &ldquo;broccoli&rdquo; covers a broader range of vegetables than most people realise. Here are the main categories you will encounter in markets and seed catalogues.</p>

      <div className="space-y-6 mb-10">
        {[
          {
            name: 'Calabrese Broccoli (Standard Broccoli)',
            scientific: 'Brassica oleracea italica',
            description: 'The vegetable most people picture when they think of broccoli — a large, dome-shaped head on a thick central stalk with side florets. Developed in the Calabria region of Italy. Virtually all supermarket broccoli is a Calabrese type or hybrid derived from it.',
            use: 'Everything — steaming, roasting, stir fry, soup, salads, casseroles.',
            link: null,
          },
          {
            name: 'Sprouting Broccoli',
            scientific: 'Brassica oleracea italica (purple or white sprouting varieties)',
            description: 'Produces many small heads rather than one large central head. Purple sprouting broccoli is a popular variety in the UK. Harvested over a longer period — as each small head is cut, more develop. The flavour is generally considered more intense than standard Calabrese.',
            use: 'Blanched and eaten as a side dish, grilled, in pasta.',
            link: null,
          },
          {
            name: 'Broccoli Sprouts',
            scientific: 'Brassica oleracea italica (germinated seedlings)',
            description: 'Not a variety but a growth stage — the seedlings of broccoli harvested 3-5 days after germination. The interest in broccoli sprouts comes from their exceptionally high glucoraphanin content — 20-50× that of mature broccoli per unit weight, according to Johns Hopkins PNAS 1997.',
            use: 'Eaten raw in salads and sandwiches. Cooking destroys the enzyme (myrosinase) needed for sulforaphane production.',
            link: '/nutrition/sprouts',
          },
          {
            name: 'Broccolini',
            scientific: 'Brassica oleracea × B. oleracea var. alboglabra (hybrid)',
            description: 'A commercial hybrid of broccoli and Chinese broccoli (gai lan). Thin stems, small florets, mild sweet flavour with no bitterness. Trademarked by Sakata Seed Corp (Japan, 1993).',
            use: 'Roasting, sautéing, stir fry. The entire stem is edible without peeling.',
            link: '/varieties/broccolini',
          },
          {
            name: 'Broccoli Rabe (Rapini)',
            scientific: 'Brassica rapa subsp. rapa',
            description: 'Despite the name, broccoli rabe is not closely related to broccoli — it is a turnip family plant (Brassica rapa, not Brassica oleracea). Very bitter. Grown for its leaves, thin stems, and small florets.',
            use: 'Italian and Portuguese cooking — blanched and sautéed with garlic, olive oil, and sausage.',
            link: '/varieties/broccoli-rabe',
          },
          {
            name: 'Romanesco',
            scientific: 'Brassica oleracea var. botrytis',
            description: 'Technically classified with cauliflower (both are Brassica oleracea var. botrytis). Lime-green, with mathematically precise logarithmic spiral florets. Mild, nutty flavour — less intense than standard broccoli.',
            use: 'Roasting, raw in salads, crudités. The visual impact is best preserved when served in large pieces.',
            link: '/varieties/romanesco',
          },
        ].map((type) => (
          <div key={type.name} className="bg-white border border-greenTint rounded-xl p-5">
            <div className="font-serif font-bold text-xl text-deepForest mb-1">{type.name}</div>
            <div className="text-xs text-forest italic mb-2">{type.scientific}</div>
            <p className="text-sm text-sage leading-relaxed mb-2">{type.description}</p>
            <div className="text-xs text-deepForest"><strong>Best for:</strong> {type.use}</div>
            {type.link && (
              <Link href={type.link} className="text-xs text-forest font-semibold hover:underline mt-1 block">Full guide →</Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">Varieties Hub →</Link>
        <Link href="/facts/is-broccoli-man-made" className="text-sm text-forest font-semibold hover:underline">Is Broccoli Man-Made? →</Link>
        <Link href="/nutrition/sprouts" className="text-sm text-forest font-semibold hover:underline">Broccoli Sprouts Guide →</Link>
      </div>
    </article>
  )
}
