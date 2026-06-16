import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Types of Broccoli: Calabrese, Broccolini, Gai Lan, Romanesco and More',
  description:
    'The six types of broccoli you will actually find in markets: Calabrese, broccolini, Chinese broccoli (gai lan), purple sprouting, broccoli rabe, and Romanesco. How they taste, how to cook them, and what makes each one different.',
  keywords: [
    'types of broccoli',
    'kinds of broccoli',
    'different types of broccoli',
    'broccoli varieties',
    'calabrese broccoli',
    'broccolini vs broccoli',
    'gai lan chinese broccoli',
    'romanesco broccoli',
    'purple sprouting broccoli',
    'broccoli rabe rapini',
  ],
  openGraph: {
    title: 'Types of Broccoli: What They Taste Like and How to Cook Each One',
    description:
      'Six types of broccoli explained by a home cook who has cooked in 14 countries. Calabrese, broccolini, gai lan, purple sprouting, broccoli rabe, and Romanesco.',
    url: 'https://broccolipedia.com/facts/types',
    type: 'article',
    images: [
      {
        url: '/images/types-of-broccoli/types-of-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Four types of broccoli on a wooden board: Calabrese, broccolini, purple sprouting, and Romanesco',
      },
    ],
  },
}

// ── JSON-LD Schema ─────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/facts/types#article',
  headline: 'Types of Broccoli: What\'s Actually in the Market and How They Taste',
  description:
    'The six types of broccoli you will actually find in markets: Calabrese, broccolini, Chinese broccoli (gai lan), purple sprouting, broccoli rabe, and Romanesco.',
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
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/types-of-broccoli/types-of-broccoli-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
    caption: 'Four types of broccoli: Calabrese, broccolini, purple sprouting, and Romanesco',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/facts/types',
  },
  about: [
    { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
    { '@type': 'Thing', name: 'Broccolini', sameAs: 'https://www.wikidata.org/wiki/Q2229726' },
    { '@type': 'Thing', name: 'Chinese broccoli', sameAs: 'https://www.wikidata.org/wiki/Q1677369' },
    { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
    { '@type': 'Thing', name: 'Anthocyanin', sameAs: 'https://www.wikidata.org/wiki/Q262547' },
    { '@type': 'Thing', name: 'Rapini', sameAs: 'https://www.wikidata.org/wiki/Q702282' },
    { '@type': 'Thing', name: 'Cauliflower', sameAs: 'https://www.wikidata.org/wiki/Q7537' },
    { '@type': 'Thing', name: 'Glucoraphanin', sameAs: 'https://www.wikidata.org/wiki/Q5572329' },
    { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
    { '@type': 'Thing', name: 'Brassica rapa', sameAs: 'https://www.wikidata.org/wiki/Q3384' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
    { '@type': 'Thing', name: 'Glucosinolate', sameAs: 'https://www.wikidata.org/wiki/Q416883' },
    { '@type': 'Organization', name: 'Sakata Seed Company' },
  ],
  articleBody:
    'Calabrese, broccolini, gai lan (Chinese broccoli), purple sprouting broccoli, broccoli rabe (rapini), and Romanesco are the six main types of broccoli found in markets. Each differs in taste, texture, cooking method, and nutritional profile.',
  keywords:
    'types of broccoli, calabrese, broccolini, gai lan, chinese broccoli, purple sprouting broccoli, broccoli rabe, rapini, romanesco, broccoli varieties',
  inLanguage: 'en-SG',
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'USDA FoodData Central — Broccoli, raw',
      identifier: 'FDC ID 170379',
      url: 'https://fdc.nal.usda.gov/food-details/170379',
    },
    {
      '@type': 'CreativeWork',
      name: 'Oxford Academic Bioscience Horizons — Antioxidant Properties of Purple vs Green Broccoli',
      datePublished: '2012',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://broccolipedia.com/facts/types#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many types of broccoli are there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Six main types appear in markets and cooking: Calabrese, broccolini, gai lan (Chinese broccoli), purple sprouting broccoli, broccoli rabe (rapini), and Romanesco. Seed catalogues list dozens of cultivar names within Calabrese, but those are varieties of the same type, not separate categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fancy green broccoli with the spiral pattern called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Romanesco. It is technically a cauliflower cultivar (Brassica oleracea var. botrytis), not a broccoli-cauliflower hybrid. The spiral cones follow Fibonacci numbers, a pattern linked to disruptions in floral gene networks. It tastes nutty and mild. Roasting is the best cooking method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli rabe actually broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli rabe (rapini) is Brassica rapa, the same family as turnips, not broccoli. Despite the name, it is not closely related to broccoli. It is much more bitter. Blanching for 60 seconds before cooking reduces the bitterness significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does purple sprouting broccoli stay purple when you cook it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The purple colour comes from anthocyanins, which are water-soluble and heat-sensitive. They break down within minutes of cooking, and the broccoli turns green. Eat it raw to keep the colour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between broccolini and regular broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccolini is a hybrid of broccoli and Chinese broccoli (gai lan), developed by Sakata Seed Company in Japan over eight years using conventional hybrid breeding. It has thinner stems, smaller florets, a sweeter flavour with no bitterness, and the entire plant is edible without peeling. It is not genetically modified.',
      },
    },
  ],
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
      name: 'Facts',
      item: 'https://broccolipedia.com/facts',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Types of Broccoli',
      item: 'https://broccolipedia.com/facts/types',
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function TypesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/facts" className="hover:text-forest">Facts</Link>
          {' / '}
          <span className="text-deepForest">Types of Broccoli</span>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          Types of Broccoli: What&rsquo;s Actually in the Market and How They Taste
        </h1>

        {/* Author byline */}
        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden">
          <Image
            src="/images/types-of-broccoli/types-of-broccoli-hero-broccoli-feature.webp"
            alt="Four types of broccoli on a wooden board: Calabrese head, broccolini stems, purple sprouting broccoli, and Romanesco"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Opening personal moment */}
        <p className="text-lg text-sage leading-relaxed mb-6">
          Adam has eaten gai lan at his school canteen for two years straight. I watched him finish every last stalk. I
          assumed it was a different cut of regular broccoli, the kind I steam at home. So one Saturday at the wet
          market I grabbed a fat bunch of it, went home, steamed it exactly like Calabrese florets, and ruined the
          whole thing. Bitter, slightly slimy, nothing like what the school was serving. I called my mum in Manila.
          She laughed and explained the oyster sauce and high-heat wok trick. That was the moment I realised the
          broccoli family is a lot bigger and stranger than any supermarket makes it look.
        </p>

        {/* Quick Answer */}
        <QuickAnswer>
          Six types of broccoli show up in real markets: Calabrese (the standard supermarket head), broccolini (a
          hybrid developed in Japan, milder and sweeter), Chinese broccoli or gai lan (leafy, slightly bitter, needs
          high heat), purple sprouting broccoli (turns green when cooked), broccoli rabe or rapini (barely related to
          broccoli, very bitter), and Romanesco (technically a cauliflower).
        </QuickAnswer>

        {/* Section 1 */}
        <section aria-labelledby="how-many-types">
          <h2 id="how-many-types" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            How many types of broccoli are there?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            Six main types appear consistently in markets and cooking. Calabrese is the one most people grow up eating.
            Then there&rsquo;s broccolini, purple sprouting, Chinese broccoli, broccoli rabe, and Romanesco. Beyond
            those six, seed companies sell dozens of named Calabrese cultivars like Belstar and Di Cicco, but those are
            varieties within the same type, not separate categories.
          </p>
          <p className="text-sage leading-relaxed">
            All six belong to <em>Brassica oleracea</em>, the same species that gave us cabbage, kale, and Brussels
            sprouts.
          </p>
        </section>

        {/* Section 2 */}
        <section aria-labelledby="calabrese">
          <h2 id="calabrese" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            What is Calabrese broccoli and why is it everywhere?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            Calabrese is what you find in every supermarket. Named after Calabria in southern Italy, it has that
            familiar large dome-shaped head, thick central stalk, and dark green florets. Italians brought it to the
            United States in the early 1900s.
          </p>
          <p className="text-sage leading-relaxed mb-3">
            Per 100g raw, Calabrese delivers 89.2 mg of vitamin C (99% of daily value), 102 mcg of vitamin K, 2.82g
            of protein, and 2.6g of fiber.{' '}
            <cite className="text-xs text-forest">(USDA FDC 170379)</cite> I never throw away the stalk. I peel the
            tough outer layer and slice it into whatever I&rsquo;m cooking. It has more fiber than the crown.
          </p>
          <p className="text-sage leading-relaxed">
            One practical thing worth knowing: sulforaphane, the compound broccoli is nutritionally known for, is only
            produced when the vegetable is chopped. Chopping activates myrosinase, which converts glucoraphanin into
            sulforaphane. Boiling destroys that enzyme. Steaming and stir-frying preserve it better.{' '}
            <cite className="text-xs text-forest">(USDA FDC 170379)</cite> This applies to every broccoli type, not
            just Calabrese.
          </p>
        </section>

        {/* Section 3 */}
        <section aria-labelledby="broccolini">
          <h2 id="broccolini" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            What is the difference between broccolini and regular broccoli?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            Broccolini looks like broccoli&rsquo;s thinner, more elegant cousin. Long slim stems, small loose florets,
            sweet flavour with none of the bitterness. The entire plant is edible. No peeling.
          </p>
          <p className="text-sage leading-relaxed">
            It was engineered over eight years by Sakata Seed Company in Japan, crossing regular broccoli with gai lan.
            Not genetically modified. Conventional hybrid breeding. It hit grocery shelves in the US in 1996.{' '}
            <cite className="text-xs text-forest">(Wikipedia: Broccolini)</cite> Alfi eats broccolini raw from the
            bag, which he refuses to do with regular broccoli, so I buy it for snacks more than anything else.
          </p>
        </section>

        {/* Section 4 */}
        <section aria-labelledby="gai-lan">
          <h2 id="gai-lan" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            What is Chinese broccoli and where do you find it?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            Chinese broccoli, or gai lan in Cantonese, is{' '}
            <em>Brassica oleracea</em> var. <em>alboglabra</em>. Thick flat glossy leaves, small white flowers, and a
            flavour that&rsquo;s stronger and slightly more bitter than Calabrese. At any wet market in Singapore
            it&rsquo;s available fresh year-round.
          </p>
          <p className="text-sage leading-relaxed mb-3">
            The bitterness comes from glucosinolates. High heat and a bit of fat (oil, oyster sauce) round it out.
            Steaming it low and slow, the way I made my mistake with Adam&rsquo;s canteen gai lan, concentrates the
            bitterness rather than softening it. Stir-fry it on the highest heat your stove can manage, with garlic
            and oyster sauce, and we get that same canteen result Adam loves.
          </p>
          <p className="text-sage leading-relaxed">
            Nutritionally, the big leaves give gai lan more vitamin A per serving than Calabrese. It&rsquo;s also a
            solid source of calcium, vitamin C, and folate.
          </p>
        </section>

        {/* Section 5 */}
        <section aria-labelledby="purple-sprouting">
          <h2 id="purple-sprouting" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            Does purple sprouting broccoli stay purple when you cook it?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            No. Purple sprouting broccoli turns green when you cook it. The purple colour comes from anthocyanins, the
            same pigments that make blueberries blue and red cabbage red. Anthocyanins are water-soluble and
            heat-sensitive. They break down within a couple of minutes of cooking.
          </p>
          <p className="text-sage leading-relaxed">
            The flavour is sweeter and more tender than Calabrese. Research published in Oxford Academic Bioscience
            Horizons (2012) found higher antioxidant activity in purple sprouting compared to green Calabrese, likely
            due to the anthocyanin content.{' '}
            <cite className="text-xs text-forest">(Bioscience Horizons, Oxford Academic, 2012)</cite> If you want to
            keep the colour, eat it raw. It&rsquo;s mild enough for that.
          </p>
        </section>

        {/* Section 6 */}
        <section aria-labelledby="romanesco">
          <h2 id="romanesco" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            What is the fancy green broccoli with the spiral pattern called?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            Romanesco. Each cone on the head is made of smaller cones, which are made of even smaller ones. The number
            of spirals on a Romanesco head is always a Fibonacci number. Research from 2021 linked that fractal
            geometry to disruptions in floral gene networks during development.
          </p>
          <p className="text-sage leading-relaxed">
            Here&rsquo;s what most articles get wrong: Romanesco is technically a cauliflower cultivar, not a
            broccoli-cauliflower hybrid. Its classification is{' '}
            <em>Brassica oleracea</em> var. <em>botrytis</em>, same as white cauliflower.{' '}
            <cite className="text-xs text-forest">(Wikipedia: Romanesco broccoli)</cite> The flavour reflects that.
            Nutty, mild, firmer in texture. Roasting at 220&deg;C until the tips just char is the best way I&rsquo;ve
            found to cook it.
          </p>
        </section>

        {/* Section 7 */}
        <section aria-labelledby="broccoli-rabe">
          <h2 id="broccoli-rabe" className="font-serif font-bold text-2xl text-deepForest mt-8 mb-3">
            Is broccoli rabe actually broccoli?
          </h2>
          <p className="text-sage leading-relaxed mb-3">
            No. Broccoli rabe, also called rapini, belongs to{' '}
            <em>Brassica rapa</em>, the same family as turnips. Not closely related to broccoli. The name is
            misleading.
          </p>
          <p className="text-sage leading-relaxed">
            The taste is significantly more bitter and peppery than anything else in this list. A quick blanch before
            sauteing reduces the bitterness. Sixty seconds in boiling water, then straight into a hot pan with garlic
            and chilli oil. Italian cooking uses it in pasta and with sausage for a reason. You need strong flavours to
            stand up against it.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-greenTint my-10" />

        {/* FAQs */}
        <section aria-labelledby="faqs">
          <h2 id="faqs" className="font-serif font-bold text-2xl text-deepForest mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How many types of broccoli are there?',
                a: 'Six main types: Calabrese, broccolini, gai lan (Chinese broccoli), purple sprouting broccoli, broccoli rabe (rapini), and Romanesco. Seed catalogues list dozens of cultivar names within Calabrese, but those are varieties of the same type, not separate categories.',
              },
              {
                q: 'What is the fancy green broccoli with the spiral pattern called?',
                a: 'Romanesco. It is technically a cauliflower cultivar (Brassica oleracea var. botrytis). The spiral cones follow Fibonacci numbers, a pattern linked to disruptions in floral gene networks. It tastes nutty and mild. Roasting is the best method.',
              },
              {
                q: 'Is broccoli rabe actually broccoli?',
                a: 'No. Broccoli rabe (rapini) is Brassica rapa, the same family as turnips, not broccoli. It is much more bitter. Blanching for 60 seconds before cooking reduces the bitterness significantly.',
              },
              {
                q: 'Does purple sprouting broccoli stay purple when you cook it?',
                a: 'No. The purple colour from anthocyanins breaks down with heat. The broccoli turns green within minutes of cooking. Eat it raw to keep the colour.',
              },
              {
                q: 'What is the difference between broccolini and regular broccoli?',
                a: 'Broccolini is a hybrid of broccoli and Chinese broccoli developed by Sakata Seed Company in Japan. It has thinner stems, smaller florets, a sweeter flavour, and no bitterness. The entire plant is edible. It is not genetically modified.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-greenTint rounded-xl p-5">
                <h3 className="font-serif font-bold text-lg text-deepForest mb-2">{q}</h3>
                <p className="text-sm text-sage leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section aria-labelledby="sources" className="mt-10">
          <h2 id="sources" className="font-serif font-bold text-lg text-deepForest mb-3">
            Sources
          </h2>
          <ul className="text-xs text-sage space-y-1 list-disc list-inside">
            <li>
              USDA FoodData Central FDC ID 170379 — Broccoli, raw.{' '}
              <a
                href="https://fdc.nal.usda.gov/food-details/170379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Wikipedia: Broccolini.{' '}
              <a
                href="https://en.wikipedia.org/wiki/Broccolini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                en.wikipedia.org/wiki/Broccolini
              </a>
            </li>
            <li>
              Wikipedia: Romanesco broccoli.{' '}
              <a
                href="https://en.wikipedia.org/wiki/Romanesco_broccoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                en.wikipedia.org/wiki/Romanesco_broccoli
              </a>
            </li>
            <li>
              Wikipedia: Gai lan.{' '}
              <a
                href="https://en.wikipedia.org/wiki/Gai_lan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                en.wikipedia.org/wiki/Gai_lan
              </a>
            </li>
            <li>
              Oxford Academic Bioscience Horizons (2012) — antioxidant properties of purple sprouting vs green
              Calabrese broccoli.
            </li>
          </ul>
        </section>

        {/* Navigation links */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-greenTint pt-6">
          <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">
            Varieties Hub &rarr;
          </Link>
          <Link href="/facts/is-broccoli-man-made" className="text-sm text-forest font-semibold hover:underline">
            Is Broccoli Man-Made? &rarr;
          </Link>
          <Link href="/nutrition/sprouts" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Sprouts Guide &rarr;
          </Link>
        </div>
      </article>
    </>
  )
}
