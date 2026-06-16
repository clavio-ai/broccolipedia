import type { Metadata } from 'next'
import { QuickAnswer } from '@/components/QuickAnswer'

export const metadata: Metadata = {
  title: 'Can Dogs Eat Broccoli? Safe Amount Guide (10% Rule Explained)',
  description:
    'Dogs can eat broccoli safely in small amounts — under 10% of daily food intake. Toxic above 25%. Size-specific quantities, raw vs cooked, stems vs florets, and what to do if your dog ate too much.',
  keywords: [
    'can dogs eat broccoli',
    'how much broccoli can a dog eat',
    'is broccoli safe for dogs',
    'broccoli toxic to dogs',
    'broccoli for dogs safe amount',
    'can dogs eat raw broccoli',
    'can dogs eat broccoli stems',
  ],
  openGraph: {
    title: 'Can Dogs Eat Broccoli? Safe Amount Guide',
    description:
      'Under 10% of daily intake is safe. Over 25% is toxic. Size-specific amounts, prep tips, and what to do if your dog ate too much broccoli.',
    url: 'https://broccolipedia.com/pets/can-dogs-eat-broccoli',
    type: 'article',
    images: [
      {
        url: '/images/can-dogs-eat-broccoli/can-dogs-eat-broccoli-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'A golden retriever sniffing a small bowl of broccoli florets on a kitchen counter',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/pets/can-dogs-eat-broccoli',
  },
}

// ── Schema: Article ────────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://broccolipedia.com/pets/can-dogs-eat-broccoli#article',
  headline: 'Can Dogs Eat Broccoli? Safe Amount Guide (10% Rule Explained)',
  description:
    'Dogs can eat broccoli safely in small amounts — under 10% of daily food intake. Toxic above 25%. Size-specific quantities, raw vs cooked, stems vs florets, and what to do if your dog ate too much.',
  url: 'https://broccolipedia.com/pets/can-dogs-eat-broccoli',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
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
    url: 'https://broccolipedia.com/images/can-dogs-eat-broccoli/can-dogs-eat-broccoli-hero-broccoli-feature.webp',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://broccolipedia.com/pets/can-dogs-eat-broccoli',
  },
  // WikiData-linked entities via TextRazor extraction
  mentions: [
    {
      '@type': 'Thing',
      name: 'Broccoli',
      sameAs: 'https://www.wikidata.org/wiki/Q47722',
    },
    {
      '@type': 'Animal',
      name: 'Dog',
      sameAs: 'https://www.wikidata.org/wiki/Q144',
    },
    {
      '@type': 'ChemicalSubstance',
      name: 'Isothiocyanate',
      sameAs: 'https://www.wikidata.org/wiki/Q416049',
    },
    {
      '@type': 'ChemicalSubstance',
      name: 'Sulforaphane',
      sameAs: 'https://www.wikidata.org/wiki/Q424489',
    },
    {
      '@type': 'ChemicalSubstance',
      name: 'Glucosinolate',
      sameAs: 'https://www.wikidata.org/wiki/Q416883',
    },
    {
      '@type': 'ChemicalSubstance',
      name: 'Glucoraphanin',
      sameAs: 'https://www.wikidata.org/wiki/Q5572329',
    },
    {
      '@type': 'Gene',
      name: 'NFE2L2 (NRF2)',
      sameAs: 'https://www.wikidata.org/wiki/Q18030088',
    },
    {
      '@type': 'Enzyme',
      name: 'Myrosinase',
      sameAs: 'https://www.wikidata.org/wiki/Q416212',
    },
    {
      '@type': 'Organization',
      name: 'Purdue University',
      sameAs: 'https://www.wikidata.org/wiki/Q217741',
    },
    {
      '@type': 'Organization',
      name: 'American Kennel Club',
      sameAs: 'https://www.wikidata.org/wiki/Q38216',
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
      name: 'How much broccoli can I feed my dog a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli should make up no more than 10% of your dog\'s total daily food intake. For a dog eating one cup of food per day, that is about 2 tablespoons of broccoli. For a medium dog eating 2 cups per day, 3 to 4 tablespoons is the safe range. Always start with a smaller amount and watch for any stomach upset.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what amount does broccoli become toxic to dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli becomes toxic to dogs when it exceeds 25% of their daily food intake. This is due to isothiocyanates in the florets, which cause gastrointestinal irritation in high concentrations. Under 10% of daily intake is considered safe by veterinarians. Symptoms of toxicity include vomiting, diarrhea, lethargy, and abdominal pain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can dogs eat raw broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, dogs can eat raw broccoli. Raw broccoli preserves more sulforaphane than cooked broccoli — cooking above 155°F (68°C) destroys the myrosinase enzyme that activates this compound. Cut raw broccoli into small, bite-sized pieces to prevent choking. Wash thoroughly before serving. Both raw and lightly steamed (under 3 minutes) broccoli are safe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can dogs eat broccoli stems and stalks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dogs can eat broccoli stems if they are cut into small pieces. Large pieces of stem can cause esophageal obstruction, especially in small breeds. This is a choking and blockage risk, not a toxicity issue. Florets are generally safer and easier to portion. If feeding stems, cut into half-inch pieces or smaller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does broccoli give dogs gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broccoli gives dogs gas because of its high fiber content and the isothiocyanates in the florets, which can cause gastrointestinal irritation and flatulence. Broccoli sprouts cause less gas than mature broccoli florets and contain approximately 100 times more sulforaphane, making them a practical alternative for dogs who react badly to regular broccoli.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a dog eats too much broccoli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a dog eats too much broccoli (over 25% of daily intake), they may experience vomiting, diarrhea, lethargy, and abdominal pain due to isothiocyanate toxicity. Contact your vet if your dog shows these symptoms, especially after eating a large amount. For smaller overages (over 10% but not huge amounts), monitor at home and withhold broccoli for a few days.',
      },
    },
  ],
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
      name: 'Pets',
      item: 'https://broccolipedia.com/pets',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Can Dogs Eat Broccoli?',
      item: 'https://broccolipedia.com/pets/can-dogs-eat-broccoli',
    },
  ],
}

