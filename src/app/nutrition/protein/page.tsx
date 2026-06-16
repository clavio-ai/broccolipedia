import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How Much Protein Is in Broccoli? | BroccoliPedia',
  description:
    'Broccoli has 2.82g of protein per 100g raw (USDA FDC ID 170379). How it compares to chicken and eggs, whether it is a complete protein, and what cooking does to the number.',
  keywords: [
    'broccoli protein content',
    'protein in broccoli',
    'how much protein in broccoli',
    'broccoli complete protein',
    'broccoli vs chicken protein',
    'is broccoli high in protein',
  ],
  openGraph: {
    title: 'How Much Protein Is in Broccoli?',
    description:
      'Broccoli has 2.82g of protein per 100g raw. Here is what that actually means for your plate — including the 700g reality check.',
    url: 'https://broccolipedia.com/nutrition/protein',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-protein/broccoli-protein-hero-broccoli-feature.webp',
        width: 1200,
        height: 675,
        alt: 'Raw broccoli florets in a small bowl on a wooden surface, natural light',
      },
    ],
    type: 'article',
    publishedTime: '2026-06-16T00:00:00Z',
    modifiedTime: '2026-06-16T00:00:00Z',
    authors: ['https://broccolipedia.com/about#elena-ignacio'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Protein Is in Broccoli?',
  description:
    'Broccoli has 2.82g of protein per 100g raw (USDA FDC ID 170379). A practical guide to the number, what it means, and whether broccoli can count as a protein source.',
  datePublished: '2026-06-16T00:00:00Z',
  dateModified: '2026-06-16T00:00:00Z',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/broccoli-protein/broccoli-protein-hero-broccoli-feature.webp',
    width: 1200,
    height: 675,
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
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/logo.png',
    },
  },
  mentions: [
    {
      '@type': 'Thing',
      name: 'Protein quality',
      sameAs: 'https://www.wikidata.org/wiki/Q25105257',
    },
    {
      '@type': 'Thing',
      name: 'Essential amino acid',
      sameAs: 'https://www.wikidata.org/wiki/Q245282',
    },
    {
      '@type': 'Thing',
      name: 'Protein digestibility corrected amino acid score',
      sameAs: 'https://www.wikidata.org/wiki/Q2066834',
    },
    {
      '@type': 'Thing',
      name: 'Digestible Indispensable Amino Acid Score',
      sameAs: 'https://www.wikidata.org/wiki/Q25105256',
    },
    {
      '@type': 'Thing',
      name: 'Methionine',
      sameAs: 'https://www.wikidata.org/wiki/Q180341',
    },
    {
      '@type': 'Thing',
      name: 'Leucine',
      sameAs: 'https://www.wikidata.org/wiki/Q483745',
    },
    {
      '@type': 'Thing',
      name: 'Lysine',
      sameAs: 'https://www.wikidata.org/wiki/Q178430',
    },
    {
      '@type': 'Thing',
      name: 'Tryptophan',
      sameAs: 'https://www.wikidata.org/wiki/Q181003',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Folate',
      sameAs: 'https://www.wikidata.org/wiki/Q127060',
    },
    {
      '@type': 'Thing',
      name: 'Edamame',
      sameAs: 'https://www.wikidata.org/wiki/Q1377879',
    },
    {
      '@type': 'Thing',
      name: 'Spinach',
      sameAs: 'https://www.wikidata.org/wiki/Q81464',
    },
    {
      '@type': 'Thing',
      name: 'Kale',
      sameAs: 'https://www.wikidata.org/wiki/Q45989',
    },
    {
      '@type': 'Thing',
      name: 'Steaming',
      sameAs: 'https://www.wikidata.org/wiki/Q1415859',
    },
    {
      '@type': 'Thing',
      name: 'Bodybuilding',
      sameAs: 'https://www.wikidata.org/wiki/Q124100',
    },
  ],
  isPartOf: {
    '@type': 'WebSite',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much protein is in 100g of broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2.82g of protein per 100g raw broccoli, per USDA FoodData Central (FDC ID 170379). A cup of raw chopped broccoli (about 88-91g) gives you approximately 2.5g. Cooked broccoli is denser per cup, so the per-cup figure goes up to around 3.7g for a 156g cup of steamed broccoli.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli a good source of protein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not primarily. A cup of raw broccoli gives you about 2.5g of protein. Broccoli is better thought of as a source of vitamin C, vitamin K, fiber, and sulforaphane. Plan your protein targets around other foods and let broccoli contribute its micronutrient load.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does broccoli have more protein than steak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per calorie, technically yes — broccoli provides about 8.3g of protein per 100 calories versus steak\'s lower per-calorie ratio. But to get 20g of protein from broccoli you would need to eat 700g of it. The same 20g from a steak portion is about 80g of meat. In real eating terms, there is no practical comparison.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli a complete protein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli contains all 9 essential amino acids including leucine, lysine, and tryptophan, but it is low in methionine and scores poorly on PDCAAS and DIAAS protein quality scales. In practice, it is not a complete protein source on its own. Pairing it with legumes, grains, or eggs covers the gaps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much broccoli do I need to eat to get 20g of protein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'About 700g of broccoli, which is roughly 7 to 8 cups raw. That is not practical as a daily approach. For plant-based protein, pair broccoli with edamame, lentils, or beans and rice instead of relying on broccoli alone.',
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
      name: 'Protein in Broccoli',
      item: 'https://broccolipedia.com/nutrition/protein',
    },
  ],
}

