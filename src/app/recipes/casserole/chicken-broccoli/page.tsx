import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Chicken Broccoli Casserole Recipe | BroccoliPedia',
  description:
    'Elena\'s tested chicken broccoli casserole: seasoned chicken layered with broccoli and a creamy cheese sauce, topped with buttery Ritz crackers. Ready in 55 minutes. Family-friendly and make-ahead friendly.',
  keywords: [
    'chicken broccoli casserole',
    'cheesy chicken broccoli casserole',
    'chicken broccoli casserole recipe',
    'broccoli chicken bake',
    'easy chicken broccoli casserole',
  ],
  openGraph: {
    title: 'Chicken Broccoli Casserole Recipe',
    description:
      'Seasoned chicken, broccoli, and a creamy cheddar sauce baked under a buttery Ritz cracker topping. 55 minutes. Serves 6.',
    images: [
      {
        url: '/images/chicken-broccoli-casserole/chicken-broccoli-casserole-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Chicken broccoli casserole fresh from the oven with a golden cracker crust',
      },
    ],
    type: 'article',
  },
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
      name: 'Chicken Broccoli Casserole Recipe',
      item: 'https://broccolipedia.com/recipes/casserole/chicken-broccoli',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the 4 core ingredients in chicken broccoli casserole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chicken, broccoli, condensed cream of chicken soup (or homemade cheese sauce), and cheddar cheese. The seasonings, cracker topping, and sour cream improve the dish but are not the base.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you make chicken broccoli casserole ahead of time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Assemble the casserole without the cracker topping, cover with foil, and refrigerate for up to 24 hours. Add the cracker topping just before baking. It also freezes well for up to 3 months without the topping — thaw overnight in the fridge before baking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does chicken broccoli casserole bake, and at what temperature?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bake at 375°F (190°C) for 35 to 40 minutes, until the edges are bubbling and the topping is golden. Broil on low for 1 to 2 minutes at the end for a crunchier crust. If baking cold from the fridge, add 10 to 15 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does frozen broccoli need to be completely thawed before adding to the casserole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partially frozen broccoli creates uneven heat distribution in the casserole. Some pieces overcook while others stay cold in the middle. Fully thaw the broccoli first, then press out the excess moisture with a kitchen towel to prevent the sauce from thinning out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do you serve with chicken broccoli casserole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A green salad, crusty bread, or steamed rice. The casserole is already a complete meal with protein, vegetables, and sauce in one dish, so sides just need to add contrast — something fresh or slightly acidic works well.',
      },
    },
  ],
}

