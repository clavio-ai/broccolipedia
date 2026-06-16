import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheese Soup Recipe | BroccoliPedia',
  description:
    'A thick, creamy broccoli cheese soup made with a proper roux and freshly grated sharp cheddar. 40 minutes, 4 servings. Includes the trick to keep it from turning grainy.',
  keywords: [
    'broccoli cheese soup recipe',
    'broccoli cheddar soup',
    'homemade broccoli cheese soup',
    'broccoli cheese soup from scratch',
  ],
  openGraph: {
    title: 'Broccoli Cheese Soup Recipe | BroccoliPedia',
    description:
      'Thick, creamy, made with real sharp cheddar — not Velveeta. The key is taking the pot off the heat before adding cheese. 40 minutes start to finish.',
    url: 'https://broccolipedia.com/recipes/soup/broccoli-cheese',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-cheese-soup/broccoli-cheese-soup-hero-dish-natural-light.webp',
        width: 1200,
        height: 675,
        alt: 'Bowl of broccoli cheese soup on a timber board with sourdough bread',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/soup/broccoli-cheese',
  },
}

// ── Schema JSON-LD ─────────────────────────────────────────────────────────────

const authorSchema = {
  '@type': 'Person',
  '@id': 'https://broccolipedia.com/about#elena-ignacio',
  name: 'Elena Ignacio',
  description:
    'Filipino food writer and mother of two based in Singapore. Has cooked in 14+ countries.',
  sameAs: [
    'https://www.tiktok.com/@elenasainda',
    'https://www.youtube.com/@adelevlogs',
    'https://www.facebook.com/elena.ignacio',
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://broccolipedia.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Recipes',
      item: 'https://broccolipedia.com/recipes',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Soup',
      item: 'https://broccolipedia.com/recipes/soup',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Broccoli Cheese Soup',
      item: 'https://broccolipedia.com/recipes/soup/broccoli-cheese',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you keep broccoli cheese soup from getting grainy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remove the pot from heat completely before adding cheese. When cheddar heats above around 60°C, the protein matrix tightens and forces out the fat, causing grainy, separated texture. Add freshly grated cheese in small handfuls off the heat, stirring between each addition. Room-temperature cheese melts in faster than cold cheese from the fridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best cheese for broccoli cheese soup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sharp cheddar, freshly grated from a block. Pre-shredded cheese contains anti-caking agents (usually potato starch or cellulose) that prevent clean melting and create a gritty texture. For extra depth, add a small handful of parmesan at the end.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the secret ingredient in broccoli cheese soup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two things: Dijon mustard (just 1 teaspoon — you cannot taste it, but it sharpens every other flavour) and freshly grated nutmeg (¼ teaspoon adds warmth and depth). These are what give restaurant-style broccoli cheese soup its distinctive flavour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze broccoli cheese soup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dairy-based soups separate when frozen and thawed. The cheese breaks, the milk curdles, and the texture becomes grainy and unpleasant even when reheated slowly. Store in the fridge for up to 4 days and reheat on the stovetop over low heat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli cheese soup healthy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It contains saturated fat from cheese and butter, but the broccoli contributes significant nutrition: 89.2 mg vitamin C and 102 mcg vitamin K per 100g of raw broccoli (USDA FDC 170379), plus 2.6g fiber and 47 mg calcium. Adding broccoli at the end and simmering for only 5–7 minutes preserves more nutrients than longer cooking methods.',
      },
    },
  ],
}

