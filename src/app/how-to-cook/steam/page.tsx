import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Steam Broccoli | BroccoliPedia',
  description:
    'Steam broccoli in 4 to 5 minutes over 1 inch of boiling water. Includes the 40-minute sulforaphane trick, microwave method, and no-steamer-basket workarounds.',
  keywords: [
    'how to steam broccoli',
    'steamed broccoli',
    'how long to steam broccoli',
    'steam broccoli microwave',
    'how to steam broccoli without a steamer',
    'how to season steamed broccoli',
  ],
  openGraph: {
    title: 'How to Steam Broccoli',
    description:
      'Steam broccoli in 4 to 5 minutes. Bright green color is your done signal. Includes the 40-minute sulforaphane trick no competitor explains.',
    url: 'https://broccolipedia.com/how-to-cook/steam',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/steam-broccoli/steam-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Steamed broccoli florets bright green in a steamer basket over a saucepan',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://broccolipedia.com/how-to-cook/steam',
  },
}

const breadcrumbSchema = {
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
      name: 'How to Cook',
      item: 'https://broccolipedia.com/how-to-cook',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Steam Broccoli',
      item: 'https://broccolipedia.com/how-to-cook/steam',
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Steam Broccoli',
  description:
    'Steam broccoli on the stovetop over 1 inch of boiling water for 4 to 5 minutes to get vivid bright green, crisp-tender florets that retain more vitamin C and sulforaphane than boiling.',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/steam-broccoli/steam-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 630,
  },
  totalTime: 'PT5M',
  prepTime: 'PT2M',
  performTime: 'PT5M',
  yield: '4 servings',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli, 1 head (about 300g)' },
    { '@type': 'HowToSupply', name: 'Water, 1 inch depth in saucepan' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Medium saucepan with lid' },
    { '@type': 'HowToTool', name: 'Steamer basket' },
    { '@type': 'HowToTool', name: 'Chef knife and cutting board' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Brush and cut broccoli into even 1-inch florets',
      text: 'Brush the crown or rinse well and shake dry. Cut broccoli into even 1-inch florets, cutting stems to the same thickness as the floret heads for uniform cooking.',
      image: 'https://broccolipedia.com/images/steam-broccoli/steam-broccoli-broccoli-method-in-action.webp',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Optional: rest cut florets 40 minutes for sulforaphane',
      text: 'Let cut florets rest at room temperature for 40 minutes before cooking. Heat above 70°C destroys myrosinase, the enzyme that converts glucoraphanin into sulforaphane. Resting allows the reaction to complete before heat stops it.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Bring 1 inch of water to a full boil',
      text: 'Add 1 inch of water to a medium saucepan and bring to a full boil over high heat.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Place florets stems-down in steamer basket over boiling water',
      text: 'Place florets in steamer basket with stems facing down and lower into the pot. Stems take longer to cook; keeping them closer to the steam source helps them cook at the same rate as the floret tops.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Cover and steam on medium heat for 4 to 5 minutes',
      text: 'Cover the pot and reduce heat to medium. Steam for 4 to 5 minutes for crisp-tender, or 6 to 7 minutes for softer florets.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Toss florets halfway through at the 2 to 3 minute mark',
      text: 'At the 2 to 3 minute mark, remove the lid and toss the florets once. Pieces at the bottom get more steam exposure than the ones on top; one toss levels the cooking evenly.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Watch for bright green color change',
      text: 'When florets shift from dull chalky green to vivid bright green, they are done. If they go dark olive green, they are overcooked. Remove from heat immediately.',
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Season immediately and serve',
      text: 'Remove florets from the steamer basket immediately. Season with olive oil, lemon juice, salt, and black pepper while still hot. The heat helps seasoning absorb.',
    },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
    { '@type': 'Thing', name: 'Glucosinolate', sameAs: 'https://www.wikidata.org/wiki/Q416883' },
    { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
    { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
    { '@type': 'Thing', name: 'Steam', sameAs: 'https://www.wikidata.org/wiki/Q3251738' },
    { '@type': 'Thing', name: 'Boiling', sameAs: 'https://www.wikidata.org/wiki/Q41716' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it better to boil or steam broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Steaming is better for nutrient retention. Boiling causes water-soluble vitamins and glucosinolates to leach into the cooking water. Research shows steaming retains more vitamin C and sulforaphane precursors than boiling. After one minute of boiling, myrosinase is nearly deactivated and sulforaphane production stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know when steamed broccoli is done?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Watch the color. Raw broccoli is dull and chalky green. Properly steamed broccoli turns vivid and bright green. Olive-dark green means it is overcooked. For texture confirmation, press a fork into a thick floret stem: crisp-tender has slight resistance; soft yields easily without falling apart.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you steam broccoli without a steamer basket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a colander with a rim that rests over your pot. It works exactly like a steamer basket. Add 1 inch of water, bring to a boil, add broccoli to the colander, cover with a lid or foil, and steam 4 to 5 minutes. Alternatively, use a wide skillet with half an inch of water and a tight lid for 3 to 4 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does steamed broccoli turn gray or mushy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two reasons. First, overcooking: broccoli goes from bright green to gray in under a minute past the ideal point. Pull it out the moment it looks vivid. Second, residual heat: leaving cooked broccoli in a covered pot after turning off the heat continues cooking it. Remove from the basket immediately and plate.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Steam Broccoli',
  description:
    'Steam broccoli in 4 to 5 minutes over 1 inch of boiling water. Includes the 40-minute sulforaphane trick, microwave method, and no-steamer-basket workarounds.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/steam-broccoli/steam-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/how-to-cook/steam',
  },
  mentions: [
    { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
    { '@type': 'Thing', name: 'Glucosinolate', sameAs: 'https://www.wikidata.org/wiki/Q416883' },
    { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
  ],
}

export default function SteamBroccoliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex items-center gap-2 list-none p-0 m-0">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/how-to-cook" className="hover:underline">How to Cook</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-900 font-medium">How to Steam Broccoli</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          How to Steam Broccoli
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span>By</span>
          <a
            href="https://broccolipedia.com/about#elena-ignacio"
            className="font-medium text-deepForest hover:underline"
          >
            Elena Ignacio
          </a>
          <span>|</span>
          <time dateTime="2026-06-16">June 16, 2026</time>
        </div>

        {/* Hero image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src="/images/steam-broccoli/steam-broccoli-broccoli-method-in-action.webp"
            alt="Steamer basket lifted over a saucepan with vivid bright green broccoli florets steaming"
            width={800}
            height={533}
            className="w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Opening paragraph */}
        <p className="text-deepForest leading-relaxed text-base mb-6">
          Adam refused broccoli for a full month in 2022. Every night it came back untouched. It took me
          embarrassingly long to realize the problem was me. I had been boiling it. Gray, waterlogged, sad
          little florets. One Tuesday I steamed it instead, and he watched the color go from dull green to
          that vivid, almost glowing bright. He ate it. That color change is the whole lesson. The timer is
          secondary.
        </p>

        {/* Quick Answer */}
        <QuickAnswer>
          Steam broccoli over 1 inch of boiling water in a covered steamer basket for 4 to 5 minutes until
          the florets turn bright green and just yield to a fork. That color shift from dull to vivid is your
          done signal, not the clock. Remove immediately and season while still hot.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest list-none p-0 m-0">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5" aria-hidden="true">&#10003;</span>
              <span><strong>Steam time:</strong> 4 to 5 minutes for crisp-tender; 6 to 7 minutes for softer (kids love this range)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5" aria-hidden="true">&#10003;</span>
              <span><strong>Water level:</strong> 1 inch in the pot, enough to produce steady steam without touching the florets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5" aria-hidden="true">&#10003;</span>
              <span><strong>Done signal:</strong> Vivid bright green with slight fork resistance; olive-dark green means overcooked</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5" aria-hidden="true">&#10003;</span>
              <span><strong>Nutrient advantage:</strong> Steaming retains far more vitamin C and glucosinolates than boiling (PMC2722699)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5" aria-hidden="true">&#10003;</span>
              <span><strong>Sulforaphane trick:</strong> Chop and wait 40 minutes before applying heat to maximize sulforaphane production</span>
            </li>
          </ul>
        </div>

        {/* How Long to Steam Broccoli */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How Long to Steam Broccoli
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Four to five minutes for crisp-tender. Six to seven for softer florets. The range matters because
            floret size varies. I go by color first, then test with a fork. Alfi likes his softer, so I
            usually pull a few out at five minutes for his plate and let the rest go another minute.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="text-left p-3 font-semibold text-deepForest border border-green-200">Texture</th>
                  <th className="text-left p-3 font-semibold text-deepForest border border-green-200">Steam Time</th>
                  <th className="text-left p-3 font-semibold text-deepForest border border-green-200">Fork Test</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-green-200">Crisp-tender</td>
                  <td className="p-3 border border-green-200">4 to 5 minutes</td>
                  <td className="p-3 border border-green-200">Slight resistance</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 border border-green-200">Tender</td>
                  <td className="p-3 border border-green-200">5 to 6 minutes</td>
                  <td className="p-3 border border-green-200">Yields easily, holds shape</td>
                </tr>
                <tr>
                  <td className="p-3 border border-green-200">Soft (toddler-friendly)</td>
                  <td className="p-3 border border-green-200">6 to 7 minutes</td>
                  <td className="p-3 border border-green-200">Very soft, slight give only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-deepForest leading-relaxed">
            Do not go past 7 minutes. Past that the florets release sulfur compounds and that smell is exactly
            why kids wrinkle their noses.
          </p>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Step-by-Step Instructions
          </h2>

          {/* Prep image */}
          <div className="mb-5 rounded-xl overflow-hidden">
            <img
              src="/images/steam-broccoli/steam-broccoli-finished-result-plate.webp"
              alt="Steamed broccoli florets bright green and fresh in a matte cream ceramic bowl, ready to serve"
              width={800}
              height={533}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="text-deepForest leading-relaxed mb-4">
            <strong>Before you start:</strong> Brush the crown or rinse well and shake dry. Fine grit
            collects in the floret clusters and you do not want to steam that into dinner.
          </p>

          <ol className="space-y-5 text-deepForest leading-relaxed list-none p-0 m-0">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <strong>Cut the broccoli into even 1-inch florets.</strong> Uniform size is the single most
                important thing for even cooking. Cut the stems to roughly the same thickness as the floret
                heads. Pieces that are too big will be raw in the middle when the outside is done.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <strong>Optional but worth it: wait 40 minutes after cutting.</strong> Heat above 70°C
                destroys myrosinase, the enzyme that converts glucoraphanin into sulforaphane. If you let the
                cut florets rest at room temperature for 40 minutes first, the reaction completes before heat
                can stop it. Research in the Journal of Agricultural and Food Chemistry confirms this increases
                sulforaphane yield. I prep in the morning when I know broccoli is on the dinner menu.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <strong>Add 1 inch of water to a medium saucepan and bring it to a full boil over high heat.</strong>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <strong>Place florets in a steamer basket with stems facing down and lower into the pot.</strong>{' '}
                Stems take longer than the delicate tops. Keeping them closer to the steam source helps them
                cook at the same rate.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <div>
                <strong>Cover and reduce heat to medium. Steam for 4 to 5 minutes.</strong>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <div>
                <strong>At the 2 to 3 minute mark, remove the lid and toss the florets once.</strong> The
                pieces at the bottom of the basket get more direct steam exposure than the ones on top. One
                quick toss levels this out. No written guide I have read mentions this, but it genuinely makes
                a difference.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
              <div>
                <strong>Watch for the color change.</strong> Dull, chalky green going vivid and bright means
                the florets are done or very close. If they start going dark olive green, they are overcooked.
                Pull them out immediately.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
              <div>
                <strong>Remove from heat and season right away.</strong> A drizzle of olive oil, a squeeze of
                lemon, salt, and black pepper. The heat helps the seasoning absorb.
              </div>
            </li>
          </ol>
        </section>

        {/* Why Steaming */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Why Steaming Keeps More Nutrients Than Boiling
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            When you boil broccoli, water-soluble vitamins and glucosinolates leach into the cooking water,
            which then goes down the drain. A 2009 study in the Journal of the Science of Food and Agriculture
            (PMC2722699) compared steaming, boiling, microwaving, and stir-frying and found steaming retained
            the most chlorophyll, soluble proteins, vitamin C, and glucosinolates.
          </p>
          <p className="text-deepForest leading-relaxed">
            Broccoli contains 89.2 mg of vitamin C per 100g raw (USDA FDC ID 170379), more than an orange.
            Boiling can cut that roughly in half. Steaming keeps most of it. Vitamin K comes in at 102 mcg per
            100g, about 85% of the daily value, and steaming preserves that too. The method matters. A steamer
            basket costs almost nothing and the nutritional difference is real.
          </p>
        </section>

        {/* No Steamer Basket */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How to Steam Broccoli Without a Steamer Basket
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            You do not need special equipment. Two workarounds that actually work:
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <p className="text-deepForest leading-relaxed">
                <strong>Colander method:</strong> If you have a colander with a rim that rests on your pot
                edges, it works exactly like a steamer basket. Add 1 inch of water to the pot, bring to a
                boil, put the broccoli in the colander, cover with a lid or foil, and steam 4 to 5 minutes.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <p className="text-deepForest leading-relaxed">
                <strong>Skillet method:</strong> Add half an inch of water to a wide skillet, bring to a
                simmer, add florets, cover with a tight lid, and steam 3 to 4 minutes. The wider surface means
                more steam contact, so check early.
              </p>
            </div>
          </div>
        </section>

        {/* Microwave */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How to Steam Broccoli in the Microwave
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Place florets in a microwave-safe bowl with 2 to 3 tablespoons of water. Cover tightly with a
            microwave-safe plate or cling wrap, leaving a small vent. Microwave on HIGH for 2.5 to 3.5
            minutes. Let it sit covered for 30 seconds before opening.
          </p>
          <p className="text-deepForest leading-relaxed">
            Research in Food Science and Nutrition (2020) found moderate microwave heating around 60°C can
            actually increase sulforaphane yield compared to high-heat stovetop cooking, because myrosinase
            survives the lower temperature. Not the nutritional downgrade most people assume.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-deepForest mb-2">Is it better to boil or steam broccoli?</h3>
              <p className="text-deepForest leading-relaxed">
                Steaming wins on nutrients. Boiling leaches water-soluble vitamins and glucosinolates into the
                cooking water. Research shows steaming retains more vitamin C and sulforaphane precursors than
                boiling (PMC2722699). After one minute of boiling, myrosinase is nearly deactivated and
                sulforaphane production stops.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-deepForest mb-2">How do you know when steamed broccoli is done?</h3>
              <p className="text-deepForest leading-relaxed">
                Watch the color. Raw broccoli is dull and chalky green. Properly steamed goes vivid and
                bright. Olive-dark means overcooked. For texture, press a fork into a thick stem:
                crisp-tender has slight resistance; soft yields easily without falling apart.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-deepForest mb-2">How do you steam broccoli without a steamer basket?</h3>
              <p className="text-deepForest leading-relaxed">
                Use a colander with a rim that rests over your pot. It works exactly like a steamer basket.
                Or use a wide skillet with half an inch of water and a tight lid. Both work without any
                special tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-deepForest mb-2">Why does steamed broccoli turn gray or mushy?</h3>
              <p className="text-deepForest leading-relaxed">
                Two reasons. Overcooking: broccoli turns gray in under a minute past the ideal point, so pull
                it when it looks vivid. Residual heat: leaving it in a covered pot after you turn off the heat
                keeps cooking it. Remove from the basket immediately.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-8 border-t border-gray-200 pt-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-4">References</h2>
          <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
            <li>
              Vallejo, F., Tomas-Barberan, F., &amp; Garcia-Viguera, C. (2003). Phenolic compound contents in edible
              parts of broccoli inflorescences after domestic cooking.{' '}
              <em>Journal of the Science of Food and Agriculture</em>, 83(14), 1511-1516. PMC2722699.
            </li>
            <li>
              U.S. Department of Agriculture, Agricultural Research Service. (2024). FoodData Central: Broccoli,
              raw. FDC ID 170379.{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                https://fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Dosz, E. B., &amp; Jeffery, E. H. (2013). Modifying the processing and handling of frozen broccoli
              for increased glucoraphanin hydrolysis product yield.{' '}
              <em>Journal of Agricultural and Food Chemistry</em>.
            </li>
            <li>
              Martinez-Hernandez, G. B., et al. (2020). Mild microwave heating of broccoli can increase
              sulforaphane bioavailability. <em>Food Science and Nutrition</em>.
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">
            No disease treatment or cure claims are made. All nutritional data sourced from USDA FDC ID 170379.
            Research findings are presented as research suggests, not medical advice.
          </p>
        </section>

      </article>
    </>
  )
}
