import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Can Pets Eat Broccoli? Dogs, Cats, and Chickens',
  description: 'Can dogs eat broccoli? Can cats eat broccoli? Can chickens eat broccoli? Vet-aligned answers for each pet with safe serving guidance.',
  keywords: ['can dogs eat broccoli', 'can cats eat broccoli', 'can chickens eat broccoli', 'pets and broccoli'],
}

const CARDS = [
  {
    title: 'Can Dogs Eat Broccoli?',
    href: '/pets/can-dogs-eat-broccoli',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    description: 'Yes — in moderation. Broccoli is safe for dogs but the florets contain isothiocyanates that can cause gastric irritation in large amounts.',
    badge: 'Safe in moderation',
  },
  {
    title: 'Can Cats Eat Broccoli?',
    href: '/pets/can-cats-eat-broccoli',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80',
    description: 'Yes — broccoli is non-toxic to cats. Most cats show no interest, but it is safe if they eat a small amount.',
    badge: 'Safe',
  },
  {
    title: 'Can Chickens Eat Broccoli?',
    href: '/pets/can-chickens-eat-broccoli',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
    description: 'Yes — chickens enjoy broccoli. A good use for stems, heads, and leaves that would otherwise go to waste.',
    badge: 'Safe',
  },
]

export default function PetsPage() {
  return (
    <HubTemplate
      title="Can Pets Eat Broccoli?"
      description="Broccoli is non-toxic to most pets, but 'non-toxic' and 'healthy snack' are not the same thing. Quantity matters, and different pets have different digestive tolerances."
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80"
      imageAlt="Dog looking at a piece of broccoli"
      intro="The isothiocyanate compounds that give broccoli its health benefits in humans can cause gastric irritation in dogs if given in large amounts. For cats, the more relevant issue is that cats are obligate carnivores and have no nutritional need for vegetables. For chickens, broccoli is genuinely a useful treat."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Pets', href: '/pets' },
      ]}
    />
  )
}
