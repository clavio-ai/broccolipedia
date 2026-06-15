import Link from 'next/link'

const FOOTER_LINKS = [
  { label: 'Recipes', href: '/recipes' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'How to Cook', href: '/how-to-cook' },
  { label: 'Growing', href: '/growing' },
  { label: 'Facts', href: '/facts' },
  { label: 'Pets', href: '/pets' },
  { label: 'Varieties', href: '/varieties' },
  { label: 'Storage', href: '/storage' },
]

export default function Footer() {
  return (
    <footer className="bg-deepForest text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="32"
                height="32"
                aria-hidden="true"
              >
                <g>
                  <path d="M21.5 30 h5 l1.2 9.5 a3.7 3.7 0 0 1-7.4 0 Z" fill="#4B7A53" />
                  <circle cx="16.5" cy="20" r="7" fill="#22C55E" />
                  <circle cx="31.5" cy="20" r="7" fill="#22C55E" />
                  <circle cx="24" cy="14.5" r="7.5" fill="#4ADE80" />
                  <circle cx="24" cy="23" r="8" fill="#15803D" />
                  <circle cx="18" cy="24.5" r="6" fill="#22C55E" />
                  <circle cx="30" cy="24.5" r="6" fill="#15803D" />
                  <circle cx="21" cy="13" r="3.4" fill="#86EFAC" />
                  <circle cx="27.5" cy="13.5" r="3" fill="#86EFAC" />
                  <circle cx="16" cy="18" r="2.6" fill="#4ADE80" />
                  <circle cx="32" cy="18" r="2.6" fill="#4ADE80" />
                </g>
              </svg>
              <span className="font-serif font-bold text-lg">BroccoliPedia</span>
            </div>
            <p className="text-sm text-green-200 leading-relaxed max-w-xs">
              The definitive reference for broccoli — USDA-cited nutrition, tested recipes, growing
              guides, and honest pet safety information.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-3 text-lime">Explore</h3>
            <div className="grid grid-cols-2 gap-1">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-green-200 hover:text-white transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-3 text-lime">About</h3>
            <div className="flex flex-col gap-1">
              <Link href="/about" className="text-sm text-green-200 hover:text-white transition-colors py-0.5">
                About BroccoliPedia
              </Link>
              <Link href="/privacy" className="text-sm text-green-200 hover:text-white transition-colors py-0.5">
                Privacy Policy
              </Link>
              <p className="text-xs text-green-300 mt-3 leading-relaxed">
                All nutrition data sourced from USDA FoodData Central. Medical claims are
                informational only — consult a healthcare provider for medical advice.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-forest pt-6 text-center">
          <p className="text-sm text-green-300">
            &copy; 2026 BroccoliPedia.com — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
