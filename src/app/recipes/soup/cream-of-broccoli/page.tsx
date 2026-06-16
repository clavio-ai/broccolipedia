import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Cream of Broccoli Soup Recipe (Smooth, Silky, No Flour)',
  description:
    'A blended cream of broccoli soup that uses the whole head — stems and florets. One potato thickens it naturally. No flour, no heavy cream required. Ready in 35 minutes.',
  keywords: [
    'cream of broccoli soup recipe',
    'cream of broccoli soup',
    'blended broccoli soup',
    'broccoli soup without cream',
    'easy cream of broccoli soup',
    'old fashioned cream of broccoli soup',
  ],
  openGraph: {
    title: 'Cream of Broccoli Soup Recipe (Smooth, Silky, No Flour)',
    description:
      'Whole-head broccoli (stems + florets), one potato for natural thickness, a quarter teaspoon of nutmeg. Blended smooth and ready in 35 minutes.',
    images: [
      {
        url: '/images/cream-of-broccoli-soup/cream-of-broccoli-soup-hero-dish-natural-light.webp',
        width: 1200,
        height: 675,
        alt: 'Deep green cream of broccoli soup in a white ceramic bowl with a swirl of cream and cracked pepper',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cream of Broccoli Soup Recipe (Smooth, Silky, No Flour)',
    description: 'Stems included, potato thickens it, nutmeg finishes it. Ready in 35 minutes.',
    images: ['/images/cream-of-broccoli-soup/cream-of-broccoli-soup-hero-dish-natural-light.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/soup/cream-of-broccoli',
  },
}

// WikiData-linked entities from TextRazor extraction (60 entities, top 12 wired)
const recipeEntities = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  {
    '@type': 'Thing',
    name: 'Cream of broccoli soup',
    sameAs: 'https://www.wikidata.org/wiki/Q18349210',
  },
  { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
  { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
  { '@type': 'Thing', name: 'Immersion blender', sameAs: 'https://www.wikidata.org/wiki/Q1934490' },
  { '@type': 'Thing', name: 'Nutmeg', sameAs: 'https://www.wikidata.org/wiki/Q83165' },
  { '@type': 'Thing', name: 'Potato', sameAs: 'https://www.wikidata.org/wiki/Q10998' },
  { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/wiki/Q23400' },
  { '@type': 'Thing', name: 'Onion', sameAs: 'https://www.wikidata.org/wiki/Q23485' },
  { '@type': 'Thing', name: 'Butter', sameAs: 'https://www.wikidata.org/wiki/Q34172' },
  { '@type': 'Thing', name: 'Broth', sameAs: 'https://www.wikidata.org/wiki/Q275068' },
  { '@type': 'Thing', name: 'Cream', sameAs: 'https://www.wikidata.org/wiki/Q13228' },
]

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    // Recipe schema
    {
      '@type': 'Recipe',
      '@id': 'https://broccolipedia.com/recipes/soup/cream-of-broccoli#recipe',
      name: 'Cream of Broccoli Soup',
      description:
        'Smooth blended broccoli soup made with the whole head (stems and florets), a potato for natural thickness, and nutmeg as the finishing touch. No flour, no heavy cream required.',
      image: [
        'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-hero-dish-natural-light.webp',
        'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-prep-process-ingredients.webp',
        'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-plated-close-up-garnish.webp',
      ],
      author: {
        '@type': 'Person',
        '@id': 'https://broccolipedia.com/about#elena-ignacio',
        name: 'Elena Ignacio',
        url: 'https://broccolipedia.com/about',
        sameAs: [
          'https://www.tiktok.com/@elenasainda',
          'https://www.youtube.com/@adelevlogs',
          'https://www.facebook.com/elena.ignacio',
        ],
      },
      datePublished: '2024-10-15',
      dateModified: '2026-06-16',
      prepTime: 'PT10M',
      cookTime: 'PT25M',
      totalTime: 'PT35M',
      recipeYield: '4 servings',
      recipeCategory: 'Soup',
      recipeCuisine: 'American',
      keywords:
        'cream of broccoli soup, cream of broccoli soup recipe, blended broccoli soup, broccoli soup without cream, old fashioned cream of broccoli soup',
      recipeIngredient: [
        '1 large head broccoli (florets and stems, peeled), about 600g / 1.3 lbs',
        '1 medium potato, peeled and diced, about 200g / 7 oz',
        '3 tbsp unsalted butter',
        '1 medium yellow onion, diced',
        '3 garlic cloves, grated or minced',
        '3 cups (720ml) chicken broth or vegetable broth',
        '1 tsp kosher salt, plus more to taste',
        '1/4 tsp black pepper',
        '1/4 tsp ground nutmeg',
        '1/2 cup (120ml) half and half or heavy cream (optional)',
        'Grated parmesan or cheddar, to serve',
        'Crusty bread, to serve',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Prep the broccoli',
          text: 'Use a vegetable peeler to strip the tough outer skin from the broccoli stems. Chop stems and florets into rough chunks. If you have time, chop the broccoli and let it sit for 40 minutes before cooking — this allows myrosinase to convert glucoraphanin into sulforaphane before heat destroys the enzyme.',
          image: 'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-prep-process-ingredients.webp',
        },
        {
          '@type': 'HowToStep',
          name: 'Build the base',
          text: 'Melt butter in a large pot over medium heat. Add onion with a pinch of salt and cook 4 minutes until soft. Add garlic and cook 1 minute more.',
        },
        {
          '@type': 'HowToStep',
          name: 'Simmer broccoli and potato',
          text: 'Add the broccoli and diced potato. Pour in the broth. Bring to a simmer, cover with a lid, and cook 20 minutes until everything is completely tender.',
        },
        {
          '@type': 'HowToStep',
          name: 'Cool briefly',
          text: 'Turn off the heat. Wait 5 minutes before blending. Hot liquid in a blender builds pressure and can be dangerous.',
        },
        {
          '@type': 'HowToStep',
          name: 'Blend until smooth',
          text: 'Use an immersion blender directly in the pot and puree until completely smooth. If using a stand blender, fill only halfway, hold a folded tea towel over the lid, and blend in batches.',
          image: 'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-plated-close-up-garnish.webp',
        },
        {
          '@type': 'HowToStep',
          name: 'Season and finish',
          text: 'Stir in the nutmeg, then taste and adjust salt and pepper. If you want extra richness, stir in the half and half and warm on low heat for 2 minutes. Do not boil after adding cream.',
        },
        {
          '@type': 'HowToStep',
          name: 'Serve',
          text: 'Ladle into bowls or mugs. Top with grated cheese, a swirl of cream, and cracked pepper. Serve with crusty bread.',
          image: 'https://broccolipedia.com/images/cream-of-broccoli-soup/cream-of-broccoli-soup-hero-dish-natural-light.webp',
        },
      ],
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '1 bowl (approx 350ml)',
        calories: '380 calories',
        proteinContent: '13 g',
        carbohydrateContent: '16 g',
        fatContent: '18 g',
        fiberContent: '5 g',
        sodiumContent: '577 mg',
      },
      mentions: recipeEntities,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      video: {
        '@type': 'VideoObject',
        name: 'Healthy Cream of Broccoli Soup — AnitaCooks',
        description: 'How to make cream of broccoli soup with broccoli stems and a potato as natural thickener.',
        thumbnailUrl: 'https://i.ytimg.com/vi/ysrwGZyO6H0/hqdefault.jpg',
        uploadDate: '2023-01-15',
        embedUrl: 'https://www.youtube.com/embed/ysrwGZyO6H0',
      },
    },

    // FAQPage schema
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/recipes/soup/cream-of-broccoli#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the secret ingredient in broccoli soup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nutmeg. A quarter teaspoon stirred in after blending. Most recipes leave it out and wonder why the soup tastes flat. It adds a quiet warmth that makes the whole thing taste finished rather than basic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I make cream of broccoli soup without heavy cream?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and this version is better without it. The blended potato gives you the silky body you want, and skipping the cream means you actually taste the broccoli. If you want extra richness, stir in half a cup of half and half at the very end.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use frozen broccoli for this recipe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Add it straight from frozen with no thawing. It softens in the simmering broth and blends just as smoothly as fresh. It does not change the method at all.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to blend hot soup in a blender?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With care, yes. Let the soup cool 5 to 10 minutes off the heat first. Fill the blender only halfway. Hold a folded tea towel firmly over the lid while blending. Never use a bullet-style blender for hot soups — steam builds up and the lid can blow off under pressure. An immersion blender in the pot is easier and safer.',
          },
        },
      ],
    },

    // BreadcrumbList schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/recipes/soup/cream-of-broccoli#breadcrumb',
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
          name: 'Soups',
          item: 'https://broccolipedia.com/recipes/soup',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Cream of Broccoli Soup',
          item: 'https://broccolipedia.com/recipes/soup/cream-of-broccoli',
        },
      ],
    },
  ],
}

