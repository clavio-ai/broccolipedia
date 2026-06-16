import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: "Classic Creamy Broccoli Salad: Elena's Recipe (Bacon + Cranberries)",
  description:
    "Creamy broccoli salad with mayo dressing, crispy bacon, dried cranberries, red onion, and sunflower seeds. One hour chill, six servings. A Filipino mum's take on the American potluck classic.",
  keywords: [
    'broccoli salad recipe creamy',
    'classic broccoli salad',
    'creamy broccoli salad',
    'broccoli salad with bacon',
    'broccoli salad with cranberries',
    'make ahead broccoli salad',
  ],
  openGraph: {
    title: "Classic Creamy Broccoli Salad: Elena's Recipe",
    description:
      'Mayo dressing, crispy bacon, dried cranberries, sunflower seeds. The salad that got Adam to eat broccoli.',
    url: 'https://broccolipedia.com/recipes/salad/classic',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-salad-classic/broccoli-salad-classic-hero-dish-natural-light.webp',
        width: 1200,
        height: 675,
        alt: 'Classic creamy broccoli salad in a white ceramic bowl with mayo dressing and bacon bits',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Creamy Broccoli Salad',
    description: 'Mayo dressing, bacon, cranberries. Chill for one hour. Serves six.',
    images: ['/images/broccoli-salad-classic/broccoli-salad-classic-hero-dish-natural-light.webp'],
  },
}

