interface NutritionData {
  calories?: number
  protein?: string
  carbs?: string
  fiber?: string
  fat?: string
  vitaminC?: string
  vitaminK?: string
  folate?: string
  calcium?: string
  iron?: string
  potassium?: string
  servingSize?: string
}

interface NutritionTableProps {
  data?: NutritionData
  title?: string
}

const DEFAULT_USDA: NutritionData = {
  servingSize: '100g (3.5 oz) raw broccoli',
  calories: 34,
  protein: '2.82g',
  carbs: '6.64g',
  fiber: '2.6g',
  fat: '0.37g',
  vitaminC: '89.2mg (99% DV)',
  vitaminK: '102mcg (85% DV)',
  folate: '63mcg (16% DV)',
  calcium: '47mg (4% DV)',
  iron: '0.73mg (4% DV)',
  potassium: '316mg (7% DV)',
}

export default function NutritionTable({ data = DEFAULT_USDA, title = 'Nutrition Facts' }: NutritionTableProps) {
  const d = { ...DEFAULT_USDA, ...data }

  return (
    <div className="nutrition-table max-w-xs my-6">
      <div className="nutrition-table-header">
        <div className="text-2xl font-bold font-serif">{title}</div>
        <div className="text-xs mt-1 text-green-200">
          Serving size: {d.servingSize}
        </div>
        <div className="text-xs text-green-300 mt-1">Source: USDA FoodData Central (FDC ID 170379)</div>
      </div>

      <div className="bg-white">
        <div className="nutrition-row bold border-b-2 border-deepForest">
          <span>Calories</span>
          <span className="text-deepForest font-bold text-xl">{d.calories}</span>
        </div>

        <div className="px-4 py-1 text-xs text-sage border-b border-greenTint">
          % Daily Value*
        </div>

        {[
          { label: 'Total Fat', value: d.fat, dv: '0%' },
          { label: 'Total Carbohydrates', value: d.carbs, dv: '2%' },
          { label: '  Dietary Fiber', value: d.fiber, dv: '9%' },
          { label: 'Protein', value: d.protein, dv: '6%' },
          { label: 'Vitamin C', value: d.vitaminC, dv: '', highlight: true },
          { label: 'Vitamin K', value: d.vitaminK, dv: '', highlight: true },
          { label: 'Folate (B9)', value: d.folate, dv: '' },
          { label: 'Calcium', value: d.calcium, dv: '' },
          { label: 'Iron', value: d.iron, dv: '' },
          { label: 'Potassium', value: d.potassium, dv: '' },
        ].map((row) => (
          <div
            key={row.label}
            className={`nutrition-row ${row.highlight ? 'font-semibold text-forest' : 'text-deepForest'}`}
          >
            <span className="text-sm">{row.label}</span>
            <span className="text-sm">{row.value}</span>
          </div>
        ))}

        <div className="px-4 py-2 text-xs text-sage border-t border-greenTint">
          * Percent Daily Values based on a 2,000-calorie diet.
        </div>
      </div>
    </div>
  )
}
