import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Roast Broccoli in the Oven | BroccoliPedia',
  description:
    'Roast broccoli at 425°F for 18–22 minutes until the edges are deeply caramelized. Learn the hot-pan trick, how to use the stalk, and whether roasting destroys nutrients.',
  keywords: [
    'how to roast broccoli in oven',
    'roasted broccoli temperature',
    '400 vs 425 broccoli',
    'oven roasted broccoli',
    'best temperature for roasting broccoli',
  ],
  openGraph: {
    title: 'How to Roast Broccoli in the Oven',
    description:
      'The 425°F method for crispy, caramelized broccoli with charred tips. Includes the hot-pan technique, stalk prep, and sulforaphane hack.',
    url: 'https://broccolipedia.com/how-to-cook/roast',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/roast-broccoli/roast-broccoli-finished-result-plate.webp',
        width: 1200,
        height: 630,
        alt: 'Roasted broccoli with deeply golden edges on a baking sheet',
      },
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://broccolipedia.com/how-to-cook/roast',
  },
}

// ── Schema JSON-LD ────────────────────────────────────────────────────────────

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Roast Broccoli in the Oven',
  description:
    'A step-by-step guide to roasting broccoli at 425°F with caramelized edges, crispy tips, and the hot-pan sear technique.',
  totalTime: 'PT25M',
  prepTime: 'PT5M',
  performTime: 'PT20M',
  yield: '4 servings',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/roast-broccoli/roast-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 800,
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
  supply: [
    { '@type': 'HowToSupply', name: '1 large head of broccoli' },
    { '@type': 'HowToSupply', name: '2 tablespoons olive oil' },
    { '@type': 'HowToSupply', name: 'Kosher salt' },
    { '@type': 'HowToSupply', name: 'Black pepper' },
    { '@type': 'HowToSupply', name: 'Half a lemon' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Rimmed baking sheet' },
    { '@type': 'HowToTool', name: 'Oven' },
    { '@type': 'HowToTool', name: 'Paper towels' },
    { '@type': 'HowToTool', name: 'Vegetable peeler' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Preheat the oven and the pan',
      text: 'Set your oven to 425°F (220°C). Place the empty rimmed baking sheet inside while the oven heats up. This creates a hot surface that sears the broccoli on contact rather than letting it slowly steam.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Prep the broccoli',
      text: 'Cut florets by slicing down through the crown, not across it. Cutting across creates fine green dust that burns before the floret cooks. Peel the stalk with a vegetable peeler and slice the tender interior into quarter-inch pieces.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Dry the broccoli',
      text: 'Spread florets and stalk pieces on paper towels and blot completely dry. Moisture on the surface turns to steam in the oven and prevents caramelization.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Toss with olive oil',
      text: 'Add the dry broccoli to a large bowl with 2 tablespoons of olive oil, half a teaspoon of kosher salt, and black pepper. Toss until every piece is glossy.',
      position: 4,
    },
    {
      '@type': 'HowToStep',
      name: 'Spread in a single layer',
      text: 'Remove the hot baking sheet from the oven. Lay the broccoli out with space between each piece — no overlapping. Use two pans if needed. Crowding causes steaming, not roasting.',
      position: 5,
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/roast-broccoli/roast-broccoli-broccoli-method-in-action.webp',
      },
    },
    {
      '@type': 'HowToStep',
      name: 'Roast 18 to 22 minutes',
      text: 'Do not open the oven for the first 15 minutes. At 18 minutes, check for colour — the tips should be dark golden brown with some florets showing deep char on their flat edges.',
      position: 6,
    },
    {
      '@type': 'HowToStep',
      name: 'Finish with lemon and serve',
      text: 'Pull the tray from the oven and squeeze half a lemon over the top immediately. Serve right away — roasted broccoli does not hold well.',
      position: 7,
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q424489',
    },
    {
      '@type': 'Thing',
      name: 'Caramelization',
      sameAs: 'https://www.wikidata.org/wiki/Q73185',
    },
    {
      '@type': 'Thing',
      name: 'Olive oil',
      sameAs: 'https://www.wikidata.org/wiki/Q93165',
    },
    {
      '@type': 'Thing',
      name: 'Lemon',
      sameAs: 'https://www.wikidata.org/wiki/Q500',
    },
    {
      '@type': 'Thing',
      name: 'Roasting',
      sameAs: 'https://www.wikidata.org/wiki/Q4865573',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it better to roast broccoli at 400 or 425?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '425°F gives better results. At 400°F the broccoli interior cooks before the surface has time to caramelize properly. At 425°F you get crispy, golden edges while the inside stays tender. For extra char, push to 430°F and check at 18 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common mistakes when roasting broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three main mistakes: roasting wet broccoli (moisture creates steam and prevents browning), crowding the pan (florets steam each other instead of caramelizing), and using too low a temperature (below 400°F gives tender but not roasted results).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does roasting broccoli destroy nutrients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-heat roasting reduces vitamin C by roughly 20–30% compared to raw. Vitamin K is barely affected. Sulforaphane production can be preserved by chopping broccoli 40 minutes before cooking, allowing the myrosinase enzyme to convert glucoraphanin at room temperature before heat deactivates it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does roasted broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3 to 4 days in an airtight container. Reheat in a 375°F oven for 5 to 8 minutes to recover some crispness. Microwaving works but softens the texture considerably.',
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
      name: 'How to Cook',
      item: 'https://broccolipedia.com/how-to-cook',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Roast',
      item: 'https://broccolipedia.com/how-to-cook/roast',
    },
  ],
}

