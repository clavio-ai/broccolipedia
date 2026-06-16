import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'How Long Does Broccoli Last in the Fridge? | BroccoliPedia',
  description:
    'Raw broccoli lasts 3 to 5 days in the fridge. Cut florets keep 3 to 4 days. Cooked broccoli stays fresh 3 to 5 days airtight. The water-vase method can extend life to 2 to 3 weeks.',
  keywords: [
    'how long does broccoli last in fridge',
    'how long does cooked broccoli last in the fridge',
    'how long does cut broccoli last in fridge',
    'how long does broccoli last in the freezer',
    'how to tell if broccoli has gone bad',
    'broccoli shelf life',
    'broccoli storage',
  ],
  openGraph: {
    title: 'How Long Does Broccoli Last in the Fridge?',
    description:
      'Raw broccoli lasts 3 to 5 days in the fridge. The water-vase method can push that to 2 to 3 weeks. Elena explains what actually works.',
    url: 'https://broccolipedia.com/storage/shelf-life',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-shelf-life/broccoli-shelf-life-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli stored upright in a mason jar with water inside a refrigerator',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/storage/shelf-life',
  },
}

// ── Schema JSON-LD ───────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Long Does Broccoli Last in the Fridge?',
  description:
    'Raw broccoli lasts 3 to 5 days in the fridge. Cut florets keep 3 to 4 days. Cooked broccoli stays fresh 3 to 5 days airtight. The water-vase method can extend freshness to 2 to 3 weeks.',
  url: 'https://broccolipedia.com/storage/shelf-life',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/broccoli-shelf-life/broccoli-shelf-life-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
    caption: 'Broccoli stored upright in a mason jar with water inside a home refrigerator',
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
      url: 'https://broccolipedia.com/images/broccolipedia-logo.png',
    },
  },
  // WikiData-linked entities from TextRazor extraction
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Blanching (cooking)',
      sameAs: 'https://www.wikidata.org/wiki/Q506763',
    },
    {
      '@type': 'Thing',
      name: 'Crisper drawer',
      sameAs: 'https://www.wikidata.org/wiki/Q60761849',
    },
    {
      '@type': 'Thing',
      name: 'Chlorophyll',
      sameAs: 'https://www.wikidata.org/wiki/Q43177',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Food safety',
      sameAs: 'https://www.wikidata.org/wiki/Q909821',
    },
    {
      '@type': 'Thing',
      name: 'Mold',
      sameAs: 'https://www.wikidata.org/wiki/Q159341',
    },
    {
      '@type': 'Thing',
      name: 'Carbon dioxide',
      sameAs: 'https://www.wikidata.org/wiki/Q1997',
    },
    {
      '@type': 'Thing',
      name: 'Plastic bag',
      sameAs: 'https://www.wikidata.org/wiki/Q498439',
    },
    {
      '@type': 'Thing',
      name: 'Paper towel',
      sameAs: 'https://www.wikidata.org/wiki/Q1151042',
    },
  ],
  citation: [
    {
      '@type': 'WebPage',
      name: 'How Long Does Broccoli Last In the Fridge? (Food Network)',
      url: 'https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-long-does-broccoli-last-in-the-fridge',
    },
    {
      '@type': 'WebPage',
      name: 'The Best Ways to Store Broccoli (Mill.com, UC Davis postharvest guidance)',
      url: 'https://www.mill.com/blog/how-to-store-broccoli',
    },
    {
      '@type': 'WebPage',
      name: 'USDA FoodData Central: Broccoli, raw (FDC ID 170379)',
      url: 'https://nutritiondatahub.com/food/broccoli-raw-170379',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw broccoli lasts 3 to 5 days in the fridge when stored unwashed in a perforated plastic bag in the crisper drawer. A paper towel inside the bag absorbs extra moisture and helps it reach day 5 reliably. Do not wash it before storing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does cut broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cut broccoli florets last 3 to 4 days in an airtight container in the fridge. More surface area means faster moisture loss, so dry them thoroughly before storing and add a paper towel inside the container to absorb condensation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does cooked broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooked broccoli lasts 3 to 5 days in the fridge when stored in an airtight container. For food safety, consume it within 3 to 5 days. Seven days is too long. Bacterial growth can reach unsafe levels even without visible signs of spoilage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can broccoli last 2 weeks in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With standard crisper storage, no. One week is already pushing it. With the water-vase method (stem trimmed and standing in an inch of water, florets loosely covered, stored upright on a fridge shelf), broccoli can last 2 to 3 weeks. The stem keeps drawing water up and the plant stays hydrated from the inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 2-week-old broccoli okay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on storage. With the water-vase method and daily water changes, two-week broccoli can still be fresh. With standard crisper storage, two weeks is generally too long. Always check for sliminess, a strong sulfur smell, or visible mold rather than relying on the date alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you eat cooked broccoli after 7 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Food safety guidance recommends eating cooked broccoli within 3 to 5 days. At 7 days, bacterial growth in cooked vegetables at fridge temperatures can reach unsafe levels without obvious visual signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can you tell if broccoli has gone bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs in order of severity: (1) Yellow florets: safe to eat but past peak quality. (2) Limp, soft stems: past best but usable in cooked dishes. (3) Slimy florets: bacterial breakdown, discard. (4) Sharp sulfur smell: discard. (5) Visible mold: discard the whole head. Yellow does not automatically mean dangerous.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should you throw out broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Throw out broccoli when you see slimy florets, visible mold, or smell a sharp foul odor. Yellow florets alone are not a reason to discard. Trim the yellow parts and use the rest. When in doubt, smell it first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does broccoli last in the freezer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blanched broccoli keeps for 8 to 12 months in the freezer. You must blanch before freezing. Raw unblanched broccoli deteriorates even at freezer temperatures. Blanch in boiling water for 3 minutes, then ice bath for 3 minutes, dry thoroughly, freeze in a single layer, then transfer to sealed freezer bags.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to store broccoli in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 3 to 5 days: store unwashed in a loosely sealed perforated bag with a paper towel in the crisper drawer. For 2 to 3 weeks: use the water-vase method: trim the stem flat, stand it in an inch of water in a jar on a shelf, loosely cover the florets with a plastic bag, and change the water every day or two. Keep broccoli away from ethylene-producing fruits like apples and bananas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you wash broccoli before storing it in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Never wash broccoli before storing it. Moisture trapped in the florets creates the perfect environment for mold growth. Wash it right before you cook or eat it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the water-vase method really keep broccoli fresh longer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Broccoli is still biologically alive after harvest and continues to respire. Standing it stem-down in water lets the plant keep drawing moisture up through the stem, extending freshness to 2 to 3 weeks versus the standard 3 to 5 days. Jerry James Stone\'s YouTube video on this method has over 209,000 views. Change the water every day or two.',
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
      item: 'https://broccolipedia.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Storage',
      item: 'https://broccolipedia.com/storage',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How Long Does Broccoli Last in the Fridge?',
      item: 'https://broccolipedia.com/storage/shelf-life',
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer'],
}

// ── Content ──────────────────────────────────────────────────────────────────

const keyTakeaways = [
  'Raw whole head: 3 to 5 days in the crisper drawer, unwashed and loosely wrapped',
  'Cut florets: 3 to 4 days in an airtight container with a paper towel inside',
  'Cooked broccoli: 3 to 5 days airtight (7 days is not safe)',
  'Water-vase method: stand stem in water on a shelf for up to 2 to 3 weeks',
  'Frozen (blanched first): 8 to 12 months (never freeze raw without blanching)',
  'Never wash before storing: moisture trapped in florets causes mold',
]

const sections = [
  {
    heading: 'How long does broccoli last in the fridge?',
    body: `<p>Standard storage gives you 3 to 5 days for a raw whole head. That number comes from Toby Amidor, MS, RD, CDN, FAND via Food Network and UC Davis postharvest research cited by Mill.com. Cut it into florets first and expect 3 to 4 days. More surface area means faster moisture loss.</p>
<p>The most important rule: do not wash broccoli before storing it. Water trapped in those tight florets creates the exact environment mold needs. Wash it right before you cook it.</p>
<p>Store the head loosely wrapped in a perforated plastic bag in the crisper drawer. A paper towel inside the bag absorbs extra moisture. That combination gets you reliably to day 5.</p>`,
    table: {
      headers: ['What you have', 'How long it lasts'],
      rows: [
        ['Raw whole head, crisper drawer', '3 to 5 days'],
        ['Cut florets, airtight container', '3 to 4 days'],
        ['Cooked, airtight container', '3 to 5 days'],
        ['Room temperature', 'Up to 24 hours only'],
        ['Frozen, blanched first', '8 to 12 months'],
      ],
    },
  },
  {
    heading: 'Can broccoli last 2 weeks in the fridge?',
    body: `<p>With standard storage, no. A week is already pushing it. But one method can genuinely extend freshness to two or even three weeks: the water-vase technique.</p>
<p>Jerry James Stone's YouTube video on this has over 209,000 views. The reason it works is that broccoli is still biologically alive after harvest. It keeps respiring, releasing carbon dioxide, moisture, and heat, the same way a cut flower does. According to UC Davis Department of Plant Sciences postharvest research, this respiration process is what speeds up decay when airflow and hydration are not managed. When you treat broccoli like a flower, it behaves like one.</p>
<p>To do it: trim the stem flat and stand the head stem-side down in a jar with about an inch of water. Loosely drape a plastic bag over the florets. Place it on a fridge shelf where it fits upright (not in the crisper). Change the water every day or two. The stem keeps drawing water up and the florets stay hydrated from the inside.</p>
<p>Alfi calls broccoli "tiny trees," so we stand it up in the jar and he thinks we are growing one. Whatever works.</p>`,
    image: '/images/broccoli-shelf-life/broccoli-shelf-life-hero-broccoli-feature.webp',
    imageAlt: 'Broccoli head stored upright stem-side down in a mason jar with water inside a home refrigerator',
  },
  {
    heading: 'How can you tell if broccoli has gone bad?',
    body: `<p>The signs come in order of severity:</p>
<p><strong>Yellow florets.</strong> Chlorophyll is breaking down. Yellow broccoli is still safe to eat but will taste more bitter. I save yellow heads for soups and roasted dishes with strong seasoning.</p>
<p><strong>Limp, soft stems.</strong> The cell structure is going. Past best, but not dangerous yet in a cooked dish.</p>
<p><strong>Slimy florets.</strong> This is bacterial breakdown. Throw it out.</p>
<p><strong>Sharp sulfur smell.</strong> Broccoli has a mild scent when fresh. A strong unpleasant smell means discard.</p>
<p><strong>Visible mold.</strong> No cutting around it. The whole head goes.</p>
<p>Yellow is not the same as dangerous. I keep that distinction clear. The boys get the tight green florets. The yellow stuff gets cooked down.</p>`,
    factBlock: {
      title: 'Safe vs. peak quality',
      text: 'Yellow broccoli is past peak quality but not dangerous. Slimy broccoli is a food safety issue. The difference matters for how you use it, not whether you use it.',
    },
  },
  {
    heading: 'Can you eat cooked broccoli after 7 days?',
    body: `<p>No. Food safety guidance from Mill.com and Watch Learn Eat both recommend eating cooked broccoli within 3 to 5 days when stored in an airtight container. Seven days is too long. Bacterial growth in cooked vegetables at fridge temperatures can reach unsafe levels without obvious visual signs.</p>
<p>I have a personal rule: cooked broccoli gets eaten within 3 days. After that, I freeze it or cook it again into a soup immediately.</p>`,
  },
  {
    heading: 'How long does broccoli last in the freezer?',
    body: `<p>Blanched broccoli keeps for 8 to 12 months in the freezer. Mill.com cites UC Davis guidance at 8 months for peak quality. Watch Learn Eat puts the outer limit at 12 months. Both are reasonable depending on your freezer temperature and how well you sealed the bags.</p>
<p>Raw broccoli without blanching freezes badly. The enzymes that cause deterioration stay active at freezer temperatures and break down texture and color. You end up with mushy, grey florets.</p>
<p><strong>Blanching correctly:</strong> cut into florets, drop into boiling water for 3 minutes, transfer immediately to an ice bath for 3 minutes to stop the cooking, drain and pat completely dry, freeze in a single layer on a sheet pan until solid (about 2 hours), then move into freezer bags with the air squeezed out.</p>`,
  },
  {
    heading: 'What is the best way to store broccoli in the fridge?',
    body: `<p>For 3 to 5 days: unwashed, loosely wrapped in a perforated bag with a paper towel, in the crisper drawer.</p>
<p>For 2 to 3 weeks: the water-vase method. Stem in water on a shelf, florets loosely covered with a plastic bag, water changed daily.</p>
<p>One more thing: keep broccoli away from apples, bananas, and avocados. Those release ethylene gas that speeds up yellowing. Broccoli stored next to a bunch of bananas will go yellow noticeably faster.</p>`,
  },
]

const faqs = [
  {
    question: 'How long does cut broccoli last in the fridge?',
    answer:
      'Cut florets last 3 to 4 days in an airtight container. Dry them thoroughly before storing and add a paper towel to absorb condensation.',
  },
  {
    question: 'Is 2-week-old broccoli okay?',
    answer:
      'Depends entirely on storage. The water-vase method plus daily water changes can produce fresh broccoli at two weeks. Loose crisper storage at two weeks is generally too long. Check for sliminess, smell, and mold rather than the date alone.',
  },
  {
    question: 'How long does broccoli last outside the fridge?',
    answer:
      'No more than 24 hours at room temperature. In Singapore\'s heat, I would not leave it out for more than a few hours before it starts to soften and yellow.',
  },
  {
    question: "Does storing method affect broccoli's vitamin C content?",
    answer:
      'Yes. Broccoli contains 89.2 mg of vitamin C per 100g raw (USDA FDC 170379). Boiling strips roughly half of that. Steaming and roasting preserve significantly more. The water-vase technique maintains quality better because the plant stays actively hydrated.',
  },
]

const related = [
  {
    title: 'How to Freeze Broccoli (Without It Going Mushy)',
    href: '/storage/freeze',
    image: '/images/storage/freeze-broccoli.webp',
    description: 'The blanching method that keeps broccoli bright green and firm for up to 12 months.',
  },
  {
    title: 'How to Tell If Broccoli Has Gone Bad',
    href: '/storage/gone-bad',
    image: '/images/storage/gone-bad-broccoli.webp',
    description: 'Yellow vs. slimy vs. moldy: what each sign means and what to do with it.',
  },
  {
    title: 'Why Does Broccoli Turn Yellow?',
    href: '/storage/why-yellow',
    image: '/images/storage/yellow-broccoli.webp',
    description: 'Chlorophyll breakdown, ethylene gas, and how to slow it down.',
  },
]

// ── Combined schema (Article + FAQPage + BreadcrumbList + Speakable) ─────────

const combinedSchema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema, speakableSchema],
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ShelfLifePage() {
  return (
    <EditorialTemplate
      title="How Long Does Broccoli Last in the Fridge?"
      description="Adam went through a phase in 2022 where broccoli was the only vegetable he would eat. That obsession with not wasting a head turned into a full storage system."
      image="/images/broccoli-shelf-life/broccoli-shelf-life-hero-broccoli-feature.webp"
      imageAlt="Broccoli head standing upright in a mason jar with water inside a home refrigerator, crisper drawer visible in background"
      keyTakeaways={keyTakeaways}
      sections={sections}
      faqs={faqs}
      related={related}
      schemaJson={combinedSchema}
    />
  )
}
