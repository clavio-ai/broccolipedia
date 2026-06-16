import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Can Cats Eat Broccoli? Safe or Not (Vet-Reviewed Guide)',
  description: 'Cats can eat small amounts of plain cooked broccoli — it is non-toxic. Learn how much is safe, why florets beat stems, and when to avoid it entirely.',
  keywords: [
    'can cats eat broccoli',
    'is broccoli safe for cats',
    'can cats eat raw broccoli',
    'can cats eat cooked broccoli',
    'can kittens eat broccoli',
    'broccoli for cats',
    'what vegetables can cats eat',
  ],
  openGraph: {
    title: 'Can Cats Eat Broccoli? Safe or Not (Vet-Reviewed Guide)',
    description: 'Plain cooked broccoli is non-toxic for cats in small amounts. Here is what you need to know about serving size, stems vs florets, kittens, and the bladder stone caveat most articles miss.',
    type: 'article',
    url: 'https://broccolipedia.com/pets/can-cats-eat-broccoli',
    images: [
      {
        url: '/images/can-cats-eat-broccoli/can-cats-eat-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Small cooked broccoli floret on a wooden surface with a cat paw visible at the edge',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/pets/can-cats-eat-broccoli',
  },
}

// ── Schema: Article ───────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Can Cats Eat Broccoli? Safe or Not (Vet-Reviewed Guide)',
  description:
    'Cats can eat small amounts of plain cooked broccoli — it is non-toxic. Learn how much is safe, why florets beat stems, and when to avoid it entirely.',
  url: 'https://broccolipedia.com/pets/can-cats-eat-broccoli',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  image: {
    '@type': 'ImageObject',
    url: 'https://broccolipedia.com/images/can-cats-eat-broccoli/can-cats-eat-broccoli-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
    caption: 'Small cooked broccoli floret on a wooden surface with a cat paw at the edge of frame',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/pets/can-cats-eat-broccoli',
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
      name: 'Cat',
      sameAs: 'https://www.wikidata.org/wiki/Q146',
    },
    {
      '@type': 'Thing',
      name: 'Kitten',
      sameAs: 'https://www.wikidata.org/wiki/Q147',
    },
    {
      '@type': 'Thing',
      name: 'Broccoli sprouts',
      sameAs: 'https://www.wikidata.org/wiki/Q17163130',
    },
    {
      '@type': 'Thing',
      name: 'Dietary fiber',
      sameAs: 'https://www.wikidata.org/wiki/Q215210',
    },
    {
      '@type': 'Thing',
      name: 'Garlic',
      sameAs: 'https://www.wikidata.org/wiki/Q23400',
    },
    {
      '@type': 'Thing',
      name: 'Onion',
      sameAs: 'https://www.wikidata.org/wiki/Q23485',
    },
    {
      '@type': 'Thing',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q424489',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin C',
      sameAs: 'https://www.wikidata.org/wiki/Q199678',
    },
    {
      '@type': 'Thing',
      name: 'Vitamin K',
      sameAs: 'https://www.wikidata.org/wiki/Q182338',
    },
    {
      '@type': 'Thing',
      name: 'Carnivore',
      sameAs: 'https://www.wikidata.org/wiki/Q81875',
    },
    {
      '@type': 'Thing',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q5572329',
    },
    {
      '@type': 'Thing',
      name: 'Antioxidant',
      sameAs: 'https://www.wikidata.org/wiki/Q133948',
    },
    {
      '@type': 'Thing',
      name: 'Lactose intolerance',
      sameAs: 'https://www.wikidata.org/wiki/Q219223',
    },
  ],
}

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can cats eat broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Broccoli is not toxic to cats and plain cooked florets are safe as an occasional treat. Keep portions to one or two small thumb-sized pieces, once or twice a week, with no seasonings, butter, garlic, or onion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is broccoli safe for cats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, broccoli is considered non-toxic for cats per ASPCA guidelines. It is safe in small amounts as an occasional treat. Cats are obligate carnivores and derive little nutritional benefit from it, so it should never replace any part of their diet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat raw broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raw broccoli is not toxic, but it is tougher and harder to chew into safe pieces. The texture increases the risk of choking, especially from the stem. Cooked broccoli — steamed or boiled plain until soft — is the safer option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat cooked broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, plain cooked broccoli is the recommended form. Steam or boil in plain water until completely soft, then cool before offering. No butter, oil, garlic, onion, salt, or any seasonings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat broccoli stems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Florets are preferred over stems. Stems are fibrous and tough even when cooked, are harder to digest, and present a choking hazard. Offer small cooked florets only and skip the stems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat broccoli sprouts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no peer-reviewed research on how broccoli sprouts specifically affect feline health. Sprouts contain higher concentrations of glucoraphanin and sulforaphane than mature broccoli. Until more data is available, stick to small cooked mature florets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can kittens eat broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kittens can try a very small piece of plain cooked floret after weaning. However, kittens need protein-dense food to grow properly and their diet should be almost entirely high-quality kitten food. Broccoli should not be a habit for kittens.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much broccoli can my cat eat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One or two small florets, about thumb-sized, once or twice a week at most. Treats including broccoli should not exceed 10% of a cat\'s daily caloric intake.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my cat eats too much broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Too much broccoli can cause gas, loose stools, vomiting, or general digestive discomfort. If the broccoli contained garlic or onion, contact your vet or the Pet Poison Helpline at 855-764-7661 immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat broccoli every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Daily broccoli is unnecessary for cats and can contribute to digestive issues over time. Once or twice a week in small portions is the recommended maximum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cats eat broccoli and cheese?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Broccoli cheddar soup or any broccoli dish made with cheese, butter, or dairy is not safe for cats. Most adult cats are lactose intolerant, and cheese dishes almost always contain garlic, salt, or seasonings that are harmful to cats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do cats like broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most cats are indifferent or mildly put off by broccoli. A small number show genuine curiosity, possibly because broccoli\'s sulfur-like smell from glucoraphanin compounds resembles the smell of animal proteins. If your cat shows no interest, do not push it.',
      },
    },
  ],
}

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
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
      name: 'Pets',
      item: 'https://broccolipedia.com/pets',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Can Cats Eat Broccoli?',
      item: 'https://broccolipedia.com/pets/can-cats-eat-broccoli',
    },
  ],
}

