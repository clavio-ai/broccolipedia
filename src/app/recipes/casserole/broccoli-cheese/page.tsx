import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheese Casserole Recipe',
  description: 'Pure broccoli cheese casserole — no chicken, no rice. Maximum cheese pull, creamy sauce, golden top. Ready in 45 minutes.',
  keywords: ['broccoli cheese casserole', 'cheesy broccoli bake', 'broccoli casserole with cheese sauce'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Cheese Casserole',
  description: 'Pure broccoli and cheese casserole with maximum cheese pull and golden topping.',
  image: 'https://images.unsplash.com/photo-1612392062631-94e63af03b45?w=1200&q=80',
  prepTime: 'PT15M',
  cookTime: 'PT30M',
  totalTime: 'PT45M',
  recipeYield: '4 servings',
  recipeIngredient: [
    '700g broccoli florets', '2.5 cups (290g) sharp cheddar, grated',
    '2 tbsp butter', '2 tbsp flour', '1.5 cups whole milk', '¼ tsp nutmeg',
    '¼ tsp cayenne', 'Salt and pepper', 'Panko topping',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Blanch broccoli 2 min. Preheat oven to 375°F.' },
    { '@type': 'HowToStep', text: 'Make béchamel: melt butter, add flour, gradually whisk in milk until thick.' },
    { '@type': 'HowToStep', text: 'Off heat, melt in 2 cups cheese, nutmeg, cayenne. Season well.' },
    { '@type': 'HowToStep', text: 'Fold broccoli into sauce. Pour into baking dish. Top with remaining cheese and panko.' },
    { '@type': 'HowToStep', text: 'Bake 25-30 min until golden and bubbling.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '340', servingSize: '1 portion', proteinContent: '18g', carbohydrateContent: '20g', fiberContent: '4g', fatContent: '22g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '88' },
  keywords: 'broccoli cheese casserole, cheesy broccoli bake',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BroccoliCheeseCasserolePage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheese Casserole"
      description="No rice, no chicken — just broccoli and cheese. The sauce is a proper béchamel with two kinds of cheese, and the broccoli is cut into larger pieces so they keep their character during baking. A pinch of nutmeg and cayenne in the sauce stop it tasting one-dimensional."
      image="https://images.unsplash.com/photo-1612392062631-94e63af03b45?w=1200&q=80"
      imageAlt="Broccoli cheese casserole with bubbly golden cheese crust"
      meta={{ prepTime: '15 min', cookTime: '30 min', totalTime: '45 min', servings: 4, difficulty: 'Easy' }}
      ingredients={[
        '700g (about 5 cups) broccoli florets, cut into large 2-inch pieces',
        '2.5 cups (290g) sharp cheddar cheese, freshly grated',
        '2 tablespoons unsalted butter',
        '2 tablespoons all-purpose flour',
        '1.5 cups (360ml) whole milk',
        '¼ teaspoon nutmeg',
        '¼ teaspoon cayenne pepper',
        'Salt and black pepper',
        'For the topping: ½ cup panko breadcrumbs, 1 tbsp melted butter',
      ]}
      steps={[
        { text: 'Preheat oven to 375°F (190°C). Blanch broccoli in salted boiling water for 2 minutes. Drain and pat dry.' },
        { text: 'Make the béchamel: melt butter over medium heat, add flour and whisk 1 minute. Pour milk in slowly, whisking constantly, until the sauce thickens — about 3 minutes. It should coat the back of a spoon.' },
        { text: 'Remove from heat. Stir in 2 cups of the grated cheddar until melted and smooth. Add nutmeg and cayenne. Season generously with salt and pepper.' },
        { text: 'Fold the blanched broccoli into the cheese sauce. Transfer to a greased baking dish.' },
        { text: 'Mix panko with melted butter. Scatter the remaining cheese over the broccoli, then the buttered panko.' },
        { text: 'Bake for 25-30 minutes until the top is golden brown and the sauce is visibly bubbling at the sides.' },
      ]}
      tips={[
        'Nutmeg is the secret in a classic béchamel — it does not taste of nutmeg but the sauce would taste flat without it.',
        'Mix 1.5 cups cheddar with ½ cup Gruyère for a more complex sauce. The Gruyère melts cleaner and has more nuttiness.',
        'For crispier broccoli tips, spread the casserole in a shallower layer in a wider dish.',
      ]}
      nutrition={{ servingSize: '1 portion', calories: 340, protein: '18g', carbs: '20g', fiber: '4g', fat: '22g' }}
      faqs={[
        { question: 'How do I prevent a watery casserole?', answer: 'Three things: blanch the broccoli (don\'t use raw), dry it thoroughly after blanching, and make a thick béchamel. Watery casseroles are almost always caused by wet vegetables or a sauce that was not thick enough.' },
      ]}
      related={[
        { title: 'Broccoli Rice Casserole', href: '/recipes/casserole/broccoli-rice', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '20 min' },
        { title: 'Broccoli Cheddar Soup', href: '/recipes/soup/broccoli-cheddar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '15 min' },
        { title: 'Broccoli Nutrition', href: '/nutrition', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
      ]}
      keywords={['broccoli cheese casserole', 'cheesy broccoli bake']}
      schemaJson={schemaJson}
    />
  )
}
