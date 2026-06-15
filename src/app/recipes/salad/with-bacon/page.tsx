import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Salad with Bacon',
  description: 'A bacon-forward broccoli salad with creamy dressing, red onion, and crunchy sunflower seeds. No cooking required. Ready in 15 minutes.',
  keywords: ['broccoli salad with bacon', 'bacon broccoli salad', 'broccoli bacon salad recipe'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Salad with Bacon',
  description: 'Bacon-forward broccoli salad with creamy mayo dressing.',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
  prepTime: 'PT15M',
  cookTime: 'PT10M',
  totalTime: 'PT25M',
  recipeYield: '5 servings',
  recipeIngredient: ['550g broccoli florets', '8 strips bacon', '⅓ cup red onion, minced', '⅓ cup sunflower seeds', 'Dressing: ½ cup mayo, 1.5 tbsp apple cider vinegar, 2 tbsp sugar, salt and pepper'],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Cook bacon until crispy. Drain on paper towels, crumble into pieces.' },
    { '@type': 'HowToStep', text: 'Mix dressing: mayo, vinegar, sugar, salt, pepper.' },
    { '@type': 'HowToStep', text: 'Toss broccoli, onion, and sunflower seeds with dressing.' },
    { '@type': 'HowToStep', text: 'Refrigerate 30 minutes. Add bacon just before serving.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '310', servingSize: '1 cup', proteinContent: '9g', carbohydrateContent: '18g', fiberContent: '2.8g', fatContent: '23g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '89' },
  keywords: 'broccoli salad with bacon, bacon broccoli salad',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BroccoliSaladWithBaconPage() {
  return (
    <RecipeTemplate
      title="Broccoli Salad with Bacon"
      description="This version leans harder on the bacon — more strips, crispier pieces, slightly less dressing. The broccoli is raw, which keeps the Vitamin C intact and the texture firm enough to stand up to the richness."
      image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80"
      imageAlt="Broccoli salad with crispy bacon pieces in a bowl"
      meta={{ prepTime: '15 min', cookTime: '10 min (bacon)', totalTime: '25 min', servings: 5, difficulty: 'Easy' }}
      ingredients={[
        '550g (about 3.5 cups) fresh broccoli florets, cut small',
        '8 strips thick-cut bacon',
        '⅓ cup (50g) red onion, very finely minced',
        '⅓ cup (40g) roasted sunflower seeds',
        'For the dressing:',
        '½ cup (120g) mayonnaise',
        '1.5 tablespoons apple cider vinegar',
        '2 tablespoons sugar',
        'Salt and black pepper',
      ]}
      steps={[
        { text: 'Cook bacon in a skillet over medium heat until very crispy. Drain on paper towels, then crumble into rough pieces. Set aside.' },
        { text: 'Mix dressing: whisk mayo, apple cider vinegar, and sugar together. Season with salt and pepper. It should taste tangy with a slight sweetness.' },
        { text: 'Combine broccoli florets, red onion, and sunflower seeds in a large bowl. Pour dressing over and toss well.' },
        { text: 'Cover and refrigerate for at least 30 minutes — up to overnight. The broccoli softens slightly and absorbs the dressing.' },
        { text: 'When ready to serve, scatter bacon over the top and toss once. Serve immediately so the bacon stays crispy.' },
      ]}
      tips={[
        'Thick-cut bacon has better texture in a salad than thin-cut strips, which disintegrate.',
        'If you want the bacon throughout (not just on top), stir it in 10 minutes before serving, not immediately — some crunch remains.',
        'For an upgrade: use pancetta or lardon instead of streaky bacon.',
      ]}
      nutrition={{ servingSize: '1 cup', calories: 310, protein: '9g', carbs: '18g', fiber: '2.8g', fat: '23g' }}
      faqs={[
        { question: 'Can I use turkey bacon?', answer: 'Yes — it will be leaner and less crispy. Cook it the same way. The flavour is milder, so consider adding a pinch of smoked paprika to the dressing to compensate.' },
      ]}
      related={[
        { title: 'Classic Broccoli Salad', href: '/recipes/salad/classic', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', prepTime: '15 min' },
        { title: 'Broccoli Salad Dressing', href: '/recipes/salad/dressing', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', prepTime: '5 min' },
        { title: 'Broccoli Nutrition Facts', href: '/nutrition', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
      ]}
      keywords={['broccoli salad with bacon', 'bacon broccoli salad']}
      schemaJson={schemaJson}
    />
  )
}
