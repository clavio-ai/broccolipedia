import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'How to Cook Frozen Broccoli',
  description: 'Cook frozen broccoli from frozen in 4-5 minutes by steaming or roasting. Never thaw first — cooking from frozen gives better texture.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Cook Frozen Broccoli',
  description: 'Best methods for cooking frozen broccoli directly from frozen for optimal texture.',
  totalTime: 'PT10M',
  step: [
    { '@type': 'HowToStep', name: 'Do not thaw', text: 'Cook directly from frozen. Thawing first makes the broccoli waterlogged and mushy.' },
    { '@type': 'HowToStep', name: 'Choose method', text: 'For stovetop: add to a skillet with 2 tbsp water, cover, cook 4-5 minutes over medium heat. For oven: roast at 425°F for 20-22 minutes from frozen.' },
    { '@type': 'HowToStep', name: 'Stovetop method', text: 'Add frozen florets to a skillet with 2 tablespoons water. Cover and cook over medium heat 4-5 minutes until heated through and water evaporates.' },
    { '@type': 'HowToStep', name: 'Season well', text: 'Season with salt, pepper, garlic powder, and olive oil or butter immediately before serving.' },
  ],
  supply: [{ '@type': 'HowToSupply', name: 'Frozen broccoli florets' }],
  tool: [
    { '@type': 'HowToTool', name: 'Skillet with lid OR oven' },
  ],
}

export default function FrozenBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">How to Cook Frozen Broccoli</h1>
        <QuickAnswer>
          Cook frozen broccoli directly from frozen — never thaw first. Thawing makes it waterlogged and mushy. On the stovetop: add to a covered skillet with 2 tablespoons water over medium heat for 4-5 minutes. In the oven: roast at 425°F for 20-22 minutes. Frozen broccoli is blanched before freezing, so it needs less cook time than fresh.
        </QuickAnswer>
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>✓ Never thaw frozen broccoli before cooking — cook from frozen</li>
            <li>✓ Stovetop: 4-5 minutes covered with 2 tbsp water</li>
            <li>✓ Oven: 425°F for 20-22 minutes (longer than fresh because it is colder)</li>
            <li>✓ Frozen broccoli was blanched before freezing — it is already partially cooked</li>
            <li>✓ Pat dry before roasting for crispier results</li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Frozen vs Fresh Nutrition</h2>
          <p className="text-deepForest leading-relaxed">Frozen broccoli is nutritionally comparable to fresh. It is blanched and frozen at peak ripeness, which locks in most nutrients. A 2017 study published in the Journal of Food Composition and Analysis found that frozen vegetables often contain equal or higher vitamin levels than fresh produce that has been stored for several days. The main difference is texture — frozen cannot achieve the same crisp result as freshly cut broccoli.</p>
        </section>
      </article>
    </>
  )
}
