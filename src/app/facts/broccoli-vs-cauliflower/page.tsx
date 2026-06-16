import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Broccoli vs Cauliflower Nutrition: Which Is Actually Healthier?',
  description: 'Broccoli vs cauliflower head-to-head on vitamin C, vitamin K, protein, fiber, sulforaphane, and calories. USDA data. The verdict: broccoli wins on nutrients, cauliflower wins for keto.',
  keywords: [
    'broccoli vs cauliflower nutrition',
    'broccoli or cauliflower healthier',
    'broccoli vs cauliflower',
    'cauliflower vs broccoli',
    'broccoli cauliflower comparison',
    'broccoli vs cauliflower vitamin c',
  ],
  openGraph: {
    title: 'Broccoli vs Cauliflower Nutrition: Which Is Actually Healthier?',
    description: 'Broccoli has nearly double the vitamin C of cauliflower, six times more vitamin K, and more protein. Full USDA comparison by Elena Ignacio.',
    type: 'article',
    url: 'https://broccolipedia.com/facts/broccoli-vs-cauliflower',
    images: [
      {
        url: '/images/broccoli-vs-cauliflower/broccoli-vs-cauliflower-hero-broccoli-feature.webp',
        width: 1200,
        height: 630,
        alt: 'Broccoli and cauliflower side by side on a cutting board',
      },
    ],
  },
  alternates: {
    canonical: 'https://broccolipedia.com/facts/broccoli-vs-cauliflower',
  },
}

const schemaJson = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://broccolipedia.com/facts/broccoli-vs-cauliflower#article",
    "headline": "Broccoli vs Cauliflower Nutrition: Which Is Actually Healthier?",
    "description": "Broccoli vs cauliflower compared on vitamin C, vitamin K, protein, fiber, sulforaphane, and calories. USDA-sourced data plus practical cooking guidance from Elena Ignacio.",
    "datePublished": "2026-06-16",
    "dateModified": "2026-06-16",
    "url": "https://broccolipedia.com/facts/broccoli-vs-cauliflower",
    "image": {
      "@type": "ImageObject",
      "url": "https://broccolipedia.com/images/broccoli-vs-cauliflower/broccoli-vs-cauliflower-hero-broccoli-feature.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "@id": "https://broccolipedia.com/about#elena-ignacio",
      "name": "Elena Ignacio",
      "url": "https://broccolipedia.com/about",
      "sameAs": [
        "https://www.tiktok.com/@elenasainda",
        "https://www.youtube.com/@adelevlogs",
        "https://www.facebook.com/elena.ignacio"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "BroccoliPedia",
      "url": "https://broccolipedia.com"
    },
    "mentions": [
      {
        "@type": "Thing",
        "name": "Broccoli",
        "sameAs": "https://www.wikidata.org/wiki/Q47722"
      },
      {
        "@type": "Thing",
        "name": "Cauliflower",
        "sameAs": "https://www.wikidata.org/wiki/Q7537"
      },
      {
        "@type": "Thing",
        "name": "Vitamin C",
        "sameAs": "https://www.wikidata.org/wiki/Q199678"
      },
      {
        "@type": "Thing",
        "name": "Sulforaphane",
        "sameAs": "https://www.wikidata.org/wiki/Q424489"
      },
      {
        "@type": "Thing",
        "name": "Vitamin K",
        "sameAs": "https://www.wikidata.org/wiki/Q182338"
      },
      {
        "@type": "Thing",
        "name": "Glucoraphanin",
        "sameAs": "https://www.wikidata.org/wiki/Q5572329"
      },
      {
        "@type": "Thing",
        "name": "Myrosinase",
        "sameAs": "https://www.wikidata.org/wiki/Q416212"
      },
      {
        "@type": "Thing",
        "name": "Ketogenic diet",
        "sameAs": "https://www.wikidata.org/wiki/Q1070684"
      },
      {
        "@type": "Thing",
        "name": "Dietary fiber",
        "sameAs": "https://www.wikidata.org/wiki/Q215210"
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".quick-answer", ".nutrition-table-intro"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://broccolipedia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Facts",
        "item": "https://broccolipedia.com/facts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Broccoli vs Cauliflower",
        "item": "https://broccolipedia.com/facts/broccoli-vs-cauliflower"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is healthier for you, cauliflower or broccoli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broccoli is more nutrient-dense. Per 100g raw, broccoli has 89.2mg of vitamin C versus cauliflower's 48.2mg, 102mcg of vitamin K versus 15.5mcg, 2.82g of protein versus 1.90g, and 2.6g of fiber versus 2.0g. Cauliflower has slightly fewer calories (25 kcal versus 34 kcal). Source: USDA FDC ID 170379."
        }
      },
      {
        "@type": "Question",
        "name": "Which has more vitamin C: broccoli, cauliflower, or an orange?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broccoli has 89.2mg of vitamin C per 100g (99% DV), which is more than a medium orange (around 53mg) and significantly more than cauliflower (48.2mg). Source: USDA FDC ID 170379."
        }
      },
      {
        "@type": "Question",
        "name": "Does cauliflower cause more gas than broccoli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both broccoli and cauliflower cause gas. They are both high-FODMAP vegetables containing fermentable carbohydrates that gut bacteria break down, producing gas. Neither is significantly easier on the stomach than the other. Cooking either vegetable reduces the digestive impact compared to eating it raw."
        }
      },
      {
        "@type": "Question",
        "name": "Is broccoli good for A1C and blood sugar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research suggests a connection. A 2012 randomized controlled trial found that 10g of broccoli sprout powder daily for four weeks reduced fasting blood glucose by about 1.9 mmol/L. Broccoli is also high-fiber and low on the glycemic index. It is not a treatment for diabetes or blood sugar conditions. Consult a doctor for A1C management."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for keto: broccoli or cauliflower?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cauliflower is more useful for keto cooking because it mimics rice, mash, and pizza bases. Both vegetables fit within typical keto carb limits (roughly 3g net carbs per 100g for cauliflower versus 4g for broccoli), but cauliflower has the functional advantage for keto recipes."
        }
      },
      {
        "@type": "Question",
        "name": "Are broccoli and cauliflower the same plant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Same species, different varieties. Both are Brassica oleracea. Broccoli was developed for its flower clusters; cauliflower for its dense white curd. Kale, Brussels sprouts, and cabbage are also Brassica oleracea varieties."
        }
      },
      {
        "@type": "Question",
        "name": "Does cooking destroy the vitamins in broccoli or cauliflower?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the method. Vitamin C is water-soluble and heat-sensitive. Boiling sends much of it into the cooking water you pour away. Steaming and stir-frying lose less. For broccoli specifically, boiling for more than one minute destroys myrosinase, which eliminates sulforaphane production. The fix: chop broccoli first, wait 40 minutes, then cook. Source: PMID 32328271."
        }
      }
    ]
  }
]

