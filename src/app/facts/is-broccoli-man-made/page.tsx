import type { Metadata } from 'next'
import Image from 'next/image'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Is Broccoli Man Made? Yes, and the Story Is Wild',
  description:
    'Broccoli is man-made, developed from wild Brassica oleracea by Mediterranean farmers over 2,000 years ago using selective breeding. Not a GMO. Here is the full story.',
  keywords: [
    'is broccoli man made',
    'broccoli man made vegetable',
    'broccoli GMO',
    'selective breeding broccoli',
    'Brassica oleracea',
    'is broccoli natural',
    'man made vegetables list',
    'is cauliflower man made',
  ],
  openGraph: {
    title: 'Is Broccoli Man Made? Yes, and the Story Is Wild',
    description:
      'Broccoli was built by farmers in the Mediterranean over 2,000 years ago from wild cabbage. Not a GMO. Elena explains the real origin story.',
    url: 'https://broccolipedia.com/facts/is-broccoli-man-made',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/is-broccoli-man-made/is-broccoli-man-made-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'A single head of broccoli on a worn wooden kitchen surface in natural light',
      },
    ],
    locale: 'en_SG',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Broccoli Man Made? Yes, and the Story Is Wild',
    description:
      'Broccoli was built by farmers over 2,000 years ago from wild Brassica oleracea. Not a GMO. Elena explains the full story.',
    images: ['/images/is-broccoli-man-made/is-broccoli-man-made-hero-broccoli-feature.webp'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/facts/is-broccoli-man-made',
  },
}

// ── Schema JSON-LD ─────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/facts/is-broccoli-man-made#article',
  headline: 'Is Broccoli Man Made? Yes, and the Story Is Wild',
  description:
    'Broccoli is man-made, developed from wild Brassica oleracea by Mediterranean farmers over 2,000 years ago using selective breeding. Not a GMO.',
  url: 'https://broccolipedia.com/facts/is-broccoli-man-made',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/is-broccoli-man-made/is-broccoli-man-made-hero-broccoli-feature.webp',
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
      url: 'https://broccolipedia.com/logo.png',
    },
  },
  // WikiData-linked entities from TextRazor extraction
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Brassica oleracea',
      sameAs: 'https://www.wikidata.org/wiki/Q146212',
    },
    {
      '@type': 'Thing',
      name: 'Genetically modified organism',
      sameAs: 'https://www.wikidata.org/wiki/Q182726',
    },
    {
      '@type': 'Thing',
      name: 'Cauliflower',
      sameAs: 'https://www.wikidata.org/wiki/Q7537',
    },
    {
      '@type': 'Thing',
      name: 'Kale',
      sameAs: 'https://www.wikidata.org/wiki/Q45989',
    },
    {
      '@type': 'Thing',
      name: 'Brussels sprouts',
      sameAs: 'https://www.wikidata.org/wiki/Q150463',
    },
    {
      '@type': 'Thing',
      name: 'Kohlrabi',
      sameAs: 'https://www.wikidata.org/wiki/Q147202',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Mediterranean region',
      sameAs: 'https://www.wikidata.org/wiki/Q4918',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q210028',
    },
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'USDA FDC Reference',
      value: '170379',
      propertyID: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379',
    },
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://broccolipedia.com/facts/is-broccoli-man-made#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Did broccoli grow naturally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli does not exist in the wild. It was developed from Brassica oleracea, a wild cabbage native to Mediterranean coastal regions, through selective breeding starting in the 6th century BCE.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli a GMO vegetable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli was developed through selective breeding, not genetic modification. Selective breeding works by choosing plants with desirable traits and growing them over many generations without editing DNA in a laboratory. Broccoli is non-GMO under all international standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What other vegetables are man-made the same way as broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cauliflower, kale, Brussels sprouts, cabbage, kohlrabi, and romanesco are all man-made cultivars derived from the same wild plant, Brassica oleracea. Farmers shaped each one by selecting for different parts of the plant over centuries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is man-made broccoli still healthy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Raw broccoli contains 89.2 mg of vitamin C per 100 grams (USDA FDC 170379), which is significantly more than an orange. It also contains vitamin K (102 mcg), fiber (2.6 g), folate, potassium, calcium, and glucoraphanin, a compound converted to sulforaphane by the body. Research suggests sulforaphane has antioxidant and anti-inflammatory properties. Steam rather than boil to preserve the most vitamin C.',
      },
    },
    {
      '@type': 'Question',
      name: 'What plant was broccoli made from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli was developed from Brassica oleracea, commonly known as wild cabbage or wild mustard. This coastal plant, native to the Mediterranean region, is also the ancestor of cauliflower, kale, Brussels sprouts, cabbage, and kohlrabi.',
      },
    },
    {
      '@type': 'Question',
      name: 'When did broccoli come to the United States?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Italian immigrants brought broccoli to the US in the 1800s, but it did not reach mainstream commercial availability until the 1920s. The D\'Arrigo Brothers Company began test marketing broccoli in California and New York in 1923.',
      },
    },
  ],
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
      name: 'Is Broccoli Man Made?',
      item: 'https://broccolipedia.com/facts/is-broccoli-man-made',
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '#faq-did-broccoli-grow-naturally'],
}

