import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Cream of Broccoli Soup Recipe (Smooth and Silky)',
  description: 'A blended, smooth cream of broccoli soup — lighter than cheddar, ready in 35 minutes. No heavy cream required. Bright green, velvety, and restaurant-quality.',
  keywords: ['cream of broccoli soup', 'cream of broccoli soup recipe', 'blended broccoli soup'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Cream of Broccoli Soup',
  description: 'Smooth, velvety blended broccoli soup — lighter than cheddar and ready in 35 minutes.',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80',
  prepTime: 'PT10M',
  cookTime: 'PT25M',
  totalTime: 'PT35M',
  recipeYield: '4 servings',
  recipeIngredient: ['500g broccoli (head + stems)', '1 medium onion, chopped', '2 garlic cloves', '750ml vegetable or chicken broth', '120ml double cream (or crème fraîche)', '2 tbsp olive oil', 'Salt, pepper, nutmeg'],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Heat olive oil in a large pot. Sauté onion 5 minutes, add garlic 1 more minute.' },
    { '@type': 'HowToStep', text: 'Add broccoli (including peeled stems — do not waste them). Pour in broth. Simmer 15 minutes until broccoli is very tender.' },
    { '@type': 'HowToStep', text: 'Blend until completely smooth using an immersion blender or stand blender in batches.' },
    { '@type': 'HowToStep', text: 'Stir in cream. Season with salt, pepper, and a pinch of nutmeg. Serve immediately.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '180', servingSize: '350ml', proteinContent: '7g', carbohydrateContent: '14g', fiberContent: '4g', fatContent: '11g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '87' },
  keywords: 'cream of broccoli soup, blended broccoli soup',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function CreamOfBroccoliPage() {
  return (
    <RecipeTemplate
      title="Cream of Broccoli Soup (Smooth and Silky)"
      description="Blended smooth, vivid green, and lighter than broccoli cheddar. This is the soup for people who want elegance over comfort. The peeled broccoli stems are the secret — they blend into the smoothest texture."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Smooth cream of broccoli soup in a white bowl with a swirl of cream"
      meta={{ prepTime: '10 min', cookTime: '25 min', totalTime: '35 min', servings: 4, difficulty: 'Easy' }}
      ingredients={[
        '500g broccoli (head + all stems), stems peeled',
        '1 medium yellow onion, roughly chopped',
        '2 garlic cloves, smashed',
        '750ml (3 cups) vegetable or chicken broth',
        '120ml (½ cup) double cream or crème fraîche',
        '2 tablespoons olive oil',
        'Salt and white pepper to taste',
        'Pinch of freshly grated nutmeg',
        'Optional: toasted croutons, extra cream to serve',
      ]}
      steps={[
        { text: 'Peel the broccoli stems and cut into 2cm pieces. Cut the head into florets. Broccoli stems are just as nutritious as florets and make the smoothest blended soups — do not discard them.' },
        { text: 'Heat olive oil in a large pot over medium heat. Add onion and sauté 5 minutes until soft. Add garlic and cook 1 more minute.' },
        { text: 'Add broccoli (stems and florets) and pour in broth. Bring to a boil, then reduce to a simmer. Cook 15 minutes until broccoli is completely tender.' },
        { text: 'Remove from heat. Blend until completely smooth using an immersion blender, or transfer in batches to a stand blender (leave the lid slightly ajar to release steam — use a kitchen towel to hold it).' },
        { text: 'Return to low heat. Stir in cream or crème fraîche. Season with salt, white pepper, and a pinch of nutmeg. Taste and adjust. Do not boil after adding cream.' },
        { text: 'Serve immediately in warm bowls. Swirl extra cream on top for presentation.' },
      ]}
      tips={[
        'For the most vivid green colour, blend immediately after cooking — do not let the soup sit and oxidize before blending.',
        'Crème fraîche produces a slightly tangier soup than double cream — both work well.',
        'Use white pepper instead of black for a cleaner-looking finished soup.',
      ]}
      nutrition={{ servingSize: '350ml', calories: 180, protein: '7g', carbs: '14g', fiber: '4g', fat: '11g' }}
      faqs={[
        { question: 'Can I make cream of broccoli soup without cream?', answer: 'Yes. Omit the cream and use extra broth for a lighter version. Alternatively, blend in a boiled potato or a cup of cooked white beans for creaminess without dairy.' },
        { question: 'How long does cream of broccoli soup last?', answer: '3–4 days in the refrigerator. Freeze for up to 3 months. Reheat gently on low heat with a splash of broth or milk to restore texture.' },
      ]}
      related={[
        { title: 'Broccoli Cheddar Soup', href: '/recipes/soup/broccoli-cheddar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '40 min' },
        { title: 'Broccoli Cheese Soup', href: '/recipes/soup/broccoli-cheese', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '35 min' },
        { title: 'How to Steam Broccoli', href: '/how-to-cook/steam', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', prepTime: '7 min' },
      ]}
      keywords={['cream of broccoli soup', 'smooth broccoli soup', 'blended broccoli']}
      schemaJson={schemaJson}
    />
  )
}
