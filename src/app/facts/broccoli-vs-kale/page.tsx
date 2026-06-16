import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AuthorByline from '@/components/AuthorByline'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Broccoli vs Kale Nutrition: Which Is Actually Healthier?',
  description:
    'Broccoli wins on vitamin C, folate, and sulforaphane. Kale wins on vitamin K, vitamin A, and calcium. USDA data compared by a mum who actually read the numbers.',
  keywords: [
    'broccoli vs kale',
    'broccoli vs kale nutrition',
    'kale vs broccoli which is healthier',
    'broccoli kale comparison',
    'sulforaphane broccoli',
    'kale vitamin K',
  ],
  openGraph: {
    title: 'Broccoli vs Kale Nutrition: Which Is Actually Healthier?',
    description:
      'Broccoli wins on vitamin C and sulforaphane. Kale wins on vitamin K, A, and calcium. USDA numbers, cooking tips, and a real family perspective.',
    url: 'https://broccolipedia.com/facts/broccoli-vs-kale',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-vs-kale/broccoli-vs-kale-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli florets and kale leaves side by side on a wooden surface',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/facts/broccoli-vs-kale',
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/facts/broccoli-vs-kale#article',
      headline: 'Broccoli vs Kale Nutrition: Which Is Actually Healthier?',
      description:
        'Broccoli wins on vitamin C, folate, and sulforaphane. Kale wins on vitamin K, vitamin A, and calcium. USDA data compared by a mum who actually read the numbers.',
      url: 'https://broccolipedia.com/facts/broccoli-vs-kale',
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
          url: 'https://broccolipedia.com/logo.png',
        },
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/broccoli-vs-kale/broccoli-vs-kale-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Broccoli',
          sameAs: 'https://www.wikidata.org/wiki/Q47722',
        },
        {
          '@type': 'Thing',
          name: 'Kale',
          sameAs: 'https://www.wikidata.org/wiki/Q45989',
        },
      ],
      mentions: [
        {
          '@type': 'ChemicalSubstance',
          name: 'Sulforaphane',
          sameAs: 'https://www.wikidata.org/wiki/Q424489',
        },
        {
          '@type': 'ChemicalSubstance',
          name: 'Vitamin C',
          sameAs: 'https://www.wikidata.org/wiki/Q199678',
        },
        {
          '@type': 'ChemicalSubstance',
          name: 'Vitamin K',
          sameAs: 'https://www.wikidata.org/wiki/Q182338',
        },
        {
          '@type': 'ChemicalSubstance',
          name: 'Folate',
          sameAs: 'https://www.wikidata.org/wiki/Q127060',
        },
        {
          '@type': 'ChemicalSubstance',
          name: 'Calcium',
          sameAs: 'https://www.wikidata.org/wiki/Q706',
        },
        {
          '@type': 'ChemicalSubstance',
          name: 'Vitamin A',
          sameAs: 'https://www.wikidata.org/wiki/Q18225',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quickanswer'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/facts/broccoli-vs-kale#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which has more protein, broccoli or kale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'By raw weight, kale has more protein: 4.28g per 100g versus broccoli\'s 2.82g (USDA FDC 170379; USDA FDC 168421). Per cooked cup, values converge because kale wilts significantly in volume.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does kale have more calcium than broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, substantially. Kale has roughly 4.36 times more calcium per 100g than broccoli by weight (USDA data via versus.com). One cup cooked kale provides close to 100mg calcium. Research suggests kale\'s calcium is bioavailable and not significantly blocked by oxalates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for weight loss, broccoli or kale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are extremely low in calories: broccoli 34 kcal per 100g raw, kale 49 kcal per 100g raw (USDA FDC 170379; USDA FDC 168421). Broccoli has slightly more fiber per cup cooked. For weight management the difference is negligible. Pick the one you will actually eat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a downside to eating too much kale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At very high quantities, specifically daily juicing of 10 or more servings, kale glucosinolates can theoretically interfere with iodine absorption. At 1-3 daily servings the practical effect is a modestly increased iodine requirement, which regular seafood consumption covers. Kale also contains oxalates. Anyone with kidney stone history should discuss intake with a doctor.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/facts/broccoli-vs-kale#breadcrumb',
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
          name: 'Broccoli vs Kale',
          item: 'https://broccolipedia.com/facts/broccoli-vs-kale',
        },
      ],
    },
  ],
}

const nutritionRows = [
  ['Calories', '34 kcal', '49 kcal', 'Broccoli (lower)'],
  ['Protein', '2.82g', '4.28g', 'Kale'],
  ['Fiber', '2.6g', '3.6g', 'Kale'],
  ['Vitamin C', '89.2mg (99% DV)', '~22% DV', 'Broccoli'],
  ['Vitamin K', '102mcg (85% DV)', '817mcg (681% DV)', 'Kale'],
  ['Vitamin A', '31mcg RAE', '500mcg RAE', 'Kale'],
  ['Calcium', '47mg', '~150mg', 'Kale'],
  ['Folate', '63mcg (16% DV)', 'Lower', 'Broccoli'],
  ['Sulforaphane potential', 'High (glucoraphanin-rich)', 'Moderate', 'Broccoli'],
  ['Lutein + Zeaxanthin', '1,400mcg', 'Present', 'Similar'],
]

