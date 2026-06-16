import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Boil Broccoli Without Overcooking | BroccoliPedia',
  description: 'Boil broccoli for 2 to 3 minutes in heavily salted, rolling boiling water. Start the timer when the water returns to a boil. Drain immediately and run under cold tap water. Bright green means done.',
  keywords: [
    'how to boil broccoli',
    'how to boil broccoli without overcooking',
    'how long to boil broccoli',
    'boiling broccoli time',
    'boiled broccoli',
    'how to boil broccoli on stove',
  ],
  openGraph: {
    title: 'How to Boil Broccoli Without Overcooking',
    description: 'The 2 to 3 minute method: salted water, return-to-boil timing, cold tap stop. Elena Ignacio shares the exact steps that keep broccoli bright green and crisp-tender.',
    url: 'https://broccolipedia.com/how-to-cook/boil',
    type: 'article',
    images: [
      {
        url: '/images/boil-broccoli/boil-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli florets being lifted from boiling water with a slotted spoon, bright green color visible',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/how-to-cook/boil',
  },
}

// ── Schema: HowTo ──────────────────────────────────────────────────────────────
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Boil Broccoli Without Overcooking',
  description:
    'A step-by-step method for boiling broccoli so it stays bright green and crisp-tender. Key: salt the water, time from return-to-boil, drain immediately.',
  totalTime: 'PT10M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  yield: '2-4 servings',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/boil-broccoli/boil-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 630,
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli (1 head)' },
    { '@type': 'HowToSupply', name: 'Kosher salt (1 tablespoon)' },
    { '@type': 'HowToSupply', name: 'Water' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Large pot (4 quart minimum)' },
    { '@type': 'HowToTool', name: 'Colander' },
    { '@type': 'HowToTool', name: 'Slotted spoon' },
    { '@type': 'HowToTool', name: 'Vegetable peeler (for stems)' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Prep the florets',
      text: 'Cut broccoli into equal-sized florets. If using stems, peel the outer fibrous layer with a vegetable peeler and cut into coins.',
      image: 'https://broccolipedia.com/images/boil-broccoli/boil-broccoli-broccoli-method-in-action.webp',
    },
    {
      '@type': 'HowToStep',
      name: 'Optional: chop and wait 40 minutes',
      text: 'For maximum sulforaphane, let cut broccoli rest 40 minutes before cooking. Myrosinase converts glucoraphanin to sulforaphane before heat above 70°C destroys the enzyme.',
    },
    {
      '@type': 'HowToStep',
      name: 'Boil the water',
      text: 'Fill a large pot with water and bring to a full, rolling boil. Add 1 tablespoon kosher salt. The water should taste lightly salty.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add florets and time from return-to-boil',
      text: 'Add all florets at once. The water will stop boiling briefly. Start your timer only when the water returns to a full boil (not when you add the broccoli). If using stems, drop those in 2 minutes before the florets.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check for doneness',
      text: 'At 2 minutes, pull out one floret with a slotted spoon and bite it. It should give without being crunchy and hold shape without crumbling. Bright green throughout means done.',
    },
    {
      '@type': 'HowToStep',
      name: 'Drain immediately',
      text: 'Pour into a colander the moment broccoli is done. Run cold tap water over the colander for 10 seconds to stop the cooking. Use an ice bath if available.',
    },
    {
      '@type': 'HowToStep',
      name: 'Season and serve',
      text: 'Drizzle with olive oil and a squeeze of lemon. Add flaky salt, parmesan, or red pepper flakes. Serve while still steaming.',
      image: 'https://broccolipedia.com/images/boil-broccoli/boil-broccoli-finished-result-plate.webp',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Myrosinase',
      sameAs: 'https://www.wikidata.org/wiki/Q416212',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q424489',
    },
    {
      '@type': 'Thing',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q5572329',
    },
    {
      '@type': 'Thing',
      name: 'Chlorophyll',
      sameAs: 'https://www.wikidata.org/wiki/Q43177',
    },
    {
      '@type': 'Thing',
      name: 'Colander',
      sameAs: 'https://www.wikidata.org/wiki/Q1057060',
    },
    {
      '@type': 'Thing',
      name: 'Boiling',
      sameAs: 'https://www.wikidata.org/wiki/Q41716',
    },
    {
      '@type': 'Thing',
      name: 'Steaming',
      sameAs: 'https://www.wikidata.org/wiki/Q1415859',
    },
    {
      '@type': 'Thing',
      name: 'Kosher salt',
      sameAs: 'https://www.wikidata.org/wiki/Q4116639',
    },
    {
      '@type': 'Thing',
      name: 'Olive oil',
      sameAs: 'https://www.wikidata.org/wiki/Q93165',
    },
    {
      '@type': 'Thing',
      name: 'Antioxidant',
      sameAs: 'https://www.wikidata.org/wiki/Q133948',
    },
    {
      '@type': 'Thing',
      name: 'Potassium',
      sameAs: 'https://www.wikidata.org/wiki/Q703',
    },
  ],
}

