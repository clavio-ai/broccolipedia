import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Chicken and Broccoli Stir Fry',
  description: 'Quick chicken and broccoli stir fry with garlic-ginger sauce. 20 minutes, one wok, better than takeout. Naturally low carb.',
  keywords: ['chicken and broccoli stir fry', 'chicken broccoli stir fry recipe', 'easy chicken broccoli'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Chicken and Broccoli Stir Fry',
  description: 'Quick garlic-ginger chicken and broccoli stir fry with a light savoury sauce.',
  image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80',
  prepTime: 'PT10M',
  cookTime: 'PT12M',
  totalTime: 'PT22M',
  recipeYield: '3 servings',
  recipeIngredient: [
    '450g chicken breast, sliced thin', '350g broccoli florets',
    'Marinade: 2 tbsp soy sauce, 1 tbsp cornstarch, 1 tsp sesame oil',
    'Sauce: 2 tbsp soy sauce, 1 tbsp oyster sauce, 1 tsp sesame oil, 1 tsp sugar, ½ cup chicken stock, 1 tsp cornstarch',
    '3 garlic cloves, 1 tsp fresh ginger, 2 tbsp oil',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Marinate sliced chicken 10 min in soy sauce, cornstarch, sesame oil.' },
    { '@type': 'HowToStep', text: 'Whisk sauce ingredients together.' },
    { '@type': 'HowToStep', text: 'Blanch broccoli 90 sec, drain.' },
    { '@type': 'HowToStep', text: 'Sear chicken in hot wok until cooked through. Remove.' },
    { '@type': 'HowToStep', text: 'Fry garlic and ginger 30 sec. Add sauce, thicken. Return chicken and broccoli, toss.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '280', servingSize: '1 portion', proteinContent: '36g', carbohydrateContent: '16g', fiberContent: '3g', fatContent: '8g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '176' },
  keywords: 'chicken and broccoli stir fry, quick chicken broccoli',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function ChickenBroccoliPage() {
  return (
    <RecipeTemplate
      title="Chicken and Broccoli Stir Fry"
      description="This is a weeknight stir fry that is genuinely quick — not 'quick if you have everything prepped.' The chicken marinates in 10 minutes. The broccoli blanches in 90 seconds. The whole dish takes one wok and 22 minutes. The sauce is light compared to the beef version — more soy-forward, less sweet."
      image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80"
      imageAlt="Chicken and broccoli stir fry with glossy sauce over rice"
      meta={{ prepTime: '10 min', cookTime: '12 min', totalTime: '22 min', servings: 3, difficulty: 'Easy' }}
      ingredients={[
        '450g (1 lb) chicken breast, sliced thin',
        '350g broccoli florets',
        'For the marinade:',
        '2 tablespoons soy sauce',
        '1 tablespoon cornstarch',
        '1 teaspoon sesame oil',
        'For the sauce:',
        '2 tablespoons soy sauce',
        '1 tablespoon oyster sauce',
        '1 teaspoon sesame oil',
        '1 teaspoon sugar',
        '½ cup (120ml) chicken stock',
        '1 teaspoon cornstarch',
        '3 garlic cloves, minced',
        '1 teaspoon fresh ginger, grated',
        '2 tablespoons neutral cooking oil',
      ]}
      steps={[
        { text: 'Slice chicken breast thin (against the grain). Combine with soy sauce, cornstarch, and sesame oil. Leave to marinate for 10 minutes.' },
        { text: 'Whisk together all sauce ingredients until the cornstarch is dissolved. Set aside.' },
        { text: 'Blanch broccoli in salted boiling water for 90 seconds. Drain and set aside.' },
        { text: 'Heat wok over very high heat. Add 1.5 tablespoons oil. Cook chicken in a single layer until golden on one side, then flip. Remove when just cooked through, about 4-5 minutes total.' },
        { text: 'In the same wok, add remaining oil. Fry garlic and ginger for 30 seconds. Add the sauce — it will bubble immediately. Stir until it thickens and turns glossy, about 45 seconds.' },
        { text: 'Return chicken and broccoli to the wok. Toss to coat evenly. Serve immediately over rice or noodles.' },
      ]}
      tips={[
        'Slice chicken when it is still slightly cold from the fridge — it is much easier to cut thin even slices.',
        'If the sauce is too thick when it hits the wok, add a splash of water and stir quickly.',
        'Add 1 tablespoon of chilli garlic sauce to the stir-fry sauce for a heat-forward version.',
      ]}
      nutrition={{ servingSize: '1 portion', calories: 280, protein: '36g', carbs: '16g', fiber: '3g', fat: '8g' }}
      faqs={[
        { question: 'Can I use chicken thighs?', answer: 'Yes — thighs are more forgiving (harder to overcook) and have slightly more flavour. Slice them the same way. The dish will be marginally higher in fat.' },
        { question: 'Low-carb version?', answer: 'Already low carb at 16g per serving. Skip the rice and serve over cauliflower rice for a strict keto version. The stir fry itself is unchanged.' },
      ]}
      related={[
        { title: 'Beef and Broccoli', href: '/recipes/beef/beef-and-broccoli', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80', prepTime: '25 min' },
        { title: 'Chicken Broccoli Casserole', href: '/recipes/casserole/chicken-broccoli', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', prepTime: '1 hr' },
        { title: 'How to Blanch Broccoli', href: '/how-to-cook/blanch', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '5 min' },
      ]}
      keywords={['chicken and broccoli stir fry', 'quick chicken broccoli']}
      schemaJson={schemaJson}
    />
  )
}
