import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: "Broccoli Health Benefits: What It Actually Does to Your Body",
  description:
    "89mg Vitamin C, 102mcg Vitamin K, sulforaphane, I3C, and gut bacteria support — all from 34 calories per 100g. A mom's practical guide with USDA FDC 170379 citations.",
  keywords: [
    'broccoli health benefits',
    'broccoli benefits',
    'sulforaphane benefits',
    'broccoli nutrition',
    'is broccoli good for you',
    'broccoli vitamin c',
    'broccoli gut health',
    'raw vs cooked broccoli',
  ],
  openGraph: {
    title: "Broccoli Health Benefits: What It Actually Does to Your Body",
    description:
      "89mg Vitamin C, 102mcg Vitamin K, sulforaphane from the stem — a practical guide to what broccoli does for your gut, liver, eyes, and blood sugar.",
    url: 'https://broccolipedia.com/nutrition/benefits',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-health-benefits/broccoli-health-benefits-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh broccoli crown on a light timber surface in natural morning light',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Broccoli Health Benefits: What It Actually Does to Your Body",
    description:
      "89mg Vitamin C, sulforaphane from the stem, and gut bacteria support — USDA FDC 170379 cited throughout.",
    images: ['/images/broccoli-health-benefits/broccoli-health-benefits-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/nutrition/benefits',
  },
}

// We pass a wrapper object because EditorialTemplate expects Record<string, unknown>.
// The @graph array pattern is valid JSON-LD and supported by Google's structured data.
const schemaJson: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
  {
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
        name: 'Benefits of Broccoli',
        item: 'https://broccolipedia.com/nutrition/benefits',
      },
    ],
  },
  {
    '@type': 'Article',
    headline: 'What Broccoli Actually Does to Your Body (A Mom\'s Honest Take)',
    description:
      '89mg Vitamin C, 102mcg Vitamin K, sulforaphane, I3C, and gut bacteria support — a practical guide to broccoli health benefits with USDA FDC 170379 citations.',
    image: 'https://broccolipedia.com/images/broccoli-health-benefits/broccoli-health-benefits-hero-broccoli-feature.webp',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/nutrition/benefits',
    },
    mentions: [
      {
        '@type': 'ChemicalSubstance',
        name: 'Sulforaphane',
        sameAs: 'https://www.wikidata.org/wiki/Q422330',
      },
      {
        '@type': 'ChemicalSubstance',
        name: 'Glucoraphanin',
        sameAs: 'https://www.wikidata.org/wiki/Q2832186',
      },
      {
        '@type': 'ChemicalSubstance',
        name: 'Indole-3-carbinol',
        sameAs: 'https://www.wikidata.org/wiki/Q411855',
      },
      {
        '@type': 'ChemicalSubstance',
        name: 'Lutein',
        sameAs: 'https://www.wikidata.org/wiki/Q179090',
      },
      {
        '@type': 'ChemicalSubstance',
        name: 'Zeaxanthin',
        sameAs: 'https://www.wikidata.org/wiki/Q421059',
      },
      {
        '@type': 'Enzyme',
        name: 'Myrosinase',
        sameAs: 'https://www.wikidata.org/wiki/Q411857',
      },
      {
        '@type': 'Taxon',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Age-related macular degeneration',
        sameAs: 'https://www.wikidata.org/wiki/Q208513',
      },
      {
        '@type': 'Drug',
        name: 'Warfarin',
        sameAs: 'https://www.wikidata.org/wiki/Q188491',
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer', '.paa-answer'],
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What organ is broccoli especially good for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The gut benefits most directly — broccoli fiber feeds good bacteria, and research suggests sulforaphane improves gut wall integrity. The liver also benefits from sulforaphane activating Nrf2 detox pathways. The eyes benefit from 1,400mcg of lutein and zeaxanthin per 100g, linked to up to 43% lower macular degeneration risk in observational studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe to eat broccoli every day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes for most people. People on warfarin should keep Vitamin K intake consistent (broccoli has 102mcg per 100g, 85% of daily value). People eating very large raw amounts daily should monitor thyroid function, as raw cruciferous vegetables contain goitrogens that can affect the thyroid at high doses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is raw or cooked broccoli healthier?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on what you want. For sulforaphane: chop first, wait 40 minutes, then cook. This lets myrosinase convert glucoraphanin to sulforaphane before heat destroys the enzyme. For Vitamin C and folate: brief steaming or microwaving preserves more than boiling. There is no single winner — the 40-minute chop method gives you both.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is broccoli good for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Broccoli is 34 calories per 100g (USDA FDC 170379), mostly water and fiber. A full cup provides around 31 calories with meaningful volume and satiety. It is one of the best choices for high-volume, low-calorie eating.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are broccoli sprouts healthier than regular broccoli?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, on sulforaphane concentration. Research suggests broccoli sprouts contain 20-50 times more glucoraphanin than mature broccoli (Talalay et al., PNAS 1997). They have less fiber and fewer other nutrients. Eating both is better than treating sprouts as a replacement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the health benefits of broccoli for women?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Broccoli contains indole-3-carbinol (I3C), which influences estrogen metabolism. It also provides iron paired with Vitamin C (which improves absorption) — useful for post-menopausal women with reduced meat intake. Calcium (47mg per 100g) and Vitamin K together support bone density.',
        },
      },
    ],
  },
  ],
}

