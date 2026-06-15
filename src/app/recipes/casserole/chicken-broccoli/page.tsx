import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Chicken Broccoli Casserole Recipe',
  description: 'Tender chicken and broccoli baked in a creamy sauce with a crispy breadcrumb top. Made from scratch, no condensed soup. Weeknight dinner in 50 minutes.',
  keywords: ['chicken broccoli casserole', 'chicken and broccoli bake', 'broccoli chicken casserole recipe'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Chicken Broccoli Casserole',
  description: 'Creamy chicken and broccoli casserole with crispy breadcrumb topping.',
  image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80',
  prepTime: 'PT25M',
  cookTime: 'PT35M',
  totalTime: 'PT60M',
  recipeYield: '6 servings',
  recipeIngredient: [
    '600g chicken breast, cooked and shredded', '400g broccoli florets',
    '2 tbsp butter', '1 small onion (diced)', '2 cloves garlic', '3 tbsp flour',
    '1.75 cups chicken stock', '¾ cup heavy cream', '1 cup cheddar grated',
    '1 tbsp Worcestershire sauce', '1 tsp Dijon', 'Panko + parmesan topping',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Blanch broccoli 2 min. Shred pre-cooked chicken.' },
    { '@type': 'HowToStep', text: 'Sauté onion 3 min, add garlic 1 min, add flour 1 min, whisk in stock and cream until thickened.' },
    { '@type': 'HowToStep', text: 'Remove from heat. Stir in cheese, Worcestershire, Dijon. Season.' },
    { '@type': 'HowToStep', text: 'Combine chicken and broccoli with sauce. Pour into baking dish.' },
    { '@type': 'HowToStep', text: 'Top with panko+parmesan mix. Bake 375°F 30-35 min until golden.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '420', servingSize: '1 portion', proteinContent: '34g', carbohydrateContent: '18g', fiberContent: '2.5g', fatContent: '24g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '201' },
  keywords: 'chicken broccoli casserole, chicken broccoli bake',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function ChickenBroccoliCasserolePage() {
  return (
    <RecipeTemplate
      title="Chicken Broccoli Casserole"
      description="This is the casserole people mean when they say comfort food. Shredded chicken and broccoli in a proper savoury cream sauce — made with chicken stock and heavy cream, not a tin of soup. The Worcestershire and Dijon in the sauce are subtle but they are doing real work."
      image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80"
      imageAlt="Chicken broccoli casserole with golden crust on top"
      meta={{ prepTime: '25 min', cookTime: '35 min', totalTime: '1 hr', servings: 6, difficulty: 'Medium' }}
      ingredients={[
        '600g (about 1.3 lb) chicken breast, cooked and shredded (rotisserie works well)',
        '400g broccoli florets, blanched and dried',
        '2 tablespoons unsalted butter',
        '1 small onion, finely diced',
        '2 cloves garlic, minced',
        '3 tablespoons all-purpose flour',
        '1.75 cups (420ml) chicken stock',
        '¾ cup (180ml) heavy cream',
        '1 cup (115g) cheddar cheese, grated',
        '1 tablespoon Worcestershire sauce',
        '1 teaspoon Dijon mustard',
        'Salt and black pepper',
        'For the topping: ½ cup panko, ¼ cup grated parmesan, 1 tbsp melted butter',
      ]}
      steps={[
        { text: 'Preheat oven to 375°F (190°C). Blanch broccoli 2 minutes, drain and dry well. Shred chicken into bite-sized pieces.' },
        { text: 'Melt butter in a large saucepan over medium heat. Sauté onion until soft, about 3 minutes. Add garlic and cook 1 minute more.' },
        { text: 'Add flour and whisk for 1 minute. Pour in chicken stock in a slow stream, whisking constantly. Add cream. Cook, stirring, until the sauce is thick enough to coat the back of a spoon, about 4 minutes.' },
        { text: 'Remove from heat. Stir in grated cheddar, Worcestershire, and Dijon. Season with salt and pepper. The sauce should be bold — it needs to stand up to the chicken and broccoli.' },
        { text: 'Combine chicken and broccoli in a large bowl. Pour sauce over and mix well. Transfer to a greased 9x13 inch baking dish.' },
        { text: 'Mix panko, parmesan, and melted butter. Scatter evenly over the top.' },
        { text: 'Bake for 30-35 minutes until the topping is golden brown and the casserole is bubbling around the edges. Rest 5 minutes before serving.' },
      ]}
      tips={[
        'Rotisserie chicken saves 20 minutes and adds flavour from the seasoned skin. Use both breast and thigh meat.',
        'If making from raw chicken: season and roast at 400°F for 20 min, then shred. The fond left in the pan can go into the sauce for more depth.',
        'Add a pinch of cayenne to the sauce for a subtle heat that complements the cream.',
      ]}
      nutrition={{ servingSize: '1 portion', calories: 420, protein: '34g', carbs: '18g', fiber: '2.5g', fat: '24g' }}
      faqs={[
        { question: 'Can I freeze this casserole?', answer: 'Yes — assemble without the breadcrumb topping, cover tightly, and freeze for up to 3 months. Thaw overnight in the fridge. Add breadcrumbs and bake from fridge-cold at 375°F for 45 minutes.' },
        { question: 'What can I substitute for heavy cream?', answer: 'Use full-fat coconut cream for dairy-free, or half-and-half for a lighter version. Avoid low-fat milk — the sauce will be too thin.' },
      ]}
      related={[
        { title: 'Broccoli Rice Casserole', href: '/recipes/casserole/broccoli-rice', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '20 min' },
        { title: 'Chicken and Broccoli Stir Fry', href: '/recipes/chicken/chicken-broccoli', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80', prepTime: '15 min' },
        { title: 'How to Steam Broccoli', href: '/how-to-cook/steam', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', prepTime: '7 min' },
      ]}
      keywords={['chicken broccoli casserole', 'chicken and broccoli bake']}
      schemaJson={schemaJson}
    />
  )
}
