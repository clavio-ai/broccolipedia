import type { Metadata } from 'next'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Chinese Beef and Broccoli Stir Fry | BroccoliPedia',
  description:
    'Silky velveted flank steak, bright green broccoli, and a glossy oyster-soy brown sauce. 35 minutes, weeknight-friendly, restaurant-level results. By Elena Ignacio.',
  keywords: [
    'beef and broccoli recipe',
    'Chinese beef and broccoli stir fry',
    'beef broccoli stir fry',
    'velveting beef',
    'Chinese stir fry recipe',
    'oyster sauce beef broccoli',
  ],
  openGraph: {
    title: 'Chinese Beef and Broccoli Stir Fry',
    description:
      'The glossy brown sauce that made Adam eat broccoli. Velveted beef, blanched florets, 35 minutes.',
    url: 'https://broccolipedia.com/recipes/beef/beef-and-broccoli',
    type: 'article',
    images: [
      {
        url: 'https://broccolipedia.com/images/beef-and-broccoli/beef-and-broccoli-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Chinese beef and broccoli stir fry in a dark ceramic bowl with jasmine rice',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/beef/beef-and-broccoli',
  },
}

// WikiData-linked entity mentions extracted via TextRazor (2026-06-16)
// Top entities: Beef (Q192628), Broccoli (Q47722), Beef and Broccoli (Q64358326),
// Sodium bicarbonate/baking soda (Q179731), Gai lan (Q1677369), Wok (Q208364),
// Oyster sauce (Q780827), Cornstarch (Q3393961), Dark soy sauce (Q8484030),
// Stir frying (Q8980672), Flank steak (Q2165995), Jasmine rice (Q2733021),
// Garlic (Q23400), Ginger (Q35625), Sesame oil (Q212317), Vitamin C (Q199678)

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
        name: 'Beef',
        item: 'https://broccolipedia.com/recipes/beef',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Beef and Broccoli',
        item: 'https://broccolipedia.com/recipes/beef/beef-and-broccoli',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Chinese Beef and Broccoli Stir Fry',
    description:
      'Silky velveted flank steak and bright green broccoli florets coated in a glossy oyster-soy brown sauce. The baking soda velveting technique gives restaurant-level tenderness at home.',
    image: [
      'https://broccolipedia.com/images/beef-and-broccoli/beef-and-broccoli-hero-dish-natural-light.webp',
      'https://broccolipedia.com/images/beef-and-broccoli/beef-and-broccoli-plated-close-up-garnish.webp',
      'https://broccolipedia.com/images/beef-and-broccoli/beef-and-broccoli-prep-process-ingredients.webp',
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
    prepTime: 'PT20M',
    cookTime: 'PT15M',
    totalTime: 'PT35M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Chinese',
    keywords:
      'beef and broccoli, Chinese stir fry, velveting, oyster sauce, gai lan, wok recipe',
    recipeIngredient: [
      '500g (1 lb) flank steak or sirloin tip, sliced thin against the grain',
      '3/4 tsp baking soda',
      '1 tbsp light soy sauce (for marinade)',
      '1 tbsp Shaoxing rice wine or dry sherry',
      '2 tsp cornstarch (for marinade)',
      '1 tsp neutral oil (for marinade)',
      '3 tbsp oyster sauce',
      '2 tbsp light soy sauce (for sauce)',
      '1 tbsp dark soy sauce',
      '1 tsp sesame oil',
      '1 tsp sugar',
      '1/2 cup (120ml) beef broth',
      '1.5 tbsp cornstarch (for sauce)',
      '400g broccoli florets or gai lan',
      '3 cloves garlic, minced',
      '1 inch fresh ginger, minced',
      '2 tbsp neutral cooking oil',
    ],
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        name: 'Freeze and slice the beef',
        text: 'Freeze the beef for 30 minutes before slicing. Semi-frozen beef is firm enough to cut into paper-thin slices. Once sliced, cut perpendicular to the visible muscle fibers. Those are the grain lines. Cut across them, not with them.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Velvet the beef',
        text: 'Toss sliced beef with baking soda, soy sauce, Shaoxing wine, and cornstarch. Mix well and rest for 15 to 20 minutes. Do not go past 30 minutes or you will taste the metallic edge from the baking soda. After resting, drizzle the teaspoon of oil over the beef and toss to stop slices from sticking together.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Make the sauce',
        text: 'Whisk oyster sauce, light soy sauce, dark soy sauce, sesame oil, sugar, beef broth, and cornstarch together until the cornstarch fully dissolves. The dark soy gives the deep brown color. Light soy gives salt and flavor.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Blanch the broccoli',
        text: 'Bring salted water to a boil. Add florets for 90 seconds exactly, then drain and transfer to cold water. This stops the cooking and keeps broccoli vivid green and slightly crisp. Drain and set aside. If using gai lan, add stems first and leaves only in the last minute of stir frying.',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Heat the wok',
        text: 'Let the empty wok sit over high heat until it starts to smoke before adding oil. This smoking surface is what gives you wok hay, the faint seared note under the sauce.',
        position: 5,
      },
      {
        '@type': 'HowToStep',
        name: 'Sear the beef in batches',
        text: 'Add 1 tablespoon oil to the hot wok. Add half the beef in a single layer. Do not touch it for 45 seconds. Let it sear, then toss and cook another 30 seconds. Pull it out while still slightly underdone. It finishes in the sauce. Repeat with remaining beef.',
        position: 6,
      },
      {
        '@type': 'HowToStep',
        name: 'Build the sauce and finish',
        text: 'Add the remaining oil. Toss garlic and ginger for 30 seconds until fragrant. Pour in the sauce. Stir constantly for 1 minute as it thickens and turns glossy. Return the beef and add the broccoli. Toss everything for 30 seconds to coat. Serve over jasmine rice.',
        position: 7,
      },
    ],
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1 portion (approx 280g, no rice)',
      calories: '355',
      proteinContent: '36g',
      carbohydrateContent: '18g',
      fiberContent: '3g',
      fatContent: '14g',
      sodiumContent: '1100mg',
    },
    mentions: [
      { '@type': 'Thing', name: 'Beef', sameAs: 'https://www.wikidata.org/wiki/Q192628' },
      { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
      {
        '@type': 'Thing',
        name: 'Beef and broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q64358326',
      },
      {
        '@type': 'Thing',
        name: 'Sodium bicarbonate',
        sameAs: 'https://www.wikidata.org/wiki/Q179731',
      },
      { '@type': 'Thing', name: 'Gai lan', sameAs: 'https://www.wikidata.org/wiki/Q1677369' },
      { '@type': 'Thing', name: 'Wok', sameAs: 'https://www.wikidata.org/wiki/Q208364' },
      {
        '@type': 'Thing',
        name: 'Oyster sauce',
        sameAs: 'https://www.wikidata.org/wiki/Q780827',
      },
      {
        '@type': 'Thing',
        name: 'Corn starch',
        sameAs: 'https://www.wikidata.org/wiki/Q3393961',
      },
      {
        '@type': 'Thing',
        name: 'Dark soy sauce',
        sameAs: 'https://www.wikidata.org/wiki/Q8484030',
      },
      {
        '@type': 'Thing',
        name: 'Stir frying',
        sameAs: 'https://www.wikidata.org/wiki/Q8980672',
      },
      {
        '@type': 'Thing',
        name: 'Flank steak',
        sameAs: 'https://www.wikidata.org/wiki/Q2165995',
      },
      {
        '@type': 'Thing',
        name: 'Jasmine rice',
        sameAs: 'https://www.wikidata.org/wiki/Q2733021',
      },
      { '@type': 'Thing', name: 'Garlic', sameAs: 'https://www.wikidata.org/wiki/Q23400' },
      { '@type': 'Thing', name: 'Ginger', sameAs: 'https://www.wikidata.org/wiki/Q35625' },
      { '@type': 'Thing', name: 'Sesame oil', sameAs: 'https://www.wikidata.org/wiki/Q212317' },
      { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Chinese restaurant beef so tender?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Velveting. The technique coats thinly sliced beef in baking soda for 15 to 20 minutes before cooking. Baking soda raises the pH of the meat, which prevents proteins from tightening during high heat. The result is silky, soft beef. Rinse the baking soda after marinating or you will taste it in the finished dish.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the sauce in Chinese beef and broccoli made of?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oyster sauce, light soy sauce, dark soy sauce, sesame oil, a small amount of sugar, beef broth, and cornstarch. Oyster sauce provides the deep umami base. Dark soy gives the rich brown color. Cornstarch thickens it into the glossy, clingy coating that makes the dish satisfying.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I blanch broccoli before stir frying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Blanch in salted boiling water for 90 seconds, then shock in cold water immediately. This gives you bright green, slightly crisp broccoli rather than mushy florets. The broccoli goes into the wok only at the very end to warm through, not to cook further.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cut of beef is best for stir fry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flank steak is the traditional choice for its flavor and clear grain structure. Sirloin tip and skirt steak work well too. Ribeye is naturally tender enough that you may not need the baking soda step at all. Avoid stewing cuts like chuck or brisket.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I make beef and broccoli without a wok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A cast iron skillet works well because it holds high heat. A stainless steel pan over the highest burner setting also works. What does not work is a non-stick pan on medium heat. You need the pan screaming hot before the beef touches it.',
        },
      },
    ],
  },
]

