import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Broccolini vs Broccoli: The Real Difference | BroccoliPedia',
  description:
    'Broccolini is not baby broccoli. It has 4x more Vitamin A, cooks in half the time, and the entire stem is edible. Elena Ignacio explains the real differences — taste, nutrition, FODMAP, and when to swap one for the other.',
  keywords: [
    'broccolini vs broccoli difference',
    'broccolini vs broccoli',
    'is broccolini the same as baby broccoli',
    'which is healthier broccolini or broccoli',
    'broccolini nutrition',
    'broccolini FODMAP',
    'can you substitute broccolini for broccoli',
  ],
  openGraph: {
    title: 'Broccolini vs Broccoli: The Real Difference',
    description:
      'Four times more Vitamin A. Cooks in half the time. And the FODMAP rules are completely reversed. Elena breaks down every practical difference between broccolini and broccoli.',
    url: 'https://broccolipedia.com/varieties/broccolini',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccolini/broccolini-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccolini and broccoli side by side on a wooden board — BroccoliPedia',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
}

// ── Schema JSON-LD ────────────────────────────────────────────────────────────

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/varieties/broccolini#article',
      headline: 'Broccolini vs Broccoli: The Real Difference (And Why Adam Finally Ate His Greens)',
      description:
        'Broccolini is not baby broccoli. A practical guide to every real difference between broccolini and broccoli — taste, nutrition, FODMAP, substitution, and cost.',
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      url: 'https://broccolipedia.com/varieties/broccolini',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/broccolini/broccolini-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
      },
      author: {
        '@type': 'Person',
        '@id': 'https://broccolipedia.com/about#elena-ignacio',
        name: 'Elena Ignacio',
        url: 'https://broccolipedia.com/about',
        sameAs: [
          'https://www.tiktok.com/@elenasainda',
          'https://www.youtube.com/@adelevlogs',
          'https://www.facebook.com/elena.ignacio',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'BroccoliPedia',
        url: 'https://broccolipedia.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://broccolipedia.com/images/logo.webp',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/varieties/broccolini',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Broccolini',
          sameAs: 'https://www.wikidata.org/wiki/Q2229726',
        },
        {
          '@type': 'Thing',
          name: 'Broccoli',
          sameAs: 'https://www.wikidata.org/wiki/Q47722',
        },
        {
          '@type': 'Thing',
          name: 'Gai lan (Chinese Broccoli)',
          sameAs: 'https://www.wikidata.org/wiki/Q1677369',
        },
        {
          '@type': 'Thing',
          name: 'Vitamin A',
          sameAs: 'https://www.wikidata.org/wiki/Q18225',
        },
        {
          '@type': 'Thing',
          name: 'Vitamin C',
          sameAs: 'https://www.wikidata.org/wiki/Q199678',
        },
        {
          '@type': 'Thing',
          name: 'Sulforaphane',
          sameAs: 'https://www.wikidata.org/wiki/Q420',
        },
        {
          '@type': 'Thing',
          name: 'Stir frying',
          sameAs: 'https://www.wikidata.org/wiki/Q8980672',
        },
        {
          '@type': 'Thing',
          name: 'Cooking',
          sameAs: 'https://www.wikidata.org/wiki/Q38695',
        },
      ],
      mentions: [
        {
          '@type': 'Organization',
          name: 'Sakata Seed Company',
          description: 'Japanese seed company that created broccolini in 1993',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#quick-answer', '#faq-section'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/varieties/broccolini#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between broccolini and broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Broccolini is a hybrid of broccoli and Chinese broccoli (gai lan), created in Japan in 1993. It has slender stems, small florets, a milder sweeter flavor, and cooks faster. The entire stem is edible. Broccoli has a dense head, thicker stalks, and stronger earthy flavor.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is healthier: broccolini or broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are nutritious. Broccoli has roughly double the Vitamin C (89mg vs 47mg per 100g). Broccolini has nearly four times more Vitamin A (2,225 IU vs 567 IU per 100g) and more fiber (5g vs 2.6g per 100g). Everyday nutrition is strong either way. Broccolini produces less food waste. Sources: USDA FDC ID 170379; Healthyfood.com.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you substitute broccolini for broccoli in recipes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes in most dishes. Reduce cooking time by 30 to 40 percent. Broccolini works better in stir fries because it does not need pre-blanching. Broccoli holds shape better in casseroles and slow-cooked dishes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is broccolini easier on your stomach than broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For IBS sufferers on a low FODMAP diet: broccoli florets are safe but stalks are high FODMAP. Broccolini is the opposite — stalks are low FODMAP but florets are high FODMAP. Stick to a half cup of broccolini stems if you are FODMAP-sensitive. Both vegetables are cruciferous and can cause gas from sulfur compounds regardless of FODMAP content. Source: Stephanie Clairmont, registered dietitian.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is broccolini more expensive than broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harvest labor. A bunch of broccolini contains 15 to 20 individual stalks picked separately, versus 2 to 3 large broccoli heads. More farm labor per bunch equals higher retail cost, typically $3 to $4 per bunch versus $1 to $2 for broccoli. Source: Mashed.com.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does broccolini last in the fridge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'About 3 days. Broccoli lasts closer to 5 days. Store broccolini unwashed in a loose bag in the crisper drawer and use it within the first 2 days for best flavor.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/varieties/broccolini#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://broccolipedia.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Varieties',
          item: 'https://broccolipedia.com/varieties',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Broccolini vs Broccoli',
          item: 'https://broccolipedia.com/varieties/broccolini',
        },
      ],
    },
  ],
}

