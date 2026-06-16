import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Broccoli Companion Plants: What to Grow (and Keep Far Away)',
  description:
    'Best companion plants for broccoli: dill, marigolds, nasturtiums, garlic, thyme. What to avoid: fennel, other brassicas, tomatoes. The 15-inch spacing rule explained.',
  keywords: [
    'broccoli companion plants',
    'companion planting broccoli',
    'what to plant with broccoli',
    'broccoli companion plants garden',
    'bad companion plants for broccoli',
  ],
  openGraph: {
    title: 'Broccoli Companion Plants: What to Grow (and Keep Far Away)',
    description:
      'Dill, marigolds, nasturtiums, garlic, and thyme are the best companion plants for broccoli. Fennel and other brassicas are the worst. Elena explains why.',
    url: 'https://broccolipedia.com/growing/companion-plants',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-companion-plants/broccoli-companion-plants-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Raised bed garden with broccoli, dill, and marigolds growing together',
      },
    ],
  },
}

// ── Schema: Article ───────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Broccoli Companion Plants: What to Grow (and Keep Far Away)',
  description:
    'The best and worst companion plants for broccoli, with explanations of why each pairing works or fails, spacing rules, and intercropping options.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/broccoli-companion-plants/broccoli-companion-plants-hero-broccoli-feature.webp',
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
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/broccoli-mark.svg',
    },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer'],
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Companion planting',
      sameAs: 'https://www.wikidata.org/wiki/Q1935508',
    },
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Gardening',
      sameAs: 'https://www.wikidata.org/wiki/Q124946',
    },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Dill', sameAs: 'https://www.wikidata.org/wiki/Q26686' },
    { '@type': 'Thing', name: 'Fennel', sameAs: 'https://www.wikidata.org/wiki/Q43511' },
    { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/wiki/Q23400' },
    { '@type': 'Thing', name: 'Nasturtiums', sameAs: 'https://www.wikidata.org/wiki/Q158271' },
    { '@type': 'Thing', name: 'Tomato', sameAs: 'https://www.wikidata.org/wiki/Q23501' },
    { '@type': 'Thing', name: 'Cabbage', sameAs: 'https://www.wikidata.org/wiki/Q35051' },
    { '@type': 'Thing', name: 'Cauliflower', sameAs: 'https://www.wikidata.org/wiki/Q7537' },
    { '@type': 'Thing', name: 'Kale', sameAs: 'https://www.wikidata.org/wiki/Q45989' },
    { '@type': 'Thing', name: 'Brassica', sameAs: 'https://www.wikidata.org/wiki/Q58677' },
    { '@type': 'Thing', name: 'Basil', sameAs: 'https://www.wikidata.org/wiki/Q38859' },
    { '@type': 'Thing', name: 'Tagetes (Marigolds)', sameAs: 'https://www.wikidata.org/wiki/Q147552' },
    { '@type': 'Thing', name: 'Cabbage worm', sameAs: 'https://www.wikidata.org/wiki/Q5015285' },
    { '@type': 'Thing', name: 'Beneficial insect', sameAs: 'https://www.wikidata.org/wiki/Q8194294' },
    { '@type': 'Thing', name: 'Raised-bed gardening', sameAs: 'https://www.wikidata.org/wiki/Q26520' },
    { '@type': 'Thing', name: 'Singapore', sameAs: 'https://www.wikidata.org/wiki/Q334' },
  ],
}

