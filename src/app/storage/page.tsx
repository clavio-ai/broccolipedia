import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'How to Store Broccoli: Fridge, Freezer, and Shelf Life',
  description: 'Store broccoli in the fridge unwashed for 3-5 days. Freeze it for up to 12 months. Signs of spoilage, best storage methods, and how to cut florets.',
  keywords: ['how to store broccoli', 'broccoli storage', 'how long does broccoli last', 'freeze broccoli'],
}

const CARDS = [
  {
    title: 'How to Freeze Broccoli',
    href: '/storage/how-to-freeze',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Blanch first, freeze in a single layer, store in bags. Lasts up to 12 months in the freezer.',
    badge: 'Preserve It',
  },
  {
    title: 'Broccoli Shelf Life',
    href: '/storage/shelf-life',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Fresh broccoli lasts 3-5 days in the fridge. How to maximise it, and why it yellows.',
  },
  {
    title: 'How to Cut Broccoli Florets',
    href: '/storage/how-to-cut-florets',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'The cut that minimises mess and maximises surface area for cooking. Stem-to-floret technique.',
  },
  {
    title: 'Is My Broccoli Bad?',
    href: '/storage/is-it-bad',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Yellow broccoli, soft spots, sliminess, and smell — what is safe to eat and what to throw out.',
  },
]

export default function StoragePage() {
  return (
    <HubTemplate
      title="How to Store Broccoli"
      description="Fresh broccoli deteriorates faster than most vegetables — it starts converting sugars to starch almost immediately after harvest. Cold slows this process significantly."
      image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80"
      imageAlt="Fresh broccoli stored in a refrigerator"
      intro="The single most important storage rule: keep broccoli cold and do not wash it until use. Moisture accelerates decay. A head of broccoli stored correctly in the fridge lasts 3-5 days. Improperly stored (in a warm kitchen, or washed and not dried), it deteriorates in 1-2 days."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Storage', href: '/storage' },
      ]}
    />
  )
}