// ── Schema: FAQPage ────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long should I boil broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2 to 3 minutes in rolling, salted boiling water, timed from when the water returns to a boil after you add the florets. Two minutes gives crisp-tender. Three gives soft but still holding shape. Beyond three minutes: olive color, sulfur smell, mushy texture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop broccoli from going mushy when boiling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two things matter most. First, do not go past 3 minutes. Second, drain immediately the moment it is done. Broccoli keeps cooking from residual heat if it sits in hot water even with the stove off. Run cold tap water over it to stop the cooking fast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I boil frozen broccoli without thawing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drop it straight from the freezer into boiling water. Frozen broccoli is already partially cooked from blanching before freezing, so reduce your cook time to 1 to 2 minutes. Watch the color, not just the timer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I boil broccoli stems vs florets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stems need 1 to 2 minutes more than florets because they are denser. Add stem pieces to the water first, let them cook for 2 minutes, then add florets and cook for 2 to 3 minutes more. Or slice the stems thin so they cook at the same rate as the florets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to steam or boil broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Steaming retains more water-soluble nutrients like Vitamin C because the broccoli sits above the water rather than in it. But boiling takes 2 to 3 minutes vs. 5 to 6 for steaming. For a weeknight side dish, boiling is faster. The nutrient difference over a short boil is real but not dramatic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does boiling broccoli destroy nutrients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some, yes. Research suggests that boiling for more than 1 minute begins to degrade myrosinase, the enzyme that produces sulforaphane (PubMed 2020, PMID 32328271). Vitamin C leaches into the cooking water. Raw broccoli has 89.2mg per 100g (USDA FDC 170379) and a short boil strips roughly half. What remains still includes fiber, Vitamin K, calcium, iron, and beta-carotene.',
      },
    },
  ],
}

// ── Schema: BreadcrumbList ─────────────────────────────────────────────────────
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
      name: 'How to Cook Broccoli',
      item: 'https://broccolipedia.com/how-to-cook',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Boil Broccoli',
      item: 'https://broccolipedia.com/how-to-cook/boil',
    },
  ],
}

// ── Schema: Author Person ──────────────────────────────────────────────────────
const authorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://broccolipedia.com/about#elena-ignacio',
  name: 'Elena Ignacio',
  url: 'https://broccolipedia.com/about',
  sameAs: [
    'https://www.tiktok.com/@elenasainda',
    'https://www.youtube.com/@adelevlogs',
    'https://www.facebook.com/elena.ignacio',
  ],
  description:
    'Filipino food writer and mom of two based in Singapore. Elena writes about broccoli from a cook-for-your-family perspective, not a food-blogger one.',
  knowsAbout: [
    { '@type': 'Thing', name: 'Broccoli cooking methods', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
    { '@type': 'Thing', name: 'Nutrition', sameAs: 'https://www.wikidata.org/wiki/Q2138622' },
    { '@type': 'Thing', name: 'Cooking', sameAs: 'https://www.wikidata.org/wiki/Q38695' },
  ],
}

