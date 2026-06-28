import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="dot" style={{ width: '6px', height: '6px' }}></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-muted)' }}>OpenUI</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-faint)' }}>© 2026</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-faint)' }}>MIT License</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-faint)' }}>v0.1.0</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link to="/privacy" className="f-link">Privacy</Link>
            <Link to="/terms" className="f-link">Terms</Link>
            <a href="https://github.com/Satyabrat2005/Openui" className="f-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://github.com/Satyabrat2005/Openui/releases" className="f-link" target="_blank" rel="noopener noreferrer">Releases</a>
            <Link to="/pricing" className="f-link">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
