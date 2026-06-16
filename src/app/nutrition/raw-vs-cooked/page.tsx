import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
  description:
    'Raw broccoli wins for vitamin C and sulforaphane. Cooked wins for carotenoid bioavailability. The hack-and-hold technique, the frozen broccoli problem, and the mustard powder fix — explained.',
  keywords: [
    'raw vs cooked broccoli',
    'raw broccoli nutrition',
    'is raw broccoli better than cooked',
    'healthiest way to cook broccoli',
    'sulforaphane cooking',
    'hack and hold broccoli technique',
  ],
  openGraph: {
    title: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
    description:
      'Raw broccoli wins for vitamin C and sulforaphane. Cooked wins for carotenoid bioavailability. The hack-and-hold technique, the frozen broccoli problem, and the mustard powder fix.',
    type: 'article',
    url: 'https://broccolipedia.com/nutrition/raw-vs-cooked',
    images: [
      {
        url: '/images/raw-vs-cooked-broccoli/raw-vs-cooked-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 675,
        alt: 'Two bowls side by side — raw broccoli florets on the left, lightly steamed on the right',
      },
    ],
    publishedTime: '2026-06-16T00:00:00+08:00',
    modifiedTime: '2026-06-16T00:00:00+08:00',
    authors: ['https://broccolipedia.com/about#elena-ignacio'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
    description:
      'Raw wins for sulforaphane. Cooked wins for carotenoids. The hack-and-hold method and the mustard powder fix change everything.',
    images: ['/images/raw-vs-cooked-broccoli/raw-vs-cooked-broccoli-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/nutrition/raw-vs-cooked',
  },
}

// WikiData-linked entities from TextRazor extraction (top entities by relevance)
const wikidataEntities = [
  { id: 'Q47722',  name: 'Broccoli',        url: 'https://www.wikidata.org/wiki/Q47722'  },
  { id: 'Q424489', name: 'Sulforaphane',     url: 'https://www.wikidata.org/wiki/Q424489' },
  { id: 'Q1415859',name: 'Steaming',         url: 'https://www.wikidata.org/wiki/Q1415859'},
  { id: 'Q416212', name: 'Myrosinase',       url: 'https://www.wikidata.org/wiki/Q416212' },
  { id: 'Q199678', name: 'Vitamin C',        url: 'https://www.wikidata.org/wiki/Q199678' },
  { id: 'Q182338', name: 'Vitamin K',        url: 'https://www.wikidata.org/wiki/Q182338' },
  { id: 'Q41716',  name: 'Boiling',          url: 'https://www.wikidata.org/wiki/Q41716'  },
  { id: 'Q5572329',name: 'Glucoraphanin',    url: 'https://www.wikidata.org/wiki/Q5572329'},
  { id: 'Q8047',   name: 'Enzyme',           url: 'https://www.wikidata.org/wiki/Q8047'   },
  { id: 'Q416883', name: 'Glucosinolate',    url: 'https://www.wikidata.org/wiki/Q416883' },
  { id: 'Q191907', name: 'Carotenoid',       url: 'https://www.wikidata.org/wiki/Q191907' },
  { id: 'Q461809', name: 'Bioavailability',  url: 'https://www.wikidata.org/wiki/Q461809' },
  { id: 'Q306135', name: 'Beta-Carotene',    url: 'https://www.wikidata.org/wiki/Q306135' },
  { id: 'Q422067', name: 'Lutein',           url: 'https://www.wikidata.org/wiki/Q422067' },
  { id: 'Q169337', name: 'Zeaxanthin',       url: 'https://www.wikidata.org/wiki/Q169337' },
  { id: 'Q127060', name: 'Folate',           url: 'https://www.wikidata.org/wiki/Q127060' },
  { id: 'Q8980672',name: 'Stir frying',      url: 'https://www.wikidata.org/wiki/Q8980672'},
  { id: 'Q26545',  name: 'Horseradish',      url: 'https://www.wikidata.org/wiki/Q26545'  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/nutrition/raw-vs-cooked#article',
  headline: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
  description:
    'Raw broccoli preserves more vitamin C and sulforaphane. Cooked broccoli increases bioavailability of lutein, zeaxanthin, and beta-carotene. The hack-and-hold technique, the frozen broccoli problem, and the mustard powder fix explained.',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/raw-vs-cooked-broccoli/raw-vs-cooked-broccoli-hero-broccoli-feature.webp',
    width: 1200,
    height: 675,
    caption: 'Raw broccoli florets and lightly steamed broccoli side by side',
  },
  datePublished: '2026-06-16T00:00:00+08:00',
  dateModified: '2026-06-16T00:00:00+08:00',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/nutrition/raw-vs-cooked',
  },
  mentions: wikidataEntities.map((e) => ({
    '@type': 'Thing',
    name: e.name,
    sameAs: e.url,
  })),
  about: [
    { '@type': 'Thing', name: 'Broccoli nutrition', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
    { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
    { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
  ],
  citation: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Effects of different cooking methods on health-promoting compounds of broccoli',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2722699/',
      author: [{ '@type': 'Person', name: 'Yuan G' }, { '@type': 'Person', name: 'Sun B' }],
      datePublished: '2009',
      publisher: { '@type': 'Organization', name: 'Journal of Zhejiang University Science B' },
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'Microwave heating and sulforaphane yield in broccoli',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32328271/',
      datePublished: '2020',
      publisher: { '@type': 'Organization', name: 'Food Science and Nutrition (Wiley)' },
    },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer', '.speakable-tip'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is raw broccoli better for you than cooked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For vitamin C and sulforaphane, raw wins. For lutein, zeaxanthin, beta-carotene, and digestibility, lightly cooked wins. The practical answer is to vary how you eat it — raw a few times a week using the hack-and-hold technique, and lightly steamed with a fat source for carotenoids.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the worst way to cook broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boiling in a large pot of water for more than a minute or two. It leaches water-soluble vitamins into the water and destroys myrosinase. Save the cooking water if you go this route.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I restore sulforaphane to cooked or frozen broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sprinkle a quarter teaspoon of dry mustard powder on your cooked or frozen broccoli after removing from heat. Mustard seeds contain active myrosinase that converts glucoraphanin into sulforaphane even after the broccoli itself has been fully cooked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does microwaving broccoli destroy nutrients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Less than most people think. Short bursts with minimal water preserve vitamin C well, and moderate microwave heating can raise sulforaphane yield by approximately 80% compared to conventional cooking methods (PubMed 32328271, 2020). Short time, low power, very little added water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is frozen broccoli as nutritious as fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most vitamins, yes. For sulforaphane, no. Blanching before freezing kills the myrosinase enzyme. A quarter teaspoon of dry mustard powder added after cooking restores some sulforaphane production even in fully cooked or frozen broccoli.',
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
      name: 'Raw vs Cooked Broccoli',
      item: 'https://broccolipedia.com/nutrition/raw-vs-cooked',
    },
  ],
}

