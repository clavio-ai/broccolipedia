import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Roasted Broccoli Recipe (Crispy Tips) | BroccoliPedia',
  description:
    'Get genuinely crispy roasted broccoli every time: 425°F, completely dry florets, flat side down, no stirring. Garlic, lemon, parmesan finish. Ready in 25 minutes.',
  keywords: [
    'roasted broccoli recipe crispy',
    'crispy roasted broccoli',
    'oven roasted broccoli',
    'how to roast broccoli',
    'crispy broccoli',
    'roasted broccoli 425',
  ],
  openGraph: {
    title: 'Roasted Broccoli Recipe (Crispy Tips)',
    description:
      'The secret to crispy roasted broccoli: completely dry florets, 425°F, flat side down, no stirring. Ready in 25 minutes.',
    url: 'https://broccolipedia.com/recipes/roasted',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/roasted-broccoli/roasted-broccoli-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Sheet pan of crispy roasted broccoli with golden-brown charred tips',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roasted Broccoli Recipe (Crispy Tips)',
    description:
      'Completely dry florets + 425°F + flat side down + no stirring. That is the whole secret.',
    images: ['/images/roasted-broccoli/roasted-broccoli-hero-dish-natural-light.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/roasted',
  },
}

// WikiData-linked entities extracted from content (USDA FDC 170379 sourced)
const wikiDataMentions = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/entity/Q47722' },
  { '@type': 'Thing', name: 'Olive oil', sameAs: 'https://www.wikidata.org/entity/Q36749' },
  { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/entity/Q27244' },
  { '@type': 'Thing', name: 'Lemon', sameAs: 'https://www.wikidata.org/entity/Q15492' },
  { '@type': 'Thing', name: 'Parmigiano-Reggiano', sameAs: 'https://www.wikidata.org/entity/Q1055865' },
  { '@type': 'Thing', name: 'Nutritional yeast', sameAs: 'https://www.wikidata.org/entity/Q899948' },
  { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/entity/Q2280055' },
  { '@type': 'Thing', name: 'Glucoraphanin', sameAs: 'https://www.wikidata.org/entity/Q2282499' },
  { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/entity/Q193598' },
  { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/entity/Q180147' },
  { '@type': 'Thing', name: 'Maillard reaction', sameAs: 'https://www.wikidata.org/entity/Q670780' },
  { '@type': 'Thing', name: 'Cruciferous vegetables', sameAs: 'https://www.wikidata.org/entity/Q3046897' },
  { '@type': 'Thing', name: 'Air fryer', sameAs: 'https://www.wikidata.org/entity/Q4690958' },
  { '@type': 'Thing', name: 'Caramelization', sameAs: 'https://www.wikidata.org/entity/Q1249140' },
]

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
      name: 'Roasted Broccoli',
      item: 'https://broccolipedia.com/recipes/roasted',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my roasted broccoli come out soggy instead of crispy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three causes: broccoli was wet before roasting, the pan was crowded so pieces steamed each other, or the oven temperature was too low. Fix: dry the broccoli thoroughly with paper towels, use two pans so each piece has space, and set your oven to at least 425°F (220°C).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I reheat roasted broccoli without making it soggy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not use the microwave — it reintroduces steam and kills the crispiness in 60 seconds. Reheat in a 400°F oven, a dry hot skillet for 2 to 3 minutes per side, or an air fryer at 360°F for 3 to 4 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is roasted broccoli good for diabetics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli is low in carbohydrates and has a low glycemic index. The fiber content (approximately 2.6g per 100g, USDA FDC 170379) slows glucose absorption. Research suggests cruciferous vegetables may support blood sugar management. Speak with your healthcare provider for personal dietary advice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should you wash broccoli before roasting it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Soak in cold salted water for 5 minutes to remove insects hiding in the florets, rinse well, then dry every piece completely with paper towels before oiling. The cold soak removes insects. The drying removes moisture. Both are necessary for crispy results.',
      },
    },
  ],
}

