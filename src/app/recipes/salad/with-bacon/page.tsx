import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Salad with Bacon and Raisins | BroccoliPedia',
  description:
    'Raw broccoli florets, crispy baked bacon, plump raisins, and sunflower seeds in a creamy apple cider vinegar dressing. Ready in 15 minutes, better after 30.',
  keywords: [
    'broccoli salad with bacon raisins',
    'broccoli salad with bacon',
    'broccoli bacon salad',
    'broccoli raisin salad',
    'potluck broccoli salad',
    'make-ahead broccoli salad',
    'old fashioned broccoli salad',
  ],
  openGraph: {
    title: 'Broccoli Salad with Bacon and Raisins',
    description:
      'Raw broccoli florets, crispy baked bacon, plump raisins, and sunflower seeds in a creamy apple cider vinegar dressing.',
    images: [
      {
        url: '/images/broccoli-salad-bacon/broccoli-salad-bacon-hero-dish-natural-light.webp',
        width: 1200,
        height: 675,
        alt: 'Broccoli salad with bacon and raisins in a shallow white ceramic bowl on a wooden surface',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broccoli Salad with Bacon and Raisins',
    description:
      'Raw broccoli, crispy baked bacon, plump raisins, sunflower seeds, creamy apple cider vinegar dressing. 15 minutes.',
    images: ['/images/broccoli-salad-bacon/broccoli-salad-bacon-hero-dish-natural-light.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/salad/with-bacon',
  },
}

// WikiData-linked entities extracted via TextRazor from validated content
const mentionedEntities = [
  { '@type': 'Thing', name: 'Bacon', sameAs: 'https://www.wikidata.org/wiki/Q11106' },
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  { '@type': 'Thing', name: 'Raisin', sameAs: 'https://www.wikidata.org/wiki/Q13186' },
  { '@type': 'Thing', name: 'Salad', sameAs: 'https://www.wikidata.org/wiki/Q9266' },
  { '@type': 'Thing', name: 'Red onion', sameAs: 'https://www.wikidata.org/wiki/Q622350' },
  { '@type': 'Thing', name: 'Mayonnaise', sameAs: 'https://www.wikidata.org/wiki/Q167893' },
  { '@type': 'Thing', name: 'Apple cider vinegar', sameAs: 'https://www.wikidata.org/wiki/Q618322' },
  { '@type': 'Thing', name: 'Vinegar', sameAs: 'https://www.wikidata.org/wiki/Q41354' },
  { '@type': 'Thing', name: 'Milk', sameAs: 'https://www.wikidata.org/wiki/Q8495' },
  { '@type': 'Thing', name: 'Sugar', sameAs: 'https://www.wikidata.org/wiki/Q11002' },
  { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
]

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── BreadcrumbList ──────────────────────────────────────────────────────
    {
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
          name: 'Salad',
          item: 'https://broccolipedia.com/recipes/salad',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Broccoli Salad with Bacon and Raisins',
          item: 'https://broccolipedia.com/recipes/salad/with-bacon',
        },
      ],
    },

    // ── Person (Author) ─────────────────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': 'https://broccolipedia.com/about#elena-ignacio',
      name: 'Elena Ignacio',
      url: 'https://broccolipedia.com/about',
      sameAs: [
        'https://www.tiktok.com/@elenasainda',
        'https://www.youtube.com/@adelevlogs',
        'https://www.facebook.com/elena.ignacio',
      ],
      description:
        'Filipino mom of two based in Singapore. Has cooked across 14 countries. Writes about broccoli for BroccoliPedia.',
    },

    // ── Recipe ──────────────────────────────────────────────────────────────
    {
      '@type': 'Recipe',
      name: 'Broccoli Salad with Bacon and Raisins',
      description:
        'Raw broccoli florets, crispy baked bacon, plump golden raisins, sunflower seeds, and red onion tossed in a creamy apple cider vinegar and mayo dressing. No cooking required beyond the bacon. Ready in 15 minutes.',
      url: 'https://broccolipedia.com/recipes/salad/with-bacon',
      image: [
        {
          '@type': 'ImageObject',
          url: 'https://broccolipedia.com/images/broccoli-salad-bacon/broccoli-salad-bacon-hero-dish-natural-light.webp',
          width: 1200,
          height: 675,
          caption:
            'Broccoli salad with bacon and raisins in a shallow white ceramic bowl before tossing with dressing',
        },
        {
          '@type': 'ImageObject',
          url: 'https://broccolipedia.com/images/broccoli-salad-bacon/broccoli-salad-bacon-prep-process-ingredients.webp',
          width: 1200,
          height: 675,
          caption: 'Apple cider vinegar mayo dressing being whisked in a glass bowl',
        },
        {
          '@type': 'ImageObject',
          url: 'https://broccolipedia.com/images/broccoli-salad-bacon/broccoli-salad-bacon-plated-close-up-garnish.webp',
          width: 1200,
          height: 675,
          caption: 'Dressed broccoli salad with bacon ready to serve',
        },
      ],
      author: {
        '@type': 'Person',
        '@id': 'https://broccolipedia.com/about#elena-ignacio',
        name: 'Elena Ignacio',
      },
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      prepTime: 'PT15M',
      cookTime: 'PT18M',
      totalTime: 'PT33M',
      recipeYield: '6 servings',
      recipeCategory: 'Salad',
      recipeCuisine: 'American',
      keywords:
        'broccoli salad with bacon raisins, broccoli salad, bacon salad, raisin salad, potluck salad, make-ahead salad, cold salad',
      recipeIngredient: [
        '700g (about 4.5 cups) fresh broccoli florets, cut into bite-sized pieces',
        '8 strips thick-cut bacon',
        '3/4 cup (120g) raisins, preferably golden',
        '1/3 cup (40g) roasted sunflower seeds',
        '1/4 cup (35g) red onion, very finely diced',
        '3/4 cup (180g) full-fat mayonnaise',
        '2 tablespoons apple cider vinegar',
        '2 tablespoons sugar',
        '1 tablespoon whole milk',
        'Salt and black pepper to taste',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Soak the raisins',
          text: 'Cover raisins with boiling water and leave for 5 minutes, then drain. This plumps them so they are juicy rather than dense and chewy in the finished salad.',
          position: 1,
        },
        {
          '@type': 'HowToStep',
          name: 'Prepare the red onion',
          text: 'Finely dice the onion and rinse it under cold running water for 30 seconds. This washes away the enzyme that makes raw onion linger on your palate. Pat dry.',
          position: 2,
        },
        {
          '@type': 'HowToStep',
          name: 'Cook the bacon',
          text: 'Preheat your oven to 200°C (400°F). Lay bacon strips on a wire rack over a baking sheet. Bake 15 to 18 minutes until very crispy. Cool completely on paper towels, then crumble.',
          position: 3,
        },
        {
          '@type': 'HowToStep',
          name: 'Make the dressing',
          text: 'Whisk together the mayo, apple cider vinegar, and sugar until smooth. Add the tablespoon of milk and whisk again. Season with salt and pepper and taste. Adjust the vinegar-sugar balance from here.',
          position: 4,
        },
        {
          '@type': 'HowToStep',
          name: 'Cut the broccoli',
          text: 'Trim florets into small, roughly equal pieces, about the size of a large grape. Try the crown-side-down method: flip the broccoli head so the crown rests on your board, then twist and pull florets off with a small knife.',
          position: 5,
        },
        {
          '@type': 'HowToStep',
          name: 'Combine',
          text: 'In a large bowl, add broccoli, drained raisins, sunflower seeds, and red onion. Pour the dressing over and toss thoroughly.',
          position: 6,
        },
        {
          '@type': 'HowToStep',
          name: 'Rest before serving',
          text: 'Cover and refrigerate for at least 30 minutes. When ready to serve, scatter bacon over the top and toss once.',
          position: 7,
        },
      ],
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '1 heaped cup',
        calories: '345',
        proteinContent: '9g',
        fatContent: '26g',
        carbohydrateContent: '21g',
        fiberContent: '3g',
        sugarContent: '14g',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '112',
      },
      mentions: mentionedEntities,
    },

    // ── FAQPage ─────────────────────────────────────────────────────────────
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I soak the raisins before adding them to the salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pour boiling water over the raisins and leave for 5 minutes before draining. They absorb water and go from dense and chewy to soft and juicy. It takes 5 minutes and it changes the texture of the whole salad.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of vinegar is best for broccoli salad dressing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apple cider vinegar. White vinegar is sharper and it can fight the sweetness from the raisins and sugar. Apple cider vinegar has a gentle fruitiness that complements both. Most written recipes just say "vinegar" without specifying, which is why many homemade versions taste slightly off.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should broccoli salad be made the night before?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can assemble the dry salad components up to 24 hours ahead. Keep the dressing separate and add it about 30 minutes before serving. That 30-minute window is when the dressing integrates and the broccoli softens just enough. Add the bacon only when ready to serve so it stays crispy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use dried cranberries instead of raisins in broccoli salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and this swap converts almost every raisin-objector. Dried cranberries are a little tarter and brighter, which gives the salad a slightly different character but still works beautifully with the bacon and dressing. Use the same quantity and soak them the same way.',
          },
        },
      ],
    },
  ],
}

