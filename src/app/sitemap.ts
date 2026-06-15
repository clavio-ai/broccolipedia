import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://broccolipedia.com'
  const date = '2026-06-15'

  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: date, priority: 1.0, changeFrequency: 'weekly' },

    // Nutrition hub
    { url: `${base}/nutrition`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/benefits`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/calories`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/protein`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/fiber`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/carbs`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/vitamins`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/sprouts`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/nutrition/raw-vs-cooked`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },

    // How to cook hub
    { url: `${base}/how-to-cook`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/steam`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/roast`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/air-fryer`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/boil`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/microwave`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/saute`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/frozen`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/how-to-cook/blanch`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // Recipes hub
    { url: `${base}/recipes`, lastModified: date, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/recipes/soup`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/soup/broccoli-cheddar`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/soup/cream-of-broccoli`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/soup/broccoli-cheese`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/salad`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/salad/classic`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/salad/with-bacon`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/salad/dressing`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/casserole`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/casserole/broccoli-rice`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/casserole/chicken-broccoli`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/casserole/broccoli-cheese`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/beef`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/beef/beef-and-broccoli`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/chicken`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/chicken/chicken-broccoli`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/recipes/pasta`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/recipes/roasted`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },

    // Varieties hub
    { url: `${base}/varieties`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/varieties/broccoli-rabe`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/varieties/chinese-broccoli`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/varieties/broccolini`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/varieties/romanesco`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // Growing hub
    { url: `${base}/growing`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/growing/from-seed`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/growing/companion-plants`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/growing/when-to-harvest`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/growing/in-containers`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // Storage hub
    { url: `${base}/storage`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/storage/how-to-freeze`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/storage/shelf-life`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/storage/how-to-cut-florets`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/storage/is-it-bad`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // Facts hub
    { url: `${base}/facts`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/facts/is-broccoli-man-made`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/facts/history`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/facts/broccoli-vs-cauliflower`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/facts/broccoli-vs-kale`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/facts/types`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // Pets hub
    { url: `${base}/pets`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/pets/can-dogs-eat-broccoli`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/pets/can-cats-eat-broccoli`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/pets/can-chickens-eat-broccoli`, lastModified: date, priority: 0.7, changeFrequency: 'monthly' },

    // AEO additions
    { url: `${base}/glossary`, lastModified: date, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/what-is-broccoli`, lastModified: date, priority: 0.9, changeFrequency: 'monthly' },

    // About
    { url: `${base}/about`, lastModified: date, priority: 0.7, changeFrequency: 'yearly' },
  ]

  return pages
}
