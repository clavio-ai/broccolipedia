import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheese Soup Recipe (Chunky Style)',
  description: 'Chunky broccoli cheese soup with real cheese and visible broccoli pieces — no velveeta. 35 minutes, 4 servings. The comfort food version.',
  keywords: ['broccoli cheese soup', 'broccoli cheese soup recipe', 'chunky broccoli soup'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Cheese Soup',
  description: 'Chunky broccoli cheese soup with real cheddar — no processed cheese.',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80',
  prepTime: 'PT10M',
  cookTime: 'PT25M',
  totalTime: 'PT35M',
  recipeYield: '4 servings',
  recipeIngredient: ['400g broccoli florets', '1 onion', '2 garlic cloves', '3 tbsp butter', '3 tbsp flour', '600ml chicken broth', '300ml whole milk', '200g sharp cheddar, shredded', 'Salt, pepper, mustard powder'],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Sauté onion and garlic in butter 5 minutes.' },
    { '@type': 'HowToStep', text: 'Add flour, stir 2 minutes to form roux.' },
    { '@type': 'HowToStep', text: 'Whisk in broth then milk. Bring to simmer.' },
    { '@type': 'HowToStep', text: 'Add broccoli. Cook 15 minutes until tender.' },
    { '@type': 'HowToStep', text: 'Remove from heat. Stir in cheddar in batches. Season and serve.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '340', servingSize: '350ml', proteinContent: '16g', carbohydrateContent: '18g', fiberContent: '3g', fatContent: '23g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '124' },
  keywords: 'broccoli cheese soup, chunky broccoli soup',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BroccoliCheeseSoupPage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheese Soup (Chunky Style)"
      description="This version keeps the broccoli pieces intact — chunky comfort food, no velveeta, real cheddar that melts properly. Thicker than cream of broccoli, chunkier than the cheddar version."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Bowl of chunky broccoli cheese soup with visible broccoli pieces"
      meta={{ prepTime: '10 min', cookTime: '25 min', totalTime: '35 min', servings: 4, difficulty: 'Easy' }}
      ingredients={[
        '400g broccoli florets, cut into small pieces',
        '1 medium onion, diced',
        '2 garlic cloves, minced',
        '3 tablespoons unsalted butter',
        '3 tablespoons all-purpose flour',
        '600ml (2.5 cups) chicken or vegetable broth',
        '300ml (1.25 cups) whole milk',
        '200g (7 oz) sharp cheddar cheese, freshly shredded',
        '1 teaspoon Worcestershire sauce',
        '½ teaspoon mustard powder',
        'Salt and black pepper to taste',
      ]}
      steps={[
        { text: 'In a large pot, melt butter over medium heat. Add onion and sauté 5 minutes until soft. Add garlic and cook 1 minute more.' },
        { text: 'Sprinkle flour over the onions and stir constantly for 2 minutes, forming a roux.' },
        { text: 'Gradually whisk in chicken broth to prevent lumps. Add milk and Worcestershire sauce. Bring to a gentle simmer.' },
        { text: 'Add broccoli florets. Cook 12–15 minutes over medium-low heat until broccoli is tender. For chunky soup, resist the urge to stir aggressively — the pieces stay intact better with gentle stirring.' },
        { text: 'Remove from heat completely. Add mustard powder. Stir in shredded cheddar in three batches, stirring until melted after each. Season with salt and pepper. Serve in warm bowls.' },
      ]}
      tips={[
        'Do not let the soup boil after adding cheese — it will break and turn grainy.',
        'Worcestershire sauce adds umami depth without a detectable flavor on its own.',
        'For extra-thick soup: mash some of the broccoli pieces against the side of the pot with a spoon.',
      ]}
      nutrition={{ servingSize: '350ml', calories: 340, protein: '16g', carbs: '18g', fiber: '3g', fat: '23g' }}
      faqs={[
        { question: 'Difference between broccoli cheese soup and broccoli cheddar soup?', answer: 'Essentially the same — the name varies by region. Broccoli cheddar tends to be used for smoother, richer versions; broccoli cheese for chunkier styles. The ingredients are near-identical.' },
      ]}
      related={[
        { title: 'Broccoli Cheddar Soup', href: '/recipes/soup/broccoli-cheddar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '40 min' },
        { title: 'Cream of Broccoli Soup', href: '/recipes/soup/cream-of-broccoli', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '35 min' },
        { title: 'Broccoli Rice Casserole', href: '/recipes/casserole/broccoli-rice', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80', prepTime: '50 min' },
      ]}
      keywords={['broccoli cheese soup', 'chunky broccoli soup', 'broccoli soup recipe']}
      schemaJson={schemaJson}
    />
  )
}
