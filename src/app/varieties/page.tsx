import type { Metadata } from 'next'
import HubTemplate from '@/components/HubTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Varieties: Rabe, Broccolini, Chinese Broccoli, Romanesco',
  description: 'The complete guide to broccoli varieties — what makes each one different, how to cook them, and when to use each.',
  keywords: ['types of broccoli', 'broccoli varieties', 'broccolini vs broccoli', 'broccoli rabe'],
}

const CARDS = [
  {
    title: 'Broccoli Rabe (Rapini)',
    href: '/varieties/broccoli-rabe',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
    description: 'Intensely bitter Italian green. Not closely related to broccoli despite the name. The classic of southern Italian cooking.',
    badge: 'Most Bitter',
  },
  {
    title: 'Chinese Broccoli (Gai Lan)',
    href: '/varieties/chinese-broccoli',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
    description: 'Thick stems, small florets, slightly bitter. The standard vegetable in Cantonese cuisine. More stem than head.',
    badge: 'Most Used in Asian Cuisine',
  },
  {
    title: 'Broccolini',
    href: '/varieties/broccolini',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    description: 'A hybrid of broccoli and gai lan. Thin stems, mild flavour, no bitter edge. The most versatile of the group.',
    badge: 'Mildest',
  },
  {
    title: 'Romanesco',
    href: '/varieties/romanesco',
    image: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=600&q=80',
    description: 'Lime green fractal spirals. Nutty, mild, less pungent than standard broccoli. A showpiece vegetable.',
  },
]

export default function VarietiesPage() {
  return (
    <HubTemplate
      title="Broccoli Varieties"
      description="Standard broccoli (Brassica oleracea italica) is the default, but the broader family includes several distinct vegetables that are each worth understanding."
      image="https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=1200&q=80"
      imageAlt="Different varieties of broccoli and related vegetables"
      intro="These vegetables share common ancestry in wild mustard (Brassica oleracea) but diverged significantly in flavour, texture, and use over thousands of years of cultivation. Knowing the differences helps you choose the right one for a dish — and stops you over-cooking the delicate ones."
      cards={CARDS}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Varieties', href: '/varieties' },
      ]}
    />
  )
}
