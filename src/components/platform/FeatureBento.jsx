import { useState, useEffect } from 'react'

export default function FeatureBento() {
  const [isRecording, setIsRecording] = useState(false)
  const [scanStep, setScanStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScanStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bento-grid">
      {/* Box 1: Voice AI widget (Takes 2 cols on desktop) */}
      <div className="bento-item voice-widget col-span-2">
        <div className="bento-card-header">
          <p className="label">Voice AI Core</p>
          <h3 className="bento-title">Whisper & Real-time Speech Pipeline</h3>
        </div>

        <div className="voice-demo-container">
          <div className="waveform-display">
            {isRecording ? (
              <div className="bars-active">
                <span className="voice-bar bar-1"></span>
                <span className="voice-bar bar-2"></span>
                <span className="voice-bar bar-3"></span>
                <span className="voice-bar bar-4"></span>
                <span className="voice-bar bar-5"></span>
                <span className="voice-bar bar-6"></span>
                <span className="voice-bar bar-7"></span>
              </div>
            ) : (
              <div className="bars-idle">
                <span className="voice-bar-idle"></span>
                <span className="voice-bar-idle"></span>
                <span className="voice-bar-idle"></span>
              </div>
            )}
          </div>

          <div className="voice-controls">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`ptt-button ${isRecording ? 'active' : ''}`}
            >
              <span className="ptt-indicator"></span>
              {isRecording ? 'Listening (Press Space to Stop)' : 'Hold to Speak (Ctrl+Alt+O)'}
            </button>

            <div className="latency-stats">
              <div className="stat-card">
                <span className="stat-label">Model size</span>
                <span className="stat-val">Whisper Base</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Transcription</span>
                <span className="stat-val text-lime">~0.12s</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Inference location</span>
                <span className="stat-val">On-device CPU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2: Vision AI Widget */}
      <div className="bento-item vision-widget">
        <div className="bento-card-header">
          <p className="label">Vision Engine</p>
          <h3 className="bento-title">OCR & Coordinates Understanding</h3>
        </div>

        <div className="vision-demo-container">
          <div className="vision-mock-screen">
            <div className="scanner-line"></div>

            {/* Simulated Bounding Box 1 */}
            <div className={`bounding-box box-btn ${scanStep === 0 ? 'active' : ''}`} style={{ top: '25%', left: '15%', width: '90px', height: '24px' }}>
              <span className="box-tag">button</span>
            </div>

            {/* Simulated Bounding Box 2 */}
            <div className={`bounding-box box-input ${scanStep === 1 ? 'active' : ''}`} style={{ top: '50%', left: '35%', width: '130px', height: '26px' }}>
              <span className="box-tag">input_field</span>
            </div>

            {/* Simulated Bounding Box 3 */}
            <div className={`bounding-box box-header ${scanStep === 2 ? 'active' : ''}`} style={{ top: '10%', left: '10%', width: '150px', height: '20px' }}>
              <span className="box-tag">header_text</span>
            </div>
          </div>

          <div className="detected-elements-list">
            <p className="elements-title font-mono">SCANNER OUTPUT LOG</p>
            <div className="elements-rows font-mono">
              <div className={`el-row ${scanStep === 0 ? 'active' : ''}`}>[0.08s] Detected: "Get Started" Button at [150, 480]</div>
              <div className={`el-row ${scanStep === 1 ? 'active' : ''}`}>[0.15s] Detected: Input Field "Email" at [350, 520]</div>
              <div className={`el-row ${scanStep === 2 ? 'active' : ''}`}>[0.22s] Detected: Page Title "OpenUI" at [100, 240]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
