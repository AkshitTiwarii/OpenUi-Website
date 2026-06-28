import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <div className="wrap cta-wrap">
        <h2 className="display cta-title">
          Ready to Automate Your Desktop?
        </h2>
        <p className="cta-desc">
          Combine local voice transcription, visual coordinate analysis, and robust Electron sandboxing
          to build tools that work natively alongside you.
        </p>
        <div className="cta-buttons">
          <Link to="/" className="btn-white">
            Get Started Free
          </Link>
          <Link to="/pricing" className="btn-ghost">
            View Pricing
          </Link>
        </div>
        <p className="cta-footnote font-mono">
          Free tier includes 20 messages / day · No credit card required.
        </p>
      </div>
    </section>
  )
}