export default function BeefAndBroccoliPage() {
  return (
    <RecipeTemplate
      title="Chinese Beef and Broccoli Stir Fry"
      description="Adam refused broccoli for eight months. Then takeout changed everything. It was the sauce. This is how I make that sauce at home, with silky velveted beef and bright green florets, in 35 minutes."
      image="/images/beef-and-broccoli/beef-and-broccoli-hero-dish-natural-light.webp"
      imageAlt="Chinese beef and broccoli stir fry in a dark ceramic bowl, glossy brown sauce, with jasmine rice"
      meta={{
        prepTime: '20 min',
        cookTime: '15 min',
        totalTime: '35 min',
        servings: 4,
        difficulty: 'Medium',
        calories: 355,
      }}
      ingredients={[
        'Beef and marinade:',
        '500g (1 lb) flank steak or sirloin tip, sliced thin against the grain',
        '3/4 tsp baking soda',
        '1 tbsp light soy sauce',
        '1 tbsp Shaoxing rice wine (dry sherry works)',
        '2 tsp cornstarch',
        '1 tsp neutral oil',
        'Sauce:',
        '3 tbsp oyster sauce',
        '2 tbsp light soy sauce',
        '1 tbsp dark soy sauce',
        '1 tsp sesame oil',
        '1 tsp sugar',
        '1/2 cup (120ml) beef broth',
        '1.5 tbsp cornstarch',
        'Stir fry:',
        '400g broccoli florets (or gai lan from the wet market)',
        '3 cloves garlic, minced',
        '1 inch fresh ginger, minced',
        '2 tbsp neutral cooking oil',
      ]}
      steps={[
        {
          text: 'Freeze the beef for 30 minutes before slicing. Semi-frozen beef is firm enough to cut into paper-thin slices. Once sliced, cut perpendicular to the visible muscle fibers. Those are the grain lines running in one direction. Cut across them, not with them.',
          image: '/images/beef-and-broccoli/beef-and-broccoli-prep-process-ingredients.webp',
          imageAlt: 'Flank steak sliced thin against the grain on a wooden cutting board',
        },
        {
          text: 'Velvet the beef. Toss sliced beef with baking soda, soy sauce, Shaoxing wine, and cornstarch. Mix well and rest for 15 to 20 minutes. Do not go past 30 minutes or you will taste that metallic edge from the baking soda. After resting, drizzle the teaspoon of oil over the beef and toss. This stops the slices from sticking together in the wok.',
        },
        {
          text: 'Make the sauce. Whisk oyster sauce, light soy sauce, dark soy sauce, sesame oil, sugar, beef broth, and cornstarch together until the cornstarch fully dissolves. The dark soy gives the deep brown color. Light soy gives salt and flavor. Both matter.',
          image: '/images/beef-and-broccoli/beef-and-broccoli-prep-process-ingredients.webp',
          imageAlt: 'Dark brown stir fry sauce ingredients mixed in a small white bowl',
        },
        {
          text: 'Blanch the broccoli. Bring salted water to a boil. Add florets for 90 seconds exactly, then drain and transfer to cold water. This stops the cooking and keeps broccoli vivid green and slightly crisp. Drain and set aside. If using gai lan from the wet market, add the sliced stems first and leaves only in the last minute of stir frying since they cook at different rates.',
        },
        {
          text: 'Get the wok smoking hot. Let the empty wok sit over high heat until it starts to smoke before adding oil. This is the step most home cooks skip. That smoking surface is what gives you wok hay, the faint seared note under the sauce.',
        },
        {
          text: 'Sear the beef in batches. Add 1 tablespoon oil to the hot wok. Add half the beef in a single layer. Do not touch it for 45 seconds. Let it sear, then toss and cook another 30 seconds. Pull it out while still slightly underdone. It finishes in the sauce. Overcooking in the wok is how you get tough beef. Repeat with the second batch.',
          image: '/images/beef-and-broccoli/beef-and-broccoli-plated-close-up-garnish.webp',
          imageAlt: 'Beef searing in a hot carbon steel wok with visible steam',
        },
        {
          text: 'Build the sauce and finish. Add the remaining oil. Toss garlic and ginger for 30 seconds until fragrant. Pour in the sauce. Stir constantly for 1 minute as it thickens and turns glossy. Return the beef and add the broccoli. Toss everything for 30 seconds to coat. Serve over jasmine rice.',
        },
      ]}
      tips={[
        'Baking soda raises the meat\'s pH and stops proteins from clenching during high heat. That is why restaurant beef is silky. 3/4 tsp per 500g is the right amount. Use more and you will taste it.',
        'A cast iron skillet works if you do not have a wok. It holds high heat well. What does not work is a non-stick pan on medium. High heat is not optional.',
        'Regular broccoli from any supermarket is perfectly good. Gai lan from the wet market is slightly more bitter and complex. With gai lan, add the stems before the leaves because the timing difference is real.',
        'Slice against the grain or the beef will be chewy regardless of how well you velvet it. The visible grain lines run in one direction. Cut perpendicular to them.',
      ]}
      nutrition={{
        servingSize: '1 portion (approx 280g, no rice)',
        calories: 355,
        protein: '36g',
        carbs: '18g',
        fiber: '3g',
        fat: '14g',
      }}
      faqs={[
        {
          question: 'What makes Chinese restaurant beef so tender?',
          answer:
            'Velveting. The technique coats thinly sliced beef in baking soda for 15 to 20 minutes before cooking. Baking soda raises the pH of the meat, which prevents proteins from tightening during high heat. The result is silky, soft beef. Rinse the baking soda after marinating or you will taste it in the finished dish.',
        },
        {
          question: 'What is the sauce in Chinese beef and broccoli made of?',
          answer:
            'Oyster sauce, light soy sauce, dark soy sauce, sesame oil, a small amount of sugar, beef broth, and cornstarch. Oyster sauce provides the deep umami base. Dark soy gives the rich brown color. Cornstarch thickens it into the glossy, clingy coating that makes the dish satisfying.',
        },
        {
          question: 'Should I blanch broccoli before stir frying?',
          answer:
            'Yes. Blanch in salted boiling water for 90 seconds, then shock in cold water immediately. This gives you bright green, slightly crisp broccoli rather than mushy florets. The broccoli goes into the wok only at the very end to warm through, not to cook further.',
        },
        {
          question: 'What cut of beef is best for stir fry?',
          answer:
            'Flank steak is the traditional choice for its flavor and clear grain structure. Sirloin tip and skirt steak work well too. Ribeye is naturally tender enough that you may not need the baking soda step at all. Avoid stewing cuts like chuck or brisket.',
        },
        {
          question: 'Can I make beef and broccoli without a wok?',
          answer:
            'Yes. A cast iron skillet works well because it holds high heat. A stainless steel pan over the highest burner setting also works. What does not work is a non-stick pan on medium heat. You need the pan screaming hot before the beef touches it.',
        },
      ]}
      related={[
        {
          title: 'How to Blanch Broccoli',
          href: '/how-to-cook/blanch',
          image: '/images/how-to/blanch-broccoli-bowl.webp',
          prepTime: '5 min',
        },
        {
          title: 'Chicken and Broccoli Stir Fry',
          href: '/recipes/chicken/chicken-broccoli',
          image: '/images/chicken-broccoli/chicken-broccoli-bowl.webp',
          prepTime: '20 min',
        },
        {
          title: 'Broccoli Nutrition Facts',
          href: '/nutrition/broccoli-nutrition-facts',
          image: '/images/nutrition/broccoli-nutrition.webp',
          prepTime: '2 min read',
        },
      ]}
      keywords={[
        'beef and broccoli recipe',
        'Chinese beef and broccoli stir fry',
        'velveting technique',
        'oyster sauce stir fry',
        'gai lan beef stir fry',
      ]}
      schemaJson={schemaJson as unknown as Record<string, unknown>}
    />
  )
}
