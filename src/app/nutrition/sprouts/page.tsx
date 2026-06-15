import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Sprouts: 20–50× More Sulforaphane Than Mature Broccoli',
  description:
    'Three-day broccoli sprouts contain 20–50 times more glucoraphanin than mature broccoli. The Johns Hopkins 1997 PNAS discovery, the seed shortage it caused, and how to use them.',
  keywords: ['broccoli sprouts', 'broccoli sprout benefits', 'sulforaphane broccoli sprouts', 'broccoli sprouts nutrition'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Broccoli Sprouts: 20–50× More Sulforaphane Than Mature Broccoli',
  description: 'The Johns Hopkins discovery of high glucoraphanin concentrations in broccoli sprouts, clinical trial data, and practical guidance.',
  image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200&q=80',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
  publisher: { '@type': 'Organization', name: 'BroccoliPedia', url: 'https://broccolipedia.com' },
}

export default function SproutsPage() {
  return (
    <EditorialTemplate
      title="Broccoli Sprouts: 20–50× More Sulforaphane Than Mature Broccoli"
      description="In 1997, researchers at Johns Hopkins found something that sent broccoli seed prices through the roof: three-day-old sprouts pack 20–50 times more glucoraphanin than the full-grown vegetable."
      image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200&q=80"
      imageAlt="Fresh broccoli sprouts in a glass jar on a windowsill"
      keyTakeaways={[
        '3-day broccoli sprouts contain 20–50× more glucoraphanin (sulforaphane precursor) than mature broccoli (Johns Hopkins, PNAS 1997)',
        'The 1997 New York Times article on this discovery caused a global broccoli seed shortage',
        'A 2012 RCT found broccoli sprout powder reduced fasting glucose by 1.9 mmol/L in type 2 diabetics over 4 weeks',
        'A 2018 RCT found IL-6 inflammation markers fell 56% after 10 weeks of broccoli sprout consumption',
        'Sprouts are eaten raw — no cooking needed, and no risk of destroying myrosinase through heat',
      ]}
      sections={[
        {
          heading: 'The Johns Hopkins Discovery That Changed Everything',
          body: `<p>In 1997, Paul Talalay, Jed Fahey, and Yuesheng Zhang at Johns Hopkins University published a paper in the Proceedings of the National Academy of Sciences (PNAS) with a finding that surprised the scientific community: three-day-old broccoli sprouts contain 20 to 50 times more glucoraphanin than mature broccoli.</p>
<p>Glucoraphanin is the glucosinolate that myrosinase converts into sulforaphane — the compound MD Anderson Cancer Center identifies as the most extensively studied chemopreventive compound in any vegetable.</p>
<p>When the New York Times covered the study, demand for broccoli seeds exploded. Seed suppliers ran out. There was, briefly, a global broccoli sprout seed shortage. This is one of the more unusual outcomes of an academic paper in nutrition science. (<a href="https://www.sciencedaily.com/releases/1997/09/970919062654.htm" class="underline text-forest" target="_blank" rel="noopener noreferrer">Science Daily / PNAS 1997</a>)</p>`,
          factBlock: {
            title: 'Why Sprouts Are More Potent',
            text: 'The plant produces glucoraphanin as a defense compound. In seedlings, this defense is at its highest concentration relative to plant mass — the young plant is most vulnerable and therefore most chemically defended. As the plant grows, the glucoraphanin concentration dilutes across a larger biomass.',
          },
        },
        {
          heading: 'Clinical Research on Broccoli Sprouts',
          body: `<p><strong>Blood sugar (2012 RCT):</strong> An 81-patient randomized controlled trial enrolled type 2 diabetic patients who consumed 10g per day of broccoli sprout powder for 4 weeks. Fasting blood glucose fell by 1.9 mmol/L and hs-CRP (inflammation marker) decreased by 20.5%. This remains one of the stronger human RCTs for sulforaphane&apos;s blood sugar effects. (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1756464612000953" class="underline text-forest" target="_blank" rel="noopener noreferrer">ScienceDirect</a>)</p>
<p><strong>Inflammation (2018 RCT):</strong> 40 healthy overweight subjects consumed 30g of broccoli sprouts daily for 10 weeks. IL-6 — a key inflammation biomarker — fell from 4.76 to 2.11 pg/mL, a 56% reduction. Published in Clinical Nutrition. (<a href="https://www.clinicalnutritionjournal.com/article/S0261-5614(18)30118-3/abstract" class="underline text-forest" target="_blank" rel="noopener noreferrer">Clinical Nutrition</a>)</p>
<p><strong>Prediabetes (2025 RCT):</strong> A double-blind 35-patient trial found a 0.2 mmol/L fasting glucose reduction over 12 weeks of broccoli sprout extract in prediabetic individuals. Published in Nature Microbiology. Note: this trial did NOT meet its primary endpoint — the results are real but smaller than the 2012 study.</p>
<p><strong>Prostate cancer (2015, OHSU):</strong> Phase II trial with concentrated sulforaphane extract — PSA doubling time increased from 6.1 to 9.6 months. This used a standardized sprout extract, not whole sprouts.</p>`,
          pullQuote: 'A New York Times article about broccoli sprouts caused a global seed shortage in 1997. That is how significant the finding was.',
        },
        {
          heading: 'How to Eat Broccoli Sprouts',
          body: `<p>Sprouts are typically eaten raw — which is actually ideal, because cooking above 70°C destroys myrosinase, eliminating sulforaphane production. With raw sprouts, all the myrosinase is intact and active, maximizing sulforaphane yield.</p>
<p>The most common uses: salad topping, sandwich ingredient, mixed into smoothies (flavour is mild and slightly sulphurous), or stirred into dips and dressings at serving time. They hold up well in the refrigerator for 5–7 days after purchase.</p>
<p>Store-bought sprouts should show bright white roots and vivid green tips. Avoid any with yellowing, sliminess, or a strong sulphurous odour — these have begun to degrade.</p>`,
        },
        {
          heading: 'Broccoli Sprouts vs Mature Broccoli: What to Choose',
          body: `<p>The answer is not either/or. Mature broccoli provides significant sulforaphane (especially when eaten raw or lightly steamed after the chop-and-wait method), plus 2.6g fiber, 89.2mg Vitamin C, and 102mcg Vitamin K. Sprouts deliver the sulforaphane precursor in much higher concentration but contain less fiber and fewer vitamins per gram.</p>
<p>For someone focused specifically on sulforaphane — for inflammation, blood sugar, or cancer risk reduction — sprouts are the efficient choice. For someone who wants broad nutritional coverage from a single vegetable, mature broccoli is more complete. The optimal approach is both: daily mature broccoli for vitamins and fiber, with regular sprout additions for sulforaphane concentration.</p>`,
          table: {
            headers: ['Comparison', 'Mature Broccoli (100g)', 'Sprouts (3-day, 100g)'],
            rows: [
              ['Glucoraphanin', 'Baseline', '20–50× baseline'],
              ['Vitamin C', '89.2mg (99% DV)', 'Lower per gram'],
              ['Vitamin K', '102mcg (85% DV)', 'Lower per gram'],
              ['Dietary Fiber', '2.6g', 'Less — mostly water'],
              ['Eaten', 'Raw or cooked', 'Raw only (to preserve enzymes)'],
              ['Calories', '34 kcal', '~35 kcal'],
            ],
          },
        },
      ]}
      faqs={[
        {
          question: 'Can I grow broccoli sprouts at home?',
          answer: 'Yes. You need broccoli seeds specifically labeled for sprouting (organic, untreated). Rinse seeds, soak 8 hours, drain into a mason jar with a mesh lid, rinse twice daily, and harvest at day 3. The whole process takes about 72 hours and requires no special equipment beyond a jar and seeds.',
        },
        {
          question: 'How many broccoli sprouts should I eat per day?',
          answer: 'The clinical trials used 30g/day (the 2018 inflammation RCT) to 10g/day sprout powder (the 2012 blood sugar RCT). A tablespoon or two of fresh sprouts daily is a practical amount for regular dietary inclusion. No established upper limit exists, but high doses of concentrated extracts have been studied at up to 200 μmol/day of sulforaphane without significant adverse events.',
        },
        {
          question: 'Do cooked broccoli sprouts still work?',
          answer: 'Cooking above 70°C destroys myrosinase, eliminating sulforaphane conversion. However, if you eat the cooked sprouts alongside a food that contains its own myrosinase — mustard, radish, arugula — sulforaphane production resumes via that external enzyme. Eat sprouts raw when possible for maximum effect.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Benefits: Clinical Evidence',
          href: '/nutrition/benefits',
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
          description: 'The full clinical trial landscape for sulforaphane and broccoli compounds.',
        },
        {
          title: 'Raw vs Cooked Broccoli',
          href: '/nutrition/raw-vs-cooked',
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
          description: 'Why microwaving beats boiling, and the 40-minute chop trick.',
        },
        {
          title: 'How to Grow Broccoli from Seed',
          href: '/growing/from-seed',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
          description: 'Growing full broccoli plants from seed — seed to harvest.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
