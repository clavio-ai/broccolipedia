import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheddar Soup Recipe (Homemade, Better Than Restaurant)',
  description:
    'Homemade broccoli cheddar soup in 35 minutes, one pot. Real sharp cheddar, fresh broccoli, and three secret ingredients (smoked paprika, mustard powder, nutmeg) that no blog recipe mentions.',
  keywords: [
    'broccoli cheddar soup recipe homemade',
    'broccoli cheddar soup recipe',
    'easy broccoli cheddar soup',
    'homemade broccoli cheese soup',
    'broccoli cheddar soup secret ingredient',
  ],
  openGraph: {
    title: 'Homemade Broccoli Cheddar Soup (Better Than Panera)',
    description:
      'One pot, 35 minutes. Sharp cheddar, smoked paprika, nutmeg. The version that got my broccoli-refusing seven-year-old to ask for seconds.',
    images: [{ url: '/images/broccoli-cheddar-soup/broccoli-cheddar-soup-hero-dish-natural-light.webp', width: 1200, height: 630, alt: 'Bowl of homemade broccoli cheddar soup with crusty bread on a wooden board' }],
    type: 'article',
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/soup/broccoli-cheddar',
  },
}

// WikiData-linked entities from entities.json (TextRazor extraction)
const wikiDataEntities = [
  { name: 'Broccoli', wikidataId: 'Q47722', url: 'https://en.wikipedia.org/wiki/Broccoli' },
  { name: 'Cheddar cheese', wikidataId: 'Q182628', url: 'https://en.wikipedia.org/wiki/Cheddar_cheese' },
  { name: 'Roux', wikidataId: 'Q3516601', url: 'https://en.wikipedia.org/wiki/Roux' },
  { name: 'Dijon mustard', wikidataId: 'Q2133077', url: 'https://en.wikipedia.org/wiki/Dijon_mustard' },
  { name: 'Smoked paprika', wikidataId: 'Q207626', url: 'https://en.wikipedia.org/wiki/Paprika' },
  { name: 'Nutmeg', wikidataId: 'Q83193', url: 'https://en.wikipedia.org/wiki/Nutmeg' },
  { name: 'Vitamin C', wikidataId: 'Q193521', url: 'https://en.wikipedia.org/wiki/Vitamin_C' },
  { name: 'Vitamin K', wikidataId: 'Q131808', url: 'https://en.wikipedia.org/wiki/Vitamin_K' },
]

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    // Recipe schema
    {
      '@type': 'Recipe',
      '@id': 'https://broccolipedia.com/recipes/soup/broccoli-cheddar#recipe',
      name: 'Homemade Broccoli Cheddar Soup',
      description:
        'A rich, creamy homemade broccoli cheddar soup made with a butter-flour roux, half-and-half, fresh broccoli, and freshly shredded sharp cheddar. The secret ingredients are smoked paprika, mustard powder, and a pinch of nutmeg.',
      image: [
        'https://broccolipedia.com/images/broccoli-cheddar-soup/broccoli-cheddar-soup-hero-dish-natural-light.webp',
        'https://broccolipedia.com/images/broccoli-cheddar-soup/broccoli-cheddar-soup-prep-process-ingredients.webp',
        'https://broccolipedia.com/images/broccoli-cheddar-soup/broccoli-cheddar-soup-plated-close-up-garnish.webp',
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
      datePublished: '2026-01-15',
      dateModified: '2026-06-16',
      prepTime: 'PT10M',
      cookTime: 'PT25M',
      totalTime: 'PT35M',
      recipeYield: '6 servings',
      recipeCategory: 'Soup',
      recipeCuisine: 'American',
      keywords:
        'broccoli cheddar soup, homemade broccoli cheddar soup, broccoli cheese soup, easy broccoli soup',
      recipeIngredient: [
        '5 cups (about 500g) fresh broccoli florets, cut small',
        '4 tablespoons unsalted butter',
        '1 medium yellow onion, finely diced',
        '1 cup (100g) shredded carrots',
        '2 stalks celery, finely diced',
        '3 garlic cloves, minced',
        '1/4 cup (30g) all-purpose flour',
        '3 cups (720ml) chicken broth or vegetable broth',
        '3 cups (720ml) half-and-half',
        '1 teaspoon Dijon mustard',
        '1/4 teaspoon mustard powder',
        '1/2 teaspoon smoked paprika',
        '1/4 teaspoon freshly grated nutmeg',
        '1/2 teaspoon chicken bouillon (optional)',
        '4 cups (450g) sharp cheddar cheese, freshly shredded from a block',
        'Salt and black pepper to taste',
        'Crusty bread or sourdough to serve',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Soften the vegetables',
          text: 'Melt the butter in a large heavy-bottomed pot over medium heat. Add the onion, carrots, and celery. Cook for 6 to 7 minutes, stirring occasionally, until the vegetables soften. Add the garlic and cook one more minute.',
          image: 'https://broccolipedia.com/images/broccoli-cheddar-soup/broccoli-cheddar-soup-prep-process-ingredients.webp',
        },
        {
          '@type': 'HowToStep',
          name: 'Make the roux',
          text: 'Add the flour all at once. Stir constantly for 2 full minutes. The mixture becomes thick and paste-like -- this is the roux. Two minutes matters because it cooks out the raw flour taste.',
        },
        {
          '@type': 'HowToStep',
          name: 'Add the liquids',
          text: 'Slowly pour in the chicken broth while whisking to prevent lumps. Add the half-and-half. Bring to a gentle simmer over medium heat.',
        },
        {
          '@type': 'HowToStep',
          name: 'Simmer with broccoli',
          text: 'Add the broccoli florets and chicken bouillon if using. Reduce to a steady simmer. Cook 15 to 18 minutes, stirring occasionally, until the broccoli is completely tender. The smaller pieces will dissolve into the broth.',
        },
        {
          '@type': 'HowToStep',
          name: 'Season the soup',
          text: 'Remove the pot from the heat completely. Stir in the Dijon mustard, mustard powder, smoked paprika, nutmeg, and a generous amount of black pepper. Taste and add salt.',
        },
        {
          '@type': 'HowToStep',
          name: 'Melt in the cheese',
          text: 'Add the freshly shredded cheddar in three batches, stirring after each addition until fully melted before adding the next. The pot must be off the heat the entire time. Adding cheese to boiling liquid causes the protein to seize and makes the soup grainy.',
        },
        {
          '@type': 'HowToStep',
          name: 'Finish and serve',
          text: 'Taste and adjust seasoning. For a thicker soup, return to low heat and simmer uncovered 5 minutes, stirring often. Serve immediately with crusty bread.',
        },
      ],
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '1.5 cups (350ml)',
        calories: '360 calories',
        proteinContent: '16g',
        carbohydrateContent: '14g',
        fiberContent: '2.5g',
        fatContent: '27g',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '48',
      },
      // WikiData-linked entities as mentions
      mentions: wikiDataEntities.map((e) => ({
        '@type': 'Thing',
        name: e.name,
        sameAs: `https://www.wikidata.org/wiki/${e.wikidataId}`,
        url: e.url,
      })),
    },

    // FAQPage schema (min 4 Q&A pairs)
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/recipes/soup/broccoli-cheddar#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the secret ingredient in broccoli cheddar soup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three ingredients that most recipes skip: mustard powder, smoked paprika, and nutmeg. Mustard powder disperses more evenly than Dijon alone. Smoked paprika adds warmth you cannot identify but notice when it is missing. Nutmeg is borrowed from béchamel technique and rounds out the richness without adding detectable flavor of its own.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my broccoli cheddar soup come out grainy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Two causes: cheese added to liquid that was still too hot, or pre-shredded cheese from a bag. Cheese proteins seize at high temperatures. Always add cheese off the heat. Pre-shredded cheese is coated in cellulose powder and anti-caking agents that block it from melting properly. Use freshly shredded block cheddar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I freeze broccoli cheddar soup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not recommended. Cream-based soups with cheese separate badly when frozen and thawed. If you need to make this ahead, store the soup base without the cheese and add freshly shredded cheddar when you reheat.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I add to broccoli cheddar soup to give it more flavor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Smoked paprika, mustard powder, and nutmeg are the three additions that make the biggest difference. A half teaspoon of chicken bouillon also adds umami depth. Dry mustard powder disperses more evenly through the soup than Dijon alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use heavy cream or half-and-half in broccoli cheddar soup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Half-and-half is the better choice. Heavy cream makes the soup feel heavy and cloying. You already have richness from the cheese and the roux. Half-and-half adds body without the heaviness.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I make broccoli cheddar soup gluten-free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Replace the flour roux with 2 tablespoons of cornstarch mixed with 3 tablespoons of cold water, stirred into the simmering broth. The texture is slightly different but the soup still works well.',
          },
        },
      ],
    },

    // BreadcrumbList schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/recipes/soup/broccoli-cheddar#breadcrumb',
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
          name: 'Broccoli Cheddar Soup',
          item: 'https://broccolipedia.com/recipes/soup/broccoli-cheddar',
        },
      ],
    },

    // Author Person schema
    {
      '@type': 'Person',
      '@id': 'https://broccolipedia.com/about#elena-ignacio',
      name: 'Elena Ignacio',
      jobTitle: 'Food Writer and Recipe Developer',
      description:
        'Filipino mom of two based in Singapore. Has cooked in 14+ countries. Creator behind BroccoliPedia and @elenasainda on TikTok.',
      url: 'https://broccolipedia.com/about',
      sameAs: [
        'https://www.tiktok.com/@elenasainda',
        'https://www.youtube.com/@adelevlogs',
        'https://www.facebook.com/elena.ignacio',
      ],
    },
  ],
}