// Combined schema graph
const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function RawVsCookedPage() {
  return (
    <EditorialTemplate
      title="Raw vs Cooked Broccoli: Which Has More Nutrients?"
      description="Back in 2022, Adam only ate broccoli one way — raw from the bag. That led me down a research rabbit hole about sulforaphane, enzymes, and why the answer is more interesting than anyone tells you."
      image="/images/raw-vs-cooked-broccoli/raw-vs-cooked-broccoli-hero-broccoli-feature.webp"
      imageAlt="Two bowls side by side — raw broccoli florets on the left, lightly steamed on the right, on a wooden kitchen surface"
      keyTakeaways={[
        'Raw broccoli gives 89.2mg of vitamin C per 100g and keeps myrosinase active for sulforaphane production (USDA FDC 170379)',
        'Steaming causes the lowest loss of glucosinolates across all cooking methods (Yuan et al. 2009, PMC2722699)',
        'Moderate microwave heating raises sulforaphane yield by approximately 80% vs conventional methods (PubMed 32328271)',
        'Hack-and-hold: chop broccoli first, wait 40 minutes, then cook — sulforaphane forms before heat arrives',
        'Commercially frozen broccoli is blanched before freezing; the enzyme is dead and it produces near-zero sulforaphane',
        'Quarter teaspoon of dry mustard powder added after cooking restores sulforaphane production in cooked or frozen broccoli',
        'Lutein, zeaxanthin, and beta-carotene are more bioavailable from lightly cooked broccoli eaten with a fat source',
      ]}
      sections={[
        {
          heading: 'Is It Healthier to Eat Broccoli Cooked or Uncooked?',
          body: `<p>Back in 2022, Adam decided he would only eat broccoli one way: straight from the bag, raw, dunked in hummus. I let it go. He was eating broccoli and that was enough. But then I read something about sulforaphane and started spiraling at 11pm over PubMed abstracts about enzymes. My real worry: was steaming it for dinner actually making it worse than Adam's bag method?</p>
<p class="quick-answer" style="background:#f0faf0;border-left:4px solid #2d6a2d;padding:1rem 1.25rem;margin:1.5rem 0;border-radius:0 8px 8px 0;font-size:0.97rem;line-height:1.65">
<strong>Quick Answer:</strong> Both raw and cooked broccoli have genuine nutritional value. Raw preserves more vitamin C and produces more sulforaphane. Lightly steamed or microwaved broccoli increases the bioavailability of lutein, zeaxanthin, and beta-carotene. Boiling is the one method that hurts almost everything.
</p>
<p>Raw broccoli gives you 89.2mg of vitamin C per 100g — more than an orange at 53mg per 100g (USDA FDC 170379). It also keeps myrosinase active, the enzyme needed to convert glucoraphanin into sulforaphane, which is the compound most of the interesting broccoli research actually studies.</p>
<p>Cooked broccoli is denser, so a single cup carries more total nutrients by weight. One cup cooked delivers 101mg vitamin C (112% DV), 110mcg vitamin K (92% DV), 168mcg folate (42% DV), and 5g fiber (USDA FDC 169967). Those numbers look bigger because there is simply more broccoli per cup after it softens.</p>
<p>The real split: raw wins for sulforaphane potential and vitamin C per gram. Cooked wins for carotenoid bioavailability and digestibility. Neither is flatly better.</p>`,
        },
        {
          heading: 'What Nutrients Does Cooking Destroy in Broccoli?',
          body: `<p>The two most vulnerable are vitamin C and myrosinase.</p>
<p>Vitamin C is water-soluble and heat-sensitive. Boiling cuts it by up to 50%, with most leaching straight into the cooking water rather than into you. Myrosinase is an enzyme — and enzymes are proteins. Heat above roughly 70°C denatures it. No myrosinase, no sulforaphane. The chain is: glucoraphanin plus myrosinase, triggered by chopping or chewing, produces sulforaphane. Kill the enzyme, break the chain.</p>
<p>Vitamin K is stable across all cooking methods. Folate and fiber are largely retained with quick cooking.</p>`,
          table: {
            headers: ['Nutrient', 'Raw per 100g', 'Cooked per cup', 'Heat Stability'],
            rows: [
              ['Vitamin C', '89.2mg (99% DV)', '101mg (112% DV)', 'Low'],
              ['Vitamin K', '102mcg (85% DV)', '110mcg (92% DV)', 'High'],
              ['Folate', '63mcg (16% DV)', '168mcg (42% DV)', 'Medium'],
              ['Fiber', '2.6g', '5g', 'High'],
              ['Sulforaphane activity', 'High', 'Low to none', 'Enzyme-dependent'],
            ],
          },
          factBlock: {
            title: 'USDA FDC Sources',
            text: 'Raw broccoli data: USDA FDC ID 170379. Cooked broccoli (boiled) data: USDA FDC ID 169967, corroborated by UPMC HealthBeat (2024).',
          },
        },
        {
          heading: 'What Is the Healthiest Way to Cook Broccoli?',
          body: `<p>Steaming causes the lowest loss of glucosinolates compared to boiling, stir-frying, and the stir-fry-then-boil method. Yuan et al. (2009) tested five cooking methods on broccoli and concluded steaming was optimal for preserving health-promoting compounds (Journal of Zhejiang University Science B, PMC2722699, cited 389 times).</p>
<p>Microwaving is the counterintuitive one. A 2020 study in Food Science and Nutrition found that moderate microwave heating at around 60°C raised sulforaphane yield by approximately 80% compared to conventional heating methods (PubMed 32328271). Low-to-moderate heat briefly accelerates myrosinase before the temperature crosses 70°C and the enzyme stops working. Short burst, minimal water, and you can actually get more sulforaphane from microwaved broccoli than raw if the timing is right.</p>
<p>Boiling is the worst option. Water-soluble vitamins leach directly into the water. If you must boil, save the cooking liquid and add it to a soup — most of the vitamin C went in there.</p>`,
          factBlock: {
            title: 'Cooking Method Ranking for Sulforaphane',
            text: 'Best to worst: hack-and-hold then microwave (moderate) → steam (2–3 min) → raw (no wait) → stir-fry (brief) → boil → frozen (without fix). Boiling and blanched-frozen produce near-zero sulforaphane.',
          },
        },
        {
          heading: 'Does Cooking Destroy Sulforaphane in Broccoli?',
          body: `<p>Sulforaphane is not pre-formed inside broccoli. It does not exist until you break a cell wall by cutting or chewing. That physical damage causes glucoraphanin and myrosinase to mix, and the conversion begins. At room temperature, it takes about 40 minutes to peak.</p>
<p>When you cook immediately after cutting, heat kills the enzyme before the reaction finishes. Cook-first, blend-after has the same problem.</p>
<p>The fix is the hack-and-hold technique. Chop the broccoli first. Leave it for 40 minutes. Then cook. The sulforaphane is already formed before heat arrives, and it survives light cooking (NutritionFacts.org, wsN8x0BWcyE). I reorganized my weeknight prep around this: cut the broccoli first, set it aside, start the rest of dinner, add the broccoli last.</p>`,
          pullQuote: 'Cut broccoli first. Walk away for 40 minutes. Cook it last. That single habit is worth more than any supplement.',
        },
        {
          heading: 'What About Frozen Broccoli?',
          body: `<p>Commercially frozen broccoli is blanched before freezing. That step deactivates enzymes to extend shelf life. The myrosinase is already gone before the bag ever reaches your freezer. The glucoraphanin survived, but has no enzyme to work with, so frozen broccoli produces essentially zero sulforaphane (NutritionFacts.org, wsN8x0BWcyE).</p>
<p>I used to default to frozen for weeknight dinners with Alfi. Now I know that for sulforaphane specifically, frozen is a dead end unless you use the mustard powder fix.</p>
<p class="speakable-tip">A quarter teaspoon of dry mustard powder per 7 cups of cooked or frozen broccoli, added after cooking, restores sulforaphane production. Mustard seeds contain active myrosinase that converts remaining glucoraphanin even after the broccoli has been fully cooked. You can also mix in a small handful of fresh raw broccoli, or add grated daikon or horseradish — all cruciferous, all packed with myrosinase.</p>`,
          factBlock: {
            title: 'Other Myrosinase Sources',
            text: 'Mustard powder · daikon radish · horseradish · wasabi · raw mustard greens. A small amount of any of these added to cooked or frozen broccoli restores sulforaphane production.',
          },
        },
        {
          heading: 'What Cooking Actually Does Better Than Raw',
          body: `<p>Lutein, zeaxanthin, and beta-carotene are fat-soluble carotenoids. Raw broccoli contains 1,400mcg of lutein and zeaxanthin per 100g (USDA FDC 170379). These matter for eye health. But fat-soluble compounds absorb better when cell walls are softened and fat is present. Lightly steamed broccoli with a drizzle of olive oil delivers more bioavailable carotenoids than the same broccoli eaten raw without fat.</p>
<p>Digestibility is the other one. Raw broccoli's fiber structure and natural sugars cause bloating in some people. Light steaming softens that without significant nutrient loss. Honestly, this is the argument for cooked that most articles forget to make: bioavailability matters as much as content on paper.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'Is raw broccoli better for you than cooked?',
          answer:
            'For vitamin C and sulforaphane, raw wins. For lutein, zeaxanthin, beta-carotene, and digestibility, lightly cooked wins. The practical answer: eat raw a few times a week using the hack-and-hold technique, and lightly steam with a fat source for carotenoids.',
        },
        {
          question: 'What is the worst way to cook broccoli?',
          answer:
            'Boiling in a large pot of water for more than a minute or two. It leaches water-soluble vitamins into the water and destroys myrosinase. Save the cooking water if you go this route — put it in soup or use it as a base.',
        },
        {
          question: 'Can I restore sulforaphane to cooked or frozen broccoli?',
          answer:
            'Yes. Sprinkle a quarter teaspoon of dry mustard powder on your cooked or frozen broccoli after removing from heat. Mustard seeds contain active myrosinase that converts glucoraphanin into sulforaphane even after the broccoli itself has been fully cooked (NutritionFacts.org).',
        },
        {
          question: 'Does microwaving broccoli destroy nutrients?',
          answer:
            'Less than most people think. Short bursts with minimal water preserve vitamin C well, and moderate microwave heating can raise sulforaphane yield by approximately 80% compared to conventional cooking methods (PubMed 32328271, 2020). Short time, low power, very little added water.',
        },
        {
          question: 'Is frozen broccoli as nutritious as fresh?',
          answer:
            'For most vitamins, yes. For sulforaphane, no. Blanching before freezing kills the myrosinase enzyme. The mustard powder fix restores some sulforaphane production even in fully cooked or frozen broccoli.',
        },
      ]}
      related={[
        {
          title: 'How to Steam Broccoli Perfectly',
          href: '/how-to-cook/steam',
          image: '/images/how-to-cook/steam-broccoli-in-pot.webp',
          description: 'The nutrient-preserving method with exact timing and the sulforaphane science.',
        },
        {
          title: 'How to Microwave Broccoli',
          href: '/how-to-cook/microwave',
          image: '/images/how-to-cook/microwave-broccoli-bowl.webp',
          description: 'Why microwaving beats boiling and the right settings to use.',
        },
        {
          title: 'Broccoli Sprouts: 20 to 50 Times More Potent',
          href: '/nutrition/sprouts',
          image: '/images/nutrition/broccoli-sprouts-glass-jar.webp',
          description: 'If you want maximum sulforaphane, sprouts are the answer.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