const faqs = [
  {
    q: 'Which has more protein, broccoli or kale?',
    a: 'By raw weight, kale has more: 4.28g per 100g versus broccoli\'s 2.82g (USDA FDC 170379; USDA FDC 168421). Per cooked cup, values converge because kale wilts significantly in volume.',
  },
  {
    q: 'Does kale have more calcium than broccoli?',
    a: 'Yes, substantially. Kale has roughly 4.36 times more calcium per 100g than broccoli by weight (USDA data via versus.com). One cup cooked kale provides close to 100mg calcium. Research suggests kale\'s calcium is bioavailable and not significantly blocked by oxalates, unlike spinach calcium.',
  },
  {
    q: 'Which is better for weight loss, broccoli or kale?',
    a: 'Both are extremely low in calories: broccoli 34 kcal per 100g raw, kale 49 kcal per 100g raw (USDA FDC 170379; USDA FDC 168421). Broccoli has slightly more fiber per cup cooked. For weight management the difference is negligible. Pick the one you will actually eat.',
  },
  {
    q: 'Is there a downside to eating too much kale?',
    a: 'At very high quantities, specifically daily juicing of 10 or more servings, kale glucosinolates can theoretically interfere with iodine absorption. At 1-3 daily servings the practical effect is a modestly increased iodine requirement, which regular seafood consumption covers. Kale also contains oxalates. Anyone with kidney stone history should discuss intake with a doctor.',
  },
]

