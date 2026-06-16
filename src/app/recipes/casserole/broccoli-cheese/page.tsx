import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Cheese Casserole Recipe | BroccoliPedia',
  description:
    'A creamy, cheesy casserole with broccoli florets, sharp cheddar, and a golden buttery cracker topping. The dish that finally made Adam eat broccoli. Ready in 1 hour.',
  keywords: [
    'broccoli cheese casserole',
    'broccoli cheese casserole recipe',
    'holiday broccoli casserole',
    'Thanksgiving broccoli casserole',
    'cheesy broccoli bake',
    'broccoli casserole with Ritz crackers',
  ],
  openGraph: {
    title: 'Broccoli Cheese Casserole Recipe',
    description:
      'Sharp cheddar, cream of mushroom soup, a Dijon trick no one tells you about, and a buttery Ritz cracker topping. Elena shows you how to make it without it going watery.',
    images: [
      {
        url: '/images/broccoli-cheese-casserole/broccoli-cheese-casserole-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli cheese casserole fresh from the oven in a white ceramic dish',
      },
    ],
    type: 'article',
  },
}

// WikiData-linked entities from TextRazor extraction
// Top entities: Broccoli Q47722, Casserole Q6501890, Cheddar Q217525,
// Cream of mushroom soup Q179158, Ritz Crackers Q1763170, Mayonnaise Q167893,
// Dijon mustard Q131748, Vitamin C Q199678, Baking Q720398, Eggs Q93189

const schemaJson = [
  // ── 1. Recipe schema ────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Broccoli Cheese Casserole',
    description:
      'A creamy, cheesy casserole with broccoli florets, sharp cheddar, and a buttery cracker topping. The one dish that made Adam eat broccoli.',
    image: [
      'https://broccolipedia.com/images/broccoli-cheese-casserole/broccoli-cheese-casserole-hero-dish-natural-light.webp',
      'https://broccolipedia.com/images/broccoli-cheese-casserole/broccoli-cheese-casserole-prep-process-ingredients.webp',
      'https://broccolipedia.com/images/broccoli-cheese-casserole/broccoli-cheese-casserole-plated-close-up-garnish.webp',
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
    datePublished: '2026-06-16',
    dateModified: '2026-06-16',
    prepTime: 'PT15M',
    cookTime: 'PT45M',
    totalTime: 'PT60M',
    recipeYield: '8 servings',
    recipeCategory: 'Side Dish',
    recipeCuisine: 'American',
    keywords:
      'broccoli cheese casserole, holiday side dish, Thanksgiving broccoli casserole, broccoli casserole with Ritz crackers',
    recipeIngredient: [
      '680g (1.5 lbs) broccoli florets, fresh or frozen',
      '1 can (295g / 10.5 oz) cream of mushroom soup',
      '1 cup (240g) full-fat mayonnaise',
      '2 large eggs',
      '1.5 cups (170g) sharp cheddar, freshly grated',
      '1 small onion, finely diced',
      '1 teaspoon Dijon mustard',
      'Salt and black pepper to taste',
      '1 sleeve (about 40 crackers) Ritz crackers, crushed',
      '3 tablespoons (45g) unsalted butter, melted',
    ],
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        name: 'Preheat and prepare dish',
        text: 'Preheat your oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Prepare the broccoli',
        text: 'If using fresh broccoli: blanch florets in salted boiling water for 2 to 3 minutes, then transfer immediately to a bowl of ice water for 30 seconds. Drain well and pat dry on a paper towel. If using frozen: no need to thaw. Break apart any clumps before using. The broccoli needs to be as dry as possible before it goes into the dish.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Mix the sauce',
        text: 'In a large bowl, combine the cream of mushroom soup, mayonnaise, eggs, Dijon mustard, and diced onion. Stir well. Fold in 1 cup of the grated cheddar. Season with salt and pepper.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Combine broccoli and sauce',
        text: 'Add the prepared broccoli to the bowl and stir gently to coat everything in the sauce.',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Fill the baking dish',
        text: 'Pour the mixture into your prepared baking dish and spread into an even layer. Scatter the remaining half cup of cheddar over the top.',
        position: 5,
      },
      {
        '@type': 'HowToStep',
        name: 'Make the cracker topping',
        text: 'Crush the Ritz crackers in a zip-lock bag using a rolling pin to a medium crumb. Mix the crumbs with the melted butter in the bag until evenly coated, then scatter over the casserole.',
        position: 6,
      },
      {
        '@type': 'HowToStep',
        name: 'Bake',
        text: 'Bake uncovered for 45 minutes, until the cracker topping is golden brown and the edges are bubbling. Rest 5 minutes before serving.',
        position: 7,
      },
    ],
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1/8 of recipe (approximately 200g)',
      calories: '320 calories',
      proteinContent: '12 g',
      fatContent: '22 g',
      carbohydrateContent: '18 g',
      fiberContent: '3 g',
    },
    // WikiData entity mentions — key ingredients with linked identifiers
    mentions: [
      {
        '@type': 'Thing',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
      },
      {
        '@type': 'Thing',
        name: 'Casserole',
        sameAs: 'https://www.wikidata.org/wiki/Q6501890',
      },
      {
        '@type': 'Thing',
        name: 'Cheddar cheese',
        sameAs: 'https://www.wikidata.org/wiki/Q217525',
      },
      {
        '@type': 'Thing',
        name: 'Cream of mushroom soup',
        sameAs: 'https://www.wikidata.org/wiki/Q179158',
      },
      {
        '@type': 'Thing',
        name: 'Ritz Crackers',
        sameAs: 'https://www.wikidata.org/wiki/Q1763170',
      },
      {
        '@type': 'Thing',
        name: 'Mayonnaise',
        sameAs: 'https://www.wikidata.org/wiki/Q167893',
      },
      {
        '@type': 'Thing',
        name: 'Dijon mustard',
        sameAs: 'https://www.wikidata.org/wiki/Q131748',
      },
      {
        '@type': 'Thing',
        name: 'Vitamin C',
        sameAs: 'https://www.wikidata.org/wiki/Q199678',
      },
    ],
  },

  // ── 2. FAQPage schema ───────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does broccoli need to be cooked before putting in a casserole?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the type. Frozen broccoli can go in straight from frozen. Fresh broccoli needs a brief blanch of 2 to 3 minutes in salted boiling water, then an ice bath to stop the cooking. Without blanching, fresh broccoli can stay firm and slightly raw in the center.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should you bake broccoli casserole covered or uncovered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uncovered. The cracker topping needs direct oven heat to get golden brown and stay crunchy. Covering it traps steam and turns the topping soft. The filling stays moist on its own because of the soup and mayonnaise base.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you keep broccoli cheese casserole from being watery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Two things. First, dry your broccoli thoroughly before it goes in. Frozen broccoli especially releases water during cooking. Blot it, press it, do not skip this. Second, the egg in the filling acts as a binder. It firms the sauce during baking so the filling holds together.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I make broccoli cheese casserole ahead of time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Assemble everything except the cracker topping and refrigerate for up to 24 hours. Add the topping right before baking. If going straight from the fridge, add 10 minutes to the bake time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can I substitute for cream of mushroom soup in broccoli casserole?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cream of chicken or cream of cheddar soup both work well. For a from-scratch version, make a simple roux with butter and flour, then add chicken broth and half-and-half with garlic and seasoning. It takes 10 minutes and tastes better than the can.',
        },
      },
    ],
  },

  // ── 3. BreadcrumbList schema ─────────────────────────────────────────────────
  {
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
        name: 'Casseroles',
        item: 'https://broccolipedia.com/recipes/casserole',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Broccoli Cheese Casserole',
        item: 'https://broccolipedia.com/recipes/casserole/broccoli-cheese',
      },
    ],
  },
]

