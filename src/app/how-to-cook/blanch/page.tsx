import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Blanch Broccoli | BroccoliPedia',
  description:
    'Bring salted water to a rolling boil, add broccoli florets for 60 to 90 seconds until neon green, then transfer immediately to an ice bath. Blanching time varies by use: 30 seconds for stir fry, 90 seconds for eating now, 3 minutes before freezing.',
  keywords: [
    'how to blanch broccoli',
    'blanching broccoli',
    'broccoli ice bath',
    'blanch broccoli for freezing',
    'blanch broccoli without ice',
    'how long to blanch broccoli',
  ],
  openGraph: {
    title: 'How to Blanch Broccoli',
    description:
      'The blanching time that confuses everyone: 30 sec for stir fry, 90 sec for eating now, 3 min before freezing. Elena explains why.',
    type: 'article',
    images: [
      {
        url: '/images/blanch-broccoli/blanch-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli florets blanching in a pot of boiling salted water, turning vivid neon green',
      },
    ],
  },
}

// ── Schema: HowTo ─────────────────────────────────────────────────────────────

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Blanch Broccoli',
  description:
    'A step-by-step method for blanching broccoli to achieve vivid neon green color and crisp-tender texture. Blanching time varies by use: 30–45 seconds for stir fry, 60–90 seconds for eating now, 2–3 minutes before freezing.',
  totalTime: 'PT10M',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/blanch-broccoli/blanch-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 800,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli florets' },
    { '@type': 'HowToSupply', name: 'Water' },
    { '@type': 'HowToSupply', name: 'Salt (generous amount)' },
    { '@type': 'HowToSupply', name: 'Ice' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Large pot' },
    { '@type': 'HowToTool', name: 'Large bowl' },
    { '@type': 'HowToTool', name: 'Slotted spoon or spider strainer' },
    { '@type': 'HowToTool', name: 'Kitchen towel' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Prepare the ice bath',
      text: 'Fill a large bowl with ice and cold water and set it next to the stove. You want it ready before the broccoli hits the water.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Bring a large pot of salted water to a rolling boil',
      text: 'Add enough salt that the water tastes faintly like the sea. Under-salted blanching water produces flat-tasting broccoli.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Cut broccoli into even florets',
      text: 'Uniform size means even cooking. Split any thick stem pieces lengthwise so they match the floret tops.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Add broccoli in a single batch without overcrowding',
      text: 'Work in batches if needed. Too much at once drops the water temperature, producing soft and dull florets instead of vivid crisp ones.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Blanch 60 to 90 seconds',
      text: 'Watch the color. The moment it shifts to vivid neon green, that is your signal. For stir fry prep, pull at 30–45 seconds. For freezing, go 2–3 minutes.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Transfer immediately to the ice bath',
      text: 'Use a slotted spoon and move fast. Every extra second in hot water continues cooking the broccoli.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Cool 2 minutes, then drain and dry',
      text: 'Lift the broccoli out, shake off the water, and spread it on a kitchen towel. Pat dry before storing or serving.',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Blanching',
      sameAs: 'https://en.wikipedia.org/wiki/Blanching_(cooking)',
    },
    {
      '@type': 'Thing',
      name: 'Chlorophyll',
      sameAs: 'https://en.wikipedia.org/wiki/Chlorophyll',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://en.wikipedia.org/wiki/Sulforaphane',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://en.wikipedia.org/wiki/Vitamin_C',
    },
    {
      '@type': 'Thing',
      name: 'Pheophytin',
      sameAs: 'https://en.wikipedia.org/wiki/Pheophytin',
    },
  ],
}

