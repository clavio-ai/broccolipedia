import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Can Dogs Eat Broccoli? (Yes, But Read This First)',
  description: 'Dogs can eat broccoli in small amounts — under 10% of daily diet. The florets are safe; large amounts of stalk can cause GI irritation due to isothiocyanates.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much broccoli can a dog eat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli should make up no more than 10% of a dog\'s daily caloric intake. For a 25-pound dog eating 600 calories per day, that is 60 calories maximum — roughly 3-4 small florets. Broccoli stems are harder to digest and should be cut small or avoided for small dogs. Always introduce new foods gradually.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli toxic to dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli is not toxic to dogs, but the florets contain isothiocyanates — compounds that can cause gastrointestinal irritation in large amounts. Symptoms include vomiting, gas, and diarrhea. This only occurs when dogs eat large quantities. Small amounts (under 10% of daily diet) are considered safe by veterinarians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can dogs eat raw broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, dogs can eat raw broccoli. Raw florets are safe and retain more nutrients. However, the tough stalk can be a choking hazard for small dogs. Cut raw broccoli into small, bite-sized pieces. Cooked broccoli (steamed, without seasoning) is also safe and easier to digest.',
      },
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function CanDogsEatBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">Can Dogs Eat Broccoli?</h1>
        <QuickAnswer>
          Yes, dogs can eat broccoli — in small amounts. Keep it under 10% of their daily caloric intake. The florets are safest; the stalk is harder to digest and a potential choking hazard for small dogs. Broccoli contains isothiocyanates that cause GI upset in large quantities, so moderation is the rule. Plain, unseasoned steamed or raw florets are the safest preparation.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Safe in small amounts — under 10% of daily diet</li>
            <li>✓ Florets are safer than stalks for dogs</li>
            <li>✓ Large amounts cause GI upset due to isothiocyanates</li>
            <li>✓ No seasoning — plain only (no garlic, onion, salt, or butter)</li>
            <li>✓ Both raw and cooked (unseasoned) are acceptable</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">The Isothiocyanate Risk Explained</h2>
          <p className="text-deepForest leading-relaxed">Broccoli florets contain isothiocyanates — sulfur compounds that form when glucosinolates are broken down. In humans, these are the beneficial cancer-fighting compounds. In dogs, high concentrations can irritate the gastrointestinal tract. The threshold for problems is roughly 25% or more of daily food intake as broccoli. At 10% or below, this is not a concern for most dogs.</p>
        </section>
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">How much broccoli can a dog eat?</h3>
              <p className="text-sage text-sm leading-relaxed">No more than 10% of daily caloric intake. For a 25-pound dog, that is roughly 3-4 small florets. Always introduce gradually and cut small to prevent choking.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is broccoli toxic to dogs?</h3>
              <p className="text-sage text-sm leading-relaxed">Not in small amounts. Large quantities of isothiocyanates (the compounds in broccoli florets) can cause GI irritation. Keep portions small and it is safe.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Can dogs eat raw broccoli?</h3>
              <p className="text-sage text-sm leading-relaxed">Yes. Cut into small pieces to prevent choking. Both raw and plain cooked broccoli are fine. Never give broccoli cooked with garlic, onion, or heavy seasoning.</p>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
