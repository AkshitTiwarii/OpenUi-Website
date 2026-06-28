import { useState, useEffect, useRef } from 'react'

const commands = [
  {
    cmd: 'openui review-pr',
    logs: [
      { text: '✔ Repository loaded (Satyabrat2005/Openui)', type: 'success' },
      { text: '✔ Reading changed files (src/App.jsx, src/main.jsx)', type: 'info' },
      { text: '⚡ AI reviewing diffs with Claude Sonnet...', type: 'info' },
      { text: '✔ 3 suggestions generated (Memory leak fixed, imports sorted)', type: 'success' },
      { text: '✔ Posted review successfully on GitHub PR #42', type: 'success' }
    ]
  },
  {
    cmd: 'openui code --task "write calendar check macro"',
    logs: [
      { text: '📖 Reading macros registry...', type: 'info' },
      { text: '⚡ Creating temporary sandbox workspace...', type: 'info' },
      { text: '✏ Writing macro script in macros/calendar.py', type: 'info' },
      { text: '🧪 Running test suite...', type: 'info' },
      { text: '❌ FAIL: ModuleNotFoundError: No module named \'win32com\'', type: 'error' },
      { text: '🔧 Auto-fixing dependencies...', type: 'warn' },
      { text: '🧪 Retrying test suite...', type: 'info' },
      { text: '✔ PASS: 12 tests passed, 0 failures', type: 'success' },
      { text: '✔ Macro merged successfully into OpenUI database', type: 'success' }
    ]
  }
]

export default function TerminalPreview() {
  const [activeCommandIdx, setActiveCommandIdx] = useState(0)
  const [typedCommand, setTypedCommand] = useState('')
  const [terminalLogs, setTerminalLogs] = useState([])
  const [logIdx, setLogIdx] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const bodyRef = useRef(null)

  const activeCommandObj = commands[activeCommandIdx]

  // Typing animation
  useEffect(() => {
    setTypedCommand('')
    setTerminalLogs([])
    setLogIdx(0)
    setIsTyping(true)

    let charIdx = 0
    const fullCmd = `$ ${activeCommandObj.cmd}`

    const typingInterval = setInterval(() => {
      if (charIdx < fullCmd.length) {
        setTypedCommand(fullCmd.slice(0, charIdx + 1))
        charIdx++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [activeCommandIdx, activeCommandObj])

  // Log outputs animation after command typed
  useEffect(() => {
    if (isTyping) return

    if (logIdx < activeCommandObj.logs.length) {
      const timer = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, activeCommandObj.logs[logIdx]])
        setLogIdx((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      // Switch commands after some delay
      const loopTimer = setTimeout(() => {
        setActiveCommandIdx((prev) => (prev + 1) % commands.length)
      }, 5000)
      return () => clearTimeout(loopTimer)
    }
  }, [isTyping, logIdx, activeCommandObj, activeCommandIdx])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [terminalLogs, typedCommand])

  return (
    <div className="terminal-preview-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot-red"></span>
          <span className="dot-yellow"></span>
          <span className="dot-green"></span>
        </div>
        <span className="terminal-title">bash — openui</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        <div className="terminal-command-line">
          <span>{typedCommand}</span>
          {isTyping && <span className="terminal-cursor">█</span>}
        </div>
        <div className="terminal-logs-container">
          {terminalLogs.map((log, i) => (
            <div key={i} className={`terminal-log-row ${log.type || ''}`}>
              {log.text}
            </div>
          ))}
          {!isTyping && logIdx < activeCommandObj.logs.length && (
            <span className="terminal-cursor">█</span>
          )}
        </div>
      </div>
    </div>
  )
}
