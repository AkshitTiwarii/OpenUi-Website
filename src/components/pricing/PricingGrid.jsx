import PricingCard from './PricingCard'
import { pricingPlans } from '../../data/pricingPlans'

export default function PricingGrid({ billingPeriod }) {
  return (
    <section>
      <div className="wrap">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingPeriod={billingPeriod} />
          ))}
        </div>
      </div>
    </section>
  )
}