export default function BoilBroccoliPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="text-sm text-green-700 mb-4">
          <ol className="flex gap-2 flex-wrap">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/how-to-cook" className="hover:underline">How to Cook Broccoli</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Boil</li>
          </ol>
        </nav>

        {/* ── Hero image ── */}
        <figure className="mb-6 rounded-xl overflow-hidden">
          <img
            src="/images/boil-broccoli/boil-broccoli-broccoli-method-in-action.webp"
            alt="Bright green broccoli florets being lifted from a pot of boiling water with a slotted spoon"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            loading="eager"
          />
          <figcaption className="text-xs text-green-700 mt-2 pl-1">
            That color is the goal. Olive green means you missed it.
          </figcaption>
        </figure>

        {/* ── H1 ── */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          How to Boil Broccoli Without Overcooking
        </h1>

        {/* ── Author byline ── */}
        <p className="text-sm text-green-700 mb-6">
          By{' '}
          <a href="/about" className="font-medium hover:underline">
            Elena Ignacio
          </a>
        </p>

        {/* ── Opening paragraph (personal moment first) ── */}
        <p className="text-deepForest leading-relaxed mb-6">
          Adam can smell overcooked broccoli before I even put the bowl down. He has done this
          since he was six. I used to think he was being difficult. Then I paid attention and
          realized he was right. Push broccoli past three minutes in boiling water and it
          releases sulfurous compounds that hit your nose before your fork. He was not being picky.
          He was noticing something real. That&apos;s when I started timing mine to the second: 2
          minutes 30 seconds, drain, cold tap water. Not because I am obsessive, but because
          that&apos;s what works.
        </p>

        {/* ── QuickAnswer block ── */}
        <QuickAnswer>
          Boil broccoli florets for 2 to 3 minutes in heavily salted, rolling boiling water. Start
          your timer when the water returns to a boil after adding the broccoli. Drain immediately
          into a colander and run under cold tap water for 10 seconds. Bright green means done.
          Olive or gray means overcooked.
        </QuickAnswer>

        {/* ── Key Takeaways ── */}
        <div className="key-takeaways bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Boil time: 2 to 3 minutes, timed from when water returns to boil</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Salt generously: 1 tablespoon kosher salt per large pot</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Stems need 1 to 2 minutes more than florets; add them first</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Bright green color is your doneness cue, not just the timer</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>No ice bath? Run cold tap water over the colander for 10 seconds</span></li>
          </ul>
        </div>

        {/* ── Step-by-step instructions ── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How to Boil Broccoli: Step by Step
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 1: Prep the florets</h3>
              <p className="text-deepForest leading-relaxed">
                Cut broccoli into florets that are roughly the same size. One floret twice as big
                as the others will still be raw when the small ones are done. If you want the stems
                too, peel the fibrous outer layer with a vegetable peeler and cut into coins.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 2: Optional but worth it: chop and wait 40 minutes</h3>
              <p className="text-deepForest leading-relaxed">
                When you cut broccoli, an enzyme called myrosinase activates and converts
                glucoraphanin into sulforaphane. Heat above 70&deg;C kills myrosinase instantly. If
                you chop and cook immediately, that conversion never finishes. If you chop and then
                leave it on the board for 40 minutes, the conversion completes before the heat
                arrives. Research suggests that boiling for more than 1 minute begins to degrade
                myrosinase entirely (Moreno et al., 2020). This is the tip almost no recipe covers,
                and it costs nothing except planning ahead.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 3: Boil the water</h3>
              <p className="text-deepForest leading-relaxed">
                Fill a large pot with water. Bring it to a full, rolling boil. Add 1 tablespoon
                kosher salt. The water should taste slightly salty, like a mild broth.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 4: Add florets and time from return-to-boil</h3>
              <p className="text-deepForest leading-relaxed">
                Drop all the florets in at once. The water temperature will drop for about 30
                seconds. Start your timer only when the water comes back to a full boil. This is
                the step that most recipes get wrong: they say &quot;2 to 3 minutes&quot; but
                don&apos;t say from when. If you time from the moment cold broccoli hits the water,
                you will undercook it every single time.
              </p>
              <p className="text-deepForest leading-relaxed mt-2">
                Adding stems? Drop those in 2 minutes before the florets.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 5: Check doneness</h3>
              <p className="text-deepForest leading-relaxed">
                At 2 minutes, pull out one floret with a slotted spoon and bite it. It should give
                without being crunchy, but hold its shape without crumbling. Bright green
                throughout. Alfi always wants his softer, so I go to 3 minutes for his bowl. But no
                further.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 6: Drain immediately</h3>
              <p className="text-deepForest leading-relaxed">
                Pour into a colander the moment it&apos;s done. Do not let it sit in hot water
                another 30 seconds. The residual heat keeps cooking it. If you have ice water, move
                the broccoli in to stop cooking instantly. Most days I don&apos;t have an ice bath
                ready, so I run cold tap water from the faucet over the colander for 10 seconds. It
                works well enough for a weeknight.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">Step 7: Season and serve</h3>
              <p className="text-deepForest leading-relaxed">
                Olive oil, a squeeze of lemon, flaky salt. Or parmesan and red pepper flakes. Or
                toasted almond slivers. Serve while it is still steaming.
              </p>
              <p className="text-deepForest leading-relaxed mt-2">
                One thing I always do: I keep the boiling water. It picks up water-soluble vitamins,
                potassium, and antioxidants from the florets. A light, grassy flavor. Good base for
                soup or rice.
              </p>
            </div>
          </div>
        </section>

        {/* ── Finish / plated image ── */}
        <figure className="mb-8 rounded-xl overflow-hidden">
          <img
            src="/images/boil-broccoli/boil-broccoli-finished-result-plate.webp"
            alt="Boiled broccoli in a cream bowl with olive oil drizzle and a lemon wedge"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <figcaption className="text-xs text-green-700 mt-2 pl-1">
            Lemon and olive oil. That&apos;s all it needs.
          </figcaption>
        </figure>

        {/* ── Why broccoli goes gray ── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Why Broccoli Goes Gray When You Overcook It
          </h2>
          <p className="text-deepForest leading-relaxed">
            When broccoli cooks too long, the cell walls break down and release water. That gives
            you the mushy texture. The chlorophyll that makes broccoli bright green then reacts with
            released sulfurous compounds, turning the color olive or gray. This is also why it smells.
            It&apos;s a real chemical reaction, not just &quot;it got soft.&quot; Adam was right.
            Overcooked broccoli smells different because the sulfur is actually escaping.
          </p>
          <p className="text-deepForest leading-relaxed mt-3">
            The short boil keeps the cell walls largely intact. Cold water stops the carry-over heat.
          </p>
        </section>

        {/* ── Is it better to steam or boil ── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Is It Better to Steam or Boil Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed">
            Steaming retains more nutrients. Because the broccoli sits above the water rather than
            in it, the water-soluble vitamins (Vitamin C, some B vitamins) don&apos;t leach out
            the same way. If maximum nutrition is your goal, steam.
          </p>
          <p className="text-deepForest leading-relaxed mt-3">
            That said, boiling takes 2 to 3 minutes vs. 5 to 6 for steaming. For a weeknight side
            dish, I choose boiling because it&apos;s faster. The nutrient difference over a short
            boil is real but not dramatic.
          </p>
          <p className="text-deepForest leading-relaxed mt-3">
            If you are making broccoli soup, boil directly in the broth so nothing leaches away.
          </p>
        </section>

        {/* ── Does boiling destroy nutrients ── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Does Boiling Broccoli Destroy Nutrients?
          </h2>
          <p className="text-deepForest leading-relaxed">
            Some, yes. Research suggests that boiling for more than 1 minute begins to degrade
            myrosinase, the enzyme responsible for sulforaphane production (Moreno et al., 2020,
            PMID 32328271). Vitamin C is water-soluble, so it leaches into the cooking water. Raw
            broccoli contains 89.2mg Vitamin C per 100g (USDA FDC 170379). A short boil strips
            roughly half of that.
          </p>
          <p className="text-deepForest leading-relaxed mt-3">
            What remains still includes fiber, Vitamin K at 131mcg per serving (USDA FDC 170379),
            calcium, iron, and beta-carotene. A 2 to 3 minute boil does not turn broccoli into
            empty calories. It&apos;s still worth eating.
          </p>
          <p className="text-deepForest leading-relaxed mt-3">
            The 40-minute chop-and-wait hack is how I preserve some sulforaphane even when boiling:
            the myrosinase finishes its conversion work before heat destroys it.
          </p>
        </section>

        {/* ── FAQ section ── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-deepForest mb-1">How long should I boil broccoli?</h3>
              <p className="text-deepForest leading-relaxed">
                2 to 3 minutes in rolling, salted boiling water, timed from when the water returns
                to a boil after you add the florets. Two minutes gives crisp-tender. Three gives
                soft but still holding shape. Beyond three: olive color, sulfur smell, mushy
                texture.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">
                How do I stop broccoli from going mushy when boiling?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Two things. Don&apos;t go past 3 minutes. And drain immediately the moment
                it&apos;s done. Broccoli keeps cooking from residual heat if it sits in hot water
                even with the stove off. Run cold tap water over it to stop the cooking fast.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">
                Can I boil frozen broccoli without thawing?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Yes. Drop it straight from the freezer into boiling water. Frozen broccoli is
                already partially cooked from blanching before freezing, so reduce your cook time to
                1 to 2 minutes. Watch the color, not just the timer.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-deepForest mb-1">
                How long do I boil broccoli stems vs florets?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Stems need 1 to 2 minutes more than florets because they&apos;re denser. Add stem
                pieces to the water first, let them cook for 2 minutes, then add florets and cook
                for 2 to 3 minutes more. Or slice the stems thin so they cook at the same rate.
              </p>
            </div>
          </div>
        </section>

        {/* ── References ── */}
        <section className="mb-8 pt-4 border-t border-green-100">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">References</h2>
          <ol className="space-y-2 text-sm text-deepForest list-decimal list-inside">
            <li>
              USDA FoodData Central, Broccoli, raw (FDC ID 170379).{' '}
              <a
                href="https://nutritiondatahub.com/food/broccoli-raw-170379"
                className="text-green-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                nutritiondatahub.com/food/broccoli-raw-170379
              </a>
            </li>
            <li>
              Moreno, D.A., et al. (2020). Effects of cooking on glucosinolate and sulforaphane
              content in broccoli.{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32328271"
                className="text-green-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                PMID 32328271
              </a>
            </li>
          </ol>
        </section>

      </article>
    </>
  )
}
