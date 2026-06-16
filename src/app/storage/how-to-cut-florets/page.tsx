import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How to Cut Broccoli into Florets (Without the Green Confetti)',
  description:
    'Flip it upside down, score the stem, pull apart by hand. Elena Ignacio explains the pull-apart method, how to size florets for roasting vs stir fry, and the 40-minute sulforaphane trick no one writes about.',
  keywords: [
    'how to cut broccoli into florets',
    'how to cut broccoli',
    'broccoli florets',
    'how to cut broccoli without making a mess',
    'how to use broccoli stem',
    'broccoli stalk edible',
  ],
  openGraph: {
    title: 'How to Cut Broccoli into Florets (Without the Green Confetti)',
    description:
      'The pull-apart method: flip it upside down, score the stem from underneath, pull the floret apart with your hands. Clean board, even pieces, no confetti.',
    url: 'https://broccolipedia.com/storage/how-to-cut-florets',
    type: 'article',
    images: [
      {
        url: '/images/cut-broccoli-florets/cut-broccoli-florets-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli head on a wooden cutting board with florets separated beside it, chef knife resting nearby',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/storage/how-to-cut-florets',
  },
}

const schemaJson = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/storage/how-to-cut-florets#article',
    headline: 'How to Cut Broccoli into Florets (Without the Green Confetti)',
    description:
      'The pull-apart method: flip the broccoli upside down, score the stem from underneath, pull the floret apart with your hands. Even pieces, clean board, no mess.',
    image: 'https://broccolipedia.com/images/cut-broccoli-florets/cut-broccoli-florets-hero-broccoli-feature.webp',
    datePublished: '2026-06-16',
    dateModified: '2026-06-16',
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
        url: 'https://broccolipedia.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/storage/how-to-cut-florets',
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      {
        '@type': 'Thing',
        name: 'Sulforaphane',
        sameAs: 'https://www.wikidata.org/wiki/Q424489',
      },
      {
        '@type': 'Thing',
        name: 'Myrosinase',
        sameAs: 'https://www.wikidata.org/wiki/Q416212',
      },
      {
        '@type': 'Thing',
        name: 'Glucoraphanin',
        sameAs: 'https://www.wikidata.org/wiki/Q5572329',
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Cutting board',
        sameAs: 'https://www.wikidata.org/wiki/Q617239',
      },
      {
        '@type': 'Thing',
        name: "Chef's knife",
        sameAs: 'https://www.wikidata.org/wiki/Q23752',
      },
      {
        '@type': 'Thing',
        name: 'Vegetable peeler',
        sameAs: 'https://www.wikidata.org/wiki/Q14894',
      },
      {
        '@type': 'Thing',
        name: 'Stir frying',
        sameAs: 'https://www.wikidata.org/wiki/Q8980672',
      },
      {
        '@type': 'Thing',
        name: 'Roasting',
        sameAs: 'https://www.wikidata.org/wiki/Q4865573',
      },
      {
        '@type': 'Thing',
        name: 'Vitamin C',
        sameAs: 'https://www.wikidata.org/wiki/Q199678',
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#quick-answer', '#article-intro'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Cut Broccoli into Florets',
    description:
      'The pull-apart method for cutting broccoli into even, clean florets without mess. Flip it upside down and cut from the underside.',
    image: 'https://broccolipedia.com/images/cut-broccoli-florets/cut-broccoli-florets-hero-broccoli-feature.webp',
    totalTime: 'PT2M',
    tool: [
      {
        '@type': 'HowToTool',
        name: "Chef's knife",
        sameAs: 'https://www.wikidata.org/wiki/Q23752',
      },
      {
        '@type': 'HowToTool',
        name: 'Cutting board',
        sameAs: 'https://www.wikidata.org/wiki/Q617239',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Sharpen your knife',
        text: "Start with a sharp chef's knife. A dull knife crushes the broccoli buds and creates mess.",
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Flip the crown upside down',
        text: 'Place the broccoli crown upside down on the cutting board so the stalk faces up. This lets you see the natural branching points.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Pick off any leaves by hand',
        text: 'Remove any large leaves by hand rather than cutting them. They come off cleanly with fingers.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Score the outermost stems and pull apart',
        text: 'Find where each outer stem branches from the central stalk. Run the knife tip into the stem halfway, then pull the floret apart with your hands at the natural seam.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Work inward, repeat',
        text: 'Once the outer florets are removed, the remaining clusters are easy to access. Repeat the score-and-pull motion.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Split any large florets again',
        text: 'For large florets, use the same method: score the stem, pull apart. Never cut through the green floret tops.',
      },
    ],
    yield: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 3,
      unitText: 'cups of florets per head',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do you cut broccoli without making a mess?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flip the broccoli upside down, score the stems from underneath, and pull the florets apart by hand. Never cut through the green tops. Keep a dry board and use a sharp knife.',
        },
      },
      {
        '@type': 'Question',
        name: 'What size should broccoli florets be for roasting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For roasting, aim for larger florets about 1.5 to 2 inches. The extra surface area produces caramelised edges. Spread them without touching each other on the pan.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do cut broccoli florets last in the fridge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cut broccoli florets last 4 to 5 days in an airtight container. Line the container with a dry paper towel to absorb moisture. Do not wash until ready to use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you eat the broccoli stem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Peel the tough outer skin with a vegetable peeler to reveal the pale green, tender interior. The stalk has the same nutrient profile as the florets. Slice into coins for stir fry, but cook them first as they take longer than florets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you freeze cut broccoli florets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but blanch first. Blanch for 2 to 3 minutes in boiling water, then transfer straight into ice water. Dry completely before freezing. Blanched florets keep up to 10 months. Frozen raw, they go mushy.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
        name: 'Storage & Prep',
        item: 'https://broccolipedia.com/storage',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How to Cut Broccoli into Florets',
        item: 'https://broccolipedia.com/storage/how-to-cut-florets',
      },
    ],
  },
]

