import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is Broccoli? Origin, Types, Nutrition, and Uses',
  description: 'Broccoli (Brassica oleracea var. italica) is a man-made flowering vegetable bred from wild Mediterranean cabbage starting in 6th century BCE Rome. Full botanical and nutritional overview.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Broccoli? Origin, Types, Nutrition, and Uses',
  description: 'Botanical definition, origin, types, nutrition, and global uses of broccoli — the man-made flowering vegetable bred from wild Mediterranean cabbage.',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia', url: 'https://broccolipedia.com' },
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    logo: { '@type': 'ImageObject', url: 'https://broccolipedia.com/broccoli-mark.svg' },
  },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Broccoli',
  description: 'Broccoli (Brassica oleracea var. italica) is a flowering vegetable in the family Brassicaceae, selectively bred from wild Mediterranean cabbage by Roman farmers starting around the 6th century BCE.',
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'BroccoliPedia Glossary',
    url: 'https://broccolipedia.com/glossary',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is broccoli exactly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli (Brassica oleracea var. italica) is a flowering vegetable in the cabbage family (Brassicaceae). The edible part is the immature flower head — the tight cluster of green flower buds and stems before they bloom. It was selectively bred from wild Mediterranean cabbage by Roman farmers starting around the 6th century BCE.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does the word broccoli come from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The word "broccoli" comes from the Italian "broccolo," which means "flowering crest of cabbage" or "little sprout." The word derives from "brocco," meaning arm branch or shoot. It reflects the plant\'s branching, tree-like structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What family does broccoli belong to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli belongs to the family Brassicaceae (also called Cruciferae or the mustard family). Its full classification: Kingdom Plantae, Order Brassicales, Family Brassicaceae, Genus Brassica, Species Brassica oleracea, Variety italica. It shares this species with cabbage, cauliflower, kale, Brussels sprouts, and kohlrabi.',
      },
    },
  ],
}

