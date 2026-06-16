import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AuthorByline from '@/components/AuthorByline'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'When to Harvest Broccoli Head: 3 Signs It Is Ready',
  description:
    'Harvest broccoli when the head is dark green, buds are tight, and no yellow is visible. Cut at 45 degrees, 4-6 inches below the head. Side shoots follow in 2-4 weeks.',
  keywords: [
    'when to harvest broccoli',
    'when to harvest broccoli head',
    'how to harvest broccoli so it keeps growing',
    'broccoli harvest signs',
    'broccoli side shoots after harvest',
  ],
  openGraph: {
    title: 'When to Harvest Broccoli Head: 3 Signs It Is Ready',
    description:
      'Tight buds, deep green colour, 4-7 inches across. Cut at 45 degrees and the plant gives you weeks of side shoots. Elena explains exactly what to look for.',
    type: 'article',
    publishedTime: '2026-06-16T08:00:00+08:00',
    authors: ['Elena Ignacio'],
    images: [
      {
        url: '/images/when-to-harvest-broccoli/when-to-harvest-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'A dark green broccoli head with tight compact buds, a hand holding a wood-handled knife positioned for harvest at a 45-degree angle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When to Harvest Broccoli Head: 3 Signs It Is Ready',
    description:
      'Tight buds, deep green, 4-7 inches. Cut at 45 degrees. Side shoots in 2-4 weeks. Elena shows what to look for before it goes yellow.',
    images: ['/images/when-to-harvest-broccoli/when-to-harvest-broccoli-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/growing/when-to-harvest',
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/growing/when-to-harvest#article',
      headline: 'When to Harvest Broccoli Head: 3 Signs It Is Ready',
      description:
        'Harvest broccoli when buds are tight and dark green, the head is 4 to 7 inches across, and no yellow is visible. Cut at a 45-degree angle 4-6 inches below the head.',
      datePublished: '2026-06-16T08:00:00+08:00',
      dateModified: '2026-06-16T08:00:00+08:00',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/when-to-harvest-broccoli/when-to-harvest-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        caption:
          'Dark green broccoli head with tight buds, ready for harvest at a 45-degree cut',
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
          url: 'https://broccolipedia.com/images/logo.png',
        },
      },
      isPartOf: {
        '@id': 'https://broccolipedia.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/growing/when-to-harvest',
      },
      mentions: [
        {
          '@type': 'Thing',
          name: 'Broccoli',
          sameAs: 'https://www.wikidata.org/wiki/Q47722',
        },
        {
          '@type': 'Thing',
          name: 'Bud',
          sameAs: 'https://www.wikidata.org/wiki/Q189838',
        },
        {
          '@type': 'Thing',
          name: 'Harvest',
          sameAs: 'https://www.wikidata.org/wiki/Q213753',
        },
        {
          '@type': 'Thing',
          name: 'Broccolini',
          sameAs: 'https://www.wikidata.org/wiki/Q2229726',
        },
        {
          '@type': 'Thing',
          name: 'Ethylene (plant hormone)',
          sameAs: 'https://www.wikidata.org/wiki/Q5850062',
        },
        {
          '@type': 'Thing',
          name: 'Vitamin C',
          sameAs: 'https://www.wikidata.org/wiki/Q199678',
        },
        {
          '@type': 'Thing',
          name: 'Vitamin K',
          sameAs: 'https://www.wikidata.org/wiki/Q182338',
        },
        {
          '@type': 'Thing',
          name: 'Folate',
          sameAs: 'https://www.wikidata.org/wiki/Q127060',
        },
        {
          '@type': 'Thing',
          name: 'Romanesco broccoli',
          sameAs: 'https://www.wikidata.org/wiki/Q1775431',
        },
        {
          '@type': 'Thing',
          name: 'Gai lan (Chinese broccoli)',
          sameAs: 'https://www.wikidata.org/wiki/Q1677369',
        },
        {
          '@type': 'Thing',
          name: 'Gardening',
          sameAs: 'https://www.wikidata.org/wiki/Q124946',
        },
        {
          '@type': 'Thing',
          name: 'Transplanting',
          sameAs: 'https://www.wikidata.org/wiki/Q356031',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '.harvest-signs'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/growing/when-to-harvest#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know when my broccoli head is ready to harvest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check three things in order: bud tightness (florets firm and compact, no gaps), colour (deep dark green, not pale or faded), and size (most home varieties are ready at 4 to 7 inches across). Bud tightness matters most. If the buds are tight and dark green, harvest even if the head is smaller than expected.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does broccoli look like when it is too late to harvest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Watch the bottom of the head first. Lower buds start to loosen and elongate into a slightly oblong shape while the top still looks tight. This is the last-chance window. After that comes yellowing, which means the plant is starting to bolt. Once yellow flowers are fully open, peak quality has passed, though the broccoli is still safe to eat.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if you wait too long to harvest broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The plant bolts and redirects energy toward flowers and seeds. The head becomes woody and bitter almost overnight. If the main head is allowed to fully yellow and flower, the plant typically stops producing side shoots entirely, so you also lose all secondary production.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does broccoli regrow after you cut the head off?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Leave the plant in the ground. Side shoots emerge from the leaf axils within 2 to 4 weeks. They look and taste like broccolini and can be harvested when buds are tight and 2 to 4 inches across. Use an angled cut 4 to 6 inches below the head each time.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to harvest broccoli so it keeps growing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cut in the morning, 4 to 6 inches below the head at a 45-degree angle. The angled cut prevents water pooling on the stump, which reduces rot. Leave the plant and water consistently. Keep harvested broccoli away from fruit in the fridge because ethylene gas from fruit causes it to yellow and go bitter faster.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I harvest broccoli side shoots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When the side shoots are 2 to 4 inches across with tight, closed buds. Side shoots move from ready to flowering faster than the main head, sometimes within a day or two of reaching peak size. Check them daily once they start developing.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/growing/when-to-harvest#breadcrumb',
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
          name: 'When to Harvest Broccoli',
          item: 'https://broccolipedia.com/growing/when-to-harvest',
        },
      ],
    },
  ],
}

