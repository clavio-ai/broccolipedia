import type { Metadata } from 'next'
import Image from 'next/image'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How to Microwave Broccoli | BroccoliPedia',
  description:
    'Microwave broccoli in 3 minutes with 2 tablespoons of water. Elena shares the stem-raft technique, wattage guide, and the sulforaphane trick that makes microwaved broccoli surprisingly nutritious.',
  keywords: [
    'how to microwave broccoli',
    'microwave broccoli time',
    'microwave broccoli without steamer',
    'microwave frozen broccoli',
    'microwave broccoli healthy',
    'steam broccoli microwave',
  ],
  openGraph: {
    title: 'How to Microwave Broccoli',
    description:
      'The 3-minute method, stem-raft technique, wattage guide, and the sulforaphane trick no one else mentions.',
    url: 'https://broccolipedia.com/how-to-cook/microwave',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: '/images/microwave-broccoli/microwave-broccoli-broccoli-method-in-action.webp',
        width: 1200,
        height: 630,
        alt: 'Glass bowl with broccoli florets and water, covered by a flat dinner plate, ready to microwave',
      },
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://broccolipedia.com/how-to-cook/microwave',
  },
}

// ── Schema: BreadcrumbList ──────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'BroccoliPedia',
      item: 'https://broccolipedia.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'How to Cook Broccoli',
      item: 'https://broccolipedia.com/how-to-cook',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Microwave',
      item: 'https://broccolipedia.com/how-to-cook/microwave',
    },
  ],
}

// ── Schema: HowTo ──────────────────────────────────────────────────────────

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Microwave Broccoli',
  description:
    'Quick microwave steaming method using the stem-raft technique for bright, tender-crisp broccoli in 3-4 minutes.',
  totalTime: 'PT7M',
  yield: '2 servings',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/microwave-broccoli/microwave-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 800,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
    name: 'Elena Ignacio',
    url: 'https://broccolipedia.com/about',
    sameAs: [
      'https://www.tiktok.com/@elenasainda',
      'https://www.youtube.com/@adelevlogs',
    ],
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fresh broccoli (about 300g)' },
    { '@type': 'HowToSupply', name: 'Water (2 tablespoons)' },
    { '@type': 'HowToSupply', name: 'Butter or olive oil, for serving' },
    { '@type': 'HowToSupply', name: 'Flaky salt, for serving' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Microwave-safe glass bowl' },
    { '@type': 'HowToTool', name: 'Microwave oven (950-1000W)' },
    { '@type': 'HowToTool', name: 'Large flat dinner plate (for cover)' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Cut the florets and slice the stems',
      text: 'Chop broccoli into 1.5 to 2 inch florets, keeping them similar in size for even cooking. Slice the thick stem into half-inch rounds.',
      image: 'https://broccolipedia.com/images/microwave-broccoli/microwave-broccoli-broccoli-method-in-action.webp',
    },
    {
      '@type': 'HowToStep',
      name: 'Optional: chop and wait 40 minutes',
      text: 'For maximum sulforaphane, let the cut broccoli rest at room temperature for 40 minutes before cooking. This allows myrosinase to convert glucoraphanin into sulforaphane before heat destroys the enzyme.',
    },
    {
      '@type': 'HowToStep',
      name: 'Build the stem-raft in the bowl',
      text: 'Place stem rounds flat in the bottom of a microwave-safe bowl. Add 2 tablespoons of water. Stack florets on top of the stems so florets sit above the waterline and steam rather than boil.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check bowl fill level and cover',
      text: 'The bowl should be no more than two-thirds full so the dinner plate sits completely flat on top. A gap lets steam escape and causes uneven cooking. Place the plate firmly on top.',
    },
    {
      '@type': 'HowToStep',
      name: 'Microwave on high',
      text: 'Microwave on high: 3 minutes at 1000W, or 3.5 to 4 minutes at 700-800W. For frozen florets (no need to defrost), microwave 5 to 5.5 minutes. Start checking at the lower end of the time range.',
    },
    {
      '@type': 'HowToStep',
      name: 'Rest covered for 2 minutes',
      text: 'Leave the plate covering the bowl for 2 full minutes after the microwave stops. Residual steam keeps cooking the broccoli gently and evenly.',
    },
    {
      '@type': 'HowToStep',
      name: 'Season and serve',
      text: 'Tilt the plate away from you when removing (steam burns). Drain any water at the bottom of the bowl. Season with butter, flaky salt, and a squeeze of lemon.',
      image: 'https://broccolipedia.com/images/microwave-broccoli/microwave-broccoli-finished-result-plate.webp',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q424489',
    },
    {
      '@type': 'Thing',
      name: 'Myrosinase',
      sameAs: 'https://www.wikidata.org/wiki/Q416212',
    },
    {
      '@type': 'Thing',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q5572329',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Carotenoid',
      sameAs: 'https://www.wikidata.org/wiki/Q191907',
    },
    {
      '@type': 'Thing',
      name: 'Beta-Carotene',
      sameAs: 'https://www.wikidata.org/wiki/Q306135',
    },
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
  ],
}

