import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Growing Broccoli in Pots and Containers | BroccoliPedia',
  description: 'One plant per 5-gallon pot, light-colored containers only, and a slanted harvest cut. Elena explains every mistake she made growing broccoli on a Singapore balcony and how to avoid them.',
  keywords: [
    'growing broccoli in pots',
    'growing broccoli in containers',
    'broccoli container garden',
    'broccoli 5 gallon bucket',
    'container broccoli varieties',
    'broccoli bolting prevention',
    'when to harvest container broccoli',
  ],
  openGraph: {
    title: 'Growing Broccoli in Pots and Containers',
    description: 'One plant per 5-gallon pot, light-colored containers only, harvest at the slant. Everything Elena learned growing broccoli on a Singapore balcony.',
    url: 'https://broccolipedia.com/growing/in-containers',
    siteName: 'BroccoliPedia',
    type: 'article',
    images: [
      {
        url: 'https://broccolipedia.com/images/growing-broccoli-containers/growing-broccoli-containers-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli plant with head forming in a terracotta pot on a balcony',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Growing Broccoli in Pots and Containers',
  description: 'A practical guide to growing broccoli in containers: pot size, soil mix, watering, timing, harvest technique, and pest management. Written by Elena Ignacio.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  url: 'https://broccolipedia.com/growing/in-containers',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/growing-broccoli-containers/growing-broccoli-containers-hero-broccoli-feature.webp',
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
      url: 'https://broccolipedia.com/broccoli-mark.svg',
    },
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Soil',
      sameAs: 'https://www.wikidata.org/wiki/Q36133',
    },
    {
      '@type': 'Thing',
      name: 'Harvest',
      sameAs: 'https://www.wikidata.org/wiki/Q213753',
    },
    {
      '@type': 'Thing',
      name: 'Plant',
      sameAs: 'https://www.wikidata.org/wiki/Q756',
    },
    {
      '@type': 'Thing',
      name: 'Bucket',
      sameAs: 'https://www.wikidata.org/wiki/Q47107',
    },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many broccoli plants fit in one pot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One plant per 5-gallon pot (12 inches wide). Three plants in a 15-gallon container, spaced at least 18 inches apart. More than this and the plants compete for nutrients and light, and all of them suffer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you grow broccoli in a 5-gallon bucket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, one plant per 5-gallon bucket works well. Make sure the bucket has drainage holes. Light-colored buckets are better than dark ones. Add perlite to standard potting mix to improve drainage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my container broccoli bolting before forming a head?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat is the most common cause. If temperatures are above 75 to 80F at root level, the plant skips head formation and goes straight to flowering. Dark pots accelerate this by trapping soil heat. Move to shade, switch to a light-colored container or fabric grow bag, and plant at the right time. Spring or fall.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I harvest container broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the head is 3 to 5 inches across and the buds are tight and dark green. Do not wait. Once buds start to loosen or turn yellow, harvest immediately and use it that day. A slanted cut 4 to 6 inches below the head helps the stem shed water and extend side shoot production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I do after cutting the main broccoli head?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep watering and keep feeding. Side shoots will emerge from the main stem over the next two to four weeks. They are smaller but fully edible and often abundant. This is the reward for getting the main harvest right.',
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
      name: 'Growing',
      item: 'https://broccolipedia.com/growing',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Growing in Containers',
      item: 'https://broccolipedia.com/growing/in-containers',
    },
  ],
}

