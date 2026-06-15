import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
  description:
    'Microwaving increases sulforaphane by 80%. Boiling destroys it entirely. The chop-and-wait method. Full nutrient retention comparison across every cooking method — PubMed 2020 cited.',
  keywords: ['raw broccoli nutrition', 'raw vs cooked broccoli', 'does cooking broccoli destroy nutrients', 'broccoli cooking nutrients'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Raw vs Cooked Broccoli: Which Has More Nutrients?',
  description: 'Comprehensive comparison of nutrient retention in raw vs cooked broccoli — sulforaphane, Vitamin C, and the counterintuitive microwave finding.',
  image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
  publisher: { '@type': 'Organization', name: 'BroccoliPedia', url: 'https://broccolipedia.com' },
}

export default function RawVsCookedPage() {
  return (
    <EditorialTemplate
      title="Raw vs Cooked Broccoli: Which Has More Nutrients?"
      description="The answer is not straightforward. Some nutrients peak in raw broccoli. Some are better absorbed cooked. And sulforaphane — the most-studied compound — follows rules that defy common intuition about heat and nutrition."
      image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80"
      imageAlt="Side-by-side raw and steamed broccoli florets"
      keyTakeaways={[
        'Moderate microwaving (~60°C) increases sulforaphane yield by ~80% vs conventional heating (PubMed 2020)',
        'Boiling broccoli for more than 1 minute destroys myrosinase, eliminating sulforaphane production entirely',
        'The chop-and-wait hack: cut broccoli 40 minutes before cooking to lock in sulforaphane before heat kills the enzyme',
        'Vitamin C drops by roughly 50% when boiled, but remains near-intact when steamed or microwaved',
        'Vitamin K is largely heat-stable and retained across all cooking methods',
        'Adding mustard powder to cooked broccoli restores sulforaphane production via external myrosinase',
      ]}
      sections={[
        {
          heading: 'The Counterintuitive Finding: Microwaving Is Better Than Boiling',
          body: `<p>A 2020 study published in Food Science &amp; Nutrition (Wiley) tested sulforaphane production across multiple cooking methods. The findings upended the common assumption that raw is always best and heat is always bad.</p>
<p>Moderate microwave heating (around 60°C) actually raised sulforaphane yield by approximately 80% compared to conventional heating. High-power microwave bursts (950W, short duration) produced 40% or more sulforaphane than low-power settings.</p>
<p>The explanation: low-to-moderate heat can slightly accelerate the myrosinase enzyme activity, increasing the conversion of glucoraphanin to sulforaphane — before the temperature reaches the point where myrosinase denatures (~70°C). Properly used, a microwave can keep the broccoli below that threshold while warming it enough to enhance the conversion. (<a href="https://pubmed.ncbi.nlm.nih.gov/32328271/" class="underline text-forest" target="_blank" rel="noopener noreferrer">PubMed 32328271</a>)</p>`,
          factBlock: {
            title: 'Boiling Is the Worst Method for Sulforaphane',
            text: 'Boiling broccoli in water at 100°C for more than 60 seconds destroys myrosinase entirely. No myrosinase = no sulforaphane conversion. The water also leaches water-soluble nutrients (Vitamin C, folate, B vitamins) out of the vegetable. If you boil broccoli, the water it cooks in contains more nutrients than the broccoli left in the pot.',
          },
        },
        {
          heading: 'The 40-Minute Chop Hack',
          body: `<p>Sulforaphane is not pre-formed in broccoli — it is produced on demand when cell walls break. The moment you cut or chew broccoli, myrosinase (stored separately in cell vacuoles) contacts glucoraphanin (in a different cell compartment) and the conversion begins.</p>
<p>At room temperature, this reaction takes roughly 40 minutes to reach its peak. If you cook broccoli immediately after cutting — before the reaction completes — heat stops the conversion prematurely. But if you chop, wait 40 minutes, and then cook briefly, the sulforaphane has already formed and is relatively heat-stable (it can survive light cooking). (<a href="https://www.biovie.fr/en/blog/sulforaphane-and-broccoli-sprouts-the-complete-guide-n892" class="underline text-forest" target="_blank" rel="noopener noreferrer">Biovie sulforaphane guide</a>)</p>
<p>This is one of those cooking hacks that costs nothing — just reorganize your prep workflow: cut the broccoli first, make the rest of the meal, then add the broccoli last.</p>`,
          pullQuote: 'Cut broccoli first. Make everything else. Add it last. That 40-minute wait is worth more than any supplement.',
        },
        {
          heading: 'Vitamin C: Most at Risk from Heat',
          body: `<p>Vitamin C (ascorbic acid) is water-soluble and heat-sensitive — the compound most affected by cooking. Raw broccoli provides 89.2mg per 100g (99% DV). Here is how each method affects it:</p>`,
          table: {
            headers: ['Method', 'Vitamin C Retained', 'Notes'],
            rows: [
              ['Raw', '89.2mg (100%)', 'Maximum retention. Cold-stored.'],
              ['Steamed', '~70–80%', 'Brief steam best. Longer = more loss.'],
              ['Microwaved', '~75–85%', 'Short burst, minimal water = better retention.'],
              ['Boiled (1–2 min)', '~50%', 'Water leaches C out. Use the cooking water in soup.'],
              ['Boiled (>5 min)', '~30–40%', 'Significant loss to cooking water.'],
              ['Roasted (425°F)', '~60–70%', 'Dry heat — some loss but no leaching.'],
              ['Air fried', '~70–80%', 'Similar to roasting but slightly shorter time.'],
            ],
          },
        },
        {
          heading: 'What Cooking Actually Improves',
          body: `<p>Not all nutrients favor raw consumption. Two cases where light cooking helps:</p>
<p><strong>Beta-carotene and Vitamin A:</strong> These are fat-soluble carotenoids. Light cooking softens cell walls, increasing the bioavailability of beta-carotene. Eating roasted or steamed broccoli with olive oil delivers more usable Vitamin A than eating it raw without fat.</p>
<p><strong>Indole-3-Carbinol (I3C):</strong> Research from the Buck Institute suggests I3C activity (protecting retinal cells from oxidative stress) is present in both raw and cooked forms. Cooking does not appear to eliminate this compound&apos;s activity.</p>
<p><strong>Digestibility:</strong> For people with sensitive digestion, raw broccoli&apos;s fiber can cause gas and bloating. Light steaming softens the fiber structure, making it more tolerable without significant nutrient loss.</p>`,
        },
        {
          heading: 'The Mustard Powder Trick',
          body: `<p>If you cook broccoli and want to restore some sulforaphane production potential, add a pinch of mustard powder at serving time. Mustard seeds contain their own myrosinase. This external enzyme can convert any remaining glucoraphanin in the cooked broccoli, partially restoring sulforaphane production even when broccoli&apos;s own myrosinase has been destroyed by heat. A small amount — even 1/4 teaspoon of dry mustard powder — contains enough myrosinase to make a measurable difference.</p>`,
          factBlock: {
            title: 'Practical Summary',
            text: 'Best for sulforaphane: chop raw, wait 40 min, then microwave briefly or steam for 2–3 min. Best for Vitamin C: eat raw or microwave. Best for overall nutrient bioavailability: steam lightly with olive oil drizzled at the table.',
          },
        },
      ]}
      faqs={[
        {
          question: 'Is raw broccoli better for you than cooked?',
          answer: 'It depends on which nutrient you prioritize. Raw maximizes Vitamin C and enzyme-dependent sulforaphane production. Microwaved or lightly steamed broccoli can actually produce more sulforaphane than raw if the timing is right (moderate temperature, after a 40-minute chop rest). Boiling is the worst method for most nutrients. For overall nutrition, lightly steamed or microwaved broccoli is the practical optimum.',
        },
        {
          question: 'Does freezing broccoli destroy its nutrients?',
          answer: 'Commercially frozen broccoli is blanched before freezing, which destroys myrosinase. This means frozen broccoli produces very little sulforaphane. However, vitamins are largely preserved by the freezing process itself. To partially restore sulforaphane from frozen broccoli, add mustard powder at serving time.',
        },
        {
          question: 'How long should I steam broccoli to keep nutrients?',
          answer: 'Two to three minutes over boiling water in a covered pot or steamer basket is the standard. The broccoli should turn bright green and become just tender — not mushy. At this point Vitamin C retention is approximately 75–80% and the physical structure is preserved enough for good mouthfeel and digestion.',
        },
      ]}
      related={[
        {
          title: 'How to Steam Broccoli Perfectly',
          href: '/how-to-cook/steam',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
          description: 'The nutrient-preserving method with exact timing and the sulforaphane science.',
        },
        {
          title: 'How to Microwave Broccoli',
          href: '/how-to-cook/microwave',
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
          description: 'Why microwaving beats boiling — and the right settings to use.',
        },
        {
          title: 'Broccoli Sprouts: 20–50× More Potent',
          href: '/nutrition/sprouts',
          image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80',
          description: 'If you want maximum sulforaphane, sprouts are the answer.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
