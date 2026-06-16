import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How to Grow Broccoli From Seed: Leggy Seedlings, Timing, and What Works',
  description: 'Everything Elena learned the hard way: grow lights, heat mat myths, the no-pull thinning trick, variety picks by zone, and why fall crops taste better. Practical seed-to-harvest guide.',
  keywords: [
    'how to grow broccoli from seed',
    'broccoli seed starting',
    'leggy broccoli seedlings',
    'when to start broccoli seeds indoors',
    'broccoli damping off prevention',
    'best broccoli variety from seed',
    'broccoli seed germination',
  ],
  openGraph: {
    title: 'How to Grow Broccoli From Seed',
    description: 'A real failure-to-success guide: windowsill disaster to $12 grow light to the sturdiest seedlings Elena has ever grown.',
    type: 'article',
    images: [
      {
        url: '/images/grow-broccoli-from-seed/grow-broccoli-from-seed-hero-broccoli-feature.webp',
        width: 1200,
        height: 800,
        alt: 'Compact broccoli seedlings under a grow light in a seed tray on a wooden surface',
      },
    ],
  },
}

// ── Schema JSON-LD ─────────────────────────────────────────────────────────────

const schemaJson = [
  // 1. Article
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/growing/from-seed#article',
    headline: 'How to Grow Broccoli From Seed',
    description:
      'A practical guide to starting broccoli from seed: timing, grow lights, leggy seedling fixes, variety selection, container growing, and troubleshooting failed heads.',
    image: 'https://broccolipedia.com/images/grow-broccoli-from-seed/grow-broccoli-from-seed-hero-broccoli-feature.webp',
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
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'BroccoliPedia',
      url: 'https://broccolipedia.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/growing/from-seed',
    },
    mentions: [
      { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
      { '@type': 'Thing', name: 'Germination', sameAs: 'https://www.wikidata.org/wiki/Q193838' },
      { '@type': 'Thing', name: 'Damping off', sameAs: 'https://www.wikidata.org/wiki/Q1500132' },
      { '@type': 'Thing', name: 'Seedling', sameAs: 'https://www.wikidata.org/wiki/Q1385709' },
      { '@type': 'Thing', name: 'Transplanting', sameAs: 'https://www.wikidata.org/wiki/Q356031' },
      { '@type': 'Thing', name: 'Frost', sameAs: 'https://www.wikidata.org/wiki/Q4590598' },
      { '@type': 'Thing', name: 'Grow light', sameAs: 'https://www.wikidata.org/wiki/Q5611613' },
      { '@type': 'Thing', name: 'Soil', sameAs: 'https://www.wikidata.org/wiki/Q36133' },
      { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
      { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
      { '@type': 'Thing', name: 'Glucoraphanin', sameAs: 'https://www.wikidata.org/wiki/Q5572329' },
      { '@type': 'Thing', name: 'Calcium deficiency (plant disorder)', sameAs: 'https://www.wikidata.org/wiki/Q5018821' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#quick-answer', '#article-intro'],
    },
  },

  // 2. FAQPage
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How deep should I plant broccoli seeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1/4 inch (6mm) deep. Some guides say up to 1/2 inch, but 1/4 inch gives the most consistent germination in seed-starting mix.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I plant broccoli seeds in October?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depends on your zone. Zones 9 and 10 can plant in October for a winter or early spring harvest. Zones 4 to 7, October is too late for spring and too early for the following fall.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I prevent damping-off in broccoli seedlings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use sterile seed-starting mix, remove the humidity dome immediately after germination, and run an oscillating fan nearby. Let the soil surface dry slightly between waterings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many broccoli plants fit in a 5-gallon bucket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One, maximum. A 10-gallon container is better. The 5-gallon bucket is shallow for broccoli\'s 20-inch root depth requirement. Expect a smaller head than a garden plant.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does broccoli grow well from seed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Broccoli germinates in 5 to 10 days without a heat mat. Control light (grow lights at 2 to 4 inches, 14 to 16 hours daily) and timing (correct weeks before frost date), and seed-starting broccoli is reliable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are my broccoli seedlings leggy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Leggy seedlings are almost always caused by insufficient light. A windowsill is not enough. Broccoli seedlings need 14 to 16 hours of full-spectrum light every day. Use a grow light positioned 2 to 4 inches above the seedlings.',
        },
      },
    ],
  },

  // 3. BreadcrumbList
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
        name: 'Growing',
        item: 'https://broccolipedia.com/growing',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'From Seed',
        item: 'https://broccolipedia.com/growing/from-seed',
      },
    ],
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function FromSeedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/growing" className="hover:text-forest">Growing</Link>
          {' / '}
          <span className="text-deepForest">From Seed</span>
        </nav>

        {/* Hero image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <Image
            src="/images/grow-broccoli-from-seed/grow-broccoli-from-seed-hero-broccoli-feature.webp"
            alt="Compact, dark-green broccoli seedlings in a black seed tray under a grow light on a wooden surface"
            width={1200}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-6 leading-tight">
          How to Grow Broccoli From Seed
        </h1>

        {/* Intro — personal moment */}
        <p id="article-intro" className="text-lg text-deepForest leading-relaxed mb-6">
          The first time I tried growing broccoli from seed, I had a tray on the kitchen
          windowsill in Singapore. Within a week, tiny green shoots. I was thrilled. By week
          two, those shoots looked like they were reaching for the ceiling fan. Tall, thin,
          pale, and floppy. I had no idea &ldquo;leggy&rdquo; was even a word. I planted them
          outside anyway, and every single one died before it could be transplanted properly.
          The second time, I bought a clip-on grow light from Shopee for twelve dollars,
          clipped it two inches above the tray, and ran it 16 hours a day on a timer. I got
          the sturdiest seedlings I have ever grown. That light was the entire difference.
        </p>

        {/* QuickAnswer */}
        <div
          id="quick-answer"
          className="bg-forest/10 border-l-4 border-forest rounded-r-xl px-6 py-5 mb-8"
        >
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-deepForest leading-relaxed">
            Sow 1/4 inch deep in sterile seed-starting mix, 6 to 8 weeks before last spring
            frost (or 10 to 12 weeks before fall frost). Germination: 5 to 10 days at 65 to
            75°F. Seeds sprout: move immediately under grow lights for 14 to 16 hours daily.
            Transplant after 4 to 5 weeks when seedlings have 4 to 5 true leaves.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          How Long Does Broccoli Take to Grow From Seed?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          From seed to harvest, expect 80 to 100 days total: roughly 6 to 8 weeks indoors,
          then another 6 to 8 weeks in the ground. De Cicco can be ready in 48 days from
          transplant. Waltham 29 takes closer to 85 but produces excellent side shoots into
          autumn.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Time from your frost date, not from planting day. Miss the window by two weeks and
          you risk bolting. Above 85°F, broccoli skips head formation and goes straight to
          open flowers that are bitter and unusable.
        </p>

        {/* Section 2 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          When Should You Start Broccoli Seeds Indoors?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          For spring, count back 6 to 8 weeks from your last expected frost date. Broccoli
          tolerates light frost so you can transplant 2 to 3 weeks before that date.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          For fall, which is my preference because fall-grown broccoli tastes noticeably
          sweeter, count back 10 to 12 weeks from your first expected fall frost. In zones 4
          to 7, that usually means starting seeds indoors in mid-to-late July.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          One important thing: do not use a heat mat. Unlike tomatoes or peppers, broccoli
          germinates fine at cooler soil temperatures. The University of Minnesota Extension
          is explicit about this: start broccoli without bottom heat. A heat mat can push
          soil temps too high and actually slow germination down.
        </p>

        {/* Section 3 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          Why Are My Broccoli Seedlings Leggy?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          This is the most common seed-starting failure and the exact mistake I made.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Leggy seedlings have stems too long and thin to support the plant. The cause is
          almost always insufficient light. A bright windowsill is not enough. Even a
          south-facing Singapore window in summer does not deliver what broccoli seedlings
          need: 14 to 16 hours of full-spectrum light every single day.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          The fix is a grow light 2 to 4 inches above the seedlings, running 14 to 16 hours
          daily on a timer. My seedlings were visibly stockier within three days of switching.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Two more things help. Run an oscillating fan nearby (not directly at seedlings) to
          prevent damping-off and strengthen stems. Remove the humidity dome the instant the
          first seedling sprouts. The dome traps moisture that seedlings no longer need.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          When two seedlings come up in one cell, snip the weaker one at soil level with
          scissors. Do not pull. Pulling disturbs the roots of the keeper.
        </p>

        {/* Section 4 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          What Is the Best Variety of Broccoli to Grow From Seed?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          For most beginners, Calabrese is the standard. About 65 days, solid central head,
          then side shoots for weeks after the first cut. Adapts to most climates.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          In zone 6 or colder wanting a fall crop, Waltham 29 is worth the wait at 74 to 85
          days. Bred for cold tolerance and keeps producing side shoots late into autumn.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          For speed, Packman comes in around 55 days and is a reliable spring choice. Adam
          declared it his favourite because it makes the small, tight florets he and Alfi
          prefer raw.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          For containers: De Cicco (48 days) or Calabrese in a 10-gallon pot with at least
          20 inches of depth. One plant per container.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Bought seeds from an unknown source and nothing came up? Check viability. Broccoli
          seeds last about 3 years. Place 10 seeds between damp paper towels for a week.
          Fewer than 6 sprouting means buy fresh.
        </p>

        {/* Section 5 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          Growing Broccoli in Containers
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          One plant per 10-gallon container minimum, with at least 20 inches of depth.
          Broccoli roots go down more than they spread wide.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Containers dry out faster than beds. Check daily and aim for 1 to 1.5 inches of
          water per week. I feed with fish emulsion diluted to half-strength every three
          weeks after transplanting.
        </p>

        {/* Section 6 */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-3">
          Why Did My Broccoli Produce a Tiny Head or No Head?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">Three causes.</p>

        <div className="space-y-4 mb-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <p className="font-semibold text-deepForest mb-1">Heat</p>
            <p className="text-deepForest text-sm leading-relaxed">
              Temperatures above 85°F during head formation cause buttoning (tiny premature
              heads) or bolting. Move your timing earlier, or switch to fall crops.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <p className="font-semibold text-deepForest mb-1">Calcium deficiency</p>
            <p className="text-deepForest text-sm leading-relaxed">
              Loose, open heads that look more like an exploding cauliflower than a tight
              dome usually signal low soil calcium. Check pH. Broccoli needs 6.0 to 7.0,
              and below 6.0 calcium becomes less available even if it is in the soil.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <p className="font-semibold text-deepForest mb-1">Timing</p>
            <p className="text-deepForest text-sm leading-relaxed">
              Heads that form too small usually mean the transplant went in late, or watering
              was inconsistent. Keep soil evenly moist all season.
            </p>
          </div>
        </div>

        <p className="text-deepForest leading-relaxed mb-8">
          Once you cut the main head, leave the plant in the ground. Side shoots come from
          the same roots and will keep producing for weeks.
        </p>

        {/* FAQ */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mt-10 mb-5">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 mb-10">
          {[
            {
              q: 'How deep should I plant broccoli seeds?',
              a: '1/4 inch (6mm). Some guides say up to 1/2 inch, but 1/4 inch gives the most consistent germination in seed-starting mix.',
            },
            {
              q: 'Can I plant broccoli seeds in October?',
              a: 'Depends on your zone. Zones 9 and 10 can plant in October for a winter or early spring harvest. Zones 4 to 7, October is too late for spring and too early for the following fall. Check your frost date first.',
            },
            {
              q: 'How do I prevent damping-off in broccoli seedlings?',
              a: 'Use sterile seed-starting mix, remove the humidity dome immediately after germination, and run an oscillating fan nearby. Let the soil surface dry slightly between waterings.',
            },
            {
              q: 'How many broccoli plants fit in a 5-gallon bucket?',
              a: "One, maximum. A 10-gallon container is better. The 5-gallon bucket is shallow for broccoli's 20-inch root depth requirement. Expect a smaller head than a garden plant.",
            },
            {
              q: 'Does broccoli grow well from seed?',
              a: 'Yes. It germinates in 5 to 10 days without a heat mat. Control light (grow lights at 2 to 4 inches, 14 to 16 hours daily) and timing (correct weeks before frost date), and seed-starting broccoli is reliable.',
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="border border-sage/30 rounded-xl overflow-hidden">
              <summary className="px-5 py-4 font-semibold text-deepForest cursor-pointer hover:bg-sage/5">
                {q}
              </summary>
              <p className="px-5 pb-4 pt-2 text-deepForest text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        {/* Closing personal note */}
        <div className="fact-block mb-10">
          <p className="text-sm text-deepForest leading-relaxed">
            After I finally got my grow light setup working, Adam tasted a raw floret
            straight from the plant and announced that store broccoli &ldquo;tastes like
            cardboard.&rdquo; He was not wrong. We now grow at least two varieties every
            season. Broccoli contains sulforaphane, an isothiocyanate compound that forms
            when the enzyme myrosinase contacts glucoraphanin during cutting or chewing{' '}
            <cite>
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                (USDA FDC 170379)
              </a>
            </cite>
            . Research suggests freshness affects how much of this compound survives to your
            plate. A week-old supermarket head is simply not the same thing as one cut that
            morning. That alone is worth the twelve-dollar grow light.
          </p>
        </div>

        {/* Related links */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-sage/20 pt-6">
          <Link href="/growing/when-to-harvest" className="text-sm text-forest font-semibold hover:underline">
            When to Harvest →
          </Link>
          <Link href="/growing/companion-plants" className="text-sm text-forest font-semibold hover:underline">
            Companion Plants →
          </Link>
          <Link href="/growing/in-containers" className="text-sm text-forest font-semibold hover:underline">
            Container Growing →
          </Link>
        </div>

        {/* Sources */}
        <section className="mt-10 pt-6 border-t border-sage/20">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ol className="space-y-1 text-xs text-sage leading-relaxed">
            <li>
              USDA FoodData Central, FDC ID 170379. Broccoli, raw.{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              University of Minnesota Extension. Growing Broccoli in Home Gardens.{' '}
              <a
                href="https://extension.umn.edu/vegetables/growing-broccoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                extension.umn.edu
              </a>
            </li>
            <li>
              Harvest to Table. Broccoli Seed Starting Tips.{' '}
              <a
                href="https://harvesttotable.com/broccoli-seed-starting-tips/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                harvesttotable.com
              </a>
            </li>
            <li>
              Savvy Gardening. Growing Broccoli From Seed.{' '}
              <a
                href="https://savvygardening.com/growing-broccoli-from-seed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                savvygardening.com
              </a>
            </li>
          </ol>
        </section>
      </article>
    </>
  )
}
