import type { Metadata } from 'next'
import EditorialTemplate from '@/components/EditorialTemplate'

export const metadata: Metadata = {
  title: 'Broccoli Benefits: What Eating It Actually Does to Your Body',
  description:
    'Sulforaphane, I3C, lutein, and kaempferol — what each compound does, which clinical trials have been run, and what the honest caveats are. USDA and PubMed cited.',
  keywords: ['broccoli benefits', 'broccoli health benefits', 'sulforaphane benefits', 'broccoli cancer research'],
  openGraph: {
    title: 'Broccoli Benefits: What Eating It Actually Does to Your Body',
    description: 'Clinical evidence for sulforaphane, eye health, gut barrier function, and inflammation reduction — with honest caveats on what is still under investigation.',
  },
}

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Broccoli Benefits: What Eating It Actually Does to Your Body',
  description: 'Clinical evidence for broccoli health benefits including sulforaphane, I3C, lutein/zeaxanthin, and kaempferol.',
  image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  author: { '@type': 'Organization', name: 'BroccoliPedia' },
  publisher: { '@type': 'Organization', name: 'BroccoliPedia', url: 'https://broccolipedia.com' },
}

export default function BroccoliBenefitsPage() {
  return (
    <EditorialTemplate
      title="Broccoli Benefits: What Eating It Actually Does to Your Body"
      description="There are 202 clinical trials on broccoli and sulforaphane in the literature. Here is what the evidence actually shows — and where the honest caveats are."
      image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200&q=80"
      imageAlt="Fresh broccoli florets arranged on a dark surface"
      keyTakeaways={[
        'Sulforaphane activates Nrf2 detox pathways — the most-studied chemopreventive compound in any vegetable (MD Anderson)',
        'One cup of raw broccoli provides 99% of your daily Vitamin C requirement (USDA FDC 170379)',
        'Lutein and zeaxanthin (1,400mcg per 100g) reduce macular degeneration risk by up to 43% (BrightFocus Foundation)',
        'A 2015 OHSU Phase II trial showed sulforaphane slowed PSA doubling time in prostate cancer patients',
        'Penn State 2023 mouse study found broccoli strengthens the gut lining — human trial pending',
        'I3C is under active investigation for cancer pathways — not proven to treat cancer in humans',
      ]}
      sections={[
        {
          heading: 'Sulforaphane: The Most-Studied Compound',
          body: `<p>Sulforaphane is not found in broccoli — it is produced when you cut or chew it. The enzyme myrosinase converts glucoraphanin (a glucosinolate stored in broccoli cells) into sulforaphane the moment cell walls are broken.</p>
<p>Once absorbed, sulforaphane activates the Nrf2/Keap1 signaling pathway, which upregulates phase II detoxification enzymes in your body. MD Anderson Cancer Center describes it as the most extensively studied chemopreventive compound found in any vegetable.</p>
<p>The critical practical implication: heating above 70°C (158°F) destroys myrosinase, stopping sulforaphane production entirely. The workaround is chopping broccoli and waiting 40 minutes before applying heat — this allows the conversion to complete before the enzyme is deactivated. Adding mustard powder (which contains its own myrosinase) to cooked broccoli also restores production.</p>`,
          factBlock: {
            title: 'The 40-Minute Hack',
            text: 'Chop broccoli and wait 40 minutes before cooking. This lets myrosinase fully convert glucoraphanin to sulforaphane before heat kills the enzyme. Source: biovie.fr sulforaphane guide.',
          },
        },
        {
          heading: 'Cancer Research: What the Clinical Trials Show',
          body: `<p>As of 2024, 202 unique clinical trials on broccoli and sulforaphane have been identified in the literature, with 84 meeting clinical intervention criteria. This makes broccoli one of the most thoroughly studied vegetables in oncology research.</p>
<p><strong>Prostate cancer (OHSU, 2015):</strong> A Phase II trial at the OHSU Knight Cancer Institute enrolled 20 men with recurrent prostate cancer. Participants received 200 μmol/day of sulforaphane-rich broccoli sprout extract for up to 20 weeks. PSA doubling time — a key indicator of disease progression — increased from 6.1 to 9.6 months (p=0.044). No grade 3 adverse events were reported. This is promising but involved a small cohort; larger trials are needed. (<a href="https://pubmed.ncbi.nlm.nih.gov/25431127/" class="underline text-forest" target="_blank" rel="noopener noreferrer">PubMed 25431127</a>)</p>
<p><strong>Breast cancer stem cells (AACR, 2010):</strong> A cell model study published in Clinical Cancer Research found sulforaphane inhibits breast cancer stem cell self-renewal pathways. Cell model findings do not automatically translate to clinical outcomes, but this line of investigation continues in several active trials.</p>
<p><strong>Important caveat:</strong> These findings are from early-phase trials and laboratory models. Broccoli is not a proven cancer treatment. The research is encouraging enough to make it a consistent dietary priority, but overclaiming the evidence does disservice to both readers and the science.</p>`,
          pullQuote: '"The most extensively studied chemopreventive compound found in any vegetable." — MD Anderson Cancer Center on sulforaphane',
        },
        {
          heading: 'Gut Health: Two Separate Research Lines',
          body: `<p>Two distinct 2023 studies link broccoli to gut health through different mechanisms.</p>
<p><strong>Hudson Institute (2023):</strong> Dr. Emily Gulliver and colleagues found that sulforaphane changes gastrointestinal microbiota composition, enabling the production of anti-inflammatory metabolites. Published in the Journal of Functional Foods.</p>
<p><strong>Penn State (2023):</strong> In a mouse study, animals fed a 15% broccoli diet (equivalent to roughly 3.5 cups per day for humans) showed significantly better gut lining health, with more goblet cells and Paneth cells strengthening the intestinal barrier. These cells are critical to preventing intestinal permeability ("leaky gut"). Published in Laboratory Investigation. Caveat: this is a mouse study; human trials have not yet been completed. (<a href="https://www.sciencedaily.com/releases/2023/04/230406152639.htm" class="underline text-forest" target="_blank" rel="noopener noreferrer">Science Daily</a>)</p>`,
          factBlock: {
            title: 'Fiber Connection',
            text: 'Broccoli provides 2.6g of dietary fiber per 100g — both soluble (feeds beneficial bacteria) and insoluble (supports regularity). Read the full fiber breakdown at /nutrition/fiber.',
          },
        },
        {
          heading: 'Eye Health: Lutein and Zeaxanthin',
          body: `<p>Broccoli provides 1,400 mcg of lutein and zeaxanthin per 100g — the only two dietary carotenoids that accumulate specifically in the retina's macula, the area responsible for central, high-resolution vision.</p>
<p>The AREDS (Age-Related Eye Disease Study) trial found that supplementation with lutein and zeaxanthin reduced progression of intermediate age-related macular degeneration (AMD) by 25%. Dietary intake from food like broccoli is associated with up to a 43% reduction in AMD risk in observational studies. (BrightFocus Foundation)</p>
<p>A separate 2016 study from the Buck Institute found that indole-3-carbinol (I3C) from broccoli — via AHR ligand activity — protected human retinal cells from oxidative stress in culture. This provides a second eye health pathway from broccoli compounds, beyond just lutein and zeaxanthin.</p>`,
        },
        {
          heading: 'Inflammation: The 2018 RCT',
          body: `<p>A randomized controlled trial published in Clinical Nutrition (2018) enrolled 40 healthy overweight subjects who consumed 30g per day of broccoli sprouts for 10 weeks. IL-6, a key inflammation biomarker, fell from 4.76 to 2.11 pg/mL — a reduction of more than 55%. This is one of the few human RCTs with clean, measurable inflammation endpoints from broccoli consumption specifically.</p>`,
        },
        {
          heading: 'Indole-3-Carbinol (I3C): Honest Summary',
          body: `<p>I3C is a compound found in cruciferous vegetables that influences estrogen metabolism, directing it toward less estrogenic metabolites. In laboratory models and early human trials, it has shown activity on cancer-related pathways including Akt-NF-kB signaling, caspase activation, CDK regulation, and BRCA gene expression.</p>
<p>Early human trials showed regression of CIN (cervical intraepithelial neoplasia) lesions at doses of 200-400mg/day. However, Memorial Sloan Kettering Cancer Center is clear: I3C is not proven to treat cancer in humans. It is under active investigation, and making treatment claims would be premature. As a dietary component from food (not supplement megadoses), it is considered safe and potentially beneficial.</p>`,
        },
        {
          heading: 'Blood Sugar and Prediabetes',
          body: `<p>An older 2012 RCT enrolled 81 type 2 diabetic patients who took 10g per day of broccoli sprout powder for 4 weeks. Fasting blood glucose fell by 1.9 mmol/L and hs-CRP (an inflammation marker) decreased by 20.5%. (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1756464612000953" class="underline text-forest" target="_blank" rel="noopener noreferrer">ScienceDirect</a>)</p>
<p>A more recent 2025 double-blind RCT in 35 prediabetic individuals found a 0.2 mmol/L fasting glucose reduction over 12 weeks of broccoli sprout extract — real but smaller than the 2012 results, and notably the 2025 study did not meet its primary endpoint. Use the 2012 data for stronger blood sugar claims; treat the 2025 study as confirmatory but partial.</p>`,
        },
      ]}
      faqs={[
        {
          question: 'How much broccoli do you need to eat to get the benefits?',
          answer: 'Most research uses 100-200g per day as a reference amount, which is roughly one to two cups of florets. The sulforaphane studies use concentrated sprout extracts at much higher doses. For general nutrition, one serving (about 90g) provides near-complete Vitamin C and Vitamin K daily values.',
        },
        {
          question: 'Does cooking destroy the health benefits of broccoli?',
          answer: 'It depends on the compound. Boiling above 70°C for more than a minute destroys myrosinase, eliminating sulforaphane production. Steaming briefly and microwaving at moderate power preserve more bioactive compounds. Vitamins C and K are partially preserved with most cooking methods. For sulforaphane specifically, chop and wait 40 minutes before applying any heat.',
        },
        {
          question: 'Are broccoli supplements as good as eating broccoli?',
          answer: 'Concentrated broccoli sprout extracts (like SGS, standardized to sulforaphane) are used in clinical trials because they allow precise dosing. Whole broccoli and especially fresh sprouts are excellent food sources. Supplements are a practical option for people who cannot eat enough, but the whole food provides fiber and other compounds not found in isolated extracts.',
        },
      ]}
      related={[
        {
          title: 'Broccoli Sprouts: 20–50× More Sulforaphane',
          href: '/nutrition/sprouts',
          image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80',
          description: 'The Johns Hopkins discovery that triggered a global seed shortage.',
        },
        {
          title: 'Raw vs Cooked Broccoli: Which Wins on Nutrients?',
          href: '/nutrition/raw-vs-cooked',
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
          description: 'The chop-and-wait method, microwaving science, and what boiling destroys.',
        },
        {
          title: 'Full Nutrition Facts',
          href: '/nutrition',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
          description: 'Complete USDA data: calories, protein, fiber, vitamins, minerals.',
        },
      ]}
      schemaJson={schemaJson}
    />
  )
}
