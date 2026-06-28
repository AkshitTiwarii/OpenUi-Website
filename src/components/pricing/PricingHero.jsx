import BillingToggle from './BillingToggle'

export default function PricingHero({ billingPeriod, onToggle }) {
  return (
    <section style={{ padding: '88px 0 56px', textAlign: 'center' }}>
      <div className="wrap">
        <p className="label" style={{ marginBottom: '24px' }}>Pricing</p>
        <h1
          className="display"
          style={{
            fontSize: 'clamp(38px, 5.5vw, 64px)',
            color: 'var(--color-paper)',
            marginBottom: '20px',
          }}
        >
          Pricing That Matches{' '}
          <em style={{ color: 'var(--color-lime)', fontStyle: 'italic' }}>The Work</em>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-muted)',
            lineHeight: 1.75,
            maxWidth: '520px',
            margin: '0 auto 40px',
          }}
        >
          Choose the plan that fits your workflow today and scale whenever you're ready.
        </p>
        <BillingToggle billingPeriod={billingPeriod} onToggle={onToggle} />
      </div>
    </section>
  )
}