export default function InContainersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-sage mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/growing" className="hover:text-forest">Growing</Link>
          {' / '}
          <span className="text-deepForest">In Containers</span>
        </nav>

        {/* Hero image */}
        <div className="mb-6 rounded-xl overflow-hidden">
          <img
            src="/images/growing-broccoli-containers/growing-broccoli-containers-hero-broccoli-feature.webp"
            alt="Broccoli plant with head just forming in a terracotta pot on a balcony, natural light"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="eager"
          />
        </div>

        {/* H1 */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-6 leading-tight">
          Growing Broccoli in Pots and Containers
        </h1>

        {/* Personal opening paragraph */}
        <p className="text-deepForest leading-relaxed mb-6">
          The black plastic pot on our balcony was the first mistake. I bought it because it was cheap and the hardware store near us had it. I planted broccoli in Singapore, late February, thinking I was being clever. The whole thing bolted before I even noticed a head forming. Tiny, yellow, already opening up. I cut it anyway and tasted it. Bitter. I thought broccoli just did not grow well in pots. I was wrong. The pot was the problem. Dark containers trap heat, and broccoli hates heat at the roots. Once the soil temperature climbs, the plant panics and flowers instead of forming a head. That spring I learned two things: pot color matters, and timing is everything.
        </p>

        {/* QuickAnswer block */}
        <div className="quick-answer bg-greenTint rounded-xl p-5 mb-6">
          <p className="font-semibold text-deepForest mb-1">Quick Answer</p>
          <p className="text-deepForest leading-relaxed">
            Yes, broccoli grows well in pots. Use a container at least 12 inches deep and 12 inches wide. One plant per 5-gallon bucket is the rule. It needs 6 to 8 hours of direct sun and consistent moisture. The biggest mistakes are dark pots that trap heat and harvesting the head too late.
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white border border-greenTint rounded-xl p-5 mb-8">
          <p className="font-serif font-bold text-deepForest mb-3">Key Takeaways</p>
          <ul className="space-y-2 text-deepForest text-sm">
            <li>One broccoli plant per 5-gallon pot; three plants in a 15-gallon container</li>
            <li>Always choose light-colored pots or fabric grow bags. Dark pots are heat traps.</li>
            <li>Plant in fall or early spring; heat above 80F triggers bolting</li>
            <li>Harvest when the head is 3 to 5 inches across and the buds are still tight and green</li>
            <li>After cutting the main head, keep watering. Side shoots will come.</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How Big Does the Container Need to Be?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            One broccoli plant needs at least a 5-gallon container, which is roughly 12 inches wide and 12 inches deep. That is the minimum. I prefer going to 7 or 10 gallons per plant when I can. More soil volume means the roots stay cooler, the plant does not dry out as fast, and the head gets bigger.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            If you want to grow three plants together, use a 15-gallon container. Spacing matters too: leave at least 18 inches between plants so the outer leaves do not compete.
          </p>
          <p className="text-deepForest leading-relaxed">
            Here is the part most guides skip: do not use a dark pot. Black, navy, or dark green pots absorb heat and push soil temperatures up fast. In warm climates or during summer, this alone can bolt your plant before the head has any chance to form. Use terracotta, light grey, or white containers. Fabric grow bags are excellent because they breathe and drain better than any rigid pot. They are also lighter to move. And you will want to move your broccoli around more than you think.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What Soil and Fertilizer Does Container Broccoli Need?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Broccoli is a heavy feeder. It wants rich, well-draining soil that holds moisture but never gets waterlogged. The ratio that works well: roughly 35% peat or coir, 35% compost, and 30% perlite or other drainage material. That gives you nutrition, water retention, and drainage in one mix. Aim for pH 6.0 to 7.0.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Fertilizer schedule matters more in a pot than in the ground because nutrients wash out every time you water. I use a balanced NPK fertilizer four times through the season: once when transplanting, again three weeks later, again when the plant reaches 6 to 8 inches tall, and once more when you first see the buds starting to form.
          </p>
          <p className="text-deepForest leading-relaxed">
            One thing I learned the hard way: never water broccoli from above. Wet heads rot. Water at the soil line, about 1 to 1.5 inches per week. In Singapore heat, I was watering every single morning. In cooler climates you may get away with every other day, but stick your finger an inch into the soil. If it is dry, water it.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            When Should You Plant Broccoli in Containers?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Broccoli is a cool-season brassica. Heat above 75 to 80F causes bolting. That means you have two good windows: early spring (6 to 8 weeks before your last frost) or fall (plant in August or September for an October or November harvest). Fall-grown broccoli is actually sweeter. The cold stresses the plant in a good way, converting starches to sugars.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            If you are in a tropical or subtropical climate like I am in Singapore, fall is your only real option. Plant between October and January when temperatures drop into the 70s or below.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Before moving seedlings outdoors, harden them off over one to two weeks. Set them outside in morning shade, bring them in. Add an hour of sun each day. Skipping this step shocks the plant and stalls growth.
          </p>
          <p className="text-deepForest leading-relaxed">
            If you are dealing with heat during the growing season, shade cloth rated 30 to 40% helps. Or move the pot to morning-sun-only position. The movable container is your advantage over in-ground gardeners.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How Long Does Container Broccoli Take to Grow?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Seeds germinate in one to two weeks at 75 to 80F. From seed to harvest:
          </p>
          <ul className="space-y-2 text-deepForest text-sm mb-4">
            <li className="bg-greenTint rounded-lg p-3">
              <span className="font-semibold">Di Cicco:</span> 48 to 70 days. Produces abundant side shoots after the main head.
            </li>
            <li className="bg-greenTint rounded-lg p-3">
              <span className="font-semibold">Royal Tenderette:</span> 50 to 60 days. Compact, two or three harvestable heads per plant.
            </li>
            <li className="bg-greenTint rounded-lg p-3">
              <span className="font-semibold">Green Magic or Diplomat:</span> 60 to 65 days, heat-tolerant. Good for warmer climates.
            </li>
            <li className="bg-greenTint rounded-lg p-3">
              <span className="font-semibold">Purple Sprouting:</span> 180 to 220 days. An overwintering variety that produces side shoots for weeks in spring.
            </li>
          </ul>
          <p className="text-deepForest leading-relaxed">
            For beginners, Di Cicco or Royal Tenderette are both forgiving and well-suited to containers.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            When and How Do You Harvest Container Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            This is where most people get it wrong. The head looks great, you decide to wait another week, then you come back and the buds have turned yellow and started opening. That is bolting. Once it starts, there is nothing to do.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Watch for these signs: the head should be 3 to 5 inches across, the buds should be tight and dark green, and the whole surface should look dense. That is your window. Once you see any yellowing or any loosening of the florets, harvest immediately.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Cut 4 to 6 inches below the head, and cut at a slant. Not straight across. The slanted cut lets water run off the stem instead of pooling and rotting it. This detail kept my second broccoli plant producing side shoots for three more weeks.
          </p>
          <p className="text-deepForest leading-relaxed">
            After the main head is cut, keep watering and keep feeding. Side shoots will emerge from the stem over the next few weeks. They are smaller than the main head but they taste exactly the same, and there can be a lot of them. Adam calls them baby trees and will eat them straight off the stem in the garden.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What About Pests and Problems?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Cabbage loopers and cabbage worms are the main threat. Check the undersides of leaves every few days. You are looking for small green caterpillars and their white eggs. Bacillus thuringiensis (BT) spray is the safest fix. It is a natural bacteria that kills caterpillars without harming anything else. Neem oil works too, but BT is more targeted.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Aphids cluster on new growth. A strong spray of water knocks them off. Diatomaceous earth around the base discourages cutworms.
          </p>
          <p className="text-deepForest leading-relaxed">
            If the head is yellowing fast and heat is not the issue, check watering. Inconsistent moisture causes loose heads. Yellowing lower leaves usually mean nitrogen deficiency. Time for fertilizer.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                How many broccoli plants fit in one pot?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                One plant per 5-gallon pot (12 inches wide). Three plants in a 15-gallon container, spaced at least 18 inches apart. More than this and the plants compete for nutrients and light, and all of them suffer.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                Can you grow broccoli in a 5-gallon bucket?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Yes, one plant per 5-gallon bucket works well. Make sure the bucket has drainage holes. Light-colored buckets are better than dark ones. Add perlite to standard potting mix to improve drainage.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                Why is my container broccoli bolting before forming a head?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Heat is the most common cause. If temperatures are above 75 to 80F at root level, the plant skips head formation and goes straight to flowering. Dark pots accelerate this by trapping soil heat. Move to shade, switch to a light-colored container or fabric grow bag, and plant at the right time. Spring or fall.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                When should I harvest container broccoli?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                When the head is 3 to 5 inches across and the buds are tight and dark green. Do not wait. Once buds start to loosen or turn yellow, harvest immediately and use it that day. A slanted cut 4 to 6 inches below the head helps the stem shed water and extend side shoot production.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                What do I do after cutting the main broccoli head?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Keep watering and keep feeding. Side shoots will emerge from the main stem over the next two to four weeks. They are smaller but fully edible and often abundant. This is the reward for getting the main harvest right.
              </p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <div className="border-t border-greenTint pt-6 mt-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Keep Growing</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/growing/from-seed" className="text-sm text-forest font-semibold hover:underline">
              Growing Broccoli from Seed
            </Link>
            <Link href="/growing/when-to-harvest" className="text-sm text-forest font-semibold hover:underline">
              When to Harvest Broccoli
            </Link>
            <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">
              Best Broccoli Varieties
            </Link>
            <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">
              Storing Fresh Broccoli
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
