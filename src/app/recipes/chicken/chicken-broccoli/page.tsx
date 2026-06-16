import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Chicken and Broccoli Stir Fry Recipe | BroccoliPedia',
  description: 'Chicken and broccoli stir fry with a glossy garlic-ginger soy sauce. 30 minutes, one wok, better than takeout. Velveting tip included for restaurant-tender chicken.',
  keywords: [
    'chicken and broccoli stir fry recipe',
    'chicken broccoli stir fry',
    'easy chicken and broccoli',
    'chinese chicken broccoli stir fry',
    'chicken and broccoli recipe',
  ],
  openGraph: {
    title: 'Chicken and Broccoli Stir Fry Recipe',
    description: 'Glossy garlic-ginger sauce, crisp broccoli, tender chicken. 30 minutes and better than takeout.',
    images: [
      {
        url: '/images/chicken-and-broccoli/chicken-and-broccoli-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Chicken and broccoli stir fry in a dark ceramic bowl with sesame seeds and green onion',
      },
    ],
    type: 'article',
  },
}

// WikiData entities from TextRazor extraction (entities.json)
// Q119198843 = Chicken and broccoli, Q47722 = Broccoli, Q864693 = Chicken as food
// Q8980672 = Stir frying, Q219239 = Recipe, Q229385 = Soy sauce, Q178359 = Sauce

const schemaJson = [
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
        name: 'Chicken Recipes',
        item: 'https://broccolipedia.com/recipes/chicken',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Chicken and Broccoli Stir Fry',
        item: 'https://broccolipedia.com/recipes/chicken/chicken-broccoli',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': 'https://broccolipedia.com/recipes/chicken/chicken-broccoli#recipe',
    name: 'Chicken and Broccoli Stir Fry',
    description:
      'Chicken breast and broccoli florets cooked in a glossy garlic-ginger soy sauce. The whole dish takes 30 minutes and is better than takeout.',
    image: [
      'https://broccolipedia.com/images/chicken-and-broccoli/chicken-and-broccoli-hero-dish-natural-light.webp',
      'https://broccolipedia.com/images/chicken-and-broccoli/chicken-and-broccoli-prep-process-ingredients.webp',
      'https://broccolipedia.com/images/chicken-and-broccoli/chicken-and-broccoli-plated-close-up-garnish.webp',
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
    prepTime: 'PT10M',
    cookTime: 'PT20M',
    totalTime: 'PT30M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Chinese-inspired',
    keywords:
      'chicken and broccoli stir fry, chicken broccoli recipe, easy stir fry, weeknight dinner, better than takeout',
    recipeIngredient: [
      '500g (1.1 lb) chicken breast, sliced thin against the grain',
      '400g (14 oz) broccoli florets',
      '1 tablespoon soy sauce (for marinade)',
      '1 tablespoon cornstarch (for marinade)',
      '1 teaspoon sesame oil (for marinade)',
      '1/4 teaspoon baking soda (for velveting, optional)',
      '3 tablespoons soy sauce (for sauce)',
      '2 tablespoons oyster sauce',
      '1 tablespoon Shaoxing wine or dry sherry',
      '1 teaspoon sesame oil (for sauce)',
      '1 teaspoon honey',
      '120ml (1/2 cup) chicken broth',
      '1.5 tablespoons cornstarch (for sauce)',
      '1/2 teaspoon white pepper',
      '4 garlic cloves, minced',
      '1 teaspoon fresh ginger, grated',
      '1/4 teaspoon red chili flakes (optional)',
      '2 tablespoons neutral oil',
      'Sesame seeds and sliced green onion to serve',
    ],
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Prep the broccoli',
        text: 'Chop broccoli florets into bite-size pieces and set aside. If you can wait 30 to 40 minutes before cooking, do it. An enzyme in raw broccoli is active during this window and converts to sulforaphane. Above 70C the enzyme stops working. The short stir fry cook time helps retain more than boiling would.',
        image:
          '/images/chicken-and-broccoli/chicken-and-broccoli-prep-process-ingredients.webp',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Velvet the chicken',
        text: 'Slice chicken breast thin against the grain. Toss with soy sauce, cornstarch, sesame oil, and baking soda. Let it sit for 15 minutes. The baking soda raises the surface pH and keeps the chicken tender at high heat. Rinse well before cooking.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Mix the sauce',
        text: 'Whisk together soy sauce, oyster sauce, Shaoxing wine, sesame oil, honey, chicken broth, cornstarch, and white pepper in a small bowl. Set it next to the stove.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Blanch the broccoli',
        text: 'Bring a pot of salted water to a boil. Drop in the broccoli florets for 90 seconds, then drain. They should be bright green with a little bite left. They finish cooking in the sauce.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Sear the chicken',
        text: 'Heat a wok over the highest heat your stove has. Add 1.5 tablespoons of oil. When it shimmers, add chicken in a single layer. Cook in two batches if needed. Let it sit undisturbed 90 seconds to develop colour, then flip. About 4 minutes total. Remove to a plate.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Build the sauce',
        text: 'In the same wok, add remaining oil, then garlic and ginger. Stir for 30 seconds. Pour in the sauce. It will bubble immediately. Stir until it thickens and turns glossy, about 45 to 60 seconds. It should coat the back of a spoon.',
      },
      {
        '@type': 'HowToStep',
        position: 7,
        name: 'Finish and serve',
        text: 'Add chicken and broccoli back to the wok. Toss to coat evenly. Serve immediately over jasmine rice with sesame seeds and sliced green onion.',
        image:
          '/images/chicken-and-broccoli/chicken-and-broccoli-plated-close-up-garnish.webp',
      },
    ],
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '380 calories',
      servingSize: '1 serving (approximately 300g, rice not included)',
      proteinContent: '38g',
      carbohydrateContent: '22g',
      fiberContent: '4g',
      fatContent: '12g',
    },
    mentions: [
      {
        '@type': 'Thing',
        name: 'Chicken and broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q119198843',
      },
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
        name: 'Stir frying',
        sameAs: 'https://www.wikidata.org/wiki/Q8980672',
      },
      {
        '@type': 'Thing',
        name: 'Soy sauce',
        sameAs: 'https://www.wikidata.org/wiki/Q229385',
      },
      {
        '@type': 'Thing',
        name: 'Sauce',
        sameAs: 'https://www.wikidata.org/wiki/Q178359',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '284',
      bestRating: '5',
      worstRating: '1',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should broccoli be cooked before adding to stir fry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, briefly. Blanch broccoli florets in boiling salted water for 90 seconds, then drain. This sets the colour and softens them just enough before they go into the sauce. Adding raw broccoli straight to the sauce either leaves it too crunchy or makes you overcook it to mush while you wait.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the sauce made of in chicken and broccoli stir fry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The base is soy sauce and oyster sauce. The oyster sauce gives it the glossy, savoury depth you get at a Chinese restaurant. Shaoxing wine adds aroma that soy alone cannot match. Sesame oil goes in last for fragrance. Cornstarch and broth make the sauce thicken and cling to the chicken and broccoli.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use chicken thighs instead of chicken breast?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Thighs have more fat, stay moist, and are much harder to overcook. Slice them thin against the grain and cook them exactly the same way. If you are meal prepping, thighs hold up better on day two.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I stop the broccoli from going mushy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Three things: use fresh broccoli (not frozen), blanch for 90 seconds only, and add it to the wok at the very end. It needs about 60 seconds in the sauce and no more. Do not cover the wok once the broccoli is in. Trapped steam softens it fast.',
        },
      },
    ],
  },
]

