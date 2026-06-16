import type { Metadata } from 'next'
import Link from 'next/link'
import RecipeTemplate from '@/components/RecipeTemplate'

export const metadata: Metadata = {
  title: 'Easy Broccoli Pasta (15 Minutes, Italian-Style) | BroccoliPedia',
  description:
    'The Italian trick that makes broccoli pasta taste 10x better: cook the broccoli in the pasta water first. Ready in 15 minutes. A recipe from Elena Ignacio.',
  keywords: [
    'broccoli pasta recipe easy',
    'broccoli pasta',
    'easy pasta with broccoli',
    'Italian broccoli pasta',
    '15 minute pasta dinner',
    'pasta with garlic and broccoli',
    'weeknight pasta recipe',
    'orecchiette broccoli',
  ],
  openGraph: {
    title: 'Easy Broccoli Pasta (15 Minutes, Italian-Style)',
    description:
      'Cook the broccoli in the pasta water first. That one step changes everything. From Elena Ignacio at BroccoliPedia.',
    url: 'https://broccolipedia.com/recipes/pasta',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-pasta/broccoli-pasta-hero-dish-natural-light.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli orecchiette pasta in a cream ceramic bowl with parmesan and basil on a wooden surface',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Broccoli Pasta (15 Minutes)',
    description: 'Cook the broccoli in the pasta water first. Italian technique that every home cook should know.',
    images: ['/images/broccoli-pasta/broccoli-pasta-hero-dish-natural-light.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/recipes/pasta',
  },
}

// ── Schema JSON-LD ─────────────────────────────────────────────────────────────

const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  '@id': 'https://broccolipedia.com/recipes/pasta#recipe',
  name: 'Easy Broccoli Pasta (15 Minutes)',
  description:
    'Italian-style broccoli pasta where the broccoli is cooked in the pasta water first to flavour it, then the pasta absorbs that flavour. Serves 2 in 20 minutes.',
  image: [
    'https://broccolipedia.com/images/broccoli-pasta/broccoli-pasta-hero-dish-natural-light.webp',
    'https://broccolipedia.com/images/broccoli-pasta/broccoli-pasta-prep-process-ingredients.webp',
    'https://broccolipedia.com/images/broccoli-pasta/broccoli-pasta-plated-close-up-garnish.webp',
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
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/logo.webp',
    },
  },
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  recipeCategory: ['Pasta', 'Weeknight Dinner', 'Italian'],
  recipeCuisine: 'Italian',
  prepTime: 'PT5M',
  cookTime: 'PT15M',
  totalTime: 'PT20M',
  recipeYield: '2 servings',
  keywords:
    'broccoli pasta, easy pasta recipe, weeknight dinner, Italian pasta, 15 minute dinner, orecchiette broccoli',
  recipeIngredient: [
    '300g (10.5 oz) orecchiette or spaghetti',
    '1 medium head broccoli (about 400g / 14 oz), florets and stems separated',
    '4 garlic cloves, thinly sliced',
    '4 tablespoons extra virgin olive oil, plus more for finishing',
    '1 teaspoon red pepper flakes',
    '50g (about 1/2 cup) parmesan or pecorino, finely grated',
    '2 tablespoons salt per gallon of water',
    'Zest of half a lemon (optional)',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      name: 'Salt the water properly',
      text: 'Bring a large pot of water to a full boil. Add 2 tablespoons of salt per gallon of water. Under-salted water is the biggest reason broccoli pasta tastes bland.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Cook the broccoli stems first',
      text: 'Cut the broccoli stems into small chunks the size of a chickpea. Add them to the boiling water first. Stems take 2 to 3 minutes longer than florets.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Add the florets',
      text: 'After 2 minutes, add the broccoli florets. Cook the broccoli for a total of 5 to 6 minutes until just tender. The water will turn light green.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Remove broccoli, cook pasta in the same water',
      text: 'Scoop the broccoli out with tongs or a slotted spoon. Leave the water in the pot. Add the pasta and cook according to the packet, minus 2 minutes.',
      position: 4,
    },
    {
      '@type': 'HowToStep',
      name: 'Make the garlic oil',
      text: 'While the pasta cooks, heat olive oil in a wide pan over medium-low heat. Add garlic and red pepper flakes. Cook gently for 2 minutes until the garlic is pale gold at the edges, not brown.',
      position: 5,
    },
    {
      '@type': 'HowToStep',
      name: 'Transfer pasta wet into the pan',
      text: 'Do not drain the pasta into a colander. Use tongs to transfer the pasta directly from the pot into the garlic oil pan, bringing pasta water with it.',
      position: 6,
    },
    {
      '@type': 'HowToStep',
      name: 'Add broccoli and emulsify',
      text: 'Add the cooked broccoli back in. Pour in about 60ml (1/4 cup) of starchy pasta water. Toss vigorously over medium heat for 1 to 2 minutes until the broccoli breaks down slightly and coats the pasta.',
      position: 7,
    },
    {
      '@type': 'HowToStep',
      name: 'Finish and serve',
      text: 'Remove from heat. Add parmesan and toss once more. Drizzle extra virgin olive oil over the top right before serving. Add lemon zest if using. Season and serve immediately.',
      position: 8,
    },
  ],
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: '1 of 2 servings (approx. 350g)',
    calories: '490 kcal',
    proteinContent: '19g',
    carbohydrateContent: '67g',
    fiberContent: '6g',
    fatContent: '16g',
  },
  // WikiData entities wired as 'mentions' — from entities.json
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47461',
    },
    {
      '@type': 'Thing',
      name: 'Orecchiette',
      sameAs: 'https://www.wikidata.org/wiki/Q1326898',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q193598',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q134062',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q413676',
    },
    {
      '@type': 'Thing',
      name: 'Calabria',
      sameAs: 'https://www.wikidata.org/wiki/Q1458',
    },
    {
      '@type': 'Thing',
      name: 'Parmigiano-Reggiano',
      sameAs: 'https://www.wikidata.org/wiki/Q47014',
    },
  ],
  suitableForDiet: 'https://schema.org/VegetarianDiet',
  cookingMethod: 'Boiling, Sauteing',
  tool: ['Large pot', 'Wide pan', 'Tongs'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use frozen broccoli for broccoli pasta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Thaw the broccoli first and reduce the boiling time to about 3 minutes. Frozen broccoli breaks down faster than fresh, which actually works well in this recipe because you want some of it to meld into the sauce. The flavour is slightly milder but perfectly acceptable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pasta shape works best with broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orecchiette is ideal because each small cup catches a piece of broccoli, so you get both in every bite. Rigatoni and penne rigate are good alternatives because the ridges grip the sauce. Spaghetti works if that is what you have.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does broccoli pasta keep in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Up to 3 days in an airtight container. When reheating, add a splash of water to loosen the sauce. Reheat in a pan over medium heat rather than the microwave.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli pasta healthy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at the ingredient level. One serving of this recipe contains roughly 150g of cooked broccoli, which provides close to your full daily requirement of vitamin C and vitamin K according to USDA FDC ID 170379. Whether it fits your nutritional goals depends on the rest of your day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make broccoli pasta without cream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This recipe has no cream. The sauce comes from pasta water starch, olive oil, and broken-down broccoli. Toss vigorously and the starch emulsifies with the oil into something that looks creamy without any dairy beyond the parmesan.',
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
      name: 'Pasta',
      item: 'https://broccolipedia.com/recipes/pasta',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Easy Broccoli Pasta',
      item: 'https://broccolipedia.com/recipes/pasta',
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://broccolipedia.com/recipes/pasta',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable="true"]'],
  },
  url: 'https://broccolipedia.com/recipes/pasta',
}

