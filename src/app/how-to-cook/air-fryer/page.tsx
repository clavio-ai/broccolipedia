import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Air Fry Broccoli Crispy Every Time | BroccoliPedia',
  description:
    'Air fry broccoli at 380°F for 8-10 minutes in a single layer. The key: dry the florets completely before cooking. Broccoli is 89% water. Skip drying and you get steam, not crunch.',
  keywords: [
    'how to air fry broccoli',
    'air fryer broccoli crispy',
    'air fry broccoli temperature',
    'air fryer broccoli time',
    'how to make broccoli crispy air fryer',
  ],
  openGraph: {
    title: 'How to Air Fry Broccoli Crispy Every Time',
    description:
      'Dry the florets, single layer, 380°F for 8-10 minutes. The method that got Alfi calling them "tiny trees that taste like chips."',
    url: 'https://broccolipedia.com/how-to-cook/air-fryer',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/air-fry-broccoli/air-fry-broccoli-finished-result-plate.webp',
        width: 1200,
        height: 630,
        alt: 'Air-fried broccoli florets on a matte cream ceramic plate, edges charred and crispy, on a light wooden surface.',
      },
    ],
    type: 'article',
  },
}

// ── WikiData-linked entities from TextRazor extraction ────────────────────────
const pageEntities = [
  { name: 'Broccoli', wikidataId: 'Q47722', url: 'http://en.wikipedia.org/wiki/Broccoli' },
  { name: 'Air frying', wikidataId: 'Q951722', url: 'http://en.wikipedia.org/wiki/Convection_oven' },
  { name: 'Vitamin C', wikidataId: 'Q199678', url: 'http://en.wikipedia.org/wiki/Vitamin_C' },
  { name: 'Myrosinase', wikidataId: 'Q416212', url: 'http://en.wikipedia.org/wiki/Myrosinase' },
  { name: 'Sulforaphane', wikidataId: 'Q424489', url: 'http://en.wikipedia.org/wiki/Sulforaphane' },
  { name: 'Glucoraphanin', wikidataId: 'Q5572329', url: 'http://en.wikipedia.org/wiki/Glucoraphanin' },
  { name: 'Avocado oil', wikidataId: 'Q2918735', url: 'http://en.wikipedia.org/wiki/Avocado_oil' },
  { name: 'Sesame oil', wikidataId: 'Q212317', url: 'http://en.wikipedia.org/wiki/Sesame_oil' },
  { name: 'Olive oil', wikidataId: 'Q93165', url: 'http://en.wikipedia.org/wiki/Olive_oil' },
  { name: 'Caramelization', wikidataId: 'Q73185', url: 'http://en.wikipedia.org/wiki/Caramelization' },
]

// ── BreadcrumbList schema ─────────────────────────────────────────────────────
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
      name: 'Air Fryer',
      item: 'https://broccolipedia.com/how-to-cook/air-fryer',
    },
  ],
}