// ── Page component ─────────────────────────────────────────────────────────────

export default function IsBroccoliManMadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-sage">
          <ol className="flex items-center gap-1.5">
            <li><a href="/" className="hover:text-forest transition-colors">Home</a></li>
            <li aria-hidden="true" className="text-sage">/</li>
            <li><a href="/facts" className="hover:text-forest transition-colors">Facts</a></li>
            <li aria-hidden="true" className="text-sage">/</li>
            <li className="text-deepForest font-medium" aria-current="page">Is Broccoli Man Made?</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
            Is Broccoli Man Made? Yes, and the Story Is Wild
          </h1>

          <AuthorByline />

          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-5 mb-6">
            <Image
              src="/images/is-broccoli-man-made/is-broccoli-man-made-hero-broccoli-feature.webp"
              alt="A single head of broccoli sitting on a worn wooden kitchen surface in warm natural light"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </header>

        {/* Opening paragraph — Elena's personal moment */}
        <div className="prose prose-green max-w-none mb-6">
          <p className="text-deepForest leading-relaxed text-lg">
            Adam refused to eat broccoli for almost three months when he was six. Not because of the taste. A boy at school told him it was fake. Not a real plant. I was annoyed at first, because I had just spent twenty minutes roasting that broccoli with garlic and olive oil. Then I sat down that night and looked it up. Turns out the kid had a point.
          </p>
        </div>

        {/* QuickAnswer — speakable target */}
        <QuickAnswer>
          Yes, broccoli is man-made. It was developed from wild cabbage (Brassica oleracea) over two thousand years ago by farmers in the Mediterranean using selective breeding, a natural process of choosing and replanting seeds from the best-performing plants across many generations. It is not a GMO.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li className="flex gap-2"><span className="text-forest font-bold flex-shrink-0">✓</span><span>Broccoli does not exist in the wild. It is a human-created cultivar.</span></li>
            <li className="flex gap-2"><span className="text-forest font-bold flex-shrink-0">✓</span><span>Developed from Brassica oleracea (wild cabbage) through selective breeding starting in the 6th century BCE.</span></li>
            <li className="flex gap-2"><span className="text-forest font-bold flex-shrink-0">✓</span><span>Not a GMO. No laboratory DNA modification involved, ever.</span></li>
            <li className="flex gap-2"><span className="text-forest font-bold flex-shrink-0">✓</span><span>Cauliflower, kale, Brussels sprouts, cabbage, and kohlrabi all came from the same single plant.</span></li>
            <li className="flex gap-2"><span className="text-forest font-bold flex-shrink-0">✓</span><span>Raw broccoli has 89.2 mg of vitamin C per 100 g, more than an orange (USDA FDC 170379).</span></li>
          </ul>
        </div>

        {/* Article body */}
        <div className="article-body space-y-8">

          {/* Section 1 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Did Broccoli Grow Naturally?</h2>
            <div className="space-y-4 text-deepForest leading-relaxed">
              <p>
                No. Broccoli does not exist in the wild. What does exist is a coastal plant called <em>Brassica oleracea</em>, a wild cabbage that grows along the Mediterranean and Atlantic coasts of Europe. It has small, tough leaves and a bitter taste. Nothing like what you see at the market today.
              </p>
              <p>
                Farmers in what is now Italy started selecting the plants with the thickest stems and biggest flower buds around the 6th century BCE. Cornell University&apos;s master gardener program traces these origins to early Mediterranean cultivation linked to Etruscan farming communities. They saved seeds from the best plants, grew them again, picked the best again, and did this over and over for generations. Slowly, a new plant emerged. That plant became what we now call Calabrese broccoli, named for Calabria in southern Italy.
              </p>
              <p>
                The word &ldquo;broccolo&rdquo; in Italian means &ldquo;flowering crest of a cabbage.&rdquo; The scientific name, <em>Brassica oleracea</em> var. <em>italica</em>, literally translates to &ldquo;Italian cabbage.&rdquo; So broccoli is named for what it is: a human-designed version of an old Italian plant.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Is Broccoli a GMO?</h2>
            <div className="space-y-4 text-deepForest leading-relaxed">
              <p>
                No. This is the question Adam eventually asked me, and it is a fair one. GMO means genetically modified organism, a plant whose DNA is directly edited in a lab using techniques like gene splicing. That technology did not exist until the 1970s.
              </p>
              <p>
                Selective breeding is different. You do not touch DNA. You choose plants with the traits you want, let them reproduce, and repeat the process over many generations. It is slow. It takes decades. But it is completely natural in the sense that the plants cross-pollinate the way they normally would. No lab. No injections. No genetic sequences written by a scientist.
              </p>
              <p>
                Broccoli is non-GMO under all international standards. What it is, is a cultivar: a cultivated variety that humans shaped through centuries of patient farming.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">What Other Vegetables Are Man-Made the Same Way?</h2>
            <div className="space-y-4 text-deepForest leading-relaxed">
              <p>
                This is the part that genuinely surprised me when I first read about it. Broccoli, cauliflower, kale, Brussels sprouts, cabbage, kohlrabi, and romanesco are all the same species. They all came from that one wild cabbage plant, <em>Brassica oleracea</em>. Farmers just shaped each one differently by selecting for different parts of the plant.
              </p>
            </div>
            <div className="bg-greenTint rounded-xl p-5 my-5">
              <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-3">One plant, six vegetables</p>
              <ul className="space-y-2 text-sm text-deepForest">
                <li><strong>Kale:</strong> leafy parts were selected and emphasized</li>
                <li><strong>Cabbage:</strong> a dense head of leaves was the target</li>
                <li><strong>Cauliflower:</strong> white flower heads, grown by choosing plants that develop in their own shade</li>
                <li><strong>Brussels sprouts:</strong> small axillary buds along the stem</li>
                <li><strong>Kohlrabi:</strong> the swollen stem became the feature</li>
                <li><strong>Broccoli:</strong> the green flowering head and thick stalk</li>
              </ul>
            </div>
            <p className="text-deepForest leading-relaxed">
              Alfi, who is younger than Adam, went through a phase of refusing Brussels sprouts. I will wait until he is a little older before explaining they are basically the same thing.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">When Did Broccoli Come to the United States?</h2>
            <div className="space-y-4 text-deepForest leading-relaxed">
              <p>
                Italian immigrants brought broccoli to the US in the 1800s. It did not catch on commercially until the 1920s. The D&apos;Arrigo Brothers Company started test marketing broccoli in California and New York in 1923. From there, it spread. By 2022, a Green Giant survey named it America&apos;s favorite vegetable.
              </p>
              <p>
                Pliny the Elder mentioned a vegetable called &ldquo;cyma&rdquo; in the 1st century CE, which historians believe was an early broccoli or close relative. The Romans cultivated it widely, then it moved through Europe over the following centuries. England got it in the 1720s. The United States came much later, and even then it took another century to reach mainstream grocery stores.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">Is Man-Made Broccoli Still Healthy?</h2>
            <div className="space-y-4 text-deepForest leading-relaxed">
              <p>
                Yes. And this was the real question I had that night after Adam&apos;s school story. The man-made origin does not change the nutritional reality.
              </p>
              <div className="bg-greenTint rounded-xl p-5 my-5">
                <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-3">Per 100 g raw broccoli (USDA FDC 170379)</p>
                <ul className="space-y-1.5 text-sm text-deepForest">
                  <li><strong>Vitamin C:</strong> 89.2 mg, about 68% more than an orange (which has roughly 53 mg)</li>
                  <li><strong>Vitamin K:</strong> 102 mcg</li>
                  <li><strong>Fiber:</strong> 2.6 g</li>
                  <li>Plus folate, potassium, calcium, and iron in meaningful amounts</li>
                </ul>
              </div>
              <p>
                The vitamin C figure matters practically. Boiling strips roughly half of it. Steaming or eating broccoli raw preserves far more. I switched to steaming years ago, mostly for this reason.
              </p>
              <p>
                Broccoli also contains glucoraphanin, which your body converts to sulforaphane using an enzyme called myrosinase. Research from Johns Hopkins in 1997 found that broccoli sprouts contain 20 to 50 times more glucoraphanin than mature broccoli. As of 2024, a meta-analysis identified 202 clinical trials on broccoli and sulforaphane, with 84 meeting clinical intervention criteria. Research suggests sulforaphane has antioxidant and anti-inflammatory properties. I am not saying broccoli treats or cures anything. The research does not say that either. But the compound is being studied seriously across multiple conditions.
              </p>
              <p>
                Selective breeding shaped how the plant looks and tastes. The nutrients are a product of the plant&apos;s own biology, not of human engineering.
              </p>
            </div>
          </section>
        </div>

        {/* FAQ section */}
        <div className="mt-10 border-t border-greenTint pt-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">

            <div id="faq-did-broccoli-grow-naturally" className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Did broccoli grow naturally?</h3>
              <p className="text-sage text-sm leading-relaxed">
                No. Broccoli does not exist in the wild. It was developed from <em>Brassica oleracea</em>, a wild cabbage native to Mediterranean coastal regions, through selective breeding starting in the 6th century BCE.
              </p>
            </div>

            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is broccoli a GMO vegetable?</h3>
              <p className="text-sage text-sm leading-relaxed">
                No. Broccoli was developed through selective breeding, not genetic modification. Selective breeding works by choosing plants with desirable traits and growing them over many generations without editing DNA in a laboratory. Broccoli is non-GMO under all international standards.
              </p>
            </div>

            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">What other vegetables are man-made the same way?</h3>
              <p className="text-sage text-sm leading-relaxed">
                Cauliflower, kale, Brussels sprouts, cabbage, kohlrabi, and romanesco are all man-made cultivars derived from the same wild plant, <em>Brassica oleracea</em>. Farmers shaped each one by selecting for different parts of the plant over centuries.
              </p>
            </div>

            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Is man-made broccoli still healthy?</h3>
              <p className="text-sage text-sm leading-relaxed">
                Yes. Raw broccoli contains 89.2 mg of vitamin C per 100 grams (USDA FDC 170379), significantly more than an orange. It also contains vitamin K (102 mcg), fiber (2.6 g), folate, potassium, calcium, and glucoraphanin, a compound converted to sulforaphane by the body. Research suggests sulforaphane has antioxidant and anti-inflammatory properties. Steam rather than boil to preserve the most vitamin C.
              </p>
            </div>

            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">What plant was broccoli made from?</h3>
              <p className="text-sage text-sm leading-relaxed">
                Broccoli was developed from <em>Brassica oleracea</em>, commonly known as wild cabbage or wild mustard. This coastal plant, native to the Mediterranean region, is also the ancestor of cauliflower, kale, Brussels sprouts, cabbage, and kohlrabi.
              </p>
            </div>

            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">When did broccoli come to the United States?</h3>
              <p className="text-sage text-sm leading-relaxed">
                Italian immigrants brought broccoli to the US in the 1800s, but it did not reach mainstream commercial availability until the 1920s. The D&apos;Arrigo Brothers Company began test marketing broccoli in California and New York in 1923.
              </p>
            </div>

          </div>
        </div>

        {/* Closing note */}
        <div className="mt-10 border-t border-greenTint pt-8">
          <p className="text-deepForest leading-relaxed italic">
            When Adam finally started eating broccoli again, it was not because I explained any of this. It was because I put cheese on it. But I like knowing the story. Farmers two thousand years ago built this plant, generation by generation, from a bitter coastal weed. That is genuinely something. I will take it.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-8 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="space-y-1.5 text-xs text-sage">
            <li>USDA FoodData Central, FDC ID 170379, Broccoli raw. <a href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/170379/nutrients" className="underline hover:text-forest" target="_blank" rel="noopener noreferrer">fdc.nal.usda.gov</a></li>
            <li>Cornell University Master Gardeners, CCE Orange County. &ldquo;Is Broccoli Man-Made?&rdquo; (2022). <a href="https://blogs.cornell.edu/master-gardeners-cce-oc/2022/01/28/is-broccoli-man-made/" className="underline hover:text-forest" target="_blank" rel="noopener noreferrer">blogs.cornell.edu</a></li>
            <li>Fahey, J.W., Zhang, Y., Talalay, P. (1997). Broccoli sprouts: An exceptionally rich source of inducers of enzymes that protect against chemical carcinogens. <em>PNAS</em>, 94(19), 10367&ndash;10372.</li>
            <li>Smith&apos;s Farm. &ldquo;Is Broccoli a GMO?&rdquo; <a href="https://smithsfarm.com/is-broccoli-a-gmo/" className="underline hover:text-forest" target="_blank" rel="noopener noreferrer">smithsfarm.com</a></li>
            <li>Wikipedia. &ldquo;Broccoli.&rdquo; <a href="https://en.wikipedia.org/wiki/Broccoli" className="underline hover:text-forest" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a></li>
            <li>Meta-analysis of sulforaphane clinical trials (2024). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12451241" className="underline hover:text-forest" target="_blank" rel="noopener noreferrer">PMC12451241</a></li>
          </ul>
        </div>
      </article>
    </>
  )
}
