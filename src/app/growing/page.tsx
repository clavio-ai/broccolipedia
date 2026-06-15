import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'How to Grow Broccoli: Complete Guide',
  description: 'Grow broccoli at home — from seed, in containers, companion planting, when to harvest. Cool-season vegetable that thrives in spring and fall.',
  keywords: ['how to grow broccoli', 'growing broccoli', 'broccoli growing guide', 'when to harvest broccoli'],
}

const CARDS = [
  {
    title: 'Growing Broccoli from Seed',
    href: '/growing/from-seed',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    description: 'Start seeds indoors 6-8 weeks before last frost. Transplant timing, hardening off, direct sow vs. indoor start.',
    badge: 'Start Here',
  },
  {
    title: 'Companion Plants for Broccoli',
    href: '/growing/companion-plants',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    description: 'Plants that benefit broccoli (dill, marigolds, onions) and plants to keep away (strawberries, tomatoes).',
  },
  {
    title: 'When to Harvest Broccoli',
    href: '/growing/when-to-harvest',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    description: 'The tight-bud window. How to know before it flowers. What happens if you miss it.',
    badge: 'Most Important',
  },
  {
    title: 'Growing Broccoli in Containers',
    href: '/growing/in-containers',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    description: 'Minimum pot size (5 gallons), varieties that work in containers, balcony growing guide.',
  },
]

export default function GrowingPage() {
  return (
    <HubTemplate
      title="How to Grow Broccoli"
      description="Broccoli is a cool-season crop — it actively resists heat. Understanding this one fact makes everything else about growing it make sense."
      image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
      imageAlt="Broccoli plants growing in a garden"
      intro="Broccoli grows best when daytime temperatures are between 65°F and 75°F (18-24°C). It bolts (flowers and turns bitter) quickly in summer heat. In most climates, this means spring planting for late spring/early summer harvest, or late summer planting for fall harvest. The fall crop is often better — the head quality improves as temperatures cool toward harvest."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Growing', href: '/growing' },
      ]}
    />
  )
}
