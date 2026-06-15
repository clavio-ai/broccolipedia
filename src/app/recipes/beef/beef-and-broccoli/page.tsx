import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Beef and Broccoli Recipe (Restaurant-Style)',
  description: 'Restaurant-quality beef and broccoli with glossy brown sauce. Velvet the beef for tenderness, blanch broccoli for crisp color. 25 minutes.',
  keywords: ['beef and broccoli recipe', 'Chinese beef and broccoli', 'beef broccoli stir fry recipe'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Beef and Broccoli',
  description: 'Restaurant-quality beef and broccoli with glossy brown sauce.',
  image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&q=80',
  prepTime: 'PT15M',
  cookTime: 'PT10M',
  totalTime: 'PT25M',
  recipeYield: '4 servings',
  recipeIngredient: [
    '500g flank steak, sliced thin against the grain',
    'Velveting marinade: 1 tsp baking soda, 2 tsp cornstarch, 1 tbsp soy sauce, 1 tbsp water',
    '400g broccoli florets',
    'Sauce: 3 tbsp oyster sauce, 2 tbsp soy sauce, 1 tbsp sesame oil, 1 tbsp brown sugar, 2 tbsp cornstarch, ½ cup beef stock',
    '3 cloves garlic, 1 tsp fresh ginger', '2 tbsp neutral oil',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Mix velveting marinade, coat beef, rest 15 min.' },
    { '@type': 'HowToStep', text: 'Whisk together all sauce ingredients until cornstarch dissolves.' },
    { '@type': 'HowToStep', text: 'Blanch broccoli 90 seconds, drain, shock in cold water.' },
    { '@type': 'HowToStep', text: 'Sear beef in hot wok in batches until just cooked. Remove.' },
    { '@type': 'HowToStep', text: 'In same wok, fry garlic and ginger 30 sec. Add sauce, cook until thickened. Return beef and broccoli, toss to coat.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '360', servingSize: '1 portion', proteinContent: '32g', carbohydrateContent: '22g', fiberContent: '3g', fatContent: '14g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '284' },
  keywords: 'beef and broccoli, Chinese beef broccoli stir fry',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BeefAndBroccoliPage() {
  return (
    <RecipeTemplate
      title="Beef and Broccoli (Restaurant-Style)"
      description="The two techniques that make restaurant beef and broccoli better than home versions: velveting (baking soda breaks down protein for silky texture) and a properly thickened oyster-soy sauce. Neither adds much time but both make a significant difference."
      image="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&q=80"
      imageAlt="Beef and broccoli with glossy sauce served over steamed rice"
      meta={{ prepTime: '15 min', cookTime: '10 min', totalTime: '25 min', servings: 4, difficulty: 'Medium' }}
      ingredients={[
        '500g (1 lb) flank steak, sliced thin against the grain',
        '400g broccoli florets',
        'For velveting: 1 teaspoon baking soda, 2 teaspoons cornstarch, 1 tablespoon soy sauce, 1 tablespoon water',
        'For the sauce:',
        '3 tablespoons oyster sauce',
        '2 tablespoons soy sauce (low-sodium)',
        '1 tablespoon sesame oil',
        '1 tablespoon brown sugar',
        '2 tablespoons cornstarch',
        '½ cup (120ml) beef stock',
        '3 cloves garlic, minced',
        '1 teaspoon fresh ginger, grated',
        '2 tablespoons neutral oil for cooking',
      ]}
      steps={[
        { text: 'Velvet the beef: combine baking soda, cornstarch, soy sauce, and water in a bowl. Add sliced beef and toss well. Leave to marinate for 15 minutes (no longer — the baking soda will make the meat mushy if left too long).' },
        { text: 'Make the sauce: whisk oyster sauce, soy sauce, sesame oil, brown sugar, cornstarch, and beef stock together until the cornstarch fully dissolves. Set aside.' },
        { text: 'Blanch broccoli in well-salted boiling water for 90 seconds. Drain immediately and shock in cold water. This gives the broccoli its vivid green colour. Drain and set aside.' },
        { text: 'Heat a wok or large skillet over very high heat until it starts to smoke slightly. Add 1 tablespoon oil. Cook the beef in two batches — do not crowd the pan. Each batch takes about 2 minutes. The beef should be just cooked through. Remove and set aside.' },
        { text: 'In the same wok, add remaining oil. Fry garlic and ginger for 30 seconds until fragrant. Pour in the sauce. Stir constantly for about 1 minute until it thickens and turns glossy.' },
        { text: 'Return the beef and broccoli to the wok. Toss everything together for 30 seconds to coat in the sauce. Serve immediately over steamed rice.' },
      ]}
      tips={[
        'Slice the flank steak against the grain for the most tender result. You can see the grain lines running in one direction — cut perpendicular to them.',
        'The baking soda velveting is not optional for restaurant texture. 15 minutes is the sweet spot — enough to tenderise, not enough to over-soften.',
        'A very hot wok is essential. If the heat is too low, the beef steams instead of sears and the sauce will be watery rather than glossy.',
      ]}
      nutrition={{ servingSize: '1 portion', calories: 360, protein: '32g', carbs: '22g', fiber: '3g', fat: '14g' }}
      faqs={[
        { question: 'Can I use a different cut of beef?', answer: 'Yes — sirloin, skirt steak, or even ribeye work. Flank steak is traditional because it has good flavour and slices well. Avoid stewing cuts (chuck, brisket) — they need long cooking to become tender.' },
        { question: 'Is oyster sauce replaceable?', answer: 'For a shellfish-free version, use hoisin sauce plus 1 teaspoon fish sauce. The flavour profile is slightly different (hoisin is sweeter) but the sauce will be good.' },
      ]}
      related={[
        { title: 'Chicken and Broccoli', href: '/recipes/chicken/chicken-broccoli', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', prepTime: '20 min' },
        { title: 'How to Blanch Broccoli', href: '/how-to-cook/blanch', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '5 min' },
        { title: 'Broccoli Protein Content', href: '/nutrition/protein', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '2 min read' },
      ]}
      keywords={['beef and broccoli', 'Chinese beef broccoli']}
      schemaJson={schemaJson}
    />
  )
}