// ── HowTo schema ──────────────────────────────────────────────────────────────
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Air Fry Broccoli (Crispy Every Time)',
  description:
    'A reliable method for getting broccoli genuinely crispy in the air fryer. Not soggy, not steamed. Key: dry the florets completely, do not overcrowd, and shake the basket halfway.',
  totalTime: 'PT18M',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/air-fry-broccoli/air-fry-broccoli-finished-result-plate.webp',
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli (1 medium head)' },
    { '@type': 'HowToSupply', name: 'Avocado oil or olive oil (1-1.5 tbsp)' },
    { '@type': 'HowToSupply', name: 'Garlic powder (0.5 tsp)' },
    { '@type': 'HowToSupply', name: 'Onion powder (pinch)' },
    { '@type': 'HowToSupply', name: 'Salt and black pepper' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Air fryer (basket or tray style)' },
    { '@type': 'HowToTool', name: 'Large mixing bowl' },
    { '@type': 'HowToTool', name: 'Tea towel or paper towels' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Cut the florets',
      text: 'Cut broccoli into even 1 to 1.5-inch pieces. Uniform size ensures even cooking. The stalk can be sliced into thick matchsticks; it crisps faster than the florets.',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/air-fry-broccoli/air-fry-broccoli-broccoli-method-in-action.webp',
      },
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Dry thoroughly',
      text: 'Pat florets dry with a clean tea towel or paper towels. Broccoli is 89.2% water, and any surface moisture will steam the florets inside the basket instead of crisping them.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Season',
      text: 'Toss florets with 1 to 1.5 tbsp avocado or olive oil, half a tsp garlic powder, a pinch of onion powder, salt, and black pepper until evenly coated.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Preheat the air fryer',
      text: 'Preheat air fryer to 380°F (195°C) for 3 minutes before adding the broccoli.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Air fry in a single layer',
      text: 'Arrange florets in a single layer in the basket. Do not stack or pack them tightly. Overcrowding causes steaming rather than crisping.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Cook and shake',
      text: 'Cook at 380°F for 8 to 10 minutes, shaking the basket firmly at the 5-minute mark. At 8 minutes, check for visible dark edges and a dry surface. Add 2 more minutes if needed.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Serve immediately',
      text: 'Serve straight from the basket. Add a squeeze of lemon juice or grated parmesan immediately if using. Eat now, as air fryer broccoli softens quickly as it cools.',
    },
  ],
  mentions: pageEntities.map((e) => ({
    '@type': 'Thing',
    name: e.name,
    sameAs: `https://www.wikidata.org/wiki/${e.wikidataId}`,
  })),
}

// ── FAQPage schema ────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does broccoli take in the air fryer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight to ten minutes at 380°F in a basket-style air fryer, shaking halfway through. Tray-style air fryer ovens need 10 to 12 minutes. Frozen broccoli needs 12 to 14 minutes: thaw slightly and dry before cooking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use frozen broccoli in the air fryer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with care. Let frozen florets thaw for 10 minutes, then press them dry. They release more liquid than fresh broccoli so they need a couple of extra minutes in the basket. Expect slightly less crunch at the edges, but the flavour is good.',
      },
    },
    {
      '@type': 'Question',
      name: 'What oil is best for air frying broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avocado oil is a strong choice because its smoke point is around 520°F, well above air fry temperature. Refined olive oil also works. Extra-virgin olive oil is fine at 380°F but can give a slightly bitter finish near its smoke point limit. Sesame oil makes a great accent at one teaspoon alongside a neutral oil, but should not be the only fat used.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to preheat the air fryer for broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Three minutes at 380°F before the broccoli goes in. An unheated basket means the florets warm up slowly rather than hitting immediate high heat, so the inside cooks before the outside gets a chance to char.',
      },
    },
  ],
}

// ── Article schema ────────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Air Fry Broccoli (Crispy Every Time)',
  description:
    'The key to crispy air fryer broccoli is drying the florets completely before cooking. Broccoli is 89% water. Surface moisture turns to steam and kills the crunch.',
  image: 'https://broccolipedia.com/images/air-fry-broccoli/air-fry-broccoli-finished-result-plate.webp',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/logo.webp',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/how-to-cook/air-fryer',
  },
}

