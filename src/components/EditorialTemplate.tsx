import Image from 'next/image'
import Link from 'next/link'

interface FAQ {
  question: string
  answer: string
}

interface RelatedArticle {
  title: string
  href: string
  image: string
  description: string
}

interface ContentSection {
  heading: string
  body: string
  factBlock?: { title?: string; text: string }
  pullQuote?: string
  image?: string
  imageAlt?: string
  table?: { headers: string[]; rows: string[][] }
}

interface EditorialTemplateProps {
  title: string
  description: string
  image: string
  imageAlt: string
  keyTakeaways: string[]
  sections: ContentSection[]
  faqs: FAQ[]
  related: RelatedArticle[]
  schemaJson: Record<string, unknown>
}

export default function EditorialTemplate({
  title,
  description,
  image,
  imageAlt,
  keyTakeaways,
  sections,
  faqs,
  related,
  schemaJson,
}: EditorialTemplateProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-sage leading-relaxed mb-6">{description}</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </header>

        {/* Key Takeaways */}
        {keyTakeaways.length > 0 && (
          <div className="key-takeaways mb-8">
            <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
            <ul className="space-y-2">
              {keyTakeaways.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-deepForest">
                  <span className="text-forest font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content sections */}
        <div className="article-body space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
                {section.heading}
              </h2>

              <div
                className="text-deepForest leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />

              {section.image && (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden my-5">
                  <Image
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              )}

              {section.factBlock && (
                <div className="fact-block my-5">
                  <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">
                    {section.factBlock.title || 'Did you know?'}
                  </div>
                  <p className="text-sm text-deepForest leading-relaxed">{section.factBlock.text}</p>
                </div>
              )}

              {section.pullQuote && (
                <blockquote className="pull-quote my-5">
                  {section.pullQuote}
                </blockquote>
              )}

              {section.table && (
                <div className="overflow-x-auto my-5">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-deepForest text-white">
                        {section.table.headers.map((h, hi) => (
                          <th key={hi} className="px-4 py-2 text-left font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className={ri % 2 === 0 ? 'bg-white' : 'bg-greenTint'}
                        >
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-2 text-deepForest border-b border-greenTint">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <div className="mt-10 border-t border-greenTint pt-8">
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-greenTint rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sage text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-greenTint pt-8">
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="group block bg-white rounded-xl overflow-hidden border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif font-semibold text-base text-deepForest group-hover:text-forest transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-sage mt-1 line-clamp-2">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
