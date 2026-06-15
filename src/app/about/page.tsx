import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Elena Ignacio — The Mom Behind BroccoliPedia | BroccoliPedia',
  description:
    'Elena Ignacio is a globe-trotting Filipino mother of two who built BroccoliPedia after realising broccoli was the one vegetable that followed her family across 14 countries. Her story, her kids Adam and Alfi, and her obsession with honest nutrition.',
  openGraph: {
    title: 'Meet Elena — The Mom Who Took Broccoli Around the World',
    description:
      'Filipino travel mom Elena Ignacio built BroccoliPedia for every parent who wants to feed their kids well, no matter where in the world they are.',
    images: [{ url: '/images/elena-ignacio-broccolipedia.png', width: 1120, height: 840, alt: 'Elena Ignacio and her daughter sharing a meal on an international flight' }],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://broccolipedia.com/about#elena-ignacio',
  name: 'Elena Ignacio',
  alternateName: ['Elena sa Inda', 'Adele Vlogs'],
  description:
    'Elena Ignacio is a Filipino nutrition-conscious travel mom, content creator, and the founder of BroccoliPedia. A mother of two — Adam and Alfi — she has eaten her way through more than a dozen countries while making broccoli a constant in her family\'s diet regardless of cuisine or culture.',
  image: 'https://broccolipedia.com/images/elena-ignacio-broccolipedia.png',
  nationality: { '@type': 'Country', name: 'Philippines' },
  knowsAbout: [
    'Broccoli nutrition',
    'Family nutrition',
    'Healthy eating while travelling',
    'Child nutrition',
    'Global cuisine',
    'Brassica vegetables',
    'Meal planning for families',
  ],
  sameAs: [
    'https://www.tiktok.com/@elenasainda',
    'https://www.facebook.com/elena.ignacio',
    'https://www.youtube.com/@adelevlogs',
  ],
  url: 'https://broccolipedia.com/about',
  worksFor: {
    '@type': 'Organization',
    name: 'BroccoliPedia',
    url: 'https://broccolipedia.com',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main style={{ fontFamily: 'var(--font-sans)', color: '#1a2e1a', background: '#fff' }}>

        {/* Hero */}
        <section style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '4rem 1.5rem 2rem',
        }}>
          <p style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#15803D',
            marginBottom: '0.75rem',
          }}>The person behind the broccoli</p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#14532D',
            marginBottom: '1.5rem',
          }}>
            From Manila to 14 countries —<br />
            <span style={{ color: '#15803D' }}>always with broccoli in the bag.</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.75,
            color: '#374151',
            maxWidth: 680,
            marginBottom: '2.5rem',
          }}>
            Hi. I'm <strong>Elena Ignacio</strong> — mom to <strong>Adam</strong> and <strong>Alfi</strong>,
            chronic over-packer, business class seat-sharer, and the person who once asked a Tokyo ramen shop
            if they could add steamed broccoli to the bowl. (They could. It was incredible.)
          </p>

          {/* Image */}
          <div style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '3rem', maxWidth: 780 }}>
            <Image
              src="/images/elena-ignacio-broccolipedia.png"
              alt="Elena Ignacio sharing a meal with her daughter on an international flight — the moment that inspired BroccoliPedia"
              width={1120}
              height={840}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(20,83,45,0.85))',
              padding: '2rem 1.5rem 1.25rem',
            }}>
              <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                Somewhere over the Pacific. Adam is reaching for the broccoli floret. This is the photo that started everything.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem 4rem' }}>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: '#14532D', marginBottom: '1rem' }}>
            Why broccoli, of all vegetables?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
            Honest answer: because it shows up everywhere. I've eaten broccoli sautéed in garlic oil in a
            <em> trattoria</em> in Florence, blanched with oyster sauce at a <em>kopitiam</em> in Penang,
            battered and fried at a food stall in Seoul, and folded into a cream sauce on an airline tray
            somewhere above the Pacific. Every culture makes it their own, and that fascinated me.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
            When Adam was three and Alfi was still a baby, I started keeping notes. Which cooking method
            kept the most vitamins intact? (Steam for 3 minutes, wait 40 minutes after cutting — that one
            changed how our whole family eats.) Which restaurant preparations were actually healthy, and
            which just <em>looked</em> green? I had four notebooks before I realised this was more than a
            personal project.
          </p>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: '#14532D', margin: '2.5rem 0 1rem' }}>
            What BroccoliPedia actually is
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
            Every claim on this site links to a real source — USDA FoodData Central, peer-reviewed
            clinical research from Johns Hopkins and Penn State, regional variety data from agricultural
            universities. I'm not a dietitian. I'm a mother who reads the studies so you don't have to,
            and who will never publish a nutrition claim I can't trace back to primary data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
            The recipes come from wherever we've actually eaten them. The storage guides come from the
            specific mistakes I've made in hotel rooms with no kitchen and a bag of broccoli I bought
            at a local market. The growing guides come from the season we tried container broccoli on
            our condo balcony in Makati. (Palam Samridhi variety, for the record. It worked.)
          </p>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: '#14532D', margin: '2.5rem 0 1rem' }}>
            Adam and Alfi's unofficial broccoli ratings
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
            Adam (age 7, extremely opinionated): roasted at 425°F with parmesan is a 10 out of 10.
            Raw with dip is a "depends on the dip." Soup is a 6. Frozen broccoli is a hard no unless
            it comes out of a casserole.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', marginBottom: '2.5rem' }}>
            Alfi (age 4, demolishes everything): undefeated. Has eaten broccoli off a tray on a plane,
            off a banana leaf at a Filipino fiesta, and directly out of a steamer basket while standing
            in the kitchen in her pajamas. Zero complaints.
          </p>

          {/* Social Links */}
          <div style={{
            background: '#F0FDF4',
            border: '1.5px solid #BBF7D0',
            borderRadius: '1rem',
            padding: '1.75rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#15803D',
              marginBottom: '1rem',
            }}>Follow Elena's travels</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

              <a
                href="https://www.tiktok.com/@elenasainda"
                target="_blank"
                rel="noopener noreferrer me"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#14532D' }}
              >
                <span style={{
                  width: 40, height: 40, borderRadius: '50%', background: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>@elenasainda</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>TikTok — travel bites, healthy finds, real family moments</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@adelevlogs"
                target="_blank"
                rel="noopener noreferrer me"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#14532D' }}
              >
                <span style={{
                  width: 40, height: 40, borderRadius: '50%', background: '#FF0000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>Adele Vlogs</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>YouTube — full travel vlogs with family, food, and honest nutrition reviews</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/elena.ignacio"
                target="_blank"
                rel="noopener noreferrer me"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: '#14532D' }}
              >
                <span style={{
                  width: 40, height: 40, borderRadius: '50%', background: '#1877F2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>Elena Ignacio</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>Facebook — community, recipe shares, Q&A with other travel parents</p>
                </div>
              </a>

            </div>
          </div>

          {/* Closing */}
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#374151', fontStyle: 'italic', borderLeft: '3px solid #15803D', paddingLeft: '1.25rem' }}>
            "I don't believe healthy eating is a sacrifice. I believe it's a skill — and broccoli is the
            easiest one to learn anywhere in the world. That's the whole point of this site."
          </p>
          <p style={{ fontSize: '0.95rem', color: '#6B7280', marginTop: '0.5rem', marginLeft: '1.5rem' }}>— Elena Ignacio, founder of BroccoliPedia</p>

        </section>
      </main>
    </>
  )
}