export default function WhatIsBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          What Is Broccoli? Origin, Types, Nutrition, and Uses
        </h1>
        <p className="text-lg text-sage leading-relaxed mb-8">
          Broccoli (Brassica oleracea var. italica) is a flowering vegetable bred from wild Mediterranean cabbage by Roman farmers starting around the 6th century BCE. Here is the complete botanical definition, history, nutritional profile, and a guide to the main types.
        </p>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Botanical Definition</h2>
          <p className="text-deepForest leading-relaxed mb-4">Broccoli is classified as <em>Brassica oleracea var. italica</em> — a cultivar of wild cabbage in the family Brassicaceae. What we eat is the plant&apos;s immature flowering head: a dense cluster of tightly packed, unopened green flower buds attached to thick edible stems. Left to mature, the buds open into small yellow flowers — at which point the vegetable turns bitter and fibrous and is no longer desirable as food.</p>
          <p className="text-deepForest leading-relaxed">The plant grows as an annual or biennial, reaching 60-90cm in height. The main crown (the central head) is harvested first; smaller side shoots continue to produce after the main harvest if the plant is not pulled. Broccoli belongs to the same species as cauliflower, kale, cabbage, Brussels sprouts, and kohlrabi — all derived from the same wild Mediterranean plant through thousands of years of selective breeding.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Origin and Etymology</h2>
          <p className="text-deepForest leading-relaxed mb-4">The word broccoli comes from the Italian <em>broccolo</em>, meaning &ldquo;flowering crest of cabbage&rdquo; or &ldquo;little sprout,&rdquo; from <em>brocco</em> (arm branch, shoot). This name reflects the plant&apos;s branching, tree-like growth structure.</p>
          <p className="text-deepForest leading-relaxed">Roman farmers developed broccoli through selective breeding of wild Brassica oleracea starting around the 6th century BCE. Roman writers including Pliny the Elder documented it extensively. Broccoli spread through Italy during the Renaissance. It arrived in England in the 18th century, initially called &ldquo;Italian asparagus.&rdquo; The first recorded broccoli cultivation in North America was by Thomas Jefferson, who grew it at Monticello in 1767, though commercial production did not begin in the United States until Italian immigrants brought it to California in the early 20th century.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Nutrition Summary (USDA Data)</h2>
          <p className="text-sm text-sage mb-4">Per 100g raw broccoli — Source: USDA FoodData Central FDC ID 170379</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-deepForest text-white">
                  <th className="px-4 py-2 text-left">Nutrient</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">% DV</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Calories', '34 kcal', '—'],
                  ['Protein', '2.82g', '6%'],
                  ['Total Carbohydrates', '6.64g', '2%'],
                  ['Dietary Fiber', '2.6g', '9%'],
                  ['Total Fat', '0.37g', '0%'],
                  ['Vitamin C', '89.2mg', '99%'],
                  ['Vitamin K', '101.6mcg', '85%'],
                  ['Folate', '63mcg', '16%'],
                  ['Potassium', '316mg', '7%'],
                  ['Calcium', '47mg', '4%'],
                ].map(([nutrient, amount, pct], i) => (
                  <tr key={nutrient} className={i % 2 === 0 ? 'bg-white' : 'bg-greenTint'}>
                    <td className="px-4 py-2 border-b border-greenTint">{nutrient}</td>
                    <td className="px-4 py-2 border-b border-greenTint">{amount}</td>
                    <td className="px-4 py-2 border-b border-greenTint">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Types of Broccoli</h2>
          <div className="space-y-3">
            {[
              { name: 'Calabrese Broccoli', desc: 'The standard supermarket variety. Large, tight crown, bluish-green color. Named for Calabria, Italy. Most common globally.', href: '/varieties' },
              { name: 'Broccolini', desc: 'A hybrid of broccoli and Chinese broccoli developed in Japan (1990s). Long thin stems, small loose florets, milder and sweeter flavor.', href: '/varieties/broccolini' },
              { name: 'Broccoli Rabe (Rapini)', desc: 'Despite the name, rapini is Brassica rapa — more closely related to turnips than broccoli. Smaller florets, more bitter flavor, higher glucosinolate intensity.', href: '/varieties/broccoli-rabe' },
              { name: 'Chinese Broccoli (Gai Lan)', desc: 'Brassica oleracea var. alboglabra. Thick stems, small florets, large flat leaves. Prominent in Chinese cuisine; more bitter than Calabrese.', href: '/varieties/chinese-broccoli' },
              { name: 'Romanesco', desc: 'Mathematically striking fractal spiral pattern. Milder, nuttier flavor. Technically Brassica oleracea var. botrytis — closer to cauliflower than broccoli.', href: '/varieties/romanesco' },
            ].map((type) => (
              <div key={type.name} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-base text-deepForest mb-1">
                  <Link href={type.href} className="hover:text-forest transition-colors">{type.name}</Link>
                </h3>
                <p className="text-sm text-sage leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">What is broccoli exactly?</h3>
              <p className="text-sage text-sm leading-relaxed">Broccoli is the immature flower head of Brassica oleracea var. italica — a cultivated variety of wild Mediterranean cabbage selectively bred by Roman farmers starting around the 6th century BCE.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Where does the word broccoli come from?</h3>
              <p className="text-sage text-sm leading-relaxed">From the Italian broccolo, meaning &ldquo;flowering crest of cabbage&rdquo; — from brocco, meaning arm branch or shoot. It reflects the branching, tree-like structure of the plant.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">What family does broccoli belong to?</h3>
              <p className="text-sage text-sm leading-relaxed">Family Brassicaceae (the mustard/cabbage family). Full classification: Brassica oleracea var. italica. Same species as cauliflower, kale, cabbage, Brussels sprouts, and kohlrabi.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Go Deeper</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/varieties" className="text-forest text-sm font-medium hover:underline">All Broccoli Types</Link>
            <Link href="/nutrition" className="text-forest text-sm font-medium hover:underline">Full Nutrition Data</Link>
            <Link href="/facts/history" className="text-forest text-sm font-medium hover:underline">Broccoli History</Link>
            <Link href="/facts/is-broccoli-man-made" className="text-forest text-sm font-medium hover:underline">Is Broccoli Man-Made?</Link>
            <Link href="/glossary" className="text-forest text-sm font-medium hover:underline">Broccoli Glossary</Link>
          </div>
        </div>
      </article>
    </>
  )
}
