import { Link } from 'react-router-dom'

export default function PlatformHero() {
  return (
    <section className="hero-section">
      {/* Background glow effects */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="wrap hero-wrap">
        {/* Status Indicator */}
        <div className="status-badge" style={{ animationDelay: '0.1s' }}>
          <span className="dot-pulse-green"></span>
          <span className="status-text">All Systems Operational (v0.1.0)</span>
        </div>

        {/* Large premium headline */}
        <h1 className="hero-title display" style={{ animationDelay: '0.2s' }}>
          An AI Agent That<br />
          Operates Your <em className="italic-lime">Desktop.</em>
        </h1>

        {/* Short product description */}
        <p className="hero-subtitle" style={{ animationDelay: '0.3s' }}>
          OpenUI combines local speech-to-text, real-time computer vision, and system-level automation
          to execute complex workflows right on your machine.
        </p>

        {/* Call to action buttons */}
        <div className="hero-actions" style={{ animationDelay: '0.4s' }}>
          <Link to="/" className="btn-white">
            Get Started Free
          </Link>
          <Link to="/pricing" className="btn-ghost">
            View Pricing
          </Link>
        </div>

        {/* Floating Feature Badges */}
        <div className="floating-badges" style={{ animationDelay: '0.5s' }}>
          <span className="badge-item">
            <span className="badge-dot"></span> Local Whisper STT
          </span>
          <span className="badge-item">
            <span className="badge-dot"></span> Bounding Box Vision
          </span>
          <span className="badge-item">
            <span className="badge-dot"></span> Secure IPC Sandbox
          </span>
          <span className="badge-item">
            <span className="badge-dot"></span> Script Automations
          </span>
        </div>
      </div>
    </section>
  )
}
