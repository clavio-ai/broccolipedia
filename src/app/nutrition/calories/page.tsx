import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Broccoli Calories Per Cup: Raw, Steamed, Boiled | BroccoliPedia',
  description:
    'One cup of raw broccoli (91g) has 31 calories. Full breakdown by cooking method (steamed, boiled, roasted) with USDA-verified macros and the sulforaphane trick no calorie page mentions.',
  keywords: [
    'broccoli calories per cup',
    'how many calories in 1 cup of broccoli',
    'broccoli calories raw vs cooked',
    'broccoli nutrition facts',
    'calories in steamed broccoli',
    'broccoli macros',
  ],
  openGraph: {
    title: 'Broccoli Calories Per Cup: Raw, Steamed, Boiled',
    description:
      '31 calories per cup raw, 27 calories boiled. USDA-verified numbers with cooking-method breakdown and the chop-first trick for maximum sulforaphane.',
    images: [
      {
        url: '/images/broccoli-calories/broccoli-calories-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'One cup of steamed broccoli in a white bowl, Elena Ignacio\'s kitchen',
      },
    ],
  },
}

// WikiData-linked entities from TextRazor + research entity map
const mentionedEntities = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  { '@type': 'Thing', name: 'Calorie', sameAs: 'https://www.wikidata.org/wiki/Q130964' },
  { '@type': 'Thing', name: 'Protein', sameAs: 'https://www.wikidata.org/wiki/Q8054' },
  { '@type': 'Thing', name: 'Dietary fiber', sameAs: 'https://www.wikidata.org/wiki/Q128524' },
  { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q193098' },
  { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/wiki/Q105538' },
  { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q418879' },
  { '@type': 'Thing', name: 'Glucoraphanin', sameAs: 'https://www.wikidata.org/wiki/Q2741341' },
  { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q420818' },
  { '@type': 'Thing', name: 'Folate', sameAs: 'https://www.wikidata.org/wiki/Q193430' },
  { '@type': 'Thing', name: 'Cruciferous vegetable', sameAs: 'https://www.wikidata.org/wiki/Q3177611' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Broccoli Calories Per Cup: Raw, Steamed, Boiled',
  description:
    'One cup of raw broccoli (91g) has 31 calories. Full breakdown by cooking method with USDA-verified macros.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: 'https://broccolipedia.com/images/broccoli-calories/broccoli-calories-hero-broccoli-feature.webp',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
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
  mentions: mentionedEntities,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable="true"]'],
  },
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'USDA FoodData Central: Broccoli, raw (FDC ID 170379)',
      url: 'https://fdc.nal.usda.gov/food-details/170379',
    },
    {
      '@type': 'CreativeWork',
      name: 'University of Rochester Medical Center: Broccoli, cooked, boiled, drained',
      url: 'https://www.urmc.rochester.edu/encyclopedia/content?contenttypeid=76&contentid=11091-5',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Effect of microwave treatment on the sulforaphane content in broccoli',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32328271/',
      author: 'Dosz, L., & Hanschen, F. S.',
      datePublished: '2020',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many calories are in 1 cup of raw broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '31 calories. That is for 1 cup chopped (91g), per USDA FoodData Central (FDC ID 170379).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calories in 1 cup of steamed broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 31 to 35 calories per cup, depending on moisture retained after steaming. Steaming keeps the calorie count close to raw and preserves far more vitamin C and folate than boiling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calories in 1 cup of boiled broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Around 27 calories per cup, boiled and drained. The florets absorb water during boiling, making a cup of cooked broccoli heavier (156g vs 91g for raw) but lower in calories by cup measurement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does cooking broccoli change the calorie count?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calories per gram barely change. What changes is the weight of one measured cup. A cup of raw broccoli weighs 91g. A cup of boiled, drained broccoli weighs 156g because the florets absorb water and compact. That weight difference explains the apparent calorie variation by cup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does roasted broccoli have more calories than raw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Without oil: about 35 calories per cup. With 1 teaspoon of olive oil: roughly 75 calories. The oil is the variable, not the broccoli.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calories in 100g of broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw broccoli contains 34 calories per 100g. Cooked and drained: around 35 calories per 100g. The number stays almost identical because cooking does not change the energy per gram of broccoli solid.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much fiber is in 1 cup of broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2.37g of dietary fibre per cup of raw broccoli (91g), per USDA FoodData Central (FDC ID 170379).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli good for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Practically, yes. One cup of raw broccoli is 31 calories with 2.37g of fibre. Fibre slows digestion. You can eat three cups of broccoli for under 100 calories while getting 90% of your daily vitamin C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 2 cups of broccoli a day too much?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most healthy adults, two cups a day is fine. The caveat: raw cruciferous vegetables eaten in large daily quantities contain goitrogens that may interfere with thyroid function in people with pre-existing thyroid conditions. Cooking reduces goitrogen content significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli good for blood sugar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research suggests yes. Broccoli has a glycemic index of around 10 and a glycemic load close to zero at normal serving sizes. The sulforaphane content is thought to support insulin sensitivity. This is still an active area of research, not established medical guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does 1 cup of broccoli weigh in grams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw broccoli: 91g per cup. Cooked (boiled, drained): 156g per cup. The difference comes from water absorption during cooking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli keto-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Net carbohydrates are approximately 3.7g per cup of raw broccoli, which fits within most ketogenic targets.',
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
      name: 'Nutrition',
      item: 'https://broccolipedia.com/nutrition',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Broccoli Calories Per Cup',
      item: 'https://broccolipedia.com/nutrition/calories',
    },
  ],
}

