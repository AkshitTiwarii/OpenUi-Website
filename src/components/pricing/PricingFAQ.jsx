import { useState } from 'react'
import { faqItems } from '../../data/pricingPlans'

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{ padding: '88px 0' }}>
      <div className="wrap" style={{ maxWidth: '740px' }}>
        <p className="label" style={{ marginBottom: '18px' }}>FAQ</p>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            lineHeight: 1.1,
            marginBottom: '48px',
          }}
        >
          Frequently asked questions
        </h2>

        <div>
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-trigger"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={`faq-icon${openIndex === index ? ' open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer${openIndex === index ? ' open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