const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Chicken Broccoli Casserole',
  description:
    'Seasoned chicken and broccoli layered in a creamy cheddar sauce and baked under a buttery Ritz cracker topping. Season the chicken separately first for deeper flavor. Ready in 55 minutes.',
  image: [
    'https://broccolipedia.com/images/chicken-broccoli-casserole/chicken-broccoli-casserole-hero-dish-natural-light.webp',
    'https://broccolipedia.com/images/chicken-broccoli-casserole/chicken-broccoli-casserole-plated-close-up-garnish.webp',
    'https://broccolipedia.com/images/chicken-broccoli-casserole/chicken-broccoli-casserole-prep-process-ingredients.webp',
  ],
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
  },
  datePublished: '2026-06-16',
  prepTime: 'PT15M',
  cookTime: 'PT40M',
  totalTime: 'PT55M',
  recipeYield: '6 servings',
  recipeCategory: 'Dinner',
  recipeCuisine: 'American',
  keywords:
    'chicken broccoli casserole, cheesy chicken casserole, broccoli rice casserole, easy weeknight dinner, make ahead casserole',
  recipeIngredient: [
    '600g (1.3 lb) boneless skinless chicken breasts, cut into bite-sized pieces',
    '1 tbsp olive oil',
    '1 tsp garlic powder',
    '1 tsp onion powder',
    '1 tsp cajun seasoning',
    'Salt and black pepper',
    '400g (14 oz) broccoli florets, fresh or frozen',
    '2 cans (284ml each) condensed cream of chicken soup',
    '1/2 cup sour cream',
    '1/4 cup low-sodium chicken broth',
    '1/4 red bell pepper, finely diced',
    '1.5 cups sharp cheddar cheese, grated',
    '1/2 cup mozzarella, grated',
    '1 cup Ritz crackers, crushed',
    '2 tbsp butter, melted',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      name: 'Preheat and prep the dish',
      text: 'Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish with butter or cooking spray.',
    },
    {
      '@type': 'HowToStep',
      name: 'Season and sear the chicken',
      text: 'Season the chicken with olive oil, garlic powder, onion powder, cajun seasoning, salt, and pepper. Sear in a skillet over medium heat until cooked through and golden, 6 to 8 minutes. If the pan gets dry, add a splash of broth and scrape up the bits for extra flavor.',
    },
    {
      '@type': 'HowToStep',
      name: 'Prepare the broccoli',
      text: 'If using fresh broccoli, blanch in boiling water for exactly 3 minutes, then drain and dry well. If using frozen, thaw completely first — not partially, completely. Frozen pockets create uneven bake times. Pat dry with a kitchen towel.',
    },
    {
      '@type': 'HowToStep',
      name: 'Mix the sauce',
      text: 'In a large bowl, mix together the condensed soup, sour cream, chicken broth, red bell pepper, 1 cup of the cheddar, and black pepper.',
    },
    {
      '@type': 'HowToStep',
      name: 'Layer the casserole',
      text: 'Layer in order: spread chicken evenly across the bottom of the baking dish. Add broccoli on top of the chicken. Pour the sauce over everything and spread to the edges. Do not stir — layering keeps textures distinct.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add the cheese topping',
      text: 'Scatter the remaining cheddar over the top, then add the mozzarella on top of that for the cheese pull.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add the cracker crust',
      text: 'Mix crushed Ritz crackers with melted butter and scatter evenly over the cheese layer.',
    },
    {
      '@type': 'HowToStep',
      name: 'Bake until golden',
      text: 'Bake 35 to 40 minutes until bubbling at the edges and golden on top. For a deeper crust, broil on low for the last 2 minutes. Watch it closely during broil.',
    },
    {
      '@type': 'HowToStep',
      name: 'Rest before serving',
      text: 'Rest the casserole for 15 minutes before serving. It sets up and serves cleanly rather than falling apart on the plate.',
    },
  ],
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '1 portion (approx. 300g)',
    calories: '410',
    proteinContent: '35g',
    carbohydrateContent: '16g',
    fiberContent: '3g',
    fatContent: '22g',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '201',
  },
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Chicken as food',
      sameAs: 'https://www.wikidata.org/wiki/Q864693',
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
      name: 'Bell pepper',
      sameAs: 'https://www.wikidata.org/wiki/Q1548030',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q176741',
    },
  ],
}

const combinedSchema = {
  '@context': 'https://schema.org',
  '@graph': [recipeSchema, breadcrumbSchema, faqSchema],
}

