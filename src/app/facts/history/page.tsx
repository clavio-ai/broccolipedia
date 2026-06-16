import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AuthorByline from '@/components/AuthorByline'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'History of Broccoli: From Ancient Mediterranean Wild Cabbage to Your Kitchen',
  description:
    'Broccoli was engineered from wild Mediterranean cabbage by Etruscan farmers around 600 BCE. It reached America only in the 1930s, thanks to Italian and Japanese immigrant farmers in California.',
  keywords: [
    'history of broccoli',
    'is broccoli man-made',
    'history of broccoli in america',
    'when was broccoli invented',
    'is broccoli natural',
    'who invented broccoli',
    'broccoli origin',
  ],
  openGraph: {
    title: 'History of Broccoli: From Ancient Mediterranean Wild Cabbage to Your Kitchen',
    description:
      'The full story of how Etruscan farmers engineered broccoli from wild cabbage 2,600 years ago, how it came to America, and why it is one of the most human-made vegetables in existence.',
    url: 'https://broccolipedia.com/facts/history',
    type: 'article',
    images: [
      {
        url: '/images/broccoli-history/broccoli-history-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli head on a weathered wooden surface, natural light — symbolising 2,600 years of cultivated history',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/facts/history',
  },
}

// ─── Schema ──────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/facts/history#article',
  headline: 'History of Broccoli: From Mediterranean Wild Cabbage to Your Kitchen',
  description:
    'Broccoli was engineered from wild Mediterranean cabbage by Etruscan farmers around 600 BCE. The full story of how it was invented, spread across Europe, and arrived in American kitchens.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/broccoli-history/broccoli-history-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
    sameAs: [
      'https://www.tiktok.com/@elenasainda',
      'https://www.youtube.com/@adelevlogs',
      'https://www.facebook.com/elena.ignacio',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/broccoli-mark.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/facts/history',
  },
  // WikiData-linked entities extracted via TextRazor
  mentions: [
    { '@type': 'Person', name: 'Pliny the Elder', sameAs: 'https://www.wikidata.org/wiki/Q82778' },
    { '@type': 'Person', name: 'Catherine de Medici', sameAs: 'https://www.wikidata.org/wiki/Q131552' },
    { '@type': 'Person', name: 'George H.W. Bush', sameAs: 'https://www.wikidata.org/wiki/Q23505' },
    { '@type': 'Thing', name: 'Brassica oleracea', sameAs: 'https://www.wikidata.org/wiki/Q146212' },
    { '@type': 'Thing', name: 'Broccoli', sameAs: 'https://www.wikidata.org/wiki/Q47722' },
    { '@type': 'Thing', name: 'Cauliflower', sameAs: 'https://www.wikidata.org/wiki/Q7537' },
    { '@type': 'Thing', name: 'Brussels sprout', sameAs: 'https://www.wikidata.org/wiki/Q150463' },
    { '@type': 'Thing', name: 'Sulforaphane', sameAs: 'https://www.wikidata.org/wiki/Q424489' },
    { '@type': 'Thing', name: 'Vitamin C', sameAs: 'https://www.wikidata.org/wiki/Q199678' },
    { '@type': 'Book', name: 'Naturalis Historia', sameAs: 'https://www.wikidata.org/wiki/Q442' },
    { '@type': 'Place', name: 'Italy', sameAs: 'https://www.wikidata.org/wiki/Q38' },
    { '@type': 'Place', name: 'China', sameAs: 'https://www.wikidata.org/wiki/Q148' },
    { '@type': 'Place', name: 'Sicily', sameAs: 'https://www.wikidata.org/wiki/Q1460' },
    { '@type': 'Place', name: 'San Jose, California', sameAs: 'https://www.wikidata.org/wiki/Q16553' },
    { '@type': 'Place', name: 'Boston', sameAs: 'https://www.wikidata.org/wiki/Q100' },
    { '@type': 'Place', name: 'Mediterranean Sea', sameAs: 'https://www.wikidata.org/wiki/Q4918' },
    { '@type': 'Place', name: 'Japan', sameAs: 'https://www.wikidata.org/wiki/Q17' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer', 'h2'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://broccolipedia.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Facts',
      item: 'https://broccolipedia.com/facts',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'History of Broccoli',
      item: 'https://broccolipedia.com/facts/history',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Did broccoli ever exist in the wild?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli was created by selective breeding of wild Mediterranean cabbage (Brassica oleracea) by Etruscan farmers around 600 BCE. The dense green florets we recognize did not exist in nature before humans cultivated them.',
      },
    },
    {
      '@type': 'Question',
      name: 'When was broccoli first eaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Around 600 BCE in the Etruscan Mediterranean. By the 1st century CE, Pliny the Elder was documenting it in Roman writing. Broccoli has been continuously cultivated for approximately 2,600 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who brought broccoli to America?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The D\'Arrigo brothers (Stefan and Andero, from Messina, Sicily) began commercial farming in San Jose, California in the 1920s, selling first to Italian immigrant communities. Japanese farmers in California in the 1930s expanded supply at scale and made it accessible to mainstream American kitchens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is broccoli called a man-made vegetable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because it is one. Broccoli does not occur naturally. It was engineered through selective breeding from wild coastal cabbage by Etruscan farmers starting around 600 BCE. Every modern broccoli head descends from those deliberate human choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which country produces the most broccoli in the world?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'China is both the world\'s largest producer and largest consumer of broccoli. Within the United States, California grows approximately 90% of domestic broccoli production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between broccoli and broccolini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccolini is a hybrid developed in Japan in the 1990s, crossing broccoli with Chinese broccoli (gai lan). It has longer stems, smaller florets, and a milder flavor. It is not young broccoli. Broccoli rabe (rapini) is a separate plant, more closely related to turnips, with a sharper, more bitter taste.',
      },
    },
  ],
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function BroccoliHistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-5">
          <ol className="flex items-center gap-1.5 list-none p-0 m-0">
            <li><Link href="/" className="hover:text-forest transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li><Link href="/facts" className="hover:text-forest transition-colors">Facts</Link></li>
            <li aria-hidden="true" className="text-sage/50">/</li>
            <li className="text-deepForest font-medium">History of Broccoli</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
            History of Broccoli: From Mediterranean Wild Cabbage to Your Kitchen
          </h1>

          <AuthorByline datePublished="2026-06-16" />

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/broccoli-history/broccoli-history-hero-broccoli-feature.webp"
              alt="Broccoli head on a weathered wooden surface in natural warm light, evoking 2,600 years of cultivation history"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </header>

        {/* Opening paragraph — Elena's personal moment */}
        <p className="text-deepForest leading-relaxed mb-5 text-base sm:text-lg">
          Alfi was three when he decided broccoli was only edible if it stood upright on his plate, stem down, crown up, like a tiny tree in a proper forest. Adam told him this was the most ridiculous thing he had ever heard. Alfi ate his broccoli. Adam did not. I think about this now, because it turns out Alfi named the thing better than anyone in two thousand years of food history. Broccoli is a man-made tree. Humans decided to grow it that way. Nothing like it existed before we made it.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          Broccoli was developed around the 6th century BCE by Etruscan farmers through selective breeding of wild Mediterranean cabbage. It reached France in 1533, England in the 1700s, and became common in American kitchens only in the mid-to-late 1930s, thanks to Italian and Japanese immigrant farmers in California.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-greenTint border border-forest/20 rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-base text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2">
            {[
              'Broccoli is entirely man-made — it does not exist in nature and never has.',
              'Etruscan farmers developed it from wild Brassica oleracea around 600 BCE.',
              'It reached mainstream American kitchens in the mid-to-late 1930s, not the 1920s.',
              'Japanese farmers in California in the 1930s were central to making it widely available — a fact almost no articles mention.',
              'Broccoli has more vitamin C per gram than an orange (USDA FDC 170379).',
            ].map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-deepForest">
                <span className="text-forest font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article body */}
        <div className="article-body space-y-8">

          {/* Section 1 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Did Broccoli Ever Grow in the Wild?
            </h2>
            <p className="text-deepForest leading-relaxed mb-3">
              No. This is the part most people do not expect. Broccoli does not exist in nature.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              It started with wild cabbage, <em>Brassica oleracea</em>, a scraggly coastal plant native to the Mediterranean and Asia Minor. By itself it is unremarkable. Etruscan farmers in what is now Tuscany saw something in it around 600 BCE. They bred it to develop dense, compact flower heads before the plant flowered and turned tough. Over generations, selecting for those tight green florets and edible stems, they created something that had not existed before.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              The Romans took it further. Pliny the Elder wrote about a plant called <em>cyma</em> in his <em>Naturalis Historia</em> (c. 77 CE), and most food historians read this as an early form of broccoli. Romans ate it boiled with spices, olive oil, and wine. It was a kitchen staple.
            </p>
            <div className="fact-block bg-greenTint/60 border-l-4 border-forest rounded-r-xl p-4 my-4">
              <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Did you know?</p>
              <p className="text-sm text-deepForest leading-relaxed">
                Broccoli and cauliflower are genetically almost indistinguishable to botanists. Same species, <em>Brassica oleracea</em>, shaped in two completely different directions. One went white and compact, one stayed green and tree-shaped.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              When Was Broccoli First Eaten?
            </h2>
            <p className="text-deepForest leading-relaxed mb-3">
              The Etruscans were selecting for early broccoli forms around 600 BCE. By the 1st century CE, Roman writers were documenting it as established food. That makes broccoli roughly 2,600 years old as a cultivated vegetable.
            </p>
            <p className="text-deepForest leading-relaxed">
              Its scientific name, <em>Brassica oleracea</em> var. <em>italica</em>, was formally assigned in 1794 by botanist Joseph Jakob von Plenck. The word broccoli comes from the Italian <em>broccolo</em>, meaning &ldquo;flowering crest of a cabbage,&rdquo; from <em>brocco</em>, arm branch. Alfi&apos;s &ldquo;tiny tree&rdquo; and the Roman &ldquo;flowering crest&rdquo; are describing the same geometry, two and a half millennia apart.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              How Did Broccoli Spread Across Europe?
            </h2>
            <p className="text-deepForest leading-relaxed mb-3">
              For most of those centuries, broccoli stayed in Italy. That changed in 1533 when Catherine de Medici of Florence married Henry II of France, arriving in Paris with Italian chefs and Italian vegetables. Broccoli came with her.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              It reached England in the 1700s, where it was called &ldquo;Italian asparagus.&rdquo; For anyone with northern European ancestry, broccoli is a very recent food. Southern Europeans had been eating it for over two thousand years before northern Europeans ever saw it. Year-round availability is an industrial-era development. Broccoli was historically a fall vegetable.
            </p>
            <p className="text-deepForest leading-relaxed">
              Thomas Jefferson grew it at Monticello from seeds imported from Italy, starting in 1767. It never spread from his garden into American cooking. It remained a curiosity.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Who Brought Broccoli to America?
            </h2>
            <p className="text-deepForest leading-relaxed mb-3">
              Two groups of people, and the second is almost never mentioned.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              Stefan and Andero D&apos;Arrigo, brothers from Messina in Sicily, planted broccoli in San Jose, California in the 1920s. They shipped the first crates by refrigerated rail car to the Italian immigrant community in Boston. It sold out immediately. Italian-Americans recognized what they were buying.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              But what brought broccoli into mainstream American kitchens was Japanese farmers in California. In the 1930s, those farmers had been pushed out of other crops by racial discrimination. Broccoli was available to them, and they farmed it at scale. That expanded supply was what made it accessible to everyday American kitchens.
            </p>
            <div className="fact-block bg-greenTint/60 border-l-4 border-forest rounded-r-xl p-4 my-4">
              <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-1">Timeline correction</p>
              <p className="text-sm text-deepForest leading-relaxed">
                Most Americans did not see broccoli regularly until the mid-to-late 1930s. The standard claim that it went mainstream &ldquo;in the 1920s&rdquo; is not quite right. Closer to 1935 to 1940.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Why Do Broccoli, Kale, and Cauliflower Look So Different?
            </h2>
            <p className="text-deepForest leading-relaxed">
              They all come from <em>Brassica oleracea</em>, wild Mediterranean cabbage. Kale selected for leaf growth. Cauliflower went white and compact. Broccoli went to dense green florets on branching stems. Brussels sprouts selected for buds along the stalk. Same starting point, completely different destinations, shaped by what farmers wanted. They are long-lost cousins who look nothing alike because humans had completely different plans for each of them.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              What About George H.W. Bush?
            </h2>
            <p className="text-deepForest leading-relaxed">
              He hated broccoli so much he banned it from Air Force One entirely. Not from his own plate. From the plane. He announced this in 1990. Broccoli farmers responded by shipping truckloads to Washington. Two and a half thousand years after the Etruscans invented it, this vegetable still divides a room.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
              Does Broccoli Actually Have More Vitamin C Than an Orange?
            </h2>
            <p className="text-deepForest leading-relaxed mb-3">
              Yes. Raw broccoli contains 89.2 mg of vitamin C per 100g{' '}
              <cite className="text-sage text-sm not-italic">(USDA FDC 170379)</cite>, compared to about 53 mg per 100g for a navel orange. One cup of chopped broccoli has roughly as much vitamin C as an entire orange. I spent years trying to keep Adam and Alfi healthy on the road, and this still surprises me. The vegetable they most wanted to reject was doing more for their immune systems than the fruit they actually wanted.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              Sulforaphane forms when you chop or chew broccoli: myrosinase converts glucoraphanin, and the compound releases. Research suggests sulforaphane is among the most studied compounds of its kind in any vegetable.{' '}
              <cite className="text-sage text-sm not-italic">(MD Anderson Cancer Center)</cite> Broccoli sprouts grown for three days contain 20 to 50 times more glucoraphanin than mature broccoli.{' '}
              <cite className="text-sage text-sm not-italic">(Talalay et al, Johns Hopkins, PNAS 1997)</cite> These are research findings, not cure claims. The science is real and still ongoing.
            </p>
            <p className="text-deepForest leading-relaxed">
              The Etruscans built something that survived 2,600 years not because of marketing. Because it is good food.
            </p>

            {/* Internal links */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/facts/nutrition" className="text-forest text-sm font-medium hover:underline">
                Full Nutritional Data for Broccoli &rarr;
              </Link>
              <Link href="/cooking/how-to-steam-broccoli" className="text-forest text-sm font-medium hover:underline">
                How to Steam Broccoli Without Losing Nutrients &rarr;
              </Link>
            </div>
          </section>

        </div>

        {/* FAQ section */}
        <div className="mt-10 border-t border-greenTint pt-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Did broccoli ever exist in the wild?',
                a: 'No. Broccoli was created by selective breeding of wild Mediterranean cabbage (Brassica oleracea) by Etruscan farmers around 600 BCE. The dense green florets we recognize did not exist in nature before humans cultivated them.',
              },
              {
                q: 'When was broccoli first eaten?',
                a: 'Around 600 BCE in the Etruscan Mediterranean. By the 1st century CE, Pliny the Elder was documenting it in Roman writing. Broccoli has been continuously cultivated for approximately 2,600 years.',
              },
              {
                q: 'Who brought broccoli to America?',
                a: "The D'Arrigo brothers (Stefan and Andero, from Messina, Sicily) began commercial farming in San Jose, California in the 1920s, selling first to Italian immigrant communities. Japanese farmers in California in the 1930s then expanded supply at scale and made it accessible to mainstream American kitchens.",
              },
              {
                q: 'Why is broccoli called a man-made vegetable?',
                a: 'Because it is one. Broccoli does not occur naturally. It was engineered through selective breeding from wild coastal cabbage. Every modern broccoli head descends from those deliberate human choices.',
              },
              {
                q: 'Which country produces the most broccoli in the world?',
                a: 'China is both the largest producer and largest consumer. California grows approximately 90% of US domestic broccoli.',
              },
              {
                q: 'What is the difference between broccoli and broccolini?',
                a: 'Broccolini is a hybrid developed in Japan in the 1990s, crossing broccoli with Chinese broccoli (gai lan). Longer stems, smaller florets, milder flavor. It is not young broccoli. Broccoli rabe (rapini) is different again, more closely related to turnips, with a sharper, more bitter taste.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-base text-deepForest mb-2">
                  {faq.q}
                </h3>
                <p className="text-sage text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ol className="space-y-1.5 text-xs text-sage list-decimal list-inside">
            <li>USDA FoodData Central. (2019). Broccoli, raw. FDC ID 170379. <a href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">fdc.nal.usda.gov</a></li>
            <li>Talalay, P., et al. (1997). Chemoprotection against cancer by phase 2 enzyme induction. <em>PNAS, 94</em>(19), 10367-10372. Johns Hopkins University.</li>
            <li>Plenck, J.J. von. (1794). <em>Icones Plantarum Medicinalium</em>. Vienna. [Formal description of <em>Brassica oleracea</em> var. <em>italica</em>]</li>
            <li>History by the Plate. (2017). <em>The History of Broccoli and Its Benefits</em> [Video]. YouTube. ID: fdfC3ehQdG0</li>
            <li>The Seasonal Diet. (2022). <em>Broccoli History and Seasonal Availability</em> [Video]. YouTube. ID: T6NNJ6ojCpA</li>
            <li>La Cucina Italiana. The History Of Broccoli: From The Etruscan Period To Now. <a href="https://www.lacucinaitaliana.com/trends/healthy-food/history-broccoli-etruscans-today" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">lacucinaitaliana.com</a></li>
          </ol>
        </div>

        {/* Related links */}
        <div className="mt-8 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/facts/is-broccoli-man-made" className="text-forest text-sm font-medium hover:underline">
              Is Broccoli Man-Made?
            </Link>
            <Link href="/facts/nutrition" className="text-forest text-sm font-medium hover:underline">
              Broccoli Nutrition Facts
            </Link>
            <Link href="/varieties/broccolini" className="text-forest text-sm font-medium hover:underline">
              Broccolini vs. Broccoli
            </Link>
            <Link href="/varieties" className="text-forest text-sm font-medium hover:underline">
              All Broccoli Varieties
            </Link>
            <Link href="/cooking/how-to-steam-broccoli" className="text-forest text-sm font-medium hover:underline">
              How to Steam Broccoli
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
