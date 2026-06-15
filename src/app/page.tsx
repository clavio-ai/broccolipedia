import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BroccoliPedia — Everything Broccoli, From Kitchen to Garden',
  description:
    'The definitive broccoli reference: USDA-cited nutrition facts, 30+ tested recipes, growing guides, and science-backed health information. Not a recipe blog — a broccoli authority.',
  openGraph: {
    title: 'BroccoliPedia — Everything Broccoli, From Kitchen to Garden',
    description:
      'USDA nutrition facts, tested recipes, growing guides, and science-backed health info — all broccoli, all accurate.',
    images: [{ url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80' }],
  },
}

const FEATURED_RECIPES = [
  {
    title: 'Broccoli Cheddar Soup (Better Than Panera)',
    href: '/recipes/soup/broccoli-cheddar',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    time: '40 min',
    badge: 'Most Popular',
  },
  {
    title: 'Beef and Broccoli (Better Than Takeout)',
    href: '/recipes/beef/beef-and-broccoli',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
    time: '30 min',
    badge: '',
  },
  {
    title: 'Classic Broccoli Salad',
    href: '/recipes/salad/classic',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    time: '15 min',
    badge: '',
  },
  {
    title: 'Roasted Broccoli',
    href: '/recipes/roasted',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    time: '25 min',
    badge: '',
  },
  {
    title: 'Chicken Broccoli Rice Casserole',
    href: '/recipes/casserole/chicken-broccoli',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
    time: '45 min',
    badge: '',
  },
  {
    title: 'Air Fryer Broccoli',
    href: '/how-to-cook/air-fryer',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    time: '8 min',
    badge: 'Quick',
  },
]

const HUB_CATEGORIES = [
  {
    title: 'Nutrition & Health',
    href: '/nutrition',
    icon: '🥦',
    description: 'USDA facts, vitamins, clinical research on sulforaphane, and what the science actually says.',
  },
  {
    title: 'Recipes',
    href: '/recipes',
    icon: '🍲',
    description: 'Soups, salads, casseroles, stir-fries — every broccoli recipe tested and written clearly.',
  },
  {
    title: 'How to Cook',
    href: '/how-to-cook',
    icon: '🍳',
    description: 'Steam, roast, air-fry, boil, microwave — exact times and temps for every method.',
  },
  {
    title: 'Growing Broccoli',
    href: '/growing',
    icon: '🌱',
    description: 'From seed to harvest: timing, spacing, companion plants, and when to pick.',
  },
  {
    title: 'Storage & Prep',
    href: '/storage',
    icon: '❄️',
    description: 'How long it lasts, how to freeze it right, and how to tell when it has gone bad.',
  },
  {
    title: 'Varieties',
    href: '/varieties',
    icon: '🌿',
    description: 'Broccoli rabe, broccolini, Chinese broccoli, romanesco — every type explained.',
  },
  {
    title: 'Facts & History',
    href: '/facts',
    icon: '📖',
    description: "Is broccoli man-made? Its ancient Roman origins and 15 things you didn't know.",
  },
  {
    title: 'Pets',
    href: '/pets',
    icon: '🐾',
    description: 'Can dogs eat broccoli? Cats? Chickens? Honest, vet-informed answers for pet owners.',
  },
]

const NUTRITION_SPOTLIGHTS = [
  {
    stat: '99% DV',
    nutrient: 'Vitamin C',
    detail: '89.2mg per 100g — 68% more than an orange. Boiling strips half of it; steam to preserve.',
    source: 'USDA FoodData Central (FDC 170379)',
    href: '/nutrition/vitamins',
  },
  {
    stat: '20–50×',
    nutrient: 'Sulforaphane in Sprouts',
    detail: '3-day broccoli sprouts contain 20–50× more glucoraphanin than mature broccoli. Discovered at Johns Hopkins, PNAS 1997.',
    source: 'Johns Hopkins / PNAS 1997',
    href: '/nutrition/sprouts',
  },
  {
    stat: '34 kcal',
    nutrient: 'Per 100g Raw',
    detail: '2.82g protein, 2.6g fiber, 0.37g fat. One of the most nutrient-dense vegetables per calorie available.',
    source: 'USDA FoodData Central (FDC 170379)',
    href: '/nutrition/calories',
  },
]

const EDITORIAL_TEASERS = [
  {
    title: 'Is Broccoli Man-Made? The Honest Answer',
    href: '/facts/is-broccoli-man-made',
    description: 'Broccoli does not exist in nature. Roman farmers selectively bred it from wild Mediterranean cabbage starting around the 6th century BCE.',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
  },
  {
    title: 'Broccoli vs Cauliflower: Which Is Healthier?',
    href: '/facts/broccoli-vs-cauliflower',
    description: 'Broccoli has 85% more vitamin C than cauliflower, plus sulforaphane that cauliflower only has in smaller amounts. Full USDA comparison inside.',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600&q=80',
  },
  {
    title: 'Can Dogs Eat Broccoli? (Yes, But Read This First)',
    href: '/pets/can-dogs-eat-broccoli',
    description: 'Safe in small amounts — under 10% of daily diet. The florets are fine; the stalk can cause GI irritation in large portions.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  },
]

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-deepForest text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1600&q=80"
            alt="Fresh broccoli flat lay"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-block bg-forest text-lime text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              The Broccoli Authority
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Everything Broccoli,<br />
              <span className="text-lime">From Kitchen to Garden</span>
            </h1>
            <p className="text-lg text-green-200 leading-relaxed mb-8">
              USDA-cited nutrition facts, 30+ tested recipes, growing guides, and honest science
              — not a recipe blog. A reference you can actually trust.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nutrition"
                className="bg-lime text-deepForest font-semibold px-6 py-3 rounded-lg hover:bg-leaf transition-colors"
              >
                Explore Nutrition
              </Link>
              <Link
                href="/recipes"
                className="border border-lime text-lime font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition spotlight */}
      <section className="bg-greenTint py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-2">
            By the Numbers
          </h2>
          <p className="text-sage text-sm mb-6">All figures from USDA FoodData Central and peer-reviewed research.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {NUTRITION_SPOTLIGHTS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-xl p-5 border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
              >
                <div className="font-serif font-bold text-4xl text-forest mb-1">{item.stat}</div>
                <div className="font-semibold text-deepForest mb-2">{item.nutrient}</div>
                <p className="text-sm text-sage leading-relaxed mb-3">{item.detail}</p>
                <div className="text-xs text-sage/70 italic">{item.source}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured recipes */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest">Featured Recipes</h2>
          <Link href="/recipes" className="text-sm text-forest font-semibold hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_RECIPES.map((recipe, i) => (
            <Link
              key={i}
              href={recipe.href}
              className="group block bg-white rounded-xl overflow-hidden border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {recipe.badge && (
                  <span className="absolute top-3 left-3 bg-forest text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {recipe.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-base text-deepForest group-hover:text-forest transition-colors leading-snug mb-1">
                  {recipe.title}
                </h3>
                <p className="text-xs text-sage">{recipe.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-greenTint py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-2">Browse by Category</h2>
          <p className="text-sage text-sm mb-6">Every aspect of broccoli covered in depth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HUB_CATEGORIES.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group bg-white rounded-xl p-5 border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h3 className="font-serif font-bold text-base text-deepForest group-hover:text-forest transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-sage leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial teasers */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest">Worth Reading</h2>
          <Link href="/facts" className="text-sm text-forest font-semibold hover:underline">
            More facts →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {EDITORIAL_TEASERS.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="group block bg-white rounded-xl overflow-hidden border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-base text-deepForest group-hover:text-forest transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-sage leading-relaxed line-clamp-3">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