export default function BroccoliCheeseCasserolePage() {
  return (
    <RecipeTemplate
      title="Broccoli Cheese Casserole"
      description="Adam refused broccoli for three months straight in 2022. Then I made this casserole at a Thanksgiving dinner in Kuala Lumpur and he ate three helpings. He did not know it was broccoli. He has eaten broccoli every week since."
      image="/images/broccoli-cheese-casserole/broccoli-cheese-casserole-hero-dish-natural-light.webp"
      imageAlt="Broccoli cheese casserole fresh from the oven — golden Ritz cracker topping, bubbling cheese at the edges, one serving scooped to show the creamy interior"
      meta={{
        prepTime: '15 min',
        cookTime: '45 min',
        totalTime: '1 hour',
        servings: 8,
        difficulty: 'Easy',
        calories: 320,
      }}
      ingredients={[
        '680g (1.5 lbs) broccoli florets, fresh or frozen',
        '1 can (295g / 10.5 oz) cream of mushroom soup',
        '1 cup (240g) full-fat mayonnaise',
        '2 large eggs',
        '1.5 cups (170g) sharp cheddar, freshly grated',
        '1 small onion, finely diced',
        '1 teaspoon Dijon mustard',
        'Salt and black pepper to taste',
        '1 sleeve (about 40 crackers) Ritz crackers, crushed',
        '3 tablespoons (45g) unsalted butter, melted',
      ]}
      steps={[
        {
          text: 'Preheat your oven to 350°F (175°C). Grease a 9x13 inch baking dish.',
        },
        {
          text: 'Prepare the broccoli. If using fresh: blanch florets in salted boiling water for 2 to 3 minutes, then transfer immediately to a bowl of ice water for 30 seconds. Drain well and pat dry on a paper towel. If using frozen: no need to thaw. Break apart any clumps before using. Either way, the broccoli needs to be as dry as possible before it goes into the dish.',
        },
        {
          text: 'Mix the sauce. In a large bowl, combine the cream of mushroom soup, mayonnaise, eggs, Dijon mustard, and diced onion. Stir well. The egg is doing real work here: the proteins coagulate during baking and firm the filling so it holds together instead of pooling into liquid. Fold in 1 cup of the grated cheddar. Season with salt and pepper.',
        },
        {
          text: 'Add the prepared broccoli to the bowl and stir gently to coat everything in the sauce.',
        },
        {
          text: 'Pour the mixture into your prepared baking dish and spread into an even layer. Scatter the remaining half cup of cheddar over the top.',
          image: '/images/broccoli-cheese-casserole/broccoli-cheese-casserole-prep-process-ingredients.webp',
          imageAlt: 'Broccoli cheese casserole filling spread in a baking dish before topping is added',
        },
        {
          text: 'Crush the Ritz crackers in a zip-lock bag using a rolling pin. Medium crumb, not dust. Mix the crumbs with the melted butter in the bag until evenly coated, then scatter over the casserole.',
        },
        {
          text: 'Bake uncovered for 45 minutes, until the cracker topping is golden brown and the edges are bubbling. Rest 5 minutes before serving.',
        },
      ]}
      tips={[
        'The Dijon changes everything. One teaspoon in the sauce gives depth and cuts the richness of the mayo and cheese. You will not taste mustard. You will wonder why other versions taste slightly flat by comparison.',
        'Dry broccoli is non-negotiable. Whether you blanch fresh florets or use frozen, press the broccoli dry before it goes in. Frozen broccoli releases significant water during baking. That water is why casseroles go soggy.',
        'Grate the cheese yourself. Pre-shredded cheese has an anti-caking coating that prevents clean melting. A block of aged cheddar and a box grater takes three minutes. The result is noticeably better.',
        'The Velveeta question. I made this with Velveeta because it was what was available near our hotel in Kuala Lumpur. It worked. It melts very smoothly. I prefer aged cheddar now, but I will not pretend Velveeta is a scandal.',
        'Alfi will eat this if the cracker topping is thick enough. He is honest about why. I give him more crackers.',
        'To make ahead: assemble the filling and refrigerate for up to 24 hours. Add the cracker topping only when you are ready to bake. Add 10 extra minutes if going straight from the fridge.',
      ]}
      nutrition={{
        servingSize: '1/8 of dish (approx. 200g)',
        calories: 320,
        protein: '12g',
        carbs: '18g',
        fiber: '3g',
        fat: '22g',
      }}
      faqs={[
        {
          question: 'Does broccoli need to be cooked before putting in a casserole?',
          answer:
            'It depends on the type. Frozen broccoli can go in straight from frozen. Fresh broccoli needs a brief blanch of 2 to 3 minutes in salted boiling water, then an ice bath to stop the cooking. Without blanching, fresh broccoli can stay firm and slightly raw in the center.',
        },
        {
          question: 'Should you bake broccoli casserole covered or uncovered?',
          answer:
            'Uncovered. The cracker topping needs direct oven heat to get golden brown and stay crunchy. Covering it traps steam and turns the topping soft. The filling stays moist on its own because of the soup and mayonnaise base.',
        },
        {
          question: 'How do you keep broccoli cheese casserole from being watery?',
          answer:
            'Two things. First, dry your broccoli thoroughly before it goes in. Frozen broccoli especially releases water during cooking. Blot it, press it, do not skip this. Second, the egg in the filling acts as a binder. It firms the sauce during baking so the filling holds together.',
        },
        {
          question: 'Can I make broccoli cheese casserole ahead of time?',
          answer:
            'Yes. Assemble everything except the cracker topping and refrigerate for up to 24 hours. Add the topping right before baking. If going straight from the fridge, add 10 minutes to the bake time.',
        },
        {
          question: 'What can I substitute for cream of mushroom soup in broccoli casserole?',
          answer:
            'Cream of chicken or cream of cheddar soup both work well. For a from-scratch version, make a simple roux with butter and flour, then add chicken broth and half-and-half with garlic and seasoning. It takes 10 minutes and tastes better than the can.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Rice Casserole',
          href: '/recipes/casserole/broccoli-rice',
          image: '/images/broccoli-rice-casserole/broccoli-rice-casserole-hero.webp',
          prepTime: '20 min',
        },
        {
          title: 'Broccoli Cheddar Soup',
          href: '/recipes/soup/broccoli-cheddar',
          image: '/images/broccoli-cheddar-soup/broccoli-cheddar-soup-hero.webp',
          prepTime: '15 min',
        },
        {
          title: 'How to Blanch Broccoli',
          href: '/cooking-methods/blanching',
          image: '/images/blanching-broccoli/blanching-broccoli-hero.webp',
          prepTime: '5 min read',
        },
      ]}
      keywords={[
        'broccoli cheese casserole',
        'broccoli cheese casserole recipe',
        'holiday broccoli casserole',
        'Thanksgiving broccoli casserole',
        'cheesy broccoli bake',
      ]}
      schemaJson={schemaJson as unknown as Record<string, unknown>}
    />
  )
}
