import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How Long Does Broccoli Last? Shelf Life Guide',
  description: 'Broccoli lasts 3-5 days in the fridge loose, or up to 7 days wrapped in a damp paper towel in an airtight container. Frozen broccoli keeps 10-12 months.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fresh broccoli lasts 3-5 days in the refrigerator stored loose in the crisper drawer. Wrapped in a damp paper towel and stored in an airtight container or bag, it lasts up to 7 days. Cut broccoli florets last 3-4 days stored in an airtight container. Do not wash broccoli before refrigerating — moisture accelerates decay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze fresh broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you must blanch it first. Blanch florets in boiling salted water for 90 seconds, then immediately plunge into an ice bath for 2 minutes. Drain, pat dry, freeze in a single layer on a baking sheet until solid (about 2 hours), then transfer to freezer bags. Properly blanched and frozen broccoli keeps for 10-12 months. Without blanching, enzymes continue to degrade texture and flavor even at freezing temperatures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does broccoli turn yellow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli turns yellow when the chlorophyll in the florets breaks down — a natural aging process that accelerates with time, warmth, and ethylene gas from other produce. Yellow florets are not dangerous, but they signal the broccoli is past peak freshness and will have a more bitter, pungent flavor. Yellow broccoli is still safe to eat, though quality has declined. To prevent yellowing, store away from ethylene-producing fruits like apples, bananas, and avocados.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function ShelfLifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How Long Does Broccoli Last?</h1>
        <QuickAnswer>
          Broccoli lasts 3-5 days in the fridge stored loose. Wrapped in a damp paper towel and sealed in an airtight container, it lasts up to 7 days. Do not wash before storing — moisture speeds spoilage. Frozen broccoli (blanched first) keeps 10-12 months.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Fridge (loose): 3-5 days</li>
            <li>✓ Fridge (wrapped in damp paper towel, airtight): up to 7 days</li>
            <li>✓ Frozen (blanched first): 10-12 months</li>
            <li>✓ Do not wash before refrigerating — moisture accelerates decay</li>
            <li>✓ Store away from ethylene-producing fruits (apples, bananas) to prevent yellowing</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Storage Tips by Method</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-deepForest text-white">
                  <th className="px-4 py-2 text-left">Storage Method</th>
                  <th className="px-4 py-2 text-left">Duration</th>
                  <th className="px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 border-b border-greenTint">Fridge, loose</td>
                  <td className="px-4 py-2 border-b border-greenTint">3-5 days</td>
                  <td className="px-4 py-2 border-b border-greenTint">Crisper drawer, unwashed</td>
                </tr>
                <tr className="bg-greenTint">
                  <td className="px-4 py-2 border-b border-greenTint">Fridge, wrapped</td>
                  <td className="px-4 py-2 border-b border-greenTint">Up to 7 days</td>
                  <td className="px-4 py-2 border-b border-greenTint">Damp paper towel + airtight bag</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 border-b border-greenTint">Cut florets, fridge</td>
                  <td className="px-4 py-2 border-b border-greenTint">3-4 days</td>
                  <td className="px-4 py-2 border-b border-greenTint">Airtight container</td>
                </tr>
                <tr className="bg-greenTint">
                  <td className="px-4 py-2 border-b border-greenTint">Frozen (blanched)</td>
                  <td className="px-4 py-2 border-b border-greenTint">10-12 months</td>
                  <td className="px-4 py-2 border-b border-greenTint">Must blanch first — see how to freeze</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 border-b border-greenTint">Cooked, fridge</td>
                  <td className="px-4 py-2 border-b border-greenTint">3-4 days</td>
                  <td className="px-4 py-2 border-b border-greenTint">Airtight container</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">How long does broccoli last in the fridge?</h3>
              <p className="text-sage text-sm leading-relaxed">3-5 days loose, up to 7 days wrapped in a damp paper towel in an airtight container. Do not wash until ready to use.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Can you freeze fresh broccoli?</h3>
              <p className="text-sage text-sm leading-relaxed">Yes, but blanch first (boiling water 90 seconds, ice bath 2 minutes, dry, freeze). Without blanching, enzymes degrade texture. Properly frozen broccoli keeps 10-12 months.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Why does broccoli turn yellow?</h3>
              <p className="text-sage text-sm leading-relaxed">Chlorophyll breaks down as broccoli ages, accelerated by ethylene gas from nearby fruits. Yellow broccoli is safe to eat but past peak quality. Store away from apples and bananas to slow yellowing.</p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
