import Image from 'next/image'
import Link from 'next/link'
import NutritionTable from './NutritionTable'

interface RecipeMeta {
  prepTime: string
  cookTime: string
  totalTime: string
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  calories?: number
}

interface RecipeStep {
  text: string
  image?: string
  imageAlt?: string
}

interface FAQ {
  question: string
  answer: string
}

interface RelatedRecipe {
  title: string
  href: string
  image: string
  prepTime: string
}

interface NutritionPer {
  calories: number
  protein: string
  carbs: string
  fiber: string
  fat: string
  servingSize: string
}

interface RecipeTemplateProps {
  title: string
  description: string
  image: string
  imageAlt: string
  meta: RecipeMeta
  ingredients: string[]
  steps: RecipeStep[]
  tips: string[]
  nutrition: NutritionPer
  faqs: FAQ[]
  related: RelatedRecipe[]
  keywords: string[]
  schemaJson: Record<string, unknown>
}

export default function RecipeTemplate({
  title,
  description,
  image,
  imageAlt,
  meta,
  ingredients,
  steps,
  tips,
  nutrition,
  faqs,
  related,
  keywords,
  schemaJson,
}: RecipeTemplateProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <div className="mb-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-deepForest mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-sage text-lg leading-relaxed mb-4">{description}</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Meta strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-greenTint rounded-xl p-4">
            <div className="text-center">
              <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">Prep</div>
              <div className="font-serif font-bold text-deepForest">{meta.prepTime}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">Cook</div>
              <div className="font-serif font-bold text-deepForest">{meta.cookTime}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">Total</div>
              <div className="font-serif font-bold text-deepForest">{meta.totalTime}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">Serves</div>
              <div className="font-serif font-bold text-deepForest">{meta.servings}</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">Difficulty</div>
              <div className="font-serif font-bold text-deepForest">{meta.difficulty}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white border border-greenTint rounded-xl p-5 shadow-soft">
              <h2 className="font-serif font-bold text-xl text-deepForest mb-4">Ingredients</h2>
              <p className="text-xs text-sage mb-3">Check off as you go</p>
              <ul className="space-y-1" role="list">
                {ingredients.map((ingredient, i) => (
                  <li key={i} className="ingredient-item">
                    <input
                      type="checkbox"
                      id={`ing-${i}`}
                      aria-label={ingredient}
                    />
                    <span className="text-sm text-deepForest leading-snug">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps + content */}
          <div className="lg:col-span-2">
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-5">Instructions</h2>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-deepForest leading-relaxed">{step.text}</p>
                    {step.image && (
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mt-3">
                        <Image
                          src={step.image}
                          alt={step.imageAlt || `Step ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* Tips */}
            {tips.length > 0 && (
              <div className="mt-8 bg-greenTint rounded-xl p-5 border border-leaf">
                <h2 className="font-serif font-bold text-xl text-deepForest mb-3">Tips for Success</h2>
                <ul className="space-y-2">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-sm text-deepForest">
                      <span className="text-forest font-bold flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nutrition */}
            <div className="mt-8">
              <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
                Nutrition (per serving)
              </h2>
              <NutritionTable
                data={{
                  servingSize: nutrition.servingSize,
                  calories: nutrition.calories,
                  protein: nutrition.protein,
                  carbs: nutrition.carbs,
                  fiber: nutrition.fiber,
                  fat: nutrition.fat,
                }}
              />
            </div>

            {/* FAQ */}
            {faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="font-serif font-bold text-2xl text-deepForest mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-greenTint rounded-xl p-4">
                      <h3 className="font-serif font-semibold text-lg text-deepForest mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sage text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related recipes */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-greenTint pt-8">
            <h2 className="font-serif font-bold text-2xl text-deepForest mb-6">
              Related Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="group block bg-white rounded-xl overflow-hidden border border-greenTint shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif font-semibold text-base text-deepForest group-hover:text-forest transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-sage mt-1">{r.prepTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Keywords (hidden, for reference) */}
        <div className="sr-only" aria-hidden="true">
          {keywords.join(', ')}
        </div>
      </article>
    </>
  )
}