const nutritionRows = [
  { nutrient: 'Calories', amount: '31 kcal' },
  { nutrient: 'Protein', amount: '2.57g' },
  { nutrient: 'Carbohydrates', amount: '6.04g' },
  { nutrient: 'Dietary Fiber', amount: '2.37g' },
  { nutrient: 'Net Carbs', amount: '~3.7g' },
  { nutrient: 'Fat', amount: '0.34g' },
  { nutrient: 'Vitamin C', amount: '81.2mg (90% DV)' },
  { nutrient: 'Vitamin K', amount: '92.8mcg (77% DV)' },
  { nutrient: 'Folate', amount: '57mcg' },
  { nutrient: 'Potassium', amount: '288mg' },
]

const cookingMethodRows = [
  { method: 'Raw, chopped', weight: '91g', calories: '31 kcal' },
  { method: 'Steamed', weight: '~95g', calories: '~33 kcal' },
  { method: 'Boiled, drained', weight: '156g', calories: '27 kcal' },
  { method: 'Roasted (no oil)', weight: '~90g', calories: '~35 kcal' },
  { method: 'Roasted (1 tsp oil)', weight: '~90g', calories: '~75 kcal' },
]

const faqs = [
  {
    q: 'How many calories in 1 cup of steamed broccoli?',
    a: 'Approximately 31 to 35 calories per cup, depending on moisture retained after steaming. Steaming keeps the calorie count close to raw and preserves far more vitamin C and folate than boiling.',
  },
  {
    q: 'Does roasted broccoli have more calories than raw?',
    a: 'Without oil: about 35 calories per cup. With 1 teaspoon of olive oil: roughly 75 calories. The oil is the variable, not the broccoli.',
  },
  {
    q: 'Is broccoli good for blood sugar?',
    a: 'Research suggests yes. Broccoli has a glycemic index of around 10 and a glycemic load close to zero at normal serving sizes. The sulforaphane content is thought to support insulin sensitivity via Nrf2 pathways, though this research is still developing. A comparison of broccoli and cauliflower for blood sugar management found broccoli had a stronger effect, largely because cauliflower does not contain sulforaphane at the same level.',
  },
  {
    q: 'How much fiber is in 1 cup of broccoli?',
    a: '2.37g of dietary fibre per cup of raw broccoli (91g). (USDA FDC 170379)',
  },
  {
    q: 'Is broccoli keto-friendly?',
    a: 'Yes. Net carbohydrates are approximately 3.7g per cup of raw broccoli, which fits within most ketogenic targets.',
  },
  {
    q: 'Is broccoli good for creatinine?',
    a: 'Broccoli is generally considered a kidney-friendly vegetable. It is low in potassium relative to many other vegetables. One cup of raw broccoli contains 288mg of potassium (USDA FDC 170379). If you are on a specific renal diet, check your daily potassium limit with your doctor.',
  },
]

