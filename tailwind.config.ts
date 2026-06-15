import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#15803D',
        leaf: '#22C55E',
        lime: '#4ADE80',
        deepForest: '#14532D',
        moss: '#166534',
        sage: '#4B7A53',
        greenTint: '#DCFCE7',
        pine: '#166534',
        lightGreen: '#86EFAC',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        article: '68ch',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(21, 128, 61, 0.08)',
        card: '0 8px 24px rgba(21, 128, 61, 0.15)',
      },
      borderRadius: {
        xl: '12px',
        lg: '8px',
      },
    },
  },
  plugins: [],
}
export default config
