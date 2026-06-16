import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Many Carbs in Broccoli? (Raw, Cooked, Net Carbs)',
  description:
    'Raw broccoli has around 6g total carbs and 4g net carbs per cup. Here\'s what that means for keto, low-carb diets, and everyday cooking. All numbers from USDA data.',
  keywords: [
    'how many carbs in broccoli',
    'broccoli carbs',
    'broccoli net carbs',
    'broccoli nutrition facts',
    'is broccoli keto',
    'broccoli carbs per cup',
  ],
  openGraph: {
    title: 'How Many Carbs in Broccoli? (Raw, Cooked, Net Carbs)',
    description:
      'Raw broccoli has around 6g total carbs and 4g net carbs per cup. Keto verdict, cooking impact, and USDA-cited numbers.',
    url: 'https://broccolipedia.com/nutrition/carbs',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-carbs/broccoli-carbs-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh broccoli florets in a white bowl on a wooden surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Carbs in Broccoli? (Raw, Cooked, Net Carbs)',
    description:
      'Around 6g total and 4g net carbs per cup of raw broccoli. USDA-backed numbers for keto and low-carb trackers.',
  },
}

// Schema JSON-LD — Article + FAQPage + BreadcrumbList + Speakable
const schemaJson = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/nutrition/carbs#article',
    headline: 'How Many Carbs in Broccoli? (Raw, Cooked, Net Carbs)',
    description:
      'Raw broccoli has around 6g total carbs and 4g net carbs per cup. Here\'s what that means for keto, low-carb diets, and everyday cooking.',
    url: 'https://broccolipedia.com/nutrition/carbs',
    datePublished: '2026-06-16',
    dateModified: '2026-06-16',
    author: {
      '@id': 'https://broccolipedia.com/about#elena-ignacio',
    },
    publisher: {
      '@id': 'https://broccolipedia.com/#organization',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/broccoli-carbs/broccoli-carbs-hero-broccoli-feature.webp',
      width: 1200,
      height: 630,
      caption: 'Fresh broccoli florets in a white bowl',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/nutrition/carbs',
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      {
        '@type': 'Thing',
        name: 'Carbohydrate',
        sameAs: 'https://www.wikidata.org/wiki/Q11358',
      },
      {
        '@type': 'Thing',
        name: 'Dietary fiber',
        sameAs: 'https://www.wikidata.org/wiki/Q161',
      },
      {
        '@type': 'Thing',
        name: 'USDA FoodData Central',
        sameAs: 'https://www.wikidata.org/wiki/Q7866379',
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Keto diet',
        sameAs: 'https://en.wikipedia.org/wiki/Ketogenic_diet',
      },
      {
        '@type': 'Thing',
        name: 'Sulforaphane',
        sameAs: 'https://en.wikipedia.org/wiki/Sulforaphane',
      },
      {
        '@type': 'Thing',
        name: 'Cauliflower',
        sameAs: 'https://en.wikipedia.org/wiki/Cauliflower',
      },
      {
        '@type': 'Thing',
        name: 'Broccolini',
        sameAs: 'https://en.wikipedia.org/wiki/Broccolini',
      },
      {
        '@type': 'Thing',
        name: 'Broccoli rabe',
        sameAs: 'https://en.wikipedia.org/wiki/Broccoli_rabe',
      },
    ],
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'USDA FoodData Central: Broccoli, raw (FDC ID 170379)',
        url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients',
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://broccolipedia.com/nutrition/carbs#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many carbs are in 1 cup of raw broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One cup of raw broccoli (about 90g) has approximately 5.64g to 6g of total carbohydrates, depending on exact weight and measurement precision. The USDA SNAP-Ed guide rounds this to 6g per cup (91g).',
        },
      },
      {
        '@type': 'Question',
        name: 'How many net carbs are in 1 cup of broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One cup of raw broccoli has approximately 3.4g to 4g of net carbs. Net carbs is calculated as total carbs minus dietary fiber: 5.64g total minus 2.16g fiber equals roughly 3.4g net carbs (USDA FDC 170379).',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs are in broccoli per 100g?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per 100g of raw broccoli, USDA FoodData Central (FDC ID 170379) reports 6.64g total carbohydrates, 2.6g dietary fiber, and approximately 4.04g net carbs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs are in 2 cups of cooked broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Two cups of cooked broccoli contains approximately 11g to 12g of total carbs and 6g to 7g of net carbs. Cooked broccoli is denser by volume than raw, so two cups of cooked holds more vegetable than two cups of raw.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does cooking change the carb count in broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The carbs themselves do not change when you cook broccoli. What changes is water content: broccoli loses water when cooked, so it shrinks in volume. Per gram of broccoli, the carb content is the same whether raw or cooked.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is broccoli allowed on a keto diet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Broccoli has approximately 3.4g to 4g net carbs per cup, making it compatible with most keto diets that target 20g to 50g net carbs per day. It is one of the most nutrient-dense keto-friendly vegetables available.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I eat broccoli on a no-carb diet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No vegetable is truly zero carbs. Broccoli has 3.4g to 4g net carbs per cup (USDA FDC 170379), so a strict no-carb diet would exclude it. However, broccoli fits easily within a very low carb or keto diet.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs are in broccoli rabe vs regular broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Regular broccoli has approximately 6.64g total carbs and 4.04g net carbs per 100g (USDA FDC 170379). Broccoli rabe (rapini) has approximately 2.8g total carbs per 100g, making it lower in carbs than regular broccoli.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does broccoli compare to cauliflower for carbs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cauliflower has slightly fewer carbs than broccoli, with approximately 5g total carbs per 100g raw versus broccoli\'s 6.64g. Both are low-carb vegetables, but cauliflower is the lower option by a small margin.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the lowest-carb vegetable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spinach, lettuce, celery, and cucumber typically have lower net carbs than broccoli, often 1 to 2g net carbs per 100g. Broccoli rabe is also lower at approximately 2.8g per 100g. Broccoli at 4g net carbs per 100g is low but not the absolute lowest.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much broccoli can you eat per day on keto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On a standard keto budget of 20g to 50g net carbs per day, you can eat 2 to 3 cups of raw broccoli (approximately 6g to 12g net carbs) while still staying within limits, depending on what else you eat that day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does steaming vs boiling affect the carb content of broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The carbohydrate content of broccoli does not change with steaming, boiling, or other cooking methods. Cooking affects water content and volume, not the carbs themselves. Track by weight rather than volume for precision.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs are in broccoli soup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Carbs in broccoli soup vary widely depending on the recipe. A simple broccoli soup (broccoli, broth, onion) may have 6g to 10g total carbs per cup. Cream-based or cheese-based versions add significant carbs from dairy. Check the specific recipe for accurate numbers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 2 cups of broccoli a day too much?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most people, two cups of broccoli per day is not too much. It provides about 8g net carbs, approximately 178mg of vitamin C (nearly double the daily recommended value), and 204mcg of vitamin K. Those on blood thinners should discuss the vitamin K content with their doctor.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://broccolipedia.com/nutrition/carbs#breadcrumb',
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
        name: 'Nutrition',
        item: 'https://broccolipedia.com/nutrition',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Carbs in Broccoli',
        item: 'https://broccolipedia.com/nutrition/carbs',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    description:
      'Filipino food writer and mother of two based in Singapore. Creator of BroccoliPedia and content at Elena sa Inda (TikTok) and Adele Vlogs (YouTube).',
    url: 'https://broccolipedia.com/about',
    sameAs: [
      'https://www.tiktok.com/@elenasainda',
      'https://www.youtube.com/@adelevlogs',
      'https://www.facebook.com/elena.ignacio',
    ],
  },
]