export default function CaloriesPage() {
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-6">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li><Link href="/nutrition" className="hover:text-forest">Nutrition</Link></li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li className="text-deepForest font-medium">Broccoli Calories Per Cup</li>
          </ol>
        </nav>

        {/* Hero image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src="/images/broccoli-calories/broccoli-calories-hero-broccoli-feature.webp"
            alt="One cup of steamed broccoli in a white bowl, Elena Ignacio's kitchen"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          Broccoli Calories Per Cup: Raw, Steamed, Boiled
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-greenTint">
          <div>
            <p className="text-sm font-semibold text-deepForest">
              By{' '}
              <Link href="/about#elena-ignacio" className="hover:text-forest">
                Elena Ignacio
              </Link>
            </p>
            <p className="text-xs text-sage">Updated June 16, 2026</p>
          </div>
        </div>

        {/* Intro paragraph */}
        <p className="text-base text-deepForest leading-relaxed mb-6">
          In Osaka in 2022, I weighed what I thought was a big bowl of steamed broccoli. MyFitnessPal said 38 calories. I weighed it again because I didn't believe it. Adam was sitting next to me at the table going through his "nothing green" phase and I almost said out loud: "You have no idea what you're missing." That number changed how I cook. Broccoli became the vegetable I stopped worrying about.
        </p>

        {/* QuickAnswer block */}
        <div
          data-speakable="true"
          className="bg-greenTint border border-leaf rounded-xl p-5 mb-8"
        >
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-base text-deepForest leading-relaxed">
            One cup of raw broccoli (91g) contains <strong>31 calories</strong>, 6g of carbohydrates, 2.6g of fibre, and 2.6g of protein. (USDA FDC 170379) Cooked broccoli, boiled and drained, drops to around 27 calories per cup because the florets absorb water and become denser by weight.
          </p>
        </div>

        {/* Section 1: Raw calories */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How many calories are in 1 cup of raw broccoli?
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-4">
            One cup of raw, chopped broccoli weighs 91g and contains 31 calories. (USDA FDC 170379)
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <caption className="text-left text-xs text-sage mb-2">
                Nutrition per 1 cup raw broccoli (91g). Source: USDA FoodData Central FDC ID 170379
              </caption>
              <thead>
                <tr className="bg-deepForest text-white">
                  <th className="px-3 py-2 text-left font-medium">Nutrient</th>
                  <th className="px-3 py-2 text-left font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {nutritionRows.map((row, i) => (
                  <tr key={row.nutrient} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                    <td className="px-3 py-2 text-deepForest border-b border-greenTint">{row.nutrient}</td>
                    <td className="px-3 py-2 font-semibold text-forest border-b border-greenTint">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base text-deepForest leading-relaxed">
            The reason this feels almost too low: broccoli is roughly 89% water by weight. Water has no calories. So you're eating something that is mostly liquid, wrapped in fibre, protein, and vitamins. The calorie cost is nearly nothing.
          </p>
        </section>

        {/* Section 2: Cooking changes */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Does cooking broccoli change the calorie count?
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-4">
            The calories barely change. What changes is the weight of one cup. Raw broccoli is 91g per cup. Boiled and drained: 156g per cup. The florets compact, absorb water, and take up less space. So when you measure by cup, you are eating more grams of cooked broccoli than raw. That is why the numbers per cup look different.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <caption className="text-left text-xs text-sage mb-2">
                Calories per 1 cup by preparation method. Sources: USDA FDC 170379; University of Rochester Medical Center
              </caption>
              <thead>
                <tr className="bg-deepForest text-white">
                  <th className="px-4 py-2 text-left font-medium">Preparation</th>
                  <th className="px-4 py-2 text-left font-medium">Weight per cup</th>
                  <th className="px-4 py-2 text-left font-medium">Calories</th>
                </tr>
              </thead>
              <tbody>
                {cookingMethodRows.map((row, i) => (
                  <tr key={row.method} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                    <td className="px-4 py-2 font-medium text-deepForest border-b border-greenTint">{row.method}</td>
                    <td className="px-4 py-2 text-sage border-b border-greenTint">{row.weight}</td>
                    <td className="px-4 py-2 font-semibold text-forest border-b border-greenTint">{row.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base text-deepForest leading-relaxed mb-3">
            Roasting is the exception. The broccoli itself barely changes in calories. The oil you add does. One teaspoon of olive oil adds roughly 40 calories. That is the variable to track, not the broccoli.
          </p>
          <p className="text-base text-deepForest leading-relaxed">
            I steam almost everything at home. Not from a study. Because Alfi will actually eat it that way. Boiled tastes like it went through something unfortunate.
          </p>
        </section>

        {/* Section 3: 100g */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How many calories in 100g of broccoli?
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            Raw: 34 calories per 100g. (USDA FDC 170379) Cooked and drained: around 35 calories per 100g. The number stays almost identical because the energy per gram of broccoli solid does not change with cooking. Only the water content shifts.
          </p>
          <p className="text-base text-deepForest leading-relaxed">
            This matters when reading frozen broccoli labels. Most packages show nutrition per 100g cooked. The calorie answer is roughly the same as raw.
          </p>
        </section>

        {/* Section 4: Weight loss */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Is broccoli good for weight loss?
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            Practically, yes. One cup fills you up for 31 calories and gives you 2.37g of fibre. (USDA FDC 170379) Fibre slows digestion. You can eat three cups of broccoli for under 100 calories. You're also getting 90% of your daily vitamin C from one cup. That is a strong return on very little energy.
          </p>
          <p className="text-base text-deepForest leading-relaxed">
            I'm not saying broccoli is magic. I'm saying it makes the numbers easy to work with.
          </p>
        </section>

        {/* Section 5: 2 cups too much */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            Is 2 cups of broccoli a day too much?
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            For most healthy adults, two cups a day is fine. NutritionFacts.org addressed this in a video with over 121,000 views.
          </p>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            The caveat worth knowing: raw cruciferous vegetables eaten in large daily quantities contain goitrogens. These can interfere with thyroid function in people who already have thyroid conditions. At normal serving sizes with a healthy thyroid, this is not a concern. Cooking reduces goitrogen content significantly.
          </p>
          <p className="text-base text-deepForest leading-relaxed">
            Bloating is the more common reality. Broccoli contains complex carbohydrates that gut bacteria ferment, which produces gas. Cooking helps. Consistency helps more. Your gut adapts.
          </p>
        </section>

        {/* Section 6: Sulforaphane trick */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            The cooking trick almost no calorie page mentions
          </h2>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            Broccoli contains glucoraphanin. When you chop it, an enzyme called myrosinase activates and converts glucoraphanin into sulforaphane, the compound linked in research to anti-inflammatory effects and gut health support. Heat destroys myrosinase.
          </p>
          <p className="text-base text-deepForest leading-relaxed mb-3">
            Simple fix: chop your broccoli and wait 40 minutes before cooking. That window lets myrosinase finish converting glucoraphanin to sulforaphane while the enzyme is still active. (Food Science and Nutrition, Wiley, 2020. PubMed 32328271)
          </p>
          <p className="text-base text-deepForest leading-relaxed">
            If you forget, add a pinch of mustard powder to your cooked broccoli. Mustard contains its own myrosinase enzyme that survives heat and picks up where broccoli's enzyme left off. NutritionFacts.org covered this in a video with over 212,000 views. I've never seen it mentioned on a standard calorie page.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-10" data-speakable="true">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">FAQs</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-greenTint pb-5 last:border-0 last:pb-0">
                <h3 className="font-semibold text-deepForest mb-2">{faq.q}</h3>
                <p className="text-sm text-deepForest leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-4">Sources</h2>
          <ul className="space-y-2 text-xs text-sage">
            <li>
              USDA FoodData Central. (2019). Broccoli, raw [FDC ID 170379].{' '}
              <a
                href="https://fdc.nal.usda.gov/food-details/170379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                https://fdc.nal.usda.gov/food-details/170379
              </a>
            </li>
            <li>
              University of Rochester Medical Center. (n.d.). Broccoli, cooked, boiled, drained, without salt, 1 cup.{' '}
              <a
                href="https://www.urmc.rochester.edu/encyclopedia/content?contenttypeid=76&contentid=11091-5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                urmc.rochester.edu
              </a>
            </li>
            <li>
              Dosz, L., &amp; Hanschen, F. S. (2020). Effect of microwave treatment on the sulforaphane content in broccoli.{' '}
              <em>Food Science and Nutrition</em>.{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32328271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                PubMed 32328271
              </a>
            </li>
            <li>
              NutritionFacts.org. (2015). Second strategy to cooking broccoli [Video].{' '}
              <a
                href="https://www.youtube.com/watch?v=wsN8x0BWcyE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                YouTube
              </a>
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <nav aria-label="Related pages" className="flex flex-wrap gap-3">
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
            Full Nutrition Facts
          </Link>
          <Link href="/how-to-cook/steam" className="text-sm text-forest font-semibold hover:underline">
            How to Steam Broccoli
          </Link>
          <Link href="/nutrition/protein" className="text-sm text-forest font-semibold hover:underline">
            Protein in Broccoli
          </Link>
          <Link href="/nutrition/fiber" className="text-sm text-forest font-semibold hover:underline">
            Fiber in Broccoli
          </Link>
        </nav>
      </article>
    </>
  )
}