// ── Schema: FAQPage ────────────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  author: {
    '@type': 'Person',
    '@id': 'https://broccolipedia.com/about#elena-ignacio',
  },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you microwave broccoli without water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Drizzle with olive oil, season with garlic and salt, and microwave uncovered for 3 to 5 minutes. The texture is slightly drier with more color at the edges. Remove from the microwave immediately when done, since the broccoli keeps cooking in the residual heat from the bowl.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you keep microwaved broccoli from getting mushy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use less water and less time than you expect. Two tablespoons of water maximum. Start at 3 minutes at 1000W. Let it finish cooking in the residual steam with the cover on, rather than extending microwave time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is microwave broccoli healthy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microwaving is one of the better cooking methods for broccoli. Research shows it retains 84% of vitamin C compared to 67% after boiling (PMC2722699). Carotenoids like beta-carotene are preserved almost completely. With the chop-first-wait trick, sulforaphane availability is also significantly improved (PubMed 32328271).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you microwave frozen broccoli without defrosting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Place frozen florets straight from the bag into a microwave-safe bowl with 2 tablespoons of water. Cover with a plate and microwave on high for 5 to 5.5 minutes. Check at 5 minutes. The florets should be bright green and tender.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much water do you use to microwave broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use exactly 2 tablespoons of water. More water boils the broccoli rather than steaming it, which results in soggy florets and greater nutrient loss. The small amount of water creates steam in the sealed bowl without submerging the broccoli.',
      },
    },
  ],
}

// ── Schema: Article (author) ───────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Microwave Broccoli',
  description:
    'The 3-minute stem-raft method, wattage guide, and sulforaphane trick for microwaved broccoli that is bright, tender-crisp and nutritionally sound.',
  url: 'https://broccolipedia.com/how-to-cook/microwave',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/microwave-broccoli/microwave-broccoli-broccoli-method-in-action.webp',
    width: 1200,
    height: 800,
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
      url: 'https://broccolipedia.com/images/broccolipedia-logo.png',
    },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer', '.faq-answer-healthy', '.faq-answer-water'],
  },
}

// ── Page Component ─────────────────────────────────────────────────────────

