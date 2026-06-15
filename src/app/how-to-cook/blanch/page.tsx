import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Blanch Broccoli',
  description: 'Blanch broccoli in boiling salted water for 90 seconds, then immediately plunge into ice water. This locks in the bright green color and crisp texture.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Blanch Broccoli',
  description: 'Blanching broccoli preserves vibrant green color and crisp texture — essential step before freezing or using in cold salads.',
  totalTime: 'PT10M',
  step: [
    { '@type': 'HowToStep', name: 'Prepare ice bath', text: 'Fill a large bowl with ice and cold water. Set aside next to the stove.' },
    { '@type': 'HowToStep', name: 'Boil salted water', text: 'Bring a large pot of heavily salted water to a full rolling boil.' },
    { '@type': 'HowToStep', name: 'Blanch 90 seconds', text: 'Add broccoli florets and blanch for exactly 90 seconds. Do not cover.' },
    { '@type': 'HowToStep', name: 'Ice bath immediately', text: 'Using a slotted spoon or spider, transfer immediately to the ice bath. This stops cooking instantly.' },
    { '@type': 'HowToStep', name: 'Drain and dry', text: 'After 2 minutes in the ice bath, drain well and pat dry. The broccoli is now blanched and ready to use or freeze.' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli' },
    { '@type': 'HowToSupply', name: 'Ice' },
    { '@type': 'HowToSupply', name: 'Salt' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Large pot' },
    { '@type': 'HowToTool', name: 'Large bowl' },
    { '@type': 'HowToTool', name: 'Slotted spoon or spider strainer' },
  ],
}

export default function BlanchBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Blanch Broccoli</h1>
        <QuickAnswer>
          Blanch broccoli in boiling salted water for exactly 90 seconds, then immediately transfer to an ice bath for 2 minutes. The ice bath is non-negotiable — it stops the cooking instantly and locks in the bright green color. Blanching is required before freezing to deactivate enzymes that cause texture and flavor degradation.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Blanch time: 90 seconds exactly in boiling salted water</li>
            <li>✓ Ice bath immediately after — this is essential, not optional</li>
            <li>✓ Blanching is required before freezing broccoli</li>
            <li>✓ The chlorophyll reaction creates the bright green color at 90 seconds</li>
            <li>✓ After the ice bath: drain well and pat dry before using or freezing</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Why Blanch Before Freezing?</h2>
          <p className="text-deepForest leading-relaxed">Raw broccoli contains enzymes that continue to break down cell walls and degrade flavor and color even when frozen. Blanching denatures these enzymes by exposing them to heat, then the ice bath stops any further cooking. The USDA recommends blanching broccoli for 3 minutes before freezing (longer than for immediate use) to ensure full enzyme deactivation throughout the floret.</p>
        </section>
      </article>
    </>
  )
}
