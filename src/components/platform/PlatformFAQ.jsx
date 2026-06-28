import { useState } from 'react'
import { platformFaqItems } from '../../data/platformData'

export default function PlatformFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <p className="label" style={{ marginBottom: '14px' }}>FAQ</p>
      <h2 className="display platform-section-title" style={{ marginBottom: '40px' }}>
        Frequently asked questions
      </h2>
      <div>
        {platformFaqItems.map((item, index) => (
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
  )
}