export default function WhenToHarvestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-sage">/</li>
            <li>
              <Link href="/growing" className="hover:text-forest transition-colors">Growing</Link>
            </li>
            <li aria-hidden="true" className="text-sage">/</li>
            <li className="text-deepForest font-medium">When to Harvest Broccoli</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
            When to Harvest Broccoli Head: 3 Signs It Is Ready
          </h1>

          <AuthorByline datePublished="2026-06-16" />

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/when-to-harvest-broccoli/when-to-harvest-broccoli-hero-broccoli-feature.webp"
              alt="A dark green broccoli head with tight compact buds, a hand holding a wood-handled knife at a 45-degree angle for harvest on a Singapore balcony"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </header>

        {/* Intro paragraph */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          Adam used to check our balcony pot every morning before school. We had one broccoli plant in a
          terracotta pot near the railing of our Singapore flat, and he had watched the head form over three weeks.
          The morning it was ready, I was on a work call. I came out 20 minutes later and it was still fine. But I
          nearly missed the window. That plant taught me more about harvest timing than any gardening site ever did.
        </p>

        {/* Quick Answer */}
        <QuickAnswer>
          Harvest your broccoli head when the buds are tight and dark green, the head is 4 to 7 inches across,
          and there is no yellow anywhere. Cut 4 to 6 inches below the head at a 45-degree angle. If any buds
          have started to turn yellow, cut immediately regardless of how small the head is.
        </QuickAnswer>

        {/* 3 Signs block (speakable) */}
        <div className="harvest-signs bg-greenTint border border-forest rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">
            3 Signs Your Broccoli Is Ready to Harvest
          </h2>
          <ol className="space-y-2">
            <li className="flex gap-3 text-deepForest text-sm leading-relaxed">
              <span className="font-bold text-forest flex-shrink-0 mt-0.5">1.</span>
              <span><strong>Bud tightness.</strong> The florets feel firm and compact when you press gently. No gaps, no separation.</span>
            </li>
            <li className="flex gap-3 text-deepForest text-sm leading-relaxed">
              <span className="font-bold text-forest flex-shrink-0 mt-0.5">2.</span>
              <span><strong>Deep green colour.</strong> Saturated dark green across the whole head. Not pale, not faded, not yellowish.</span>
            </li>
            <li className="flex gap-3 text-deepForest text-sm leading-relaxed">
              <span className="font-bold text-forest flex-shrink-0 mt-0.5">3.</span>
              <span><strong>Size in range.</strong> Most home varieties are ready between 4 and 7 inches across. But if size and tightness conflict, always trust tightness.</span>
            </li>
          </ol>
        </div>

        {/* Article body */}
        <div className="article-body space-y-8 text-deepForest leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              How do I know when my broccoli head is ready to harvest?
            </h2>
            <p className="mb-4">
              Three things matter, in this order. Bud tightness: the florets should feel firm and compact when you
              press gently, with no gaps and no separation. Colour: deep, saturated green across the whole head,
              not pale or faded. Size: most home varieties hit the sweet spot between 4 and 7 inches across.
              But size is the least important of the three. Bud tightness always wins.
            </p>
            <p className="mb-4">
              If the head is only 3 inches across but the buds are tight and dark green, cut it. As Jacques in
              the Garden puts it: technically, there is no wrong time to harvest if the buds are still closed.
            </p>
            <p>
              The harvest window runs from two days to about a week, depending on temperature and variety. In
              Singapore&apos;s heat, I found the window closed faster than most guides suggest. A warm spell
              narrows everything considerably.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              What does broccoli look like when it&apos;s too late to harvest?
            </h2>
            <p className="mb-4">
              Watch the bottom of the head first. This is the part that catches people out. The top buds still
              look tight while the lower ones start to loosen and elongate slightly. YouTube gardeners call this
              the &ldquo;danger zone.&rdquo; The lower buds take on a slightly oblong shape instead of round
              and compact. When you see that, you have maybe a day.
            </p>
            <p className="mb-4">
              After that comes yellowing. Any yellow tinge means the plant is starting to bolt, shifting energy
              toward flowers. When you see yellow, cut immediately. Not tomorrow.
            </p>
            <p className="mb-4">
              If the head has fully opened into yellow flowers, peak quality has passed. The flavour will be
              bitter, the texture loose. It is still safe to eat. But it will not taste like what you grew it for.
            </p>
            <div className="fact-block my-5">
              <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
                What most sites miss
              </div>
              <p className="text-sm text-deepForest leading-relaxed">
                If the main head is allowed to fully yellow and flower, the plant often stops producing side
                shoots entirely. So the cost of waiting too long is not just a bad harvest. You lose all the
                secondary production too.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              What happens if you wait too long to harvest broccoli?
            </h2>
            <p className="mb-4">
              The broccoli bolts. The plant redirects energy upward toward flowers and eventually seeds. The
              head gets woody and bitter almost overnight, and the texture changes from firm and dense to
              something that falls apart when cooked.
            </p>
            <p className="mb-4">
              Temperature is a big driver. When temperatures climb above 80 degrees Fahrenheit (27 degrees
              Celsius) and stay there for more than a week, the plant kicks into bolting mode. This is why fall
              broccoli is often better than spring broccoli in warmer climates. You get a longer cool window.
            </p>
            <p>
              Alfi once asked me why the broccoli at the hawker centre tasted different from ours. Part of it
              was cooking. But part of it was timing. A head harvested at peak, cooked the same day, genuinely
              tastes different from one that sat three days in a shop fridge.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Does broccoli regrow after you cut the head off?
            </h2>
            <p className="mb-4">
              Yes. Leave the plant in the ground. After cutting the main head, side shoots emerge from the leaf
              axils, the junctions where leaves meet the main stalk. These smaller heads, typically 2 to 4 inches
              across, look and taste like broccolini. The first ones usually appear within 2 to 4 weeks.
            </p>
            <p className="mb-4">
              The cut matters. Make it 4 to 6 inches below the main head at a 45-degree angle. The angle sheds
              water rather than letting it pool on the cut surface, which reduces rot. A flat horizontal cut is
              an invitation to problems. I use a small knife with a wood handle. One clean motion.
            </p>
            <p>
              Water consistently and leave the plant alone. Some varieties produce side shoots for several weeks.
              Di Ciccio and Italian Sprouting types were specifically bred for heavy side shoot production.
              Harvest those side shoots the same way: tight buds, 2 to 4 inches. They move from ready to
              flowering faster than the main head did, so check them every day.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              How to harvest broccoli so it keeps growing
            </h2>
            <p className="mb-4">
              Cut in the morning. Every source I trust agrees on this, from Old Farmer&apos;s Almanac to USU
              Extension. Before the heat of the day, the head is at its most hydrated and the sugars are highest.
              A head cut at 7am holds better than one cut at 3pm.
            </p>
            <p>
              After harvest, keep broccoli away from fruit. This surprises most people. Fruit produces ethylene
              gas, which causes broccoli to yellow and go bitter faster. Same fridge shelf as your apples or
              bananas is a bad idea. USU Extension flags this specifically, and I learned it the hard way with
              a bag of mangosteens.
            </p>
          </section>

          {/* Section 6: Variety table */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Variety harvest windows side by side
            </h2>
            <p className="mb-5">
              Not all broccoli is the same. If you are growing from transplant, start visual inspections around
              day 30. Do not wait until day 50 and then go look. Broccoli does not announce itself.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-deepForest text-white">
                    <th className="px-4 py-2 text-left font-semibold">Variety</th>
                    <th className="px-4 py-2 text-left font-semibold">Days from transplant</th>
                    <th className="px-4 py-2 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Broccoli Rabe', '28-40 days', 'Fast-maturing; harvest leaves and florets'],
                    ['Chinese Broccoli (Gai Lan)', '40-50 days', 'Tender stems, mild flavour'],
                    ['Calabrese', '50-90 days', 'Standard type, good side shoot production'],
                    ['Romanesco', '~100 days', 'Lime green spirals; worth every day'],
                  ].map(([v, d, n], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                      <td className="px-4 py-2 text-deepForest font-medium border-b border-greenTint">{v}</td>
                      <td className="px-4 py-2 text-sage border-b border-greenTint">{d}</td>
                      <td className="px-4 py-2 text-sage border-b border-greenTint">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Nutrition */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Does harvest timing affect nutrition?
            </h2>
            <p className="mb-4">
              A little, yes. Cool temperatures at harvest, around 12 degrees Celsius (53 degrees Fahrenheit),
              maximise glucosinolates, the precursors to sulforaphane (Frontiers in Nutrition, 2020, DOI:&nbsp;
              <a
                href="https://doi.org/10.3389/fnut.2020.00147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                10.3389/fnut.2020.00147
              </a>
              ). That is the compound produced when you chop broccoli and myrosinase converts glucoraphanin.
              Chop it, wait 40 minutes, then cook.
            </p>
            <p>
              Raw broccoli at peak harvest has 89.2 mg of vitamin C per 100 grams (USDA FDC 170379), plus
              102 micrograms of vitamin K per 100 grams and 63 micrograms of folate per 100 grams (USDA FDC 170379).
              These numbers drop when the plant bolts because nutrients redirect to reproduction. One more reason
              not to wait.
            </p>
          </section>

        </div>

        {/* FAQ */}
        <div className="mt-10 border-t border-greenTint pt-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'When should I harvest broccoli side shoots?',
                a: 'When the buds are tight and 2 to 4 inches across. Side shoots go from ready to flowering faster than the main head, sometimes within a day or two of reaching peak size. Check them daily once they start sizing up.',
              },
              {
                q: 'How long after transplanting is broccoli ready to harvest?',
                a: 'Most home varieties are ready 50 to 70 days from transplanting. Start visual inspections around day 30. Trust bud tightness over the calendar date.',
              },
              {
                q: 'Can broccoli plants handle frost before harvest?',
                a: 'The plant itself tolerates temperatures down to about 26 degrees Fahrenheit (minus 3 Celsius). The head is more vulnerable. If temperatures are dropping into the upper 20s Fahrenheit, cover developing heads with row cover or light fabric.',
              },
              {
                q: 'What do I do after harvesting the main broccoli head?',
                a: 'Leave the plant, water consistently, and give it a light feed if you want to encourage side shoots. The plant will produce multiple smaller heads from the leaf axils over the following weeks. When those start bolting or the plant looks spent, it is done.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">{faq.q}</h3>
                <p className="text-sage text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-sm text-sage uppercase tracking-wider mb-3">Sources</h2>
          <ul className="text-xs text-sage space-y-1.5">
            <li>
              USDA FoodData Central. (2019). Broccoli, raw (FDC ID 170379).{' '}
              <a href="https://fdc.nal.usda.gov/food-details/170379" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">
                https://fdc.nal.usda.gov/food-details/170379
              </a>
            </li>
            <li>
              Baenas, N., et al. (2020). Pre- and Post-harvest Factors Affecting Glucosinolate Content in Broccoli.{' '}
              <em>Frontiers in Nutrition</em>, 7, 147.{' '}
              <a href="https://doi.org/10.3389/fnut.2020.00147" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">
                DOI: 10.3389/fnut.2020.00147
              </a>
            </li>
            <li>USU Extension. Harvest and Handling: Brassica. Utah State University Extension.</li>
            <li>NC State Extension. Tips for Harvesting Broccoli. Pender Cooperative Extension.</li>
            <li>University of Maryland Extension. Growing Broccoli in a Home Garden.</li>
          </ul>
        </div>

        {/* Internal links */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-greenTint pt-6">
          <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">
            How Long Does Broccoli Last? →
          </Link>
          <Link href="/storage/how-to-freeze" className="text-sm text-forest font-semibold hover:underline">
            How to Freeze Broccoli →
          </Link>
          <Link href="/growing/from-seed" className="text-sm text-forest font-semibold hover:underline">
            Growing Broccoli from Seed →
          </Link>
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Nutrition Facts →
          </Link>
        </div>
      </article>
    </>
  )
}