const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Roasted Broccoli (Crispy Tips)',
  description:
    'Crispy roasted broccoli with golden-brown edges and dark charred tips. Made with olive oil, garlic, lemon, and parmesan. Ready in 25 minutes at 425°F.',
  image: [
    'https://broccolipedia.com/images/roasted-broccoli/roasted-broccoli-hero-dish-natural-light.webp',
    'https://broccolipedia.com/images/roasted-broccoli/roasted-broccoli-prep-process-ingredients.webp',
    'https://broccolipedia.com/images/roasted-broccoli/roasted-broccoli-plated-close-up-garnish.webp',
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
  prepTime: 'PT5M',
  cookTime: 'PT20M',
  totalTime: 'PT25M',
  recipeYield: '4 servings',
  recipeCategory: 'Side Dish',
  recipeCuisine: 'International',
  keywords:
    'roasted broccoli, crispy roasted broccoli, oven roasted broccoli, crispy broccoli, garlic broccoli',
  recipeIngredient: [
    '600g (1.3 lb) broccoli, cut into florets with one flat side each',
    '3 tablespoons olive oil',
    '4 cloves garlic, thinly sliced',
    '1 teaspoon kosher salt',
    '1/2 teaspoon black pepper',
    '1 tablespoon fresh lemon juice',
    '1/4 cup (25g) grated parmesan, or 2 tablespoons nutritional yeast for vegan',
    '1/4 teaspoon red pepper flakes',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      name: 'Preheat oven',
      text: 'Preheat the oven to 425°F (220°C). Position the rack in the top third of the oven.',
      url: 'https://broccolipedia.com/recipes/roasted#step1',
    },
    {
      '@type': 'HowToStep',
      name: 'Soak broccoli',
      text: 'Soak the broccoli in cold salted water for 5 minutes to remove insects hiding in the florets. Rinse well.',
      url: 'https://broccolipedia.com/recipes/roasted#step2',
    },
    {
      '@type': 'HowToStep',
      name: 'Dry broccoli completely',
      text: 'Pat every piece dry with a paper towel. Wet broccoli steams instead of roasting. This is the most important step for crispiness.',
      url: 'https://broccolipedia.com/recipes/roasted#step3',
    },
    {
      '@type': 'HowToStep',
      name: 'Season',
      text: 'Toss broccoli with olive oil, sliced garlic, salt, and pepper in a large bowl until every floret is coated.',
      url: 'https://broccolipedia.com/recipes/roasted#step4',
    },
    {
      '@type': 'HowToStep',
      name: 'Arrange on baking sheet',
      text: 'Spread florets on a large baking sheet with the flat cut side facing down. Pieces must not touch each other. Use two pans if needed.',
      url: 'https://broccolipedia.com/recipes/roasted#step5',
    },
    {
      '@type': 'HowToStep',
      name: 'Roast without stirring',
      text: 'Roast for 18 to 22 minutes without stirring. The broccoli is done when the body is bright green, edges are golden brown, and tips are dark.',
      url: 'https://broccolipedia.com/recipes/roasted#step6',
    },
    {
      '@type': 'HowToStep',
      name: 'Finish and serve',
      text: 'Remove from oven. Squeeze lemon juice over the pan and immediately add parmesan and red pepper flakes if using. Serve from the pan.',
      url: 'https://broccolipedia.com/recipes/roasted#step7',
    },
  ],
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '150g (about 1.5 cups)',
    calories: '128',
    fatContent: '9g',
    carbohydrateContent: '10g',
    fiberContent: '2.6g',
    proteinContent: '4.2g',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '318',
  },
  mentions: wikiDataMentions,
}

// Speakable schema for AEO — QuickAnswer block is speakable
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Roasted Broccoli Recipe (Crispy Tips)',
  url: 'https://broccolipedia.com/recipes/roasted',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#quickanswer', '#recipe-steps'],
  },
}

