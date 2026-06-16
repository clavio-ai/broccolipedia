import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Sauté Broccoli on the Stove | BroccoliPedia',
  description: 'Sauté broccoli in 6 to 8 minutes using the sear-then-steam method. Cast iron or stainless steel, medium-high heat, 2 tablespoons of water. Elena Ignacio explains why it works.',
  keywords: ['how to saute broccoli', 'sauteed broccoli', 'how to saute broccoli on stove', 'sauteed broccoli with garlic', 'broccoli stovetop'],
  openGraph: {
    title: 'How to Sauté Broccoli on the Stove',
    description: 'The sear-then-steam method. 6 to 8 minutes, cast iron or stainless, medium-high heat. Elena explains exactly what to do and why.',
    url: 'https://broccolipedia.com/how-to-cook/saute',
    type: 'article',
    images: [
      {
        url: '/images/saute-broccoli/saute-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Sautéed broccoli in a cast iron skillet with char spots and steam rising',
      },
    ],
  },
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
      name: 'How to Cook Broccoli',
      item: 'https://broccolipedia.com/how-to-cook',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sauté',
      item: 'https://broccolipedia.com/how-to-cook/saute',
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Sauté Broccoli on the Stove',
  description: 'Sauté broccoli using the sear-then-steam method. Ready in 6 to 8 minutes with vibrant green colour and light char.',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/saute-broccoli/saute-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 800,
  },
  totalTime: 'PT15M',
  prepTime: 'PT7M',
  performTime: 'PT8M',
  yield: '4 servings',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Broccoli, 1 head (about 4 cups florets)' },
    { '@type': 'HowToSupply', name: 'Olive oil, 2 tablespoons' },
    { '@type': 'HowToSupply', name: 'Water, 2 tablespoons' },
    { '@type': 'HowToSupply', name: 'Garlic powder, ½ teaspoon' },
    { '@type': 'HowToSupply', name: 'Salt, ½ teaspoon' },
    { '@type': 'HowToSupply', name: 'Black pepper' },
    { '@type': 'HowToSupply', name: 'Lemon, half' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Cast iron or stainless steel skillet with lid' },
    { '@type': 'HowToTool', name: 'Tongs or wooden spoon' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Prep florets and stalk',
      text: 'Cut broccoli into even florets. Peel the stalk and slice into ¼-inch coins. Pat everything dry with a paper towel.',
      image: '/images/saute-broccoli/saute-broccoli-finished-result-plate.webp',
    },
    {
      '@type': 'HowToStep',
      name: 'Heat oil until shimmering',
      text: 'Place skillet over medium-high heat. Add 2 tablespoons olive oil. Wait until the oil shimmers when you tilt the pan, about 90 seconds. Do not add broccoli to cold oil.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add stalk, then florets cut side down',
      text: 'Add stalk coins for 30 seconds. Then add florets cut side down in a single layer. Do not crowd the pan.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sear undisturbed for 2 minutes',
      text: 'Do not stir or shake the pan. Let the florets sear until the cut side shows golden or dark green-brown spots and lifts easily from the pan.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add water and cover immediately',
      text: 'Add 2 tablespoons of water to the pan and cover with a lid at once. Steam for 2 minutes without lifting the lid.',
      image: '/images/saute-broccoli/saute-broccoli-broccoli-method-in-action.webp',
    },
    {
      '@type': 'HowToStep',
      name: 'Uncover, season, and serve',
      text: 'Remove lid. Let any remaining water evaporate, 30 to 60 seconds. Add garlic powder, salt, and pepper. Toss once. Squeeze lemon over the top and serve immediately.',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q413704',
    },
    {
      '@type': 'Thing',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q413703',
    },
    {
      '@type': 'Thing',
      name: 'Myrosinase',
      sameAs: 'https://www.wikidata.org/wiki/Q415439',
    },
    {
      '@type': 'Thing',
      name: 'Maillard reaction',
      sameAs: 'https://www.wikidata.org/wiki/Q188296',
    },
    {
      '@type': 'Thing',
      name: 'Olive oil',
      sameAs: 'https://www.wikidata.org/wiki/Q35865',
    },
    {
      '@type': 'Thing',
      name: 'Garlic',
      sameAs: 'https://www.wikidata.org/wiki/Q26748',
    },
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47496',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q193598',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q193597',
    },
    {
      '@type': 'Thing',
      name: 'Folate',
      sameAs: 'https://www.wikidata.org/wiki/Q26841',
    },
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'wikidataEntity',
      value: 'Q47496',
      propertyID: 'https://www.wikidata.org/wiki/Q47496',
    },
    {
      '@type': 'PropertyValue',
      name: 'cookingMethod',
      value: 'Sauteing',
    },
    {
      '@type': 'PropertyValue',
      name: 'usdaFdcId',
      value: '170379',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
  },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I boil broccoli before sautéing it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Boiling waterlogged florets before they hit the pan means you cannot get any sear at all. The steam step in the sear-then-steam method handles tenderising without that problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do you add water when sautéing broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water creates steam, which wraps around the irregular shape of the florets from all angles. The pan gets the flat cut surface. Steam gets everything else. Without it, you get browned bottoms and raw tops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use garlic powder or fresh garlic for sautéed broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Garlic powder can go in at any point without burning. Fresh garlic needs the last 60 to 90 seconds of cooking only, otherwise it burns on a hot pan and turns bitter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sauté frozen broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but expect softer results. Frozen florets release a lot of water as they thaw, which prevents browning. Thaw and pat dry first. Fresh broccoli gives better browning for this technique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does sautéing broccoli destroy its nutrients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sautéing retains more nutrients than boiling. When you boil broccoli, water-soluble vitamins including vitamin C and folate leach into the cooking water and get discarded. Sautéing keeps broccoli dry so those nutrients stay in the floret. Raw broccoli contains approximately 89.2mg of vitamin C per 100 grams (USDA FDC 170379). Short dry-heat cooking like sautéing preserves more of this than boiling does.',
      },
    },
  ],
}

