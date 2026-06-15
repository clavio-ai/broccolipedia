import Image from 'next/image'
import Link from 'next/link'
import AuthorByline from './AuthorByline'

interface HubCard {
  title: string
  href: string
  image: string
  description: string
  badge?: string
}

interface HubTemplateProps {
  title: string
  description: string
  image: string
  imageAlt: string
  intro: string
  cards: HubCard[]
  breadcrumb?: { label: string; href: string }[]
}

export default function HubTemplate({
  title,
  description,
  image,
  imageAlt,
  intro,
  cards,
  breadcrumb = [],
}: HubTemplateProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      {breadcrumb.length > 0 && (
        <nav className="mb-4 text-sm text-sage" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-forest transition-colors">
                Home
              </Link>
            </li>
            {breadcrumb.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-deepForest font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-forest transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Hero */}
      <header className="mb-10">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-sage leading-relaxed max-w-2xl mb-4">{description}</p>
        <AuthorByline />

        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <p className="text-deepForest leading-relaxed max-w-3xl">{intro}</p>
      </header>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <Link
            key={i}
            href={card.href}
            className="group block bg-white rounded-xl overflow-hidden border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
          >
            <div className="relative aspect-video">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {card.badge && (
                <span className="absolute top-3 left-3 bg-forest text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {card.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-serif font-bold text-lg text-deepForest group-hover:text-forest transition-colors leading-snug mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-sage leading-relaxed line-clamp-2">{card.description}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-forest group-hover:underline">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
