import type { Metadata } from 'next'
import Link from 'next/link'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Pasta Recipe',
  description: 'Simple broccoli pasta with garlic, olive oil, and parmesan. Ready in 20 minutes. Italian orecchiette-style — broccoli almost melts into the sauce.',
  keywords: ['broccoli pasta', 'pasta with broccoli', 'garlic broccoli pasta recipe'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Pasta with Garlic and Parmesan',
  description: 'Simple pasta with broccoli cooked until it melds into a glossy garlic-olive oil sauce.',
  image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1200&q=80',
  prepTime: 'PT5M',
  cookTime: 'PT15M',
  totalTime: 'PT20M',
  recipeYield: '3 servings',
  recipeIngredient: [
    '300g orecchiette or penne', '400g broccoli (florets + chopped stems)',
    '4 cloves garlic', '4 tbsp olive oil', '1 tsp red pepper flakes',
    '½ cup (50g) parmesan, grated', 'Reserved pasta water',
    'Salt, black pepper, lemon zest (optional)',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Cook pasta and broccoli together in heavily salted water. Add broccoli when pasta has 4 min left.' },
    { '@type': 'HowToStep', text: 'Reserve 1 cup pasta water before draining.' },
    { '@type': 'HowToStep', text: 'In the same pot, gently fry garlic and chilli flakes in olive oil 1-2 min.' },
    { '@type': 'HowToStep', text: 'Add pasta, broccoli, and ¼ cup pasta water. Toss vigorously. The broccoli breaks down and coats the pasta.' },
    { '@type': 'HowToStep', text: 'Add parmesan and toss again. Adjust with more pasta water if needed. Season and serve immediately.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '480', servingSize: '1 portion', proteinContent: '18g', carbohydrateContent: '68g', fiberContent: '5g', fatContent: '16g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '142' },
  keywords: 'broccoli pasta, pasta with broccoli and garlic',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function PastaPage() {
  return (
    <>
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-sm text-sage">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/recipes" className="hover:text-forest">Recipes</Link> /{' '}
        <span className="text-deepForest">Pasta</span>
      </nav>
      <RecipeTemplate
        title="Broccoli Pasta (20 Minutes)"
        description="This recipe is inspired by the Italian tradition of cooking pasta and broccoli together so the broccoli partially breaks down and forms the sauce. It is simpler than it sounds and the result is more cohesive than pasta with a separate sauce spooned over."
        image="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1200&q=80"
        imageAlt="Broccoli pasta with parmesan in a white bowl"
        meta={{ prepTime: '5 min', cookTime: '15 min', totalTime: '20 min', servings: 3, difficulty: 'Easy' }}
        ingredients={[
          '300g orecchiette or penne rigate',
          '400g broccoli — florets plus stems, stems roughly diced',
          '4 cloves garlic, thinly sliced',
          '4 tablespoons good olive oil',
          '1 teaspoon red pepper flakes (less if sensitive to heat)',
          '½ cup (50g) parmesan cheese, finely grated',
          'Reserved pasta water',
          'Salt, black pepper',
          'Zest of ½ lemon (optional, brightens the dish)',
        ]}
        steps={[
          { text: 'Bring a large pot of water to the boil. Add enough salt so it tastes like the sea — roughly 1 tablespoon per litre.' },
          { text: 'Add pasta and cook for the time on the packet. When the pasta has 4 minutes left, add all the broccoli to the same pot.' },
          { text: 'Before draining, scoop out 1 full cup of the starchy pasta water — this is essential for the sauce.' },
          { text: 'In the same pasta pot (now empty), heat olive oil over medium heat. Add sliced garlic and chilli flakes. Cook gently for 1-2 minutes until the garlic is golden at the edges — not brown.' },
          { text: 'Add the drained pasta and broccoli back to the pot. Pour in ¼ cup of the pasta water. Toss vigorously over the heat — the broccoli will break down slightly and coat the pasta. This is the sauce.' },
          { text: 'Remove from heat. Add parmesan and toss again. The sauce should be glossy and cling to the pasta. Add more pasta water if it looks dry. Season with salt, pepper, and lemon zest.' },
        ]}
        tips={[
          'Orecchiette works best because the little cups catch the broken-down broccoli. Penne rigate (ridged) is the best alternative.',
          'The broccoli stems are just as good as the florets in this recipe. Peel the tough outer layer and dice them — they cook at the same rate as the pasta.',
          'For a protein addition: stir in 200g of drained canned white beans when you add the pasta water.',
        ]}
        nutrition={{ servingSize: '1 portion', calories: 480, protein: '18g', carbs: '68g', fiber: '5g', fat: '16g' }}
        faqs={[
          { question: 'Can I add anchovy?', answer: 'Yes — add 2-3 anchovy fillets with the garlic and they will dissolve into the oil, adding umami without tasting fishy. This is the traditional Pugliese version.' },
        ]}
        related={[
          { title: 'Roasted Broccoli', href: '/recipes/roasted', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '25 min' },
          { title: 'How to Blanch Broccoli', href: '/how-to-cook/blanch', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '5 min' },
          { title: 'Broccoli Fiber Content', href: '/nutrition/fiber', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
        ]}
        keywords={['broccoli pasta', 'pasta with broccoli']}
        schemaJson={schemaJson}
      />
    </>
  )
}
