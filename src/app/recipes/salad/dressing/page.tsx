import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Homemade Broccoli Salad Dressing (Two Ways) | BroccoliPedia',
  description:
    'Elena\'s Kewpie-lemon dressing and the classic mayo-vinegar version. Exact ratios, make-ahead tips, and the real reason you need to refrigerate it for at least an hour.',
  keywords: [
    'broccoli salad dressing recipe homemade',
    'simple broccoli salad dressing',
    'creamy broccoli salad dressing',
    'broccoli salad dressing no mayo',
    'healthy broccoli salad dressing',
    'Kewpie broccoli salad',
    'lemon broccoli salad dressing',
  ],
  openGraph: {
    title: 'Homemade Broccoli Salad Dressing (Two Ways)',
    description:
      'The Kewpie-lemon version Adam asks for every week, plus the classic mayo-ACV dressing for potlucks. Real ratios, no sugar in the lighter version.',
    url: 'https://broccolipedia.com/recipes/salad/dressing',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-salad-dressing/broccoli-salad-dressing-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Homemade broccoli salad dressing in a wide shallow bowl with creamy pale-yellow dressing over broccoli florets',
      },
    ],
    type: 'article',
  },
}

// WikiData-linked entities from TextRazor extraction
const mentionedEntities = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  { '@type': 'Thing', name: 'Mayonnaise', sameAs: 'https://www.wikidata.org/wiki/Q167893' },
  { '@type': 'Thing', name: 'Kewpie mayonnaise', sameAs: 'https://www.wikidata.org/wiki/Q11297548' },
  { '@type': 'Thing', name: 'Apple cider vinegar', sameAs: 'https://www.wikidata.org/wiki/Q618322' },
  { '@type': 'Thing', name: 'Rice vinegar', sameAs: 'https://www.wikidata.org/wiki/Q1849012' },
  { '@type': 'Thing', name: 'Greek yogurt', sameAs: 'https://www.wikidata.org/wiki/Q1147190' },
  { '@type': 'Thing', name: 'Lemon zest', sameAs: 'https://www.wikidata.org/wiki/Q196819' },
  { '@type': 'Thing', name: 'Myrosinase', sameAs: 'https://www.wikidata.org/wiki/Q416212' },
  { '@type': 'Thing', name: 'Honey', sameAs: 'https://www.wikidata.org/wiki/Q10987' },
  { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
  { '@type': 'Thing', name: 'Vitamin K', sameAs: 'https://www.wikidata.org/wiki/Q182338' },
  { '@type': 'Thing', name: 'Dijon mustard', sameAs: 'https://www.wikidata.org/wiki/Q131748' },
  { '@type': 'Thing', name: 'Vinaigrette', sameAs: 'https://www.wikidata.org/wiki/Q847441' },
  { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/wiki/Q23400' },
  { '@type': 'Thing', name: 'Salad', sameAs: 'https://www.wikidata.org/wiki/Q9266' },
]

const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://broccolipedia.com/' },
        { '@type': 'ListItem', position: 2, name: 'Recipes', item: 'https://broccolipedia.com/recipes' },
        { '@type': 'ListItem', position: 3, name: 'Salad', item: 'https://broccolipedia.com/recipes/salad' },
        { '@type': 'ListItem', position: 4, name: 'Dressing', item: 'https://broccolipedia.com/recipes/salad/dressing' },
      ],
    },
    {
      '@type': 'Recipe',
      '@id': 'https://broccolipedia.com/recipes/salad/dressing#recipe',
      name: 'Homemade Broccoli Salad Dressing',
      description:
        'A creamy, tangy homemade broccoli salad dressing made two ways: the classic mayo and apple cider vinegar version, and Elena\'s lighter Kewpie-lemon dressing with Greek yogurt and no added sugar.',
      image: [
        'https://broccolipedia.com/images/broccoli-salad-dressing/broccoli-salad-dressing-hero-dish-natural-light.webp',
        'https://broccolipedia.com/images/broccoli-salad-dressing/broccoli-salad-dressing-prep-process-ingredients.webp',
        'https://broccolipedia.com/images/broccoli-salad-dressing/broccoli-salad-dressing-plated-close-up-garnish.webp',
      ],
      author: {
        '@type': 'Person',
        '@id': 'https://broccolipedia.com/about#elena-ignacio',
        name: 'Elena Ignacio',
        url: 'https://broccolipedia.com/about',
        sameAs: [
          'https://www.tiktok.com/@elenasainda',
          'https://www.youtube.com/@adelevlogs',
        ],
      },
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      prepTime: 'PT10M',
      cookTime: 'PT0M',
      totalTime: 'PT70M',
      recipeYield: '4 to 6 servings',
      recipeCategory: 'Salad Dressing',
      recipeCuisine: 'American',
      keywords:
        'broccoli salad dressing, homemade salad dressing, creamy broccoli dressing, no mayo broccoli dressing, Kewpie broccoli salad',
      suitableForDiet: 'https://schema.org/GlutenFreeDiet',
      recipeIngredient: [
        '3/4 cup (180 g) good-quality mayonnaise',
        '2 tablespoons apple cider vinegar',
        '1 tablespoon honey or 2 tablespoons granulated sugar',
        '1/4 teaspoon fine salt',
        '1/4 teaspoon black pepper',
      ],
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Whisk the dressing',
          text: 'Whisk all ingredients together in a small bowl until completely smooth. Taste and adjust. More sugar if too sharp. A few extra drops of vinegar if too flat.',
          image: 'https://broccolipedia.com/images/broccoli-salad-dressing/broccoli-salad-dressing-prep-process-ingredients.webp',
        },
        {
          '@type': 'HowToStep',
          name: 'Toss with broccoli',
          text: 'Pour over 4 to 5 cups of raw broccoli florets that have been washed and thoroughly patted dry. Toss well to coat.',
        },
        {
          '@type': 'HowToStep',
          name: 'Refrigerate',
          text: 'Cover and refrigerate for at least 1 hour before serving. Two hours is better. Keeps for 5 days in an airtight container.',
        },
      ],
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '2 tablespoons dressing over 100g broccoli',
        calories: '120 calories',
        fatContent: '9 g',
        carbohydrateContent: '5 g',
        proteinContent: '3.5 g',
        fiberContent: '2.6 g',
      },
      mentions: mentionedEntities,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/recipes/salad/dressing',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What can I use instead of mayo in broccoli salad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Greek yogurt is the most practical swap. Use the same volume as the mayo and reduce the vinegar slightly because yogurt is already tangy. For a completely different style, a honey Dijon vinaigrette works well: olive oil, Dijon mustard, honey, apple cider vinegar, and garlic. That version is lighter and less creamy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does broccoli salad get watery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wet broccoli. If the florets are not dried after washing, the water thins the dressing over time. Dry the florets thoroughly before tossing and the problem disappears.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you make broccoli salad ahead of time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and you should. Made 12 to 24 hours ahead, it is noticeably better than fresh. Keeps well for up to 4 days in the fridge. If making more than a day ahead, store the dressing separately and toss 2 hours before serving.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of vinegar do you use for broccoli salad dressing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apple cider vinegar is the standard. Mild and slightly fruity. White wine vinegar is sharper. Rice wine vinegar is the mildest of the three and suits a Kewpie or yogurt-based dressing well. Avoid red wine vinegar — it is too assertive.',
          },
        },
      ],
    },
  ],
}