export default function BroccoliVsKalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-5">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/facts" className="hover:text-forest">Facts</Link>
          {' / '}
          <span className="text-deepForest">Broccoli vs Kale</span>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          Broccoli vs Kale: Which One Actually Wins?
        </h1>

        {/* Author byline */}
        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
          <Image
            src="/images/broccoli-vs-kale/broccoli-vs-kale-hero-broccoli-feature.webp"
            alt="Broccoli florets and kale leaves side by side on a wooden surface"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Opening paragraph */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          For two years I fed Adam broccoli florets with soy sauce and quietly ate the kale myself. He is seven and
          has declared kale &ldquo;a leaf that tastes like a mistake,&rdquo; so I stopped fighting that battle. But
          for two years I also assumed he was missing out on the better vegetable, because kale costs more at Cold
          Storage, it is darker green, and every wellness account on my feed treats it like a gift from the earth.
          Then I actually sat down with the USDA numbers and realised I had been making assumptions instead of
          reading data.
        </p>

        {/* Quick Answer */}
        <QuickAnswer>
          <strong>Broccoli wins on vitamin C, folate, and sulforaphane. Kale wins on vitamin K, vitamin A,
          and calcium.</strong> Neither is healthier in a straight line. The gap depends on what you need.
          If you are choosing for a child who will actually eat it, pick that one.
        </QuickAnswer>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Which has more vitamin C, broccoli or kale?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Broccoli wins this, and it is not close. Per 100g raw, broccoli gives 89.2mg of vitamin C, which is
            99% of your daily value (USDA FDC 170379). Kale per cup raw delivers about 22% DV (USDA FDC 168421).
            That is a real gap.
          </p>
          <p className="text-deepForest leading-relaxed">
            The catch: boiling broccoli wipes out a significant portion of that vitamin C. Light steaming or
            roasting keeps more of it. When I make it for Adam I steam it for four minutes, not boil it.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Which has more vitamin K, broccoli or kale?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Kale by a large margin. Kale contains around 817mcg of vitamin K per 100g raw versus 102mcg for
            broccoli (USDA FDC 170379). That is roughly 681% of the daily value for kale versus 85% for
            broccoli (USDA FDC 168421).
          </p>
          <p className="text-deepForest leading-relaxed">
            Vitamin K matters for blood clotting and bone density. If you are on warfarin or any blood thinner,
            this is the number your doctor needs to know about. You do not have to avoid kale, but dramatic
            changes to intake can interact with that medication.
          </p>
        </section>

        {/* Section 3: Sulforaphane */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Does cooking destroy sulforaphane in broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            This is the detail nobody in the top search results explains properly.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Broccoli does not contain sulforaphane directly. It contains glucoraphanin, a precursor compound
            (USDA FDC 170379; glucosinolate profile data). When you chop or chew raw broccoli, an enzyme called
            myrosinase converts glucoraphanin into sulforaphane. That is where the benefit happens.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            The problem is heat. Boiling broccoli above roughly 70°C destroys myrosinase (MD Anderson Cancer
            Center, referenced via fivejourneys.com, 2023). No myrosinase, no conversion. You still get
            nutrients, but you lose what makes broccoli distinctive among cruciferous vegetables.
          </p>

          <div
            className="fact-block my-5"
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderLeft: '4px solid #15803D',
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#166534',
                marginBottom: '0.5rem',
              }}
            >
              The Mustard Seed Fix
            </div>
            <p className="text-sm text-deepForest leading-relaxed">
              Add a small pinch of mustard seeds to cooked broccoli. Mustard contains myrosinase that survives
              cooking and performs the glucoraphanin conversion. Broccoli sprouts, meanwhile, contain 10 to
              100 times more glucoraphanin than mature broccoli (research suggests, per Johns Hopkins Brassica
              Chemoprotection Laboratory studies). A tablespoon of sprouts may outperform a full cup of
              cooked florets for this specific compound.
            </p>
          </div>

          <p className="text-deepForest leading-relaxed">
            Kale has glucosinolates too, but at lower concentrations than broccoli. For sulforaphane
            specifically, broccoli is the right choice.
          </p>
        </section>

        {/* Section 4: Thyroid */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Is kale safe if you have thyroid problems?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            There is a lot of alarming content online about this. Here is the practical answer.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            At normal eating levels of 2-3 servings of cruciferous vegetables per day, the main effect is that
            you need slightly more iodine. That is it. Research suggests the threshold for goitrogenic effects
            at normal dietary intake is extremely high (Masterjohn C. 2020, citing prior animal study literature).
            That threshold data comes from animal experiments, and no equivalent human data exists to define a
            precise limit.
          </p>
          <p className="text-deepForest leading-relaxed">
            The practical fix is simple: eat some seafood. Nori, kombu, or any seaweed also works. I started
            adding a small strip of dried kombu to our soup stock, which has zero flavour impact. Raw cruciferous
            vegetables have more glucosinolate activity than cooked, so if you are managing a thyroid condition,
            cook your kale and broccoli rather than eating them raw.
          </p>
        </section>

        {/* Section 5: Every day */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Can you eat broccoli and kale every day?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            For most people, yes. The concern is real but routinely overstated.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Jorge Cruise, a nutrition author, appeared on NewsNation in 2023 arguing that kale and broccoli
            contain plant defense compounds that can inhibit nutrient absorption. The mechanism he describes is
            real (glucosinolate-mediated iodine competition), but research suggests that at moderate servings
            the practical effect is minimal for most healthy adults. The main concern at daily intake remains
            the iodine point noted above.
          </p>
          <p className="text-deepForest leading-relaxed">
            For kids, the daily question is a different kind of practical problem. Alfi will eat kale if I
            roast it into chips with olive oil and sea salt. Adam will eat broccoli steamed with soy sauce.
            I gave up on making them eat the same vegetable at the same time.
          </p>
        </section>

        {/* Nutrient Comparison Table */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Broccoli vs Kale: Nutrient Comparison (per 100g raw)
          </h2>
          <p className="text-xs text-sage mb-3">
            Source: USDA FoodData Central — FDC ID 170379 (broccoli), FDC ID 168421 (kale, raw);
            calcium data via versus.com citing USDA
          </p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-deepForest text-white">
                  <th className="px-3 py-2 text-left font-semibold">Nutrient</th>
                  <th className="px-3 py-2 text-left font-semibold">Broccoli</th>
                  <th className="px-3 py-2 text-left font-semibold">Kale</th>
                  <th className="px-3 py-2 text-left font-semibold">Higher</th>
                </tr>
              </thead>
              <tbody>
                {nutritionRows.map(([nutrient, broc, kale, higher], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                    <td className="px-3 py-2 font-medium text-deepForest">{nutrient}</td>
                    <td className="px-3 py-2 text-sage">{broc}</td>
                    <td className="px-3 py-2 text-sage">{kale}</td>
                    <td className="px-3 py-2 text-xs font-semibold text-forest">{higher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-10 border-t border-greenTint pt-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">{faq.q}</h3>
                <p className="text-sage text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mt-8 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="text-xs text-sage space-y-1 leading-relaxed">
            <li>USDA FoodData Central FDC ID 170379 — Broccoli, raw</li>
            <li>USDA FoodData Central FDC ID 168421 — Kale, raw</li>
            <li>versus.com — Broccoli vs Kale calcium comparison (USDA-sourced data)</li>
            <li>
              fivejourneys.com — Sulforaphane and cooking method research, referencing MD Anderson Cancer
              Center guidance
            </li>
            <li>
              Masterjohn C. (2020). &ldquo;How much spinach, broccoli, and kale is too much?&rdquo; YouTube,
              Chris Masterjohn PhD channel
            </li>
            <li>
              NewsNation (2023). Interview with Jorge Cruise on plant defense compounds in cruciferous vegetables
            </li>
          </ul>
        </section>

        {/* Related links */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/facts/broccoli-vs-cauliflower" className="text-sm text-forest font-semibold hover:underline">
            Broccoli vs Cauliflower
          </Link>
          <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Health Benefits
          </Link>
          <Link href="/nutrition/vitamins" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Vitamin Content
          </Link>
        </div>
      </article>
    </>
  )
}
