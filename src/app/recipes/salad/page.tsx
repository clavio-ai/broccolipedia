import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Salad Recipes: Classic, Bacon, Dressing',
  description: 'The best broccoli salad recipes — the classic with creamy dressing and bacon (38K/mo), broccoli salad with bacon, and the perfect dressing ratio.',
  keywords: ['broccoli salad', 'broccoli salad recipe', 'broccoli salad with bacon'],
}

export default function SaladHubPage() {
  return (
    <HubTemplate
      title="Broccoli Salad Recipes"
      description="Raw broccoli salads with creamy dressings — the classic is one of the most-searched broccoli recipes at 38,000 searches per month."
      image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80"
      imageAlt="Classic broccoli salad in a large white bowl with creamy dressing"
      intro="These salads use raw broccoli — no cooking required, maximum Vitamin C preserved, and the crunchy texture works better in a salad than softened florets would."
      breadcrumb={[{ label: 'Recipes', href: '/recipes' }, { label: 'Salads', href: '/recipes/salad' }]}
      cards={[
        { title: 'Classic Broccoli Salad', href: '/recipes/salad/classic', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', description: 'Raw broccoli, mayo dressing, bacon bits, dried cranberries, red onion, sunflower seeds.', badge: '38K/mo' },
        { title: 'Broccoli Salad with Bacon', href: '/recipes/salad/with-bacon', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', description: 'Bacon-forward version with slightly less dressing and more crunch.' },
        { title: 'Broccoli Salad Dressing', href: '/recipes/salad/dressing', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', description: 'The mayo + apple cider vinegar + sugar ratio that makes the dressing work.' },
      ]}
    />
  )
}
