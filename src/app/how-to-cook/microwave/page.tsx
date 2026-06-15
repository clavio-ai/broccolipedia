import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Microwave Broccoli',
  description: 'Microwave broccoli in 3-4 minutes with 2 tablespoons of water. Studies show microwaving preserves more sulforaphane than boiling.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Microwave Broccoli',
  description: 'Quick microwave method for cooking broccoli in under 5 minutes with good nutrient retention.',
  totalTime: 'PT6M',
  step: [
    { '@type': 'HowToStep', name: 'Cut florets', text: 'Cut broccoli into 1-2 inch florets and place in a microwave-safe bowl.' },
    { '@type': 'HowToStep', name: 'Add water', text: 'Add 2 tablespoons of water to the bowl. Do not add more — this creates steam, not boiling.' },
    { '@type': 'HowToStep', name: 'Cover', text: 'Cover the bowl with a microwave-safe plate or microwave-safe wrap, leaving a small vent.' },
    { '@type': 'HowToStep', name: 'Microwave', text: 'Microwave on high for 3-4 minutes. Check at 3 minutes — florets should be bright green and tender-crisp.' },
    { '@type': 'HowToStep', name: 'Season', text: 'Carefully remove cover (steam is hot). Season with salt, pepper, and butter or olive oil.' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli' },
    { '@type': 'HowToSupply', name: 'Water (2 tablespoons)' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Microwave-safe bowl' },
    { '@type': 'HowToTool', name: 'Microwave' },
    { '@type': 'HowToTool', name: 'Microwave-safe plate or wrap' },
  ],
}

export default function MicrowaveBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Microwave Broccoli</h1>
        <QuickAnswer>
          Microwave broccoli with 2 tablespoons of water in a covered microwave-safe bowl for 3-4 minutes on high. The minimal water and short cook time actually preserves nutrients better than boiling. A 2020 PubMed study found microwaving with minimal water increased bioavailable sulforaphane by up to 80% compared to boiling.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Cook time: 3-4 minutes on high power</li>
            <li>✓ Use only 2 tablespoons of water — this steams, not boils</li>
            <li>✓ Cover tightly to trap steam</li>
            <li>✓ Microwaving with minimal water is nutritionally comparable to steaming</li>
            <li>✓ Do not microwave in plastic wrap — use microwave-safe glass or a plate</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">The Science: Microwave vs Other Methods</h2>
          <p className="text-deepForest leading-relaxed">Microwaving is faster and, with minimal water, more nutrient-preserving than boiling. The mechanism: short cooking time reduces thermal degradation of heat-sensitive compounds like vitamin C and glucosinolates. The key is using very little water so you are steaming the broccoli in its own moisture rather than leaching nutrients into a water bath.</p>
        </section>
      </article>
    </>
  )
}