const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  '@id': 'https://broccolipedia.com/recipes/soup/broccoli-cheese#recipe',
  name: 'Broccoli Cheese Soup',
  description:
    'A thick, creamy broccoli cheese soup made with a butter-and-flour roux, broth, and fresh broccoli, finished with freshly grated sharp cheddar stirred in off the heat.',
  image: [
    'https://broccolipedia.com/images/broccoli-cheese-soup/broccoli-cheese-soup-hero-dish-natural-light.webp',
    'https://broccolipedia.com/images/broccoli-cheese-soup/broccoli-cheese-soup-prep-process-ingredients.webp',
    'https://broccolipedia.com/images/broccoli-cheese-soup/broccoli-cheese-soup-plated-close-up-garnish.webp',
  ],
  author: authorSchema,
  datePublished: '2026-06-16',
  prepTime: 'PT10M',
  cookTime: 'PT30M',
  totalTime: 'PT40M',
  recipeYield: '4 servings',
  recipeCategory: 'Soup',
  recipeCuisine: 'American',
  keywords: 'broccoli cheese soup, broccoli cheddar soup, homemade broccoli soup',
  recipeIngredient: [
    '3 tablespoons unsalted butter',
    '1 medium onion, diced',
    '2 garlic cloves, minced',
    '1 medium carrot, grated or cut into matchsticks',
    '3 tablespoons all-purpose flour',
    '500ml (2 cups) chicken or vegetable broth',
    '300ml (1.25 cups) whole milk or half-and-half',
    '450g (1 lb) broccoli florets, cut into small pieces',
    '200g (7 oz) sharp cheddar cheese, freshly grated',
    '1 teaspoon Dijon mustard',
    '¼ teaspoon freshly grated nutmeg',
    'Salt and black pepper to taste',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Build the mirepoix base',
      text: 'Melt the butter in a large pot or Dutch oven over medium heat. Add the onion and carrot. Cook for 5 to 6 minutes, stirring occasionally, until soft. Add the garlic and stir for 1 minute more.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Make the roux',
      text: 'Sprinkle the flour over the vegetables. Stir constantly for 2 minutes. You want the flour to coat everything and cook out the raw taste.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Add broth and milk',
      text: 'Slowly pour in the broth, whisking as you go to prevent lumps. Add the milk. Bring to a gentle simmer over medium heat, stirring occasionally.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Cook the broccoli',
      text: 'Add the broccoli florets. Simmer on low heat for 5 to 7 minutes only, until barely tender and still bright green. Short cooking time keeps the colour and preserves more nutrition.',
      image: 'https://broccolipedia.com/images/broccoli-cheese-soup/broccoli-cheese-soup-prep-process-ingredients.webp',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Add cheese off the heat',
      text: 'Remove the pot from the heat completely. Stir in the Dijon mustard and nutmeg. Add the grated cheddar in three small handfuls, stirring each one until melted before adding the next. For smoother soup, use an immersion blender on part of the batch before adding the cheese.',
      image: 'https://broccolipedia.com/images/broccoli-cheese-soup/broccoli-cheese-soup-plated-close-up-garnish.webp',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Season and serve',
      text: 'Season with salt and black pepper. Serve in warm bowls with sourdough alongside.',
    },
  ],
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '1 bowl (approximately 350ml)',
    calories: '380 calories',
    proteinContent: '18 g',
    fatContent: '26 g',
    saturatedFatContent: '14 g',
    carbohydrateContent: '18 g',
    fiberContent: '3 g',
    sodiumContent: '780 mg',
  },
  // WikiData-linked entities as mentions
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Cheddar cheese',
      sameAs: 'https://www.wikidata.org/wiki/Q183956',
    },
    {
      '@type': 'Thing',
      name: 'Roux',
      sameAs: 'https://www.wikidata.org/wiki/Q898525',
    },
    {
      '@type': 'Thing',
      name: 'Dijon mustard',
      sameAs: 'https://www.wikidata.org/wiki/Q3301440',
    },
    {
      '@type': 'Thing',
      name: 'Nutmeg',
      sameAs: 'https://www.wikidata.org/wiki/Q83791',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q193598',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q151062',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q413186',
    },
    {
      '@type': 'Thing',
      name: 'Dutch oven',
      sameAs: 'https://www.wikidata.org/wiki/Q1194012',
    },
    {
      '@type': 'Thing',
      name: 'Immersion blender',
      sameAs: 'https://www.wikidata.org/wiki/Q866751',
    },
  ],
}

// Combined schema graph
const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [recipeSchema, breadcrumbSchema, faqSchema, authorSchema],
}

