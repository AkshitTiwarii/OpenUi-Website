export default function FloatingCardsVisual({ type }) {
  if (type === 'why-openui') {
    return (
      <div className="floating-cards-widget">
        <div className="floating-card c1">
          <p className="card-lbl">VOICE</p>
          <p className="card-val">Local Whisper</p>
        </div>
        <div className="floating-card c2">
          <p className="card-lbl">VISION</p>
          <p className="card-val">Coordinate Scan</p>
        </div>
        <div className="floating-card c3">
          <p className="card-lbl">MEMORY</p>
          <p className="card-val">Context Timelines</p>
        </div>
        <div className="floating-card c4">
          <p className="card-lbl">AUTOMATION</p>
          <p className="card-val">PowerShell/AppleScript</p>
        </div>
      </div>
    )
  }

  if (type === 'conversation-memory' || type === 'shared-memory') {
    return (
      <div className="floating-cards-widget">
        <div className="floating-card c1">
          <p className="card-lbl">API Key Storage</p>
          <p className="card-val">Secure OS Keychain</p>
        </div>
        <div className="floating-card c2">
          <p className="card-lbl">Session Context</p>
          <p className="card-val">120K tokens preserved</p>
        </div>
        <div className="floating-card c3">
          <p className="card-lbl">Team Prompts</p>
          <p className="card-val">Unified Prompt Library</p>
        </div>
      </div>
    )
  }

  if (type === 'local-processing') {
    return (
      <div className="floating-cards-widget">
        <div className="floating-card c1">
          <p className="card-lbl">Inference</p>
          <p className="card-val">Local Ollama LLM</p>
        </div>
        <div className="floating-card c2">
          <p className="card-lbl">OCR</p>
          <p className="card-val">Tesseract OCR engine</p>
        </div>
        <div className="floating-card c3">
          <p className="card-lbl">Speech-to-Text</p>
          <p className="card-val">Whisper CPP (Mac/Win)</p>
        </div>
      </div>
    )
  }

  return null
}