export default function ChickenBroccoliCasserolePage() {
  return (
    <RecipeTemplate
      title="Chicken Broccoli Casserole Recipe"
      description={`Adam refused to eat broccoli for most of 2022. He would pick each piece out of fried rice, one by one, with the focus of a child who has decided something is his enemy. I tried roasting it. Alfi thought the "tiny trees" nickname was hilarious. Adam was not impressed. Then we stopped in Melbourne on the way back from my sister's, and my cousin put this casserole on the table. Adam had two servings. He asked what the green things were. I said broccoli. He said "it tastes different in Australia." It does not taste different in Australia. He just could not see it under the cheese.`}
      image="/images/chicken-broccoli-casserole/chicken-broccoli-casserole-hero-dish-natural-light.webp"
      imageAlt="Chicken broccoli casserole fresh from the oven with a golden Ritz cracker crust, one corner scooped out to show broccoli and cheesy interior"
      meta={{
        prepTime: '15 min',
        cookTime: '40 min',
        totalTime: '55 min',
        servings: 6,
        difficulty: 'Easy',
        calories: 410,
      }}
      ingredients={[
        'For the chicken:',
        '600g (1.3 lb) boneless skinless chicken breasts, cut into bite-sized pieces',
        '1 tbsp olive oil',
        '1 tsp garlic powder',
        '1 tsp onion powder',
        '1 tsp cajun seasoning',
        'Salt and black pepper',
        'For the casserole:',
        '400g (14 oz) broccoli florets, fresh or frozen (if frozen, fully thawed and dried)',
        '2 cans (284ml each) condensed cream of chicken soup',
        '1/2 cup sour cream',
        '1/4 cup low-sodium chicken broth',
        '1/4 red bell pepper, finely diced',
        '1.5 cups sharp cheddar cheese, grated',
        '1/2 cup mozzarella, grated',
        'For the topping:',
        '1 cup Ritz crackers, crushed',
        '2 tbsp butter, melted',
      ]}
      steps={[
        {
          text: 'Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish with butter or cooking spray.',
        },
        {
          text: 'Season the chicken with olive oil, garlic powder, onion powder, cajun seasoning, salt, and pepper. Sear in a skillet over medium heat until cooked through and golden, 6 to 8 minutes. If the pan gets dry, add a splash of broth and scrape up the bits. That is flavor.',
        },
        {
          text: 'If using fresh broccoli, blanch in boiling water for exactly 3 minutes, then drain and dry. If using frozen, thaw it fully first. Not partially. Completely. Frozen pockets create uneven bake times and you will end up with cold spots in a hot dish.',
        },
        {
          text: 'Mix the condensed soup, sour cream, chicken broth, red bell pepper, 1 cup of the cheddar, and black pepper in a bowl.',
        },
        {
          text: 'Layer in order: spread chicken evenly across the bottom. Add broccoli on top of the chicken. Pour the sauce over everything and spread to the edges. Do not stir.',
        },
        {
          text: 'Scatter the remaining cheddar over the top. Add the mozzarella on top of that for the cheese pull.',
        },
        {
          text: 'Mix crushed crackers with melted butter and scatter evenly over the cheese.',
        },
        {
          text: 'Bake 35 to 40 minutes until bubbling at the edges and golden on top. Broil on low for the last 2 minutes if you want a deeper crust. Watch it closely.',
        },
        {
          text: 'Rest 15 minutes before serving. It sets up and serves cleanly. I have skipped this step twice. Both times I regretted it.',
        },
      ]}
      tips={[
        'Season the chicken first. Every recipe that skips this step produces a flat-tasting casserole. Seasoning the chicken separately gives each piece its own flavor before it meets the sauce.',
        'Dry the broccoli properly. Extra water from thawed frozen or blanched fresh broccoli will thin the sauce.',
        'Do not skip the rest. 15 minutes after it comes out. I know it smells ready. Wait.',
        'For a from-scratch version without canned soup: heat 1 cup heavy cream on very low heat, add 1 cup sharp cheddar and 1 cup colby jack, and stir slowly until melted. Low heat only or the sauce will break.',
        'Want more servings? Double everything into a 9x13 pan. Bake time stays roughly the same.',
      ]}
      nutrition={{
        servingSize: '1 portion (approx. 300g)',
        calories: 410,
        protein: '35g',
        carbs: '16g',
        fiber: '3g',
        fat: '22g',
      }}
      faqs={[
        {
          question: 'What are the 4 core ingredients in chicken broccoli casserole?',
          answer:
            'Chicken, broccoli, condensed cream of chicken soup (or homemade cheese sauce), and cheddar. Everything else improves it but is not the base.',
        },
        {
          question: 'Can I make this ahead of time?',
          answer:
            'Assemble without the cracker topping, refrigerate up to 24 hours, add crackers before baking. It also freezes well for up to 3 months without the topping. Thaw overnight in the fridge before baking.',
        },
        {
          question: 'How long does it bake, and at what temperature?',
          answer:
            '375°F (190°C) for 35 to 40 minutes. Broil on low for 1 to 2 minutes at the end for a golden crust. Add 10 to 15 minutes if baking cold from the fridge.',
        },
        {
          question: 'Why does frozen broccoli need to be completely thawed?',
          answer:
            'Partially frozen broccoli causes uneven baking. Some pieces overcook while others stay cold. Full thaw plus pressing out the moisture with a kitchen towel prevents both problems.',
        },
        {
          question: 'What do you serve with chicken broccoli casserole?',
          answer:
            'A green salad, crusty bread, or steamed rice. It is a full meal on its own, so sides just need contrast.',
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
          title: 'How to Steam Broccoli Perfectly',
          href: '/how-to-cook/steam',
          image: '/images/steam-broccoli/steam-broccoli-hero.webp',
          prepTime: '7 min',
        },
        {
          title: 'Chicken and Broccoli Stir Fry',
          href: '/recipes/chicken/chicken-broccoli',
          image: '/images/chicken-broccoli-stir-fry/chicken-broccoli-stir-fry-hero.webp',
          prepTime: '15 min',
        },
      ]}
      keywords={[
        'chicken broccoli casserole',
        'cheesy chicken casserole',
        'broccoli chicken bake',
        'easy weeknight casserole',
        'make ahead chicken dinner',
      ]}
      schemaJson={combinedSchema}
    />
  )
}
