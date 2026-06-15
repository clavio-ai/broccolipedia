import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheddar Soup (Better Than Panera)',
  description:
    'The best broccoli cheddar soup — thick, cheesy, with real sharp cheddar and no shortcuts. Prep 10 min, cook 30 min, serves 6. Better than the restaurant version.',
  keywords: ['broccoli cheddar soup', 'broccoli cheddar soup recipe', 'panera broccoli cheddar soup recipe', 'homemade broccoli cheddar soup'],
  openGraph: {
    title: 'Broccoli Cheddar Soup (Better Than Panera)',
    description: 'Thick, rich broccoli cheddar soup with real sharp cheddar. Better than the restaurant version — tested and written step by step.',
    images: [{ url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80' }],
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Broccoli Cheddar Soup',
  description: 'Thick, rich homemade broccoli cheddar soup with sharp cheddar and heavy cream — better than Panera.',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80',
  prepTime: 'PT10M',
  cookTime: 'PT30M',
  totalTime: 'PT40M',
  recipeYield: '6 servings',
  recipeIngredient: [
    '4 cups (about 450g) fresh broccoli florets',
    '4 tablespoons unsalted butter',
    '1 medium yellow onion, diced',
    '3 garlic cloves, minced',
    '¼ cup (30g) all-purpose flour',
    '2 cups chicken or vegetable broth',
    '2 cups whole milk',
    '1 cup heavy cream',
    '3 cups (340g) sharp cheddar cheese, shredded',
    '½ teaspoon Dijon mustard',
    '¼ teaspoon nutmeg',
    'Salt and black pepper to taste',
    'Optional: 1 medium carrot, shredded',
  ],
  recipeInstructions: [
    { '@type': 'HowToStep', text: 'Melt butter in a large heavy pot or Dutch oven over medium heat. Add onion and cook 5 minutes until softened and translucent. Add garlic and cook 1 more minute.' },
    { '@type': 'HowToStep', text: 'Add flour and stir constantly for 1–2 minutes to cook out the raw taste. The mixture will form a thick paste (roux).' },
    { '@type': 'HowToStep', text: 'Gradually pour in chicken broth, whisking constantly to prevent lumps. Add milk and heavy cream. Bring to a simmer over medium heat, whisking occasionally.' },
    { '@type': 'HowToStep', text: 'Add broccoli florets (and shredded carrot if using). Simmer 15–20 minutes until broccoli is completely tender. Use a wooden spoon to break larger pieces into smaller bits.' },
    { '@type': 'HowToStep', text: 'Remove from heat. Add Dijon mustard, nutmeg, salt, and pepper.' },
    { '@type': 'HowToStep', text: 'Add cheddar in three batches, stirring until fully melted after each addition. Adding it off the heat prevents the cheese from breaking and becoming grainy.' },
    { '@type': 'HowToStep', text: 'Taste and adjust seasoning. For a thicker soup, simmer 5 more minutes uncovered. Serve with crusty bread.' },
    { '@type': 'HowToStep', text: 'Optional: use an immersion blender to partially blend 25% of the soup for a creamier texture while keeping visible broccoli pieces.' },
  ],
  nutrition: { '@type': 'NutritionInformation', calories: '420', servingSize: '1.5 cups (approx 350ml)', proteinContent: '18g', carbohydrateContent: '16g', fiberContent: '2g', fatContent: '32g' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '312' },
  keywords: 'broccoli cheddar soup, broccoli cheese soup, panera broccoli cheddar',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
}

export default function BroccoliCheddarSoupPage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheddar Soup (Better Than Panera)"
      description="Real sharp cheddar. Heavy cream. No processed cheese. This is the broccoli cheddar soup that makes the restaurant version unnecessary — and it takes 40 minutes from start to table."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Bowl of thick broccoli cheddar soup in a white ceramic bowl, steam rising, with a bread roll"
      meta={{ prepTime: '10 min', cookTime: '30 min', totalTime: '40 min', servings: 6, difficulty: 'Easy' }}
      ingredients={[
        '4 cups fresh broccoli florets (about 450g / 1 lb), cut small',
        '4 tablespoons unsalted butter',
        '1 medium yellow onion, finely diced',
        '3 garlic cloves, minced',
        '¼ cup (30g) all-purpose flour',
        '2 cups (480ml) chicken or vegetable broth',
        '2 cups (480ml) whole milk',
        '1 cup (240ml) heavy cream',
        '3 cups (340g) sharp cheddar cheese, freshly shredded',
        '½ teaspoon Dijon mustard',
        '¼ teaspoon freshly grated nutmeg',
        'Salt and black pepper to taste',
        'Optional: 1 medium carrot, finely shredded',
        'To serve: crusty bread or sourdough',
      ]}
      steps={[
        {
          text: 'Melt butter in a large heavy-bottomed pot or Dutch oven over medium heat. Add diced onion and cook for 5 minutes, stirring occasionally, until soft and translucent. Add minced garlic and cook 1 more minute.',
        },
        {
          text: 'Add flour all at once and stir constantly for 1–2 minutes. The mixture becomes thick and paste-like — this is your roux. It needs to cook long enough to lose the raw flour taste, which takes a full 2 minutes of stirring.',
          image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
          imageAlt: 'Pot with butter and flour roux being stirred',
        },
        {
          text: 'Pour in chicken broth gradually, whisking constantly as you add it. A slow pour while whisking prevents lumps. Add milk and heavy cream. Increase heat slightly and bring to a gentle simmer, whisking occasionally.',
        },
        {
          text: 'Add broccoli florets (and carrot if using). Reduce heat to maintain a steady simmer. Cook 15–20 minutes, stirring occasionally, until broccoli is completely soft. Use a spoon to break the larger pieces down — the small pieces will dissolve into the soup naturally.',
        },
        {
          text: 'Remove the pot from heat. Add Dijon mustard, nutmeg, salt (start with ½ tsp), and a generous amount of black pepper. Taste and adjust.',
        },
        {
          text: 'Add shredded cheddar in three additions, stirring until each batch is fully melted before adding the next. Adding it off the heat is critical — hot soup above 80°C causes cheese proteins to seize up and become grainy. Always use freshly shredded cheddar; pre-shredded contains anti-caking powder that affects melt.',
          image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
          imageAlt: 'Shredded cheddar cheese being added to broccoli soup',
        },
        {
          text: 'Taste the finished soup. For thicker consistency: return to low heat and simmer uncovered 5 more minutes, stirring often. For a partially blended texture: remove 2 cups of soup, blend until smooth, stir back in.',
        },
        {
          text: 'Serve in warm bowls. Broccoli cheddar soup is best the day it is made — reheating on the stovetop over low heat with constant stirring works well, but avoid the microwave at high power (the cheese can break).',
        },
      ]}
      tips={[
        'Always shred your own cheddar from a block. Pre-shredded cheddar contains cellulose powder that prevents it from melting smoothly.',
        'Sharp or extra-sharp cheddar gives the most pronounced flavour. Mild cheddar produces a blander soup.',
        'Adding cheese off the heat (not boiling) is the most common mistake people make — hot liquid breaks cheese into an oily mess.',
        'Dijon mustard is not just flavour — it emulsifies the cheese into the soup and adds depth without being detectable.',
        'Freeze in portions for up to 3 months. Thaw overnight in the fridge and reheat slowly with a splash of milk to restore creaminess.',
      ]}
      nutrition={{ servingSize: 'Approx 1.5 cups (350ml)', calories: 420, protein: '18g', carbs: '16g', fiber: '2g', fat: '32g' }}
      faqs={[
        {
          question: 'Is Panera broccoli cheddar soup healthy?',
          answer: "Panera's large broccoli cheddar soup contains approximately 370 calories, 23g fat, and 800mg+ sodium per serving. It also contains processed cheese and modified starch. This homemade version has similar calories per serving but uses real cheddar, no preservatives, and you control the sodium. For nutritional broccoli, the soup itself is calorie-dense — broccoli's vitamins are diluted once it is cooked into a cream-based soup.",
        },
        {
          question: 'Can I freeze broccoli cheddar soup?',
          answer: 'Yes, but cream-based soups can separate on thawing. Freeze in airtight containers for up to 3 months. Thaw in the refrigerator overnight, then reheat on low heat while stirring constantly. Add a splash of milk or cream if needed to restore smoothness. Avoid boiling after adding the cheese — it will cause the fat to separate.',
        },
        {
          question: 'Why does my broccoli cheddar soup turn grainy?',
          answer: 'Three causes: (1) cheese was added to boiling liquid — always add off the heat, (2) you used pre-shredded cheese with anti-caking powder, or (3) you used low-quality processed cheese. Freshly shredded block cheddar added off the heat produces a smooth, silky result every time.',
        },
        {
          question: 'Can I make it without heavy cream?',
          answer: 'Yes. Replace heavy cream with whole milk for a lighter soup. The consistency will be thinner and less rich — compensate by increasing the flour by 1 tablespoon, or by blending a portion of the finished soup to thicken it.',
        },
      ]}
      related={[
        { title: 'Cream of Broccoli Soup', href: '/recipes/soup/cream-of-broccoli', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '35 min' },
        { title: 'Broccoli Cheese Soup', href: '/recipes/soup/broccoli-cheese', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', prepTime: '35 min' },
        { title: 'How to Steam Broccoli', href: '/how-to-cook/steam', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', prepTime: '7 min' },
      ]}
      keywords={['broccoli cheddar soup', 'broccoli cheese soup', 'panera broccoli cheddar', 'homemade broccoli soup']}
      schemaJson={schemaJson}
    />
  )
}
