import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Classic Broccoli Salad (Creamy Dressing, Bacon, Cranberries)',
  description: 'The classic American broccoli salad — raw broccoli, mayo-based dressing, bacon bits, dried cranberries, red onion, sunflower seeds. No cooking required. Serves 6.',
  keywords: ['broccoli salad recipe', 'classic broccoli salad', 'broccoli salad with bacon and cranberries'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Classic Broccoli Salad',
  description: 'The classic American broccoli salad with creamy dressing, bacon, cranberries, and sunflower seeds.',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
  prepTime: 'PT15M',
  cookTime: 'PT0M',
  totalTime: 'PT15M',
  recipeYield: '6 servings',
  recipeIngredient: ['600g (4 cups) fresh broccoli florets, cut small', '½ cup (70g) red onion, finely diced', '½ cup (80g) dried cranberries', '½ cup (60g) sunflower seeds', '6 strips bacon, cooked and crumbled', 'For dressing: ¾ cup mayo, 2 tbsp apple cider vinegar, 3 tbsp sugar, salt and pepper'],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Whisk mayo, apple cider vinegar, and sugar until smooth. Season with salt and pepper.' },
    { '@type': 'HowToStep', text: 'Combine broccoli florets, red onion, cranberries, and sunflower seeds in a large bowl.' },
    { '@type': 'HowToStep', text: 'Pour dressing over and toss thoroughly.' },
    { '@type': 'HowToStep', text: 'Refrigerate at least 30 minutes before serving (1 hour is better). Add bacon just before serving.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '290', servingSize: '1 cup', proteinContent: '7g', carbohydrateContent: '22g', fiberContent: '3g', fatContent: '20g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '267' },
  keywords: 'broccoli salad, classic broccoli salad, broccoli salad with bacon',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function ClassicBroccoliSaladPage() {
  return (
    <RecipeTemplate
      title="Classic Broccoli Salad (Creamy Dressing, Bacon, Cranberries)"
      description="No cooking, 15 minutes of prep, and it gets better as it sits. The ratio of mayo to apple cider vinegar to sugar in the dressing is what makes this work — and it is not intuitive until you try it."
      image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80"
      imageAlt="Classic broccoli salad in a large white bowl with creamy dressing being poured"
      meta={{ prepTime: '15 min', cookTime: '0 min', totalTime: '15 min (+ 30 min rest)', servings: 6, difficulty: 'Easy' }}
      ingredients={[
        '600g (4 cups) fresh broccoli florets, cut small (2–3cm)',
        '½ cup (70g) red onion, very finely diced',
        '½ cup (80g) dried cranberries',
        '½ cup (60g) roasted sunflower seeds or slivered almonds',
        '6 strips bacon, cooked until crispy and crumbled',
        'For the dressing:',
        '¾ cup (180g) good-quality mayonnaise',
        '2 tablespoons apple cider vinegar',
        '3 tablespoons white sugar (or honey)',
        '¼ teaspoon salt',
        '¼ teaspoon black pepper',
      ]}
      steps={[
        { text: 'Make the dressing: whisk together mayo, apple cider vinegar, and sugar in a small bowl until completely smooth. Season with salt and pepper. Taste — it should be creamy, tangy, and slightly sweet. Adjust vinegar or sugar to your preference.' },
        { text: 'Cut broccoli into small florets, roughly 2–3cm. Smaller than you might usually cut — tiny florets absorb the dressing better and are easier to eat in a salad.' },
        { text: 'Combine broccoli, red onion, cranberries, and sunflower seeds in a large bowl. Red onion should be very finely diced — large chunks are too aggressive.' },
        { text: 'Pour dressing over the salad and toss thoroughly until everything is evenly coated. Every floret should be lightly coated.' },
        { text: 'Cover and refrigerate for at least 30 minutes — 1 hour is better. The broccoli softens very slightly as it sits, making it easier to chew, and the dressing soaks in.' },
        { text: 'Add crumbled bacon just before serving (not before — it will go soft in the dressing). Toss once more and serve cold.' },
      ]}
      tips={[
        'Bacon should go in right before serving, not during the rest period — it stays crispy that way.',
        'Make it a day ahead: the salad genuinely improves overnight. Just hold the bacon until you are ready to serve.',
        'Swap dried cranberries for raisins, dried cherries, or diced apple for variations.',
        'For a lighter dressing: use half mayo and half Greek yogurt. Reduce sugar by 1 tablespoon.',
      ]}
      nutrition={{ servingSize: '1 cup', calories: 290, protein: '7g', carbs: '22g', fiber: '3g', fat: '20g' }}
      faqs={[
        { question: 'Can I make broccoli salad ahead of time?', answer: 'Yes — this is one of the best make-ahead salads. Prepare and dress the salad up to 24 hours in advance. Store in the fridge covered. Add bacon and any fresh toppings just before serving. The broccoli softens slightly overnight which most people prefer.' },
        { question: 'Do I need to cook the broccoli for broccoli salad?', answer: 'No — this is a raw broccoli salad. The dressing softens the raw florets slightly during the rest period. Raw broccoli also preserves more Vitamin C (89.2mg per 100g per USDA FDC 170379) than cooked versions.' },
        { question: 'Can I make it without mayo?', answer: 'Yes. Replace mayo with a combination of Greek yogurt (plain, full-fat) and sour cream in equal parts. The tanginess increases but the richness changes. Some versions use olive oil and lemon as a completely different style of dressing.' },
      ]}
      related={[
        { title: 'Broccoli Salad with Bacon', href: '/recipes/salad/with-bacon', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', prepTime: '15 min' },
        { title: 'Broccoli Salad Dressing Recipe', href: '/recipes/salad/dressing', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', prepTime: '5 min' },
        { title: 'Broccoli Nutrition Facts', href: '/nutrition', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
      ]}
      keywords={['classic broccoli salad', 'broccoli salad recipe', 'broccoli salad with bacon cranberries']}
      schemaJson={schemaJson}
    />
  )
}
