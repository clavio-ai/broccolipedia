import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Roast Broccoli',
  description: 'Roast broccoli at 425°F for 20-25 minutes until caramelized and crispy. Toss in olive oil, spread in a single layer, and do not crowd the pan.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Roast Broccoli',
  description: 'Oven-roasted broccoli with caramelized edges and crispy florets.',
  totalTime: 'PT30M',
  step: [
    { '@type': 'HowToStep', name: 'Preheat oven', text: 'Preheat oven to 425°F (220°C). Place a rimmed baking sheet in the oven while it heats.' },
    { '@type': 'HowToStep', name: 'Cut and dry', text: 'Cut broccoli into florets. Pat completely dry with paper towels — moisture is the enemy of crispiness.' },
    { '@type': 'HowToStep', name: 'Toss with oil', text: 'Toss florets with 2 tablespoons olive oil, 1/2 teaspoon salt, and 1/4 teaspoon black pepper until evenly coated.' },
    { '@type': 'HowToStep', name: 'Single layer', text: 'Spread on the hot baking sheet in a single layer with space between florets. Crowding causes steaming, not roasting.' },
    { '@type': 'HowToStep', name: 'Roast', text: 'Roast 20-25 minutes, flipping once at 12 minutes, until edges are deeply browned and crispy.' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli (1 large head)' },
    { '@type': 'HowToSupply', name: 'Olive oil (2 tbsp)' },
    { '@type': 'HowToSupply', name: 'Salt and black pepper' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Rimmed baking sheet' },
    { '@type': 'HowToTool', name: 'Oven' },
  ],
}

export default function RoastBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Roast Broccoli</h1>
        <QuickAnswer>
          Roast broccoli at 425°F (220°C) for 20-25 minutes. Toss in olive oil, spread in a single layer on a hot baking sheet, and flip once at 12 minutes. The high heat caramelizes the edges and creates crispy, nutty florets that taste nothing like boiled broccoli.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Temperature: 425°F — lower temps produce soggy results</li>
            <li>✓ Dry the broccoli before oiling — moisture prevents browning</li>
            <li>✓ Single layer only — crowding causes steaming, not roasting</li>
            <li>✓ Preheat the baking sheet for better caramelization</li>
            <li>✓ High-heat roasting does reduce some sulforaphane, but creates beneficial Maillard compounds</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">The Single Layer Rule</h2>
          <p className="text-deepForest leading-relaxed">This is the most important technique note: florets need space. When packed together, steam builds up and the broccoli softens instead of caramelizing. If you have a lot, use two baking sheets rather than one crowded one. A hot pan (preheated in the oven) also helps — it sears the bottom of the florets immediately on contact.</p>
        </section>
      </article>
    </>
  )
}
