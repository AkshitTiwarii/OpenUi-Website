import { Link } from 'react-router-dom'

export default function PlatformCTA() {
  return (
    <div className="platform-cta">
      <h2 className="display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-paper)', marginBottom: '16px', textAlign: 'center' }}>
        The AI Operating System for{' '}
        <em style={{ color: 'var(--color-lime)', fontStyle: 'italic' }}>Your Desktop</em>
      </h2>
      <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto 32px', textAlign: 'center' }}>
        OpenUI combines AI, desktop automation, voice, vision, coding, design tools,
        and developer workflows into one intelligent desktop platform.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Link to="/" className="btn-white">Get Started</Link>
        <Link to="/pricing" className="btn-ghost">View Pricing</Link>
      </div>
    </div>
  )
}
