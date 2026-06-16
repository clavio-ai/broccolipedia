import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import AuthorByline from '@/components/AuthorByline'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Broccoli Fiber Content: Raw vs Cooked, Stems vs Florets',
  description:
    'Raw broccoli has 2.6g of fiber per 100g; cooked gives 5g per cup. Plus: the stem has more fiber than the florets, and why gas from broccoli is actually a good sign.',
  keywords: [
    'broccoli fiber content',
    'is broccoli high in fiber',
    'broccoli fiber per cup',
    'broccoli soluble vs insoluble fiber',
    'does broccoli have fiber',
    'broccoli stem fiber content',
  ],
  openGraph: {
    title: 'Broccoli Fiber Content: Raw vs Cooked, Stems vs Florets',
    description:
      'Raw broccoli has 2.6g of fiber per 100g. Cooked hits 5g per cup. The stem has more fiber than the florets. Here is everything you need to know, explained practically.',
    url: 'https://broccolipedia.com/nutrition/fiber',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/broccoli-fiber/broccoli-fiber-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli cut in half showing the stem cross-section and florets',
      },
    ],
    type: 'article',
    publishedTime: '2026-06-16T00:00:00Z',
    authors: ['https://broccolipedia.com/about#elena-ignacio'],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/nutrition/fiber',
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://broccolipedia.com/nutrition/fiber#article',
      headline: 'Broccoli Fiber Content: What I Learned When I Stopped Throwing Away the Stem',
      description:
        'Raw broccoli has 2.6g of dietary fiber per 100g; one cooked cup reaches 5g. The stem contains more fiber than the florets. Elena Ignacio covers soluble vs insoluble fiber, cooking methods, and gut health effects.',
      url: 'https://broccolipedia.com/nutrition/fiber',
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      inLanguage: 'en',
      image: {
        '@type': 'ImageObject',
        url: 'https://broccolipedia.com/images/broccoli-fiber/broccoli-fiber-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        caption: 'Broccoli halved to show the stem and floret cross-sections',
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
          url: 'https://broccolipedia.com/images/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://broccolipedia.com/nutrition/fiber',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Dietary fiber',
          sameAs: 'https://en.wikipedia.org/wiki/Dietary_fiber',
        },
        {
          '@type': 'Thing',
          name: 'Broccoli',
          sameAs: 'https://en.wikipedia.org/wiki/Broccoli',
        },
        {
          '@type': 'Thing',
          name: 'Gut microbiota',
          sameAs: 'https://en.wikipedia.org/wiki/Gut_microbiota',
        },
        {
          '@type': 'Thing',
          name: 'Butyric acid',
          sameAs: 'https://en.wikipedia.org/wiki/Butyric_acid',
        },
        {
          '@type': 'Thing',
          name: 'Short-chain fatty acid',
          sameAs: 'https://en.wikipedia.org/wiki/Short-chain_fatty_acid',
        },
        {
          '@type': 'Thing',
          name: 'Raffinose',
          sameAs: 'https://en.wikipedia.org/wiki/Raffinose',
        },
        {
          '@type': 'Thing',
          name: 'Lachnospiraceae',
          sameAs: 'https://en.wikipedia.org/wiki/Lachnospiraceae',
        },
        {
          '@type': 'Thing',
          name: 'Bacteroides',
          sameAs: 'https://en.wikipedia.org/wiki/Bacteroides',
        },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.quick-answer', '.faq-answer-speakable'],
      },
      citation: [
        {
          '@type': 'CreativeWork',
          name: 'USDA FoodData Central: Broccoli, raw. FDC ID 170379',
          url: 'https://fdc.nal.usda.gov/fdc-app.html#/?fdcId=170379',
        },
        {
          '@type': 'ScholarlyArticle',
          name: 'Broccoli: A Multi-Faceted Vegetable for Health',
          url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10376324/',
          datePublished: '2023',
          identifier: 'PMC10376324',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://broccolipedia.com/nutrition/fiber#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much fiber is in broccoli per cup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Raw broccoli contains approximately 2.4g of fiber per cup chopped (91g). Cooked broccoli reaches 5g per cup because the serving weight increases during cooking. Source: USDA FDC 170379.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is raw or cooked broccoli higher in fiber?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cooked broccoli is higher in fiber per cup because cooking increases the serving weight. The fiber itself is not destroyed. Steaming also shifts more of the fiber to the soluble, prebiotic type. Boiling leaches some soluble fiber into the cooking water, so save that liquid for soups or sauces.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the broccoli stem have more fiber than the florets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Broccoli stems contain approximately 1.8g of fiber per 100g, compared to about 1.1g per 100g in the florets. Peel the tough outer skin and slice or dice the stems to use them in stir-fries or soups.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does broccoli cause gas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Broccoli contains raffinose, a complex sugar that humans cannot digest. Gut bacteria ferment it in the large intestine, producing gas. This fermentation is actually a sign of healthy bacterial activity. Eating broccoli consistently over two to three weeks allows the microbiome to adapt and symptoms typically reduce.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of fiber does broccoli have: soluble or insoluble?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Broccoli contains both soluble and insoluble fiber. Raw broccoli is roughly 87% insoluble (adds bulk, supports regularity) and 13% soluble (feeds gut bacteria, acts as a prebiotic). Cooking shifts that ratio toward more soluble fiber. Source: USDA FDC 170379.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://broccolipedia.com/nutrition/fiber#breadcrumb',
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
          name: 'Nutrition',
          item: 'https://broccolipedia.com/nutrition',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Fiber in Broccoli',
          item: 'https://broccolipedia.com/nutrition/fiber',
        },
      ],
    },
  ],
}