const comparisonData = [
  { food: 'Chicken breast (cooked)', protein: '31g', calories: '~165 kcal', highlight: false },
  { food: 'Beef, lean', protein: '26g', calories: '~217 kcal', highlight: false },
  { food: 'Egg (whole)', protein: '~13g', calories: '~155 kcal', highlight: false },
  { food: 'Edamame', protein: '11g', calories: '~122 kcal', highlight: false },
  { food: 'Spinach', protein: '2.9g', calories: '23 kcal', highlight: false },
  { food: 'Kale', protein: '2.92g', calories: '35 kcal', highlight: false },
  { food: 'Broccoli', protein: '2.82g', calories: '34 kcal', highlight: true },
]

export default function BroccoliProteinPage() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/nutrition" className="hover:text-forest">Nutrition</Link>
          {' / '}
          <span className="text-deepForest">Protein</span>
        </nav>

        {/* Hero image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
          <Image
            src="/images/broccoli-protein/broccoli-protein-hero-broccoli-feature.webp"
            alt="Raw broccoli florets in a small bowl on a wooden surface, natural light"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          How Much Protein Is in Broccoli?
        </h1>

        {/* QuickAnswer block */}
        <div className="bg-greenTint border border-leaf rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-deepForest leading-relaxed">
            Broccoli has <strong>2.82g of protein per 100g raw</strong> (USDA FDC ID 170379).
            A standard cup gives you about 2.5g. That&apos;s real but modest. To hit 20g of protein,
            you&apos;d need roughly 700g of broccoli. It earns its place on the plate for other reasons.
          </p>
        </div>

        {/* Opening — Elena's personal moment */}
        <p className="text-lg text-deepForest leading-relaxed mb-6">
          In 2022, Adam went through a phase where he refused almost everything. White rice.
          Chicken nuggets. That was the entire menu for weeks. I was in Singapore, watching a
          pediatrician nod at me saying &quot;he&apos;ll grow out of it,&quot; while I quietly tracked protein
          intake in a notes app at 10pm like some anxious nutritional accountant. Broccoli was
          the one green thing he would accept, but only when I called it &quot;tiny trees.&quot; I started
          wondering: could the tiny trees actually be doing something? Were they pulling any
          protein weight?
        </p>

        {/* Key Takeaways */}
        <div className="bg-white border border-greenTint rounded-xl p-5 mb-10">
          <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-3">Key Takeaways</p>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex items-start gap-2">
              <span className="text-forest mt-0.5">&#10003;</span>
              2.82g protein per 100g raw broccoli (USDA FDC ID 170379)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest mt-0.5">&#10003;</span>
              About 2.5g per cup, raw and chopped
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest mt-0.5">&#10003;</span>
              All 9 essential amino acids present, but broccoli is low in methionine
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest mt-0.5">&#10003;</span>
              700g of broccoli needed to hit 20g protein (not a practical primary source)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest mt-0.5">&#10003;</span>
              Broccoli&apos;s real value is micronutrients: vitamin C, vitamin K, fiber, sulforaphane
            </li>
          </ul>
        </div>

        {/* H2: How Much Protein Does Broccoli Have? */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          How Much Protein Does Broccoli Have?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          The honest number: <strong>2.82g of protein per 100g raw</strong>, straight from USDA
          FoodData Central (FDC ID 170379). Chopped raw, that&apos;s about <strong>2.5g per cup</strong>{' '}
          at 88&ndash;91g. Cook it and the cup gets denser. A cup of steamed broccoli at 156g gives
          you closer to <strong>3.7g</strong> (USDA FDC ID 170379).
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          There&apos;s a 4.2g figure floating around for a single broccoli spear that appears in
          Google&apos;s answer box. That number doesn&apos;t hold up. At 2.82g per 100g, a 31g spear
          calculates to about 0.87g. The 4.2g figure likely references a much larger cooked
          spear. I&apos;d trust the per-100g USDA figure first.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          In practical terms, a side serving of broccoli lands somewhere between 2g and 4g of
          protein depending on portion size and cooking method.
        </p>

        {/* H2: Is Broccoli a Complete Protein? */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Is Broccoli a Complete Protein?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Broccoli has all 9 essential amino acids, including leucine, lysine, and tryptophan
          (USDA FDC ID 170379). But having all 9 doesn&apos;t make it a complete protein in practice.
          The limiting factor is methionine, which broccoli is low in. Nutritionists rank protein
          quality using PDCAAS and DIAAS scores, and broccoli doesn&apos;t fare well on those scales
          compared to animal proteins or edamame.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          What &quot;complete protein&quot; really means for daily eating is whether a single food can cover
          all your amino acid needs reliably. Broccoli can&apos;t do that alone. But pair it with
          legumes, grains, or eggs and those gaps close easily.
        </p>

        {/* H2: Broccoli vs Chicken, Eggs, and Other Vegetables */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Broccoli vs Chicken, Eggs, and Other Vegetables
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          There&apos;s a viral claim that broccoli has more protein than steak. Per calorie, technically
          true. Broccoli runs about 8.3g of protein per 100 calories (USDA FDC ID 170379). Steak
          scores lower on that same metric. So yes, equal calories, broccoli &quot;wins.&quot;
        </p>
        <p className="text-deepForest leading-relaxed mb-6">
          But here&apos;s the number that actually lands:{' '}
          <strong>to get 20g of protein from broccoli, you&apos;d need to eat 700g of it.</strong>{' '}
          That same 20g from steak? About 80g of meat. The per-calorie comparison looks clever on
          paper. It&apos;s just not how anyone eats.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-4 py-2 text-left font-medium">Food</th>
                <th className="px-4 py-2 text-left font-medium">Protein per 100g</th>
                <th className="px-4 py-2 text-left font-medium">Calories per 100g</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={i}
                  className={
                    row.highlight
                      ? 'bg-greenTint font-semibold'
                      : i % 2 === 0
                      ? 'bg-white'
                      : 'bg-gray-50'
                  }
                >
                  <td className="px-4 py-2 text-deepForest border-b border-greenTint">
                    {row.food}
                  </td>
                  <td className="px-4 py-2 text-forest font-medium border-b border-greenTint">
                    {row.protein}
                  </td>
                  <td className="px-4 py-2 text-sage border-b border-greenTint">
                    {row.calories}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-sage mb-6">Source: USDA FoodData Central</p>

        <p className="text-deepForest leading-relaxed mb-8">
          Broccoli, spinach, and kale all land within a tenth of a gram of each other. Edamame
          is where plant protein becomes genuinely practical for hitting daily targets.
        </p>

        {/* H2: Does Cooking Broccoli Change Its Protein? */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Does Cooking Broccoli Change Its Protein?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          The protein itself doesn&apos;t break down from heat. What changes is water content, which
          shifts the protein per cup. A cup of steamed broccoli is heavier and more compact than
          raw, so you&apos;re getting more grams of food and more protein per cup.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          Where boiling can matter is water-soluble content. When you boil broccoli and discard
          the water, some amino acids and vitamins leach into the cooking liquid. Steaming keeps
          more intact. I steam almost everything now anyway, and the texture is better. When I do
          boil broccoli, I use it in soups where the water becomes the broth.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          For more detail, the{' '}
          <Link href="/nutrition/raw-vs-cooked" className="text-forest hover:underline font-medium">
            raw vs cooked nutrients
          </Link>{' '}
          page covers how cooking method affects what you absorb. Broccoli&apos;s{' '}
          <Link href="/nutrition/fiber" className="text-forest hover:underline font-medium">
            fiber content
          </Link>{' '}
          holds up well across methods too.
        </p>

        {/* H2: Should You Eat Broccoli for Protein? */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
          Should You Eat Broccoli for Protein?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Honestly, no. Not as a primary source. I stopped counting the tiny trees toward
          Adam&apos;s protein goals a while ago. The number is real, just not big enough to plan around.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          What broccoli does brilliantly is everything else. Vitamin C at 89.2mg per 100g, which
          is 99% of the daily value. Vitamin K at 102mcg per 100g, 85% of daily value. Fiber,
          folate, sulforaphane from the glucoraphanin that activates when you cut or chew it
          (USDA FDC ID 170379). These are the reasons broccoli belongs on the plate. Protein is
          a bonus, not the argument.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          When Alfi needs more protein and doesn&apos;t want meat, I&apos;m reaching for eggs, edamame, or
          beans and rice together, not loading up on broccoli. That&apos;s the honest redirect.
        </p>
        <p className="text-deepForest leading-relaxed mb-10">
          If you want to see how chicken and broccoli actually work together to hit protein
          targets, the{' '}
          <Link
            href="/recipes/chicken/chicken-broccoli"
            className="text-forest hover:underline font-medium"
          >
            chicken and broccoli
          </Link>{' '}
          page explains why that combination became the bodybuilder default.
        </p>

        {/* FAQ Section */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">FAQ</h2>
        <div className="space-y-6 mb-10">
          {[
            {
              q: 'How much protein is in 100g of broccoli?',
              a: '2.82g per 100g raw, per USDA FoodData Central (FDC ID 170379). A cup of raw chopped broccoli gives about 2.5g. Cooked broccoli is denser per cup, so you get slightly more.',
            },
            {
              q: 'Is broccoli a good source of protein?',
              a: 'Not primarily. A cup gives you about 2.5g. Eat broccoli for vitamin C, vitamin K, fiber, and sulforaphane. Plan your protein around other foods.',
            },
            {
              q: 'Does broccoli have more protein than steak?',
              a: 'Per calorie, yes. But to match 20g of protein from a small steak serving (about 80g), you\'d need 700g of broccoli. In real eating terms, no comparison.',
            },
            {
              q: 'Is broccoli a complete protein?',
              a: 'It has all 9 essential amino acids but is low in methionine and scores poorly on PDCAAS and DIAAS scales. In practice, it\'s not a complete protein source on its own. Pair with legumes or eggs to round it out.',
            },
            {
              q: 'How much broccoli do I need to eat to get 20g of protein?',
              a: 'About 700g, or roughly 7-8 cups raw. For practical protein, pair broccoli with edamame, lentils, or eggs instead.',
            },
          ].map((item, i) => (
            <div key={i} className="border-b border-greenTint pb-6">
              <h3 className="font-semibold text-deepForest mb-2">{item.q}</h3>
              <p className="text-sage leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Internal navigation */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-greenTint">
          <Link
            href="/nutrition"
            className="text-sm text-forest font-semibold hover:underline"
          >
            &#8592; Full Nutrition Facts
          </Link>
          <Link
            href="/nutrition/fiber"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Fiber in Broccoli &#8594;
          </Link>
          <Link
            href="/nutrition/raw-vs-cooked"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Raw vs Cooked &#8594;
          </Link>
          <Link
            href="/recipes/chicken/chicken-broccoli"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Chicken and Broccoli Recipe &#8594;
          </Link>
        </div>
      </article>
    </>
  )
}
