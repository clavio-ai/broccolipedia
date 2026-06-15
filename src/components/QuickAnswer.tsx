export function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="quick-answer"
      style={{
        background: '#DCFCE7',
        border: '2px solid #22C55E',
        borderLeft: '4px solid #15803D',
        borderRadius: '0.75rem',
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.05rem',
        lineHeight: '1.6',
        color: '#14532D',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#166534' }}>
        Quick Answer
      </div>
      {children}
    </div>
  )
}
