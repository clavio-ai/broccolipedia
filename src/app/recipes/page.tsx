import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Recipes: Soups, Salads, Casseroles, Stir-Fries',
  description:
    'Every broccoli recipe tested and written clearly — broccoli cheddar soup, beef and broccoli, classic salad, casseroles, pasta, and more.',
  keywords: ['broccoli recipes', 'broccoli recipe', 'best broccoli recipes'],
}

export default function RecipesHubPage() {
  return (
    <HubTemplate
      title="Broccoli Recipes"
      description="From a 114,000-search-a-month broccoli cheddar soup to 8-minute air fryer broccoli — every recipe tested and written without filler."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Assortment of broccoli dishes — soup, salad, stir fry"
      intro="These are the most-searched broccoli recipes, written for clarity. Each page includes exact ingredients, step-by-step instructions, a nutrition card from USDA data, and an FAQ section covering the most common questions."
      breadcrumb={[{ label: 'Recipes', href: '/recipes' }]}
      cards={[
        { title: 'Broccoli Cheddar Soup (Better Than Panera)', href: '/recipes/soup/broccoli-cheddar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', description: 'The most-searched broccoli recipe at 114,000 searches/month. Thick, cheesy, better than the restaurant version.', badge: 'Most Popular' },
        { title: 'Beef and Broccoli (Better Than Takeout)', href: '/recipes/beef/beef-and-broccoli', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80', description: 'Oyster sauce, soy, sesame oil, cornstarch slurry. Ready in 30 minutes.' },
        { title: 'Classic Broccoli Salad', href: '/recipes/salad/classic', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', description: 'Raw broccoli, creamy dressing, bacon bits, dried cranberries, sunflower seeds.' },
        { title: 'Chicken Broccoli Rice Casserole', href: '/recipes/casserole/chicken-broccoli', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80', description: 'The classic family casserole — chicken, rice, broccoli, cheddar, cream of mushroom.' },
        { title: 'Roasted Broccoli', href: '/recipes/roasted', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', description: 'Crispy edges, tender insides. 425°F, 25 minutes, single layer.' },
        { title: 'Broccoli Pasta', href: '/recipes/pasta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80', description: 'Broccoli, garlic, olive oil, parmesan — a simple weeknight pasta that works.' },
        { title: 'All Soups', href: '/recipes/soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', description: 'Broccoli cheddar, cream of broccoli, broccoli cheese — every style.' },
        { title: 'All Salads', href: '/recipes/salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', description: 'Classic with bacon, broccoli salad with bacon, the perfect dressing ratio.' },
        { title: 'All Casseroles', href: '/recipes/casserole', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80', description: 'Broccoli rice, chicken broccoli, broccoli cheese casseroles.' },
      ]}
    />
  )
}
