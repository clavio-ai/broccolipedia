import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How to Cook Frozen Broccoli (4 Methods That Actually Work) | BroccoliPedia',
  description:
    'Roast, air fry, microwave, or steam frozen broccoli without it turning soggy. The two-step oven method at 425°F is the key:dry bake first, oil second. Tested by Elena Ignacio.',
  keywords: [
    'how to cook frozen broccoli',
    'frozen broccoli in oven',
    'frozen broccoli air fryer',
    'frozen broccoli microwave',
    'frozen broccoli recipe',
    'how long to cook frozen broccoli',
    'frozen broccoli not soggy',
  ],
  openGraph: {
    title: 'How to Cook Frozen Broccoli (4 Methods That Actually Work)',
    description:
      'The two-step oven method, air fryer, microwave, and stovetop steam:tested by Elena Ignacio. Dry bake first, oil second. No thawing needed.',
    url: 'https://broccolipedia.com/how-to-cook/frozen',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/cook-frozen-broccoli/cook-frozen-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Frozen broccoli florets spread on a parchment-lined baking sheet ready for the two-step oven roast method',
      },
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://broccolipedia.com/how-to-cook/frozen',
  },
}

// ── Schema ────────────────────────────────────────────────────────────────────

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
      name: 'Frozen Broccoli',
      item: 'https://broccolipedia.com/how-to-cook/frozen',
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Cook Frozen Broccoli (4 Methods)',
  description:
    'The two-step oven roast method, air fryer, microwave, and stovetop steam for frozen broccoli:tested by Elena Ignacio for non-soggy results every time.',
  totalTime: 'PT25M',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/cook-frozen-broccoli/cook-frozen-broccoli-broccoli-method-in-action.webp',
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
  datePublished: '2026-06-16',
  tool: [
    { '@type': 'HowToTool', name: 'Baking sheet' },
    { '@type': 'HowToTool', name: 'Parchment paper' },
    { '@type': 'HowToTool', name: 'Air fryer (optional)' },
    { '@type': 'HowToTool', name: 'Steamer basket (optional)' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Frozen broccoli florets' },
    { '@type': 'HowToSupply', name: 'Olive oil or avocado oil' },
    { '@type': 'HowToSupply', name: 'Garlic powder' },
    { '@type': 'HowToSupply', name: 'Salt and pepper' },
  ],
  step: [
    {
      '@type': 'HowToSection',
      name: 'Method 1: Oven Roast (Best for Texture)',
      itemListElement: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Preheat oven',
          text: 'Preheat oven to 425°F (220°C). Let it reach full temperature before anything goes in.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Prepare the pan',
          text: 'Line a large baking sheet with parchment paper. Parchment handles moisture better than foil.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Spread frozen florets',
          text: 'Spread frozen florets in a single layer. No stacking, no crowding. Break apart any frozen clumps.',
          image: 'https://broccolipedia.com/images/cook-frozen-broccoli/cook-frozen-broccoli-broccoli-method-in-action.webp',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Dry bake without oil',
          text: 'Roast without oil for 12 to 15 minutes until the florets look dry and the ice crystals have steamed off.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Add oil and season',
          text: 'Pull out the pan. Drizzle with 1 to 2 tablespoons olive oil. Add garlic powder, salt, and pepper. Toss to coat.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Finish roasting',
          text: 'Return to oven for 5 to 10 minutes until edges turn golden brown.',
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: 'Finish and serve',
          text: 'Top with lemon zest and parmesan. Serve immediately.',
          image: 'https://broccolipedia.com/images/cook-frozen-broccoli/cook-frozen-broccoli-finished-result-plate.webp',
        },
      ],
    },
    {
      '@type': 'HowToSection',
      name: 'Method 2: Air Fryer',
      itemListElement: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Set air fryer temperature',
          text: 'Set air fryer to 400°F. Add frozen florets straight from the bag. No oil yet.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'First air fry cycle',
          text: 'Air fry 5 to 6 minutes. Shake the basket.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Add oil and finish',
          text: 'Spray or drizzle lightly with oil. Add salt and garlic powder. Air fry another 5 to 6 minutes until tips crisp up.',
        },
      ],
    },
    {
      '@type': 'HowToSection',
      name: 'Method 3: Microwave',
      itemListElement: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Prepare for microwave',
          text: 'Put frozen broccoli in a microwave-safe bowl. Add 2 to 3 tablespoons water. Cover with a plate or vented plastic wrap.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Microwave and check',
          text: 'Microwave on high for 3 minutes. Stir. If still cold in the centre, microwave in 1-minute intervals until heated through.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Season and serve',
          text: 'Drain. Season with salt, butter, and a squeeze of lemon. Total time: 4 to 5 minutes.',
        },
      ],
    },
    {
      '@type': 'HowToSection',
      name: 'Method 4: Stovetop Steam',
      itemListElement: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Bring water to boil',
          text: 'Bring 1 inch of water to a boil in a pot. Place a steamer basket over the water.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Steam broccoli',
          text: 'Add frozen broccoli to the basket. Cover and steam 5 to 7 minutes until fork-tender but still holding shape.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Season and serve',
          text: 'Remove immediately. Season with salt, butter, or garlic. Serve hot.',
        },
      ],
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q414365',
    },
    {
      '@type': 'Thing',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q188564',
    },
    {
      '@type': 'Thing',
      name: 'Myrosinase',
      sameAs: 'https://www.wikidata.org/wiki/Q415582',
    },
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q193598',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q184004',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I cook frozen broccoli in the microwave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Add 2 to 3 tablespoons of water to a microwave-safe bowl with the frozen broccoli, cover, and microwave on high for 3 to 5 minutes. The result is soft and warm rather than crispy. Good for quick weeknight meals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you air fry broccoli that is frozen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Set your air fryer to 400°F. Air fry for 5 to 6 minutes without oil, shake the basket, then add a light spray of oil and cook another 5 to 6 minutes. Total: 10 to 12 minutes. Add oil after the first cycle, not before.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you keep frozen broccoli from getting soggy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roast it without oil first at 425°F for 12 to 15 minutes. This drives off the ice crystals. Once the broccoli looks dry, add the oil and roast another 5 to 10 minutes. Adding oil before this step traps the moisture and causes sogginess.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is frozen broccoli already blanched?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All commercially sold frozen broccoli is blanched before freezing. This partially cooks the broccoli and deactivates enzymes that would degrade it in the freezer. It cooks faster than fresh broccoli for this reason.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need to thaw frozen broccoli before cooking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Cook frozen broccoli directly from the freezer. Thawing on the counter creates excess water that makes the broccoli waterlogged before it ever hits heat. All four methods:oven, air fryer, microwave, and stovetop:work from frozen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is frozen broccoli as nutritious as fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and often more so. Frozen broccoli is blanched and flash frozen at peak ripeness, locking in nutrients. Fresh supermarket broccoli loses nutrients during transit and storage. Per 100g, raw broccoli has 89.2mg of vitamin C and 102mcg of vitamin K (USDA FDC 170379).',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Cook Frozen Broccoli (4 Methods That Actually Work)',
  description:
    'The two-step oven roast method, air fryer, microwave, and stovetop steam for frozen broccoli:tested by Elena Ignacio.',
  image: 'https://broccolipedia.com/images/cook-frozen-broccoli/cook-frozen-broccoli-broccoli-method-in-action.webp',
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
      url: 'https://broccolipedia.com/images/broccolipedia-logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/how-to-cook/frozen',
  },
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function FrozenBroccoliPage() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-green-700">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/how-to-cook" className="hover:underline">How to Cook</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-green-900 font-medium">Frozen Broccoli</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          How to Cook Frozen Broccoli (4 Methods That Actually Work)
        </h1>

        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-green-50">
          <Image
            src="/images/cook-frozen-broccoli/cook-frozen-broccoli-broccoli-method-in-action.webp"
            alt="Frozen broccoli florets spread on a parchment-lined baking sheet, some still showing ice crystals, ready for the two-step oven roast method"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        {/* Opening paragraph */}
        <p className="text-deepForest leading-relaxed mb-6 text-lg">
          Adam refused broccoli for three months straight. Every shape, every sauce, every bribe. Then one Tuesday night in Bishan I grabbed a bag of frozen florets from Cold Storage because the fresh stuff was already gone. I spread them straight onto a parchment-lined pan, went to sort out Alfi, and forgot to come back for twenty minutes. Forgot the oil too. When I finally got to the oven, the kitchen smelled incredible. Adam ate the whole pan. I stood there trying to figure out what I had done differently. Turns out I had done exactly the right thing without knowing it: dry heat first, oil second.
        </p>

        <QuickAnswer>
          Spread frozen broccoli on a parchment-lined baking sheet in a single layer. Roast at 425&deg;F for 12 to 15 minutes without any oil. This drives off the ice crystals. Then drizzle with olive oil and seasonings and roast another 5 to 10 minutes until edges brown. No thawing needed.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Oven (best texture): 425&deg;F, dry-bake 12&ndash;15 min first, then oil + 5&ndash;10 min more</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Air fryer (fastest): 400&deg;F for 10&ndash;12 minutes, shake halfway, oil after minute 6</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Microwave (quickest): 3&ndash;5 minutes covered with 2&ndash;3 tablespoons water</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Stovetop steam: 5&ndash;7 minutes over 1 inch of boiling water in a covered pan</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Never thaw before cooking. The ice crystals are the mechanism, not the problem.</span></li>
          </ul>
        </div>

        {/* Method 1: Oven Roast */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Method 1: Oven Roast (Best for Texture)</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            This is the method Adam converted on. About 25 minutes total and produces florets with genuinely caramelised edges.
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-deepForest leading-relaxed">
            <li>Preheat oven to 425&deg;F (220&deg;C). Let it come to full temperature first.</li>
            <li>Line a large baking sheet with parchment paper. Parchment handles moisture better than foil.</li>
            <li>Spread frozen florets in a single layer. No stacking, no crowding. If they are frozen into one solid lump, break them apart.</li>
            <li>Roast without oil for 12 to 15 minutes until the florets look dry.</li>
            <li>Pull out the pan. Drizzle with 1 to 2 tablespoons olive oil. Add garlic powder, salt, and pepper. Toss.</li>
            <li>Return to oven for 5 to 10 minutes until edges go golden.</li>
            <li>Finish with lemon zest and parmesan. Serve hot.</li>
          </ol>
          <p className="text-deepForest leading-relaxed mt-4 text-sm bg-amber-50 border border-amber-200 rounded-lg p-3">
            <strong>Why this works:</strong> Oil before roasting traps the melting ice water and steams the broccoli soft. Oil after lets it roast. That single step is the whole difference.
          </p>
        </section>

        {/* Method 2: Air Fryer */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Method 2: Air Fryer</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            My weeknight go-to when I have ten minutes.
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-deepForest leading-relaxed">
            <li>Set air fryer to 400&deg;F. Add frozen florets straight from the bag. No oil yet.</li>
            <li>Air fry 5 to 6 minutes. Shake the basket.</li>
            <li>Spray or drizzle lightly with oil. Add salt and garlic powder.</li>
            <li>Air fry another 5 to 6 minutes until tips crisp up.</li>
          </ol>
          <p className="text-deepForest leading-relaxed mt-4">
            Watch the last two minutes. Air fryers run hot and broccoli goes from perfect to charred faster than you expect.
          </p>
        </section>

        {/* Method 3: Microwave */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Method 3: Microwave</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            When the boys are already hungry and I need something on the table in five minutes.
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-deepForest leading-relaxed">
            <li>Put frozen broccoli in a microwave-safe bowl. Add 2 to 3 tablespoons water.</li>
            <li>Cover with a plate or vented plastic wrap.</li>
            <li>Microwave on high for 3 minutes. Stir. If still cold, microwave in 1-minute intervals.</li>
            <li>Drain. Season with salt, butter, a squeeze of lemon.</li>
          </ol>
          <p className="text-deepForest leading-relaxed mt-4">
            No crispy edges, but bright, warm, and fast. Good enough for Alfi on a school night.
          </p>
        </section>

        {/* Method 4: Stovetop */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Method 4: Stovetop Steam</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Best for very young kids who need soft texture, or when the oven is already in use.
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-3 text-deepForest leading-relaxed">
            <li>Bring 1 inch of water to a boil in a pot.</li>
            <li>Set a steamer basket over the water. Add frozen broccoli. Cover.</li>
            <li>Steam 5 to 7 minutes until fork-tender but still holding shape.</li>
          </ol>
          <p className="text-deepForest leading-relaxed mt-4">
            No steamer basket? Add broccoli to a skillet with a quarter cup water. Cover over medium heat for 4 to 5 minutes. Once water evaporates, let it sit another minute for colour.
          </p>
        </section>

        {/* Result image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-green-50">
          <Image
            src="/images/cook-frozen-broccoli/cook-frozen-broccoli-finished-result-plate.webp"
            alt="Roasted frozen broccoli with caramelized edges on parchment paper, finished with parmesan and a lemon wedge"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Thaw question */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Do You Need to Thaw Frozen Broccoli Before Cooking?</h2>
          <p className="text-deepForest leading-relaxed">
            No. Thawing on the counter creates puddles of water that make the broccoli waterlogged before it ever hits any heat. Go straight from the freezer. The method already accounts for it being cold.
          </p>
        </section>

        {/* Nutrition section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Is Frozen Broccoli as Nutritious as Fresh?</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Yes, and sometimes more so. Frozen broccoli is blanched and flash frozen at peak ripeness, which locks in most of the nutrients. Fresh supermarket broccoli is often harvested early and loses nutrients during days of transit and storage. Per 100g, raw broccoli contains 89.2mg of vitamin C (roughly 99% of the daily value) and 102 mcg of vitamin K&#40;USDA FDC 170379&#41;. Dietary fibre is 2.6g per 100g, and broccoli provides 1,400 mcg of lutein and zeaxanthin per 100g &#40;USDA FDC 170379&#41;.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            <strong>Method matters for vitamin C.</strong> Boiling strips roughly half of it. Steaming, microwaving, and roasting preserve significantly more. So if vitamin C is your concern, skip the boiling pot.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-deepForest leading-relaxed">
            <strong>On sulforaphane:</strong> Blanching destroys myrosinase, the enzyme that converts glucoraphanin into sulforaphane. Frozen broccoli still contains glucoraphanin, but the conversion pathway is blocked. Research suggests that adding a pinch of mustard powder to cooked broccoli can partially restore sulforaphane production, as mustard contains its own myrosinase &#40;Biovie.fr; MD Anderson Cancer Center&#41;. This is an optional step and the science is still developing.
          </div>
        </section>

        {/* Seasonings */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Are the Best Seasonings for Frozen Broccoli?</h2>
          <p className="text-deepForest leading-relaxed mb-4">
            The broccoli itself is mild, which means it takes on other flavours well. Here is what I actually use:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-deepForest mb-1">For the oven roast</p>
              <p className="text-deepForest text-sm leading-relaxed">Garlic powder, salt, pepper, and olive oil as the base. Finish with lemon zest and grated parmesan while still hot. If you want heat, add red pepper flakes before the second roasting stage.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-deepForest mb-1">For the air fryer</p>
              <p className="text-deepForest text-sm leading-relaxed">Same base, but try sesame oil instead of olive oil and a small drizzle of soy sauce after cooking. Adam discovered this combination and now requests it specifically.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-deepForest mb-1">For stovetop</p>
              <p className="text-deepForest text-sm leading-relaxed">A tablespoon of butter in the last minute, a crushed garlic clove, and lemon juice at the end. The garlic butter version on cooking shorts is worth the thirty extra seconds.</p>
            </div>
          </div>
          <p className="text-deepForest leading-relaxed mt-4 text-sm">
            Avoid loading seasonings on before the dry-bake stage. They steam in the moisture and coat unevenly. Season after the ice crystals are gone.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">FAQs</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Can I cook frozen broccoli in the microwave?',
                a: 'Yes. 2 to 3 tablespoons of water in a covered microwave-safe bowl, 3 to 5 minutes on high. Soft and fast.',
              },
              {
                q: 'Can you air fry broccoli that is frozen?',
                a: 'Yes. 400°F for 10 to 12 minutes total with oil added after the first 5 to 6 minutes. Shake the basket at the halfway mark.',
              },
              {
                q: 'How do you keep frozen broccoli from getting soggy?',
                a: 'Roast without oil first. Once the ice crystals have steamed off and the broccoli looks dry, then add your oil. That single step is the whole fix.',
              },
              {
                q: 'Is frozen broccoli already blanched?',
                a: 'Yes. All commercially sold frozen broccoli is blanched before freezing. This partially cooks it and deactivates enzymes that would cause freezer degradation. It cooks faster than fresh for this reason.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-green-100 rounded-lg p-4">
                <p className="font-semibold text-deepForest mb-2">{q}</p>
                <p className="text-deepForest text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">More Broccoli Cooking Methods</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/how-to-cook/steamed" className="text-green-700 hover:text-green-900 hover:underline">
                How to Steam Broccoli (Fresh and Frozen)
              </Link>
            </li>
            <li>
              <Link href="/nutrition" className="text-green-700 hover:text-green-900 hover:underline">
                Broccoli Nutrition Facts
              </Link>
            </li>
            <li>
              <Link href="/how-to-cook" className="text-green-700 hover:text-green-900 hover:underline">
                All Broccoli Cooking Methods
              </Link>
            </li>
          </ul>
        </section>

        {/* Sources */}
        <section className="mb-4 text-xs text-gray-500 leading-relaxed border-t border-green-100 pt-6">
          <p className="font-semibold mb-2">Sources</p>
          <ul className="space-y-1">
            <li>USDA FoodData Central ID 170379 &mdash; Broccoli, raw. Nutritional values: vitamin C (89.2mg/100g), vitamin K (102mcg/100g), fibre (2.6g/100g), lutein and zeaxanthin (1,400mcg/100g).</li>
            <li>MD Anderson Cancer Center &mdash; Cruciferous vegetables and sulforaphane overview.</li>
            <li>Biovie.fr &mdash; Sulforaphane formation pathway and myrosinase denaturation in blanched broccoli.</li>
            <li>PubMed PMID 32328271 &mdash; Microwave heating effects on sulforaphane yield (applies to fresh, not pre-blanched, broccoli).</li>
          </ul>
          <p className="mt-2 italic">Nothing on this page constitutes medical advice.</p>
        </section>

      </article>
    </>
  )
}
