import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Vitamins and Minerals: The Numbers That Surprised Me',
  description:
    'Broccoli has 68% more vitamin C than an orange, 85% of your daily vitamin K, and calcium that absorbs better than spinach. Full breakdown with USDA FDC 170379 data and cooking tips from a mom of two.',
  keywords: [
    'broccoli vitamins and minerals',
    'broccoli vitamin c',
    'broccoli vitamin k',
    'broccoli nutrition',
    'broccoli minerals',
    'vitamins in broccoli',
  ],
  openGraph: {
    title: 'Broccoli Vitamins and Minerals: The Numbers That Surprised Me',
    description:
      'One 100g serving has 89.2mg of vitamin C (more than an orange), 102mcg of vitamin K, 63mcg of folate, and 316mg of potassium. USDA data, plus what cooking does to each one.',
    images: [
      {
        url: '/images/broccoli-vitamins/broccoli-vitamins-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Raw broccoli florets beside a halved orange on a wooden chopping board',
      },
    ],
  },
}

// WikiData-linked entities from TextRazor extraction (entities.json)
const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/nutrition/vitamins#article',
      headline: 'Broccoli Vitamins and Minerals: The Numbers That Surprised Me',
      description:
        'Complete vitamin and mineral profile of broccoli — vitamin C 89.2mg, vitamin K 102mcg, folate 63mcg, potassium 316mg — with cooking method impact and practical context for families.',
      image: 'https://broccolipedia.com/images/broccoli-vitamins/broccoli-vitamins-hero-broccoli-feature.webp',
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
      mainEntityOfPage: 'https://broccolipedia.com/nutrition/vitamins',
      about: {
        '@type': 'Thing',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      mentions: [
        { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
        { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/wiki/Q182338' },
        { '@type': 'Thing', name: 'Folate', sameAs: 'https://www.wikidata.org/wiki/Q127060' },
        { '@type': 'Thing', name: 'Potassium', sameAs: 'https://www.wikidata.org/wiki/Q703' },
        { '@type': 'Thing', name: 'Calcium', sameAs: 'https://www.wikidata.org/wiki/Q706' },
        { '@type': 'Thing', name: 'Iron', sameAs: 'https://www.wikidata.org/wiki/Q677' },
        { '@type': 'Thing', name: 'Lutein', sameAs: 'https://www.wikidata.org/wiki/Q422067' },
        { '@type': 'Thing', name: 'Zeaxanthin', sameAs: 'https://www.wikidata.org/wiki/Q169337' },
        { '@type': 'Thing', name: 'Beta-Carotene', sameAs: 'https://www.wikidata.org/wiki/Q306135' },
        { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
        { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
        { '@type': 'Thing', name: 'Spinach', sameAs: 'https://www.wikidata.org/wiki/Q81464' },
        { '@type': 'Thing', name: 'Manganese', sameAs: 'https://www.wikidata.org/wiki/Q731' },
        { '@type': 'Thing', name: 'Steaming', sameAs: 'https://www.wikidata.org/wiki/Q1415859' },
        { '@type': 'Thing', name: 'Macular Degeneration', sameAs: 'https://www.wikidata.org/wiki/Q27429789' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '.cooking-method-speakable'],
      },
      citation: [
        {
          '@type': 'CreativeWork',
          name: 'USDA FoodData Central — Broccoli, raw (FDC ID 170379)',
          url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379',
        },
        {
          '@type': 'ScholarlyArticle',
          name: 'Dietary calcium: adequacy of a vegetarian diet',
          author: 'Weaver CM, Plawecki KL',
          datePublished: '1994',
          isPartOf: 'American Journal of Clinical Nutrition',
          identifier: 'PMID:8172127',
        },
        {
          '@type': 'ScholarlyArticle',
          name: 'Effect of different cooking methods on the content of vitamins and true retention in selected vegetables',
          author: 'Zeng H et al.',
          datePublished: '2020',
          identifier: 'PMID:32328271',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/nutrition/vitamins#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What vitamins is broccoli high in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Broccoli is highest in vitamin C (89.2mg per 100g, 99% DV), vitamin K (102mcg, 85% DV), and folate (63mcg, 16% DV). It also provides beta-carotene as a vitamin A precursor, vitamin B6, riboflavin, and vitamin E. Source: USDA FDC 170379.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does cooking broccoli destroy its vitamins?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Boiling can reduce vitamin C by up to 50% as it leaches into the water. Steaming preserves the most nutrients overall. Vitamin K is stable across most cooking methods. For sulforaphane production, chop broccoli and wait 40 minutes before applying heat so the myrosinase enzyme can complete conversion. Source: Zeng et al. 2020, PubMed 32328271.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is broccoli a good calcium source for people avoiding dairy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research suggests broccoli\'s calcium absorbs at about 53%, much higher than spinach which averages around 5% due to oxalate interference. Broccoli provides 47mg of calcium per 100g. Source: Weaver et al. 1990, American Journal of Clinical Nutrition.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I feel good after eating broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Several mechanisms are at work. Fiber feeds beneficial gut bacteria. Sulforaphane activates antioxidant pathways via Nrf2 signaling. Vitamin C supports immune function and collagen synthesis. Potassium helps regulate blood pressure and fluid balance. The effect is cumulative, not instant.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/nutrition/vitamins#breadcrumb',
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
          name: 'Vitamins and Minerals',
          item: 'https://broccolipedia.com/nutrition/vitamins',
        },
      ],
    },
  ],
}

export default function BroccoliVitaminsPage() {
  return (
    <EditorialTemplate
      title="Broccoli Vitamins and Minerals: The Numbers That Surprised Me"
      description="Alfi called them tiny trees. Adam ate them because he thought that was hilarious. Then I looked up what is actually inside those tiny trees, and I genuinely was not prepared."
      image="/images/broccoli-vitamins/broccoli-vitamins-hero-broccoli-feature.webp"
      imageAlt="Raw broccoli florets beside a halved orange on a light wooden chopping board"
      keyTakeaways={[
        'Broccoli has 89.2mg of vitamin C per 100g — 68% more than an orange (USDA FDC 170379)',
        'Vitamin K at 102mcg covers 85% of the daily requirement in a single cup of raw florets',
        'Broccoli\'s calcium absorbs at ~53%; spinach gets only ~5% through due to oxalate interference (Weaver et al. 1990)',
        'Steaming causes the least vitamin loss; boiling cuts vitamin C by up to 50% (PubMed 32328271)',
        'Chop broccoli and wait 40 minutes before cooking to activate sulforaphane production before heat destroys the enzyme',
        'At ~$0.40 per cup, broccoli is one of the most affordable high-nutrient vegetables available',
      ]}
      sections={[
        {
          heading: 'What Vitamins Is Broccoli High In?',
          body: `<p class="quick-answer" style="background:#f0f7f0;border-left:4px solid #2d6a4f;padding:1rem;margin-bottom:1.25rem;border-radius:0 8px 8px 0;font-size:0.95rem;">
<strong>Quick answer:</strong> Broccoli is highest in vitamin C (89.2mg per 100g, nearly twice an orange), vitamin K (102mcg, 85% of the daily value), and folate (63mcg). It also contains potassium (316mg), calcium (47mg), iron, manganese, and beta-carotene. All figures from USDA FDC 170379.
</p>
<p>The headline numbers: 89.2mg of vitamin C per 100g raw, 102mcg of vitamin K, and 63mcg of folate. (USDA FDC 170379)</p>
<p>An orange contains 53mg of vitamin C per 100g. (USDA SR Legacy) Broccoli has 68% more. I grew up thinking vitamin C meant citrus, and it turns out that was just the marketing.</p>
<p>Vitamin K is where broccoli really stands apart. One cup of raw florets covers 85% of your daily requirement, and most people do not think about vitamin K at all. It handles blood clotting and plays a direct role in bone metabolism. Cooking with a drizzle of olive oil helps absorption, since vitamin K is fat-soluble.</p>
<p>Folate (vitamin B9) comes in at 63mcg per 100g. (USDA FDC 170379) It matters most during pregnancy but is useful year-round for DNA production and red blood cell formation. For a vegetable you are already eating, it is a real contribution.</p>
<p>Beta-carotene converts to vitamin A in the body, and broccoli has meaningful amounts. Plus lutein and zeaxanthin at 1,400mcg per 100g. (USDA FDC 170379) Those two accumulate in the retina and are linked to reduced macular degeneration risk.</p>`,
          table: {
            headers: ['Vitamin', 'Amount per 100g raw', '% Daily Value', 'Source'],
            rows: [
              ['Vitamin C', '89.2mg', '99%', 'USDA FDC 170379'],
              ['Vitamin K', '102mcg', '85%', 'USDA FDC 170379'],
              ['Folate (B9)', '63mcg', '16%', 'USDA FDC 170379'],
              ['Lutein + Zeaxanthin', '1,400mcg', '—', 'USDA FDC 170379'],
              ['Beta-Carotene (Vitamin A)', '31mcg RAE', '3%', 'USDA FDC 170379'],
              ['Vitamin B6', '0.175mg', '10%', 'USDA FDC 170379'],
              ['Riboflavin (B2)', '0.117mg', '9%', 'USDA FDC 170379'],
              ['Vitamin E', '0.78mg', '5%', 'USDA FDC 170379'],
            ],
          },
          pullQuote: '89.2mg of vitamin C per 100g — 68% more than an orange at 53mg. USDA SR data.',
        },
        {
          heading: 'What Minerals Does Broccoli Contain?',
          body: `<p>Potassium sits at 316mg per 100g. (USDA FDC 170379) That matters because potassium deficiency is genuinely common, especially in families eating processed food most of the time. Potassium regulates fluid levels and supports blood pressure.</p>
<p>Calcium at 47mg per 100g looks modest, but absorption rate changes everything. Research suggests broccoli's calcium absorbs at roughly 53%. Spinach has more calcium on paper, but oxalate compounds block most of it from being used, bringing spinach to about 5% bioavailability. (Weaver et al. 1990, American Journal of Clinical Nutrition) For families avoiding dairy, broccoli is worth taking seriously.</p>
<p>Iron at 0.73mg per 100g (USDA FDC 170379) is especially relevant for women. It carries oxygen through the blood, and low iron is one of the more common deficiencies in females. Broccoli's vitamin C from the same meal may increase iron absorption from plant-based foods in that meal. A stir fry with tofu and broccoli is doing more work than it looks.</p>
<p>Manganese, magnesium, phosphorus, selenium, and zinc are present in smaller amounts and add up over consistent eating.</p>`,
          table: {
            headers: ['Mineral', 'Amount per 100g raw', 'Why it matters', 'Source'],
            rows: [
              ['Potassium', '316mg', 'Fluid regulation, blood pressure', 'USDA FDC 170379'],
              ['Calcium', '47mg (~53% absorbed)', 'Bone health, better than spinach', 'USDA FDC 170379; Weaver 1990'],
              ['Iron', '0.73mg', 'Oxygen transport; especially for women', 'USDA FDC 170379'],
              ['Manganese', '0.21mg', 'Enzyme function, bone formation', 'USDA FDC 170379'],
              ['Magnesium', '21mg', 'Muscle and nerve function', 'USDA FDC 170379'],
              ['Phosphorus', '66mg', 'Cell repair, energy metabolism', 'USDA FDC 170379'],
              ['Selenium', '2.5mcg', 'Antioxidant enzyme support', 'USDA FDC 170379'],
            ],
          },
          factBlock: {
            title: 'Calcium absorption: broccoli vs spinach',
            text: 'Spinach has more calcium per gram than broccoli, but oxalic acid in spinach binds to calcium and blocks absorption. Broccoli absorbs at ~53%, spinach at ~5%. (Weaver CM et al., Am J Clin Nutr, 1994) For dairy-free families, this distinction matters a lot.',
          },
        },
        {
          heading: 'Does Cooking Broccoli Destroy Its Vitamins?',
          body: `<div class="cooking-method-speakable">
<p>Short answer: it depends on which vitamin and how you cook it.</p>
<p>Vitamin C takes the biggest hit from heat. Boiling can cut it by roughly half as the water-soluble vitamin leaches out. Steaming is the better option. Research suggests steaming causes the least overall nutrient loss because the vegetables sit above the water, not in it. (Zeng et al. 2020, PubMed 32328271)</p>
<p>Vitamin K is more stable and survives most cooking methods without significant loss.</p>
<p>There is also the sulforaphane question. Sulforaphane is not present in broccoli directly. The enzyme myrosinase converts glucoraphanin into sulforaphane when you cut or chew the broccoli. Boiling for more than a minute destroys myrosinase before the conversion can happen. (Zeng et al. 2020, PubMed 32328271) The fix: chop broccoli and let it sit for 40 minutes before applying heat. The conversion happens first, then cooking.</p>
</div>`,
          table: {
            headers: ['Cooking method', 'Vitamin C retention', 'Sulforaphane', 'Verdict'],
            rows: [
              ['Raw', '100%', 'Full potential (chop + chew)', 'Best for C + sulforaphane'],
              ['Steaming (5 min)', '~80–90%', 'Good if chopped first', 'Best cooked method'],
              ['Microwaving', '~75%', 'Moderate', 'Practical option'],
              ['Stir frying', '~60%', 'Moderate', 'Good flavour trade-off'],
              ['Boiling', '~50%', 'Minimal (myrosinase destroyed)', 'Least recommended'],
            ],
          },
          factBlock: {
            title: 'The 40-minute rule for sulforaphane',
            text: 'Chop broccoli and wait 40 minutes before cooking. This allows myrosinase to fully convert glucoraphanin into sulforaphane before heat deactivates the enzyme. Adding a small amount of mustard powder to cooked broccoli also restores sulforaphane production.',
          },
        },
        {
          heading: 'Is Raw Broccoli More Nutritious Than Cooked?',
          body: `<p>Raw wins on vitamin C and sulforaphane potential. Cooked wins on digestibility for some people.</p>
<p>Adam eats it raw with hummus. Alfi refuses raw vegetables on principle, so for him it goes in the oven with olive oil and salt. I am not going to argue with either outcome. Both boys are getting good nutrition, and that is the actual goal.</p>
<p>If you want maximum vitamin C, raw or steamed is the move. If getting vegetables into your family is the priority, roasted works fine. The olive oil on roasted broccoli also helps with fat-soluble vitamin K and beta-carotene absorption.</p>`,
        },
        {
          heading: 'How Much Broccoli Should You Eat Per Day?',
          body: `<p>One to two cups of florets, roughly 90g to 180g, covers most of what broccoli offers nutritionally. One cup raw already exceeds your full daily vitamin C requirement and covers most of your vitamin K.</p>
<p>At around $0.40 per cup, it is one of the most affordable ways to add real nutrient density to a meal. I serve it four or five times a week. Stir fry, side dish, or just Alfi picking florets off a plate while I cook. All of it counts.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'What vitamins is broccoli high in?',
          answer: 'Broccoli is highest in vitamin C (89.2mg per 100g, 99% DV), vitamin K (102mcg, 85% DV), and folate (63mcg, 16% DV). It also provides beta-carotene as a vitamin A precursor, vitamin B6, riboflavin, and vitamin E. Source: USDA FDC 170379.',
        },
        {
          question: 'Does cooking broccoli destroy its vitamins?',
          answer: 'Boiling can reduce vitamin C by up to 50%. Steaming preserves the most nutrients overall. Vitamin K is stable across most cooking methods. For sulforaphane, chop broccoli and wait 40 minutes before applying heat so myrosinase completes conversion before heat deactivates it. Source: Zeng et al. 2020, PubMed 32328271.',
        },
        {
          question: 'Is broccoli a good calcium source for people avoiding dairy?',
          answer: 'Research suggests broccoli\'s calcium absorbs at about 53%, much higher than spinach which averages around 5% due to oxalate interference. Broccoli provides 47mg of calcium per 100g. Source: Weaver et al. 1990, American Journal of Clinical Nutrition.',
        },
        {
          question: 'Why do I feel good after eating broccoli?',
          answer: 'Several things are happening. Fiber feeds beneficial gut bacteria. Sulforaphane activates antioxidant pathways. Vitamin C supports immune function. Potassium helps regulate blood pressure and fluid balance. The effect is cumulative, not instant.',
        },
      ]}
      related={[
        {
          title: 'Raw vs Cooked Broccoli: Which Wins on Nutrients?',
          href: '/nutrition/raw-vs-cooked',
          image: '/images/nutrition/raw-vs-cooked-broccoli.webp',
          description: 'The science behind the 40-minute chop trick, microwaving, and what boiling actually destroys.',
        },
        {
          title: 'Broccoli Sprouts: 20-50x More Sulforaphane',
          href: '/nutrition/sprouts',
          image: '/images/nutrition/broccoli-sprouts.webp',
          description: 'The Johns Hopkins discovery that broccoli sprouts contain dramatically more glucoraphanin than mature florets.',
        },
        {
          title: 'Full Broccoli Nutrition Facts',
          href: '/nutrition',
          image: '/images/nutrition/broccoli-nutrition-facts.webp',
          description: 'Complete USDA data: calories, protein, fiber, vitamins, minerals per 100g and per cup.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
