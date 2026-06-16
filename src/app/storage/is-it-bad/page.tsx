import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How to Tell If Broccoli Has Gone Bad | BroccoliPedia',
  description: 'Smell it first. Yellow tips are fine. Slimy means toss it. A practical guide to the four signs broccoli has gone bad, how long it lasts, and what to do with limp broccoli.',
  keywords: [
    'how to tell if broccoli has gone bad',
    'broccoli gone bad',
    'is broccoli bad',
    'yellow broccoli safe to eat',
    'broccoli spoiled signs',
    'how long does broccoli last',
    'bad broccoli smell',
    'can you eat yellow broccoli',
  ],
  openGraph: {
    title: 'How to Tell If Broccoli Has Gone Bad',
    description: 'Four signs to check in 60 seconds: smell, color, texture, and mold. Plus the yellow broccoli question answered properly.',
    url: 'https://broccolipedia.com/storage/is-it-bad',
    siteName: 'BroccoliPedia',
    images: [
      {
        url: 'https://broccolipedia.com/images/is-broccoli-bad/is-broccoli-bad-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh broccoli on the left vs bad broccoli with yellow florets and mold spots on the right',
      },
    ],
    type: 'article',
  },
}

// ── Schema: Article ────────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Tell If Broccoli Has Gone Bad',
  description: 'Four signs your broccoli has gone bad: smell, color, texture, and mold. Includes the yellow broccoli question, shelf life, and what actually happens if you eat bad broccoli.',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/is-broccoli-bad/is-broccoli-bad-hero-broccoli-feature.webp',
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
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.quick-answer'],
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Thing',
      name: 'Food spoilage',
      sameAs: 'https://www.wikidata.org/wiki/Q1343481',
    },
    {
      '@type': 'Thing',
      name: 'Glucosinolate',
      sameAs: 'https://www.wikidata.org/wiki/Q421752',
    },
    {
      '@type': 'Thing',
      name: 'Chlorophyll',
      sameAs: 'https://www.wikidata.org/wiki/Q134923',
    },
    {
      '@type': 'Thing',
      name: 'Ethylene',
      sameAs: 'https://www.wikidata.org/wiki/Q170591',
    },
    {
      '@type': 'Thing',
      name: 'Foodborne illness',
      sameAs: 'https://www.wikidata.org/wiki/Q182154',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Mold',
      sameAs: 'https://www.wikidata.org/wiki/Q46268',
    },
    {
      '@type': 'Thing',
      name: 'Escherichia coli',
      sameAs: 'https://www.wikidata.org/wiki/Q25419',
    },
    {
      '@type': 'Thing',
      name: 'Salmonella',
      sameAs: 'https://www.wikidata.org/wiki/Q191402',
    },
    {
      '@type': 'Thing',
      name: 'Brassica',
      sameAs: 'https://www.wikidata.org/wiki/Q145309',
    },
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/storage/is-it-bad',
  },
}

// ── Schema: BreadcrumbList ─────────────────────────────────────────────────────
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
      name: 'Storage',
      item: 'https://broccolipedia.com/storage',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Tell If Broccoli Has Gone Bad',
      item: 'https://broccolipedia.com/storage/is-it-bad',
    },
  ],
}

// ── Schema: FAQPage ────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you eat slightly yellow broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Yellow tips are chlorophyll breaking down, which is natural aging, not bacterial spoilage. Trim the yellow parts and cook the rest. If the entire head is yellow-brown and droopy, quality is too degraded to bother.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cut the mold off broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli is too porous and wet for partial mold removal to be safe. Mold filaments extend deeper than the visible surface growth. If you see fuzzy white or grey mold anywhere on the head or stem, discard the whole thing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does broccoli last in the fridge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A whole head stored loosely in the crisper lasts 5 to 7 days. Cut florets last 3 to 4 days. Cooked broccoli in an airtight container stays safe for 3 to 4 days (USDA FSIS). Frozen broccoli is safe indefinitely but tastes best within 3 to 4 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does bad broccoli smell like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bad broccoli smells strongly sulfurous, sour, or rotten. It is a big step up from the mild vegetal smell of fresh broccoli. If the smell hits you before you open the drawer, or if it is sharp and unpleasant rather than just mildly sulfury, discard it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can limp broccoli be saved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes. Trim an inch off the stalk and stand it in cold water for 30 minutes. If it firms up, cook it immediately. If it stays limp or smells off, roast it at 200C for 18 to 20 minutes. Anything slimy is past saving.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if you eat bad broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli that smells bad but has no mold will usually just taste unpleasant. Broccoli with sliminess or visible mold can carry foodborne pathogens including E. coli and Salmonella (USDA FSIS). Cooking destroys surface bacteria, but genuinely spoiled broccoli is better discarded.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if cooked broccoli has gone bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooked broccoli that has gone bad smells sour, feels watery or slimy, or shows mold. If it has been in the fridge for more than 4 days in an airtight container, throw it out even if it looks fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does frozen broccoli last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frozen broccoli is technically safe indefinitely at 0F or below, but quality drops after 8 to 12 months. Freezer burn shows as whitish dry patches and frost crystals. The broccoli is still safe to eat but cook it rather than eating it raw.',
      },
    },
  ],
}

