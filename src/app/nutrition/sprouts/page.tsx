import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Sprouts: The 20-50x More Potent Version of Broccoli',
  description:
    'Broccoli sprouts contain 20-50x more glucoraphanin than mature broccoli. Elena Ignacio explains the sulforaphane mechanism, what the clinical research actually shows, and how to grow them at home in 3 days.',
  keywords: [
    'broccoli sprouts health benefits',
    'broccoli sprouts sulforaphane',
    'sulforaphane benefits',
    'glucoraphanin broccoli sprouts',
    'broccoli sprouts vs supplements',
    'how much broccoli sprouts per day',
    'grow broccoli sprouts at home',
  ],
  openGraph: {
    title: 'Broccoli Sprouts: The 20-50x More Potent Version of Broccoli',
    description:
      '3-day broccoli sprouts pack 20-50x more glucoraphanin than mature broccoli. The science explained simply, with clinical trial data and a practical home-growing method.',
    type: 'article',
    url: 'https://broccolipedia.com/nutrition/sprouts',
    images: [
      {
        url: '/images/broccoli-sprouts/broccoli-sprouts-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli sprouts in a glass jar on a kitchen counter with natural morning light',
      },
    ],
    publishedTime: '2026-06-16T00:00:00.000Z',
    modifiedTime: '2026-06-16T00:00:00.000Z',
    authors: ['https://broccolipedia.com/about#elena-ignacio'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broccoli Sprouts: The 20-50x More Potent Version of Broccoli',
    description:
      '3-day broccoli sprouts pack 20-50x more glucoraphanin than mature broccoli. Clinical trial data, supplement comparison, and how to grow them in a mason jar.',
    images: ['/images/broccoli-sprouts/broccoli-sprouts-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/nutrition/sprouts',
  },
}

// JSON-LD schema graph: Article + FAQPage + SpeakableSpecification + BreadcrumbList
// Delivered as a @graph bundle so a single <script> tag covers all four types.
// All HTML injected via dangerouslySetInnerHTML in EditorialTemplate.sections[].body
// is authored inline here (not user-supplied), so XSS risk is confined to build time.
const schemaJson: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/nutrition/sprouts#article',
      headline: 'Broccoli Sprouts: The 20-50x More Potent Version of Broccoli',
      description:
        'Broccoli sprouts contain 20-50x more glucoraphanin than mature broccoli. Clinical trial evidence on inflammation, blood sugar, and cancer research, with practical guidance on daily intake and home growing.',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/broccoli-sprouts/broccoli-sprouts-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
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
          'https://www.facebook.com/elena.ignacio',
        ],
      },
      publisher: {
        '@type': 'Organization',
        name: 'BroccoliPedia',
        url: 'https://broccolipedia.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://broccolipedia.com/images/logo.webp',
          width: 200,
          height: 60,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/nutrition/sprouts',
      },
      // WikiData-linked entities from entity extraction (research.json entity_map + WikiData IDs)
      about: [
        { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q415150' },
        { '@type': 'Thing', name: 'Glucoraphanin', sameAs: 'https://www.wikidata.org/wiki/Q2645432' },
        { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q420878' },
        { '@type': 'Thing', name: 'Inflammation', sameAs: 'https://www.wikidata.org/wiki/Q101991' },
        { '@type': 'Thing', name: 'Type 2 diabetes', sameAs: 'https://www.wikidata.org/wiki/Q3025883' },
        { '@type': 'Thing', name: 'NRF2', sameAs: 'https://www.wikidata.org/wiki/Q14864024' },
        { '@type': 'Thing', name: 'Oxidative stress', sameAs: 'https://www.wikidata.org/wiki/Q420549' },
        { '@type': 'Thing', name: 'Cancer prevention', sameAs: 'https://www.wikidata.org/wiki/Q1074454' },
      ],
      mentions: [
        {
          '@type': 'Organization',
          name: 'Johns Hopkins University',
          sameAs: 'https://en.wikipedia.org/wiki/Johns_Hopkins_University',
        },
        {
          '@type': 'Organization',
          name: 'MD Anderson Cancer Center',
          sameAs: 'https://en.wikipedia.org/wiki/MD_Anderson_Cancer_Center',
        },
        {
          '@type': 'Organization',
          name: 'OHSU Knight Cancer Institute',
          sameAs: 'https://en.wikipedia.org/wiki/OHSU_Knight_Cancer_Institute',
        },
      ],
      citation: [
        {
          '@type': 'ScholarlyArticle',
          name: 'Broccoli sprouts as inducers of carcinogen-detoxifying enzyme systems',
          author: 'Paul Talalay, Jed W. Fahey, Yuesheng Zhang',
          datePublished: '1997',
          publisher: { '@type': 'Organization', name: 'Proceedings of the National Academy of Sciences' },
          url: 'https://doi.org/10.1073/pnas.94.19.10367',
        },
        {
          '@type': 'ScholarlyArticle',
          name: 'Broccoli sprouts reduce oxidative stress in type 2 diabetes',
          author: 'Bahadoran et al.',
          datePublished: '2012',
          publisher: { '@type': 'Organization', name: 'European Journal of Clinical Nutrition' },
          url: 'https://doi.org/10.1016/j.nut.2012.02.009',
        },
        {
          '@type': 'ScholarlyArticle',
          name: 'Sulforaphane decreases PSA doubling time in men with recurrent prostate cancer',
          author: 'Alumkal et al.',
          datePublished: '2015',
          publisher: { '@type': 'Organization', name: 'Investigational New Drugs' },
          url: 'https://doi.org/10.1007/s10637-014-0189-z',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are sulforaphane supplements as good as broccoli sprouts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fresh broccoli sprouts are generally more effective. Sulforaphane supplements often remove myrosinase during processing, which is the enzyme needed to convert glucoraphanin into sulforaphane in your body. Look for "myrosinase-active" supplements if you are buying capsules. Otherwise you are likely getting less than the label suggests.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it okay to eat broccoli sprouts every day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The 2018 Clinical Nutrition study gave participants 30g per day for 10 weeks with no adverse effects. Start small if you are new. The isothiocyanate compounds can cause temporary gas until your gut adjusts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much broccoli sprouts should I eat to get sulforaphane?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research studies typically use 30g per day, about one small handful. The 2012 blood sugar trial used 10g per day of dried sprout powder for 4 weeks and showed measurable results. Fresh sprouts are more potent. 30g fresh daily is a practical target.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why are broccoli sprouts so much more potent than regular broccoli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Johns Hopkins researchers found in 1997 that 3-day-old broccoli sprouts contain 20-50x more glucoraphanin than mature broccoli. The sprout stage is when the plant packs in the most protective compounds before growing into a full vegetable and diluting them across a larger mass.',
          },
        },
      ],
    },
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer', '.key-takeaways'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://broccolipedia.com' },
        { '@type': 'ListItem', position: 2, name: 'Nutrition', item: 'https://broccolipedia.com/nutrition' },
        { '@type': 'ListItem', position: 3, name: 'Broccoli Sprouts', item: 'https://broccolipedia.com/nutrition/sprouts' },
      ],
    },
  ],
}

