import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Casserole Recipes',
  description: 'Classic broccoli casseroles — rice casserole, chicken broccoli bake, and broccoli cheese casserole. All made from scratch, no canned soup required.',
  keywords: ['broccoli casserole', 'broccoli casserole recipe', 'broccoli rice casserole'],
}

const CARDS = [
  {
    title: 'Broccoli Rice Casserole',
    href: '/recipes/casserole/broccoli-rice',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    description: 'Cheesy broccoli and rice baked together — a classic comfort dish that works as a main or side.',
    badge: 'Most Popular',
  },
  {
    title: 'Chicken Broccoli Casserole',
    href: '/recipes/casserole/chicken-broccoli',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80',
    description: 'Tender chicken and broccoli in a creamy sauce, topped with a crunchy breadcrumb crust.',
    badge: 'Family Favourite',
  },
  {
    title: 'Broccoli Cheese Casserole',
    href: '/recipes/casserole/broccoli-cheese',
    image: 'https://images.unsplash.com/photo-1612392062631-94e63af03b45?w=600&q=80',
    description: 'Pure broccoli and cheese — no chicken, no rice. The simplest version with maximum cheese pull.',
  },
]

export default function CasserolePage() {
  return (
    <HubTemplate
      title="Broccoli Casserole Recipes"
      description="Three from-scratch broccoli casseroles — no condensed soup, no shortcuts. Proper sauces, properly seasoned."
      image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80"
      imageAlt="Golden-topped broccoli casserole fresh from the oven"
      intro="Casseroles are where broccoli proves it can be the centrepiece rather than a side. These recipes all use a proper roux-based sauce — not condensed cream of mushroom soup. The result is better flavour, better texture, and you know exactly what is in it."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Recipes', href: '/recipes' },
        { label: 'Casserole', href: '/recipes/casserole' },
      ]}
    />
  )
}