const nutritionRows = [
  ['Calories', '34 kcal', '25 kcal', 'Cauliflower (lower)'],
  ['Protein', '2.82g', '1.90g', 'Broccoli'],
  ['Fiber', '2.6g', '2.0g', 'Broccoli'],
  ['Vitamin C', '89.2mg (99% DV)', '48.2mg (54% DV)', 'Broccoli'],
  ['Vitamin K', '102mcg (85% DV)', '15.5mcg (13% DV)', 'Broccoli'],
  ['Folate', '63mcg', '57mcg', 'Broccoli (slightly)'],
  ['Calcium', '47mg', '22mg', 'Broccoli'],
]

export default function BroccoliVsCauliflowerPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <nav className="text-sm text-sage mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/facts" className="hover:text-forest">Facts</Link> /{' '}
        <span className="text-deepForest">Broccoli vs Cauliflower</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">
        Broccoli vs Cauliflower Nutrition: Which Is Actually Healthier?
      </h1>

      <div className="flex items-center gap-3 mb-6 text-sm text-sage">
        <span>By <Link href="/about" className="text-forest hover:underline">Elena Ignacio</Link></span>
        <span>|</span>
        <time dateTime="2026-06-16">June 16, 2026</time>
      </div>

      <div className="mb-6 rounded-lg overflow-hidden">
        <Image
          src="/images/broccoli-vs-cauliflower/broccoli-vs-cauliflower-hero-broccoli-feature.webp"
          alt="Broccoli and cauliflower side by side on a wooden cutting board, natural light"
          width={800}
          height={450}
          className="w-full object-cover"
          priority
        />
      </div>

      <p className="text-lg text-deepForest leading-relaxed mb-6">
        Adam ate broccoli like it was his job until he turned eight. We called it &ldquo;little trees&rdquo; and he finished his plate before we sat down. Then 2023 happened and he decided, overnight, that broccoli was the worst thing on earth. I tried everything. So I started sneaking cauliflower into everything instead. Mashed. Riced. Blended into pasta sauce. The thing disappears when you cook it right. That phase made me actually look up the numbers side by side, because I needed to know what I was trading away.
      </p>

      <div className="quick-answer bg-greenTint border-l-4 border-forest rounded-r-lg p-5 mb-8">
        <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Quick Answer</p>
        <p className="text-deepForest leading-relaxed">
          Broccoli wins on almost every nutrition measure. Nearly double the vitamin C of cauliflower, six times more vitamin K, more protein, more fiber, and more beta-carotene. Cauliflower has slightly fewer calories and carbs. If your goal is nutrients per bite, broccoli wins. If the only way to get vegetables into someone is cauliflower, that is still a good trade.
        </p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Which is healthier for you, cauliflower or broccoli?
      </h2>
      <p className="nutrition-table-intro text-deepForest leading-relaxed mb-4">
        Broccoli, and it&apos;s not particularly close. Per 100g raw, broccoli has 89.2mg of vitamin C (99% of the daily value) versus cauliflower&apos;s 48.2mg (USDA FDC 170379). Vitamin K: 102mcg versus 15.5mcg. Protein: 2.82g versus 1.90g. Fiber: 2.6g versus 2.0g. Calcium: 47mg versus 22mg.
      </p>
      <p className="text-deepForest leading-relaxed mb-4">
        The one category where cauliflower leads is calories: 25 kcal per 100g versus broccoli&apos;s 34 kcal (USDA FDC 170379). That matters if you&apos;re eating cauliflower rice by the bowl, but the difference per serving is modest.
      </p>

      <p className="text-sm font-semibold text-deepForest mb-2">Nutrition per 100g raw:</p>
      <p className="text-xs text-sage mb-2">Source: USDA FoodData Central FDC ID 170379 (broccoli); USDA Standard Reference (cauliflower)</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-deepForest text-white">
              <th className="px-3 py-2 text-left">Nutrient</th>
              <th className="px-3 py-2 text-left">Broccoli</th>
              <th className="px-3 py-2 text-left">Cauliflower</th>
              <th className="px-3 py-2 text-left">Winner</th>
            </tr>
          </thead>
          <tbody>
            {nutritionRows.map(([nutrient, broc, caul, winner], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-greenTint' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-deepForest">{nutrient}</td>
                <td className="px-3 py-2 text-sage">{broc}</td>
                <td className="px-3 py-2 text-sage">{caul}</td>
                <td className="px-3 py-2 text-xs font-semibold text-forest">{winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Which has more vitamin C: broccoli, cauliflower, or an orange?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        This surprised me. I was comparing produce labels at FairPrice in Singapore. Broccoli has 89.2mg of vitamin C per 100g (USDA FDC 170379). A medium orange sits around 53mg. Cauliflower is 48.2mg (USDA Standard Reference).
      </p>
      <p className="text-deepForest leading-relaxed mb-4">
        Broccoli beats an orange on vitamin C. By a lot. And almost nobody knows this.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        My boys get a meaningful vitamin C hit from a side of broccoli with dinner, more than from a glass of juice. Fine by me. Juice has all the sugar and none of the fiber.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        What is sulforaphane and which vegetable has more of it?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Sulforaphane forms when glucoraphanin (stored in the vegetable) meets myrosinase (an enzyme in the same cells). Chopping or chewing releases both. They react. Sulforaphane forms. Broccoli has significantly more glucoraphanin than cauliflower.
      </p>
      <p className="text-deepForest leading-relaxed mb-4">
        Here&apos;s what no one tells you: you can eliminate all of this with how you cook. Boiling broccoli for more than one minute destroys myrosinase (PMID 32328271, 2020). No enzyme, no reaction, no sulforaphane.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-sm font-semibold text-amber-800 mb-1">The chop-first hack</p>
        <p className="text-sm text-amber-900 leading-relaxed">
          Chop the broccoli first. Wait 40 minutes. Then cook. That window lets the myrosinase reaction complete before heat kills the enzyme. I chop broccoli the moment I get home from the supermarket, leave it on the board while I unpack, and cook it later. Zero extra time, much better nutrition.
        </p>
      </div>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Does cooking destroy vitamins in broccoli or cauliflower?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        It depends on the method.
      </p>
      <p className="text-deepForest leading-relaxed mb-4">
        Vitamin C is water-soluble and heat-sensitive. Boiling sends it into the cooking water you pour away. Steaming and stir-frying lose much less. Vitamin K is fat-soluble and survives heat well. Fiber stays regardless of method.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        The real loss with broccoli is sulforaphane, as above. Steam for 3 to 5 minutes or stir-fry for 2 minutes and you keep most of the nutrients. I do a lot of wok cooking with garlic and sesame oil. Adam, who refuses broccoli raw and roasted, will eat it that way. Alfi eats it any way I cook it. Different boys.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Is cauliflower better for weight loss or keto?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Both vegetables are very low calorie, so weight loss comes down to volume and satiety. Broccoli has more fiber (2.6g versus 2.0g per 100g, USDA FDC 170379), so it fills you up slightly more per gram.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        For keto, cauliflower wins. Not because of the carb difference (roughly 3g net versus 4g per 100g), but because of how it behaves in keto cooking. It mimics rice. It works as mash. It holds fat well. Broccoli fits within keto limits too, but cauliflower has the functional edge in that style of eating.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Does cauliflower cause more gas than broccoli?
      </h2>
      <p className="text-deepForest leading-relaxed mb-4">
        Both do. They&apos;re both high-FODMAP vegetables containing fermentable carbohydrates that gut bacteria break down, producing gas. Neither is easier on the stomach in that sense.
      </p>
      <p className="text-deepForest leading-relaxed mb-8">
        Cooking helps with both. Heat breaks down some of the fermentable fibers. Steaming or roasting either vegetable tends to reduce digestive impact compared to eating it raw. If you&apos;re FODMAP-sensitive, the choice between them matters less than portion size and cooking method.
      </p>

      <h2 className="font-serif font-bold text-2xl text-deepForest mb-3">
        Are broccoli and cauliflower the same plant?
      </h2>
      <p className="text-deepForest leading-relaxed mb-8">
        Same species, different varieties. Both are <em>Brassica oleracea</em>. Broccoli was developed for its flower clusters; cauliflower for its dense white curd. Kale, Brussels sprouts, and cabbage are other varieties from the same species. This is why broccoflower and Romanesco exist: crosses within the same plant family.
      </p>

      <section className="mt-2 mb-8">
        <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-deepForest mb-2">Is broccoli good for blood sugar and A1C?</h3>
            <p className="text-deepForest leading-relaxed">
              Research suggests a link. A 2012 randomized controlled trial found that 10g of broccoli sprout powder daily for four weeks reduced fasting blood glucose by about 1.9 mmol/L (ScienceDirect, 2012). Broccoli is also high-fiber and low on the glycemic index. It&apos;s not a treatment, but it&apos;s a smart dietary choice if blood sugar is a concern.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-deepForest mb-2">Can I substitute cauliflower for broccoli in recipes?</h3>
            <p className="text-deepForest leading-relaxed">
              Usually yes. Cauliflower is milder and holds its shape well when roasted. In soups, stir-fries, and pasta dishes, they swap well. Raw broccoli has more textural presence in salads. The flavor difference is real but not dramatic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-deepForest mb-2">Which is better for kids who won&apos;t eat vegetables?</h3>
            <p className="text-deepForest leading-relaxed">
              Cauliflower, because it disappears. Riced into fried rice, blended into sauce, hidden in a pasta base. Broccoli&apos;s stronger flavor and color make it harder to conceal. My honest answer: cauliflower is the Trojan horse for resistant eaters. Use it. Work on broccoli when you have more ground to stand on.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-deepForest mb-2">How well does broccoli calcium absorb?</h3>
            <p className="text-deepForest leading-relaxed">
              Better than most plant sources. Research by Weaver et al. (1990, <em>American Journal of Clinical Nutrition</em>) found broccoli calcium absorbs at roughly 53%. That&apos;s higher than many plant-based sources, making broccoli (47mg per 100g, USDA FDC 170379) a meaningful calcium contributor.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-greenTint rounded-lg p-5 mb-8">
        <p className="text-xs font-semibold text-forest uppercase tracking-wider mb-3">Sources</p>
        <ul className="text-xs text-sage space-y-1">
          <li>USDA FoodData Central, FDC ID 170379 (broccoli, raw)</li>
          <li>USDA Standard Reference (cauliflower, raw)</li>
          <li>PMID 32328271: Myrosinase activity and cooking methods, 2020</li>
          <li>ScienceDirect: Broccoli sprout powder RCT, blood glucose, 2012</li>
          <li>Weaver CM et al.: Calcium bioavailability from broccoli, <em>American Journal of Clinical Nutrition</em>, 1990</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/facts/broccoli-vs-kale" className="text-sm text-forest font-semibold hover:underline">
          Broccoli vs Kale &#8594;
        </Link>
        <Link href="/nutrition" className="text-sm text-forest font-semibold hover:underline">
          Broccoli Nutrition Hub &#8594;
        </Link>
        <Link href="/varieties/romanesco" className="text-sm text-forest font-semibold hover:underline">
          What Is Romanesco? &#8594;
        </Link>
      </div>
    </article>
  )
}
