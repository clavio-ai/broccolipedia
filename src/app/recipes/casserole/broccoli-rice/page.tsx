import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Easy Broccoli Rice Casserole Recipe | BroccoliPedia',
  description: 'A creamy, cheesy broccoli rice casserole that comes together in 15 minutes of prep and bakes in 35. Uses pantry staples — frozen broccoli, white rice, cream soup, and cheddar. Tips for preventing sogginess plus a from-scratch option.',
  keywords: [
    'broccoli rice casserole recipe easy',
    'easy broccoli rice casserole',
    'broccoli cheese rice casserole',
    'broccoli rice casserole from scratch',
    'broccoli rice casserole no soup',
    'how to make broccoli rice casserole',
    'broccoli rice bake',
  ],
  openGraph: {
    title: 'Easy Broccoli Rice Casserole Recipe',
    description: 'Creamy, cheesy, and ready in 50 minutes. The pantry-staple casserole that converts even broccoli skeptics.',
    url: 'https://broccolipedia.com/recipes/casserole/broccoli-rice',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-rice-casserole/broccoli-rice-casserole-hero-dish-natural-light.webp',
        width: 1200,
        height: 675,
        alt: 'Golden broccoli rice casserole with bubbling cheese in a white ceramic baking dish',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Broccoli Rice Casserole Recipe',
    description: 'Creamy, cheesy, done in 50 minutes. Tips for preventing sogginess inside.',
    images: ['/images/broccoli-rice-casserole/broccoli-rice-casserole-hero-dish-natural-light.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/casserole/broccoli-rice',
  },
}

