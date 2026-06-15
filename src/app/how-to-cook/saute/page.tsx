import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Saute Broccoli',
  description: 'Saute broccoli in olive oil over medium-high heat for 5-7 minutes. Add garlic at the end so it does not burn.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Saute Broccoli',
  description: 'Pan-sauteed broccoli with garlic in olive oil — ready in under 10 minutes.',
  totalTime: 'PT10M',
  step: [
    { '@type': 'HowToStep', name: 'Heat the pan', text: 'Heat 2 tablespoons olive oil in a large skillet over medium-high heat until shimmering.' },
    { '@type': 'HowToStep', name: 'Add broccoli', text: 'Add florets in a single layer. Do not stir immediately — let them sear for 2 minutes.' },
    { '@type': 'HowToStep', name: 'Saute', text: 'Stir and continue cooking 3-4 minutes until edges are lightly browned and stems are tender.' },
    { '@type': 'HowToStep', name: 'Add garlic', text: 'Add 2 minced garlic cloves. Saute 1 more minute until fragrant. Do not add earlier or it will burn.' },
    { '@type': 'HowToStep', name: 'Season', text: 'Season with salt, red pepper flakes, and a squeeze of lemon. Serve immediately.' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Broccoli florets' },
    { '@type': 'HowToSupply', name: 'Olive oil (2 tbsp)' },
    { '@type': 'HowToSupply', name: 'Garlic cloves' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Large skillet or wok' },
  ],
}

export default function SauteBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Saute Broccoli</h1>
        <QuickAnswer>
          Saute broccoli in 2 tablespoons of olive oil over medium-high heat for 5-7 minutes total. Let it sear undisturbed for 2 minutes first to get browning, then stir. Add garlic only in the last minute — added earlier it burns and turns bitter. Finish with lemon juice and red pepper flakes.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Use medium-high heat — low heat steams instead of sauteing</li>
            <li>✓ Let the broccoli sear 2 minutes undisturbed before stirring</li>
            <li>✓ Add garlic last — 1 minute only to prevent burning</li>
            <li>✓ Dry florets before adding to the pan for better browning</li>
            <li>✓ Lemon juice at the end brightens the flavor</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Saute vs Roast</h2>
          <p className="text-deepForest leading-relaxed">Sauteing is faster than roasting (7 minutes vs 25) but produces less caramelization because the stovetop can not maintain the consistent high heat of an oven. The advantage is control — you can adjust in real time and finish with aromatics like garlic, ginger, or soy sauce for different flavor profiles.</p>
        </section>
      </article>
    </>
  )
}
