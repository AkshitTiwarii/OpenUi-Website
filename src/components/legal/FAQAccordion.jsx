import { useState } from 'react'

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(idx) {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="legal-faq-section">
      <h2 className="display faq-section-title">{title}</h2>
      <div className="faq-accordion-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-accordion-item">
            <button
              onClick={() => toggle(idx)}
              className="faq-accordion-trigger"
              aria-expanded={openIndex === idx}
            >
              <span className="question">{faq.question}</span>
              <span className={`icon ${openIndex === idx ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-accordion-answer ${openIndex === idx ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
