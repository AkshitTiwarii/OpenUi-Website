import { Link } from 'react-router-dom'

export default function PricingCTA() {
  return (
    <section style={{ padding: '88px 0', textAlign: 'center' }}>
      <div className="wrap">
        <h2
          className="display"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            color: 'var(--color-paper)',
            marginBottom: '18px',
          }}
        >
          Ready to build with{' '}
          <em style={{ color: 'var(--color-lime)', fontStyle: 'italic' }}>OpenUI?</em>
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-muted)',
            lineHeight: 1.75,
            maxWidth: '460px',
            margin: '0 auto 36px',
          }}
        >
          Start for free today and upgrade whenever your workflow grows.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-white">
            Get Started Free
          </Link>
          <a href="mailto:sales@openui.com" className="btn-ghost">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
}
