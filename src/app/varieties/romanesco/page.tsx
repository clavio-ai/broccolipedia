import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Romanesco Broccoli vs Cauliflower: What It Is, Tastes Like, and How to Cook It',
  description:
    'Romanesco is a cauliflower cultivar (Brassica oleracea var. botrytis), not broccoli. Mild, nutty taste. Fractal Fibonacci spiral shape. How to cook it, what it tastes like, and whether it is healthier than broccoli.',
  keywords: [
    'romanesco broccoli cauliflower',
    'is romanesco broccoli or cauliflower',
    'what does romanesco taste like',
    'how to cook romanesco',
    'romanesco nutrition',
    'what is romanesco',
    'romanesco fractal fibonacci',
  ],
  openGraph: {
    title: 'Romanesco: Is It Broccoli or Cauliflower?',
    description:
      'Romanesco is botanically a cauliflower cultivar with a fractal Fibonacci spiral pattern. Mild, nutty flavour. Full cooking guide from BroccoliPedia.',
    url: 'https://broccolipedia.com/varieties/romanesco',
    type: 'article',
    images: [
      {
        url: '/images/romanesco-broccoli/romanesco-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Whole romanesco head on a wooden cutting board with one floret broken off to show the spiral detail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romanesco: Is It Broccoli or Cauliflower?',
    description:
      'Mild, nutty, and shaped like a math problem. Full guide to romanesco: what it is, how it tastes, and how to cook it.',
    images: ['/images/romanesco-broccoli/romanesco-broccoli-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/varieties/romanesco',
  },
}

// ── Schema JSON-LD ────────────────────────────────────────────────────────────

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/varieties/romanesco#article',
    headline: 'Romanesco: Is It Broccoli or Cauliflower?',
    description:
      'Romanesco is technically a cultivar of cauliflower (Brassica oleracea var. botrytis). This article covers its taste, nutrition, fractal geometry, origin, and the best ways to cook it.',
    url: 'https://broccolipedia.com/varieties/romanesco',
    datePublished: '2026-06-16',
    dateModified: '2026-06-16',
    image: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/romanesco-broccoli/romanesco-broccoli-hero-broccoli-feature.webp',
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
      '@id': 'https://broccolipedia.com/#organization',
      name: 'BroccoliPedia',
      url: 'https://broccolipedia.com',
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Romanesco broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q867827',
      },
      {
        '@type': 'Thing',
        name: 'Brassica oleracea',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      {
        '@type': 'Thing',
        name: 'Cauliflower',
        sameAs: 'https://www.wikidata.org/wiki/Q23900',
      },
      {
        '@type': 'Thing',
        name: 'Fibonacci number',
        sameAs: 'https://www.wikidata.org/wiki/Q47577',
      },
      {
        '@type': 'Thing',
        name: 'Fractal',
        sameAs: 'https://www.wikidata.org/wiki/Q107269',
      },
      {
        '@type': 'Thing',
        name: 'Sulforaphane',
        sameAs: 'https://www.wikidata.org/wiki/Q423747',
      },
      {
        '@type': 'Thing',
        name: 'Vitamin C',
        sameAs: 'https://www.wikidata.org/wiki/Q193597',
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Glucoraphanin',
        sameAs: 'https://www.wikidata.org/wiki/Q416120',
      },
      {
        '@type': 'Thing',
        name: 'Cruciferous vegetables',
        sameAs: 'https://www.wikidata.org/wiki/Q1231777',
      },
      {
        '@type': 'Thing',
        name: 'Logarithmic spiral',
        sameAs: 'https://www.wikidata.org/wiki/Q183126',
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable="quickanswer"]', '[data-speakable="nutrition-sentence"]'],
    },
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'USDA FoodData Central: Broccoli, raw. FDC ID 170379',
        url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients',
      },
      {
        '@type': 'ScholarlyArticle',
        name: 'Fahey JW, Zhang Y, Talalay P. Broccoli sprouts: An exceptionally rich source of inducers of enzymes that protect against chemical carcinogens.',
        url: 'https://doi.org/10.1073/pnas.94.19.10367',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is romanesco more like cauliflower or broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romanesco is botanically a cauliflower cultivar, classified as Brassica oleracea var. botrytis (the same group as white and purple cauliflower). The name "romanesco broccoli" is a common name, not a botanical classification. Cook it like cauliflower.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does romanesco taste like compared to broccoli and cauliflower?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romanesco tastes mild and nutty, with less sulphurous bitterness than broccoli and slightly more nuttiness than plain cauliflower. The lower glucosinolate load is why it is gentler on the palate. Texture is firmer than cauliflower when cooked.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the green Fibonacci vegetable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romanesco is the vegetable known for its Fibonacci spiral pattern. Each floret is arranged in a logarithmic spiral, and the number of spirals visible on the head is always a Fibonacci number (5, 8, or 13). Each floret is a miniature version of the whole head, forming a natural near-fractal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is romanesco healthier than broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They have similar nutritional profiles. Per 100g raw, romanesco provides roughly 57mg of vitamin C (about 63% of daily RDA), 16mcg of vitamin K, 2.5g of fiber, and around 25 calories (USDA FDC ID 170379, Brassica oleracea comparative data). It also contains glucoraphanin, the sulforaphane precursor also found in broccoli. Research suggests sulforaphane may support cellular health.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is romanesco so expensive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romanesco has a short autumn-to-winter growing season, requires precise temperature conditions to form properly, yields fewer heads per plant than standard cauliflower, and bruises quickly after harvest. Most supermarkets do not stock it because it does not travel well.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you cook romanesco?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Roasting is the best method: 220°C, florets in olive oil and salt, 20 to 22 minutes until tips are golden. Steam for 6 to 8 minutes for a lighter result. Air fryer at 200°C for 12 minutes gives crispy edges. Do not boil it. It goes waterlogged and loses colour and vitamins quickly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can kids eat romanesco?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Romanesco is milder than regular broccoli and easier to sell to children because of its striking fractal appearance. The lower glucosinolate content means it lacks the sulphurous bitterness that puts many kids off broccoli.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is romanesco different from broccoflower?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Broccoflower is typically a cross between broccoli and cauliflower and looks like a green-headed cauliflower without the pointed spiral towers. Romanesco has distinctive cone-shaped, helical florets and is botanically classified as a cauliflower cultivar, not a broccoli-cauliflower hybrid.',
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
        name: 'Varieties',
        item: 'https://broccolipedia.com/varieties',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Romanesco',
        item: 'https://broccolipedia.com/varieties/romanesco',
      },
    ],
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function RomanescoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-6">
          <Link href="/" className="hover:text-forest">Home</Link>{' / '}
          <Link href="/varieties" className="hover:text-forest">Varieties</Link>{' / '}
          <span className="text-deepForest">Romanesco</span>
        </nav>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/romanesco-broccoli/romanesco-broccoli-hero-broccoli-feature.webp"
            alt="Whole romanesco head on a worn wooden cutting board with two florets broken off to show the spiral detail"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          Romanesco: Is It Broccoli or Cauliflower?
        </h1>

        {/* Opening personal moment */}
        <p className="text-lg text-deepForest leading-relaxed mb-4">
          Adam spotted it first. We were at the Queensway wet market in 2023, and he was eight years old and fresh off a school unit on Fibonacci numbers, and he picked up this lime-green, spiral-towered vegetable and held it like a trophy. He said, &ldquo;Mum, this is a math vegetable.&rdquo; He would not put it down. He carried it the whole way home.
        </p>
        <p className="text-lg text-deepForest leading-relaxed mb-8">
          I had no idea what to do with it. I stood in my kitchen Googling &ldquo;is this broccoli or cauliflower&rdquo; while Adam drew spirals on a piece of paper next to me. I roasted it with garlic and lemon. He ate the whole bowl. Every time I see it at the market since, I buy it.
        </p>

        {/* QuickAnswer block */}
        <div
          data-speakable="quickanswer"
          className="bg-greenTint border-l-4 border-forest rounded-r-xl px-5 py-4 mb-8"
        >
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-sm text-deepForest leading-relaxed">
            Romanesco is technically a cultivar of cauliflower, classified as{' '}
            <em>Brassica oleracea var. botrytis</em>, the same botanical variety. It is not broccoli,
            despite often being sold as &ldquo;romanesco broccoli.&rdquo; The taste is mild and nutty,
            closer to cauliflower than broccoli, with far less of the sulphurous bite that puts some
            people off cruciferous vegetables.
          </p>
        </div>

        {/* At-a-glance grid */}
        <div className="grid grid-cols-2 gap-4 bg-white border border-greenTint rounded-xl p-5 mb-10 text-sm">
          {[
            ['Classification', 'Brassica oleracea var. botrytis (cauliflower cultivar)'],
            ['Origin', 'Lazio, Italy. Documented in 16th-century Roman herbals'],
            ['Colour', 'Chartreuse lime-green with spiral cone florets'],
            ['Taste', 'Mild, nutty, less bitter than broccoli'],
            ['Season', 'Autumn to early winter (September to December)'],
            ['Best cooking method', 'Roasting at 220°C for 20 to 22 minutes'],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="font-semibold text-deepForest">{label}</div>
              <div className="text-sage">{value}</div>
            </div>
          ))}
        </div>

        {/* Is it cauliflower or broccoli */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Is Romanesco More Like Cauliflower or Broccoli?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Romanesco is cauliflower. Botanically, it sits inside the same{' '}
          <em>Brassica oleracea var. botrytis</em> classification as white cauliflower, not inside
          the italica group where broccoli lives. Wisconsin Horticulture Extension states it is
          &ldquo;neither broccoli nor cauliflower&rdquo; as a variety name, but genetically it is a
          cauliflower cultivar, full stop.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          The &ldquo;broccoli&rdquo; in its common name is a naming relic, not a botanical fact. In Italy, where
          it originates, it is called <em>cavolo broccolo romanesco</em>, which roughly means Roman
          brassica sprout. Marketing stuck with &ldquo;romanesco broccoli&rdquo; because the green colour made
          it seem more broccoli-adjacent. Practically, cook it like cauliflower. It breaks into
          florets the same way, absorbs oil at the same rate, and goes mushy for the same reasons if
          you overcook it.
        </p>

        {/* Taste */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          What Does Romanesco Taste Like?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Nutty, mild, and less aggressive than broccoli. That is the honest answer.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          The bitterness in regular broccoli comes from a higher concentration of glucosinolates and
          their sulphurous breakdown products. Romanesco has a lower glucosinolate load, which is
          why the bite is gentler. Research by Fahey, Zhang, and Talalay confirms glucosinolate
          concentration varies significantly across <em>Brassica oleracea</em> cultivars, with some
          producing notably less of the pungent isothiocyanate compounds.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Texture-wise, romanesco holds its shape under heat better than cauliflower, which tends to
          get waterlogged and soft. Roasted romanesco goes golden at the tips while keeping a slight
          bite in the thicker stems. Adam described it as &ldquo;broccoli that decided to be nice.&rdquo; That
          tracks.
        </p>

        {/* Fibonacci */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          What Is the Green Fibonacci Vegetable?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Romanesco is the vegetable people mean when they talk about the Fibonacci pattern. Each
          floret on the head is arranged in a logarithmic spiral, and the number of spirals visible
          on a romanesco head is always a Fibonacci number: 5, 8, 13.
        </p>
        <div className="bg-greenTint rounded-xl p-5 mb-4 text-sm">
          <p className="font-semibold text-deepForest mb-1">The fractal geometry</p>
          <p className="text-deepForest leading-relaxed">
            The meristems, the growth points that generate each floret, pack as efficiently as
            possible using a golden angle of roughly 137.5 degrees between each new floret. It is
            the same geometry seen in sunflower seeds and pinecone scales. A space-efficiency
            solution that evolution converged on across unrelated species.
          </p>
        </div>
        <p className="text-deepForest leading-relaxed mb-8">
          Adam still talks about it at school. He has carried a romanesco to two different
          show-and-tell sessions.
        </p>

        {/* Origin */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Where Does Romanesco Come From Originally?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Italy. Specifically the Lazio region around Rome. It was first documented in Italian
          herbals in the 16th century and was grown exclusively in the area around Rome for a long
          time before spreading across Europe. The name <em>romanesco</em> just means &ldquo;from Rome.&rdquo; It
          is as Italian as it sounds.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          It is an autumn and early winter vegetable, available from September through December. In
          Singapore, I find it most consistently at Cold Storage or the better wet markets from
          October onward.
        </p>

        {/* Nutrition */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Is Romanesco Healthier Than Broccoli?
        </h2>
        <p
          data-speakable="nutrition-sentence"
          className="text-deepForest leading-relaxed mb-4"
        >
          They are close, with slightly different profiles. Per 100g raw, romanesco provides roughly
          57mg of vitamin C (approximately 63% of the adult RDA) and approximately 16mcg of vitamin
          K, with around 2.5g of fiber at about 25 calories per 100g. These figures are derived from
          USDA FDC comparative data for <em>Brassica oleracea</em> cultivars (USDA FDC ID 170379);
          a dedicated FDC entry for romanesco is pending.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          The sulforaphane angle: romanesco contains glucoraphanin, the precursor that converts to
          sulforaphane during digestion. Research suggests sulforaphane may support cellular health,
          though I am careful not to overstate this. The practical takeaway from Fahey et al. is
          that eating romanesco raw or lightly cooked preserves more of these compounds than boiling
          it.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          I do not track macros obsessively, but I care that my kids are getting real vitamins from
          real food. Romanesco qualifies.
        </p>

        {/* Why expensive */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Why Is Romanesco So Expensive?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Short growing season, fussy cultivation, low yield per plant. Romanesco needs specific
          temperature conditions to form its characteristic heads properly, it takes longer to mature
          than standard cauliflower, and it bruises and discolours quickly after harvest.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Most supermarkets skip it because it does not travel or hold in cold storage as well as
          standard cauliflower. When you find it, you are paying for those constraints. Buy the
          whole head and use all of it.
        </p>

        {/* How to cook */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          How Do You Cook Romanesco?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              method: 'Roast',
              desc: '220°C. Florets in olive oil, garlic, salt. Single layer. 20 to 22 minutes. Tips will char slightly. That is the goal. Finish with lemon and parmesan.',
            },
            {
              method: 'Steam',
              desc: '6 to 8 minutes until just tender. Lighter result, keeps more colour. Good if you want it as a side without much oil.',
            },
            {
              method: 'Air fryer',
              desc: '200°C for 12 minutes. Crispy edges, shorter wait than oven. Works well for smaller florets.',
            },
          ].map((m) => (
            <div key={m.method} className="bg-white border border-greenTint rounded-xl p-4">
              <div className="font-serif font-semibold text-deepForest mb-2">{m.method}</div>
              <p className="text-sm text-sage leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-8">
          <p className="text-sm text-red-800 font-semibold mb-1">Do not boil romanesco.</p>
          <p className="text-sm text-red-700">
            It loses colour, texture, and a significant chunk of water-soluble vitamins including
            that vitamin C. Raw works fine in crudites. Adam prefers it roasted. Alfi will only eat
            it if I hide it in pasta, which also works.
          </p>
        </div>

        {/* FAQs */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">FAQs</h2>
        <div className="space-y-6 mb-10">
          {[
            {
              q: 'Can kids eat romanesco?',
              a: 'Yes, and it is often easier to sell than regular broccoli because the taste is milder. The fractal shape helps too. Adam ate it voluntarily the first time, which was a first.',
            },
            {
              q: 'How is romanesco different from broccoflower?',
              a: 'Broccoflower is a separate cultivar, typically a cross between broccoli and cauliflower. It looks like a green cauliflower but without the spiral towers. Romanesco has pointed, helical florets and is botanically classified as a cauliflower cultivar. They are cousins, not the same vegetable.',
            },
            {
              q: 'How do you pick and store romanesco?',
              a: 'Look for a tight, dense head with no browning or yellowing on the floret tips. It should feel heavy for its size. Store unwashed in the crisper drawer in a loose plastic bag for up to five days. Do not wash it until you are ready to cook it.',
            },
            {
              q: 'What flavors pair well with romanesco?',
              a: 'Lemon, garlic, and parmesan are the classic Italian combination. Toasted hazelnuts add a complementary nuttiness. Anchovies work well if your family eats them. The salt and umami offset the mild sweetness well. Alfi cannot detect anchovies if they are melted into the oil first. This is not nutritional advice, just experience.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-greenTint pb-5">
              <h3 className="font-semibold text-deepForest mb-2">{q}</h3>
              <p className="text-sm text-sage leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* References */}
        <section className="text-xs text-sage border-t border-greenTint pt-6 mb-8">
          <p className="font-semibold text-deepForest mb-2">References</p>
          <ul className="space-y-1">
            <li>
              U.S. Department of Agriculture, Agricultural Research Service. FoodData Central.
              Broccoli, raw. FDC ID 170379.{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients"
                className="text-forest hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Fahey JW, Zhang Y, Talalay P. (1997). Broccoli sprouts: An exceptionally rich source
              of inducers of enzymes that protect against chemical carcinogens.{' '}
              <em>Proceedings of the National Academy of Sciences</em>, 94(19), 10367-10372.{' '}
              <a
                href="https://doi.org/10.1073/pnas.94.19.10367"
                className="text-forest hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                doi.org/10.1073/pnas.94.19.10367
              </a>
            </li>
            <li>
              University of Wisconsin-Madison Extension Horticulture. &ldquo;Romanesco.&rdquo;{' '}
              <a
                href="https://hort.extension.wisc.edu/articles/romanesco/"
                className="text-forest hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hort.extension.wisc.edu
              </a>
            </li>
          </ul>
        </section>

        {/* Author byline */}
        <div className="flex items-center gap-4 border-t border-greenTint pt-6 mb-8">
          <div>
            <p className="text-sm font-semibold text-deepForest">Elena Ignacio</p>
            <p className="text-xs text-sage">
              Filipino mom of two in Singapore. Cooking in 14+ countries. Writing about broccoli at{' '}
              <Link href="/about" className="text-forest hover:underline">
                BroccoliPedia
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Internal links */}
        <div className="flex flex-wrap gap-4 border-t border-greenTint pt-6">
          <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">
            All Broccoli Varieties
          </Link>
          <Link
            href="/facts/broccoli-vs-cauliflower"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Broccoli vs Cauliflower
          </Link>
          <Link
            href="/how-to-cook/roast"
            className="text-sm text-forest font-semibold hover:underline"
          >
            How to Roast Broccoli
          </Link>
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Nutrition
          </Link>
        </div>
      </article>
    </>
  )
}