// ── Schema: FAQPage ───────────────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you salt the water when blanching broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, generously. Think pasta-water level. Under-salted blanching water produces flat-tasting broccoli even after you finish it with lemon or garlic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do you put broccoli in ice water after blanching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ice bath stops cooking instantly. Without it, residual heat in the broccoli keeps working after you drain it. Color fades within minutes and the texture softens. The ice bath locks in the neon green color and the crisp-tender texture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you blanch broccoli without ice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run cold tap water directly over the drained broccoli for at least 60 seconds. It is less effective than ice because tap water is rarely cold enough to stop cooking as quickly, but it is better than nothing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need to blanch broccoli before freezing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw broccoli contains enzymes that break down cell walls even at freezer temperatures. Unblanched frozen broccoli goes mushy and loses color after a few months. Blanching deactivates those enzymes. The USDA recommends a minimum of 3 minutes at a full rolling boil for florets before freezing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should you blanch broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what comes next. Blanch for 30 to 45 seconds for stir fry. Blanch for 60 to 90 seconds if eating immediately or using in cold salads. Blanch for 2 to 3 minutes before freezing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common mistakes when blanching broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four most common mistakes are: under-salted water, water that is not at a full rolling boil, overcrowding the pot which drops the water temperature, and not drying the broccoli properly after the ice bath.',
      },
    },
  ],
}

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────

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
      name: 'How to Blanch Broccoli',
      item: 'https://broccolipedia.com/how-to-cook/blanch',
    },
  ],
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BlanchBroccoliPage() {
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
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-deepForest">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/how-to-cook" className="hover:text-deepForest">How to Cook</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-deepForest font-medium" aria-current="page">Blanch Broccoli</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-6">
          How to Blanch Broccoli
        </h1>

        {/* Hero image */}
        <img
          src="/images/blanch-broccoli/blanch-broccoli-broccoli-method-in-action.webp"
          alt="Broccoli florets blanching in a pot of boiling salted water, turning vivid neon green"
          width={1200}
          height={800}
          className="w-full rounded-xl mb-8 object-cover"
          loading="eager"
        />

        {/* Opening personal paragraph */}
        <p className="text-deepForest leading-relaxed mb-6 text-lg">
          Adam refused to eat broccoli for almost a year. I tried roasting it, steaming it, hiding it in pasta. He picked every floret out without a word. Then one night I made it properly blanched for the first time: barely a minute in salted water, straight into ice, finished with a squeeze of lemon and raw garlic grated over the top. He ate it standing at the kitchen counter before I could even plate it. That moment is why I keep making it this way.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          Bring a large pot of generously salted water to a rolling boil. Add broccoli florets and cook for 60 to 90 seconds until bright neon green. Transfer immediately to an ice bath and let sit for 2 minutes. Drain, pat dry, and serve or store.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest list-none">
            <li>&#10003; Blanching time depends on what comes next: 30 to 45 seconds for stir fry, 60 to 90 seconds for eating now, 2 to 3 minutes before freezing</li>
            <li>&#10003; Salt the water generously: think pasta-water level, not tap-water level</li>
            <li>&#10003; The ice bath is not optional; it locks in the color and stops the cooking</li>
            <li>&#10003; Overcrowding the pot is the most common mistake; work in batches</li>
            <li>&#10003; Blanched broccoli keeps up to 5 days in the fridge when properly dried</li>
          </ul>
        </div>

        {/* Step-by-step instructions */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Step-by-Step Instructions
          </h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            What you need: large pot, slotted spoon or spider, large bowl, ice, salt, broccoli florets
          </p>
          <ol className="space-y-4 text-deepForest leading-relaxed">
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">1.</span>
              <div>
                <strong>Prepare the ice bath first.</strong> Fill a large bowl with ice and cold water and set it right next to the stove. You want it ready before the broccoli hits the water.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">2.</span>
              <div>
                <strong>Bring a large pot of salted water to a rolling boil.</strong> Add enough salt that the water tastes faintly like the sea. A flat, under-salted blanch produces flat-tasting broccoli.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">3.</span>
              <div>
                <strong>Cut broccoli into even florets.</strong> Uniform size means even cooking. Split any thick stem pieces lengthwise so they match the floret tops.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">4.</span>
              <div>
                <strong>Add broccoli in a single batch. Do not overcrowd.</strong> If you have a lot, work in two rounds. Too much at once drops the water temperature and you get dull, soft florets instead of vivid, crisp ones.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">5.</span>
              <div>
                <strong>Blanch 60 to 90 seconds.</strong> Watch the color. The moment it shifts to vivid neon green, that is your signal. For stir fry prep, pull it at 30 to 45 seconds. For freezing, go 2 to 3 minutes.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">6.</span>
              <div>
                <strong>Transfer immediately to the ice bath.</strong> Use a slotted spoon and move fast. Every extra second in hot water is more cooking.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700 min-w-[1.5rem]">7.</span>
              <div>
                <strong>Cool 2 minutes, then drain and dry.</strong> Lift the broccoli out, shake off the water, and spread it on a kitchen towel. Pat it dry. This matters for storage. Moisture is what makes it go soggy in the fridge.
              </div>
            </li>
          </ol>
        </section>

        {/* Result image */}
        <img
          src="/images/blanch-broccoli/blanch-broccoli-finished-result-plate.webp"
          alt="Blanched broccoli just removed from an ice bath, vivid neon green, glistening on a white kitchen towel"
          width={1200}
          height={800}
          className="w-full rounded-xl mb-8 object-cover"
          loading="lazy"
        />

        {/* Why it turns bright green */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Why Does Broccoli Turn Bright Green When Blanched?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Raw broccoli has chlorophyll locked inside its cells. Heat causes those cells to expand, releasing pockets of air and pushing chlorophyll closer to the surface. The color intensifies almost immediately. You get that luminous neon green that looks nothing like the olive you see on overcooked broccoli.
          </p>
          <p className="text-deepForest leading-relaxed mb-4">
            Leave it in too long and chlorophyll breaks down into pheophytin. That is the grey-olive color you know from school cafeterias. The ice bath stops this breakdown at exactly the right moment.
          </p>
          <p className="text-deepForest leading-relaxed">
            One note on nutrients: blanching does reduce sulforaphane bioavailability compared to raw or steamed broccoli. Broccoli still delivers good amounts of vitamin C (89.2mg per 100g raw) <cite>(USDA FDC 170379)</cite>, vitamin K, fiber, and folate <cite>(USDA FDC 170379)</cite>. But if you want maximum sulforaphane, lightly steam or eat it raw. Blanching is the right choice for texture, color, and freezing prep.
          </p>
        </section>

        {/* How long to blanch */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How Long Should You Blanch Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            This is the question that confuses everyone, and the answer is genuinely context-dependent. No single time is right for all uses.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-deepForest border-collapse">
              <thead>
                <tr className="bg-greenTint">
                  <th className="text-left py-3 px-4 font-semibold border border-green-200">What comes next</th>
                  <th className="text-left py-3 px-4 font-semibold border border-green-200">Blanching time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-green-100">Stir fry or wok dish</td>
                  <td className="py-3 px-4 border border-green-100">30 to 45 seconds</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="py-3 px-4 border border-green-100">Eating now, cold salads</td>
                  <td className="py-3 px-4 border border-green-100">60 to 90 seconds</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-green-100">Freezing</td>
                  <td className="py-3 px-4 border border-green-100">2 to 3 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-deepForest leading-relaxed">
            For freezing, the longer time matters. Research suggests a minimum of 3 minutes for broccoli florets before freezing so that enzyme inactivation goes all the way through the floret. <cite>(USDA Complete Guide to Home Canning and Preserving)</cite>
          </p>
        </section>

        {/* Ice bath */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Do You Have to Use an Ice Bath?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            Yes. Residual heat in the broccoli keeps cooking it after you drain it. Color fades within minutes and the texture softens. The ice bath stops everything instantly.
          </p>
          <p className="text-deepForest leading-relaxed">
            No ice? Run cold tap water directly over the drained broccoli for 60 seconds. It is less effective because most tap water is not cold enough to stop cooking as fast, but it is better than nothing.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Common Blanching Mistakes
          </h2>
          <div className="space-y-4 text-deepForest leading-relaxed">
            <div>
              <strong>Under-salted water.</strong> This is the most overlooked step. Salt seasons the broccoli from the inside while it cooks. Skip it and the final result tastes flat no matter what you add after.
            </div>
            <div>
              <strong>Water not at a full rolling boil.</strong> A gentle simmer is not enough. A real, aggressive boil cooks broccoli quickly and evenly. Slow heat produces slow, uneven results.
            </div>
            <div>
              <strong>Overcrowding.</strong> Adding too much broccoli at once drops the water temperature. Instead of a fast, high-heat cook, you get a slow, soggy one.
            </div>
            <div>
              <strong>Not drying after the ice bath.</strong> Water left on the broccoli goes into your pan, your salad, your storage container. Pat it dry before doing anything with it.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-deepForest mb-2">
                Do you salt the water when blanching?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Yes, generously. Think pasta-water level. Under-salted water produces flat-tasting broccoli even after you finish it with lemon or garlic.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-deepForest mb-2">
                Why do you put broccoli in ice water after blanching?
              </h3>
              <p className="text-deepForest leading-relaxed">
                The ice bath stops cooking instantly. Without it, residual heat keeps working after you drain. Color fades, texture softens. The ice bath locks in the neon green and the crisp-tender bite.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-deepForest mb-2">
                How do you blanch broccoli without ice?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Run cold tap water directly over the drained broccoli for at least 60 seconds. It works, but slower than ice. If you can plan ahead, fill a bowl with water and put it in the freezer for 10 minutes before you start cooking.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-deepForest mb-2">
                Do you need to blanch broccoli before freezing?
              </h3>
              <p className="text-deepForest leading-relaxed">
                Yes. Raw broccoli contains enzymes that break down cell walls even at freezer temperatures. Unblanched frozen broccoli goes mushy and loses color after a few months. Blanching deactivates those enzymes. Research suggests a minimum of 3 minutes at a full rolling boil for florets. <cite>(USDA Complete Guide to Home Canning and Preserving)</cite>
              </p>
            </div>
          </div>
        </section>

        {/* Tip section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            One Trick Worth Trying
          </h2>
          <p className="text-deepForest leading-relaxed">
            I picked up the sesame oil tip from @justonecookbook, a Japanese home cooking account I have followed for years. A few drops of sesame oil in the blanching water creates a light coating on the broccoli as it cooks, seals in the flavor slightly, and gives it a gentle nutty aroma. It also extends fridge freshness to 3 to 4 days versus the usual 2 to 3. I tried it once and kept doing it.
          </p>
        </section>

        {/* Sources */}
        <footer className="border-t border-green-100 pt-6 mt-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              USDA FoodData Central. (2019). Broccoli, raw (FDC ID 170379). U.S. Department of Agriculture.{' '}
              <a
                href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379
              </a>
            </li>
            <li>
              USDA National Institute of Food and Agriculture. (2015).{' '}
              <em>Complete Guide to Home Canning and Preserving</em> (2nd rev. ed.). U.S. Department of Agriculture.
            </li>
          </ul>
        </footer>

      </article>
    </>
  )
}
