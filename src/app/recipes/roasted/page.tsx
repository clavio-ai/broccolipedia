import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Roasted Broccoli Recipe (Perfectly Crispy)',
  description: 'The best roasted broccoli — 425°F, high heat, golden crispy edges. Garlic, lemon, parmesan finish. Ready in 25 minutes.',
  keywords: ['roasted broccoli recipe', 'crispy roasted broccoli', 'oven roasted broccoli'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Perfect Roasted Broccoli',
  description: 'Crispy, golden-edged roasted broccoli with garlic and lemon.',
  image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80',
  prepTime: 'PT5M',
  cookTime: 'PT20M',
  totalTime: 'PT25M',
  recipeYield: '4 servings',
  recipeIngredient: [
    '600g broccoli florets, cut into flat-sided pieces',
    '3 tablespoons olive oil', '4 cloves garlic, sliced',
    'Salt and black pepper',
    'Optional finish: lemon juice, parmesan, chilli flakes',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Preheat oven to 425°F (220°C). Use the higher rack.' },
    { '@type': 'HowToStep', text: 'Dry broccoli thoroughly. Toss with olive oil, garlic, salt, and pepper.' },
    { '@type': 'HowToStep', text: 'Spread on baking sheet in single layer with a flat side facing down. Do not crowd.' },
    { '@type': 'HowToStep', text: 'Roast 18-22 min without disturbing. Edges should be dark golden-brown.' },
    { '@type': 'HowToStep', text: 'Squeeze lemon juice over and add parmesan immediately from the oven.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '130', servingSize: '1 cup', proteinContent: '4g', carbohydrateContent: '10g', fiberContent: '3.5g', fatContent: '9g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '318' },
  keywords: 'roasted broccoli, crispy roasted broccoli, oven broccoli',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function RoastedBroccoliPage() {
  return (
    <RecipeTemplate
      title="Roasted Broccoli (Perfectly Crispy)"
      description="The most common mistake with roasted broccoli is undercrowding the pan and pulling it out too early. Broccoli needs high heat (425°F) and enough time to develop actual colour at the edges — pale roasted broccoli has none of the nutty, almost-charred flavour that makes this dish so good."
      image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80"
      imageAlt="Crispy golden-edged roasted broccoli on a baking sheet"
      meta={{ prepTime: '5 min', cookTime: '20 min', totalTime: '25 min', servings: 4, difficulty: 'Easy' }}
      ingredients={[
        '600g broccoli florets, cut into medium-large pieces with a flat side',
        '3 tablespoons olive oil',
        '4 cloves garlic, thinly sliced',
        '1 teaspoon salt',
        '½ teaspoon black pepper',
        'To finish (optional but recommended):',
        '1 tablespoon fresh lemon juice',
        '¼ cup (25g) grated parmesan',
        'Red chilli flakes',
      ]}
      steps={[
        { text: 'Preheat the oven to 425°F (220°C). Put the rack in the top third of the oven — the broccoli needs direct radiant heat from above to get crispy tips.' },
        { text: 'Make sure the broccoli is completely dry — pat it with a paper towel if needed. Water is the enemy of crispiness; it creates steam instead of caramelisation.' },
        { text: 'Toss broccoli with olive oil, sliced garlic, salt, and pepper in a large bowl. Every floret should be coated.' },
        { text: 'Spread on a large baking sheet with the flat side of each piece facing down. This is important — the flat side creates more surface contact with the hot pan. Do not crowd: if the pieces are touching, they steam rather than roast. Use two pans if needed.' },
        { text: 'Roast for 18-22 minutes. Do not stir or move the broccoli partway through. Leave it to develop a crust. The edges should be dark golden to light brown — if they look pale, it needs more time.' },
        { text: 'Remove from the oven. Immediately squeeze lemon juice over and scatter parmesan and chilli flakes. The residual heat melts the cheese without making it rubbery.' },
      ]}
      tips={[
        'The flat cut is the key technique. When you cut a floret, it naturally has one flat side where you cut it. Lay that side on the pan — it gets direct contact heat and becomes the crispiest part.',
        '425°F is the minimum. Many ovens run cool — if your broccoli is not getting colour in 20 minutes, raise the temperature to 450°F for the last 5 minutes.',
        'For extra crispiness: pre-heat the baking sheet in the oven for 5 minutes before adding the broccoli. The hot pan sears the underside immediately.',
      ]}
      nutrition={{ servingSize: '1 cup', calories: 130, protein: '4g', carbs: '10g', fiber: '3.5g', fat: '9g' }}
      faqs={[
        { question: 'Why is my roasted broccoli soggy?', answer: 'Three causes: broccoli was wet before roasting, pan was overcrowded (pieces touching creates steam), or oven temperature too low. Fix: dry thoroughly, use two pans, set to at least 425°F.' },
        { question: 'How do I know when it\'s done?', answer: 'Look for colour. The floret tips should be dark green to brown, and the edges closest to the pan should be golden. If it looks uniformly pale green, it needs more time.' },
      ]}
      related={[
        { title: 'How to Roast Broccoli', href: '/how-to-cook/roast', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '25 min' },
        { title: 'Air Fryer Broccoli', href: '/how-to-cook/air-fryer', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '10 min' },
        { title: 'Broccoli Nutrition Facts', href: '/nutrition', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
      ]}
      keywords={['roasted broccoli', 'crispy roasted broccoli', 'oven roasted broccoli']}
      schemaJson={schemaJson}
    />
  )
}