// ── Page component ─────────────────────────────────────────────────────────────

export default function BroccoliPastaPage() {
  return (
    <>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* Breadcrumb nav */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-sm text-sage"
      >
        <Link href="/" className="hover:text-forest">
          Home
        </Link>{' '}
        /{' '}
        <Link href="/recipes" className="hover:text-forest">
          Recipes
        </Link>{' '}
        /{' '}
        <span className="text-deepForest">Broccoli Pasta</span>
      </nav>

      <RecipeTemplate
        title="Easy Broccoli Pasta (15 Minutes)"
        description="Alfi was four years old the first time he called broccoli tiny trees. We were in a hotel apartment in Kuala Lumpur, just me and the boys, and I had one head of broccoli and half a packet of spaghetti. My aunt's trick: cook the broccoli in the pasta water first. Alfi ate two bowls. He still calls it tiny trees pasta."
        image="/images/broccoli-pasta/broccoli-pasta-hero-dish-natural-light.webp"
        imageAlt="Bowl of broccoli orecchiette pasta with parmesan and basil on a worn wooden surface"
        meta={{
          prepTime: '5 min',
          cookTime: '15 min',
          totalTime: '20 min',
          servings: 2,
          difficulty: 'Easy',
          calories: 490,
        }}
        ingredients={[
          '300g (10.5 oz) orecchiette or spaghetti',
          '1 medium head broccoli (about 400g / 14 oz), florets and stems',
          '4 garlic cloves, thinly sliced',
          '4 tablespoons extra virgin olive oil, plus more for finishing',
          '1 teaspoon red pepper flakes (adjust to taste)',
          '50g (about 1/2 cup) parmesan or pecorino, finely grated',
          'Salt (2 tablespoons per gallon / 3.8L of water)',
          'Zest of half a lemon (optional but worth it)',
        ]}
        steps={[
          {
            text: 'Bring a large pot of water to a full boil. Add 2 tablespoons of salt per gallon of water. This is more than most people use, and it matters. Under-salted water is the single biggest reason broccoli pasta ends up tasting bland.',
          },
          {
            text: 'Cut the broccoli stems into small chunks, about the size of a chickpea. Add these to the boiling water first, before the florets. Stems take 2 to 3 minutes longer to cook than florets.',
            image: '/images/broccoli-pasta/broccoli-pasta-prep-process-ingredients.webp',
            imageAlt: 'Broccoli florets and pasta ingredients laid out on a light oak board ready for prep',
          },
          {
            text: 'After 2 minutes, add the broccoli florets to the pot. Cook the whole broccoli for a total of 5 to 6 minutes until just tender. The water will turn light green. That is exactly what you want.',
          },
          {
            text: 'Scoop the broccoli out with tongs or a slotted spoon. Leave the water in the pot. This green, flavoured water is now your pasta water. Add the pasta and cook according to the packet, minus 2 minutes.',
          },
          {
            text: 'While the pasta cooks, heat olive oil in a wide pan over medium-low heat. Add the garlic and red pepper flakes. Cook gently for 2 minutes until the garlic is pale gold at the edges. Not brown. Brown garlic gets bitter.',
          },
          {
            text: 'Do not drain the pasta into a colander. Use tongs to transfer the pasta directly from the pot into the garlic oil pan, bringing some pasta water with it. This is the technique that makes the sauce silky.',
          },
          {
            text: 'Add the cooked broccoli back in. Pour in about 60ml (1/4 cup) of starchy pasta water. Toss vigorously over medium heat for 1 to 2 minutes. The broccoli breaks down slightly and coats the pasta. That coating is the sauce.',
          },
          {
            text: 'Remove from heat. Add parmesan and toss once more. Drizzle your best extra virgin olive oil over the top right before serving, not during cooking. Add lemon zest if using. Taste for salt. Serve immediately.',
          },
        ]}
        tips={[
          'Orecchiette is the shape to use. The little cup catches bits of broccoli so every bite has both. Spaghetti works too.',
          'Do not add oil to the pasta water. Oil-coated pasta repels sauce.',
          'Drizzle the finishing olive oil at the end, not while cooking. Heat destroys the aromatics. Finishing raw gives the dish that bright, grassy note.',
          'Want more protein? Stir in a drained tin of white beans with the broccoli in step 7. Adam prefers it this way.',
          'Frozen broccoli works. Thaw it first and cut the cook time down to 3 minutes. Texture is softer but flavour holds.',
        ]}
        nutrition={{
          servingSize: '1 of 2 servings (approx. 350g)',
          calories: 490,
          protein: '19g',
          carbs: '67g',
          fiber: '6g',
          fat: '16g',
        }}
        faqs={[
          {
            question: 'Can I use frozen broccoli?',
            answer:
              'Yes. Thaw it first and reduce the boiling time to about 3 minutes. Frozen broccoli breaks down faster than fresh, which works well here because you want some of it to meld into the sauce. The flavour is slightly milder but perfectly fine.',
          },
          {
            question: 'What pasta shape works best?',
            answer:
              'Orecchiette is ideal. Each small cup catches a piece of broccoli, so you get both in every bite. Rigatoni and penne rigate are good alternatives. Spaghetti works if that is what you have.',
          },
          {
            question: 'How long does broccoli pasta keep in the fridge?',
            answer:
              'Up to 3 days in an airtight container. When reheating, add a splash of water to loosen the sauce. Reheat in a pan over medium heat rather than the microwave.',
          },
          {
            question: 'Is broccoli pasta healthy?',
            answer:
              'Yes, at the ingredient level. One serving gives you close to your full daily vitamin C and vitamin K from the broccoli alone (USDA FDC ID 170379). Whether it fits your goals depends on the rest of your day.',
          },
          {
            question: 'How do I make it without cream?',
            answer:
              'This recipe has no cream. The sauce is pasta water starch, olive oil, and broken-down broccoli. Toss vigorously and the starch emulsifies with the oil into something that looks creamy without any dairy beyond the parmesan.',
          },
        ]}
        related={[
          {
            title: 'How to Roast Broccoli',
            href: '/recipes/roasted',
            image: '/images/roasted-broccoli/hero.webp',
            prepTime: '25 min',
          },
          {
            title: 'How to Blanch Broccoli',
            href: '/how-to-cook/blanch',
            image: '/images/blanch-broccoli/hero.webp',
            prepTime: '5 min',
          },
          {
            title: 'Broccoli Nutrition Facts',
            href: '/nutrition/fiber',
            image: '/images/broccoli-nutrition/hero.webp',
            prepTime: '2 min read',
          },
        ]}
        keywords={[
          'broccoli pasta recipe easy',
          'broccoli pasta',
          'easy pasta with broccoli',
          'Italian broccoli pasta',
          '15 minute pasta dinner',
        ]}
        schemaJson={recipeSchema}
      />

      {/* Speakable QuickAnswer block — marked for voice search */}
      <section
        data-speakable="true"
        className="sr-only"
        aria-label="Quick answer: should you cook broccoli before adding it to pasta"
      >
        Yes. Cook the broccoli in your pasta water first, 5 to 6 minutes with stems before florets,
        then cook the pasta in that same water. This is how they do it in southern Italian kitchens.
        The broccoli flavours the water and the pasta absorbs that flavour from the start.
      </section>
    </>
  )
}