export default function ChickenBroccoliPage() {
  return (
    <RecipeTemplate
      title="Chicken and Broccoli Stir Fry"
      description={`Adam ate two bowls the first time I made this. He was in his anti-broccoli phase, three months of refusing it in every form I tried. Then one night in 2022 I threw this together from what was in the fridge. He called it "brown sauce chicken." That name stuck. I have made it every week since.`}
      image="/images/chicken-and-broccoli/chicken-and-broccoli-hero-dish-natural-light.webp"
      imageAlt="Chicken and broccoli stir fry in a dark ceramic bowl with sesame seeds and green onion, shot at a slight angle on a wooden surface"
      meta={{
        prepTime: '10 min',
        cookTime: '20 min',
        totalTime: '30 min',
        servings: 4,
        difficulty: 'Easy',
        calories: 380,
      }}
      ingredients={[
        'For the chicken marinade:',
        '500g (1.1 lb) chicken breast, sliced thin against the grain',
        '1 tablespoon soy sauce (or tamari for gluten free)',
        '1 tablespoon cornstarch',
        '1 teaspoon sesame oil',
        '1/4 teaspoon baking soda (for velveting, optional but worth it)',
        'For the sauce:',
        '3 tablespoons soy sauce',
        '2 tablespoons oyster sauce',
        '1 tablespoon Shaoxing wine (or dry sherry)',
        '1 teaspoon sesame oil',
        '1 teaspoon honey',
        '120ml (1/2 cup) chicken broth',
        '1.5 tablespoons cornstarch',
        '1/2 teaspoon white pepper',
        'For the stir fry:',
        '400g (14 oz) broccoli florets',
        '4 garlic cloves, minced with a knife',
        '1 teaspoon fresh ginger, grated',
        '1/4 teaspoon red chili flakes (optional)',
        '2 tablespoons neutral oil',
        'To serve: sesame seeds, sliced green onion, jasmine rice',
      ]}
      steps={[
        {
          text: 'Chop broccoli florets into bite-size pieces and set them aside. If you can wait 30 to 40 minutes before starting the stir fry, do it. An enzyme in raw broccoli converts to sulforaphane during this window. Above 70C it stops working. I chop when I get home and start cooking after the boys change out of school clothes.',
        },
        {
          text: 'Slice chicken breast thin against the grain. Toss with soy sauce, cornstarch, sesame oil, and baking soda. Let it sit for 15 minutes. The baking soda raises the surface pH and keeps the chicken tender even at high heat. Rinse it off well before cooking.',
        },
        {
          text: 'Whisk all sauce ingredients together in a small bowl and set it next to the stove. Stir fry moves fast. You will not have time to measure things mid-cook.',
        },
        {
          text: 'Bring a pot of salted water to a boil. Drop the broccoli florets in for 90 seconds, then drain. They should be bright green with a little bite left. They finish cooking in the sauce.',
          image: '/images/chicken-and-broccoli/chicken-and-broccoli-prep-process-ingredients.webp',
          imageAlt: 'Broccoli florets in a glossy bubbling sauce in a dark pan',
        },
        {
          text: 'Heat a wok over the highest heat your stove has. Add 1.5 tablespoons of oil. When it shimmers, add chicken in a single layer. Do not overcrowd. Cook in two batches if needed. Let it sit undisturbed for 90 seconds to get some colour, then flip. About 4 minutes total. Remove to a plate.',
        },
        {
          text: 'In the same wok, add remaining oil, then garlic and ginger. Stir constantly for 30 seconds. Pour in the sauce. It will bubble up immediately. Keep stirring until it thickens and turns glossy, about 45 to 60 seconds. It should coat the back of a spoon.',
        },
        {
          text: 'Add the chicken and broccoli back to the wok. Toss everything to coat evenly. Serve immediately over jasmine rice with sesame seeds and sliced green onion.',
          image: '/images/chicken-and-broccoli/chicken-and-broccoli-plated-close-up-garnish.webp',
          imageAlt: 'Two bowls of chicken and broccoli stir fry with rice, one with chopsticks, one with a fork, on a worn wooden table',
        },
      ]}
      tips={[
        'Overcrowding kills the dish. If the chicken pieces touch each other they steam instead of sear. You get pale, chewy meat and a watery sauce. Two batches, two extra minutes, totally different result.',
        'Never use frozen broccoli. It releases water when it hits the pan. Your sauce will go thin and will not recover.',
        'Alfi prefers chicken thighs. He says breast is too dry and honestly he is right. Thighs stay moist, are harder to overcook, and have more flavour. Slice and cook them the same way.',
        'The sauce is the whole recipe. I sometimes make double and keep half in the fridge. It lasts three days and works on noodles, tofu, or a second round of broccoli.',
        'Real wok hei needs a restaurant flame. Your home stove cannot reach those temperatures. But heat the pan until it just starts to smoke before adding oil and you will get most of the way there.',
      ]}
      nutrition={{
        servingSize: '1 serving (approx 300g, rice not included)',
        calories: 380,
        protein: '38g',
        carbs: '22g',
        fiber: '4g',
        fat: '12g',
      }}
      faqs={[
        {
          question: 'Should broccoli be cooked before adding to stir fry?',
          answer:
            'Yes, briefly. Blanch broccoli florets in boiling salted water for 90 seconds, then drain. This sets the colour and softens them just enough before they go into the sauce. Adding raw broccoli straight to the sauce either leaves it too crunchy or makes you overcook it to mush while you wait.',
        },
        {
          question: 'What is the sauce made of in chicken and broccoli stir fry?',
          answer:
            'The base is soy sauce and oyster sauce. The oyster sauce gives it the glossy, savoury depth you get at a Chinese restaurant. Shaoxing wine adds aroma that soy alone cannot match. Sesame oil goes in last for fragrance. Cornstarch and broth make the sauce thicken and cling to the chicken and broccoli.',
        },
        {
          question: 'Can I use chicken thighs instead of chicken breast?',
          answer:
            'Yes. Thighs have more fat, stay moist, and are much harder to overcook. Slice them thin against the grain and cook them exactly the same way. If you are meal prepping, thighs hold up better on day two.',
        },
        {
          question: 'How do I stop the broccoli from going mushy?',
          answer:
            'Three things: use fresh broccoli (not frozen), blanch for 90 seconds only, and add it to the wok at the very end. It needs about 60 seconds in the sauce and no more. Do not cover the wok once the broccoli is in. Trapped steam softens it fast.',
        },
      ]}
      related={[
        {
          title: 'Beef and Broccoli',
          href: '/recipes/beef/beef-and-broccoli',
          image: '/images/beef-and-broccoli/hero.webp',
          prepTime: '25 min',
        },
        {
          title: 'How to Blanch Broccoli',
          href: '/how-to-cook/blanch',
          image: '/images/how-to-blanch/hero.webp',
          prepTime: '5 min',
        },
        {
          title: 'Broccoli Fried Rice',
          href: '/recipes/rice/broccoli-fried-rice',
          image: '/images/broccoli-fried-rice/hero.webp',
          prepTime: '20 min',
        },
      ]}
      keywords={[
        'chicken and broccoli stir fry recipe',
        'chicken broccoli stir fry',
        'easy chicken and broccoli',
        'chinese chicken broccoli',
      ]}
      schemaJson={{ '@graph': schemaJson }}
    />
  )
}