export default function SproutsPage() {
  return (
    <EditorialTemplate
      title="Broccoli Sprouts: The 20-50x More Potent Version of Broccoli"
      description='For four months in 2023, Adam would not touch anything green. I started eating broccoli sprouts myself, partly out of spite, partly because I needed something that worked while managing his picky phase. He watched me eat them on sandwiches for weeks. One morning he asked what "the tiny leaves" were. I told him. He tried one, declared it "spicy in the nose," and asked for more. Now I hide them under cheese and call it a win.'
      image="/images/broccoli-sprouts/broccoli-sprouts-hero-broccoli-feature.webp"
      imageAlt="Broccoli sprouts in a small glass jar on a kitchen counter with natural morning light and a wooden cutting board"
      keyTakeaways={[
        '3-day sprouts contain 20-50x more glucoraphanin than mature broccoli (Talalay, Fahey & Zhang, PNAS 1997)',
        'Sulforaphane is not pre-formed in the plant; chopping activates myrosinase enzyme to create it',
        'Heat above 70°C destroys myrosinase; eat sprouts raw for the full benefit',
        '30g/day for 10 weeks dropped IL-6 inflammation markers from 4.76 to 2.11 pg/mL (Clinical Nutrition, 2018)',
        'You can grow them in 3 days with a mason jar and no soil',
      ]}
      sections={[
        {
          heading: 'What Is Sulforaphane and Why Does It Come From Sprouts?',
          // NOTE: All HTML below is authored statically at build time - no user input is interpolated.
          body: `<div class="quick-answer mb-6 bg-greenTint rounded-xl p-5 border-l-4 border-forest">
  <p class="font-semibold text-deepForest mb-1">Quick Answer</p>
  <p class="text-deepForest text-sm leading-relaxed">Broccoli sprouts are 3-day-old seedlings with 20-50x more glucoraphanin than mature broccoli. (Talalay et al., PNAS 1997.) Glucoraphanin is the precursor your body converts into sulforaphane, a compound linked to reduced inflammation, better blood sugar control, and cancer-protective pathways. About 30g daily is the amount most studies use.</p>
</div>
<p>Sulforaphane does not exist pre-formed in broccoli. The plant stores glucoraphanin in one cellular compartment and myrosinase enzyme in another. When you chop or chew the plant, those compartments mix and myrosinase converts glucoraphanin into sulforaphane on the spot.</p>
<p class="mt-4">The reason 3-day sprouts deliver 20-50x more sulforaphane potential than mature broccoli is about the plant&apos;s stage of life. At the seedling stage, the plant has its highest concentration of glucoraphanin per gram of mass. Researchers at Johns Hopkins confirmed this in 1997. Paul Talalay, Jed Fahey, and Yuesheng Zhang published their findings in the Proceedings of the National Academy of Sciences. (Talalay, Fahey &amp; Zhang, PNAS 1997, doi:10.1073/pnas.94.19.10367.) The New York Times covered it. Broccoli seed prices spiked. For a brief period there was a global seed shortage. That is how significant the finding was.</p>
<p class="mt-4">One practical consequence: heat broccoli sprouts above 70&deg;C and you destroy myrosinase. Sulforaphane production stops. This is why sprouts are eaten raw. If you are cooking mature broccoli, chop it first and wait 40 minutes before applying heat. The myrosinase finishes its work before the heat shuts it down.</p>`,
          factBlock: {
            title: 'Why the sprout stage matters',
            text: 'At 3 days old, a broccoli seedling is at peak chemical defense mode. The plant concentrates glucoraphanin precisely because it is most vulnerable at this stage. As it matures into a full vegetable, those compounds dilute across a much larger plant mass.',
          },
        },
        {
          heading: 'What Does the Research Actually Show?',
          body: `<p>The studies are more specific than most articles admit.</p>
<p class="mt-4"><strong>Inflammation:</strong> A 2018 study published in Clinical Nutrition gave 40 overweight adults 30g of broccoli sprouts daily for 10 weeks. IL-6, a key inflammation marker, dropped from 4.76 to 2.11 pg/mL. That is a 56% reduction from real sprouts, not supplements. (Clinical Nutrition, 2018; ISSN 0261-5614.)</p>
<p class="mt-4"><strong>Blood sugar:</strong> A 2012 randomized controlled trial enrolled 81 people with type 2 diabetes. They took 10g per day of broccoli sprout powder for 4 weeks. Fasting glucose fell by 1.9 mmol/L and hs-CRP dropped 20.5%. (Bahadoran et al., European Journal of Clinical Nutrition, 2012.)</p>
<p class="mt-4"><strong>Cancer:</strong> The language has to stay careful here. Research suggests sulforaphane activates the Nrf2/Keap1 pathway, upregulating detoxification enzymes that may help neutralize carcinogens before they damage DNA. (MD Anderson Cancer Center; Ali et al., Frontiers in Oncology, 2023.) A 2015 Phase II trial at OHSU Knight Cancer Institute gave concentrated sulforaphane extract to 20 men with recurrent prostate cancer. PSA doubling time extended from 6.1 to 9.6 months (p=0.044). (Alumkal et al., Investigational New Drugs, 2015.) Research suggests. Not cures.</p>
<p class="mt-4">For readers who want to go deeper: Rhonda Patrick&apos;s sulforaphane video on FoundMyFitness covers traumatic brain injury research, neurodegeneration, and aging mechanisms. It is 47 minutes and worth every one of them.</p>`,
        },
        {
          heading: 'Are Sulforaphane Supplements as Good as Broccoli Sprouts?',
          body: `<p>Mostly no. During processing, most supplements remove the myrosinase enzyme. Without it, glucoraphanin conversion to sulforaphane is inconsistent. You may be getting far less than the label suggests.</p>
<p class="mt-4">The exception: supplements labeled &quot;myrosinase-active&quot; that add the enzyme back. Those perform better. But fresh sprouts still have the edge because the glucoraphanin and myrosinase are in their intact, natural form.</p>
<p class="mt-4">If the choice is a standard capsule versus a handful of sprouts on a sandwich, the sprouts win. Honestly.</p>`,
          pullQuote:
            'Without myrosinase, glucoraphanin conversion in most capsule supplements is inconsistent. Fresh sprouts deliver both compounds in intact, natural form.',
        },
        {
          heading: 'How Much Broccoli Sprouts Should You Eat?',
          body: `<p>Most studies use 30g per day, about one small handful. That was the dose in the 2018 inflammation trial. (Clinical Nutrition, 2018.) The 2012 diabetes study used 10g of dried powder, smaller but more concentrated. (Bahadoran et al., 2012.)</p>
<p class="mt-4">Start small if you are new. The isothiocyanate compounds can cause temporary gas until your gut adjusts. I started with a spoonful on avocado toast. Within a week I was adding them to everything.</p>
<p class="mt-4">Daily is fine. The 2018 study ran 10 weeks at 30g/day with no adverse effects reported.</p>`,
        },
        {
          heading: 'Can You Grow Broccoli Sprouts at Home?',
          body: `<p>Yes, and none of the top results in Google actually explains this. I started growing them in a mason jar on the kitchen counter. Adam now thinks they are a science experiment. This has helped with his willingness to eat them enormously.</p>
<p class="mt-4">The method: soak a tablespoon of sprouting-grade broccoli seeds for 8 hours. Drain into a wide-mouth mason jar with a mesh lid or cheesecloth. Tilt the jar so water drains and air circulates. Rinse twice a day. By day 3 you have sprouts. No soil. No sun. Just a jar.</p>
<p class="mt-4">We now run a constant rotation. One jar started every 3 days means we always have fresh ones in the kitchen.</p>`,
          factBlock: {
            title: 'What to buy',
            text: 'Look for broccoli seeds labeled specifically for sprouting, organic and untreated. Standard garden seeds may be treated with fungicide. Sprouting-specific seeds are widely available online for around $8-12 per 4oz bag, which grows dozens of batches.',
          },
        },
        {
          heading: 'Are There Any Side Effects?',
          body: `<p>For most people, none significant. Temporary gas at the start is real but passes within a week. If you take thyroid medication, check with your doctor. Large amounts of cruciferous vegetables can interfere with thyroid hormone synthesis. A handful a day is unlikely to be an issue, but it is worth knowing.</p>
<p class="mt-4">High-dose sulforaphane extracts have been studied at up to 200 micromoles per day in clinical settings without serious adverse events. (Alumkal et al., Investigational New Drugs, 2015.) The dose from whole sprouts is well within that range.</p>`,
        },
        {
          heading: 'References',
          body: `<ol class="text-sm text-sage space-y-2 list-decimal list-inside">
  <li>Talalay, P., Fahey, J. W., &amp; Zhang, Y. (1997). Broccoli sprouts as inducers of carcinogen-detoxifying enzyme systems. <em>Proceedings of the National Academy of Sciences, 94</em>(19), 10367-10372. <a href="https://doi.org/10.1073/pnas.94.19.10367" class="underline text-forest" target="_blank" rel="noopener noreferrer">doi:10.1073/pnas.94.19.10367</a></li>
  <li>Bahadoran, Z., et al. (2012). Broccoli sprouts reduce oxidative stress in type 2 diabetes. <em>European Journal of Clinical Nutrition, 66</em>(8), 972-977. <a href="https://doi.org/10.1016/j.nut.2012.02.009" class="underline text-forest" target="_blank" rel="noopener noreferrer">doi:10.1016/j.nut.2012.02.009</a></li>
  <li>Alumkal, J. J., et al. (2015). Sulforaphane decreases PSA doubling time in men with recurrent prostate cancer. <em>Investigational New Drugs, 33</em>(3), 755-764. <a href="https://doi.org/10.1007/s10637-014-0189-z" class="underline text-forest" target="_blank" rel="noopener noreferrer">doi:10.1007/s10637-014-0189-z</a></li>
  <li>Ali, M. A., et al. (2023). Anticancer properties of sulforaphane: current insights at the molecular level. <em>Frontiers in Oncology, 13</em>, 1168321. <a href="https://doi.org/10.3389/fonc.2023.1168321" class="underline text-forest" target="_blank" rel="noopener noreferrer">doi:10.3389/fonc.2023.1168321</a></li>
  <li>USDA FoodData Central (2019). Broccoli, raw. FDC ID 170379. <a href="https://fdc.nal.usda.gov/fdc-app.html#/?fdcId=170379" class="underline text-forest" target="_blank" rel="noopener noreferrer">fdc.nal.usda.gov</a></li>
</ol>`,
        },
      ]}
      faqs={[
        {
          question: 'Are sulforaphane supplements as good as broccoli sprouts?',
          answer:
            'Fresh broccoli sprouts are generally more effective. Sulforaphane supplements often remove myrosinase during processing, which is the enzyme needed to convert glucoraphanin into sulforaphane in your body. Look for "myrosinase-active" supplements if you are buying capsules. Otherwise you are likely getting less than the label suggests.',
        },
        {
          question: 'Is it okay to eat broccoli sprouts every day?',
          answer:
            'Yes. The 2018 Clinical Nutrition study gave participants 30g per day for 10 weeks with no adverse effects. Start small if you are new. The isothiocyanate compounds can cause temporary gas until your gut adjusts.',
        },
        {
          question: 'How much broccoli sprouts should I eat to get sulforaphane?',
          answer:
            'Research studies typically use 30g per day, about one small handful. The 2012 blood sugar trial used 10g per day of dried sprout powder for 4 weeks and showed measurable results. Fresh sprouts are more potent. 30g fresh daily is a practical target.',
        },
        {
          question: 'Why are broccoli sprouts so much more potent than regular broccoli?',
          answer:
            'Johns Hopkins researchers found in 1997 that 3-day-old broccoli sprouts contain 20-50x more glucoraphanin than mature broccoli. The sprout stage is when the plant packs in the most protective compounds before growing into a full vegetable and diluting them across a larger mass.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Benefits: Clinical Evidence',
          href: '/nutrition/benefits',
          image: '/images/broccoli-benefits/hero.webp',
          description: 'The full clinical trial landscape for sulforaphane and broccoli compounds.',
        },
        {
          title: 'Raw vs Cooked Broccoli',
          href: '/nutrition/raw-vs-cooked',
          image: '/images/raw-vs-cooked/hero.webp',
          description: 'Why microwaving beats boiling, and the 40-minute chop trick.',
        },
        {
          title: 'How to Grow Broccoli from Seed',
          href: '/growing/from-seed',
          image: '/images/growing-from-seed/hero.webp',
          description: 'Growing full broccoli plants from seed to harvest.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