export default function BroccoliCheddarSoupPage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheddar Soup (Homemade, Better Than Any Restaurant Version)"
      description="Adam turned seven that January and decided broccoli was disgusting. Three months of flat refusal. Then one Sunday I made this soup and he asked for seconds before I had even sat down. He did not know there was half a head of broccoli in it."
      image="/images/broccoli-cheddar-soup/broccoli-cheddar-soup-hero-dish-natural-light.webp"
      imageAlt="Bowl of homemade broccoli cheddar soup with visible broccoli florets, steam rising, crusty bread alongside on a wooden board"
      meta={{
        prepTime: '10 min',
        cookTime: '25 min',
        totalTime: '35 min',
        servings: 6,
        difficulty: 'Easy',
        calories: 360,
      }}
      ingredients={[
        '5 cups (about 500g) fresh broccoli florets, cut small',
        '4 tablespoons unsalted butter',
        '1 medium yellow onion, finely diced',
        '1 cup (100g) shredded carrots',
        '2 stalks celery, finely diced',
        '3 garlic cloves, minced',
        '1/4 cup (30g) all-purpose flour',
        '3 cups (720ml) chicken broth or vegetable broth',
        '3 cups (720ml) half-and-half',
        '1 teaspoon Dijon mustard',
        '1/4 teaspoon mustard powder',
        '1/2 teaspoon smoked paprika',
        '1/4 teaspoon freshly grated nutmeg',
        '1/2 teaspoon chicken bouillon (optional)',
        '4 cups (450g) sharp cheddar cheese, freshly shredded from a block',
        'Salt and black pepper to taste',
        'Crusty bread or sourdough to serve',
      ]}
      steps={[
        {
          text: 'Melt the butter in a large heavy-bottomed pot over medium heat. Add the onion, carrots, and celery. Cook for 6 to 7 minutes, stirring occasionally, until the vegetables soften. Add the garlic and cook one more minute.',
        },
        {
          text: 'Add the flour all at once. Stir constantly for 2 full minutes. The mixture becomes thick and paste-like -- this is the roux. Two minutes matters because it cooks out the raw flour taste.',
          image: '/images/broccoli-cheddar-soup/broccoli-cheddar-soup-prep-process-ingredients.webp',
          imageAlt: 'Butter and flour roux being stirred in a heavy pot on the stovetop',
        },
        {
          text: 'Slowly pour in the chicken broth while whisking to prevent lumps. Add the half-and-half. Bring to a gentle simmer over medium heat.',
        },
        {
          text: 'Add the broccoli florets and chicken bouillon if using. Reduce to a steady simmer. Cook 15 to 18 minutes, stirring occasionally, until the broccoli is completely tender. The smaller pieces will dissolve into the broth. That is exactly what you want.',
        },
        {
          text: 'Remove the pot from the heat completely. Stir in the Dijon mustard, mustard powder, smoked paprika, nutmeg, and a generous amount of black pepper. Taste and add salt.',
        },
        {
          text: 'Add the freshly shredded cheddar in three batches, stirring after each addition until fully melted before adding the next. The pot must be off the heat the entire time. Adding cheese to boiling liquid is the single most common mistake with this soup.',
          image: '/images/broccoli-cheddar-soup/broccoli-cheddar-soup-plated-close-up-garnish.webp',
          imageAlt: 'Ladle lifting thick broccoli cheddar soup from pot showing velvety texture and broccoli pieces',
        },
        {
          text: 'Taste and adjust seasoning. For a thicker soup, return to low heat and simmer uncovered 5 minutes, stirring often. Serve immediately with crusty bread.',
        },
      ]}
      tips={[
        'Cut the broccoli smaller than bite-sized. Smaller florets cook faster and release more flavor into the broth. Large ones are still firm by the time the small ones have dissolved perfectly.',
        'Freshly shredded Tillamook medium cheddar melts clean without graininess. Extra-sharp cheddar is more intense but can get grainy if the temperature is not managed carefully.',
        'Do not skip the carrot and celery. They sweeten the base in a way that makes the whole soup taste more balanced. They are not garnish.',
        'Make it the day you serve it. This is not a stew that improves overnight. Reheat on low heat with constant stirring and a splash of broth if it tightens up.',
        'Adding cheese off the heat is the most common mistake. If the soup is still boiling, the cheese proteins seize and you get an oily, grainy mess. Always remove from heat first.',
      ]}
      nutrition={{
        servingSize: 'Approx 1.5 cups (350ml)',
        calories: 360,
        protein: '16g',
        carbs: '14g',
        fiber: '2.5g',
        fat: '27g',
      }}
      faqs={[
        {
          question: 'What is the secret ingredient in broccoli cheddar soup?',
          answer:
            'Three of them: mustard powder, smoked paprika, and nutmeg. Most recipes stop at Dijon mustard, which is good but not the full picture. Mustard powder disperses more evenly than the wet version. Smoked paprika adds a warmth you cannot identify but notice when it is missing. Nutmeg is borrowed from bechamel technique and rounds out the richness without any detectable flavor of its own.',
        },
        {
          question: 'Why does my broccoli cheddar soup come out grainy?',
          answer:
            'Two causes: cheese added to liquid that was still too hot, or pre-shredded cheese from a bag. Cheese proteins seize at high temperatures. Always pull the pot completely off the heat before the first handful of cheese goes in. Pre-shredded cheese is coated in cellulose powder and anti-caking agents that block it from melting smoothly. Buy a block and grate it yourself.',
        },
        {
          question: 'Can I freeze broccoli cheddar soup?',
          answer:
            'Not recommended. Cream-based soups with cheese separate badly when frozen and thawed. If you need to make this ahead, store the soup base without the cheese and add freshly shredded cheddar when you reheat over low heat.',
        },
        {
          question: 'What can I add to broccoli cheddar soup to give it more flavor?',
          answer:
            'Smoked paprika, mustard powder, and nutmeg are the three additions that make the biggest difference. A half teaspoon of chicken bouillon also adds umami depth without changing the character of the soup. Dry mustard powder disperses more evenly through the soup than Dijon alone.',
        },
      ]}
      related={[
        {
          title: 'Cream of Broccoli Soup',
          href: '/recipes/soup/cream-of-broccoli',
          image: '/images/cream-of-broccoli/hero.webp',
          prepTime: '30 min',
        },
        {
          title: 'How to Steam Broccoli Perfectly',
          href: '/how-to-cook/steam',
          image: '/images/how-to-steam-broccoli/hero.webp',
          prepTime: '7 min',
        },
        {
          title: 'Broccoli Cheese Sauce',
          href: '/recipes/sauces/broccoli-cheese-sauce',
          image: '/images/broccoli-cheese-sauce/hero.webp',
          prepTime: '15 min',
        },
      ]}
      keywords={[
        'broccoli cheddar soup recipe homemade',
        'broccoli cheddar soup',
        'homemade broccoli cheese soup',
        'easy broccoli cheddar soup',
        'broccoli cheddar soup secret ingredient',
      ]}
      schemaJson={schemaJson}
    />
  )
}