// WikiData-linked entities from TextRazor extraction
const mentionsEntities = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  { '@type': 'Thing', name: 'Mayonnaise', sameAs: 'https://www.wikidata.org/wiki/Q167893' },
  { '@type': 'Thing', name: 'Apple cider vinegar', sameAs: 'https://www.wikidata.org/wiki/Q618322' },
  { '@type': 'Thing', name: 'Bacon', sameAs: 'https://www.wikidata.org/wiki/Q11106' },
  { '@type': 'Thing', name: 'Red onion', sameAs: 'https://www.wikidata.org/wiki/Q622350' },
  { '@type': 'Thing', name: 'Sunflower seed', sameAs: 'https://www.wikidata.org/wiki/Q1076906' },
  { '@type': 'Thing', name: 'Dried cranberry', sameAs: 'https://www.wikidata.org/wiki/Q5307390' },
  { '@type': 'Thing', name: 'Sugar', sameAs: 'https://www.wikidata.org/wiki/Q11002' },
  { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
  { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/wiki/Q182338' },
  { '@type': 'Thing', name: 'Salad', sameAs: 'https://www.wikidata.org/wiki/Q9266' },
  { '@type': 'Thing', name: 'Ketogenic diet', sameAs: 'https://www.wikidata.org/wiki/Q1070684' },
  { '@type': 'Thing', name: 'Strained yogurt', sameAs: 'https://www.wikidata.org/wiki/Q1147190' },
]

// Combined schema using @graph (Recipe + FAQPage + BreadcrumbList + Person author)
const schemaJson: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Recipe schema
    {
      '@type': 'Recipe',
      name: 'Classic Creamy Broccoli Salad',
      description:
        'A classic American potluck broccoli salad with a three-ingredient mayo dressing, crispy bacon, dried cranberries, red onion, and sunflower seeds. Make it one hour ahead for best results.',
      image: [
        'https://broccolipedia.com/images/broccoli-salad-classic/broccoli-salad-classic-hero-dish-natural-light.webp',
        'https://broccolipedia.com/images/broccoli-salad-classic/broccoli-salad-classic-prep-process-ingredients.webp',
        'https://broccolipedia.com/images/broccoli-salad-classic/broccoli-salad-classic-plated-close-up-garnish.webp',
      ],
      author: {
        '@type': 'Person',
        '@id': 'https://broccolipedia.com/about#elena-ignacio',
        name: 'Elena Ignacio',
        sameAs: [
          'https://www.tiktok.com/@elenasainda',
          'https://www.youtube.com/@adelevlogs',
          'https://www.facebook.com/elena.ignacio',
        ],
      },
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      prepTime: 'PT15M',
      cookTime: 'PT0M',
      totalTime: 'PT1H15M',
      recipeYield: '6 servings',
      recipeCategory: 'Salad',
      recipeCuisine: 'American',
      keywords:
        'broccoli salad recipe creamy, classic broccoli salad, broccoli salad with bacon, make ahead broccoli salad, creamy broccoli salad',
      recipeIngredient: [
        '600g (about 6 cups) fresh broccoli florets, cut into small 2cm pieces',
        '70g (half a cup) red onion, very finely diced',
        '80g (half a cup) dried cranberries',
        '60g (half a cup) roasted sunflower seeds',
        '6 strips bacon, cooked until fully crispy and crumbled',
        '120ml (half a cup) good-quality mayonnaise',
        '2 tablespoons apple cider vinegar',
        '1 tablespoon white sugar (or honey)',
        'Quarter teaspoon fine salt',
        'Quarter teaspoon black pepper',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Make the dressing',
          text: 'Whisk the mayonnaise, apple cider vinegar, sugar, salt, and pepper in a small bowl until smooth and the sugar has completely dissolved. Taste it. It should be creamy, a little tangy, and just lightly sweet. Adjust vinegar or sugar by half a teaspoon at a time.',
          position: 1,
        },
        {
          '@type': 'HowToStep',
          name: 'Cut the broccoli',
          text: 'Cut the broccoli into small florets, about 2cm each. Smaller pieces absorb the dressing better and are easier to eat with a fork.',
          position: 2,
        },
        {
          '@type': 'HowToStep',
          name: 'Optional 30-second blanch',
          text: 'Optional: drop the florets in boiling water for 30 seconds, drain immediately, and run cold water over them. Keeps the crunch but removes the harsh raw bite.',
          position: 3,
        },
        {
          '@type': 'HowToStep',
          name: 'Combine salad ingredients',
          text: 'Combine the broccoli florets, red onion, cranberries, and sunflower seeds in a large bowl. Give it a quick toss.',
          position: 4,
        },
        {
          '@type': 'HowToStep',
          name: 'Add the dressing',
          text: 'Pour the dressing over the salad and toss thoroughly. Every piece should get a thin coat of dressing.',
          position: 5,
        },
        {
          '@type': 'HowToStep',
          name: 'Chill',
          text: 'Cover the bowl and refrigerate for at least one hour. Two hours is better.',
          position: 6,
        },
        {
          '@type': 'HowToStep',
          name: 'Add bacon and serve',
          text: 'Add the crumbled bacon just before you serve. Not earlier. Bacon in a wet dressing goes soft.',
          position: 7,
        },
      ],
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '1 cup (approx. 200g)',
        calories: '290 calories',
        proteinContent: '7 g',
        carbohydrateContent: '20 g',
        fiberContent: '3 g',
        fatContent: '22 g',
        vitaminCContent: '68 mg',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '312',
      },
      mentions: mentionsEntities,
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: [
          '/html/head/title',
          "/html/body//*[@id='quick-answer']",
          "/html/body//*[@id='make-ahead-faq']",
        ],
      },
    },
    // 2. FAQPage schema
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What kind of dressing goes on a broccoli salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Classic creamy broccoli salad uses a mayo-based dressing made from three ingredients: mayonnaise, apple cider vinegar, and a small amount of sugar. The ratio is half a cup of mayo to two tablespoons of vinegar to one tablespoon of sugar. The dressing should be creamy and slightly tangy, not sweet.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far ahead can you make broccoli salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can make broccoli salad one hour ahead at minimum, up to 24 hours in advance. After 24 hours, the broccoli starts releasing water and the dressing thins out. Always add the bacon right before serving.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use raw broccoli or blanched broccoli for this salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both work. Raw broccoli has a firmer crunch and stronger flavour. A 30-second blanch followed by cold water keeps the crunch but removes the sharp bitterness. Blanching is recommended when serving to children.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I use instead of mayo in broccoli salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The closest substitute is half Greek yogurt and half sour cream. It gives you the creaminess with more tang and less fat. You can also use a pre-made coleslaw dressing at the same volume as the mayo.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does creamy broccoli salad last in the fridge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three to four days in an airtight container. After 24 hours the dressing thins slightly as broccoli releases water. Do not freeze it.',
          },
        },
      ],
    },
    // 3. BreadcrumbList schema
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'BroccoliPedia',
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
          name: 'Classic Creamy Broccoli Salad',
          item: 'https://broccolipedia.com/recipes/salad/classic',
        },
      ],
    },
  ],
}