export default function FiberPage() {
  return (
    <>
      <Script
        id="schema-fiber"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.25rem', alignItems: 'center' }}>
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            <li style={{ color: '#9CA3AF' }}>/</li>
            <li><Link href="/nutrition" className="hover:text-forest">Nutrition</Link></li>
            <li style={{ color: '#9CA3AF' }}>/</li>
            <li style={{ color: '#166534' }}>Fiber in Broccoli</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
          Broccoli Fiber Content: What I Learned When I Stopped Throwing Away the Stem
        </h1>

        {/* Author byline */}
        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div style={{ marginBottom: '1.5rem', borderRadius: '0.75rem', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/broccoli-fiber/broccoli-fiber-hero-broccoli-feature.webp"
            alt="Broccoli halved vertically showing the thick stem cross-section alongside the florets"
            width={800}
            height={533}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="eager"
          />
        </div>

        {/* Opening paragraph */}
        <p className="text-deepForest leading-relaxed mb-4" style={{ fontSize: '1.05rem' }}>
          Adam used to leave the broccoli stems on his plate like they were furniture. For almost a year, I cut the florets off before dinner even hit the table and binned the stalks without thinking. Then early in 2023, I read that the stem I had been tossing contains more fiber per gram than the florets I was carefully saving. About 1.8g per 100g in the stem versus roughly 1.1g in the tops. I had been throwing away the better bit. I stopped immediately. I now peel and slice the stems every single time.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          <p style={{ margin: 0 }}>
            Raw broccoli has <strong>2.6g of fiber per 100g</strong>, or 2.4g per cup chopped. Cook it and the per-cup number climbs to 5g. One cooked cup covers about 20% of the daily target for women (25g/day) and 13% for men (38g/day).{' '}
            <span style={{ fontSize: '0.85em', color: '#4B7C59' }}>(USDA FDC 170379)</span>
          </p>
        </QuickAnswer>

        {/* Stat cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
            background: '#DCFCE7',
            borderRadius: '0.75rem',
            padding: '1rem',
            border: '1px solid #86EFAC',
            marginBottom: '2rem',
          }}
        >
          {[
            { label: '100g raw', value: '2.6g', sub: '9% DV' },
            { label: '1 cup raw (91g)', value: '2.4g', sub: '~10% DV' },
            { label: '1 cup cooked', value: '5.0g', sub: '~20% DV for women' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '1.4rem', color: '#15803D', fontFamily: 'var(--font-serif)' }}>{item.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 600, marginTop: '0.15rem' }}>{item.label}</div>
              <div style={{ fontSize: '0.7rem', color: '#4B7C59', marginTop: '0.1rem' }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Section: Soluble vs Insoluble */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          What type of fiber does broccoli have: soluble or insoluble?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">
          Both. Raw broccoli is about 87% insoluble fiber and 13% soluble per 100g. That works out to 3.06g insoluble and 0.44g soluble per 100g. <span style={{ fontSize: '0.85em', color: '#4B7C59' }}>(USDA FDC 170379)</span>
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Insoluble fiber passes through mostly intact, adds bulk to stool, and keeps things moving. That is the regularity side of the equation.
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Soluble fiber dissolves, forms a slow gel, and feeds the bacteria in your large intestine. That fermentation produces short-chain fatty acids (SCFAs), including butyrate, which fuels your colon wall cells. Think of it as prebiotic food, not just roughage.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Cooking changes the split. Steaming or microwaving shifts the ratio to around 60% insoluble and 40% soluble. The same vegetable does different gut work depending on how you cook it.
        </p>

        {/* Section: Cooking */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Does cooking broccoli change its fiber content?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">
          Cooking does not destroy fiber. What changes is the ratio and the per-serving amount.
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Steaming and microwaving are the best methods. They restructure cell walls in a way that increases available soluble fiber. The cooked cup also weighs more, which is why 5g per cooked cup sounds so much higher than 2.4g raw. You are eating a larger mass of broccoli in that same cup measure.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Boiling is the one to watch. Soluble fiber leaches into the cooking water. The fix is simple: save that liquid. It has real fiber value and works well in soups and sauces. I pour it into the soup base almost every time.
        </p>

        {/* Section: Stem vs Floret */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Which has more fiber: broccoli florets or the stem?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">
          The stem, by a meaningful margin.
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Broccoli stems contain approximately 1.8g of fiber per 100g. The florets come in at around 1.1g per 100g.{' '}
          <span style={{ fontSize: '0.85em', color: '#4B7C59' }}>(Nutritional comparison data via medindia.net citing USDA data)</span>
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Most home cooks eat the tops and bin the stalks. I did it for a year. The outer skin is tough, but what is underneath is crisp and mild. Peel it, slice it thin, and it disappears into stir-fries or fried rice. Alfi eats it without realising what he is eating. That is honestly the goal some nights.
        </p>

        {/* Section: Comparison table */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Is broccoli a good source of fiber compared to other vegetables?
        </h2>
        <p className="text-deepForest leading-relaxed mb-4">
          Solid, not the highest. Here is how it stacks up, per 100g raw:
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '0.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ background: '#14532D', color: '#fff' }}>
                <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Vegetable</th>
                <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Fiber per 100g</th>
              </tr>
            </thead>
            <tbody>
              {[
                { veg: 'Kale', fiber: '4.1g' },
                { veg: 'Brussels sprouts (cooked, per cup)', fiber: '4.5g' },
                { veg: 'Broccoli', fiber: '2.6g', highlight: true },
                { veg: 'Cauliflower', fiber: '2.0g' },
              ].map((row, i) => (
                <tr
                  key={row.veg}
                  style={{
                    background: row.highlight ? '#DCFCE7' : i % 2 === 0 ? '#fff' : '#F9FAFB',
                    fontWeight: row.highlight ? 700 : 400,
                  }}
                >
                  <td style={{ padding: '0.5rem 1rem', color: '#14532D', borderBottom: '1px solid #BBF7D0' }}>{row.veg}</td>
                  <td style={{ padding: '0.5rem 1rem', color: '#15803D', fontWeight: 600, borderBottom: '1px solid #BBF7D0' }}>{row.fiber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '2rem' }}>
          Source: USDA FDC 170379 and USDA SR Legacy
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Where broccoli earns its place is the cooked cup amount. A full cup steamed gets you to 5g. If you eat the stems too, you are genuinely moving the needle on a 25 to 30g daily target.
        </p>

        {/* Section: Gas */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          Why does broccoli cause gas, and should you eat less?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">
          The gas comes from raffinose, a complex sugar that humans cannot digest. Gut bacteria ferment it in the large intestine, which produces gas. That fermentation is actually your gut working. The bacteria doing the fermenting are mostly the ones you want more of.
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Research has found that regular broccoli eating is linked to a 9% reduction in Firmicutes and a 10% increase in Bacteroides in gut bacterial populations.{' '}
          <span style={{ fontSize: '0.85em', color: '#4B7C59' }}>(Healthline, citing clinical research)</span>{' '}
          A 2023 review in the journal <em>Antibiotics</em> (PMC10376324) confirmed that high vegetable fiber intake promotes growth of beneficial microbes and supports bowel regularity.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Your tolerance improves over two to three weeks of consistent eating. The discomfort is not a sign to eat less. It is a sign your gut is adjusting.
        </p>

        {/* Section: Gut mechanics */}
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
          What does broccoli fiber do in your gut?
        </h2>
        <p className="text-deepForest leading-relaxed mb-3">
          Broccoli fiber feeds Lachnospiraceae bacteria specifically. When they break it down, they produce butyrate and acetate. Butyrate is the primary energy source for the cells lining your colon.
        </p>
        <p className="text-deepForest leading-relaxed mb-3">
          Separate from the fiber pathway, broccoli contains aryl hydrocarbon receptor (AHR) ligands including indole-3-carbinol. A 2023 mouse study from Penn State, published in <em>Laboratory Investigation</em>, found that mice fed a diet equivalent to roughly 3.5 cups of broccoli per day showed better gut lining health, with more mucus-producing goblet cells. That is a mouse study and the human equivalent intake is high, but the mechanism points to something real.
        </p>
        <p className="text-deepForest leading-relaxed mb-8">
          Research also suggests soluble fiber from broccoli may support blood sugar control by slowing glucose absorption after meals.
        </p>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" style={{ marginBottom: '2rem' }}>
          <h2 id="faq-heading" className="font-serif font-bold text-2xl text-deepForest mb-4">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: 'How much fiber is in broccoli per cup?',
              a: 'Raw broccoli contains approximately 2.4g of fiber per cup chopped (91g). Cooked broccoli reaches 5g per cup. (USDA FDC 170379)',
            },
            {
              q: 'Is raw or cooked broccoli higher in fiber?',
              a: 'Cooked broccoli is higher per cup because the serving weight increases. The fiber is not destroyed. Steaming also shifts more of it to the soluble, prebiotic type. Boiling leaches some soluble fiber into the cooking water, so save that liquid.',
            },
            {
              q: 'Does the broccoli stem have more fiber than the florets?',
              a: 'Yes. Stems contain approximately 1.8g of fiber per 100g versus about 1.1g in the florets. Peel the outer skin and slice the stems to use them.',
            },
            {
              q: 'Why does broccoli cause gas?',
              a: 'Broccoli contains raffinose, a complex sugar gut bacteria ferment in the large intestine. This fermentation is healthy bacterial activity. Eating broccoli consistently over two to three weeks reduces symptoms as the microbiome adapts.',
            },
            {
              q: 'What type of fiber does broccoli have?',
              a: 'Both soluble and insoluble. Raw broccoli is roughly 87% insoluble (bulk, regularity) and 13% soluble (prebiotic, gut bacteria feed). Cooking shifts that toward more soluble fiber. (USDA FDC 170379)',
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                borderLeft: '3px solid #22C55E',
                paddingLeft: '1rem',
                marginBottom: '1.25rem',
              }}
            >
              <h3 style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.35rem', fontSize: '1rem' }}>{q}</h3>
              <p className="faq-answer-speakable" style={{ color: '#1F2937', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{a}</p>
            </div>
          ))}
        </section>

        {/* Closing */}
        <div
          style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: '0.75rem',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            color: '#166534',
            lineHeight: 1.6,
          }}
        >
          I keep a container of peeled, sliced broccoli stems in the fridge most weeks now. They go into whatever I am cooking. Alfi has been eating them for over a year and has no idea they are the most fibrous part of the vegetable. That works for me.
        </div>

        {/* References */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="font-serif font-bold text-lg text-deepForest mb-2">References</h2>
          <ol style={{ listStyle: 'decimal', paddingLeft: '1.25rem', fontSize: '0.8rem', color: '#4B5563', lineHeight: 1.7 }}>
            <li>
              USDA FoodData Central. Broccoli, raw. FDC ID 170379.{' '}
              <a href="https://fdc.nal.usda.gov/fdc-app.html#/?fdcId=170379" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                fdc.nal.usda.gov
              </a>
            </li>
            <li>
              Mehta, R. S., et al. (2023). Broccoli: A multi-faceted vegetable for health. <em>Antibiotics</em>, 12(7), 1101. PMC10376324.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10376324/" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                pmc.ncbi.nlm.nih.gov
              </a>
            </li>
            <li>
              Penn State University. (2023, April). Broccoli compound may benefit gut health. <em>Laboratory Investigation</em>.{' '}
              <a href="https://www.sciencedaily.com/releases/2023/04/230406152639.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                sciencedaily.com
              </a>
            </li>
            <li>
              Mayo Clinic. (2023). Chart of high-fiber foods.{' '}
              <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/high-fiber-foods/art-20050948" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                mayoclinic.org
              </a>
            </li>
          </ol>
        </div>

        {/* Internal links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #BBF7D0', paddingTop: '1.25rem' }}>
          <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
            &larr; Full Nutrition Facts
          </Link>
          <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">
            All Broccoli Benefits &rarr;
          </Link>
          <Link href="/how-to-cook/steam" className="text-sm text-forest font-semibold hover:underline">
            How to Steam Broccoli &rarr;
          </Link>
        </div>

      </article>
    </>
  )
}
