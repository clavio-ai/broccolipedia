import type { Metadata } from 'next'
import Link from 'next/link'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Can Chickens Eat Broccoli? Yes — All Parts Are Safe',
  description:
    'Yes, chickens can eat broccoli — florets, stalks, leaves, and roots. Feed raw or plain cooked, chopped small. 10% treat rule applies. Goitrogen risk explained.',
  keywords: [
    'can chickens eat broccoli',
    'chickens and broccoli',
    'broccoli for chickens',
    'can chickens eat broccoli stalks',
    'can chickens eat broccoli leaves',
    'feeding chickens broccoli',
    'can chickens eat broccoli raw',
    'can chickens eat broccoli every day',
  ],
  openGraph: {
    title: 'Can Chickens Eat Broccoli? Yes — All Parts Are Safe',
    description:
      'Florets, stalks, leaves, roots — all safe for backyard chickens. Raw or plain cooked. 10% treat rule. Goitrogen nuance explained.',
    type: 'article',
    url: 'https://broccolipedia.com/pets/can-chickens-eat-broccoli',
    images: [
      {
        url: '/images/can-chickens-eat-broccoli/can-chickens-eat-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Hens pecking at a broccoli stalk in a backyard chicken run',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Chickens Eat Broccoli?',
    description:
      'Yes. All parts are safe — florets, stalks, leaves. Raw or plain cooked. 10% treat rule. Goitrogen risk explained.',
    images: ['/images/can-chickens-eat-broccoli/can-chickens-eat-broccoli-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/pets/can-chickens-eat-broccoli',
  },
}

// ── JSON-LD Schema ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/pets/can-chickens-eat-broccoli#article',
  headline: 'Can Chickens Eat Broccoli? Yes — All Parts Are Safe',
  description:
    'Chickens can safely eat all parts of the broccoli plant — florets, stalks, leaves, and roots — raw or plain cooked. Keep treats to 10% of their diet. Goitrogen risk is dose-dependent.',
  url: 'https://broccolipedia.com/pets/can-chickens-eat-broccoli',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  inLanguage: 'en-US',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/broccoli-mark.svg',
    },
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/can-chickens-eat-broccoli/can-chickens-eat-broccoli-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
    caption: 'Hens pecking at a broccoli stalk in a backyard chicken run',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/pets/can-chickens-eat-broccoli',
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Chicken',
      sameAs: 'https://www.wikidata.org/wiki/Q780',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Goitrogen',
      sameAs: 'https://www.wikidata.org/wiki/Q420069',
      description: 'Compounds in cruciferous vegetables that can affect thyroid function in excess amounts',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q193598',
    },
    {
      '@type': 'Thing',
      name: 'Calcium',
      sameAs: 'https://www.wikidata.org/wiki/Q706',
    },
    {
      '@type': 'Thing',
      name: 'Potassium',
      sameAs: 'https://www.wikidata.org/wiki/Q703',
    },
    {
      '@type': 'Thing',
      name: 'Kale',
      sameAs: 'https://www.wikidata.org/wiki/Q147910',
    },
    {
      '@type': 'Thing',
      name: 'Cauliflower',
      sameAs: 'https://www.wikidata.org/wiki/Q23240',
    },
    {
      '@type': 'Thing',
      name: 'Plymouth Rock chicken',
      sameAs: 'https://www.wikidata.org/wiki/Q2882659',
      description: 'Breed of domestic chicken; Barred Rock is a variety of Plymouth Rock',
    },
  ],
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'USDA FoodData Central — Broccoli, raw',
      url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients',
      identifier: 'FDC ID 170379',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw broccoli is safe for chickens and retains more nutrients than cooked. Chop dense stalks into peck-sized pieces so chickens can pick them up easily. Leaves and smaller florets can go in whole.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not recommended as a daily staple. The 10% treat rule applies: all treats combined should not exceed 10% of their total diet. Broccoli contains goitrogens that in very large daily amounts over time can affect thyroid function. A few times per week is fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli stalks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Stalks are safe and are often the part chickens prefer. Chop raw stalks into peck-sized pieces. Cooked stalks are soft enough to give in larger pieces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli seeds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Broccoli seeds are safe for chickens. They are small enough that no chopping is needed. Sprouted seeds increase nutritional density if you want to go that extra step.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli and cauliflower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes to both. Cauliflower is in the same brassica family as broccoli so the same guidance applies: all parts are safe, feed in moderation, no seasoning if cooked. Both contain goitrogens, so avoid giving large amounts of both on the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can chickens eat broccoli leaves?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Broccoli leaves are safe and eagerly eaten. The tough outer leaves that most people would compost are fine for chickens. At garden cleanup time, bring the whole plant to the run — hens strip the leaves quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vegetables are not good for chickens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid avocado skin and pit (contain persin, which is toxic to birds), onions and garlic in large amounts, raw or dried beans, raw potato peel (solanine risk), tomato leaves, and anything rotten or moldy. Broccoli is not on this list and is considered safe.',
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
      name: 'Pets',
      item: 'https://broccolipedia.com/pets',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Can Chickens Eat Broccoli?',
      item: 'https://broccolipedia.com/pets/can-chickens-eat-broccoli',
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function CanChickensEatBroccoliPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/pets" className="hover:text-forest">Pets</Link>
          {' / '}
          <span className="text-deepForest">Can Chickens Eat Broccoli?</span>
        </nav>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-6 bg-greenTint">
          <img
            src="/images/can-chickens-eat-broccoli/can-chickens-eat-broccoli-hero-broccoli-feature.webp"
            alt="Three hens pecking at a broccoli stalk in a backyard run, with florets ignored nearby"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="eager"
          />
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          Can Chickens Eat Broccoli?
        </h1>

        {/* Intro */}
        <p className="text-deepForest leading-relaxed mb-4 text-lg">
          Boss charged the broccoli stalk like it had personally offended her. I had been about to compost it. That moment happened in my small raised-bed garden here in Singapore after I&apos;d harvested the crowns for Adam&apos;s school lunches. I tossed the leftover stalks and outer leaves over the fence into the run on a whim. All three hens went completely still for maybe five seconds, heads tilted, and then Boss, my oldest Barred Rock, launched herself at the woodiest part of the stalk. The other two scrambled in immediately. That night, while Adam was finishing his homework, I sat at the kitchen table googling &ldquo;can chickens eat broccoli stems.&rdquo; That search is why this page exists.
        </p>

        {/* Quick Answer */}
        <QuickAnswer>
          Yes, chickens can eat broccoli. Florets, stalks, leaves, and roots are all safe. Feed it raw or plain cooked, chopped into peck-sized pieces. Limit treats to 10% of their total diet to avoid diluting their primary feed. Broccoli contains goitrogens, so very large daily amounts over time can affect thyroid function, but occasional feeding is completely fine.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>All parts safe: florets, stalks, leaves, roots</li>
            <li>Raw or plain cooked (no salt, butter, garlic, or oil)</li>
            <li>10% treat rule: broccoli plus all other treats combined should not exceed 10% of daily diet</li>
            <li>Goitrogen risk is real but dose-dependent: a few times a week is fine, every day in large amounts is not</li>
            <li>Chop raw stalks into peck-sized pieces; leaves and florets can go in whole</li>
            <li>Offer grit alongside any fresh food if your flock is on a confined run</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What parts of the broccoli plant can chickens eat?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            All of it. And I mean genuinely all of it.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Most guides lead with the florets, but in my run, Boss completely ignored the florets and went straight for the stalk. Alfi said the chickens had better taste than us. He is probably right.
          </p>

          <div className="space-y-3">
            {[
              {
                part: 'Florets',
                note: 'Safe. Hang an entire broccoli head from a string in the run and it becomes an enrichment activity, useful for reducing boredom in confined flocks.',
              },
              {
                part: 'Stalks and stems',
                note: 'Safe. My hens prefer these. For raw stalk, chop into pieces roughly the size of a large grape. Chickens have no teeth, so a piece that is too large or awkward to pick up will just get ignored.',
              },
              {
                part: 'Leaves',
                note: 'Safe and often eaten first. The tough outer leaves that most of us throw away are perfectly fine. At garden cleanup time, I cut the whole plant just above soil level and bring it to the run. The hens strip the leaves in minutes.',
              },
              {
                part: 'Roots',
                note: 'Safe, though in my experience hens show little interest. Toss them in anyway.',
              },
              {
                part: 'Cooked broccoli',
                note: 'Safe if plain. Steam it, boil it, the chickens are not fussy. What matters: no salt, butter, garlic, or oil. Any of those are harmful. Plain cooked broccoli is also softer and easier for very young birds.',
              },
            ].map(({ part, note }) => (
              <div key={part} className="bg-white border border-greenTint rounded-xl p-4">
                <span className="font-semibold text-deepForest">{part}: </span>
                <span className="text-sage">{note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Can chickens eat broccoli every day?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            This is where I have to be more careful with the answer.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            The standard guideline is the 10% treat rule: treats of any kind should make up no more than 10% of a chicken&apos;s total diet. The other 90% should be their commercial layer feed, which provides the protein, calcium, and amino acids they need for good egg production.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            The reason this matters more with broccoli than with cucumber or carrot is goitrogens. Broccoli, along with kale, cabbage, and soybeans, contains compounds that in large amounts over time can interfere with thyroid function in chickens. The condition is called avian goiter, an abnormal enlargement of the thyroid gland, and symptoms include weight loss, lethargy, and general decline.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
              Goitrogen note
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              The goitrogen risk is dose-dependent. Research suggests the 10% treat rule is protective in practice. A handful of chopped broccoli a few times a week is not going to cause thyroid problems. It becomes a concern if broccoli is the primary food source, or if the flock is also on soy-heavy feed, since soybeans also contain goitrogens.
            </p>
          </div>
          <p className="text-deepForest leading-relaxed">
            My approach is simple. I give broccoli scraps when I have them, maybe twice a week some weeks, zero other weeks. I do not deliberately feed it every single day.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Can chickens eat broccoli raw?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Yes. Raw is my default because it retains more nutrition. Broccoli contains 89.2 mg of vitamin C per 100 grams and is 89.2% water (USDA FDC 170379). Heat breaks some of that down. Raw broccoli also gives them more to work at in the run, which keeps the flock active and occupied.
          </p>
          <p className="text-deepForest leading-relaxed">
            The only prep note: chop dense stalks into peck-sized pieces. A food processor works well for larger flocks. I usually just use a knife.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What vegetables are not good for chickens?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            The main ones to avoid: avocado skin and pit, which contain persin and are toxic to birds; onions and garlic in large amounts; raw or dried beans; and anything rotten or moldy. Raw potato peel contains solanine and is generally considered risky. Tomato leaves and green tomatoes should also be avoided.
          </p>
          <p className="text-deepForest leading-relaxed">
            Broccoli does not appear on any of those lists. It is one of the genuinely safe vegetables for backyard flocks.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How do I prepare broccoli for chickens?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Not very elaborately, honestly.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Rinse it first, especially supermarket broccoli. Check for mold or rotten spots and cut those off. If you would not eat it yourself, your chickens probably should not eat it either.
          </p>
          <p className="text-deepForest leading-relaxed">
            Chop stalks into pieces about the size of a large grape. Leaves can go in whole. Florets can go in whole if the flock is large enough to peck it apart as a group. Offer grit alongside any non-feed food, since grit is what chickens use to grind food in the gizzard. If your birds free range on soil with gravel access, they likely have enough. A confined flock on concrete or wood chips needs a separate grit container.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Does broccoli affect egg production?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Broccoli contains 47 mg of calcium per 100 grams (USDA FDC 170379), and calcium goes directly into eggshell formation. It also contains 316 mg of potassium per 100 grams (USDA FDC 170379), which supports overall hen condition.
          </p>
          <p className="text-deepForest leading-relaxed">
            That said, broccoli&apos;s calcium content is not high enough to substitute for oyster shell or the calcium in layer feed. Think of it as a minor contribution within a varied diet, not a targeted egg-production supplement.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can chickens eat broccoli stalks?',
                a: 'Yes. Stalks are safe and often the part chickens prefer. Chop raw stalks into peck-sized pieces for easy eating. Cooked stalks are soft enough to give in larger pieces.',
              },
              {
                q: 'Can chickens eat broccoli seeds?',
                a: 'Yes. Broccoli seeds are safe. They are small enough that no chopping is needed. Sprouted seeds increase nutritional density if you want to go that extra step.',
              },
              {
                q: 'Can chickens eat broccoli and cauliflower?',
                a: 'Yes to both. Cauliflower is in the same brassica family, so the same guidance applies: all parts are safe, moderation matters, no seasoning if cooked. Both contain goitrogens, so avoid large amounts of both on the same day.',
              },
              {
                q: 'Can chickens eat broccoli leaves?',
                a: 'Yes, and this is honestly the best use of broccoli for a flock. The tough outer leaves that most of us would compost are eagerly eaten by hens. It is a genuinely zero-waste move for anyone growing broccoli in the garden.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">{q}</h3>
                <p className="text-sage text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="text-xs text-sage space-y-2">
            <li>
              USDA FoodData Central. (2019). Broccoli, raw. FDC ID 170379.{' '}
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
              Boreal Bloom Homestead. &ldquo;Can Chickens Eat Broccoli?&rdquo; Keeper experience documentation of goitrogen and avian goiter risk. Not peer-reviewed veterinary literature.
            </li>
            <li className="italic">
              This page does not constitute veterinary advice. If your flock shows signs of illness, consult a licensed poultry veterinarian.
            </li>
          </ul>
        </section>

        {/* Related links */}
        <div className="flex flex-wrap gap-4 border-t border-greenTint pt-6">
          <Link href="/pets/can-dogs-eat-broccoli" className="text-sm text-forest font-semibold hover:underline">
            Can Dogs Eat Broccoli?
          </Link>
          <Link href="/pets/can-cats-eat-broccoli" className="text-sm text-forest font-semibold hover:underline">
            Can Cats Eat Broccoli?
          </Link>
          <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">
            How to Store Fresh Broccoli
          </Link>
        </div>

      </article>
    </>
  )
}
