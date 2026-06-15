import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | BroccoliPedia',
    default: 'BroccoliPedia — Everything Broccoli, From Kitchen to Garden',
  },
  description:
    'BroccoliPedia is the definitive reference for broccoli: USDA-cited nutrition facts, tested recipes, growing guides, cooking methods, and pet safety — all in one place.',
  metadataBase: new URL('https://broccolipedia.com'),
  openGraph: {
    siteName: 'BroccoliPedia',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const siteSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://broccolipedia.com/#website',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    description: 'The definitive broccoli authority — recipes, nutrition science, growing, and facts.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://broccolipedia.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://broccolipedia.com/#organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/broccoli-mark.svg',
      width: 200,
      height: 200,
    },
    sameAs: ['https://en.wikipedia.org/wiki/Broccoli'],
    description:
      'BroccoliPedia is a single-topic authority site covering everything about broccoli: nutrition science, recipes, growing, storage, and facts. All content is grounded in USDA data and peer-reviewed research.',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="bg-white text-deepForest font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