export default function CreamOfBroccoliPage() {
  return (
    <RecipeTemplate
      title="Cream of Broccoli Soup Recipe (Smooth, Silky, No Flour)"
      description={
        'Adam was four and he had decided green food was the enemy. Then one grey Singapore afternoon I blended this soup completely smooth, poured it into a mug, and called it "green smoothie soup." He drank the whole thing. This is that recipe.'
      }
      image="/images/cream-of-broccoli-soup/cream-of-broccoli-soup-hero-dish-natural-light.webp"
      imageAlt="Deep green cream of broccoli soup in a white ceramic bowl with a swirl of cream and cracked black pepper"
      meta={{
        prepTime: '10 min',
        cookTime: '25 min',
        totalTime: '35 min',
        servings: 4,
        difficulty: 'Easy',
        calories: 380,
      }}
      ingredients={[
        '1 large head broccoli (florets and stems, peeled), about 600g / 1.3 lbs',
        '1 medium potato, peeled and diced, about 200g / 7 oz',
        '3 tbsp unsalted butter',
        '1 medium yellow onion, diced',
        '3 garlic cloves, grated or minced',
        '3 cups (720ml) chicken broth or vegetable broth',
        '1 tsp kosher salt, plus more to taste',
        '1/4 tsp black pepper',
        '1/4 tsp ground nutmeg',
        '1/2 cup (120ml) half and half or heavy cream (optional)',
        'Grated parmesan or cheddar, to serve',
        'Crusty bread, to serve',
      ]}
      steps={[
        {
          text: 'Prep the broccoli: use a vegetable peeler to strip the tough outer skin from the stems. Chop stems and florets into rough chunks. If you have time, let the chopped broccoli sit for 40 minutes before cooking — this preserves sulforaphane production before heat eliminates the enzyme myrosinase (USDA FDC 170379).',
          image: '/images/cream-of-broccoli-soup/cream-of-broccoli-soup-prep-process-ingredients.webp',
          imageAlt: 'Whole broccoli head, potato, onion, garlic and butter on a timber board',
        },
        {
          text: 'Melt butter in a large pot over medium heat. Add onion with a pinch of salt and cook 4 minutes until soft. Add garlic and cook 1 minute more. Grate the garlic directly in if you can — it releases more flavour than chopping.',
        },
        {
          text: 'Add the broccoli and diced potato. Pour in the broth. Bring to a simmer, cover with a lid, and cook 20 minutes until everything is completely tender when poked with a fork.',
        },
        {
          text: 'Turn off the heat and wait 5 minutes before blending. This step matters: boiling hot liquid in a blender builds pressure and can be dangerous.',
        },
        {
          text: 'Use an immersion blender directly in the pot and puree until completely smooth. If using a stand blender, fill only halfway, hold a folded tea towel firmly over the lid, and blend in batches. Never use a bullet-style blender for hot soups.',
          image: '/images/cream-of-broccoli-soup/cream-of-broccoli-soup-plated-close-up-garnish.webp',
          imageAlt: 'Immersion blender in a pot of broccoli soup, mid-blend with steam visible',
        },
        {
          text: 'Stir in the nutmeg, then taste and adjust salt and pepper. For extra richness, stir in the half and half and warm on low heat for 2 minutes. Do not boil after adding cream.',
        },
        {
          text: 'Ladle into bowls or mugs. Top with grated cheese, a swirl of cream, and cracked pepper. Crusty bread on the side.',
        },
      ]}
      tips={[
        'Use the whole head. Every recipe that tells you to use florets only is wasting half your broccoli. Peel the outer layer with a vegetable peeler — the stems blend just as smoothly as the florets and carry a lot of the flavour.',
        'The potato is the thickener. One medium potato dissolves completely when blended and gives you silky body without flour or extra cream. I stopped making a roux for this soup years ago.',
        'Nutmeg is not optional. A quarter teaspoon stirred in after blending lifts the entire soup. This is the secret ingredient most recipes skip.',
        'Frozen broccoli works. Add straight from the bag with no thawing. Same method, same result.',
        'Blend fast, serve fast. Blended green soups oxidise quickly and turn grey-green if they sit. Blend and serve within 20 minutes for the most vivid colour.',
      ]}
      nutrition={{
        servingSize: '1 bowl (approx 350ml)',
        calories: 380,
        protein: '13g',
        carbs: '16g',
        fiber: '5g',
        fat: '18g',
      }}
      faqs={[
        {
          question: 'What is the secret ingredient in broccoli soup?',
          answer:
            'Nutmeg. A quarter teaspoon stirred in after blending. Most recipes leave it out and wonder why the soup tastes flat. It adds a quiet warmth that makes the whole thing taste finished rather than basic.',
        },
        {
          question: 'Can I make cream of broccoli soup without heavy cream?',
          answer:
            'Yes, and honestly this version is better without it. The blended potato gives you the silky body you want, and skipping the cream means you actually taste the broccoli. If you want extra richness, stir in half a cup of half and half at the very end.',
        },
        {
          question: 'Can I use frozen broccoli for this recipe?',
          answer:
            'Yes. Add it straight from frozen with no thawing. It softens in the simmering broth and blends just as smoothly as fresh. It does not change the method at all.',
        },
        {
          question: 'Is it safe to blend hot soup in a blender?',
          answer:
            'With care, yes. Let the soup cool 5 to 10 minutes off the heat first. Fill the blender only halfway. Hold a folded tea towel firmly over the lid while blending. Never use a bullet-style blender for hot soups — steam builds up and the lid can blow off under pressure. An immersion blender in the pot is easier and safer.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Cheddar Soup',
          href: '/recipes/soup/broccoli-cheddar',
          image: '/images/broccoli-cheddar-soup/hero.webp',
          prepTime: '40 min',
        },
        {
          title: 'How to Steam Broccoli',
          href: '/how-to-cook/steam',
          image: '/images/how-to-steam-broccoli/hero.webp',
          prepTime: '7 min',
        },
        {
          title: 'Roasted Broccoli',
          href: '/how-to-cook/roast',
          image: '/images/roasted-broccoli/hero.webp',
          prepTime: '25 min',
        },
      ]}
      keywords={[
        'cream of broccoli soup recipe',
        'cream of broccoli soup',
        'blended broccoli soup',
        'broccoli soup without cream',
        'easy cream of broccoli soup',
      ]}
      schemaJson={schemaJson}
    />
  )
}