export default function SauteBroccoliPage() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-green-700">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><a href="/how-to-cook" className="hover:underline">How to Cook Broccoli</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page">Sauté</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          How to Sauté Broccoli on the Stove
        </h1>

        {/* Author byline */}
        <p className="text-sm text-green-700 mb-6">
          By <a href="/about#elena-ignacio" className="font-semibold hover:underline">Elena Ignacio</a>
        </p>

        {/* Hero image */}
        <div className="mb-6 rounded-xl overflow-hidden">
          <img
            src="/images/saute-broccoli/saute-broccoli-broccoli-method-in-action.webp"
            alt="Sautéed broccoli florets in a cast iron skillet with char spots, a lemon half and garlic cloves beside the pan"
            width={1200}
            height={800}
            className="w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Opening personal paragraph */}
        <p className="text-deepForest leading-relaxed mb-6 text-base">
          Adam went three months refusing broccoli when he was five. Not all vegetables, just broccoli. The texture was the problem: slimy, grey-green, smelling of school canteen. I had been steaming it wrong the whole time and blaming him for it. Then one night I tried sautéing it instead. He finished the whole bowl and asked what I did differently. That question is why this page exists.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          Heat 2 tablespoons of olive oil in a cast iron or stainless steel skillet over medium-high until shimmering. Add florets cut side down in a single layer and sear undisturbed for 2 minutes. Add 2 tablespoons of water and cover immediately. Steam 2 minutes. Uncover, season with garlic powder, salt, and lemon juice. Done in 6 to 8 minutes.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Cook time: 6 to 8 minutes total on medium-high heat</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Use cast iron or stainless steel, not nonstick, for proper browning</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Sear undisturbed for 2 minutes first before adding water</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Add garlic powder with the florets, or fresh garlic in the last 60 seconds only</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span><span>Pull off heat while still vibrant green, not grey-yellow</span></li>
          </ul>
        </div>

        {/* Step-by-step */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Step-by-Step: Sautéing Broccoli on the Stove
          </h2>
          <p className="text-sm text-deepForest mb-4">
            <strong>What you need:</strong> 1 head broccoli (about 4 cups florets and sliced stalk), 2 tablespoons olive oil, 2 tablespoons water, &frac12; teaspoon garlic powder, &frac12; teaspoon salt, black pepper, juice of half a lemon.
          </p>

          <ol className="space-y-6 text-deepForest">
            <li>
              <h3 className="font-bold text-base mb-1">Step 1: Prep the florets and stalk</h3>
              <p className="leading-relaxed">Cut the head into even florets. Keep them similar in size so nothing finishes before the rest. Do not throw the stalk away. Peel the tough outer skin with a knife and slice into &frac14;-inch coins. The stalk is milder and slightly sweet and is rich in prebiotic fibre. It just needs a 30-second head start in the pan.</p>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 2: Dry the broccoli</h3>
              <p className="leading-relaxed">Pat everything dry with a paper towel after washing. Wet broccoli in hot oil spits and steams rather than sears. You need dry surfaces to get browning.</p>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 3: Heat the oil until shimmering</h3>
              <p className="leading-relaxed">Place your skillet over medium-high. Add 2 tablespoons of olive oil. Wait until it shimmers when you tilt the pan, about 90 seconds. Do not add broccoli to cold oil. Cold oil means the florets sit in fat and absorb it rather than browning.</p>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 4: Add stalk first, then florets cut side down</h3>
              <p className="leading-relaxed">Add stalk coins first for 30 seconds, then add florets cut side down in a single layer. If your pan is crowded, cook in two batches. Piled-up florets trap steam and you lose the char.</p>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 5: Sear without touching for 2 minutes</h3>
              <p className="leading-relaxed">Do not stir. Do not shake the pan. Two minutes of contact is where the flavour develops. When florets lift easily and show golden or dark green-brown spots on the flat side, they are ready.</p>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 6: Add water and cover immediately</h3>
              <p className="leading-relaxed">Have the lid in your other hand. Add 2 tablespoons of water to the pan and cover at once. The steam reaches all the curved surfaces the pan cannot touch. Steam for 2 minutes.</p>
              <div className="mt-3 rounded-lg overflow-hidden">
                <img
                  src="/images/saute-broccoli/saute-broccoli-broccoli-method-in-action.webp"
                  alt="Lid half-lifted over a pan of sautéed broccoli showing steam escaping"
                  width={800}
                  height={534}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </li>
            <li>
              <h3 className="font-bold text-base mb-1">Step 7: Uncover, season, and serve</h3>
              <p className="leading-relaxed">Remove the lid. Let residual liquid evaporate, about 30 to 60 seconds. Add garlic powder, salt, and pepper. Toss once. Squeeze lemon over the top and get it on the plate fast. Broccoli keeps cooking from the heat already in it.</p>
            </li>
          </ol>
        </section>

        {/* Why This Method Works */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Why Sautéing Works Better Than Steaming or Boiling
          </h2>
          <p className="leading-relaxed text-deepForest mb-3">
            The sear builds flavour that steaming cannot. When broccoli hits a hot pan and stays still, the Maillard reaction browns the cut surface, the same chemistry behind good toast or a good steak. Low heat steams. High heat browns.
          </p>
          <p className="leading-relaxed text-deepForest mb-3">
            Steam solves the geometry problem. Broccoli florets are uneven. The pan browns the flat side. Steam wraps around the rest. That is why you need both steps.
          </p>
          <p className="leading-relaxed text-deepForest mb-3">
            Colour is your signal. Vibrant, jewel-like green means the chlorophyll has released properly and the cooking is in the right window. Grey or yellow means those pigment structures have broken down. Get it off the heat the moment it looks bright.
          </p>
          <p className="leading-relaxed text-deepForest">
            One thing that surprises most people: broccoli contains a compound called glucoraphanin that converts to sulforaphane when you chop it, activated by the enzyme myrosinase. Research suggests heat above roughly 70&deg;C degrades myrosinase, which reduces sulforaphane yield.{' '}
            <sup className="text-green-700">[1]</sup>{' '}
            A short saute limits this compared to boiling. Pre-chopping and resting the broccoli for a few minutes before cooking preserves more of it.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Common Mistakes
          </h2>
          <div className="space-y-4 text-deepForest">
            <div>
              <p className="font-bold">Adding fresh garlic too early.</p>
              <p className="leading-relaxed">Fresh garlic burns before the broccoli is done. Use garlic powder if you want it in from the start, or add fresh garlic in the last 60 seconds only.</p>
            </div>
            <div>
              <p className="font-bold">Stirring right away.</p>
              <p className="leading-relaxed">Moving the florets before 2 minutes breaks the contact and kills any chance of browning.</p>
            </div>
            <div>
              <p className="font-bold">Crowding the pan.</p>
              <p className="leading-relaxed">Too many florets and steam builds up between them. Cook in batches if needed.</p>
            </div>
            <div>
              <p className="font-bold">Using nonstick.</p>
              <p className="leading-relaxed">Nonstick surfaces prevent sticking, which also prevents browning. Cast iron or stainless steel are the right tools here.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-base text-deepForest mb-1">Should I boil broccoli before sautéing it?</h3>
              <p className="leading-relaxed text-deepForest">No. Boiling waterlogged florets before they hit the pan means you cannot get any sear at all. The steam step in this method handles the tenderising without that problem.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-deepForest mb-1">Why do you add water when sautéing broccoli?</h3>
              <p className="leading-relaxed text-deepForest">Water creates steam, which wraps around the irregular shape of the florets from all angles. The pan gets the flat cut surface. Steam gets everything else. Without it, you get browned bottoms and raw tops.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-deepForest mb-1">Should I use garlic powder or fresh garlic?</h3>
              <p className="leading-relaxed text-deepForest">Garlic powder goes in at any point without burning. Fresh garlic needs the last 60 to 90 seconds of cooking only, otherwise it burns on a hot pan and turns bitter.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-deepForest mb-1">Can I sauté frozen broccoli?</h3>
              <p className="leading-relaxed text-deepForest">You can, but expect softer results. Frozen florets release a lot of water as they thaw, which prevents browning. If you use frozen, thaw and pat dry first. Fresh broccoli is better for this technique.</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-deepForest mb-1">Does sautéing broccoli destroy its nutrients?</h3>
              <p className="leading-relaxed text-deepForest">Sautéing retains more than boiling. When you boil broccoli, water-soluble vitamins including vitamin C and folate leach into the cooking water and get discarded. Sautéing keeps the broccoli dry, so those nutrients stay in the floret. Raw broccoli contains approximately 89.2mg of vitamin C per 100 grams (USDA FDC 170379).{' '}<sup className="text-green-700">[2]</sup>{' '}Short dry-heat cooking like sautéing preserves more of that than boiling does.</p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="border-t border-green-200 pt-6 mb-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">References</h2>
          <ol className="space-y-2 text-sm text-deepForest">
            <li>
              [1] Van Eylen, D., Oey, I., Hendrickx, M., &amp; Van Loey, A. (2008). Kinetics of myrosinase activity and glucosinolate degradation in broccoli (<em>Brassica oleracea</em> L. cv. Italica) at constant and varying temperatures. <em>Food Chemistry, 110</em>(4), 904&ndash;915.
            </li>
            <li>
              [2] USDA FoodData Central, FDC ID 170379. Broccoli, raw, per 100g: Vitamin C 89.2mg (99% DV), Vitamin K 101.6mcg (85% DV), Folate 63mcg.{' '}
              <a href="https://fdc.nal.usda.gov/fdc-app.html#/?fdcId=170379" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">
                fdc.nal.usda.gov
              </a>
            </li>
          </ol>
        </section>

      </article>
    </>
  )
}
