import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'How to Freeze Broccoli at Home (Blanched and Unblanched)',
  description:
    'Step-by-step guide to freezing broccoli at home. Blanch for 12-month storage, or skip blanching and use within 1 month. Includes the straw vacuum trick, brine soak, and a nutrition comparison.',
  keywords: [
    'how to freeze broccoli',
    'how to freeze broccoli at home',
    'freeze broccoli without blanching',
    'how long does frozen broccoli last',
    'blanch broccoli for freezing',
    'how to freeze fresh broccoli',
  ],
  openGraph: {
    title: 'How to Freeze Broccoli at Home (Blanched and Unblanched)',
    description:
      'Blanch for 12-month shelf life, or skip it and use within 1 month. Elena walks through every step, including drying, flash-freezing, and the straw vacuum trick.',
    images: [
      {
        url: '/images/freeze-broccoli/freeze-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli florets spread on a parchment-lined baking sheet for flash freezing',
      },
    ],
    type: 'article',
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/storage/how-to-freeze#breadcrumb',
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
          name: 'How to Freeze Broccoli',
          item: 'https://broccolipedia.com/storage/how-to-freeze',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/storage/how-to-freeze#article',
      headline: 'How to Freeze Broccoli at Home (Blanched and Unblanched)',
      description:
        'Step-by-step guide to freezing broccoli at home. Blanch for 12-month storage, or skip blanching and use within 1 month.',
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/freeze-broccoli/freeze-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        caption:
          'Broccoli florets spread on a parchment-lined baking sheet for flash freezing',
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
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/storage/how-to-freeze',
      },
      about: [
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
          name: 'Flash freezing',
          sameAs: 'https://www.wikidata.org/wiki/Q386332',
        },
        {
          '@type': 'Thing',
          name: 'Sulforaphane',
          sameAs: 'https://www.wikidata.org/wiki/Q424489',
        },
        {
          '@type': 'Thing',
          name: 'Myrosinase',
          sameAs: 'https://www.wikidata.org/wiki/Q416212',
        },
        {
          '@type': 'Thing',
          name: 'Salad spinner',
          sameAs: 'https://www.wikidata.org/wiki/Q382753',
        },
        {
          '@type': 'Thing',
          name: 'Cauliflower',
          sameAs: 'https://www.wikidata.org/wiki/Q7537',
        },
      ],
      citation: [
        {
          '@type': 'CreativeWork',
          name: 'USDA FoodData Central — Broccoli, raw (FDC ID 170379)',
          url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients',
        },
        {
          '@type': 'CreativeWork',
          name: 'So Easy to Preserve, 6th ed. — Freezing Broccoli',
          url: 'https://nchfp.uga.edu/how/freeze/vegetable/freezing-broccoli/',
          publisher: {
            '@type': 'Organization',
            name: 'National Center for Home Food Preservation, University of Georgia',
          },
        },
        {
          '@type': 'CreativeWork',
          name: 'Sulforaphane Benefits — MD Anderson Cancer Center CancerWise',
          url: 'https://www.mdanderson.org/cancerwise/sulforaphane-benefits.html',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '.faq-answer-primary'],
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://broccolipedia.com/storage/how-to-freeze#howto',
      name: 'How to Freeze Broccoli at Home',
      description:
        'Cut broccoli into florets, optionally blanch for 3 minutes, shock in an ice bath, dry thoroughly, flash-freeze on a baking sheet, then seal in airtight bags.',
      totalTime: 'PT2H30M',
      yield: {
        '@type': 'QuantitativeValue',
        value: '1–2 quart bags',
        description: 'From one medium head of broccoli (approximately 1 lb)',
      },
      tool: [
        { '@type': 'HowToTool', name: 'Large pot' },
        { '@type': 'HowToTool', name: 'Baking sheet' },
        { '@type': 'HowToTool', name: 'Parchment paper' },
        { '@type': 'HowToTool', name: 'Salad spinner' },
        { '@type': 'HowToTool', name: 'Airtight freezer bags' },
        { '@type': 'HowToTool', name: 'Colander' },
      ],
      supply: [
        { '@type': 'HowToSupply', name: 'Fresh broccoli (1 head, approximately 1 lb)' },
        { '@type': 'HowToSupply', name: 'Salt (4 tsp per gallon, for brine soak)' },
        { '@type': 'HowToSupply', name: 'Ice (for ice bath)' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Cut the florets',
          text: 'Separate the head into pieces no larger than 1.5 inches across. Split thick stalks lengthwise.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Brine soak (optional)',
          text: 'Dissolve 4 teaspoons of salt in 1 gallon of cold water. Soak florets for 30 minutes to remove insects. Rinse well.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Blanch',
          text: 'Bring a large pot to a full boil. Drop in the florets and blanch for exactly 3 minutes (water blanching) or 5 minutes (steam blanching).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Ice bath',
          text: 'Transfer immediately to ice water for 2 to 3 minutes to stop cooking and hold the colour.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Dry completely',
          text: 'Use a salad spinner, then spread on a kitchen towel and pat dry. Surface moisture causes ice crystals and mushiness.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Flash freeze',
          text: 'Spread dried florets in a single layer on a parchment-lined baking sheet. Freeze for 1 to 2 hours until solid.',
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: 'Bag and seal',
          text: 'Transfer to airtight freezer bags. Remove all air (use the straw trick if no vacuum sealer). Label with the date.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/storage/how-to-freeze#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I freeze a bag of fresh broccoli florets straight from the store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Cut into florets if needed, dry well, flash-freeze on a baking sheet, then transfer to a sealed bag. Without blanching, use within 1 month for best quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if you do not blanch broccoli before freezing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quality drops faster. Yellowing and softer texture appear within weeks. For short-term storage up to 1 month, it works fine. For 6 to 12 months of good quality, blanch first.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my frozen broccoli has gone bad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Black or brown patches, a strong sulphur smell when thawed, or ice crystals coating the entire surface. Light yellowing and edge freezer burn are normal and the rest of the floret is safe to eat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I cook frozen broccoli from frozen or thaw it first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'From frozen. Thawing releases water and makes it limp. Add frozen florets directly to boiling water, a steamer, or a hot pan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you freeze broccoli and cauliflower together?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Same blanching time (3 minutes water, 5 minutes steam) and same shelf life. Both are brassica cruciferous vegetables. Dry both well and flash-freeze in a single layer before bagging.',
          },
        },
      ],
    },
  ],
}

