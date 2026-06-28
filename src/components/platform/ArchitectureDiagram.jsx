import { useState } from 'react'

export default function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodes = [
    { id: 'main', name: 'Main Process (Node.js)', desc: 'Direct OS access, Whisper, OCR execution & AI routing' },
    { id: 'bridge', name: 'IPC Preload Bridge', desc: 'Secure message validation & context isolation gateway' },
    { id: 'renderer', name: 'React UI Renderer', desc: 'Renders overlays, waveforms, chat interface & settings' }
  ]

  return (
    <div className="architecture-interactive-widget">
      <p className="widget-label font-mono">Process Stack Architecture</p>
      <div className="arch-layers-wrap">
        {nodes.map((node, i) => (
          <div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`arch-layer-node ${hoveredNode === node.id ? 'active' : ''}`}
          >
            <div className="node-num font-mono">0{i + 1}</div>
            <div className="node-details">
              <p className="node-title">{node.name}</p>
              <p className="node-description">{node.desc}</p>
            </div>
            {i < nodes.length - 1 && (
              <div className="arch-connector-line">
                <span className="dot-glowing-flow"></span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="stack-integration-badges font-mono">
        <span className="badge">macOS AppleScript</span>
        <span className="badge">Windows PowerShell</span>
        <span className="badge">Ollama Integration</span>
      </div>
    </div>
  )
}
