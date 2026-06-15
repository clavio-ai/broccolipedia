import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Rabe (Rapini): What It Is and How to Cook It',
  description: 'Broccoli rabe (rapini) is not actually broccoli — it is a turnip relative. Intensely bitter, used in Italian and Portuguese cooking. How to cook it right.',
  keywords: ['broccoli rabe', 'rapini', 'broccoli rabe vs broccoli', 'how to cook broccoli rabe'],
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Broccoli Rabe (Rapini): What It Is and How to Cook It',
  description: 'Guide to broccoli rabe — taxonomy, flavour, and cooking methods.',
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
  publisher: { '@type': 'Organization', name: 'BroccoliPedia', logo: { '@type': 'ImageObject', url: 'https://broccolipedia.com/broccoli-mark.svg' } },
}

export default function BroccoliRabePage() {
  return (
    <EditorialTemplate
      title="Broccoli Rabe (Rapini)"
      description="The name is misleading. Broccoli rabe (rapini) is not closely related to broccoli — it is a turnip family plant. That explains the intense bitterness that defines it."
      image="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=80"
      imageAlt="Broccoli rabe with thin stems and small florets"
      keyTakeaways={[
        'Broccoli rabe is Brassica rapa, the turnip family — not Brassica oleracea like standard broccoli',
        'It is significantly more bitter than broccoli, particularly the stems and leaves',
        'Blanching before cooking (2 min in salted water) tones down the bitterness considerably',
        'Classic pairings: sweet Italian sausage, garlic, olive oil, orecchiette pasta, provolone',
      ]}
      sections={[
        {
          heading: 'What Is Broccoli Rabe?',
          body: '<p>Broccoli rabe (<em>Brassica rapa subsp. rapa</em>) belongs to the turnip branch of the mustard family, not the broccoli branch. Standard broccoli is <em>Brassica oleracea italica</em>. The confusion comes purely from visual resemblance — thin stems, small yellowish-green florets, leafy greens — but the plants are only distantly related.</p><p>It is a staple of southern Italian cooking, particularly in Puglia and Calabria. In Portugal and Brazil it is known as grelos. In North America it arrived primarily through Italian immigration and is now common in Italian-American restaurants.</p>',
        },
        {
          heading: 'Flavour and Bitterness',
          body: '<p>The bitterness of broccoli rabe comes from glucosinolates — the same compounds that give standard broccoli its slight bitterness, but in much higher concentrations. For people sensitive to bitterness (supertasters), broccoli rabe can be unpleasantly sharp.</p><p>The bitterness is not a flaw — it is the point. In Italian cooking it provides contrast to rich, fatty ingredients like sweet sausage and pork fat. Blanching in salted water for 2 minutes before the final cooking significantly reduces bitterness for those who prefer a milder result.</p>',
        },
        {
          heading: 'How to Cook Broccoli Rabe',
          body: '<ul><li><strong>Standard method:</strong> Blanch 2 min in heavily salted boiling water. Squeeze dry. Sauté in olive oil with garlic and chilli flakes for 3-4 minutes. Season with salt and a squeeze of lemon.</li><li><strong>With pasta:</strong> The classic preparation is orecchiette with sausage and broccoli rabe. The pasta water helps create a light sauce from the pan drippings.</li><li><strong>Raw:</strong> Not recommended — the bitterness is too intense and the texture too fibrous when raw.</li></ul>',
        },
        {
          heading: 'Broccoli Rabe vs Broccoli: Key Differences',
          body: '',
          table: {
            headers: ['Feature', 'Broccoli Rabe', 'Standard Broccoli'],
            rows: [
              ['Scientific name', 'Brassica rapa subsp. rapa', 'Brassica oleracea italica'],
              ['Family branch', 'Turnip', 'Cabbage'],
              ['Bitterness', 'Intense', 'Mild'],
              ['Edible parts', 'Stems, leaves, small florets', 'Large head, stems'],
              ['Cook time', '5-7 min', '5-10 min'],
              ['Classic use', 'Italian/Portuguese', 'Global'],
            ],
          },
        },
      ]}
      faqs={[
        { question: 'Is broccoli rabe healthy?', answer: 'Yes — it is high in vitamin K, vitamin C, folate, and calcium. The glucosinolate content is higher than standard broccoli, which may offer additional cancer-preventive activity according to laboratory studies (though human trial data is limited).' },
        { question: 'Can I substitute broccoli for broccoli rabe?', answer: 'In a pinch, yes — but the dish will be milder and sweeter. The standard broccoli substitution works best when the broccoli rabe is not the starring ingredient, just a component in pasta or a side dish.' },
      ]}
      related={[
        { title: 'Broccolini', href: '/varieties/broccolini', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80', description: 'Mild, tender hybrid' },
        { title: 'Chinese Broccoli', href: '/varieties/chinese-broccoli', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80', description: 'Gai lan — Cantonese staple' },
        { title: 'Types of Broccoli', href: '/facts/types', image: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=600&q=80', description: 'Full comparison guide' },
      ]}
      schemaJson={schemaJson}
    />
  )
}