// ── Schema: FAQPage ───────────────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What plants grow best next to broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best companion plants for broccoli are dill, marigolds, nasturtiums, garlic, thyme, beets, bush beans, and leafy greens like lettuce and spinach. Dill repels cabbage moths and attracts parasitic wasps when in flower. Marigolds and nasturtiums act as trap crops, drawing caterpillars away from broccoli. An Iowa State University study confirmed that thyme, onion, and nasturtium together measurably reduced cabbage looper and cabbageworm damage in broccoli plots.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cannot be planted next to broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not plant fennel near broccoli. Fennel releases allelopathic compounds that inhibit root growth in neighbouring plants. Also avoid other brassicas (cabbage, cauliflower, kale, Brussels sprouts) because they share the same pests and diseases, including clubroot. Tomatoes, strawberries, corn, squash, and peppers are also poor companions due to competing needs or habits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does dill actually repel cabbage worms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, on two levels. The scent of dill confuses the cabbage moths that lay eggs on brassica leaves, reducing the number of eggs laid. When dill is allowed to flower, its blooms attract parasitic wasps that hunt and parasitise the cabbage worms that do hatch. Both mechanisms make dill one of the most effective companions for broccoli.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you plant broccoli and cauliflower together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is not recommended. Both are brassicas with the same pest and disease vulnerabilities, including clubroot. Planting them together concentrates your risk. If one plant gets a cabbage moth infestation or clubroot, the other is immediately exposed. Keep them separated by at least a few feet, with something aromatic between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far apart should companion plants be from broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At least 15 inches between broccoli plants and their companions. This prevents root competition for calcium and water. Broccoli is a heavy calcium feeder and needs that zone of soil to itself. Overcrowding creates competition even between plants that would otherwise be compatible companions.',
      },
    },
  ],
}

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────

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
      name: 'Growing',
      item: 'https://broccolipedia.com/growing',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Companion Plants',
      item: 'https://broccolipedia.com/growing/companion-plants',
    },
  ],
}

// ── Page component ────────────────────────────────────────────────────────────

