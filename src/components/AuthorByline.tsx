import Image from 'next/image'
import Link from 'next/link'

export default function AuthorByline({ datePublished = '2026-06-15' }: { datePublished?: string }) {
  const formatted = new Date(datePublished).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
      padding: '0.85rem 1rem',
      background: '#F0FDF4',
      border: '1px solid #BBF7D0',
      borderRadius: '0.75rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap',
    }}>
      {/* Avatar */}
      <Link href="/about" style={{ flexShrink: 0, display: 'block' }}>
        <div style={{ position: 'relative', width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', border: '2px solid #15803D' }}>
          <Image
            src="/images/elena-ignacio-broccolipedia.png"
            alt="Elena Ignacio — BroccoliPedia author"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="48px"
          />
        </div>
      </Link>

      {/* Name + meta */}
      <div style={{ flex: 1, minWidth: 160 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <Link
            href="/about"
            style={{ fontWeight: 700, fontSize: '0.9rem', color: '#14532D', textDecoration: 'none' }}
          >
            Elena Ignacio
          </Link>
          <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>·</span>
          <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{formatted}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.75rem', color: '#4B7C59', lineHeight: 1.4 }}>
          Travel mom · nutrition researcher · broccoli obsessive
        </p>
      </div>

      {/* Social icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <a
          href="https://www.tiktok.com/@elenasainda"
          target="_blank"
          rel="noopener noreferrer me"
          title="Elena sa Inda on TikTok"
          style={{
            width: 30, height: 30, borderRadius: '50%', background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@adelevlogs"
          target="_blank"
          rel="noopener noreferrer me"
          title="Adele Vlogs on YouTube"
          style={{
            width: 30, height: 30, borderRadius: '50%', background: '#FF0000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/elena.ignacio"
          target="_blank"
          rel="noopener noreferrer me"
          title="Elena Ignacio on Facebook"
          style={{
            width: 30, height: 30, borderRadius: '50%', background: '#1877F2',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
