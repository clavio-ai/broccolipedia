import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Is Broccoli Man-Made? The Honest Answer',
  description: 'Yes, broccoli is man-made — selectively bred from wild Brassica oleracea by Roman farmers starting around the 6th century BCE. It does not exist in nature.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is broccoli natural?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli does not exist in nature in its current form. It was selectively bred by humans from wild Brassica oleracea (wild cabbage) native to coastal Mediterranean regions. Roman farmers began the selective breeding process around the 6th century BCE, selecting plants with larger, more compact flowering heads over many generations.',
      },
    },
    {
      '@type': 'Question',
      name: 'When was broccoli invented?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli as a distinct vegetable emerged from selective breeding of wild Mediterranean cabbage starting approximately in the 6th century BCE in Italy. The Romans cultivated it extensively, and it was well-documented by Roman writers including Pliny the Elder. It was introduced to England in the 18th century and to North America in the early 19th century.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli a GMO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli is not a GMO (Genetically Modified Organism). It was developed through traditional selective breeding over thousands of years — a process of choosing plants with desirable traits and cross-pollinating them across generations. This is fundamentally different from genetic modification, which directly alters an organism\'s DNA in a laboratory. Broccoli qualifies as non-GMO under all international standards.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function IsBroccoliManMadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">Is Broccoli Man-Made? The Honest Answer</h1>
        <QuickAnswer>
          Yes, broccoli is man-made. It was selectively bred from wild Mediterranean cabbage (Brassica oleracea) by Roman farmers starting around the 6th century BCE. It does not exist in nature in its current form. It is not a GMO — it was developed through traditional selective breeding over thousands of years.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Broccoli does not exist in the wild — it is a human-created cultivar</li>
            <li>✓ Developed from wild Brassica oleracea (wild cabbage) through selective breeding</li>
            <li>✓ Roman farmers began the process around 6th century BCE</li>
            <li>✓ Not a GMO — traditional breeding, no laboratory DNA modification</li>
            <li>✓ Same origin as cabbage, cauliflower, kale, Brussels sprouts, and kohlrabi</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Is Selective Breeding?</h2>
          <p className="text-deepForest leading-relaxed">Selective breeding is the process of choosing plants with desirable traits — larger flower heads, more compact growth, better flavor — and cross-pollinating them over many generations. Over centuries, the wild cabbage plant was transformed into today&apos;s broccoli. The same species (Brassica oleracea) also produced cauliflower (selecting for white curds), kale (selecting for leaves), and Brussels sprouts (selecting for axillary buds). This is why broccoli, cabbage, kale, and cauliflower are all members of the same species.</p>
        </section>
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is broccoli natural?</h3>
              <p className="text-sage text-sm leading-relaxed">No. Broccoli does not exist in nature in its current form. It was selectively bred from wild Brassica oleracea native to coastal Mediterranean regions, starting around the 6th century BCE.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">When was broccoli invented?</h3>
              <p className="text-sage text-sm leading-relaxed">Broccoli emerged as a distinct vegetable from selective breeding starting approximately the 6th century BCE in Italy. It was introduced to England in the 18th century and North America in the early 19th century.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is broccoli a GMO?</h3>
              <p className="text-sage text-sm leading-relaxed">No. Broccoli was developed through traditional selective breeding — not laboratory DNA modification. It qualifies as non-GMO under all international standards.</p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