// WikiData-linked entities from TextRazor extraction (top entities by relevance)
const wikiDataMentions = [
  { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
  { '@type': 'Thing', name: 'Rice', sameAs: 'https://www.wikidata.org/wiki/Q5090' },
  { '@type': 'Thing', name: 'Cheddar cheese', sameAs: 'https://www.wikidata.org/wiki/Q217525' },
  { '@type': 'Thing', name: 'Onion', sameAs: 'https://www.wikidata.org/wiki/Q23485' },
  { '@type': 'Thing', name: 'Butter', sameAs: 'https://www.wikidata.org/wiki/Q34172' },
  { '@type': 'Thing', name: 'Cream of mushroom soup', sameAs: 'https://www.wikidata.org/wiki/Q179158' },
  { '@type': 'Thing', name: 'Cream of chicken soup', sameAs: 'https://www.wikidata.org/wiki/Q1432535' },
  { '@type': 'Thing', name: 'Casserole', sameAs: 'https://www.wikidata.org/wiki/Q6501890' },
  { '@type': 'Thing', name: 'Ritz crackers', sameAs: 'https://www.wikidata.org/wiki/Q1763170' },
  { '@type': 'Thing', name: 'Singapore', sameAs: 'https://www.wikidata.org/wiki/Q334' },
]

const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Easy Broccoli Rice Casserole',
  description: 'A creamy, cheesy broccoli rice casserole made with frozen broccoli, pre-cooked white rice, cream soup, sour cream, and sharp cheddar. Ready in 50 minutes with pantry staples.',
  image: [
    'https://broccolipedia.com/images/broccoli-rice-casserole/broccoli-rice-casserole-hero-dish-natural-light.webp',
    'https://broccolipedia.com/images/broccoli-rice-casserole/broccoli-rice-casserole-prep-process-ingredients.webp',
    'https://broccolipedia.com/images/broccoli-rice-casserole/broccoli-rice-casserole-plated-close-up-garnish.webp',
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
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
  },
  prepTime: 'PT15M',
  cookTime: 'PT35M',
  totalTime: 'PT50M',
  recipeYield: '6 servings',
  recipeCategory: 'Side Dish',
  recipeCuisine: 'American',
  keywords: 'broccoli rice casserole, cheesy broccoli rice, easy casserole, Thanksgiving side dish, holiday casserole, comfort food, freezer meal',
  recipeIngredient: [
    '450g (16oz) frozen broccoli florets, thawed and patted dry',
    '3 cups cooked white rice (day-old works perfectly)',
    '1 can (284ml / 10.5oz) cream of mushroom soup',
    '1 can (284ml / 10.5oz) cream of chicken soup',
    '1/2 cup (120ml) sour cream',
    '1.5 cups (170g) sharp cheddar cheese, freshly grated, divided',
    '2 tablespoons butter, melted',
    '1/2 medium yellow onion, finely diced',
    '1/2 teaspoon garlic powder',
    'Salt and black pepper to taste',
    'Optional: 1/2 cup crushed Ritz crackers mixed with 1 tablespoon melted butter',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Preheat oven',
      text: 'Preheat your oven to 350°F (175°C). Grease a 9x13 inch (23x33 cm) baking dish with butter or cooking spray.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Dry the broccoli',
      text: 'Spread the thawed broccoli onto a clean kitchen towel and press firmly to remove as much water as possible. Frozen broccoli holds a lot of water and will turn your casserole soupy if you skip this step.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Sauté onion',
      text: 'Sauté the onion in the 2 tablespoons of melted butter over medium heat for 3 to 4 minutes until soft.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Mix the sauce',
      text: 'In a large bowl, combine the cream of mushroom soup, cream of chicken soup, sour cream, garlic powder, and a pinch of salt and pepper. Stir until smooth.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Combine filling',
      text: 'Add the cooked rice, dried broccoli, sautéed onion, and 1 cup of the grated cheddar to the bowl. Fold everything together until fully coated.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Fill and top',
      text: 'Pour the mixture into the prepared baking dish. Scatter the remaining 1/2 cup of cheddar across the top. If using the cracker topping, add it now.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Bake uncovered',
      text: 'Bake uncovered at 350°F for 30 to 35 minutes, until the edges are bubbling and the top is golden. Rest for 5 minutes before scooping.',
    },
  ],
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '1 cup (240g)',
    calories: '340',
    proteinContent: '12g',
    carbohydrateContent: '38g',
    fiberContent: '3g',
    fatContent: '15g',
    calciumContent: '180mg',
    potassiumContent: '320mg',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '12',
  },
  mentions: wikiDataMentions,
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Fiber content (broccoli, raw)',
      value: '2.6g per 100g',
      citation: 'USDA FDC ID 170379',
    },
    {
      '@type': 'PropertyValue',
      name: 'Vitamin K content (broccoli, raw)',
      value: '101.6mcg per 100g',
      citation: 'USDA FDC ID 170379',
    },
    {
      '@type': 'PropertyValue',
      name: 'Folate content (broccoli, raw)',
      value: '63mcg per 100g',
      citation: 'USDA FDC ID 170379',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does rice need to be cooked before adding to casserole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw rice will not cook properly in the liquid from the soup and broccoli. Use pre-cooked rice. Day-old rice from the fridge is ideal because it has dried out slightly and absorbs the sauce more evenly without going mushy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you bake broccoli rice casserole covered or uncovered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bake it uncovered. Covering with foil traps steam from the broccoli, prevents the top from browning, and makes the casserole watery. Uncovered gives you the caramelized cheddar top that makes this dish.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you keep broccoli rice casserole from getting watery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three steps: (1) Press thawed frozen broccoli between towels to remove water before using. (2) If using fresh broccoli, blanch for 2 minutes then drain and dry. (3) Use pre-cooked, cooled rice. Hot rice adds steam; day-old cold rice absorbs the sauce instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze broccoli rice casserole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Cool it completely, portion into freezer-safe containers, and freeze for up to 3 months. Thaw overnight in the fridge and reheat at 325°F, covered with foil, for 20 to 25 minutes. Add a splash of milk if the sauce has thickened.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you make broccoli rice casserole without canned soup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Make a simple roux: melt 3 tablespoons butter, whisk in 3 tablespoons flour, add 1.5 cups whole milk and 1/2 cup broth, stir until thick, then stir in 1 cup shredded cheese off the heat. Use in place of both cans of soup.',
      },
    },
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
      name: 'Casserole',
      item: 'https://broccolipedia.com/recipes/casserole',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Broccoli Rice Casserole',
      item: 'https://broccolipedia.com/recipes/casserole/broccoli-rice',
    },
  ],
}