export default function ClassicBroccoliSaladPage() {
  return (
    <RecipeTemplate
      title="Classic Creamy Broccoli Salad"
      description="Adam did not eat broccoli for three months straight. Then I made this at a school party and he ate two bowls standing next to the buffet table. He thought it was just crunchy stuff with bacon. I did not correct him."
      image="/images/broccoli-salad-classic/broccoli-salad-classic-hero-dish-natural-light.webp"
      imageAlt="Classic creamy broccoli salad in a white ceramic bowl with mayo dressing, bacon bits, red onion, and cranberries"
      meta={{
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '1 hr 15 min',
        servings: 6,
        difficulty: 'Easy',
        calories: 290,
      }}
      ingredients={[
        '600g (about 6 cups) fresh broccoli florets, cut into small 2cm pieces',
        '70g (half a cup) red onion, very finely diced',
        '80g (half a cup) dried cranberries',
        '60g (half a cup) roasted sunflower seeds',
        '6 strips bacon, cooked until fully crispy and crumbled',
        'For the dressing:',
        '120ml (half a cup) good-quality mayonnaise',
        '2 tablespoons apple cider vinegar',
        '1 tablespoon white sugar (or honey for a less sharp sweetness)',
        'Quarter teaspoon fine salt',
        'Quarter teaspoon black pepper',
      ]}
      steps={[
        {
          text: 'Make the dressing first. Whisk the mayonnaise, apple cider vinegar, sugar, salt, and pepper in a small bowl until smooth and the sugar has completely dissolved. Taste it. It should be creamy, a little tangy, and just lightly sweet. Adjust vinegar or sugar by half a teaspoon at a time until it tastes right to you.',
          image: '/images/broccoli-salad-classic/broccoli-salad-classic-plated-close-up-garnish.webp',
          imageAlt: 'Close-up of creamy broccoli salad with bacon and cranberry garnish in a ceramic bowl',
        },
        {
          text: 'Cut the broccoli into small florets, about 2cm each. Smaller than you would normally cut for stir-fry or steaming. Smaller pieces absorb the dressing better and are much easier to eat with a fork from a salad bowl.',
          image: '/images/broccoli-salad-classic/broccoli-salad-classic-prep-process-ingredients.webp',
          imageAlt: 'Broccoli salad ingredients flat lay: broccoli florets, mayo, apple cider vinegar, bacon, red onion, sunflower seeds, cranberries',
        },
        {
          text: 'Optional 30-second blanch: drop the florets in boiling water, drain immediately, and run cold water over them. It keeps the crunch but removes the harsh raw bite. This is what I do. Skip this if you are short on time.',
        },
        {
          text: 'Combine the broccoli florets, red onion, cranberries, and sunflower seeds in a large bowl. Give it a quick toss so everything is mixed.',
        },
        {
          text: 'Pour the dressing over the salad and toss thoroughly. Every piece should get a thin coat of dressing.',
        },
        {
          text: 'Cover the bowl and refrigerate for at least one hour. Two hours is better. The broccoli softens very slightly and the dressing becomes part of the salad rather than sitting on top of it.',
        },
        {
          text: 'Add the crumbled bacon just before you serve. Not earlier. Bacon in a wet dressing for an hour goes soft and loses the contrast that makes this salad actually good.',
        },
      ]}
      tips={[
        "The bacon timing is not optional. I learned this the wrong way when I made a batch the night before a BBQ and added the bacon early. By the next afternoon it had absorbed the dressing and gone limp. Alfi still ate it, but the texture was wrong. Hold the bacon until just before serving.",
        'Do not skip the chill time. Raw broccoli straight from the bowl tastes harsh and the dressing just sits on top. After one hour, the vinegar softens the florets and everything comes together properly.',
        'Red onion needs to be very finely diced. Large chunks of raw onion are too aggressive in a cold salad. Spend an extra minute on the knife work here.',
        "For a lighter version: replace half the mayonnaise with plain full-fat Greek yogurt and reduce the sugar by half a teaspoon. I made this every week when we lived in Dubai. Honestly, I still prefer the full mayo version.",
        'Keto adaptation: swap the sugar for erythritol at a 1:1 ratio. Check that your mayo has no added sugar (most standard brands do not, but double-check the label). Skip the cranberries or replace with a small handful of pecans.',
      ]}
      nutrition={{
        servingSize: '1 cup (approx. 200g)',
        calories: 290,
        protein: '7g',
        carbs: '20g',
        fiber: '3g',
        fat: '22g',
      }}
      faqs={[
        {
          question: 'What kind of dressing goes on a broccoli salad?',
          answer:
            'Classic creamy broccoli salad uses a mayo-based dressing made from three ingredients: mayonnaise, apple cider vinegar, and a small amount of sugar. The ratio is half a cup of mayo to two tablespoons of vinegar to one tablespoon of sugar. The dressing should be creamy and slightly tangy, not sweet.',
        },
        {
          question: 'How far ahead can you make broccoli salad?',
          answer:
            'You can make this salad one hour ahead at minimum, up to 24 hours in advance. After 24 hours, the broccoli starts releasing water and the dressing thins out. Make it the morning of your event for the best balance. Always add the bacon right before serving.',
        },
        {
          question: 'Should I use raw broccoli or blanched broccoli for this salad?',
          answer:
            'Both work. Raw broccoli has a firmer crunch and stronger flavour. A 30-second blanch followed by cold water keeps the crunch but removes the sharp bitterness that some people do not like. I blanch because it makes the salad more crowd-pleasing, especially when kids are eating it.',
        },
        {
          question: 'What can I use instead of mayo in broccoli salad?',
          answer:
            'The closest substitute is half Greek yogurt and half sour cream. It gives you the creaminess with more tang and less fat. You can also use a pre-made coleslaw dressing at the same volume as the mayo if you want to skip making the dressing entirely. The texture will be slightly thinner.',
        },
        {
          question: 'How long does creamy broccoli salad last in the fridge?',
          answer:
            'Three to four days in an airtight container. After 24 hours the dressing thins slightly as broccoli releases water. Do not freeze it. The broccoli and dressing do not recover well.',
        },
      ]}
      related={[
        {
          title: 'How to Cook Broccoli (Every Method)',
          href: '/cooking-methods/how-to-cook',
          image: '/images/how-to-cook-broccoli/hero.webp',
          prepTime: '5 to 10 min',
        },
        {
          title: 'Broccoli Nutrition Facts',
          href: '/nutrition',
          image: '/images/broccoli-nutrition/hero.webp',
          prepTime: '2 min read',
        },
        {
          title: 'Broccoli Salad with Bacon',
          href: '/recipes/salad/with-bacon',
          image: '/images/broccoli-salad-bacon/hero.webp',
          prepTime: '15 min',
        },
      ]}
      keywords={[
        'broccoli salad recipe creamy',
        'classic broccoli salad',
        'creamy broccoli salad',
        'broccoli salad with bacon',
        'make ahead broccoli salad',
      ]}
      schemaJson={schemaJson}
    />
  )
}