export default function MicrowaveBroccoliPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#4B7C59' }}>
            <li><a href="/" style={{ color: '#4B7C59', textDecoration: 'none' }}>BroccoliPedia</a></li>
            <li style={{ color: '#9CA3AF' }}>/</li>
            <li><a href="/how-to-cook" style={{ color: '#4B7C59', textDecoration: 'none' }}>How to Cook</a></li>
            <li style={{ color: '#9CA3AF' }}>/</li>
            <li aria-current="page" style={{ color: '#14532D', fontWeight: 600 }}>Microwave</li>
          </ol>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          How to Microwave Broccoli
        </h1>

        {/* Author byline */}
        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '1.75rem' }}>
          <Image
            src="/images/microwave-broccoli/microwave-broccoli-broccoli-method-in-action.webp"
            alt="Glass bowl with raw broccoli florets and 2 tablespoons of water, covered by a flat dinner plate, ready to microwave"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 896px"
            priority
          />
        </div>

        {/* Intro paragraph */}
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#14532D', marginBottom: '1.5rem' }}>
          Adam ate broccoli exactly one way for almost three months in late 2023: microwaved, soft, with butter.
          Not roasted. Not stir-fried. Microwaved. I made it wrong at least a dozen times before I got it right.
          Too much water and it went completely soggy. Lid not sitting flat and it came out raw in the middle.
          Four minutes in our 950W Singapore microwave and the whole kitchen smelled like a wet dog. That was
          a painful phase. But by the end of it, I knew exactly what works and exactly what does not. Here is
          everything I learned from making it badly first.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          Place broccoli florets in a microwave-safe bowl with 2 tablespoons of water. Cover with a flat dinner
          plate. Microwave on high for 3 minutes at 1000W (add 30 seconds for 700-800W microwaves). Let it sit
          covered for 2 minutes before opening. Season with butter and salt.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.15rem', color: '#14532D', marginTop: 0, marginBottom: '0.75rem' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#166534' }}>
            <li>Cook time: 3 minutes at 1000W; 3.5 minutes at 700-800W; 5 to 5.5 minutes for frozen</li>
            <li>Water: exactly 2 tablespoons. More water boils the broccoli and makes it soggy.</li>
            <li>Bowl must be no more than two-thirds full so the plate sits completely flat</li>
            <li>Microwaving retains 84% of vitamin C vs 67% after boiling (PMC2722699)</li>
            <li>Chop broccoli 40 minutes before cooking to activate more sulforaphane</li>
          </ul>
        </div>

        {/* Step-by-step */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.6rem', color: '#14532D', marginBottom: '1.25rem' }}>
            How to Microwave Broccoli: Step-by-Step
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>1. Cut the florets, and use the stems.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                Chop into 1.5 to 2 inch pieces and keep them similar in size. Slice the thick stem into
                half-inch rounds. Do not throw those away.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>2. If you have 40 minutes, chop first and wait.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                Once cut, an enzyme called myrosinase activates and converts glucoraphanin into sulforaphane.
                High heat kills that enzyme before it can finish. Chop the florets, wait 40 minutes, then
                microwave. Research suggests this method raises sulforaphane availability significantly
                compared to cooking immediately (PubMed 32328271). Not always practical on a weeknight, but
                worth knowing.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>3. Use the stem-raft technique.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                Put the stem rounds in the bottom of your bowl. Add 2 tablespoons of water. Stack the florets
                on top. The stems sit in the water. The florets sit above it and steam rather than boil.
                Brighter color, better texture. I picked this up from Cardamom and Tea and it genuinely
                changed the results for me.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>4. Do not overfill the bowl.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                This was my biggest mistake for weeks. If the bowl is more than two-thirds full, the plate
                cannot sit completely flat. Steam escapes from the gap. Some florets come out soft, some raw.
                Use a wide bowl that is only two-thirds full.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>5. Cover and microwave.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: '0 0 0.75rem' }}>
                Place a large flat dinner plate on top. No plastic wrap needed. Microwave on high:
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 1.25rem', color: '#166534', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <li>Fresh florets at 1000W: 3 minutes</li>
                <li>Fresh florets at 700-800W: 3.5 to 4 minutes</li>
                <li>Frozen florets, straight from the bag: 5 to 5.5 minutes</li>
                <li>Fresh riced broccoli: 3 to 3.5 minutes</li>
              </ul>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: '0.75rem 0 0' }}>
                Start at the lower end. You can always add 30 seconds.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>6. Wait 2 minutes before opening.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                Residual steam keeps cooking the broccoli after the microwave stops. If you lift the plate
                immediately, you release that heat and the centers can be undercooked. Wait the full 2 minutes,
                then tilt the plate away from you when you lift. Steam burns.
              </p>
            </div>

            <div>
              <p style={{ fontWeight: 700, color: '#14532D', marginBottom: '0.4rem' }}>7. Season while hot.</p>
              <p style={{ color: '#166534', lineHeight: '1.7', margin: 0 }}>
                Drain any water at the bottom. Butter, flaky salt, a squeeze of lemon. Alfi prefers garlic
                butter. Adam still wants plain butter. The simple things.
              </p>
            </div>
          </div>
        </section>

        {/* Result image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '2.5rem' }}>
          <Image
            src="/images/microwave-broccoli/microwave-broccoli-finished-result-plate.webp"
            alt="Finished microwaved broccoli, bright green, in a white bowl with a melting pat of butter on top"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 896px"
          />
        </div>

        {/* Why This Method Works */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.6rem', color: '#14532D', marginBottom: '1rem' }}>
            Why This Method Works
          </h2>
          <p style={{ color: '#166534', lineHeight: '1.8', marginBottom: '1rem' }}>
            The microwave heats water molecules inside the broccoli directly, creating steam from within the
            vegetable itself. The plate traps external steam and turns the bowl into a sealed cooking
            environment. Short cook time, minimal water, and you get that bright green color that disappears
            the moment you overcook it.
          </p>
          <p style={{ color: '#166534', lineHeight: '1.8', marginBottom: '1rem' }}>
            Boiling broccoli for more than a minute destroys myrosinase entirely, meaning no sulforaphane
            production at all (PubMed 32328271). A 2020 study in Food Science and Nutrition found that moderate
            microwave heating around 60 degrees Celsius with limited water raised bioavailable sulforaphane
            yield by approximately 80% compared to conventional heating. High-power microwave cooking around
            950W produced 40% more sulforaphane than low-power methods (PubMed 32328271).
          </p>
          <p style={{ color: '#166534', lineHeight: '1.8', margin: 0 }}>
            On vitamin C: microwaving retains 84% vs 67% after boiling (PMC2722699). Carotenoids like lutein,
            zeaxanthin, and beta-carotene show no significant loss when microwaved, while boiling reduces them
            by 13% (PMC2722699). A small knob of butter actually helps your body absorb those carotenoids since
            they are fat-soluble. This is the nutritional case for not skipping the butter, which I find very
            satisfying as a reason.
          </p>
        </section>

        {/* Common Mistakes */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.6rem', color: '#14532D', marginBottom: '1rem' }}>
            Common Mistakes and What Actually Fixes Them
          </h2>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: 0 }}>
            {[
              {
                term: 'Mushy broccoli',
                def: 'Too much water or too long in the microwave. Use exactly 2 tablespoons. Check at 3 minutes.',
              },
              {
                term: 'Raw in the middle',
                def: 'The plate was not sitting flat. Bowl was too full. Fix the fill level.',
              },
              {
                term: 'Wet dog smell',
                def: 'Overcooked. The sulfur compounds release once broccoli goes past tender-crisp. Pull it earlier.',
              },
              {
                term: 'Uneven cooking',
                def: 'Florets cut to different sizes. Cut everything the same size.',
              },
            ].map(({ term, def }) => (
              <div key={term} style={{ display: 'grid', gridTemplateColumns: '10rem 1fr', gap: '0.5rem', alignItems: 'baseline' }}>
                <dt style={{ fontWeight: 700, color: '#14532D', fontSize: '0.95rem' }}>{term}</dt>
                <dd style={{ margin: 0, color: '#166534', lineHeight: '1.7', fontSize: '0.95rem' }}>{def}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* FAQ section */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.6rem', color: '#14532D', marginBottom: '1.25rem' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#14532D', marginBottom: '0.5rem' }}>
                Can you microwave broccoli without water?
              </h3>
              <p style={{ color: '#166534', lineHeight: '1.75', margin: 0 }}>
                Yes. Drizzle with olive oil, season with garlic and salt, and microwave uncovered for 3 to 5
                minutes. The texture is slightly drier and the florets pick up a little more color and crispness
                at the edges. It is a different result from the steam method. Honestly, for flavor it is quite
                good when I want something closer to roasted without turning on the oven. The key is removing it
                from the microwave immediately when done, because it keeps cooking in the residual heat from the
                bowl.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#14532D', marginBottom: '0.5rem' }}>
                How do you keep microwaved broccoli from getting mushy?
              </h3>
              <p style={{ color: '#166534', lineHeight: '1.75', margin: 0 }}>
                Use less water and less time than you think you need. Two tablespoons maximum. Start at 3 minutes
                at 1000W. Let it finish in the residual steam rather than extending the microwave time.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#14532D', marginBottom: '0.5rem' }}>
                Is microwave broccoli healthy?
              </h3>
              <p className="faq-answer-healthy" style={{ color: '#166534', lineHeight: '1.75', margin: 0 }}>
                Microwaving is one of the better cooking methods for broccoli, not one of the worst. It retains
                more vitamin C than boiling, preserves carotenoids well, and with the chop-first technique,
                produces good sulforaphane yields. Research frames it as comparable to steaming for most
                nutrients when you use minimal water and short cooking times (PMC2722699, PubMed 32328271).
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#14532D', marginBottom: '0.5rem' }}>
                Can you microwave frozen broccoli without defrosting?
              </h3>
              <p style={{ color: '#166534', lineHeight: '1.75', margin: 0 }}>
                Yes. Straight from the bag into a bowl with 2 tablespoons of water. Cover with a plate. 5 to
                5.5 minutes on high. Check at 5 minutes. The florets should be bright green and tender.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#14532D', marginBottom: '0.5rem' }}>
                How much water do you use to microwave broccoli?
              </h3>
              <p className="faq-answer-water" style={{ color: '#166534', lineHeight: '1.75', margin: 0 }}>
                Use exactly 2 tablespoons. More water boils the broccoli rather than steaming it, which results
                in soggy florets and greater nutrient loss. The small amount creates steam in the sealed bowl
                without submerging the broccoli.
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <footer style={{ borderTop: '1px solid #BBF7D0', paddingTop: '1.25rem', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#6B7280', lineHeight: '1.7', margin: 0 }}>
            <strong style={{ color: '#4B7C59' }}>Sources:</strong>{' '}
            USDA FDC ID 170379 (broccoli nutritional data) |{' '}
            PMC2722699: Pellegrini N et al., &quot;Effect of different cooking methods on nutritional and
            physicochemical characteristics of selected vegetables,&quot; Journal of Agricultural and Food
            Chemistry, 2010 |{' '}
            PubMed 32328271: Conzatti A et al., &quot;Influence of cooking methods on sulforaphane content
            in broccoli,&quot; Food Science and Nutrition, Wiley, 2020
          </p>
        </footer>

      </article>
    </>
  )
}
