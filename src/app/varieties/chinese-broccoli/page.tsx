import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chinese Broccoli (Gai Lan): How to Cook It Right | BroccoliPedia',
  description: 'Elena Ignacio explains how to cook gai lan (Chinese broccoli): blanching vs stir-fry, stem and leaf timing, the cornstarch sauce trick, buying guide, and nutritional facts with USDA sources.',
  keywords: [
    'chinese broccoli gai lan cooking',
    'how to cook gai lan',
    'gai lan recipe',
    'chinese broccoli vs broccolini',
    'blanching gai lan',
    'gai lan oyster sauce',
    'kailan cooking',
  ],
  openGraph: {
    title: 'Chinese Broccoli (Gai Lan): How to Cook It Right',
    description: 'Blanch in salted oily water, stems first, leaves last 30 seconds. Cornstarch makes the oyster sauce cling. Everything else you need to know about gai lan.',
    url: 'https://broccolipedia.com/varieties/chinese-broccoli',
    type: 'article',
    images: [
      {
        url: 'https://broccolipedia.com/images/chinese-broccoli/chinese-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Plate of gai lan with oyster sauce, stems bright green, natural light',
      },
    ],
  },
}

// Schema JSON-LD — Article + FAQPage + BreadcrumbList
const schemaJson = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://broccolipedia.com/varieties/chinese-broccoli#article',
    headline: 'Chinese Broccoli (Gai Lan): How to Cook It Right',
    description:
      'How to cook gai lan: blanching vs stir-fry, stem and leaf timing, the cornstarch sauce trick, buying guide, substitutions, and nutritional facts.',
    url: 'https://broccolipedia.com/varieties/chinese-broccoli',
    datePublished: '2024-06-16',
    dateModified: '2024-06-16',
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
        url: 'https://broccolipedia.com/images/logo.png',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://broccolipedia.com/images/chinese-broccoli/chinese-broccoli-hero-broccoli-feature.webp',
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://broccolipedia.com/varieties/chinese-broccoli',
    },
    // WikiData-linked mentions from TextRazor extraction
    mentions: [
      {
        '@type': 'Thing',
        name: 'Gai lan',
        sameAs: 'https://www.wikidata.org/wiki/Q1677369',
        url: 'http://en.wikipedia.org/wiki/Gai_lan',
      },
      {
        '@type': 'Thing',
        name: 'Broccoli',
        sameAs: 'https://www.wikidata.org/wiki/Q47722',
        url: 'http://en.wikipedia.org/wiki/Broccoli',
      },
      {
        '@type': 'Thing',
        name: 'Broccolini',
        sameAs: 'https://www.wikidata.org/wiki/Q2229726',
        url: 'http://en.wikipedia.org/wiki/Broccolini',
      },
      {
        '@type': 'Thing',
        name: 'Blanching (cooking)',
        sameAs: 'https://www.wikidata.org/wiki/Q506763',
        url: 'http://en.wikipedia.org/wiki/Blanching_(cooking)',
      },
      {
        '@type': 'Thing',
        name: 'Oyster sauce',
        sameAs: 'https://www.wikidata.org/wiki/Q780827',
        url: 'http://en.wikipedia.org/wiki/Oyster_sauce',
      },
      {
        '@type': 'Thing',
        name: 'Cruciferous vegetables',
        sameAs: 'https://www.wikidata.org/wiki/Q5189799',
        url: 'http://en.wikipedia.org/wiki/Cruciferous_vegetables',
      },
      {
        '@type': 'Thing',
        name: 'Sulforaphane',
        sameAs: 'https://www.wikidata.org/wiki/Q424489',
        url: 'http://en.wikipedia.org/wiki/Sulforaphane',
      },
      {
        '@type': 'Thing',
        name: 'Calcium',
        sameAs: 'https://www.wikidata.org/wiki/Q706',
        url: 'http://en.wikipedia.org/wiki/Calcium',
      },
      {
        '@type': 'Thing',
        name: 'Vitamin C',
        sameAs: 'https://www.wikidata.org/wiki/Q199678',
        url: 'http://en.wikipedia.org/wiki/Vitamin_C',
      },
      {
        '@type': 'Thing',
        name: 'Wok',
        sameAs: 'https://www.wikidata.org/wiki/Q208364',
        url: 'http://en.wikipedia.org/wiki/Wok',
      },
      {
        '@type': 'Thing',
        name: 'Glucosinolate',
        sameAs: 'https://www.wikidata.org/wiki/Q416883',
        url: 'http://en.wikipedia.org/wiki/Glucosinolate',
      },
      {
        '@type': 'Thing',
        name: 'Sesame oil',
        sameAs: 'https://www.wikidata.org/wiki/Q212317',
        url: 'http://en.wikipedia.org/wiki/Sesame_oil',
      },
    ],
    // Speakable for AEO
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#quick-answer', '#how-long-gai-lan-cook'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is gai lan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gai lan is Chinese broccoli, a dark green leafy vegetable in the brassica family with thick crunchy stems, flat leaves, and small white flower buds. It is the Cantonese name (芥蘭) for the plant also called kailan in Malay and kai-lan in Thai. It has a mildly bitter, peppery flavour that softens when cooked.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is gai lan the same as broccolini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Broccolini is a hybrid of regular broccoli and gai lan, developed in Japan in the 1990s. They share long stems but gai lan has flatter, darker leaves and more bitterness. Broccolini tastes milder and slightly sweet.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does gai lan take to cook?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blanching takes 1 to 2 minutes for standard stems and 30 to 45 seconds for leaves added separately. Baby gai lan needs only 45 seconds in boiling water. Stir-frying over high heat takes 60 to 90 seconds for stems plus 30 seconds for leaves. Overcooked gai lan turns yellow and limp.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you eat gai lan leaves?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Gai lan leaves are delicious and cook much faster than the stems. Add them last and give them 30 seconds. They wilt into something silky and absorb the oyster sauce well. Always separate leaves from stems before cooking to control the timing of each.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does gai lan taste like?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gai lan tastes slightly bitter and mildly peppery, with a clean vegetal flavour. The bitterness is milder than broccoli rabe but more present than regular broccoli or bok choy. Cooking softens it. The stems turn sweet and almost buttery when blanched properly.',
        },
      },
    ],
  },
  {
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
        name: 'Varieties',
        item: 'https://broccolipedia.com/varieties',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Chinese Broccoli',
        item: 'https://broccolipedia.com/varieties/chinese-broccoli',
      },
    ],
  },
]

