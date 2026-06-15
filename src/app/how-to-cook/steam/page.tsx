import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Steam Broccoli',
  description: 'Steam broccoli in 3-5 minutes over 1 inch of boiling water. Cut florets first, wait 40 minutes, then steam for maximum sulforaphane.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Steam Broccoli',
  description: 'Step-by-step guide to steaming broccoli on the stove to preserve nutrients and maximize sulforaphane.',
  totalTime: 'PT8M',
  step: [
    { '@type': 'HowToStep', name: 'Cut florets', text: 'Cut broccoli into even 1-inch florets for uniform cooking.' },
    { '@type': 'HowToStep', name: 'Wait 40 minutes', text: 'After cutting, wait 40 minutes before cooking to allow sulforaphane to form via the myrosinase enzyme.' },
    { '@type': 'HowToStep', name: 'Boil water', text: 'Add 1 inch of water to a medium saucepan and bring to a full boil over high heat.' },
    { '@type': 'HowToStep', name: 'Steam', text: 'Place florets in a steamer basket over the boiling water. Cover and steam 3-5 minutes until bright green and tender-crisp.' },
    { '@type': 'HowToStep', name: 'Season and serve', text: 'Remove from heat immediately. Season with salt, pepper, and a squeeze of lemon.' },
  ],
  supply: [{ '@type': 'HowToSupply', name: 'Fresh broccoli (1 head, about 300g)' }],
  tool: [
    { '@type': 'HowToTool', name: 'Steamer basket' },
    { '@type': 'HowToTool', name: 'Medium saucepan with lid' },
    { '@type': 'HowToTool', name: 'Chef knife and cutting board' },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function SteamBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Steam Broccoli</h1>
        <QuickAnswer>
          Steam broccoli in 3-5 minutes over 1 inch of boiling water in a covered steamer basket. Cut florets to 1-inch size, then wait 40 minutes before cooking — this chop-and-wait trick activates the myrosinase enzyme and can boost sulforaphane by up to 2.8x. Remove when bright green and tender-crisp.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Steam time: 3-5 minutes over 1 inch boiling water</li>
            <li>✓ Wait 40 minutes after cutting before cooking for maximum sulforaphane</li>
            <li>✓ Steaming retains more vitamin C than boiling (boiling leaches ~50%)</li>
            <li>✓ Bright green color = done; olive drab = overcooked</li>
            <li>✓ No salt in the water — add after cooking to preserve color</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Step-by-Step Instructions</h2>
          <ol className="space-y-3 text-deepForest leading-relaxed">
            <li><strong>1. Cut florets to 1-inch size.</strong> Even sizing ensures uniform cooking. Include the upper stalk — it has the same nutrients and cooks at the same rate as the florets.</li>
            <li><strong>2. Wait 40 minutes.</strong> Research from Penn State (2021) shows the chop-and-wait method significantly increases bioavailable sulforaphane. Skip this only if time is the constraint.</li>
            <li><strong>3. Bring 1 inch of water to a boil.</strong> Use a medium saucepan. Do not fill above the steamer basket bottom.</li>
            <li><strong>4. Steam 3-5 minutes, covered.</strong> Check at 3 minutes — florets should be bright green with slight resistance to a fork. At 5 minutes they are soft but not mushy.</li>
            <li><strong>5. Remove and season immediately.</strong> Resting in the steam will continue cooking. Plate immediately with salt, pepper, lemon, or olive oil.</li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Why Steaming Beats Boiling for Nutrients</h2>
          <p className="text-deepForest leading-relaxed">Boiling broccoli in water causes water-soluble vitamins — especially vitamin C and glucosinolates — to leach into the cooking liquid. A 2009 study in the Journal of the Science of Food and Agriculture found that boiling destroyed up to 77% of sulforaphane precursors, while steaming retained most of them. USDA data confirms broccoli has 89.2mg of vitamin C per 100g raw; boiling cuts this roughly in half.</p>
        </section>
      </article>
    </>
  )
}