export default function CompanionPlantsPage() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-6">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/growing" className="hover:text-forest">Growing</Link>
          {' / '}
          <span className="text-deepForest">Companion Plants</span>
        </nav>

        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/images/broccoli-companion-plants/broccoli-companion-plants-hero-broccoli-feature.webp"
            alt="Raised bed garden with broccoli plants surrounded by dill and orange marigolds"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-6 leading-tight">
          Broccoli Companion Plants: What to Grow (and Keep Far Away)
        </h1>

        {/* Opening personal story */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          When Adam was eight, he decided he would only eat broccoli he grew himself. That is a very Adam thing to do. We had this little raised bed on our balcony in Singapore, and I crammed in two broccoli plants, some basil, and a tomato seedling because they all looked nice together. The tomato grew enormous. It shaded the broccoli completely. We got zero heads that season. Adam cried. I cried a little too, if I am honest. That disaster taught me more about companion planting than every gardening book I had ever read.
        </p>

        {/* QuickAnswer block — speakable target */}
        <div className="quick-answer bg-greenTint rounded-xl p-5 mb-10">
          <p className="font-semibold text-deepForest mb-2 text-sm uppercase tracking-wide">Quick Answer</p>
          <p className="text-deepForest leading-relaxed">
            The best companion plants for broccoli are dill, marigolds, nasturtiums, garlic, and thyme. They deter cabbage worms, attract beneficial insects, and avoid competing for the calcium and nitrogen broccoli needs. Keep other brassicas (cabbage, cauliflower, kale) away from broccoli, and never plant fennel nearby. It actively poisons its neighbours.
          </p>
        </div>

        {/* Section 1: What grows best */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            What Plants Grow Best Next to Broccoli
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Broccoli has two big problems: pests and heavy feeding. The right companions address both without stealing resources.
          </p>

          <div className="space-y-4">
            {[
              {
                name: 'Dill',
                detail:
                  'The most versatile option. Its scent confuses and repels the cabbage moths that lay eggs on your broccoli leaves. When you let it flower, those blooms attract parasitic wasps that hunt and kill cabbage worms. Most guides mention one of these mechanisms, rarely both. Let at least one stem go to flower and leave it alone.',
              },
              {
                name: 'Marigolds and nasturtiums',
                detail:
                  'Work as trap crops. They draw caterpillars away from your broccoli heads onto themselves. The pests choose the trap. Marigold root secretions also suppress soil nematodes.',
              },
              {
                name: 'Thyme, onion, and nasturtium (together)',
                detail:
                  'Tested in an Iowa State University study that measurably reduced cabbage looper and imported cabbageworm counts in broccoli plots. That is the strongest peer-cited evidence we have for companion planting with broccoli. Grow all three and you have a real pest barrier.',
              },
              {
                name: 'Garlic',
                detail:
                  'Repels aphids, snails, flea beetles, and deer. Research points to allicin, the compound garlic produces when its cells are disturbed. One border row around the bed goes a long way.',
              },
              {
                name: 'Beets',
                detail:
                  'My personal favourite pairing. Broccoli pulls calcium from the soil like it cannot get enough, while beets tolerate low-calcium conditions just fine. Their root zones barely overlap. Plant them at least 15 inches apart and they leave each other alone.',
              },
              {
                name: 'Bush beans',
                detail:
                  'Fix atmospheric nitrogen into the soil as they grow. Since broccoli is a heavy nitrogen feeder, the beans are essentially working for free to keep it fed. This benefit builds over a full growing season.',
              },
              {
                name: 'Lettuce and spinach',
                detail:
                  'Have shallow roots that do not interfere with broccoli\'s deeper root system. They also act as living mulch, keeping soil cool and moist. Alfi always asks to plant chamomile nearby too, and honestly the flowers attract enough hoverflies that I have stopped arguing about it.',
              },
              {
                name: 'Calendula',
                detail:
                  'Lures aphids heavily, which then draws in ladybugs. The plant becomes a beneficial insect hub on purpose. One cluster in a corner of the bed does the job.',
              },
            ].map((item) => (
              <div key={item.name} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-semibold text-deepForest mb-1">{item.name}</h3>
                <p className="text-sm text-sage leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: What to avoid */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            What Cannot Be Planted Next to Broccoli
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            This is where most beginners make mistakes, and where I made mine.
          </p>

          <div className="space-y-4">
            {[
              {
                name: 'Other brassicas (cabbage, cauliflower, kale, Brussels sprouts)',
                detail:
                  'They share the same pests and the same diseases, including clubroot, which can survive in soil for years. Planting them together doubles your pest pressure. Some gardeners plant Chinese cabbage deliberately as a trap crop for cabbage root flies, but that is a calculated move, not a companion pairing.',
              },
              {
                name: 'Fennel',
                detail:
                  'In a category of its own. It releases allelopathic compounds into the soil that inhibit root growth in neighbouring plants. It is not just a bad companion, it is chemically hostile to almost everything around it. Keep fennel in a container, away from the vegetable bed entirely.',
              },
              {
                name: 'Tomatoes',
                detail:
                  'My hard lesson. They grow fast, grow tall, and shade everything around them. They also prefer warmer, drier conditions than broccoli. They pull in opposite directions on every requirement.',
              },
              {
                name: 'Strawberries',
                detail:
                  'Share susceptibility to verticillium wilt with broccoli. Planting them together raises disease pressure on both.',
              },
              {
                name: 'Corn, squash, and peppers',
                detail:
                  'Either too large, too sprawling, or too competitive for space and nutrients. Broccoli needs airflow and light. These crops close in on it.',
              },
            ].map((item) => (
              <div key={item.name} className="border border-red-200 bg-red-50 rounded-xl p-4">
                <h3 className="font-semibold text-red-800 mb-1">{item.name}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Intercropping */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            What Can Be Intercropped with Broccoli
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Intercropping means using the gaps between broccoli plants while they establish. Broccoli takes 70 to 100 days to head up, so those spaces are usable for weeks.
          </p>
          <div className="space-y-3">
            {[
              {
                name: 'Radishes',
                detail:
                  'Germinate fast, are ready in about four weeks, and are harvested before broccoli ever needs the space. They also loosen compact soil around broccoli roots.',
              },
              {
                name: 'Spinach and lettuce',
                detail:
                  'Shallow roots, fast growth, done before broccoli takes over. Easy intercrop that pays for itself.',
              },
              {
                name: 'Chives',
                detail:
                  'Fit into corners easily. Deter aphids and cabbage moths. Small footprint means they fill gaps nothing else would use.',
              },
            ].map((item) => (
              <div key={item.name} className="bg-greenTint rounded-xl p-4">
                <h3 className="font-semibold text-deepForest mb-1">{item.name}</h3>
                <p className="text-sm text-sage leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing rule callout */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            The Spacing Rule Most Beginners Skip
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-deepForest leading-relaxed mb-3">
              Fifteen inches minimum between broccoli plants and their companions. Most guides mention it somewhere, but beginners almost never follow it.
            </p>
            <p className="text-deepForest leading-relaxed">
              When I crowded that tomato too close, it was not just the shading that killed the broccoli. Roots compete for the same pool of calcium and water. Overcrowding creates that competition even between plants that would otherwise be fine neighbours. Give companions real space. That is the whole game.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Does dill actually repel cabbage worms?',
                a: 'Yes, on two levels. The scent of dill confuses the cabbage moths that lay eggs on brassica leaves. When dill flowers, its blooms attract parasitic wasps that hunt and parasitise the cabbage worms that do hatch. Both mechanisms together make it worth growing even in a small bed.',
              },
              {
                q: 'Can you plant broccoli and cauliflower together?',
                a: 'It is not recommended. Both are brassicas with the same pest and disease vulnerabilities, including clubroot. Planting them together concentrates your risk. If one plant gets an infestation, the other is immediately exposed. Keep them separated by a few feet, with something aromatic between them.',
              },
              {
                q: 'How far apart should companion plants be from broccoli?',
                a: 'At least 15 inches. This prevents root competition for calcium and water. Broccoli is a heavy feeder and needs that soil zone to itself.',
              },
              {
                q: 'What are the bad companion plants for broccoli?',
                a: 'Fennel is the worst because it releases allelopathic compounds that inhibit root growth in neighbouring plants. Other brassicas share all the same pests and diseases. Tomatoes, strawberries, corn, squash, and peppers all have needs or habits that compete with broccoli rather than supporting it.',
              },
              {
                q: 'What to plant with broccoli to keep bugs away?',
                a: 'Dill, thyme, garlic, and rosemary all deter the insects that target broccoli. An Iowa State University study confirmed that thyme, onion, and nasturtium together reduced cabbage looper and imported cabbageworm damage in broccoli plots. Marigolds and nasturtiums work as trap crops. Letting aromatic herbs flower is key: the blossoms attract parasitic wasps and hoverflies that keep pest populations under control.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">{item.q}</h3>
                <p className="text-sage text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <div className="border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Keep Growing</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/growing/from-seed" className="text-forest text-sm font-medium hover:underline">
              Growing from Seed
            </Link>
            <Link href="/growing/when-to-harvest" className="text-forest text-sm font-medium hover:underline">
              When to Harvest
            </Link>
            <Link href="/nutrition/benefits" className="text-forest text-sm font-medium hover:underline">
              Broccoli Health Benefits
            </Link>
            <Link href="/growing" className="text-forest text-sm font-medium hover:underline">
              All Growing Guides
            </Link>
          </div>
        </div>

        {/* References */}
        <div className="mt-8 border-t border-greenTint pt-6 text-xs text-sage space-y-1">
          <p className="font-semibold text-deepForest mb-2 text-sm">References</p>
          <p>Iowa State University companion planting study (thyme, onion, nasturtium on cabbage loopers): cited by The Spruce (Nadia Hassani, updated 2025) and Old Farmer&apos;s Almanac (Catherine Boeckmann, 2026).</p>
          <p>USDA research on alyssum attracting hoverflies that prey on aphids: Old Farmer&apos;s Almanac companion planting chart, 2026.</p>
          <p>Garlic allicin and pest repellency: Gardenary, citing horticultural research on allicin compounds.</p>
          <p>Beet and broccoli calcium compatibility: Gardeners Path (2020), MyPlantIn (2023).</p>
          <p>Fennel allelopathy: established plant science; cited as horticultural consensus by The Spruce, Gardeners Path, Gardenary.</p>
          <p>15-inch spacing rule: Gardeners Path (2020), MyPlantIn (2023).</p>
          <p>Bush bean nitrogen fixation: GrowOrganic (2026); general legume science.</p>
          <p>Calendula aphid lure and ladybug attraction: Gardenary (2025).</p>
        </div>

      </article>
    </>
  )
}