export default function BroccoliCarbsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-6">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-forest transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li>
              <Link href="/nutrition" className="hover:text-forest transition-colors">
                Nutrition
              </Link>
            </li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li className="text-deepForest font-medium">Carbs</li>
          </ol>
        </nav>

        {/* Hero image */}
        <div className="rounded-xl overflow-hidden mb-8 aspect-video bg-greenTint">
          <img
            src="/images/broccoli-carbs/broccoli-carbs-hero-broccoli-feature.webp"
            alt="Fresh broccoli florets in a white bowl on a wooden surface, natural light from the left"
            width={1200}
            height={630}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-5 leading-tight">
          How Many Carbs in Broccoli? (Raw, Cooked, Net Carbs)
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-2 mb-8 text-sm text-sage">
          <span>By</span>
          <Link
            href="/about"
            className="font-semibold text-forest hover:underline"
          >
            Elena Ignacio
          </Link>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-06-16">June 16, 2026</time>
          <span aria-hidden="true">·</span>
          <span>USDA FDC 170379</span>
        </div>

        {/* Intro paragraph */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          In 2022, Adam refused broccoli for three months straight. Called it grass. We were in
          Singapore, Aditya had just started tracking his macros, and I was trying to make every
          dinner work within the numbers. I kept a running note on my phone: how much does one cup
          of broccoli actually count for? That&apos;s when I looked it up properly for the first
          time, and I remember being a little surprised. The number was smaller than I expected.
        </p>

        {/* QuickAnswer block — Speakable target */}
        <div
          className="quick-answer bg-greenTint border border-leaf rounded-xl p-5 mb-8"
          aria-label="Quick Answer"
        >
          <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
            Quick Answer
          </div>
          <p className="text-deepForest leading-relaxed text-sm">
            One cup of raw broccoli (about 90g) has roughly <strong>6 grams of total carbs</strong>{' '}
            and around <strong>4 grams of net carbs</strong>. Net carbs means total carbs minus
            fiber. Per 100 grams, USDA FoodData Central puts it at 6.64g total carbs and 4.04g net
            carbs. That is a genuinely low number.{' '}
            <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite>
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'Total Carbs / cup', val: '~6g' },
            { label: 'Net Carbs / cup', val: '~4g' },
            { label: 'Total Carbs / 100g', val: '6.64g' },
            { label: 'Net Carbs / 100g', val: '4.04g' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-greenTint rounded-lg p-3 border border-leaf/50"
            >
              <div className="font-serif font-bold text-2xl text-forest">{item.val}</div>
              <div className="text-xs text-sage mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Section: Net Carbs per cup */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          How Many Net Carbs Are in 1 Cup of Broccoli?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Net carbs is the figure that matters if you are on keto or tracking a low-carb diet. The
          formula is simple: total carbs minus dietary fiber equals net carbs. Your body does not
          digest fiber the same way it digests sugar, so it has almost no effect on blood sugar.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          For one cup of raw broccoli (about 90g), the numbers shake out like this{' '}
          <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite>:
        </p>
        <ul className="list-disc list-inside text-deepForest mb-4 space-y-1">
          <li>Total carbohydrates: <strong>5.64g</strong></li>
          <li>Dietary fiber: <strong>2.16g</strong></li>
          <li>Net carbs: approximately <strong>3.4g</strong></li>
        </ul>
        <p className="text-deepForest leading-relaxed mb-4">
          If you are using a rounded figure, 6g total and 4g net is what most trackers will show.
          The exact number depends slightly on whether you measure 90g or 91g, and whether your cup
          is packed or loosely filled. The range 3.4g to 4g net carbs per cup is accurate and you
          can use either without concern.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          To put that fiber number in perspective: 2.16g of fiber in one cup of broccoli is roughly
          what you get from half a slice of whole wheat bread. It is not a huge amount, but it is
          consistent, and it adds up across a day of eating.
        </p>

        {/* Section: Per 100g */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          How Many Carbs in Broccoli Per 100g?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Per 100g raw, USDA FoodData Central gives us{' '}
          <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite>:
        </p>

        {/* Nutrition table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-4 py-2 text-left font-semibold">Nutrient</th>
                <th className="px-4 py-2 text-left font-semibold">Per 100g raw</th>
                <th className="px-4 py-2 text-left font-semibold">Per 1 cup (90g) raw</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nutrient: 'Total Carbohydrates', per100: '6.64g', perCup: '5.64g' },
                { nutrient: 'Dietary Fiber', per100: '2.6g', perCup: '2.16g' },
                { nutrient: 'Net Carbs (calculated)', per100: '4.04g', perCup: '~3.4g' },
                { nutrient: 'Protein', per100: '2.82g', perCup: '2.31g' },
                { nutrient: 'Fat', per100: '0.37g', perCup: '0.3g' },
                { nutrient: 'Calories', per100: '34 kcal', perCup: '35 kcal' },
                { nutrient: 'Vitamin C', per100: '89.2mg', perCup: '82.2mg' },
                { nutrient: 'Vitamin K', per100: '102mcg', perCup: '91.8mcg' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                  <td className="px-4 py-2 text-deepForest border-b border-greenTint font-medium">
                    {row.nutrient}
                  </td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint">{row.per100}</td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint">{row.perCup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-deepForest leading-relaxed mb-8 text-sm text-sage">
          Source: USDA FoodData Central, FDC ID 170379 (broccoli, raw)
        </p>

        <p className="text-deepForest leading-relaxed mb-8">
          The sugars in broccoli are mostly fructose, sucrose, and glucose. There is very little
          starch, which is part of why the glycemic impact stays low even though there are some
          carbs present.
        </p>

        {/* Section: Cooking */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Does Cooking Change the Carb Count?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          This one confused me for a while. The short answer: the carbs themselves do not change.
          Cooking broccoli does not create new sugar or convert fiber into starch.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          What changes is the water. When you steam or boil broccoli, it loses water weight, so the
          same amount of vegetable shrinks in volume. One cup of raw broccoli becomes roughly 0.6
          cups of steamed broccoli by volume. If you track by weight, a 90g raw portion stays at
          about 6g total carbs regardless of how you cook it.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          If you track by volume (which most people do), a cup of cooked broccoli contains more
          grams of broccoli than a cup of raw broccoli. That is why a half-cup of cooked broccoli
          shows 5.6g total carbs and 3g net carbs. Same broccoli, denser measuring.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          The practical takeaway: measure by weight if you want precision. If you are eyeballing a
          bowl, raw and cooked portions look different but the carb count per gram stays the same.
        </p>

        {/* Section: Keto */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Is Broccoli Allowed on a Keto Diet?
        </h2>
        <div className="bg-greenTint border-l-4 border-forest rounded-r-lg px-5 py-4 mb-6">
          <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">
            Keto Verdict
          </div>
          <p className="text-deepForest font-semibold">
            Yes. Broccoli is one of the most practical keto vegetables.
          </p>
        </div>
        <p className="text-deepForest leading-relaxed mb-4">
          Most keto targets fall between 20g and 50g net carbs per day. One cup of broccoli at 3.4
          to 4g net carbs{' '}
          <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite> is a small
          fraction of that allowance. You could eat two or even three cups in a day and still have
          room in a standard keto budget.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          I want to address something that made the rounds in keto communities a few years ago. A
          popular video claimed one cup of broccoli has zero net carbs. That is not accurate against
          USDA data. CarbManager, USDA, and every tracker I have used puts it at 3 to 4g net carbs
          per cup. Not zero. Still very low. But not zero.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Honestly, broccoli is one of the most practical keto vegetables because it also gives you
          vitamin C, vitamin K, folate, potassium, and bioactive compounds like sulforaphane and
          beta-carotene. Research suggests these compounds may support anti-inflammatory pathways,
          though broccoli does not treat or cure any disease. Nutrition alongside a low carb count.
          That matters more than the exact decimal.
        </p>

        {/* Section: Broccoli vs Cauliflower */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Broccoli vs Cauliflower: Which Has Fewer Carbs?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Cauliflower is the other cruciferous vegetable that keto eaters reach for constantly. The
          comparison is close. Per 100g raw, cauliflower has about 5g total carbs versus
          broccoli&apos;s 6.64g{' '}
          <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite>. Cauliflower
          wins by a slim margin, which is why cauliflower rice and cauliflower mash became so
          popular as substitutes.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          That said, broccoli gives you more vitamin C and significantly more vitamin K. Alfi would
          eat cauliflower all day over broccoli if I let him, but I always mix both into our
          stir-fry because you get a better nutritional spread that way.
        </p>

        {/* Section: Broccoli Rabe */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Broccoli Rabe vs Regular Broccoli: What Is the Difference?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Broccoli rabe (also called rapini) is not actually a type of broccoli. It is a different
          plant in the brassica family, with thinner stems and a bitter flavour. Broccolini is a
          hybrid of broccoli and Chinese broccoli, with smaller florets and long stalks.
        </p>
        <ul className="list-disc list-inside text-deepForest mb-4 space-y-1">
          <li>
            Regular broccoli: 6.64g total carbs, 4.04g net per 100g{' '}
            <cite className="not-italic text-sage text-xs">(USDA FDC 170379)</cite>
          </li>
          <li>Broccolini: approximately 5g total carbs per 100g</li>
          <li>Broccoli rabe: approximately 2.8g total carbs per 100g (lower than regular broccoli)</li>
        </ul>
        <p className="text-deepForest leading-relaxed mb-8">
          If you track carbs closely and find broccoli rabe at the market, it is worth trying. The
          bitterness pairs well with garlic and olive oil.
        </p>

        {/* FAQ section */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
          FAQs
        </h2>
        <div className="space-y-5 mb-10">
          {[
            {
              q: 'How many carbs are in 2 cups of cooked broccoli?',
              a: 'Two cups of cooked broccoli contains approximately 11g to 12g of total carbs and 6g to 7g of net carbs. Cooked broccoli is denser by volume than raw, so two cups of cooked holds more vegetable than two cups of raw.',
            },
            {
              q: 'Can I eat broccoli on a no-carb diet?',
              a: 'No vegetable is truly zero carbs. Broccoli has 3.4 to 4g net carbs per cup (USDA FDC 170379), so a no-carb diet (meaning genuinely zero) would exclude it. If you mean a very low carb or keto diet, broccoli fits easily.',
            },
            {
              q: 'What is the lowest-carb vegetable?',
              a: 'Spinach, cucumber, and celery typically come in lower than broccoli at around 1 to 2g net carbs per 100g. Lettuce is even lower. Broccoli rabe sits around 2.8g per 100g. Broccoli at 4g net carbs is not the lowest, but it is close and comes with more nutrition than most of the lower-carb options.',
            },
            {
              q: 'Is 2 cups of broccoli a day too much?',
              a: 'For most people, no. Two cups gives you about 8g net carbs, a strong dose of vitamin C at roughly 178mg (about double the 90mg daily recommended value), and significant vitamin K at 204mcg. Research suggests eating cruciferous vegetables several times a week is associated with positive health outcomes. If you are on blood thinners, the high vitamin K content is worth discussing with a doctor since it affects clotting.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-leaf rounded-lg overflow-hidden">
              <div className="bg-greenTint px-4 py-3">
                <h3 className="font-semibold text-deepForest text-sm">{item.q}</h3>
              </div>
              <div className="px-4 py-3">
                <p className="text-deepForest text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sources */}
        <div className="border-t border-leaf pt-6 mt-6">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ol className="text-sm text-sage space-y-1 list-decimal list-inside">
            <li>
              USDA FoodData Central, FDC ID 170379. Broccoli, raw.{' '}
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
              Healthline. Broccoli 101: Nutrition Facts and Health Benefits.{' '}
              <a
                href="https://www.healthline.com/health/nutrition/broccoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                healthline.com
              </a>
            </li>
            <li>
              CarbManager. Broccoli, cooked from fresh.{' '}
              <a
                href="https://www.carbmanager.com/food-detail/cc:3a482c206d5ee244161f819118875b15/broccoli-cooked-from-fresh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                carbmanager.com
              </a>
            </li>
            <li>
              USDA SNAP-Ed Seasonal Produce Guide. Broccoli.{' '}
              <a
                href="https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide/broccoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                snaped.fns.usda.gov
              </a>
            </li>
            <li>
              N.C. Cooperative Extension. Broccoli Nutrition Facts.{' '}
              <a
                href="https://franklin.ces.ncsu.edu/news/broccoli-nutrition-facts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                franklin.ces.ncsu.edu
              </a>
            </li>
          </ol>
        </div>

        {/* Internal navigation */}
        <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-leaf">
          <Link
            href="/nutrition"
            className="text-sm text-forest font-semibold hover:underline"
          >
            ← Full Nutrition Facts
          </Link>
          <Link
            href="/nutrition/fiber"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Fiber in Broccoli →
          </Link>
          <Link
            href="/nutrition/calories"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Calories in Broccoli →
          </Link>
          <Link
            href="/facts/broccoli-vs-cauliflower"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Broccoli vs Cauliflower →
          </Link>
        </div>
      </article>
    </>
  )
}
