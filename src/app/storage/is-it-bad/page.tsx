import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Is My Broccoli Bad? Signs of Spoilage',
  description: 'Yellow florets, soft spots, sliminess, and strong smell. What is safe to eat vs what to throw away. Broccoli spoilage guide.',
  keywords: ['is broccoli bad', 'broccoli gone bad', 'broccoli spoiled', 'yellow broccoli safe to eat', 'how to tell if broccoli is bad'],
}

export default function IsItBadPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-sage mb-4">
        <Link href="/" className="hover:text-forest">Home</Link> /{' '}
        <Link href="/storage" className="hover:text-forest">Storage</Link> /{' '}
        <span className="text-deepForest">Is It Bad?</span>
      </nav>

      <h1 className="font-serif font-bold text-4xl text-deepForest mb-4 leading-tight">Is My Broccoli Bad?</h1>
      <p className="text-lg text-sage leading-relaxed mb-6">Most broccoli spoilage is visible or smellable before it becomes a food safety issue. The signs vary — some are cosmetic (yellowing) and the broccoli is still safe, others indicate it should be discarded.</p>

      <div className="space-y-4 mb-10">
        {[
          {
            sign: 'Yellow or yellowish-green florets',
            verdict: 'Safe to eat (quality reduced)',
            safe: true,
            detail: 'Yellowing is chlorophyll breakdown — a natural ageing process, not bacterial spoilage. Yellow broccoli is safe but will taste more bitter and sulphurous than fresh. Trim the yellowed parts and cook the rest. If the whole head is yellow, still safe but flavour will be noticeably degraded.',
          },
          {
            sign: 'Soft or wilted texture',
            verdict: 'Safe to eat (use immediately)',
            safe: true,
            detail: 'Soft broccoli has lost moisture and is past prime but is not spoiled. It is fine to eat — roasting or cooking in a soup is better than eating it raw or steamed, as the softness becomes more apparent in those preparations.',
          },
          {
            sign: 'Dark or black spots on florets',
            verdict: 'Trim and use, or discard',
            safe: true,
            detail: 'Small dark spots are early mould or surface oxidation. Cut away the affected florets and use the rest promptly. If spots are widespread or the head smells off, discard the whole thing.',
          },
          {
            sign: 'Slimy texture or visible mould',
            verdict: 'Discard',
            safe: false,
            detail: 'Sliminess means bacterial breakdown has begun. Mould (fuzzy growth, usually grey or white) is a definitive sign to throw it away. Do not attempt to cut around extensive sliminess — it indicates deeper spoilage than is visible on the surface.',
          },
          {
            sign: 'Strong sulphurous or sour smell',
            verdict: 'Discard',
            safe: false,
            detail: 'A strong ammonia-like or sour smell means bacterial decomposition. Fresh broccoli has a mild green vegetable smell. Any sharp, unpleasant odour beyond the normal slight sulphur is a sign to discard.',
          },
          {
            sign: 'Brown or black stem (cut end)',
            verdict: 'Trim stem, check florets',
            safe: true,
            detail: 'The cut end of the stem oxidises and darkens — this is purely cosmetic and tells you nothing about the florets. Cut the discoloured stem section off and inspect the florets separately.',
          },
        ].map((item, i) => (
          <div key={i} className={`border rounded-xl p-4 ${item.safe ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
            <div className="flex justify-between items-start mb-2">
              <div className={`font-semibold ${item.safe ? 'text-deepForest' : 'text-red-800'}`}>{item.sign}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.safe ? 'bg-forest text-white' : 'bg-red-700 text-white'}`}>
                {item.verdict}
              </span>
            </div>
            <p className={`text-sm ${item.safe ? 'text-sage' : 'text-red-700'}`}>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="fact-block mb-6">
        <div className="text-xs font-semibold text-forest uppercase tracking-wider mb-2">Rule of Thumb</div>
        <p className="text-sm text-deepForest leading-relaxed">Visual changes (yellowing, small spots, softness) = quality issue, still safe. Sliminess, widespread mould, or sharp sour/ammonia smell = food safety issue, discard. When in doubt, throw it out — broccoli is inexpensive and food poisoning is not worth it.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/storage/shelf-life" className="text-sm text-forest font-semibold hover:underline">Broccoli Shelf Life Guide →</Link>
        <Link href="/storage/how-to-freeze" className="text-sm text-forest font-semibold hover:underline">How to Freeze Broccoli →</Link>
        <Link href="/storage" className="text-sm text-forest font-semibold hover:underline">All Storage Tips →</Link>
      </div>
    </article>
  )
}
