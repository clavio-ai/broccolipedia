import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Air Fry Broccoli',
  description: 'Air fry broccoli at 375°F for 8-10 minutes. Crispy outside, tender inside — the fastest way to get roasted-style results.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Air Fry Broccoli',
  description: 'Crispy air fryer broccoli in under 10 minutes — no preheating, no flipping required.',
  totalTime: 'PT12M',
  step: [
    { '@type': 'HowToStep', name: 'Cut florets', text: 'Cut broccoli into florets no larger than 2 inches. Smaller pieces get crispier.' },
    { '@type': 'HowToStep', name: 'Season', text: 'Toss in 1 tablespoon olive oil, salt, garlic powder, and pepper. Coat evenly.' },
    { '@type': 'HowToStep', name: 'Air fry', text: 'Place in air fryer basket in a single layer. Air fry at 375°F for 8-10 minutes, shaking the basket halfway through.' },
    { '@type': 'HowToStep', name: 'Check', text: 'Florets should have browned, crispy edges. Add 1-2 more minutes if needed.' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli florets' },
    { '@type': 'HowToSupply', name: 'Olive oil (1 tbsp)' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Air fryer' },
  ],
}

export default function AirFryerBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Air Fry Broccoli</h1>
        <QuickAnswer>
          Air fry broccoli at 375°F for 8-10 minutes in a single layer, shaking the basket at 5 minutes. No preheating needed for most air fryers. The result: crispy, caramelized edges with a tender center — faster than the oven and barely any cleanup.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Temperature: 375°F for 8-10 minutes</li>
            <li>✓ Single layer in the basket — essential for crispiness</li>
            <li>✓ Shake at 5 minutes for even browning</li>
            <li>✓ No need to preheat — air fryers heat instantly</li>
            <li>✓ Smaller florets = crispier result</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Air Fryer vs Oven Roasting</h2>
          <p className="text-deepForest leading-relaxed">Air fryer broccoli takes 8-10 minutes versus 20-25 minutes in the oven. The circulating hot air achieves similar caramelization in half the time. The limitation is batch size — most air fryer baskets fit only one head of broccoli at a time without crowding.</p>
        </section>
      </article>
    </>
  )
}
