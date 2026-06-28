export default function ContactSection() {
  return (
    <div className="legal-contact-section">
      <div className="contact-box">
        <h3 className="display contact-title">Questions?</h3>
        <p className="contact-desc">
          If you have questions regarding our Privacy Policy or Terms of Service,
          please contact our legal team directly. We will review your inquiry and get back to you shortly.
        </p>
        <div className="contact-details font-mono">
          <a href="mailto:legal@openui.ai" className="contact-email">
            📩 legal@openui.ai
          </a>
        </div>
      </div>
    </div>
  )
}