export default function HowToFreezePage() {
  return (
    <EditorialTemplate
      title="How to Freeze Broccoli at Home"
      description="Blanch for 12-month storage, or skip it and use within 1 month. Elena walks through every step, including the brine soak, drying, flash-freezing, and the straw vacuum trick."
      image="/images/freeze-broccoli/freeze-broccoli-hero-broccoli-feature.webp"
      imageAlt="Broccoli florets spread in a single layer on a parchment-lined baking sheet for flash freezing"
      keyTakeaways={[
        'Blanched broccoli lasts 6 to 12 months frozen. Unblanched, use within 1 month.',
        'Drying before freezing is the single most important step for avoiding mushiness.',
        'Flash freeze in a single layer on a baking sheet before bagging — this stops clumping.',
        'Raw-frozen broccoli preserves myrosinase, the enzyme behind sulforaphane production.',
        'No vacuum sealer? The straw trick works: suck the air out through a straw before sealing.',
      ]}
      sections={[
        {
          heading: 'How to Freeze Broccoli Step by Step',
          body: `<p class="mb-4">You need a large pot, a baking sheet, parchment paper, and a freezer bag. No special equipment.</p>
<p class="mb-3 text-sage text-sm italic">Adam came home from a school farm day carrying four heads of broccoli in his school bag, like they were trophies. He was so pleased with himself. I had nothing planned for dinner, the fridge was already full, and bath time was in forty-five minutes. I cut the florets up, blanched them for two minutes, shocked them in an ice bath, spun them dry, laid them on a tray, and stuck the whole thing in the freezer. Three weeks later I pulled them out for a pasta dish. Better than anything I had bought at FairPrice. That evening started a habit: I now buy two heads whenever one would do, so there is always something frozen at the back.</p>
<ol class="space-y-4 mt-5">
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">1</span><div><strong class="text-deepForest">Cut the florets.</strong> Separate the head into pieces no larger than 1.5 inches across. Split thick stalks lengthwise. Uniform size matters because they freeze and thaw at the same rate.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">2</span><div><strong class="text-deepForest">Brine soak (optional but useful).</strong> Dissolve 4 teaspoons of salt in 1 gallon of cold water. Soak florets for 30 minutes. This comes straight from the USDA extension guide and draws out insects hiding in the florets. I was surprised when I first read it. Rinse well before blanching.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">3</span><div><strong class="text-deepForest">Blanch.</strong> Bring a large pot to a full boil. Drop in the florets and blanch for exactly 3 minutes. That is the water blanching standard from the National Center for Home Food Preservation. Steam blanching takes 5 minutes. Do not guess: under-blanching is worse than skipping it entirely.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">4</span><div><strong class="text-deepForest">Ice bath.</strong> Transfer immediately to ice water for 2 to 3 minutes. This stops cooking and holds the colour.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">5</span><div><strong class="text-deepForest">Dry completely.</strong> Use a salad spinner first, then spread on a kitchen towel and pat dry. Broccoli is 89.2% water by weight <span class="text-xs text-sage">(USDA FDC 170379)</span>, so moisture left on the surface becomes ice crystals in the freezer. Those crystals tear cell walls, which is why frozen broccoli goes mushy.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">6</span><div><strong class="text-deepForest">Flash freeze.</strong> Spread dried florets in a single layer on a parchment-lined baking sheet. No overlapping. Freeze 1 to 2 hours until solid.</div></li>
  <li class="flex gap-3"><span class="flex-shrink-0 w-7 h-7 rounded-full bg-deepForest text-white text-sm flex items-center justify-center font-bold">7</span><div><strong class="text-deepForest">Bag and seal.</strong> Transfer to airtight freezer bags. No vacuum sealer? Use the straw trick: seal the bag almost closed, insert a straw, suck the air out, then seal the last inch as you pull the straw out. Label with the date. Leave no headspace.</div></li>
</ol>`,
          image: '/images/freeze-broccoli/freeze-broccoli-hero-broccoli-feature.webp',
          imageAlt: 'Broccoli florets laid in a single layer on a parchment-lined baking sheet ready for flash freezing',
        },
        {
          heading: 'Do You Have to Blanch Broccoli Before Freezing?',
          body: `<p class="mb-4">No, but the shelf life changes a lot.</p>
<p class="mb-4">Blanching stops the enzymes (peroxidase and catalase) that keep degrading texture and flavour even at freezer temperatures. Blanched broccoli holds quality for 6 to 12 months. Unblanched, you get about 1 month before yellowing and off-flavours develop.</p>
<p class="mb-4">The Oregon Cottage ran a head-to-head test, blanched versus unblanched, and at the 2-week mark their tasters actually preferred the firmer texture of the unblanched batch. At 3 and 6 months, both versions were still viable. For soups and stir-fries where texture matters less, unblanching is a reasonable choice.</p>
<p class="mb-4">There is a nutrition argument here that most articles skip. Blanching denatures myrosinase, the enzyme that converts glucoraphanin into sulforaphane. Raw-frozen broccoli preserves that enzyme. Research from MD Anderson notes that sulforaphane production depends on myrosinase activity. If you are freezing broccoli specifically for its nutritional value, raw-frozen has a case. That does not mean it treats or prevents anything. It just means the enzyme is still there when you cook it.</p>
<p>I do both. I blanch a large batch for long storage and keep a small unblanched bag for the next few weeks. Alfi prefers the texture of the unblanched version in pasta. Adam does not notice the difference as long as there is enough cheese.</p>`,
          table: {
            headers: ['', 'Blanched', 'Unblanched'],
            rows: [
              ['Shelf life', '6 to 12 months', 'Up to 1 month'],
              ['Texture (long-term)', 'Slightly softer', 'Firmer (short-term)'],
              ['Colour retention', 'Better (long-term)', 'Yellows within weeks'],
              ['Myrosinase (sulforaphane)', 'Denatured', 'Preserved'],
              ['Vitamin C', 'Some lost to water', 'More retained'],
              ['Best for', 'Long storage, meal prep', 'Quick use, soups, stir-fry'],
            ],
          },
        },
        {
          heading: 'How Can I Freeze Broccoli Without It Getting Mushy?',
          body: `<p class="mb-4">Two things cause mushiness: moisture before freezing and slow freezing.</p>
<p class="mb-4">Water left on the florets forms ice crystals that collapse cell walls on thaw. Dry them with a salad spinner and a kitchen towel after the ice bath. Do not rush this step.</p>
<p class="mb-4">Slow freezing makes larger crystals. Single-layer flash freezing on a baking sheet keeps pieces freezing fast and separately. Once solid, they will not clump into a block and you can take out exactly how much you need.</p>
<p>When cooking, go from frozen straight into the pan or pot. Thawing first releases water and the result is limp and watery. Frozen florets into a stir-fry or steamer take just 1 to 2 minutes longer than fresh.</p>`,
        },
        {
          heading: 'How Long Does Frozen Broccoli Last?',
          body: `<p class="mb-4">Blanched and properly sealed: 6 to 12 months (NCHFP guidance). After 12 months it is still safe but flavour and texture degrade noticeably.</p>
<p class="mb-4">Unblanched: 1 month for good quality.</p>
<p>Signs it has gone bad: dark brown or black patches (not just light yellowing at the tips), a strong sulphur smell on opening, or heavy ice crystal buildup across the whole bag. Light freezer burn on edges is normal. Cut it off and use the rest. Significant freezer burn across the whole piece means not enough air was removed at sealing.</p>`,
          factBlock: {
            title: 'Storage Rule of Thumb',
            text: 'A medium broccoli head (about 1 lb) fills 1 to 2 quart-size freezer bags. Label each bag with the date frozen and the method (blanched or not). Makes it easy to use oldest-first.',
          },
        },
        {
          heading: "Does Freezing Destroy Broccoli's Nutrients?",
          body: `<p class="mb-4">Less than most people assume. Raw broccoli contains 89.2 mg of vitamin C per 100g, which is 99% of the daily value <span class="text-xs text-sage">(USDA FDC 170379)</span>. Blanching does degrade some vitamin C into the cooking water, so raw-frozen broccoli preserves more. But the difference is smaller than leaving fresh broccoli in the fridge for five days.</p>
<p>Vitamin K and fibre are largely stable in both methods <span class="text-xs text-sage">(USDA FDC 170379)</span>. The more interesting question is sulforaphane potential, covered in the blanching section above.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'Can I freeze a bag of fresh broccoli florets straight from the store?',
          answer:
            'Yes. Cut into florets if needed, dry well, flash-freeze on a baking sheet, then transfer to a sealed bag. Without blanching, use within 1 month.',
        },
        {
          question: 'What happens if you do not blanch broccoli before freezing?',
          answer:
            'Quality drops faster. Yellowing and softer texture appear within weeks. For short-term storage up to 1 month, it works fine. For 6 to 12 months of good quality, blanch first.',
        },
        {
          question: 'How do I know if my frozen broccoli has gone bad?',
          answer:
            'Black or brown patches, a strong sulphur smell when thawed, or ice crystals coating the entire surface. Light yellowing and edge freezer burn are normal and the rest of the floret is safe to eat.',
        },
        {
          question: 'Should I cook frozen broccoli from frozen or thaw it first?',
          answer:
            'From frozen. Thawing releases water and makes it limp. Add frozen florets directly to boiling water, a steamer, or a hot pan.',
        },
        {
          question: 'Can you freeze broccoli and cauliflower together?',
          answer:
            'Yes. Same blanching time, same shelf life. Both are brassica cruciferous vegetables. Dry both well and flash-freeze in a single layer before bagging.',
        },
      ]}
      related={[
        {
          title: 'How Long Does Broccoli Last in the Fridge?',
          href: '/storage/shelf-life',
          image: '/images/storage/broccoli-shelf-life-fridge.webp',
          description:
            'Fresh broccoli lasts 3 to 5 days in the fridge. Here is how to store it properly and the signs it has gone bad.',
        },
        {
          title: 'How to Cut Broccoli Into Florets',
          href: '/storage/how-to-cut-florets',
          image: '/images/storage/cut-broccoli-florets-board.webp',
          description:
            'The fastest method for cutting uniform florets, including how to use the stalk and avoid waste.',
        },
        {
          title: 'How to Cook Frozen Broccoli',
          href: '/how-to-cook/frozen',
          image: '/images/how-to-cook/frozen-broccoli-pan.webp',
          description:
            'From frozen to plate in under 5 minutes. Steaming, stir-frying, and roasting from frozen.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