// ── Page Component ────────────────────────────────────────────────────────────

export default function BroccoliniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-5">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/varieties" className="hover:text-forest">Varieties</Link>
          {' / '}
          <span className="text-deepForest">Broccolini vs Broccoli</span>
        </nav>

        {/* Hero image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <Image
            src="/images/broccolini/broccolini-hero-broccoli-feature.webp"
            alt="Broccolini and broccoli side by side on a wooden chopping board"
            width={1200}
            height={630}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-6 leading-tight">
          Broccolini vs Broccoli: The Real Difference
        </h1>

        {/* Intro — Elena's personal moment */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          Adam refused broccoli for three months straight in 2022. Not tantrums, not drama. Just quietly
          pushing it to the edge of his plate every single time. I tried cheese sauce, roasting until
          the edges went almost burnt, hiding florets inside pasta. Nothing worked. Then one Saturday at
          the wet market in Toa Payoh, I grabbed the wrong thing. Slim, long stalks, tiny florets.
          I roasted it at 200°C for ten minutes with garlic and olive oil. Adam ate every piece and asked
          what it was. That was my introduction to broccolini.
        </p>

        {/* QuickAnswer block */}
        <div
          id="quick-answer"
          className="bg-greenTint rounded-2xl p-6 mb-8 border border-green-100"
        >
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-deepForest leading-relaxed">
            Broccolini is not baby broccoli. It is a hybrid created in 1993 by crossing standard
            broccoli with Chinese broccoli (gai lan). Long slender stems, small florets, milder and
            sweeter taste. Key differences: four times more Vitamin A than broccoli, cooks in half the
            time, and the entire stem is edible with no peeling needed.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          Is Broccolini the Same as Baby Broccoli?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          No, and this trips up a lot of people. Baby broccoli is just immature standard broccoli
          harvested before the head fully forms. It tastes like broccoli because it is broccoli.
        </p>
        <p className="text-deepForest leading-relaxed mb-6">
          Broccolini is a completely different plant. Scientists at Japan&apos;s Sakata Seed Company
          created it in 1993 by crossing regular broccoli with Chinese broccoli (gai lan). It launched
          as &ldquo;aspabroc,&rdquo; then &ldquo;asparation&rdquo; (genuinely one of the worst product
          names ever invented), and arrived in US grocery stores in 1996 as broccolini. In the UK it is
          sold as tenderstem. Same vegetable, different market name.
        </p>

        {/* Section 2 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          How They Taste and Look Different
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Broccoli has a dense rounded head, tight florets, and thick stalks that usually need peeling
          at the base. The flavor is earthy with mild bitterness, especially if overcooked. The florets
          are the main event.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Broccolini looks completely different. Long slender stalks, small loose florets at the top,
          sometimes a few small leaves. The whole plant is edible, top to bottom, with zero waste. The
          flavor is milder, subtly sweet, with a faint peppery note that comes from the gai lan side of
          its parentage.
        </p>
        <p className="text-deepForest leading-relaxed mb-6">
          Cooking time matters too. Broccolini roasts and sautees in 8 to 10 minutes versus
          broccoli&apos;s 15 to 20 minutes. That is a 30 to 40 percent difference, which matters when
          two hungry boys are circling the kitchen.
        </p>

        {/* Section 3 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          Which Is Healthier: Broccoli or Broccolini?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          You cannot go wrong with either, but they have clear strengths.
        </p>

        {/* Nutrition comparison cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-greenTint rounded-xl p-5">
            <p className="font-serif font-semibold text-deepForest mb-2">Broccoli wins</p>
            <p className="text-sm text-sage">
              Vitamin C: ~89mg per 100g raw vs ~47mg for broccolini. Roughly double. Significant if
              immune support is your priority. (USDA FDC 170379; Healthyfood.com)
            </p>
          </div>
          <div className="bg-white border border-greenTint rounded-xl p-5">
            <p className="font-serif font-semibold text-deepForest mb-2">Broccolini wins</p>
            <p className="text-sm text-sage">
              Vitamin A: ~2,225 IU per 100g vs ~567 IU for broccoli. Almost four times more. Also more
              calcium (108mg vs 47mg), iron (1.1mg vs 0.7mg), and fiber (5g vs 2.6g per 100g).
              (USDA FDC 170379; Healthline)
            </p>
          </div>
        </div>

        <p className="text-deepForest leading-relaxed mb-4">
          One cup of cooked broccolini delivers 5.44g of protein (WebMD). Both vegetables contain
          sulforaphane, which works through the myrosinase enzyme. Research suggests it reduces
          inflammation, protects against DNA mutations, and may slow tumor growth (WebMD). Both also
          contain indole-3-carbinol, which supports liver detoxification (Mashed.com). These are
          research findings, not medical claims.
        </p>
        <p className="text-deepForest leading-relaxed mb-6">
          Dietitian verdict from Healthyfood.com: &ldquo;Broccolini wins by a hair&apos;s breadth due
          to its vitamin A advantage and less food waste.&rdquo;
        </p>

        {/* Section 4 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          Is Broccolini Easier to Digest?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          This is where things get genuinely surprising. If you follow a low FODMAP diet for IBS, the
          rules for these two vegetables are completely reversed.
        </p>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-6">
          <p className="font-semibold text-deepForest mb-3 text-sm uppercase tracking-wide">
            The FODMAP Flip
          </p>
          <div className="space-y-2 text-sm text-deepForest">
            <p>
              <strong>Broccoli:</strong> florets = low FODMAP (safe). Stalks = high FODMAP
              (excess fructose, can trigger symptoms).
            </p>
            <p>
              <strong>Broccolini:</strong> stalks = low FODMAP (safe). Florets = high FODMAP.
              Exactly the opposite.
            </p>
            <p className="text-sage mt-2">
              Source: Stephanie Clairmont, registered dietitian, stephanieclairmont.com
            </p>
          </div>
        </div>

        <p className="text-deepForest leading-relaxed mb-6">
          If you have IBS and want broccolini, stick to a half cup serving and focus on the stems.
          Both vegetables are cruciferous and contain sulfur compounds that cause gas regardless of
          FODMAP status, so neither is a total fix for sensitive digestion.
        </p>

        {/* Section 5 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          Can You Swap One for the Other in Recipes?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Mostly yes. The main adjustment is cooking time. Reduce by 30 to 40 percent when
          substituting broccolini for broccoli. If a recipe calls for roasted broccoli at 200°C for
          20 minutes, use 10 to 12 minutes for broccolini.
        </p>
        <p className="text-deepForest leading-relaxed mb-6">
          For stir fries, broccolini works better because it does not need pre-blanching. Alfi
          refuses anything that looks soggy, so broccolini in stir fries has become my default for
          his plate. For casseroles or slow-cooked dishes where the vegetable needs to hold its shape,
          broccoli performs more reliably.
        </p>

        {/* Section 6 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-4">
          Why Does Broccolini Cost More?
        </h2>
        <p className="text-deepForest leading-relaxed mb-6">
          Labor. A standard bunch of broccoli has 2 to 3 large heads. A bunch of broccolini has 15
          to 20 individual stalks, each harvested separately (Mashed.com). More hands-on work at the
          farm equals a higher retail price, typically $3 to $4 per bunch versus $1 to $2 for
          broccoli. The cost difference reflects harvest labor, not ingredient rarity. Restaurants
          use broccolini for the same reason: faster cooking, zero prep waste, and it looks elegant on
          a plate.
        </p>

        {/* Shelf life */}
        <div className="fact-block bg-greenTint rounded-xl p-5 mb-10">
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
            Fridge Life
          </p>
          <p className="text-sm text-deepForest">
            Broccolini wilts within 3 days. Broccoli lasts around 5 days. Store both unwashed in a
            loose bag in the crisper drawer. Use broccolini within the first 2 days for best flavor.
          </p>
        </div>

        {/* FAQ section */}
        <section id="faq-section" aria-label="Frequently Asked Questions">
          <h2 className="font-serif font-bold text-2xl text-deepForest mt-4 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the difference between broccolini and broccoli?',
                a: 'Broccolini is a hybrid of broccoli and Chinese broccoli (gai lan), created in Japan in 1993. It has slender stems, small florets, a milder sweeter flavor, and cooks faster. The entire stem is edible. Broccoli has a dense head, thicker stalks, and stronger earthy flavor.',
              },
              {
                q: 'Which is healthier: broccolini or broccoli?',
                a: 'Both are nutritious. Broccoli has roughly double the Vitamin C. Broccolini has nearly four times more Vitamin A and more fiber (5g vs 2.6g per 100g). Everyday nutrition is strong either way. Broccolini\'s less food waste gives it a practical edge (Healthyfood.com).',
              },
              {
                q: 'Can you substitute broccolini for broccoli in recipes?',
                a: 'Yes in most dishes. Reduce cooking time by 30 to 40 percent. Broccolini works better in stir fries (no pre-blanching needed). Broccoli holds shape better in casseroles.',
              },
              {
                q: 'Is broccolini easier on your stomach than broccoli?',
                a: 'For IBS sufferers on low FODMAP: broccoli florets are safe (stalks are not), while broccolini stalks are safe but florets are high FODMAP. Stick to half a cup of broccolini stems if you are FODMAP-sensitive (Stephanie Clairmont, RD).',
              },
              {
                q: 'Why is broccolini more expensive than broccoli?',
                a: 'Harvest labor. A bunch of broccolini contains 15 to 20 individual stalks picked separately versus 2 to 3 large broccoli heads. More farm labor per bunch equals higher retail cost (Mashed.com).',
              },
              {
                q: 'How long does broccolini last in the fridge?',
                a: 'About 3 days versus broccoli\'s 5 days. Store unwashed in a loose bag in the crisper drawer. Use it within the first 2 days for best flavor.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-greenTint pb-6 last:border-0">
                <h3 className="font-serif font-semibold text-deepForest text-lg mb-2">{q}</h3>
                <p className="text-deepForest leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <div className="mt-10 pt-6 border-t border-greenTint">
          <p className="text-xs text-sage leading-relaxed">
            <strong>Sources:</strong> USDA FDC ID 170379 (broccoli nutrition baseline);
            Healthyfood.com dietitian comparison (Vitamin A/C data); Healthline (per 100g broccolini
            data); WebMD (protein, sulforaphane mechanism); Mashed.com (Sakata Seed Company, harvest
            labor); Stephanie Clairmont RD, stephanieclairmont.com (FODMAP data);
            whatsthediff.org (asparation naming history).
          </p>
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">
            All Broccoli Varieties →
          </Link>
          <Link href="/varieties/chinese-broccoli" className="text-sm text-forest font-semibold hover:underline">
            Chinese Broccoli (Gai Lan) →
          </Link>
          <Link href="/how-to/roast-broccolini" className="text-sm text-forest font-semibold hover:underline">
            How to Roast Broccolini →
          </Link>
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Nutrition →
          </Link>
        </div>

      </article>
    </>
  )
}
