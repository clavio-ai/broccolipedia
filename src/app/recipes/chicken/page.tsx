import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Chicken and Broccoli Recipes',
  description: 'Chicken and broccoli recipes — stir fry, bake, and pasta. Quick weeknight dinners under 30 minutes.',
  keywords: ['chicken and broccoli recipe', 'chicken broccoli', 'easy chicken broccoli recipes'],
}

const CARDS = [
  {
    title: 'Chicken and Broccoli Stir Fry',
    href: '/recipes/chicken/chicken-broccoli',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80',
    description: 'Quick garlic-ginger stir fry with a light savoury sauce. Better than takeout and on the table in 20 minutes.',
    badge: 'Quick',
  },
]

export default function ChickenPage() {
  return (
    <HubTemplate
      title="Chicken and Broccoli Recipes"
      description="Chicken is broccoli's natural partner — it is mild enough to let the broccoli's flavour come through and substantial enough to make the dish a proper meal."
      image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80"
      imageAlt="Chicken and broccoli stir fry in a wok"
      intro="All three versions below work as weeknight dinners. The stir fry takes 20 minutes start to finish. The bake needs 45 minutes but most of that is unattended oven time."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Recipes', href: '/recipes' },
        { label: 'Chicken', href: '/recipes/chicken' },
      ]}
    />
  )
}
