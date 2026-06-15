import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Facts: History, Origins, and Comparisons',
  description: 'Is broccoli man-made? What is the history of broccoli? How does it compare to cauliflower and kale? Fact-checked answers to common broccoli questions.',
  keywords: ['broccoli facts', 'is broccoli man made', 'broccoli history', 'broccoli vs cauliflower', 'broccoli vs kale'],
}

const CARDS = [
  {
    title: 'Is Broccoli Man-Made?',
    href: '/facts/is-broccoli-man-made',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Yes — but so are most vegetables. Broccoli was selectively bred from wild mustard in ancient Italy. What that means (and what it does not mean).',
    badge: 'Most Asked',
  },
  {
    title: 'History of Broccoli',
    href: '/facts/history',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'From ancient Rome to Thomas Jefferson\'s garden. How broccoli spread from Italy to the world.',
  },
  {
    title: 'Broccoli vs Cauliflower',
    href: '/facts/broccoli-vs-cauliflower',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Nutrition, flavour, cooking differences. Which is healthier? Data-grounded comparison.',
    badge: 'Comparison',
  },
  {
    title: 'Broccoli vs Kale',
    href: '/facts/broccoli-vs-kale',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    description: 'Two different nutritional profiles — kale is higher in vitamin K, broccoli has more vitamin C and sulforaphane. The actual data.',
    badge: 'Comparison',
  },
  {
    title: 'Types of Broccoli',
    href: '/facts/types',
    image: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=600&q=80',
    description: 'Calabrese, sprouting, broccoli rabe, broccolini, romanesco. What makes each one different.',
  },
]

export default function FactsPage() {
  return (
    <HubTemplate
      title="Broccoli Facts"
      description="Answers to the most common questions about broccoli — its origins, history, and how it compares to other vegetables. All data-grounded."
      image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80"
      imageAlt="Fresh broccoli heads in a market"
      intro="Broccoli generates unusually strong opinions for a vegetable — people want to know whether it is natural, whether it is healthy, and how it compares to the other green vegetables competing for space on the plate."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Facts', href: '/facts' },
      ]}
    />
  )
}
