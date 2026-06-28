import { useState, useEffect } from 'react'

export default function IllustrationVisual({ type }) {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => !p)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (type === 'push-to-talk' || type === 'voice-conversations') {
    return (
      <div className="illustration-widget">
        <div className="waveform-box">
          <div className="waveform-bars">
            <span className="bar animated" style={{ height: '30px', animationDelay: '0.1s' }}></span>
            <span className="bar animated" style={{ height: '55px', animationDelay: '0.3s' }}></span>
            <span className="bar animated" style={{ height: '75px', animationDelay: '0.5s' }}></span>
            <span className="bar animated" style={{ height: '40px', animationDelay: '0.2s' }}></span>
            <span className="bar animated" style={{ height: '85px', animationDelay: '0.4s' }}></span>
            <span className="bar animated" style={{ height: '60px', animationDelay: '0.6s' }}></span>
            <span className="bar animated" style={{ height: '25px', animationDelay: '0.1s' }}></span>
          </div>
          <p className="voice-text">Listening for speech...</p>
        </div>
      </div>
    )
  }

  if (type === 'what-is-openui') {
    return (
      <div className="illustration-widget">
        <div className="menu-bar-mockup">
          <div className="menu-bar-header">
            <span className="menu-bar-dot"></span>
            <span className="menu-bar-app-name">OpenUI</span>
            <span className="menu-bar-time">10:56 AM</span>
          </div>
          <div className="menu-bar-dropdown">
            <div className="assistant-input-box">
              <span className="assistant-dot"></span>
              <span className="assistant-placeholder">How can I help you today?</span>
            </div>
            <div className="dropdown-options">
              <div className="dropdown-option">⚡ Review code change</div>
              <div className="dropdown-option">📅 Calendar sync</div>
              <div className="dropdown-option">💾 Local Ollama connection</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'cloud-first') {
    return (
      <div className="illustration-widget">
        <svg viewBox="0 0 200 200" className="svg-illustration">
          <path d="M 60 120 C 40 120, 30 100, 45 85 C 35 60, 70 45, 90 55 C 110 35, 150 45, 150 70 C 170 75, 175 100, 155 120 Z" fill="none" stroke="var(--color-wire)" strokeWidth="2" />
          <path d="M 60 120 Q 90 85 155 120" stroke="var(--color-lime)" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="100" cy="95" r="15" fill="var(--color-dim)" stroke="var(--color-lime)" strokeWidth="1.5" />
          <path d="M 96 92 H 104 V 102 H 96 Z M 100 87 V 92" stroke="var(--color-lime)" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
    )
  }

  if (type === 'privacy' || type === 'cloud-security') {
    return (
      <div className="illustration-widget">
        <div className="secure-shield-card">
          <div className={`shield-icon ${pulse ? 'pulse-lime' : ''}`}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="shield-title">OS Context Isolation</p>
          <p className="shield-desc">Sandboxed Renderer · Strict IPC validation · Encrypted credentials</p>
        </div>
      </div>
    )
  }

  if (type === 'authentication') {
    return (
      <div className="illustration-widget">
        <div className="auth-form-mockup">
          <p className="auth-title">Log in to OpenUI</p>
          <button className="auth-btn-oauth">
            <span className="oauth-icon">G</span> Continue with Google
          </button>
          <button className="auth-btn-oauth">
            <span className="oauth-icon">🐙</span> Continue with GitHub
          </button>
          <div className="auth-divider">or email</div>
          <input className="field" placeholder="name@company.com" disabled />
          <button className="btn-white" style={{ justifyContent: 'center' }}>Send Magic Link</button>
        </div>
      </div>
    )
  }

  return null
}
