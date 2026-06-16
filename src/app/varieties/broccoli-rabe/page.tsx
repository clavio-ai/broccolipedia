import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Rabe vs Rapini: Same Vegetable, Two Names | BroccoliPedia',
  description:
    'Broccoli rabe and rapini are the same plant. The name difference is geographic. Here is why it is so bitter, how to cook it properly, and how the nutrition compares to regular broccoli.',
  keywords: [
    'broccoli rabe vs rapini',
    'broccoli rabe vs broccoli rapini',
    'is rapini the same as broccoli rabe',
    'broccoli rabe nutrition',
    'how to cook broccoli rabe',
    'cime di rapa',
  ],
  openGraph: {
    title: 'Broccoli Rabe vs Rapini: Same Vegetable, Two Names',
    description:
      'Broccoli rabe and rapini are the same plant. Here is why the names differ, why it is bitter, and how nutrition compares to regular broccoli.',
    url: 'https://broccolipedia.com/varieties/broccoli-rabe',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-rabe/broccoli-rabe-hero-broccoli-feature.webp',
        width: 900,
        height: 900,
        alt: 'Fresh bunch of broccoli rabe (rapini) on a wooden cutting board',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broccoli Rabe vs Rapini: Same Vegetable, Two Names',
    description:
      'Broccoli rabe and rapini are the same plant with different regional names. Bitterness explained, nutrition compared, and the onion blanching trick that actually works.',
    images: ['/images/broccoli-rabe/broccoli-rabe-hero-broccoli-feature.webp'],
  },
}

// Schema JSON-LD: Article + FAQPage + BreadcrumbList
// WikiData entities wired as mentions (from TextRazor extraction):
//   broccoli rabe / rapini  Q702282
//   broccoli                Q47722
//   Vitamin K               Q182338
//   turnip                  Q3916957
//   glucosinolate           Q416883
//   Broccolini              Q2229726
//   Gai lan (Chinese broc.) Q1677369
//   Brassica oleracea       Q146212
//   cruciferous vegetables  Q5189799
//   olive oil               Q93165
//   blanching (cooking)     Q506763
//   garlic                  Q23400
const schemaJson = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/varieties/broccoli-rabe#article',
    headline: 'Broccoli Rabe vs Rapini: Same Vegetable, Two Names',
    description:
      'Broccoli rabe and rapini are the same plant. The name difference is geographic. Bitter flavor explained, nutrition compared to regular broccoli, and the cooking technique that actually tames the bitterness.',
    image: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/broccoli-rabe/broccoli-rabe-hero-broccoli-feature.webp',
      width: 900,
      height: 900,
      caption: 'Fresh bunch of broccoli rabe (rapini) on a wooden cutting board',
    },
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
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'BroccoliPedia',
      url: 'https://broccolipedia.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/broccoli-mark.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/varieties/broccoli-rabe',
    },
    mentions: [
      { '@type': 'Thing', name: 'Rapini', sameAs: 'https://www.wikidata.org/wiki/Q702282' },
      { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
      { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/wiki/Q182338' },
      { '@type': 'Thing', name: 'Turnip', sameAs: 'https://www.wikidata.org/wiki/Q3916957' },
      { '@type': 'Thing', name: 'Glucosinolate', sameAs: 'https://www.wikidata.org/wiki/Q416883' },
      { '@type': 'Thing', name: 'Broccolini', sameAs: 'https://www.wikidata.org/wiki/Q2229726' },
      { '@type': 'Thing', name: 'Gai lan', sameAs: 'https://www.wikidata.org/wiki/Q1677369' },
      { '@type': 'Thing', name: 'Brassica oleracea', sameAs: 'https://www.wikidata.org/wiki/Q146212' },
      { '@type': 'Thing', name: 'Cruciferous vegetables', sameAs: 'https://www.wikidata.org/wiki/Q5189799' },
      { '@type': 'Thing', name: 'Olive oil', sameAs: 'https://www.wikidata.org/wiki/Q93165' },
      { '@type': 'Thing', name: 'Blanching (cooking)', sameAs: 'https://www.wikidata.org/wiki/Q506763' },
      { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/wiki/Q23400' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer', '.faq-direct-answer'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is rapini the same as broccoli rabe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Rapini and broccoli rabe are the same vegetable with different regional names. "Broccoli rabe" is used in Italian-American English; "rapini" is used in Italy and Canadian English; "Cime di Rapa" is used in southern Italy, especially Puglia.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between broccoli rabe and broccoli rapini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no difference. Broccoli rabe and broccoli rapini are the same plant (Brassica rapa). The name difference is geographic, not botanical.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is broccoli rabe related to regular broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Despite the name, broccoli rabe is Brassica rapa, which puts it in the turnip subfamily. Regular broccoli is Brassica oleracea italica, in the cabbage subfamily. The resemblance is visual only.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is healthier, broccoli rabe or regular broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Broccoli rabe leads on vitamin K (224 mcg vs 101.6 mcg per 100g), vitamin A (131 mcg RAE vs 31 mcg RAE), calcium (108 mg vs 47 mg), and iron (2.14 mg vs 0.73 mg). Regular broccoli leads on vitamin C (89.2 mg vs 20.2 mg). Both are per 100g raw per USDA FDC IDs 170381 and 170379.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you reduce the bitterness in broccoli rabe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simmer sliced onion and a smashed garlic clove in heavily salted boiling water for 10 minutes before adding the broccoli rabe. Then blanch for 4 to 5 minutes maximum. The onion sugars counteract the mustardy glucosinolate bitterness. Do not exceed 5 minutes or it will yellow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is broccoli rabe good for diabetics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fiber in broccoli rabe (2.7g per 100g, USDA FDC 170381) may help regulate insulin and glucose release. Research has suggested broccoli sprouts may benefit insulin resistance in type 2 diabetic patients. Always consult your doctor before using any food as a diabetes intervention.',
        },
      },
    ],
  },
  {
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
        name: 'Varieties',
        item: 'https://broccolipedia.com/varieties',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Broccoli Rabe',
        item: 'https://broccolipedia.com/varieties/broccoli-rabe',
      },
    ],
  },
]