export default function IsItBadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <Link href="/" className="hover:text-forest">Home</Link>
          {' / '}
          <Link href="/storage" className="hover:text-forest">Storage</Link>
          {' / '}
          <span className="text-deepForest">Is It Bad?</span>
        </nav>

        {/* H1 */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4 leading-tight">
          How to Tell If Broccoli Has Gone Bad
        </h1>

        {/* Author byline */}
        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
          <Image
            src="/images/is-broccoli-bad/is-broccoli-bad-hero-broccoli-feature.webp"
            alt="Fresh broccoli on the left with tight green florets and a white stalk cut end, compared to bad broccoli on the right with yellow florets and small mold spots"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        {/* Intro paragraph */}
        <p className="text-base text-deepForest leading-relaxed mb-4">
          Adam has this thing where if the broccoli looks even slightly off, he pushes the whole plate away. It happened last year in our Singapore kitchen. I had a head sitting in the fridge for four days and a few florets had gone slightly yellow at the tips. Not mouldy. Not slimy. Just yellow. He looked at me like I was about to poison him. I ate a floret anyway. He watched. It was fine. But that evening I figured out what the real signs actually are, because I was tired of guessing and throwing out food that was probably still good.
        </p>

        {/* QuickAnswer block */}
        <QuickAnswer>
          Broccoli has gone bad if it smells strongly sulfurous or sour, has fuzzy mold on the florets or stem, or feels slimy anywhere. Slight yellowing of the tips means it is aging, not spoiled. It is still safe to eat. A soft or wilted stem with no smell and no sliminess is a quality issue, not a food safety one.
        </QuickAnswer>

        {/* ── Section: 4 signs ─────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            The four signs your broccoli has gone bad
          </h2>

          {/* Sign 1: Smell */}
          <div className="mb-6">
            <h3 className="font-serif font-semibold text-xl text-deepForest mb-2">1. Smell first</h3>
            <p className="text-deepForest leading-relaxed">
              Fresh broccoli has a mild, faintly vegetal scent. A little sulfury is normal. That is glucosinolate, the compound that gives brassicas their bite. What you do not want is that smell amplified. If it hits you before you even open the fridge drawer, or if it smells sour rather than just green and sulfury, the broccoli is past saving. Takes two seconds to check. Do it first.
            </p>
          </div>

          {/* Sign 2: Color */}
          <div className="mb-6">
            <h3 className="font-serif font-semibold text-xl text-deepForest mb-2">2. Color: what yellow actually means</h3>
            <p className="text-deepForest leading-relaxed mb-3">
              This is the one I had to learn properly. &ldquo;Yellowing equals bad&rdquo; is too simple.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              Yellow tips are chlorophyll breaking down. A natural aging process, not bacterial spoilage. A few yellow tips on an otherwise green head? Trim them off and cook the rest. The broccoli will taste more bitter than fresh, but it is safe. Mostly yellow but no smell, no sliminess? Cook it. Roast it. It is fine.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              What is not fine: the whole head gone yellow-brown, florets soft and drooping, structure starting to collapse. At that point the quality is too far gone.
            </p>
            <p className="text-deepForest leading-relaxed">
              Also check the cut end of the stalk. A fresh stalk looks white-green and moist at the cut. If it looks dried or brown, that is an early warning. Fresh broccoli is 89.2% water{' '}
              <cite className="text-sm text-sage not-italic">(USDA FDC 170379)</cite>, so a parched stem means it has been sitting too long.
            </p>
          </div>

          {/* Sign 3: Texture */}
          <div className="mb-6">
            <h3 className="font-serif font-semibold text-xl text-deepForest mb-2">3. Texture: soft is not slimy</h3>
            <p className="text-deepForest leading-relaxed mb-3">
              Soft or floppy broccoli has lost moisture. It bends when it should snap. But if it smells fine and has no mold, it is still usable. Squeeze the stalk gently. If it feels mushy, that is a problem. If it just feels firm-ish but bendy, trim an inch off the bottom, stand it in cold water for 30 minutes and see if it comes back.
            </p>
            <p className="text-deepForest leading-relaxed mb-3">
              Slimy is the hard stop. Any sliminess on the florets or stem means bacterial decomposition. Do not cut around it. Toss the whole head.
            </p>
            <p className="text-deepForest leading-relaxed">
              If you are rescuing limp broccoli, roasting works. Florets on a sheet pan at 200C for 18 to 20 minutes. The softness disappears into the char.
            </p>
          </div>

          {/* Sign 4: Mold */}
          <div className="mb-6">
            <h3 className="font-serif font-semibold text-xl text-deepForest mb-2">4. Mold: and why you cannot cut it off</h3>
            <p className="text-deepForest leading-relaxed mb-3">
              Fuzzy white or grey patches on the florets or stem mean mold. Unlike hard cheese where you can cut a generous inch around a spot, broccoli is too porous and too wet. Mold filaments extend deeper than the surface shows. The whole head goes.
            </p>
            <p className="text-deepForest leading-relaxed">
              Small dark spots on the florets are often early oxidation. Trim those off and use the rest quickly. Anything fuzzy rather than just discolored gets tossed.
            </p>
          </div>

          {/* Visual spoilage signal summary */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
            <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick reference</p>
            <div className="space-y-1 text-sm">
              {[
                { signal: 'Yellow tips only', verdict: 'Safe — trim and cook', safe: true },
                { signal: 'Soft or floppy stalk', verdict: 'Safe — use now or roast', safe: true },
                { signal: 'Small dark spots on florets', verdict: 'Safe — trim those florets', safe: true },
                { signal: 'Strong sulfurous or sour smell', verdict: 'Discard', safe: false },
                { signal: 'Sliminess anywhere', verdict: 'Discard', safe: false },
                { signal: 'Fuzzy white or grey mold', verdict: 'Discard', safe: false },
                { signal: 'Whole head yellow-brown', verdict: 'Discard', safe: false },
              ].map((item) => (
                <div key={item.signal} className="flex items-start gap-2">
                  <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold ${item.safe ? 'bg-forest text-white' : 'bg-red-600 text-white'}`}>
                    {item.safe ? '✓' : '✗'}
                  </span>
                  <span className="text-deepForest">
                    <strong>{item.signal}</strong> {' '}
                    <span className={item.safe ? 'text-forest' : 'text-red-700'}>{item.verdict}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section: Shelf life ──────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            How long does broccoli actually last in the fridge?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            A whole, unwashed head stored loosely in the crisper drawer lasts 5 to 7 days. Cut into florets, 3 to 4 days at most. Cooked broccoli in an airtight container is safe for 3 to 4 days{' '}
            <cite className="text-sm text-sage not-italic">(USDA FSIS)</cite>. Frozen broccoli holds for 8 to 12 months but tastes best in the first 3 to 4.
          </p>
          <p className="text-deepForest leading-relaxed">
            One thing that kills broccoli faster than almost anything else: storing it near apples, bananas, or tomatoes. Those fruits produce ethylene gas and brassicas absorb it and expire faster. Keep them on different shelves. Do not wash broccoli until you are ready to use it. Wet broccoli molds faster.
          </p>
        </section>

        {/* ── Section: What happens ────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
            What happens if you eat bad broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            For most people who eat slightly past-its-prime broccoli, nothing terrible happens. It just tastes awful. The bigger risk is with broccoli that has visible mold or sliminess, which can carry foodborne pathogens. The USDA FSIS lists fresh produce as a potential carrier of E. coli and Salmonella.
          </p>
          <p className="text-deepForest leading-relaxed">
            When Alfi was younger I threw out anything suspect. Now I am less anxious about yellow tips, but I always cook uncertain broccoli rather than serving it raw. Anything slimy or moldy goes straight out.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can you eat slightly yellow broccoli?',
                a: 'Yes. Yellow tips are chlorophyll breaking down, which is natural aging, not bacterial spoilage. Trim the yellow parts and cook the rest. If the entire head is yellow-brown and droopy, quality is too degraded to bother.',
              },
              {
                q: 'Can I cut the mold off broccoli?',
                a: 'No. Broccoli is too porous and wet for partial mold removal to be safe. Mold filaments extend deeper than the visible surface growth. If you see fuzzy white or grey mold anywhere on the head or stem, discard the whole thing.',
              },
              {
                q: 'How long does broccoli last in the fridge?',
                a: 'A whole head stored loosely in the crisper lasts 5 to 7 days. Cut florets last 3 to 4 days. Cooked broccoli in an airtight container stays safe for 3 to 4 days (USDA FSIS). Frozen broccoli is safe indefinitely but tastes best within 3 to 4 months.',
              },
              {
                q: 'What does bad broccoli smell like?',
                a: 'Bad broccoli smells strongly sulfurous, sour, or rotten — a big step up from the mild vegetal smell of fresh broccoli. If the smell hits you before you open the drawer, or if it is sharp and unpleasant rather than just mildly sulfury, discard it.',
              },
              {
                q: 'Can limp broccoli be saved?',
                a: 'Sometimes. Trim an inch off the stalk and stand it in cold water for 30 minutes. If it firms up, cook it immediately. If it stays limp or smells off, roast it at 200C for 18 to 20 minutes. Anything slimy is past saving.',
              },
              {
                q: 'What happens if you eat bad broccoli?',
                a: 'Broccoli that smells bad but has no mold will usually just taste unpleasant. Broccoli with sliminess or visible mold can carry foodborne pathogens including E. coli and Salmonella (USDA FSIS). Cooking destroys surface bacteria, but genuinely spoiled broccoli is better discarded.',
              },
              {
                q: 'How do I know if cooked broccoli has gone bad?',
                a: 'Cooked broccoli that has gone bad smells sour, feels watery or slimy, or shows mold. If it has been in the fridge for more than 4 days in an airtight container, throw it out even if it looks fine.',
              },
              {
                q: 'How long does frozen broccoli last?',
                a: 'Frozen broccoli is technically safe indefinitely at 0F or below, but quality drops after 8 to 12 months. Freezer burn shows as whitish dry patches and frost crystals. The broccoli is still safe to eat but cook it rather than eating it raw.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-greenTint rounded-xl p-4">
                <h3 className="font-serif font-semibold text-base text-deepForest mb-2">{item.q}</h3>
                <p className="text-sm text-sage leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8 border-t border-greenTint pt-6">
          <h2 className="font-serif font-bold text-base text-deepForest mb-3">Sources</h2>
          <ul className="space-y-1 text-sm text-sage">
            <li>
              USDA FoodData Central. (2019). <em>Broccoli, raw</em>. FDC ID 170379.{' '}
              <a href="https://fdc.nal.usda.gov/food-details/170379/nutrients" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">fdc.nal.usda.gov</a>
            </li>
            <li>
              USDA Food Safety and Inspection Service. (2023). <em>Refrigeration and Food Safety</em>.{' '}
              <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration-food-safety" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">fsis.usda.gov</a>
            </li>
            <li>
              USDA Food Safety and Inspection Service. (2023). <em>Foodborne Illness and Disease: Pathogens</em>.{' '}
              <a href="https://www.fsis.usda.gov/food-safety/foodborne-illness-and-disease" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">fsis.usda.gov</a>
            </li>
          </ul>
        </section>

        {/* Related links */}
        <div className="flex flex-wrap gap-4 border-t border-greenTint pt-6">
          <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Broccoli Shelf Life Guide</Link>
          <Link href="/storage/how-to-freeze" className="text-sm text-forest font-semibold hover:underline">How to Freeze Broccoli</Link>
          <Link href="/storage" className="text-sm text-forest font-semibold hover:underline">All Storage Tips</Link>
        </div>

      </article>
    </>
  )
}
