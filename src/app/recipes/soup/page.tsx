import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Soup Recipes: Every Style from Cheddar to Cream',
  description: 'The best broccoli soup recipes — broccoli cheddar (114K searches/mo), cream of broccoli, broccoli cheese. Tested and written with real USDA nutrition data.',
  keywords: ['broccoli soup', 'broccoli soup recipe', 'broccoli cheddar soup', 'cream of broccoli soup'],
}

export default function SoupHubPage() {
  return (
    <HubTemplate
      title="Broccoli Soup Recipes"
      description="Three distinct broccoli soup styles — thick and cheesy, blended smooth, or chunky comfort food. Each with a full recipe, nutrition card, and FAQ."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Bowl of broccoli cheddar soup with steam rising"
      intro="Broccoli cheddar soup is the most-searched single broccoli recipe at 114,000 searches per month. Below are three distinct versions — each serves a different preference."
      breadcrumb={[{ label: 'Recipes', href: '/recipes' }, { label: 'Soups', href: '/recipes/soup' }]}
      cards={[
        { title: 'Broccoli Cheddar Soup (Better Than Panera)', href: '/recipes/soup/broccoli-cheddar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', description: 'Thick, rich, better than the restaurant version. Sharp cheddar, heavy cream, broccoli.', badge: '114K/mo' },
        { title: 'Cream of Broccoli Soup', href: '/recipes/soup/cream-of-broccoli', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', description: 'Blended smooth. Lighter than cheddar, more elegant. Crème fraîche finish.' },
        { title: 'Broccoli Cheese Soup', href: '/recipes/soup/broccoli-cheese', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', description: 'Chunky style, velveeta-free. Real cheese, real broccoli pieces, comfort food.' },
      ]}
    />
  )
}
