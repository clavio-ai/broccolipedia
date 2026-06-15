import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Rice Casserole Recipe',
  description: 'A cheesy broccoli and rice casserole made from scratch — no condensed soup. Velveeta-free, proper cheddar sauce, golden breadcrumb top.',
  keywords: ['broccoli rice casserole', 'cheesy broccoli rice casserole', 'broccoli rice bake'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Rice Casserole',
  description: 'Cheesy broccoli and rice casserole made from scratch with a proper cheddar sauce.',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80',
  prepTime: 'PT20M',
  cookTime: 'PT40M',
  totalTime: 'PT60M',
  recipeYield: '6 servings',
  recipeIngredient: [
    '500g broccoli florets', '2 cups cooked white rice', '2 cups (230g) sharp cheddar, freshly grated',
    '2 tbsp butter', '2 tbsp flour', '1.5 cups milk', '½ cup sour cream',
    '1 tsp Dijon mustard', '½ tsp garlic powder', 'Salt, pepper', '½ cup panko breadcrumbs',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Preheat oven to 375°F (190°C). Blanch broccoli 2 min, drain well.' },
    { '@type': 'HowToStep', text: 'Melt butter, whisk in flour 1 min, add milk gradually, whisk until smooth and thickened (3 min).' },
    { '@type': 'HowToStep', text: 'Remove from heat. Stir in 1.5 cups cheese, sour cream, Dijon, garlic powder. Season.' },
    { '@type': 'HowToStep', text: 'Combine sauce with rice and broccoli. Transfer to greased 9x13 baking dish.' },
    { '@type': 'HowToStep', text: 'Top with remaining cheese and panko. Bake 35-40 min until golden and bubbling.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '380', servingSize: '1 portion', proteinContent: '16g', carbohydrateContent: '35g', fiberContent: '3g', fatContent: '20g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '156' },
  keywords: 'broccoli rice casserole, cheesy broccoli rice',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BroccoliRiceCasserolePage() {
  return (
    <RecipeTemplate
      title="Broccoli Rice Casserole"
      description="The key to this casserole is making the cheese sauce without shortcuts. A proper roux — butter, flour, milk — produces a silky sauce that coats the rice and broccoli without getting greasy or congealing. Fresh-grated cheddar melts far better than pre-shredded."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Golden broccoli rice casserole with crunchy breadcrumb topping"
      meta={{ prepTime: '20 min', cookTime: '40 min', totalTime: '1 hr', servings: 6, difficulty: 'Medium' }}
      ingredients={[
        '500g (about 4 cups) broccoli florets, cut into bite-sized pieces',
        '2 cups cooked white rice (long-grain or jasmine)',
        '2 cups (230g) sharp cheddar cheese, freshly grated',
        '2 tablespoons unsalted butter',
        '2 tablespoons all-purpose flour',
        '1.5 cups whole milk',
        '½ cup sour cream',
        '1 teaspoon Dijon mustard',
        '½ teaspoon garlic powder',
        'Salt and black pepper to taste',
        '½ cup panko breadcrumbs',
        '1 tablespoon melted butter (for breadcrumbs)',
      ]}
      steps={[
        { text: 'Preheat the oven to 375°F (190°C). Grease a 9x13 inch (23x33 cm) baking dish.' },
        { text: 'Blanch broccoli: bring salted water to a boil, add broccoli, cook exactly 2 minutes. Drain thoroughly and press gently with a clean towel — excess water will make the casserole watery.' },
        { text: 'Make the cheese sauce: melt butter in a saucepan over medium heat. Add flour and whisk constantly for 1 minute (this cooks out the raw flour taste). Add milk in a slow stream, whisking constantly, until the sauce is smooth and thick, about 3 minutes.' },
        { text: 'Remove the pan from heat. Add 1.5 cups of the grated cheese and stir until melted. Add sour cream, Dijon mustard, and garlic powder. Season with salt and pepper. Taste — the sauce should be well-seasoned.' },
        { text: 'Combine the cooked rice and blanched broccoli in a large bowl. Pour the cheese sauce over and fold together until evenly coated. Transfer to the prepared baking dish.' },
        { text: 'Mix panko with melted butter. Scatter the remaining cheese over the casserole, then the buttered panko.' },
        { text: 'Bake for 35-40 minutes until the top is golden and the casserole is bubbling at the edges. Rest for 5 minutes before serving.' },
      ]}
      tips={[
        'The broccoli must be completely dry before going into the casserole. Water releases during baking and dilutes the sauce.',
        'Fresh-grated cheddar is non-negotiable here. The anti-caking agents in pre-shredded cheese prevent it from melting smoothly.',
        'This casserole reheats well — add 2 tablespoons of milk when reheating to loosen the sauce.',
      ]}
      nutrition={{ servingSize: '1 portion', calories: 380, protein: '16g', carbs: '35g', fiber: '3g', fat: '20g' }}
      faqs={[
        { question: 'Can I use brown rice?', answer: 'Yes. Cook it first (brown rice takes 40-45 min on the stove). The casserole bake time stays the same since you\'re just heating through, not cooking the rice.' },
        { question: 'Can I make this ahead?', answer: 'Assemble the casserole up to 24 hours ahead, cover, and refrigerate. Add the breadcrumb topping just before baking. Bake time increases by about 10 minutes from cold.' },
      ]}
      related={[
        { title: 'Chicken Broccoli Casserole', href: '/recipes/casserole/chicken-broccoli', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', prepTime: '25 min' },
        { title: 'Broccoli Cheese Casserole', href: '/recipes/casserole/broccoli-cheese', image: 'https://images.unsplash.com/photo-1612392062631-94e63af03b45?w=600&q=80', prepTime: '15 min' },
        { title: 'How to Blanch Broccoli', href: '/how-to-cook/blanch', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '5 min' },
      ]}
      keywords={['broccoli rice casserole', 'cheesy broccoli rice casserole']}
      schemaJson={schemaJson}
    />
  )
}