const intro = `Adam was six and refusing every vegetable on the table. Alfi, three, would eat whatever Adam ate, so nothing green stood a chance. One afternoon in Singapore I mixed leftover Kewpie mayonnaise with a squeeze of lemon and a paper packet of honey from the Teh Tarik stall downstairs. Tossed it with raw broccoli, left the bowl in the fridge while we went swimming. When we got back and I served it cold, Adam ate two servings and asked what it was. I told him broccoli salad. He said, "Can we have this again?" We have made it every week since.`

export default function SaladDressingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Introduction rendered above the RecipeTemplate */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
        <p className="text-deepForest text-lg leading-relaxed mb-6">{intro}</p>
        <QuickAnswer>
          Homemade broccoli salad dressing is three ingredients: mayonnaise (or Kewpie mayo), vinegar, and a touch of sweetener. Whisk together, pour over raw broccoli florets, refrigerate at least one hour. The acid gently tenderises the florets and the flavour deepens as it sits.
        </QuickAnswer>
      </div>

      <RecipeTemplate
        title="Homemade Broccoli Salad Dressing (Two Ways)"
        description="Elena's lighter Kewpie-lemon dressing and the classic mayo-vinegar version. Both take 10 minutes and get better the longer they sit."
        image="/images/broccoli-salad-dressing/broccoli-salad-dressing-hero-dish-natural-light.webp"
        imageAlt="Wide shallow bowl of broccoli salad with creamy pale-yellow homemade dressing, dried cranberries, and sunflower seeds visible on top"
        meta={{
          prepTime: '10 min',
          cookTime: '0 min',
          totalTime: '10 min + 1 hr chill',
          servings: 5,
          difficulty: 'Easy',
          calories: 120,
        }}
        ingredients={[
          '-- CLASSIC DRESSING --',
          '3/4 cup (180 g) good-quality mayonnaise',
          '2 tablespoons apple cider vinegar',
          '1 tablespoon honey or 2 tablespoons granulated sugar',
          '1/4 teaspoon fine salt',
          '1/4 teaspoon black pepper',
          '-- KEWPIE-LEMON DRESSING --',
          '1/2 cup (120 g) Kewpie mayonnaise',
          '1/4 cup (60 g) full-fat Greek yogurt',
          'Zest of 1 lemon',
          '1 tablespoon fresh lemon juice',
          '1 teaspoon rice wine vinegar',
          '1/4 teaspoon fine salt',
          '1 small clove garlic, finely grated (optional)',
        ]}
        steps={[
          {
            text: 'CLASSIC: Whisk together mayonnaise, apple cider vinegar, honey or sugar, salt, and pepper in a small bowl until completely smooth. Taste and adjust. More sugar if too sharp, a few extra drops of vinegar if too flat.',
          },
          {
            text: 'KEWPIE-LEMON: Zest the lemon before juicing it. Whisk together the Kewpie, Greek yogurt, lemon zest, lemon juice, rice wine vinegar, and salt until smooth. Add garlic if using. The dressing should be creamy with a bright lemon note.',
            image: '/images/broccoli-salad-dressing/broccoli-salad-dressing-prep-process-ingredients.webp',
            imageAlt: 'Creamy Kewpie-lemon dressing being whisked in a small bowl, lemon and garlic visible in background',
          },
          {
            text: 'Wash and dry the broccoli florets thoroughly. Any surface moisture dilutes the dressing. Pat dry and leave on a clean cloth for 10 minutes if you have time.',
          },
          {
            text: 'Pour the dressing over 4 to 5 cups of raw broccoli florets. Toss well to coat every piece.',
            image: '/images/broccoli-salad-dressing/broccoli-salad-dressing-plated-close-up-garnish.webp',
            imageAlt: 'Fork lifting a serving of broccoli salad with creamy dressing coating the floret',
          },
          {
            text: 'Cover and refrigerate for at least 1 hour before serving. Two hours is better. The acid gently tenderises the raw florets and the flavours come together. Keeps for 5 days (classic) or 4 days (Kewpie) in an airtight container.',
          },
        ]}
        tips={[
          'Dry the broccoli completely. Extra water is the main reason dressings go runny.',
          'Make it the night before. Day-two broccoli salad beats day-one every time.',
          'Use lemon zest, not just lemon juice. Zest gives flavour without extra liquid.',
          'To tame raw red onion: soak diced onion in cold water for 10 minutes, drain, and pat dry. Removes the sharpness, keeps the crunch.',
          'I never add sugar to the Kewpie version. Kewpie is already slightly sweet.',
          'If the dressing is too sweet, add a few drops more vinegar. Vinegar fixes balance faster than salt.',
          'Rice wine vinegar is milder and suits the Kewpie version beautifully. Find it at any Asian supermarket.',
          'Cut florets to bite size only. Tiny pieces turn to mush after an hour in dressing.',
        ]}
        nutrition={{
          servingSize: '2 tbsp dressing + 100 g raw broccoli',
          calories: 120,
          protein: '3.5 g',
          carbs: '5 g',
          fiber: '2.6 g',
          fat: '9 g',
        }}
        faqs={[
          {
            question: 'What can I use instead of mayo in broccoli salad?',
            answer:
              'Greek yogurt is the most practical swap. Use the same volume as the mayo and reduce the vinegar slightly because yogurt is already tangy. For a completely different style, a honey Dijon vinaigrette works well: olive oil, Dijon mustard, honey, apple cider vinegar, and garlic.',
          },
          {
            question: 'Why does broccoli salad get watery?',
            answer:
              'Wet broccoli. If the florets are not dried after washing, the water thins the dressing over time. Dry thoroughly before tossing and the problem disappears.',
          },
          {
            question: 'Can you make broccoli salad ahead of time?',
            answer:
              'Yes, and you should. Made 12 to 24 hours ahead, it is noticeably better than fresh. Keeps well for up to 4 days. If making more than a day ahead, store the dressing separately and toss 2 hours before serving.',
          },
          {
            question: 'What kind of vinegar do you use for broccoli salad dressing?',
            answer:
              'Apple cider vinegar is the standard. Mild and slightly fruity. White wine vinegar is sharper. Rice wine vinegar is the mildest and suits the Kewpie version well. Avoid red wine vinegar — too assertive.',
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
            title: 'How to Blanch Broccoli',
            href: '/cooking-methods/how-to-blanch-broccoli',
            image: '/images/how-to-blanch-broccoli/hero.webp',
            prepTime: '5 min',
          },
          {
            title: 'Broccoli Nutrition Breakdown',
            href: '/nutrition/broccoli-nutrition',
            image: '/images/broccoli-nutrition/hero.webp',
            prepTime: '2 min read',
          },
        ]}
        keywords={[
          'broccoli salad dressing recipe homemade',
          'simple broccoli salad dressing',
          'creamy broccoli salad dressing',
          'broccoli salad dressing no mayo',
          'healthy broccoli salad dressing',
          'Kewpie broccoli salad',
        ]}
        schemaJson={schemaJson}
      />

      {/* Nutrition note with sourcing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="fact-block mt-4">
          <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
            A note on keeping it raw
          </div>
          <p className="text-sm text-deepForest leading-relaxed">
            Raw broccoli contains 89.2 mg of Vitamin C per 100 g (approximately 99% of the recommended daily value) and 2.6 g of fiber (USDA FDC 170379). Keeping it raw also preserves the enzyme myrosinase. Chopping the florets activates it, and research suggests heat above 70 degrees Celsius disrupts the process that forms sulforaphane in cruciferous vegetables. I am not making any health claims here. It is simply one more reason not to overthink the blanching step.
          </p>
          <p className="text-xs text-sage mt-2">
            Source: USDA FoodData Central, FDC ID 170379. Broccoli, raw.
          </p>
        </div>
      </div>
    </>
  )
}
