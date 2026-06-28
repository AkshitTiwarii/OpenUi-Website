import { useState, useEffect, useRef } from 'react'

const terminalData = {
  'streaming-responses': [
    { text: '$ openui chat --stream', delay: 200 },
    { text: 'Connecting to Claude Sonnet...', delay: 600, type: 'info' },
    { text: 'Streaming response stream_id_4f92c:', delay: 400, type: 'info' },
    { text: '┌────────────────────────────────────────────────────────┐', delay: 100, type: 'subdued' },
    { text: '│ The key principles of local-first software are:        │', delay: 200 },
    { text: '│ 1. No server required to run. Data lives on device.    │', delay: 300 },
    { text: '│ 2. Offline capability. Works seamlessly without web.   │', delay: 300 },
    { text: '│ 3. Multi-device sync is secure & end-to-end encrypted. │', delay: 300 },
    { text: '└────────────────────────────────────────────────────────┘', delay: 100, type: 'subdued' },
    { text: '✔ Finished streaming in 1.48s (128 tokens, 86 tok/s)', delay: 400, type: 'success' }
  ],
  'file-search': [
    { text: '$ openui find --type pdf --query "machine learning"', delay: 200 },
    { text: '🔍 Indexing Spotlight database...', delay: 500, type: 'info' },
    { text: 'Found 3 matching files:', delay: 300, type: 'info' },
    { text: '  [1] ~/Downloads/ML_Paper_2026.pdf (12.4 MB)', delay: 200, type: 'success' },
    { text: '  [2] ~/Documents/Classes/Intro_To_ML.pdf (4.8 MB)', delay: 200, type: 'success' },
    { text: '  [3] ~/Desktop/ML_CheatSheet.pdf (1.2 MB)', delay: 200, type: 'success' },
    { text: 'Copying [1] path to clipboard...', delay: 400, type: 'info' },
    { text: '✔ Clipboard: "/Users/you/Downloads/ML_Paper_2026.pdf"', delay: 300, type: 'success' }
  ],
  'autonomous-coding': [
    { text: '$ openui code --task "add checkmark to button"', delay: 200 },
    { text: '📖 Reading task list: [x] completed, [ ] pending...', delay: 600, type: 'info' },
    { text: '⚡ Initializing workspace sandbox...', delay: 400, type: 'info' },
    { text: '✏ Writing code changes in Button.jsx...', delay: 700, type: 'info' },
    { text: '🧪 Running test suite: npm run test', delay: 500, type: 'info' },
    { text: '❌ FAIL: Button.test.jsx: L34: Checkmark icon not found', delay: 600, type: 'error' },
    { text: '🔧 Auto-fixing: importing Checkmark icon in Button.jsx...', delay: 800, type: 'info' },
    { text: '🧪 Retrying test suite: npm run test', delay: 500, type: 'info' },
    { text: '✔ PASS: Button.test.jsx (10 passed, 0 failed, 12ms)', delay: 400, type: 'success' },
    { text: '✔ Code changes merged cleanly. Turn loop finished.', delay: 300, type: 'success' }
  ],
  'permission-system': [
    { text: '$ openui run --macro "cleanup-temp-files"', delay: 200 },
    { text: '⚡ Running clean-up macro: rm -rf ./tmp/*', delay: 400, type: 'info' },
    { text: '🚨 SECURITY GATE: File system write access requested', delay: 500, type: 'warn' },
    { text: '👉 User action required: Approve or Deny popup...', delay: 300, type: 'warn' },
    { text: '[SYSTEM LOG]: User clicked [APPROVE]', delay: 1000, type: 'success' },
    { text: '✔ Access granted. Executing command...', delay: 200, type: 'info' },
    { text: '✔ Removed 14 temporary files (84 KB saved)', delay: 300, type: 'success' }
  ],
  'apis': [
    { text: 'curl -X POST https://api.openui.dev/v1/chat \\', delay: 200 },
    { text: '  -H "Authorization: Bearer OPENUI_KEY" \\', delay: 100 },
    { text: '  -H "Content-Type: application/json" \\', delay: 100 },
    { text: '  -d \'{"message": "Deploy workspace", "tools": ["git"]}\'', delay: 200 },
    { text: '', delay: 100 },
    { text: 'HTTP/1.1 200 OK', delay: 400, type: 'info' },
    { text: '{', delay: 100, type: 'subdued' },
    { text: '  "status": "success",', delay: 100, type: 'subdued' },
    { text: '  "task_id": "task_8a3d4f",', delay: 100, type: 'subdued' },
    { text: '  "execution_log": "Executing: git push origin production"', delay: 200, type: 'subdued' },
    { text: '}', delay: 100, type: 'subdued' }
  ]
}

export default function TerminalVisual({ type }) {
  const [lines, setLines] = useState([])
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef(null)

  const steps = terminalData[type] || []

  useEffect(() => {
    setLines([])
    setActiveStep(0)
  }, [type])

  useEffect(() => {
    if (activeStep >= steps.length) {
      // Loop sequence after 6 seconds of completion
      const timer = setTimeout(() => {
        setLines([])
        setActiveStep(0)
      }, 6000)
      return () => clearTimeout(timer)
    }

    const currentStep = steps[activeStep]
    const timer = setTimeout(() => {
      setLines((prev) => [...prev, currentStep])
      setActiveStep((prev) => prev + 1)
    }, currentStep.delay)

    return () => clearTimeout(timer)
  }, [activeStep, steps])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className="terminal-widget">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot-red"></span>
          <span className="dot-yellow"></span>
          <span className="dot-green"></span>
        </div>
        <span className="terminal-title">openui-shell — bash</span>
      </div>
      <div className="terminal-body" ref={containerRef}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`terminal-line ${line.type || ''}`}
          >
            {line.text}
          </div>
        ))}
        {activeStep < steps.length && (
          <span className="terminal-cursor">█</span>
        )}
      </div>
    </div>
  )
}
