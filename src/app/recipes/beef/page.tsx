import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Beef and Broccoli Recipes',
  description: 'The definitive beef and broccoli recipe — restaurant-style sauce, tender beef, and crisp broccoli. Faster than takeout.',
  keywords: ['beef and broccoli recipe', 'Chinese beef and broccoli', 'beef broccoli stir fry'],
}

const CARDS = [
  {
    title: 'Beef and Broccoli',
    href: '/recipes/beef/beef-and-broccoli',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
    description: 'Restaurant-quality beef and broccoli with the glossy brown sauce. Faster than ordering.',
    badge: 'Most Popular',
  },
]

export default function BeefPage() {
  return (
    <HubTemplate
      title="Beef and Broccoli"
      description="The pairing of tender flank steak and crisp broccoli in a savoury-sweet soy sauce is one of the most searched recipes online for good reason — it is genuinely one of the best combinations in the category."
      image="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&q=80"
      imageAlt="Beef and broccoli stir fry in a wok with glossy sauce"
      intro="The secret to restaurant-style beef and broccoli is two things: velveting the beef (baking soda marinade) and making the sauce thick enough to cling. Both steps take less than 5 minutes extra."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Recipes', href: '/recipes' },
        { label: 'Beef', href: '/recipes/beef' },
      ]}
    />
  )
}
