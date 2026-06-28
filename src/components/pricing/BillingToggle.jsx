export default function BillingToggle({ billingPeriod, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
      <div className="billing-toggle" role="radiogroup" aria-label="Billing period">
        <button
          role="radio"
          aria-checked={billingPeriod === 'monthly'}
          className={billingPeriod === 'monthly' ? 'active' : ''}
          onClick={() => onToggle('monthly')}
        >
          Monthly
        </button>
        <button
          role="radio"
          aria-checked={billingPeriod === 'yearly'}
          className={billingPeriod === 'yearly' ? 'active' : ''}
          onClick={() => onToggle('yearly')}
        >
          Yearly
        </button>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.08em',
          color: 'var(--color-lime)',
          background: 'rgba(200, 245, 98, 0.1)',
          border: '1px solid rgba(200, 245, 98, 0.2)',
          padding: '4px 10px',
          textTransform: 'uppercase',
        }}
      >
        Save 15%
      </span>
    </div>
  )
}