export default function HowToCutFloretsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-6">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/storage" className="hover:text-forest">Storage & Prep</Link>
          {' / '}
          <span className="text-deepForest">How to Cut Florets</span>
        </nav>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/cut-broccoli-florets/cut-broccoli-florets-hero-broccoli-feature.webp"
            alt="Broccoli head on a wooden cutting board with florets separated beside it, chef knife resting nearby"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          How to Cut Broccoli into Florets (Without the Green Confetti)
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-6 text-sm text-sage">
          <span>By <Link href="/about#elena-ignacio" className="text-forest font-semibold hover:underline">Elena Ignacio</Link></span>
          <span>·</span>
          <time dateTime="2026-06-16">June 16, 2026</time>
        </div>

        {/* Intro */}
        <div id="article-intro">
          <p className="text-lg text-deepForest leading-relaxed mb-4">
            Adam was eight and in the phase where every piece of food had to be exactly the right size. I cut a head of broccoli for a Sunday stir fry and got the usual outcome: mismatched pieces, some scorched by the time the thick ones were done, a cloud of green dust on the cutting board, and the stalk rolling toward the bin. Adam ate around the irregular bits. I threw away the stalk.
          </p>
          <p className="text-lg text-deepForest leading-relaxed mb-8">
            Then I watched a video that changed everything. Flip it upside down. Cut from the underside, where the stems branch off naturally. The broccoli comes apart the way it wants to. Even pieces. Clean board. No more confetti.
          </p>
        </div>

        {/* QuickAnswer block */}
        <div
          id="quick-answer"
          className="bg-deepForest text-white rounded-xl p-5 mb-10"
          role="note"
          aria-label="Quick Answer"
        >
          <p className="font-serif font-bold text-lg mb-2">Quick Answer</p>
          <p className="text-green-100 leading-relaxed">
            Flip the broccoli upside down on a cutting board. Use the tip of a sharp chef&apos;s knife to score each stem where it branches from the main stalk, then pull the floret apart with your hands. Never cut through the green tops. Work from outside in. The whole head takes about two minutes.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Should you cut from the top or the underside of the broccoli head?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Always the underside. This is the one rule that separates a clean board from a green mess.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          When you cut from the top, your knife goes straight through the floret buds. Those tiny green flower heads shatter. You get a pile of mismatched pieces and broccoli dust that sticks to everything.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          From the underside, you can see exactly where each stem attaches to the central stalk. That is your cutting guide. Score the stem with the tip of your knife, then use your hands to pull the floret apart at the natural seam. I call this the pull-apart method and it is the only one I use now. The florets come off looking like little trees, not stumps. The board stays clean. Adam stopped picking through his dinner.
        </p>

        {/* Section 2: Step-by-step */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Step-by-step: How to cut broccoli into florets
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Here is what I do every time. About two minutes once you have done it twice.
        </p>
        <ol className="space-y-3 mb-8 text-deepForest">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">1</span>
            <div><strong>Sharpen your knife first.</strong> A dull knife crushes the buds. Sharp blade, clean cuts. Most guides skip this.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">2</span>
            <div><strong>Set the crown upside down on the board.</strong> Stalk facing up. Now you can see where everything branches.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">3</span>
            <div><strong>Pick off any leaves by hand.</strong> They come off cleanly with fingers. The leaves are edible in soups or salads.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">4</span>
            <div><strong>Start at the outermost florets.</strong> Find where each stem branches from the central stalk. Run the knife tip into the stem halfway, then pull the floret apart with your hands at the natural seam.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">5</span>
            <div><strong>Work inward, repeat.</strong> Once the outer florets are off, the remaining clusters are easy to see and reach.</div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-white text-sm font-bold flex items-center justify-center">6</span>
            <div><strong>Split any large florets again.</strong> Same method: score the stem, pull apart. Cutting through the green top is never the answer.</div>
          </li>
        </ol>
        <p className="text-sage text-sm mb-8">One head gives you roughly 2 to 3 cups of florets.</p>

        {/* Section 3: Size guide */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          What size should broccoli florets be for roasting?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          This depends on what you are cooking, and getting it wrong is the main reason broccoli comes out unevenly done.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-3 py-2 text-left">Cooking method</th>
                <th className="px-3 py-2 text-left">Floret size</th>
                <th className="px-3 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Roasting', '1.5–2 inches', 'Larger surface area = more caramelisation without small pieces burning'],
                ['Stir fry', '1–1.5 inches', 'Cooks fast, holds up in the wok'],
                ['Salad', 'Under 1 inch', 'One piece of broccoli per forkful, not one giant tree'],
                ['Soup', 'Any', 'Size matters less. Everything softens anyway.'],
              ].map(([method, size, why], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                  <td className="px-3 py-2 font-medium text-deepForest">{method}</td>
                  <td className="px-3 py-2 text-sage">{size}</td>
                  <td className="px-3 py-2 text-sage">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-deepForest leading-relaxed mb-8">
          The real rule: uniform size within a batch. Even size means even cooking. That is genuinely the only thing that matters here.
        </p>

        {/* Section 4: Stalk */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Is the broccoli stalk edible?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Yes. And if you have been throwing it away, I did too for years.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          The outer skin is tough and fibrous. That is what puts people off. Once you peel it, the interior is pale green, tender, and mild. Alfi actually prefers it to the florets. He calls the coins I slice from the peeled stalk &ldquo;broccoli wheels.&rdquo;
        </p>
        <div className="bg-greenTint rounded-lg p-4 mb-4">
          <p className="font-semibold text-deepForest mb-2">Two ways to prep the stalk:</p>
          <ul className="space-y-2 text-deepForest text-sm">
            <li><strong>Vegetable peeler:</strong> easier for most people. Run it down all four sides until you hit the paler interior, then slice into coins.</li>
            <li><strong>Knife shave:</strong> if your knife skills are solid, shave the skin off flat. Same result, slightly faster.</li>
          </ul>
        </div>
        <p className="text-deepForest leading-relaxed mb-4">
          The stalk makes up roughly a third of the head by weight, with the same nutrient profile as the florets.{' '}
          <cite className="not-italic text-sm text-sage">(USDA FDC 170379)</cite>{' '}
          Throwing it away wastes a third of what you paid for.
        </p>
        <div className="border-l-4 border-forest pl-4 mb-8">
          <p className="text-deepForest leading-relaxed">
            <strong>Cooking order tip:</strong> the stalk takes longer than the florets. Put stalk pieces in the pan first. Add florets a few minutes later. I have never seen this written down anywhere, which is probably why your broccoli has come out mushy while the stalk was still firm.
          </p>
        </div>

        {/* Section 5: Nutrients */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Does cutting broccoli affect its nutrients?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Yes, and it is a bigger deal than most people realize.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Broccoli contains glucoraphanin, which converts into sulforaphane when the plant cells are broken open. The conversion happens because cutting activates an enzyme called myrosinase.{' '}
          <cite className="not-italic text-sm text-sage">(USDA FDC 170379; Fahey et al., 1997)</cite>
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Heat above 70 degrees Celsius destroys myrosinase. Chop and cook immediately, and very little sulforaphane forms. But chop and wait 40 minutes before cooking, and myrosinase finishes its work first.{' '}
          <cite className="not-italic text-sm text-sage">(Rungapamestry et al., 2007, British Journal of Nutrition)</cite>
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4">
          <p className="text-deepForest font-semibold">Almost nobody writes this down: chop, rest 40 minutes, then cook briefly.</p>
        </div>
        <p className="text-deepForest leading-relaxed mb-8">
          Raw broccoli has 89.2 mg of vitamin C per 100g, nearly your full daily value.{' '}
          <cite className="not-italic text-sm text-sage">(USDA FDC 170379)</cite>{' '}
          Boiling strips roughly half of it. Steam or stir fry for a short time to keep more intact.
        </p>

        {/* Section 6: Wash before or after */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Should you wash broccoli before or after cutting?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          After. This one surprised me.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Once the broccoli is cut into florets, you have much more exposed surface area to clean. Water reaches more of the plant. The florets get cleaner with less effort.
        </p>
        <p className="text-deepForest leading-relaxed mb-10">
          If you wash a whole head first, water gets trapped between the buds and makes the surface slippery when you are trying to cut. It also makes the board wet, which is exactly the wrong condition for a clean pull-apart.
        </p>

        {/* FAQ section */}
        <section aria-labelledby="faq-heading" className="border-t border-sage/20 pt-8 mb-10">
          <h2 id="faq-heading" className="font-serif font-bold text-2xl text-deepForest mb-6">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: 'How long do cut broccoli florets last in the fridge?',
                a: '4 to 5 days in an airtight container. Line the container with a dry paper towel to absorb moisture. Do not wash until you are ready to use them.',
              },
              {
                q: 'Can you freeze cut broccoli florets?',
                a: 'Yes, but blanch first. Two to 3 minutes in boiling water, then straight into ice water. Dry completely before freezing. Blanched properly, they keep up to 10 months. Frozen raw, they go mushy.',
              },
              {
                q: 'How do you cut broccoli without making a mess?',
                a: 'Flip it upside down, score the stems from underneath, and pull the florets apart by hand. Never cut through the green tops. Dry board, sharp knife.',
              },
              {
                q: 'What can you do with broccoli leaves?',
                a: 'Eat them. Pick them off by hand, wash, and toss into soups, salads, or stir fries.',
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
                <dt className="font-semibold text-deepForest mb-1">{q}</dt>
                <dd className="text-deepForest leading-relaxed pl-4 border-l-2 border-forest/30">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sources */}
        <section aria-labelledby="sources-heading" className="border-t border-sage/20 pt-6 mb-8">
          <h2 id="sources-heading" className="font-semibold text-deepForest text-sm mb-3">Sources</h2>
          <ul className="space-y-1 text-xs text-sage">
            <li>
              USDA FoodData Central, FDC ID 170379. Broccoli, raw.{' '}
              <a href="https://fdc.nal.usda.gov/food-details/170379" target="_blank" rel="noopener noreferrer" className="underline hover:text-forest">
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Fahey, J.W., Zhang, Y., &amp; Talalay, P. (1997). Broccoli sprouts: An exceptionally rich source of inducers of enzymes that protect against chemical carcinogens. <em>PNAS</em>, 94(19), 10367&ndash;10372.
            </li>
            <li>
              Rungapamestry, V., Duncan, A.J., Fuller, Z., &amp; Ratcliffe, B. (2007). Effect of cooking on the glucosinolate content, myrosinase activity, and metabolite profile of broccoli. <em>Journal of Agricultural and Food Chemistry</em>, 55(8), 2882&ndash;2888.
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <nav aria-label="Related articles" className="flex flex-wrap gap-4 pt-4 border-t border-sage/20">
          <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Shelf Life
          </Link>
          <Link href="/how-to-cook/roast" className="text-sm text-forest font-semibold hover:underline">
            How to Roast Broccoli
          </Link>
          <Link href="/recipes/salad/classic" className="text-sm text-forest font-semibold hover:underline">
            Classic Broccoli Salad
          </Link>
          <Link href="/how-to-cook/steam" className="text-sm text-forest font-semibold hover:underline">
            How to Steam Broccoli
          </Link>
        </nav>
      </article>
    </>
  )
}
