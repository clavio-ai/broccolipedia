import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'History of Broccoli: From Ancient Rome to Your Plate',
  description: 'Broccoli was developed in ancient Rome, spread to America with Italian immigrants, and became a mainstream vegetable in the 1920s. The full history.',
  keywords: ['history of broccoli', 'where did broccoli come from', 'broccoli origin history', 'who invented broccoli'],
}

export default function BroccoliHistoryPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/facts" className="hover:text-forest">Facts</Link> /{' '}
        <span className="text-deepForest">History</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">History of Broccoli</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Broccoli is among the oldest cultivated brassicas. Its development spans roughly two thousand years, from the coastal cliffs of the Mediterranean to global cultivation.</p>

      <div className="space-y-6 mb-10">
        {[
          {
            era: 'Ancient Rome (6th century BCE – 1st century CE)',
            detail: 'The earliest references to a plant resembling broccoli come from ancient Italian and Roman sources. Roman writer Pliny the Elder (23-79 CE) described a plant called cyma in his encyclopaedia Naturalis Historia that many historians interpret as an early form of broccoli. It was a cultivated garden vegetable in ancient Rome, prized for its edible stems and flower clusters.',
          },
          {
            era: 'Medieval Italy (1000–1500 CE)',
            detail: 'Broccoli continued to be grown and refined in Italy through the medieval period, particularly in the southern regions of Calabria and Campania. The vegetable was a staple of Italian peasant cooking — nutritious, productive, and easy to grow in the Mediterranean climate.',
          },
          {
            era: '16th–17th Century Europe',
            detail: 'Italian merchants and traders introduced broccoli to France and England in the 1500s-1600s. Catherine de\' Medici of Florence, who married Henry II of France in 1533, is often (perhaps apocryphally) credited with introducing various Italian vegetables including broccoli to French cuisine. English writers of the period called it "Italian asparagus."',
          },
          {
            era: '18th Century America',
            detail: 'Thomas Jefferson is documented as having grown broccoli at Monticello — his garden records from 1767 mention seeds imported from Italy. Despite this early presence, broccoli remained largely unknown outside of Italian immigrant communities in America through the 19th century.',
          },
          {
            era: '1920s–1930s: Mainstream Adoption in the US',
            detail: 'The D\'Arrigo brothers (Italian immigrants) began large-scale commercial broccoli farming in San Jose, California in 1923 and shipped it across the country in refrigerated rail cars. Their marketing efforts and the growing Italian-American population drove mainstream adoption. By the late 1920s, broccoli was a regular feature in American grocery stores.',
          },
          {
            era: 'Post-WWII to Present',
            detail: 'Broccoli production and consumption expanded globally through the second half of the 20th century as supply chains, refrigeration, and nutritional awareness all improved. The discovery of sulforaphane at Johns Hopkins University in 1992 — and the subsequent research on its potential anti-cancer properties — drove significant interest in broccoli as a health food in the 1990s and 2000s.',
          },
        ].map((period) => (
          <div key={period.era} className="border-l-4 border-forest pl-5">
            <div className="font-serif font-bold text-lg text-deepForest mb-1">{period.era}</div>
            <p className="text-sm text-sage leading-relaxed">{period.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/facts/is-broccoli-man-made" className="text-sm text-forest font-semibold hover:underline">Is Broccoli Man-Made? →</Link>
        <Link href="/nutrition/benefits" className="text-sm text-forest font-semibold hover:underline">Broccoli Health Benefits →</Link>
        <Link href="/varieties" className="text-sm text-forest font-semibold hover:underline">Broccoli Varieties →</Link>
      </div>
    </article>
  )
}
