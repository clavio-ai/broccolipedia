import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Boil Broccoli',
  description: 'Boil broccoli for 2-3 minutes in salted water. Quick blanch preserves color and texture. Avoid longer — it destroys nutrients and turns mushy.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Boil Broccoli',
  description: 'Quick boiling method to cook broccoli while retaining color and some texture.',
  totalTime: 'PT8M',
  step: [
    { '@type': 'HowToStep', name: 'Salt the water', text: 'Bring a large pot of generously salted water to a full boil. Use at least 1 teaspoon salt per quart.' },
    { '@type': 'HowToStep', name: 'Cut florets', text: 'Cut broccoli into even 1-2 inch florets so they cook at the same rate.' },
    { '@type': 'HowToStep', name: 'Boil', text: 'Add florets to boiling water. Boil for 2-3 minutes — 2 for crisp-tender, 3 for soft.' },
    { '@type': 'HowToStep', name: 'Drain immediately', text: 'Drain and optionally plunge into ice water to stop cooking and preserve green color.' },
  ],
  supply: [{ '@type': 'HowToSupply', name: 'Fresh broccoli and salt' }],
  tool: [
    { '@type': 'HowToTool', name: 'Large pot' },
    { '@type': 'HowToTool', name: 'Colander' },
  ],
}

export default function BoilBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Boil Broccoli</h1>
        <QuickAnswer>
          Boil broccoli for 2-3 minutes in heavily salted, rapidly boiling water. Drain immediately. Anything longer destroys the texture and leaches water-soluble nutrients — USDA data shows boiling can eliminate up to 50% of vitamin C compared to raw. For best results, use the 2-minute mark and serve right away.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Boil time: 2-3 minutes maximum</li>
            <li>✓ Use plenty of salted water at a full boil</li>
            <li>✓ Drain immediately — do not leave sitting in hot water</li>
            <li>✓ Ice bath preserves the bright green color</li>
            <li>✓ Boiling leaches vitamins — steaming or roasting is nutritionally superior</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Nutrient Loss in Boiling</h2>
          <p className="text-deepForest leading-relaxed">Boiling is the least nutrient-preserving cooking method for broccoli. Water-soluble nutrients (vitamin C, B vitamins, and glucosinolate precursors to sulforaphane) leach into the cooking water. If you do boil, consider saving the cooking water for soups or sauces — it contains the leached nutrients.</p>
        </section>
      </article>
    </>
  )
}
