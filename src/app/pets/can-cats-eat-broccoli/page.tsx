import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Can Cats Eat Broccoli?',
  description: 'Cats can eat small amounts of broccoli — it is non-toxic. But cats are obligate carnivores with limited ability to digest plant fiber. Offer rarely and in tiny amounts.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is broccoli safe for cats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli is not toxic to cats and is considered safe in very small amounts. However, cats are obligate carnivores — they derive little nutritional benefit from vegetables. Broccoli can be offered as an occasional treat, but it should never replace any part of a cat\'s diet. Some cats show no interest at all; others may nibble on it occasionally without issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats digest broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cats can partially digest broccoli, but their digestive systems are optimized for meat, not plant fiber. Unlike dogs and humans, cats lack the salivary enzyme amylase and have a shorter intestinal tract relative to body size, which limits carbohydrate and fiber digestion. Eating more than a tiny amount of broccoli may cause gas, vomiting, or diarrhea in cats.',
      },
    },
  ],
}

export default function CanCatsEatBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">Can Cats Eat Broccoli?</h1>
        <QuickAnswer>
          Broccoli is non-toxic to cats and safe in tiny amounts as an occasional treat. However, cats are obligate carnivores — they get almost no nutritional benefit from vegetables. Too much broccoli causes digestive upset (gas, vomiting) because cats lack the enzymes to process plant fiber efficiently. Offer a small floret at most, rarely.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Non-toxic — broccoli will not harm cats in small amounts</li>
            <li>✓ Cats derive almost no nutritional benefit from broccoli</li>
            <li>✓ Too much causes digestive upset — keep portions tiny</li>
            <li>✓ Obligate carnivores: cats evolved to digest meat, not plant fiber</li>
            <li>✓ Plain, cooked (no seasoning) is safest if offering at all</li>
          </ul>
        </div>
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is broccoli safe for cats?</h3>
              <p className="text-sage text-sm leading-relaxed">Yes, in very small amounts as an occasional treat. Not toxic, but provides no nutritional value to obligate carnivores like cats.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Can cats digest broccoli?</h3>
              <p className="text-sage text-sm leading-relaxed">Partially, but poorly. Cats lack amylase in saliva and have shorter intestinal tracts than omnivores, limiting plant fiber digestion. More than a tiny piece may cause gas or vomiting.</p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
