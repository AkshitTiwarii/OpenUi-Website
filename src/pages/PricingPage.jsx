import { useState } from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingGrid from '../components/pricing/PricingGrid'
import PricingFAQ from '../components/pricing/PricingFAQ'
import PricingCTA from '../components/pricing/PricingCTA'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <>
      <PricingHero billingPeriod={billingPeriod} onToggle={setBillingPeriod} />
      <hr className="rule" />
      <PricingGrid billingPeriod={billingPeriod} />
      <hr className="rule" />
      <PricingFAQ />
      <hr className="rule" />
      <PricingCTA />
      <hr className="rule" />
    </>
  )
}
