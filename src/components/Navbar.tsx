'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Recipes', href: '/recipes' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'How to Cook', href: '/how-to-cook' },
  { label: 'Growing', href: '/growing' },
  { label: 'Facts', href: '/facts' },
  { label: 'Pets', href: '/pets' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-greenTint"
      style={{ height: 64 }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="36"
            height="36"
            aria-hidden="true"
          >
            <g>
              <path
                d="M21.5 30 h5 l1.2 9.5 a3.7 3.7 0 0 1-7.4 0 Z"
                fill="#4B7A53"
              />
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
          <span
            className="font-serif font-bold text-xl text-deepForest group-hover:text-forest transition-colors"
          >
            BroccoliPedia
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-medium text-sm text-deepForest px-3 py-2 rounded-lg hover:text-forest hover:bg-greenTint transition-all border-b-2 border-transparent hover:border-leaf"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-greenTint transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="block w-5 h-0.5 bg-deepForest mb-1" />
          <span className="block w-5 h-0.5 bg-deepForest mb-1" />
          <span className="block w-5 h-0.5 bg-deepForest" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-greenTint px-4 py-3 shadow-card">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-sans font-medium text-sm text-deepForest py-2 px-3 rounded-lg hover:text-forest hover:bg-greenTint transition-all"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