// Combine all schemas into a graph
const schemaJson = {
  '@context': 'https://schema.org',
  '@graph': [recipeSchema, faqSchema, breadcrumbSchema],
}

export default function BroccoliRiceCasserolePage() {
  return (
    <RecipeTemplate
      title="Easy Broccoli Rice Casserole"
      description='It was a Tuesday in January 2023, back in Singapore after Christmas in Manila, and I had half a bag of frozen broccoli, leftover rice, and nothing else worth cooking. I threw it together with canned soup and cheddar. Adam came home from school, called it "the green rice thing," and asked for it again the next day. Three days in his lunch box after that. He does not like broccoli. He likes this.'
      image="/images/broccoli-rice-casserole/broccoli-rice-casserole-hero-dish-natural-light.webp"
      imageAlt="Golden broccoli rice casserole with bubbling cheddar cheese in a white ceramic baking dish"
      meta={{
        prepTime: '15 min',
        cookTime: '35 min',
        totalTime: '50 min',
        servings: 6,
        difficulty: 'Easy',
        calories: 340,
      }}
      ingredients={[
        '450g (16oz) frozen broccoli florets, thawed and patted dry',
        '3 cups cooked white rice (day-old works perfectly)',
        '1 can (284ml / 10.5oz) cream of mushroom soup',
        '1 can (284ml / 10.5oz) cream of chicken soup',
        '1/2 cup (120ml) sour cream',
        '1.5 cups (170g) sharp cheddar cheese, freshly grated, divided',
        '2 tablespoons butter, melted',
        '1/2 medium yellow onion, finely diced',
        '1/2 teaspoon garlic powder',
        'Salt and black pepper to taste',
        'Optional: 1/2 cup crushed Ritz crackers + 1 tablespoon melted butter (topping)',
      ]}
      steps={[
        {
          text: 'Preheat your oven to 350°F (175°C). Grease a 9x13 inch (23x33 cm) baking dish with butter or cooking spray.',
        },
        {
          text: 'Spread the thawed broccoli onto a clean kitchen towel and press firmly to remove as much water as possible. This step matters more than you think. Frozen broccoli holds a lot of water and will turn your casserole soupy if you skip it.',
          image: '/images/broccoli-rice-casserole/broccoli-rice-casserole-prep-process-ingredients.webp',
          imageAlt: 'Broccoli florets and rice alongside cream of mushroom soup on a worn oak board, prepped for casserole',
        },
        {
          text: 'Sauté the onion in the 2 tablespoons of melted butter over medium heat for 3 to 4 minutes until soft. This adds real flavor that you will not get from just dumping everything together.',
        },
        {
          text: 'In a large bowl, combine the cream of mushroom soup, cream of chicken soup, sour cream, garlic powder, and a good pinch of salt and pepper. Stir until smooth.',
        },
        {
          text: 'Add the cooked rice, dried broccoli, sautéed onion, and 1 cup of the grated cheddar to the bowl. Fold everything together until the rice and broccoli are fully coated in the creamy mixture.',
        },
        {
          text: 'Pour the mixture into the prepared baking dish and spread it into an even layer. Scatter the remaining 1/2 cup of cheddar across the top. If you are using the cracker topping, add it now on top of the cheese.',
        },
        {
          text: 'Bake uncovered at 350°F for 30 to 35 minutes, until the edges are bubbling and the top is golden. Let it rest for 5 minutes before scooping. It will look loose when it comes out of the oven and firm up as it cools slightly.',
        },
      ]}
      tips={[
        'Freshly grated cheddar melts better. Pre-shredded cheese has anti-caking powder that makes it clump instead of melt smoothly. Takes 2 extra minutes and makes a visible difference.',
        'Two soups vs one: cream of mushroom alone is earthier, cream of chicken alone is blander. Half and half gives you the best balance. That is how I do it now.',
        'Want it from scratch? Replace both cans with a roux: 3 tablespoons butter, 3 tablespoons flour, 1.5 cups whole milk, 1/2 cup broth. Stir until thick, remove from heat, add 1 cup shredded cheese. Richer flavor, cleaner label.',
        'To add protein: stir in 2 cups of shredded rotisserie chicken with the rice and broccoli. Alfi eats it as a full dinner this way instead of a side.',
        'For make-ahead: assemble everything (without the cracker topping), cover, and refrigerate for up to 24 hours. Add the topping just before baking. Bake time increases by about 10 minutes from cold.',
      ]}
      nutrition={{
        servingSize: '1 cup (240g)',
        calories: 340,
        protein: '12g',
        carbs: '38g',
        fiber: '3g',
        fat: '15g',
      }}
      faqs={[
        {
          question: 'Does rice need to be cooked before adding to casserole?',
          answer: 'Yes. Raw rice will not cook properly in the liquid from the soup and broccoli. You end up with crunchy, half-cooked rice in a casserole that smells done. Use pre-cooked rice. Day-old rice from the fridge is ideal because it has dried out slightly and absorbs the sauce more evenly without going mushy.',
        },
        {
          question: 'Covered or uncovered: which is right?',
          answer: 'Bake it uncovered. Covering with foil traps steam, stops the top from browning, and makes the dish wetter. Uncovered gives you the caramelized cheddar top. That is the whole point.',
        },
        {
          question: 'How do you keep broccoli rice casserole from getting watery?',
          answer: 'Three things: (1) Press thawed frozen broccoli between towels to remove water before using. (2) If using fresh broccoli, blanch for 2 minutes then drain and dry. (3) Use pre-cooked, cooled rice — not hot rice fresh from the pot.',
        },
        {
          question: 'Can you freeze broccoli rice casserole?',
          answer: 'Yes. Cool it completely, portion into freezer-safe containers, and freeze for up to 3 months. Thaw overnight in the fridge and reheat at 325°F covered with foil for 20 to 25 minutes. Add a splash of milk if the sauce has thickened.',
        },
        {
          question: 'Can you make broccoli rice casserole without canned soup?',
          answer: 'Yes. Make a simple roux: 3 tablespoons butter, 3 tablespoons flour, 1.5 cups whole milk, 1/2 cup broth — stir until thick, then add 1 cup shredded cheese off the heat. Use in place of both cans.',
        },
      ]}
      related={[
        {
          title: 'Chicken Broccoli Casserole',
          href: '/recipes/casserole/chicken-broccoli',
          image: '/images/chicken-broccoli-casserole/hero.webp',
          prepTime: '25 min',
        },
        {
          title: 'Broccoli Cheese Casserole',
          href: '/recipes/casserole/broccoli-cheese',
          image: '/images/broccoli-cheese-casserole/hero.webp',
          prepTime: '15 min',
        },
        {
          title: 'How to Blanch Broccoli',
          href: '/how-to-cook/blanch',
          image: '/images/how-to-blanch-broccoli/hero.webp',
          prepTime: '5 min',
        },
      ]}
      keywords={[
        'broccoli rice casserole recipe easy',
        'easy broccoli rice casserole',
        'broccoli cheese rice casserole',
        'broccoli rice casserole from scratch',
        'broccoli rice casserole no soup',
      ]}
      schemaJson={schemaJson}
    />
  )
}