// ── Schema: Speakable ──────────────────────────────────────────────────────────
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['.quick-answer', '.safety-summary'],
}

export default function CanDogsEatBroccoliPage() {
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-sage mb-4">
          <ol className="flex gap-2 list-none p-0 m-0">
            <li><a href="/" className="hover:text-deepForest">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><a href="/pets" className="hover:text-deepForest">Pets</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-deepForest font-medium" aria-current="page">Can Dogs Eat Broccoli?</li>
          </ol>
        </nav>

        {/* Hero image */}
        <img
          src="/images/can-dogs-eat-broccoli/can-dogs-eat-broccoli-hero-broccoli-feature.webp"
          alt="A dog sniffing a small bowl of plain broccoli florets on a light wood surface"
          width={800}
          height={450}
          className="w-full rounded-xl mb-6 object-cover"
          loading="eager"
        />

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-5 leading-tight">
          Can Dogs Eat Broccoli? Safe Amount Guide
        </h1>

        {/* Intro — Elena personal moment first */}
        <p className="text-deepForest leading-relaxed mb-5">
          Mango ate an entire head of raw broccoli off the kitchen counter in Batangas and I spent the rest
          of that Sunday reading every vet site I could find. He is my sister&apos;s golden retriever, and he
          looked completely fine the whole time. I was the one who was a mess. The problem with all those
          sites was the same: they gave me rules but not answers. &quot;Under 10% of daily intake&quot; sounds
          helpful until you are standing in a kitchen wondering what 10% actually means for the dog in front
          of you.
        </p>

        {/* QuickAnswer — speakable */}
        <QuickAnswer>
          Yes, dogs can eat broccoli safely. Keep it under 10% of their daily food intake. For a dog eating
          one cup of food a day, that is about 2 tablespoons of broccoli. Over 25% of daily intake becomes
          toxic due to isothiocyanates in the florets. Serve plain, cut small, no seasoning.
        </QuickAnswer>

        {/* Key Takeaways — speakable */}
        <div className="safety-summary bg-greenTint rounded-xl p-5 mb-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Key Takeaways</h2>
          <ul className="space-y-1.5 text-sm text-deepForest">
            <li>Safe: under 10% of daily food intake</li>
            <li>Toxic threshold: over 25% of daily intake</li>
            <li>Florets are safer than stalks for portion control</li>
            <li>Raw preserves more sulforaphane than cooked</li>
            <li>Broccoli sprouts have ~100x more sulforaphane and cause less gas</li>
            <li>Never: garlic, onion, salt, butter, or oil</li>
            <li>Skip broccoli for puppies</li>
          </ul>
        </div>

        {/* H2: How much */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How Much Broccoli Can Dogs Eat Per Day?
          </h2>
          <p className="text-deepForest leading-relaxed mb-4">
            The safe rule is under 10% of your dog&apos;s total daily food intake. Over 25% is where vets
            classify it as toxic, because of isothiocyanates in the florets. (AKC Chief Veterinarian
            Dr. Jerry Klein, DVM, 2026)
          </p>

          {/* Size-specific quantity table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-greenTint">
                  <th className="text-left px-3 py-2 font-semibold text-deepForest rounded-tl-lg">Dog Size</th>
                  <th className="text-left px-3 py-2 font-semibold text-deepForest">Daily Food</th>
                  <th className="text-left px-3 py-2 font-semibold text-deepForest rounded-tr-lg">Safe Broccoli Amount</th>
                </tr>
              </thead>
              <tbody className="text-deepForest">
                <tr className="border-b border-greenTint">
                  <td className="px-3 py-2">Small (under 25 lbs)</td>
                  <td className="px-3 py-2">1 cup</td>
                  <td className="px-3 py-2 font-medium">2 tablespoons</td>
                </tr>
                <tr className="border-b border-greenTint">
                  <td className="px-3 py-2">Medium (25–50 lbs)</td>
                  <td className="px-3 py-2">2 cups</td>
                  <td className="px-3 py-2 font-medium">3–4 tablespoons</td>
                </tr>
                <tr className="border-b border-greenTint">
                  <td className="px-3 py-2">Large (50–90 lbs)</td>
                  <td className="px-3 py-2">3–4 cups</td>
                  <td className="px-3 py-2 font-medium">5–6 tablespoons</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Extra-large (90+ lbs)</td>
                  <td className="px-3 py-2">5+ cups</td>
                  <td className="px-3 py-2 font-medium">A small handful</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sage text-sm">
            For a dog eating one cup of food per day, no more than 2 tablespoons of broccoli. (Four Leaf Rover,
            2023) That is the concrete number I wish I had when Mango was standing over his broccoli pile
            looking completely unbothered.
          </p>
        </section>

        {/* H2: Isothiocyanates */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What Are Isothiocyanates and Why Do They Matter?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Broccoli florets contain isothiocyanates — sulfur-containing compounds formed when glucosinolates
            break down. In humans, these are associated with health-protective effects. In dogs, high
            concentrations irritate the gastrointestinal tract and can cause vomiting, diarrhea, and stomach
            pain. (AKC, 2026; PetMD/Mitchell DVM, 2022)
          </p>
          <p className="text-deepForest leading-relaxed">
            The severity varies by individual dog. Some handle a fair amount and feel fine. Others react badly
            to a small piece. Start with a small amount and watch your dog&apos;s reaction before giving more. The
            florets hold the most isothiocyanates. The thick lower stalks create a different risk: choking and
            potential intestinal blockage, especially in small breeds. (AKC/Klein DVM, 2026)
          </p>
        </section>

        {/* H2: Raw broccoli */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Can Dogs Eat Raw Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Yes, and raw might actually be the better option if you care about preserving nutrients.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Broccoli contains a compound called sulforaphane, which research suggests activates an
            anti-inflammatory pathway in the body called NRF2. A study from Purdue University found that dogs
            eating vegetables three or more times per week had a 90% lower cancer risk compared to dogs who did
            not eat vegetables. That is a general vegetable finding, not broccoli-specific, but it changed how
            I think about this vegetable. (Dogs Naturally Magazine, citing Purdue University research, 2022)
          </p>
          <p className="text-deepForest leading-relaxed">
            Research suggests that heat above 155 degrees Fahrenheit (68 degrees Celsius) destroys myrosinase,
            the enzyme that converts glucoraphanin into active sulforaphane. Steam broccoli for more than three
            minutes and you lose most of the benefit. Frozen broccoli is often pre-blanched before freezing, so
            it also has reduced sulforaphane activity. Raw, lightly mulched broccoli preserves the most. If you
            cook it, keep the steam under three minutes at low heat. (Dogs Naturally Magazine, 2022)
          </p>
        </section>

        {/* H2: Sprouts */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Are Broccoli Sprouts Safer or Better Than Regular Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            This is the thing nobody talks about.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Research suggests broccoli sprouts contain approximately 100 times more sulforaphane than mature
            broccoli florets. They also cause less gas than regular broccoli, which is a real practical benefit
            for dogs who get gurgly from florets. (Dogs Naturally Magazine, 2022)
          </p>
          <p className="text-deepForest leading-relaxed">
            Sulforaphane only stays active in the body for about 24 hours, so daily feeding makes more sense
            than occasional large amounts. A large dog needs roughly half a cup of broccoli sprouts per day to
            approach a therapeutic sulforaphane dose of 0.1 to 0.5 milligrams per kilogram of body weight.
            (Dogs Naturally Magazine, 2022) Most dog owners are not doing this, but it is worth knowing.
          </p>
        </section>

        {/* H2: Stems */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            Can Dogs Eat Broccoli Stems?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            The thick lower stalk is the problematic one. It is dense and fibrous, and large pieces can cause
            esophageal obstruction in smaller breeds. (AKC/Klein DVM, 2026; Keep Your Pets Healthy, 2022)
            That is a physical hazard, not a toxicity issue. Cut the stem into small, thin pieces the same
            size as the florets and it is generally safe.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            Leaves are fine in small amounts and lower in isothiocyanates than the florets. But most dogs are
            not picking at leaves on their own, so it rarely comes up in practice.
          </p>
          <p className="text-deepForest leading-relaxed">
            Honestly, I stick with florets when feeding any dog. It is easier to manage the portion and the
            risk, and you avoid the choking question entirely.
          </p>
        </section>

        {/* H2: How to prepare */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            How to Prepare Broccoli for Your Dog
          </h2>
          <ol className="space-y-3 text-deepForest leading-relaxed">
            <li className="flex gap-3">
              <span className="font-bold text-deepForest min-w-[1.5rem]">1.</span>
              <span>Wash thoroughly to remove bacteria, pesticides, or residue.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-deepForest min-w-[1.5rem]">2.</span>
              <span>
                Cut florets into small pieces, roughly half an inch to one inch depending on your dog&apos;s size.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-deepForest min-w-[1.5rem]">3.</span>
              <span>
                Serve plain. No oil, no butter, no garlic, no salt. Garlic and onion are toxic to dogs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-deepForest min-w-[1.5rem]">4.</span>
              <span>Raw or lightly steamed (under three minutes) both work.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-deepForest min-w-[1.5rem]">5.</span>
              <span>
                Start with a small piece the first time and watch for stomach upset over the next few hours.
              </span>
            </li>
          </ol>
          <p className="text-sage text-sm mt-3">
            If your dog shows vomiting or diarrhea after eating broccoli, stop giving it. Not every dog
            tolerates it well. (Keep Your Pets Healthy, 2022)
          </p>
        </section>

        {/* H2: Too much */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
            What Happens If a Dog Eats Too Much Broccoli?
          </h2>
          <p className="text-deepForest leading-relaxed mb-3">
            Mango had some gas and a mildly upset stomach for an afternoon. He had probably eaten close to
            25% of his daily intake in one sitting.
          </p>
          <p className="text-deepForest leading-relaxed mb-3">
            If a dog eats more than 25% of their daily food as broccoli, watch for vomiting, diarrhea,
            lethargy, and abdominal pain. Those are signs of isothiocyanate toxicity and warrant a call to
            your vet. If the amount was very large, do not wait. (AKC/Klein DVM, 2026; BestFriendsVet, 2022)
          </p>
          <p className="text-deepForest leading-relaxed">
            For amounts that are over the 10% rule but not huge, monitor at home and skip the broccoli for
            a few days.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                Can puppies eat broccoli?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Better to skip it. Puppies&apos; digestive systems are still developing, and the fiber and
                isothiocyanates can cause stomach upset more easily than in adult dogs. (PetMD/Mitchell DVM, 2022)
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                How often can dogs eat broccoli?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Small daily amounts (under 10% of intake) are considered safe. If you want the sulforaphane
                benefit, daily small servings or broccoli sprouts work better than occasional large amounts.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                Can dogs eat broccoli cooked or raw?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Both are safe. Raw preserves more sulforaphane. Lightly steamed (under three minutes) is also
                fine. Never give broccoli cooked with garlic, onion, salt, or butter.
              </p>
            </div>
            <div className="border border-greenTint rounded-xl p-4">
              <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                What is the healthiest vegetable for a dog?
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                Research suggests cruciferous vegetables like broccoli and broccoli sprouts have real benefits
                due to sulforaphane activity. Carrots and green beans are also commonly recommended. Variety
                across vegetables likely matters more than finding a single best option.
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-greenTint pt-6 mt-8">
          <h2 className="font-serif font-bold text-lg text-deepForest mb-3">Sources</h2>
          <ol className="space-y-1.5 text-sm text-sage">
            <li>
              American Kennel Club. (2026, March 26).{' '}
              <em>Can dogs eat broccoli?</em>{' '}
              <a
                href="https://www.akc.org/expert-advice/nutrition/can-dogs-eat-broccoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                akc.org
              </a>
            </li>
            <li>
              Arnold, V. L. (2022, July 27). <em>Can dogs eat broccoli?</em> PetMD. Reviewed by Sandra C.
              Mitchell, DVM, DABVP.{' '}
              <a
                href="https://www.petmd.com/dog/nutrition/can-dogs-eat-broccoli"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                petmd.com
              </a>
            </li>
            <li>
              Four Leaf Rover. (2023, February 15). <em>Can dogs eat broccoli?</em>{' '}
              <a
                href="https://fourleafrover.com/blogs/natural-health/the-benefits-of-broccoli-for-dogs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                fourleafrover.com
              </a>
            </li>
            <li>
              Dogs Naturally Magazine. (2022).{' '}
              <em>Is broccoli good for dogs? How it fights cancer and disease</em> [Video]. YouTube.{' '}
              <a
                href="https://www.youtube.com/watch?v=dHywlRmgtIg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                youtube.com
              </a>
            </li>
            <li>
              Keep Your Pets Healthy. (2022). <em>Can dogs eat broccoli?</em> [Video]. YouTube.{' '}
              <a
                href="https://www.youtube.com/watch?v=QP8ZCdczKaI"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                youtube.com
              </a>
            </li>
            <li>
              Best Friends Veterinary Hospital. (2022). <em>Can dogs eat broccoli?</em>{' '}
              <a
                href="https://bestfriendsvet.org/blog/can-dogs-eat-broccoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                bestfriendsvet.org
              </a>
            </li>
            <li>
              USDA FoodData Central. (2019). <em>Broccoli, raw</em> (FDC ID: 170379).{' '}
              <a
                href="https://fdc.nal.usda.gov/food-details/170379"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-deepForest"
              >
                fdc.nal.usda.gov
              </a>
            </li>
          </ol>
        </section>

        {/* Author byline */}
        <div className="mt-8 pt-5 border-t border-greenTint text-sm text-sage">
          <span>Written by </span>
          <a
            href="https://broccolipedia.com/about"
            className="font-medium text-deepForest hover:underline"
          >
            Elena Ignacio
          </a>
          <span> · Published June 16, 2026</span>
        </div>
      </article>
    </>
  )
}