export default function BroccoliBenefitsPage() {
  return (
    <EditorialTemplate
      title="What Broccoli Actually Does to Your Body"
      description="Adam refused broccoli for three months. Then I changed how I cooked it. Here is what I found out about what this vegetable actually does — USDA data, real studies, no hype."
      image="/images/broccoli-health-benefits/broccoli-health-benefits-hero-broccoli-feature.webp"
      imageAlt="Fresh broccoli crown on a light timber surface in natural morning light"
      keyTakeaways={[
        'One 100g serving provides 89mg Vitamin C (99% DV) and 102mcg Vitamin K (85% DV) for just 34 calories (USDA FDC 170379)',
        'The stem has twice the sulforaphane of the florets — most people throw away the most nutritious part (Dr. William Li)',
        'Chop broccoli and wait 40 minutes before cooking — this activates myrosinase before heat destroys it',
        'Lutein and zeaxanthin (1,400mcg per 100g) are linked to up to 43% lower macular degeneration risk in observational studies',
        'A 2012 RCT found broccoli sprout powder reduced fasting blood glucose by 1.9 mmol/L in Type 2 diabetic patients over 4 weeks',
        'I3C in broccoli influences estrogen metabolism — early human trials show promise, but it is not a proven cancer treatment',
      ]}
      sections={[
        {
          heading: 'What organ is broccoli especially good for?',
          body: `<p class="paa-answer">The gut gets the most direct benefit. Broccoli's fiber (2.6g per 100g, USDA FDC 170379) feeds good bacteria in your microbiome. A 2023 Penn State mouse study found animals on a 15% broccoli diet grew significantly more goblet cells and Paneth cells, the cells that keep the gut wall intact and prevent intestinal permeability (Baxter et al., <em>Laboratory Investigation</em>, 2023). That was a mouse study, and human trials are pending. But a separate 2023 Hudson Institute study found sulforaphane changes gut microbiota composition in ways that increase anti-inflammatory metabolite production. Two independent 2023 studies pointing the same direction is not a coincidence.</p>
<p>Second is the liver. Sulforaphane activates Nrf2/Keap1 detox pathways in the liver, upregulating phase II detoxification enzymes. MD Anderson Cancer Center calls sulforaphane the most extensively studied chemopreventive compound found in any vegetable.</p>
<p>The eyes benefit specifically from broccoli's 1,400mcg of lutein and zeaxanthin per 100g (USDA FDC 170379). These are the only two dietary carotenoids that accumulate in the retina's macula, the area responsible for central, high-resolution vision. Research suggests dietary intake is associated with up to a 43% reduction in age-related macular degeneration risk in observational studies (BrightFocus Foundation, 2023).</p>`,
        },
        {
          heading: 'Is it safe to eat broccoli every day?',
          body: `<p class="paa-answer">For most people, yes. I eat it several times a week and we have had zero problems. But two groups genuinely need to pay attention.</p>
<p>People on warfarin should keep Vitamin K intake consistent, not necessarily low. Broccoli has 102mcg per 100g, which is 85% of your daily value (USDA FDC 170379). Vitamin K affects how warfarin works, so wild swings in broccoli intake can affect your INR. The answer from most clinicians is "keep it steady" rather than "avoid it entirely."</p>
<p>Heavy cruciferous consumers should watch thyroid function. Dr. William Li and Dr. Gundry both observed TSH drift in clinical patients who ate large amounts of raw cruciferous vegetables daily. Raw broccoli contains goitrogens that can compete with iodine uptake in the thyroid. Normal portions do not cause this. Cooking reduces goitrogen activity significantly. The practical fix: rotate broccoli with other vegetables, and if you are eating it raw, do not eat large amounts every single day.</p>`,
        },
        {
          heading: 'Is raw or cooked broccoli healthier?',
          body: `<p class="paa-answer">It depends on what you want from it, and I got this wrong for years.</p>
<p>Sulforaphane is produced when you cut or chew broccoli, because cutting lets the enzyme myrosinase convert glucoraphanin into sulforaphane. The problem: heat above roughly 70°C destroys myrosinase, stopping production entirely (Baenas et al., <em>Foods</em>, 2019).</p>
<p>The fix is simple. Chop your broccoli and wait 40 minutes before cooking. Conversion completes before heat, so you keep the sulforaphane even in cooked broccoli. Research suggests moderate microwave heating after this wait can raise sulforaphane yield by about 80% compared to no pre-chop boiling. Boiling with no pre-chop destroys myrosinase completely.</p>
<p>One thing I only learned from Dr. William Li's research: the stem has twice the sulforaphane of the florets. Most people throw it away. I chop it first now and cook it alongside the florets. Alfi actually prefers the stem pieces because they stay crisp.</p>
<p>For Vitamin C (89mg per 100g, USDA FDC 170379) and folate (63mcg per 100g, USDA FDC 170379), brief steaming or microwaving preserves more than boiling. Beta-carotene becomes easier to absorb when cooked. There is no single winner. The 40-minute chop method gives you both.</p>`,
          factBlock: {
            title: 'The 40-Minute Stem Hack',
            text: 'Chop the stem and florets. Wait 40 minutes. Then cook. The stem has 2× the sulforaphane of the florets, and pre-chopping lets myrosinase finish conversion before heat kills the enzyme.',
          },
        },
        {
          heading: 'What are the benefits of broccoli for women?',
          body: `<p>Broccoli contains indole-3-carbinol (I3C), a compound that influences estrogen metabolism and directs it toward less estrogenic metabolites. Early human trials showed regression of CIN (cervical intraepithelial neoplasia) lesions at doses of 200-400mg per day. I3C is not a proven cancer treatment, and Memorial Sloan Kettering Cancer Center is clear on that. But the research pathway is active and the mechanisms are real (Li et al., <em>Life Sciences</em>, 2022).</p>
<p>Post-menopausal women also get meaningful benefit from broccoli's iron, which comes paired with Vitamin C (89mg per 100g, USDA FDC 170379). Vitamin C dramatically improves non-heme iron absorption. For women who have reduced red meat intake, this combination matters.</p>
<p>The bone angle matters too. Broccoli provides calcium (47mg per 100g, USDA FDC 170379) and Vitamin K together. Vitamin K activates osteocalcin, the protein that anchors calcium to bone matrix. Getting them from the same food is more practical than chasing separate supplements.</p>`,
        },
        {
          heading: 'Does broccoli help with blood sugar?',
          body: `<p>Research suggests it may. A 2012 randomized controlled trial with 81 Type 2 diabetic patients found that 10g per day of broccoli sprout powder for four weeks reduced fasting blood glucose by 1.9 mmol/L and dropped the inflammation marker hs-CRP by 20.5% (Bahadoran et al., <em>Diabetes Research and Clinical Practice</em>, 2012). That used sprout powder, which contains 20-50 times more glucoraphanin than mature broccoli (Talalay et al., <em>PNAS</em>, 1997). The fiber in whole broccoli (2.6g per 100g, USDA FDC 170379) also slows glucose absorption and reduces post-meal blood sugar spikes independently of the sulforaphane mechanism. So even eating ordinary florets, not concentrates, gives you something real here.</p>
<p>Honestly, the blood sugar angle is why I started serving broccoli more consistently when we were eating out in Southeast Asia and the carb load at every meal was unavoidable. It is not a substitute for medical management, but as a side dish choice it pulls in the right direction.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'What organ is broccoli especially good for?',
          answer: 'The gut gets the most direct benefit — broccoli fiber feeds good bacteria, and research suggests sulforaphane improves gut wall integrity. The liver also benefits from sulforaphane activating Nrf2 detox pathways. The eyes benefit from 1,400mcg of lutein and zeaxanthin per 100g, linked to up to 43% lower macular degeneration risk in observational studies.',
        },
        {
          question: 'Is broccoli good for weight loss?',
          answer: 'Broccoli is 34 calories per 100g (USDA FDC 170379), mostly water and fiber. A full cup provides around 31 calories with meaningful volume. It is one of the best choices for high-volume, low-calorie eating.',
        },
        {
          question: 'Are broccoli sprouts healthier than regular broccoli?',
          answer: 'Yes, on sulforaphane concentration. Research suggests sprouts contain 20-50 times more glucoraphanin than mature broccoli (Talalay et al., PNAS 1997). They have less fiber and fewer other nutrients. Eating both is better than treating sprouts as a replacement.',
        },
        {
          question: 'What is the best way to cook broccoli without losing nutrients?',
          answer: 'Chop first, wait 40 minutes, then steam or microwave. This activates myrosinase before heat destroys it (Baenas et al., 2019). Avoid boiling in water you discard, which takes Vitamin C and folate with it.',
        },
        {
          question: 'Who should be careful about eating too much broccoli?',
          answer: 'People on warfarin (Vitamin K interaction), people with thyroid issues eating large raw amounts daily, and people with IBS who find cruciferous vegetables increase gas. Everyone else can eat it freely.',
        },
        {
          question: 'What are the health benefits of broccoli for women?',
          answer: 'Broccoli contains indole-3-carbinol (I3C), which influences estrogen metabolism. It provides iron paired with Vitamin C for better absorption — helpful for post-menopausal women with reduced meat intake. Calcium and Vitamin K together support bone density.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Sprouts: 20-50× More Sulforaphane',
          href: '/nutrition/sprouts',
          image: '/images/broccoli-sprouts/hero.webp',
          description: 'The Johns Hopkins discovery that triggered a global seed shortage.',
        },
        {
          title: 'Raw vs Cooked Broccoli: Which Wins on Nutrients?',
          href: '/nutrition/raw-vs-cooked',
          image: '/images/raw-vs-cooked-broccoli/hero.webp',
          description: 'The chop-and-wait method, microwaving science, and what boiling destroys.',
        },
        {
          title: 'Full Broccoli Nutrition Facts',
          href: '/nutrition',
          image: '/images/broccoli-nutrition/hero.webp',
          description: 'Complete USDA FDC 170379 data: calories, protein, fiber, vitamins, minerals.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