export default function BroccoliSaladWithBaconPage() {
  return (
    <RecipeTemplate
      title="Broccoli Salad with Bacon and Raisins"
      description="Alfi ate three portions at his cousin&rsquo;s birthday party in 2023. I spent two weekends reverse-engineering the dressing. The moment I swapped white vinegar for apple cider vinegar, Adam walked through the kitchen and stopped. That was the tell."
      image="/images/broccoli-salad-bacon/broccoli-salad-bacon-hero-dish-natural-light.webp"
      imageAlt="Broccoli salad with bacon and raisins in a shallow white ceramic bowl on a warm wooden surface"
      meta={{
        prepTime: '15 min',
        cookTime: '18 min (bacon)',
        totalTime: '33 min + 30 min rest',
        servings: 6,
        difficulty: 'Easy',
        calories: 345,
      }}
      ingredients={[
        '700g (about 4.5 cups) fresh broccoli florets, cut into bite-sized pieces',
        '8 strips thick-cut bacon',
        '3/4 cup (120g) raisins, preferably golden',
        '1/3 cup (40g) roasted sunflower seeds',
        '1/4 cup (35g) red onion, very finely diced',
        'For the dressing:',
        '3/4 cup (180g) full-fat mayonnaise',
        '2 tablespoons apple cider vinegar',
        '2 tablespoons sugar',
        '1 tablespoon whole milk',
        'Salt and black pepper to taste',
      ]}
      steps={[
        {
          text: 'Soak the raisins. Cover raisins with boiling water and leave for 5 minutes, then drain. This plumps them so they are juicy rather than dense and chewy in the finished salad.',
        },
        {
          text: 'Prepare the red onion. Finely dice the onion and rinse it under cold running water for 30 seconds. This washes away the enzyme that makes raw onion linger on your palate. Pat dry.',
        },
        {
          text: 'Cook the bacon. Preheat your oven to 200°C (400°F). Lay bacon strips on a wire rack over a baking sheet. Bake 15 to 18 minutes until very crispy. Cool completely on paper towels, then crumble. Baking gives a cleaner, drier crumble than pan-frying.',
        },
        {
          text: 'Make the dressing. Whisk together the mayo, apple cider vinegar, and sugar until smooth. Add the tablespoon of milk and whisk again. The milk thins the dressing just enough to coat every floret evenly. Season with salt and pepper.',
          image: '/images/broccoli-salad-bacon/broccoli-salad-bacon-prep-process-ingredients.webp',
          imageAlt: 'Apple cider vinegar mayo dressing being whisked in a glass bowl',
        },
        {
          text: 'Cut the broccoli. Trim florets into small, roughly equal pieces, about the size of a large grape. Crown-side-down method: flip the broccoli head so the crown rests on your board, then twist and pull florets off with a small knife. Faster than cutting from above.',
        },
        {
          text: 'Combine. In a large bowl, add broccoli, drained raisins, sunflower seeds, and red onion. Pour the dressing over and toss thoroughly.',
        },
        {
          text: 'Rest before serving. Cover and refrigerate for at least 30 minutes. The broccoli softens slightly, the dressing works into every piece, and it all tastes like it belongs together. When ready to serve, scatter bacon over the top and toss once.',
          image: '/images/broccoli-salad-bacon/broccoli-salad-bacon-plated-close-up-garnish.webp',
          imageAlt: 'Dressed broccoli salad with bacon scattered over the top ready to serve',
        },
      ]}
      tips={[
        'Use golden raisins if you can find them. They are softer, sweeter, and plumper than regular dark raisins. The hot water soak in Step 1 closes the gap if you only have regular ones. Press one raisin before buying: if it feels like dry rubber, skip that bag.',
        'Baked bacon, not pan-fried. Pan-fried bacon releases fat unevenly and some of that fat mixes into the dressing making the whole thing oily. Oven-baked bacon is crispier, drains cleanly, and crumbles better. An air fryer works just as well.',
        'Apple cider vinegar, not white vinegar. White vinegar is sharp and fights the sweetness from the raisins. Apple cider vinegar has a gentle fruitiness that works with both the raisins and the sugar. Most recipes just say "vinegar" — that is why many homemade versions taste slightly off.',
        'The milk trick. A single tablespoon of milk in the dressing sounds odd but it genuinely works. Mayo straight from the jar tends to pile up rather than coat. The milk thins it to exactly the right consistency.',
        'Add bacon last. If you mix the bacon in when you first dress the salad and then refrigerate for hours, it will go soft. Scatter it and toss right before you serve.',
      ]}
      nutrition={{
        servingSize: '1 heaped cup (approx. 200g)',
        calories: 345,
        protein: '9g',
        carbs: '21g',
        fiber: '3g',
        fat: '26g',
      }}
      faqs={[
        {
          question: 'Should I soak the raisins before adding them to the salad?',
          answer:
            'Yes. Pour boiling water over the raisins and leave for 5 minutes before draining. They absorb water and go from dense and chewy to soft and juicy. It takes 5 minutes and it changes the texture of the whole salad.',
        },
        {
          question: 'What kind of vinegar is best for broccoli salad dressing?',
          answer:
            'Apple cider vinegar. White vinegar is sharper and fights the sweetness from the raisins and sugar, leaving the dressing with competing notes. Apple cider vinegar has a gentle fruitiness that complements both. Most written recipes just say "vinegar" without specifying — that is why many homemade versions taste slightly off.',
        },
        {
          question: 'Should broccoli salad be made the night before?',
          answer:
            'You can assemble the dry salad components up to 24 hours ahead. Keep the dressing separate and add it about 30 minutes before serving, not right before. That 30-minute window is when the dressing integrates and the broccoli softens just enough. Add the bacon only when ready to serve so it stays crispy.',
        },
        {
          question: 'Can I use dried cranberries instead of raisins in broccoli salad?',
          answer:
            'Yes, and this swap converts almost every raisin-objector. Dried cranberries are a little tarter and brighter, which gives the salad a slightly different character but still works beautifully with the bacon and dressing. Use the same quantity and soak them the same way.',
        },
      ]}
      related={[
        {
          title: 'Classic Broccoli Salad',
          href: '/recipes/salad/classic',
          image: '/images/broccoli-salad-classic/hero.webp',
          prepTime: '15 min',
        },
        {
          title: 'Broccoli Salad Dressing',
          href: '/recipes/salad/dressing',
          image: '/images/broccoli-salad-dressing/hero.webp',
          prepTime: '5 min',
        },
        {
          title: 'Broccoli Nutrition Facts',
          href: '/nutrition',
          image: '/images/broccoli-nutrition/hero.webp',
          prepTime: '2 min read',
        },
      ]}
      keywords={[
        'broccoli salad with bacon raisins',
        'broccoli salad with bacon',
        'broccoli raisin salad',
        'potluck salad',
        'make-ahead salad',
        'old fashioned broccoli salad',
      ]}
      schemaJson={schemaJson}
    />
  )
}