// ── Schema: Speakable ─────────────────────────────────────────────────────────
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.key-takeaways'],
}

export default function CanCatsEatBroccoliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>
            <li><a href="/" style={{ color: '#15803D', textDecoration: 'none' }}>Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/pets" style={{ color: '#15803D', textDecoration: 'none' }}>Pets</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: '#4B5563' }}>Can Cats Eat Broccoli?</li>
          </ol>
        </nav>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-4">
          Can Cats Eat Broccoli?
        </h1>

        <AuthorByline datePublished="2026-06-16" />

        {/* Hero image */}
        <div style={{ borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem', background: '#F0FDF4' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/can-cats-eat-broccoli/can-cats-eat-broccoli-hero-broccoli-feature.webp"
            alt="Small cooked broccoli floret resting on a wooden surface with a cat paw visible at the edge of frame"
            width={1200}
            height={630}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Opening paragraph — Elena's personal moment */}
        <p className="text-deepForest leading-relaxed mb-4">
          Alfi found a floret on the kitchen floor during a meal prep session here in Singapore and batted it across the tiles like a toy for a full two minutes before he actually ate it. I stood there holding my knife, watching him, assuming he would spit it out. He didn&apos;t. He chewed it slowly and then looked up at me with that expression he gets when he discovers something I have apparently been hiding from him. Adam, who is older, has never shown interest in anything that grows in the ground. So I looked this up properly. Here is what I found.
        </p>

        {/* QuickAnswer — AEO + Speakable */}
        <QuickAnswer>
          Yes, cats can eat broccoli. It is not toxic and plain cooked florets are safe as an occasional treat. Steam or boil it plain, no seasonings, no butter, no garlic. One or two small florets at most, once or twice a week. Cats are obligate carnivores and get almost no nutritional benefit from it.
        </QuickAnswer>

        {/* Key Takeaways */}
        <div className="key-takeaways bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-2 text-sm text-deepForest">
            <li>Non-toxic per ASPCA guidelines — broccoli will not harm cats in small amounts</li>
            <li>Florets only, stems skipped — stems are fibrous and a choking hazard</li>
            <li>Always cooked plain — no butter, no garlic, no onion, no salt</li>
            <li>One or two small pieces, once or twice a week at most</li>
            <li>Cats with urinary issues — check with your vet first (vitamin C and bladder stones)</li>
          </ul>
        </div>

        {/* Article sections */}
        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Is Broccoli Good for Cats?</h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Honestly, not really. For a human, broccoli (<em>Brassica oleracea</em>, a cruciferous vegetable) is genuinely impressive. Per 100g raw, it contains 89.2 mg of vitamin C, 2.6g of fiber, 102 mcg of vitamin K, 316 mg of potassium, and 0.73 mg of iron (USDA FDC 170379). The antioxidants from sulforaphane, which forms when glucoraphanin meets the enzyme myrosinase, are well-documented for humans.
          </p>
          <p className="text-deepForest leading-relaxed">
            For cats, most of that does not translate. Cats are obligate carnivores with low glucokinase activity, which means they process carbohydrates and plant fiber poorly. The fiber may occasionally help with digestion or hairball movement, but calling broccoli nutritious for a cat is a real stretch. The important nuance most articles miss: cats prone to urinary issues should eat broccoli only rarely. Research suggests high vitamin C intake can contribute to calcium oxalate bladder stone formation in susceptible cats.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Cats Eat Raw Broccoli?</h2>
          <p className="text-deepForest leading-relaxed">
            Raw broccoli is tougher and harder to chew into safe pieces. The texture increases the risk of a choking hazard, especially from the stem. It is not toxic raw, but cooked is always the safer choice. My approach since Alfi&apos;s kitchen floor moment: always cook it first, let it cool completely, then offer a piece no bigger than my thumbnail.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Cats Eat Cooked Broccoli?</h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Yes, and this is the form I recommend. Steaming or boiling broccoli until completely soft reduces both the texture risk and the chance of stomach upset. The rules are simple: plain water only, no butter, no oil, no garlic, no onion, no salt, no seasonings.
          </p>
          <p className="text-deepForest leading-relaxed">
            Garlic and onion deserve a separate warning. Both are from the Allium family and are genuinely toxic to cats, causing oxidative damage to red blood cells (ASPCA Animal Poison Control). If the broccoli was cooked with either, do not offer it to your cat regardless of how small the serving is.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Cats Eat Broccoli Stems?</h2>
          <p className="text-deepForest leading-relaxed">
            This matters. Florets are soft and easy to cut into safe pieces. Stems are fibrous, tough, and significantly harder to digest. They also present a choking hazard even when cooked. I skip stems entirely and offer florets only, cut small after steaming.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Cats Eat Broccoli Sprouts?</h2>
          <p className="text-deepForest leading-relaxed">
            Broccoli sprouts are not the same as mature florets. They contain far higher concentrations of glucoraphanin and sulforaphane than mature broccoli. The human research on sprouts is interesting, but for cats there is no meaningful peer-reviewed data on how sprouts affect feline health. When there is no research, I stick to what we know is safe. A small cooked floret is enough.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Kittens Eat Broccoli?</h2>
          <p className="text-deepForest leading-relaxed">
            After weaning, kittens can technically try a very small piece of plain cooked floret. But kittens need protein-dense food to grow well, and their caloric needs per body weight are high. I would not make broccoli any kind of habit for a kitten. If you want to try it, one tiny piece is fine, but their diet should be almost entirely high-quality kitten food.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">How Much Broccoli Can My Cat Eat?</h2>
          <p className="text-deepForest leading-relaxed mb-3">
            The 10% treat rule covers this. Treats, including broccoli, should not exceed 10% of a cat&apos;s daily caloric intake. In practice: one or two small florets, about thumb-sized, once or twice a week at most (Chewy, reviewed by Angela Beal DVM, 2026).
          </p>

          {/* Serving size — structured list for AI Overview eligibility */}
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '0.75rem', padding: '1rem 1.25rem', marginTop: '0.75rem' }}>
            <p className="font-serif font-semibold text-deepForest mb-2" style={{ fontSize: '0.95rem' }}>How I prepare it for Alfi:</p>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', color: '#14532D', fontSize: '0.92rem', lineHeight: 1.8 }}>
              <li>Wash thoroughly. Wet market produce in Singapore often has pesticide residue.</li>
              <li>Steam or boil in plain water until soft, around 3 to 4 minutes.</li>
              <li>Let it cool completely before offering.</li>
              <li>Cut it small. Smaller than a typical kibble cluster.</li>
              <li>One or two pieces. Not a bowl.</li>
            </ol>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Can Cats Eat Broccoli and Cheese?</h2>
          <p className="text-deepForest leading-relaxed">
            No. Broccoli cheddar soup, cheesy broccoli, any broccoli dish made with butter or dairy is not safe for cats. Most adult cats are lactose intolerant. The fat content in cheese and butter adds nothing useful, and cooked broccoli dishes almost always have garlic, salt, or other seasonings mixed in. Plain only, always.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Happens If My Cat Eats Too Much Broccoli?</h2>
          <p className="text-deepForest leading-relaxed">
            Most likely: gas, loose stools, vomiting, or general digestive discomfort. Nothing permanent, but uncomfortable. If your cat ate a large amount, or if the broccoli had garlic or onion in it, call your vet or the{' '}
            <strong>Pet Poison Helpline at 855-764-7661</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">Why Does My Cat Want to Eat Broccoli?</h2>
          <p className="text-deepForest leading-relaxed">
            Broccoli&apos;s slight sulfur-like smell, from those same glucoraphanin compounds, may trigger curiosity in cats because sulfur compounds are also present in meat and animal proteins. Alfi was probably not being adventurous. He was chasing a smell that reminded him of something he actually wanted. Classic cat logic.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">What Vegetables Are Toxic to Cats?</h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Garlic, onion, chives, and leeks are all from the Allium family and are toxic to cats, causing red blood cell damage even in small quantities (ASPCA Animal Poison Control). Raw green tomatoes and mushrooms are also best avoided. For a safe occasional list alongside broccoli, cooked carrots, cucumber, and plain cooked peas are generally considered fine in small amounts.
          </p>
          <p className="text-deepForest leading-relaxed">
            See the full guide on{' '}
            <a href="/pets/what-can-cats-eat" style={{ color: '#15803D', textDecoration: 'underline' }}>
              what cats can eat
            </a>{' '}
            for a broader breakdown.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Can cats eat broccoli every day?</h3>
              <p className="text-deepForest text-sm leading-relaxed">No. Even if your cat enjoys it, daily broccoli can contribute to digestive issues over time. Once or twice a week at most, in small portions.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Can cats eat broccoli raw or cooked?</h3>
              <p className="text-deepForest text-sm leading-relaxed">Both are non-toxic, but cooked is safer. Raw broccoli is tougher, harder to chew into safe pieces, and more likely to cause a choking hazard or stomach upset.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">Do cats like broccoli?</h3>
              <p className="text-deepForest text-sm leading-relaxed">Most cats are indifferent or mildly put off by the smell. A few, like Alfi, seem genuinely curious. If your cat shows no interest, do not push it. There is no nutritional reason for them to eat it.</p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">What should I do if my cat ate broccoli with garlic or onion?</h3>
              <p className="text-deepForest text-sm leading-relaxed">Contact your vet immediately or call the Pet Poison Helpline: 855-764-7661. Garlic and onion are toxic to cats and the effects can be serious.</p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-6" style={{ borderTop: '1px solid #BBF7D0', paddingTop: '1.5rem' }}>
          <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Sources</h2>
          <ol style={{ margin: 0, paddingLeft: '1.25rem', color: '#4B7C59', fontSize: '0.82rem', lineHeight: 2 }}>
            <li>
              USDA FDC ID 170379 (broccoli, raw):{' '}
              <a href="https://nutritiondatahub.com/food/broccoli-raw-170379" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                nutritiondatahub.com
              </a>
            </li>
            <li>
              Chewy, Angela Beal DVM (updated 2026-05-19):{' '}
              <a href="https://www.chewy.com/education/cat/food-and-nutrition/can-cats-eat-broccoli" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                chewy.com
              </a>
            </li>
            <li>
              Untamed Cat Food — vitamin C and bladder stone guidance:{' '}
              <a href="https://untamed.com/blogs/nutrition/can-cats-eat-broccoli" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                untamed.com
              </a>
            </li>
            <li>
              NowFresh, Jocelyn Lambie MSc Companion Animal Nutrition (2026-05-04):{' '}
              <a href="https://nowfresh.com/en-us/blog/can-cats-eat-broccoli" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                nowfresh.com
              </a>
            </li>
            <li>
              PetMD — Can Cats Eat Broccoli:{' '}
              <a href="https://www.petmd.com/cat/nutrition/can-cats-eat-broccoli" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                petmd.com
              </a>
            </li>
            <li>
              ASPCA Animal Poison Control (toxic plants and Allium species):{' '}
              <a href="https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants" target="_blank" rel="noopener noreferrer" style={{ color: '#15803D' }}>
                aspca.org
              </a>
            </li>
          </ol>
        </section>

      </article>
    </>
  )
}