export default function BroccoliRabePage() {
  return (
    <EditorialTemplate
      title="Broccoli Rabe vs Rapini: Same Vegetable, Two Names"
      description="The first time I bought rapini in Singapore, I thought I had grabbed the wrong thing. Six months later I worked out the trick. Now Alfi asks for seconds."
      image="/images/broccoli-rabe/broccoli-rabe-hero-broccoli-feature.webp"
      imageAlt="Fresh bunch of broccoli rabe (rapini) on a wooden cutting board with small yellow-green florets visible"
      keyTakeaways={[
        'Broccoli rabe and rapini are the same plant — the name difference is regional, not botanical',
        'It is Brassica rapa, in the turnip subfamily, not the cabbage subfamily like regular broccoli',
        'The bitterness comes from glucosinolates — the same compounds that make mustard sharp',
        'Simmer sliced onion in the blanching water for 10 minutes before adding rapini — this tames the bitterness significantly',
        'Broccoli rabe has nearly double the vitamin K, four times the vitamin A, and three times the iron of regular broccoli (USDA FDC 170381 vs 170379)',
      ]}
      sections={[
        {
          heading: 'Is Rapini the Same as Broccoli Rabe?',
          body: `<div class="quick-answer" aria-label="Quick Answer">
  <p><strong>Quick answer:</strong> Broccoli rabe and rapini are the same vegetable. The name difference is geographic: "broccoli rabe" is the Italian-American English name, while "rapini" is the Italian and Canadian English name. In southern Italy, especially Puglia, it is called "Cime di Rapa." Three names, one plant.</p>
</div>

<p>The first time I bought rapini in Singapore, I thought I had grabbed the wrong thing. The delivery guy from the Italian restaurant had left a whole bunch with our groceries: dark green leaves, thin stems, tiny yellow-green buds. Adam, who was seven at the time, picked it up and said it smelled like the mustard on his sandwiches. He was completely right. That night I blanched it too long and it turned limp and yellow. We all stared at it. Nobody touched it. Into the bin it went.</p>

<p>Six months later I tried again. I had read about putting sliced onion into the blanching water first, letting that simmer for ten minutes before the rapini goes in. The onion sugars do something to the bitterness. I served it with garlic and chili oil, and Alfi asked for more. I have made it this way ever since.</p>

<p>In Italian-American grocery stores and restaurants across the United States, you will see "broccoli rabe" or "broccoli raab" on the label. In Italy and in Canadian markets, the same vegetable is called "rapini." In southern Italy, particularly in Puglia and Calabria, it is known as "Cime di Rapa," which translates roughly to "turnip tops."</p>

<p>All three names point to the same plant: <em>Brassica rapa</em>. It belongs to the turnip subfamily, not the cabbage subfamily that regular broccoli comes from. Despite the name and the visual resemblance of those small buds to broccoli florets, they are not closely related.</p>`,
        },
        {
          heading: 'Why Is Broccoli Rabe So Bitter?',
          body: `<p>The bitterness comes from glucosinolates, the same compounds that give mustard its heat and make cabbage slightly sharp. Broccoli rabe has much higher glucosinolate concentrations than regular broccoli, which is why the flavor is so much more assertive.</p>

<p>The flavor is something like what you get if broccoli and arugula had a child. The florets look like tiny broccoli heads. The leaves are peppery and pungent. Together they make a plant that is genuinely polarizing. Some people love that sharpness; others find it overwhelming on the first try.</p>

<p>This is not a flaw. Italian cooking uses broccoli rabe specifically because of its bitterness. Rich, fatty dishes like sausage sandwiches, braised pork, and orecchiette with sausage need something to cut through the fat. Broccoli rabe does that work.</p>`,
        },
        {
          heading: 'How Do You Cook Broccoli Rabe Without the Bitterness?',
          body: `<p>The blanching water is your best tool. Here is the method I use now, adapted from ChefPonzio:</p>

<p>Add sliced onion and one smashed garlic clove to heavily salted boiling water. Let that simmer for ten minutes before you add the broccoli rabe. The onion releases sugars that counteract the mustardy bitterness in a way plain salted water does not.</p>

<p>Then blanch the broccoli rabe for four to five minutes, no more. At five minutes, pull it out. Past that point it starts to yellow, and you cannot reverse it.</p>

<p>After blanching, shake off the excess water and finish it in a pan with smashed garlic (not chopped; smashed whole cloves caramelize and sweeten instead of burning) and olive oil. Add Calabrian chiles if you can find them. They carry a vinegar bite that regular red pepper flakes do not replicate.</p>

<p>If you want to skip the oil entirely, try a fat-free steam-saute: heat water in your pan with chili flakes and lemon zest, and steam the rapini in that aromatic liquid. Bright green, intensely flavored, no fat required.</p>`,
        },
        {
          heading: 'Which Is Healthier: Broccoli Rabe or Regular Broccoli?',
          body: `<p>The answer depends on which nutrients matter most to you. I looked into this properly and it surprised me.</p>

<p>Broccoli rabe wins on vitamin K, vitamin A, calcium, and iron by a significant margin. Per 100g raw (USDA FDC ID 170381 for broccoli rabe; USDA FDC ID 170379 for regular broccoli):</p>`,
          table: {
            headers: ['Nutrient', 'Broccoli Rabe', 'Regular Broccoli'],
            rows: [
              ['Calories', '22 kcal', '34 kcal'],
              ['Vitamin K', '224 mcg', '101.6 mcg'],
              ['Vitamin A', '131 mcg RAE', '31 mcg RAE'],
              ['Vitamin C', '20.2 mg', '89.2 mg'],
              ['Calcium', '108 mg', '47 mg'],
              ['Iron', '2.14 mg', '0.73 mg'],
              ['Folate', '83 mcg', '63 mcg'],
              ['Fiber', '2.7g', '2.6g'],
              ['Protein', '3.17g', '2.82g'],
            ],
          },
          factBlock: {
            title: 'Source',
            text: 'USDA FoodData Central, FDC ID 170381 (broccoli rabe, raw) and FDC ID 170379 (broccoli, raw). Per 100g raw.',
          },
          pullQuote:
            'Vitamin K at 224 mcg is nearly double regular broccoli. Calcium more than double. Iron almost three times as high. For bone and eye health, broccoli rabe is the stronger choice.',
        },
        {
          heading: 'What the Nutrition Numbers Actually Mean',
          body: `<p>Vitamin K comes in at 224 mcg per 100g (USDA FDC 170381), nearly double the 101.6 mcg in regular broccoli (USDA FDC 170379). Calcium is more than twice as high: 108 mg versus 47 mg. Iron is almost three times higher: 2.14 mg versus 0.73 mg. Vitamin A at 131 mcg RAE is roughly four times the 31 mcg in regular broccoli. For bone health and eye health, broccoli rabe is the stronger choice.</p>

<p>Where regular broccoli wins: vitamin C. At 89.2 mg per 100g versus 20.2 mg in broccoli rabe, regular broccoli is the clear winner for immune support. If vitamin C is your priority, keep eating regular broccoli.</p>

<p>The fiber content at 2.7g per 100g may help regulate how quickly glucose is absorbed. Research suggests the glucosinolate compounds in cruciferous vegetables are under active study for their potential role in cancer prevention, though I would frame that as an area of ongoing research rather than a clinical promise.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'Is broccoli rabe related to regular broccoli?',
          answer:
            'No. Despite the name, broccoli rabe is Brassica rapa, which puts it in the turnip subfamily. Regular broccoli is Brassica oleracea italica, in the cabbage subfamily. The name comes purely from visual resemblance of the small buds to broccoli florets, not from any botanical relationship.',
        },
        {
          question: 'Is broccoli rabe good for diabetics?',
          answer:
            'The fiber in broccoli rabe (2.7g per 100g, USDA FDC 170381) may help regulate insulin and glucose release. Research has suggested that broccoli sprouts may benefit insulin resistance in type 2 diabetic patients. Always talk to your doctor before using any food as a diabetes intervention.',
        },
        {
          question: 'What does broccoli rabe taste like?',
          answer:
            'Bitter, peppery, and mustardy. Think broccoli meets arugula: little florets but pungent, assertive leaves. Blanching dramatically reduces the sharpness if the full bitterness is too much for you.',
        },
        {
          question: 'What is a good substitute for broccoli rabe?',
          answer:
            'Broccolini is milder and more tender, so it works if you want something similar in shape without the bitterness. Mustard greens are the closest flavor substitute. Chinese broccoli (gai lan) is another option, though it has thicker stems and a different texture.',
        },
      ]}
      related={[
        {
          title: 'Broccolini',
          href: '/varieties/broccolini',
          image: '/images/broccolini/broccolini-bunch-raw.webp',
          description: 'Mild, tender hybrid of broccoli and Chinese broccoli',
        },
        {
          title: 'Chinese Broccoli (Gai Lan)',
          href: '/varieties/chinese-broccoli',
          image: '/images/chinese-broccoli/gai-lan-bunch-raw.webp',
          description: 'The Cantonese staple with thick stems and glossy leaves',
        },
        {
          title: 'Types of Broccoli',
          href: '/facts/types',
          image: '/images/types/broccoli-varieties-overview.webp',
          description: 'Full comparison guide to every broccoli variety',
        },
      ]}
      schemaJson={schemaJson as unknown as Record<string, unknown>}
    />
  )
}
