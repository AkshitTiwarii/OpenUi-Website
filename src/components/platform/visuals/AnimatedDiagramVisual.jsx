import { useState, useEffect } from 'react'

export default function AnimatedDiagramVisual({ type }) {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  if (type === 'model-routing') {
    return (
      <div className="diagram-widget">
        <svg viewBox="0 0 320 220" className="svg-diagram">
          {/* Gradients */}
          <defs>
            <linearGradient id="lime-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-lime)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-lime)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="wire-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-paper)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-wire)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          <path d="M 160 40 L 160 90" stroke="var(--color-wire)" strokeWidth="1.5" strokeDasharray="4,4" />
          <path d="M 160 110 L 60 160" stroke={pulse === 1 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth={pulse === 1 ? '2' : '1.5'} strokeDasharray={pulse === 1 ? '0' : '4,4'} transition="stroke 0.3s" />
          <path d="M 160 110 L 160 160" stroke={pulse === 2 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth={pulse === 2 ? '2' : '1.5'} strokeDasharray={pulse === 2 ? '0' : '4,4'} transition="stroke 0.3s" />
          <path d="M 160 110 L 260 160" stroke={pulse === 3 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth={pulse === 3 ? '2' : '1.5'} strokeDasharray={pulse === 3 ? '0' : '4,4'} transition="stroke 0.3s" />

          {/* User Node */}
          <rect x="110" y="15" width="100" height="30" rx="3" fill="var(--color-dim)" stroke="var(--color-wire)" />
          <text x="160" y="34" fill="var(--color-paper)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">USER PROMPT</text>

          {/* Router Node */}
          <circle cx="160" cy="100" r="18" fill="var(--color-dim)" stroke={pulse > 0 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth="1.5" className={pulse > 0 ? 'pulse-border' : ''} />
          <text x="160" y="103" fill="var(--color-paper)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">ROUTER</text>

          {/* Model Nodes */}
          <g transform="translate(10, 155)">
            <rect x="0" y="0" width="80" height="40" rx="3" fill="var(--color-dim)" stroke={pulse === 1 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth="1.5" />
            <text x="40" y="18" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Claude</text>
            <text x="40" y="30" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Complex task</text>
          </g>

          <g transform="translate(120, 155)">
            <rect x="0" y="0" width="80" height="40" rx="3" fill="var(--color-dim)" stroke={pulse === 2 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth="1.5" />
            <text x="40" y="18" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">GPT-4o</text>
            <text x="40" y="30" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Cloud reasoning</text>
          </g>

          <g transform="translate(230, 155)">
            <rect x="0" y="0" width="80" height="40" rx="3" fill="var(--color-dim)" stroke={pulse === 3 ? 'var(--color-lime)' : 'var(--color-wire)'} strokeWidth="1.5" />
            <text x="40" y="18" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">Ollama</text>
            <text x="40" y="30" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Local offline</text>
          </g>
        </svg>
      </div>
    )
  }

  if (type === 'electron-architecture' || type === 'architecture') {
    return (
      <div className="diagram-widget">
        <svg viewBox="0 0 320 220" className="svg-diagram">
          <path d="M 160 35 L 160 85" stroke="var(--color-wire)" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 160 115 L 160 165" stroke="var(--color-wire)" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Main Process */}
          <g transform="translate(60, 15)">
            <rect x="0" y="0" width="200" height="36" rx="2" fill="var(--color-dim)" stroke="var(--color-wire)" />
            <text x="100" y="18" fill="var(--color-paper)" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">MAIN PROCESS (Node.js)</text>
            <text x="100" y="29" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">OS Control · Local AI · Filesystem</text>
          </g>

          {/* Secure Bridge */}
          <g transform="translate(80, 85)">
            <rect x="0" y="0" width="160" height="30" rx="2" fill="var(--color-dim)" stroke="var(--color-lime)" strokeWidth="1.2" />
            <text x="80" y="16" fill="var(--color-lime)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">PRELOAD SECURE IPC</text>
            <text x="80" y="25" fill="var(--color-muted)" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">Isolated Context Bridge</text>
          </g>

          {/* Renderer Process */}
          <g transform="translate(60, 165)">
            <rect x="0" y="0" width="200" height="36" rx="2" fill="var(--color-dim)" stroke="var(--color-wire)" />
            <text x="100" y="18" fill="var(--color-paper)" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">RENDERER PROCESS (React)</text>
            <text x="100" y="29" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">User Interface · Chat · Waveforms</text>
          </g>
        </svg>
      </div>
    )
  }

  if (type === 'mcp-integration') {
    return (
      <div className="diagram-widget">
        <svg viewBox="0 0 320 220" className="svg-diagram">
          <path d="M 80 110 L 240 110" stroke="var(--color-wire)" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx={80 + pulse * 40} cy="110" r="4" fill="var(--color-lime)" />

          <g transform="translate(20, 85)">
            <rect x="0" y="0" width="80" height="50" rx="3" fill="var(--color-dim)" stroke="var(--color-wire)" />
            <text x="40" y="22" fill="var(--color-paper)" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">OpenUI</text>
            <text x="40" y="38" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Client</text>
          </g>

          <g transform="translate(220, 85)">
            <rect x="0" y="0" width="80" height="50" rx="3" fill="var(--color-dim)" stroke="var(--color-lime)" strokeWidth="1.5" />
            <text x="40" y="22" fill="var(--color-paper)" fontSize="10" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">MCP Host</text>
            <text x="40" y="38" fill="var(--color-lime)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Tool Registry</text>
          </g>
        </svg>
      </div>
    )
  }

  if (type === 'screen-understanding' || type === 'vision' || type === 'claude-vision') {
    return (
      <div className="diagram-widget">
        <div className="vision-scanner-mockup">
          <div className="scanner-grid">
            <span className="scanner-line"></span>
            <div className="scanned-box" style={{ top: '25%', left: '20%', width: '120px', height: '35px' }}>
              <span className="scanned-tag">Button: Download</span>
            </div>
            <div className="scanned-box" style={{ top: '55%', left: '45%', width: '160px', height: '45px' }}>
              <span className="scanned-tag">Text Field: Search</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