export default function AirFryerBroccoliPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-green-700 mb-4">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/how-to-cook" className="hover:underline">How to Cook</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-green-900 font-medium">Air Fryer</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          How to Air Fry Broccoli (Crispy Every Time)
        </h1>

        {/* Hero image */}
        <img
          src="/images/air-fry-broccoli/air-fry-broccoli-finished-result-plate.webp"
          alt="Air-fried broccoli florets on a matte cream ceramic plate, edges charred and crispy, on a light wooden surface."
          width={800}
          height={534}
          className="w-full rounded-xl mb-6 object-cover"
          loading="eager"
        />

        {/* Opening paragraph */}
        <p className="text-deepForest leading-relaxed mb-4 text-lg">
          The first time I made air fryer broccoli, it came out limp and pale and slightly wet. I&apos;d seen it on someone&apos;s Reel looking like the kind of thing you&apos;d actually want to eat. What came out of my Philips that Sunday in 2023 was nothing like that. Adam pushed it to the side of his plate without a word. That&apos;s his version of polite. I tried again the next night. Same result. Third time, I pressed the florets dry between two tea towels before seasoning. That batch came out with charred edges and actual crunch. Alfi grabbed three pieces before I&apos;d even plated them and called them &ldquo;tiny trees that taste like chips.&rdquo; That was it. I&apos;ve made them the same way every week since.
        </p>

        {/* QuickAnswer */}
        <QuickAnswer>
          Air fry broccoli at 380°F (195°C) for 8 to 10 minutes in a single layer, shaking the basket firmly at the 5-minute mark. The single most important step: dry the florets completely before you season them. Broccoli is 89% water, and any moisture on the surface turns to steam inside the basket and kills the crunch.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-green-50 rounded-xl p-5 mb-8 border border-green-200">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span><strong>Temperature:</strong> 380°F (195°C) for a basket-style air fryer</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span><strong>Time:</strong> 8 to 10 minutes; tray-style oven air fryers need 10 to 12</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span><strong>Drying:</strong> Press florets dry with a tea towel before adding oil or seasoning</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span><strong>Single layer:</strong> Overcrowded florets steam instead of crisp. Work in batches</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span><strong>Shake at 5 minutes:</strong> Firm shake halfway through for even browning</span></li>
          </ul>
        </div>

        {/* Step by step */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How to Air Fry Broccoli Step by Step
          </h2>

          {/* In-process image */}
          <img
            src="/images/air-fry-broccoli/air-fry-broccoli-broccoli-method-in-action.webp"
            alt="Broccoli florets in an air fryer basket mid-cook, showing the single layer arrangement and steam rising from the florets."
            width={800}
            height={534}
            className="w-full rounded-xl mb-5 object-cover"
            loading="lazy"
          />

          <ol className="space-y-5 text-deepForest">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <strong>Cut the florets.</strong> Cut broccoli into even 1 to 1.5-inch pieces. If some are twice the size of others, the small ones burn before the big ones cook through. The stalk works too: slice it into thick matchsticks and it crisps up faster than the florets.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <strong>Dry thoroughly.</strong> This is the step nobody tells you about. Broccoli is 89.2% water by weight <cite className="not-italic text-green-700">(USDA FDC 170379)</cite>. Any surface moisture creates steam inside the basket, and steam is the enemy of crunch. Press the florets between two clean tea towels for about 30 seconds. Do not skip this.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <strong>Season.</strong> Toss the dried florets with 1 to 1.5 tablespoons of avocado oil or olive oil, half a teaspoon of garlic powder, a pinch of onion powder, salt, and black pepper. Coat every piece. For an Asian-style version, swap in one teaspoon of sesame oil alongside a neutral oil, and add a splash of soy sauce only after cooking.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <strong>Preheat the air fryer.</strong> Three minutes at 380°F. The florets need to hit heat immediately to get that charred edge. Skipping this step is why so many first attempts turn out soft.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <strong>Single layer in the basket.</strong> If florets are stacked on each other, the ones on the bottom steam from the moisture above. Space equals crunch. Cook in two batches if needed.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
              <div>
                <strong>Cook 8 to 10 minutes, shake at 5 minutes.</strong> Pull out the basket and shake firmly at the halfway mark so new surfaces hit the heat. At 8 minutes, check one floret: visible dark edges, dry to the touch. If it looks pale, give it 2 more minutes.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">7</span>
              <div>
                <strong>Serve immediately.</strong> Squeeze lemon over the top or add parmesan. Eat now. Air fryer broccoli softens quickly as it cools.
              </div>
            </li>
          </ol>
        </section>

        {/* Why this method works */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Why This Method Works
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Broccoli is mostly water. When you put wet florets into the basket, the surface moisture evaporates before browning can happen. The inside of the basket becomes humid and your broccoli steams from the outside in. That is where the pale, soft result comes from.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Dry the surface first and the hot air hits dry starch and oil immediately. That creates the char at the edges, the caramelisation that makes a chip taste like a chip instead of a vegetable.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            One more thing: if you cut broccoli and wait 40 minutes before cooking, the enzyme myrosinase has time to convert glucoraphanin into sulforaphane, a compound that research suggests has antioxidant properties <cite className="not-italic text-green-700">(biovie.fr; PubMed 2020)</cite>. Heat above 70°C destroys myrosinase, so once heat is applied, that conversion stops. I prep the broccoli first, do other things, then come back to dry and season before cooking.
          </p>
          <p className="text-deepForest leading-relaxed">
            Air frying also retains more Vitamin C than boiling does. Raw broccoli has 89.2 mg of Vitamin C per 100g <cite className="not-italic text-green-700">(USDA FDC 170379)</cite>, roughly your full daily recommended value in one cup. Boiling loses about half of that into the cooking water. Air frying uses no water, so the vitamins stay in the vegetable.
          </p>
        </section>

        {/* Why does it come out soft */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Why Does My Air Fryer Broccoli Come Out Soft?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Three reasons, in order of how often they cause the problem.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-deepForest leading-relaxed"><strong>Wet florets.</strong> Almost always the cause the first few times. Rinsed broccoli that goes straight to the basket without drying will steam, not crisp. Pat it dry. Really dry.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-deepForest leading-relaxed"><strong>Overcrowding.</strong> If you cannot see the basket underneath the broccoli, you&apos;ve packed too much. Moisture from one floret lands on the next. Smaller batch, crispier result.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-deepForest leading-relaxed"><strong>Temperature too low.</strong> Some basket air fryers advertise 400°F but run 20 to 30 degrees cooler. If your broccoli is not charring at the edges after 10 minutes at 380°F, try 390°F next time.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-deepForest mb-2">
                How Long Does Broccoli Take in the Air Fryer?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Eight to ten minutes at 380°F in a basket air fryer, shaking halfway. Tray-style air fryer ovens need 10 to 12 minutes. Frozen broccoli needs 12 to 14 minutes: thaw slightly and dry before cooking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-deepForest mb-2">
                Can I Use Frozen Broccoli in the Air Fryer?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Yes, with care. Let frozen florets thaw for 10 minutes, then press them dry. They release more liquid than fresh so they need a couple of extra minutes. Expect slightly less crunch at the edges, but the flavour is good.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-deepForest mb-2">
                What Oil Is Best for Air Frying Broccoli?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Avocado oil works well because its smoke point is around 520°F, well above air fry temperature. Refined olive oil also works. Extra-virgin olive oil is fine at 380°F but can give a slightly bitter finish if it gets close to its smoke point limit. Sesame oil makes a great accent (one teaspoon alongside a neutral oil) but should not be the only fat used.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-deepForest mb-2">
                Do I Need to Preheat the Air Fryer for Broccoli?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Yes. Three minutes at 380°F before the broccoli goes in. An unheated basket means the florets warm up slowly rather than hitting immediate high heat, so the inside cooks before the outside gets a chance to char.
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <footer className="border-t border-green-200 pt-6 mt-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="text-sm text-green-800 space-y-1">
            <li>
              USDA FoodData Central. (2019). <em>Broccoli, raw</em>. FDC ID 170379.{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-600"
              >
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Biovie.fr / PubMed (2020). Myrosinase activity, glucoraphanin conversion, and sulforaphane yield in cut broccoli: effect of resting time and temperature.
            </li>
          </ul>
        </footer>

      </article>
    </>
  )
}
