import { useState } from 'react'

export default function SecurityDiagram() {
  const [permissionState, setPermissionState] = useState('idle') // 'idle', 'approved', 'denied'

  return (
    <div className="security-diagram-widget">
      <div className="security-header">
        <p className="widget-label font-mono">Permission Gate</p>
        <span className="dot-pulse-green"></span>
      </div>

      <div className="security-interactive-box">
        {permissionState === 'idle' && (
          <div className="security-prompt-card">
            <p className="prompt-title font-mono">🚨 ACCESS CONTROL REQUEST</p>
            <p className="prompt-desc">
              OpenUI is requesting authorization to write changes to local file:
              <br />
              <code className="prompt-code font-mono">/src/components/Button.jsx</code>
            </p>
            <div className="prompt-actions">
              <button
                onClick={() => setPermissionState('approved')}
                className="btn-white security-action-btn"
                style={{ padding: '8px 16px', fontSize: '11px' }}
              >
                Approve Write
              </button>
              <button
                onClick={() => setPermissionState('denied')}
                className="btn-ghost security-action-btn border-red"
                style={{ padding: '8px 16px', fontSize: '11px' }}
              >
                Deny Access
              </button>
            </div>
          </div>
        )}

        {permissionState === 'approved' && (
          <div className="security-response-card approved">
            <p className="status-title">✔ ACCESS GRANTED</p>
            <p className="status-desc font-mono">
              [IPC LOG]: Validated signature signature_4f8a3.<br />
              [FILE LOG]: Write completed successfully (148 bytes written).
            </p>
            <button
              onClick={() => setPermissionState('idle')}
              className="btn-ghost reset-btn font-mono"
            >
              Reset Simulation
            </button>
          </div>
        )}

        {permissionState === 'denied' && (
          <div className="security-response-card denied">
            <p className="status-title">❌ ACCESS DENIED</p>
            <p className="status-desc font-mono">
              [IPC LOG]: Request rejected by user.<br />
              [FILE LOG]: Aborted write transaction. Sandbox protected.
            </p>
            <button
              onClick={() => setPermissionState('idle')}
              className="btn-ghost reset-btn font-mono"
            >
              Reset Simulation
            </button>
          </div>
        )}
      </div>

      <div className="security-principles font-mono">
        <div className="principle-item">🔒 Context Isolation Enabled</div>
        <div className="principle-item">🛡 Sandboxed Electron Main/Renderer</div>
        <div className="principle-item">🔑 OS Keychain API Credentials</div>
      </div>
    </div>
  )
}