export default function ChineseBroccoliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-5">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/varieties" className="hover:text-forest">Varieties</Link>
          {' / '}
          <span className="text-deepForest">Chinese Broccoli</span>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-2 leading-tight">
          Chinese Broccoli (Gai Lan): How to Cook It Right
        </h1>
        <p className="text-sm text-sage mb-6">
          By{' '}
          <Link href="/about" className="text-forest font-medium hover:underline">
            Elena Ignacio
          </Link>{' '}
          &middot; Updated June 2024
        </p>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-greenTint">
          <Image
            src="/images/chinese-broccoli/chinese-broccoli-hero-broccoli-feature.webp"
            alt="Plate of gai lan with oyster sauce, stems bright green, natural light on off-white ceramic"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Opening — personal moment */}
        <p className="text-lg text-deepForest leading-relaxed mb-4">
          Adam told me gai lan and broccoli weren&apos;t the same thing. He was seven. He was right.
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          He had been eating gai lan at his school canteen in Singapore since 2021, stir-fried with oyster
          sauce pooling at the plate edge. He came home one evening and asked why we never had it. I said we
          had broccoli. He looked at me with complete seven-year-old certainty and said, &ldquo;That&rsquo;s not the
          same thing.&rdquo; I spent the next two weeks discovering he was right. Part of that time I served gai
          lan slightly yellow to Alfi, who pushed it to the side of his plate without a word.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">Here is what I learned.</p>

        {/* QuickAnswer block */}
        <div
          id="quick-answer"
          className="bg-greenTint border-l-4 border-forest rounded-r-xl p-5 mb-10"
          aria-label="Quick Answer"
        >
          <p className="text-sm font-semibold text-forest uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-deepForest leading-relaxed">
            Gai lan (Chinese broccoli) is a dark green brassica with thick crunchy stems, flat leaves, and
            small white flower buds. It tastes mildly bitter and peppery. Blanch in salted oily water for 1
            to 2 minutes, stems first, leaves last 30 seconds, then pour a cornstarch-thickened oyster sauce
            over the top.
          </p>
        </div>

        {/* Section: Comparison */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          What&apos;s the difference between gai lan, regular broccoli, and broccolini?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Regular broccoli grows a large central head. Gai lan has almost none of that. It is a long stem
          with flat dark leaves and tiny buds at the top. The bitterness is different too: regular broccoli
          is mild and nutty; gai lan sits closer to broccoli rabe but gentler.
        </p>
        <p className="text-deepForest leading-relaxed mb-5">
          Broccolini is a hybrid of gai lan and regular broccoli, developed in Japan in the 1990s. Those
          long-stemmed bunches that cost more than you expect at the supermarket? That is broccolini. It
          looks like gai lan but tastes milder and sweeter. Not the same vegetable.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-3 py-2 text-left"></th>
                <th className="px-3 py-2 text-left">Gai Lan</th>
                <th className="px-3 py-2 text-left">Regular Broccoli</th>
                <th className="px-3 py-2 text-left">Broccolini</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Main part', 'Stems + leaves', 'Florets', 'Stems + small florets'],
                ['Flavour', 'Mildly bitter', 'Mild, nutty', 'Mild, slightly sweet'],
                ['Blanch time', '1 to 2 min', '3 to 5 min', '1.5 to 2 min'],
              ].map(([feature, gaiLan, broccoli, broccolini], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                  <td className="px-3 py-2 font-medium text-deepForest">{feature}</td>
                  <td className="px-3 py-2 text-sage">{gaiLan}</td>
                  <td className="px-3 py-2 text-sage">{broccoli}</td>
                  <td className="px-3 py-2 text-sage">{broccolini}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section: Buying guide */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          How do I pick good gai lan at the supermarket?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Dark blue-green leaves. No yellowing. Tight, compact buds at the top. If the buds have opened
          into white or yellow flowers, the bunch is past its peak and will taste more bitter.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Thinner stems mean younger gai lan, which is more tender. Baby gai lan, sold at some Singapore
          supermarkets, is the most delicate. Avoid bunches with limp leaves or dry-looking cut ends.
        </p>

        {/* Section: Taste */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          What does gai lan taste like?
        </h2>
        <p className="text-deepForest leading-relaxed mb-8">
          Slightly bitter, mildly peppery, clean. Not as sharp as broccoli rabe. Not as neutral as bok
          choy. Cooking softens the bitterness. The stems turn sweet and almost buttery when blanched
          properly. The leaves wilt into something silky.
        </p>

        {/* Section: Best cooking method */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          What&apos;s the best way to cook gai lan?
        </h2>
        <p className="text-deepForest leading-relaxed mb-5">
          Two methods. Blanching is the classic dim sum approach. Stir-frying gives more flavour from
          garlic and sauce. I do both.
        </p>

        <div className="bg-white border border-sage/30 rounded-xl p-5 mb-5">
          <h3 className="font-serif font-semibold text-lg text-deepForest mb-3">
            Blanching (faster, closer to restaurant style)
          </h3>
          <p className="text-deepForest leading-relaxed mb-3">
            Use more water than you think. Add 1 teaspoon salt and 1 tablespoon neutral oil before it
            boils. The oil is not for flavour. It coats the leaves and stops them from oxidising. This is
            why restaurant gai lan stays bright green and home-cooked gai lan goes dull.
          </p>
          <p className="text-deepForest leading-relaxed">
            Separate the thick stems from the leaves. Add stems first (1.5 to 2 minutes), then leaves (30
            to 45 seconds). Lift out the moment the stems turn bright green and just yield to a knife. Not
            soft. Plate immediately.
          </p>
        </div>

        <div className="bg-white border border-sage/30 rounded-xl p-5 mb-5">
          <h3 className="font-serif font-semibold text-lg text-deepForest mb-3">
            Stir-fry (more flavour, better for cut pieces)
          </h3>
          <p className="text-deepForest leading-relaxed mb-3">
            Slice the stems on a diagonal. This is not optional. A bias cut increases surface area and
            helps them cook evenly and fast. Separate stems and leaves before you start.
          </p>
          <p className="text-deepForest leading-relaxed">
            Heat the wok until it smokes. Oil. Stems first, 60 to 90 seconds. Add garlic. Add leaves,
            30 seconds. Add sauce, toss. Off heat, add sesame oil. If you add sesame oil while the wok
            is hot, the aroma burns off entirely.
          </p>
        </div>

        <div className="bg-deepForest text-white rounded-xl p-5 mb-10">
          <p className="font-semibold mb-2">The sauce that actually clings</p>
          <p className="text-green-200 text-sm leading-relaxed">
            Mix 3 tablespoons oyster sauce, 1 teaspoon soy sauce, 1 teaspoon sugar, 2 tablespoons water,
            and 1 teaspoon cornstarch. The cornstarch makes the sauce coat the stems instead of sliding
            off. Skip it and the sauce pools at the bottom. This is the most useful thing I learned.
          </p>
        </div>

        {/* Section: Cook time */}
        <h2
          id="how-long-gai-lan-cook"
          className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10"
        >
          How long does gai lan take to cook?
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-deepForest text-white">
                <th className="px-3 py-2 text-left"></th>
                <th className="px-3 py-2 text-left">Baby gai lan</th>
                <th className="px-3 py-2 text-left">Standard</th>
                <th className="px-3 py-2 text-left">Mature / thick</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Blanching stems', '45 sec', '1.5 min', '2 min'],
                ['Blanching leaves', '20 sec', '30 sec', '45 sec'],
                ['Stir-fry stems', '45 sec', '60 to 90 sec', '2 min'],
              ].map(([method, baby, standard, mature], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                  <td className="px-3 py-2 font-medium text-deepForest">{method}</td>
                  <td className="px-3 py-2 text-sage">{baby}</td>
                  <td className="px-3 py-2 text-sage">{standard}</td>
                  <td className="px-3 py-2 text-sage">{mature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-deepForest leading-relaxed mb-10">
          The moment gai lan turns yellow, it is overcooked. Stems should be bright green and tender but
          not soft. Leaves wilted but not collapsed.
        </p>

        {/* Section: Health */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          Is gai lan healthy?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">Yes, practically.</p>
        <p className="text-deepForest leading-relaxed mb-4">
          Gai lan is cruciferous, like broccoli, cabbage, and bok choy. Cruciferous vegetables contain
          glucosinolates that convert to sulforaphane when you chop or chew them. Research suggests these
          compounds may support cellular health, though the evidence is for whole vegetable consumption
          over time, not a single serving{' '}
          <cite className="not-italic text-sm text-sage">
            (MD Anderson Cancer Center, &ldquo;Cruciferous Vegetables and Cancer Prevention&rdquo;)
          </cite>
          .
        </p>
        <p className="text-deepForest leading-relaxed mb-4">
          The calcium surprised me. Gai lan provides around 105&nbsp;mg calcium per 100g vs 47&nbsp;mg in
          regular broccoli{' '}
          <cite className="not-italic text-sm text-sage">(USDA FDC comparison)</cite>. More than twice the
          calcium. For two boys who don&apos;t drink much milk, that landed. Vitamin C is around
          45&nbsp;mg per 100g{' '}
          <cite className="not-italic text-sm text-sage">(USDA FDC)</cite>.
        </p>
        <p className="text-deepForest leading-relaxed mb-10">
          One practical note: chopping gai lan and waiting a few minutes before cooking activates the
          myrosinase enzyme, increasing sulforaphane production. Heat above 70°C slows this enzyme, so a
          brief blanch preserves more activity than long boiling{' '}
          <cite className="not-italic text-sm text-sage">
            (Bhupathiraju &amp; Tucker, Clin Chim Acta, 2011; PubMed 2020)
          </cite>
          . Cut it, wait a few minutes, cook it fast.
        </p>

        {/* Section: Storage & substitutions */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-4 mt-10">
          How do I store gai lan and what can I substitute?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Wrap in a damp paper towel, store in an open bag in the crisper. Stays good for 3 to 4 days.
          Wash right before cooking, not before storing.
        </p>
        <p className="text-deepForest leading-relaxed mb-10">
          When gai lan is not available: broccolini is the closest substitute in flavour and structure.
          Choy sum works for the blanch-and-oyster-sauce method. Bok choy is a fallback but has a
          different texture and more water content.
        </p>

        {/* FAQ section */}
        <section aria-label="Frequently Asked Questions" className="mt-10 mb-10">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is gai lan?',
                a: 'Gai lan is Chinese broccoli, a dark green brassica with thick crunchy stems, flat leaves, and small white flower buds. The Cantonese name; also called kailan in Malay and kai-lan in Thai.',
              },
              {
                q: 'Is gai lan the same as broccolini?',
                a: 'No. Broccolini is a hybrid of regular broccoli and gai lan. They share long stems but gai lan has flatter, darker leaves and more bitterness. Broccolini tastes milder.',
              },
              {
                q: 'How long does gai lan take to cook?',
                a: 'Blanching: 1 to 2 minutes for stems, 30 to 45 seconds for leaves added separately. Baby gai lan: 45 seconds. Stir-frying: 60 to 90 seconds for stems plus 30 seconds for leaves. Overcooked gai lan turns yellow and limp.',
              },
              {
                q: 'Can you eat gai lan leaves?',
                a: 'Yes. Add them last, 30 seconds. They wilt silky and absorb the sauce well. They cook much faster than the stems, which is why you separate them before starting.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="border-b border-sage/20 pb-5">
                <h3 className="font-semibold text-deepForest mb-2">{q}</h3>
                <p className="text-deepForest leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mt-10 pt-6 border-t border-sage/20">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ul className="text-sm text-sage space-y-2">
            <li>
              USDA FDC: calcium content comparison, gai lan vs standard broccoli (FDC ID 170379 for regular
              broccoli)
            </li>
            <li>
              MD Anderson Cancer Center: &ldquo;Cruciferous Vegetables and Cancer Prevention&rdquo; —
              glucosinolates overview
            </li>
            <li>
              Bhupathiraju SN, Tucker KL. Coronary heart disease prevention: nutrients, foods, and dietary
              patterns. <em>Clin Chim Acta</em>. 2011 — sulforaphane and myrosinase activation
            </li>
            <li>
              PubMed (2020): myrosinase enzyme activity and heat deactivation in cruciferous vegetables
            </li>
          </ul>
        </section>

        {/* Related links */}
        <div className="mt-10 pt-6 border-t border-sage/20 flex flex-wrap gap-4">
          <Link href="/varieties/broccolini" className="text-sm text-forest font-semibold hover:underline">
            Broccolini &rarr;
          </Link>
          <Link href="/varieties/broccoli-rabe" className="text-sm text-forest font-semibold hover:underline">
            Broccoli Rabe &rarr;
          </Link>
          <Link
            href="/recipes/beef/beef-and-broccoli"
            className="text-sm text-forest font-semibold hover:underline"
          >
            Beef and Broccoli Recipe &rarr;
          </Link>
        </div>
      </article>
    </>
  )
}