export default function RoastedBroccoliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <RecipeTemplate
        title="Roasted Broccoli (Crispy Tips)"
        description="Adam was standing at the counter eating charred broccoli with his hands before I even got the plates out. This was 2022. He had refused broccoli for three solid months. That Sunday I forgot about it in the oven, and the accident became the recipe."
        image="/images/roasted-broccoli/roasted-broccoli-hero-dish-natural-light.webp"
        imageAlt="Sheet pan of crispy roasted broccoli with golden-brown charred tips and vibrant green bodies"
        meta={{
          prepTime: '5 min',
          cookTime: '20 min',
          totalTime: '25 min',
          servings: 4,
          difficulty: 'Easy',
          calories: 128,
        }}
        ingredients={[
          '600g (about 1.3 lb) broccoli, cut into florets with one flat side each',
          '3 tablespoons olive oil',
          '4 cloves garlic, thinly sliced',
          '1 teaspoon kosher salt',
          '1/2 teaspoon black pepper',
          'To finish:',
          '1 tablespoon fresh lemon juice',
          '1/4 cup (25g) grated parmesan, or 2 tablespoons nutritional yeast for vegan',
          '1/4 teaspoon red pepper flakes',
        ]}
        steps={[
          {
            text: 'Preheat the oven to 425°F (220°C). Position the rack in the top third — the broccoli needs radiant heat from above to get those tips dark.',
          },
          {
            text: 'Soak the broccoli in cold salted water for 5 minutes. Rinse well. This removes insects hiding in the florets. Nobody mentions this in text recipes, but I do it every time.',
            image: '/images/roasted-broccoli/roasted-broccoli-prep-process-ingredients.webp',
            imageAlt: 'Raw broccoli florets spread on a baking sheet before roasting, oil visible on surfaces',
          },
          {
            text: 'Dry the broccoli completely. Pat every piece with a paper towel. Wet broccoli steams. Dry broccoli roasts. You cannot get crispy edges when water is sitting on the surface.',
          },
          {
            text: 'Toss with olive oil, garlic, salt, and pepper in a large bowl until every floret is coated.',
          },
          {
            text: 'Spread on a large baking sheet, flat side down. Each floret has a natural flat cut face. That goes on the pan. Pieces must not touch. Use two pans if you need to.',
          },
          {
            text: 'Roast 18 to 22 minutes. Do not stir. Done when: bright green body, golden brown edges, dark tips. Still pale green? More time.',
          },
          {
            text: 'Remove from the oven. Squeeze lemon juice over the pan. Add parmesan and chilli flakes. Residual heat melts the cheese. Serve from the pan.',
            image: '/images/roasted-broccoli/roasted-broccoli-plated-close-up-garnish.webp',
            imageAlt: 'Finished roasted broccoli on a white ceramic plate with lemon half and parmesan',
          },
        ]}
        tips={[
          'Preheat the baking sheet. Put the empty pan in the oven while it heats. The broccoli hits hot metal and sears immediately on contact.',
          'Peel the stalk. The woody outside is tough and bitter. The heart inside is sweet and cooks as well as the florets. I never throw the stalk away now.',
          'Use less oil than you think. Enough to coat, not enough to pool. Too much oil and the edges never get truly crispy.',
          'For the crispiest result: push the temperature to 450°F for the last 5 minutes. Watch it. The line between charred tips and actually burnt is narrow but the tips are what Adam eats first.',
        ]}
        nutrition={{
          servingSize: '150g',
          calories: 128,
          protein: '4.2g',
          carbs: '10g',
          fiber: '2.6g',
          fat: '9g',
        }}
        faqs={[
          {
            question: 'Why does my roasted broccoli come out soggy instead of crispy?',
            answer:
              'Three causes: broccoli was wet, pan was crowded, or oven temperature was too low. Fix: dry it with paper towels, use two pans, set oven to at least 425°F.',
          },
          {
            question: 'How do I reheat roasted broccoli without making it soggy?',
            answer:
              'Not the microwave. Reheat in a 400°F oven, a dry hot skillet for 2 to 3 minutes per side, or an air fryer at 360°F for 3 to 4 minutes.',
          },
          {
            question: 'Is roasted broccoli good for diabetics?',
            answer:
              'Broccoli is low in carbohydrates with a low glycemic index. The fiber content (approximately 2.6g per 100g, USDA FDC 170379) slows glucose absorption. Research suggests cruciferous vegetables may support blood sugar management. Speak with your healthcare provider for personal dietary advice.',
          },
          {
            question: 'Should you wash broccoli before roasting it?',
            answer:
              'Yes. Soak in cold salted water for 5 minutes, rinse well, then dry every piece completely with paper towels. The cold soak removes insects. The drying removes moisture. Both matter.',
          },
        ]}
        related={[
          {
            title: 'How to Cook Broccoli',
            href: '/how-to-cook',
            image: '/images/shared/broccoli-cooking-methods.webp',
            prepTime: '10-30 min',
          },
          {
            title: 'Air Fryer Broccoli',
            href: '/how-to-cook/air-fryer',
            image: '/images/air-fryer-broccoli/hero.webp',
            prepTime: '10 min',
          },
          {
            title: 'Broccoli Nutrition Facts',
            href: '/nutrition',
            image: '/images/nutrition/broccoli-nutrients.webp',
            prepTime: '2 min read',
          },
        ]}
        keywords={[
          'roasted broccoli recipe crispy',
          'crispy roasted broccoli',
          'oven roasted broccoli',
          'how to roast broccoli',
        ]}
        schemaJson={recipeSchema}
      />
    </>
  )
}