// ── Page component ─────────────────────────────────────────────────────────────

export default function RoastBroccoliPage() {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted mb-6">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/how-to-cook" className="hover:underline">How to Cook</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-deepForest font-medium">Roast</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          How to Roast Broccoli in the Oven
        </h1>

        {/* Hero image — pre-oven */}
        <figure className="mb-6">
          <img
            src="/images/roast-broccoli/roast-broccoli-broccoli-method-in-action.webp"
            alt="Broccoli florets and sliced stalks tossed in olive oil on a rimmed baking sheet, ready for the oven"
            width={1200}
            height={800}
            className="w-full rounded-xl object-cover"
            loading="eager"
          />
        </figure>

        {/* Opening paragraph — Elena's personal moment */}
        <p className="text-deepForest leading-relaxed mb-6">
          Adam stole the first piece straight from the hot tray. I had left the broccoli in the oven too long and the
          edges were almost black. He grabbed a floret, burned his fingers slightly, chewed it standing at the counter,
          and said, &ldquo;Oh. This one&rsquo;s actually nice.&rdquo; Then he ate the rest. That was 2022, Singapore, the tail end
          of a broccoli strike that had lasted six months. I nearly threw the whole tray away. Instead we got our best
          vegetable win in years. The accident taught me that 400&deg;F is fine, but 425&deg;F is honest.
        </p>

        {/* QuickAnswer block — AEO target */}
        <QuickAnswer>
          Preheat your oven to 425&deg;F (220&deg;C). Toss dry broccoli florets and sliced stalks with olive oil, salt, and
          pepper. Spread in a single layer on a hot baking sheet. Roast 18 to 22 minutes until the edges are deeply
          golden and the tips start to char. Finish with a squeeze of lemon and serve right away.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>&#10003; Temperature: 425&deg;F gives the caramelization that 400&deg;F mostly misses</li>
            <li>&#10003; Dry first: Pat completely dry before oil, or the broccoli steams instead of roasting</li>
            <li>&#10003; Single layer only: Crowded florets steam each other rather than caramelize</li>
            <li>&#10003; Use the stalk: Peel the outer layer and slice it thin, it roasts beautifully</li>
            <li>&#10003; Chop 40 minutes early: This preserves sulforaphane through cooking</li>
          </ul>
        </div>

        {/* Step-by-step instructions */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Step-by-Step Instructions</h2>
          <p className="text-deepForest mb-4">
            <strong>What you need:</strong> 1 large head of broccoli, 2 tablespoons olive oil, kosher salt, black
            pepper, half a lemon. <strong>Serves 4. Total time: 25 minutes.</strong>
          </p>
          <ol className="space-y-4 text-deepForest leading-relaxed">
            <li>
              <strong>1. Preheat the oven and the pan.</strong> Set to 425&deg;F (220&deg;C). Put the empty rimmed baking sheet
              inside while the oven heats. When cold broccoli hits a hot oiled pan it sears on contact. Cold pan, and
              it slowly steams.
            </li>
            <li>
              <strong>2. Prep the broccoli.</strong> Cut florets by slicing down through the crown, not across it.
              Cutting across creates a fine green dust that burns before the floret is cooked. Now the stalk: peel the
              tough outer layer with a vegetable peeler and slice the tender interior into quarter-inch pieces. Do not
              waste it.
            </li>
            <li>
              <strong>3. Dry it.</strong> Spread florets and stalk pieces on paper towels and blot dry. This is the
              difference between crispy and soggy. Moisture on the surface turns to steam in the oven and the broccoli
              softens before it can caramelize.
            </li>
            <li>
              <strong>4. Toss with oil.</strong> Add the dry broccoli to a bowl with 2 tablespoons of olive oil, half
              a teaspoon of kosher salt, and black pepper. Toss until every piece is glossy.
            </li>
            <li>
              <strong>5. Single layer on the hot pan.</strong> Pull the hot baking sheet out carefully. Lay the broccoli
              out with space between each piece. Use two pans if needed. Crowding is the reason most roasted broccoli
              fails.
            </li>
            <li>
              <strong>6. Roast 18 to 22 minutes.</strong> Do not open the oven for the first 15 minutes. At 18 minutes,
              the tips should be dark golden brown with some approaching a deep char on the flat edges. That is not a
              mistake. That is the point.
            </li>
            <li>
              <strong>7. Finish with lemon.</strong> Squeeze half a lemon over the top immediately out of the oven.
              Serve right away.
            </li>
          </ol>
        </section>

        {/* Hero image — post-oven */}
        <figure className="mb-8">
          <img
            src="/images/roast-broccoli/roast-broccoli-finished-result-plate.webp"
            alt="Roasted broccoli with deeply golden and slightly charred edges fresh from the oven, with a lemon wedge"
            width={1200}
            height={800}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
        </figure>

        {/* 400 vs 425 section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Is It Better to Roast Broccoli at 400 or 425?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            The difference comes down to the Maillard reaction. Broccoli&rsquo;s natural sugars need high heat to create the
            brown flavour compounds that make roasted broccoli taste so different from steamed. At 400&deg;F, the inside
            cooks before the outside browns properly. At 425&deg;F, the exterior crisps while the centre stays tender.
          </p>
          <p className="text-deepForest leading-relaxed">
            I use 425&deg;F as my everyday setting. It is forgiving: if I get pulled away, the broccoli has a few extra
            minutes before it burns. When I want maximum char and I am paying attention, I push to 430&deg;F and check at
            18 minutes.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Common Mistakes When Roasting Broccoli
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            <strong>Wet broccoli.</strong> Even slight dampness means the florets boil in their own steam for the first
            ten minutes. By the time the water is gone, the surface is soft and too low in sugar to brown. Dry it
            completely.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            <strong>Crowding the pan.</strong> When florets touch, steam builds between them and the temperature drops.
            They sit in a warm damp pocket instead of 425&deg;F dry heat. Same result as wet broccoli, different cause.
            Two pans if needed.
          </p>
          <p className="text-deepForest leading-relaxed">
            <strong>Too low a temperature.</strong> 350&deg;F gives you tender broccoli, not roasted broccoli. The lower
            temperature dries the surface slowly before anything browns. Minimum 400&deg;F, 425&deg;F for the real thing.
          </p>
        </section>

        {/* Nutrition section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Does Roasting Broccoli Destroy Nutrients?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Honest answer: it reduces some and leaves others unchanged.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Vitamin C does take a hit. Raw broccoli contains 89.2 mg per 100g, nearly a full day&rsquo;s worth{' '}
            <cite className="not-italic text-sm text-muted">(USDA FDC 170379)</cite>. High-heat roasting reduces
            vitamin C by roughly 20 to 30%, though a serving still delivers a meaningful amount. Vitamin K, at 102 mcg
            per 100g raw, is barely affected by roasting{' '}
            <cite className="not-italic text-sm text-muted">(USDA FDC 170379)</cite>.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Sulforaphane needs more planning. It forms when a broccoli enzyme called myrosinase converts glucoraphanin
            stored in the florets. Heat above 70&deg;C deactivates myrosinase before that conversion can happen. Research
            suggests a simple fix: chop the broccoli 40 minutes before cooking. During those 40 minutes, myrosinase
            works at room temperature and the sulforaphane is already formed before heat touches it{' '}
            <cite className="not-italic text-sm text-muted">(Moreno et al., 2011, PMID 21790559)</cite>. Learn more
            about{' '}
            <a href="/nutrition/broccoli" className="underline text-leafGreen hover:text-deepForest">
              broccoli&rsquo;s full nutrition profile
            </a>
            .
          </p>
          <p className="text-deepForest leading-relaxed">
            What roasting adds is the Maillard reaction&rsquo;s antioxidant compounds. A different nutritional profile, not a
            lesser one. My practical take as a mom: I cook the broccoli the way my kids will actually eat it. That is
            almost always roasted. We go through at least two heads a week this way, and I have stopped apologizing for
            the slightly black tips.
          </p>
        </section>

        {/* FAQ section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-deepForest mb-2">Should I blanch broccoli before roasting?</h3>
              <p className="text-deepForest leading-relaxed">
                You do not have to, but blanching in heavily salted water for 4 to 5 minutes seasons the inside of the
                broccoli, not just the surface. Drain and steam-dry for 3 minutes before the oven. Alfi is less fussy
                about broccoli texture when it is blanch-roasted because the inside turns more tender while the outside
                stays crisp.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-deepForest mb-2">Can you roast frozen broccoli in the oven?</h3>
              <p className="text-deepForest leading-relaxed">
                Yes. Thaw the florets on paper towels for at least 20 minutes and dry them thoroughly before roasting.
                The ice crystals become a steam wall in the oven if you skip this step. Roast at 425&deg;F, adding 5 to 8
                extra minutes compared to fresh.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-deepForest mb-2">
                How long does roasted broccoli last in the fridge?
              </h3>
              <p className="text-deepForest leading-relaxed">
                3 to 4 days in an airtight container. Reheat in a 375&deg;F oven for 5 to 8 minutes to recover some
                crispness. Microwaving works but softens it considerably.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-deepForest mb-2">
                What seasonings work best with roasted broccoli?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Start with olive oil, kosher salt, and black pepper. From there: sliced garlic added at the 10-minute
                mark (not from the start, it burns), parmesan grated over after the oven, red pepper flakes for heat,
                or lemon zest and sesame seeds as a finishing touch. All delicate additions go on after the oven, not
                before.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="font-serif font-semibold text-lg text-deepForest mb-3">References</h2>
          <ol className="space-y-2 text-sm text-muted list-decimal list-inside">
            <li>
              U.S. Department of Agriculture, Agricultural Research Service. (2019). FoodData Central: Broccoli, raw
              (FDC ID 170379). Retrieved from{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Moreno, D.A., Lopez-Berenguer, C., &amp; Garcia-Viguera, C. (2011). Effects of stir-fry cooking with
              different edible oils on the phytochemical composition of broccoli. <em>Journal of Food Science</em>, 76(4),
              C460&ndash;C466. PMID 21790559.
            </li>
          </ol>
        </section>
      </article>
    </>
  )
}
