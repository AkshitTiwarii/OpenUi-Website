import { useState } from 'react'

const files = [
  {
    name: 'preload.js',
    lang: 'javascript',
    code: `// Preload bridge context isolation setup
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('openui', {
  chat: {
    send: (msg) => ipcRenderer.invoke('ai:chat', msg),
    stream: (callback) => ipcRenderer.on('ai:stream', callback)
  },
  system: {
    click: (x, y) => ipcRenderer.invoke('sys:click', { x, y }),
    type: (text) => ipcRenderer.invoke('sys:type', text),
    openApp: (app) => ipcRenderer.invoke('sys:open', app)
  }
});`
  },
  {
    name: 'macros.py',
    lang: 'python',
    code: `# Custom desktop automation macro registry
import pyautogui
import subprocess

def open_calendar_event(title, time_str):
    # macOS AppleScript or Windows PowerShell execution
    applescript = f'''
    tell application "Calendar"
        tell calendar "Work"
            make new event with properties {{summary:"{title}", start date:date "{time_str}"}}
        end tell
    end tell
    '''
    subprocess.run(["osascript", "-e", applescript])
    print(f"✔ Created calendar event: {title}")`
  }
]

export default function CodePreview() {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [copied, setCopied] = useState(false)

  const activeFile = files[activeTabIdx]

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(activeFile.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="code-editor-mockup">
      {/* Tab bar header */}
      <div className="code-editor-header">
        <div className="tabs">
          {files.map((file, idx) => (
            <button
              key={file.name}
              onClick={() => setActiveTabIdx(idx)}
              className={`tab-item ${idx === activeTabIdx ? 'active' : ''}`}
            >
              <span className="file-icon">📄</span>
              {file.name}
            </button>
          ))}
        </div>
        <button className="copy-btn font-mono" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Editor Body with line numbers */}
      <div className="code-editor-body">
        <div className="line-numbers font-mono">
          {activeFile.code.split('\n').map((_, idx) => (
            <div key={idx} className="line-num">{idx + 1}</div>
          ))}
        </div>
        <pre className="code-content font-mono">
          <code>{activeFile.code}</code>
        </pre>
      </div>
    </div>
  )
}