export default function BroccoliCheeseSoupPage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheese Soup Recipe"
      description="The week Adam refused broccoli in every form, I made broccoli soup and called it green cheese soup. He had two bowls. This is that recipe — thick, creamy, made with real sharp cheddar and ready in 40 minutes."
      image="/images/broccoli-cheese-soup/broccoli-cheese-soup-hero-dish-natural-light.webp"
      imageAlt="Bowl of broccoli cheese soup on a light timber board with torn sourdough bread"
      meta={{
        prepTime: '10 min',
        cookTime: '30 min',
        totalTime: '40 min',
        servings: 4,
        difficulty: 'Easy',
        calories: 380,
      }}
      ingredients={[
        '3 tablespoons unsalted butter',
        '1 medium onion, diced',
        '2 garlic cloves, minced',
        '1 medium carrot, grated or cut into matchsticks',
        '3 tablespoons all-purpose flour',
        '500ml (2 cups) chicken or vegetable broth',
        '300ml (1.25 cups) whole milk or half-and-half',
        '450g (1 lb) broccoli florets, cut into small pieces',
        '200g (7 oz) sharp cheddar cheese, freshly grated',
        '1 teaspoon Dijon mustard',
        '¼ teaspoon freshly grated nutmeg',
        'Salt and black pepper to taste',
      ]}
      steps={[
        {
          text: 'Melt the butter in a large pot or Dutch oven over medium heat. Add the onion and carrot. Cook for 5 to 6 minutes, stirring occasionally, until soft. Add the garlic and stir for 1 minute more.',
        },
        {
          text: 'Sprinkle the flour over the vegetables. Stir constantly for 2 minutes. You want the flour to coat everything and cook out the raw taste. This is your roux.',
        },
        {
          text: 'Slowly pour in the broth, whisking as you go to prevent lumps. Add the milk. Bring to a gentle simmer over medium heat, stirring occasionally.',
        },
        {
          text: 'Add the broccoli florets. Simmer on low heat for 5 to 7 minutes only, until barely tender and still bright green. Short cooking time keeps the colour and preserves more nutrition.',
          image: '/images/broccoli-cheese-soup/broccoli-cheese-soup-prep-process-ingredients.webp',
          imageAlt: 'Adding freshly grated cheddar to broccoli cheese soup pot',
        },
        {
          text: 'Remove the pot from the heat completely. Stir in the Dijon mustard and nutmeg. Add the grated cheddar in three small handfuls, stirring each one until melted before adding the next. For smoother soup, use an immersion blender on part of the batch before adding the cheese.',
          image: '/images/broccoli-cheese-soup/broccoli-cheese-soup-plated-close-up-garnish.webp',
          imageAlt: 'Close-up of broccoli cheese soup texture showing creamy cheddar finish',
        },
        {
          text: 'Season with salt and black pepper. Serve in warm bowls with sourdough alongside.',
        },
      ]}
      tips={[
        'Always take the pot off the heat before adding cheese. When cheddar heats above 60°C the protein matrix tightens and squeezes out the fat — that is why soups turn grainy. Off the heat means off the heat.',
        'Grate your own cheese from a block. Pre-shredded bags contain anti-caking agents that prevent smooth melting.',
        'Add broccoli at the end, not at the start. Five to seven minutes of simmering is enough. Long cooking destroys the colour, the texture, and more of the nutrients.',
        'For a smoother texture: use an immersion blender on about half the soup before adding cheese. This gives you a creamy base with some whole broccoli pieces still visible.',
        'Do not freeze this soup. Dairy-based soups break when frozen. Refrigerate for up to 4 days and reheat slowly on the stovetop.',
        'Room-temperature cheese melts faster and more evenly than cold cheese straight from the fridge.',
      ]}
      nutrition={{
        servingSize: '1 bowl (~350ml)',
        calories: 380,
        protein: '18g',
        carbs: '18g',
        fiber: '3g',
        fat: '26g',
      }}
      faqs={[
        {
          question: 'How do you keep broccoli cheese soup from getting grainy?',
          answer:
            'Remove the pot from heat entirely before adding cheese. Cheddar above around 60°C has its protein matrix tighten and squeeze out fat — that causes the grainy, separated texture. Add freshly grated cheese in small handfuls off the heat, stirring between each addition. Room-temperature cheese works better than cold.',
        },
        {
          question: 'What is the best cheese for broccoli cheese soup?',
          answer:
            'Sharp cheddar, freshly grated from a block. Pre-shredded bags contain anti-caking agents that prevent smooth melting. For extra depth, add a small handful of parmesan at the end.',
        },
        {
          question: 'What is the secret ingredient in broccoli cheese soup?',
          answer:
            'Two things: Dijon mustard (1 teaspoon — sharpens everything without tasting of mustard) and freshly grated nutmeg (¼ teaspoon — adds warmth and depth). These are what give restaurant versions their distinctive flavour.',
        },
        {
          question: 'Can you freeze broccoli cheese soup?',
          answer:
            'No. Dairy-based soups separate when frozen. The cheese breaks, the milk curdles, and the texture becomes grainy even when reheated slowly. Keep it in the fridge for up to 4 days instead. Reheat on the stovetop over low heat, stirring gently.',
        },
        {
          question: 'Is broccoli cheese soup healthy?',
          answer:
            'It contains saturated fat from the cheese and butter, but the broccoli contributes 89.2 mg vitamin C and 102 mcg vitamin K per 100g (USDA FDC 170379), plus 2.6g fiber and 47 mg calcium. Keeping the broccoli simmer short (5–7 minutes) preserves more nutrition than the longer cooking most recipes use.',
        },
        {
          question: 'Can I use frozen broccoli?',
          answer:
            'Yes. Thaw and pat dry first. Reduce the simmer time to 3 to 4 minutes since frozen broccoli is already partially cooked.',
        },
        {
          question: 'Can I make this in a slow cooker or Instant Pot?',
          answer:
            'Yes to both. Slow cooker: build the roux and broth base on the stovetop first, transfer to slow cooker with broccoli on low for 2–3 hours, stir in cheese off the heat at the end. Instant Pot: sauté function for the roux, pressure cook on high for 3 minutes, quick release, then add cheese after.',
        },
      ]}
      related={[
        {
          title: 'Cream of Broccoli Soup',
          href: '/recipes/soup/cream-of-broccoli',
          image: '/images/cream-of-broccoli-soup/cream-of-broccoli-hero.webp',
          prepTime: '35 min',
        },
        {
          title: 'Broccoli Cheddar Bites',
          href: '/recipes/snacks/broccoli-cheddar-bites',
          image: '/images/broccoli-cheddar-bites/broccoli-cheddar-bites-hero.webp',
          prepTime: '25 min',
        },
        {
          title: 'Best Way to Cook Broccoli',
          href: '/how-to-cook/broccoli',
          image: '/images/how-to-cook-broccoli/cooked-broccoli-florets.webp',
          prepTime: '15 min',
        },
      ]}
      keywords={[
        'broccoli cheese soup recipe',
        'broccoli cheddar soup',
        'homemade broccoli cheese soup',
        'broccoli cheese soup from scratch',
        'how to make broccoli cheese soup',
      ]}
      schemaJson={schemaJson}
    />
  )
}
